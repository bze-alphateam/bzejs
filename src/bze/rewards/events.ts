//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * @name StakingRewardCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardCreateEvent
 */
export interface StakingRewardCreateEvent {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  stakingDenom: string;
  duration: number;
  minStake: bigint;
  lock: number;
}
export interface StakingRewardCreateEventProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardCreateEvent";
  value: Uint8Array;
}
/**
 * @name StakingRewardCreateEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardCreateEvent
 */
export interface StakingRewardCreateEventAmino {
  reward_id?: string;
  prize_amount?: string;
  prize_denom?: string;
  staking_denom?: string;
  duration?: number;
  min_stake?: string;
  lock?: number;
}
export interface StakingRewardCreateEventAminoMsg {
  type: "/bze.rewards.StakingRewardCreateEvent";
  value: StakingRewardCreateEventAmino;
}
/**
 * @name StakingRewardCreateEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardCreateEvent
 */
export interface StakingRewardCreateEventSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  staking_denom: string;
  duration: number;
  min_stake: bigint;
  lock: number;
}
/**
 * @name StakingRewardUpdateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardUpdateEvent
 */
export interface StakingRewardUpdateEvent {
  rewardId: string;
  duration: number;
}
export interface StakingRewardUpdateEventProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardUpdateEvent";
  value: Uint8Array;
}
/**
 * @name StakingRewardUpdateEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardUpdateEvent
 */
export interface StakingRewardUpdateEventAmino {
  reward_id?: string;
  duration?: number;
}
export interface StakingRewardUpdateEventAminoMsg {
  type: "/bze.rewards.StakingRewardUpdateEvent";
  value: StakingRewardUpdateEventAmino;
}
/**
 * @name StakingRewardUpdateEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardUpdateEvent
 */
export interface StakingRewardUpdateEventSDKType {
  reward_id: string;
  duration: number;
}
/**
 * @name StakingRewardClaimEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardClaimEvent
 */
export interface StakingRewardClaimEvent {
  rewardId: string;
  address: string;
  amount: string;
}
export interface StakingRewardClaimEventProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardClaimEvent";
  value: Uint8Array;
}
/**
 * @name StakingRewardClaimEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardClaimEvent
 */
export interface StakingRewardClaimEventAmino {
  reward_id?: string;
  address?: string;
  amount?: string;
}
export interface StakingRewardClaimEventAminoMsg {
  type: "/bze.rewards.StakingRewardClaimEvent";
  value: StakingRewardClaimEventAmino;
}
/**
 * @name StakingRewardClaimEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardClaimEvent
 */
export interface StakingRewardClaimEventSDKType {
  reward_id: string;
  address: string;
  amount: string;
}
/**
 * @name StakingRewardJoinEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardJoinEvent
 */
export interface StakingRewardJoinEvent {
  rewardId: string;
  address: string;
  amount: string;
}
export interface StakingRewardJoinEventProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardJoinEvent";
  value: Uint8Array;
}
/**
 * @name StakingRewardJoinEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardJoinEvent
 */
export interface StakingRewardJoinEventAmino {
  reward_id?: string;
  address?: string;
  amount?: string;
}
export interface StakingRewardJoinEventAminoMsg {
  type: "/bze.rewards.StakingRewardJoinEvent";
  value: StakingRewardJoinEventAmino;
}
/**
 * @name StakingRewardJoinEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardJoinEvent
 */
export interface StakingRewardJoinEventSDKType {
  reward_id: string;
  address: string;
  amount: string;
}
/**
 * @name StakingRewardExitEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardExitEvent
 */
export interface StakingRewardExitEvent {
  rewardId: string;
  address: string;
}
export interface StakingRewardExitEventProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardExitEvent";
  value: Uint8Array;
}
/**
 * @name StakingRewardExitEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardExitEvent
 */
export interface StakingRewardExitEventAmino {
  reward_id?: string;
  address?: string;
}
export interface StakingRewardExitEventAminoMsg {
  type: "/bze.rewards.StakingRewardExitEvent";
  value: StakingRewardExitEventAmino;
}
/**
 * @name StakingRewardExitEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardExitEvent
 */
export interface StakingRewardExitEventSDKType {
  reward_id: string;
  address: string;
}
/**
 * @name StakingRewardFinishEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardFinishEvent
 */
export interface StakingRewardFinishEvent {
  rewardId: string;
}
export interface StakingRewardFinishEventProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardFinishEvent";
  value: Uint8Array;
}
/**
 * @name StakingRewardFinishEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardFinishEvent
 */
export interface StakingRewardFinishEventAmino {
  reward_id?: string;
}
export interface StakingRewardFinishEventAminoMsg {
  type: "/bze.rewards.StakingRewardFinishEvent";
  value: StakingRewardFinishEventAmino;
}
/**
 * @name StakingRewardFinishEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardFinishEvent
 */
export interface StakingRewardFinishEventSDKType {
  reward_id: string;
}
/**
 * @name StakingRewardDistributionEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardDistributionEvent
 */
export interface StakingRewardDistributionEvent {
  rewardId: string;
  amount: string;
}
export interface StakingRewardDistributionEventProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardDistributionEvent";
  value: Uint8Array;
}
/**
 * @name StakingRewardDistributionEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardDistributionEvent
 */
export interface StakingRewardDistributionEventAmino {
  reward_id?: string;
  amount?: string;
}
export interface StakingRewardDistributionEventAminoMsg {
  type: "/bze.rewards.StakingRewardDistributionEvent";
  value: StakingRewardDistributionEventAmino;
}
/**
 * @name StakingRewardDistributionEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardDistributionEvent
 */
export interface StakingRewardDistributionEventSDKType {
  reward_id: string;
  amount: string;
}
/**
 * @name TradingRewardCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCreateEvent
 */
export interface TradingRewardCreateEvent {
  rewardId: string;
  /**
   * the amount paid as prize for each slot
   */
  prizeAmount: string;
  /**
   * the denom paid as prize
   */
  prizeDenom: string;
  duration: number;
  marketId: string;
  slots: number;
  creator: string;
}
export interface TradingRewardCreateEventProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardCreateEvent";
  value: Uint8Array;
}
/**
 * @name TradingRewardCreateEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCreateEvent
 */
export interface TradingRewardCreateEventAmino {
  reward_id?: string;
  /**
   * the amount paid as prize for each slot
   */
  prize_amount?: string;
  /**
   * the denom paid as prize
   */
  prize_denom?: string;
  duration?: number;
  market_id?: string;
  slots?: number;
  creator?: string;
}
export interface TradingRewardCreateEventAminoMsg {
  type: "/bze.rewards.TradingRewardCreateEvent";
  value: TradingRewardCreateEventAmino;
}
/**
 * @name TradingRewardCreateEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCreateEvent
 */
export interface TradingRewardCreateEventSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  duration: number;
  market_id: string;
  slots: number;
  creator: string;
}
/**
 * @name TradingRewardExpireEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpireEvent
 */
export interface TradingRewardExpireEvent {
  rewardId: string;
}
export interface TradingRewardExpireEventProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardExpireEvent";
  value: Uint8Array;
}
/**
 * @name TradingRewardExpireEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpireEvent
 */
