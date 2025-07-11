//@ts-nocheck
import { MsgUpdateParams, MsgCreateStakingReward, MsgUpdateStakingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards, MsgCreateTradingReward, MsgActivateTradingReward } from "./tx";
export const AminoConverter = {
  "/bze.rewards.MsgUpdateParams": {
    aminoType: "bze/x/rewards/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/bze.rewards.MsgCreateStakingReward": {
    aminoType: "bze/x/rewards/MsgCreateStakingReward",
    toAmino: MsgCreateStakingReward.toAmino,
    fromAmino: MsgCreateStakingReward.fromAmino
  },
  "/bze.rewards.MsgUpdateStakingReward": {
    aminoType: "bze/x/rewards/MsgUpdateStakingReward",
    toAmino: MsgUpdateStakingReward.toAmino,
    fromAmino: MsgUpdateStakingReward.fromAmino
  },
  "/bze.rewards.MsgJoinStaking": {
    aminoType: "bze/x/rewards/MsgJoinStaking",
    toAmino: MsgJoinStaking.toAmino,
    fromAmino: MsgJoinStaking.fromAmino
  },
  "/bze.rewards.MsgExitStaking": {
    aminoType: "bze/x/rewards/MsgExitStaking",
    toAmino: MsgExitStaking.toAmino,
    fromAmino: MsgExitStaking.fromAmino
  },
  "/bze.rewards.MsgClaimStakingRewards": {
    aminoType: "bze/x/rewards/MsgClaimStakingRewards",
    toAmino: MsgClaimStakingRewards.toAmino,
    fromAmino: MsgClaimStakingRewards.fromAmino
  },
  "/bze.rewards.MsgDistributeStakingRewards": {
    aminoType: "bze/x/rewards/MsgDistributeStakingRewards",
    toAmino: MsgDistributeStakingRewards.toAmino,
    fromAmino: MsgDistributeStakingRewards.fromAmino
  },
  "/bze.rewards.MsgCreateTradingReward": {
    aminoType: "bze/x/rewards/MsgCreateTradingReward",
    toAmino: MsgCreateTradingReward.toAmino,
    fromAmino: MsgCreateTradingReward.fromAmino
  },
  "/bze.rewards.MsgActivateTradingReward": {
    aminoType: "bze/x/rewards/MsgActivateTradingReward",
    toAmino: MsgActivateTradingReward.toAmino,
    fromAmino: MsgActivateTradingReward.fromAmino
  }
};