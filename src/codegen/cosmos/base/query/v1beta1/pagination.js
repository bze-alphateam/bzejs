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
exports.PageResponse = exports.PageRequest = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../../helpers");
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: helpers_1.Long.UZERO,
        limit: helpers_1.Long.UZERO,
        countTotal: false,
        reverse: false
    };
}
exports.PageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (!message.offset.isZero()) {
            writer.uint32(16).uint64(message.offset);
        }
        if (!message.limit.isZero()) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
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
        var message = createBasePageRequest();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.offset = object.offset !== undefined && object.offset !== null ? helpers_1.Long.fromValue(object.offset) : helpers_1.Long.UZERO;
        message.limit = object.limit !== undefined && object.limit !== null ? helpers_1.Long.fromValue(object.limit) : helpers_1.Long.UZERO;
        message.countTotal = (_b = object.countTotal) !== null && _b !== void 0 ? _b : false;
        message.reverse = (_c = object.reverse) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBasePageResponse() {
    return {
        nextKey: new Uint8Array(),
        total: helpers_1.Long.UZERO
    };
}
exports.PageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
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
        var message = createBasePageResponse();
        message.nextKey = (_a = object.nextKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.total = object.total !== undefined && object.total !== null ? helpers_1.Long.fromValue(object.total) : helpers_1.Long.UZERO;
        return message;
    }
};
