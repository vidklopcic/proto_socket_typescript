import * as $protobuf from "protobufjs";
/** Namespace sfiles. */
export namespace sfiles {

    /** Properties of an UploadStartSlot. */
    interface IUploadStartSlot {

        /** UploadStartSlot key */
        key?: (string|null);

        /** UploadStartSlot localKey */
        localKey?: (string|null);
    }

    /** Represents an UploadStartSlot. */
    class UploadStartSlot implements IUploadStartSlot {

        /**
         * Constructs a new UploadStartSlot.
         * @param [properties] Properties to set
         */
        constructor(properties?: sfiles.IUploadStartSlot);

        /** UploadStartSlot key. */
        public key: string;

        /** UploadStartSlot localKey. */
        public localKey: string;

        /**
         * Creates a new UploadStartSlot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadStartSlot instance
         */
        public static create(properties?: sfiles.IUploadStartSlot): sfiles.UploadStartSlot;

        /**
         * Encodes the specified UploadStartSlot message. Does not implicitly {@link sfiles.UploadStartSlot.verify|verify} messages.
         * @param message UploadStartSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sfiles.IUploadStartSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadStartSlot message, length delimited. Does not implicitly {@link sfiles.UploadStartSlot.verify|verify} messages.
         * @param message UploadStartSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sfiles.IUploadStartSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadStartSlot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadStartSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sfiles.UploadStartSlot;

        /**
         * Decodes an UploadStartSlot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadStartSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sfiles.UploadStartSlot;

        /**
         * Verifies an UploadStartSlot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadStartSlot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadStartSlot
         */
        public static fromObject(object: { [k: string]: any }): sfiles.UploadStartSlot;

        /**
         * Creates a plain object from an UploadStartSlot message. Also converts values to other types if specified.
         * @param message UploadStartSlot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sfiles.UploadStartSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadStartSlot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadStartSlot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadProgress. */
    interface IUploadProgress {

        /** UploadProgress nBytes */
        nBytes?: (number|Long|null);

        /** UploadProgress key */
        key?: (string|null);

        /** UploadProgress localKey */
        localKey?: (string|null);
    }

    /** Represents an UploadProgress. */
    class UploadProgress implements IUploadProgress {

        /**
         * Constructs a new UploadProgress.
         * @param [properties] Properties to set
         */
        constructor(properties?: sfiles.IUploadProgress);

        /** UploadProgress nBytes. */
        public nBytes: (number|Long);

        /** UploadProgress key. */
        public key: string;

        /** UploadProgress localKey. */
        public localKey: string;

        /**
         * Creates a new UploadProgress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadProgress instance
         */
        public static create(properties?: sfiles.IUploadProgress): sfiles.UploadProgress;

        /**
         * Encodes the specified UploadProgress message. Does not implicitly {@link sfiles.UploadProgress.verify|verify} messages.
         * @param message UploadProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sfiles.IUploadProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadProgress message, length delimited. Does not implicitly {@link sfiles.UploadProgress.verify|verify} messages.
         * @param message UploadProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sfiles.IUploadProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sfiles.UploadProgress;

        /**
         * Decodes an UploadProgress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sfiles.UploadProgress;

        /**
         * Verifies an UploadProgress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadProgress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadProgress
         */
        public static fromObject(object: { [k: string]: any }): sfiles.UploadProgress;

        /**
         * Creates a plain object from an UploadProgress message. Also converts values to other types if specified.
         * @param message UploadProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sfiles.UploadProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadProgress
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadDone. */
    interface IUploadDone {

        /** UploadDone key */
        key?: (string|null);

        /** UploadDone file */
        file?: (sfiles.IUploadedFile|null);
    }

    /** Represents an UploadDone. */
    class UploadDone implements IUploadDone {

        /**
         * Constructs a new UploadDone.
         * @param [properties] Properties to set
         */
        constructor(properties?: sfiles.IUploadDone);

        /** UploadDone key. */
        public key: string;

        /** UploadDone file. */
        public file?: (sfiles.IUploadedFile|null);

        /**
         * Creates a new UploadDone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadDone instance
         */
        public static create(properties?: sfiles.IUploadDone): sfiles.UploadDone;

        /**
         * Encodes the specified UploadDone message. Does not implicitly {@link sfiles.UploadDone.verify|verify} messages.
         * @param message UploadDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sfiles.IUploadDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadDone message, length delimited. Does not implicitly {@link sfiles.UploadDone.verify|verify} messages.
         * @param message UploadDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sfiles.IUploadDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadDone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sfiles.UploadDone;

        /**
         * Decodes an UploadDone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sfiles.UploadDone;

        /**
         * Verifies an UploadDone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadDone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadDone
         */
        public static fromObject(object: { [k: string]: any }): sfiles.UploadDone;

