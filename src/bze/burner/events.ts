//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * @name CoinsBurnedEvent
 * @package bze.burner
 * @see proto type: bze.burner.CoinsBurnedEvent
 */
export interface CoinsBurnedEvent {
  burned: string;
}
export interface CoinsBurnedEventProtoMsg {
  typeUrl: "/bze.burner.CoinsBurnedEvent";
  value: Uint8Array;
}
/**
 * @name CoinsBurnedEventAmino
 * @package bze.burner
 * @see proto type: bze.burner.CoinsBurnedEvent
 */
export interface CoinsBurnedEventAmino {
  burned?: string;
}
export interface CoinsBurnedEventAminoMsg {
  type: "/bze.burner.CoinsBurnedEvent";
  value: CoinsBurnedEventAmino;
}
/**
 * @name CoinsBurnedEventSDKType
 * @package bze.burner
 * @see proto type: bze.burner.CoinsBurnedEvent
 */
export interface CoinsBurnedEventSDKType {
  burned: string;
}
/**
 * @name FundBurnerEvent
 * @package bze.burner
 * @see proto type: bze.burner.FundBurnerEvent
 */
export interface FundBurnerEvent {
  from: string;
  amount: string;
}
export interface FundBurnerEventProtoMsg {
  typeUrl: "/bze.burner.FundBurnerEvent";
  value: Uint8Array;
}
/**
 * @name FundBurnerEventAmino
 * @package bze.burner
 * @see proto type: bze.burner.FundBurnerEvent
 */
export interface FundBurnerEventAmino {
  from?: string;
  amount?: string;
}
export interface FundBurnerEventAminoMsg {
  type: "/bze.burner.FundBurnerEvent";
  value: FundBurnerEventAmino;
}
/**
 * @name FundBurnerEventSDKType
 * @package bze.burner
 * @see proto type: bze.burner.FundBurnerEvent
 */
export interface FundBurnerEventSDKType {
  from: string;
  amount: string;
}
/**
 * @name RaffleWinnerEvent
 * @package bze.burner
 * @see proto type: bze.burner.RaffleWinnerEvent
 */
export interface RaffleWinnerEvent {
  denom: string;
  winner: string;
  amount: string;
}
export interface RaffleWinnerEventProtoMsg {
  typeUrl: "/bze.burner.RaffleWinnerEvent";
  value: Uint8Array;
}
/**
 * @name RaffleWinnerEventAmino
 * @package bze.burner
 * @see proto type: bze.burner.RaffleWinnerEvent
 */
export interface RaffleWinnerEventAmino {
  denom?: string;
  winner?: string;
  amount?: string;
}
export interface RaffleWinnerEventAminoMsg {
  type: "/bze.burner.RaffleWinnerEvent";
  value: RaffleWinnerEventAmino;
}
/**
 * @name RaffleWinnerEventSDKType
 * @package bze.burner
 * @see proto type: bze.burner.RaffleWinnerEvent
 */
export interface RaffleWinnerEventSDKType {
  denom: string;
  winner: string;
  amount: string;
}
/**
 * @name RaffleLostEvent
 * @package bze.burner
 * @see proto type: bze.burner.RaffleLostEvent
 */
export interface RaffleLostEvent {
  denom: string;
  participant: string;
}
export interface RaffleLostEventProtoMsg {
  typeUrl: "/bze.burner.RaffleLostEvent";
  value: Uint8Array;
}
/**
 * @name RaffleLostEventAmino
 * @package bze.burner
 * @see proto type: bze.burner.RaffleLostEvent
 */
export interface RaffleLostEventAmino {
  denom?: string;
  participant?: string;
}
export interface RaffleLostEventAminoMsg {
  type: "/bze.burner.RaffleLostEvent";
  value: RaffleLostEventAmino;
}
/**
 * @name RaffleLostEventSDKType
 * @package bze.burner
 * @see proto type: bze.burner.RaffleLostEvent
 */
export interface RaffleLostEventSDKType {
  denom: string;
  participant: string;
}
/**
 * @name RaffleFinishedEvent
 * @package bze.burner
 * @see proto type: bze.burner.RaffleFinishedEvent
 */
export interface RaffleFinishedEvent {
  denom: string;
}
export interface RaffleFinishedEventProtoMsg {
  typeUrl: "/bze.burner.RaffleFinishedEvent";
  value: Uint8Array;
}
/**
 * @name RaffleFinishedEventAmino
 * @package bze.burner
 * @see proto type: bze.burner.RaffleFinishedEvent
 */
export interface RaffleFinishedEventAmino {
  denom?: string;
}
export interface RaffleFinishedEventAminoMsg {
  type: "/bze.burner.RaffleFinishedEvent";
  value: RaffleFinishedEventAmino;
}
/**
 * @name RaffleFinishedEventSDKType
 * @package bze.burner
 * @see proto type: bze.burner.RaffleFinishedEvent
 */
