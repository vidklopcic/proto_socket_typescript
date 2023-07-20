import {filter, first, firstValueFrom, Subject, timeout} from 'rxjs';
import {proto} from './proto/messages';
import {SocketConnector} from './socket_connector';
import {v4 as uuidv4} from 'uuid';
import {SocketRxMessage, SocketRxMessageData, SocketTxMessage} from './socket_messages';

export class SocketApi {
    noCache: boolean = false;
    private _token = null as string | null;
    apiVersion = 1;
    logging = false;

    private _txMessageHandlers = new Map<string, Subject<SocketTxMessage<any>>>();
    private _messageHandlers = new Map<string, Subject<any>>();
    private _messageConverters = new Map<string, SocketRxMessage<any>>();

    authenticatedChanges = new Subject<boolean>();
    connection: SocketConnector;

    get authenticated(): boolean {
        return this._token !== null;
    }

    get whenAuthenticated(): Promise<null> {
        return new Promise<null>((resolve) => {
            if (this.authenticated) {
                resolve(null);
            } else {
                this.authenticatedChanges.pipe(first((v) => v)).subscribe((e) => resolve(null));
            }
        });
    }

    setAuth(token: string | null): void {
        if (this._token !== token) {
            this._token = token;
            this.authenticatedChanges.next(this.authenticated);
        }
    }

    constructor(host: string) {
        this.connection = new SocketConnector(host);
        this.connection.rx.subscribe((e: string) => this._onData(e));
        this.setMessages(proto.rxMessages);
    }

    getMessageHandler<T extends SocketRxMessage<any>>(message: T): Subject<T> {
        if (!this._messageConverters.has(message.messageType)) {
            this._messageConverters.set(message.messageType, message);
        }
        if (!this._messageHandlers.has(message.messageType)) {
            this._messageHandlers.set(message.messageType, new Subject<T>());
        }
        return this._messageHandlers.get(message.messageType) as Subject<T>;
    }

    setMessages(messages: SocketRxMessage<any>[]): void {
        for (const message of messages) {
            this._messageConverters.set(message.messageType, message);
        }
    }

    async fetch<T extends SocketRxMessage<any>>(message: SocketTxMessage<any>, result: T,
                                                {timeoutMs = 10000, waitConnected = true} = {},
    ): Promise<T> {
        if (waitConnected) {
            await this.connection.whenConnected;
        }

        const uuid = uuidv4();

        // wait for response
        firstValueFrom(
            this.getMessageHandler(result)
                .pipe(filter((e) => e.message?.uuid === uuid))
                .pipe(timeout({first: timeoutMs}))
        ).then((e) => {
            result = e;
        }).catch(() => {
            if (this.logging) {
                console.log('fetch timeout', message, result);
            }
        });

        // send message
        const response = await this.sendMessage(message, {ack: true, timeoutMs, instanceUuid: uuid, waitConnected});
        if (response.status !== SocketApiAckStatus.success) {
            throw response;
        }
        if (result.message == null) {
            throw new Error(`(${result}).message is null`);
        }

        return result;
    }

    async sendMessage(
        message: SocketTxMessage<any>,
        {ack = false, timeoutMs = 10000, waitConnected = true, instanceUuid = undefined as string | undefined} = {},
    ): Promise<SocketApiTxStatus> {
        if (waitConnected) {
            await this.connection.whenConnected;
        }
        this._txMessageHandlers.get(message.messageType)?.next(message);
        instanceUuid = instanceUuid ?? uuidv4();
        const msg = JSON.stringify({
            body: message.data,
            headers: {
                messageType: message.messageType,
                authHeader: this._token,
                eventTime: Date.now(),
                localTime: Date.now(),
                ack,
                retryCount: 0,
                apiVersion: this.apiVersion,
                uuid: instanceUuid,
            },
        });
        if (this.logging) console.log('txevent:', msg);
        try {
            this.connection.send(msg);
        } catch (e) {
            console.log('error sending', e);
            return new SocketApiTxStatus(SocketApiAckStatus.connectionError, 'Error sending the message.');
        }

        if (ack) {
            return await this._waitAck(instanceUuid, timeoutMs);
        } else {
            return new SocketApiTxStatus(SocketApiAckStatus.success, '');
        }
    }

    async _waitAck(instanceUuid: string, timeoutMs: number): Promise<SocketApiTxStatus> {
        try {
            const msg = await firstValueFrom(
                this.getMessageHandler(new proto.RxAck())
                    .pipe(filter((event) => event.proto.uuid === instanceUuid))
                    .pipe(timeout({first: timeoutMs})),
            );
            const status = msg.proto.errorMessage.length > 0 ? SocketApiAckStatus.messageError : SocketApiAckStatus.success;
            return new SocketApiTxStatus(
                status,
                msg.proto.errorMessage,
                msg.proto.asyncProgressKey.length > 0
                    ? (this.getMessageHandler(new proto.RxAsyncProgress()).pipe(
                        filter((event) => event.proto.key === msg.proto.asyncProgressKey),
                    ) as Subject<proto.RxAsyncProgress>)
                    : null,
            );
        } catch (e) {
            // timeout
            return new SocketApiTxStatus(SocketApiAckStatus.timeout, 'No response from server.');
        }
    }

    _onData(event: string): void {
        if (this.logging) console.log('rxevent:', event);
        const messageData = new SocketRxMessageData(event);
        const message = this._messageConverters.get(messageData.messageType)?.fromMessage(messageData);
        if (message == null) return; // todo proper logging
        this._messageHandlers.get(messageData.messageType)?.next(message);
    }
}

export enum SocketApiAckStatus {
    success,
    connectionError,
    timeout,
    messageError,
}

export class SocketApiTxStatus {
    status: SocketApiAckStatus;
    errorMessage: string | null;
    asyncProgress: Subject<proto.RxAsyncProgress> | null;
    _asyncResult: SocketApiTxStatus | null = null;

    isAsync(): boolean {
        return this.asyncProgress !== null;
    }

    constructor(
        status: SocketApiAckStatus,
        errorMessage: string | null = null,
        asyncProgress: Subject<proto.RxAsyncProgress> | null = null,
    ) {
        this.status = status;
        this.errorMessage = errorMessage;
        this.asyncProgress = asyncProgress;
    }

    asyncResult({timeoutMs = null as number | null}): Promise<SocketApiTxStatus> {
        return new Promise<SocketApiTxStatus>(async (resolve, reject) => {
            if (!this.isAsync) return resolve(this);
            if (this._asyncResult !== null) return resolve(this._asyncResult);
            try {
                const msg: proto.RxAsyncProgress = await firstValueFrom(
                    this.asyncProgress!.pipe(first((event) => event.proto.done)).pipe(timeout({first: timeoutMs || 1e9})),
                );

                const msgStatus =
                    msg.proto.errorMessage.length > 0 ? SocketApiAckStatus.messageError : SocketApiAckStatus.success;
                this._asyncResult = new SocketApiTxStatus(msgStatus, msg.proto.errorMessage);
            } catch (e) {
                // timeout
                this._asyncResult = new SocketApiTxStatus(SocketApiAckStatus.timeout, 'No response from server.');
            }
            return this._asyncResult;
        });
    }
}
