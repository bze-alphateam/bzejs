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
exports.StakingReward = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseStakingReward() {
    return {
        rewardId: "",
        prizeAmount: "",
        prizeDenom: "",
        stakingDenom: "",
        duration: 0,
        payouts: 0,
        minStake: helpers_1.Long.UZERO,
        lock: 0,
        stakedAmount: "",
        distributedStake: ""
    };
}
exports.StakingReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.prizeAmount !== "") {
            writer.uint32(18).string(message.prizeAmount);
        }
        if (message.prizeDenom !== "") {
            writer.uint32(26).string(message.prizeDenom);
        }
        if (message.stakingDenom !== "") {
            writer.uint32(34).string(message.stakingDenom);
        }
        if (message.duration !== 0) {
            writer.uint32(40).uint32(message.duration);
        }
        if (message.payouts !== 0) {
            writer.uint32(48).uint32(message.payouts);
        }
        if (!message.minStake.isZero()) {
            writer.uint32(56).uint64(message.minStake);
        }
        if (message.lock !== 0) {
            writer.uint32(64).uint32(message.lock);
        }
        if (message.stakedAmount !== "") {
            writer.uint32(74).string(message.stakedAmount);
        }
        if (message.distributedStake !== "") {
            writer.uint32(82).string(message.distributedStake);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.prizeAmount = reader.string();
                    break;
                case 3:
                    message.prizeDenom = reader.string();
                    break;
                case 4:
                    message.stakingDenom = reader.string();
                    break;
                case 5:
                    message.duration = reader.uint32();
                    break;
                case 6:
                    message.payouts = reader.uint32();
                    break;
                case 7:
                    message.minStake = reader.uint64();
                    break;
                case 8:
                    message.lock = reader.uint32();
                    break;
                case 9:
                    message.stakedAmount = reader.string();
                    break;
                case 10:
                    message.distributedStake = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseStakingReward();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.prizeAmount = (_b = object.prizeAmount) !== null && _b !== void 0 ? _b : "";
        message.prizeDenom = (_c = object.prizeDenom) !== null && _c !== void 0 ? _c : "";
        message.stakingDenom = (_d = object.stakingDenom) !== null && _d !== void 0 ? _d : "";
        message.duration = (_e = object.duration) !== null && _e !== void 0 ? _e : 0;
        message.payouts = (_f = object.payouts) !== null && _f !== void 0 ? _f : 0;
        message.minStake = object.minStake !== undefined && object.minStake !== null ? helpers_1.Long.fromValue(object.minStake) : helpers_1.Long.UZERO;
        message.lock = (_g = object.lock) !== null && _g !== void 0 ? _g : 0;
        message.stakedAmount = (_h = object.stakedAmount) !== null && _h !== void 0 ? _h : "";
        message.distributedStake = (_j = object.distributedStake) !== null && _j !== void 0 ? _j : "";
        return message;
    }
};
