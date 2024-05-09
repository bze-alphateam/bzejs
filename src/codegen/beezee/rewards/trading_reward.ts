import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface TradingReward {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  duration: number;
  marketId: string;
  slots: number;
  expireAt: number;
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
export interface TradingRewardExpirationSDKType {
  reward_id: string;
  expire_at: number;
}
export interface TradingRewardLeaderboard {
  rewardId: string;
  list: TradingRewardLeaderboardEntry[];
}
export interface TradingRewardLeaderboardSDKType {
  reward_id: string;
  list: TradingRewardLeaderboardEntrySDKType[];
}
export interface TradingRewardLeaderboardEntry {
  amount: string;
  address: string;
  createdAt: Long;
}
export interface TradingRewardLeaderboardEntrySDKType {
  amount: string;
  address: string;
  created_at: Long;
}
export interface TradingRewardCandidate {
  rewardId: string;
  amount: string;
  address: string;
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
export interface MarketIdTradingRewardIdSDKType {
  reward_id: string;
  market_id: string;
}

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
  encode(message: TradingReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingReward>): TradingReward {
    const message = createBaseTradingReward();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.duration = object.duration ?? 0;
    message.marketId = object.marketId ?? "";
    message.slots = object.slots ?? 0;
    message.expireAt = object.expireAt ?? 0;
    return message;
  }

};

function createBaseTradingRewardExpiration(): TradingRewardExpiration {
  return {
    rewardId: "",
    expireAt: 0
  };
}

export const TradingRewardExpiration = {
  encode(message: TradingRewardExpiration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    if (message.expireAt !== 0) {
      writer.uint32(16).uint32(message.expireAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardExpiration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingRewardExpiration>): TradingRewardExpiration {
    const message = createBaseTradingRewardExpiration();
    message.rewardId = object.rewardId ?? "";
    message.expireAt = object.expireAt ?? 0;
    return message;
  }

};

function createBaseTradingRewardLeaderboard(): TradingRewardLeaderboard {
  return {
    rewardId: "",
    list: []
  };
}

export const TradingRewardLeaderboard = {
  encode(message: TradingRewardLeaderboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    for (const v of message.list) {
      TradingRewardLeaderboardEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardLeaderboard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingRewardLeaderboard>): TradingRewardLeaderboard {
    const message = createBaseTradingRewardLeaderboard();
    message.rewardId = object.rewardId ?? "";
    message.list = object.list?.map(e => TradingRewardLeaderboardEntry.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTradingRewardLeaderboardEntry(): TradingRewardLeaderboardEntry {
  return {
    amount: "",
    address: "",
    createdAt: Long.ZERO
  };
}

export const TradingRewardLeaderboardEntry = {
  encode(message: TradingRewardLeaderboardEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(24).int64(message.createdAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardLeaderboardEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.createdAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradingRewardLeaderboardEntry>): TradingRewardLeaderboardEntry {
    const message = createBaseTradingRewardLeaderboardEntry();
    message.amount = object.amount ?? "";
    message.address = object.address ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
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
  encode(message: TradingRewardCandidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCandidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<TradingRewardCandidate>): TradingRewardCandidate {
    const message = createBaseTradingRewardCandidate();
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMarketIdTradingRewardId(): MarketIdTradingRewardId {
  return {
    rewardId: "",
    marketId: ""
  };
}

export const MarketIdTradingRewardId = {
  encode(message: MarketIdTradingRewardId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketIdTradingRewardId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<MarketIdTradingRewardId>): MarketIdTradingRewardId {
    const message = createBaseMarketIdTradingRewardId();
    message.rewardId = object.rewardId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }

};