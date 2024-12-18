"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/ibc.core.client.v1.MsgCreateClient", tx_1.MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", tx_1.MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", tx_1.MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_1.MsgSubmitMisbehaviour]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: tx_1.MsgCreateClient.encode(value).finish()
            };
        },
        updateClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: tx_1.MsgUpdateClient.encode(value).finish()
            };
        },
        upgradeClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: tx_1.MsgUpgradeClient.encode(value).finish()
            };
        },
        submitMisbehaviour: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: tx_1.MsgSubmitMisbehaviour.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: value
            };
        },
        updateClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: value
            };
        },
        upgradeClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: value
            };
        },
        submitMisbehaviour: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: value
            };
        }
    },
    fromPartial: {
        createClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: tx_1.MsgCreateClient.fromPartial(value)
            };
        },
        updateClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: tx_1.MsgUpdateClient.fromPartial(value)
            };
        },
        upgradeClient: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: tx_1.MsgUpgradeClient.fromPartial(value)
            };
        },
        submitMisbehaviour: function (value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: tx_1.MsgSubmitMisbehaviour.fromPartial(value)
            };
        }
    }
};
