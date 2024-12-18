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
        this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
        this.validatorCommission = this.validatorCommission.bind(this);
        this.validatorSlashes = this.validatorSlashes.bind(this);
        this.delegationRewards = this.delegationRewards.bind(this);
        this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
        this.delegatorValidators = this.delegatorValidators.bind(this);
        this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
        this.communityPool = this.communityPool.bind(this);
    }
    QueryClientImpl.prototype.params = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.validatorOutstandingRewards = function (request) {
        var data = query_1.QueryValidatorOutstandingRewardsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
        return promise.then(function (data) { return query_1.QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.validatorCommission = function (request) {
        var data = query_1.QueryValidatorCommissionRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
        return promise.then(function (data) { return query_1.QueryValidatorCommissionResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.validatorSlashes = function (request) {
        var data = query_1.QueryValidatorSlashesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
        return promise.then(function (data) { return query_1.QueryValidatorSlashesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.delegationRewards = function (request) {
        var data = query_1.QueryDelegationRewardsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
        return promise.then(function (data) { return query_1.QueryDelegationRewardsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.delegationTotalRewards = function (request) {
        var data = query_1.QueryDelegationTotalRewardsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
        return promise.then(function (data) { return query_1.QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.delegatorValidators = function (request) {
        var data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(function (data) { return query_1.QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.delegatorWithdrawAddress = function (request) {
        var data = query_1.QueryDelegatorWithdrawAddressRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
        return promise.then(function (data) { return query_1.QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.communityPool = function (request) {
        if (request === void 0) { request = {}; }
        var data = query_1.QueryCommunityPoolRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
        return promise.then(function (data) { return query_1.QueryCommunityPoolResponse.decode(new _m0.Reader(data)); });
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
        validatorOutstandingRewards: function (request) {
            return queryService.validatorOutstandingRewards(request);
        },
        validatorCommission: function (request) {
            return queryService.validatorCommission(request);
        },
        validatorSlashes: function (request) {
            return queryService.validatorSlashes(request);
        },
        delegationRewards: function (request) {
            return queryService.delegationRewards(request);
        },
        delegationTotalRewards: function (request) {
            return queryService.delegationTotalRewards(request);
        },
        delegatorValidators: function (request) {
            return queryService.delegatorValidators(request);
        },
        delegatorWithdrawAddress: function (request) {
            return queryService.delegatorWithdrawAddress(request);
        },
        communityPool: function (request) {
            return queryService.communityPool(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
