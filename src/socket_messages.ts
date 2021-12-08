import {Reader, Writer} from "protobufjs";
import * as $protobuf from "protobufjs";

export class SocketRxMessageData {
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
    get messageType() : string {
        return this.data[SocketRxMessageData.keyHeaders][SocketRxMessageData.keyMessageType];
    }

    // Decoded JSON map.
    data: { [k: string]: any };

    get body() {
        return this.data[SocketRxMessageData.keyBody];
    }

    constructor(raw: string, {cacheUuid = null as string | null, online = true} = {
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

export interface SerializableMessage<Type> {
    toJSON(): { [k: string]: any };
}

export interface SerializableMessageStatic<Type> {
    encode(message: any, writer?: Writer): Writer;
    decode(reader: Reader|Uint8Array, length?: number): Type;
}

export abstract class SocketTxMessage<Type extends SerializableMessage<Type>> {
    messageType: string;

    /// If set to `true`, SocketApi will attach the `authHeader`, if we are authenticated
    authRequired: boolean;

    /// If sending failed, cache the message for this duration and try to send it when reconnected.
    cacheMs: bigint | null;
    abstract proto: Type;
    abstract protoClass: SerializableMessageStatic<Type>;

    protected constructor(messageType: string, authRequired = true) {
        this.messageType = messageType;
        this.authRequired = authRequired;
        this.cacheMs = null;
    }

    get data(): { [k: string]: any } {
        return this.proto.toJSON();
    }
}

export abstract class SocketRxMessage<Type extends SerializableMessage<Type>> {
    /// Wraps the raw JSON data received from the server and holds
    /// some metadata (eg. whether message originates from cache or from server).
    message: SocketRxMessageData | null;
    messageType: string;

    /// Protobuf generated class that provides easier access to the data.
    abstract proto: Type;
    abstract protoClass: SerializableMessageStatic<Type>;

    protected constructor(messageType: string, message: SocketRxMessageData | null) {
        this.message = message;
        this.messageType = messageType;
    }

    abstract fromMessage(message: SocketRxMessageData): SocketRxMessage<Type>;
}
