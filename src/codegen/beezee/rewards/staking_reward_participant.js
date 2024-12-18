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
exports.PendingUnlockParticipant = exports.StakingRewardParticipant = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseStakingRewardParticipant() {
    return {
        address: "",
        rewardId: "",
        amount: "",
        joinedAt: ""
    };
}
exports.StakingRewardParticipant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.rewardId !== "") {
            writer.uint32(18).string(message.rewardId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.joinedAt !== "") {
            writer.uint32(34).string(message.joinedAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingRewardParticipant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.rewardId = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.joinedAt = reader.string();
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
        var message = createBaseStakingRewardParticipant();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.rewardId = (_b = object.rewardId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.joinedAt = (_d = object.joinedAt) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBasePendingUnlockParticipant() {
    return {
        index: "",
        address: "",
        amount: "",
        denom: ""
    };
}
exports.PendingUnlockParticipant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePendingUnlockParticipant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
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
        var message = createBasePendingUnlockParticipant();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.denom = (_d = object.denom) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
