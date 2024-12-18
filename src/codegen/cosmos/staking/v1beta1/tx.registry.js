"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.staking.v1beta1.MsgCreateValidator", tx_1.MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", tx_1.MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", tx_1.MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", tx_1.MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", tx_1.MsgUndelegate]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createValidator: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: tx_1.MsgCreateValidator.encode(value).finish()
            };
        },
        editValidator: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: tx_1.MsgEditValidator.encode(value).finish()
            };
        },
        delegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: tx_1.MsgDelegate.encode(value).finish()
            };
        },
        beginRedelegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: tx_1.MsgBeginRedelegate.encode(value).finish()
            };
        },
        undelegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: tx_1.MsgUndelegate.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createValidator: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: value
            };
        },
        editValidator: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: value
            };
        },
        delegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: value
            };
        },
        beginRedelegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: value
            };
        },
        undelegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: value
            };
        }
    },
    fromPartial: {
        createValidator: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: tx_1.MsgCreateValidator.fromPartial(value)
            };
        },
        editValidator: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: tx_1.MsgEditValidator.fromPartial(value)
            };
        },
        delegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: tx_1.MsgDelegate.fromPartial(value)
            };
        },
        beginRedelegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: tx_1.MsgBeginRedelegate.fromPartial(value)
            };
        },
        undelegate: function (value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: tx_1.MsgUndelegate.fromPartial(value)
            };
        }
    }
};
