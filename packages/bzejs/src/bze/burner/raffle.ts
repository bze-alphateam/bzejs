//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Raffle {
  pot: string;
  duration: bigint;
  chances: bigint;
  ratio: string;
  endAt: bigint;
  winners: bigint;
  ticketPrice: string;
  denom: string;
  totalWon: string;
}
export interface RaffleProtoMsg {
  typeUrl: "/bze.burner.Raffle";
  value: Uint8Array;
}
/**
 * @name RaffleAmino
 * @package bze.burner
 * @see proto type: bze.burner.Raffle
 */
export interface RaffleAmino {
  pot?: string;
  duration?: string;
  chances?: string;
  ratio?: string;
  end_at?: string;
  winners?: string;
  ticket_price?: string;
  denom?: string;
  total_won?: string;
}
export interface RaffleAminoMsg {
  type: "/bze.burner.Raffle";
  value: RaffleAmino;
}
export interface RaffleSDKType {
  pot: string;
  duration: bigint;
  chances: bigint;
  ratio: string;
  end_at: bigint;
  winners: bigint;
  ticket_price: string;
  denom: string;
  total_won: string;
}
export interface RaffleDeleteHook {
  denom: string;
  endAt: bigint;
}
export interface RaffleDeleteHookProtoMsg {
  typeUrl: "/bze.burner.RaffleDeleteHook";
  value: Uint8Array;
}
/**
 * @name RaffleDeleteHookAmino
 * @package bze.burner
 * @see proto type: bze.burner.RaffleDeleteHook
 */
export interface RaffleDeleteHookAmino {
  denom?: string;
  end_at?: string;
}
export interface RaffleDeleteHookAminoMsg {
  type: "/bze.burner.RaffleDeleteHook";
  value: RaffleDeleteHookAmino;
}
export interface RaffleDeleteHookSDKType {
  denom: string;
  end_at: bigint;
}
export interface RaffleWinner {
  index: string;
  denom: string;
  amount: string;
  winner: string;
}
export interface RaffleWinnerProtoMsg {
  typeUrl: "/bze.burner.RaffleWinner";
  value: Uint8Array;
}
/**
 * @name RaffleWinnerAmino
 * @package bze.burner
 * @see proto type: bze.burner.RaffleWinner
 */
export interface RaffleWinnerAmino {
  index?: string;
  denom?: string;
  amount?: string;
  winner?: string;
}
export interface RaffleWinnerAminoMsg {
  type: "/bze.burner.RaffleWinner";
  value: RaffleWinnerAmino;
}
export interface RaffleWinnerSDKType {
  index: string;
  denom: string;
  amount: string;
  winner: string;
}
export interface RaffleParticipant {
  index: bigint;
  denom: string;
  participant: string;
  executeAt: bigint;
}
export interface RaffleParticipantProtoMsg {
  typeUrl: "/bze.burner.RaffleParticipant";
  value: Uint8Array;
}
/**
 * @name RaffleParticipantAmino
 * @package bze.burner
 * @see proto type: bze.burner.RaffleParticipant
 */
