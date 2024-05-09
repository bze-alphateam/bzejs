import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateMarket, MsgCreateMarketResponse, MsgCreateOrder, MsgCreateOrderResponse, MsgCancelOrder, MsgCancelOrderResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  createMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createMarket = this.createMarket.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
  }

  createMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Msg", "CreateMarket", data);
    return promise.then(data => MsgCreateMarketResponse.decode(new _m0.Reader(data)));
  }

  createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Msg", "CreateOrder", data);
    return promise.then(data => MsgCreateOrderResponse.decode(new _m0.Reader(data)));
  }

  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Msg", "CancelOrder", data);
    return promise.then(data => MsgCancelOrderResponse.decode(new _m0.Reader(data)));
  }

}