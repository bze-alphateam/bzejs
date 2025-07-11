//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface StakingReward {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  stakingDenom: string;
  duration: number;
  payouts: number;
  minStake: bigint;
  lock: number;
  /** T */
  stakedAmount: string;
  /** S */
  distributedStake: string;
}
export interface StakingRewardProtoMsg {
  typeUrl: "/bze.rewards.StakingReward";
  value: Uint8Array;
}
/**
 * @name StakingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingReward
 */
export interface StakingRewardAmino {
  reward_id?: string;
  prize_amount?: string;
  prize_denom?: string;
  staking_denom?: string;
  duration?: number;
  payouts?: number;
  min_stake?: string;
  lock?: number;
  /**
   * T
   */
  staked_amount?: string;
  /**
   * S
   */
  distributed_stake?: string;
}
export interface StakingRewardAminoMsg {
  type: "/bze.rewards.StakingReward";
  value: StakingRewardAmino;
}
export interface StakingRewardSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  staking_denom: string;
  duration: number;
  payouts: number;
  min_stake: bigint;
  lock: number;
  staked_amount: string;
  distributed_stake: string;
}
export interface StakingRewardParticipant {
  address: string;
  rewardId: string;
  /** stake[address] */
  amount: string;
  /** S0[address] */
  joinedAt: string;
}
export interface StakingRewardParticipantProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardParticipant";
  value: Uint8Array;
}
/**
 * @name StakingRewardParticipantAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardParticipant
 */
export interface StakingRewardParticipantAmino {
  address?: string;
  reward_id?: string;
  /**
   * stake[address]
   */
  amount?: string;
  /**
   * S0[address]
   */
  joined_at?: string;
}
export interface StakingRewardParticipantAminoMsg {
  type: "/bze.rewards.StakingRewardParticipant";
  value: StakingRewardParticipantAmino;
}
export interface StakingRewardParticipantSDKType {
  address: string;
  reward_id: string;
  amount: string;
  joined_at: string;
}
export interface PendingUnlockParticipant {
  index: string;
  address: string;
  amount: string;
  denom: string;
}
export interface PendingUnlockParticipantProtoMsg {
  typeUrl: "/bze.rewards.PendingUnlockParticipant";
  value: Uint8Array;
}
/**
 * @name PendingUnlockParticipantAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.PendingUnlockParticipant
 */
export interface PendingUnlockParticipantAmino {
  index?: string;
  address?: string;
  amount?: string;
  denom?: string;
}
export interface PendingUnlockParticipantAminoMsg {
  type: "/bze.rewards.PendingUnlockParticipant";
  value: PendingUnlockParticipantAmino;
}
export interface PendingUnlockParticipantSDKType {
  index: string;
  address: string;
  amount: string;
  denom: string;
}
export interface TradingReward {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  duration: number;
  marketId: string;
  slots: number;
  expireAt: number;
}
export interface TradingRewardProtoMsg {
  typeUrl: "/bze.rewards.TradingReward";
  value: Uint8Array;
}
/**
 * @name TradingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingReward
 */
export interface TradingRewardAmino {
  reward_id?: string;
  prize_amount?: string;
  prize_denom?: string;
  duration?: number;
  market_id?: string;
  slots?: number;
  expire_at?: number;
}
export interface TradingRewardAminoMsg {
  type: "/bze.rewards.TradingReward";
  value: TradingRewardAmino;
}
export interface TradingRewardSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  duration: number;
  market_id: string;
  slots: number;
  expire_at: number;
}
export interface TradingRewardExpiration {
  rewardId: string;
  expireAt: number;
}
export interface TradingRewardExpirationProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardExpiration";
  value: Uint8Array;
}
/**
 * @name TradingRewardExpirationAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpiration
 */
export interface TradingRewardExpirationAmino {
  reward_id?: string;
  expire_at?: number;
}
export interface TradingRewardExpirationAminoMsg {
  type: "/bze.rewards.TradingRewardExpiration";
  value: TradingRewardExpirationAmino;
}
export interface TradingRewardExpirationSDKType {
  reward_id: string;
  expire_at: number;
}
export interface TradingRewardLeaderboard {
  rewardId: string;
  list: TradingRewardLeaderboardEntry[];
}
export interface TradingRewardLeaderboardProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardLeaderboard";
  value: Uint8Array;
}
/**
 * @name TradingRewardLeaderboardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboard
 */
