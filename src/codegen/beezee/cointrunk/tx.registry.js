"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/bze.cointrunk.v1.MsgAddArticle", tx_1.MsgAddArticle], ["/bze.cointrunk.v1.MsgPayPublisherRespect", tx_1.MsgPayPublisherRespect]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        addArticle: function (value) {
            return {
                typeUrl: "/bze.cointrunk.v1.MsgAddArticle",
                value: tx_1.MsgAddArticle.encode(value).finish()
            };
        },
        payPublisherRespect: function (value) {
            return {
                typeUrl: "/bze.cointrunk.v1.MsgPayPublisherRespect",
                value: tx_1.MsgPayPublisherRespect.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        addArticle: function (value) {
            return {
                typeUrl: "/bze.cointrunk.v1.MsgAddArticle",
                value: value
            };
        },
        payPublisherRespect: function (value) {
            return {
                typeUrl: "/bze.cointrunk.v1.MsgPayPublisherRespect",
                value: value
            };
        }
    },
    fromPartial: {
        addArticle: function (value) {
            return {
                typeUrl: "/bze.cointrunk.v1.MsgAddArticle",
                value: tx_1.MsgAddArticle.fromPartial(value)
            };
        },
        payPublisherRespect: function (value) {
            return {
                typeUrl: "/bze.cointrunk.v1.MsgPayPublisherRespect",
                value: tx_1.MsgPayPublisherRespect.fromPartial(value)
            };
        }
    }
};