export interface TradingRewardExpireEventAmino {
  reward_id?: string;
}
export interface TradingRewardExpireEventAminoMsg {
  type: "/bze.rewards.TradingRewardExpireEvent";
  value: TradingRewardExpireEventAmino;
}
/**
 * @name TradingRewardExpireEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpireEvent
 */
export interface TradingRewardExpireEventSDKType {
  reward_id: string;
}
/**
 * @name TradingRewardActivationEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardActivationEvent
 */
export interface TradingRewardActivationEvent {
  rewardId: string;
}
export interface TradingRewardActivationEventProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardActivationEvent";
  value: Uint8Array;
}
/**
 * @name TradingRewardActivationEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardActivationEvent
 */
export interface TradingRewardActivationEventAmino {
  reward_id?: string;
}
export interface TradingRewardActivationEventAminoMsg {
  type: "/bze.rewards.TradingRewardActivationEvent";
  value: TradingRewardActivationEventAmino;
}
/**
 * @name TradingRewardActivationEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardActivationEvent
 */
export interface TradingRewardActivationEventSDKType {
  reward_id: string;
}
/**
 * @name TradingRewardDistributionEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardDistributionEvent
 */
export interface TradingRewardDistributionEvent {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  winners: string[];
}
export interface TradingRewardDistributionEventProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardDistributionEvent";
  value: Uint8Array;
}
/**
 * @name TradingRewardDistributionEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardDistributionEvent
 */
export interface TradingRewardDistributionEventAmino {
  reward_id?: string;
  prize_amount?: string;
  prize_denom?: string;
  winners?: string[];
}
export interface TradingRewardDistributionEventAminoMsg {
  type: "/bze.rewards.TradingRewardDistributionEvent";
  value: TradingRewardDistributionEventAmino;
}
/**
 * @name TradingRewardDistributionEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardDistributionEvent
 */
export interface TradingRewardDistributionEventSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  winners: string[];
}
/**
 * @name DenomRewardCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardCreateEvent
 */
export interface DenomRewardCreateEvent {
  denom: string;
}
export interface DenomRewardCreateEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardCreateEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardCreateEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardCreateEvent
 */
export interface DenomRewardCreateEventAmino {
  denom?: string;
}
export interface DenomRewardCreateEventAminoMsg {
  type: "/bze.rewards.DenomRewardCreateEvent";
  value: DenomRewardCreateEventAmino;
}
/**
 * @name DenomRewardCreateEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardCreateEvent
 */
export interface DenomRewardCreateEventSDKType {
  denom: string;
}
/**
 * @name DenomRewardJoinEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardJoinEvent
 */
export interface DenomRewardJoinEvent {
  denom: string;
  address: string;
  amount: string;
}
export interface DenomRewardJoinEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardJoinEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardJoinEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardJoinEvent
 */
export interface DenomRewardJoinEventAmino {
  denom?: string;
  address?: string;
  amount?: string;
}
export interface DenomRewardJoinEventAminoMsg {
  type: "/bze.rewards.DenomRewardJoinEvent";
  value: DenomRewardJoinEventAmino;
}
/**
 * @name DenomRewardJoinEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardJoinEvent
 */
export interface DenomRewardJoinEventSDKType {
  denom: string;
  address: string;
  amount: string;
}
/**
 * @name DenomRewardExitEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardExitEvent
 */
export interface DenomRewardExitEvent {
  denom: string;
  address: string;
  /**
   * the staked amount being withdrawn, in the DR's staking denom
   */
  amount: string;
}
export interface DenomRewardExitEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardExitEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardExitEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardExitEvent
 */
export interface DenomRewardExitEventAmino {
  denom?: string;
  address?: string;
  /**
   * the staked amount being withdrawn, in the DR's staking denom
   */
  amount?: string;
}
export interface DenomRewardExitEventAminoMsg {
  type: "/bze.rewards.DenomRewardExitEvent";
  value: DenomRewardExitEventAmino;
}
/**
 * @name DenomRewardExitEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardExitEvent
 */
export interface DenomRewardExitEventSDKType {
  denom: string;
  address: string;
  amount: string;
}
/**
 * @name DenomRewardClaimEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardClaimEvent
 */
export interface DenomRewardClaimEvent {
  denom: string;
  address: string;
  /**
   * sdk.Coins rendered as string
   */
  amounts: string;
}
export interface DenomRewardClaimEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardClaimEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardClaimEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardClaimEvent
 */
export interface DenomRewardClaimEventAmino {
  denom?: string;
  address?: string;
  /**
   * sdk.Coins rendered as string
   */
  amounts?: string;
}
export interface DenomRewardClaimEventAminoMsg {
  type: "/bze.rewards.DenomRewardClaimEvent";
  value: DenomRewardClaimEventAmino;
}
/**
 * @name DenomRewardClaimEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardClaimEvent
 */
export interface DenomRewardClaimEventSDKType {
  denom: string;
  address: string;
  amounts: string;
}
/**
 * @name DenomRewardPrizeCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrizeCreateEvent
 */
export interface DenomRewardPrizeCreateEvent {
  denom: string;
  prizeDenom: string;
}
export interface DenomRewardPrizeCreateEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardPrizeCreateEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardPrizeCreateEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrizeCreateEvent
 */
export interface DenomRewardPrizeCreateEventAmino {
  denom?: string;
  prize_denom?: string;
}
export interface DenomRewardPrizeCreateEventAminoMsg {
  type: "/bze.rewards.DenomRewardPrizeCreateEvent";
  value: DenomRewardPrizeCreateEventAmino;
}
/**
 * @name DenomRewardPrizeCreateEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrizeCreateEvent
 */
export interface DenomRewardPrizeCreateEventSDKType {
  denom: string;
  prize_denom: string;
}
/**
 * @name DenomRewardScheduleCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleCreateEvent
 */
export interface DenomRewardScheduleCreateEvent {
  scheduleId: string;
  denom: string;
  prizeDenom: string;
  dailyAmount: string;
  duration: number;
}
export interface DenomRewardScheduleCreateEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardScheduleCreateEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardScheduleCreateEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleCreateEvent
 */
export interface DenomRewardScheduleCreateEventAmino {
  schedule_id?: string;
  denom?: string;
  prize_denom?: string;
  daily_amount?: string;
  duration?: number;
}
export interface DenomRewardScheduleCreateEventAminoMsg {
  type: "/bze.rewards.DenomRewardScheduleCreateEvent";
  value: DenomRewardScheduleCreateEventAmino;
}
/**
 * @name DenomRewardScheduleCreateEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleCreateEvent
 */
export interface DenomRewardScheduleCreateEventSDKType {
  schedule_id: string;
  denom: string;
  prize_denom: string;
  daily_amount: string;
  duration: number;
}
/**
 * @name DenomRewardScheduleUpdateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleUpdateEvent
 */
export interface DenomRewardScheduleUpdateEvent {
  scheduleId: string;
  duration: number;
}
export interface DenomRewardScheduleUpdateEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardScheduleUpdateEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardScheduleUpdateEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleUpdateEvent
 */
