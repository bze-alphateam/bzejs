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
        this.clientState = this.clientState.bind(this);
        this.clientStates = this.clientStates.bind(this);
        this.consensusState = this.consensusState.bind(this);
        this.consensusStates = this.consensusStates.bind(this);
        this.clientStatus = this.clientStatus.bind(this);
        this.clientParams = this.clientParams.bind(this);
        this.upgradedClientState = this.upgradedClientState.bind(this);
        this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    }
    QueryClientImpl.prototype.clientState = function (request) {
        var data = query_1.QueryClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
        return promise.then(function (data) { return query_1.QueryClientStateResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.clientStates = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryClientStatesRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
        return promise.then(function (data) { return query_1.QueryClientStatesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.consensusState = function (request) {
        var data = query_1.QueryConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
        return promise.then(function (data) { return query_1.QueryConsensusStateResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.consensusStates = function (request) {
        var data = query_1.QueryConsensusStatesRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
        return promise.then(function (data) { return query_1.QueryConsensusStatesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.clientStatus = function (request) {
        var data = query_1.QueryClientStatusRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
        return promise.then(function (data) { return query_1.QueryClientStatusResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.clientParams = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryClientParamsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
        return promise.then(function (data) { return query_1.QueryClientParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.upgradedClientState = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryUpgradedClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
        return promise.then(function (data) { return query_1.QueryUpgradedClientStateResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.upgradedConsensusState = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryUpgradedConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
        return promise.then(function (data) { return query_1.QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        clientState: function (request) {
            return queryService.clientState(request);
        },
        clientStates: function (request) {
            return queryService.clientStates(request);
        },
        consensusState: function (request) {
            return queryService.consensusState(request);
        },
        consensusStates: function (request) {
            return queryService.consensusStates(request);
        },
        clientStatus: function (request) {
            return queryService.clientStatus(request);
        },
        clientParams: function (request) {
            return queryService.clientParams(request);
        },
        upgradedClientState: function (request) {
            return queryService.upgradedClientState(request);
        },
        upgradedConsensusState: function (request) {
            return queryService.upgradedConsensusState(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
