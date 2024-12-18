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
exports.MsgPayPublisherRespectResponse = exports.MsgPayPublisherRespect = exports.MsgAddArticleResponse = exports.MsgAddArticle = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseMsgAddArticle() {
    return {
        publisher: "",
        title: "",
        url: "",
        picture: ""
    };
}
exports.MsgAddArticle = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publisher !== "") {
            writer.uint32(10).string(message.publisher);
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
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddArticle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publisher = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgAddArticle();
        message.publisher = (_a = object.publisher) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.url = (_c = object.url) !== null && _c !== void 0 ? _c : "";
        message.picture = (_d = object.picture) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseMsgAddArticleResponse() {
    return {};
}
exports.MsgAddArticleResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAddArticleResponse();
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
        var message = createBaseMsgAddArticleResponse();
        return message;
    }
};
function createBaseMsgPayPublisherRespect() {
    return {
        creator: "",
        address: "",
        amount: ""
    };
}
exports.MsgPayPublisherRespect = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPayPublisherRespect();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
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
        var _a, _b, _c;
        var message = createBaseMsgPayPublisherRespect();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgPayPublisherRespectResponse() {
    return {
        respectPaid: helpers_1.Long.UZERO,
        publisherReward: helpers_1.Long.UZERO,
        communityPoolFunds: helpers_1.Long.UZERO
    };
}
exports.MsgPayPublisherRespectResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.respectPaid.isZero()) {
            writer.uint32(8).uint64(message.respectPaid);
        }
        if (!message.publisherReward.isZero()) {
            writer.uint32(16).uint64(message.publisherReward);
        }
        if (!message.communityPoolFunds.isZero()) {
            writer.uint32(24).uint64(message.communityPoolFunds);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPayPublisherRespectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.respectPaid = reader.uint64();
                    break;
                case 2:
                    message.publisherReward = reader.uint64();
                    break;
                case 3:
                    message.communityPoolFunds = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseMsgPayPublisherRespectResponse();
        message.respectPaid = object.respectPaid !== undefined && object.respectPaid !== null ? helpers_1.Long.fromValue(object.respectPaid) : helpers_1.Long.UZERO;
        message.publisherReward = object.publisherReward !== undefined && object.publisherReward !== null ? helpers_1.Long.fromValue(object.publisherReward) : helpers_1.Long.UZERO;
        message.communityPoolFunds = object.communityPoolFunds !== undefined && object.communityPoolFunds !== null ? helpers_1.Long.fromValue(object.communityPoolFunds) : helpers_1.Long.UZERO;
        return message;
    }
};
