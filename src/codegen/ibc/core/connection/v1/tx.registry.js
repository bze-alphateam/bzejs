"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_1.MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_1.MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_1.MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_1.MsgConnectionOpenConfirm]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        connectionOpenInit: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: tx_1.MsgConnectionOpenInit.encode(value).finish()
            };
        },
        connectionOpenTry: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: tx_1.MsgConnectionOpenTry.encode(value).finish()
            };
        },
        connectionOpenAck: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: tx_1.MsgConnectionOpenAck.encode(value).finish()
            };
        },
        connectionOpenConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: tx_1.MsgConnectionOpenConfirm.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        connectionOpenInit: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: value
            };
        },
        connectionOpenTry: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: value
            };
        },
        connectionOpenAck: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: value
            };
        },
        connectionOpenConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: value
            };
        }
    },
    fromPartial: {
        connectionOpenInit: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: tx_1.MsgConnectionOpenInit.fromPartial(value)
            };
        },
        connectionOpenTry: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: tx_1.MsgConnectionOpenTry.fromPartial(value)
            };
        },
        connectionOpenAck: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: tx_1.MsgConnectionOpenAck.fromPartial(value)
            };
        },
        connectionOpenConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: tx_1.MsgConnectionOpenConfirm.fromPartial(value)
            };
        }
    }
};
