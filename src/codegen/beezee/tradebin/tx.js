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
exports.MsgCancelOrderResponse = exports.MsgCancelOrder = exports.MsgCreateOrderResponse = exports.MsgCreateOrder = exports.MsgCreateMarketResponse = exports.MsgCreateMarket = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgCreateMarket() {
    return {
        creator: "",
        base: "",
        quote: ""
    };
}
exports.MsgCreateMarket = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.base !== "") {
            writer.uint32(18).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(26).string(message.quote);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateMarket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.base = reader.string();
                    break;
                case 3:
                    message.quote = reader.string();
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
        var message = createBaseMsgCreateMarket();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.base = (_b = object.base) !== null && _b !== void 0 ? _b : "";
        message.quote = (_c = object.quote) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgCreateMarketResponse() {
    return {};
}
exports.MsgCreateMarketResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateMarketResponse();
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
        var message = createBaseMsgCreateMarketResponse();
        return message;
    }
};
function createBaseMsgCreateOrder() {
    return {
        creator: "",
        orderType: "",
        amount: "",
        price: "",
        marketId: ""
    };
}
exports.MsgCreateOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.orderType !== "") {
            writer.uint32(18).string(message.orderType);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.price !== "") {
            writer.uint32(34).string(message.price);
        }
        if (message.marketId !== "") {
            writer.uint32(42).string(message.marketId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.orderType = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.price = reader.string();
                    break;
                case 5:
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
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgCreateOrder();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.orderType = (_b = object.orderType) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.price = (_d = object.price) !== null && _d !== void 0 ? _d : "";
        message.marketId = (_e = object.marketId) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseMsgCreateOrderResponse() {
    return {};
}
exports.MsgCreateOrderResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateOrderResponse();
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
        var message = createBaseMsgCreateOrderResponse();
        return message;
    }
};
function createBaseMsgCancelOrder() {
    return {
        creator: "",
        marketId: "",
        orderId: "",
        orderType: ""
    };
}
exports.MsgCancelOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.orderId !== "") {
            writer.uint32(26).string(message.orderId);
        }
        if (message.orderType !== "") {
            writer.uint32(34).string(message.orderType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.orderId = reader.string();
                    break;
                case 4:
                    message.orderType = reader.string();
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
        var message = createBaseMsgCancelOrder();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.orderId = (_c = object.orderId) !== null && _c !== void 0 ? _c : "";
        message.orderType = (_d = object.orderType) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseMsgCancelOrderResponse() {
    return {};
}
exports.MsgCancelOrderResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelOrderResponse();
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
        var message = createBaseMsgCancelOrderResponse();
        return message;
    }
};