export interface TradingRewardLeaderboardAmino {
  reward_id?: string;
  list?: TradingRewardLeaderboardEntryAmino[];
}
export interface TradingRewardLeaderboardAminoMsg {
  type: "/bze.rewards.TradingRewardLeaderboard";
  value: TradingRewardLeaderboardAmino;
}
export interface TradingRewardLeaderboardSDKType {
  reward_id: string;
  list: TradingRewardLeaderboardEntrySDKType[];
}
export interface TradingRewardLeaderboardEntry {
  amount: string;
  address: string;
  createdAt: bigint;
}
export interface TradingRewardLeaderboardEntryProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardLeaderboardEntry";
  value: Uint8Array;
}
/**
 * @name TradingRewardLeaderboardEntryAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboardEntry
 */
export interface TradingRewardLeaderboardEntryAmino {
  amount?: string;
  address?: string;
  created_at?: string;
}
export interface TradingRewardLeaderboardEntryAminoMsg {
  type: "/bze.rewards.TradingRewardLeaderboardEntry";
  value: TradingRewardLeaderboardEntryAmino;
}
export interface TradingRewardLeaderboardEntrySDKType {
  amount: string;
  address: string;
  created_at: bigint;
}
export interface TradingRewardCandidate {
  rewardId: string;
  amount: string;
  address: string;
}
export interface TradingRewardCandidateProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardCandidate";
  value: Uint8Array;
}
/**
 * @name TradingRewardCandidateAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCandidate
 */
export interface TradingRewardCandidateAmino {
  reward_id?: string;
  amount?: string;
  address?: string;
}
export interface TradingRewardCandidateAminoMsg {
  type: "/bze.rewards.TradingRewardCandidate";
  value: TradingRewardCandidateAmino;
}
export interface TradingRewardCandidateSDKType {
  reward_id: string;
  amount: string;
  address: string;
}
export interface MarketIdTradingRewardId {
  rewardId: string;
  marketId: string;
}
export interface MarketIdTradingRewardIdProtoMsg {
  typeUrl: "/bze.rewards.MarketIdTradingRewardId";
  value: Uint8Array;
}
/**
 * @name MarketIdTradingRewardIdAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MarketIdTradingRewardId
 */
