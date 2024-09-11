import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface Raffle {
  pot: string;
  duration: Long;
  chances: Long;
  ratio: string;
  endAt: Long;
  winners: Long;
  ticketPrice: string;
  denom: string;
  totalWon: string;
}
export interface RaffleSDKType {
  pot: string;
  duration: Long;
  chances: Long;
  ratio: string;
  end_at: Long;
  winners: Long;
  ticket_price: string;
  denom: string;
  total_won: string;
}
export interface RaffleDeleteHook {
  denom: string;
  endAt: Long;
}
export interface RaffleDeleteHookSDKType {
  denom: string;
  end_at: Long;
}
export interface RaffleWinner {
  index: string;
  denom: string;
  amount: string;
  winner: string;
}
export interface RaffleWinnerSDKType {
  index: string;
  denom: string;
  amount: string;
  winner: string;
}
export interface RaffleParticipant {
  index: Long;
  denom: string;
  participant: string;
  executeAt: Long;
}
export interface RaffleParticipantSDKType {
  index: Long;
  denom: string;
  participant: string;
  execute_at: Long;
}

function createBaseRaffle(): Raffle {
  return {
    pot: "",
    duration: Long.UZERO,
    chances: Long.UZERO,
    ratio: "",
    endAt: Long.UZERO,
    winners: Long.UZERO,
    ticketPrice: "",
    denom: "",
    totalWon: ""
  };
}

export const Raffle = {
  encode(message: Raffle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pot !== "") {
      writer.uint32(10).string(message.pot);
    }

    if (!message.duration.isZero()) {
      writer.uint32(16).uint64(message.duration);
    }

    if (!message.chances.isZero()) {
      writer.uint32(24).uint64(message.chances);
    }

    if (message.ratio !== "") {
      writer.uint32(34).string(message.ratio);
    }

    if (!message.endAt.isZero()) {
      writer.uint32(40).uint64(message.endAt);
    }

    if (!message.winners.isZero()) {
      writer.uint32(48).uint64(message.winners);
    }

    if (message.ticketPrice !== "") {
      writer.uint32(58).string(message.ticketPrice);
    }

    if (message.denom !== "") {
      writer.uint32(66).string(message.denom);
    }

    if (message.totalWon !== "") {
      writer.uint32(74).string(message.totalWon);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Raffle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pot = reader.string();
          break;

        case 2:
          message.duration = (reader.uint64() as Long);
          break;

        case 3:
          message.chances = (reader.uint64() as Long);
          break;

        case 4:
          message.ratio = reader.string();
          break;

        case 5:
          message.endAt = (reader.uint64() as Long);
          break;

        case 6:
          message.winners = (reader.uint64() as Long);
          break;

        case 7:
          message.ticketPrice = reader.string();
          break;

        case 8:
          message.denom = reader.string();
          break;

        case 9:
          message.totalWon = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Raffle>): Raffle {
    const message = createBaseRaffle();
    message.pot = object.pot ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    message.chances = object.chances !== undefined && object.chances !== null ? Long.fromValue(object.chances) : Long.UZERO;
    message.ratio = object.ratio ?? "";
    message.endAt = object.endAt !== undefined && object.endAt !== null ? Long.fromValue(object.endAt) : Long.UZERO;
    message.winners = object.winners !== undefined && object.winners !== null ? Long.fromValue(object.winners) : Long.UZERO;
    message.ticketPrice = object.ticketPrice ?? "";
    message.denom = object.denom ?? "";
    message.totalWon = object.totalWon ?? "";
    return message;
  }

};

function createBaseRaffleDeleteHook(): RaffleDeleteHook {
  return {
    denom: "",
    endAt: Long.UZERO
  };
}

export const RaffleDeleteHook = {
  encode(message: RaffleDeleteHook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (!message.endAt.isZero()) {
      writer.uint32(16).uint64(message.endAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaffleDeleteHook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleDeleteHook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.endAt = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RaffleDeleteHook>): RaffleDeleteHook {
    const message = createBaseRaffleDeleteHook();
    message.denom = object.denom ?? "";
    message.endAt = object.endAt !== undefined && object.endAt !== null ? Long.fromValue(object.endAt) : Long.UZERO;
    return message;
  }

};

function createBaseRaffleWinner(): RaffleWinner {
  return {
    index: "",
    denom: "",
    amount: "",
    winner: ""
  };
}

export const RaffleWinner = {
  encode(message: RaffleWinner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.winner !== "") {
      writer.uint32(34).string(message.winner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaffleWinner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleWinner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.winner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RaffleWinner>): RaffleWinner {
    const message = createBaseRaffleWinner();
    message.index = object.index ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.winner = object.winner ?? "";
    return message;
  }

};

function createBaseRaffleParticipant(): RaffleParticipant {
  return {
    index: Long.UZERO,
    denom: "",
    participant: "",
    executeAt: Long.ZERO
  };
}

export const RaffleParticipant = {
  encode(message: RaffleParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.participant !== "") {
      writer.uint32(26).string(message.participant);
    }

    if (!message.executeAt.isZero()) {
      writer.uint32(32).int64(message.executeAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaffleParticipant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleParticipant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.uint64() as Long);
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.participant = reader.string();
          break;

        case 4:
          message.executeAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RaffleParticipant>): RaffleParticipant {
    const message = createBaseRaffleParticipant();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.participant = object.participant ?? "";
    message.executeAt = object.executeAt !== undefined && object.executeAt !== null ? Long.fromValue(object.executeAt) : Long.ZERO;
    return message;
  }

};