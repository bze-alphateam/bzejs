import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Market, MarketSDKType } from "./market";
import { OrderReference, OrderReferenceSDKType, AggregatedOrder, AggregatedOrderSDKType, HistoryOrder, HistoryOrderSDKType, Order, OrderSDKType } from "./order";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params?: ParamsSDKType;
}
export interface QueryGetMarketRequest {
    base: string;
    quote: string;
}
export interface QueryGetMarketRequestSDKType {
    base: string;
    quote: string;
}
export interface QueryGetMarketResponse {
    market?: Market;
}
export interface QueryGetMarketResponseSDKType {
    market?: MarketSDKType;
}
export interface QueryAllMarketRequest {
    pagination?: PageRequest;
}
export interface QueryAllMarketRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllMarketResponse {
    market: Market[];
    pagination?: PageResponse;
}
export interface QueryAllMarketResponseSDKType {
    market: MarketSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAssetMarketsRequest {
    asset: string;
}
export interface QueryAssetMarketsRequestSDKType {
    asset: string;
}
export interface QueryAssetMarketsResponse {
    base: Market[];
    quote: Market[];
}
export interface QueryAssetMarketsResponseSDKType {
    base: MarketSDKType[];
    quote: MarketSDKType[];
}
export interface QueryUserMarketOrdersRequest {
    address: string;
    market: string;
    pagination?: PageRequest;
}
export interface QueryUserMarketOrdersRequestSDKType {
    address: string;
    market: string;
    pagination?: PageRequestSDKType;
}
export interface QueryUserMarketOrdersResponse {
    list: OrderReference[];
    pagination?: PageResponse;
}
export interface QueryUserMarketOrdersResponseSDKType {
    list: OrderReferenceSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryMarketAggregatedOrdersRequest {
    market: string;
    orderType: string;
    pagination?: PageRequest;
}
export interface QueryMarketAggregatedOrdersRequestSDKType {
    market: string;
    order_type: string;
    pagination?: PageRequestSDKType;
}
export interface QueryMarketAggregatedOrdersResponse {
    list: AggregatedOrder[];
    pagination?: PageResponse;
}
export interface QueryMarketAggregatedOrdersResponseSDKType {
    list: AggregatedOrderSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryMarketHistoryRequest {
    market: string;
    pagination?: PageRequest;
}
export interface QueryMarketHistoryRequestSDKType {
    market: string;
    pagination?: PageRequestSDKType;
}
export interface QueryMarketHistoryResponse {
    list: HistoryOrder[];
    pagination?: PageResponse;
}
export interface QueryMarketHistoryResponseSDKType {
    list: HistoryOrderSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryMarketOrderRequest {
    market: string;
    orderType: string;
    orderId: string;
}
export interface QueryMarketOrderRequestSDKType {
    market: string;
    order_type: string;
    order_id: string;
}
export interface QueryMarketOrderResponse {
    order?: Order;
}
export interface QueryMarketOrderResponseSDKType {
    order?: OrderSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetMarketRequest: {
    encode(message: QueryGetMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketRequest;
    fromPartial(object: DeepPartial<QueryGetMarketRequest>): QueryGetMarketRequest;
};
export declare const QueryGetMarketResponse: {
    encode(message: QueryGetMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketResponse;
    fromPartial(object: DeepPartial<QueryGetMarketResponse>): QueryGetMarketResponse;
};
export declare const QueryAllMarketRequest: {
    encode(message: QueryAllMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMarketRequest;
    fromPartial(object: DeepPartial<QueryAllMarketRequest>): QueryAllMarketRequest;
};
export declare const QueryAllMarketResponse: {
    encode(message: QueryAllMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMarketResponse;
    fromPartial(object: DeepPartial<QueryAllMarketResponse>): QueryAllMarketResponse;
};
export declare const QueryAssetMarketsRequest: {
    encode(message: QueryAssetMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMarketsRequest;
    fromPartial(object: DeepPartial<QueryAssetMarketsRequest>): QueryAssetMarketsRequest;
};
export declare const QueryAssetMarketsResponse: {
    encode(message: QueryAssetMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMarketsResponse;
    fromPartial(object: DeepPartial<QueryAssetMarketsResponse>): QueryAssetMarketsResponse;
};
export declare const QueryUserMarketOrdersRequest: {
    encode(message: QueryUserMarketOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserMarketOrdersRequest;
    fromPartial(object: DeepPartial<QueryUserMarketOrdersRequest>): QueryUserMarketOrdersRequest;
};
export declare const QueryUserMarketOrdersResponse: {
    encode(message: QueryUserMarketOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserMarketOrdersResponse;
    fromPartial(object: DeepPartial<QueryUserMarketOrdersResponse>): QueryUserMarketOrdersResponse;
};
export declare const QueryMarketAggregatedOrdersRequest: {
    encode(message: QueryMarketAggregatedOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketAggregatedOrdersRequest;
    fromPartial(object: DeepPartial<QueryMarketAggregatedOrdersRequest>): QueryMarketAggregatedOrdersRequest;
};
export declare const QueryMarketAggregatedOrdersResponse: {
    encode(message: QueryMarketAggregatedOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketAggregatedOrdersResponse;
    fromPartial(object: DeepPartial<QueryMarketAggregatedOrdersResponse>): QueryMarketAggregatedOrdersResponse;
};
export declare const QueryMarketHistoryRequest: {
    encode(message: QueryMarketHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketHistoryRequest;
    fromPartial(object: DeepPartial<QueryMarketHistoryRequest>): QueryMarketHistoryRequest;
};
export declare const QueryMarketHistoryResponse: {
    encode(message: QueryMarketHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketHistoryResponse;
    fromPartial(object: DeepPartial<QueryMarketHistoryResponse>): QueryMarketHistoryResponse;
};
export declare const QueryMarketOrderRequest: {
    encode(message: QueryMarketOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketOrderRequest;
    fromPartial(object: DeepPartial<QueryMarketOrderRequest>): QueryMarketOrderRequest;
};
export declare const QueryMarketOrderResponse: {
    encode(message: QueryMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketOrderResponse;
    fromPartial(object: DeepPartial<QueryMarketOrderResponse>): QueryMarketOrderResponse;
};
