"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
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
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.market = function (request) {
        var data = query_1.QueryGetMarketRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "Market", data);
        return promise.then(function (data) { return query_1.QueryGetMarketResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.marketAll = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllMarketRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "MarketAll", data);
        return promise.then(function (data) { return query_1.QueryAllMarketResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.assetMarkets = function (request) {
        var data = query_1.QueryAssetMarketsRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "AssetMarkets", data);
        return promise.then(function (data) { return query_1.QueryAssetMarketsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.userMarketOrders = function (request) {
        var data = query_1.QueryUserMarketOrdersRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "UserMarketOrders", data);
        return promise.then(function (data) { return query_1.QueryUserMarketOrdersResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.marketAggregatedOrders = function (request) {
        var data = query_1.QueryMarketAggregatedOrdersRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "MarketAggregatedOrders", data);
        return promise.then(function (data) { return query_1.QueryMarketAggregatedOrdersResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.marketHistory = function (request) {
        var data = query_1.QueryMarketHistoryRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "MarketHistory", data);
        return promise.then(function (data) { return query_1.QueryMarketHistoryResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.marketOrder = function (request) {
        var data = query_1.QueryMarketOrderRequest.encode(request).finish();
        var promise = this.rpc.request("bze.tradebin.v1.Query", "MarketOrder", data);
        return promise.then(function (data) { return query_1.QueryMarketOrderResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        params: function (request) {
            return queryService.params(request);
        },
        market: function (request) {
            return queryService.market(request);
        },
        marketAll: function (request) {
            return queryService.marketAll(request);
        },
        assetMarkets: function (request) {
            return queryService.assetMarkets(request);
        },
        userMarketOrders: function (request) {
            return queryService.userMarketOrders(request);
        },
        marketAggregatedOrders: function (request) {
            return queryService.marketAggregatedOrders(request);
        },
        marketHistory: function (request) {
            return queryService.marketHistory(request);
        },
        marketOrder: function (request) {
            return queryService.marketOrder(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
