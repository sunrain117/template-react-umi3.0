import { getUuid, isProdEnv } from './tools';

const wsUrl = isProdEnv()
  ? 'wss://yxp-websocket-pc.youxinpai.com/ws'
  : 'ws://172.18.98.10:8899/ws';

// function tradeSocket(){
//   this.heartTimer=null;
// }
type TradeSocketProps = {
  publishId: string;
  sessionId: string;
  isHeartbeat?: boolean;
  clientType?: string;
  onSuccess?: (...arg: any[]) => any;
  onError?: (...arg: any[]) => any;
};

export default class TradeSocket {
  private socket: WebSocket;
  private sendData: any;
  private props: TradeSocketProps; //当前推送的拍品id
  private _heartTimer: any; //心跳保持

  constructor(props: TradeSocketProps) {
    const { publishId, sessionId } = props;

    this.props = props;
    this.socket = new WebSocket(wsUrl);
    this.socket.onopen = this._onOpen.bind(this);
    this.socket.onmessage = this._onMessage.bind(this);
    this.socket.onclose = this._onClose.bind(this);
    this.socket.onerror = this._onError.bind(this);
    this.sendData = {
      publishId: publishId,
      sessionId: sessionId,
      isHeartbeat: false,
      uuid: getUuid(),
      clientType: '3', //3:锤子Web 0:买家网站
    };
  }

  _onMessage(data: any) {
    console.log('onmessage', JSON.parse(data.data));
    data = JSON.parse(data.data);
    if (data.isHeartbeat) {
      return;
    } else if (data.publishId == this.props.publishId) {
      this.props.onSuccess && this.props.onSuccess(data);
    }
  }

  _onOpen() {
    this.socket.send(JSON.stringify(this.sendData));
    if (this._heartTimer == null) {
      this._heartStart();
    }
  }

  _onClose() {
    console.log('websocket closed');
  }

  _onError() {
    console.log('websocket connection error');
  }

  /**
   * 客户端发送心跳
   */
  _heartStart() {
    if (this.socket) {
      this._heartTimer = setInterval(() => {
        this.socket.send(
          JSON.stringify({ uuid: this.sendData.uuid, isHeartbeat: true }),
        );
      }, 5000);
    }
  }

  onClose() {
    this.socket && this.socket.close();
    this._heartTimer && clearInterval(this._heartTimer);
    this._heartTimer = null;
  }
}
