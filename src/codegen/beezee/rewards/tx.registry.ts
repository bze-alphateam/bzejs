import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateStakingReward, MsgUpdateStakingReward, MsgCreateTradingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.v1.rewards.MsgCreateStakingReward", MsgCreateStakingReward], ["/bze.v1.rewards.MsgUpdateStakingReward", MsgUpdateStakingReward], ["/bze.v1.rewards.MsgCreateTradingReward", MsgCreateTradingReward], ["/bze.v1.rewards.MsgJoinStaking", MsgJoinStaking], ["/bze.v1.rewards.MsgExitStaking", MsgExitStaking], ["/bze.v1.rewards.MsgClaimStakingRewards", MsgClaimStakingRewards], ["/bze.v1.rewards.MsgDistributeStakingRewards", MsgDistributeStakingRewards]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createStakingReward(value: MsgCreateStakingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgCreateStakingReward",
        value: MsgCreateStakingReward.encode(value).finish()
      };
    },

    updateStakingReward(value: MsgUpdateStakingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgUpdateStakingReward",
        value: MsgUpdateStakingReward.encode(value).finish()
      };
    },

    createTradingReward(value: MsgCreateTradingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgCreateTradingReward",
        value: MsgCreateTradingReward.encode(value).finish()
      };
    },

    joinStaking(value: MsgJoinStaking) {
      return {
        typeUrl: "/bze.v1.rewards.MsgJoinStaking",
        value: MsgJoinStaking.encode(value).finish()
      };
    },

    exitStaking(value: MsgExitStaking) {
      return {
        typeUrl: "/bze.v1.rewards.MsgExitStaking",
        value: MsgExitStaking.encode(value).finish()
      };
    },

    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/bze.v1.rewards.MsgClaimStakingRewards",
        value: MsgClaimStakingRewards.encode(value).finish()
      };
    },

    distributeStakingRewards(value: MsgDistributeStakingRewards) {
      return {
        typeUrl: "/bze.v1.rewards.MsgDistributeStakingRewards",
        value: MsgDistributeStakingRewards.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createStakingReward(value: MsgCreateStakingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgCreateStakingReward",
        value
      };
    },

    updateStakingReward(value: MsgUpdateStakingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgUpdateStakingReward",
        value
      };
    },

    createTradingReward(value: MsgCreateTradingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgCreateTradingReward",
        value
      };
    },

    joinStaking(value: MsgJoinStaking) {
      return {
        typeUrl: "/bze.v1.rewards.MsgJoinStaking",
        value
      };
    },

    exitStaking(value: MsgExitStaking) {
      return {
        typeUrl: "/bze.v1.rewards.MsgExitStaking",
        value
      };
    },

    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/bze.v1.rewards.MsgClaimStakingRewards",
        value
      };
    },

    distributeStakingRewards(value: MsgDistributeStakingRewards) {
      return {
        typeUrl: "/bze.v1.rewards.MsgDistributeStakingRewards",
        value
      };
    }

  },
  fromPartial: {
    createStakingReward(value: MsgCreateStakingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgCreateStakingReward",
        value: MsgCreateStakingReward.fromPartial(value)
      };
    },

    updateStakingReward(value: MsgUpdateStakingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgUpdateStakingReward",
        value: MsgUpdateStakingReward.fromPartial(value)
      };
    },

    createTradingReward(value: MsgCreateTradingReward) {
      return {
        typeUrl: "/bze.v1.rewards.MsgCreateTradingReward",
        value: MsgCreateTradingReward.fromPartial(value)
      };
    },

    joinStaking(value: MsgJoinStaking) {
      return {
        typeUrl: "/bze.v1.rewards.MsgJoinStaking",
        value: MsgJoinStaking.fromPartial(value)
      };
    },

    exitStaking(value: MsgExitStaking) {
      return {
        typeUrl: "/bze.v1.rewards.MsgExitStaking",
        value: MsgExitStaking.fromPartial(value)
      };
    },

    claimStakingRewards(value: MsgClaimStakingRewards) {
      return {
        typeUrl: "/bze.v1.rewards.MsgClaimStakingRewards",
        value: MsgClaimStakingRewards.fromPartial(value)
      };
    },

    distributeStakingRewards(value: MsgDistributeStakingRewards) {
      return {
        typeUrl: "/bze.v1.rewards.MsgDistributeStakingRewards",
        value: MsgDistributeStakingRewards.fromPartial(value)
      };
    }

  }
};