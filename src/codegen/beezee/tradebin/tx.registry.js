"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/bze.tradebin.v1.MsgCreateMarket", tx_1.MsgCreateMarket], ["/bze.tradebin.v1.MsgCreateOrder", tx_1.MsgCreateOrder], ["/bze.tradebin.v1.MsgCancelOrder", tx_1.MsgCancelOrder]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createMarket: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCreateMarket",
                value: tx_1.MsgCreateMarket.encode(value).finish()
            };
        },
        createOrder: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCreateOrder",
                value: tx_1.MsgCreateOrder.encode(value).finish()
            };
        },
        cancelOrder: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCancelOrder",
                value: tx_1.MsgCancelOrder.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createMarket: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCreateMarket",
                value: value
            };
        },
        createOrder: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCreateOrder",
                value: value
            };
        },
        cancelOrder: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCancelOrder",
                value: value
            };
        }
    },
    fromPartial: {
        createMarket: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCreateMarket",
                value: tx_1.MsgCreateMarket.fromPartial(value)
            };
        },
        createOrder: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCreateOrder",
                value: tx_1.MsgCreateOrder.fromPartial(value)
            };
        },
        cancelOrder: function (value) {
            return {
                typeUrl: "/bze.tradebin.v1.MsgCancelOrder",
                value: tx_1.MsgCancelOrder.fromPartial(value)
            };
        }
    }
};
