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
exports.PublisherRespectPaidEvent = exports.AcceptedDomainUpdatedEvent = exports.AcceptedDomainAddedEvent = exports.PublisherUpdatedEvent = exports.PublisherAddedEvent = exports.ArticleAddedEvent = void 0;
var publisher_1 = require("./publisher");
var accepted_domain_1 = require("./accepted_domain");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseArticleAddedEvent() {
    return {
        publisher: "",
        articleId: helpers_1.Long.UZERO,
        paid: false
    };
}
exports.ArticleAddedEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publisher !== "") {
            writer.uint32(10).string(message.publisher);
        }
        if (!message.articleId.isZero()) {
            writer.uint32(16).uint64(message.articleId);
        }
        if (message.paid === true) {
            writer.uint32(24).bool(message.paid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseArticleAddedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publisher = reader.string();
                    break;
                case 2:
                    message.articleId = reader.uint64();
                    break;
                case 3:
                    message.paid = reader.bool();
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
        var message = createBaseArticleAddedEvent();
        message.publisher = (_a = object.publisher) !== null && _a !== void 0 ? _a : "";
        message.articleId = object.articleId !== undefined && object.articleId !== null ? helpers_1.Long.fromValue(object.articleId) : helpers_1.Long.UZERO;
        message.paid = (_b = object.paid) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBasePublisherAddedEvent() {
    return {
        publisher: undefined
    };
}
exports.PublisherAddedEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publisher !== undefined) {
            publisher_1.Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublisherAddedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publisher = publisher_1.Publisher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBasePublisherAddedEvent();
        message.publisher = object.publisher !== undefined && object.publisher !== null ? publisher_1.Publisher.fromPartial(object.publisher) : undefined;
        return message;
    }
};
function createBasePublisherUpdatedEvent() {
    return {
        publisher: undefined
    };
}
exports.PublisherUpdatedEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publisher !== undefined) {
            publisher_1.Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublisherUpdatedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publisher = publisher_1.Publisher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBasePublisherUpdatedEvent();
        message.publisher = object.publisher !== undefined && object.publisher !== null ? publisher_1.Publisher.fromPartial(object.publisher) : undefined;
        return message;
    }
};
function createBaseAcceptedDomainAddedEvent() {
    return {
        acceptedDomain: undefined
    };
}
exports.AcceptedDomainAddedEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.acceptedDomain !== undefined) {
            accepted_domain_1.AcceptedDomain.encode(message.acceptedDomain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAcceptedDomainAddedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acceptedDomain = accepted_domain_1.AcceptedDomain.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseAcceptedDomainAddedEvent();
        message.acceptedDomain = object.acceptedDomain !== undefined && object.acceptedDomain !== null ? accepted_domain_1.AcceptedDomain.fromPartial(object.acceptedDomain) : undefined;
        return message;
    }
};
function createBaseAcceptedDomainUpdatedEvent() {
    return {
        acceptedDomain: undefined
    };
}
exports.AcceptedDomainUpdatedEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.acceptedDomain !== undefined) {
            accepted_domain_1.AcceptedDomain.encode(message.acceptedDomain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAcceptedDomainUpdatedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acceptedDomain = accepted_domain_1.AcceptedDomain.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseAcceptedDomainUpdatedEvent();
        message.acceptedDomain = object.acceptedDomain !== undefined && object.acceptedDomain !== null ? accepted_domain_1.AcceptedDomain.fromPartial(object.acceptedDomain) : undefined;
        return message;
    }
};
function createBasePublisherRespectPaidEvent() {
    return {
        respectPaid: helpers_1.Long.UZERO,
        publisherReward: helpers_1.Long.UZERO,
        communityPoolFunds: helpers_1.Long.UZERO,
        publisher: ""
    };
}
exports.PublisherRespectPaidEvent = {
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
        if (message.publisher !== "") {
            writer.uint32(34).string(message.publisher);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublisherRespectPaidEvent();
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
                case 4:
                    message.publisher = reader.string();
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
        var message = createBasePublisherRespectPaidEvent();
        message.respectPaid = object.respectPaid !== undefined && object.respectPaid !== null ? helpers_1.Long.fromValue(object.respectPaid) : helpers_1.Long.UZERO;
        message.publisherReward = object.publisherReward !== undefined && object.publisherReward !== null ? helpers_1.Long.fromValue(object.publisherReward) : helpers_1.Long.UZERO;
        message.communityPoolFunds = object.communityPoolFunds !== undefined && object.communityPoolFunds !== null ? helpers_1.Long.fromValue(object.communityPoolFunds) : helpers_1.Long.UZERO;
        message.publisher = (_a = object.publisher) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
