import {first, Subject} from 'rxjs';

export class SocketConnector {
    host: string;
    rx = new Subject<string>();
    private socket: WebSocket | null = null;

    connectedChanges = new Subject<boolean>();
    private _connected = false;
    private _disconnected = false;
    private _lastReconnectAttemptId = -1;

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
        if (typeof window !== 'undefined') {
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
        if (this._disconnected) {
            throw new Error('SocketConnector is disconnected');
        }
        const reconnectAttemptId = Math.random();
        this._lastReconnectAttemptId = reconnectAttemptId;
        this._setConnected(false);
        this.socket?.close();
        this.socket = new WebSocket(this.host);
        this.socket.onopen = (e) => this._setConnected(true);
        this.socket.onclose = (e) => {
            this.socket = null;
            this._setConnected(false);
            setTimeout(() => {
                if (this._lastReconnectAttemptId !== reconnectAttemptId) return;
                this.reconnect()
            }, 1000);
        };
        this.socket.onmessage = (event) => this.rx.next(event.data);
    }
}
