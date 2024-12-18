"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/bze.v1.rewards.MsgCreateStakingReward", tx_1.MsgCreateStakingReward], ["/bze.v1.rewards.MsgUpdateStakingReward", tx_1.MsgUpdateStakingReward], ["/bze.v1.rewards.MsgCreateTradingReward", tx_1.MsgCreateTradingReward], ["/bze.v1.rewards.MsgJoinStaking", tx_1.MsgJoinStaking], ["/bze.v1.rewards.MsgExitStaking", tx_1.MsgExitStaking], ["/bze.v1.rewards.MsgClaimStakingRewards", tx_1.MsgClaimStakingRewards], ["/bze.v1.rewards.MsgDistributeStakingRewards", tx_1.MsgDistributeStakingRewards]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createStakingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgCreateStakingReward",
                value: tx_1.MsgCreateStakingReward.encode(value).finish()
            };
        },
        updateStakingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgUpdateStakingReward",
                value: tx_1.MsgUpdateStakingReward.encode(value).finish()
            };
        },
        createTradingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgCreateTradingReward",
                value: tx_1.MsgCreateTradingReward.encode(value).finish()
            };
        },
        joinStaking: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgJoinStaking",
                value: tx_1.MsgJoinStaking.encode(value).finish()
            };
        },
        exitStaking: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgExitStaking",
                value: tx_1.MsgExitStaking.encode(value).finish()
            };
        },
        claimStakingRewards: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgClaimStakingRewards",
                value: tx_1.MsgClaimStakingRewards.encode(value).finish()
            };
        },
        distributeStakingRewards: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgDistributeStakingRewards",
                value: tx_1.MsgDistributeStakingRewards.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createStakingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgCreateStakingReward",
                value: value
            };
        },
        updateStakingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgUpdateStakingReward",
                value: value
            };
        },
        createTradingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgCreateTradingReward",
                value: value
            };
        },
        joinStaking: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgJoinStaking",
                value: value
            };
        },
        exitStaking: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgExitStaking",
                value: value
            };
        },
        claimStakingRewards: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgClaimStakingRewards",
                value: value
            };
        },
        distributeStakingRewards: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgDistributeStakingRewards",
                value: value
            };
        }
    },
    fromPartial: {
        createStakingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgCreateStakingReward",
                value: tx_1.MsgCreateStakingReward.fromPartial(value)
            };
        },
        updateStakingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgUpdateStakingReward",
                value: tx_1.MsgUpdateStakingReward.fromPartial(value)
            };
        },
        createTradingReward: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgCreateTradingReward",
                value: tx_1.MsgCreateTradingReward.fromPartial(value)
            };
        },
        joinStaking: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgJoinStaking",
                value: tx_1.MsgJoinStaking.fromPartial(value)
            };
        },
        exitStaking: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgExitStaking",
                value: tx_1.MsgExitStaking.fromPartial(value)
            };
        },
        claimStakingRewards: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgClaimStakingRewards",
                value: tx_1.MsgClaimStakingRewards.fromPartial(value)
            };
        },
        distributeStakingRewards: function (value) {
            return {
                typeUrl: "/bze.v1.rewards.MsgDistributeStakingRewards",
                value: tx_1.MsgDistributeStakingRewards.fromPartial(value)
            };
        }
    }
};
