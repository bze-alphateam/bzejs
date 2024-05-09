import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
    marketAll(request?: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
    assetMarkets(request: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponse>;
    userMarketOrders(request: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponse>;
    marketAggregatedOrders(request: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponse>;
    marketHistory(request: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponse>;
    marketOrder(request: QueryMarketOrderRequest): Promise<QueryMarketOrderResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
    marketAll(request?: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
    assetMarkets(request: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponse>;
    userMarketOrders(request: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponse>;
    marketAggregatedOrders(request: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponse>;
    marketHistory(request: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponse>;
    marketOrder(request: QueryMarketOrderRequest): Promise<QueryMarketOrderResponse>;
};
