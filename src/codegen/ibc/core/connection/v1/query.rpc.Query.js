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
        this.connection = this.connection.bind(this);
        this.connections = this.connections.bind(this);
        this.clientConnections = this.clientConnections.bind(this);
        this.connectionClientState = this.connectionClientState.bind(this);
        this.connectionConsensusState = this.connectionConsensusState.bind(this);
    }
    QueryClientImpl.prototype.connection = function (request) {
        var data = query_1.QueryConnectionRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
        return promise.then(function (data) { return query_1.QueryConnectionResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.connections = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryConnectionsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
        return promise.then(function (data) { return query_1.QueryConnectionsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.clientConnections = function (request) {
        var data = query_1.QueryClientConnectionsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
        return promise.then(function (data) { return query_1.QueryClientConnectionsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.connectionClientState = function (request) {
        var data = query_1.QueryConnectionClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
        return promise.then(function (data) { return query_1.QueryConnectionClientStateResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.connectionConsensusState = function (request) {
        var data = query_1.QueryConnectionConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
        return promise.then(function (data) { return query_1.QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        connection: function (request) {
            return queryService.connection(request);
        },
        connections: function (request) {
            return queryService.connections(request);
        },
        clientConnections: function (request) {
            return queryService.clientConnections(request);
        },
        connectionClientState: function (request) {
            return queryService.connectionClientState(request);
        },
        connectionConsensusState: function (request) {
            return queryService.connectionConsensusState(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
