//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateStakingReward, MsgUpdateStakingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards, MsgCreateTradingReward, MsgActivateTradingReward } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.rewards.MsgUpdateParams", MsgUpdateParams], ["/bze.rewards.MsgCreateStakingReward", MsgCreateStakingReward], ["/bze.rewards.MsgUpdateStakingReward", MsgUpdateStakingReward], ["/bze.rewards.MsgJoinStaking", MsgJoinStaking], ["/bze.rewards.MsgExitStaking", MsgExitStaking], ["/bze.rewards.MsgClaimStakingRewards", MsgClaimStakingRewards], ["/bze.rewards.MsgDistributeStakingRewards", MsgDistributeStakingRewards], ["/bze.rewards.MsgCreateTradingReward", MsgCreateTradingReward], ["/bze.rewards.MsgActivateTradingReward", MsgActivateTradingReward]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
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
    }
  }
};