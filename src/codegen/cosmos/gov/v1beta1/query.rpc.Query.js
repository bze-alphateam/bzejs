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
        this.proposal = this.proposal.bind(this);
        this.proposals = this.proposals.bind(this);
        this.vote = this.vote.bind(this);
        this.votes = this.votes.bind(this);
        this.params = this.params.bind(this);
        this.deposit = this.deposit.bind(this);
        this.deposits = this.deposits.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    QueryClientImpl.prototype.proposal = function (request) {
        var data = query_1.QueryProposalRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
        return promise.then(function (data) { return query_1.QueryProposalResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.proposals = function (request) {
        var data = query_1.QueryProposalsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
        return promise.then(function (data) { return query_1.QueryProposalsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.vote = function (request) {
        var data = query_1.QueryVoteRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
        return promise.then(function (data) { return query_1.QueryVoteResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.votes = function (request) {
        var data = query_1.QueryVotesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
        return promise.then(function (data) { return query_1.QueryVotesResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.params = function (request) {
        var data = query_1.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
        return promise.then(function (data) { return query_1.QueryParamsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.deposit = function (request) {
        var data = query_1.QueryDepositRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
        return promise.then(function (data) { return query_1.QueryDepositResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.deposits = function (request) {
        var data = query_1.QueryDepositsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
        return promise.then(function (data) { return query_1.QueryDepositsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.tallyResult = function (request) {
        var data = query_1.QueryTallyResultRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
        return promise.then(function (data) { return query_1.QueryTallyResultResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        proposal: function (request) {
            return queryService.proposal(request);
        },
        proposals: function (request) {
            return queryService.proposals(request);
        },
        vote: function (request) {
            return queryService.vote(request);
        },
        votes: function (request) {
            return queryService.votes(request);
        },
        params: function (request) {
            return queryService.params(request);
        },
        deposit: function (request) {
            return queryService.deposit(request);
        },
        deposits: function (request) {
            return queryService.deposits(request);
        },
        tallyResult: function (request) {
            return queryService.tallyResult(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
