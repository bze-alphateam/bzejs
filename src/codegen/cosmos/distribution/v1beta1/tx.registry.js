"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_1.MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_1.MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_1.MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_1.MsgFundCommunityPool]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setWithdrawAddress: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_1.MsgSetWithdrawAddress.encode(value).finish()
            };
        },
        withdrawDelegatorReward: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_1.MsgWithdrawDelegatorReward.encode(value).finish()
            };
        },
        withdrawValidatorCommission: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_1.MsgWithdrawValidatorCommission.encode(value).finish()
            };
        },
        fundCommunityPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_1.MsgFundCommunityPool.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setWithdrawAddress: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: value
            };
        },
        withdrawDelegatorReward: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: value
            };
        },
        withdrawValidatorCommission: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: value
            };
        },
        fundCommunityPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: value
            };
        }
    },
    fromPartial: {
        setWithdrawAddress: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_1.MsgSetWithdrawAddress.fromPartial(value)
            };
        },
        withdrawDelegatorReward: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_1.MsgWithdrawDelegatorReward.fromPartial(value)
            };
        },
        withdrawValidatorCommission: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_1.MsgWithdrawValidatorCommission.fromPartial(value)
            };
        },
        fundCommunityPool: function (value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_1.MsgFundCommunityPool.fromPartial(value)
            };
        }
    }
};
