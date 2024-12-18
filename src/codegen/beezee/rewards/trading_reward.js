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
exports.MarketIdTradingRewardId = exports.TradingRewardCandidate = exports.TradingRewardLeaderboardEntry = exports.TradingRewardLeaderboard = exports.TradingRewardExpiration = exports.TradingReward = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseTradingReward() {
    return {
        rewardId: "",
        prizeAmount: "",
        prizeDenom: "",
        duration: 0,
        marketId: "",
        slots: 0,
        expireAt: 0
    };
}
exports.TradingReward = {
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
        if (message.expireAt !== 0) {
            writer.uint32(56).uint32(message.expireAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingReward();
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
                    message.expireAt = reader.uint32();
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
        var message = createBaseTradingReward();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.prizeAmount = (_b = object.prizeAmount) !== null && _b !== void 0 ? _b : "";
        message.prizeDenom = (_c = object.prizeDenom) !== null && _c !== void 0 ? _c : "";
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : 0;
        message.marketId = (_e = object.marketId) !== null && _e !== void 0 ? _e : "";
        message.slots = (_f = object.slots) !== null && _f !== void 0 ? _f : 0;
        message.expireAt = (_g = object.expireAt) !== null && _g !== void 0 ? _g : 0;
        return message;
    }
};
function createBaseTradingRewardExpiration() {
    return {
        rewardId: "",
        expireAt: 0
    };
}
exports.TradingRewardExpiration = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.expireAt !== 0) {
            writer.uint32(16).uint32(message.expireAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardExpiration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.expireAt = reader.uint32();
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
        var message = createBaseTradingRewardExpiration();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.expireAt = (_b = object.expireAt) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseTradingRewardLeaderboard() {
    return {
        rewardId: "",
        list: []
    };
}
exports.TradingRewardLeaderboard = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.TradingRewardLeaderboardEntry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardLeaderboard();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.list.push(exports.TradingRewardLeaderboardEntry.decode(reader, reader.uint32()));
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
        var message = createBaseTradingRewardLeaderboard();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.list = ((_b = object.list) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.TradingRewardLeaderboardEntry.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseTradingRewardLeaderboardEntry() {
    return {
        amount: "",
        address: "",
        createdAt: helpers_1.Long.ZERO
    };
}
exports.TradingRewardLeaderboardEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(24).int64(message.createdAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardLeaderboardEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.createdAt = reader.int64();
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
        var message = createBaseTradingRewardLeaderboardEntry();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? helpers_1.Long.fromValue(object.createdAt) : helpers_1.Long.ZERO;
        return message;
    }
};
function createBaseTradingRewardCandidate() {
    return {
        rewardId: "",
        amount: "",
        address: ""
    };
}
exports.TradingRewardCandidate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradingRewardCandidate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
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
        var _a, _b, _c;
        var message = createBaseTradingRewardCandidate();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.address = (_c = object.address) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMarketIdTradingRewardId() {
    return {
        rewardId: "",
        marketId: ""
    };
}
exports.MarketIdTradingRewardId = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketIdTradingRewardId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
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
        var message = createBaseMarketIdTradingRewardId();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
