//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bze.rewards.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "bze/x/rewards/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParams
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bze.rewards.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * @name MsgCreateStakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingReward
 */
export interface MsgCreateStakingReward {
  creator: string;
  prizeAmount: string;
  prizeDenom: string;
  stakingDenom: string;
  duration: string;
  minStake: string;
  lock: string;
}
export interface MsgCreateStakingRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateStakingReward";
  value: Uint8Array;
}
/**
 * @name MsgCreateStakingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingReward
 */
export interface MsgCreateStakingRewardAmino {
  creator?: string;
  prize_amount?: string;
  prize_denom?: string;
  staking_denom?: string;
  duration?: string;
  min_stake?: string;
  lock?: string;
}
export interface MsgCreateStakingRewardAminoMsg {
  type: "bze/x/rewards/MsgCreateStakingReward";
  value: MsgCreateStakingRewardAmino;
}
/**
 * @name MsgCreateStakingRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingReward
 */
export interface MsgCreateStakingRewardSDKType {
  creator: string;
  prize_amount: string;
  prize_denom: string;
  staking_denom: string;
  duration: string;
  min_stake: string;
  lock: string;
}
/**
 * @name MsgCreateStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingRewardResponse
 */
export interface MsgCreateStakingRewardResponse {
  rewardId: string;
}
export interface MsgCreateStakingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateStakingRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateStakingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingRewardResponse
 */
export interface MsgCreateStakingRewardResponseAmino {
  reward_id?: string;
}
export interface MsgCreateStakingRewardResponseAminoMsg {
  type: "/bze.rewards.MsgCreateStakingRewardResponse";
  value: MsgCreateStakingRewardResponseAmino;
}
/**
 * @name MsgCreateStakingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingRewardResponse
 */
export interface MsgCreateStakingRewardResponseSDKType {
  reward_id: string;
}
/**
 * @name MsgUpdateStakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingReward
 */
export interface MsgUpdateStakingReward {
  creator: string;
  rewardId: string;
  duration: string;
}
export interface MsgUpdateStakingRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgUpdateStakingReward";
  value: Uint8Array;
}
/**
 * @name MsgUpdateStakingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingReward
 */
export interface MsgUpdateStakingRewardAmino {
  creator?: string;
  reward_id?: string;
  duration?: string;
}
export interface MsgUpdateStakingRewardAminoMsg {
  type: "bze/x/rewards/MsgUpdateStakingReward";
  value: MsgUpdateStakingRewardAmino;
}
/**
 * @name MsgUpdateStakingRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingReward
 */
export interface MsgUpdateStakingRewardSDKType {
  creator: string;
  reward_id: string;
  duration: string;
}
/**
 * @name MsgUpdateStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingRewardResponse
 */
export interface MsgUpdateStakingRewardResponse {}
export interface MsgUpdateStakingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgUpdateStakingRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateStakingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingRewardResponse
 */
export interface MsgUpdateStakingRewardResponseAmino {}
export interface MsgUpdateStakingRewardResponseAminoMsg {
  type: "/bze.rewards.MsgUpdateStakingRewardResponse";
  value: MsgUpdateStakingRewardResponseAmino;
}
/**
 * @name MsgUpdateStakingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingRewardResponse
 */
export interface MsgUpdateStakingRewardResponseSDKType {}
/**
 * @name MsgJoinStaking
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStaking
 */
export interface MsgJoinStaking {
  creator: string;
  rewardId: string;
  amount: string;
}
export interface MsgJoinStakingProtoMsg {
  typeUrl: "/bze.rewards.MsgJoinStaking";
  value: Uint8Array;
}
/**
 * @name MsgJoinStakingAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStaking
 */
export interface MsgJoinStakingAmino {
  creator?: string;
  reward_id?: string;
  amount?: string;
}
export interface MsgJoinStakingAminoMsg {
  type: "bze/x/rewards/MsgJoinStaking";
  value: MsgJoinStakingAmino;
}
/**
 * @name MsgJoinStakingSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStaking
 */
export interface MsgJoinStakingSDKType {
  creator: string;
  reward_id: string;
  amount: string;
}
/**
 * @name MsgJoinStakingResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStakingResponse
 */
export interface MsgJoinStakingResponse {}
export interface MsgJoinStakingResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgJoinStakingResponse";
  value: Uint8Array;
}
/**
 * @name MsgJoinStakingResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStakingResponse
 */
export interface MsgJoinStakingResponseAmino {}
export interface MsgJoinStakingResponseAminoMsg {
  type: "/bze.rewards.MsgJoinStakingResponse";
  value: MsgJoinStakingResponseAmino;
}
/**
 * @name MsgJoinStakingResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStakingResponse
 */
export interface MsgJoinStakingResponseSDKType {}
/**
 * @name MsgExitStaking
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStaking
 */
export interface MsgExitStaking {
  creator: string;
  rewardId: string;
}
export interface MsgExitStakingProtoMsg {
  typeUrl: "/bze.rewards.MsgExitStaking";
  value: Uint8Array;
}
/**
 * @name MsgExitStakingAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStaking
 */
export interface MsgExitStakingAmino {
  creator?: string;
  reward_id?: string;
}
export interface MsgExitStakingAminoMsg {
  type: "bze/x/rewards/MsgExitStaking";
  value: MsgExitStakingAmino;
}
/**
 * @name MsgExitStakingSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStaking
 */
export interface MsgExitStakingSDKType {
  creator: string;
  reward_id: string;
}
/**
 * @name MsgExitStakingResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStakingResponse
 */
export interface MsgExitStakingResponse {}
export interface MsgExitStakingResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgExitStakingResponse";
  value: Uint8Array;
}
/**
 * @name MsgExitStakingResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStakingResponse
 */
export interface MsgExitStakingResponseAmino {}
export interface MsgExitStakingResponseAminoMsg {
  type: "/bze.rewards.MsgExitStakingResponse";
  value: MsgExitStakingResponseAmino;
}
/**
 * @name MsgExitStakingResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStakingResponse
 */
export interface MsgExitStakingResponseSDKType {}
/**
 * @name MsgClaimStakingRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewards
 */
export interface MsgClaimStakingRewards {
  creator: string;
  rewardId: string;
}
export interface MsgClaimStakingRewardsProtoMsg {
  typeUrl: "/bze.rewards.MsgClaimStakingRewards";
  value: Uint8Array;
}
/**
 * @name MsgClaimStakingRewardsAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewards
 */
export interface MsgClaimStakingRewardsAmino {
  creator?: string;
  reward_id?: string;
}
export interface MsgClaimStakingRewardsAminoMsg {
  type: "bze/x/rewards/MsgClaimStakingRewards";
  value: MsgClaimStakingRewardsAmino;
}
/**
 * @name MsgClaimStakingRewardsSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewards
 */
export interface MsgClaimStakingRewardsSDKType {
  creator: string;
  reward_id: string;
}
/**
 * @name MsgClaimStakingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewardsResponse
 */
export interface MsgClaimStakingRewardsResponse {
  amount: string;
}
export interface MsgClaimStakingRewardsResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgClaimStakingRewardsResponse";
  value: Uint8Array;
}
/**
 * @name MsgClaimStakingRewardsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewardsResponse
 */
export interface MsgClaimStakingRewardsResponseAmino {
  amount?: string;
}
export interface MsgClaimStakingRewardsResponseAminoMsg {
  type: "/bze.rewards.MsgClaimStakingRewardsResponse";
  value: MsgClaimStakingRewardsResponseAmino;
}
/**
 * @name MsgClaimStakingRewardsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewardsResponse
 */
export interface MsgClaimStakingRewardsResponseSDKType {
  amount: string;
}
/**
 * @name MsgDistributeStakingRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewards
 */
export interface MsgDistributeStakingRewards {
  creator: string;
  rewardId: string;
  amount: string;
}
export interface MsgDistributeStakingRewardsProtoMsg {
  typeUrl: "/bze.rewards.MsgDistributeStakingRewards";
  value: Uint8Array;
}
/**
 * @name MsgDistributeStakingRewardsAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewards
 */
export interface MsgDistributeStakingRewardsAmino {
  creator?: string;
  reward_id?: string;
  amount?: string;
}
export interface MsgDistributeStakingRewardsAminoMsg {
  type: "bze/x/rewards/MsgDistributeStakingRewards";
  value: MsgDistributeStakingRewardsAmino;
}
/**
 * @name MsgDistributeStakingRewardsSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewards
 */
export interface MsgDistributeStakingRewardsSDKType {
  creator: string;
  reward_id: string;
  amount: string;
}
/**
 * @name MsgDistributeStakingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewardsResponse
 */
export interface MsgDistributeStakingRewardsResponse {}
export interface MsgDistributeStakingRewardsResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgDistributeStakingRewardsResponse";
  value: Uint8Array;
}
/**
 * @name MsgDistributeStakingRewardsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewardsResponse
 */
export interface MsgDistributeStakingRewardsResponseAmino {}
export interface MsgDistributeStakingRewardsResponseAminoMsg {
  type: "/bze.rewards.MsgDistributeStakingRewardsResponse";
  value: MsgDistributeStakingRewardsResponseAmino;
}
/**
 * @name MsgDistributeStakingRewardsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewardsResponse
 */
export interface MsgDistributeStakingRewardsResponseSDKType {}
/**
 * @name MsgCreateTradingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingReward
 */
export interface MsgCreateTradingReward {
  creator: string;
  prizeAmount: string;
  prizeDenom: string;
  duration: string;
  marketId: string;
  slots: string;
}
export interface MsgCreateTradingRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateTradingReward";
  value: Uint8Array;
}
/**
 * @name MsgCreateTradingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingReward
 */
export interface MsgCreateTradingRewardAmino {
  creator?: string;
  prize_amount?: string;
  prize_denom?: string;
  duration?: string;
  market_id?: string;
  slots?: string;
}
export interface MsgCreateTradingRewardAminoMsg {
  type: "bze/x/rewards/MsgCreateTradingReward";
  value: MsgCreateTradingRewardAmino;
}
/**
 * @name MsgCreateTradingRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingReward
 */
export interface MsgCreateTradingRewardSDKType {
  creator: string;
  prize_amount: string;
  prize_denom: string;
  duration: string;
  market_id: string;
  slots: string;
}
/**
 * @name MsgCreateTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingRewardResponse
 */
export interface MsgCreateTradingRewardResponse {
  rewardId: string;
}
export interface MsgCreateTradingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateTradingRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateTradingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingRewardResponse
 */
export interface MsgCreateTradingRewardResponseAmino {
  reward_id?: string;
}
export interface MsgCreateTradingRewardResponseAminoMsg {
  type: "/bze.rewards.MsgCreateTradingRewardResponse";
  value: MsgCreateTradingRewardResponseAmino;
}
/**
 * @name MsgCreateTradingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingRewardResponse
 */
export interface MsgCreateTradingRewardResponseSDKType {
  reward_id: string;
}
/**
 * @name MsgActivateTradingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingReward
 */
