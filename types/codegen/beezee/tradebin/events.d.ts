import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface OrderCreateMessageEvent {
    creator: string;
    marketId: string;
    orderType: string;
    amount: string;
    price: string;
}
export interface OrderCreateMessageEventSDKType {
    creator: string;
    market_id: string;
    order_type: string;
    amount: string;
    price: string;
}
export interface OrderCancelMessageEvent {
    creator: string;
    marketId: string;
    orderId: string;
    orderType: string;
}
export interface OrderCancelMessageEventSDKType {
    creator: string;
    marketId: string;
    orderId: string;
    order_type: string;
}
export interface MarketCreatedEvent {
    creator: string;
    base: string;
    quote: string;
}
export interface MarketCreatedEventSDKType {
    creator: string;
    base: string;
    quote: string;
}
export interface OrderExecutedEvent {
    id: string;
    marketId: string;
    orderType: string;
    amount: string;
    price: string;
}
export interface OrderExecutedEventSDKType {
    id: string;
    market_id: string;
    order_type: string;
    amount: string;
    price: string;
}
export interface OrderCanceledEvent {
    id: string;
    marketId: string;
    orderType: string;
    amount: string;
    price: string;
}
export interface OrderCanceledEventSDKType {
    id: string;
    market_id: string;
    order_type: string;
    amount: string;
    price: string;
}
export interface OrderSavedEvent {
    id: string;
    marketId: string;
    orderType: string;
    amount: string;
    price: string;
}
export interface OrderSavedEventSDKType {
    id: string;
    market_id: string;
    order_type: string;
    amount: string;
    price: string;
}
export declare const OrderCreateMessageEvent: {
    encode(message: OrderCreateMessageEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderCreateMessageEvent;
    fromPartial(object: DeepPartial<OrderCreateMessageEvent>): OrderCreateMessageEvent;
};
export declare const OrderCancelMessageEvent: {
    encode(message: OrderCancelMessageEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderCancelMessageEvent;
    fromPartial(object: DeepPartial<OrderCancelMessageEvent>): OrderCancelMessageEvent;
};
export declare const MarketCreatedEvent: {
    encode(message: MarketCreatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketCreatedEvent;
    fromPartial(object: DeepPartial<MarketCreatedEvent>): MarketCreatedEvent;
};
export declare const OrderExecutedEvent: {
    encode(message: OrderExecutedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderExecutedEvent;
    fromPartial(object: DeepPartial<OrderExecutedEvent>): OrderExecutedEvent;
};
export declare const OrderCanceledEvent: {
    encode(message: OrderCanceledEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderCanceledEvent;
    fromPartial(object: DeepPartial<OrderCanceledEvent>): OrderCanceledEvent;
};
export declare const OrderSavedEvent: {
    encode(message: OrderSavedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderSavedEvent;
    fromPartial(object: DeepPartial<OrderSavedEvent>): OrderSavedEvent;
};
