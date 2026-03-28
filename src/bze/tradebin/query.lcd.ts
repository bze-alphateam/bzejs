//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryMarketRequest, QueryMarketResponseSDKType, QueryAllMarketsRequest, QueryAllMarketsResponseSDKType, QueryAssetMarketsRequest, QueryAssetMarketsResponseSDKType, QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponseSDKType, QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponseSDKType, QueryMarketHistoryRequest, QueryMarketHistoryResponseSDKType, QueryMarketOrderRequest, QueryMarketOrderResponseSDKType, QueryAllUserDustRequest, QueryAllUserDustResponseSDKType, QueryAllLiquidityPoolsRequest, QueryAllLiquidityPoolsResponseSDKType, QueryLiquidityPoolRequest, QueryLiquidityPoolResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/tradebin/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Market items. */
  async market(params: QueryMarketRequest): Promise<QueryMarketResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.base !== "undefined") {
      options.params.base = params.base;
    }
    if (typeof params?.quote !== "undefined") {
      options.params.quote = params.quote;
    }
    const endpoint = `bze/tradebin/market`;
    return await this.req.get<QueryMarketResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllMarkets items. */
  async allMarkets(params: QueryAllMarketsRequest = {
    pagination: undefined
  }): Promise<QueryAllMarketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/tradebin/all_markets`;
    return await this.req.get<QueryAllMarketsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AssetMarkets items. */
  async assetMarkets(params: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.asset !== "undefined") {
      options.params.asset = params.asset;
    }
    const endpoint = `bze/tradebin/asset_markets`;
    return await this.req.get<QueryAssetMarketsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of UserMarketOrders items. */
  async userMarketOrders(params: QueryUserMarketOrdersRequest): Promise<QueryUserMarketOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.market !== "undefined") {
      options.params.market = params.market;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/tradebin/user_market_orders/${params.address}`;
    return await this.req.get<QueryUserMarketOrdersResponseSDKType>(endpoint, options);
  }
  /* Queries a list of MarketAggregatedOrders items. */
  async marketAggregatedOrders(params: QueryMarketAggregatedOrdersRequest): Promise<QueryMarketAggregatedOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.market !== "undefined") {
      options.params.market = params.market;
    }
    if (typeof params?.orderType !== "undefined") {
      options.params.order_type = params.orderType;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/tradebin/market_aggregated_orders`;
    return await this.req.get<QueryMarketAggregatedOrdersResponseSDKType>(endpoint, options);
  }
  /* Queries a list of MarketHistory items. */
  async marketHistory(params: QueryMarketHistoryRequest): Promise<QueryMarketHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.market !== "undefined") {
      options.params.market = params.market;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/tradebin/market_history`;
    return await this.req.get<QueryMarketHistoryResponseSDKType>(endpoint, options);
  }
  /* Queries a list of MarketOrder items. */
  async marketOrder(params: QueryMarketOrderRequest): Promise<QueryMarketOrderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.market !== "undefined") {
      options.params.market = params.market;
    }
    if (typeof params?.orderType !== "undefined") {
      options.params.order_type = params.orderType;
    }
    if (typeof params?.orderId !== "undefined") {
      options.params.order_id = params.orderId;
    }
    const endpoint = `bze/tradebin/market_order`;
    return await this.req.get<QueryMarketOrderResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllUserDust items. */
  async allUserDust(params: QueryAllUserDustRequest): Promise<QueryAllUserDustResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `bze/tradebin/all_user_dust`;
    return await this.req.get<QueryAllUserDustResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllLiquidityPools items. */
  async allLiquidityPools(params: QueryAllLiquidityPoolsRequest = {
    pagination: undefined
  }): Promise<QueryAllLiquidityPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/tradebin/all_liquidity_pools`;
    return await this.req.get<QueryAllLiquidityPoolsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of LiquidityPool items. */
  async liquidityPool(params: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `bze/tradebin/liquidity_pool`;
    return await this.req.get<QueryLiquidityPoolResponseSDKType>(endpoint, options);
  }
}