/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const sfiles = $root.sfiles = (() => {

    /**
     * Namespace sfiles.
     * @exports sfiles
     * @namespace
     */
    const sfiles = {};

    sfiles.UploadStartSlot = (function() {

        /**
         * Properties of an UploadStartSlot.
         * @memberof sfiles
         * @interface IUploadStartSlot
         * @property {string|null} [key] UploadStartSlot key
         * @property {string|null} [localKey] UploadStartSlot localKey
         */

        /**
         * Constructs a new UploadStartSlot.
         * @memberof sfiles
         * @classdesc Represents an UploadStartSlot.
         * @implements IUploadStartSlot
         * @constructor
         * @param {sfiles.IUploadStartSlot=} [properties] Properties to set
         */
        function UploadStartSlot(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadStartSlot key.
         * @member {string} key
         * @memberof sfiles.UploadStartSlot
         * @instance
         */
        UploadStartSlot.prototype.key = "";

        /**
         * UploadStartSlot localKey.
         * @member {string} localKey
         * @memberof sfiles.UploadStartSlot
         * @instance
         */
        UploadStartSlot.prototype.localKey = "";

        /**
         * Creates a new UploadStartSlot instance using the specified properties.
         * @function create
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {sfiles.IUploadStartSlot=} [properties] Properties to set
         * @returns {sfiles.UploadStartSlot} UploadStartSlot instance
         */
        UploadStartSlot.create = function create(properties) {
            return new UploadStartSlot(properties);
        };

        /**
         * Encodes the specified UploadStartSlot message. Does not implicitly {@link sfiles.UploadStartSlot.verify|verify} messages.
         * @function encode
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {sfiles.IUploadStartSlot} message UploadStartSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadStartSlot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.localKey != null && Object.hasOwnProperty.call(message, "localKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.localKey);
            return writer;
        };

        /**
         * Encodes the specified UploadStartSlot message, length delimited. Does not implicitly {@link sfiles.UploadStartSlot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {sfiles.IUploadStartSlot} message UploadStartSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadStartSlot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadStartSlot message from the specified reader or buffer.
         * @function decode
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sfiles.UploadStartSlot} UploadStartSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadStartSlot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sfiles.UploadStartSlot();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.localKey = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadStartSlot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sfiles.UploadStartSlot} UploadStartSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadStartSlot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadStartSlot message.
         * @function verify
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadStartSlot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                if (!$util.isString(message.localKey))
                    return "localKey: string expected";
            return null;
        };

        /**
         * Creates an UploadStartSlot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sfiles.UploadStartSlot} UploadStartSlot
         */
        UploadStartSlot.fromObject = function fromObject(object) {
            if (object instanceof $root.sfiles.UploadStartSlot)
                return object;
            let message = new $root.sfiles.UploadStartSlot();
            if (object.key != null)
                message.key = String(object.key);
            if (object.localKey != null)
                message.localKey = String(object.localKey);
            return message;
        };

        /**
         * Creates a plain object from an UploadStartSlot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {sfiles.UploadStartSlot} message UploadStartSlot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadStartSlot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = "";
                object.localKey = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                object.localKey = message.localKey;
            return object;
        };

        /**
         * Converts this UploadStartSlot to JSON.
         * @function toJSON
         * @memberof sfiles.UploadStartSlot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadStartSlot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadStartSlot
         * @function getTypeUrl
         * @memberof sfiles.UploadStartSlot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadStartSlot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sfiles.UploadStartSlot";
        };

        return UploadStartSlot;
    })();

    sfiles.UploadProgress = (function() {

        /**
         * Properties of an UploadProgress.
         * @memberof sfiles
         * @interface IUploadProgress
         * @property {number|Long|null} [nBytes] UploadProgress nBytes
         * @property {string|null} [key] UploadProgress key
         * @property {string|null} [localKey] UploadProgress localKey
         */

        /**
         * Constructs a new UploadProgress.
         * @memberof sfiles
         * @classdesc Represents an UploadProgress.
         * @implements IUploadProgress
         * @constructor
         * @param {sfiles.IUploadProgress=} [properties] Properties to set
         */
        function UploadProgress(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadProgress nBytes.
         * @member {number|Long} nBytes
         * @memberof sfiles.UploadProgress
         * @instance
         */
        UploadProgress.prototype.nBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UploadProgress key.
         * @member {string} key
         * @memberof sfiles.UploadProgress
         * @instance
         */
        UploadProgress.prototype.key = "";

        /**
         * UploadProgress localKey.
         * @member {string} localKey
         * @memberof sfiles.UploadProgress
         * @instance
         */
        UploadProgress.prototype.localKey = "";

        /**
         * Creates a new UploadProgress instance using the specified properties.
         * @function create
         * @memberof sfiles.UploadProgress
         * @static
         * @param {sfiles.IUploadProgress=} [properties] Properties to set
         * @returns {sfiles.UploadProgress} UploadProgress instance
         */
        UploadProgress.create = function create(properties) {
            return new UploadProgress(properties);
        };

        /**
         * Encodes the specified UploadProgress message. Does not implicitly {@link sfiles.UploadProgress.verify|verify} messages.
         * @function encode
         * @memberof sfiles.UploadProgress
         * @static
         * @param {sfiles.IUploadProgress} message UploadProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadProgress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nBytes != null && Object.hasOwnProperty.call(message, "nBytes"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.nBytes);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            if (message.localKey != null && Object.hasOwnProperty.call(message, "localKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.localKey);
            return writer;
        };

        /**
         * Encodes the specified UploadProgress message, length delimited. Does not implicitly {@link sfiles.UploadProgress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sfiles.UploadProgress
         * @static
         * @param {sfiles.IUploadProgress} message UploadProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadProgress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadProgress message from the specified reader or buffer.
         * @function decode
         * @memberof sfiles.UploadProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sfiles.UploadProgress} UploadProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadProgress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sfiles.UploadProgress();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nBytes = reader.int64();
                        break;
                    }
                case 2: {
                        message.key = reader.string();
                        break;
                    }
                case 3: {
                        message.localKey = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadProgress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sfiles.UploadProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sfiles.UploadProgress} UploadProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadProgress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadProgress message.
         * @function verify
         * @memberof sfiles.UploadProgress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadProgress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nBytes != null && message.hasOwnProperty("nBytes"))
                if (!$util.isInteger(message.nBytes) && !(message.nBytes && $util.isInteger(message.nBytes.low) && $util.isInteger(message.nBytes.high)))
                    return "nBytes: integer|Long expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                if (!$util.isString(message.localKey))
                    return "localKey: string expected";
            return null;
        };

        /**
         * Creates an UploadProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sfiles.UploadProgress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sfiles.UploadProgress} UploadProgress
         */
        UploadProgress.fromObject = function fromObject(object) {
            if (object instanceof $root.sfiles.UploadProgress)
                return object;
            let message = new $root.sfiles.UploadProgress();
            if (object.nBytes != null)
                if ($util.Long)
                    (message.nBytes = $util.Long.fromValue(object.nBytes)).unsigned = false;
                else if (typeof object.nBytes === "string")
                    message.nBytes = parseInt(object.nBytes, 10);
                else if (typeof object.nBytes === "number")
                    message.nBytes = object.nBytes;
                else if (typeof object.nBytes === "object")
                    message.nBytes = new $util.LongBits(object.nBytes.low >>> 0, object.nBytes.high >>> 0).toNumber();
            if (object.key != null)
                message.key = String(object.key);
            if (object.localKey != null)
                message.localKey = String(object.localKey);
            return message;
        };

        /**
         * Creates a plain object from an UploadProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sfiles.UploadProgress
         * @static
         * @param {sfiles.UploadProgress} message UploadProgress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadProgress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.nBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nBytes = options.longs === String ? "0" : 0;
                object.key = "";
                object.localKey = "";
            }
            if (message.nBytes != null && message.hasOwnProperty("nBytes"))
                if (typeof message.nBytes === "number")
                    object.nBytes = options.longs === String ? String(message.nBytes) : message.nBytes;
                else
                    object.nBytes = options.longs === String ? $util.Long.prototype.toString.call(message.nBytes) : options.longs === Number ? new $util.LongBits(message.nBytes.low >>> 0, message.nBytes.high >>> 0).toNumber() : message.nBytes;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                object.localKey = message.localKey;
            return object;
        };

        /**
         * Converts this UploadProgress to JSON.
         * @function toJSON
         * @memberof sfiles.UploadProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadProgress
         * @function getTypeUrl
         * @memberof sfiles.UploadProgress
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadProgress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sfiles.UploadProgress";
        };

        return UploadProgress;
    })();

    sfiles.UploadDone = (function() {

        /**
         * Properties of an UploadDone.
         * @memberof sfiles
         * @interface IUploadDone
         * @property {string|null} [key] UploadDone key
         * @property {sfiles.IUploadedFile|null} [file] UploadDone file
         */

        /**
         * Constructs a new UploadDone.
         * @memberof sfiles
         * @classdesc Represents an UploadDone.
         * @implements IUploadDone
         * @constructor
         * @param {sfiles.IUploadDone=} [properties] Properties to set
         */
        function UploadDone(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadDone key.
         * @member {string} key
         * @memberof sfiles.UploadDone
         * @instance
         */
        UploadDone.prototype.key = "";

        /**
         * UploadDone file.
         * @member {sfiles.IUploadedFile|null|undefined} file
         * @memberof sfiles.UploadDone
         * @instance
         */
        UploadDone.prototype.file = null;

        /**
         * Creates a new UploadDone instance using the specified properties.
         * @function create
         * @memberof sfiles.UploadDone
         * @static
         * @param {sfiles.IUploadDone=} [properties] Properties to set
         * @returns {sfiles.UploadDone} UploadDone instance
         */
        UploadDone.create = function create(properties) {
            return new UploadDone(properties);
        };

        /**
         * Encodes the specified UploadDone message. Does not implicitly {@link sfiles.UploadDone.verify|verify} messages.
         * @function encode
         * @memberof sfiles.UploadDone
         * @static
         * @param {sfiles.IUploadDone} message UploadDone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadDone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.sfiles.UploadedFile.encode(message.file, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UploadDone message, length delimited. Does not implicitly {@link sfiles.UploadDone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sfiles.UploadDone
         * @static
         * @param {sfiles.IUploadDone} message UploadDone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadDone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadDone message from the specified reader or buffer.
         * @function decode
         * @memberof sfiles.UploadDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sfiles.UploadDone} UploadDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadDone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sfiles.UploadDone();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.file = $root.sfiles.UploadedFile.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadDone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sfiles.UploadDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sfiles.UploadDone} UploadDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadDone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadDone message.
         * @function verify
         * @memberof sfiles.UploadDone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadDone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.file != null && message.hasOwnProperty("file")) {
                let error = $root.sfiles.UploadedFile.verify(message.file);
                if (error)
                    return "file." + error;
            }
            return null;
        };

        /**
         * Creates an UploadDone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sfiles.UploadDone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sfiles.UploadDone} UploadDone
         */
        UploadDone.fromObject = function fromObject(object) {
            if (object instanceof $root.sfiles.UploadDone)
                return object;
            let message = new $root.sfiles.UploadDone();
            if (object.key != null)
                message.key = String(object.key);
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".sfiles.UploadDone.file: object expected");
                message.file = $root.sfiles.UploadedFile.fromObject(object.file);
            }
            return message;
        };

        /**
         * Creates a plain object from an UploadDone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sfiles.UploadDone
         * @static
         * @param {sfiles.UploadDone} message UploadDone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadDone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = "";
                object.file = null;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = $root.sfiles.UploadedFile.toObject(message.file, options);
            return object;
        };

        /**
         * Converts this UploadDone to JSON.
         * @function toJSON
         * @memberof sfiles.UploadDone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadDone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadDone
         * @function getTypeUrl
         * @memberof sfiles.UploadDone
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadDone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sfiles.UploadDone";
        };

        return UploadDone;
    })();

    sfiles.UploadedFile = (function() {

        /**
         * Properties of an UploadedFile.
         * @memberof sfiles
         * @interface IUploadedFile
         * @property {string|null} [localKey] UploadedFile localKey
         * @property {string|null} [url] UploadedFile url
         * @property {string|null} [id] UploadedFile id
         * @property {string|null} [mime] UploadedFile mime
         * @property {string|null} [thumbUrl] UploadedFile thumbUrl
         * @property {string|null} [name] UploadedFile name
         * @property {boolean|null} [downloadable] UploadedFile downloadable
         */

        /**
         * Constructs a new UploadedFile.
         * @memberof sfiles
         * @classdesc Represents an UploadedFile.
         * @implements IUploadedFile
         * @constructor
         * @param {sfiles.IUploadedFile=} [properties] Properties to set
         */
        function UploadedFile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadedFile localKey.
         * @member {string} localKey
         * @memberof sfiles.UploadedFile
         * @instance
         */
        UploadedFile.prototype.localKey = "";

        /**
         * UploadedFile url.
         * @member {string} url
         * @memberof sfiles.UploadedFile
         * @instance
         */
        UploadedFile.prototype.url = "";

        /**
         * UploadedFile id.
         * @member {string} id
         * @memberof sfiles.UploadedFile
         * @instance
         */
        UploadedFile.prototype.id = "";

        /**
         * UploadedFile mime.
         * @member {string} mime
         * @memberof sfiles.UploadedFile
         * @instance
         */
        UploadedFile.prototype.mime = "";

        /**
         * UploadedFile thumbUrl.
         * @member {string} thumbUrl
         * @memberof sfiles.UploadedFile
         * @instance
         */
        UploadedFile.prototype.thumbUrl = "";

        /**
         * UploadedFile name.
         * @member {string} name
         * @memberof sfiles.UploadedFile
         * @instance
         */
        UploadedFile.prototype.name = "";

        /**
         * UploadedFile downloadable.
         * @member {boolean} downloadable
         * @memberof sfiles.UploadedFile
         * @instance
         */
        UploadedFile.prototype.downloadable = false;

        /**
         * Creates a new UploadedFile instance using the specified properties.
         * @function create
         * @memberof sfiles.UploadedFile
         * @static
         * @param {sfiles.IUploadedFile=} [properties] Properties to set
         * @returns {sfiles.UploadedFile} UploadedFile instance
         */
        UploadedFile.create = function create(properties) {
            return new UploadedFile(properties);
        };

        /**
         * Encodes the specified UploadedFile message. Does not implicitly {@link sfiles.UploadedFile.verify|verify} messages.
         * @function encode
         * @memberof sfiles.UploadedFile
         * @static
         * @param {sfiles.IUploadedFile} message UploadedFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadedFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.localKey != null && Object.hasOwnProperty.call(message, "localKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.localKey);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.mime != null && Object.hasOwnProperty.call(message, "mime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.mime);
            if (message.thumbUrl != null && Object.hasOwnProperty.call(message, "thumbUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.thumbUrl);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
            if (message.downloadable != null && Object.hasOwnProperty.call(message, "downloadable"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.downloadable);
            return writer;
        };

        /**
         * Encodes the specified UploadedFile message, length delimited. Does not implicitly {@link sfiles.UploadedFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sfiles.UploadedFile
         * @static
         * @param {sfiles.IUploadedFile} message UploadedFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadedFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadedFile message from the specified reader or buffer.
         * @function decode
         * @memberof sfiles.UploadedFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sfiles.UploadedFile} UploadedFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadedFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sfiles.UploadedFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.localKey = reader.string();
                        break;
                    }
                case 2: {
                        message.url = reader.string();
                        break;
                    }
                case 3: {
                        message.id = reader.string();
                        break;
                    }
                case 4: {
                        message.mime = reader.string();
                        break;
                    }
                case 5: {
                        message.thumbUrl = reader.string();
                        break;
                    }
                case 6: {
                        message.name = reader.string();
                        break;
                    }
                case 7: {
                        message.downloadable = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadedFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sfiles.UploadedFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sfiles.UploadedFile} UploadedFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadedFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadedFile message.
         * @function verify
         * @memberof sfiles.UploadedFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadedFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                if (!$util.isString(message.localKey))
                    return "localKey: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.mime != null && message.hasOwnProperty("mime"))
                if (!$util.isString(message.mime))
                    return "mime: string expected";
            if (message.thumbUrl != null && message.hasOwnProperty("thumbUrl"))
                if (!$util.isString(message.thumbUrl))
                    return "thumbUrl: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.downloadable != null && message.hasOwnProperty("downloadable"))
                if (typeof message.downloadable !== "boolean")
                    return "downloadable: boolean expected";
            return null;
        };

        /**
         * Creates an UploadedFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sfiles.UploadedFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sfiles.UploadedFile} UploadedFile
         */
        UploadedFile.fromObject = function fromObject(object) {
            if (object instanceof $root.sfiles.UploadedFile)
                return object;
            let message = new $root.sfiles.UploadedFile();
            if (object.localKey != null)
                message.localKey = String(object.localKey);
            if (object.url != null)
                message.url = String(object.url);
            if (object.id != null)
                message.id = String(object.id);
            if (object.mime != null)
                message.mime = String(object.mime);
            if (object.thumbUrl != null)
                message.thumbUrl = String(object.thumbUrl);
            if (object.name != null)
                message.name = String(object.name);
            if (object.downloadable != null)
                message.downloadable = Boolean(object.downloadable);
            return message;
        };

        /**
         * Creates a plain object from an UploadedFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sfiles.UploadedFile
         * @static
         * @param {sfiles.UploadedFile} message UploadedFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadedFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.localKey = "";
                object.url = "";
                object.id = "";
                object.mime = "";
                object.thumbUrl = "";
                object.name = "";
                object.downloadable = false;
            }
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                object.localKey = message.localKey;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.mime != null && message.hasOwnProperty("mime"))
                object.mime = message.mime;
            if (message.thumbUrl != null && message.hasOwnProperty("thumbUrl"))
                object.thumbUrl = message.thumbUrl;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.downloadable != null && message.hasOwnProperty("downloadable"))
                object.downloadable = message.downloadable;
            return object;
        };

        /**
         * Converts this UploadedFile to JSON.
         * @function toJSON
         * @memberof sfiles.UploadedFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadedFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadedFile
         * @function getTypeUrl
         * @memberof sfiles.UploadedFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadedFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sfiles.UploadedFile";
        };

        return UploadedFile;
    })();

    sfiles.UploadStart = (function() {

        /**
         * Properties of an UploadStart.
         * @memberof sfiles
         * @interface IUploadStart
         * @property {string|null} [localKey] UploadStart localKey
         * @property {string|null} [extension] UploadStart extension
         * @property {string|null} [name] UploadStart name
         * @property {string|null} [mime] UploadStart mime
         */

        /**
         * Constructs a new UploadStart.
         * @memberof sfiles
         * @classdesc Represents an UploadStart.
         * @implements IUploadStart
         * @constructor
         * @param {sfiles.IUploadStart=} [properties] Properties to set
         */
        function UploadStart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadStart localKey.
         * @member {string} localKey
         * @memberof sfiles.UploadStart
         * @instance
         */
        UploadStart.prototype.localKey = "";

        /**
         * UploadStart extension.
         * @member {string} extension
         * @memberof sfiles.UploadStart
         * @instance
         */
        UploadStart.prototype.extension = "";

        /**
         * UploadStart name.
         * @member {string} name
         * @memberof sfiles.UploadStart
         * @instance
         */
        UploadStart.prototype.name = "";

        /**
         * UploadStart mime.
         * @member {string} mime
         * @memberof sfiles.UploadStart
         * @instance
         */
        UploadStart.prototype.mime = "";

        /**
         * Creates a new UploadStart instance using the specified properties.
         * @function create
         * @memberof sfiles.UploadStart
         * @static
         * @param {sfiles.IUploadStart=} [properties] Properties to set
         * @returns {sfiles.UploadStart} UploadStart instance
         */
        UploadStart.create = function create(properties) {
            return new UploadStart(properties);
        };

        /**
         * Encodes the specified UploadStart message. Does not implicitly {@link sfiles.UploadStart.verify|verify} messages.
         * @function encode
         * @memberof sfiles.UploadStart
         * @static
         * @param {sfiles.IUploadStart} message UploadStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.localKey != null && Object.hasOwnProperty.call(message, "localKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.localKey);
            if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.extension);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.mime != null && Object.hasOwnProperty.call(message, "mime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.mime);
            return writer;
        };

        /**
         * Encodes the specified UploadStart message, length delimited. Does not implicitly {@link sfiles.UploadStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sfiles.UploadStart
         * @static
         * @param {sfiles.IUploadStart} message UploadStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadStart message from the specified reader or buffer.
         * @function decode
         * @memberof sfiles.UploadStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sfiles.UploadStart} UploadStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sfiles.UploadStart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.localKey = reader.string();
                        break;
                    }
                case 2: {
                        message.extension = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.mime = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sfiles.UploadStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sfiles.UploadStart} UploadStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadStart message.
         * @function verify
         * @memberof sfiles.UploadStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                if (!$util.isString(message.localKey))
                    return "localKey: string expected";
            if (message.extension != null && message.hasOwnProperty("extension"))
                if (!$util.isString(message.extension))
                    return "extension: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.mime != null && message.hasOwnProperty("mime"))
                if (!$util.isString(message.mime))
                    return "mime: string expected";
            return null;
        };

        /**
         * Creates an UploadStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sfiles.UploadStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sfiles.UploadStart} UploadStart
         */
        UploadStart.fromObject = function fromObject(object) {
            if (object instanceof $root.sfiles.UploadStart)
                return object;
            let message = new $root.sfiles.UploadStart();
            if (object.localKey != null)
                message.localKey = String(object.localKey);
            if (object.extension != null)
                message.extension = String(object.extension);
            if (object.name != null)
                message.name = String(object.name);
            if (object.mime != null)
                message.mime = String(object.mime);
            return message;
        };

        /**
         * Creates a plain object from an UploadStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sfiles.UploadStart
         * @static
         * @param {sfiles.UploadStart} message UploadStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.localKey = "";
                object.extension = "";
                object.name = "";
                object.mime = "";
            }
            if (message.localKey != null && message.hasOwnProperty("localKey"))
                object.localKey = message.localKey;
            if (message.extension != null && message.hasOwnProperty("extension"))
                object.extension = message.extension;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.mime != null && message.hasOwnProperty("mime"))
                object.mime = message.mime;
            return object;
        };

        /**
         * Converts this UploadStart to JSON.
         * @function toJSON
         * @memberof sfiles.UploadStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadStart
         * @function getTypeUrl
         * @memberof sfiles.UploadStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sfiles.UploadStart";
        };

        return UploadStart;
    })();

    sfiles.DeleteFile = (function() {

        /**
         * Properties of a DeleteFile.
         * @memberof sfiles
         * @interface IDeleteFile
         * @property {sfiles.IUploadedFile|null} [file] DeleteFile file
         */

        /**
         * Constructs a new DeleteFile.
         * @memberof sfiles
         * @classdesc Represents a DeleteFile.
         * @implements IDeleteFile
         * @constructor
         * @param {sfiles.IDeleteFile=} [properties] Properties to set
         */
        function DeleteFile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteFile file.
         * @member {sfiles.IUploadedFile|null|undefined} file
         * @memberof sfiles.DeleteFile
         * @instance
         */
        DeleteFile.prototype.file = null;

        /**
         * Creates a new DeleteFile instance using the specified properties.
         * @function create
         * @memberof sfiles.DeleteFile
         * @static
         * @param {sfiles.IDeleteFile=} [properties] Properties to set
         * @returns {sfiles.DeleteFile} DeleteFile instance
         */
        DeleteFile.create = function create(properties) {
            return new DeleteFile(properties);
        };

        /**
         * Encodes the specified DeleteFile message. Does not implicitly {@link sfiles.DeleteFile.verify|verify} messages.
         * @function encode
         * @memberof sfiles.DeleteFile
         * @static
         * @param {sfiles.IDeleteFile} message DeleteFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.sfiles.UploadedFile.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeleteFile message, length delimited. Does not implicitly {@link sfiles.DeleteFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sfiles.DeleteFile
         * @static
         * @param {sfiles.IDeleteFile} message DeleteFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteFile message from the specified reader or buffer.
         * @function decode
         * @memberof sfiles.DeleteFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sfiles.DeleteFile} DeleteFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sfiles.DeleteFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.file = $root.sfiles.UploadedFile.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sfiles.DeleteFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sfiles.DeleteFile} DeleteFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteFile message.
         * @function verify
         * @memberof sfiles.DeleteFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.file != null && message.hasOwnProperty("file")) {
                let error = $root.sfiles.UploadedFile.verify(message.file);
                if (error)
                    return "file." + error;
            }
            return null;
        };

        /**
         * Creates a DeleteFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sfiles.DeleteFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sfiles.DeleteFile} DeleteFile
         */
        DeleteFile.fromObject = function fromObject(object) {
            if (object instanceof $root.sfiles.DeleteFile)
                return object;
            let message = new $root.sfiles.DeleteFile();
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".sfiles.DeleteFile.file: object expected");
                message.file = $root.sfiles.UploadedFile.fromObject(object.file);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeleteFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sfiles.DeleteFile
         * @static
         * @param {sfiles.DeleteFile} message DeleteFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.file = null;
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = $root.sfiles.UploadedFile.toObject(message.file, options);
            return object;
        };

        /**
         * Converts this DeleteFile to JSON.
         * @function toJSON
         * @memberof sfiles.DeleteFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteFile
         * @function getTypeUrl
         * @memberof sfiles.DeleteFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sfiles.DeleteFile";
        };

        return DeleteFile;
    })();

    sfiles.UploadEnd = (function() {

        /**
         * Properties of an UploadEnd.
         * @memberof sfiles
         * @interface IUploadEnd
         */

        /**
         * Constructs a new UploadEnd.
         * @memberof sfiles
         * @classdesc Represents an UploadEnd.
         * @implements IUploadEnd
         * @constructor
         * @param {sfiles.IUploadEnd=} [properties] Properties to set
         */
        function UploadEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UploadEnd instance using the specified properties.
         * @function create
         * @memberof sfiles.UploadEnd
         * @static
         * @param {sfiles.IUploadEnd=} [properties] Properties to set
         * @returns {sfiles.UploadEnd} UploadEnd instance
         */
        UploadEnd.create = function create(properties) {
            return new UploadEnd(properties);
        };

        /**
         * Encodes the specified UploadEnd message. Does not implicitly {@link sfiles.UploadEnd.verify|verify} messages.
         * @function encode
         * @memberof sfiles.UploadEnd
         * @static
         * @param {sfiles.IUploadEnd} message UploadEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UploadEnd message, length delimited. Does not implicitly {@link sfiles.UploadEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sfiles.UploadEnd
         * @static
         * @param {sfiles.IUploadEnd} message UploadEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadEnd message from the specified reader or buffer.
         * @function decode
         * @memberof sfiles.UploadEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sfiles.UploadEnd} UploadEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sfiles.UploadEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sfiles.UploadEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sfiles.UploadEnd} UploadEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadEnd message.
         * @function verify
         * @memberof sfiles.UploadEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an UploadEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sfiles.UploadEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sfiles.UploadEnd} UploadEnd
         */
        UploadEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.sfiles.UploadEnd)
                return object;
            return new $root.sfiles.UploadEnd();
        };

        /**
         * Creates a plain object from an UploadEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sfiles.UploadEnd
         * @static
         * @param {sfiles.UploadEnd} message UploadEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UploadEnd to JSON.
         * @function toJSON
         * @memberof sfiles.UploadEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadEnd
         * @function getTypeUrl
         * @memberof sfiles.UploadEnd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sfiles.UploadEnd";
        };

        return UploadEnd;
    })();

    return sfiles;
})();

export const socket_api = $root.socket_api = (() => {

    /**
     * Namespace socket_api.
     * @exports socket_api
     * @namespace
     */
    const socket_api = {};

    socket_api.Ack = (function() {

        /**
         * Properties of an Ack.
         * @memberof socket_api
         * @interface IAck
         * @property {string|null} [uuid] Ack uuid
         * @property {string|null} [errorMessage] Ack errorMessage
         * @property {number|null} [errorCode] Ack errorCode
         */

        /**
         * Constructs a new Ack.
         * @memberof socket_api
         * @classdesc Represents an Ack.
         * @implements IAck
         * @constructor
         * @param {socket_api.IAck=} [properties] Properties to set
         */
        function Ack(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ack uuid.
         * @member {string} uuid
         * @memberof socket_api.Ack
         * @instance
         */
        Ack.prototype.uuid = "";

        /**
         * Ack errorMessage.
         * @member {string} errorMessage
         * @memberof socket_api.Ack
         * @instance
         */
        Ack.prototype.errorMessage = "";

        /**
         * Ack errorCode.
         * @member {number} errorCode
         * @memberof socket_api.Ack
         * @instance
         */
        Ack.prototype.errorCode = 0;

        /**
         * Creates a new Ack instance using the specified properties.
         * @function create
         * @memberof socket_api.Ack
         * @static
         * @param {socket_api.IAck=} [properties] Properties to set
         * @returns {socket_api.Ack} Ack instance
         */
        Ack.create = function create(properties) {
            return new Ack(properties);
        };

        /**
         * Encodes the specified Ack message. Does not implicitly {@link socket_api.Ack.verify|verify} messages.
         * @function encode
         * @memberof socket_api.Ack
         * @static
         * @param {socket_api.IAck} message Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link socket_api.Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof socket_api.Ack
         * @static
         * @param {socket_api.IAck} message Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @function decode
         * @memberof socket_api.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {socket_api.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.socket_api.Ack();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 4: {
                        message.errorCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof socket_api.Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {socket_api.Ack} Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ack message.
         * @function verify
         * @memberof socket_api.Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            return null;
        };

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof socket_api.Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {socket_api.Ack} Ack
         */
        Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.socket_api.Ack)
                return object;
            let message = new $root.socket_api.Ack();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            return message;
        };

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof socket_api.Ack
         * @static
         * @param {socket_api.Ack} message Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.uuid = "";
                object.errorMessage = "";
                object.errorCode = 0;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            return object;
        };

        /**
         * Converts this Ack to JSON.
         * @function toJSON
         * @memberof socket_api.Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ack
         * @function getTypeUrl
         * @memberof socket_api.Ack
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/socket_api.Ack";
        };

        return Ack;
    })();

    socket_api.IlolAck = (function() {

        /**
         * Properties of an IlolAck.
         * @memberof socket_api
         * @interface IIlolAck
         * @property {string|null} [sourceEventId] IlolAck sourceEventId
         */

        /**
         * Constructs a new IlolAck.
         * @memberof socket_api
         * @classdesc Represents an IlolAck.
         * @implements IIlolAck
         * @constructor
         * @param {socket_api.IIlolAck=} [properties] Properties to set
         */
        function IlolAck(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IlolAck sourceEventId.
         * @member {string} sourceEventId
         * @memberof socket_api.IlolAck
         * @instance
         */
        IlolAck.prototype.sourceEventId = "";

        /**
         * Creates a new IlolAck instance using the specified properties.
         * @function create
         * @memberof socket_api.IlolAck
         * @static
         * @param {socket_api.IIlolAck=} [properties] Properties to set
         * @returns {socket_api.IlolAck} IlolAck instance
         */
        IlolAck.create = function create(properties) {
            return new IlolAck(properties);
        };

        /**
         * Encodes the specified IlolAck message. Does not implicitly {@link socket_api.IlolAck.verify|verify} messages.
         * @function encode
         * @memberof socket_api.IlolAck
         * @static
         * @param {socket_api.IIlolAck} message IlolAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IlolAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceEventId != null && Object.hasOwnProperty.call(message, "sourceEventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sourceEventId);
            return writer;
        };

        /**
         * Encodes the specified IlolAck message, length delimited. Does not implicitly {@link socket_api.IlolAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof socket_api.IlolAck
         * @static
         * @param {socket_api.IIlolAck} message IlolAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IlolAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IlolAck message from the specified reader or buffer.
         * @function decode
         * @memberof socket_api.IlolAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {socket_api.IlolAck} IlolAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IlolAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.socket_api.IlolAck();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceEventId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IlolAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof socket_api.IlolAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {socket_api.IlolAck} IlolAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IlolAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IlolAck message.
         * @function verify
         * @memberof socket_api.IlolAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IlolAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceEventId != null && message.hasOwnProperty("sourceEventId"))
                if (!$util.isString(message.sourceEventId))
                    return "sourceEventId: string expected";
            return null;
        };

        /**
         * Creates an IlolAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof socket_api.IlolAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {socket_api.IlolAck} IlolAck
         */
        IlolAck.fromObject = function fromObject(object) {
            if (object instanceof $root.socket_api.IlolAck)
                return object;
            let message = new $root.socket_api.IlolAck();
            if (object.sourceEventId != null)
                message.sourceEventId = String(object.sourceEventId);
            return message;
        };

        /**
         * Creates a plain object from an IlolAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof socket_api.IlolAck
         * @static
         * @param {socket_api.IlolAck} message IlolAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IlolAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.sourceEventId = "";
            if (message.sourceEventId != null && message.hasOwnProperty("sourceEventId"))
                object.sourceEventId = message.sourceEventId;
            return object;
        };

        /**
         * Converts this IlolAck to JSON.
         * @function toJSON
         * @memberof socket_api.IlolAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IlolAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IlolAck
         * @function getTypeUrl
         * @memberof socket_api.IlolAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IlolAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/socket_api.IlolAck";
        };

        return IlolAck;
    })();

    socket_api.IlolError = (function() {

        /**
         * Properties of an IlolError.
         * @memberof socket_api
         * @interface IIlolError
         * @property {string|null} [sourceEventId] IlolError sourceEventId
         * @property {string|null} [reason] IlolError reason
         */

        /**
         * Constructs a new IlolError.
         * @memberof socket_api
         * @classdesc Represents an IlolError.
         * @implements IIlolError
         * @constructor
         * @param {socket_api.IIlolError=} [properties] Properties to set
         */
        function IlolError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IlolError sourceEventId.
         * @member {string} sourceEventId
         * @memberof socket_api.IlolError
         * @instance
         */
        IlolError.prototype.sourceEventId = "";

        /**
         * IlolError reason.
         * @member {string} reason
         * @memberof socket_api.IlolError
         * @instance
         */
        IlolError.prototype.reason = "";

        /**
         * Creates a new IlolError instance using the specified properties.
         * @function create
         * @memberof socket_api.IlolError
         * @static
         * @param {socket_api.IIlolError=} [properties] Properties to set
         * @returns {socket_api.IlolError} IlolError instance
         */
        IlolError.create = function create(properties) {
            return new IlolError(properties);
        };

        /**
         * Encodes the specified IlolError message. Does not implicitly {@link socket_api.IlolError.verify|verify} messages.
         * @function encode
         * @memberof socket_api.IlolError
         * @static
         * @param {socket_api.IIlolError} message IlolError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IlolError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceEventId != null && Object.hasOwnProperty.call(message, "sourceEventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sourceEventId);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified IlolError message, length delimited. Does not implicitly {@link socket_api.IlolError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof socket_api.IlolError
         * @static
         * @param {socket_api.IIlolError} message IlolError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IlolError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IlolError message from the specified reader or buffer.
         * @function decode
         * @memberof socket_api.IlolError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {socket_api.IlolError} IlolError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IlolError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.socket_api.IlolError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceEventId = reader.string();
                        break;
                    }
                case 2: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IlolError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof socket_api.IlolError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {socket_api.IlolError} IlolError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IlolError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IlolError message.
         * @function verify
         * @memberof socket_api.IlolError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IlolError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceEventId != null && message.hasOwnProperty("sourceEventId"))
                if (!$util.isString(message.sourceEventId))
                    return "sourceEventId: string expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates an IlolError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof socket_api.IlolError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {socket_api.IlolError} IlolError
         */
        IlolError.fromObject = function fromObject(object) {
            if (object instanceof $root.socket_api.IlolError)
                return object;
            let message = new $root.socket_api.IlolError();
            if (object.sourceEventId != null)
                message.sourceEventId = String(object.sourceEventId);
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from an IlolError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof socket_api.IlolError
         * @static
         * @param {socket_api.IlolError} message IlolError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IlolError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sourceEventId = "";
                object.reason = "";
            }
            if (message.sourceEventId != null && message.hasOwnProperty("sourceEventId"))
                object.sourceEventId = message.sourceEventId;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this IlolError to JSON.
         * @function toJSON
         * @memberof socket_api.IlolError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IlolError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IlolError
         * @function getTypeUrl
         * @memberof socket_api.IlolError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IlolError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/socket_api.IlolError";
        };

        return IlolError;
    })();

    socket_api.AsyncProgress = (function() {

        /**
         * Properties of an AsyncProgress.
         * @memberof socket_api
         * @interface IAsyncProgress
         * @property {string|null} [key] AsyncProgress key
         * @property {number|null} [progress] AsyncProgress progress
         * @property {string|null} [info] AsyncProgress info
         * @property {boolean|null} [done] AsyncProgress done
         * @property {string|null} [errorMessage] AsyncProgress errorMessage
         * @property {number|null} [errorCode] AsyncProgress errorCode
         */

        /**
         * Constructs a new AsyncProgress.
         * @memberof socket_api
         * @classdesc Represents an AsyncProgress.
         * @implements IAsyncProgress
         * @constructor
         * @param {socket_api.IAsyncProgress=} [properties] Properties to set
         */
        function AsyncProgress(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AsyncProgress key.
         * @member {string} key
         * @memberof socket_api.AsyncProgress
         * @instance
         */
        AsyncProgress.prototype.key = "";

        /**
         * AsyncProgress progress.
         * @member {number} progress
         * @memberof socket_api.AsyncProgress
         * @instance
         */
        AsyncProgress.prototype.progress = 0;

        /**
         * AsyncProgress info.
         * @member {string} info
         * @memberof socket_api.AsyncProgress
         * @instance
         */
        AsyncProgress.prototype.info = "";

        /**
         * AsyncProgress done.
         * @member {boolean} done
         * @memberof socket_api.AsyncProgress
         * @instance
         */
        AsyncProgress.prototype.done = false;

        /**
         * AsyncProgress errorMessage.
         * @member {string} errorMessage
         * @memberof socket_api.AsyncProgress
         * @instance
         */
        AsyncProgress.prototype.errorMessage = "";

        /**
         * AsyncProgress errorCode.
         * @member {number} errorCode
         * @memberof socket_api.AsyncProgress
         * @instance
         */
        AsyncProgress.prototype.errorCode = 0;

        /**
         * Creates a new AsyncProgress instance using the specified properties.
         * @function create
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {socket_api.IAsyncProgress=} [properties] Properties to set
         * @returns {socket_api.AsyncProgress} AsyncProgress instance
         */
        AsyncProgress.create = function create(properties) {
            return new AsyncProgress(properties);
        };

        /**
         * Encodes the specified AsyncProgress message. Does not implicitly {@link socket_api.AsyncProgress.verify|verify} messages.
         * @function encode
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {socket_api.IAsyncProgress} message AsyncProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AsyncProgress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.progress != null && Object.hasOwnProperty.call(message, "progress"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.progress);
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.info);
            if (message.done != null && Object.hasOwnProperty.call(message, "done"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.done);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.errorMessage);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified AsyncProgress message, length delimited. Does not implicitly {@link socket_api.AsyncProgress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {socket_api.IAsyncProgress} message AsyncProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AsyncProgress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AsyncProgress message from the specified reader or buffer.
         * @function decode
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {socket_api.AsyncProgress} AsyncProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AsyncProgress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.socket_api.AsyncProgress();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.progress = reader.double();
                        break;
                    }
                case 3: {
                        message.info = reader.string();
                        break;
                    }
                case 4: {
                        message.done = reader.bool();
                        break;
                    }
                case 5: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 6: {
                        message.errorCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AsyncProgress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {socket_api.AsyncProgress} AsyncProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AsyncProgress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AsyncProgress message.
         * @function verify
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AsyncProgress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.progress != null && message.hasOwnProperty("progress"))
                if (typeof message.progress !== "number")
                    return "progress: number expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            if (message.done != null && message.hasOwnProperty("done"))
                if (typeof message.done !== "boolean")
                    return "done: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            return null;
        };

        /**
         * Creates an AsyncProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {socket_api.AsyncProgress} AsyncProgress
         */
        AsyncProgress.fromObject = function fromObject(object) {
            if (object instanceof $root.socket_api.AsyncProgress)
                return object;
            let message = new $root.socket_api.AsyncProgress();
            if (object.key != null)
                message.key = String(object.key);
            if (object.progress != null)
                message.progress = Number(object.progress);
            if (object.info != null)
                message.info = String(object.info);
            if (object.done != null)
                message.done = Boolean(object.done);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            return message;
        };

        /**
         * Creates a plain object from an AsyncProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {socket_api.AsyncProgress} message AsyncProgress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AsyncProgress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = "";
                object.progress = 0;
                object.info = "";
                object.done = false;
                object.errorMessage = "";
                object.errorCode = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.progress != null && message.hasOwnProperty("progress"))
                object.progress = options.json && !isFinite(message.progress) ? String(message.progress) : message.progress;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            if (message.done != null && message.hasOwnProperty("done"))
                object.done = message.done;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            return object;
        };

        /**
         * Converts this AsyncProgress to JSON.
         * @function toJSON
         * @memberof socket_api.AsyncProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AsyncProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AsyncProgress
         * @function getTypeUrl
         * @memberof socket_api.AsyncProgress
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AsyncProgress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/socket_api.AsyncProgress";
        };

        return AsyncProgress;
    })();

    socket_api.UpgradeApiVersion = (function() {

        /**
         * Properties of an UpgradeApiVersion.
         * @memberof socket_api
         * @interface IUpgradeApiVersion
         * @property {number|null} [latest] UpgradeApiVersion latest
         */

        /**
         * Constructs a new UpgradeApiVersion.
         * @memberof socket_api
         * @classdesc Represents an UpgradeApiVersion.
         * @implements IUpgradeApiVersion
         * @constructor
         * @param {socket_api.IUpgradeApiVersion=} [properties] Properties to set
         */
        function UpgradeApiVersion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpgradeApiVersion latest.
         * @member {number} latest
         * @memberof socket_api.UpgradeApiVersion
         * @instance
         */
        UpgradeApiVersion.prototype.latest = 0;

        /**
         * Creates a new UpgradeApiVersion instance using the specified properties.
         * @function create
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {socket_api.IUpgradeApiVersion=} [properties] Properties to set
         * @returns {socket_api.UpgradeApiVersion} UpgradeApiVersion instance
         */
        UpgradeApiVersion.create = function create(properties) {
            return new UpgradeApiVersion(properties);
        };

        /**
         * Encodes the specified UpgradeApiVersion message. Does not implicitly {@link socket_api.UpgradeApiVersion.verify|verify} messages.
         * @function encode
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {socket_api.IUpgradeApiVersion} message UpgradeApiVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpgradeApiVersion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latest != null && Object.hasOwnProperty.call(message, "latest"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.latest);
            return writer;
        };

        /**
         * Encodes the specified UpgradeApiVersion message, length delimited. Does not implicitly {@link socket_api.UpgradeApiVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {socket_api.IUpgradeApiVersion} message UpgradeApiVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpgradeApiVersion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpgradeApiVersion message from the specified reader or buffer.
         * @function decode
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {socket_api.UpgradeApiVersion} UpgradeApiVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpgradeApiVersion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.socket_api.UpgradeApiVersion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.latest = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpgradeApiVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {socket_api.UpgradeApiVersion} UpgradeApiVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpgradeApiVersion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpgradeApiVersion message.
         * @function verify
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpgradeApiVersion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latest != null && message.hasOwnProperty("latest"))
                if (!$util.isInteger(message.latest))
                    return "latest: integer expected";
            return null;
        };

        /**
         * Creates an UpgradeApiVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {socket_api.UpgradeApiVersion} UpgradeApiVersion
         */
        UpgradeApiVersion.fromObject = function fromObject(object) {
            if (object instanceof $root.socket_api.UpgradeApiVersion)
                return object;
            let message = new $root.socket_api.UpgradeApiVersion();
            if (object.latest != null)
                message.latest = object.latest | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpgradeApiVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {socket_api.UpgradeApiVersion} message UpgradeApiVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpgradeApiVersion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.latest = 0;
            if (message.latest != null && message.hasOwnProperty("latest"))
                object.latest = message.latest;
            return object;
        };

        /**
         * Converts this UpgradeApiVersion to JSON.
         * @function toJSON
         * @memberof socket_api.UpgradeApiVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpgradeApiVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpgradeApiVersion
         * @function getTypeUrl
         * @memberof socket_api.UpgradeApiVersion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpgradeApiVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/socket_api.UpgradeApiVersion";
        };

        return UpgradeApiVersion;
    })();

    /**
     * AckErrorCode enum.
     * @name socket_api.AckErrorCode
     * @enum {number}
     * @property {number} error_code_none=0 error_code_none value
     * @property {number} error_code_unauthorized=401 error_code_unauthorized value
     */
    socket_api.AckErrorCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "error_code_none"] = 0;
        values[valuesById[401] = "error_code_unauthorized"] = 401;
        return values;
    })();

    return socket_api;
})();

