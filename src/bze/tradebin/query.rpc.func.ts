//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryMarketRequest, QueryMarketResponse, QueryAllMarketsRequest, QueryAllMarketsResponse, QueryAssetMarketsRequest, QueryAssetMarketsResponse, QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponse, QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponse, QueryMarketHistoryRequest, QueryMarketHistoryResponse, QueryMarketOrderRequest, QueryMarketOrderResponse, QueryAllUserDustRequest, QueryAllUserDustResponse, QueryAllLiquidityPoolsRequest, QueryAllLiquidityPoolsResponse, QueryLiquidityPoolRequest, QueryLiquidityPoolResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package bze.tradebin
 * @see proto service: bze.tradebin.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.tradebin.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Queries a list of Market items.
 * @name getMarket
 * @package bze.tradebin
 * @see proto service: bze.tradebin.Market
 */
export const getMarket = buildQuery<QueryMarketRequest, QueryMarketResponse>({
  encode: QueryMarketRequest.encode,
  decode: QueryMarketResponse.decode,
  service: "bze.tradebin.Query",
  method: "Market",
  deps: [QueryMarketRequest, QueryMarketResponse]
});
/**
 * Queries a list of AllMarkets items.
 * @name getAllMarkets
 * @package bze.tradebin
 * @see proto service: bze.tradebin.AllMarkets
 */
export const getAllMarkets = buildQuery<QueryAllMarketsRequest, QueryAllMarketsResponse>({
  encode: QueryAllMarketsRequest.encode,
  decode: QueryAllMarketsResponse.decode,
  service: "bze.tradebin.Query",
  method: "AllMarkets",
  deps: [QueryAllMarketsRequest, QueryAllMarketsResponse]
});
/**
 * Queries a list of AssetMarkets items.
 * @name getAssetMarkets
 * @package bze.tradebin
 * @see proto service: bze.tradebin.AssetMarkets
 */
export const getAssetMarkets = buildQuery<QueryAssetMarketsRequest, QueryAssetMarketsResponse>({
  encode: QueryAssetMarketsRequest.encode,
  decode: QueryAssetMarketsResponse.decode,
  service: "bze.tradebin.Query",
  method: "AssetMarkets",
  deps: [QueryAssetMarketsRequest, QueryAssetMarketsResponse]
});
/**
 * Queries a list of UserMarketOrders items.
 * @name getUserMarketOrders
 * @package bze.tradebin
 * @see proto service: bze.tradebin.UserMarketOrders
 */
export const getUserMarketOrders = buildQuery<QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponse>({
  encode: QueryUserMarketOrdersRequest.encode,
  decode: QueryUserMarketOrdersResponse.decode,
  service: "bze.tradebin.Query",
  method: "UserMarketOrders",
  deps: [QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponse]
});
/**
 * Queries a list of MarketAggregatedOrders items.
 * @name getMarketAggregatedOrders
 * @package bze.tradebin
 * @see proto service: bze.tradebin.MarketAggregatedOrders
 */
export const getMarketAggregatedOrders = buildQuery<QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponse>({
  encode: QueryMarketAggregatedOrdersRequest.encode,
  decode: QueryMarketAggregatedOrdersResponse.decode,
  service: "bze.tradebin.Query",
  method: "MarketAggregatedOrders",
  deps: [QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponse]
});
/**
 * Queries a list of MarketHistory items.
 * @name getMarketHistory
 * @package bze.tradebin
 * @see proto service: bze.tradebin.MarketHistory
 */
export const getMarketHistory = buildQuery<QueryMarketHistoryRequest, QueryMarketHistoryResponse>({
  encode: QueryMarketHistoryRequest.encode,
  decode: QueryMarketHistoryResponse.decode,
  service: "bze.tradebin.Query",
  method: "MarketHistory",
  deps: [QueryMarketHistoryRequest, QueryMarketHistoryResponse]
});
/**
 * Queries a list of MarketOrder items.
 * @name getMarketOrder
 * @package bze.tradebin
 * @see proto service: bze.tradebin.MarketOrder
 */
export const getMarketOrder = buildQuery<QueryMarketOrderRequest, QueryMarketOrderResponse>({
  encode: QueryMarketOrderRequest.encode,
  decode: QueryMarketOrderResponse.decode,
  service: "bze.tradebin.Query",
  method: "MarketOrder",
  deps: [QueryMarketOrderRequest, QueryMarketOrderResponse]
});
/**
 * Queries a list of AllUserDust items.
 * @name getAllUserDust
 * @package bze.tradebin
 * @see proto service: bze.tradebin.AllUserDust
 */
export const getAllUserDust = buildQuery<QueryAllUserDustRequest, QueryAllUserDustResponse>({
  encode: QueryAllUserDustRequest.encode,
  decode: QueryAllUserDustResponse.decode,
  service: "bze.tradebin.Query",
  method: "AllUserDust",
  deps: [QueryAllUserDustRequest, QueryAllUserDustResponse]
});
/**
 * Queries a list of AllLiquidityPools items.
 * @name getAllLiquidityPools
 * @package bze.tradebin
 * @see proto service: bze.tradebin.AllLiquidityPools
 */
export const getAllLiquidityPools = buildQuery<QueryAllLiquidityPoolsRequest, QueryAllLiquidityPoolsResponse>({
  encode: QueryAllLiquidityPoolsRequest.encode,
  decode: QueryAllLiquidityPoolsResponse.decode,
  service: "bze.tradebin.Query",
  method: "AllLiquidityPools",
  deps: [QueryAllLiquidityPoolsRequest, QueryAllLiquidityPoolsResponse]
});
/**
 * Queries a list of LiquidityPool items.
 * @name getLiquidityPool
 * @package bze.tradebin
 * @see proto service: bze.tradebin.LiquidityPool
 */
export const getLiquidityPool = buildQuery<QueryLiquidityPoolRequest, QueryLiquidityPoolResponse>({
  encode: QueryLiquidityPoolRequest.encode,
  decode: QueryLiquidityPoolResponse.decode,
  service: "bze.tradebin.Query",
  method: "LiquidityPool",
  deps: [QueryLiquidityPoolRequest, QueryLiquidityPoolResponse]
});