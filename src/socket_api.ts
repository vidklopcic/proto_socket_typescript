import {filter, first, firstValueFrom, race, Subject, timeout} from 'rxjs';
import {proto} from './proto/messages';
import {SocketConnector} from './socket_connector';
import {v4 as uuidv4} from 'uuid';
import {SocketRxMessage, SocketRxMessageData, SocketTxMessage} from './socket_messages';

export class SocketApi {
    private _token = null as string | null;
    apiVersion = 1;
    logging = false;

    private _txMessageHandlers = new Map<string, TxMessageHandler>();
    private _messageHandlers = new Map<string, Subject<any>>();
    private _messageConverters = new Map<string, SocketRxMessage<any>>();

    authenticatedChanges = new Subject<boolean>();
    connection: SocketConnector;
    private variant: SocketApiVariant;

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

    constructor(host?: string, variant?: SocketApiVariant) {
        this.variant = variant ?? SocketApiVariant.proto;
        this.connection = new SocketConnector(host);
        this.connection.rx.subscribe((e: string) => this._onData(e));
        this.setMessages(proto.rxMessages);
    }

    formatMessageType(messageType: string): string {
        switch (this.variant) {
            case SocketApiVariant.ilol:
                if (messageType.includes('|')) {
                    return messageType.split('|')[1];
                } else {
                    return messageType;
                }
            case SocketApiVariant.proto:
            default:
                return messageType;
        }
    }

    removeTxMessageHandler<T extends SocketTxMessage<any>>(message: T): void {
        const messageType = this.formatMessageType(message.messageType);
        this._txMessageHandlers.delete(messageType);
    }

    getTxMessageHandler<T extends SocketTxMessage<any>>(message: T, props?: { intercept?: boolean }): Subject<T> {
        const messageType = this.formatMessageType(message.messageType);
        if (!this._txMessageHandlers.has(messageType)) {
            this._txMessageHandlers.set(messageType, {
                intercept: props?.intercept ?? false,
                handler: new Subject<T>(),
            });
        }
        const handler = this._txMessageHandlers.get(messageType)!;
        if ((props?.intercept ?? false) !== handler.intercept) {
            throw new Error('intercept mismatch - first remove existing handler');
        }
        return handler.handler as Subject<T>
    }

    getMessageHandler<T extends SocketRxMessage<any>>(message: T): Subject<T> {
        const messageType = this.formatMessageType(message.messageType);
        if (!this._messageConverters.has(messageType)) {
            this._messageConverters.set(messageType, message);
        }
        if (!this._messageHandlers.has(messageType)) {
            this._messageHandlers.set(messageType, new Subject<T>());
        }
        return this._messageHandlers.get(messageType) as Subject<T>;
    }

    setMessages(messages: SocketRxMessage<any>[]): void {
        for (const message of messages) {
            const messageType = this.formatMessageType(message.messageType);
            this._messageConverters.set(messageType, message);
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

    sendLocalUpdate(message: SocketRxMessage<any>) {
        const messageType = this.formatMessageType(message.messageType);
        this._messageHandlers.get(messageType)?.next(message);
    }

    async sendMessage(
        message: SocketTxMessage<any>,
        {ack = false, timeoutMs = 10000, waitConnected = true, instanceUuid = undefined as string | undefined} = {},
    ): Promise<SocketApiTxStatus> {
        if (waitConnected) {
            await this.connection.whenConnected;
        }
        const messageType = this.formatMessageType(message.messageType);
        const txHandler = this._txMessageHandlers.get(messageType);
        txHandler?.handler.next(message);
        instanceUuid = instanceUuid ?? uuidv4();

        const getHeaders = () => {
            switch (this.variant) {
                case SocketApiVariant.ilol:
                    return {
                        eventTimestamp: Math.round(Date.now()),
                        eventName: messageType,
                        eventId: instanceUuid,
                        authToken: this._token,
                    };
                case SocketApiVariant.proto:
                default:
                    return {
                        messageType,
                        authHeader: this._token,
                        eventTime: Date.now(),
                        localTime: Date.now(),
                        ack,
                        retryCount: 0,
                        apiVersion: this.apiVersion,
                        uuid: instanceUuid,
                    };
            }
        }

        if (txHandler?.intercept) {
            return new SocketApiTxStatus(SocketApiAckStatus.success);
        }

        const msg = JSON.stringify({
            body: message.data,
            headers: getHeaders(),
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
            return new SocketApiTxStatus(SocketApiAckStatus.success);
        }
    }

    async _waitAck(instanceUuid: string, timeoutMs: number): Promise<SocketApiTxStatus> {
        try {
            let msg;
            switch (this.variant) {
                case SocketApiVariant.ilol:
                    msg = await firstValueFrom(
                        race(
                            this.getMessageHandler(new proto.RxIlolAck()),
                            this.getMessageHandler(new proto.RxIlolError())
                        )
                            .pipe(filter((event) => event.proto.sourceEventId === instanceUuid))
                            .pipe(timeout({first: timeoutMs})),
                    );
                    if (msg.messageType === proto.RxIlolError.type) {
                        return new SocketApiTxStatus(SocketApiAckStatus.messageError, (msg as proto.RxIlolError).proto.reason);
                    }
                    return new SocketApiTxStatus(SocketApiAckStatus.success);
                case SocketApiVariant.proto:
                default:
                    msg = await firstValueFrom(
                        this.getMessageHandler(new proto.RxAck())
                            .pipe(filter((event) => event.proto.uuid === instanceUuid))
                            .pipe(timeout({first: timeoutMs})),
                    );
                    const status = msg.proto.errorMessage.length > 0 ? SocketApiAckStatus.messageError : SocketApiAckStatus.success;
                    return new SocketApiTxStatus(
                        status,
                        msg.proto.errorMessage,
                        msg.proto.errorCode,
                    );
            }
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

export enum SocketApiVariant {
    proto,
    ilol
}

export enum SocketApiAckStatus {
    success,
    connectionError,
    timeout,
    messageError,
}

export class SocketApiTxStatus {
    status: SocketApiAckStatus;
    error: number | null;
    errorMessage: string | null;

    constructor(
        status: SocketApiAckStatus,
        errorMessage: string | null = null,
        error: number | null = null,
    ) {
        this.status = status;
        this.error = error;
        this.errorMessage = errorMessage;
    }
}


interface TxMessageHandler {
    intercept: boolean,
    handler: Subject<any>,
}