export interface DenomRewardScheduleUpdateEventAmino {
  schedule_id?: string;
  duration?: number;
}
export interface DenomRewardScheduleUpdateEventAminoMsg {
  type: "/bze.rewards.DenomRewardScheduleUpdateEvent";
  value: DenomRewardScheduleUpdateEventAmino;
}
/**
 * @name DenomRewardScheduleUpdateEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleUpdateEvent
 */
export interface DenomRewardScheduleUpdateEventSDKType {
  schedule_id: string;
  duration: number;
}
/**
 * @name DenomRewardScheduleFinishEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleFinishEvent
 */
export interface DenomRewardScheduleFinishEvent {
  scheduleId: string;
}
export interface DenomRewardScheduleFinishEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardScheduleFinishEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardScheduleFinishEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleFinishEvent
 */
export interface DenomRewardScheduleFinishEventAmino {
  schedule_id?: string;
}
export interface DenomRewardScheduleFinishEventAminoMsg {
  type: "/bze.rewards.DenomRewardScheduleFinishEvent";
  value: DenomRewardScheduleFinishEventAmino;
}
/**
 * @name DenomRewardScheduleFinishEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleFinishEvent
 */
export interface DenomRewardScheduleFinishEventSDKType {
  schedule_id: string;
}
/**
 * @name DenomRewardDistributionEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardDistributionEvent
 */
export interface DenomRewardDistributionEvent {
  denom: string;
  prizeDenom: string;
  amount: string;
}
export interface DenomRewardDistributionEventProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardDistributionEvent";
  value: Uint8Array;
}
/**
 * @name DenomRewardDistributionEventAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardDistributionEvent
 */
export interface DenomRewardDistributionEventAmino {
  denom?: string;
  prize_denom?: string;
  amount?: string;
}
export interface DenomRewardDistributionEventAminoMsg {
  type: "/bze.rewards.DenomRewardDistributionEvent";
  value: DenomRewardDistributionEventAmino;
}
/**
 * @name DenomRewardDistributionEventSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardDistributionEvent
 */
export interface DenomRewardDistributionEventSDKType {
  denom: string;
  prize_denom: string;
  amount: string;
}
function createBaseStakingRewardCreateEvent(): StakingRewardCreateEvent {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    stakingDenom: "",
    duration: 0,
    minStake: BigInt(0),
    lock: 0
  };
}
/**
 * @name StakingRewardCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardCreateEvent
 */