export interface MsgActivateTradingReward {
  creator: string;
  rewardId: string;
}
export interface MsgActivateTradingRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgActivateTradingReward";
  value: Uint8Array;
}
/**
 * @name MsgActivateTradingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingReward
 */
export interface MsgActivateTradingRewardAmino {
  creator?: string;
  reward_id?: string;
}
export interface MsgActivateTradingRewardAminoMsg {
  type: "bze/x/rewards/MsgActivateTradingReward";
  value: MsgActivateTradingRewardAmino;
}
/**
 * @name MsgActivateTradingRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingReward
 */
export interface MsgActivateTradingRewardSDKType {
  creator: string;
  reward_id: string;
}
/**
 * @name MsgActivateTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingRewardResponse
 */
export interface MsgActivateTradingRewardResponse {}
export interface MsgActivateTradingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgActivateTradingRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgActivateTradingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingRewardResponse
 */
export interface MsgActivateTradingRewardResponseAmino {}
export interface MsgActivateTradingRewardResponseAminoMsg {
  type: "/bze.rewards.MsgActivateTradingRewardResponse";
  value: MsgActivateTradingRewardResponseAmino;
}
/**
 * @name MsgActivateTradingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingRewardResponse
 */
export interface MsgActivateTradingRewardResponseSDKType {}
/**
 * MsgDeleteStakingReward - permissionless cleanup of a finished, emptied
 * staking reward record whose deletion was previously suppressed by a hook.
 * @name MsgDeleteStakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingReward
 */
export interface MsgDeleteStakingReward {
  creator: string;
  rewardId: string;
}
export interface MsgDeleteStakingRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgDeleteStakingReward";
  value: Uint8Array;
}
/**
 * MsgDeleteStakingReward - permissionless cleanup of a finished, emptied
 * staking reward record whose deletion was previously suppressed by a hook.
 * @name MsgDeleteStakingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingReward
 */
export interface MsgDeleteStakingRewardAmino {
  creator?: string;
  reward_id?: string;
}
export interface MsgDeleteStakingRewardAminoMsg {
  type: "bze/x/rewards/MsgDeleteStakingReward";
  value: MsgDeleteStakingRewardAmino;
}
/**
 * MsgDeleteStakingReward - permissionless cleanup of a finished, emptied
 * staking reward record whose deletion was previously suppressed by a hook.
 * @name MsgDeleteStakingRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingReward
 */
export interface MsgDeleteStakingRewardSDKType {
  creator: string;
  reward_id: string;
}
/**
 * @name MsgDeleteStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingRewardResponse
 */
export interface MsgDeleteStakingRewardResponse {}
export interface MsgDeleteStakingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgDeleteStakingRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeleteStakingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingRewardResponse
 */
export interface MsgDeleteStakingRewardResponseAmino {}
export interface MsgDeleteStakingRewardResponseAminoMsg {
  type: "/bze.rewards.MsgDeleteStakingRewardResponse";
  value: MsgDeleteStakingRewardResponseAmino;
}
/**
 * @name MsgDeleteStakingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingRewardResponse
 */
export interface MsgDeleteStakingRewardResponseSDKType {}
/**
 * Denom Rewards messages. Service RPCs are added in the handler stories
 * (alongside autocli), mirroring how the module was built so far.
 * @name MsgCreateDenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomReward
 */
export interface MsgCreateDenomReward {
  creator: string;
  denom: string;
}
export interface MsgCreateDenomRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateDenomReward";
  value: Uint8Array;
}
/**
 * Denom Rewards messages. Service RPCs are added in the handler stories
 * (alongside autocli), mirroring how the module was built so far.
 * @name MsgCreateDenomRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomReward
 */
export interface MsgCreateDenomRewardAmino {
  creator?: string;
  denom?: string;
}
export interface MsgCreateDenomRewardAminoMsg {
  type: "bze/x/rewards/MsgCreateDenomReward";
  value: MsgCreateDenomRewardAmino;
}
/**
 * Denom Rewards messages. Service RPCs are added in the handler stories
 * (alongside autocli), mirroring how the module was built so far.
 * @name MsgCreateDenomRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomReward
 */
export interface MsgCreateDenomRewardSDKType {
  creator: string;
  denom: string;
}
/**
 * @name MsgCreateDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardResponse
 */
export interface MsgCreateDenomRewardResponse {}
export interface MsgCreateDenomRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateDenomRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateDenomRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardResponse
 */
export interface MsgCreateDenomRewardResponseAmino {}
export interface MsgCreateDenomRewardResponseAminoMsg {
  type: "/bze.rewards.MsgCreateDenomRewardResponse";
  value: MsgCreateDenomRewardResponseAmino;
}
/**
 * @name MsgCreateDenomRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardResponse
 */
export interface MsgCreateDenomRewardResponseSDKType {}
/**
 * @name MsgJoinDenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomReward
 */
export interface MsgJoinDenomReward {
  creator: string;
  denom: string;
  amount: string;
}
export interface MsgJoinDenomRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgJoinDenomReward";
  value: Uint8Array;
}
/**
 * @name MsgJoinDenomRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomReward
 */
export interface MsgJoinDenomRewardAmino {
  creator?: string;
  denom?: string;
  amount?: string;
}
export interface MsgJoinDenomRewardAminoMsg {
  type: "bze/x/rewards/MsgJoinDenomReward";
  value: MsgJoinDenomRewardAmino;
}
/**
 * @name MsgJoinDenomRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomReward
 */
export interface MsgJoinDenomRewardSDKType {
  creator: string;
  denom: string;
  amount: string;
}
/**
 * @name MsgJoinDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomRewardResponse
 */
export interface MsgJoinDenomRewardResponse {}
export interface MsgJoinDenomRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgJoinDenomRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgJoinDenomRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomRewardResponse
 */
export interface MsgJoinDenomRewardResponseAmino {}
export interface MsgJoinDenomRewardResponseAminoMsg {
  type: "/bze.rewards.MsgJoinDenomRewardResponse";
  value: MsgJoinDenomRewardResponseAmino;
}
/**
 * @name MsgJoinDenomRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomRewardResponse
 */
export interface MsgJoinDenomRewardResponseSDKType {}
/**
 * @name MsgExitDenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomReward
 */
export interface MsgExitDenomReward {
  creator: string;
  denom: string;
}
export interface MsgExitDenomRewardProtoMsg {
  typeUrl: "/bze.rewards.MsgExitDenomReward";
  value: Uint8Array;
}
/**
 * @name MsgExitDenomRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomReward
 */
export interface MsgExitDenomRewardAmino {
  creator?: string;
  denom?: string;
}
export interface MsgExitDenomRewardAminoMsg {
  type: "bze/x/rewards/MsgExitDenomReward";
  value: MsgExitDenomRewardAmino;
}
/**
 * @name MsgExitDenomRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomReward
 */
export interface MsgExitDenomRewardSDKType {
  creator: string;
  denom: string;
}
/**
 * @name MsgExitDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomRewardResponse
 */
export interface MsgExitDenomRewardResponse {}
export interface MsgExitDenomRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgExitDenomRewardResponse";
  value: Uint8Array;
}
/**
 * @name MsgExitDenomRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomRewardResponse
 */
export interface MsgExitDenomRewardResponseAmino {}
export interface MsgExitDenomRewardResponseAminoMsg {
  type: "/bze.rewards.MsgExitDenomRewardResponse";
  value: MsgExitDenomRewardResponseAmino;
}
/**
 * @name MsgExitDenomRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomRewardResponse
 */
export interface MsgExitDenomRewardResponseSDKType {}
/**
 * @name MsgClaimDenomRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewards
 */
export interface MsgClaimDenomRewards {
  creator: string;
  denom: string;
}
export interface MsgClaimDenomRewardsProtoMsg {
  typeUrl: "/bze.rewards.MsgClaimDenomRewards";
  value: Uint8Array;
}
/**
 * @name MsgClaimDenomRewardsAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewards
 */
export interface MsgClaimDenomRewardsAmino {
  creator?: string;
  denom?: string;
}
export interface MsgClaimDenomRewardsAminoMsg {
  type: "bze/x/rewards/MsgClaimDenomRewards";
  value: MsgClaimDenomRewardsAmino;
}
/**
 * @name MsgClaimDenomRewardsSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewards
 */
export interface MsgClaimDenomRewardsSDKType {
  creator: string;
  denom: string;
}
/**
 * @name MsgClaimDenomRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewardsResponse
 */
export interface MsgClaimDenomRewardsResponse {
  amounts: Coin[];
}
export interface MsgClaimDenomRewardsResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgClaimDenomRewardsResponse";
  value: Uint8Array;
}
/**
 * @name MsgClaimDenomRewardsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewardsResponse
 */
export interface MsgClaimDenomRewardsResponseAmino {
  amounts?: CoinAmino[];
}
export interface MsgClaimDenomRewardsResponseAminoMsg {
  type: "/bze.rewards.MsgClaimDenomRewardsResponse";
  value: MsgClaimDenomRewardsResponseAmino;
}
/**
 * @name MsgClaimDenomRewardsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewardsResponse
 */
export interface MsgClaimDenomRewardsResponseSDKType {
  amounts: CoinSDKType[];
}
/**
 * @name MsgCreateDenomRewardSchedule
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardSchedule
 */
export interface MsgCreateDenomRewardSchedule {
  creator: string;
  denom: string;
  prizeDenom: string;
  dailyAmount: string;
  duration: string;
}
export interface MsgCreateDenomRewardScheduleProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateDenomRewardSchedule";
  value: Uint8Array;
}
/**
 * @name MsgCreateDenomRewardScheduleAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardSchedule
 */
export interface MsgCreateDenomRewardScheduleAmino {
  creator?: string;
  denom?: string;
  prize_denom?: string;
  daily_amount?: string;
  duration?: string;
}
export interface MsgCreateDenomRewardScheduleAminoMsg {
  type: "bze/x/rewards/MsgCreateDenomRewardSchedule";
  value: MsgCreateDenomRewardScheduleAmino;
}
/**
 * @name MsgCreateDenomRewardScheduleSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardSchedule
 */
export interface MsgCreateDenomRewardScheduleSDKType {
  creator: string;
  denom: string;
  prize_denom: string;
  daily_amount: string;
  duration: string;
}
/**
 * @name MsgCreateDenomRewardScheduleResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardScheduleResponse
 */
export interface MsgCreateDenomRewardScheduleResponse {
  scheduleId: string;
}
export interface MsgCreateDenomRewardScheduleResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgCreateDenomRewardScheduleResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateDenomRewardScheduleResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardScheduleResponse
 */
export interface MsgCreateDenomRewardScheduleResponseAmino {
  schedule_id?: string;
}
export interface MsgCreateDenomRewardScheduleResponseAminoMsg {
  type: "/bze.rewards.MsgCreateDenomRewardScheduleResponse";
  value: MsgCreateDenomRewardScheduleResponseAmino;
}
/**
 * @name MsgCreateDenomRewardScheduleResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardScheduleResponse
 */
export interface MsgCreateDenomRewardScheduleResponseSDKType {
  schedule_id: string;
}
/**
 * @name MsgUpdateDenomRewardSchedule
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardSchedule
 */
