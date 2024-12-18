"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", tx_1.MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", tx_1.MsgRevokeAllowance]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        grantAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.encode(value).finish()
            };
        },
        revokeAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        grantAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: value
            };
        },
        revokeAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: value
            };
        }
    },
    fromPartial: {
        grantAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.fromPartial(value)
            };
        },
        revokeAllowance: function (value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.fromPartial(value)
            };
        }
    }
};