        /**
         * Creates a plain object from an UploadDone message. Also converts values to other types if specified.
         * @param message UploadDone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sfiles.UploadDone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadDone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadDone
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadedFile. */
    interface IUploadedFile {

        /** UploadedFile localKey */
        localKey?: (string|null);

        /** UploadedFile url */
        url?: (string|null);

        /** UploadedFile id */
        id?: (string|null);

        /** UploadedFile mime */
        mime?: (string|null);

        /** UploadedFile thumbUrl */
        thumbUrl?: (string|null);

        /** UploadedFile name */
        name?: (string|null);
    }

    /** Represents an UploadedFile. */
    class UploadedFile implements IUploadedFile {

        /**
         * Constructs a new UploadedFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: sfiles.IUploadedFile);

        /** UploadedFile localKey. */
        public localKey: string;

        /** UploadedFile url. */
        public url: string;

        /** UploadedFile id. */
        public id: string;

        /** UploadedFile mime. */
        public mime: string;

        /** UploadedFile thumbUrl. */
        public thumbUrl: string;

        /** UploadedFile name. */
        public name: string;

        /**
         * Creates a new UploadedFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadedFile instance
         */
        public static create(properties?: sfiles.IUploadedFile): sfiles.UploadedFile;

        /**
         * Encodes the specified UploadedFile message. Does not implicitly {@link sfiles.UploadedFile.verify|verify} messages.
         * @param message UploadedFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sfiles.IUploadedFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadedFile message, length delimited. Does not implicitly {@link sfiles.UploadedFile.verify|verify} messages.
         * @param message UploadedFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sfiles.IUploadedFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadedFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadedFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sfiles.UploadedFile;

        /**
         * Decodes an UploadedFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadedFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sfiles.UploadedFile;

        /**
         * Verifies an UploadedFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadedFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadedFile
         */
        public static fromObject(object: { [k: string]: any }): sfiles.UploadedFile;

        /**
         * Creates a plain object from an UploadedFile message. Also converts values to other types if specified.
         * @param message UploadedFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sfiles.UploadedFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadedFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadedFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadStart. */
    interface IUploadStart {

        /** UploadStart localKey */
        localKey?: (string|null);

        /** UploadStart extension */
        extension?: (string|null);

        /** UploadStart name */
        name?: (string|null);

        /** UploadStart mime */
        mime?: (string|null);
    }

    /** Represents an UploadStart. */
    class UploadStart implements IUploadStart {

        /**
         * Constructs a new UploadStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: sfiles.IUploadStart);

        /** UploadStart localKey. */
        public localKey: string;

        /** UploadStart extension. */
        public extension: string;

        /** UploadStart name. */
        public name: string;

        /** UploadStart mime. */
        public mime: string;

        /**
         * Creates a new UploadStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadStart instance
         */
        public static create(properties?: sfiles.IUploadStart): sfiles.UploadStart;

        /**
         * Encodes the specified UploadStart message. Does not implicitly {@link sfiles.UploadStart.verify|verify} messages.
         * @param message UploadStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sfiles.IUploadStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadStart message, length delimited. Does not implicitly {@link sfiles.UploadStart.verify|verify} messages.
         * @param message UploadStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sfiles.IUploadStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sfiles.UploadStart;

        /**
         * Decodes an UploadStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sfiles.UploadStart;

        /**
         * Verifies an UploadStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadStart
         */
        public static fromObject(object: { [k: string]: any }): sfiles.UploadStart;

        /**
         * Creates a plain object from an UploadStart message. Also converts values to other types if specified.
         * @param message UploadStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sfiles.UploadStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteFile. */
    interface IDeleteFile {

        /** DeleteFile file */
        file?: (sfiles.IUploadedFile|null);
    }

    /** Represents a DeleteFile. */
    class DeleteFile implements IDeleteFile {

        /**
         * Constructs a new DeleteFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: sfiles.IDeleteFile);

        /** DeleteFile file. */
        public file?: (sfiles.IUploadedFile|null);

        /**
         * Creates a new DeleteFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteFile instance
         */
        public static create(properties?: sfiles.IDeleteFile): sfiles.DeleteFile;

