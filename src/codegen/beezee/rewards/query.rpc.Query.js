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
        this.stakingReward = this.stakingReward.bind(this);
        this.stakingRewardAll = this.stakingRewardAll.bind(this);
        this.tradingReward = this.tradingReward.bind(this);
        this.tradingRewardAll = this.tradingRewardAll.bind(this);
        this.stakingRewardParticipant = this.stakingRewardParticipant.bind(this);
        this.stakingRewardParticipantAll = this.stakingRewardParticipantAll.bind(this);
        this.getTradingRewardLeaderboardHandler = this.getTradingRewardLeaderboardHandler.bind(this);
        this.getMarketIdTradingRewardIdHandler = this.getMarketIdTradingRewardIdHandler.bind(this);
        this.allPendingUnlockParticipant = this.allPendingUnlockParticipant.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.stakingReward = function (request) {
        var data = query_1.QueryGetStakingRewardRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "StakingReward", data);
        return promise.then(function (data) { return query_1.QueryGetStakingRewardResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.stakingRewardAll = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllStakingRewardRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "StakingRewardAll", data);
        return promise.then(function (data) { return query_1.QueryAllStakingRewardResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.tradingReward = function (request) {
        var data = query_1.QueryGetTradingRewardRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "TradingReward", data);
        return promise.then(function (data) { return query_1.QueryGetTradingRewardResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.tradingRewardAll = function (request) {
        var data = query_1.QueryAllTradingRewardRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "TradingRewardAll", data);
        return promise.then(function (data) { return query_1.QueryAllTradingRewardResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.stakingRewardParticipant = function (request) {
        var data = query_1.QueryGetStakingRewardParticipantRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "StakingRewardParticipant", data);
        return promise.then(function (data) { return query_1.QueryGetStakingRewardParticipantResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.stakingRewardParticipantAll = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllStakingRewardParticipantRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "StakingRewardParticipantAll", data);
        return promise.then(function (data) { return query_1.QueryAllStakingRewardParticipantResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.getTradingRewardLeaderboardHandler = function (request) {
        var data = query_1.QueryGetTradingRewardLeaderboardRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "GetTradingRewardLeaderboardHandler", data);
        return promise.then(function (data) { return query_1.QueryGetTradingRewardLeaderboardResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.getMarketIdTradingRewardIdHandler = function (request) {
        var data = query_1.QueryGetMarketIdTradingRewardIdHandlerRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "GetMarketIdTradingRewardIdHandler", data);
        return promise.then(function (data) { return query_1.QueryGetMarketIdTradingRewardIdHandlerResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.allPendingUnlockParticipant = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllPendingUnlockParticipantRequest.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Query", "AllPendingUnlockParticipant", data);
        return promise.then(function (data) { return query_1.QueryAllPendingUnlockParticipantResponse.decode(new _m0.Reader(data)); });
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
        stakingReward: function (request) {
            return queryService.stakingReward(request);
        },
        stakingRewardAll: function (request) {
            return queryService.stakingRewardAll(request);
        },
        tradingReward: function (request) {
            return queryService.tradingReward(request);
        },
        tradingRewardAll: function (request) {
            return queryService.tradingRewardAll(request);
        },
        stakingRewardParticipant: function (request) {
            return queryService.stakingRewardParticipant(request);
        },
        stakingRewardParticipantAll: function (request) {
            return queryService.stakingRewardParticipantAll(request);
        },
        getTradingRewardLeaderboardHandler: function (request) {
            return queryService.getTradingRewardLeaderboardHandler(request);
        },
        getMarketIdTradingRewardIdHandler: function (request) {
            return queryService.getMarketIdTradingRewardIdHandler(request);
        },
        allPendingUnlockParticipant: function (request) {
            return queryService.allPendingUnlockParticipant(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
