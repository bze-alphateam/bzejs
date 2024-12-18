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
exports.Params = exports.PublisherRespectParams = void 0;
var coin_1 = require("../../cosmos/base/v1beta1/coin");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBasePublisherRespectParams() {
    return {
        tax: "",
        denom: ""
    };
}
exports.PublisherRespectParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tax !== "") {
            writer.uint32(10).string(message.tax);
        }
        if (message.denom !== "") {
            writer.uint32(42).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublisherRespectParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tax = reader.string();
                    break;
                case 5:
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
        var message = createBasePublisherRespectParams();
        message.tax = (_a = object.tax) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseParams() {
    return {
        anonArticleLimit: helpers_1.Long.UZERO,
        anonArticleCost: undefined,
        publisherRespectParams: undefined
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.anonArticleLimit.isZero()) {
            writer.uint32(8).uint64(message.anonArticleLimit);
        }
        if (message.anonArticleCost !== undefined) {
            coin_1.Coin.encode(message.anonArticleCost, writer.uint32(18).fork()).ldelim();
        }
        if (message.publisherRespectParams !== undefined) {
            exports.PublisherRespectParams.encode(message.publisherRespectParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anonArticleLimit = reader.uint64();
                    break;
                case 2:
                    message.anonArticleCost = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.publisherRespectParams = exports.PublisherRespectParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseParams();
        message.anonArticleLimit = object.anonArticleLimit !== undefined && object.anonArticleLimit !== null ? helpers_1.Long.fromValue(object.anonArticleLimit) : helpers_1.Long.UZERO;
        message.anonArticleCost = object.anonArticleCost !== undefined && object.anonArticleCost !== null ? coin_1.Coin.fromPartial(object.anonArticleCost) : undefined;
        message.publisherRespectParams = object.publisherRespectParams !== undefined && object.publisherRespectParams !== null ? exports.PublisherRespectParams.fromPartial(object.publisherRespectParams) : undefined;
        return message;
    }
};