export interface MsgUpdateDenomRewardSchedule {
  creator: string;
  denom: string;
  scheduleId: string;
  duration: string;
}
export interface MsgUpdateDenomRewardScheduleProtoMsg {
  typeUrl: "/bze.rewards.MsgUpdateDenomRewardSchedule";
  value: Uint8Array;
}
/**
 * @name MsgUpdateDenomRewardScheduleAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardSchedule
 */
export interface MsgUpdateDenomRewardScheduleAmino {
  creator?: string;
  denom?: string;
  schedule_id?: string;
  duration?: string;
}
export interface MsgUpdateDenomRewardScheduleAminoMsg {
  type: "bze/x/rewards/MsgUpdateDenomRewardSchedule";
  value: MsgUpdateDenomRewardScheduleAmino;
}
/**
 * @name MsgUpdateDenomRewardScheduleSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardSchedule
 */
export interface MsgUpdateDenomRewardScheduleSDKType {
  creator: string;
  denom: string;
  schedule_id: string;
  duration: string;
}
/**
 * @name MsgUpdateDenomRewardScheduleResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardScheduleResponse
 */
export interface MsgUpdateDenomRewardScheduleResponse {}
export interface MsgUpdateDenomRewardScheduleResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgUpdateDenomRewardScheduleResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateDenomRewardScheduleResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardScheduleResponse
 */
export interface MsgUpdateDenomRewardScheduleResponseAmino {}
export interface MsgUpdateDenomRewardScheduleResponseAminoMsg {
  type: "/bze.rewards.MsgUpdateDenomRewardScheduleResponse";
  value: MsgUpdateDenomRewardScheduleResponseAmino;
}
/**
 * @name MsgUpdateDenomRewardScheduleResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardScheduleResponse
 */
export interface MsgUpdateDenomRewardScheduleResponseSDKType {}
/**
 * @name MsgDistributeDenomRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewards
 */
export interface MsgDistributeDenomRewards {
  creator: string;
  denom: string;
  prizeDenom: string;
  amount: string;
}
export interface MsgDistributeDenomRewardsProtoMsg {
  typeUrl: "/bze.rewards.MsgDistributeDenomRewards";
  value: Uint8Array;
}
/**
 * @name MsgDistributeDenomRewardsAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewards
 */
export interface MsgDistributeDenomRewardsAmino {
  creator?: string;
  denom?: string;
  prize_denom?: string;
  amount?: string;
}
export interface MsgDistributeDenomRewardsAminoMsg {
  type: "bze/x/rewards/MsgDistributeDenomRewards";
  value: MsgDistributeDenomRewardsAmino;
}
/**
 * @name MsgDistributeDenomRewardsSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewards
 */
export interface MsgDistributeDenomRewardsSDKType {
  creator: string;
  denom: string;
  prize_denom: string;
  amount: string;
}
/**
 * @name MsgDistributeDenomRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewardsResponse
 */
export interface MsgDistributeDenomRewardsResponse {}
export interface MsgDistributeDenomRewardsResponseProtoMsg {
  typeUrl: "/bze.rewards.MsgDistributeDenomRewardsResponse";
  value: Uint8Array;
}
/**
 * @name MsgDistributeDenomRewardsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewardsResponse
 */
export interface MsgDistributeDenomRewardsResponseAmino {}
export interface MsgDistributeDenomRewardsResponseAminoMsg {
  type: "/bze.rewards.MsgDistributeDenomRewardsResponse";
  value: MsgDistributeDenomRewardsResponseAmino;
}
/**
 * @name MsgDistributeDenomRewardsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewardsResponse
 */
export interface MsgDistributeDenomRewardsResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/bze.rewards.MsgUpdateParams",
  aminoType: "bze/x/rewards/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "bze/x/rewards/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/bze.rewards.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateStakingReward(): MsgCreateStakingReward {
  return {
    creator: "",
    prizeAmount: "",
    prizeDenom: "",
    stakingDenom: "",
    duration: "",
    minStake: "",
    lock: ""
  };
}
/**
 * @name MsgCreateStakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingReward
 */
export const MsgCreateStakingReward = {
  typeUrl: "/bze.rewards.MsgCreateStakingReward",
  aminoType: "bze/x/rewards/MsgCreateStakingReward",
  is(o: any): o is MsgCreateStakingReward {
    return o && (o.$typeUrl === MsgCreateStakingReward.typeUrl || typeof o.creator === "string" && typeof o.prizeAmount === "string" && typeof o.prizeDenom === "string" && typeof o.stakingDenom === "string" && typeof o.duration === "string" && typeof o.minStake === "string" && typeof o.lock === "string");
  },
  isSDK(o: any): o is MsgCreateStakingRewardSDKType {
    return o && (o.$typeUrl === MsgCreateStakingReward.typeUrl || typeof o.creator === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.staking_denom === "string" && typeof o.duration === "string" && typeof o.min_stake === "string" && typeof o.lock === "string");
  },
  isAmino(o: any): o is MsgCreateStakingRewardAmino {
    return o && (o.$typeUrl === MsgCreateStakingReward.typeUrl || typeof o.creator === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.staking_denom === "string" && typeof o.duration === "string" && typeof o.min_stake === "string" && typeof o.lock === "string");
  },
  encode(message: MsgCreateStakingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prizeAmount !== "") {
      writer.uint32(18).string(message.prizeAmount);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.stakingDenom !== "") {
      writer.uint32(34).string(message.stakingDenom);
    }
    if (message.duration !== "") {
      writer.uint32(42).string(message.duration);
    }
    if (message.minStake !== "") {
      writer.uint32(50).string(message.minStake);
    }
    if (message.lock !== "") {
      writer.uint32(58).string(message.lock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStakingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStakingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.prizeAmount = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.stakingDenom = reader.string();
          break;
        case 5:
          message.duration = reader.string();
          break;
        case 6:
          message.minStake = reader.string();
          break;
        case 7:
          message.lock = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateStakingReward>): MsgCreateStakingReward {
    const message = createBaseMsgCreateStakingReward();
    message.creator = object.creator ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.duration = object.duration ?? "";
    message.minStake = object.minStake ?? "";
    message.lock = object.lock ?? "";
    return message;
  },
  fromAmino(object: MsgCreateStakingRewardAmino): MsgCreateStakingReward {
    const message = createBaseMsgCreateStakingReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.prize_amount !== undefined && object.prize_amount !== null) {
      message.prizeAmount = object.prize_amount;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.staking_denom !== undefined && object.staking_denom !== null) {
      message.stakingDenom = object.staking_denom;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.min_stake !== undefined && object.min_stake !== null) {
      message.minStake = object.min_stake;
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = object.lock;
    }
    return message;
  },
  toAmino(message: MsgCreateStakingReward): MsgCreateStakingRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.duration = message.duration === "" ? undefined : message.duration;
    obj.min_stake = message.minStake === "" ? undefined : message.minStake;
    obj.lock = message.lock === "" ? undefined : message.lock;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStakingRewardAminoMsg): MsgCreateStakingReward {
    return MsgCreateStakingReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateStakingReward): MsgCreateStakingRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgCreateStakingReward",
      value: MsgCreateStakingReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateStakingRewardProtoMsg): MsgCreateStakingReward {
    return MsgCreateStakingReward.decode(message.value);
  },
  toProto(message: MsgCreateStakingReward): Uint8Array {
    return MsgCreateStakingReward.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStakingReward): MsgCreateStakingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateStakingReward",
      value: MsgCreateStakingReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateStakingRewardResponse(): MsgCreateStakingRewardResponse {
  return {
    rewardId: ""
  };
}
/**
 * @name MsgCreateStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateStakingRewardResponse
 */
