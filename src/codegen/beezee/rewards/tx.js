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
exports.MsgDistributeStakingRewardsResponse = exports.MsgDistributeStakingRewards = exports.MsgClaimStakingRewardsResponse = exports.MsgClaimStakingRewards = exports.MsgExitStakingResponse = exports.MsgExitStaking = exports.MsgJoinStakingResponse = exports.MsgJoinStaking = exports.MsgCreateTradingRewardResponse = exports.MsgCreateTradingReward = exports.MsgUpdateStakingRewardResponse = exports.MsgUpdateStakingReward = exports.MsgCreateStakingRewardResponse = exports.MsgCreateStakingReward = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgCreateStakingReward() {
    return {
        creator: "",
        prizeAmount: "",
        prizeDenom: "",
        stakingDenom: "",
        duration: "",
        minStake: "",
        lock: ""
    };
}
exports.MsgCreateStakingReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
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
        if (message.duration !== "") {
            writer.uint32(42).string(message.duration);
        }
        if (message.minStake !== "") {
            writer.uint32(50).string(message.minStake);
        }
        if (message.lock !== "") {
            writer.uint32(58).string(message.lock);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateStakingReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
                    message.duration = reader.string();
                    break;
                case 6:
                    message.minStake = reader.string();
                    break;
                case 7:
                    message.lock = reader.string();
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
        var message = createBaseMsgCreateStakingReward();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.prizeAmount = (_b = object.prizeAmount) !== null && _b !== void 0 ? _b : "";
        message.prizeDenom = (_c = object.prizeDenom) !== null && _c !== void 0 ? _c : "";
        message.stakingDenom = (_d = object.stakingDenom) !== null && _d !== void 0 ? _d : "";
        message.duration = (_e = object.duration) !== null && _e !== void 0 ? _e : "";
        message.minStake = (_f = object.minStake) !== null && _f !== void 0 ? _f : "";
        message.lock = (_g = object.lock) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseMsgCreateStakingRewardResponse() {
    return {
        rewardId: ""
    };
}
exports.MsgCreateStakingRewardResponse = {
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
        var message = createBaseMsgCreateStakingRewardResponse();
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
        var message = createBaseMsgCreateStakingRewardResponse();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseMsgUpdateStakingReward() {
    return {
        creator: "",
        rewardId: "",
        duration: ""
    };
}
exports.MsgUpdateStakingReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.rewardId !== "") {
            writer.uint32(18).string(message.rewardId);
        }
        if (message.duration !== "") {
            writer.uint32(26).string(message.duration);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateStakingReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.rewardId = reader.string();
                    break;
                case 3:
                    message.duration = reader.string();
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
        var message = createBaseMsgUpdateStakingReward();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.rewardId = (_b = object.rewardId) !== null && _b !== void 0 ? _b : "";
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgUpdateStakingRewardResponse() {
    return {};
}
exports.MsgUpdateStakingRewardResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateStakingRewardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateStakingRewardResponse();
        return message;
    }
};
function createBaseMsgCreateTradingReward() {
    return {
        creator: "",
        prizeAmount: "",
        prizeDenom: "",
        duration: "",
        marketId: "",
        slots: ""
    };
}
exports.MsgCreateTradingReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.prizeAmount !== "") {
            writer.uint32(18).string(message.prizeAmount);
        }
        if (message.prizeDenom !== "") {
            writer.uint32(26).string(message.prizeDenom);
        }
        if (message.duration !== "") {
            writer.uint32(34).string(message.duration);
        }
        if (message.marketId !== "") {
            writer.uint32(42).string(message.marketId);
        }
        if (message.slots !== "") {
            writer.uint32(50).string(message.slots);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateTradingReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.prizeAmount = reader.string();
                    break;
                case 3:
                    message.prizeDenom = reader.string();
                    break;
                case 4:
                    message.duration = reader.string();
                    break;
                case 5:
                    message.marketId = reader.string();
                    break;
                case 6:
                    message.slots = reader.string();
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
        var message = createBaseMsgCreateTradingReward();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.prizeAmount = (_b = object.prizeAmount) !== null && _b !== void 0 ? _b : "";
        message.prizeDenom = (_c = object.prizeDenom) !== null && _c !== void 0 ? _c : "";
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : "";
        message.marketId = (_e = object.marketId) !== null && _e !== void 0 ? _e : "";
        message.slots = (_f = object.slots) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseMsgCreateTradingRewardResponse() {
    return {
        rewardId: ""
    };
}
exports.MsgCreateTradingRewardResponse = {
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
        var message = createBaseMsgCreateTradingRewardResponse();
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
        var message = createBaseMsgCreateTradingRewardResponse();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseMsgJoinStaking() {
    return {
        creator: "",
        rewardId: "",
        amount: ""
    };
}
exports.MsgJoinStaking = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.rewardId !== "") {
            writer.uint32(18).string(message.rewardId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgJoinStaking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.rewardId = reader.string();
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
        var message = createBaseMsgJoinStaking();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.rewardId = (_b = object.rewardId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgJoinStakingResponse() {
    return {};
}
exports.MsgJoinStakingResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgJoinStakingResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgJoinStakingResponse();
        return message;
    }
};
function createBaseMsgExitStaking() {
    return {
        creator: "",
        rewardId: ""
    };
}
exports.MsgExitStaking = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.rewardId !== "") {
            writer.uint32(18).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExitStaking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        var _a, _b;
        var message = createBaseMsgExitStaking();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.rewardId = (_b = object.rewardId) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgExitStakingResponse() {
    return {};
}
exports.MsgExitStakingResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExitStakingResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgExitStakingResponse();
        return message;
    }
};
function createBaseMsgClaimStakingRewards() {
    return {
        creator: "",
        rewardId: ""
    };
}
exports.MsgClaimStakingRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.rewardId !== "") {
            writer.uint32(18).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgClaimStakingRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        var _a, _b;
        var message = createBaseMsgClaimStakingRewards();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.rewardId = (_b = object.rewardId) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgClaimStakingRewardsResponse() {
    return {
        amount: ""
    };
}
exports.MsgClaimStakingRewardsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgClaimStakingRewardsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var _a;
        var message = createBaseMsgClaimStakingRewardsResponse();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseMsgDistributeStakingRewards() {
    return {
        creator: "",
        rewardId: "",
        amount: ""
    };
}
exports.MsgDistributeStakingRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.rewardId !== "") {
            writer.uint32(18).string(message.rewardId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDistributeStakingRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.rewardId = reader.string();
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
        var message = createBaseMsgDistributeStakingRewards();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.rewardId = (_b = object.rewardId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgDistributeStakingRewardsResponse() {
    return {};
}
exports.MsgDistributeStakingRewardsResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDistributeStakingRewardsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseMsgDistributeStakingRewardsResponse();
        return message;
    }
};