export const authentication = $root.authentication = (() => {

    /**
     * Namespace authentication.
     * @exports authentication
     * @namespace
     */
    const authentication = {};

    authentication.LoginToken = (function() {

        /**
         * Properties of a LoginToken.
         * @memberof authentication
         * @interface ILoginToken
         * @property {string|null} [token] LoginToken token
         * @property {string|null} [refresh] LoginToken refresh
         */

        /**
         * Constructs a new LoginToken.
         * @memberof authentication
         * @classdesc Represents a LoginToken.
         * @implements ILoginToken
         * @constructor
         * @param {authentication.ILoginToken=} [properties] Properties to set
         */
        function LoginToken(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginToken token.
         * @member {string} token
         * @memberof authentication.LoginToken
         * @instance
         */
        LoginToken.prototype.token = "";

        /**
         * LoginToken refresh.
         * @member {string} refresh
         * @memberof authentication.LoginToken
         * @instance
         */
        LoginToken.prototype.refresh = "";

        /**
         * Creates a new LoginToken instance using the specified properties.
         * @function create
         * @memberof authentication.LoginToken
         * @static
         * @param {authentication.ILoginToken=} [properties] Properties to set
         * @returns {authentication.LoginToken} LoginToken instance
         */
        LoginToken.create = function create(properties) {
            return new LoginToken(properties);
        };

        /**
         * Encodes the specified LoginToken message. Does not implicitly {@link authentication.LoginToken.verify|verify} messages.
         * @function encode
         * @memberof authentication.LoginToken
         * @static
         * @param {authentication.ILoginToken} message LoginToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.refresh != null && Object.hasOwnProperty.call(message, "refresh"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refresh);
            return writer;
        };

        /**
         * Encodes the specified LoginToken message, length delimited. Does not implicitly {@link authentication.LoginToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof authentication.LoginToken
         * @static
         * @param {authentication.ILoginToken} message LoginToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginToken message from the specified reader or buffer.
         * @function decode
         * @memberof authentication.LoginToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {authentication.LoginToken} LoginToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.authentication.LoginToken();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.refresh = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof authentication.LoginToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {authentication.LoginToken} LoginToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginToken message.
         * @function verify
         * @memberof authentication.LoginToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.refresh != null && message.hasOwnProperty("refresh"))
                if (!$util.isString(message.refresh))
                    return "refresh: string expected";
            return null;
        };

        /**
         * Creates a LoginToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof authentication.LoginToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {authentication.LoginToken} LoginToken
         */
        LoginToken.fromObject = function fromObject(object) {
            if (object instanceof $root.authentication.LoginToken)
                return object;
            let message = new $root.authentication.LoginToken();
            if (object.token != null)
                message.token = String(object.token);
            if (object.refresh != null)
                message.refresh = String(object.refresh);
            return message;
        };

        /**
         * Creates a plain object from a LoginToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof authentication.LoginToken
         * @static
         * @param {authentication.LoginToken} message LoginToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.token = "";
                object.refresh = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.refresh != null && message.hasOwnProperty("refresh"))
                object.refresh = message.refresh;
            return object;
        };

        /**
         * Converts this LoginToken to JSON.
         * @function toJSON
         * @memberof authentication.LoginToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginToken
         * @function getTypeUrl
         * @memberof authentication.LoginToken
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/authentication.LoginToken";
        };

        return LoginToken;
    })();

    authentication.LoginError = (function() {

        /**
         * Properties of a LoginError.
         * @memberof authentication
         * @interface ILoginError
         * @property {string|null} [errorText] LoginError errorText
         * @property {string|null} [errorCode] LoginError errorCode
         */

        /**
         * Constructs a new LoginError.
         * @memberof authentication
         * @classdesc Represents a LoginError.
         * @implements ILoginError
         * @constructor
         * @param {authentication.ILoginError=} [properties] Properties to set
         */
        function LoginError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginError errorText.
         * @member {string} errorText
         * @memberof authentication.LoginError
         * @instance
         */
        LoginError.prototype.errorText = "";

        /**
         * LoginError errorCode.
         * @member {string} errorCode
         * @memberof authentication.LoginError
         * @instance
         */
        LoginError.prototype.errorCode = "";

        /**
         * Creates a new LoginError instance using the specified properties.
         * @function create
         * @memberof authentication.LoginError
         * @static
         * @param {authentication.ILoginError=} [properties] Properties to set
         * @returns {authentication.LoginError} LoginError instance
         */
        LoginError.create = function create(properties) {
            return new LoginError(properties);
        };

        /**
         * Encodes the specified LoginError message. Does not implicitly {@link authentication.LoginError.verify|verify} messages.
         * @function encode
         * @memberof authentication.LoginError
         * @static
         * @param {authentication.ILoginError} message LoginError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorText != null && Object.hasOwnProperty.call(message, "errorText"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorText);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified LoginError message, length delimited. Does not implicitly {@link authentication.LoginError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof authentication.LoginError
         * @static
         * @param {authentication.ILoginError} message LoginError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginError message from the specified reader or buffer.
         * @function decode
         * @memberof authentication.LoginError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {authentication.LoginError} LoginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.authentication.LoginError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.errorText = reader.string();
                        break;
                    }
                case 2: {
                        message.errorCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof authentication.LoginError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {authentication.LoginError} LoginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginError message.
         * @function verify
         * @memberof authentication.LoginError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorText != null && message.hasOwnProperty("errorText"))
                if (!$util.isString(message.errorText))
                    return "errorText: string expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isString(message.errorCode))
                    return "errorCode: string expected";
            return null;
        };

        /**
         * Creates a LoginError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof authentication.LoginError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {authentication.LoginError} LoginError
         */
        LoginError.fromObject = function fromObject(object) {
            if (object instanceof $root.authentication.LoginError)
                return object;
            let message = new $root.authentication.LoginError();
            if (object.errorText != null)
                message.errorText = String(object.errorText);
            if (object.errorCode != null)
                message.errorCode = String(object.errorCode);
            return message;
        };

        /**
         * Creates a plain object from a LoginError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof authentication.LoginError
         * @static
         * @param {authentication.LoginError} message LoginError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.errorText = "";
                object.errorCode = "";
            }
            if (message.errorText != null && message.hasOwnProperty("errorText"))
                object.errorText = message.errorText;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            return object;
        };

        /**
         * Converts this LoginError to JSON.
         * @function toJSON
         * @memberof authentication.LoginError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginError
         * @function getTypeUrl
         * @memberof authentication.LoginError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/authentication.LoginError";
        };

        return LoginError;
    })();

    authentication.Login = (function() {

        /**
         * Properties of a Login.
         * @memberof authentication
         * @interface ILogin
         * @property {string|null} [username] Login username
         * @property {string|null} [password] Login password
         */

        /**
         * Constructs a new Login.
         * @memberof authentication
         * @classdesc Represents a Login.
         * @implements ILogin
         * @constructor
         * @param {authentication.ILogin=} [properties] Properties to set
         */
        function Login(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Login username.
         * @member {string} username
         * @memberof authentication.Login
         * @instance
         */
        Login.prototype.username = "";

        /**
         * Login password.
         * @member {string} password
         * @memberof authentication.Login
         * @instance
         */
        Login.prototype.password = "";

        /**
         * Creates a new Login instance using the specified properties.
         * @function create
         * @memberof authentication.Login
         * @static
         * @param {authentication.ILogin=} [properties] Properties to set
         * @returns {authentication.Login} Login instance
         */
        Login.create = function create(properties) {
            return new Login(properties);
        };

        /**
         * Encodes the specified Login message. Does not implicitly {@link authentication.Login.verify|verify} messages.
         * @function encode
         * @memberof authentication.Login
         * @static
         * @param {authentication.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link authentication.Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof authentication.Login
         * @static
         * @param {authentication.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @function decode
         * @memberof authentication.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {authentication.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.authentication.Login();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof authentication.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {authentication.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Login message.
         * @function verify
         * @memberof authentication.Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof authentication.Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {authentication.Login} Login
         */
        Login.fromObject = function fromObject(object) {
            if (object instanceof $root.authentication.Login)
                return object;
            let message = new $root.authentication.Login();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof authentication.Login
         * @static
         * @param {authentication.Login} message Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this Login to JSON.
         * @function toJSON
         * @memberof authentication.Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Login
         * @function getTypeUrl
         * @memberof authentication.Login
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Login.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/authentication.Login";
        };

        return Login;
    })();

    authentication.RefreshToken = (function() {

        /**
         * Properties of a RefreshToken.
         * @memberof authentication
         * @interface IRefreshToken
         * @property {string|null} [refreshToken] RefreshToken refreshToken
         */

        /**
         * Constructs a new RefreshToken.
         * @memberof authentication
         * @classdesc Represents a RefreshToken.
         * @implements IRefreshToken
         * @constructor
         * @param {authentication.IRefreshToken=} [properties] Properties to set
         */
        function RefreshToken(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshToken refreshToken.
         * @member {string} refreshToken
         * @memberof authentication.RefreshToken
         * @instance
         */
        RefreshToken.prototype.refreshToken = "";

        /**
         * Creates a new RefreshToken instance using the specified properties.
         * @function create
         * @memberof authentication.RefreshToken
         * @static
         * @param {authentication.IRefreshToken=} [properties] Properties to set
         * @returns {authentication.RefreshToken} RefreshToken instance
         */
        RefreshToken.create = function create(properties) {
            return new RefreshToken(properties);
        };

        /**
         * Encodes the specified RefreshToken message. Does not implicitly {@link authentication.RefreshToken.verify|verify} messages.
         * @function encode
         * @memberof authentication.RefreshToken
         * @static
         * @param {authentication.IRefreshToken} message RefreshToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.refreshToken);
            return writer;
        };

        /**
         * Encodes the specified RefreshToken message, length delimited. Does not implicitly {@link authentication.RefreshToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof authentication.RefreshToken
         * @static
         * @param {authentication.IRefreshToken} message RefreshToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshToken message from the specified reader or buffer.
         * @function decode
         * @memberof authentication.RefreshToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {authentication.RefreshToken} RefreshToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.authentication.RefreshToken();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refreshToken = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RefreshToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof authentication.RefreshToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {authentication.RefreshToken} RefreshToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshToken message.
         * @function verify
         * @memberof authentication.RefreshToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            return null;
        };

        /**
         * Creates a RefreshToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof authentication.RefreshToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {authentication.RefreshToken} RefreshToken
         */
        RefreshToken.fromObject = function fromObject(object) {
            if (object instanceof $root.authentication.RefreshToken)
                return object;
            let message = new $root.authentication.RefreshToken();
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            return message;
        };

        /**
         * Creates a plain object from a RefreshToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof authentication.RefreshToken
         * @static
         * @param {authentication.RefreshToken} message RefreshToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.refreshToken = "";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            return object;
        };

        /**
         * Converts this RefreshToken to JSON.
         * @function toJSON
         * @memberof authentication.RefreshToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RefreshToken
         * @function getTypeUrl
         * @memberof authentication.RefreshToken
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RefreshToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/authentication.RefreshToken";
        };

        return RefreshToken;
    })();

    authentication.VerifyToken = (function() {

        /**
         * Properties of a VerifyToken.
         * @memberof authentication
         * @interface IVerifyToken
         */

        /**
         * Constructs a new VerifyToken.
         * @memberof authentication
         * @classdesc Represents a VerifyToken.
         * @implements IVerifyToken
         * @constructor
         * @param {authentication.IVerifyToken=} [properties] Properties to set
         */
        function VerifyToken(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new VerifyToken instance using the specified properties.
         * @function create
         * @memberof authentication.VerifyToken
         * @static
         * @param {authentication.IVerifyToken=} [properties] Properties to set
         * @returns {authentication.VerifyToken} VerifyToken instance
         */
        VerifyToken.create = function create(properties) {
            return new VerifyToken(properties);
        };

        /**
         * Encodes the specified VerifyToken message. Does not implicitly {@link authentication.VerifyToken.verify|verify} messages.
         * @function encode
         * @memberof authentication.VerifyToken
         * @static
         * @param {authentication.IVerifyToken} message VerifyToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified VerifyToken message, length delimited. Does not implicitly {@link authentication.VerifyToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof authentication.VerifyToken
         * @static
         * @param {authentication.IVerifyToken} message VerifyToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyToken message from the specified reader or buffer.
         * @function decode
         * @memberof authentication.VerifyToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {authentication.VerifyToken} VerifyToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.authentication.VerifyToken();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof authentication.VerifyToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {authentication.VerifyToken} VerifyToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyToken message.
         * @function verify
         * @memberof authentication.VerifyToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a VerifyToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof authentication.VerifyToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {authentication.VerifyToken} VerifyToken
         */
        VerifyToken.fromObject = function fromObject(object) {
            if (object instanceof $root.authentication.VerifyToken)
                return object;
            return new $root.authentication.VerifyToken();
        };

        /**
         * Creates a plain object from a VerifyToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof authentication.VerifyToken
         * @static
         * @param {authentication.VerifyToken} message VerifyToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyToken.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this VerifyToken to JSON.
         * @function toJSON
         * @memberof authentication.VerifyToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VerifyToken
         * @function getTypeUrl
         * @memberof authentication.VerifyToken
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VerifyToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/authentication.VerifyToken";
        };

        return VerifyToken;
    })();

    authentication.TokenInvalid = (function() {

        /**
         * Properties of a TokenInvalid.
         * @memberof authentication
         * @interface ITokenInvalid
         */

        /**
         * Constructs a new TokenInvalid.
         * @memberof authentication
         * @classdesc Represents a TokenInvalid.
         * @implements ITokenInvalid
         * @constructor
         * @param {authentication.ITokenInvalid=} [properties] Properties to set
         */
        function TokenInvalid(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TokenInvalid instance using the specified properties.
         * @function create
         * @memberof authentication.TokenInvalid
         * @static
         * @param {authentication.ITokenInvalid=} [properties] Properties to set
         * @returns {authentication.TokenInvalid} TokenInvalid instance
         */
        TokenInvalid.create = function create(properties) {
            return new TokenInvalid(properties);
        };

        /**
         * Encodes the specified TokenInvalid message. Does not implicitly {@link authentication.TokenInvalid.verify|verify} messages.
         * @function encode
         * @memberof authentication.TokenInvalid
         * @static
         * @param {authentication.ITokenInvalid} message TokenInvalid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInvalid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TokenInvalid message, length delimited. Does not implicitly {@link authentication.TokenInvalid.verify|verify} messages.
         * @function encodeDelimited
         * @memberof authentication.TokenInvalid
         * @static
         * @param {authentication.ITokenInvalid} message TokenInvalid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInvalid.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenInvalid message from the specified reader or buffer.
         * @function decode
         * @memberof authentication.TokenInvalid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {authentication.TokenInvalid} TokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInvalid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.authentication.TokenInvalid();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenInvalid message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof authentication.TokenInvalid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {authentication.TokenInvalid} TokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInvalid.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenInvalid message.
         * @function verify
         * @memberof authentication.TokenInvalid
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenInvalid.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TokenInvalid message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof authentication.TokenInvalid
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {authentication.TokenInvalid} TokenInvalid
         */
        TokenInvalid.fromObject = function fromObject(object) {
            if (object instanceof $root.authentication.TokenInvalid)
                return object;
            return new $root.authentication.TokenInvalid();
        };

        /**
         * Creates a plain object from a TokenInvalid message. Also converts values to other types if specified.
         * @function toObject
         * @memberof authentication.TokenInvalid
         * @static
         * @param {authentication.TokenInvalid} message TokenInvalid
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenInvalid.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TokenInvalid to JSON.
         * @function toJSON
         * @memberof authentication.TokenInvalid
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenInvalid.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenInvalid
         * @function getTypeUrl
         * @memberof authentication.TokenInvalid
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenInvalid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/authentication.TokenInvalid";
        };

        return TokenInvalid;
    })();

    authentication.RefreshTokenInvalid = (function() {

        /**
         * Properties of a RefreshTokenInvalid.
         * @memberof authentication
         * @interface IRefreshTokenInvalid
         */

        /**
         * Constructs a new RefreshTokenInvalid.
         * @memberof authentication
         * @classdesc Represents a RefreshTokenInvalid.
         * @implements IRefreshTokenInvalid
         * @constructor
         * @param {authentication.IRefreshTokenInvalid=} [properties] Properties to set
         */
        function RefreshTokenInvalid(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RefreshTokenInvalid instance using the specified properties.
         * @function create
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {authentication.IRefreshTokenInvalid=} [properties] Properties to set
         * @returns {authentication.RefreshTokenInvalid} RefreshTokenInvalid instance
         */
        RefreshTokenInvalid.create = function create(properties) {
            return new RefreshTokenInvalid(properties);
        };

        /**
         * Encodes the specified RefreshTokenInvalid message. Does not implicitly {@link authentication.RefreshTokenInvalid.verify|verify} messages.
         * @function encode
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {authentication.IRefreshTokenInvalid} message RefreshTokenInvalid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenInvalid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RefreshTokenInvalid message, length delimited. Does not implicitly {@link authentication.RefreshTokenInvalid.verify|verify} messages.
         * @function encodeDelimited
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {authentication.IRefreshTokenInvalid} message RefreshTokenInvalid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshTokenInvalid.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshTokenInvalid message from the specified reader or buffer.
         * @function decode
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {authentication.RefreshTokenInvalid} RefreshTokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenInvalid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.authentication.RefreshTokenInvalid();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RefreshTokenInvalid message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {authentication.RefreshTokenInvalid} RefreshTokenInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshTokenInvalid.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshTokenInvalid message.
         * @function verify
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshTokenInvalid.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RefreshTokenInvalid message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {authentication.RefreshTokenInvalid} RefreshTokenInvalid
         */
        RefreshTokenInvalid.fromObject = function fromObject(object) {
            if (object instanceof $root.authentication.RefreshTokenInvalid)
                return object;
            return new $root.authentication.RefreshTokenInvalid();
        };

        /**
         * Creates a plain object from a RefreshTokenInvalid message. Also converts values to other types if specified.
         * @function toObject
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {authentication.RefreshTokenInvalid} message RefreshTokenInvalid
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshTokenInvalid.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RefreshTokenInvalid to JSON.
         * @function toJSON
         * @memberof authentication.RefreshTokenInvalid
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshTokenInvalid.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RefreshTokenInvalid
         * @function getTypeUrl
         * @memberof authentication.RefreshTokenInvalid
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RefreshTokenInvalid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/authentication.RefreshTokenInvalid";
        };

        return RefreshTokenInvalid;
    })();

    return authentication;
})();

export const uploader = $root.uploader = (() => {

    /**
     * Namespace uploader.
     * @exports uploader
     * @namespace
     */
    const uploader = {};

    uploader.UploadTask = (function() {

        /**
         * Properties of an UploadTask.
         * @memberof uploader
         * @interface IUploadTask
         * @property {number|Long|null} [created] UploadTask created
         * @property {string|null} [path] UploadTask path
         * @property {string|null} [name] UploadTask name
         * @property {string|null} [mime] UploadTask mime
         * @property {uploader.UploadStatus|null} [status] UploadTask status
         * @property {number|null} [retryCounter] UploadTask retryCounter
         * @property {string|null} [error] UploadTask error
         * @property {string|null} [fingerprint] UploadTask fingerprint
         * @property {string|null} [url] UploadTask url
         * @property {Object.<string,string>|null} [metadata] UploadTask metadata
         */

        /**
         * Constructs a new UploadTask.
         * @memberof uploader
         * @classdesc Represents an UploadTask.
         * @implements IUploadTask
         * @constructor
         * @param {uploader.IUploadTask=} [properties] Properties to set
         */
        function UploadTask(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadTask created.
         * @member {number|Long} created
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.created = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UploadTask path.
         * @member {string} path
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.path = "";

        /**
         * UploadTask name.
         * @member {string} name
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.name = "";

        /**
         * UploadTask mime.
         * @member {string} mime
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.mime = "";

        /**
         * UploadTask status.
         * @member {uploader.UploadStatus} status
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.status = 0;

        /**
         * UploadTask retryCounter.
         * @member {number} retryCounter
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.retryCounter = 0;

        /**
         * UploadTask error.
         * @member {string} error
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.error = "";

        /**
         * UploadTask fingerprint.
         * @member {string} fingerprint
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.fingerprint = "";

        /**
         * UploadTask url.
         * @member {string} url
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.url = "";

        /**
         * UploadTask metadata.
         * @member {Object.<string,string>} metadata
         * @memberof uploader.UploadTask
         * @instance
         */
        UploadTask.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new UploadTask instance using the specified properties.
         * @function create
         * @memberof uploader.UploadTask
         * @static
         * @param {uploader.IUploadTask=} [properties] Properties to set
         * @returns {uploader.UploadTask} UploadTask instance
         */
        UploadTask.create = function create(properties) {
            return new UploadTask(properties);
        };

        /**
         * Encodes the specified UploadTask message. Does not implicitly {@link uploader.UploadTask.verify|verify} messages.
         * @function encode
         * @memberof uploader.UploadTask
         * @static
         * @param {uploader.IUploadTask} message UploadTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.created);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.mime != null && Object.hasOwnProperty.call(message, "mime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.mime);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            if (message.retryCounter != null && Object.hasOwnProperty.call(message, "retryCounter"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.retryCounter);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.error);
            if (message.fingerprint != null && Object.hasOwnProperty.call(message, "fingerprint"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.fingerprint);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.url);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UploadTask message, length delimited. Does not implicitly {@link uploader.UploadTask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof uploader.UploadTask
         * @static
         * @param {uploader.IUploadTask} message UploadTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadTask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadTask message from the specified reader or buffer.
         * @function decode
         * @memberof uploader.UploadTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {uploader.UploadTask} UploadTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.uploader.UploadTask(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.created = reader.uint64();
                        break;
                    }
                case 2: {
                        message.path = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.mime = reader.string();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                case 6: {
                        message.retryCounter = reader.int32();
                        break;
                    }
                case 7: {
                        message.error = reader.string();
                        break;
                    }
                case 8: {
                        message.fingerprint = reader.string();
                        break;
                    }
                case 9: {
                        message.url = reader.string();
                        break;
                    }
                case 10: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadTask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof uploader.UploadTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {uploader.UploadTask} UploadTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadTask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadTask message.
         * @function verify
         * @memberof uploader.UploadTask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadTask.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.mime != null && message.hasOwnProperty("mime"))
                if (!$util.isString(message.mime))
                    return "mime: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.retryCounter != null && message.hasOwnProperty("retryCounter"))
                if (!$util.isInteger(message.retryCounter))
                    return "retryCounter: integer expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isString(message.error))
                    return "error: string expected";
            if (message.fingerprint != null && message.hasOwnProperty("fingerprint"))
                if (!$util.isString(message.fingerprint))
                    return "fingerprint: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an UploadTask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof uploader.UploadTask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {uploader.UploadTask} UploadTask
         */
        UploadTask.fromObject = function fromObject(object) {
            if (object instanceof $root.uploader.UploadTask)
                return object;
            let message = new $root.uploader.UploadTask();
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = true;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber(true);
            if (object.path != null)
                message.path = String(object.path);
            if (object.name != null)
                message.name = String(object.name);
            if (object.mime != null)
                message.mime = String(object.mime);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "scheduled":
            case 0:
                message.status = 0;
                break;
            case "uploading":
            case 1:
                message.status = 1;
                break;
            case "paused":
            case 3:
                message.status = 3;
                break;
            case "done":
            case 4:
                message.status = 4;
                break;
            case "error":
            case 5:
                message.status = 5;
                break;
            case "restored":
            case 6:
                message.status = 6;
                break;
            }
            if (object.retryCounter != null)
                message.retryCounter = object.retryCounter | 0;
            if (object.error != null)
                message.error = String(object.error);
            if (object.fingerprint != null)
                message.fingerprint = String(object.fingerprint);
            if (object.url != null)
                message.url = String(object.url);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".uploader.UploadTask.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an UploadTask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof uploader.UploadTask
         * @static
         * @param {uploader.UploadTask} message UploadTask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadTask.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                object.path = "";
                object.name = "";
                object.mime = "";
                object.status = options.enums === String ? "scheduled" : 0;
                object.retryCounter = 0;
                object.error = "";
                object.fingerprint = "";
                object.url = "";
            }
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber(true) : message.created;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.mime != null && message.hasOwnProperty("mime"))
                object.mime = message.mime;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.uploader.UploadStatus[message.status] === undefined ? message.status : $root.uploader.UploadStatus[message.status] : message.status;
            if (message.retryCounter != null && message.hasOwnProperty("retryCounter"))
                object.retryCounter = message.retryCounter;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.fingerprint != null && message.hasOwnProperty("fingerprint"))
                object.fingerprint = message.fingerprint;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this UploadTask to JSON.
         * @function toJSON
         * @memberof uploader.UploadTask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadTask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadTask
         * @function getTypeUrl
         * @memberof uploader.UploadTask
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/uploader.UploadTask";
        };

        return UploadTask;
    })();

    /**
     * UploadStatus enum.
     * @name uploader.UploadStatus
     * @enum {number}
     * @property {number} scheduled=0 scheduled value
     * @property {number} uploading=1 uploading value
     * @property {number} paused=3 paused value
     * @property {number} done=4 done value
     * @property {number} error=5 error value
     * @property {number} restored=6 restored value
     */
    uploader.UploadStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "scheduled"] = 0;
        values[valuesById[1] = "uploading"] = 1;
        values[valuesById[3] = "paused"] = 3;
        values[valuesById[4] = "done"] = 4;
        values[valuesById[5] = "error"] = 5;
        values[valuesById[6] = "restored"] = 6;
        return values;
    })();

    uploader.UploadUFile = (function() {

        /**
         * Properties of an UploadUFile.
         * @memberof uploader
         * @interface IUploadUFile
         * @property {string|null} [fileId] UploadUFile fileId
         * @property {uploader.IUploadTask|null} [task] UploadUFile task
         */

        /**
         * Constructs a new UploadUFile.
         * @memberof uploader
         * @classdesc Represents an UploadUFile.
         * @implements IUploadUFile
         * @constructor
         * @param {uploader.IUploadUFile=} [properties] Properties to set
         */
        function UploadUFile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadUFile fileId.
         * @member {string} fileId
         * @memberof uploader.UploadUFile
         * @instance
         */
        UploadUFile.prototype.fileId = "";

        /**
         * UploadUFile task.
         * @member {uploader.IUploadTask|null|undefined} task
         * @memberof uploader.UploadUFile
         * @instance
         */
        UploadUFile.prototype.task = null;

        /**
         * Creates a new UploadUFile instance using the specified properties.
         * @function create
         * @memberof uploader.UploadUFile
         * @static
         * @param {uploader.IUploadUFile=} [properties] Properties to set
         * @returns {uploader.UploadUFile} UploadUFile instance
         */
        UploadUFile.create = function create(properties) {
            return new UploadUFile(properties);
        };

        /**
         * Encodes the specified UploadUFile message. Does not implicitly {@link uploader.UploadUFile.verify|verify} messages.
         * @function encode
         * @memberof uploader.UploadUFile
         * @static
         * @param {uploader.IUploadUFile} message UploadUFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadUFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fileId != null && Object.hasOwnProperty.call(message, "fileId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileId);
            if (message.task != null && Object.hasOwnProperty.call(message, "task"))
                $root.uploader.UploadTask.encode(message.task, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UploadUFile message, length delimited. Does not implicitly {@link uploader.UploadUFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof uploader.UploadUFile
         * @static
         * @param {uploader.IUploadUFile} message UploadUFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadUFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadUFile message from the specified reader or buffer.
         * @function decode
         * @memberof uploader.UploadUFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {uploader.UploadUFile} UploadUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadUFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.uploader.UploadUFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileId = reader.string();
                        break;
                    }
                case 2: {
                        message.task = $root.uploader.UploadTask.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadUFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof uploader.UploadUFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {uploader.UploadUFile} UploadUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadUFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadUFile message.
         * @function verify
         * @memberof uploader.UploadUFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadUFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                if (!$util.isString(message.fileId))
                    return "fileId: string expected";
            if (message.task != null && message.hasOwnProperty("task")) {
                let error = $root.uploader.UploadTask.verify(message.task);
                if (error)
                    return "task." + error;
            }
            return null;
        };

        /**
         * Creates an UploadUFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof uploader.UploadUFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {uploader.UploadUFile} UploadUFile
         */
        UploadUFile.fromObject = function fromObject(object) {
            if (object instanceof $root.uploader.UploadUFile)
                return object;
            let message = new $root.uploader.UploadUFile();
            if (object.fileId != null)
                message.fileId = String(object.fileId);
            if (object.task != null) {
                if (typeof object.task !== "object")
                    throw TypeError(".uploader.UploadUFile.task: object expected");
                message.task = $root.uploader.UploadTask.fromObject(object.task);
            }
            return message;
        };

        /**
         * Creates a plain object from an UploadUFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof uploader.UploadUFile
         * @static
         * @param {uploader.UploadUFile} message UploadUFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadUFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fileId = "";
                object.task = null;
            }
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            if (message.task != null && message.hasOwnProperty("task"))
                object.task = $root.uploader.UploadTask.toObject(message.task, options);
            return object;
        };

        /**
         * Converts this UploadUFile to JSON.
         * @function toJSON
         * @memberof uploader.UploadUFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadUFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadUFile
         * @function getTypeUrl
         * @memberof uploader.UploadUFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadUFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/uploader.UploadUFile";
        };

        return UploadUFile;
    })();

    uploader.DeleteUFile = (function() {

        /**
         * Properties of a DeleteUFile.
         * @memberof uploader
         * @interface IDeleteUFile
         * @property {string|null} [id] DeleteUFile id
         */

        /**
         * Constructs a new DeleteUFile.
         * @memberof uploader
         * @classdesc Represents a DeleteUFile.
         * @implements IDeleteUFile
         * @constructor
         * @param {uploader.IDeleteUFile=} [properties] Properties to set
         */
        function DeleteUFile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteUFile id.
         * @member {string} id
         * @memberof uploader.DeleteUFile
         * @instance
         */
        DeleteUFile.prototype.id = "";

        /**
         * Creates a new DeleteUFile instance using the specified properties.
         * @function create
         * @memberof uploader.DeleteUFile
         * @static
         * @param {uploader.IDeleteUFile=} [properties] Properties to set
         * @returns {uploader.DeleteUFile} DeleteUFile instance
         */
        DeleteUFile.create = function create(properties) {
            return new DeleteUFile(properties);
        };

        /**
         * Encodes the specified DeleteUFile message. Does not implicitly {@link uploader.DeleteUFile.verify|verify} messages.
         * @function encode
         * @memberof uploader.DeleteUFile
         * @static
         * @param {uploader.IDeleteUFile} message DeleteUFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DeleteUFile message, length delimited. Does not implicitly {@link uploader.DeleteUFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof uploader.DeleteUFile
         * @static
         * @param {uploader.IDeleteUFile} message DeleteUFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteUFile message from the specified reader or buffer.
         * @function decode
         * @memberof uploader.DeleteUFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {uploader.DeleteUFile} DeleteUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.uploader.DeleteUFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteUFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof uploader.DeleteUFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {uploader.DeleteUFile} DeleteUFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteUFile message.
         * @function verify
         * @memberof uploader.DeleteUFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteUFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DeleteUFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof uploader.DeleteUFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {uploader.DeleteUFile} DeleteUFile
         */
        DeleteUFile.fromObject = function fromObject(object) {
            if (object instanceof $root.uploader.DeleteUFile)
                return object;
            let message = new $root.uploader.DeleteUFile();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DeleteUFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof uploader.DeleteUFile
         * @static
         * @param {uploader.DeleteUFile} message DeleteUFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteUFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DeleteUFile to JSON.
         * @function toJSON
         * @memberof uploader.DeleteUFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteUFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteUFile
         * @function getTypeUrl
         * @memberof uploader.DeleteUFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteUFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/uploader.DeleteUFile";
        };

        return DeleteUFile;
    })();

    uploader.UploadSlot = (function() {

        /**
         * Properties of an UploadSlot.
         * @memberof uploader
         * @interface IUploadSlot
         * @property {uploader.IUFile|null} [file] UploadSlot file
         * @property {Object.<string,string>|null} [metadata] UploadSlot metadata
         */

        /**
         * Constructs a new UploadSlot.
         * @memberof uploader
         * @classdesc Represents an UploadSlot.
         * @implements IUploadSlot
         * @constructor
         * @param {uploader.IUploadSlot=} [properties] Properties to set
         */
        function UploadSlot(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadSlot file.
         * @member {uploader.IUFile|null|undefined} file
         * @memberof uploader.UploadSlot
         * @instance
         */
        UploadSlot.prototype.file = null;

        /**
         * UploadSlot metadata.
         * @member {Object.<string,string>} metadata
         * @memberof uploader.UploadSlot
         * @instance
         */
        UploadSlot.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new UploadSlot instance using the specified properties.
         * @function create
         * @memberof uploader.UploadSlot
         * @static
         * @param {uploader.IUploadSlot=} [properties] Properties to set
         * @returns {uploader.UploadSlot} UploadSlot instance
         */
        UploadSlot.create = function create(properties) {
            return new UploadSlot(properties);
        };

        /**
         * Encodes the specified UploadSlot message. Does not implicitly {@link uploader.UploadSlot.verify|verify} messages.
         * @function encode
         * @memberof uploader.UploadSlot
         * @static
         * @param {uploader.IUploadSlot} message UploadSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadSlot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.uploader.UFile.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UploadSlot message, length delimited. Does not implicitly {@link uploader.UploadSlot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof uploader.UploadSlot
         * @static
         * @param {uploader.IUploadSlot} message UploadSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadSlot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadSlot message from the specified reader or buffer.
         * @function decode
         * @memberof uploader.UploadSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {uploader.UploadSlot} UploadSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadSlot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.uploader.UploadSlot(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.file = $root.uploader.UFile.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadSlot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof uploader.UploadSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {uploader.UploadSlot} UploadSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadSlot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadSlot message.
         * @function verify
         * @memberof uploader.UploadSlot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadSlot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.file != null && message.hasOwnProperty("file")) {
                let error = $root.uploader.UFile.verify(message.file);
                if (error)
                    return "file." + error;
            }
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an UploadSlot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof uploader.UploadSlot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {uploader.UploadSlot} UploadSlot
         */
        UploadSlot.fromObject = function fromObject(object) {
            if (object instanceof $root.uploader.UploadSlot)
                return object;
            let message = new $root.uploader.UploadSlot();
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".uploader.UploadSlot.file: object expected");
                message.file = $root.uploader.UFile.fromObject(object.file);
            }
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".uploader.UploadSlot.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an UploadSlot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof uploader.UploadSlot
         * @static
         * @param {uploader.UploadSlot} message UploadSlot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadSlot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults)
                object.file = null;
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = $root.uploader.UFile.toObject(message.file, options);
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this UploadSlot to JSON.
         * @function toJSON
         * @memberof uploader.UploadSlot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadSlot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UploadSlot
         * @function getTypeUrl
         * @memberof uploader.UploadSlot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UploadSlot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/uploader.UploadSlot";
        };

        return UploadSlot;
    })();

    uploader.UFile = (function() {

        /**
         * Properties of a UFile.
         * @memberof uploader
         * @interface IUFile
         * @property {string|null} [id] UFile id
         * @property {string|null} [src] UFile src
         * @property {string|null} [preview] UFile preview
         * @property {string|null} [previewLarge] UFile previewLarge
         * @property {string|null} [name] UFile name
         * @property {string|null} [uploadTask] UFile uploadTask
         * @property {string|null} [localPath] UFile localPath
         */

        /**
         * Constructs a new UFile.
         * @memberof uploader
         * @classdesc Represents a UFile.
         * @implements IUFile
         * @constructor
         * @param {uploader.IUFile=} [properties] Properties to set
         */
        function UFile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UFile id.
         * @member {string} id
         * @memberof uploader.UFile
         * @instance
         */
        UFile.prototype.id = "";

        /**
         * UFile src.
         * @member {string} src
         * @memberof uploader.UFile
         * @instance
         */
        UFile.prototype.src = "";

        /**
         * UFile preview.
         * @member {string} preview
         * @memberof uploader.UFile
         * @instance
         */
        UFile.prototype.preview = "";

        /**
         * UFile previewLarge.
         * @member {string} previewLarge
         * @memberof uploader.UFile
         * @instance
         */
        UFile.prototype.previewLarge = "";

        /**
         * UFile name.
         * @member {string} name
         * @memberof uploader.UFile
         * @instance
         */
        UFile.prototype.name = "";

        /**
         * UFile uploadTask.
         * @member {string} uploadTask
         * @memberof uploader.UFile
         * @instance
         */
        UFile.prototype.uploadTask = "";

        /**
         * UFile localPath.
         * @member {string} localPath
         * @memberof uploader.UFile
         * @instance
         */
        UFile.prototype.localPath = "";

        /**
         * Creates a new UFile instance using the specified properties.
         * @function create
         * @memberof uploader.UFile
         * @static
         * @param {uploader.IUFile=} [properties] Properties to set
         * @returns {uploader.UFile} UFile instance
         */
        UFile.create = function create(properties) {
            return new UFile(properties);
        };

        /**
         * Encodes the specified UFile message. Does not implicitly {@link uploader.UFile.verify|verify} messages.
         * @function encode
         * @memberof uploader.UFile
         * @static
         * @param {uploader.IUFile} message UFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.src);
            if (message.preview != null && Object.hasOwnProperty.call(message, "preview"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.preview);
            if (message.previewLarge != null && Object.hasOwnProperty.call(message, "previewLarge"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.previewLarge);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
            if (message.uploadTask != null && Object.hasOwnProperty.call(message, "uploadTask"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.uploadTask);
            if (message.localPath != null && Object.hasOwnProperty.call(message, "localPath"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.localPath);
            return writer;
        };

        /**
         * Encodes the specified UFile message, length delimited. Does not implicitly {@link uploader.UFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof uploader.UFile
         * @static
         * @param {uploader.IUFile} message UFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UFile message from the specified reader or buffer.
         * @function decode
         * @memberof uploader.UFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {uploader.UFile} UFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.uploader.UFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.src = reader.string();
                        break;
                    }
                case 3: {
                        message.preview = reader.string();
                        break;
                    }
                case 4: {
                        message.previewLarge = reader.string();
                        break;
                    }
                case 5: {
                        message.name = reader.string();
                        break;
                    }
                case 6: {
                        message.uploadTask = reader.string();
                        break;
                    }
                case 7: {
                        message.localPath = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof uploader.UFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {uploader.UFile} UFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UFile message.
         * @function verify
         * @memberof uploader.UFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!$util.isString(message.src))
                    return "src: string expected";
            if (message.preview != null && message.hasOwnProperty("preview"))
                if (!$util.isString(message.preview))
                    return "preview: string expected";
            if (message.previewLarge != null && message.hasOwnProperty("previewLarge"))
                if (!$util.isString(message.previewLarge))
                    return "previewLarge: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.uploadTask != null && message.hasOwnProperty("uploadTask"))
                if (!$util.isString(message.uploadTask))
                    return "uploadTask: string expected";
            if (message.localPath != null && message.hasOwnProperty("localPath"))
                if (!$util.isString(message.localPath))
                    return "localPath: string expected";
            return null;
        };

        /**
         * Creates a UFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof uploader.UFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {uploader.UFile} UFile
         */
        UFile.fromObject = function fromObject(object) {
            if (object instanceof $root.uploader.UFile)
                return object;
            let message = new $root.uploader.UFile();
            if (object.id != null)
                message.id = String(object.id);
            if (object.src != null)
                message.src = String(object.src);
            if (object.preview != null)
                message.preview = String(object.preview);
            if (object.previewLarge != null)
                message.previewLarge = String(object.previewLarge);
            if (object.name != null)
                message.name = String(object.name);
            if (object.uploadTask != null)
                message.uploadTask = String(object.uploadTask);
            if (object.localPath != null)
                message.localPath = String(object.localPath);
            return message;
        };

        /**
         * Creates a plain object from a UFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof uploader.UFile
         * @static
         * @param {uploader.UFile} message UFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.src = "";
                object.preview = "";
                object.previewLarge = "";
                object.name = "";
                object.uploadTask = "";
                object.localPath = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = message.src;
            if (message.preview != null && message.hasOwnProperty("preview"))
                object.preview = message.preview;
            if (message.previewLarge != null && message.hasOwnProperty("previewLarge"))
                object.previewLarge = message.previewLarge;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.uploadTask != null && message.hasOwnProperty("uploadTask"))
                object.uploadTask = message.uploadTask;
            if (message.localPath != null && message.hasOwnProperty("localPath"))
                object.localPath = message.localPath;
            return object;
        };

        /**
         * Converts this UFile to JSON.
         * @function toJSON
         * @memberof uploader.UFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UFile
         * @function getTypeUrl
         * @memberof uploader.UFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/uploader.UFile";
        };

        return UFile;
    })();

    return uploader;
})();

export { $root as default };