        /**
         * Encodes the specified DeleteFile message. Does not implicitly {@link sfiles.DeleteFile.verify|verify} messages.
         * @param message DeleteFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sfiles.IDeleteFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteFile message, length delimited. Does not implicitly {@link sfiles.DeleteFile.verify|verify} messages.
         * @param message DeleteFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sfiles.IDeleteFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sfiles.DeleteFile;

        /**
         * Decodes a DeleteFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sfiles.DeleteFile;

        /**
         * Verifies a DeleteFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteFile
         */
        public static fromObject(object: { [k: string]: any }): sfiles.DeleteFile;

        /**
         * Creates a plain object from a DeleteFile message. Also converts values to other types if specified.
         * @param message DeleteFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sfiles.DeleteFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadEnd. */
    interface IUploadEnd {
    }

    /** Represents an UploadEnd. */
    class UploadEnd implements IUploadEnd {

        /**
         * Constructs a new UploadEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: sfiles.IUploadEnd);

        /**
         * Creates a new UploadEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadEnd instance
         */
        public static create(properties?: sfiles.IUploadEnd): sfiles.UploadEnd;

        /**
         * Encodes the specified UploadEnd message. Does not implicitly {@link sfiles.UploadEnd.verify|verify} messages.
         * @param message UploadEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sfiles.IUploadEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadEnd message, length delimited. Does not implicitly {@link sfiles.UploadEnd.verify|verify} messages.
         * @param message UploadEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sfiles.IUploadEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sfiles.UploadEnd;

        /**
         * Decodes an UploadEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sfiles.UploadEnd;

        /**
         * Verifies an UploadEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadEnd
         */
        public static fromObject(object: { [k: string]: any }): sfiles.UploadEnd;

        /**
         * Creates a plain object from an UploadEnd message. Also converts values to other types if specified.
         * @param message UploadEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sfiles.UploadEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadEnd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace socket_api. */
export namespace socket_api {

    /** Properties of an Ack. */
    interface IAck {

        /** Ack uuid */
        uuid?: (string|null);

        /** Ack errorMessage */
        errorMessage?: (string|null);

        /** Ack errorCode */
        errorCode?: (number|null);
    }

    /** Represents an Ack. */
    class Ack implements IAck {

        /**
         * Constructs a new Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: socket_api.IAck);

        /** Ack uuid. */
        public uuid: string;

        /** Ack errorMessage. */
        public errorMessage: string;

        /** Ack errorCode. */
        public errorCode: number;

        /**
         * Creates a new Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ack instance
         */
        public static create(properties?: socket_api.IAck): socket_api.Ack;

        /**
         * Encodes the specified Ack message. Does not implicitly {@link socket_api.Ack.verify|verify} messages.
         * @param message Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: socket_api.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link socket_api.Ack.verify|verify} messages.
         * @param message Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: socket_api.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): socket_api.Ack;

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): socket_api.Ack;

        /**
         * Verifies an Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ack
         */
        public static fromObject(object: { [k: string]: any }): socket_api.Ack;

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @param message Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: socket_api.Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ack
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IlolAck. */
    interface IIlolAck {

        /** IlolAck sourceEventId */
        sourceEventId?: (string|null);
    }

    /** Represents an IlolAck. */
    class IlolAck implements IIlolAck {

        /**
         * Constructs a new IlolAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: socket_api.IIlolAck);

        /** IlolAck sourceEventId. */
        public sourceEventId: string;

        /**
         * Creates a new IlolAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IlolAck instance
         */
        public static create(properties?: socket_api.IIlolAck): socket_api.IlolAck;

        /**
         * Encodes the specified IlolAck message. Does not implicitly {@link socket_api.IlolAck.verify|verify} messages.
         * @param message IlolAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: socket_api.IIlolAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IlolAck message, length delimited. Does not implicitly {@link socket_api.IlolAck.verify|verify} messages.
         * @param message IlolAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: socket_api.IIlolAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IlolAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IlolAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): socket_api.IlolAck;

        /**
         * Decodes an IlolAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IlolAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): socket_api.IlolAck;

        /**
         * Verifies an IlolAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IlolAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IlolAck
         */
        public static fromObject(object: { [k: string]: any }): socket_api.IlolAck;

        /**
         * Creates a plain object from an IlolAck message. Also converts values to other types if specified.
         * @param message IlolAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: socket_api.IlolAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IlolAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IlolAck
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IlolError. */
    interface IIlolError {

        /** IlolError sourceEventId */
        sourceEventId?: (string|null);

        /** IlolError reason */
        reason?: (string|null);
    }

    /** Represents an IlolError. */
    class IlolError implements IIlolError {

