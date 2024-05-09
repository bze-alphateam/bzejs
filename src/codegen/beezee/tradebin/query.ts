import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Market, MarketSDKType } from "./market";
import { OrderReference, OrderReferenceSDKType, AggregatedOrder, AggregatedOrderSDKType, HistoryOrder, HistoryOrderSDKType, Order, OrderSDKType } from "./order";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryGetMarketRequest(): QueryGetMarketRequest {
  return {
    base: "",
    quote: ""
  };
}

export const QueryGetMarketRequest = {
  encode(message: QueryGetMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketRequest();

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

  fromPartial(object: DeepPartial<QueryGetMarketRequest>): QueryGetMarketRequest {
    const message = createBaseQueryGetMarketRequest();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  }

};

function createBaseQueryGetMarketResponse(): QueryGetMarketResponse {
  return {
    market: undefined
  };
}

export const QueryGetMarketResponse = {
  encode(message: QueryGetMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketResponse();

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

  fromPartial(object: DeepPartial<QueryGetMarketResponse>): QueryGetMarketResponse {
    const message = createBaseQueryGetMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? Market.fromPartial(object.market) : undefined;
    return message;
  }

};

function createBaseQueryAllMarketRequest(): QueryAllMarketRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllMarketRequest = {
  encode(message: QueryAllMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketRequest();

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

  fromPartial(object: DeepPartial<QueryAllMarketRequest>): QueryAllMarketRequest {
    const message = createBaseQueryAllMarketRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllMarketResponse(): QueryAllMarketResponse {
  return {
    market: [],
    pagination: undefined
  };
}

export const QueryAllMarketResponse = {
  encode(message: QueryAllMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.market) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketResponse();

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

  fromPartial(object: DeepPartial<QueryAllMarketResponse>): QueryAllMarketResponse {
    const message = createBaseQueryAllMarketResponse();
    message.market = object.market?.map(e => Market.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAssetMarketsRequest(): QueryAssetMarketsRequest {
  return {
    asset: ""
  };
}

export const QueryAssetMarketsRequest = {
  encode(message: QueryAssetMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAssetMarketsRequest>): QueryAssetMarketsRequest {
    const message = createBaseQueryAssetMarketsRequest();
    message.asset = object.asset ?? "";
    return message;
  }

};

function createBaseQueryAssetMarketsResponse(): QueryAssetMarketsResponse {
  return {
    base: [],
    quote: []
  };
}

export const QueryAssetMarketsResponse = {
  encode(message: QueryAssetMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.base) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.quote) {
      Market.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAssetMarketsResponse>): QueryAssetMarketsResponse {
    const message = createBaseQueryAssetMarketsResponse();
    message.base = object.base?.map(e => Market.fromPartial(e)) || [];
    message.quote = object.quote?.map(e => Market.fromPartial(e)) || [];
    return message;
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
  encode(message: QueryUserMarketOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserMarketOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUserMarketOrdersRequest>): QueryUserMarketOrdersRequest {
    const message = createBaseQueryUserMarketOrdersRequest();
    message.address = object.address ?? "";
    message.market = object.market ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryUserMarketOrdersResponse(): QueryUserMarketOrdersResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryUserMarketOrdersResponse = {
  encode(message: QueryUserMarketOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      OrderReference.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserMarketOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUserMarketOrdersResponse>): QueryUserMarketOrdersResponse {
    const message = createBaseQueryUserMarketOrdersResponse();
    message.list = object.list?.map(e => OrderReference.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
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
  encode(message: QueryMarketAggregatedOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketAggregatedOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryMarketAggregatedOrdersRequest>): QueryMarketAggregatedOrdersRequest {
    const message = createBaseQueryMarketAggregatedOrdersRequest();
    message.market = object.market ?? "";
    message.orderType = object.orderType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryMarketAggregatedOrdersResponse(): QueryMarketAggregatedOrdersResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryMarketAggregatedOrdersResponse = {
  encode(message: QueryMarketAggregatedOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      AggregatedOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketAggregatedOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryMarketAggregatedOrdersResponse>): QueryMarketAggregatedOrdersResponse {
    const message = createBaseQueryMarketAggregatedOrdersResponse();
    message.list = object.list?.map(e => AggregatedOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryMarketHistoryRequest(): QueryMarketHistoryRequest {
  return {
    market: "",
    pagination: undefined
  };
}

export const QueryMarketHistoryRequest = {
  encode(message: QueryMarketHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryMarketHistoryRequest>): QueryMarketHistoryRequest {
    const message = createBaseQueryMarketHistoryRequest();
    message.market = object.market ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryMarketHistoryResponse(): QueryMarketHistoryResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryMarketHistoryResponse = {
  encode(message: QueryMarketHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      HistoryOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryMarketHistoryResponse>): QueryMarketHistoryResponse {
    const message = createBaseQueryMarketHistoryResponse();
    message.list = object.list?.map(e => HistoryOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
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
  encode(message: QueryMarketOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryMarketOrderRequest>): QueryMarketOrderRequest {
    const message = createBaseQueryMarketOrderRequest();
    message.market = object.market ?? "";
    message.orderType = object.orderType ?? "";
    message.orderId = object.orderId ?? "";
    return message;
  }

};

function createBaseQueryMarketOrderResponse(): QueryMarketOrderResponse {
  return {
    order: undefined
  };
}

export const QueryMarketOrderResponse = {
  encode(message: QueryMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryMarketOrderResponse>): QueryMarketOrderResponse {
    const message = createBaseQueryMarketOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  }

};