export interface MarketIdTradingRewardIdAmino {
  reward_id?: string;
  market_id?: string;
}
export interface MarketIdTradingRewardIdAminoMsg {
  type: "/bze.rewards.MarketIdTradingRewardId";
  value: MarketIdTradingRewardIdAmino;
}
export interface MarketIdTradingRewardIdSDKType {
  reward_id: string;
  market_id: string;
}
function createBaseStakingReward(): StakingReward {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    stakingDenom: "",
    duration: 0,
    payouts: 0,
    minStake: BigInt(0),
    lock: 0,
    stakedAmount: "",
    distributedStake: ""
  };
}
export const StakingReward = {
  typeUrl: "/bze.rewards.StakingReward",
  encode(message: StakingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.payouts !== 0) {
      writer.uint32(48).uint32(message.payouts);
    }
    if (message.minStake !== BigInt(0)) {
      writer.uint32(56).uint64(message.minStake);
    }
    if (message.lock !== 0) {
      writer.uint32(64).uint32(message.lock);
    }
    if (message.stakedAmount !== "") {
      writer.uint32(74).string(message.stakedAmount);
    }
    if (message.distributedStake !== "") {
      writer.uint32(82).string(message.distributedStake);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingReward();
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
          message.payouts = reader.uint32();
          break;
        case 7:
          message.minStake = reader.uint64();
          break;
        case 8:
          message.lock = reader.uint32();
          break;
        case 9:
          message.stakedAmount = reader.string();
          break;
        case 10:
          message.distributedStake = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingReward>): StakingReward {
    const message = createBaseStakingReward();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.duration = object.duration ?? 0;
    message.payouts = object.payouts ?? 0;
    message.minStake = object.minStake !== undefined && object.minStake !== null ? BigInt(object.minStake.toString()) : BigInt(0);
    message.lock = object.lock ?? 0;
    message.stakedAmount = object.stakedAmount ?? "";
    message.distributedStake = object.distributedStake ?? "";
    return message;
  },
  fromAmino(object: StakingRewardAmino): StakingReward {
    const message = createBaseStakingReward();
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
    if (object.payouts !== undefined && object.payouts !== null) {
      message.payouts = object.payouts;
    }
    if (object.min_stake !== undefined && object.min_stake !== null) {
      message.minStake = BigInt(object.min_stake);
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = object.lock;
    }
    if (object.staked_amount !== undefined && object.staked_amount !== null) {
      message.stakedAmount = object.staked_amount;
    }
    if (object.distributed_stake !== undefined && object.distributed_stake !== null) {
      message.distributedStake = object.distributed_stake;
    }
    return message;
  },
  toAmino(message: StakingReward): StakingRewardAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.payouts = message.payouts === 0 ? undefined : message.payouts;
    obj.min_stake = message.minStake !== BigInt(0) ? message.minStake?.toString() : undefined;
    obj.lock = message.lock === 0 ? undefined : message.lock;
    obj.staked_amount = message.stakedAmount === "" ? undefined : message.stakedAmount;
    obj.distributed_stake = message.distributedStake === "" ? undefined : message.distributedStake;
    return obj;
  },
  fromAminoMsg(object: StakingRewardAminoMsg): StakingReward {
    return StakingReward.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardProtoMsg): StakingReward {
    return StakingReward.decode(message.value);
  },
  toProto(message: StakingReward): Uint8Array {
    return StakingReward.encode(message).finish();
  },
  toProtoMsg(message: StakingReward): StakingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingReward",
      value: StakingReward.encode(message).finish()
    };
  }
};
function createBaseStakingRewardParticipant(): StakingRewardParticipant {
  return {
    address: "",
    rewardId: "",
    amount: "",
    joinedAt: ""
  };
}
export const StakingRewardParticipant = {
  typeUrl: "/bze.rewards.StakingRewardParticipant",
  encode(message: StakingRewardParticipant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.joinedAt !== "") {
      writer.uint32(34).string(message.joinedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardParticipant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.joinedAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRewardParticipant>): StakingRewardParticipant {
    const message = createBaseStakingRewardParticipant();
    message.address = object.address ?? "";
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    message.joinedAt = object.joinedAt ?? "";
    return message;
  },
  fromAmino(object: StakingRewardParticipantAmino): StakingRewardParticipant {
    const message = createBaseStakingRewardParticipant();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.joined_at !== undefined && object.joined_at !== null) {
      message.joinedAt = object.joined_at;
    }
    return message;
  },
  toAmino(message: StakingRewardParticipant): StakingRewardParticipantAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.joined_at = message.joinedAt === "" ? undefined : message.joinedAt;
    return obj;
  },
  fromAminoMsg(object: StakingRewardParticipantAminoMsg): StakingRewardParticipant {
    return StakingRewardParticipant.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardParticipantProtoMsg): StakingRewardParticipant {
    return StakingRewardParticipant.decode(message.value);
  },
  toProto(message: StakingRewardParticipant): Uint8Array {
    return StakingRewardParticipant.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardParticipant): StakingRewardParticipantProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardParticipant",
      value: StakingRewardParticipant.encode(message).finish()
    };
  }
};
function createBasePendingUnlockParticipant(): PendingUnlockParticipant {
  return {
    index: "",
    address: "",
    amount: "",
    denom: ""
  };
}
export const PendingUnlockParticipant = {
  typeUrl: "/bze.rewards.PendingUnlockParticipant",
  encode(message: PendingUnlockParticipant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingUnlockParticipant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingUnlockParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingUnlockParticipant>): PendingUnlockParticipant {
    const message = createBasePendingUnlockParticipant();
    message.index = object.index ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: PendingUnlockParticipantAmino): PendingUnlockParticipant {
    const message = createBasePendingUnlockParticipant();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: PendingUnlockParticipant): PendingUnlockParticipantAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: PendingUnlockParticipantAminoMsg): PendingUnlockParticipant {
    return PendingUnlockParticipant.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingUnlockParticipantProtoMsg): PendingUnlockParticipant {
    return PendingUnlockParticipant.decode(message.value);
  },
  toProto(message: PendingUnlockParticipant): Uint8Array {
    return PendingUnlockParticipant.encode(message).finish();
  },
  toProtoMsg(message: PendingUnlockParticipant): PendingUnlockParticipantProtoMsg {
    return {
      typeUrl: "/bze.rewards.PendingUnlockParticipant",
      value: PendingUnlockParticipant.encode(message).finish()
    };
  }
};
function createBaseTradingReward(): TradingReward {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    duration: 0,
    marketId: "",
    slots: 0,
    expireAt: 0
  };
}
export const TradingReward = {
  typeUrl: "/bze.rewards.TradingReward",
  encode(message: TradingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.expireAt !== 0) {
      writer.uint32(56).uint32(message.expireAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingReward();
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
          message.expireAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingReward>): TradingReward {
    const message = createBaseTradingReward();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.duration = object.duration ?? 0;
    message.marketId = object.marketId ?? "";
    message.slots = object.slots ?? 0;
    message.expireAt = object.expireAt ?? 0;
    return message;
  },
  fromAmino(object: TradingRewardAmino): TradingReward {
    const message = createBaseTradingReward();
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
    if (object.expire_at !== undefined && object.expire_at !== null) {
      message.expireAt = object.expire_at;
    }
    return message;
  },
  toAmino(message: TradingReward): TradingRewardAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.slots = message.slots === 0 ? undefined : message.slots;
    obj.expire_at = message.expireAt === 0 ? undefined : message.expireAt;
    return obj;
  },
  fromAminoMsg(object: TradingRewardAminoMsg): TradingReward {
    return TradingReward.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardProtoMsg): TradingReward {
    return TradingReward.decode(message.value);
  },
  toProto(message: TradingReward): Uint8Array {
    return TradingReward.encode(message).finish();
  },
  toProtoMsg(message: TradingReward): TradingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingReward",
      value: TradingReward.encode(message).finish()
    };
  }
};
function createBaseTradingRewardExpiration(): TradingRewardExpiration {
  return {
    rewardId: "",
    expireAt: 0
  };
}
export const TradingRewardExpiration = {
  typeUrl: "/bze.rewards.TradingRewardExpiration",
  encode(message: TradingRewardExpiration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.expireAt !== 0) {
      writer.uint32(16).uint32(message.expireAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardExpiration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.expireAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardExpiration>): TradingRewardExpiration {
    const message = createBaseTradingRewardExpiration();
    message.rewardId = object.rewardId ?? "";
    message.expireAt = object.expireAt ?? 0;
    return message;
  },
  fromAmino(object: TradingRewardExpirationAmino): TradingRewardExpiration {
    const message = createBaseTradingRewardExpiration();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.expire_at !== undefined && object.expire_at !== null) {
      message.expireAt = object.expire_at;
    }
    return message;
  },
  toAmino(message: TradingRewardExpiration): TradingRewardExpirationAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.expire_at = message.expireAt === 0 ? undefined : message.expireAt;
    return obj;
  },
  fromAminoMsg(object: TradingRewardExpirationAminoMsg): TradingRewardExpiration {
    return TradingRewardExpiration.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardExpirationProtoMsg): TradingRewardExpiration {
    return TradingRewardExpiration.decode(message.value);
  },
  toProto(message: TradingRewardExpiration): Uint8Array {
    return TradingRewardExpiration.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardExpiration): TradingRewardExpirationProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardExpiration",
      value: TradingRewardExpiration.encode(message).finish()
    };
  }
};
function createBaseTradingRewardLeaderboard(): TradingRewardLeaderboard {
  return {
    rewardId: "",
    list: []
  };
}
export const TradingRewardLeaderboard = {
  typeUrl: "/bze.rewards.TradingRewardLeaderboard",
  encode(message: TradingRewardLeaderboard, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    for (const v of message.list) {
      TradingRewardLeaderboardEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardLeaderboard {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardLeaderboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.list.push(TradingRewardLeaderboardEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardLeaderboard>): TradingRewardLeaderboard {
    const message = createBaseTradingRewardLeaderboard();
    message.rewardId = object.rewardId ?? "";
    message.list = object.list?.map(e => TradingRewardLeaderboardEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardLeaderboardAmino): TradingRewardLeaderboard {
    const message = createBaseTradingRewardLeaderboard();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    message.list = object.list?.map(e => TradingRewardLeaderboardEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardLeaderboard): TradingRewardLeaderboardAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    if (message.list) {
      obj.list = message.list.map(e => e ? TradingRewardLeaderboardEntry.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardLeaderboardAminoMsg): TradingRewardLeaderboard {
    return TradingRewardLeaderboard.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardLeaderboardProtoMsg): TradingRewardLeaderboard {
    return TradingRewardLeaderboard.decode(message.value);
  },
  toProto(message: TradingRewardLeaderboard): Uint8Array {
    return TradingRewardLeaderboard.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardLeaderboard): TradingRewardLeaderboardProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardLeaderboard",
      value: TradingRewardLeaderboard.encode(message).finish()
    };
  }
};
function createBaseTradingRewardLeaderboardEntry(): TradingRewardLeaderboardEntry {
  return {
    amount: "",
    address: "",
    createdAt: BigInt(0)
  };
}
export const TradingRewardLeaderboardEntry = {
  typeUrl: "/bze.rewards.TradingRewardLeaderboardEntry",
  encode(message: TradingRewardLeaderboardEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(24).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardLeaderboardEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardLeaderboardEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardLeaderboardEntry>): TradingRewardLeaderboardEntry {
    const message = createBaseTradingRewardLeaderboardEntry();
    message.amount = object.amount ?? "";
    message.address = object.address ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TradingRewardLeaderboardEntryAmino): TradingRewardLeaderboardEntry {
    const message = createBaseTradingRewardLeaderboardEntry();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: TradingRewardLeaderboardEntry): TradingRewardLeaderboardEntryAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.address = message.address === "" ? undefined : message.address;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TradingRewardLeaderboardEntryAminoMsg): TradingRewardLeaderboardEntry {
    return TradingRewardLeaderboardEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardLeaderboardEntryProtoMsg): TradingRewardLeaderboardEntry {
    return TradingRewardLeaderboardEntry.decode(message.value);
  },
  toProto(message: TradingRewardLeaderboardEntry): Uint8Array {
    return TradingRewardLeaderboardEntry.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardLeaderboardEntry): TradingRewardLeaderboardEntryProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardLeaderboardEntry",
      value: TradingRewardLeaderboardEntry.encode(message).finish()
    };
  }
};
function createBaseTradingRewardCandidate(): TradingRewardCandidate {
  return {
    rewardId: "",
    amount: "",
    address: ""
  };
}
export const TradingRewardCandidate = {
  typeUrl: "/bze.rewards.TradingRewardCandidate",
  encode(message: TradingRewardCandidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCandidate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCandidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardCandidate>): TradingRewardCandidate {
    const message = createBaseTradingRewardCandidate();
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: TradingRewardCandidateAmino): TradingRewardCandidate {
    const message = createBaseTradingRewardCandidate();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: TradingRewardCandidate): TradingRewardCandidateAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: TradingRewardCandidateAminoMsg): TradingRewardCandidate {
    return TradingRewardCandidate.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCandidateProtoMsg): TradingRewardCandidate {
    return TradingRewardCandidate.decode(message.value);
  },
  toProto(message: TradingRewardCandidate): Uint8Array {
    return TradingRewardCandidate.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCandidate): TradingRewardCandidateProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardCandidate",
      value: TradingRewardCandidate.encode(message).finish()
    };
  }
};
function createBaseMarketIdTradingRewardId(): MarketIdTradingRewardId {
  return {
    rewardId: "",
    marketId: ""
  };
}
export const MarketIdTradingRewardId = {
  typeUrl: "/bze.rewards.MarketIdTradingRewardId",
  encode(message: MarketIdTradingRewardId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketIdTradingRewardId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketIdTradingRewardId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketIdTradingRewardId>): MarketIdTradingRewardId {
    const message = createBaseMarketIdTradingRewardId();
    message.rewardId = object.rewardId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: MarketIdTradingRewardIdAmino): MarketIdTradingRewardId {
    const message = createBaseMarketIdTradingRewardId();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: MarketIdTradingRewardId): MarketIdTradingRewardIdAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: MarketIdTradingRewardIdAminoMsg): MarketIdTradingRewardId {
    return MarketIdTradingRewardId.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketIdTradingRewardIdProtoMsg): MarketIdTradingRewardId {
    return MarketIdTradingRewardId.decode(message.value);
  },
  toProto(message: MarketIdTradingRewardId): Uint8Array {
    return MarketIdTradingRewardId.encode(message).finish();
  },
  toProtoMsg(message: MarketIdTradingRewardId): MarketIdTradingRewardIdProtoMsg {
    return {
      typeUrl: "/bze.rewards.MarketIdTradingRewardId",
      value: MarketIdTradingRewardId.encode(message).finish()
    };
  }
};