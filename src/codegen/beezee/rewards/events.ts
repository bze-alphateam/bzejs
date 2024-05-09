import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface StakingRewardCreateEvent {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  stakingDenom: string;
  duration: number;
  minStake: Long;
  lock: number;
}
export interface StakingRewardCreateEventSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  staking_denom: string;
  duration: number;
  min_stake: Long;
  lock: number;
}
export interface StakingRewardUpdateEvent {
  rewardId: string;
  duration: number;
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
export interface StakingRewardJoinEventSDKType {
  reward_id: string;
  address: string;
  amount: string;
}
export interface StakingRewardExitEvent {
  rewardId: string;
  address: string;
}
export interface StakingRewardExitEventSDKType {
  reward_id: string;
  address: string;
}
export interface StakingRewardFinishEvent {
  rewardId: string;
}
export interface StakingRewardFinishEventSDKType {
  reward_id: string;
}
export interface StakingRewardDistributionEvent {
  rewardId: string;
  amount: string;
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
export interface TradingRewardCreateEventSDKType {
  reward_id: string;
  /** the amount paid as prize for each slot */

  prize_amount: string;
  /** the denom paid as prize */

  prize_denom: string;
  duration: number;
  market_id: string;
  slots: number;
  creator: string;
}
export interface TradingRewardExpireEvent {
  rewardId: string;
}
export interface TradingRewardExpireEventSDKType {
  reward_id: string;
}
export interface TradingRewardActivationEvent {
  rewardId: string;
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
    minStake: Long.UZERO,
    lock: 0
  };
}

export const StakingRewardCreateEvent = {
  encode(message: StakingRewardCreateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.minStake.isZero()) {
      writer.uint32(48).uint64(message.minStake);
    }

    if (message.lock !== 0) {
      writer.uint32(56).uint32(message.lock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.minStake = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<StakingRewardCreateEvent>): StakingRewardCreateEvent {
    const message = createBaseStakingRewardCreateEvent();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.duration = object.duration ?? 0;
    message.minStake = object.minStake !== undefined && object.minStake !== null ? Long.fromValue(object.minStake) : Long.UZERO;
    message.lock = object.lock ?? 0;
    return message;
  }

};

function createBaseStakingRewardUpdateEvent(): StakingRewardUpdateEvent {
  return {
    rewardId: "",
    duration: 0
  };
}

export const StakingRewardUpdateEvent = {
  encode(message: StakingRewardUpdateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<StakingRewardUpdateEvent>): StakingRewardUpdateEvent {
    const message = createBaseStakingRewardUpdateEvent();
    message.rewardId = object.rewardId ?? "";
    message.duration = object.duration ?? 0;
    return message;
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
  encode(message: StakingRewardClaimEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardClaimEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<StakingRewardClaimEvent>): StakingRewardClaimEvent {
    const message = createBaseStakingRewardClaimEvent();
    message.rewardId = object.rewardId ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
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
  encode(message: StakingRewardJoinEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardJoinEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<StakingRewardJoinEvent>): StakingRewardJoinEvent {
    const message = createBaseStakingRewardJoinEvent();
    message.rewardId = object.rewardId ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseStakingRewardExitEvent(): StakingRewardExitEvent {
  return {
    rewardId: "",
    address: ""
  };
}

export const StakingRewardExitEvent = {
  encode(message: StakingRewardExitEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardExitEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<StakingRewardExitEvent>): StakingRewardExitEvent {
    const message = createBaseStakingRewardExitEvent();
    message.rewardId = object.rewardId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseStakingRewardFinishEvent(): StakingRewardFinishEvent {
  return {
    rewardId: ""
  };
}

export const StakingRewardFinishEvent = {
  encode(message: StakingRewardFinishEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardFinishEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<StakingRewardFinishEvent>): StakingRewardFinishEvent {
    const message = createBaseStakingRewardFinishEvent();
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseStakingRewardDistributionEvent(): StakingRewardDistributionEvent {
  return {
    rewardId: "",
    amount: ""
  };
}

export const StakingRewardDistributionEvent = {
  encode(message: StakingRewardDistributionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardDistributionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<StakingRewardDistributionEvent>): StakingRewardDistributionEvent {
    const message = createBaseStakingRewardDistributionEvent();
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    return message;
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
  encode(message: TradingRewardCreateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingRewardCreateEvent>): TradingRewardCreateEvent {
    const message = createBaseTradingRewardCreateEvent();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.duration = object.duration ?? 0;
    message.marketId = object.marketId ?? "";
    message.slots = object.slots ?? 0;
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseTradingRewardExpireEvent(): TradingRewardExpireEvent {
  return {
    rewardId: ""
  };
}

export const TradingRewardExpireEvent = {
  encode(message: TradingRewardExpireEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardExpireEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingRewardExpireEvent>): TradingRewardExpireEvent {
    const message = createBaseTradingRewardExpireEvent();
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseTradingRewardActivationEvent(): TradingRewardActivationEvent {
  return {
    rewardId: ""
  };
}

export const TradingRewardActivationEvent = {
  encode(message: TradingRewardActivationEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardActivationEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingRewardActivationEvent>): TradingRewardActivationEvent {
    const message = createBaseTradingRewardActivationEvent();
    message.rewardId = object.rewardId ?? "";
    return message;
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
  encode(message: TradingRewardDistributionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardDistributionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingRewardDistributionEvent>): TradingRewardDistributionEvent {
    const message = createBaseTradingRewardDistributionEvent();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.winners = object.winners?.map(e => e) || [];
    return message;
  }

};