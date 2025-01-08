import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateStakingReward, MsgUpdateStakingReward, MsgCreateTradingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards } from "./tx";
export interface AminoMsgCreateStakingReward extends AminoMsg {
    type: "rewards/CreateStakingReward";
    value: {
        creator: string;
        prize_amount: string;
        prize_denom: string;
        staking_denom: string;
        duration: string;
        min_stake: string;
        lock: string;
    };
}
export interface AminoMsgUpdateStakingReward extends AminoMsg {
    type: "rewards/UpdateStakingReward";
    value: {
        creator: string;
        reward_id: string;
        duration: string;
    };
}
export interface AminoMsgCreateTradingReward extends AminoMsg {
    type: "rewards/CreateTradingReward";
    value: {
        creator: string;
        prize_amount: string;
        prize_denom: string;
        duration: string;
        market_id: string;
        slots: string;
    };
}
export interface AminoMsgJoinStaking extends AminoMsg {
    type: "rewards/JoinStaking";
    value: {
        creator: string;
        reward_id: string;
        amount: string;
    };
}
export interface AminoMsgExitStaking extends AminoMsg {
    type: "rewards/ExitStaking";
    value: {
        creator: string;
        rewardId: string;
    };
}
export interface AminoMsgClaimStakingRewards extends AminoMsg {
    type: "rewards/ClaimStakingRewards";
    value: {
        creator: string;
        rewardId: string;
    };
}
export interface AminoMsgDistributeStakingRewards extends AminoMsg {
    type: "rewards/DistributeStakingRewards";
    value: {
        creator: string;
        rewardId: string;
        amount: string;
    };
}
export declare const AminoConverter: {
    "/bze.v1.rewards.MsgCreateStakingReward": {
        aminoType: string;
        toAmino: ({ creator, prizeAmount, prizeDenom, stakingDenom, duration, minStake, lock }: MsgCreateStakingReward) => AminoMsgCreateStakingReward["value"];
        fromAmino: ({ creator, prize_amount, prize_denom, staking_denom, duration, min_stake, lock }: AminoMsgCreateStakingReward["value"]) => MsgCreateStakingReward;
    };
    "/bze.v1.rewards.MsgUpdateStakingReward": {
        aminoType: string;
        toAmino: ({ creator, rewardId, duration }: MsgUpdateStakingReward) => AminoMsgUpdateStakingReward["value"];
        fromAmino: ({ creator, reward_id, duration }: AminoMsgUpdateStakingReward["value"]) => MsgUpdateStakingReward;
    };
    "/bze.v1.rewards.MsgCreateTradingReward": {
        aminoType: string;
        toAmino: ({ creator, prizeAmount, prizeDenom, duration, marketId, slots }: MsgCreateTradingReward) => AminoMsgCreateTradingReward["value"];
        fromAmino: ({ creator, prize_amount, prize_denom, duration, market_id, slots }: AminoMsgCreateTradingReward["value"]) => MsgCreateTradingReward;
    };
    "/bze.v1.rewards.MsgJoinStaking": {
        aminoType: string;
        toAmino: ({ creator, rewardId, amount }: MsgJoinStaking) => AminoMsgJoinStaking["value"];
        fromAmino: ({ creator, reward_id, amount }: AminoMsgJoinStaking["value"]) => MsgJoinStaking;
    };
    "/bze.v1.rewards.MsgExitStaking": {
        aminoType: string;
        toAmino: ({ creator, rewardId }: MsgExitStaking) => AminoMsgExitStaking["value"];
        fromAmino: ({ creator, rewardId }: AminoMsgExitStaking["value"]) => MsgExitStaking;
    };
    "/bze.v1.rewards.MsgClaimStakingRewards": {
        aminoType: string;
        toAmino: ({ creator, rewardId }: MsgClaimStakingRewards) => AminoMsgClaimStakingRewards["value"];
        fromAmino: ({ creator, rewardId }: AminoMsgClaimStakingRewards["value"]) => MsgClaimStakingRewards;
    };
    "/bze.v1.rewards.MsgDistributeStakingRewards": {
        aminoType: string;
        toAmino: ({ creator, rewardId, amount }: MsgDistributeStakingRewards) => AminoMsgDistributeStakingRewards["value"];
        fromAmino: ({ creator, rewardId, amount }: AminoMsgDistributeStakingRewards["value"]) => MsgDistributeStakingRewards;
    };
};
