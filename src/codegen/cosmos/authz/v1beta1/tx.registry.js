"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.authz.v1beta1.MsgGrant", tx_1.MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", tx_1.MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", tx_1.MsgRevoke]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        grant: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: tx_1.MsgGrant.encode(value).finish()
            };
        },
        exec: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: tx_1.MsgExec.encode(value).finish()
            };
        },
        revoke: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: tx_1.MsgRevoke.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        grant: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: value
            };
        },
        exec: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: value
            };
        },
        revoke: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: value
            };
        }
    },
    fromPartial: {
        grant: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: tx_1.MsgGrant.fromPartial(value)
            };
        },
        exec: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: tx_1.MsgExec.fromPartial(value)
            };
        },
        revoke: function (value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: tx_1.MsgRevoke.fromPartial(value)
            };
        }
    }
};
