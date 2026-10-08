//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgCreateStakingReward, MsgUpdateStakingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards, MsgCreateTradingReward, MsgActivateTradingReward, MsgDeleteStakingReward, MsgCreateDenomReward, MsgJoinDenomReward, MsgExitDenomReward, MsgClaimDenomRewards, MsgCreateDenomRewardSchedule, MsgUpdateDenomRewardSchedule, MsgDistributeDenomRewards } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.rewards
 * @see proto service: bze.rewards.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name createStakingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.CreateStakingReward
 */
export const createStakingReward = buildTx<MsgCreateStakingReward>({
  msg: MsgCreateStakingReward
});
/**
 * @name updateStakingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.UpdateStakingReward
 */
export const updateStakingReward = buildTx<MsgUpdateStakingReward>({
  msg: MsgUpdateStakingReward
});
/**
 * @name joinStaking
 * @package bze.rewards
 * @see proto service: bze.rewards.JoinStaking
 */
export const joinStaking = buildTx<MsgJoinStaking>({
  msg: MsgJoinStaking
});
/**
 * @name exitStaking
 * @package bze.rewards
 * @see proto service: bze.rewards.ExitStaking
 */
export const exitStaking = buildTx<MsgExitStaking>({
  msg: MsgExitStaking
});
/**
 * @name claimStakingRewards
 * @package bze.rewards
 * @see proto service: bze.rewards.ClaimStakingRewards
 */
export const claimStakingRewards = buildTx<MsgClaimStakingRewards>({
  msg: MsgClaimStakingRewards
});
/**
 * @name distributeStakingRewards
 * @package bze.rewards
 * @see proto service: bze.rewards.DistributeStakingRewards
 */
export const distributeStakingRewards = buildTx<MsgDistributeStakingRewards>({
  msg: MsgDistributeStakingRewards
});
/**
 * @name createTradingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.CreateTradingReward
 */
export const createTradingReward = buildTx<MsgCreateTradingReward>({
  msg: MsgCreateTradingReward
});
/**
 * @name activateTradingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.ActivateTradingReward
 */
export const activateTradingReward = buildTx<MsgActivateTradingReward>({
  msg: MsgActivateTradingReward
});
/**
 * @name deleteStakingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.DeleteStakingReward
 */
export const deleteStakingReward = buildTx<MsgDeleteStakingReward>({
  msg: MsgDeleteStakingReward
});
/**
 * @name createDenomReward
 * @package bze.rewards
 * @see proto service: bze.rewards.CreateDenomReward
 */
export const createDenomReward = buildTx<MsgCreateDenomReward>({
  msg: MsgCreateDenomReward
});
/**
 * @name joinDenomReward
 * @package bze.rewards
 * @see proto service: bze.rewards.JoinDenomReward
 */
export const joinDenomReward = buildTx<MsgJoinDenomReward>({
  msg: MsgJoinDenomReward
});
/**
 * @name exitDenomReward
 * @package bze.rewards
 * @see proto service: bze.rewards.ExitDenomReward
 */
export const exitDenomReward = buildTx<MsgExitDenomReward>({
  msg: MsgExitDenomReward
});
/**
 * @name claimDenomRewards
 * @package bze.rewards
 * @see proto service: bze.rewards.ClaimDenomRewards
 */
export const claimDenomRewards = buildTx<MsgClaimDenomRewards>({
  msg: MsgClaimDenomRewards
});
/**
 * @name createDenomRewardSchedule
 * @package bze.rewards
 * @see proto service: bze.rewards.CreateDenomRewardSchedule
 */
export const createDenomRewardSchedule = buildTx<MsgCreateDenomRewardSchedule>({
  msg: MsgCreateDenomRewardSchedule
});
/**
 * @name updateDenomRewardSchedule
 * @package bze.rewards
 * @see proto service: bze.rewards.UpdateDenomRewardSchedule
 */
export const updateDenomRewardSchedule = buildTx<MsgUpdateDenomRewardSchedule>({
  msg: MsgUpdateDenomRewardSchedule
});
/**
 * @name distributeDenomRewards
 * @package bze.rewards
 * @see proto service: bze.rewards.DistributeDenomRewards
 */
export const distributeDenomRewards = buildTx<MsgDistributeDenomRewards>({
  msg: MsgDistributeDenomRewards
});