export interface RaffleParticipantAmino {
  index?: string;
  denom?: string;
  participant?: string;
  execute_at?: string;
}
export interface RaffleParticipantAminoMsg {
  type: "/bze.burner.RaffleParticipant";
  value: RaffleParticipantAmino;
}
export interface RaffleParticipantSDKType {
  index: bigint;
  denom: string;
  participant: string;
  execute_at: bigint;
}
function createBaseRaffle(): Raffle {
  return {
    pot: "",
    duration: BigInt(0),
    chances: BigInt(0),
    ratio: "",
    endAt: BigInt(0),
    winners: BigInt(0),
    ticketPrice: "",
    denom: "",
    totalWon: ""
  };
}
export const Raffle = {
  typeUrl: "/bze.burner.Raffle",
  encode(message: Raffle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pot !== "") {
      writer.uint32(10).string(message.pot);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(16).uint64(message.duration);
    }
    if (message.chances !== BigInt(0)) {
      writer.uint32(24).uint64(message.chances);
    }
    if (message.ratio !== "") {
      writer.uint32(34).string(message.ratio);
    }
    if (message.endAt !== BigInt(0)) {
      writer.uint32(40).uint64(message.endAt);
    }
    if (message.winners !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Raffle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pot = reader.string();
          break;
        case 2:
          message.duration = reader.uint64();
          break;
        case 3:
          message.chances = reader.uint64();
          break;
        case 4:
          message.ratio = reader.string();
          break;
        case 5:
          message.endAt = reader.uint64();
          break;
        case 6:
          message.winners = reader.uint64();
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
  fromPartial(object: Partial<Raffle>): Raffle {
    const message = createBaseRaffle();
    message.pot = object.pot ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.chances = object.chances !== undefined && object.chances !== null ? BigInt(object.chances.toString()) : BigInt(0);
    message.ratio = object.ratio ?? "";
    message.endAt = object.endAt !== undefined && object.endAt !== null ? BigInt(object.endAt.toString()) : BigInt(0);
    message.winners = object.winners !== undefined && object.winners !== null ? BigInt(object.winners.toString()) : BigInt(0);
    message.ticketPrice = object.ticketPrice ?? "";
    message.denom = object.denom ?? "";
    message.totalWon = object.totalWon ?? "";
    return message;
  },
  fromAmino(object: RaffleAmino): Raffle {
    const message = createBaseRaffle();
    if (object.pot !== undefined && object.pot !== null) {
      message.pot = object.pot;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.chances !== undefined && object.chances !== null) {
      message.chances = BigInt(object.chances);
    }
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = object.ratio;
    }
    if (object.end_at !== undefined && object.end_at !== null) {
      message.endAt = BigInt(object.end_at);
    }
    if (object.winners !== undefined && object.winners !== null) {
      message.winners = BigInt(object.winners);
    }
    if (object.ticket_price !== undefined && object.ticket_price !== null) {
      message.ticketPrice = object.ticket_price;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.total_won !== undefined && object.total_won !== null) {
      message.totalWon = object.total_won;
    }
    return message;
  },
  toAmino(message: Raffle): RaffleAmino {
    const obj: any = {};
    obj.pot = message.pot === "" ? undefined : message.pot;
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
    obj.chances = message.chances !== BigInt(0) ? message.chances?.toString() : undefined;
    obj.ratio = message.ratio === "" ? undefined : message.ratio;
    obj.end_at = message.endAt !== BigInt(0) ? message.endAt?.toString() : undefined;
    obj.winners = message.winners !== BigInt(0) ? message.winners?.toString() : undefined;
    obj.ticket_price = message.ticketPrice === "" ? undefined : message.ticketPrice;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.total_won = message.totalWon === "" ? undefined : message.totalWon;
    return obj;
  },
  fromAminoMsg(object: RaffleAminoMsg): Raffle {
    return Raffle.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleProtoMsg): Raffle {
    return Raffle.decode(message.value);
  },
  toProto(message: Raffle): Uint8Array {
    return Raffle.encode(message).finish();
  },
  toProtoMsg(message: Raffle): RaffleProtoMsg {
    return {
      typeUrl: "/bze.burner.Raffle",
      value: Raffle.encode(message).finish()
    };
  }
};
function createBaseRaffleDeleteHook(): RaffleDeleteHook {
  return {
    denom: "",
    endAt: BigInt(0)
  };
}
export const RaffleDeleteHook = {
  typeUrl: "/bze.burner.RaffleDeleteHook",
  encode(message: RaffleDeleteHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.endAt !== BigInt(0)) {
      writer.uint32(16).uint64(message.endAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RaffleDeleteHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleDeleteHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.endAt = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RaffleDeleteHook>): RaffleDeleteHook {
    const message = createBaseRaffleDeleteHook();
    message.denom = object.denom ?? "";
    message.endAt = object.endAt !== undefined && object.endAt !== null ? BigInt(object.endAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RaffleDeleteHookAmino): RaffleDeleteHook {
    const message = createBaseRaffleDeleteHook();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.end_at !== undefined && object.end_at !== null) {
      message.endAt = BigInt(object.end_at);
    }
    return message;
  },
  toAmino(message: RaffleDeleteHook): RaffleDeleteHookAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.end_at = message.endAt !== BigInt(0) ? message.endAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RaffleDeleteHookAminoMsg): RaffleDeleteHook {
    return RaffleDeleteHook.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleDeleteHookProtoMsg): RaffleDeleteHook {
    return RaffleDeleteHook.decode(message.value);
  },
  toProto(message: RaffleDeleteHook): Uint8Array {
    return RaffleDeleteHook.encode(message).finish();
  },
  toProtoMsg(message: RaffleDeleteHook): RaffleDeleteHookProtoMsg {
    return {
      typeUrl: "/bze.burner.RaffleDeleteHook",
      value: RaffleDeleteHook.encode(message).finish()
    };
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
  typeUrl: "/bze.burner.RaffleWinner",
  encode(message: RaffleWinner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): RaffleWinner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<RaffleWinner>): RaffleWinner {
    const message = createBaseRaffleWinner();
    message.index = object.index ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.winner = object.winner ?? "";
    return message;
  },
  fromAmino(object: RaffleWinnerAmino): RaffleWinner {
    const message = createBaseRaffleWinner();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    }
    return message;
  },
  toAmino(message: RaffleWinner): RaffleWinnerAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.winner = message.winner === "" ? undefined : message.winner;
    return obj;
  },
  fromAminoMsg(object: RaffleWinnerAminoMsg): RaffleWinner {
    return RaffleWinner.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleWinnerProtoMsg): RaffleWinner {
    return RaffleWinner.decode(message.value);
  },
  toProto(message: RaffleWinner): Uint8Array {
    return RaffleWinner.encode(message).finish();
  },
  toProtoMsg(message: RaffleWinner): RaffleWinnerProtoMsg {
    return {
      typeUrl: "/bze.burner.RaffleWinner",
      value: RaffleWinner.encode(message).finish()
    };
  }
};
function createBaseRaffleParticipant(): RaffleParticipant {
  return {
    index: BigInt(0),
    denom: "",
    participant: "",
    executeAt: BigInt(0)
  };
}
export const RaffleParticipant = {
  typeUrl: "/bze.burner.RaffleParticipant",
  encode(message: RaffleParticipant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.participant !== "") {
      writer.uint32(26).string(message.participant);
    }
    if (message.executeAt !== BigInt(0)) {
      writer.uint32(32).int64(message.executeAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RaffleParticipant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.participant = reader.string();
          break;
        case 4:
          message.executeAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RaffleParticipant>): RaffleParticipant {
    const message = createBaseRaffleParticipant();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.participant = object.participant ?? "";
    message.executeAt = object.executeAt !== undefined && object.executeAt !== null ? BigInt(object.executeAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RaffleParticipantAmino): RaffleParticipant {
    const message = createBaseRaffleParticipant();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    }
    if (object.execute_at !== undefined && object.execute_at !== null) {
      message.executeAt = BigInt(object.execute_at);
    }
    return message;
  },
  toAmino(message: RaffleParticipant): RaffleParticipantAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.participant = message.participant === "" ? undefined : message.participant;
    obj.execute_at = message.executeAt !== BigInt(0) ? message.executeAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RaffleParticipantAminoMsg): RaffleParticipant {
    return RaffleParticipant.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleParticipantProtoMsg): RaffleParticipant {
    return RaffleParticipant.decode(message.value);
  },
  toProto(message: RaffleParticipant): Uint8Array {
    return RaffleParticipant.encode(message).finish();
  },
  toProtoMsg(message: RaffleParticipant): RaffleParticipantProtoMsg {
    return {
      typeUrl: "/bze.burner.RaffleParticipant",
      value: RaffleParticipant.encode(message).finish()
    };
  }
};