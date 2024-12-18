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
exports.Publisher = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBasePublisher() {
    return {
        name: "",
        address: "",
        active: false,
        articlesCount: 0,
        createdAt: helpers_1.Long.ZERO,
        respect: helpers_1.Long.ZERO
    };
}
exports.Publisher = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        if (message.articlesCount !== 0) {
            writer.uint32(32).uint32(message.articlesCount);
        }
        if (!message.createdAt.isZero()) {
            writer.uint32(40).int64(message.createdAt);
        }
        if (!message.respect.isZero()) {
            writer.uint32(48).int64(message.respect);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublisher();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.active = reader.bool();
                    break;
                case 4:
                    message.articlesCount = reader.uint32();
                    break;
                case 5:
                    message.createdAt = reader.int64();
                    break;
                case 6:
                    message.respect = reader.int64();
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
        var message = createBasePublisher();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.active = (_c = object.active) !== null && _c !== void 0 ? _c : false;
        message.articlesCount = (_d = object.articlesCount) !== null && _d !== void 0 ? _d : 0;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? helpers_1.Long.fromValue(object.createdAt) : helpers_1.Long.ZERO;
        message.respect = object.respect !== undefined && object.respect !== null ? helpers_1.Long.fromValue(object.respect) : helpers_1.Long.ZERO;
        return message;
    }
};
