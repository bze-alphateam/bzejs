//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Market, MarketAmino, MarketSDKType, OrderReference, OrderReferenceAmino, OrderReferenceSDKType, AggregatedOrder, AggregatedOrderAmino, AggregatedOrderSDKType, HistoryOrder, HistoryOrderAmino, HistoryOrderSDKType, Order, OrderAmino, OrderSDKType, UserDust, UserDustAmino, UserDustSDKType, LiquidityPool, LiquidityPoolAmino, LiquidityPoolSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bze.tradebin.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bze.tradebin.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryMarketRequest {
  base: string;
  quote: string;
}
export interface QueryMarketRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketRequest";
  value: Uint8Array;
}
/**
 * @name QueryMarketRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketRequest
 */
export interface QueryMarketRequestAmino {
  base?: string;
  quote?: string;
}
export interface QueryMarketRequestAminoMsg {
  type: "/bze.tradebin.QueryMarketRequest";
  value: QueryMarketRequestAmino;
}
export interface QueryMarketRequestSDKType {
  base: string;
  quote: string;
}
export interface QueryMarketResponse {
  market: Market;
}
export interface QueryMarketResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketResponse";
  value: Uint8Array;
}
/**
 * @name QueryMarketResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketResponse
 */
export interface QueryMarketResponseAmino {
  market?: MarketAmino;
}
export interface QueryMarketResponseAminoMsg {
  type: "/bze.tradebin.QueryMarketResponse";
  value: QueryMarketResponseAmino;
}
export interface QueryMarketResponseSDKType {
  market: MarketSDKType;
}
export interface QueryAllMarketsRequest {
  pagination?: PageRequest;
}
export interface QueryAllMarketsRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryAllMarketsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllMarketsRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAllMarketsRequest
 */
export interface QueryAllMarketsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMarketsRequestAminoMsg {
  type: "/bze.tradebin.QueryAllMarketsRequest";
  value: QueryAllMarketsRequestAmino;
}
export interface QueryAllMarketsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMarketsResponse {
  market: Market[];
  pagination?: PageResponse;
}
export interface QueryAllMarketsResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryAllMarketsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllMarketsResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAllMarketsResponse
 */
