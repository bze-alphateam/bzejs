import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetMarketRequest, QueryGetMarketResponse, QueryAllMarketRequest, QueryAllMarketResponse, QueryAssetMarketsRequest, QueryAssetMarketsResponse, QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponse, QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponse, QueryMarketHistoryRequest, QueryMarketHistoryResponse, QueryMarketOrderRequest, QueryMarketOrderResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Market by index. */

  market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
  /** Queries a list of Market items. */

  marketAll(request?: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
  /** Queries a list of AssetMarkets items. */

  assetMarkets(request: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponse>;
  /** Queries a list of UserMarketOrders items. */

  userMarketOrders(request: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponse>;
  /** Queries a list of MarketAggregatedOrders items. */

  marketAggregatedOrders(request: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponse>;
  /** Queries a list of MarketHistory items. */

  marketHistory(request: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponse>;
  /** Queries a list of MarketOrder items. */

  marketOrder(request: QueryMarketOrderRequest): Promise<QueryMarketOrderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.market = this.market.bind(this);
    this.marketAll = this.marketAll.bind(this);
    this.assetMarkets = this.assetMarkets.bind(this);
    this.userMarketOrders = this.userMarketOrders.bind(this);
    this.marketAggregatedOrders = this.marketAggregatedOrders.bind(this);
    this.marketHistory = this.marketHistory.bind(this);
    this.marketOrder = this.marketOrder.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> {
    const data = QueryGetMarketRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "Market", data);
    return promise.then(data => QueryGetMarketResponse.decode(new _m0.Reader(data)));
  }

  marketAll(request: QueryAllMarketRequest = {
    pagination: undefined
  }): Promise<QueryAllMarketResponse> {
    const data = QueryAllMarketRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "MarketAll", data);
    return promise.then(data => QueryAllMarketResponse.decode(new _m0.Reader(data)));
  }

  assetMarkets(request: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponse> {
    const data = QueryAssetMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "AssetMarkets", data);
    return promise.then(data => QueryAssetMarketsResponse.decode(new _m0.Reader(data)));
  }

  userMarketOrders(request: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponse> {
    const data = QueryUserMarketOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "UserMarketOrders", data);
    return promise.then(data => QueryUserMarketOrdersResponse.decode(new _m0.Reader(data)));
  }

  marketAggregatedOrders(request: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponse> {
    const data = QueryMarketAggregatedOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "MarketAggregatedOrders", data);
    return promise.then(data => QueryMarketAggregatedOrdersResponse.decode(new _m0.Reader(data)));
  }

  marketHistory(request: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponse> {
    const data = QueryMarketHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "MarketHistory", data);
    return promise.then(data => QueryMarketHistoryResponse.decode(new _m0.Reader(data)));
  }

  marketOrder(request: QueryMarketOrderRequest): Promise<QueryMarketOrderResponse> {
    const data = QueryMarketOrderRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.v1.Query", "MarketOrder", data);
    return promise.then(data => QueryMarketOrderResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> {
      return queryService.market(request);
    },

    marketAll(request?: QueryAllMarketRequest): Promise<QueryAllMarketResponse> {
      return queryService.marketAll(request);
    },

    assetMarkets(request: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponse> {
      return queryService.assetMarkets(request);
    },

    userMarketOrders(request: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponse> {
      return queryService.userMarketOrders(request);
    },

    marketAggregatedOrders(request: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponse> {
      return queryService.marketAggregatedOrders(request);
    },

    marketHistory(request: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponse> {
      return queryService.marketHistory(request);
    },

    marketOrder(request: QueryMarketOrderRequest): Promise<QueryMarketOrderResponse> {
      return queryService.marketOrder(request);
    }

  };
};