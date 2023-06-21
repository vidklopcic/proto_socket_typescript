import { first, Subject } from 'rxjs';

export class SocketConnector {
  host: string;
  rx = new Subject<string>();
  private socket: WebSocket | null = null;

  connectedChanges = new Subject<boolean>();
  private _connected = false;
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
    this._reconnect();
  }

  send(data: string) {
    this.socket?.send(data);
  }

  replaceHost(newHost: string) {
    this.host = newHost;
    this._reconnect();
  }

  private _setConnected(isConnected: boolean) {
    if (isConnected !== this._connected) {
      this._connected = isConnected;
      this.connectedChanges.next(this.connected);
    }
  }

  private _reconnect() {
    this._setConnected(false);
    this.socket?.close();
    this.socket = new WebSocket(this.host);
    this.socket.onopen = (e) => this._setConnected(true);
    this.socket.onclose = (e) => {
      this.socket = null;
      this._setConnected(false);
      setTimeout(() => this._reconnect(), 1000);
    };
    this.socket.onmessage = (event) => this.rx.next(event.data);
  }
}
