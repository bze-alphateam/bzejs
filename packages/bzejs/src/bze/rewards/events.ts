//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
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
export interface StakingRewardCreateEventSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  staking_denom: string;
  duration: number;
  min_stake: bigint;
  lock: number;
}
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
export interface StakingRewardUpdateEventSDKType {
  reward_id: string;
  duration: number;
}
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
export interface StakingRewardClaimEventSDKType {
  reward_id: string;
  address: string;
  amount: string;
}
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
export interface StakingRewardJoinEventSDKType {
  reward_id: string;
  address: string;
  amount: string;
}
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
export interface StakingRewardExitEventSDKType {
  reward_id: string;
  address: string;
}
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
export interface StakingRewardFinishEventSDKType {
  reward_id: string;
}
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
export interface StakingRewardDistributionEventSDKType {
  reward_id: string;
  amount: string;
}
export interface TradingRewardCreateEvent {
  rewardId: string;
  /** the amount paid as prize for each slot */
  prizeAmount: string;
  /** the denom paid as prize */
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
export interface TradingRewardCreateEventSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  duration: number;
  market_id: string;
  slots: number;
  creator: string;
}
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
export interface TradingRewardExpireEventSDKType {
  reward_id: string;
}
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
export interface TradingRewardActivationEventSDKType {
  reward_id: string;
}
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
export interface TradingRewardDistributionEventSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  winners: string[];
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
export const StakingRewardCreateEvent = {
  typeUrl: "/bze.rewards.StakingRewardCreateEvent",
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
  }
};
function createBaseStakingRewardUpdateEvent(): StakingRewardUpdateEvent {
  return {
    rewardId: "",
    duration: 0
  };
}
export const StakingRewardUpdateEvent = {
  typeUrl: "/bze.rewards.StakingRewardUpdateEvent",
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
  }
};
function createBaseStakingRewardClaimEvent(): StakingRewardClaimEvent {
  return {
    rewardId: "",
    address: "",
    amount: ""
  };
}
export const StakingRewardClaimEvent = {
  typeUrl: "/bze.rewards.StakingRewardClaimEvent",
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
  }
};
function createBaseStakingRewardJoinEvent(): StakingRewardJoinEvent {
  return {
    rewardId: "",
    address: "",
    amount: ""
  };
}
export const StakingRewardJoinEvent = {
  typeUrl: "/bze.rewards.StakingRewardJoinEvent",
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
  }
};
function createBaseStakingRewardExitEvent(): StakingRewardExitEvent {
  return {
    rewardId: "",
    address: ""
  };
}
export const StakingRewardExitEvent = {
  typeUrl: "/bze.rewards.StakingRewardExitEvent",
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
  }
};
function createBaseStakingRewardFinishEvent(): StakingRewardFinishEvent {
  return {
    rewardId: ""
  };
}
export const StakingRewardFinishEvent = {
  typeUrl: "/bze.rewards.StakingRewardFinishEvent",
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
  }
};
function createBaseStakingRewardDistributionEvent(): StakingRewardDistributionEvent {
  return {
    rewardId: "",
    amount: ""
  };
}
export const StakingRewardDistributionEvent = {
  typeUrl: "/bze.rewards.StakingRewardDistributionEvent",
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
  }
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
export const TradingRewardCreateEvent = {
  typeUrl: "/bze.rewards.TradingRewardCreateEvent",
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
  }
};
function createBaseTradingRewardExpireEvent(): TradingRewardExpireEvent {
  return {
    rewardId: ""
  };
}
export const TradingRewardExpireEvent = {
  typeUrl: "/bze.rewards.TradingRewardExpireEvent",
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
  }
};
function createBaseTradingRewardActivationEvent(): TradingRewardActivationEvent {
  return {
    rewardId: ""
  };
}
export const TradingRewardActivationEvent = {
  typeUrl: "/bze.rewards.TradingRewardActivationEvent",
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
  }
};
function createBaseTradingRewardDistributionEvent(): TradingRewardDistributionEvent {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    winners: []
  };
}
export const TradingRewardDistributionEvent = {
  typeUrl: "/bze.rewards.TradingRewardDistributionEvent",
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
  }
};