        /**
         * Constructs a new IlolError.
         * @param [properties] Properties to set
         */
        constructor(properties?: socket_api.IIlolError);

        /** IlolError sourceEventId. */
        public sourceEventId: string;

        /** IlolError reason. */
        public reason: string;

        /**
         * Creates a new IlolError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IlolError instance
         */
        public static create(properties?: socket_api.IIlolError): socket_api.IlolError;

        /**
         * Encodes the specified IlolError message. Does not implicitly {@link socket_api.IlolError.verify|verify} messages.
         * @param message IlolError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: socket_api.IIlolError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IlolError message, length delimited. Does not implicitly {@link socket_api.IlolError.verify|verify} messages.
         * @param message IlolError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: socket_api.IIlolError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IlolError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IlolError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): socket_api.IlolError;

        /**
         * Decodes an IlolError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IlolError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): socket_api.IlolError;

        /**
         * Verifies an IlolError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IlolError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IlolError
         */
        public static fromObject(object: { [k: string]: any }): socket_api.IlolError;

        /**
         * Creates a plain object from an IlolError message. Also converts values to other types if specified.
         * @param message IlolError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: socket_api.IlolError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IlolError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IlolError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AsyncProgress. */
    interface IAsyncProgress {

        /** AsyncProgress key */
        key?: (string|null);

        /** AsyncProgress progress */
        progress?: (number|null);

        /** AsyncProgress info */
        info?: (string|null);

        /** AsyncProgress done */
        done?: (boolean|null);

        /** AsyncProgress errorMessage */
        errorMessage?: (string|null);

        /** AsyncProgress errorCode */
        errorCode?: (number|null);
    }

    /** Represents an AsyncProgress. */
    class AsyncProgress implements IAsyncProgress {

        /**
         * Constructs a new AsyncProgress.
         * @param [properties] Properties to set
         */
        constructor(properties?: socket_api.IAsyncProgress);

        /** AsyncProgress key. */
        public key: string;

        /** AsyncProgress progress. */
        public progress: number;

        /** AsyncProgress info. */
        public info: string;

        /** AsyncProgress done. */
        public done: boolean;

        /** AsyncProgress errorMessage. */
        public errorMessage: string;

        /** AsyncProgress errorCode. */
        public errorCode: number;

        /**
         * Creates a new AsyncProgress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AsyncProgress instance
         */
        public static create(properties?: socket_api.IAsyncProgress): socket_api.AsyncProgress;

        /**
         * Encodes the specified AsyncProgress message. Does not implicitly {@link socket_api.AsyncProgress.verify|verify} messages.
         * @param message AsyncProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: socket_api.IAsyncProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AsyncProgress message, length delimited. Does not implicitly {@link socket_api.AsyncProgress.verify|verify} messages.
         * @param message AsyncProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: socket_api.IAsyncProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AsyncProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AsyncProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): socket_api.AsyncProgress;

        /**
         * Decodes an AsyncProgress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AsyncProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): socket_api.AsyncProgress;

        /**
         * Verifies an AsyncProgress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AsyncProgress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AsyncProgress
         */
        public static fromObject(object: { [k: string]: any }): socket_api.AsyncProgress;

        /**
         * Creates a plain object from an AsyncProgress message. Also converts values to other types if specified.
         * @param message AsyncProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: socket_api.AsyncProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AsyncProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AsyncProgress
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpgradeApiVersion. */
    interface IUpgradeApiVersion {

        /** UpgradeApiVersion latest */
        latest?: (number|null);
    }

    /** Represents an UpgradeApiVersion. */
    class UpgradeApiVersion implements IUpgradeApiVersion {

        /**
         * Constructs a new UpgradeApiVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: socket_api.IUpgradeApiVersion);

        /** UpgradeApiVersion latest. */
        public latest: number;

        /**
         * Creates a new UpgradeApiVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpgradeApiVersion instance
         */
        public static create(properties?: socket_api.IUpgradeApiVersion): socket_api.UpgradeApiVersion;

        /**
         * Encodes the specified UpgradeApiVersion message. Does not implicitly {@link socket_api.UpgradeApiVersion.verify|verify} messages.
         * @param message UpgradeApiVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: socket_api.IUpgradeApiVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpgradeApiVersion message, length delimited. Does not implicitly {@link socket_api.UpgradeApiVersion.verify|verify} messages.
         * @param message UpgradeApiVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: socket_api.IUpgradeApiVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpgradeApiVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpgradeApiVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): socket_api.UpgradeApiVersion;

        /**
         * Decodes an UpgradeApiVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpgradeApiVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): socket_api.UpgradeApiVersion;

        /**
         * Verifies an UpgradeApiVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpgradeApiVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpgradeApiVersion
         */
        public static fromObject(object: { [k: string]: any }): socket_api.UpgradeApiVersion;

