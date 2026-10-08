//@ts-nocheck
import { TelescopeGeneratedType } from "../../types";
import { MsgUpdateParams, MsgCreateStakingReward, MsgUpdateStakingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards, MsgCreateTradingReward, MsgActivateTradingReward, MsgDeleteStakingReward, MsgCreateDenomReward, MsgJoinDenomReward, MsgExitDenomReward, MsgClaimDenomRewards, MsgCreateDenomRewardSchedule, MsgUpdateDenomRewardSchedule, MsgDistributeDenomRewards } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/bze.rewards.MsgUpdateParams", MsgUpdateParams], ["/bze.rewards.MsgCreateStakingReward", MsgCreateStakingReward], ["/bze.rewards.MsgUpdateStakingReward", MsgUpdateStakingReward], ["/bze.rewards.MsgJoinStaking", MsgJoinStaking], ["/bze.rewards.MsgExitStaking", MsgExitStaking], ["/bze.rewards.MsgClaimStakingRewards", MsgClaimStakingRewards], ["/bze.rewards.MsgDistributeStakingRewards", MsgDistributeStakingRewards], ["/bze.rewards.MsgCreateTradingReward", MsgCreateTradingReward], ["/bze.rewards.MsgActivateTradingReward", MsgActivateTradingReward], ["/bze.rewards.MsgDeleteStakingReward", MsgDeleteStakingReward], ["/bze.rewards.MsgCreateDenomReward", MsgCreateDenomReward], ["/bze.rewards.MsgJoinDenomReward", MsgJoinDenomReward], ["/bze.rewards.MsgExitDenomReward", MsgExitDenomReward], ["/bze.rewards.MsgClaimDenomRewards", MsgClaimDenomRewards], ["/bze.rewards.MsgCreateDenomRewardSchedule", MsgCreateDenomRewardSchedule], ["/bze.rewards.MsgUpdateDenomRewardSchedule", MsgUpdateDenomRewardSchedule], ["/bze.rewards.MsgDistributeDenomRewards", MsgDistributeDenomRewards]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createStakingReward(value: MsgCreateStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateStakingReward",
        value: MsgCreateStakingReward.encode(value).finish()
      };
    },
    updateStakingReward(value: MsgUpdateStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateStakingReward",
        value: MsgUpdateStakingReward.encode(value).finish()
      };
    },
    joinStaking(value: MsgJoinStaking) {
      return {
        typeUrl: "/bze.rewards.MsgJoinStaking",
        value: MsgJoinStaking.encode(value).finish()
      };
    },
    exitStaking(value: MsgExitStaking) {
      return {
        typeUrl: "/bze.rewards.MsgExitStaking",
        value: MsgExitStaking.encode(value).finish()
      };
    },
    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/bze.rewards.MsgClaimStakingRewards",
        value: MsgClaimStakingRewards.encode(value).finish()
      };
    },
    distributeStakingRewards(value: MsgDistributeStakingRewards) {
      return {
        typeUrl: "/bze.rewards.MsgDistributeStakingRewards",
        value: MsgDistributeStakingRewards.encode(value).finish()
      };
    },
    createTradingReward(value: MsgCreateTradingReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateTradingReward",
        value: MsgCreateTradingReward.encode(value).finish()
      };
    },
    activateTradingReward(value: MsgActivateTradingReward) {
      return {
        typeUrl: "/bze.rewards.MsgActivateTradingReward",
        value: MsgActivateTradingReward.encode(value).finish()
      };
    },
    deleteStakingReward(value: MsgDeleteStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgDeleteStakingReward",
        value: MsgDeleteStakingReward.encode(value).finish()
      };
    },
    createDenomReward(value: MsgCreateDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateDenomReward",
        value: MsgCreateDenomReward.encode(value).finish()
      };
    },
    joinDenomReward(value: MsgJoinDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgJoinDenomReward",
        value: MsgJoinDenomReward.encode(value).finish()
      };
    },
    exitDenomReward(value: MsgExitDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgExitDenomReward",
        value: MsgExitDenomReward.encode(value).finish()
      };
    },
    claimDenomRewards(value: MsgClaimDenomRewards) {
      return {
        typeUrl: "/bze.rewards.MsgClaimDenomRewards",
        value: MsgClaimDenomRewards.encode(value).finish()
      };
    },
    createDenomRewardSchedule(value: MsgCreateDenomRewardSchedule) {
      return {
        typeUrl: "/bze.rewards.MsgCreateDenomRewardSchedule",
        value: MsgCreateDenomRewardSchedule.encode(value).finish()
      };
    },
    updateDenomRewardSchedule(value: MsgUpdateDenomRewardSchedule) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateDenomRewardSchedule",
        value: MsgUpdateDenomRewardSchedule.encode(value).finish()
      };
    },
    distributeDenomRewards(value: MsgDistributeDenomRewards) {
      return {
        typeUrl: "/bze.rewards.MsgDistributeDenomRewards",
        value: MsgDistributeDenomRewards.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateParams",
        value
      };
    },
    createStakingReward(value: MsgCreateStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateStakingReward",
        value
      };
    },
    updateStakingReward(value: MsgUpdateStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateStakingReward",
        value
      };
    },
    joinStaking(value: MsgJoinStaking) {
      return {
        typeUrl: "/bze.rewards.MsgJoinStaking",
        value
      };
    },
    exitStaking(value: MsgExitStaking) {
      return {
        typeUrl: "/bze.rewards.MsgExitStaking",
        value
      };
    },
    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/bze.rewards.MsgClaimStakingRewards",
        value
      };
    },
    distributeStakingRewards(value: MsgDistributeStakingRewards) {
      return {
        typeUrl: "/bze.rewards.MsgDistributeStakingRewards",
        value
      };
    },
    createTradingReward(value: MsgCreateTradingReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateTradingReward",
        value
      };
    },
    activateTradingReward(value: MsgActivateTradingReward) {
      return {
        typeUrl: "/bze.rewards.MsgActivateTradingReward",
        value
      };
    },
    deleteStakingReward(value: MsgDeleteStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgDeleteStakingReward",
        value
      };
    },
    createDenomReward(value: MsgCreateDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateDenomReward",
        value
      };
    },
    joinDenomReward(value: MsgJoinDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgJoinDenomReward",
        value
      };
    },
    exitDenomReward(value: MsgExitDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgExitDenomReward",
        value
      };
    },
    claimDenomRewards(value: MsgClaimDenomRewards) {
      return {
        typeUrl: "/bze.rewards.MsgClaimDenomRewards",
        value
      };
    },
    createDenomRewardSchedule(value: MsgCreateDenomRewardSchedule) {
      return {
        typeUrl: "/bze.rewards.MsgCreateDenomRewardSchedule",
        value
      };
    },
    updateDenomRewardSchedule(value: MsgUpdateDenomRewardSchedule) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateDenomRewardSchedule",
        value
      };
    },
    distributeDenomRewards(value: MsgDistributeDenomRewards) {
      return {
        typeUrl: "/bze.rewards.MsgDistributeDenomRewards",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createStakingReward(value: MsgCreateStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateStakingReward",
        value: MsgCreateStakingReward.fromPartial(value)
      };
    },
    updateStakingReward(value: MsgUpdateStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateStakingReward",
        value: MsgUpdateStakingReward.fromPartial(value)
      };
    },
    joinStaking(value: MsgJoinStaking) {
      return {
        typeUrl: "/bze.rewards.MsgJoinStaking",
        value: MsgJoinStaking.fromPartial(value)
      };
    },
    exitStaking(value: MsgExitStaking) {
      return {
        typeUrl: "/bze.rewards.MsgExitStaking",
        value: MsgExitStaking.fromPartial(value)
      };
    },
    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/bze.rewards.MsgClaimStakingRewards",
        value: MsgClaimStakingRewards.fromPartial(value)
      };
    },
    distributeStakingRewards(value: MsgDistributeStakingRewards) {
      return {
        typeUrl: "/bze.rewards.MsgDistributeStakingRewards",
        value: MsgDistributeStakingRewards.fromPartial(value)
      };
    },
    createTradingReward(value: MsgCreateTradingReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateTradingReward",
        value: MsgCreateTradingReward.fromPartial(value)
      };
    },
    activateTradingReward(value: MsgActivateTradingReward) {
      return {
        typeUrl: "/bze.rewards.MsgActivateTradingReward",
        value: MsgActivateTradingReward.fromPartial(value)
      };
    },
    deleteStakingReward(value: MsgDeleteStakingReward) {
      return {
        typeUrl: "/bze.rewards.MsgDeleteStakingReward",
        value: MsgDeleteStakingReward.fromPartial(value)
      };
    },
    createDenomReward(value: MsgCreateDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgCreateDenomReward",
        value: MsgCreateDenomReward.fromPartial(value)
      };
    },
    joinDenomReward(value: MsgJoinDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgJoinDenomReward",
        value: MsgJoinDenomReward.fromPartial(value)
      };
    },
    exitDenomReward(value: MsgExitDenomReward) {
      return {
        typeUrl: "/bze.rewards.MsgExitDenomReward",
        value: MsgExitDenomReward.fromPartial(value)
      };
    },
    claimDenomRewards(value: MsgClaimDenomRewards) {
      return {
        typeUrl: "/bze.rewards.MsgClaimDenomRewards",
        value: MsgClaimDenomRewards.fromPartial(value)
      };
    },
    createDenomRewardSchedule(value: MsgCreateDenomRewardSchedule) {
      return {
        typeUrl: "/bze.rewards.MsgCreateDenomRewardSchedule",
        value: MsgCreateDenomRewardSchedule.fromPartial(value)
      };
    },
    updateDenomRewardSchedule(value: MsgUpdateDenomRewardSchedule) {
      return {
        typeUrl: "/bze.rewards.MsgUpdateDenomRewardSchedule",
        value: MsgUpdateDenomRewardSchedule.fromPartial(value)
      };
    },
    distributeDenomRewards(value: MsgDistributeDenomRewards) {
      return {
        typeUrl: "/bze.rewards.MsgDistributeDenomRewards",
        value: MsgDistributeDenomRewards.fromPartial(value)
      };
    }
  }
};