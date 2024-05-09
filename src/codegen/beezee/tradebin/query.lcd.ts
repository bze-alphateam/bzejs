import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetMarketRequest, QueryGetMarketResponseSDKType, QueryAllMarketRequest, QueryAllMarketResponseSDKType, QueryAssetMarketsRequest, QueryAssetMarketsResponseSDKType, QueryUserMarketOrdersRequest, QueryUserMarketOrdersResponseSDKType, QueryMarketAggregatedOrdersRequest, QueryMarketAggregatedOrdersResponseSDKType, QueryMarketHistoryRequest, QueryMarketHistoryResponseSDKType, QueryMarketOrderRequest, QueryMarketOrderResponseSDKType } from "./query";
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
    this.marketAll = this.marketAll.bind(this);
    this.assetMarkets = this.assetMarkets.bind(this);
    this.userMarketOrders = this.userMarketOrders.bind(this);
    this.marketAggregatedOrders = this.marketAggregatedOrders.bind(this);
    this.marketHistory = this.marketHistory.bind(this);
    this.marketOrder = this.marketOrder.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/tradebin/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Market by index. */


  async market(params: QueryGetMarketRequest): Promise<QueryGetMarketResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.base !== "undefined") {
      options.params.base = params.base;
    }

    if (typeof params?.quote !== "undefined") {
      options.params.quote = params.quote;
    }

    const endpoint = `bze/tradebin/v1/market`;
    return await this.req.get<QueryGetMarketResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Market items. */


  async marketAll(params: QueryAllMarketRequest = {
    pagination: undefined
  }): Promise<QueryAllMarketResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/tradebin/v1/all_markets`;
    return await this.req.get<QueryAllMarketResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AssetMarkets items. */


  async assetMarkets(params: QueryAssetMarketsRequest): Promise<QueryAssetMarketsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.asset !== "undefined") {
      options.params.asset = params.asset;
    }

    const endpoint = `bze/tradebin/v1/asset_markets`;
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

    const endpoint = `bze/tradebin/v1/user_market_orders/${params.address}`;
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

    const endpoint = `bze/tradebin/v1/market_aggregated_orders`;
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

    const endpoint = `bze/tradebin/v1/market_history`;
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

    const endpoint = `bze/tradebin/v1/market_order`;
    return await this.req.get<QueryMarketOrderResponseSDKType>(endpoint, options);
  }

}