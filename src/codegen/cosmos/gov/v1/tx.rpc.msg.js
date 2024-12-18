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
exports.MsgClientImpl = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.submitProposal = this.submitProposal.bind(this);
        this.execLegacyContent = this.execLegacyContent.bind(this);
        this.vote = this.vote.bind(this);
        this.voteWeighted = this.voteWeighted.bind(this);
        this.deposit = this.deposit.bind(this);
    }
    MsgClientImpl.prototype.submitProposal = function (request) {
        var data = tx_1.MsgSubmitProposal.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
        return promise.then(function (data) { return tx_1.MsgSubmitProposalResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.execLegacyContent = function (request) {
        var data = tx_1.MsgExecLegacyContent.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
        return promise.then(function (data) { return tx_1.MsgExecLegacyContentResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.vote = function (request) {
        var data = tx_1.MsgVote.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
        return promise.then(function (data) { return tx_1.MsgVoteResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.voteWeighted = function (request) {
        var data = tx_1.MsgVoteWeighted.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
        return promise.then(function (data) { return tx_1.MsgVoteWeightedResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.deposit = function (request) {
        var data = tx_1.MsgDeposit.encode(request).finish();
        var promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
        return promise.then(function (data) { return tx_1.MsgDepositResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
