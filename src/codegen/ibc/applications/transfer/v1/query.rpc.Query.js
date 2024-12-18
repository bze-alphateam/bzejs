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
        this.denomTrace = this.denomTrace.bind(this);
        this.denomTraces = this.denomTraces.bind(this);
        this.params = this.params.bind(this);
    }
    QueryClientImpl.prototype.denomTrace = function (request) {
        var data = query_1.QueryDenomTraceRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
        return promise.then(function (data) { return query_1.QueryDenomTraceResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.denomTraces = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryDenomTracesRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
        return promise.then(function (data) { return query_1.QueryDenomTracesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        denomTrace: function (request) {
            return queryService.denomTrace(request);
        },
        denomTraces: function (request) {
            return queryService.denomTraces(request);
        },
        params: function (request) {
            return queryService.params(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