export interface QueryAllMarketsResponseAmino {
  market?: MarketAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMarketsResponseAminoMsg {
  type: "/bze.tradebin.QueryAllMarketsResponse";
  value: QueryAllMarketsResponseAmino;
}
export interface QueryAllMarketsResponseSDKType {
  market: MarketSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAssetMarketsRequest {
  asset: string;
}
export interface QueryAssetMarketsRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryAssetMarketsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAssetMarketsRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAssetMarketsRequest
 */
export interface QueryAssetMarketsRequestAmino {
  asset?: string;
}
export interface QueryAssetMarketsRequestAminoMsg {
  type: "/bze.tradebin.QueryAssetMarketsRequest";
  value: QueryAssetMarketsRequestAmino;
}
export interface QueryAssetMarketsRequestSDKType {
  asset: string;
}
export interface QueryAssetMarketsResponse {
  base: Market[];
  quote: Market[];
}
export interface QueryAssetMarketsResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryAssetMarketsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAssetMarketsResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAssetMarketsResponse
 */
export interface QueryAssetMarketsResponseAmino {
  base?: MarketAmino[];
  quote?: MarketAmino[];
}
export interface QueryAssetMarketsResponseAminoMsg {
  type: "/bze.tradebin.QueryAssetMarketsResponse";
  value: QueryAssetMarketsResponseAmino;
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
export interface QueryUserMarketOrdersRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryUserMarketOrdersRequest";
  value: Uint8Array;
}
/**
 * @name QueryUserMarketOrdersRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryUserMarketOrdersRequest
 */
export interface QueryUserMarketOrdersRequestAmino {
  address?: string;
  market?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserMarketOrdersRequestAminoMsg {
  type: "/bze.tradebin.QueryUserMarketOrdersRequest";
  value: QueryUserMarketOrdersRequestAmino;
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
export interface QueryUserMarketOrdersResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryUserMarketOrdersResponse";
  value: Uint8Array;
}
/**
 * @name QueryUserMarketOrdersResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryUserMarketOrdersResponse
 */
export interface QueryUserMarketOrdersResponseAmino {
  list?: OrderReferenceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserMarketOrdersResponseAminoMsg {
  type: "/bze.tradebin.QueryUserMarketOrdersResponse";
  value: QueryUserMarketOrdersResponseAmino;
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
export interface QueryMarketAggregatedOrdersRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketAggregatedOrdersRequest";
  value: Uint8Array;
}
/**
 * @name QueryMarketAggregatedOrdersRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketAggregatedOrdersRequest
 */
export interface QueryMarketAggregatedOrdersRequestAmino {
  market?: string;
  order_type?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMarketAggregatedOrdersRequestAminoMsg {
  type: "/bze.tradebin.QueryMarketAggregatedOrdersRequest";
  value: QueryMarketAggregatedOrdersRequestAmino;
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
export interface QueryMarketAggregatedOrdersResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketAggregatedOrdersResponse";
  value: Uint8Array;
}
/**
 * @name QueryMarketAggregatedOrdersResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketAggregatedOrdersResponse
 */
export interface QueryMarketAggregatedOrdersResponseAmino {
  list?: AggregatedOrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryMarketAggregatedOrdersResponseAminoMsg {
  type: "/bze.tradebin.QueryMarketAggregatedOrdersResponse";
  value: QueryMarketAggregatedOrdersResponseAmino;
}
export interface QueryMarketAggregatedOrdersResponseSDKType {
  list: AggregatedOrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryMarketHistoryRequest {
  market: string;
  pagination?: PageRequest;
}
export interface QueryMarketHistoryRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketHistoryRequest";
  value: Uint8Array;
}
/**
 * @name QueryMarketHistoryRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketHistoryRequest
 */
export interface QueryMarketHistoryRequestAmino {
  market?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMarketHistoryRequestAminoMsg {
  type: "/bze.tradebin.QueryMarketHistoryRequest";
  value: QueryMarketHistoryRequestAmino;
}
export interface QueryMarketHistoryRequestSDKType {
  market: string;
  pagination?: PageRequestSDKType;
}
export interface QueryMarketHistoryResponse {
  list: HistoryOrder[];
  pagination?: PageResponse;
}
export interface QueryMarketHistoryResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketHistoryResponse";
  value: Uint8Array;
}
/**
 * @name QueryMarketHistoryResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketHistoryResponse
 */
export interface QueryMarketHistoryResponseAmino {
  list?: HistoryOrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryMarketHistoryResponseAminoMsg {
  type: "/bze.tradebin.QueryMarketHistoryResponse";
  value: QueryMarketHistoryResponseAmino;
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
export interface QueryMarketOrderRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketOrderRequest";
  value: Uint8Array;
}
/**
 * @name QueryMarketOrderRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketOrderRequest
 */
export interface QueryMarketOrderRequestAmino {
  market?: string;
  order_type?: string;
  order_id?: string;
}
export interface QueryMarketOrderRequestAminoMsg {
  type: "/bze.tradebin.QueryMarketOrderRequest";
  value: QueryMarketOrderRequestAmino;
}
export interface QueryMarketOrderRequestSDKType {
  market: string;
  order_type: string;
  order_id: string;
}
export interface QueryMarketOrderResponse {
  order: Order;
}
export interface QueryMarketOrderResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryMarketOrderResponse";
  value: Uint8Array;
}
/**
 * @name QueryMarketOrderResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryMarketOrderResponse
 */
export interface QueryMarketOrderResponseAmino {
  order?: OrderAmino;
}
export interface QueryMarketOrderResponseAminoMsg {
  type: "/bze.tradebin.QueryMarketOrderResponse";
  value: QueryMarketOrderResponseAmino;
}
export interface QueryMarketOrderResponseSDKType {
  order: OrderSDKType;
}
export interface QueryAllUserDustRequest {
  address: string;
}
export interface QueryAllUserDustRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryAllUserDustRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllUserDustRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAllUserDustRequest
 */
export interface QueryAllUserDustRequestAmino {
  address?: string;
}
export interface QueryAllUserDustRequestAminoMsg {
  type: "/bze.tradebin.QueryAllUserDustRequest";
  value: QueryAllUserDustRequestAmino;
}
export interface QueryAllUserDustRequestSDKType {
  address: string;
}
export interface QueryAllUserDustResponse {
  list: UserDust[];
}
export interface QueryAllUserDustResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryAllUserDustResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllUserDustResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAllUserDustResponse
 */
export interface QueryAllUserDustResponseAmino {
  list?: UserDustAmino[];
}
export interface QueryAllUserDustResponseAminoMsg {
  type: "/bze.tradebin.QueryAllUserDustResponse";
  value: QueryAllUserDustResponseAmino;
}
export interface QueryAllUserDustResponseSDKType {
  list: UserDustSDKType[];
}
export interface QueryAllLiquidityPoolsRequest {
  pagination?: PageRequest;
}
export interface QueryAllLiquidityPoolsRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryAllLiquidityPoolsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllLiquidityPoolsRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAllLiquidityPoolsRequest
 */
export interface QueryAllLiquidityPoolsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllLiquidityPoolsRequestAminoMsg {
  type: "/bze.tradebin.QueryAllLiquidityPoolsRequest";
  value: QueryAllLiquidityPoolsRequestAmino;
}
export interface QueryAllLiquidityPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllLiquidityPoolsResponse {
  list: LiquidityPool[];
  pagination?: PageResponse;
}
export interface QueryAllLiquidityPoolsResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryAllLiquidityPoolsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllLiquidityPoolsResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryAllLiquidityPoolsResponse
 */
export interface QueryAllLiquidityPoolsResponseAmino {
  list?: LiquidityPoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllLiquidityPoolsResponseAminoMsg {
  type: "/bze.tradebin.QueryAllLiquidityPoolsResponse";
  value: QueryAllLiquidityPoolsResponseAmino;
}
export interface QueryAllLiquidityPoolsResponseSDKType {
  list: LiquidityPoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryLiquidityPoolRequest {
  poolId: string;
}
export interface QueryLiquidityPoolRequestProtoMsg {
  typeUrl: "/bze.tradebin.QueryLiquidityPoolRequest";
  value: Uint8Array;
}
/**
 * @name QueryLiquidityPoolRequestAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryLiquidityPoolRequest
 */
export interface QueryLiquidityPoolRequestAmino {
  pool_id?: string;
}
export interface QueryLiquidityPoolRequestAminoMsg {
  type: "/bze.tradebin.QueryLiquidityPoolRequest";
  value: QueryLiquidityPoolRequestAmino;
}
export interface QueryLiquidityPoolRequestSDKType {
  pool_id: string;
}
export interface QueryLiquidityPoolResponse {
  pool?: LiquidityPool;
}
export interface QueryLiquidityPoolResponseProtoMsg {
  typeUrl: "/bze.tradebin.QueryLiquidityPoolResponse";
  value: Uint8Array;
}
/**
 * @name QueryLiquidityPoolResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueryLiquidityPoolResponse
 */
export interface QueryLiquidityPoolResponseAmino {
  pool?: LiquidityPoolAmino;
}
export interface QueryLiquidityPoolResponseAminoMsg {
  type: "/bze.tradebin.QueryLiquidityPoolResponse";
  value: QueryLiquidityPoolResponseAmino;
}
export interface QueryLiquidityPoolResponseSDKType {
  pool?: LiquidityPoolSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/bze.tradebin.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/bze.tradebin.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketRequest(): QueryMarketRequest {
  return {
    base: "",
    quote: ""
  };
}
export const QueryMarketRequest = {
  typeUrl: "/bze.tradebin.QueryMarketRequest",
  encode(message: QueryMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketRequest>): QueryMarketRequest {
    const message = createBaseQueryMarketRequest();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: QueryMarketRequestAmino): QueryMarketRequest {
    const message = createBaseQueryMarketRequest();
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    return message;
  },
  toAmino(message: QueryMarketRequest): QueryMarketRequestAmino {
    const obj: any = {};
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: QueryMarketRequestAminoMsg): QueryMarketRequest {
    return QueryMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketRequestProtoMsg): QueryMarketRequest {
    return QueryMarketRequest.decode(message.value);
  },
  toProto(message: QueryMarketRequest): Uint8Array {
    return QueryMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketRequest): QueryMarketRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketRequest",
      value: QueryMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketResponse(): QueryMarketResponse {
  return {
    market: Market.fromPartial({})
  };
}
export const QueryMarketResponse = {
  typeUrl: "/bze.tradebin.QueryMarketResponse",
  encode(message: QueryMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = Market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketResponse>): QueryMarketResponse {
    const message = createBaseQueryMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? Market.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketResponseAmino): QueryMarketResponse {
    const message = createBaseQueryMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = Market.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QueryMarketResponse): QueryMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? Market.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketResponseAminoMsg): QueryMarketResponse {
    return QueryMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketResponseProtoMsg): QueryMarketResponse {
    return QueryMarketResponse.decode(message.value);
  },
  toProto(message: QueryMarketResponse): Uint8Array {
    return QueryMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketResponse): QueryMarketResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketResponse",
      value: QueryMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMarketsRequest(): QueryAllMarketsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMarketsRequest = {
  typeUrl: "/bze.tradebin.QueryAllMarketsRequest",
  encode(message: QueryAllMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMarketsRequest>): QueryAllMarketsRequest {
    const message = createBaseQueryAllMarketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMarketsRequestAmino): QueryAllMarketsRequest {
    const message = createBaseQueryAllMarketsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMarketsRequest): QueryAllMarketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMarketsRequestAminoMsg): QueryAllMarketsRequest {
    return QueryAllMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMarketsRequestProtoMsg): QueryAllMarketsRequest {
    return QueryAllMarketsRequest.decode(message.value);
  },
  toProto(message: QueryAllMarketsRequest): Uint8Array {
    return QueryAllMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMarketsRequest): QueryAllMarketsRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAllMarketsRequest",
      value: QueryAllMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMarketsResponse(): QueryAllMarketsResponse {
  return {
    market: [],
    pagination: undefined
  };
}
export const QueryAllMarketsResponse = {
  typeUrl: "/bze.tradebin.QueryAllMarketsResponse",
  encode(message: QueryAllMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.market) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market.push(Market.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMarketsResponse>): QueryAllMarketsResponse {
    const message = createBaseQueryAllMarketsResponse();
    message.market = object.market?.map(e => Market.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMarketsResponseAmino): QueryAllMarketsResponse {
    const message = createBaseQueryAllMarketsResponse();
    message.market = object.market?.map(e => Market.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMarketsResponse): QueryAllMarketsResponseAmino {
    const obj: any = {};
    if (message.market) {
      obj.market = message.market.map(e => e ? Market.toAmino(e) : undefined);
    } else {
      obj.market = message.market;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMarketsResponseAminoMsg): QueryAllMarketsResponse {
    return QueryAllMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMarketsResponseProtoMsg): QueryAllMarketsResponse {
    return QueryAllMarketsResponse.decode(message.value);
  },
  toProto(message: QueryAllMarketsResponse): Uint8Array {
    return QueryAllMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMarketsResponse): QueryAllMarketsResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAllMarketsResponse",
      value: QueryAllMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetMarketsRequest(): QueryAssetMarketsRequest {
  return {
    asset: ""
  };
}
export const QueryAssetMarketsRequest = {
  typeUrl: "/bze.tradebin.QueryAssetMarketsRequest",
  encode(message: QueryAssetMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAssetMarketsRequest>): QueryAssetMarketsRequest {
    const message = createBaseQueryAssetMarketsRequest();
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: QueryAssetMarketsRequestAmino): QueryAssetMarketsRequest {
    const message = createBaseQueryAssetMarketsRequest();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: QueryAssetMarketsRequest): QueryAssetMarketsRequestAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    return obj;
  },
  fromAminoMsg(object: QueryAssetMarketsRequestAminoMsg): QueryAssetMarketsRequest {
    return QueryAssetMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetMarketsRequestProtoMsg): QueryAssetMarketsRequest {
    return QueryAssetMarketsRequest.decode(message.value);
  },
  toProto(message: QueryAssetMarketsRequest): Uint8Array {
    return QueryAssetMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetMarketsRequest): QueryAssetMarketsRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAssetMarketsRequest",
      value: QueryAssetMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetMarketsResponse(): QueryAssetMarketsResponse {
  return {
    base: [],
    quote: []
  };
}
export const QueryAssetMarketsResponse = {
  typeUrl: "/bze.tradebin.QueryAssetMarketsResponse",
  encode(message: QueryAssetMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.base) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.quote) {
      Market.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base.push(Market.decode(reader, reader.uint32()));
          break;
        case 2:
          message.quote.push(Market.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAssetMarketsResponse>): QueryAssetMarketsResponse {
    const message = createBaseQueryAssetMarketsResponse();
    message.base = object.base?.map(e => Market.fromPartial(e)) || [];
    message.quote = object.quote?.map(e => Market.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAssetMarketsResponseAmino): QueryAssetMarketsResponse {
    const message = createBaseQueryAssetMarketsResponse();
    message.base = object.base?.map(e => Market.fromAmino(e)) || [];
    message.quote = object.quote?.map(e => Market.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAssetMarketsResponse): QueryAssetMarketsResponseAmino {
    const obj: any = {};
    if (message.base) {
      obj.base = message.base.map(e => e ? Market.toAmino(e) : undefined);
    } else {
      obj.base = message.base;
    }
    if (message.quote) {
      obj.quote = message.quote.map(e => e ? Market.toAmino(e) : undefined);
    } else {
      obj.quote = message.quote;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAssetMarketsResponseAminoMsg): QueryAssetMarketsResponse {
    return QueryAssetMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetMarketsResponseProtoMsg): QueryAssetMarketsResponse {
    return QueryAssetMarketsResponse.decode(message.value);
  },
  toProto(message: QueryAssetMarketsResponse): Uint8Array {
    return QueryAssetMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetMarketsResponse): QueryAssetMarketsResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAssetMarketsResponse",
      value: QueryAssetMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserMarketOrdersRequest(): QueryUserMarketOrdersRequest {
  return {
    address: "",
    market: "",
    pagination: undefined
  };
}
export const QueryUserMarketOrdersRequest = {
  typeUrl: "/bze.tradebin.QueryUserMarketOrdersRequest",
  encode(message: QueryUserMarketOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserMarketOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserMarketOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserMarketOrdersRequest>): QueryUserMarketOrdersRequest {
    const message = createBaseQueryUserMarketOrdersRequest();
    message.address = object.address ?? "";
    message.market = object.market ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserMarketOrdersRequestAmino): QueryUserMarketOrdersRequest {
    const message = createBaseQueryUserMarketOrdersRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserMarketOrdersRequest): QueryUserMarketOrdersRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.market = message.market === "" ? undefined : message.market;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserMarketOrdersRequestAminoMsg): QueryUserMarketOrdersRequest {
    return QueryUserMarketOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserMarketOrdersRequestProtoMsg): QueryUserMarketOrdersRequest {
    return QueryUserMarketOrdersRequest.decode(message.value);
  },
  toProto(message: QueryUserMarketOrdersRequest): Uint8Array {
    return QueryUserMarketOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserMarketOrdersRequest): QueryUserMarketOrdersRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryUserMarketOrdersRequest",
      value: QueryUserMarketOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserMarketOrdersResponse(): QueryUserMarketOrdersResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryUserMarketOrdersResponse = {
  typeUrl: "/bze.tradebin.QueryUserMarketOrdersResponse",
  encode(message: QueryUserMarketOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      OrderReference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserMarketOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserMarketOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(OrderReference.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserMarketOrdersResponse>): QueryUserMarketOrdersResponse {
    const message = createBaseQueryUserMarketOrdersResponse();
    message.list = object.list?.map(e => OrderReference.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserMarketOrdersResponseAmino): QueryUserMarketOrdersResponse {
    const message = createBaseQueryUserMarketOrdersResponse();
    message.list = object.list?.map(e => OrderReference.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserMarketOrdersResponse): QueryUserMarketOrdersResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? OrderReference.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserMarketOrdersResponseAminoMsg): QueryUserMarketOrdersResponse {
    return QueryUserMarketOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserMarketOrdersResponseProtoMsg): QueryUserMarketOrdersResponse {
    return QueryUserMarketOrdersResponse.decode(message.value);
  },
  toProto(message: QueryUserMarketOrdersResponse): Uint8Array {
    return QueryUserMarketOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserMarketOrdersResponse): QueryUserMarketOrdersResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryUserMarketOrdersResponse",
      value: QueryUserMarketOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketAggregatedOrdersRequest(): QueryMarketAggregatedOrdersRequest {
  return {
    market: "",
    orderType: "",
    pagination: undefined
  };
}
export const QueryMarketAggregatedOrdersRequest = {
  typeUrl: "/bze.tradebin.QueryMarketAggregatedOrdersRequest",
  encode(message: QueryMarketAggregatedOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.orderType !== "") {
      writer.uint32(18).string(message.orderType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketAggregatedOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketAggregatedOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.orderType = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketAggregatedOrdersRequest>): QueryMarketAggregatedOrdersRequest {
    const message = createBaseQueryMarketAggregatedOrdersRequest();
    message.market = object.market ?? "";
    message.orderType = object.orderType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketAggregatedOrdersRequestAmino): QueryMarketAggregatedOrdersRequest {
    const message = createBaseQueryMarketAggregatedOrdersRequest();
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMarketAggregatedOrdersRequest): QueryMarketAggregatedOrdersRequestAmino {
    const obj: any = {};
    obj.market = message.market === "" ? undefined : message.market;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketAggregatedOrdersRequestAminoMsg): QueryMarketAggregatedOrdersRequest {
    return QueryMarketAggregatedOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketAggregatedOrdersRequestProtoMsg): QueryMarketAggregatedOrdersRequest {
    return QueryMarketAggregatedOrdersRequest.decode(message.value);
  },
  toProto(message: QueryMarketAggregatedOrdersRequest): Uint8Array {
    return QueryMarketAggregatedOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketAggregatedOrdersRequest): QueryMarketAggregatedOrdersRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketAggregatedOrdersRequest",
      value: QueryMarketAggregatedOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketAggregatedOrdersResponse(): QueryMarketAggregatedOrdersResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryMarketAggregatedOrdersResponse = {
  typeUrl: "/bze.tradebin.QueryMarketAggregatedOrdersResponse",
  encode(message: QueryMarketAggregatedOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      AggregatedOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketAggregatedOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketAggregatedOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(AggregatedOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketAggregatedOrdersResponse>): QueryMarketAggregatedOrdersResponse {
    const message = createBaseQueryMarketAggregatedOrdersResponse();
    message.list = object.list?.map(e => AggregatedOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketAggregatedOrdersResponseAmino): QueryMarketAggregatedOrdersResponse {
    const message = createBaseQueryMarketAggregatedOrdersResponse();
    message.list = object.list?.map(e => AggregatedOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMarketAggregatedOrdersResponse): QueryMarketAggregatedOrdersResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? AggregatedOrder.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketAggregatedOrdersResponseAminoMsg): QueryMarketAggregatedOrdersResponse {
    return QueryMarketAggregatedOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketAggregatedOrdersResponseProtoMsg): QueryMarketAggregatedOrdersResponse {
    return QueryMarketAggregatedOrdersResponse.decode(message.value);
  },
  toProto(message: QueryMarketAggregatedOrdersResponse): Uint8Array {
    return QueryMarketAggregatedOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketAggregatedOrdersResponse): QueryMarketAggregatedOrdersResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketAggregatedOrdersResponse",
      value: QueryMarketAggregatedOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketHistoryRequest(): QueryMarketHistoryRequest {
  return {
    market: "",
    pagination: undefined
  };
}
export const QueryMarketHistoryRequest = {
  typeUrl: "/bze.tradebin.QueryMarketHistoryRequest",
  encode(message: QueryMarketHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketHistoryRequest>): QueryMarketHistoryRequest {
    const message = createBaseQueryMarketHistoryRequest();
    message.market = object.market ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketHistoryRequestAmino): QueryMarketHistoryRequest {
    const message = createBaseQueryMarketHistoryRequest();
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMarketHistoryRequest): QueryMarketHistoryRequestAmino {
    const obj: any = {};
    obj.market = message.market === "" ? undefined : message.market;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketHistoryRequestAminoMsg): QueryMarketHistoryRequest {
    return QueryMarketHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketHistoryRequestProtoMsg): QueryMarketHistoryRequest {
    return QueryMarketHistoryRequest.decode(message.value);
  },
  toProto(message: QueryMarketHistoryRequest): Uint8Array {
    return QueryMarketHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketHistoryRequest): QueryMarketHistoryRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketHistoryRequest",
      value: QueryMarketHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketHistoryResponse(): QueryMarketHistoryResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryMarketHistoryResponse = {
  typeUrl: "/bze.tradebin.QueryMarketHistoryResponse",
  encode(message: QueryMarketHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      HistoryOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(HistoryOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketHistoryResponse>): QueryMarketHistoryResponse {
    const message = createBaseQueryMarketHistoryResponse();
    message.list = object.list?.map(e => HistoryOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketHistoryResponseAmino): QueryMarketHistoryResponse {
    const message = createBaseQueryMarketHistoryResponse();
    message.list = object.list?.map(e => HistoryOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMarketHistoryResponse): QueryMarketHistoryResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? HistoryOrder.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketHistoryResponseAminoMsg): QueryMarketHistoryResponse {
    return QueryMarketHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketHistoryResponseProtoMsg): QueryMarketHistoryResponse {
    return QueryMarketHistoryResponse.decode(message.value);
  },
  toProto(message: QueryMarketHistoryResponse): Uint8Array {
    return QueryMarketHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketHistoryResponse): QueryMarketHistoryResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketHistoryResponse",
      value: QueryMarketHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketOrderRequest(): QueryMarketOrderRequest {
  return {
    market: "",
    orderType: "",
    orderId: ""
  };
}
export const QueryMarketOrderRequest = {
  typeUrl: "/bze.tradebin.QueryMarketOrderRequest",
  encode(message: QueryMarketOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.orderType !== "") {
      writer.uint32(18).string(message.orderType);
    }
    if (message.orderId !== "") {
      writer.uint32(26).string(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.orderType = reader.string();
          break;
        case 3:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketOrderRequest>): QueryMarketOrderRequest {
    const message = createBaseQueryMarketOrderRequest();
    message.market = object.market ?? "";
    message.orderType = object.orderType ?? "";
    message.orderId = object.orderId ?? "";
    return message;
  },
  fromAmino(object: QueryMarketOrderRequestAmino): QueryMarketOrderRequest {
    const message = createBaseQueryMarketOrderRequest();
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
    }
    return message;
  },
  toAmino(message: QueryMarketOrderRequest): QueryMarketOrderRequestAmino {
    const obj: any = {};
    obj.market = message.market === "" ? undefined : message.market;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketOrderRequestAminoMsg): QueryMarketOrderRequest {
    return QueryMarketOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketOrderRequestProtoMsg): QueryMarketOrderRequest {
    return QueryMarketOrderRequest.decode(message.value);
  },
  toProto(message: QueryMarketOrderRequest): Uint8Array {
    return QueryMarketOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketOrderRequest): QueryMarketOrderRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketOrderRequest",
      value: QueryMarketOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketOrderResponse(): QueryMarketOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryMarketOrderResponse = {
  typeUrl: "/bze.tradebin.QueryMarketOrderResponse",
  encode(message: QueryMarketOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketOrderResponse>): QueryMarketOrderResponse {
    const message = createBaseQueryMarketOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketOrderResponseAmino): QueryMarketOrderResponse {
    const message = createBaseQueryMarketOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: QueryMarketOrderResponse): QueryMarketOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketOrderResponseAminoMsg): QueryMarketOrderResponse {
    return QueryMarketOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketOrderResponseProtoMsg): QueryMarketOrderResponse {
    return QueryMarketOrderResponse.decode(message.value);
  },
  toProto(message: QueryMarketOrderResponse): Uint8Array {
    return QueryMarketOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketOrderResponse): QueryMarketOrderResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryMarketOrderResponse",
      value: QueryMarketOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserDustRequest(): QueryAllUserDustRequest {
  return {
    address: ""
  };
}
export const QueryAllUserDustRequest = {
  typeUrl: "/bze.tradebin.QueryAllUserDustRequest",
  encode(message: QueryAllUserDustRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserDustRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDustRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllUserDustRequest>): QueryAllUserDustRequest {
    const message = createBaseQueryAllUserDustRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAllUserDustRequestAmino): QueryAllUserDustRequest {
    const message = createBaseQueryAllUserDustRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAllUserDustRequest): QueryAllUserDustRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserDustRequestAminoMsg): QueryAllUserDustRequest {
    return QueryAllUserDustRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserDustRequestProtoMsg): QueryAllUserDustRequest {
    return QueryAllUserDustRequest.decode(message.value);
  },
  toProto(message: QueryAllUserDustRequest): Uint8Array {
    return QueryAllUserDustRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserDustRequest): QueryAllUserDustRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAllUserDustRequest",
      value: QueryAllUserDustRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserDustResponse(): QueryAllUserDustResponse {
  return {
    list: []
  };
}
export const QueryAllUserDustResponse = {
  typeUrl: "/bze.tradebin.QueryAllUserDustResponse",
  encode(message: QueryAllUserDustResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      UserDust.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserDustResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDustResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(UserDust.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllUserDustResponse>): QueryAllUserDustResponse {
    const message = createBaseQueryAllUserDustResponse();
    message.list = object.list?.map(e => UserDust.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllUserDustResponseAmino): QueryAllUserDustResponse {
    const message = createBaseQueryAllUserDustResponse();
    message.list = object.list?.map(e => UserDust.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllUserDustResponse): QueryAllUserDustResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? UserDust.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllUserDustResponseAminoMsg): QueryAllUserDustResponse {
    return QueryAllUserDustResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserDustResponseProtoMsg): QueryAllUserDustResponse {
    return QueryAllUserDustResponse.decode(message.value);
  },
  toProto(message: QueryAllUserDustResponse): Uint8Array {
    return QueryAllUserDustResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserDustResponse): QueryAllUserDustResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAllUserDustResponse",
      value: QueryAllUserDustResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllLiquidityPoolsRequest(): QueryAllLiquidityPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllLiquidityPoolsRequest = {
  typeUrl: "/bze.tradebin.QueryAllLiquidityPoolsRequest",
  encode(message: QueryAllLiquidityPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLiquidityPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllLiquidityPoolsRequest>): QueryAllLiquidityPoolsRequest {
    const message = createBaseQueryAllLiquidityPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllLiquidityPoolsRequestAmino): QueryAllLiquidityPoolsRequest {
    const message = createBaseQueryAllLiquidityPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllLiquidityPoolsRequest): QueryAllLiquidityPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllLiquidityPoolsRequestAminoMsg): QueryAllLiquidityPoolsRequest {
    return QueryAllLiquidityPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLiquidityPoolsRequestProtoMsg): QueryAllLiquidityPoolsRequest {
    return QueryAllLiquidityPoolsRequest.decode(message.value);
  },
  toProto(message: QueryAllLiquidityPoolsRequest): Uint8Array {
    return QueryAllLiquidityPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLiquidityPoolsRequest): QueryAllLiquidityPoolsRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAllLiquidityPoolsRequest",
      value: QueryAllLiquidityPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllLiquidityPoolsResponse(): QueryAllLiquidityPoolsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryAllLiquidityPoolsResponse = {
  typeUrl: "/bze.tradebin.QueryAllLiquidityPoolsResponse",
  encode(message: QueryAllLiquidityPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      LiquidityPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLiquidityPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(LiquidityPool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllLiquidityPoolsResponse>): QueryAllLiquidityPoolsResponse {
    const message = createBaseQueryAllLiquidityPoolsResponse();
    message.list = object.list?.map(e => LiquidityPool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllLiquidityPoolsResponseAmino): QueryAllLiquidityPoolsResponse {
    const message = createBaseQueryAllLiquidityPoolsResponse();
    message.list = object.list?.map(e => LiquidityPool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllLiquidityPoolsResponse): QueryAllLiquidityPoolsResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? LiquidityPool.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllLiquidityPoolsResponseAminoMsg): QueryAllLiquidityPoolsResponse {
    return QueryAllLiquidityPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLiquidityPoolsResponseProtoMsg): QueryAllLiquidityPoolsResponse {
    return QueryAllLiquidityPoolsResponse.decode(message.value);
  },
  toProto(message: QueryAllLiquidityPoolsResponse): Uint8Array {
    return QueryAllLiquidityPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLiquidityPoolsResponse): QueryAllLiquidityPoolsResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryAllLiquidityPoolsResponse",
      value: QueryAllLiquidityPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolRequest(): QueryLiquidityPoolRequest {
  return {
    poolId: ""
  };
}
export const QueryLiquidityPoolRequest = {
  typeUrl: "/bze.tradebin.QueryLiquidityPoolRequest",
  encode(message: QueryLiquidityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolRequest>): QueryLiquidityPoolRequest {
    const message = createBaseQueryLiquidityPoolRequest();
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: QueryLiquidityPoolRequestAmino): QueryLiquidityPoolRequest {
    const message = createBaseQueryLiquidityPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolRequest): QueryLiquidityPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolRequestAminoMsg): QueryLiquidityPoolRequest {
    return QueryLiquidityPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolRequestProtoMsg): QueryLiquidityPoolRequest {
    return QueryLiquidityPoolRequest.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolRequest): Uint8Array {
    return QueryLiquidityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolRequest): QueryLiquidityPoolRequestProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryLiquidityPoolRequest",
      value: QueryLiquidityPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolResponse(): QueryLiquidityPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryLiquidityPoolResponse = {
  typeUrl: "/bze.tradebin.QueryLiquidityPoolResponse",
  encode(message: QueryLiquidityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      LiquidityPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = LiquidityPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolResponse>): QueryLiquidityPoolResponse {
    const message = createBaseQueryLiquidityPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? LiquidityPool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidityPoolResponseAmino): QueryLiquidityPoolResponse {
    const message = createBaseQueryLiquidityPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = LiquidityPool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolResponse): QueryLiquidityPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? LiquidityPool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolResponseAminoMsg): QueryLiquidityPoolResponse {
    return QueryLiquidityPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolResponseProtoMsg): QueryLiquidityPoolResponse {
    return QueryLiquidityPoolResponse.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolResponse): Uint8Array {
    return QueryLiquidityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolResponse): QueryLiquidityPoolResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueryLiquidityPoolResponse",
      value: QueryLiquidityPoolResponse.encode(message).finish()
    };
  }
};