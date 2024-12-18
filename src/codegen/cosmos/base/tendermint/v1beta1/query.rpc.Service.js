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
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.getNodeInfo = this.getNodeInfo.bind(this);
        this.getSyncing = this.getSyncing.bind(this);
        this.getLatestBlock = this.getLatestBlock.bind(this);
        this.getBlockByHeight = this.getBlockByHeight.bind(this);
        this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
        this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    }
    ServiceClientImpl.prototype.getNodeInfo = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.GetNodeInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then(function (data) { return query_1.GetNodeInfoResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getSyncing = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.GetSyncingRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then(function (data) { return query_1.GetSyncingResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getLatestBlock = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.GetLatestBlockRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then(function (data) { return query_1.GetLatestBlockResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getBlockByHeight = function (request) {
        var data = query_1.GetBlockByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then(function (data) { return query_1.GetBlockByHeightResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getLatestValidatorSet = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.GetLatestValidatorSetRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then(function (data) { return query_1.GetLatestValidatorSetResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getValidatorSetByHeight = function (request) {
        var data = query_1.GetValidatorSetByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then(function (data) { return query_1.GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new ServiceClientImpl(rpc);
    return {
        getNodeInfo: function (request) {
            return queryService.getNodeInfo(request);
        },
        getSyncing: function (request) {
            return queryService.getSyncing(request);
        },
        getLatestBlock: function (request) {
            return queryService.getLatestBlock(request);
        },
        getBlockByHeight: function (request) {
            return queryService.getBlockByHeight(request);
        },
        getLatestValidatorSet: function (request) {
            return queryService.getLatestValidatorSet(request);
        },
        getValidatorSetByHeight: function (request) {
            return queryService.getValidatorSetByHeight(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