export const StakingRewardCreateEvent = {
  typeUrl: "/bze.rewards.StakingRewardCreateEvent",
  is(o: any): o is StakingRewardCreateEvent {
    return o && (o.$typeUrl === StakingRewardCreateEvent.typeUrl || typeof o.rewardId === "string" && typeof o.prizeAmount === "string" && typeof o.prizeDenom === "string" && typeof o.stakingDenom === "string" && typeof o.duration === "number" && typeof o.minStake === "bigint" && typeof o.lock === "number");
  },
  isSDK(o: any): o is StakingRewardCreateEventSDKType {
    return o && (o.$typeUrl === StakingRewardCreateEvent.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.staking_denom === "string" && typeof o.duration === "number" && typeof o.min_stake === "bigint" && typeof o.lock === "number");
  },
  isAmino(o: any): o is StakingRewardCreateEventAmino {
    return o && (o.$typeUrl === StakingRewardCreateEvent.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.staking_denom === "string" && typeof o.duration === "number" && typeof o.min_stake === "bigint" && typeof o.lock === "number");
  },
  encode(message: StakingRewardCreateEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
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
    if (message.duration !== 0) {
      writer.uint32(40).uint32(message.duration);
    }
    if (message.minStake !== BigInt(0)) {
      writer.uint32(48).uint64(message.minStake);
    }
    if (message.lock !== 0) {
      writer.uint32(56).uint32(message.lock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardCreateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
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
          message.duration = reader.uint32();
          break;
        case 6:
          message.minStake = reader.uint64();
          break;
        case 7:
          message.lock = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRewardCreateEvent>): StakingRewardCreateEvent {
    const message = createBaseStakingRewardCreateEvent();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.duration = object.duration ?? 0;
    message.minStake = object.minStake !== undefined && object.minStake !== null ? BigInt(object.minStake.toString()) : BigInt(0);
    message.lock = object.lock ?? 0;
    return message;
  },
  fromAmino(object: StakingRewardCreateEventAmino): StakingRewardCreateEvent {
    const message = createBaseStakingRewardCreateEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
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
      message.minStake = BigInt(object.min_stake);
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = object.lock;
    }
    return message;
  },
  toAmino(message: StakingRewardCreateEvent): StakingRewardCreateEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.min_stake = message.minStake !== BigInt(0) ? message.minStake?.toString() : undefined;
    obj.lock = message.lock === 0 ? undefined : message.lock;
    return obj;
  },
  fromAminoMsg(object: StakingRewardCreateEventAminoMsg): StakingRewardCreateEvent {
    return StakingRewardCreateEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardCreateEventProtoMsg): StakingRewardCreateEvent {
    return StakingRewardCreateEvent.decode(message.value);
  },
  toProto(message: StakingRewardCreateEvent): Uint8Array {
    return StakingRewardCreateEvent.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardCreateEvent): StakingRewardCreateEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardCreateEvent",
      value: StakingRewardCreateEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardUpdateEvent(): StakingRewardUpdateEvent {
  return {
    rewardId: "",
    duration: 0
  };
}
/**
 * @name StakingRewardUpdateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardUpdateEvent
 */
export const StakingRewardUpdateEvent = {
  typeUrl: "/bze.rewards.StakingRewardUpdateEvent",
  is(o: any): o is StakingRewardUpdateEvent {
    return o && (o.$typeUrl === StakingRewardUpdateEvent.typeUrl || typeof o.rewardId === "string" && typeof o.duration === "number");
  },
  isSDK(o: any): o is StakingRewardUpdateEventSDKType {
    return o && (o.$typeUrl === StakingRewardUpdateEvent.typeUrl || typeof o.reward_id === "string" && typeof o.duration === "number");
  },
  isAmino(o: any): o is StakingRewardUpdateEventAmino {
    return o && (o.$typeUrl === StakingRewardUpdateEvent.typeUrl || typeof o.reward_id === "string" && typeof o.duration === "number");
  },
  encode(message: StakingRewardUpdateEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardUpdateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.duration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRewardUpdateEvent>): StakingRewardUpdateEvent {
    const message = createBaseStakingRewardUpdateEvent();
    message.rewardId = object.rewardId ?? "";
    message.duration = object.duration ?? 0;
    return message;
  },
  fromAmino(object: StakingRewardUpdateEventAmino): StakingRewardUpdateEvent {
    const message = createBaseStakingRewardUpdateEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    return message;
  },
  toAmino(message: StakingRewardUpdateEvent): StakingRewardUpdateEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    return obj;
  },
  fromAminoMsg(object: StakingRewardUpdateEventAminoMsg): StakingRewardUpdateEvent {
    return StakingRewardUpdateEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardUpdateEventProtoMsg): StakingRewardUpdateEvent {
    return StakingRewardUpdateEvent.decode(message.value);
  },
  toProto(message: StakingRewardUpdateEvent): Uint8Array {
    return StakingRewardUpdateEvent.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardUpdateEvent): StakingRewardUpdateEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardUpdateEvent",
      value: StakingRewardUpdateEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardClaimEvent(): StakingRewardClaimEvent {
  return {
    rewardId: "",
    address: "",
    amount: ""
  };
}
/**
 * @name StakingRewardClaimEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardClaimEvent
 */
export const StakingRewardClaimEvent = {
  typeUrl: "/bze.rewards.StakingRewardClaimEvent",
  is(o: any): o is StakingRewardClaimEvent {
    return o && (o.$typeUrl === StakingRewardClaimEvent.typeUrl || typeof o.rewardId === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is StakingRewardClaimEventSDKType {
    return o && (o.$typeUrl === StakingRewardClaimEvent.typeUrl || typeof o.reward_id === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is StakingRewardClaimEventAmino {
    return o && (o.$typeUrl === StakingRewardClaimEvent.typeUrl || typeof o.reward_id === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: StakingRewardClaimEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardClaimEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardClaimEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.address = reader.string();
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
  fromPartial(object: Partial<StakingRewardClaimEvent>): StakingRewardClaimEvent {
    const message = createBaseStakingRewardClaimEvent();
    message.rewardId = object.rewardId ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: StakingRewardClaimEventAmino): StakingRewardClaimEvent {
    const message = createBaseStakingRewardClaimEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: StakingRewardClaimEvent): StakingRewardClaimEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: StakingRewardClaimEventAminoMsg): StakingRewardClaimEvent {
    return StakingRewardClaimEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardClaimEventProtoMsg): StakingRewardClaimEvent {
    return StakingRewardClaimEvent.decode(message.value);
  },
  toProto(message: StakingRewardClaimEvent): Uint8Array {
    return StakingRewardClaimEvent.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardClaimEvent): StakingRewardClaimEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardClaimEvent",
      value: StakingRewardClaimEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardJoinEvent(): StakingRewardJoinEvent {
  return {
    rewardId: "",
    address: "",
    amount: ""
  };
}
/**
 * @name StakingRewardJoinEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardJoinEvent
 */
export const StakingRewardJoinEvent = {
  typeUrl: "/bze.rewards.StakingRewardJoinEvent",
  is(o: any): o is StakingRewardJoinEvent {
    return o && (o.$typeUrl === StakingRewardJoinEvent.typeUrl || typeof o.rewardId === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is StakingRewardJoinEventSDKType {
    return o && (o.$typeUrl === StakingRewardJoinEvent.typeUrl || typeof o.reward_id === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is StakingRewardJoinEventAmino {
    return o && (o.$typeUrl === StakingRewardJoinEvent.typeUrl || typeof o.reward_id === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: StakingRewardJoinEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardJoinEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardJoinEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.address = reader.string();
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
  fromPartial(object: Partial<StakingRewardJoinEvent>): StakingRewardJoinEvent {
    const message = createBaseStakingRewardJoinEvent();
    message.rewardId = object.rewardId ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: StakingRewardJoinEventAmino): StakingRewardJoinEvent {
    const message = createBaseStakingRewardJoinEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: StakingRewardJoinEvent): StakingRewardJoinEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: StakingRewardJoinEventAminoMsg): StakingRewardJoinEvent {
    return StakingRewardJoinEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardJoinEventProtoMsg): StakingRewardJoinEvent {
    return StakingRewardJoinEvent.decode(message.value);
  },
  toProto(message: StakingRewardJoinEvent): Uint8Array {
    return StakingRewardJoinEvent.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardJoinEvent): StakingRewardJoinEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardJoinEvent",
      value: StakingRewardJoinEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardExitEvent(): StakingRewardExitEvent {
  return {
    rewardId: "",
    address: ""
  };
}
/**
 * @name StakingRewardExitEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardExitEvent
 */
export const StakingRewardExitEvent = {
  typeUrl: "/bze.rewards.StakingRewardExitEvent",
  is(o: any): o is StakingRewardExitEvent {
    return o && (o.$typeUrl === StakingRewardExitEvent.typeUrl || typeof o.rewardId === "string" && typeof o.address === "string");
  },
  isSDK(o: any): o is StakingRewardExitEventSDKType {
    return o && (o.$typeUrl === StakingRewardExitEvent.typeUrl || typeof o.reward_id === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is StakingRewardExitEventAmino {
    return o && (o.$typeUrl === StakingRewardExitEvent.typeUrl || typeof o.reward_id === "string" && typeof o.address === "string");
  },
  encode(message: StakingRewardExitEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardExitEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardExitEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRewardExitEvent>): StakingRewardExitEvent {
    const message = createBaseStakingRewardExitEvent();
    message.rewardId = object.rewardId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: StakingRewardExitEventAmino): StakingRewardExitEvent {
    const message = createBaseStakingRewardExitEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: StakingRewardExitEvent): StakingRewardExitEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: StakingRewardExitEventAminoMsg): StakingRewardExitEvent {
    return StakingRewardExitEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardExitEventProtoMsg): StakingRewardExitEvent {
    return StakingRewardExitEvent.decode(message.value);
  },
  toProto(message: StakingRewardExitEvent): Uint8Array {
    return StakingRewardExitEvent.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardExitEvent): StakingRewardExitEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardExitEvent",
      value: StakingRewardExitEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardFinishEvent(): StakingRewardFinishEvent {
  return {
    rewardId: ""
  };
}
/**
 * @name StakingRewardFinishEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardFinishEvent
 */
export const StakingRewardFinishEvent = {
  typeUrl: "/bze.rewards.StakingRewardFinishEvent",
  is(o: any): o is StakingRewardFinishEvent {
    return o && (o.$typeUrl === StakingRewardFinishEvent.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is StakingRewardFinishEventSDKType {
    return o && (o.$typeUrl === StakingRewardFinishEvent.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is StakingRewardFinishEventAmino {
    return o && (o.$typeUrl === StakingRewardFinishEvent.typeUrl || typeof o.reward_id === "string");
  },
  encode(message: StakingRewardFinishEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardFinishEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardFinishEvent();
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
  fromPartial(object: Partial<StakingRewardFinishEvent>): StakingRewardFinishEvent {
    const message = createBaseStakingRewardFinishEvent();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: StakingRewardFinishEventAmino): StakingRewardFinishEvent {
    const message = createBaseStakingRewardFinishEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: StakingRewardFinishEvent): StakingRewardFinishEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: StakingRewardFinishEventAminoMsg): StakingRewardFinishEvent {
    return StakingRewardFinishEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardFinishEventProtoMsg): StakingRewardFinishEvent {
    return StakingRewardFinishEvent.decode(message.value);
  },
  toProto(message: StakingRewardFinishEvent): Uint8Array {
    return StakingRewardFinishEvent.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardFinishEvent): StakingRewardFinishEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardFinishEvent",
      value: StakingRewardFinishEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardDistributionEvent(): StakingRewardDistributionEvent {
  return {
    rewardId: "",
    amount: ""
  };
}
/**
 * @name StakingRewardDistributionEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardDistributionEvent
 */
export const StakingRewardDistributionEvent = {
  typeUrl: "/bze.rewards.StakingRewardDistributionEvent",
  is(o: any): o is StakingRewardDistributionEvent {
    return o && (o.$typeUrl === StakingRewardDistributionEvent.typeUrl || typeof o.rewardId === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is StakingRewardDistributionEventSDKType {
    return o && (o.$typeUrl === StakingRewardDistributionEvent.typeUrl || typeof o.reward_id === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is StakingRewardDistributionEventAmino {
    return o && (o.$typeUrl === StakingRewardDistributionEvent.typeUrl || typeof o.reward_id === "string" && typeof o.amount === "string");
  },
  encode(message: StakingRewardDistributionEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardDistributionEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardDistributionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRewardDistributionEvent>): StakingRewardDistributionEvent {
    const message = createBaseStakingRewardDistributionEvent();
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: StakingRewardDistributionEventAmino): StakingRewardDistributionEvent {
    const message = createBaseStakingRewardDistributionEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: StakingRewardDistributionEvent): StakingRewardDistributionEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: StakingRewardDistributionEventAminoMsg): StakingRewardDistributionEvent {
    return StakingRewardDistributionEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardDistributionEventProtoMsg): StakingRewardDistributionEvent {
    return StakingRewardDistributionEvent.decode(message.value);
  },
  toProto(message: StakingRewardDistributionEvent): Uint8Array {
    return StakingRewardDistributionEvent.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardDistributionEvent): StakingRewardDistributionEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardDistributionEvent",
      value: StakingRewardDistributionEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardCreateEvent(): TradingRewardCreateEvent {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    duration: 0,
    marketId: "",
    slots: 0,
    creator: ""
  };
}
/**
 * @name TradingRewardCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCreateEvent
 */
export const TradingRewardCreateEvent = {
  typeUrl: "/bze.rewards.TradingRewardCreateEvent",
  is(o: any): o is TradingRewardCreateEvent {
    return o && (o.$typeUrl === TradingRewardCreateEvent.typeUrl || typeof o.rewardId === "string" && typeof o.prizeAmount === "string" && typeof o.prizeDenom === "string" && typeof o.duration === "number" && typeof o.marketId === "string" && typeof o.slots === "number" && typeof o.creator === "string");
  },
  isSDK(o: any): o is TradingRewardCreateEventSDKType {
    return o && (o.$typeUrl === TradingRewardCreateEvent.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.duration === "number" && typeof o.market_id === "string" && typeof o.slots === "number" && typeof o.creator === "string");
  },
  isAmino(o: any): o is TradingRewardCreateEventAmino {
    return o && (o.$typeUrl === TradingRewardCreateEvent.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.duration === "number" && typeof o.market_id === "string" && typeof o.slots === "number" && typeof o.creator === "string");
  },
  encode(message: TradingRewardCreateEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.prizeAmount !== "") {
      writer.uint32(18).string(message.prizeAmount);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint32(message.duration);
    }
    if (message.marketId !== "") {
      writer.uint32(42).string(message.marketId);
    }
    if (message.slots !== 0) {
      writer.uint32(48).uint32(message.slots);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCreateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.prizeAmount = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.duration = reader.uint32();
          break;
        case 5:
          message.marketId = reader.string();
          break;
        case 6:
          message.slots = reader.uint32();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardCreateEvent>): TradingRewardCreateEvent {
    const message = createBaseTradingRewardCreateEvent();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.duration = object.duration ?? 0;
    message.marketId = object.marketId ?? "";
    message.slots = object.slots ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: TradingRewardCreateEventAmino): TradingRewardCreateEvent {
    const message = createBaseTradingRewardCreateEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: TradingRewardCreateEvent): TradingRewardCreateEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.slots = message.slots === 0 ? undefined : message.slots;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: TradingRewardCreateEventAminoMsg): TradingRewardCreateEvent {
    return TradingRewardCreateEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCreateEventProtoMsg): TradingRewardCreateEvent {
    return TradingRewardCreateEvent.decode(message.value);
  },
  toProto(message: TradingRewardCreateEvent): Uint8Array {
    return TradingRewardCreateEvent.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCreateEvent): TradingRewardCreateEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardCreateEvent",
      value: TradingRewardCreateEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardExpireEvent(): TradingRewardExpireEvent {
  return {
    rewardId: ""
  };
}
/**
 * @name TradingRewardExpireEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpireEvent
 */
export const TradingRewardExpireEvent = {
  typeUrl: "/bze.rewards.TradingRewardExpireEvent",
  is(o: any): o is TradingRewardExpireEvent {
    return o && (o.$typeUrl === TradingRewardExpireEvent.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is TradingRewardExpireEventSDKType {
    return o && (o.$typeUrl === TradingRewardExpireEvent.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is TradingRewardExpireEventAmino {
    return o && (o.$typeUrl === TradingRewardExpireEvent.typeUrl || typeof o.reward_id === "string");
  },
  encode(message: TradingRewardExpireEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardExpireEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardExpireEvent();
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
  fromPartial(object: Partial<TradingRewardExpireEvent>): TradingRewardExpireEvent {
    const message = createBaseTradingRewardExpireEvent();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: TradingRewardExpireEventAmino): TradingRewardExpireEvent {
    const message = createBaseTradingRewardExpireEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: TradingRewardExpireEvent): TradingRewardExpireEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: TradingRewardExpireEventAminoMsg): TradingRewardExpireEvent {
    return TradingRewardExpireEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardExpireEventProtoMsg): TradingRewardExpireEvent {
    return TradingRewardExpireEvent.decode(message.value);
  },
  toProto(message: TradingRewardExpireEvent): Uint8Array {
    return TradingRewardExpireEvent.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardExpireEvent): TradingRewardExpireEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardExpireEvent",
      value: TradingRewardExpireEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardActivationEvent(): TradingRewardActivationEvent {
  return {
    rewardId: ""
  };
}
/**
 * @name TradingRewardActivationEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardActivationEvent
 */
export const TradingRewardActivationEvent = {
  typeUrl: "/bze.rewards.TradingRewardActivationEvent",
  is(o: any): o is TradingRewardActivationEvent {
    return o && (o.$typeUrl === TradingRewardActivationEvent.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is TradingRewardActivationEventSDKType {
    return o && (o.$typeUrl === TradingRewardActivationEvent.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is TradingRewardActivationEventAmino {
    return o && (o.$typeUrl === TradingRewardActivationEvent.typeUrl || typeof o.reward_id === "string");
  },
  encode(message: TradingRewardActivationEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardActivationEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardActivationEvent();
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
  fromPartial(object: Partial<TradingRewardActivationEvent>): TradingRewardActivationEvent {
    const message = createBaseTradingRewardActivationEvent();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: TradingRewardActivationEventAmino): TradingRewardActivationEvent {
    const message = createBaseTradingRewardActivationEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: TradingRewardActivationEvent): TradingRewardActivationEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: TradingRewardActivationEventAminoMsg): TradingRewardActivationEvent {
    return TradingRewardActivationEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardActivationEventProtoMsg): TradingRewardActivationEvent {
    return TradingRewardActivationEvent.decode(message.value);
  },
  toProto(message: TradingRewardActivationEvent): Uint8Array {
    return TradingRewardActivationEvent.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardActivationEvent): TradingRewardActivationEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardActivationEvent",
      value: TradingRewardActivationEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardDistributionEvent(): TradingRewardDistributionEvent {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    winners: []
  };
}
/**
 * @name TradingRewardDistributionEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardDistributionEvent
 */
export const TradingRewardDistributionEvent = {
  typeUrl: "/bze.rewards.TradingRewardDistributionEvent",
  is(o: any): o is TradingRewardDistributionEvent {
    return o && (o.$typeUrl === TradingRewardDistributionEvent.typeUrl || typeof o.rewardId === "string" && typeof o.prizeAmount === "string" && typeof o.prizeDenom === "string" && Array.isArray(o.winners) && (!o.winners.length || typeof o.winners[0] === "string"));
  },
  isSDK(o: any): o is TradingRewardDistributionEventSDKType {
    return o && (o.$typeUrl === TradingRewardDistributionEvent.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && Array.isArray(o.winners) && (!o.winners.length || typeof o.winners[0] === "string"));
  },
  isAmino(o: any): o is TradingRewardDistributionEventAmino {
    return o && (o.$typeUrl === TradingRewardDistributionEvent.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && Array.isArray(o.winners) && (!o.winners.length || typeof o.winners[0] === "string"));
  },
  encode(message: TradingRewardDistributionEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.prizeAmount !== "") {
      writer.uint32(18).string(message.prizeAmount);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    for (const v of message.winners) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardDistributionEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardDistributionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.prizeAmount = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.winners.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardDistributionEvent>): TradingRewardDistributionEvent {
    const message = createBaseTradingRewardDistributionEvent();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.winners = object.winners?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TradingRewardDistributionEventAmino): TradingRewardDistributionEvent {
    const message = createBaseTradingRewardDistributionEvent();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.prize_amount !== undefined && object.prize_amount !== null) {
      message.prizeAmount = object.prize_amount;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    message.winners = object.winners?.map(e => e) || [];
    return message;
  },
  toAmino(message: TradingRewardDistributionEvent): TradingRewardDistributionEventAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    if (message.winners) {
      obj.winners = message.winners.map(e => e);
    } else {
      obj.winners = message.winners;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardDistributionEventAminoMsg): TradingRewardDistributionEvent {
    return TradingRewardDistributionEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardDistributionEventProtoMsg): TradingRewardDistributionEvent {
    return TradingRewardDistributionEvent.decode(message.value);
  },
  toProto(message: TradingRewardDistributionEvent): Uint8Array {
    return TradingRewardDistributionEvent.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardDistributionEvent): TradingRewardDistributionEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardDistributionEvent",
      value: TradingRewardDistributionEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardCreateEvent(): DenomRewardCreateEvent {
  return {
    denom: ""
  };
}
/**
 * @name DenomRewardCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardCreateEvent
 */
export const DenomRewardCreateEvent = {
  typeUrl: "/bze.rewards.DenomRewardCreateEvent",
  is(o: any): o is DenomRewardCreateEvent {
    return o && (o.$typeUrl === DenomRewardCreateEvent.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomRewardCreateEventSDKType {
    return o && (o.$typeUrl === DenomRewardCreateEvent.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomRewardCreateEventAmino {
    return o && (o.$typeUrl === DenomRewardCreateEvent.typeUrl || typeof o.denom === "string");
  },
  encode(message: DenomRewardCreateEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardCreateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardCreateEvent>): DenomRewardCreateEvent {
    const message = createBaseDenomRewardCreateEvent();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomRewardCreateEventAmino): DenomRewardCreateEvent {
    const message = createBaseDenomRewardCreateEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomRewardCreateEvent): DenomRewardCreateEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomRewardCreateEventAminoMsg): DenomRewardCreateEvent {
    return DenomRewardCreateEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardCreateEventProtoMsg): DenomRewardCreateEvent {
    return DenomRewardCreateEvent.decode(message.value);
  },
  toProto(message: DenomRewardCreateEvent): Uint8Array {
    return DenomRewardCreateEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardCreateEvent): DenomRewardCreateEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardCreateEvent",
      value: DenomRewardCreateEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardJoinEvent(): DenomRewardJoinEvent {
  return {
    denom: "",
    address: "",
    amount: ""
  };
}
/**
 * @name DenomRewardJoinEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardJoinEvent
 */
export const DenomRewardJoinEvent = {
  typeUrl: "/bze.rewards.DenomRewardJoinEvent",
  is(o: any): o is DenomRewardJoinEvent {
    return o && (o.$typeUrl === DenomRewardJoinEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is DenomRewardJoinEventSDKType {
    return o && (o.$typeUrl === DenomRewardJoinEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is DenomRewardJoinEventAmino {
    return o && (o.$typeUrl === DenomRewardJoinEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: DenomRewardJoinEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardJoinEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardJoinEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
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
  fromPartial(object: Partial<DenomRewardJoinEvent>): DenomRewardJoinEvent {
    const message = createBaseDenomRewardJoinEvent();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DenomRewardJoinEventAmino): DenomRewardJoinEvent {
    const message = createBaseDenomRewardJoinEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DenomRewardJoinEvent): DenomRewardJoinEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DenomRewardJoinEventAminoMsg): DenomRewardJoinEvent {
    return DenomRewardJoinEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardJoinEventProtoMsg): DenomRewardJoinEvent {
    return DenomRewardJoinEvent.decode(message.value);
  },
  toProto(message: DenomRewardJoinEvent): Uint8Array {
    return DenomRewardJoinEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardJoinEvent): DenomRewardJoinEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardJoinEvent",
      value: DenomRewardJoinEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardExitEvent(): DenomRewardExitEvent {
  return {
    denom: "",
    address: "",
    amount: ""
  };
}
/**
 * @name DenomRewardExitEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardExitEvent
 */
export const DenomRewardExitEvent = {
  typeUrl: "/bze.rewards.DenomRewardExitEvent",
  is(o: any): o is DenomRewardExitEvent {
    return o && (o.$typeUrl === DenomRewardExitEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is DenomRewardExitEventSDKType {
    return o && (o.$typeUrl === DenomRewardExitEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is DenomRewardExitEventAmino {
    return o && (o.$typeUrl === DenomRewardExitEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: DenomRewardExitEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardExitEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardExitEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
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
  fromPartial(object: Partial<DenomRewardExitEvent>): DenomRewardExitEvent {
    const message = createBaseDenomRewardExitEvent();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DenomRewardExitEventAmino): DenomRewardExitEvent {
    const message = createBaseDenomRewardExitEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DenomRewardExitEvent): DenomRewardExitEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DenomRewardExitEventAminoMsg): DenomRewardExitEvent {
    return DenomRewardExitEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardExitEventProtoMsg): DenomRewardExitEvent {
    return DenomRewardExitEvent.decode(message.value);
  },
  toProto(message: DenomRewardExitEvent): Uint8Array {
    return DenomRewardExitEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardExitEvent): DenomRewardExitEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardExitEvent",
      value: DenomRewardExitEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardClaimEvent(): DenomRewardClaimEvent {
  return {
    denom: "",
    address: "",
    amounts: ""
  };
}
/**
 * @name DenomRewardClaimEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardClaimEvent
 */
export const DenomRewardClaimEvent = {
  typeUrl: "/bze.rewards.DenomRewardClaimEvent",
  is(o: any): o is DenomRewardClaimEvent {
    return o && (o.$typeUrl === DenomRewardClaimEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amounts === "string");
  },
  isSDK(o: any): o is DenomRewardClaimEventSDKType {
    return o && (o.$typeUrl === DenomRewardClaimEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amounts === "string");
  },
  isAmino(o: any): o is DenomRewardClaimEventAmino {
    return o && (o.$typeUrl === DenomRewardClaimEvent.typeUrl || typeof o.denom === "string" && typeof o.address === "string" && typeof o.amounts === "string");
  },
  encode(message: DenomRewardClaimEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amounts !== "") {
      writer.uint32(26).string(message.amounts);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardClaimEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardClaimEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amounts = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardClaimEvent>): DenomRewardClaimEvent {
    const message = createBaseDenomRewardClaimEvent();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    message.amounts = object.amounts ?? "";
    return message;
  },
  fromAmino(object: DenomRewardClaimEventAmino): DenomRewardClaimEvent {
    const message = createBaseDenomRewardClaimEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amounts !== undefined && object.amounts !== null) {
      message.amounts = object.amounts;
    }
    return message;
  },
  toAmino(message: DenomRewardClaimEvent): DenomRewardClaimEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amounts = message.amounts === "" ? undefined : message.amounts;
    return obj;
  },
  fromAminoMsg(object: DenomRewardClaimEventAminoMsg): DenomRewardClaimEvent {
    return DenomRewardClaimEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardClaimEventProtoMsg): DenomRewardClaimEvent {
    return DenomRewardClaimEvent.decode(message.value);
  },
  toProto(message: DenomRewardClaimEvent): Uint8Array {
    return DenomRewardClaimEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardClaimEvent): DenomRewardClaimEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardClaimEvent",
      value: DenomRewardClaimEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardPrizeCreateEvent(): DenomRewardPrizeCreateEvent {
  return {
    denom: "",
    prizeDenom: ""
  };
}
/**
 * @name DenomRewardPrizeCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrizeCreateEvent
 */
export const DenomRewardPrizeCreateEvent = {
  typeUrl: "/bze.rewards.DenomRewardPrizeCreateEvent",
  is(o: any): o is DenomRewardPrizeCreateEvent {
    return o && (o.$typeUrl === DenomRewardPrizeCreateEvent.typeUrl || typeof o.denom === "string" && typeof o.prizeDenom === "string");
  },
  isSDK(o: any): o is DenomRewardPrizeCreateEventSDKType {
    return o && (o.$typeUrl === DenomRewardPrizeCreateEvent.typeUrl || typeof o.denom === "string" && typeof o.prize_denom === "string");
  },
  isAmino(o: any): o is DenomRewardPrizeCreateEventAmino {
    return o && (o.$typeUrl === DenomRewardPrizeCreateEvent.typeUrl || typeof o.denom === "string" && typeof o.prize_denom === "string");
  },
  encode(message: DenomRewardPrizeCreateEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(18).string(message.prizeDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardPrizeCreateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardPrizeCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.prizeDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardPrizeCreateEvent>): DenomRewardPrizeCreateEvent {
    const message = createBaseDenomRewardPrizeCreateEvent();
    message.denom = object.denom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    return message;
  },
  fromAmino(object: DenomRewardPrizeCreateEventAmino): DenomRewardPrizeCreateEvent {
    const message = createBaseDenomRewardPrizeCreateEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    return message;
  },
  toAmino(message: DenomRewardPrizeCreateEvent): DenomRewardPrizeCreateEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    return obj;
  },
  fromAminoMsg(object: DenomRewardPrizeCreateEventAminoMsg): DenomRewardPrizeCreateEvent {
    return DenomRewardPrizeCreateEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardPrizeCreateEventProtoMsg): DenomRewardPrizeCreateEvent {
    return DenomRewardPrizeCreateEvent.decode(message.value);
  },
  toProto(message: DenomRewardPrizeCreateEvent): Uint8Array {
    return DenomRewardPrizeCreateEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardPrizeCreateEvent): DenomRewardPrizeCreateEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardPrizeCreateEvent",
      value: DenomRewardPrizeCreateEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardScheduleCreateEvent(): DenomRewardScheduleCreateEvent {
  return {
    scheduleId: "",
    denom: "",
    prizeDenom: "",
    dailyAmount: "",
    duration: 0
  };
}
/**
 * @name DenomRewardScheduleCreateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleCreateEvent
 */
export const DenomRewardScheduleCreateEvent = {
  typeUrl: "/bze.rewards.DenomRewardScheduleCreateEvent",
  is(o: any): o is DenomRewardScheduleCreateEvent {
    return o && (o.$typeUrl === DenomRewardScheduleCreateEvent.typeUrl || typeof o.scheduleId === "string" && typeof o.denom === "string" && typeof o.prizeDenom === "string" && typeof o.dailyAmount === "string" && typeof o.duration === "number");
  },
  isSDK(o: any): o is DenomRewardScheduleCreateEventSDKType {
    return o && (o.$typeUrl === DenomRewardScheduleCreateEvent.typeUrl || typeof o.schedule_id === "string" && typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.daily_amount === "string" && typeof o.duration === "number");
  },
  isAmino(o: any): o is DenomRewardScheduleCreateEventAmino {
    return o && (o.$typeUrl === DenomRewardScheduleCreateEvent.typeUrl || typeof o.schedule_id === "string" && typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.daily_amount === "string" && typeof o.duration === "number");
  },
  encode(message: DenomRewardScheduleCreateEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleId !== "") {
      writer.uint32(10).string(message.scheduleId);
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
    if (message.duration !== 0) {
      writer.uint32(40).uint32(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardScheduleCreateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardScheduleCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleId = reader.string();
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
          message.duration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardScheduleCreateEvent>): DenomRewardScheduleCreateEvent {
    const message = createBaseDenomRewardScheduleCreateEvent();
    message.scheduleId = object.scheduleId ?? "";
    message.denom = object.denom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.dailyAmount = object.dailyAmount ?? "";
    message.duration = object.duration ?? 0;
    return message;
  },
  fromAmino(object: DenomRewardScheduleCreateEventAmino): DenomRewardScheduleCreateEvent {
    const message = createBaseDenomRewardScheduleCreateEvent();
    if (object.schedule_id !== undefined && object.schedule_id !== null) {
      message.scheduleId = object.schedule_id;
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
  toAmino(message: DenomRewardScheduleCreateEvent): DenomRewardScheduleCreateEventAmino {
    const obj: any = {};
    obj.schedule_id = message.scheduleId === "" ? undefined : message.scheduleId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.daily_amount = message.dailyAmount === "" ? undefined : message.dailyAmount;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    return obj;
  },
  fromAminoMsg(object: DenomRewardScheduleCreateEventAminoMsg): DenomRewardScheduleCreateEvent {
    return DenomRewardScheduleCreateEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardScheduleCreateEventProtoMsg): DenomRewardScheduleCreateEvent {
    return DenomRewardScheduleCreateEvent.decode(message.value);
  },
  toProto(message: DenomRewardScheduleCreateEvent): Uint8Array {
    return DenomRewardScheduleCreateEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardScheduleCreateEvent): DenomRewardScheduleCreateEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardScheduleCreateEvent",
      value: DenomRewardScheduleCreateEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardScheduleUpdateEvent(): DenomRewardScheduleUpdateEvent {
  return {
    scheduleId: "",
    duration: 0
  };
}
/**
 * @name DenomRewardScheduleUpdateEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleUpdateEvent
 */
export const DenomRewardScheduleUpdateEvent = {
  typeUrl: "/bze.rewards.DenomRewardScheduleUpdateEvent",
  is(o: any): o is DenomRewardScheduleUpdateEvent {
    return o && (o.$typeUrl === DenomRewardScheduleUpdateEvent.typeUrl || typeof o.scheduleId === "string" && typeof o.duration === "number");
  },
  isSDK(o: any): o is DenomRewardScheduleUpdateEventSDKType {
    return o && (o.$typeUrl === DenomRewardScheduleUpdateEvent.typeUrl || typeof o.schedule_id === "string" && typeof o.duration === "number");
  },
  isAmino(o: any): o is DenomRewardScheduleUpdateEventAmino {
    return o && (o.$typeUrl === DenomRewardScheduleUpdateEvent.typeUrl || typeof o.schedule_id === "string" && typeof o.duration === "number");
  },
  encode(message: DenomRewardScheduleUpdateEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleId !== "") {
      writer.uint32(10).string(message.scheduleId);
    }
    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardScheduleUpdateEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardScheduleUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleId = reader.string();
          break;
        case 2:
          message.duration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardScheduleUpdateEvent>): DenomRewardScheduleUpdateEvent {
    const message = createBaseDenomRewardScheduleUpdateEvent();
    message.scheduleId = object.scheduleId ?? "";
    message.duration = object.duration ?? 0;
    return message;
  },
  fromAmino(object: DenomRewardScheduleUpdateEventAmino): DenomRewardScheduleUpdateEvent {
    const message = createBaseDenomRewardScheduleUpdateEvent();
    if (object.schedule_id !== undefined && object.schedule_id !== null) {
      message.scheduleId = object.schedule_id;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    return message;
  },
  toAmino(message: DenomRewardScheduleUpdateEvent): DenomRewardScheduleUpdateEventAmino {
    const obj: any = {};
    obj.schedule_id = message.scheduleId === "" ? undefined : message.scheduleId;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    return obj;
  },
  fromAminoMsg(object: DenomRewardScheduleUpdateEventAminoMsg): DenomRewardScheduleUpdateEvent {
    return DenomRewardScheduleUpdateEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardScheduleUpdateEventProtoMsg): DenomRewardScheduleUpdateEvent {
    return DenomRewardScheduleUpdateEvent.decode(message.value);
  },
  toProto(message: DenomRewardScheduleUpdateEvent): Uint8Array {
    return DenomRewardScheduleUpdateEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardScheduleUpdateEvent): DenomRewardScheduleUpdateEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardScheduleUpdateEvent",
      value: DenomRewardScheduleUpdateEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardScheduleFinishEvent(): DenomRewardScheduleFinishEvent {
  return {
    scheduleId: ""
  };
}
/**
 * @name DenomRewardScheduleFinishEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardScheduleFinishEvent
 */
export const DenomRewardScheduleFinishEvent = {
  typeUrl: "/bze.rewards.DenomRewardScheduleFinishEvent",
  is(o: any): o is DenomRewardScheduleFinishEvent {
    return o && (o.$typeUrl === DenomRewardScheduleFinishEvent.typeUrl || typeof o.scheduleId === "string");
  },
  isSDK(o: any): o is DenomRewardScheduleFinishEventSDKType {
    return o && (o.$typeUrl === DenomRewardScheduleFinishEvent.typeUrl || typeof o.schedule_id === "string");
  },
  isAmino(o: any): o is DenomRewardScheduleFinishEventAmino {
    return o && (o.$typeUrl === DenomRewardScheduleFinishEvent.typeUrl || typeof o.schedule_id === "string");
  },
  encode(message: DenomRewardScheduleFinishEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleId !== "") {
      writer.uint32(10).string(message.scheduleId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardScheduleFinishEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardScheduleFinishEvent();
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
  fromPartial(object: Partial<DenomRewardScheduleFinishEvent>): DenomRewardScheduleFinishEvent {
    const message = createBaseDenomRewardScheduleFinishEvent();
    message.scheduleId = object.scheduleId ?? "";
    return message;
  },
  fromAmino(object: DenomRewardScheduleFinishEventAmino): DenomRewardScheduleFinishEvent {
    const message = createBaseDenomRewardScheduleFinishEvent();
    if (object.schedule_id !== undefined && object.schedule_id !== null) {
      message.scheduleId = object.schedule_id;
    }
    return message;
  },
  toAmino(message: DenomRewardScheduleFinishEvent): DenomRewardScheduleFinishEventAmino {
    const obj: any = {};
    obj.schedule_id = message.scheduleId === "" ? undefined : message.scheduleId;
    return obj;
  },
  fromAminoMsg(object: DenomRewardScheduleFinishEventAminoMsg): DenomRewardScheduleFinishEvent {
    return DenomRewardScheduleFinishEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardScheduleFinishEventProtoMsg): DenomRewardScheduleFinishEvent {
    return DenomRewardScheduleFinishEvent.decode(message.value);
  },
  toProto(message: DenomRewardScheduleFinishEvent): Uint8Array {
    return DenomRewardScheduleFinishEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardScheduleFinishEvent): DenomRewardScheduleFinishEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardScheduleFinishEvent",
      value: DenomRewardScheduleFinishEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardDistributionEvent(): DenomRewardDistributionEvent {
  return {
    denom: "",
    prizeDenom: "",
    amount: ""
  };
}
/**
 * @name DenomRewardDistributionEvent
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardDistributionEvent
 */
export const DenomRewardDistributionEvent = {
  typeUrl: "/bze.rewards.DenomRewardDistributionEvent",
  is(o: any): o is DenomRewardDistributionEvent {
    return o && (o.$typeUrl === DenomRewardDistributionEvent.typeUrl || typeof o.denom === "string" && typeof o.prizeDenom === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is DenomRewardDistributionEventSDKType {
    return o && (o.$typeUrl === DenomRewardDistributionEvent.typeUrl || typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is DenomRewardDistributionEventAmino {
    return o && (o.$typeUrl === DenomRewardDistributionEvent.typeUrl || typeof o.denom === "string" && typeof o.prize_denom === "string" && typeof o.amount === "string");
  },
  encode(message: DenomRewardDistributionEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(18).string(message.prizeDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardDistributionEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardDistributionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.prizeDenom = reader.string();
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
  fromPartial(object: Partial<DenomRewardDistributionEvent>): DenomRewardDistributionEvent {
    const message = createBaseDenomRewardDistributionEvent();
    message.denom = object.denom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DenomRewardDistributionEventAmino): DenomRewardDistributionEvent {
    const message = createBaseDenomRewardDistributionEvent();
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
  toAmino(message: DenomRewardDistributionEvent): DenomRewardDistributionEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DenomRewardDistributionEventAminoMsg): DenomRewardDistributionEvent {
    return DenomRewardDistributionEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardDistributionEventProtoMsg): DenomRewardDistributionEvent {
    return DenomRewardDistributionEvent.decode(message.value);
  },
  toProto(message: DenomRewardDistributionEvent): Uint8Array {
    return DenomRewardDistributionEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardDistributionEvent): DenomRewardDistributionEventProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardDistributionEvent",
      value: DenomRewardDistributionEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};