        /**
         * Creates a plain object from an UpgradeApiVersion message. Also converts values to other types if specified.
         * @param message UpgradeApiVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: socket_api.UpgradeApiVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpgradeApiVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpgradeApiVersion
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AckErrorCode enum. */
    enum AckErrorCode {
        error_code_none = 0,
        error_code_unauthorized = 401
    }
}

/** Namespace authentication. */
export namespace authentication {

    /** Properties of a LoginToken. */
    interface ILoginToken {

        /** LoginToken token */
        token?: (string|null);

        /** LoginToken refresh */
        refresh?: (string|null);
    }

    /** Represents a LoginToken. */
    class LoginToken implements ILoginToken {

        /**
         * Constructs a new LoginToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: authentication.ILoginToken);

        /** LoginToken token. */
        public token: string;

        /** LoginToken refresh. */
        public refresh: string;

        /**
         * Creates a new LoginToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginToken instance
         */
        public static create(properties?: authentication.ILoginToken): authentication.LoginToken;

        /**
         * Encodes the specified LoginToken message. Does not implicitly {@link authentication.LoginToken.verify|verify} messages.
         * @param message LoginToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: authentication.ILoginToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginToken message, length delimited. Does not implicitly {@link authentication.LoginToken.verify|verify} messages.
         * @param message LoginToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: authentication.ILoginToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): authentication.LoginToken;

        /**
         * Decodes a LoginToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): authentication.LoginToken;

        /**
         * Verifies a LoginToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginToken
         */
        public static fromObject(object: { [k: string]: any }): authentication.LoginToken;

        /**
         * Creates a plain object from a LoginToken message. Also converts values to other types if specified.
         * @param message LoginToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: authentication.LoginToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginToken
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginError. */
    interface ILoginError {

        /** LoginError errorText */
        errorText?: (string|null);

        /** LoginError errorCode */
        errorCode?: (string|null);
    }

    /** Represents a LoginError. */
    class LoginError implements ILoginError {

        /**
         * Constructs a new LoginError.
         * @param [properties] Properties to set
         */
        constructor(properties?: authentication.ILoginError);

        /** LoginError errorText. */
        public errorText: string;

        /** LoginError errorCode. */
        public errorCode: string;

        /**
         * Creates a new LoginError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginError instance
         */
        public static create(properties?: authentication.ILoginError): authentication.LoginError;

        /**
         * Encodes the specified LoginError message. Does not implicitly {@link authentication.LoginError.verify|verify} messages.
         * @param message LoginError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: authentication.ILoginError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginError message, length delimited. Does not implicitly {@link authentication.LoginError.verify|verify} messages.
         * @param message LoginError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: authentication.ILoginError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): authentication.LoginError;

        /**
         * Decodes a LoginError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): authentication.LoginError;

        /**
         * Verifies a LoginError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginError
         */
        public static fromObject(object: { [k: string]: any }): authentication.LoginError;

        /**
         * Creates a plain object from a LoginError message. Also converts values to other types if specified.
         * @param message LoginError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: authentication.LoginError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Login. */
    interface ILogin {

        /** Login username */
        username?: (string|null);

        /** Login password */
        password?: (string|null);
    }

    /** Represents a Login. */
    class Login implements ILogin {

        /**
         * Constructs a new Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: authentication.ILogin);

        /** Login username. */
        public username: string;

        /** Login password. */
        public password: string;

        /**
         * Creates a new Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Login instance
         */
        public static create(properties?: authentication.ILogin): authentication.Login;

        /**
         * Encodes the specified Login message. Does not implicitly {@link authentication.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: authentication.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link authentication.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: authentication.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): authentication.Login;

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): authentication.Login;

        /**
         * Verifies a Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Login
         */
        public static fromObject(object: { [k: string]: any }): authentication.Login;

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @param message Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: authentication.Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Login
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RefreshToken. */
    interface IRefreshToken {

        /** RefreshToken refreshToken */
        refreshToken?: (string|null);
    }

    /** Represents a RefreshToken. */
    class RefreshToken implements IRefreshToken {

        /**
         * Constructs a new RefreshToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: authentication.IRefreshToken);

        /** RefreshToken refreshToken. */
        public refreshToken: string;

