import {SocketRxMessage, SocketRxMessageData, SocketTxMessage} from "../socket_messages";
import {socket_api, uploader, sfiles, form_errors, authentication} from "./compiled";

export namespace proto {

export class TxAppleLogin extends SocketTxMessage<authentication.AppleLogin> {
    static type: string = 'apple-login';
    proto: authentication.AppleLogin;
    protoClass = authentication.AppleLogin;
    

    constructor(proto: authentication.AppleLogin) {
        super(TxAppleLogin.type, true);
        this.proto = proto;
    }

    static create(properties: authentication.IAppleLogin = {}) {
        return new TxAppleLogin(authentication.AppleLogin.create(properties));
    }
}


export class TxLogin extends SocketTxMessage<authentication.Login> {
    static type: string = 'login';
    proto: authentication.Login;
    protoClass = authentication.Login;
    

    constructor(proto: authentication.Login) {
        super(TxLogin.type, true);
        this.proto = proto;
    }

    static create(properties: authentication.ILogin = {}) {
        return new TxLogin(authentication.Login.create(properties));
    }
}


export class RxLoginError extends SocketRxMessage<authentication.LoginError> {
    static type: string = 'login-error';
    proto = authentication.LoginError.create({});
    protoClass = authentication.LoginError;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxLoginError.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxLoginError(message);
    };
}


export class RxLoginToken extends SocketRxMessage<authentication.LoginToken> {
    static type: string = 'login-token';
    proto = authentication.LoginToken.create({});
    protoClass = authentication.LoginToken;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxLoginToken.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxLoginToken(message);
    };
}


export class RxTokenInvalid extends SocketRxMessage<authentication.TokenInvalid> {
    static type: string = 'token-invalid';
    proto = authentication.TokenInvalid.create({});
    protoClass = authentication.TokenInvalid;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxTokenInvalid.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxTokenInvalid(message);
    };
}


export class TxVerifyToken extends SocketTxMessage<authentication.VerifyToken> {
    static type: string = 'verify-token';
    proto: authentication.VerifyToken;
    protoClass = authentication.VerifyToken;
    

    constructor(proto: authentication.VerifyToken) {
        super(TxVerifyToken.type, true);
        this.proto = proto;
    }

    static create(properties: authentication.IVerifyToken = {}) {
        return new TxVerifyToken(authentication.VerifyToken.create(properties));
    }
}


export class RxFormErrors extends SocketRxMessage<form_errors.FormErrors> {
    static type: string = 'form-errors';
    proto = form_errors.FormErrors.create({});
    protoClass = form_errors.FormErrors;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxFormErrors.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxFormErrors(message);
    };
}


export class TxDeleteFile extends SocketTxMessage<sfiles.DeleteFile> {
    static type: string = 'delete-file';
    proto: sfiles.DeleteFile;
    protoClass = sfiles.DeleteFile;
    

    constructor(proto: sfiles.DeleteFile) {
        super(TxDeleteFile.type, true);
        this.proto = proto;
    }

    static create(properties: sfiles.IDeleteFile = {}) {
        return new TxDeleteFile(sfiles.DeleteFile.create(properties));
    }
}


export class RxUploadDone extends SocketRxMessage<sfiles.UploadDone> {
    static type: string = 'upload-done';
    proto = sfiles.UploadDone.create({});
    protoClass = sfiles.UploadDone;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxUploadDone.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxUploadDone(message);
    };
}


export class TxUploadEnd extends SocketTxMessage<sfiles.UploadEnd> {
    static type: string = 'upload-end';
    proto: sfiles.UploadEnd;
    protoClass = sfiles.UploadEnd;
    

    constructor(proto: sfiles.UploadEnd) {
        super(TxUploadEnd.type, true);
        this.proto = proto;
    }

    static create(properties: sfiles.IUploadEnd = {}) {
        return new TxUploadEnd(sfiles.UploadEnd.create(properties));
    }
}


export class RxUploadProgress extends SocketRxMessage<sfiles.UploadProgress> {
    static type: string = 'upload-progress';
    proto = sfiles.UploadProgress.create({});
    protoClass = sfiles.UploadProgress;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxUploadProgress.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxUploadProgress(message);
    };
}


