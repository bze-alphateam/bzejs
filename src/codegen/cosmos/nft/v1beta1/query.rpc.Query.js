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
        this.owner = this.owner.bind(this);
        this.supply = this.supply.bind(this);
        this.nFTs = this.nFTs.bind(this);
        this.nFT = this.nFT.bind(this);
        this["class"] = this["class"].bind(this);
        this.classes = this.classes.bind(this);
    }
    QueryClientImpl.prototype.balance = function (request) {
        var data = query_1.QueryBalanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
        return promise.then(function (data) { return query_1.QueryBalanceResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.owner = function (request) {
        var data = query_1.QueryOwnerRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
        return promise.then(function (data) { return query_1.QueryOwnerResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.supply = function (request) {
        var data = query_1.QuerySupplyRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
        return promise.then(function (data) { return query_1.QuerySupplyResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.nFTs = function (request) {
        var data = query_1.QueryNFTsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
        return promise.then(function (data) { return query_1.QueryNFTsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.nFT = function (request) {
        var data = query_1.QueryNFTRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
        return promise.then(function (data) { return query_1.QueryNFTResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype["class"] = function (request) {
        var data = query_1.QueryClassRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
        return promise.then(function (data) { return query_1.QueryClassResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.classes = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryClassesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
        return promise.then(function (data) { return query_1.QueryClassesResponse.decode(new _m0.Reader(data)); });
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
        owner: function (request) {
            return queryService.owner(request);
        },
        supply: function (request) {
            return queryService.supply(request);
        },
        nFTs: function (request) {
            return queryService.nFTs(request);
        },
        nFT: function (request) {
            return queryService.nFT(request);
        },
        "class": function (request) {
            return queryService["class"](request);
        },
        classes: function (request) {
            return queryService.classes(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
