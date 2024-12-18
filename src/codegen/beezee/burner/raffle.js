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
exports.RaffleParticipant = exports.RaffleWinner = exports.RaffleDeleteHook = exports.Raffle = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseRaffle() {
    return {
        pot: "",
        duration: helpers_1.Long.UZERO,
        chances: helpers_1.Long.UZERO,
        ratio: "",
        endAt: helpers_1.Long.UZERO,
        winners: helpers_1.Long.UZERO,
        ticketPrice: "",
        denom: "",
        totalWon: ""
    };
}
exports.Raffle = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pot !== "") {
            writer.uint32(10).string(message.pot);
        }
        if (!message.duration.isZero()) {
            writer.uint32(16).uint64(message.duration);
        }
        if (!message.chances.isZero()) {
            writer.uint32(24).uint64(message.chances);
        }
        if (message.ratio !== "") {
            writer.uint32(34).string(message.ratio);
        }
        if (!message.endAt.isZero()) {
            writer.uint32(40).uint64(message.endAt);
        }
        if (!message.winners.isZero()) {
            writer.uint32(48).uint64(message.winners);
        }
        if (message.ticketPrice !== "") {
            writer.uint32(58).string(message.ticketPrice);
        }
        if (message.denom !== "") {
            writer.uint32(66).string(message.denom);
        }
        if (message.totalWon !== "") {
            writer.uint32(74).string(message.totalWon);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRaffle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pot = reader.string();
                    break;
                case 2:
                    message.duration = reader.uint64();
                    break;
                case 3:
                    message.chances = reader.uint64();
                    break;
                case 4:
                    message.ratio = reader.string();
                    break;
                case 5:
                    message.endAt = reader.uint64();
                    break;
                case 6:
                    message.winners = reader.uint64();
                    break;
                case 7:
                    message.ticketPrice = reader.string();
                    break;
                case 8:
                    message.denom = reader.string();
                    break;
                case 9:
                    message.totalWon = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseRaffle();
        message.pot = (_a = object.pot) !== null && _a !== void 0 ? _a : "";
        message.duration = object.duration !== undefined && object.duration !== null ? helpers_1.Long.fromValue(object.duration) : helpers_1.Long.UZERO;
        message.chances = object.chances !== undefined && object.chances !== null ? helpers_1.Long.fromValue(object.chances) : helpers_1.Long.UZERO;
        message.ratio = (_b = object.ratio) !== null && _b !== void 0 ? _b : "";
        message.endAt = object.endAt !== undefined && object.endAt !== null ? helpers_1.Long.fromValue(object.endAt) : helpers_1.Long.UZERO;
        message.winners = object.winners !== undefined && object.winners !== null ? helpers_1.Long.fromValue(object.winners) : helpers_1.Long.UZERO;
        message.ticketPrice = (_c = object.ticketPrice) !== null && _c !== void 0 ? _c : "";
        message.denom = (_d = object.denom) !== null && _d !== void 0 ? _d : "";
        message.totalWon = (_e = object.totalWon) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseRaffleDeleteHook() {
    return {
        denom: "",
        endAt: helpers_1.Long.UZERO
    };
}
exports.RaffleDeleteHook = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (!message.endAt.isZero()) {
            writer.uint32(16).uint64(message.endAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRaffleDeleteHook();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.endAt = reader.uint64();
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
        var message = createBaseRaffleDeleteHook();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.endAt = object.endAt !== undefined && object.endAt !== null ? helpers_1.Long.fromValue(object.endAt) : helpers_1.Long.UZERO;
        return message;
    }
};
function createBaseRaffleWinner() {
    return {
        index: "",
        denom: "",
        amount: "",
        winner: ""
    };
}
exports.RaffleWinner = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.winner !== "") {
            writer.uint32(34).string(message.winner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRaffleWinner();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.winner = reader.string();
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
        var message = createBaseRaffleWinner();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.winner = (_d = object.winner) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseRaffleParticipant() {
    return {
        index: helpers_1.Long.UZERO,
        denom: "",
        participant: "",
        executeAt: helpers_1.Long.ZERO
    };
}
exports.RaffleParticipant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.participant !== "") {
            writer.uint32(26).string(message.participant);
        }
        if (!message.executeAt.isZero()) {
            writer.uint32(32).int64(message.executeAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRaffleParticipant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.participant = reader.string();
                    break;
                case 4:
                    message.executeAt = reader.int64();
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
        var message = createBaseRaffleParticipant();
        message.index = object.index !== undefined && object.index !== null ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.UZERO;
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.participant = (_b = object.participant) !== null && _b !== void 0 ? _b : "";
        message.executeAt = object.executeAt !== undefined && object.executeAt !== null ? helpers_1.Long.fromValue(object.executeAt) : helpers_1.Long.ZERO;
        return message;
    }
};