export class TxUploadStart extends SocketTxMessage<sfiles.UploadStart> {
    static type: string = 'upload-start';
    proto: sfiles.UploadStart;
    protoClass = sfiles.UploadStart;
    

    constructor(proto: sfiles.UploadStart) {
        super(TxUploadStart.type, true);
        this.proto = proto;
    }

    static create(properties: sfiles.IUploadStart = {}) {
        return new TxUploadStart(sfiles.UploadStart.create(properties));
    }
}


export class RxUploadStartSlot extends SocketRxMessage<sfiles.UploadStartSlot> {
    static type: string = 'upload-start';
    proto = sfiles.UploadStartSlot.create({});
    protoClass = sfiles.UploadStartSlot;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxUploadStartSlot.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxUploadStartSlot(message);
    };
}


export class RxAck extends SocketRxMessage<socket_api.Ack> {
    static type: string = 'ack';
    proto = socket_api.Ack.create({});
    protoClass = socket_api.Ack;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxAck.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxAck(message);
    };
}


export class RxAsyncProgress extends SocketRxMessage<socket_api.AsyncProgress> {
    static type: string = 'async-progress';
    proto = socket_api.AsyncProgress.create({});
    protoClass = socket_api.AsyncProgress;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxAsyncProgress.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxAsyncProgress(message);
    };
}


export class RxUpgradeApiVersion extends SocketRxMessage<socket_api.UpgradeApiVersion> {
    static type: string = 'upgrade-api-version';
    proto = socket_api.UpgradeApiVersion.create({});
    protoClass = socket_api.UpgradeApiVersion;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxUpgradeApiVersion.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxUpgradeApiVersion(message);
    };
}


export class TxDeleteUFile extends SocketTxMessage<uploader.DeleteUFile> {
    static type: string = 'delete-ufile';
    proto: uploader.DeleteUFile;
    protoClass = uploader.DeleteUFile;
    

    constructor(proto: uploader.DeleteUFile) {
        super(TxDeleteUFile.type, true);
        this.proto = proto;
    }

    static create(properties: uploader.IDeleteUFile = {}) {
        return new TxDeleteUFile(uploader.DeleteUFile.create(properties));
    }
}


export class RxUploadSlot extends SocketRxMessage<uploader.UploadSlot> {
    static type: string = 'upload-slot';
    proto = uploader.UploadSlot.create({});
    protoClass = uploader.UploadSlot;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxUploadSlot.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxUploadSlot(message);
    };
}


export class RxUploadTask extends SocketRxMessage<uploader.UploadTask> {
    static type: string = 'upload-task';
    proto = uploader.UploadTask.create({});
    protoClass = uploader.UploadTask;
    

    constructor(message: SocketRxMessageData | null = null) {
        super(RxUploadTask.type, message);
        if (message !== null) {
            this.proto = this.protoClass.fromObject(message.body);
        }
    }

    fromMessage(message: SocketRxMessageData) {
        return new RxUploadTask(message);
    };
}


export class TxUploadUFile extends SocketTxMessage<uploader.UploadUFile> {
    static type: string = 'upload-ufile';
    proto: uploader.UploadUFile;
    protoClass = uploader.UploadUFile;
    

    constructor(proto: uploader.UploadUFile) {
        super(TxUploadUFile.type, true);
        this.proto = proto;
    }

    static create(properties: uploader.IUploadUFile = {}) {
        return new TxUploadUFile(uploader.UploadUFile.create(properties));
    }
}


export const rxMessages: SocketRxMessage<any>[] = [
    new RxLoginError(),
    new RxLoginToken(),
    new RxTokenInvalid(),
    new RxFormErrors(),
    new RxUploadDone(),
    new RxUploadProgress(),
    new RxUploadStartSlot(),
    new RxAck(),
    new RxAsyncProgress(),
    new RxUpgradeApiVersion(),
    new RxUploadSlot(),
    new RxUploadTask()
];
}