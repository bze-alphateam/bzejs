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
        this.createStakingReward = this.createStakingReward.bind(this);
        this.updateStakingReward = this.updateStakingReward.bind(this);
        this.createTradingReward = this.createTradingReward.bind(this);
        this.joinStaking = this.joinStaking.bind(this);
        this.exitStaking = this.exitStaking.bind(this);
        this.claimStakingRewards = this.claimStakingRewards.bind(this);
        this.distributeStakingRewards = this.distributeStakingRewards.bind(this);
    }
    MsgClientImpl.prototype.createStakingReward = function (request) {
        var data = tx_1.MsgCreateStakingReward.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Msg", "CreateStakingReward", data);
        return promise.then(function (data) { return tx_1.MsgCreateStakingRewardResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.updateStakingReward = function (request) {
        var data = tx_1.MsgUpdateStakingReward.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Msg", "UpdateStakingReward", data);
        return promise.then(function (data) { return tx_1.MsgUpdateStakingRewardResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.createTradingReward = function (request) {
        var data = tx_1.MsgCreateTradingReward.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Msg", "CreateTradingReward", data);
        return promise.then(function (data) { return tx_1.MsgCreateTradingRewardResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.joinStaking = function (request) {
        var data = tx_1.MsgJoinStaking.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Msg", "JoinStaking", data);
        return promise.then(function (data) { return tx_1.MsgJoinStakingResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.exitStaking = function (request) {
        var data = tx_1.MsgExitStaking.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Msg", "ExitStaking", data);
        return promise.then(function (data) { return tx_1.MsgExitStakingResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.claimStakingRewards = function (request) {
        var data = tx_1.MsgClaimStakingRewards.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Msg", "ClaimStakingRewards", data);
        return promise.then(function (data) { return tx_1.MsgClaimStakingRewardsResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.distributeStakingRewards = function (request) {
        var data = tx_1.MsgDistributeStakingRewards.encode(request).finish();
        var promise = this.rpc.request("bze.v1.rewards.Msg", "DistributeStakingRewards", data);
        return promise.then(function (data) { return tx_1.MsgDistributeStakingRewardsResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
