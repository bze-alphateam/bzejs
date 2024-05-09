import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgCreateMarket {
    creator: string;
    base: string;
    quote: string;
}
export interface MsgCreateMarketSDKType {
    creator: string;
    base: string;
    quote: string;
}
export interface MsgCreateMarketResponse {
}
export interface MsgCreateMarketResponseSDKType {
}
export interface MsgCreateOrder {
    creator: string;
    orderType: string;
    amount: string;
    price: string;
    marketId: string;
}
export interface MsgCreateOrderSDKType {
    creator: string;
    order_type: string;
    amount: string;
    price: string;
    marketId: string;
}
export interface MsgCreateOrderResponse {
}
export interface MsgCreateOrderResponseSDKType {
}
export interface MsgCancelOrder {
    creator: string;
    marketId: string;
    orderId: string;
    orderType: string;
}
export interface MsgCancelOrderSDKType {
    creator: string;
    marketId: string;
    orderId: string;
    order_type: string;
}
export interface MsgCancelOrderResponse {
}
export interface MsgCancelOrderResponseSDKType {
}
export declare const MsgCreateMarket: {
    encode(message: MsgCreateMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarket;
    fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket;
};
export declare const MsgCreateMarketResponse: {
    encode(_: MsgCreateMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarketResponse;
    fromPartial(_: DeepPartial<MsgCreateMarketResponse>): MsgCreateMarketResponse;
};
export declare const MsgCreateOrder: {
    encode(message: MsgCreateOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder;
    fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder;
};
export declare const MsgCreateOrderResponse: {
    encode(_: MsgCreateOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrderResponse;
    fromPartial(_: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse;
};
export declare const MsgCancelOrder: {
    encode(message: MsgCancelOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder;
    fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder;
};
export declare const MsgCancelOrderResponse: {
    encode(_: MsgCancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse;
};
