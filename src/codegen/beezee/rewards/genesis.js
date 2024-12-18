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
exports.GenesisState = void 0;
var params_1 = require("./params");
var staking_reward_1 = require("./staking_reward");
var trading_reward_1 = require("./trading_reward");
var staking_reward_participant_1 = require("./staking_reward_participant");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseGenesisState() {
    return {
        params: undefined,
        stakingRewardList: [],
        stakingRewardsCounter: helpers_1.Long.UZERO,
        tradingRewardsCounter: helpers_1.Long.UZERO,
        activeTradingRewardList: [],
        pendingTradingRewardList: [],
        stakingRewardParticipantList: [],
        pendingUnlockParticipantList: [],
        tradingRewardLeaderboardList: [],
        tradingRewardCandidateList: [],
        marketIdTradingRewardIdList: [],
        pendingTradingRewardExpirationList: [],
        activeTradingRewardExpirationList: []
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.stakingRewardList; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_reward_1.StakingReward.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (!message.stakingRewardsCounter.isZero()) {
            writer.uint32(24).uint64(message.stakingRewardsCounter);
        }
        if (!message.tradingRewardsCounter.isZero()) {
            writer.uint32(32).uint64(message.tradingRewardsCounter);
        }
        for (var _b = 0, _c = message.activeTradingRewardList; _b < _c.length; _b++) {
            var v = _c[_b];
            trading_reward_1.TradingReward.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _d = 0, _e = message.pendingTradingRewardList; _d < _e.length; _d++) {
            var v = _e[_d];
            trading_reward_1.TradingReward.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _f = 0, _g = message.stakingRewardParticipantList; _f < _g.length; _f++) {
            var v = _g[_f];
            staking_reward_participant_1.StakingRewardParticipant.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _h = 0, _j = message.pendingUnlockParticipantList; _h < _j.length; _h++) {
            var v = _j[_h];
            staking_reward_participant_1.PendingUnlockParticipant.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (var _k = 0, _l = message.tradingRewardLeaderboardList; _k < _l.length; _k++) {
            var v = _l[_k];
            trading_reward_1.TradingRewardLeaderboard.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (var _m = 0, _o = message.tradingRewardCandidateList; _m < _o.length; _m++) {
            var v = _o[_m];
            trading_reward_1.TradingRewardCandidate.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (var _p = 0, _q = message.marketIdTradingRewardIdList; _p < _q.length; _p++) {
            var v = _q[_p];
            trading_reward_1.MarketIdTradingRewardId.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (var _r = 0, _s = message.pendingTradingRewardExpirationList; _r < _s.length; _r++) {
            var v = _s[_r];
            trading_reward_1.TradingRewardExpiration.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (var _t = 0, _u = message.activeTradingRewardExpirationList; _t < _u.length; _t++) {
            var v = _u[_t];
            trading_reward_1.TradingRewardExpiration.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.stakingRewardList.push(staking_reward_1.StakingReward.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.stakingRewardsCounter = reader.uint64();
                    break;
                case 4:
                    message.tradingRewardsCounter = reader.uint64();
                    break;
                case 5:
                    message.activeTradingRewardList.push(trading_reward_1.TradingReward.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.pendingTradingRewardList.push(trading_reward_1.TradingReward.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.stakingRewardParticipantList.push(staking_reward_participant_1.StakingRewardParticipant.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.pendingUnlockParticipantList.push(staking_reward_participant_1.PendingUnlockParticipant.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.tradingRewardLeaderboardList.push(trading_reward_1.TradingRewardLeaderboard.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.tradingRewardCandidateList.push(trading_reward_1.TradingRewardCandidate.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.marketIdTradingRewardIdList.push(trading_reward_1.MarketIdTradingRewardId.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.pendingTradingRewardExpirationList.push(trading_reward_1.TradingRewardExpiration.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.activeTradingRewardExpirationList.push(trading_reward_1.TradingRewardExpiration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.stakingRewardList = ((_a = object.stakingRewardList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_reward_1.StakingReward.fromPartial(e); })) || [];
        message.stakingRewardsCounter = object.stakingRewardsCounter !== undefined && object.stakingRewardsCounter !== null ? helpers_1.Long.fromValue(object.stakingRewardsCounter) : helpers_1.Long.UZERO;
        message.tradingRewardsCounter = object.tradingRewardsCounter !== undefined && object.tradingRewardsCounter !== null ? helpers_1.Long.fromValue(object.tradingRewardsCounter) : helpers_1.Long.UZERO;
        message.activeTradingRewardList = ((_b = object.activeTradingRewardList) === null || _b === void 0 ? void 0 : _b.map(function (e) { return trading_reward_1.TradingReward.fromPartial(e); })) || [];
        message.pendingTradingRewardList = ((_c = object.pendingTradingRewardList) === null || _c === void 0 ? void 0 : _c.map(function (e) { return trading_reward_1.TradingReward.fromPartial(e); })) || [];
        message.stakingRewardParticipantList = ((_d = object.stakingRewardParticipantList) === null || _d === void 0 ? void 0 : _d.map(function (e) { return staking_reward_participant_1.StakingRewardParticipant.fromPartial(e); })) || [];
        message.pendingUnlockParticipantList = ((_e = object.pendingUnlockParticipantList) === null || _e === void 0 ? void 0 : _e.map(function (e) { return staking_reward_participant_1.PendingUnlockParticipant.fromPartial(e); })) || [];
        message.tradingRewardLeaderboardList = ((_f = object.tradingRewardLeaderboardList) === null || _f === void 0 ? void 0 : _f.map(function (e) { return trading_reward_1.TradingRewardLeaderboard.fromPartial(e); })) || [];
        message.tradingRewardCandidateList = ((_g = object.tradingRewardCandidateList) === null || _g === void 0 ? void 0 : _g.map(function (e) { return trading_reward_1.TradingRewardCandidate.fromPartial(e); })) || [];
        message.marketIdTradingRewardIdList = ((_h = object.marketIdTradingRewardIdList) === null || _h === void 0 ? void 0 : _h.map(function (e) { return trading_reward_1.MarketIdTradingRewardId.fromPartial(e); })) || [];
        message.pendingTradingRewardExpirationList = ((_j = object.pendingTradingRewardExpirationList) === null || _j === void 0 ? void 0 : _j.map(function (e) { return trading_reward_1.TradingRewardExpiration.fromPartial(e); })) || [];
        message.activeTradingRewardExpirationList = ((_k = object.activeTradingRewardExpirationList) === null || _k === void 0 ? void 0 : _k.map(function (e) { return trading_reward_1.TradingRewardExpiration.fromPartial(e); })) || [];
        return message;
    }
};
