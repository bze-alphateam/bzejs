//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateMarket, MsgCreateMarketResponse, MsgCreateOrder, MsgCreateOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgFillOrders, MsgFillOrdersResponse, MsgCreateLiquidityPool, MsgCreateLiquidityPoolResponse, MsgAddLiquidity, MsgAddLiquidityResponse, MsgRemoveLiquidity, MsgRemoveLiquidityResponse, MsgMultiSwap, MsgMultiSwapResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  fillOrders(request: MsgFillOrders): Promise<MsgFillOrdersResponse>;
  createLiquidityPool(request: MsgCreateLiquidityPool): Promise<MsgCreateLiquidityPoolResponse>;
  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
  multiSwap(request: MsgMultiSwap): Promise<MsgMultiSwapResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createMarket = this.createMarket.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.fillOrders = this.fillOrders.bind(this);
    this.createLiquidityPool = this.createLiquidityPool.bind(this);
    this.addLiquidity = this.addLiquidity.bind(this);
    this.removeLiquidity = this.removeLiquidity.bind(this);
    this.multiSwap = this.multiSwap.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "CreateMarket", data);
    return promise.then(data => MsgCreateMarketResponse.decode(new BinaryReader(data)));
  }
  createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "CreateOrder", data);
    return promise.then(data => MsgCreateOrderResponse.decode(new BinaryReader(data)));
  }
  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "CancelOrder", data);
    return promise.then(data => MsgCancelOrderResponse.decode(new BinaryReader(data)));
  }
  fillOrders(request: MsgFillOrders): Promise<MsgFillOrdersResponse> {
    const data = MsgFillOrders.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "FillOrders", data);
    return promise.then(data => MsgFillOrdersResponse.decode(new BinaryReader(data)));
  }
  createLiquidityPool(request: MsgCreateLiquidityPool): Promise<MsgCreateLiquidityPoolResponse> {
    const data = MsgCreateLiquidityPool.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "CreateLiquidityPool", data);
    return promise.then(data => MsgCreateLiquidityPoolResponse.decode(new BinaryReader(data)));
  }
  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "AddLiquidity", data);
    return promise.then(data => MsgAddLiquidityResponse.decode(new BinaryReader(data)));
  }
  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "RemoveLiquidity", data);
    return promise.then(data => MsgRemoveLiquidityResponse.decode(new BinaryReader(data)));
  }
  multiSwap(request: MsgMultiSwap): Promise<MsgMultiSwapResponse> {
    const data = MsgMultiSwap.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Msg", "MultiSwap", data);
    return promise.then(data => MsgMultiSwapResponse.decode(new BinaryReader(data)));
  }
}