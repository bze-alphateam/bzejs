import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetMarketRequest, QueryGetMarketResponseSDKType, QueryAllMarketRequest, QueryAllMarketResponseSDKType, QueryAssetMarketsRequest, QueryAssetMarketsResponseSDKType, QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponseSDKType, QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponseSDKType, QueryMarketHistoryRequest, QueryMarketHistoryResponseSDKType, QueryMarketOrderRequest, QueryMarketOrderResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    market(params: QueryGetMarketRequest): Promise<QueryGetMarketResponseSDKType>;
    marketAll(params?: QueryAllMarketRequest): Promise<QueryAllMarketResponseSDKType>;
    assetMarkets(params: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponseSDKType>;
    userMarketOrders(params: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponseSDKType>;
    marketAggregatedOrders(params: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponseSDKType>;
    marketHistory(params: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponseSDKType>;
    marketOrder(params: QueryMarketOrderRequest): Promise<QueryMarketOrderResponseSDKType>;
}
