"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_1.MsgCreateVestingAccount], ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", tx_1.MsgCreatePermanentLockedAccount], ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", tx_1.MsgCreatePeriodicVestingAccount]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createVestingAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.encode(value).finish()
            };
        },
        createPermanentLockedAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: tx_1.MsgCreatePermanentLockedAccount.encode(value).finish()
            };
        },
        createPeriodicVestingAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: tx_1.MsgCreatePeriodicVestingAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createVestingAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: value
            };
        },
        createPermanentLockedAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: value
            };
        },
        createPeriodicVestingAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: value
            };
        }
    },
    fromPartial: {
        createVestingAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: tx_1.MsgCreateVestingAccount.fromPartial(value)
            };
        },
        createPermanentLockedAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: tx_1.MsgCreatePermanentLockedAccount.fromPartial(value)
            };
        },
        createPeriodicVestingAccount: function (value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: tx_1.MsgCreatePeriodicVestingAccount.fromPartial(value)
            };
        }
    }
};
