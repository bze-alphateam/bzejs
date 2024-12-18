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
exports.HistoryOrder = exports.AggregatedOrder = exports.OrderReference = exports.Order = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseOrder() {
    return {
        id: "",
        marketId: "",
        orderType: "",
        amount: "",
        price: "",
        createdAt: helpers_1.Long.ZERO,
        owner: ""
    };
}
exports.Order = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.orderType !== "") {
            writer.uint32(26).string(message.orderType);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.price !== "") {
            writer.uint32(42).string(message.price);
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(48).int64(message.createdAt);
        }
        if (message.owner !== "") {
            writer.uint32(58).string(message.owner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.orderType = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.price = reader.string();
                    break;
                case 6:
                    message.createdAt = reader.int64();
                    break;
                case 7:
                    message.owner = reader.string();
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
        var message = createBaseOrder();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.orderType = (_c = object.orderType) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.price = (_e = object.price) !== null && _e !== void 0 ? _e : "";
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? helpers_1.Long.fromValue(object.createdAt) : helpers_1.Long.ZERO;
        message.owner = (_f = object.owner) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseOrderReference() {
    return {
        id: "",
        marketId: "",
        orderType: ""
    };
}
exports.OrderReference = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.orderType !== "") {
            writer.uint32(26).string(message.orderType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
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
        var _a, _b, _c;
        var message = createBaseOrderReference();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.orderType = (_c = object.orderType) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseAggregatedOrder() {
    return {
        marketId: "",
        orderType: "",
        amount: "",
        price: ""
    };
}
exports.AggregatedOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
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
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAggregatedOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseAggregatedOrder();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderType = (_b = object.orderType) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.price = (_d = object.price) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseHistoryOrder() {
    return {
        marketId: "",
        orderType: "",
        amount: "",
        price: "",
        executedAt: helpers_1.Long.ZERO,
        maker: "",
        taker: ""
    };
}
exports.HistoryOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
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
        if (!message.executedAt.isZero()) {
            writer.uint32(40).int64(message.executedAt);
        }
        if (message.maker !== "") {
            writer.uint32(50).string(message.maker);
        }
        if (message.taker !== "") {
            writer.uint32(58).string(message.taker);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHistoryOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
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
                    message.executedAt = reader.int64();
                    break;
                case 6:
                    message.maker = reader.string();
                    break;
                case 7:
                    message.taker = reader.string();
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
        var message = createBaseHistoryOrder();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderType = (_b = object.orderType) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.price = (_d = object.price) !== null && _d !== void 0 ? _d : "";
        message.executedAt = object.executedAt !== undefined && object.executedAt !== null ? helpers_1.Long.fromValue(object.executedAt) : helpers_1.Long.ZERO;
        message.maker = (_e = object.maker) !== null && _e !== void 0 ? _e : "";
        message.taker = (_f = object.taker) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
