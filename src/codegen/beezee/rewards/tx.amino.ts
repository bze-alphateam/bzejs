import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateStakingReward, MsgUpdateStakingReward, MsgCreateTradingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards } from "./tx";
export interface AminoMsgCreateStakingReward extends AminoMsg {
  type: "/bze.v1.rewards.MsgCreateStakingReward";
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
  type: "/bze.v1.rewards.MsgUpdateStakingReward";
  value: {
    creator: string;
    reward_id: string;
    duration: string;
  };
}
export interface AminoMsgCreateTradingReward extends AminoMsg {
  type: "/bze.v1.rewards.MsgCreateTradingReward";
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
  type: "/bze.v1.rewards.MsgJoinStaking";
  value: {
    creator: string;
    reward_id: string;
    amount: string;
  };
}
export interface AminoMsgExitStaking extends AminoMsg {
  type: "/bze.v1.rewards.MsgExitStaking";
  value: {
    creator: string;
    rewardId: string;
  };
}
export interface AminoMsgClaimStakingRewards extends AminoMsg {
  type: "/bze.v1.rewards.MsgClaimStakingRewards";
  value: {
    creator: string;
    rewardId: string;
  };
}
export interface AminoMsgDistributeStakingRewards extends AminoMsg {
  type: "/bze.v1.rewards.MsgDistributeStakingRewards";
  value: {
    creator: string;
    rewardId: string;
    amount: string;
  };
}
export const AminoConverter = {
  "/bze.v1.rewards.MsgCreateStakingReward": {
    aminoType: "/bze.v1.rewards.MsgCreateStakingReward",
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
    aminoType: "/bze.v1.rewards.MsgUpdateStakingReward",
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
    aminoType: "/bze.v1.rewards.MsgCreateTradingReward",
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
    aminoType: "/bze.v1.rewards.MsgJoinStaking",
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
    aminoType: "/bze.v1.rewards.MsgExitStaking",
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
    aminoType: "/bze.v1.rewards.MsgClaimStakingRewards",
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
    aminoType: "/bze.v1.rewards.MsgDistributeStakingRewards",
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