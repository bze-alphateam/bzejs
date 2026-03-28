//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgCreateStakingReward, MsgUpdateStakingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards, MsgCreateTradingReward, MsgActivateTradingReward } from "./tx";
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