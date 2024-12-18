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
        this.balance = this.balance.bind(this);
        this.allBalances = this.allBalances.bind(this);
        this.spendableBalances = this.spendableBalances.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.params = this.params.bind(this);
        this.denomMetadata = this.denomMetadata.bind(this);
        this.denomsMetadata = this.denomsMetadata.bind(this);
        this.denomOwners = this.denomOwners.bind(this);
    }
    QueryClientImpl.prototype.balance = function (request) {
        var data = query_1.QueryBalanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
        return promise.then(function (data) { return query_1.QueryBalanceResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.allBalances = function (request) {
        var data = query_1.QueryAllBalancesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
        return promise.then(function (data) { return query_1.QueryAllBalancesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.spendableBalances = function (request) {
        var data = query_1.QuerySpendableBalancesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
        return promise.then(function (data) { return query_1.QuerySpendableBalancesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.totalSupply = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryTotalSupplyRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
        return promise.then(function (data) { return query_1.QueryTotalSupplyResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.supplyOf = function (request) {
        var data = query_1.QuerySupplyOfRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
        return promise.then(function (data) { return query_1.QuerySupplyOfResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.denomMetadata = function (request) {
        var data = query_1.QueryDenomMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
        return promise.then(function (data) { return query_1.QueryDenomMetadataResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.denomsMetadata = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryDenomsMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
        return promise.then(function (data) { return query_1.QueryDenomsMetadataResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.denomOwners = function (request) {
        var data = query_1.QueryDenomOwnersRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
        return promise.then(function (data) { return query_1.QueryDenomOwnersResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        balance: function (request) {
            return queryService.balance(request);
        },
        allBalances: function (request) {
            return queryService.allBalances(request);
        },
        spendableBalances: function (request) {
            return queryService.spendableBalances(request);
        },
        totalSupply: function (request) {
            return queryService.totalSupply(request);
        },
        supplyOf: function (request) {
            return queryService.supplyOf(request);
        },
        params: function (request) {
            return queryService.params(request);
        },
        denomMetadata: function (request) {
            return queryService.denomMetadata(request);
        },
        denomsMetadata: function (request) {
            return queryService.denomsMetadata(request);
        },
        denomOwners: function (request) {
            return queryService.denomOwners(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
