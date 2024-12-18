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
        this.grants = this.grants.bind(this);
        this.granterGrants = this.granterGrants.bind(this);
        this.granteeGrants = this.granteeGrants.bind(this);
    }
    QueryClientImpl.prototype.grants = function (request) {
        var data = query_1.QueryGrantsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
        return promise.then(function (data) { return query_1.QueryGrantsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.granterGrants = function (request) {
        var data = query_1.QueryGranterGrantsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
        return promise.then(function (data) { return query_1.QueryGranterGrantsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.granteeGrants = function (request) {
        var data = query_1.QueryGranteeGrantsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
        return promise.then(function (data) { return query_1.QueryGranteeGrantsResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        grants: function (request) {
            return queryService.grants(request);
        },
        granterGrants: function (request) {
            return queryService.granterGrants(request);
        },
        granteeGrants: function (request) {
            return queryService.granteeGrants(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
