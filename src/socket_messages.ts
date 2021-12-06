class SocketRxMessageData {
    private static keyHeaders = 'headers';
    private static keyBody = 'body';
    private static keyMessageType = 'messageType';

    // if message was retrieved from cache, this variable will store its original db id
    cacheUuid: string | null;

    get fromCache() {
        return !!this.cacheUuid;
    };

    // Indicates if the message was modified locally (set to `false` when calling `save()` on the `SocketRxMessage`).
    online: boolean;

    // Date and time of reception or modification
    time: Date;

    // Raw JSON string
    get raw() {
        return this._raw || '{}';
    }

    set raw(value) {
        this.data = this._validate(value);
        this._raw = value;
        this.time = new Date();
    }

    _raw: string | null;

    // Tries to find the `messageType` attribute
    get messageType() {
        return this.data[SocketRxMessageData.keyHeaders][SocketRxMessageData.keyMessageType];
    }

    // Decoded JSON map.
    data: Record<string, any>;

    get body() {
        return this.data[SocketRxMessageData.keyBody];
    }

    constructor(raw = '{}', {cacheUuid = null as string | null, online = true} = {
        cacheUuid: null,
        online: true
    }) {
        this.cacheUuid = cacheUuid;
        this.online = online;
        this.time = new Date();
        this.data = this._validate(raw);
        this._raw = raw;
    }

    _validate(content: string) {
        const data = JSON.parse(content);
        if (!data[SocketRxMessageData.keyHeaders] || !data[SocketRxMessageData.keyHeaders][SocketRxMessageData.keyMessageType]) {
            throw new Error('headers -> messageType is not defined in message: ' + content);
        }
        if (typeof data[SocketRxMessageData.keyBody] !== 'object') {
            throw new Error('body is not an object, but ' + typeof data[SocketRxMessageData.keyBody]);
        }
        return data;
    }
}

interface SerializableMessage<Type> {
    toJSON(): { [k: string]: any }
}

interface SerializableMessageStatic<Type> {
    new(...args: any[]): SerializableMessage<Type>;

    fromObject(object: { [k: string]: any }): Type
}


abstract class SocketTxMessage<Type extends SerializableMessage<Type>> {
    messageType: string;

    /// If set to `true`, SocketApi will attach the `authHeader`, if we are authenticated
    authRequired: boolean;

    /// If sending failed, cache the message for this duration and try to send it when reconnected.
    cacheMs: bigint | null;
    abstract proto: Type;

    protected constructor(messageType: string, authRequired = true) {
        this.messageType = messageType;
        this.authRequired = authRequired;
        this.cacheMs = null;
    }

    get data(): { [k: string]: any } {
        return this.proto.toJSON();
    }
}

abstract class SocketRxMessage<Type extends SerializableMessage<Type>> {
    /// Wraps the raw JSON data received from the server and holds
    /// some metadata (eg. whether message originates from cache or from server).
    message: SocketRxMessageData;
    messageType: string;

    /// Protobuf generated class that provides easier access to the data.
    abstract proto: Type;

    protected constructor(messageType: string, message: SocketRxMessageData | null) {
        this.message = message || new SocketRxMessageData();
        this.messageType = messageType;
    }

    abstract fromMessage(message: SocketRxMessageData): SocketRxMessage<Type>;
}