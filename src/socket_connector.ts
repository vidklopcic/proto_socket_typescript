import {first, Subject} from 'rxjs';
import * as ws from 'ws';

const isBrowser = typeof window !== 'undefined';

export class SocketConnector {
    host: string;
    rx = new Subject<string>();
    private socket: WebSocket | ws | null = null;
    errorSubject = new Subject<Error>();

    connectedChanges = new Subject<boolean>();
    private _connected = false;
    private _disconnected = false;
    private _lastReconnectAttemptId = -1;
    verbose = false;

    get connected(): boolean {
        return this._connected;
    }

    get whenConnected(): Promise<null> {
        return new Promise<null>((resolve) => {
            if (this.connected) {
                resolve(null);
            } else {
                this.connectedChanges.pipe(first((v) => v)).subscribe((e) => resolve(null));
            }
        });
    }

    constructor(host: string) {
        this.host = host;
        if (isBrowser) {
            window.addEventListener('focus', () => {
                if (!this.connected) {
                    this.reconnect();
                }
            });
        }
        this.reconnect();
    }

    send(data: string) {
        this.socket?.send(data);
    }

    replaceHost(newHost: string) {
        this.host = newHost;
        this.reconnect();
    }

    private _setConnected(isConnected: boolean) {
        if (isConnected !== this._connected) {
            if (this.verbose) console.log('SocketConnector: connected = ' + isConnected);
            this._connected = isConnected;
            this.connectedChanges.next(this.connected);
        }
    }

    disconnect() {
        this._disconnected = true;
        this._setConnected(false);
        this.socket?.close();
    }

    connect() {
        this._disconnected = false;
        this.reconnect();
    }

    reconnect() {
        if (this.verbose) console.log('SocketConnector: reconnect');
        if (this._disconnected) {
            throw new Error('SocketConnector is disconnected');
        }
        const reconnectAttemptId = Math.random();
        this._lastReconnectAttemptId = reconnectAttemptId;
        this._setConnected(false);
        this.socket?.close();

        if (isBrowser) {
            if (this.verbose) console.log('SocketConnector: new WebSocket');
            this.socket = new WebSocket(this.host);
        } else {
            if (this.verbose) console.log('SocketConnector: new ws');
            this.socket = new ws(this.host);
        }

        this.socket.onopen = () => {
            if (this.verbose) console.log('SocketConnector: onopen');
            this._setConnected(true);
        };
        this.socket.onclose = (e: any) => {
            if (this.verbose) console.log('SocketConnector: onclose', e);
            this.socket = null;
            this._setConnected(false);
            setTimeout(() => {
                if (this._lastReconnectAttemptId !== reconnectAttemptId) return;
                this.reconnect()
            }, 1000);
        };
        this.socket.onerror = (e: any) => {
            if (this.verbose) console.log('SocketConnector: onerror', e);
            this.socket = null;
            this._setConnected(false);
            setTimeout(() => {
                if (this._lastReconnectAttemptId !== reconnectAttemptId) return;
                this.reconnect()
            }, 1000);
        }
        this.socket.onmessage = (event: any) => this.rx.next(event.data);
    }
}
