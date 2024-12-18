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
exports.TradingRewardDistributionEvent = exports.TradingRewardActivationEvent = exports.TradingRewardExpireEvent = exports.TradingRewardCreateEvent = exports.StakingRewardDistributionEvent = exports.StakingRewardFinishEvent = exports.StakingRewardExitEvent = exports.StakingRewardJoinEvent = exports.StakingRewardClaimEvent = exports.StakingRewardUpdateEvent = exports.StakingRewardCreateEvent = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseStakingRewardCreateEvent() {
    return {
        rewardId: "",
        prizeAmount: "",
        prizeDenom: "",
        stakingDenom: "",
        duration: 0,
        minStake: helpers_1.Long.UZERO,
        lock: 0
    };
}
exports.StakingRewardCreateEvent = {
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
        if (!message.minStake.isZero()) {
            writer.uint32(48).uint64(message.minStake);
        }
        if (message.lock !== 0) {
            writer.uint32(56).uint32(message.lock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardCreateEvent();
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
                    message.minStake = reader.uint64();
                    break;
                case 7:
                    message.lock = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseStakingRewardCreateEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.prizeAmount = (_b = object.prizeAmount) !== null && _b !== void 0 ? _b : "";
        message.prizeDenom = (_c = object.prizeDenom) !== null && _c !== void 0 ? _c : "";
        message.stakingDenom = (_d = object.stakingDenom) !== null && _d !== void 0 ? _d : "";
        message.duration = (_e = object.duration) !== null && _e !== void 0 ? _e : 0;
        message.minStake = object.minStake !== undefined && object.minStake !== null ? helpers_1.Long.fromValue(object.minStake) : helpers_1.Long.UZERO;
        message.lock = (_f = object.lock) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseStakingRewardUpdateEvent() {
    return {
        rewardId: "",
        duration: 0
    };
}
exports.StakingRewardUpdateEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.duration !== 0) {
            writer.uint32(16).uint32(message.duration);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardUpdateEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.duration = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStakingRewardUpdateEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.duration = (_b = object.duration) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseStakingRewardClaimEvent() {
    return {
        rewardId: "",
        address: "",
        amount: ""
    };
}
exports.StakingRewardClaimEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardClaimEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStakingRewardClaimEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseStakingRewardJoinEvent() {
    return {
        rewardId: "",
        address: "",
        amount: ""
    };
}
exports.StakingRewardJoinEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardJoinEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStakingRewardJoinEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseStakingRewardExitEvent() {
    return {
        rewardId: "",
        address: ""
    };
}
exports.StakingRewardExitEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardExitEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStakingRewardExitEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseStakingRewardFinishEvent() {
    return {
        rewardId: ""
    };
}
exports.StakingRewardFinishEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardFinishEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStakingRewardFinishEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseStakingRewardDistributionEvent() {
    return {
        rewardId: "",
        amount: ""
    };
}
exports.StakingRewardDistributionEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardDistributionEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStakingRewardDistributionEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseTradingRewardCreateEvent() {
    return {
        rewardId: "",
        prizeAmount: "",
        prizeDenom: "",
        duration: 0,
        marketId: "",
        slots: 0,
        creator: ""
    };
}
exports.TradingRewardCreateEvent = {
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
        if (message.duration !== 0) {
            writer.uint32(32).uint32(message.duration);
        }
        if (message.marketId !== "") {
            writer.uint32(42).string(message.marketId);
        }
        if (message.slots !== 0) {
            writer.uint32(48).uint32(message.slots);
        }
        if (message.creator !== "") {
            writer.uint32(58).string(message.creator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardCreateEvent();
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
                    message.duration = reader.uint32();
                    break;
                case 5:
                    message.marketId = reader.string();
                    break;
                case 6:
                    message.slots = reader.uint32();
                    break;
                case 7:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseTradingRewardCreateEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.prizeAmount = (_b = object.prizeAmount) !== null && _b !== void 0 ? _b : "";
        message.prizeDenom = (_c = object.prizeDenom) !== null && _c !== void 0 ? _c : "";
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : 0;
        message.marketId = (_e = object.marketId) !== null && _e !== void 0 ? _e : "";
        message.slots = (_f = object.slots) !== null && _f !== void 0 ? _f : 0;
        message.creator = (_g = object.creator) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseTradingRewardExpireEvent() {
    return {
        rewardId: ""
    };
}
exports.TradingRewardExpireEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardExpireEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTradingRewardExpireEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseTradingRewardActivationEvent() {
    return {
        rewardId: ""
    };
}
exports.TradingRewardActivationEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardActivationEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTradingRewardActivationEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseTradingRewardDistributionEvent() {
    return {
        rewardId: "",
        prizeAmount: "",
        prizeDenom: "",
        winners: []
    };
}
exports.TradingRewardDistributionEvent = {
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
        for (var _i = 0, _a = message.winners; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardDistributionEvent();
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
                    message.winners.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTradingRewardDistributionEvent();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.prizeAmount = (_b = object.prizeAmount) !== null && _b !== void 0 ? _b : "";
        message.prizeDenom = (_c = object.prizeDenom) !== null && _c !== void 0 ? _c : "";
        message.winners = ((_d = object.winners) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        return message;
    }
};
