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
exports.GenesisState = void 0;
var params_1 = require("./params");
var publisher_1 = require("./publisher");
var accepted_domain_1 = require("./accepted_domain");
var article_1 = require("./article");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseGenesisState() {
    return {
        params: undefined,
        publisherList: [],
        acceptedDomainList: [],
        articleList: [],
        articlesCounter: helpers_1.Long.UZERO
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.publisherList; _i < _a.length; _i++) {
            var v = _a[_i];
            publisher_1.Publisher.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.acceptedDomainList; _b < _c.length; _b++) {
            var v = _c[_b];
            accepted_domain_1.AcceptedDomain.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.articleList; _d < _e.length; _d++) {
            var v = _e[_d];
            article_1.Article.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (!message.articlesCounter.isZero()) {
            writer.uint32(40).uint64(message.articlesCounter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.publisherList.push(publisher_1.Publisher.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.acceptedDomainList.push(accepted_domain_1.AcceptedDomain.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.articleList.push(article_1.Article.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.articlesCounter = reader.uint64();
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
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.publisherList = ((_a = object.publisherList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return publisher_1.Publisher.fromPartial(e); })) || [];
        message.acceptedDomainList = ((_b = object.acceptedDomainList) === null || _b === void 0 ? void 0 : _b.map(function (e) { return accepted_domain_1.AcceptedDomain.fromPartial(e); })) || [];
        message.articleList = ((_c = object.articleList) === null || _c === void 0 ? void 0 : _c.map(function (e) { return article_1.Article.fromPartial(e); })) || [];
        message.articlesCounter = object.articlesCounter !== undefined && object.articlesCounter !== null ? helpers_1.Long.fromValue(object.articlesCounter) : helpers_1.Long.UZERO;
        return message;
    }
};
