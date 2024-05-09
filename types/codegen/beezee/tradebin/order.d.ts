import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface Order {
    id: string;
    marketId: string;
    orderType: string;
    amount: string;
    price: string;
    createdAt: Long;
    owner: string;
}
export interface OrderSDKType {
    id: string;
    market_id: string;
    order_type: string;
    amount: string;
    price: string;
    created_at: Long;
    owner: string;
}
export interface OrderReference {
    id: string;
    marketId: string;
    orderType: string;
}
export interface OrderReferenceSDKType {
    id: string;
    market_id: string;
    order_type: string;
}
export interface AggregatedOrder {
    marketId: string;
    orderType: string;
    amount: string;
    price: string;
}
export interface AggregatedOrderSDKType {
    market_id: string;
    order_type: string;
    amount: string;
    price: string;
}
export interface HistoryOrder {
    marketId: string;
    orderType: string;
    amount: string;
    price: string;
    executedAt: Long;
    maker: string;
    taker: string;
}
export interface HistoryOrderSDKType {
    market_id: string;
    order_type: string;
    amount: string;
    price: string;
    executed_at: Long;
    maker: string;
    taker: string;
}
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromPartial(object: DeepPartial<Order>): Order;
};
export declare const OrderReference: {
    encode(message: OrderReference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderReference;
    fromPartial(object: DeepPartial<OrderReference>): OrderReference;
};
export declare const AggregatedOrder: {
    encode(message: AggregatedOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AggregatedOrder;
    fromPartial(object: DeepPartial<AggregatedOrder>): AggregatedOrder;
};
export declare const HistoryOrder: {
    encode(message: HistoryOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HistoryOrder;
    fromPartial(object: DeepPartial<HistoryOrder>): HistoryOrder;
};