export const MsgCreateStakingRewardResponse = {
  typeUrl: "/bze.rewards.MsgCreateStakingRewardResponse",
  is(o: any): o is MsgCreateStakingRewardResponse {
    return o && (o.$typeUrl === MsgCreateStakingRewardResponse.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is MsgCreateStakingRewardResponseSDKType {
    return o && (o.$typeUrl === MsgCreateStakingRewardResponse.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is MsgCreateStakingRewardResponseAmino {
    return o && (o.$typeUrl === MsgCreateStakingRewardResponse.typeUrl || typeof o.reward_id === "string");
  },
  encode(message: MsgCreateStakingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStakingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStakingRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateStakingRewardResponse>): MsgCreateStakingRewardResponse {
    const message = createBaseMsgCreateStakingRewardResponse();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateStakingRewardResponseAmino): MsgCreateStakingRewardResponse {
    const message = createBaseMsgCreateStakingRewardResponse();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: MsgCreateStakingRewardResponse): MsgCreateStakingRewardResponseAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStakingRewardResponseAminoMsg): MsgCreateStakingRewardResponse {
    return MsgCreateStakingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStakingRewardResponseProtoMsg): MsgCreateStakingRewardResponse {
    return MsgCreateStakingRewardResponse.decode(message.value);
  },
  toProto(message: MsgCreateStakingRewardResponse): Uint8Array {
    return MsgCreateStakingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStakingRewardResponse): MsgCreateStakingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateStakingRewardResponse",
      value: MsgCreateStakingRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateStakingReward(): MsgUpdateStakingReward {
  return {
    creator: "",
    rewardId: "",
    duration: ""
  };
}
/**
 * @name MsgUpdateStakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingReward
 */
export const MsgUpdateStakingReward = {
  typeUrl: "/bze.rewards.MsgUpdateStakingReward",
  aminoType: "bze/x/rewards/MsgUpdateStakingReward",
  is(o: any): o is MsgUpdateStakingReward {
    return o && (o.$typeUrl === MsgUpdateStakingReward.typeUrl || typeof o.creator === "string" && typeof o.rewardId === "string" && typeof o.duration === "string");
  },
  isSDK(o: any): o is MsgUpdateStakingRewardSDKType {
    return o && (o.$typeUrl === MsgUpdateStakingReward.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string" && typeof o.duration === "string");
  },
  isAmino(o: any): o is MsgUpdateStakingRewardAmino {
    return o && (o.$typeUrl === MsgUpdateStakingReward.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string" && typeof o.duration === "string");
  },
  encode(message: MsgUpdateStakingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStakingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        case 3:
          message.duration = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateStakingReward>): MsgUpdateStakingReward {
    const message = createBaseMsgUpdateStakingReward();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    message.duration = object.duration ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateStakingRewardAmino): MsgUpdateStakingReward {
    const message = createBaseMsgUpdateStakingReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    return message;
  },
  toAmino(message: MsgUpdateStakingReward): MsgUpdateStakingRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.duration = message.duration === "" ? undefined : message.duration;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStakingRewardAminoMsg): MsgUpdateStakingReward {
    return MsgUpdateStakingReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateStakingReward): MsgUpdateStakingRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgUpdateStakingReward",
      value: MsgUpdateStakingReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateStakingRewardProtoMsg): MsgUpdateStakingReward {
    return MsgUpdateStakingReward.decode(message.value);
  },
  toProto(message: MsgUpdateStakingReward): Uint8Array {
    return MsgUpdateStakingReward.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStakingReward): MsgUpdateStakingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgUpdateStakingReward",
      value: MsgUpdateStakingReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateStakingRewardResponse(): MsgUpdateStakingRewardResponse {
  return {};
}
/**
 * @name MsgUpdateStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateStakingRewardResponse
 */
export const MsgUpdateStakingRewardResponse = {
  typeUrl: "/bze.rewards.MsgUpdateStakingRewardResponse",
  is(o: any): o is MsgUpdateStakingRewardResponse {
    return o && o.$typeUrl === MsgUpdateStakingRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateStakingRewardResponseSDKType {
    return o && o.$typeUrl === MsgUpdateStakingRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateStakingRewardResponseAmino {
    return o && o.$typeUrl === MsgUpdateStakingRewardResponse.typeUrl;
  },
  encode(_: MsgUpdateStakingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStakingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateStakingRewardResponse>): MsgUpdateStakingRewardResponse {
    const message = createBaseMsgUpdateStakingRewardResponse();
    return message;
  },
  fromAmino(_: MsgUpdateStakingRewardResponseAmino): MsgUpdateStakingRewardResponse {
    const message = createBaseMsgUpdateStakingRewardResponse();
    return message;
  },
  toAmino(_: MsgUpdateStakingRewardResponse): MsgUpdateStakingRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStakingRewardResponseAminoMsg): MsgUpdateStakingRewardResponse {
    return MsgUpdateStakingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStakingRewardResponseProtoMsg): MsgUpdateStakingRewardResponse {
    return MsgUpdateStakingRewardResponse.decode(message.value);
  },
  toProto(message: MsgUpdateStakingRewardResponse): Uint8Array {
    return MsgUpdateStakingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStakingRewardResponse): MsgUpdateStakingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgUpdateStakingRewardResponse",
      value: MsgUpdateStakingRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgJoinStaking(): MsgJoinStaking {
  return {
    creator: "",
    rewardId: "",
    amount: ""
  };
}
/**
 * @name MsgJoinStaking
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStaking
 */
export const MsgJoinStaking = {
  typeUrl: "/bze.rewards.MsgJoinStaking",
  aminoType: "bze/x/rewards/MsgJoinStaking",
  is(o: any): o is MsgJoinStaking {
    return o && (o.$typeUrl === MsgJoinStaking.typeUrl || typeof o.creator === "string" && typeof o.rewardId === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgJoinStakingSDKType {
    return o && (o.$typeUrl === MsgJoinStaking.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgJoinStakingAmino {
    return o && (o.$typeUrl === MsgJoinStaking.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string" && typeof o.amount === "string");
  },
  encode(message: MsgJoinStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgJoinStaking>): MsgJoinStaking {
    const message = createBaseMsgJoinStaking();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgJoinStakingAmino): MsgJoinStaking {
    const message = createBaseMsgJoinStaking();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgJoinStaking): MsgJoinStakingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinStakingAminoMsg): MsgJoinStaking {
    return MsgJoinStaking.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinStaking): MsgJoinStakingAminoMsg {
    return {
      type: "bze/x/rewards/MsgJoinStaking",
      value: MsgJoinStaking.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinStakingProtoMsg): MsgJoinStaking {
    return MsgJoinStaking.decode(message.value);
  },
  toProto(message: MsgJoinStaking): Uint8Array {
    return MsgJoinStaking.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinStaking): MsgJoinStakingProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgJoinStaking",
      value: MsgJoinStaking.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgJoinStakingResponse(): MsgJoinStakingResponse {
  return {};
}
/**
 * @name MsgJoinStakingResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinStakingResponse
 */
export const MsgJoinStakingResponse = {
  typeUrl: "/bze.rewards.MsgJoinStakingResponse",
  is(o: any): o is MsgJoinStakingResponse {
    return o && o.$typeUrl === MsgJoinStakingResponse.typeUrl;
  },
  isSDK(o: any): o is MsgJoinStakingResponseSDKType {
    return o && o.$typeUrl === MsgJoinStakingResponse.typeUrl;
  },
  isAmino(o: any): o is MsgJoinStakingResponseAmino {
    return o && o.$typeUrl === MsgJoinStakingResponse.typeUrl;
  },
  encode(_: MsgJoinStakingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinStakingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinStakingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgJoinStakingResponse>): MsgJoinStakingResponse {
    const message = createBaseMsgJoinStakingResponse();
    return message;
  },
  fromAmino(_: MsgJoinStakingResponseAmino): MsgJoinStakingResponse {
    const message = createBaseMsgJoinStakingResponse();
    return message;
  },
  toAmino(_: MsgJoinStakingResponse): MsgJoinStakingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgJoinStakingResponseAminoMsg): MsgJoinStakingResponse {
    return MsgJoinStakingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinStakingResponseProtoMsg): MsgJoinStakingResponse {
    return MsgJoinStakingResponse.decode(message.value);
  },
  toProto(message: MsgJoinStakingResponse): Uint8Array {
    return MsgJoinStakingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinStakingResponse): MsgJoinStakingResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgJoinStakingResponse",
      value: MsgJoinStakingResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgExitStaking(): MsgExitStaking {
  return {
    creator: "",
    rewardId: ""
  };
}
/**
 * @name MsgExitStaking
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStaking
 */
export const MsgExitStaking = {
  typeUrl: "/bze.rewards.MsgExitStaking",
  aminoType: "bze/x/rewards/MsgExitStaking",
  is(o: any): o is MsgExitStaking {
    return o && (o.$typeUrl === MsgExitStaking.typeUrl || typeof o.creator === "string" && typeof o.rewardId === "string");
  },
  isSDK(o: any): o is MsgExitStakingSDKType {
    return o && (o.$typeUrl === MsgExitStaking.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  isAmino(o: any): o is MsgExitStakingAmino {
    return o && (o.$typeUrl === MsgExitStaking.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  encode(message: MsgExitStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExitStaking>): MsgExitStaking {
    const message = createBaseMsgExitStaking();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: MsgExitStakingAmino): MsgExitStaking {
    const message = createBaseMsgExitStaking();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: MsgExitStaking): MsgExitStakingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: MsgExitStakingAminoMsg): MsgExitStaking {
    return MsgExitStaking.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitStaking): MsgExitStakingAminoMsg {
    return {
      type: "bze/x/rewards/MsgExitStaking",
      value: MsgExitStaking.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitStakingProtoMsg): MsgExitStaking {
    return MsgExitStaking.decode(message.value);
  },
  toProto(message: MsgExitStaking): Uint8Array {
    return MsgExitStaking.encode(message).finish();
  },
  toProtoMsg(message: MsgExitStaking): MsgExitStakingProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgExitStaking",
      value: MsgExitStaking.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgExitStakingResponse(): MsgExitStakingResponse {
  return {};
}
/**
 * @name MsgExitStakingResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitStakingResponse
 */
export const MsgExitStakingResponse = {
  typeUrl: "/bze.rewards.MsgExitStakingResponse",
  is(o: any): o is MsgExitStakingResponse {
    return o && o.$typeUrl === MsgExitStakingResponse.typeUrl;
  },
  isSDK(o: any): o is MsgExitStakingResponseSDKType {
    return o && o.$typeUrl === MsgExitStakingResponse.typeUrl;
  },
  isAmino(o: any): o is MsgExitStakingResponseAmino {
    return o && o.$typeUrl === MsgExitStakingResponse.typeUrl;
  },
  encode(_: MsgExitStakingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitStakingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitStakingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgExitStakingResponse>): MsgExitStakingResponse {
    const message = createBaseMsgExitStakingResponse();
    return message;
  },
  fromAmino(_: MsgExitStakingResponseAmino): MsgExitStakingResponse {
    const message = createBaseMsgExitStakingResponse();
    return message;
  },
  toAmino(_: MsgExitStakingResponse): MsgExitStakingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExitStakingResponseAminoMsg): MsgExitStakingResponse {
    return MsgExitStakingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitStakingResponseProtoMsg): MsgExitStakingResponse {
    return MsgExitStakingResponse.decode(message.value);
  },
  toProto(message: MsgExitStakingResponse): Uint8Array {
    return MsgExitStakingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitStakingResponse): MsgExitStakingResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgExitStakingResponse",
      value: MsgExitStakingResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimStakingRewards(): MsgClaimStakingRewards {
  return {
    creator: "",
    rewardId: ""
  };
}
/**
 * @name MsgClaimStakingRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewards
 */
export const MsgClaimStakingRewards = {
  typeUrl: "/bze.rewards.MsgClaimStakingRewards",
  aminoType: "bze/x/rewards/MsgClaimStakingRewards",
  is(o: any): o is MsgClaimStakingRewards {
    return o && (o.$typeUrl === MsgClaimStakingRewards.typeUrl || typeof o.creator === "string" && typeof o.rewardId === "string");
  },
  isSDK(o: any): o is MsgClaimStakingRewardsSDKType {
    return o && (o.$typeUrl === MsgClaimStakingRewards.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  isAmino(o: any): o is MsgClaimStakingRewardsAmino {
    return o && (o.$typeUrl === MsgClaimStakingRewards.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  encode(message: MsgClaimStakingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStakingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStakingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimStakingRewards>): MsgClaimStakingRewards {
    const message = createBaseMsgClaimStakingRewards();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: MsgClaimStakingRewardsAmino): MsgClaimStakingRewards {
    const message = createBaseMsgClaimStakingRewards();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: MsgClaimStakingRewards): MsgClaimStakingRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: MsgClaimStakingRewardsAminoMsg): MsgClaimStakingRewards {
    return MsgClaimStakingRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimStakingRewards): MsgClaimStakingRewardsAminoMsg {
    return {
      type: "bze/x/rewards/MsgClaimStakingRewards",
      value: MsgClaimStakingRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimStakingRewardsProtoMsg): MsgClaimStakingRewards {
    return MsgClaimStakingRewards.decode(message.value);
  },
  toProto(message: MsgClaimStakingRewards): Uint8Array {
    return MsgClaimStakingRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStakingRewards): MsgClaimStakingRewardsProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgClaimStakingRewards",
      value: MsgClaimStakingRewards.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimStakingRewardsResponse(): MsgClaimStakingRewardsResponse {
  return {
    amount: ""
  };
}
/**
 * @name MsgClaimStakingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimStakingRewardsResponse
 */
export const MsgClaimStakingRewardsResponse = {
  typeUrl: "/bze.rewards.MsgClaimStakingRewardsResponse",
  is(o: any): o is MsgClaimStakingRewardsResponse {
    return o && (o.$typeUrl === MsgClaimStakingRewardsResponse.typeUrl || typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgClaimStakingRewardsResponseSDKType {
    return o && (o.$typeUrl === MsgClaimStakingRewardsResponse.typeUrl || typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgClaimStakingRewardsResponseAmino {
    return o && (o.$typeUrl === MsgClaimStakingRewardsResponse.typeUrl || typeof o.amount === "string");
  },
  encode(message: MsgClaimStakingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStakingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStakingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimStakingRewardsResponse>): MsgClaimStakingRewardsResponse {
    const message = createBaseMsgClaimStakingRewardsResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgClaimStakingRewardsResponseAmino): MsgClaimStakingRewardsResponse {
    const message = createBaseMsgClaimStakingRewardsResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgClaimStakingRewardsResponse): MsgClaimStakingRewardsResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgClaimStakingRewardsResponseAminoMsg): MsgClaimStakingRewardsResponse {
    return MsgClaimStakingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimStakingRewardsResponseProtoMsg): MsgClaimStakingRewardsResponse {
    return MsgClaimStakingRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimStakingRewardsResponse): Uint8Array {
    return MsgClaimStakingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStakingRewardsResponse): MsgClaimStakingRewardsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgClaimStakingRewardsResponse",
      value: MsgClaimStakingRewardsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDistributeStakingRewards(): MsgDistributeStakingRewards {
  return {
    creator: "",
    rewardId: "",
    amount: ""
  };
}
/**
 * @name MsgDistributeStakingRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewards
 */
export const MsgDistributeStakingRewards = {
  typeUrl: "/bze.rewards.MsgDistributeStakingRewards",
  aminoType: "bze/x/rewards/MsgDistributeStakingRewards",
  is(o: any): o is MsgDistributeStakingRewards {
    return o && (o.$typeUrl === MsgDistributeStakingRewards.typeUrl || typeof o.creator === "string" && typeof o.rewardId === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgDistributeStakingRewardsSDKType {
    return o && (o.$typeUrl === MsgDistributeStakingRewards.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgDistributeStakingRewardsAmino {
    return o && (o.$typeUrl === MsgDistributeStakingRewards.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string" && typeof o.amount === "string");
  },
  encode(message: MsgDistributeStakingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDistributeStakingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeStakingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDistributeStakingRewards>): MsgDistributeStakingRewards {
    const message = createBaseMsgDistributeStakingRewards();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgDistributeStakingRewardsAmino): MsgDistributeStakingRewards {
    const message = createBaseMsgDistributeStakingRewards();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgDistributeStakingRewards): MsgDistributeStakingRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgDistributeStakingRewardsAminoMsg): MsgDistributeStakingRewards {
    return MsgDistributeStakingRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDistributeStakingRewards): MsgDistributeStakingRewardsAminoMsg {
    return {
      type: "bze/x/rewards/MsgDistributeStakingRewards",
      value: MsgDistributeStakingRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDistributeStakingRewardsProtoMsg): MsgDistributeStakingRewards {
    return MsgDistributeStakingRewards.decode(message.value);
  },
  toProto(message: MsgDistributeStakingRewards): Uint8Array {
    return MsgDistributeStakingRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributeStakingRewards): MsgDistributeStakingRewardsProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgDistributeStakingRewards",
      value: MsgDistributeStakingRewards.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDistributeStakingRewardsResponse(): MsgDistributeStakingRewardsResponse {
  return {};
}
/**
 * @name MsgDistributeStakingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeStakingRewardsResponse
 */
export const MsgDistributeStakingRewardsResponse = {
  typeUrl: "/bze.rewards.MsgDistributeStakingRewardsResponse",
  is(o: any): o is MsgDistributeStakingRewardsResponse {
    return o && o.$typeUrl === MsgDistributeStakingRewardsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDistributeStakingRewardsResponseSDKType {
    return o && o.$typeUrl === MsgDistributeStakingRewardsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDistributeStakingRewardsResponseAmino {
    return o && o.$typeUrl === MsgDistributeStakingRewardsResponse.typeUrl;
  },
  encode(_: MsgDistributeStakingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDistributeStakingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeStakingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDistributeStakingRewardsResponse>): MsgDistributeStakingRewardsResponse {
    const message = createBaseMsgDistributeStakingRewardsResponse();
    return message;
  },
  fromAmino(_: MsgDistributeStakingRewardsResponseAmino): MsgDistributeStakingRewardsResponse {
    const message = createBaseMsgDistributeStakingRewardsResponse();
    return message;
  },
  toAmino(_: MsgDistributeStakingRewardsResponse): MsgDistributeStakingRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDistributeStakingRewardsResponseAminoMsg): MsgDistributeStakingRewardsResponse {
    return MsgDistributeStakingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDistributeStakingRewardsResponseProtoMsg): MsgDistributeStakingRewardsResponse {
    return MsgDistributeStakingRewardsResponse.decode(message.value);
  },
  toProto(message: MsgDistributeStakingRewardsResponse): Uint8Array {
    return MsgDistributeStakingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributeStakingRewardsResponse): MsgDistributeStakingRewardsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgDistributeStakingRewardsResponse",
      value: MsgDistributeStakingRewardsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateTradingReward(): MsgCreateTradingReward {
  return {
    creator: "",
    prizeAmount: "",
    prizeDenom: "",
    duration: "",
    marketId: "",
    slots: ""
  };
}
/**
 * @name MsgCreateTradingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingReward
 */
export const MsgCreateTradingReward = {
  typeUrl: "/bze.rewards.MsgCreateTradingReward",
  aminoType: "bze/x/rewards/MsgCreateTradingReward",
  is(o: any): o is MsgCreateTradingReward {
    return o && (o.$typeUrl === MsgCreateTradingReward.typeUrl || typeof o.creator === "string" && typeof o.prizeAmount === "string" && typeof o.prizeDenom === "string" && typeof o.duration === "string" && typeof o.marketId === "string" && typeof o.slots === "string");
  },
  isSDK(o: any): o is MsgCreateTradingRewardSDKType {
    return o && (o.$typeUrl === MsgCreateTradingReward.typeUrl || typeof o.creator === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.duration === "string" && typeof o.market_id === "string" && typeof o.slots === "string");
  },
  isAmino(o: any): o is MsgCreateTradingRewardAmino {
    return o && (o.$typeUrl === MsgCreateTradingReward.typeUrl || typeof o.creator === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.duration === "string" && typeof o.market_id === "string" && typeof o.slots === "string");
  },
  encode(message: MsgCreateTradingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.prizeAmount !== "") {
      writer.uint32(18).string(message.prizeAmount);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.duration !== "") {
      writer.uint32(34).string(message.duration);
    }
    if (message.marketId !== "") {
      writer.uint32(42).string(message.marketId);
    }
    if (message.slots !== "") {
      writer.uint32(50).string(message.slots);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTradingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.prizeAmount = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.duration = reader.string();
          break;
        case 5:
          message.marketId = reader.string();
          break;
        case 6:
          message.slots = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateTradingReward>): MsgCreateTradingReward {
    const message = createBaseMsgCreateTradingReward();
    message.creator = object.creator ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.duration = object.duration ?? "";
    message.marketId = object.marketId ?? "";
    message.slots = object.slots ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTradingRewardAmino): MsgCreateTradingReward {
    const message = createBaseMsgCreateTradingReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.prize_amount !== undefined && object.prize_amount !== null) {
      message.prizeAmount = object.prize_amount;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.slots !== undefined && object.slots !== null) {
      message.slots = object.slots;
    }
    return message;
  },
  toAmino(message: MsgCreateTradingReward): MsgCreateTradingRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.duration = message.duration === "" ? undefined : message.duration;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.slots = message.slots === "" ? undefined : message.slots;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTradingRewardAminoMsg): MsgCreateTradingReward {
    return MsgCreateTradingReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTradingReward): MsgCreateTradingRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgCreateTradingReward",
      value: MsgCreateTradingReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTradingRewardProtoMsg): MsgCreateTradingReward {
    return MsgCreateTradingReward.decode(message.value);
  },
  toProto(message: MsgCreateTradingReward): Uint8Array {
    return MsgCreateTradingReward.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTradingReward): MsgCreateTradingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateTradingReward",
      value: MsgCreateTradingReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateTradingRewardResponse(): MsgCreateTradingRewardResponse {
  return {
    rewardId: ""
  };
}
/**
 * @name MsgCreateTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateTradingRewardResponse
 */
export const MsgCreateTradingRewardResponse = {
  typeUrl: "/bze.rewards.MsgCreateTradingRewardResponse",
  is(o: any): o is MsgCreateTradingRewardResponse {
    return o && (o.$typeUrl === MsgCreateTradingRewardResponse.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is MsgCreateTradingRewardResponseSDKType {
    return o && (o.$typeUrl === MsgCreateTradingRewardResponse.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is MsgCreateTradingRewardResponseAmino {
    return o && (o.$typeUrl === MsgCreateTradingRewardResponse.typeUrl || typeof o.reward_id === "string");
  },
  encode(message: MsgCreateTradingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTradingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradingRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateTradingRewardResponse>): MsgCreateTradingRewardResponse {
    const message = createBaseMsgCreateTradingRewardResponse();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTradingRewardResponseAmino): MsgCreateTradingRewardResponse {
    const message = createBaseMsgCreateTradingRewardResponse();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: MsgCreateTradingRewardResponse): MsgCreateTradingRewardResponseAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTradingRewardResponseAminoMsg): MsgCreateTradingRewardResponse {
    return MsgCreateTradingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTradingRewardResponseProtoMsg): MsgCreateTradingRewardResponse {
    return MsgCreateTradingRewardResponse.decode(message.value);
  },
  toProto(message: MsgCreateTradingRewardResponse): Uint8Array {
    return MsgCreateTradingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTradingRewardResponse): MsgCreateTradingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateTradingRewardResponse",
      value: MsgCreateTradingRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgActivateTradingReward(): MsgActivateTradingReward {
  return {
    creator: "",
    rewardId: ""
  };
}
/**
 * @name MsgActivateTradingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingReward
 */
export const MsgActivateTradingReward = {
  typeUrl: "/bze.rewards.MsgActivateTradingReward",
  aminoType: "bze/x/rewards/MsgActivateTradingReward",
  is(o: any): o is MsgActivateTradingReward {
    return o && (o.$typeUrl === MsgActivateTradingReward.typeUrl || typeof o.creator === "string" && typeof o.rewardId === "string");
  },
  isSDK(o: any): o is MsgActivateTradingRewardSDKType {
    return o && (o.$typeUrl === MsgActivateTradingReward.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  isAmino(o: any): o is MsgActivateTradingRewardAmino {
    return o && (o.$typeUrl === MsgActivateTradingReward.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  encode(message: MsgActivateTradingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateTradingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateTradingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgActivateTradingReward>): MsgActivateTradingReward {
    const message = createBaseMsgActivateTradingReward();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: MsgActivateTradingRewardAmino): MsgActivateTradingReward {
    const message = createBaseMsgActivateTradingReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: MsgActivateTradingReward): MsgActivateTradingRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: MsgActivateTradingRewardAminoMsg): MsgActivateTradingReward {
    return MsgActivateTradingReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgActivateTradingReward): MsgActivateTradingRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgActivateTradingReward",
      value: MsgActivateTradingReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgActivateTradingRewardProtoMsg): MsgActivateTradingReward {
    return MsgActivateTradingReward.decode(message.value);
  },
  toProto(message: MsgActivateTradingReward): Uint8Array {
    return MsgActivateTradingReward.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateTradingReward): MsgActivateTradingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgActivateTradingReward",
      value: MsgActivateTradingReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgActivateTradingRewardResponse(): MsgActivateTradingRewardResponse {
  return {};
}
/**
 * @name MsgActivateTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgActivateTradingRewardResponse
 */
export const MsgActivateTradingRewardResponse = {
  typeUrl: "/bze.rewards.MsgActivateTradingRewardResponse",
  is(o: any): o is MsgActivateTradingRewardResponse {
    return o && o.$typeUrl === MsgActivateTradingRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgActivateTradingRewardResponseSDKType {
    return o && o.$typeUrl === MsgActivateTradingRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgActivateTradingRewardResponseAmino {
    return o && o.$typeUrl === MsgActivateTradingRewardResponse.typeUrl;
  },
  encode(_: MsgActivateTradingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateTradingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateTradingRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgActivateTradingRewardResponse>): MsgActivateTradingRewardResponse {
    const message = createBaseMsgActivateTradingRewardResponse();
    return message;
  },
  fromAmino(_: MsgActivateTradingRewardResponseAmino): MsgActivateTradingRewardResponse {
    const message = createBaseMsgActivateTradingRewardResponse();
    return message;
  },
  toAmino(_: MsgActivateTradingRewardResponse): MsgActivateTradingRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateTradingRewardResponseAminoMsg): MsgActivateTradingRewardResponse {
    return MsgActivateTradingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateTradingRewardResponseProtoMsg): MsgActivateTradingRewardResponse {
    return MsgActivateTradingRewardResponse.decode(message.value);
  },
  toProto(message: MsgActivateTradingRewardResponse): Uint8Array {
    return MsgActivateTradingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateTradingRewardResponse): MsgActivateTradingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgActivateTradingRewardResponse",
      value: MsgActivateTradingRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDeleteStakingReward(): MsgDeleteStakingReward {
  return {
    creator: "",
    rewardId: ""
  };
}
/**
 * MsgDeleteStakingReward - permissionless cleanup of a finished, emptied
 * staking reward record whose deletion was previously suppressed by a hook.
 * @name MsgDeleteStakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingReward
 */
export const MsgDeleteStakingReward = {
  typeUrl: "/bze.rewards.MsgDeleteStakingReward",
  aminoType: "bze/x/rewards/MsgDeleteStakingReward",
  is(o: any): o is MsgDeleteStakingReward {
    return o && (o.$typeUrl === MsgDeleteStakingReward.typeUrl || typeof o.creator === "string" && typeof o.rewardId === "string");
  },
  isSDK(o: any): o is MsgDeleteStakingRewardSDKType {
    return o && (o.$typeUrl === MsgDeleteStakingReward.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  isAmino(o: any): o is MsgDeleteStakingRewardAmino {
    return o && (o.$typeUrl === MsgDeleteStakingReward.typeUrl || typeof o.creator === "string" && typeof o.reward_id === "string");
  },
  encode(message: MsgDeleteStakingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteStakingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteStakingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteStakingReward>): MsgDeleteStakingReward {
    const message = createBaseMsgDeleteStakingReward();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteStakingRewardAmino): MsgDeleteStakingReward {
    const message = createBaseMsgDeleteStakingReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteStakingReward): MsgDeleteStakingRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteStakingRewardAminoMsg): MsgDeleteStakingReward {
    return MsgDeleteStakingReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteStakingReward): MsgDeleteStakingRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgDeleteStakingReward",
      value: MsgDeleteStakingReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteStakingRewardProtoMsg): MsgDeleteStakingReward {
    return MsgDeleteStakingReward.decode(message.value);
  },
  toProto(message: MsgDeleteStakingReward): Uint8Array {
    return MsgDeleteStakingReward.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteStakingReward): MsgDeleteStakingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgDeleteStakingReward",
      value: MsgDeleteStakingReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDeleteStakingRewardResponse(): MsgDeleteStakingRewardResponse {
  return {};
}
/**
 * @name MsgDeleteStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDeleteStakingRewardResponse
 */
export const MsgDeleteStakingRewardResponse = {
  typeUrl: "/bze.rewards.MsgDeleteStakingRewardResponse",
  is(o: any): o is MsgDeleteStakingRewardResponse {
    return o && o.$typeUrl === MsgDeleteStakingRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDeleteStakingRewardResponseSDKType {
    return o && o.$typeUrl === MsgDeleteStakingRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDeleteStakingRewardResponseAmino {
    return o && o.$typeUrl === MsgDeleteStakingRewardResponse.typeUrl;
  },
  encode(_: MsgDeleteStakingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteStakingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteStakingRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDeleteStakingRewardResponse>): MsgDeleteStakingRewardResponse {
    const message = createBaseMsgDeleteStakingRewardResponse();
    return message;
  },
  fromAmino(_: MsgDeleteStakingRewardResponseAmino): MsgDeleteStakingRewardResponse {
    const message = createBaseMsgDeleteStakingRewardResponse();
    return message;
  },
  toAmino(_: MsgDeleteStakingRewardResponse): MsgDeleteStakingRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteStakingRewardResponseAminoMsg): MsgDeleteStakingRewardResponse {
    return MsgDeleteStakingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteStakingRewardResponseProtoMsg): MsgDeleteStakingRewardResponse {
    return MsgDeleteStakingRewardResponse.decode(message.value);
  },
  toProto(message: MsgDeleteStakingRewardResponse): Uint8Array {
    return MsgDeleteStakingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteStakingRewardResponse): MsgDeleteStakingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgDeleteStakingRewardResponse",
      value: MsgDeleteStakingRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDenomReward(): MsgCreateDenomReward {
  return {
    creator: "",
    denom: ""
  };
}
/**
 * Denom Rewards messages. Service RPCs are added in the handler stories
 * (alongside autocli), mirroring how the module was built so far.
 * @name MsgCreateDenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomReward
 */
export const MsgCreateDenomReward = {
  typeUrl: "/bze.rewards.MsgCreateDenomReward",
  aminoType: "bze/x/rewards/MsgCreateDenomReward",
  is(o: any): o is MsgCreateDenomReward {
    return o && (o.$typeUrl === MsgCreateDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgCreateDenomRewardSDKType {
    return o && (o.$typeUrl === MsgCreateDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgCreateDenomRewardAmino {
    return o && (o.$typeUrl === MsgCreateDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgCreateDenomReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenomReward>): MsgCreateDenomReward {
    const message = createBaseMsgCreateDenomReward();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomRewardAmino): MsgCreateDenomReward {
    const message = createBaseMsgCreateDenomReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgCreateDenomReward): MsgCreateDenomRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomRewardAminoMsg): MsgCreateDenomReward {
    return MsgCreateDenomReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDenomReward): MsgCreateDenomRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgCreateDenomReward",
      value: MsgCreateDenomReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDenomRewardProtoMsg): MsgCreateDenomReward {
    return MsgCreateDenomReward.decode(message.value);
  },
  toProto(message: MsgCreateDenomReward): Uint8Array {
    return MsgCreateDenomReward.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomReward): MsgCreateDenomRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateDenomReward",
      value: MsgCreateDenomReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDenomRewardResponse(): MsgCreateDenomRewardResponse {
  return {};
}
/**
 * @name MsgCreateDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardResponse
 */
export const MsgCreateDenomRewardResponse = {
  typeUrl: "/bze.rewards.MsgCreateDenomRewardResponse",
  is(o: any): o is MsgCreateDenomRewardResponse {
    return o && o.$typeUrl === MsgCreateDenomRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateDenomRewardResponseSDKType {
    return o && o.$typeUrl === MsgCreateDenomRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateDenomRewardResponseAmino {
    return o && o.$typeUrl === MsgCreateDenomRewardResponse.typeUrl;
  },
  encode(_: MsgCreateDenomRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCreateDenomRewardResponse>): MsgCreateDenomRewardResponse {
    const message = createBaseMsgCreateDenomRewardResponse();
    return message;
  },
  fromAmino(_: MsgCreateDenomRewardResponseAmino): MsgCreateDenomRewardResponse {
    const message = createBaseMsgCreateDenomRewardResponse();
    return message;
  },
  toAmino(_: MsgCreateDenomRewardResponse): MsgCreateDenomRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomRewardResponseAminoMsg): MsgCreateDenomRewardResponse {
    return MsgCreateDenomRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomRewardResponseProtoMsg): MsgCreateDenomRewardResponse {
    return MsgCreateDenomRewardResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomRewardResponse): Uint8Array {
    return MsgCreateDenomRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomRewardResponse): MsgCreateDenomRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateDenomRewardResponse",
      value: MsgCreateDenomRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgJoinDenomReward(): MsgJoinDenomReward {
  return {
    creator: "",
    denom: "",
    amount: ""
  };
}
/**
 * @name MsgJoinDenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomReward
 */
export const MsgJoinDenomReward = {
  typeUrl: "/bze.rewards.MsgJoinDenomReward",
  aminoType: "bze/x/rewards/MsgJoinDenomReward",
  is(o: any): o is MsgJoinDenomReward {
    return o && (o.$typeUrl === MsgJoinDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgJoinDenomRewardSDKType {
    return o && (o.$typeUrl === MsgJoinDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgJoinDenomRewardAmino {
    return o && (o.$typeUrl === MsgJoinDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.amount === "string");
  },
  encode(message: MsgJoinDenomReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinDenomReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinDenomReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgJoinDenomReward>): MsgJoinDenomReward {
    const message = createBaseMsgJoinDenomReward();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgJoinDenomRewardAmino): MsgJoinDenomReward {
    const message = createBaseMsgJoinDenomReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgJoinDenomReward): MsgJoinDenomRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinDenomRewardAminoMsg): MsgJoinDenomReward {
    return MsgJoinDenomReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinDenomReward): MsgJoinDenomRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgJoinDenomReward",
      value: MsgJoinDenomReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinDenomRewardProtoMsg): MsgJoinDenomReward {
    return MsgJoinDenomReward.decode(message.value);
  },
  toProto(message: MsgJoinDenomReward): Uint8Array {
    return MsgJoinDenomReward.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinDenomReward): MsgJoinDenomRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgJoinDenomReward",
      value: MsgJoinDenomReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgJoinDenomRewardResponse(): MsgJoinDenomRewardResponse {
  return {};
}
/**
 * @name MsgJoinDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgJoinDenomRewardResponse
 */
export const MsgJoinDenomRewardResponse = {
  typeUrl: "/bze.rewards.MsgJoinDenomRewardResponse",
  is(o: any): o is MsgJoinDenomRewardResponse {
    return o && o.$typeUrl === MsgJoinDenomRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgJoinDenomRewardResponseSDKType {
    return o && o.$typeUrl === MsgJoinDenomRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgJoinDenomRewardResponseAmino {
    return o && o.$typeUrl === MsgJoinDenomRewardResponse.typeUrl;
  },
  encode(_: MsgJoinDenomRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinDenomRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinDenomRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgJoinDenomRewardResponse>): MsgJoinDenomRewardResponse {
    const message = createBaseMsgJoinDenomRewardResponse();
    return message;
  },
  fromAmino(_: MsgJoinDenomRewardResponseAmino): MsgJoinDenomRewardResponse {
    const message = createBaseMsgJoinDenomRewardResponse();
    return message;
  },
  toAmino(_: MsgJoinDenomRewardResponse): MsgJoinDenomRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgJoinDenomRewardResponseAminoMsg): MsgJoinDenomRewardResponse {
    return MsgJoinDenomRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinDenomRewardResponseProtoMsg): MsgJoinDenomRewardResponse {
    return MsgJoinDenomRewardResponse.decode(message.value);
  },
  toProto(message: MsgJoinDenomRewardResponse): Uint8Array {
    return MsgJoinDenomRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinDenomRewardResponse): MsgJoinDenomRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgJoinDenomRewardResponse",
      value: MsgJoinDenomRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgExitDenomReward(): MsgExitDenomReward {
  return {
    creator: "",
    denom: ""
  };
}
/**
 * @name MsgExitDenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomReward
 */
export const MsgExitDenomReward = {
  typeUrl: "/bze.rewards.MsgExitDenomReward",
  aminoType: "bze/x/rewards/MsgExitDenomReward",
  is(o: any): o is MsgExitDenomReward {
    return o && (o.$typeUrl === MsgExitDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgExitDenomRewardSDKType {
    return o && (o.$typeUrl === MsgExitDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgExitDenomRewardAmino {
    return o && (o.$typeUrl === MsgExitDenomReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgExitDenomReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitDenomReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitDenomReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExitDenomReward>): MsgExitDenomReward {
    const message = createBaseMsgExitDenomReward();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgExitDenomRewardAmino): MsgExitDenomReward {
    const message = createBaseMsgExitDenomReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgExitDenomReward): MsgExitDenomRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgExitDenomRewardAminoMsg): MsgExitDenomReward {
    return MsgExitDenomReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitDenomReward): MsgExitDenomRewardAminoMsg {
    return {
      type: "bze/x/rewards/MsgExitDenomReward",
      value: MsgExitDenomReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitDenomRewardProtoMsg): MsgExitDenomReward {
    return MsgExitDenomReward.decode(message.value);
  },
  toProto(message: MsgExitDenomReward): Uint8Array {
    return MsgExitDenomReward.encode(message).finish();
  },
  toProtoMsg(message: MsgExitDenomReward): MsgExitDenomRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgExitDenomReward",
      value: MsgExitDenomReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgExitDenomRewardResponse(): MsgExitDenomRewardResponse {
  return {};
}
/**
 * @name MsgExitDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgExitDenomRewardResponse
 */
export const MsgExitDenomRewardResponse = {
  typeUrl: "/bze.rewards.MsgExitDenomRewardResponse",
  is(o: any): o is MsgExitDenomRewardResponse {
    return o && o.$typeUrl === MsgExitDenomRewardResponse.typeUrl;
  },
  isSDK(o: any): o is MsgExitDenomRewardResponseSDKType {
    return o && o.$typeUrl === MsgExitDenomRewardResponse.typeUrl;
  },
  isAmino(o: any): o is MsgExitDenomRewardResponseAmino {
    return o && o.$typeUrl === MsgExitDenomRewardResponse.typeUrl;
  },
  encode(_: MsgExitDenomRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitDenomRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitDenomRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgExitDenomRewardResponse>): MsgExitDenomRewardResponse {
    const message = createBaseMsgExitDenomRewardResponse();
    return message;
  },
  fromAmino(_: MsgExitDenomRewardResponseAmino): MsgExitDenomRewardResponse {
    const message = createBaseMsgExitDenomRewardResponse();
    return message;
  },
  toAmino(_: MsgExitDenomRewardResponse): MsgExitDenomRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExitDenomRewardResponseAminoMsg): MsgExitDenomRewardResponse {
    return MsgExitDenomRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitDenomRewardResponseProtoMsg): MsgExitDenomRewardResponse {
    return MsgExitDenomRewardResponse.decode(message.value);
  },
  toProto(message: MsgExitDenomRewardResponse): Uint8Array {
    return MsgExitDenomRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitDenomRewardResponse): MsgExitDenomRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgExitDenomRewardResponse",
      value: MsgExitDenomRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimDenomRewards(): MsgClaimDenomRewards {
  return {
    creator: "",
    denom: ""
  };
}
/**
 * @name MsgClaimDenomRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewards
 */
export const MsgClaimDenomRewards = {
  typeUrl: "/bze.rewards.MsgClaimDenomRewards",
  aminoType: "bze/x/rewards/MsgClaimDenomRewards",
  is(o: any): o is MsgClaimDenomRewards {
    return o && (o.$typeUrl === MsgClaimDenomRewards.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgClaimDenomRewardsSDKType {
    return o && (o.$typeUrl === MsgClaimDenomRewards.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgClaimDenomRewardsAmino {
    return o && (o.$typeUrl === MsgClaimDenomRewards.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgClaimDenomRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimDenomRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDenomRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimDenomRewards>): MsgClaimDenomRewards {
    const message = createBaseMsgClaimDenomRewards();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgClaimDenomRewardsAmino): MsgClaimDenomRewards {
    const message = createBaseMsgClaimDenomRewards();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgClaimDenomRewards): MsgClaimDenomRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgClaimDenomRewardsAminoMsg): MsgClaimDenomRewards {
    return MsgClaimDenomRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimDenomRewards): MsgClaimDenomRewardsAminoMsg {
    return {
      type: "bze/x/rewards/MsgClaimDenomRewards",
      value: MsgClaimDenomRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimDenomRewardsProtoMsg): MsgClaimDenomRewards {
    return MsgClaimDenomRewards.decode(message.value);
  },
  toProto(message: MsgClaimDenomRewards): Uint8Array {
    return MsgClaimDenomRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDenomRewards): MsgClaimDenomRewardsProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgClaimDenomRewards",
      value: MsgClaimDenomRewards.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimDenomRewardsResponse(): MsgClaimDenomRewardsResponse {
  return {
    amounts: []
  };
}
/**
 * @name MsgClaimDenomRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgClaimDenomRewardsResponse
 */
export const MsgClaimDenomRewardsResponse = {
  typeUrl: "/bze.rewards.MsgClaimDenomRewardsResponse",
  is(o: any): o is MsgClaimDenomRewardsResponse {
    return o && (o.$typeUrl === MsgClaimDenomRewardsResponse.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.is(o.amounts[0])));
  },
  isSDK(o: any): o is MsgClaimDenomRewardsResponseSDKType {
    return o && (o.$typeUrl === MsgClaimDenomRewardsResponse.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.isSDK(o.amounts[0])));
  },
  isAmino(o: any): o is MsgClaimDenomRewardsResponseAmino {
    return o && (o.$typeUrl === MsgClaimDenomRewardsResponse.typeUrl || Array.isArray(o.amounts) && (!o.amounts.length || Coin.isAmino(o.amounts[0])));
  },
  encode(message: MsgClaimDenomRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimDenomRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDenomRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimDenomRewardsResponse>): MsgClaimDenomRewardsResponse {
    const message = createBaseMsgClaimDenomRewardsResponse();
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimDenomRewardsResponseAmino): MsgClaimDenomRewardsResponse {
    const message = createBaseMsgClaimDenomRewardsResponse();
    message.amounts = object.amounts?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimDenomRewardsResponse): MsgClaimDenomRewardsResponseAmino {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts = message.amounts;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimDenomRewardsResponseAminoMsg): MsgClaimDenomRewardsResponse {
    return MsgClaimDenomRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimDenomRewardsResponseProtoMsg): MsgClaimDenomRewardsResponse {
    return MsgClaimDenomRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimDenomRewardsResponse): Uint8Array {
    return MsgClaimDenomRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDenomRewardsResponse): MsgClaimDenomRewardsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgClaimDenomRewardsResponse",
      value: MsgClaimDenomRewardsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgClaimDenomRewardsResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgCreateDenomRewardSchedule(): MsgCreateDenomRewardSchedule {
  return {
    creator: "",
    denom: "",
    prizeDenom: "",
    dailyAmount: "",
    duration: ""
  };
}
/**
 * @name MsgCreateDenomRewardSchedule
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardSchedule
 */
export const MsgCreateDenomRewardSchedule = {
  typeUrl: "/bze.rewards.MsgCreateDenomRewardSchedule",
  aminoType: "bze/x/rewards/MsgCreateDenomRewardSchedule",
  is(o: any): o is MsgCreateDenomRewardSchedule {
    return o && (o.$typeUrl === MsgCreateDenomRewardSchedule.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.prizeDenom === "string" && typeof o.dailyAmount === "string" && typeof o.duration === "string");
  },
  isSDK(o: any): o is MsgCreateDenomRewardScheduleSDKType {
    return o && (o.$typeUrl === MsgCreateDenomRewardSchedule.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.daily_amount === "string" && typeof o.duration === "string");
  },
  isAmino(o: any): o is MsgCreateDenomRewardScheduleAmino {
    return o && (o.$typeUrl === MsgCreateDenomRewardSchedule.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.daily_amount === "string" && typeof o.duration === "string");
  },
  encode(message: MsgCreateDenomRewardSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.dailyAmount !== "") {
      writer.uint32(34).string(message.dailyAmount);
    }
    if (message.duration !== "") {
      writer.uint32(42).string(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomRewardSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomRewardSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.dailyAmount = reader.string();
          break;
        case 5:
          message.duration = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenomRewardSchedule>): MsgCreateDenomRewardSchedule {
    const message = createBaseMsgCreateDenomRewardSchedule();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.dailyAmount = object.dailyAmount ?? "";
    message.duration = object.duration ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomRewardScheduleAmino): MsgCreateDenomRewardSchedule {
    const message = createBaseMsgCreateDenomRewardSchedule();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.daily_amount !== undefined && object.daily_amount !== null) {
      message.dailyAmount = object.daily_amount;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    return message;
  },
  toAmino(message: MsgCreateDenomRewardSchedule): MsgCreateDenomRewardScheduleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.daily_amount = message.dailyAmount === "" ? undefined : message.dailyAmount;
    obj.duration = message.duration === "" ? undefined : message.duration;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomRewardScheduleAminoMsg): MsgCreateDenomRewardSchedule {
    return MsgCreateDenomRewardSchedule.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDenomRewardSchedule): MsgCreateDenomRewardScheduleAminoMsg {
    return {
      type: "bze/x/rewards/MsgCreateDenomRewardSchedule",
      value: MsgCreateDenomRewardSchedule.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDenomRewardScheduleProtoMsg): MsgCreateDenomRewardSchedule {
    return MsgCreateDenomRewardSchedule.decode(message.value);
  },
  toProto(message: MsgCreateDenomRewardSchedule): Uint8Array {
    return MsgCreateDenomRewardSchedule.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomRewardSchedule): MsgCreateDenomRewardScheduleProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateDenomRewardSchedule",
      value: MsgCreateDenomRewardSchedule.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDenomRewardScheduleResponse(): MsgCreateDenomRewardScheduleResponse {
  return {
    scheduleId: ""
  };
}
/**
 * @name MsgCreateDenomRewardScheduleResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgCreateDenomRewardScheduleResponse
 */
export const MsgCreateDenomRewardScheduleResponse = {
  typeUrl: "/bze.rewards.MsgCreateDenomRewardScheduleResponse",
  is(o: any): o is MsgCreateDenomRewardScheduleResponse {
    return o && (o.$typeUrl === MsgCreateDenomRewardScheduleResponse.typeUrl || typeof o.scheduleId === "string");
  },
  isSDK(o: any): o is MsgCreateDenomRewardScheduleResponseSDKType {
    return o && (o.$typeUrl === MsgCreateDenomRewardScheduleResponse.typeUrl || typeof o.schedule_id === "string");
  },
  isAmino(o: any): o is MsgCreateDenomRewardScheduleResponseAmino {
    return o && (o.$typeUrl === MsgCreateDenomRewardScheduleResponse.typeUrl || typeof o.schedule_id === "string");
  },
  encode(message: MsgCreateDenomRewardScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleId !== "") {
      writer.uint32(10).string(message.scheduleId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomRewardScheduleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomRewardScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenomRewardScheduleResponse>): MsgCreateDenomRewardScheduleResponse {
    const message = createBaseMsgCreateDenomRewardScheduleResponse();
    message.scheduleId = object.scheduleId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomRewardScheduleResponseAmino): MsgCreateDenomRewardScheduleResponse {
    const message = createBaseMsgCreateDenomRewardScheduleResponse();
    if (object.schedule_id !== undefined && object.schedule_id !== null) {
      message.scheduleId = object.schedule_id;
    }
    return message;
  },
  toAmino(message: MsgCreateDenomRewardScheduleResponse): MsgCreateDenomRewardScheduleResponseAmino {
    const obj: any = {};
    obj.schedule_id = message.scheduleId === "" ? undefined : message.scheduleId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomRewardScheduleResponseAminoMsg): MsgCreateDenomRewardScheduleResponse {
    return MsgCreateDenomRewardScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomRewardScheduleResponseProtoMsg): MsgCreateDenomRewardScheduleResponse {
    return MsgCreateDenomRewardScheduleResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomRewardScheduleResponse): Uint8Array {
    return MsgCreateDenomRewardScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomRewardScheduleResponse): MsgCreateDenomRewardScheduleResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgCreateDenomRewardScheduleResponse",
      value: MsgCreateDenomRewardScheduleResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateDenomRewardSchedule(): MsgUpdateDenomRewardSchedule {
  return {
    creator: "",
    denom: "",
    scheduleId: "",
    duration: ""
  };
}
/**
 * @name MsgUpdateDenomRewardSchedule
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardSchedule
 */
export const MsgUpdateDenomRewardSchedule = {
  typeUrl: "/bze.rewards.MsgUpdateDenomRewardSchedule",
  aminoType: "bze/x/rewards/MsgUpdateDenomRewardSchedule",
  is(o: any): o is MsgUpdateDenomRewardSchedule {
    return o && (o.$typeUrl === MsgUpdateDenomRewardSchedule.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.scheduleId === "string" && typeof o.duration === "string");
  },
  isSDK(o: any): o is MsgUpdateDenomRewardScheduleSDKType {
    return o && (o.$typeUrl === MsgUpdateDenomRewardSchedule.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.schedule_id === "string" && typeof o.duration === "string");
  },
  isAmino(o: any): o is MsgUpdateDenomRewardScheduleAmino {
    return o && (o.$typeUrl === MsgUpdateDenomRewardSchedule.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.schedule_id === "string" && typeof o.duration === "string");
  },
  encode(message: MsgUpdateDenomRewardSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.scheduleId !== "") {
      writer.uint32(26).string(message.scheduleId);
    }
    if (message.duration !== "") {
      writer.uint32(34).string(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomRewardSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomRewardSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.scheduleId = reader.string();
          break;
        case 4:
          message.duration = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomRewardSchedule>): MsgUpdateDenomRewardSchedule {
    const message = createBaseMsgUpdateDenomRewardSchedule();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.scheduleId = object.scheduleId ?? "";
    message.duration = object.duration ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomRewardScheduleAmino): MsgUpdateDenomRewardSchedule {
    const message = createBaseMsgUpdateDenomRewardSchedule();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.schedule_id !== undefined && object.schedule_id !== null) {
      message.scheduleId = object.schedule_id;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomRewardSchedule): MsgUpdateDenomRewardScheduleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.schedule_id = message.scheduleId === "" ? undefined : message.scheduleId;
    obj.duration = message.duration === "" ? undefined : message.duration;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomRewardScheduleAminoMsg): MsgUpdateDenomRewardSchedule {
    return MsgUpdateDenomRewardSchedule.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateDenomRewardSchedule): MsgUpdateDenomRewardScheduleAminoMsg {
    return {
      type: "bze/x/rewards/MsgUpdateDenomRewardSchedule",
      value: MsgUpdateDenomRewardSchedule.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateDenomRewardScheduleProtoMsg): MsgUpdateDenomRewardSchedule {
    return MsgUpdateDenomRewardSchedule.decode(message.value);
  },
  toProto(message: MsgUpdateDenomRewardSchedule): Uint8Array {
    return MsgUpdateDenomRewardSchedule.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomRewardSchedule): MsgUpdateDenomRewardScheduleProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgUpdateDenomRewardSchedule",
      value: MsgUpdateDenomRewardSchedule.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateDenomRewardScheduleResponse(): MsgUpdateDenomRewardScheduleResponse {
  return {};
}
/**
 * @name MsgUpdateDenomRewardScheduleResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgUpdateDenomRewardScheduleResponse
 */
export const MsgUpdateDenomRewardScheduleResponse = {
  typeUrl: "/bze.rewards.MsgUpdateDenomRewardScheduleResponse",
  is(o: any): o is MsgUpdateDenomRewardScheduleResponse {
    return o && o.$typeUrl === MsgUpdateDenomRewardScheduleResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateDenomRewardScheduleResponseSDKType {
    return o && o.$typeUrl === MsgUpdateDenomRewardScheduleResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateDenomRewardScheduleResponseAmino {
    return o && o.$typeUrl === MsgUpdateDenomRewardScheduleResponse.typeUrl;
  },
  encode(_: MsgUpdateDenomRewardScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomRewardScheduleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomRewardScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateDenomRewardScheduleResponse>): MsgUpdateDenomRewardScheduleResponse {
    const message = createBaseMsgUpdateDenomRewardScheduleResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDenomRewardScheduleResponseAmino): MsgUpdateDenomRewardScheduleResponse {
    const message = createBaseMsgUpdateDenomRewardScheduleResponse();
    return message;
  },
  toAmino(_: MsgUpdateDenomRewardScheduleResponse): MsgUpdateDenomRewardScheduleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomRewardScheduleResponseAminoMsg): MsgUpdateDenomRewardScheduleResponse {
    return MsgUpdateDenomRewardScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomRewardScheduleResponseProtoMsg): MsgUpdateDenomRewardScheduleResponse {
    return MsgUpdateDenomRewardScheduleResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDenomRewardScheduleResponse): Uint8Array {
    return MsgUpdateDenomRewardScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomRewardScheduleResponse): MsgUpdateDenomRewardScheduleResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgUpdateDenomRewardScheduleResponse",
      value: MsgUpdateDenomRewardScheduleResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDistributeDenomRewards(): MsgDistributeDenomRewards {
  return {
    creator: "",
    denom: "",
    prizeDenom: "",
    amount: ""
  };
}
/**
 * @name MsgDistributeDenomRewards
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewards
 */
export const MsgDistributeDenomRewards = {
  typeUrl: "/bze.rewards.MsgDistributeDenomRewards",
  aminoType: "bze/x/rewards/MsgDistributeDenomRewards",
  is(o: any): o is MsgDistributeDenomRewards {
    return o && (o.$typeUrl === MsgDistributeDenomRewards.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.prizeDenom === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgDistributeDenomRewardsSDKType {
    return o && (o.$typeUrl === MsgDistributeDenomRewards.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgDistributeDenomRewardsAmino {
    return o && (o.$typeUrl === MsgDistributeDenomRewards.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.amount === "string");
  },
  encode(message: MsgDistributeDenomRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDistributeDenomRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeDenomRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDistributeDenomRewards>): MsgDistributeDenomRewards {
    const message = createBaseMsgDistributeDenomRewards();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgDistributeDenomRewardsAmino): MsgDistributeDenomRewards {
    const message = createBaseMsgDistributeDenomRewards();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgDistributeDenomRewards): MsgDistributeDenomRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgDistributeDenomRewardsAminoMsg): MsgDistributeDenomRewards {
    return MsgDistributeDenomRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDistributeDenomRewards): MsgDistributeDenomRewardsAminoMsg {
    return {
      type: "bze/x/rewards/MsgDistributeDenomRewards",
      value: MsgDistributeDenomRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDistributeDenomRewardsProtoMsg): MsgDistributeDenomRewards {
    return MsgDistributeDenomRewards.decode(message.value);
  },
  toProto(message: MsgDistributeDenomRewards): Uint8Array {
    return MsgDistributeDenomRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributeDenomRewards): MsgDistributeDenomRewardsProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgDistributeDenomRewards",
      value: MsgDistributeDenomRewards.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDistributeDenomRewardsResponse(): MsgDistributeDenomRewardsResponse {
  return {};
}
/**
 * @name MsgDistributeDenomRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.MsgDistributeDenomRewardsResponse
 */
export const MsgDistributeDenomRewardsResponse = {
  typeUrl: "/bze.rewards.MsgDistributeDenomRewardsResponse",
  is(o: any): o is MsgDistributeDenomRewardsResponse {
    return o && o.$typeUrl === MsgDistributeDenomRewardsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDistributeDenomRewardsResponseSDKType {
    return o && o.$typeUrl === MsgDistributeDenomRewardsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDistributeDenomRewardsResponseAmino {
    return o && o.$typeUrl === MsgDistributeDenomRewardsResponse.typeUrl;
  },
  encode(_: MsgDistributeDenomRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDistributeDenomRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeDenomRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDistributeDenomRewardsResponse>): MsgDistributeDenomRewardsResponse {
    const message = createBaseMsgDistributeDenomRewardsResponse();
    return message;
  },
  fromAmino(_: MsgDistributeDenomRewardsResponseAmino): MsgDistributeDenomRewardsResponse {
    const message = createBaseMsgDistributeDenomRewardsResponse();
    return message;
  },
  toAmino(_: MsgDistributeDenomRewardsResponse): MsgDistributeDenomRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDistributeDenomRewardsResponseAminoMsg): MsgDistributeDenomRewardsResponse {
    return MsgDistributeDenomRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDistributeDenomRewardsResponseProtoMsg): MsgDistributeDenomRewardsResponse {
    return MsgDistributeDenomRewardsResponse.decode(message.value);
  },
  toProto(message: MsgDistributeDenomRewardsResponse): Uint8Array {
    return MsgDistributeDenomRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributeDenomRewardsResponse): MsgDistributeDenomRewardsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.MsgDistributeDenomRewardsResponse",
      value: MsgDistributeDenomRewardsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};