        /**
         * Creates a new RefreshToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshToken instance
         */
        public static create(properties?: authentication.IRefreshToken): authentication.RefreshToken;

        /**
         * Encodes the specified RefreshToken message. Does not implicitly {@link authentication.RefreshToken.verify|verify} messages.
         * @param message RefreshToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: authentication.IRefreshToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshToken message, length delimited. Does not implicitly {@link authentication.RefreshToken.verify|verify} messages.
         * @param message RefreshToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: authentication.IRefreshToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): authentication.RefreshToken;

        /**
         * Decodes a RefreshToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): authentication.RefreshToken;

        /**
         * Verifies a RefreshToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshToken
         */
        public static fromObject(object: { [k: string]: any }): authentication.RefreshToken;

        /**
         * Creates a plain object from a RefreshToken message. Also converts values to other types if specified.
         * @param message RefreshToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: authentication.RefreshToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RefreshToken
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VerifyToken. */
    interface IVerifyToken {
    }

    /** Represents a VerifyToken. */
    class VerifyToken implements IVerifyToken {

        /**
         * Constructs a new VerifyToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: authentication.IVerifyToken);

        /**
         * Creates a new VerifyToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyToken instance
         */
        public static create(properties?: authentication.IVerifyToken): authentication.VerifyToken;

        /**
         * Encodes the specified VerifyToken message. Does not implicitly {@link authentication.VerifyToken.verify|verify} messages.
         * @param message VerifyToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: authentication.IVerifyToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyToken message, length delimited. Does not implicitly {@link authentication.VerifyToken.verify|verify} messages.
         * @param message VerifyToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: authentication.IVerifyToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): authentication.VerifyToken;

        /**
         * Decodes a VerifyToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): authentication.VerifyToken;

        /**
         * Verifies a VerifyToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyToken
         */
        public static fromObject(object: { [k: string]: any }): authentication.VerifyToken;

        /**
         * Creates a plain object from a VerifyToken message. Also converts values to other types if specified.
         * @param message VerifyToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: authentication.VerifyToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VerifyToken
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenInvalid. */
    interface ITokenInvalid {
    }

    /** Represents a TokenInvalid. */
    class TokenInvalid implements ITokenInvalid {

        /**
         * Constructs a new TokenInvalid.
         * @param [properties] Properties to set
         */
        constructor(properties?: authentication.ITokenInvalid);

        /**
         * Creates a new TokenInvalid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenInvalid instance
         */
        public static create(properties?: authentication.ITokenInvalid): authentication.TokenInvalid;

        /**
         * Encodes the specified TokenInvalid message. Does not implicitly {@link authentication.TokenInvalid.verify|verify} messages.
         * @param message TokenInvalid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: authentication.ITokenInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenInvalid message, length delimited. Does not implicitly {@link authentication.TokenInvalid.verify|verify} messages.
         * @param message TokenInvalid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: authentication.ITokenInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenInvalid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): authentication.TokenInvalid;

        /**
         * Decodes a TokenInvalid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): authentication.TokenInvalid;

        /**
         * Verifies a TokenInvalid message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenInvalid message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenInvalid
         */
        public static fromObject(object: { [k: string]: any }): authentication.TokenInvalid;

        /**
         * Creates a plain object from a TokenInvalid message. Also converts values to other types if specified.
         * @param message TokenInvalid
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: authentication.TokenInvalid, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenInvalid to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenInvalid
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RefreshTokenInvalid. */
    interface IRefreshTokenInvalid {
    }

    /** Represents a RefreshTokenInvalid. */
    class RefreshTokenInvalid implements IRefreshTokenInvalid {

        /**
         * Constructs a new RefreshTokenInvalid.
         * @param [properties] Properties to set
         */
        constructor(properties?: authentication.IRefreshTokenInvalid);

        /**
         * Creates a new RefreshTokenInvalid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshTokenInvalid instance
         */
        public static create(properties?: authentication.IRefreshTokenInvalid): authentication.RefreshTokenInvalid;

        /**
         * Encodes the specified RefreshTokenInvalid message. Does not implicitly {@link authentication.RefreshTokenInvalid.verify|verify} messages.
         * @param message RefreshTokenInvalid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: authentication.IRefreshTokenInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshTokenInvalid message, length delimited. Does not implicitly {@link authentication.RefreshTokenInvalid.verify|verify} messages.
         * @param message RefreshTokenInvalid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: authentication.IRefreshTokenInvalid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshTokenInvalid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshTokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): authentication.RefreshTokenInvalid;

        /**
         * Decodes a RefreshTokenInvalid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshTokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): authentication.RefreshTokenInvalid;

        /**
         * Verifies a RefreshTokenInvalid message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshTokenInvalid message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshTokenInvalid
         */
        public static fromObject(object: { [k: string]: any }): authentication.RefreshTokenInvalid;

