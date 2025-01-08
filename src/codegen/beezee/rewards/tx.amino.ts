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
export const AminoConverter = {
  "/bze.v1.rewards.MsgCreateStakingReward": {
    aminoType: "rewards/CreateStakingReward",
    toAmino: ({
      creator,
      prizeAmount,
      prizeDenom,
      stakingDenom,
      duration,
      minStake,
      lock
    }: MsgCreateStakingReward): AminoMsgCreateStakingReward["value"] => {
      return {
        creator,
        prize_amount: prizeAmount,
        prize_denom: prizeDenom,
        staking_denom: stakingDenom,
        duration,
        min_stake: minStake,
        lock
      };
    },
    fromAmino: ({
      creator,
      prize_amount,
      prize_denom,
      staking_denom,
      duration,
      min_stake,
      lock
    }: AminoMsgCreateStakingReward["value"]): MsgCreateStakingReward => {
      return {
        creator,
        prizeAmount: prize_amount,
        prizeDenom: prize_denom,
        stakingDenom: staking_denom,
        duration,
        minStake: min_stake,
        lock
      };
    }
  },
  "/bze.v1.rewards.MsgUpdateStakingReward": {
    aminoType: "rewards/UpdateStakingReward",
    toAmino: ({
      creator,
      rewardId,
      duration
    }: MsgUpdateStakingReward): AminoMsgUpdateStakingReward["value"] => {
      return {
        creator,
        reward_id: rewardId,
        duration
      };
    },
    fromAmino: ({
      creator,
      reward_id,
      duration
    }: AminoMsgUpdateStakingReward["value"]): MsgUpdateStakingReward => {
      return {
        creator,
        rewardId: reward_id,
        duration
      };
    }
  },
  "/bze.v1.rewards.MsgCreateTradingReward": {
    aminoType: "rewards/CreateTradingReward",
    toAmino: ({
      creator,
      prizeAmount,
      prizeDenom,
      duration,
      marketId,
      slots
    }: MsgCreateTradingReward): AminoMsgCreateTradingReward["value"] => {
      return {
        creator,
        prize_amount: prizeAmount,
        prize_denom: prizeDenom,
        duration,
        market_id: marketId,
        slots
      };
    },
    fromAmino: ({
      creator,
      prize_amount,
      prize_denom,
      duration,
      market_id,
      slots
    }: AminoMsgCreateTradingReward["value"]): MsgCreateTradingReward => {
      return {
        creator,
        prizeAmount: prize_amount,
        prizeDenom: prize_denom,
        duration,
        marketId: market_id,
        slots
      };
    }
  },
  "/bze.v1.rewards.MsgJoinStaking": {
    aminoType: "rewards/JoinStaking",
    toAmino: ({
      creator,
      rewardId,
      amount
    }: MsgJoinStaking): AminoMsgJoinStaking["value"] => {
      return {
        creator,
        reward_id: rewardId,
        amount
      };
    },
    fromAmino: ({
      creator,
      reward_id,
      amount
    }: AminoMsgJoinStaking["value"]): MsgJoinStaking => {
      return {
        creator,
        rewardId: reward_id,
        amount
      };
    }
  },
  "/bze.v1.rewards.MsgExitStaking": {
    aminoType: "rewards/ExitStaking",
    toAmino: ({
      creator,
      rewardId
    }: MsgExitStaking): AminoMsgExitStaking["value"] => {
      return {
        creator,
        rewardId
      };
    },
    fromAmino: ({
      creator,
      rewardId
    }: AminoMsgExitStaking["value"]): MsgExitStaking => {
      return {
        creator,
        rewardId
      };
    }
  },
  "/bze.v1.rewards.MsgClaimStakingRewards": {
    aminoType: "rewards/ClaimStakingRewards",
    toAmino: ({
      creator,
      rewardId
    }: MsgClaimStakingRewards): AminoMsgClaimStakingRewards["value"] => {
      return {
        creator,
        rewardId
      };
    },
    fromAmino: ({
      creator,
      rewardId
    }: AminoMsgClaimStakingRewards["value"]): MsgClaimStakingRewards => {
      return {
        creator,
        rewardId
      };
    }
  },
  "/bze.v1.rewards.MsgDistributeStakingRewards": {
    aminoType: "rewards/DistributeStakingRewards",
    toAmino: ({
      creator,
      rewardId,
      amount
    }: MsgDistributeStakingRewards): AminoMsgDistributeStakingRewards["value"] => {
      return {
        creator,
        rewardId,
        amount
      };
    },
    fromAmino: ({
      creator,
      rewardId,
      amount
    }: AminoMsgDistributeStakingRewards["value"]): MsgDistributeStakingRewards => {
      return {
        creator,
        rewardId,
        amount
      };
    }
  }
};