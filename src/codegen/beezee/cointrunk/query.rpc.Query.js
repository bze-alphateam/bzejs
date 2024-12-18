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
        this.acceptedDomain = this.acceptedDomain.bind(this);
        this.publisher = this.publisher.bind(this);
        this.publisherByIndex = this.publisherByIndex.bind(this);
        this.allArticles = this.allArticles.bind(this);
        this.allAnonArticlesCounters = this.allAnonArticlesCounters.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("bze.cointrunk.v1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.acceptedDomain = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAcceptedDomainRequest.encode(request).finish();
        var promise = this.rpc.request("bze.cointrunk.v1.Query", "AcceptedDomain", data);
        return promise.then(function (data) { return query_1.QueryAcceptedDomainResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.publisher = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryPublisherRequest.encode(request).finish();
        var promise = this.rpc.request("bze.cointrunk.v1.Query", "Publisher", data);
        return promise.then(function (data) { return query_1.QueryPublisherResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.publisherByIndex = function (request) {
        var data = query_1.QueryPublisherByIndexRequest.encode(request).finish();
        var promise = this.rpc.request("bze.cointrunk.v1.Query", "PublisherByIndex", data);
        return promise.then(function (data) { return query_1.QueryPublisherByIndexResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.allArticles = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllArticlesRequest.encode(request).finish();
        var promise = this.rpc.request("bze.cointrunk.v1.Query", "AllArticles", data);
        return promise.then(function (data) { return query_1.QueryAllArticlesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.allAnonArticlesCounters = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryAllAnonArticlesCountersRequest.encode(request).finish();
        var promise = this.rpc.request("bze.cointrunk.v1.Query", "AllAnonArticlesCounters", data);
        return promise.then(function (data) { return query_1.QueryAllAnonArticlesCountersResponse.decode(new _m0.Reader(data)); });
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
        acceptedDomain: function (request) {
            return queryService.acceptedDomain(request);
        },
        publisher: function (request) {
            return queryService.publisher(request);
        },
        publisherByIndex: function (request) {
            return queryService.publisherByIndex(request);
        },
        allArticles: function (request) {
            return queryService.allArticles(request);
        },
        allAnonArticlesCounters: function (request) {
            return queryService.allAnonArticlesCounters(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