        /**
         * Creates a plain object from a RefreshTokenInvalid message. Also converts values to other types if specified.
         * @param message RefreshTokenInvalid
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: authentication.RefreshTokenInvalid, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshTokenInvalid to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RefreshTokenInvalid
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace uploader. */
export namespace uploader {

    /** Properties of an UploadTask. */
    interface IUploadTask {

        /** UploadTask created */
        created?: (number|Long|null);

        /** UploadTask path */
        path?: (string|null);

        /** UploadTask name */
        name?: (string|null);

        /** UploadTask mime */
        mime?: (string|null);

        /** UploadTask status */
        status?: (uploader.UploadStatus|null);

        /** UploadTask retryCounter */
        retryCounter?: (number|null);

        /** UploadTask error */
        error?: (string|null);

        /** UploadTask fingerprint */
        fingerprint?: (string|null);

        /** UploadTask url */
        url?: (string|null);

        /** UploadTask metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents an UploadTask. */
    class UploadTask implements IUploadTask {

        /**
         * Constructs a new UploadTask.
         * @param [properties] Properties to set
         */
        constructor(properties?: uploader.IUploadTask);

        /** UploadTask created. */
        public created: (number|Long);

        /** UploadTask path. */
        public path: string;

        /** UploadTask name. */
        public name: string;

        /** UploadTask mime. */
        public mime: string;

        /** UploadTask status. */
        public status: uploader.UploadStatus;

        /** UploadTask retryCounter. */
        public retryCounter: number;

        /** UploadTask error. */
        public error: string;

        /** UploadTask fingerprint. */
        public fingerprint: string;

        /** UploadTask url. */
        public url: string;

        /** UploadTask metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new UploadTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadTask instance
         */
        public static create(properties?: uploader.IUploadTask): uploader.UploadTask;

        /**
         * Encodes the specified UploadTask message. Does not implicitly {@link uploader.UploadTask.verify|verify} messages.
         * @param message UploadTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: uploader.IUploadTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadTask message, length delimited. Does not implicitly {@link uploader.UploadTask.verify|verify} messages.
         * @param message UploadTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: uploader.IUploadTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadTask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): uploader.UploadTask;

        /**
         * Decodes an UploadTask message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): uploader.UploadTask;

        /**
         * Verifies an UploadTask message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadTask message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadTask
         */
        public static fromObject(object: { [k: string]: any }): uploader.UploadTask;

        /**
         * Creates a plain object from an UploadTask message. Also converts values to other types if specified.
         * @param message UploadTask
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: uploader.UploadTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadTask to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadTask
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** UploadStatus enum. */
    enum UploadStatus {
        scheduled = 0,
        uploading = 1,
        paused = 3,
        done = 4,
        error = 5,
        restored = 6
    }

    /** Properties of an UploadUFile. */
    interface IUploadUFile {

        /** UploadUFile fileId */
        fileId?: (string|null);

        /** UploadUFile task */
        task?: (uploader.IUploadTask|null);
    }

    /** Represents an UploadUFile. */
    class UploadUFile implements IUploadUFile {

        /**
         * Constructs a new UploadUFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: uploader.IUploadUFile);

        /** UploadUFile fileId. */
        public fileId: string;

        /** UploadUFile task. */
        public task?: (uploader.IUploadTask|null);

        /**
         * Creates a new UploadUFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadUFile instance
         */
        public static create(properties?: uploader.IUploadUFile): uploader.UploadUFile;

        /**
         * Encodes the specified UploadUFile message. Does not implicitly {@link uploader.UploadUFile.verify|verify} messages.
         * @param message UploadUFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: uploader.IUploadUFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadUFile message, length delimited. Does not implicitly {@link uploader.UploadUFile.verify|verify} messages.
         * @param message UploadUFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: uploader.IUploadUFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadUFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): uploader.UploadUFile;

        /**
         * Decodes an UploadUFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): uploader.UploadUFile;

        /**
         * Verifies an UploadUFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadUFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadUFile
         */
        public static fromObject(object: { [k: string]: any }): uploader.UploadUFile;

