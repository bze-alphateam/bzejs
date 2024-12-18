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
exports.MsgJoinRaffleResponse = exports.MsgJoinRaffle = exports.MsgStartRaffleResponse = exports.MsgStartRaffle = exports.MsgFundBurnerResponse = exports.MsgFundBurner = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgFundBurner() {
    return {
        creator: "",
        amount: ""
    };
}
exports.MsgFundBurner = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundBurner();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
        var message = createBaseMsgFundBurner();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgFundBurnerResponse() {
    return {};
}
exports.MsgFundBurnerResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundBurnerResponse();
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
        var message = createBaseMsgFundBurnerResponse();
        return message;
    }
};
function createBaseMsgStartRaffle() {
    return {
        creator: "",
        pot: "",
        duration: "",
        chances: "",
        ratio: "",
        ticketPrice: "",
        denom: ""
    };
}
exports.MsgStartRaffle = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.pot !== "") {
            writer.uint32(18).string(message.pot);
        }
        if (message.duration !== "") {
            writer.uint32(26).string(message.duration);
        }
        if (message.chances !== "") {
            writer.uint32(34).string(message.chances);
        }
        if (message.ratio !== "") {
            writer.uint32(42).string(message.ratio);
        }
        if (message.ticketPrice !== "") {
            writer.uint32(50).string(message.ticketPrice);
        }
        if (message.denom !== "") {
            writer.uint32(58).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgStartRaffle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pot = reader.string();
                    break;
                case 3:
                    message.duration = reader.string();
                    break;
                case 4:
                    message.chances = reader.string();
                    break;
                case 5:
                    message.ratio = reader.string();
                    break;
                case 6:
                    message.ticketPrice = reader.string();
                    break;
                case 7:
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
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseMsgStartRaffle();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.pot = (_b = object.pot) !== null && _b !== void 0 ? _b : "";
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : "";
        message.chances = (_d = object.chances) !== null && _d !== void 0 ? _d : "";
        message.ratio = (_e = object.ratio) !== null && _e !== void 0 ? _e : "";
        message.ticketPrice = (_f = object.ticketPrice) !== null && _f !== void 0 ? _f : "";
        message.denom = (_g = object.denom) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseMsgStartRaffleResponse() {
    return {};
}
exports.MsgStartRaffleResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgStartRaffleResponse();
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
        var message = createBaseMsgStartRaffleResponse();
        return message;
    }
};
function createBaseMsgJoinRaffle() {
    return {
        creator: "",
        denom: ""
    };
}
exports.MsgJoinRaffle = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgJoinRaffle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        var _a, _b;
        var message = createBaseMsgJoinRaffle();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgJoinRaffleResponse() {
    return {};
}
exports.MsgJoinRaffleResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgJoinRaffleResponse();
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
        var message = createBaseMsgJoinRaffleResponse();
        return message;
    }
};
