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
        this.accounts = this.accounts.bind(this);
        this.account = this.account.bind(this);
        this.params = this.params.bind(this);
        this.moduleAccounts = this.moduleAccounts.bind(this);
        this.bech32Prefix = this.bech32Prefix.bind(this);
        this.addressBytesToString = this.addressBytesToString.bind(this);
        this.addressStringToBytes = this.addressStringToBytes.bind(this);
    }
    QueryClientImpl.prototype.accounts = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAccountsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
        return promise.then(function (data) { return query_1.QueryAccountsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.account = function (request) {
        var data = query_1.QueryAccountRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
        return promise.then(function (data) { return query_1.QueryAccountResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.moduleAccounts = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryModuleAccountsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
        return promise.then(function (data) { return query_1.QueryModuleAccountsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.bech32Prefix = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.Bech32PrefixRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
        return promise.then(function (data) { return query_1.Bech32PrefixResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.addressBytesToString = function (request) {
        var data = query_1.AddressBytesToStringRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
        return promise.then(function (data) { return query_1.AddressBytesToStringResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.addressStringToBytes = function (request) {
        var data = query_1.AddressStringToBytesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
        return promise.then(function (data) { return query_1.AddressStringToBytesResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        accounts: function (request) {
            return queryService.accounts(request);
        },
        account: function (request) {
            return queryService.account(request);
        },
        params: function (request) {
            return queryService.params(request);
        },
        moduleAccounts: function (request) {
            return queryService.moduleAccounts(request);
        },
        bech32Prefix: function (request) {
            return queryService.bech32Prefix(request);
        },
        addressBytesToString: function (request) {
            return queryService.addressBytesToString(request);
        },
        addressStringToBytes: function (request) {
            return queryService.addressStringToBytes(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
