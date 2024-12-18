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
exports.Article = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseArticle() {
    return {
        id: helpers_1.Long.UZERO,
        title: "",
        url: "",
        picture: "",
        publisher: "",
        paid: false,
        createdAt: helpers_1.Long.ZERO
    };
}
exports.Article = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        if (message.picture !== "") {
            writer.uint32(34).string(message.picture);
        }
        if (message.publisher !== "") {
            writer.uint32(42).string(message.publisher);
        }
        if (message.paid === true) {
            writer.uint32(48).bool(message.paid);
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(56).int64(message.createdAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseArticle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.picture = reader.string();
                    break;
                case 5:
                    message.publisher = reader.string();
                    break;
                case 6:
                    message.paid = reader.bool();
                    break;
                case 7:
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
        var _a, _b, _c, _d, _e;
        var message = createBaseArticle();
        message.id = object.id !== undefined && object.id !== null ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO;
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        message.picture = (_c = object.picture) !== null && _c !== void 0 ? _c : "";
        message.publisher = (_d = object.publisher) !== null && _d !== void 0 ? _d : "";
        message.paid = (_e = object.paid) !== null && _e !== void 0 ? _e : false;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? helpers_1.Long.fromValue(object.createdAt) : helpers_1.Long.ZERO;
        return message;
    }
};