export interface RaffleFinishedEventSDKType {
  denom: string;
}
function createBaseCoinsBurnedEvent(): CoinsBurnedEvent {
  return {
    burned: ""
  };
}
/**
 * @name CoinsBurnedEvent
 * @package bze.burner
 * @see proto type: bze.burner.CoinsBurnedEvent
 */
export const CoinsBurnedEvent = {
  typeUrl: "/bze.burner.CoinsBurnedEvent",
  is(o: any): o is CoinsBurnedEvent {
    return o && (o.$typeUrl === CoinsBurnedEvent.typeUrl || typeof o.burned === "string");
  },
  isSDK(o: any): o is CoinsBurnedEventSDKType {
    return o && (o.$typeUrl === CoinsBurnedEvent.typeUrl || typeof o.burned === "string");
  },
  isAmino(o: any): o is CoinsBurnedEventAmino {
    return o && (o.$typeUrl === CoinsBurnedEvent.typeUrl || typeof o.burned === "string");
  },
  encode(message: CoinsBurnedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burned !== "") {
      writer.uint32(10).string(message.burned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CoinsBurnedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinsBurnedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CoinsBurnedEvent>): CoinsBurnedEvent {
    const message = createBaseCoinsBurnedEvent();
    message.burned = object.burned ?? "";
    return message;
  },
  fromAmino(object: CoinsBurnedEventAmino): CoinsBurnedEvent {
    const message = createBaseCoinsBurnedEvent();
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = object.burned;
    }
    return message;
  },
  toAmino(message: CoinsBurnedEvent): CoinsBurnedEventAmino {
    const obj: any = {};
    obj.burned = message.burned === "" ? undefined : message.burned;
    return obj;
  },
  fromAminoMsg(object: CoinsBurnedEventAminoMsg): CoinsBurnedEvent {
    return CoinsBurnedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinsBurnedEventProtoMsg): CoinsBurnedEvent {
    return CoinsBurnedEvent.decode(message.value);
  },
  toProto(message: CoinsBurnedEvent): Uint8Array {
    return CoinsBurnedEvent.encode(message).finish();
  },
  toProtoMsg(message: CoinsBurnedEvent): CoinsBurnedEventProtoMsg {
    return {
      typeUrl: "/bze.burner.CoinsBurnedEvent",
      value: CoinsBurnedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFundBurnerEvent(): FundBurnerEvent {
  return {
    from: "",
    amount: ""
  };
}
/**
 * @name FundBurnerEvent
 * @package bze.burner
 * @see proto type: bze.burner.FundBurnerEvent
 */
export const FundBurnerEvent = {
  typeUrl: "/bze.burner.FundBurnerEvent",
  is(o: any): o is FundBurnerEvent {
    return o && (o.$typeUrl === FundBurnerEvent.typeUrl || typeof o.from === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is FundBurnerEventSDKType {
    return o && (o.$typeUrl === FundBurnerEvent.typeUrl || typeof o.from === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is FundBurnerEventAmino {
    return o && (o.$typeUrl === FundBurnerEvent.typeUrl || typeof o.from === "string" && typeof o.amount === "string");
  },
  encode(message: FundBurnerEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FundBurnerEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundBurnerEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
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
  fromPartial(object: Partial<FundBurnerEvent>): FundBurnerEvent {
    const message = createBaseFundBurnerEvent();
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: FundBurnerEventAmino): FundBurnerEvent {
    const message = createBaseFundBurnerEvent();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: FundBurnerEvent): FundBurnerEventAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: FundBurnerEventAminoMsg): FundBurnerEvent {
    return FundBurnerEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: FundBurnerEventProtoMsg): FundBurnerEvent {
    return FundBurnerEvent.decode(message.value);
  },
  toProto(message: FundBurnerEvent): Uint8Array {
    return FundBurnerEvent.encode(message).finish();
  },
  toProtoMsg(message: FundBurnerEvent): FundBurnerEventProtoMsg {
    return {
      typeUrl: "/bze.burner.FundBurnerEvent",
      value: FundBurnerEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRaffleWinnerEvent(): RaffleWinnerEvent {
  return {
    denom: "",
    winner: "",
    amount: ""
  };
}
/**
 * @name RaffleWinnerEvent
 * @package bze.burner
 * @see proto type: bze.burner.RaffleWinnerEvent
 */
export const RaffleWinnerEvent = {
  typeUrl: "/bze.burner.RaffleWinnerEvent",
  is(o: any): o is RaffleWinnerEvent {
    return o && (o.$typeUrl === RaffleWinnerEvent.typeUrl || typeof o.denom === "string" && typeof o.winner === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is RaffleWinnerEventSDKType {
    return o && (o.$typeUrl === RaffleWinnerEvent.typeUrl || typeof o.denom === "string" && typeof o.winner === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is RaffleWinnerEventAmino {
    return o && (o.$typeUrl === RaffleWinnerEvent.typeUrl || typeof o.denom === "string" && typeof o.winner === "string" && typeof o.amount === "string");
  },
  encode(message: RaffleWinnerEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.winner !== "") {
      writer.uint32(18).string(message.winner);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RaffleWinnerEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleWinnerEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.winner = reader.string();
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
  fromPartial(object: Partial<RaffleWinnerEvent>): RaffleWinnerEvent {
    const message = createBaseRaffleWinnerEvent();
    message.denom = object.denom ?? "";
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: RaffleWinnerEventAmino): RaffleWinnerEvent {
    const message = createBaseRaffleWinnerEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: RaffleWinnerEvent): RaffleWinnerEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.winner = message.winner === "" ? undefined : message.winner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: RaffleWinnerEventAminoMsg): RaffleWinnerEvent {
    return RaffleWinnerEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleWinnerEventProtoMsg): RaffleWinnerEvent {
    return RaffleWinnerEvent.decode(message.value);
  },
  toProto(message: RaffleWinnerEvent): Uint8Array {
    return RaffleWinnerEvent.encode(message).finish();
  },
  toProtoMsg(message: RaffleWinnerEvent): RaffleWinnerEventProtoMsg {
    return {
      typeUrl: "/bze.burner.RaffleWinnerEvent",
      value: RaffleWinnerEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRaffleLostEvent(): RaffleLostEvent {
  return {
    denom: "",
    participant: ""
  };
}
/**
 * @name RaffleLostEvent
 * @package bze.burner
 * @see proto type: bze.burner.RaffleLostEvent
 */
export const RaffleLostEvent = {
  typeUrl: "/bze.burner.RaffleLostEvent",
  is(o: any): o is RaffleLostEvent {
    return o && (o.$typeUrl === RaffleLostEvent.typeUrl || typeof o.denom === "string" && typeof o.participant === "string");
  },
  isSDK(o: any): o is RaffleLostEventSDKType {
    return o && (o.$typeUrl === RaffleLostEvent.typeUrl || typeof o.denom === "string" && typeof o.participant === "string");
  },
  isAmino(o: any): o is RaffleLostEventAmino {
    return o && (o.$typeUrl === RaffleLostEvent.typeUrl || typeof o.denom === "string" && typeof o.participant === "string");
  },
  encode(message: RaffleLostEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RaffleLostEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleLostEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.participant = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RaffleLostEvent>): RaffleLostEvent {
    const message = createBaseRaffleLostEvent();
    message.denom = object.denom ?? "";
    message.participant = object.participant ?? "";
    return message;
  },
  fromAmino(object: RaffleLostEventAmino): RaffleLostEvent {
    const message = createBaseRaffleLostEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    }
    return message;
  },
  toAmino(message: RaffleLostEvent): RaffleLostEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.participant = message.participant === "" ? undefined : message.participant;
    return obj;
  },
  fromAminoMsg(object: RaffleLostEventAminoMsg): RaffleLostEvent {
    return RaffleLostEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleLostEventProtoMsg): RaffleLostEvent {
    return RaffleLostEvent.decode(message.value);
  },
  toProto(message: RaffleLostEvent): Uint8Array {
    return RaffleLostEvent.encode(message).finish();
  },
  toProtoMsg(message: RaffleLostEvent): RaffleLostEventProtoMsg {
    return {
      typeUrl: "/bze.burner.RaffleLostEvent",
      value: RaffleLostEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRaffleFinishedEvent(): RaffleFinishedEvent {
  return {
    denom: ""
  };
}
/**
 * @name RaffleFinishedEvent
 * @package bze.burner
 * @see proto type: bze.burner.RaffleFinishedEvent
 */
export const RaffleFinishedEvent = {
  typeUrl: "/bze.burner.RaffleFinishedEvent",
  is(o: any): o is RaffleFinishedEvent {
    return o && (o.$typeUrl === RaffleFinishedEvent.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is RaffleFinishedEventSDKType {
    return o && (o.$typeUrl === RaffleFinishedEvent.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is RaffleFinishedEventAmino {
    return o && (o.$typeUrl === RaffleFinishedEvent.typeUrl || typeof o.denom === "string");
  },
  encode(message: RaffleFinishedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RaffleFinishedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleFinishedEvent();
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
  fromPartial(object: Partial<RaffleFinishedEvent>): RaffleFinishedEvent {
    const message = createBaseRaffleFinishedEvent();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: RaffleFinishedEventAmino): RaffleFinishedEvent {
    const message = createBaseRaffleFinishedEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: RaffleFinishedEvent): RaffleFinishedEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: RaffleFinishedEventAminoMsg): RaffleFinishedEvent {
    return RaffleFinishedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleFinishedEventProtoMsg): RaffleFinishedEvent {
    return RaffleFinishedEvent.decode(message.value);
  },
  toProto(message: RaffleFinishedEvent): Uint8Array {
    return RaffleFinishedEvent.encode(message).finish();
  },
  toProtoMsg(message: RaffleFinishedEvent): RaffleFinishedEventProtoMsg {
    return {
      typeUrl: "/bze.burner.RaffleFinishedEvent",
      value: RaffleFinishedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};