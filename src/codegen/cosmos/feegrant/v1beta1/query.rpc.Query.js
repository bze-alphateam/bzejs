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
        this.allowance = this.allowance.bind(this);
        this.allowances = this.allowances.bind(this);
        this.allowancesByGranter = this.allowancesByGranter.bind(this);
    }
    QueryClientImpl.prototype.allowance = function (request) {
        var data = query_1.QueryAllowanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
        return promise.then(function (data) { return query_1.QueryAllowanceResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.allowances = function (request) {
        var data = query_1.QueryAllowancesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
        return promise.then(function (data) { return query_1.QueryAllowancesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.allowancesByGranter = function (request) {
        var data = query_1.QueryAllowancesByGranterRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
        return promise.then(function (data) { return query_1.QueryAllowancesByGranterResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        allowance: function (request) {
            return queryService.allowance(request);
        },
        allowances: function (request) {
            return queryService.allowances(request);
        },
        allowancesByGranter: function (request) {
            return queryService.allowancesByGranter(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
