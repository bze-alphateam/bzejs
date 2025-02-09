import { Rpc } from "../../helpers";
import { MsgCreateMarket, MsgCreateMarketResponse, MsgCreateOrder, MsgCreateOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgFillOrders, MsgFillOrdersResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    createMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
    createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    fillOrders(request: MsgFillOrders): Promise<MsgFillOrdersResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
    createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    fillOrders(request: MsgFillOrders): Promise<MsgFillOrdersResponse>;
}
