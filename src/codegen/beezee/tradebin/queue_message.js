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
exports.QueueMessage = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseQueueMessage() {
    return {
        messageId: "",
        marketId: "",
        messageType: "",
        amount: "",
        price: "",
        createdAt: helpers_1.Long.ZERO,
        orderId: "",
        orderType: "",
        owner: ""
    };
}
exports.QueueMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.messageType !== "") {
            writer.uint32(26).string(message.messageType);
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
        if (message.orderId !== "") {
            writer.uint32(58).string(message.orderId);
        }
        if (message.orderType !== "") {
            writer.uint32(66).string(message.orderType);
        }
        if (message.owner !== "") {
            writer.uint32(74).string(message.owner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueueMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.messageType = reader.string();
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
                    message.orderId = reader.string();
                    break;
                case 8:
                    message.orderType = reader.string();
                    break;
                case 9:
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseQueueMessage();
        message.messageId = (_a = object.messageId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.messageType = (_c = object.messageType) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.price = (_e = object.price) !== null && _e !== void 0 ? _e : "";
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? helpers_1.Long.fromValue(object.createdAt) : helpers_1.Long.ZERO;
        message.orderId = (_f = object.orderId) !== null && _f !== void 0 ? _f : "";
        message.orderType = (_g = object.orderType) !== null && _g !== void 0 ? _g : "";
        message.owner = (_h = object.owner) !== null && _h !== void 0 ? _h : "";
        return message;
    }
};