        /**
         * Creates a plain object from an UploadUFile message. Also converts values to other types if specified.
         * @param message UploadUFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: uploader.UploadUFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadUFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadUFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteUFile. */
    interface IDeleteUFile {

        /** DeleteUFile id */
        id?: (string|null);
    }

    /** Represents a DeleteUFile. */
    class DeleteUFile implements IDeleteUFile {

        /**
         * Constructs a new DeleteUFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: uploader.IDeleteUFile);

        /** DeleteUFile id. */
        public id: string;

        /**
         * Creates a new DeleteUFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteUFile instance
         */
        public static create(properties?: uploader.IDeleteUFile): uploader.DeleteUFile;

        /**
         * Encodes the specified DeleteUFile message. Does not implicitly {@link uploader.DeleteUFile.verify|verify} messages.
         * @param message DeleteUFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: uploader.IDeleteUFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteUFile message, length delimited. Does not implicitly {@link uploader.DeleteUFile.verify|verify} messages.
         * @param message DeleteUFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: uploader.IDeleteUFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): uploader.DeleteUFile;

        /**
         * Decodes a DeleteUFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): uploader.DeleteUFile;

        /**
         * Verifies a DeleteUFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteUFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteUFile
         */
        public static fromObject(object: { [k: string]: any }): uploader.DeleteUFile;

        /**
         * Creates a plain object from a DeleteUFile message. Also converts values to other types if specified.
         * @param message DeleteUFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: uploader.DeleteUFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteUFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteUFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadSlot. */
    interface IUploadSlot {

        /** UploadSlot file */
        file?: (uploader.IUFile|null);

        /** UploadSlot metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents an UploadSlot. */
    class UploadSlot implements IUploadSlot {

        /**
         * Constructs a new UploadSlot.
         * @param [properties] Properties to set
         */
        constructor(properties?: uploader.IUploadSlot);

        /** UploadSlot file. */
        public file?: (uploader.IUFile|null);

        /** UploadSlot metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new UploadSlot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadSlot instance
         */
        public static create(properties?: uploader.IUploadSlot): uploader.UploadSlot;

        /**
         * Encodes the specified UploadSlot message. Does not implicitly {@link uploader.UploadSlot.verify|verify} messages.
         * @param message UploadSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: uploader.IUploadSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadSlot message, length delimited. Does not implicitly {@link uploader.UploadSlot.verify|verify} messages.
         * @param message UploadSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: uploader.IUploadSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadSlot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): uploader.UploadSlot;

        /**
         * Decodes an UploadSlot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): uploader.UploadSlot;

        /**
         * Verifies an UploadSlot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadSlot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadSlot
         */
        public static fromObject(object: { [k: string]: any }): uploader.UploadSlot;

        /**
         * Creates a plain object from an UploadSlot message. Also converts values to other types if specified.
         * @param message UploadSlot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: uploader.UploadSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadSlot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadSlot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UFile. */
    interface IUFile {

        /** UFile id */
        id?: (string|null);

        /** UFile src */
        src?: (string|null);

        /** UFile preview */
        preview?: (string|null);

        /** UFile previewLarge */
        previewLarge?: (string|null);

        /** UFile name */
        name?: (string|null);

        /** UFile uploadTask */
        uploadTask?: (string|null);

        /** UFile localPath */
        localPath?: (string|null);
    }

    /** Represents a UFile. */
    class UFile implements IUFile {

        /**
         * Constructs a new UFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: uploader.IUFile);

        /** UFile id. */
        public id: string;

        /** UFile src. */
        public src: string;

        /** UFile preview. */
        public preview: string;

        /** UFile previewLarge. */
        public previewLarge: string;

        /** UFile name. */
        public name: string;

        /** UFile uploadTask. */
        public uploadTask: string;

        /** UFile localPath. */
        public localPath: string;

        /**
         * Creates a new UFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UFile instance
         */
        public static create(properties?: uploader.IUFile): uploader.UFile;

        /**
         * Encodes the specified UFile message. Does not implicitly {@link uploader.UFile.verify|verify} messages.
         * @param message UFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: uploader.IUFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UFile message, length delimited. Does not implicitly {@link uploader.UFile.verify|verify} messages.
         * @param message UFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: uploader.IUFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): uploader.UFile;

        /**
         * Decodes a UFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): uploader.UFile;

        /**
         * Verifies a UFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UFile
         */
        public static fromObject(object: { [k: string]: any }): uploader.UFile;

        /**
         * Creates a plain object from a UFile message. Also converts values to other types if specified.
         * @param message UFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: uploader.UFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
