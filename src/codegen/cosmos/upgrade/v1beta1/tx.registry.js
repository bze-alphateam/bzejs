"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", tx_1.MsgSoftwareUpgrade], ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", tx_1.MsgCancelUpgrade]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        softwareUpgrade: function (value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value: tx_1.MsgSoftwareUpgrade.encode(value).finish()
            };
        },
        cancelUpgrade: function (value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value: tx_1.MsgCancelUpgrade.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        softwareUpgrade: function (value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value: value
            };
        },
        cancelUpgrade: function (value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value: value
            };
        }
    },
    fromPartial: {
        softwareUpgrade: function (value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value: tx_1.MsgSoftwareUpgrade.fromPartial(value)
            };
        },
        cancelUpgrade: function (value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value: tx_1.MsgCancelUpgrade.fromPartial(value)
            };
        }
    }
};
