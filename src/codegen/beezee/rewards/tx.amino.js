"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/bze.v1.rewards.MsgCreateStakingReward": {
        aminoType: "/bze.v1.rewards.MsgCreateStakingReward",
        toAmino: function (_a) {
            var creator = _a.creator, prizeAmount = _a.prizeAmount, prizeDenom = _a.prizeDenom, stakingDenom = _a.stakingDenom, duration = _a.duration, minStake = _a.minStake, lock = _a.lock;
            return {
                creator: creator,
                prize_amount: prizeAmount,
                prize_denom: prizeDenom,
                staking_denom: stakingDenom,
                duration: duration,
                min_stake: minStake,
                lock: lock
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, prize_amount = _a.prize_amount, prize_denom = _a.prize_denom, staking_denom = _a.staking_denom, duration = _a.duration, min_stake = _a.min_stake, lock = _a.lock;
            return {
                creator: creator,
                prizeAmount: prize_amount,
                prizeDenom: prize_denom,
                stakingDenom: staking_denom,
                duration: duration,
                minStake: min_stake,
                lock: lock
            };
        }
    },
    "/bze.v1.rewards.MsgUpdateStakingReward": {
        aminoType: "/bze.v1.rewards.MsgUpdateStakingReward",
        toAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId, duration = _a.duration;
            return {
                creator: creator,
                reward_id: rewardId,
                duration: duration
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, reward_id = _a.reward_id, duration = _a.duration;
            return {
                creator: creator,
                rewardId: reward_id,
                duration: duration
            };
        }
    },
    "/bze.v1.rewards.MsgCreateTradingReward": {
        aminoType: "/bze.v1.rewards.MsgCreateTradingReward",
        toAmino: function (_a) {
            var creator = _a.creator, prizeAmount = _a.prizeAmount, prizeDenom = _a.prizeDenom, duration = _a.duration, marketId = _a.marketId, slots = _a.slots;
            return {
                creator: creator,
                prize_amount: prizeAmount,
                prize_denom: prizeDenom,
                duration: duration,
                market_id: marketId,
                slots: slots
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, prize_amount = _a.prize_amount, prize_denom = _a.prize_denom, duration = _a.duration, market_id = _a.market_id, slots = _a.slots;
            return {
                creator: creator,
                prizeAmount: prize_amount,
                prizeDenom: prize_denom,
                duration: duration,
                marketId: market_id,
                slots: slots
            };
        }
    },
    "/bze.v1.rewards.MsgJoinStaking": {
        aminoType: "/bze.v1.rewards.MsgJoinStaking",
        toAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId, amount = _a.amount;
            return {
                creator: creator,
                reward_id: rewardId,
                amount: amount
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, reward_id = _a.reward_id, amount = _a.amount;
            return {
                creator: creator,
                rewardId: reward_id,
                amount: amount
            };
        }
    },
    "/bze.v1.rewards.MsgExitStaking": {
        aminoType: "/bze.v1.rewards.MsgExitStaking",
        toAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId;
            return {
                creator: creator,
                rewardId: rewardId
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId;
            return {
                creator: creator,
                rewardId: rewardId
            };
        }
    },
    "/bze.v1.rewards.MsgClaimStakingRewards": {
        aminoType: "/bze.v1.rewards.MsgClaimStakingRewards",
        toAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId;
            return {
                creator: creator,
                rewardId: rewardId
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId;
            return {
                creator: creator,
                rewardId: rewardId
            };
        }
    },
    "/bze.v1.rewards.MsgDistributeStakingRewards": {
        aminoType: "/bze.v1.rewards.MsgDistributeStakingRewards",
        toAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId, amount = _a.amount;
            return {
                creator: creator,
                rewardId: rewardId,
                amount: amount
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, rewardId = _a.rewardId, amount = _a.amount;
            return {
                creator: creator,
                rewardId: rewardId,
                amount: amount
            };
        }
    }
};
