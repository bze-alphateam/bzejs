//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMarketRequest, QueryMarketResponse, QueryAllMarketsRequest, QueryAllMarketsResponse, QueryAssetMarketsRequest, QueryAssetMarketsResponse, QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponse, QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponse, QueryMarketHistoryRequest, QueryMarketHistoryResponse, QueryMarketOrderRequest, QueryMarketOrderResponse, QueryAllUserDustRequest, QueryAllUserDustResponse, QueryAllLiquidityPoolsRequest, QueryAllLiquidityPoolsResponse, QueryLiquidityPoolRequest, QueryLiquidityPoolResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Market items. */
  market(request: QueryMarketRequest): Promise<QueryMarketResponse>;
  /** Queries a list of AllMarkets items. */
  allMarkets(request?: QueryAllMarketsRequest): Promise<QueryAllMarketsResponse>;
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
  /** Queries a list of AllUserDust items. */
  allUserDust(request: QueryAllUserDustRequest): Promise<QueryAllUserDustResponse>;
  /** Queries a list of AllLiquidityPools items. */
  allLiquidityPools(request?: QueryAllLiquidityPoolsRequest): Promise<QueryAllLiquidityPoolsResponse>;
  /** Queries a list of LiquidityPool items. */
  liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.market = this.market.bind(this);
    this.allMarkets = this.allMarkets.bind(this);
    this.assetMarkets = this.assetMarkets.bind(this);
    this.userMarketOrders = this.userMarketOrders.bind(this);
    this.marketAggregatedOrders = this.marketAggregatedOrders.bind(this);
    this.marketHistory = this.marketHistory.bind(this);
    this.marketOrder = this.marketOrder.bind(this);
    this.allUserDust = this.allUserDust.bind(this);
    this.allLiquidityPools = this.allLiquidityPools.bind(this);
    this.liquidityPool = this.liquidityPool.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  market(request: QueryMarketRequest): Promise<QueryMarketResponse> {
    const data = QueryMarketRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "Market", data);
    return promise.then(data => QueryMarketResponse.decode(new BinaryReader(data)));
  }
  allMarkets(request: QueryAllMarketsRequest = {
    pagination: undefined
  }): Promise<QueryAllMarketsResponse> {
    const data = QueryAllMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "AllMarkets", data);
    return promise.then(data => QueryAllMarketsResponse.decode(new BinaryReader(data)));
  }
  assetMarkets(request: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponse> {
    const data = QueryAssetMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "AssetMarkets", data);
    return promise.then(data => QueryAssetMarketsResponse.decode(new BinaryReader(data)));
  }
  userMarketOrders(request: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponse> {
    const data = QueryUserMarketOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "UserMarketOrders", data);
    return promise.then(data => QueryUserMarketOrdersResponse.decode(new BinaryReader(data)));
  }
  marketAggregatedOrders(request: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponse> {
    const data = QueryMarketAggregatedOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "MarketAggregatedOrders", data);
    return promise.then(data => QueryMarketAggregatedOrdersResponse.decode(new BinaryReader(data)));
  }
  marketHistory(request: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponse> {
    const data = QueryMarketHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "MarketHistory", data);
    return promise.then(data => QueryMarketHistoryResponse.decode(new BinaryReader(data)));
  }
  marketOrder(request: QueryMarketOrderRequest): Promise<QueryMarketOrderResponse> {
    const data = QueryMarketOrderRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "MarketOrder", data);
    return promise.then(data => QueryMarketOrderResponse.decode(new BinaryReader(data)));
  }
  allUserDust(request: QueryAllUserDustRequest): Promise<QueryAllUserDustResponse> {
    const data = QueryAllUserDustRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "AllUserDust", data);
    return promise.then(data => QueryAllUserDustResponse.decode(new BinaryReader(data)));
  }
  allLiquidityPools(request: QueryAllLiquidityPoolsRequest = {
    pagination: undefined
  }): Promise<QueryAllLiquidityPoolsResponse> {
    const data = QueryAllLiquidityPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "AllLiquidityPools", data);
    return promise.then(data => QueryAllLiquidityPoolsResponse.decode(new BinaryReader(data)));
  }
  liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tradebin.Query", "LiquidityPool", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    market(request: QueryMarketRequest): Promise<QueryMarketResponse> {
      return queryService.market(request);
    },
    allMarkets(request?: QueryAllMarketsRequest): Promise<QueryAllMarketsResponse> {
      return queryService.allMarkets(request);
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
    },
    allUserDust(request: QueryAllUserDustRequest): Promise<QueryAllUserDustResponse> {
      return queryService.allUserDust(request);
    },
    allLiquidityPools(request?: QueryAllLiquidityPoolsRequest): Promise<QueryAllLiquidityPoolsResponse> {
      return queryService.allLiquidityPools(request);
    },
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
      return queryService.liquidityPool(request);
    }
  };
};