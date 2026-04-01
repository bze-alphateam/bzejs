//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bze.burner.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "bze/x/burner/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParams
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bze.burner.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bze.burner.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * @name MsgFundBurner
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurner
 */
export interface MsgFundBurner {
  creator: string;
  amount: string;
}
export interface MsgFundBurnerProtoMsg {
  typeUrl: "/bze.burner.MsgFundBurner";
  value: Uint8Array;
}
/**
 * @name MsgFundBurnerAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurner
 */
export interface MsgFundBurnerAmino {
  creator?: string;
  amount?: string;
}
export interface MsgFundBurnerAminoMsg {
  type: "bze/x/burner/MsgFundBurner";
  value: MsgFundBurnerAmino;
}
/**
 * @name MsgFundBurnerSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurner
 */
export interface MsgFundBurnerSDKType {
  creator: string;
  amount: string;
}
/**
 * @name MsgFundBurnerResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurnerResponse
 */
export interface MsgFundBurnerResponse {}
export interface MsgFundBurnerResponseProtoMsg {
  typeUrl: "/bze.burner.MsgFundBurnerResponse";
  value: Uint8Array;
}
/**
 * @name MsgFundBurnerResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurnerResponse
 */
export interface MsgFundBurnerResponseAmino {}
export interface MsgFundBurnerResponseAminoMsg {
  type: "/bze.burner.MsgFundBurnerResponse";
  value: MsgFundBurnerResponseAmino;
}
/**
 * @name MsgFundBurnerResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurnerResponse
 */
export interface MsgFundBurnerResponseSDKType {}
/**
 * @name MsgStartRaffle
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffle
 */
export interface MsgStartRaffle {
  creator: string;
  pot: string;
  duration: string;
  chances: string;
  ratio: string;
  ticketPrice: string;
  denom: string;
}
export interface MsgStartRaffleProtoMsg {
  typeUrl: "/bze.burner.MsgStartRaffle";
  value: Uint8Array;
}
/**
 * @name MsgStartRaffleAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffle
 */
export interface MsgStartRaffleAmino {
  creator?: string;
  pot?: string;
  duration?: string;
  chances?: string;
  ratio?: string;
  ticket_price?: string;
  denom?: string;
}
export interface MsgStartRaffleAminoMsg {
  type: "bze/x/burner/MsgStartRaffle";
  value: MsgStartRaffleAmino;
}
/**
 * @name MsgStartRaffleSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffle
 */
export interface MsgStartRaffleSDKType {
  creator: string;
  pot: string;
  duration: string;
  chances: string;
  ratio: string;
  ticket_price: string;
  denom: string;
}
/**
 * @name MsgStartRaffleResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffleResponse
 */
export interface MsgStartRaffleResponse {}
export interface MsgStartRaffleResponseProtoMsg {
  typeUrl: "/bze.burner.MsgStartRaffleResponse";
  value: Uint8Array;
}
/**
 * @name MsgStartRaffleResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffleResponse
 */
export interface MsgStartRaffleResponseAmino {}
export interface MsgStartRaffleResponseAminoMsg {
  type: "/bze.burner.MsgStartRaffleResponse";
  value: MsgStartRaffleResponseAmino;
}
/**
 * @name MsgStartRaffleResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffleResponse
 */
export interface MsgStartRaffleResponseSDKType {}
/**
 * @name MsgJoinRaffle
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffle
 */
export interface MsgJoinRaffle {
  creator: string;
  denom: string;
  tickets: bigint;
}
export interface MsgJoinRaffleProtoMsg {
  typeUrl: "/bze.burner.MsgJoinRaffle";
  value: Uint8Array;
}
/**
 * @name MsgJoinRaffleAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffle
 */
export interface MsgJoinRaffleAmino {
  creator?: string;
  denom?: string;
  tickets?: string;
}
export interface MsgJoinRaffleAminoMsg {
  type: "bze/x/burner/MsgJoinRaffle";
  value: MsgJoinRaffleAmino;
}
/**
 * @name MsgJoinRaffleSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffle
 */
export interface MsgJoinRaffleSDKType {
  creator: string;
  denom: string;
  tickets: bigint;
}
/**
 * @name MsgJoinRaffleResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffleResponse
 */
export interface MsgJoinRaffleResponse {}
export interface MsgJoinRaffleResponseProtoMsg {
  typeUrl: "/bze.burner.MsgJoinRaffleResponse";
  value: Uint8Array;
}
/**
 * @name MsgJoinRaffleResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffleResponse
 */
export interface MsgJoinRaffleResponseAmino {}
export interface MsgJoinRaffleResponseAminoMsg {
  type: "/bze.burner.MsgJoinRaffleResponse";
  value: MsgJoinRaffleResponseAmino;
}
/**
 * @name MsgJoinRaffleResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffleResponse
 */
export interface MsgJoinRaffleResponseSDKType {}
/**
 * @name MsgMoveIbcLockedCoins
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoins
 */
export interface MsgMoveIbcLockedCoins {
  creator: string;
  denom: string;
}
export interface MsgMoveIbcLockedCoinsProtoMsg {
  typeUrl: "/bze.burner.MsgMoveIbcLockedCoins";
  value: Uint8Array;
}
/**
 * @name MsgMoveIbcLockedCoinsAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoins
 */
export interface MsgMoveIbcLockedCoinsAmino {
  creator?: string;
  denom?: string;
}
export interface MsgMoveIbcLockedCoinsAminoMsg {
  type: "/bze.burner.MsgMoveIbcLockedCoins";
  value: MsgMoveIbcLockedCoinsAmino;
}
/**
 * @name MsgMoveIbcLockedCoinsSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoins
 */
export interface MsgMoveIbcLockedCoinsSDKType {
  creator: string;
  denom: string;
}
/**
 * @name MsgMoveIbcLockedCoinsResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoinsResponse
 */
export interface MsgMoveIbcLockedCoinsResponse {
  added: string;
  refunded: string;
}
export interface MsgMoveIbcLockedCoinsResponseProtoMsg {
  typeUrl: "/bze.burner.MsgMoveIbcLockedCoinsResponse";
  value: Uint8Array;
}
/**
 * @name MsgMoveIbcLockedCoinsResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoinsResponse
 */
export interface MsgMoveIbcLockedCoinsResponseAmino {
  added?: string;
  refunded?: string;
}
export interface MsgMoveIbcLockedCoinsResponseAminoMsg {
  type: "/bze.burner.MsgMoveIbcLockedCoinsResponse";
  value: MsgMoveIbcLockedCoinsResponseAmino;
}
/**
 * @name MsgMoveIbcLockedCoinsResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoinsResponse
 */
export interface MsgMoveIbcLockedCoinsResponseSDKType {
  added: string;
  refunded: string;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/bze.burner.MsgUpdateParams",
  aminoType: "bze/x/burner/MsgUpdateParams",
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
      type: "bze/x/burner/MsgUpdateParams",
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
      typeUrl: "/bze.burner.MsgUpdateParams",
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
 * @package bze.burner
 * @see proto type: bze.burner.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/bze.burner.MsgUpdateParamsResponse",
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
      typeUrl: "/bze.burner.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgFundBurner(): MsgFundBurner {
  return {
    creator: "",
    amount: ""
  };
}
/**
 * @name MsgFundBurner
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurner
 */
export const MsgFundBurner = {
  typeUrl: "/bze.burner.MsgFundBurner",
  aminoType: "bze/x/burner/MsgFundBurner",
  is(o: any): o is MsgFundBurner {
    return o && (o.$typeUrl === MsgFundBurner.typeUrl || typeof o.creator === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgFundBurnerSDKType {
    return o && (o.$typeUrl === MsgFundBurner.typeUrl || typeof o.creator === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgFundBurnerAmino {
    return o && (o.$typeUrl === MsgFundBurner.typeUrl || typeof o.creator === "string" && typeof o.amount === "string");
  },
  encode(message: MsgFundBurner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundBurner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundBurner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
  fromPartial(object: Partial<MsgFundBurner>): MsgFundBurner {
    const message = createBaseMsgFundBurner();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgFundBurnerAmino): MsgFundBurner {
    const message = createBaseMsgFundBurner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgFundBurner): MsgFundBurnerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgFundBurnerAminoMsg): MsgFundBurner {
    return MsgFundBurner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundBurner): MsgFundBurnerAminoMsg {
    return {
      type: "bze/x/burner/MsgFundBurner",
      value: MsgFundBurner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundBurnerProtoMsg): MsgFundBurner {
    return MsgFundBurner.decode(message.value);
  },
  toProto(message: MsgFundBurner): Uint8Array {
    return MsgFundBurner.encode(message).finish();
  },
  toProtoMsg(message: MsgFundBurner): MsgFundBurnerProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgFundBurner",
      value: MsgFundBurner.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgFundBurnerResponse(): MsgFundBurnerResponse {
  return {};
}
/**
 * @name MsgFundBurnerResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgFundBurnerResponse
 */
export const MsgFundBurnerResponse = {
  typeUrl: "/bze.burner.MsgFundBurnerResponse",
  is(o: any): o is MsgFundBurnerResponse {
    return o && o.$typeUrl === MsgFundBurnerResponse.typeUrl;
  },
  isSDK(o: any): o is MsgFundBurnerResponseSDKType {
    return o && o.$typeUrl === MsgFundBurnerResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFundBurnerResponseAmino {
    return o && o.$typeUrl === MsgFundBurnerResponse.typeUrl;
  },
  encode(_: MsgFundBurnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundBurnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundBurnerResponse();
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
  fromPartial(_: Partial<MsgFundBurnerResponse>): MsgFundBurnerResponse {
    const message = createBaseMsgFundBurnerResponse();
    return message;
  },
  fromAmino(_: MsgFundBurnerResponseAmino): MsgFundBurnerResponse {
    const message = createBaseMsgFundBurnerResponse();
    return message;
  },
  toAmino(_: MsgFundBurnerResponse): MsgFundBurnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundBurnerResponseAminoMsg): MsgFundBurnerResponse {
    return MsgFundBurnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundBurnerResponseProtoMsg): MsgFundBurnerResponse {
    return MsgFundBurnerResponse.decode(message.value);
  },
  toProto(message: MsgFundBurnerResponse): Uint8Array {
    return MsgFundBurnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundBurnerResponse): MsgFundBurnerResponseProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgFundBurnerResponse",
      value: MsgFundBurnerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgStartRaffle(): MsgStartRaffle {
  return {
    creator: "",
    pot: "",
    duration: "",
    chances: "",
    ratio: "",
    ticketPrice: "",
    denom: ""
  };
}
/**
 * @name MsgStartRaffle
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffle
 */
export const MsgStartRaffle = {
  typeUrl: "/bze.burner.MsgStartRaffle",
  aminoType: "bze/x/burner/MsgStartRaffle",
  is(o: any): o is MsgStartRaffle {
    return o && (o.$typeUrl === MsgStartRaffle.typeUrl || typeof o.creator === "string" && typeof o.pot === "string" && typeof o.duration === "string" && typeof o.chances === "string" && typeof o.ratio === "string" && typeof o.ticketPrice === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgStartRaffleSDKType {
    return o && (o.$typeUrl === MsgStartRaffle.typeUrl || typeof o.creator === "string" && typeof o.pot === "string" && typeof o.duration === "string" && typeof o.chances === "string" && typeof o.ratio === "string" && typeof o.ticket_price === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgStartRaffleAmino {
    return o && (o.$typeUrl === MsgStartRaffle.typeUrl || typeof o.creator === "string" && typeof o.pot === "string" && typeof o.duration === "string" && typeof o.chances === "string" && typeof o.ratio === "string" && typeof o.ticket_price === "string" && typeof o.denom === "string");
  },
  encode(message: MsgStartRaffle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pot !== "") {
      writer.uint32(18).string(message.pot);
    }
    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }
    if (message.chances !== "") {
      writer.uint32(34).string(message.chances);
    }
    if (message.ratio !== "") {
      writer.uint32(42).string(message.ratio);
    }
    if (message.ticketPrice !== "") {
      writer.uint32(50).string(message.ticketPrice);
    }
    if (message.denom !== "") {
      writer.uint32(58).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartRaffle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRaffle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pot = reader.string();
          break;
        case 3:
          message.duration = reader.string();
          break;
        case 4:
          message.chances = reader.string();
          break;
        case 5:
          message.ratio = reader.string();
          break;
        case 6:
          message.ticketPrice = reader.string();
          break;
        case 7:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStartRaffle>): MsgStartRaffle {
    const message = createBaseMsgStartRaffle();
    message.creator = object.creator ?? "";
    message.pot = object.pot ?? "";
    message.duration = object.duration ?? "";
    message.chances = object.chances ?? "";
    message.ratio = object.ratio ?? "";
    message.ticketPrice = object.ticketPrice ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgStartRaffleAmino): MsgStartRaffle {
    const message = createBaseMsgStartRaffle();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pot !== undefined && object.pot !== null) {
      message.pot = object.pot;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.chances !== undefined && object.chances !== null) {
      message.chances = object.chances;
    }
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = object.ratio;
    }
    if (object.ticket_price !== undefined && object.ticket_price !== null) {
      message.ticketPrice = object.ticket_price;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgStartRaffle): MsgStartRaffleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pot = message.pot === "" ? undefined : message.pot;
    obj.duration = message.duration === "" ? undefined : message.duration;
    obj.chances = message.chances === "" ? undefined : message.chances;
    obj.ratio = message.ratio === "" ? undefined : message.ratio;
    obj.ticket_price = message.ticketPrice === "" ? undefined : message.ticketPrice;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgStartRaffleAminoMsg): MsgStartRaffle {
    return MsgStartRaffle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStartRaffle): MsgStartRaffleAminoMsg {
    return {
      type: "bze/x/burner/MsgStartRaffle",
      value: MsgStartRaffle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStartRaffleProtoMsg): MsgStartRaffle {
    return MsgStartRaffle.decode(message.value);
  },
  toProto(message: MsgStartRaffle): Uint8Array {
    return MsgStartRaffle.encode(message).finish();
  },
  toProtoMsg(message: MsgStartRaffle): MsgStartRaffleProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgStartRaffle",
      value: MsgStartRaffle.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgStartRaffleResponse(): MsgStartRaffleResponse {
  return {};
}
/**
 * @name MsgStartRaffleResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgStartRaffleResponse
 */
export const MsgStartRaffleResponse = {
  typeUrl: "/bze.burner.MsgStartRaffleResponse",
  is(o: any): o is MsgStartRaffleResponse {
    return o && o.$typeUrl === MsgStartRaffleResponse.typeUrl;
  },
  isSDK(o: any): o is MsgStartRaffleResponseSDKType {
    return o && o.$typeUrl === MsgStartRaffleResponse.typeUrl;
  },
  isAmino(o: any): o is MsgStartRaffleResponseAmino {
    return o && o.$typeUrl === MsgStartRaffleResponse.typeUrl;
  },
  encode(_: MsgStartRaffleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartRaffleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRaffleResponse();
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
  fromPartial(_: Partial<MsgStartRaffleResponse>): MsgStartRaffleResponse {
    const message = createBaseMsgStartRaffleResponse();
    return message;
  },
  fromAmino(_: MsgStartRaffleResponseAmino): MsgStartRaffleResponse {
    const message = createBaseMsgStartRaffleResponse();
    return message;
  },
  toAmino(_: MsgStartRaffleResponse): MsgStartRaffleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStartRaffleResponseAminoMsg): MsgStartRaffleResponse {
    return MsgStartRaffleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStartRaffleResponseProtoMsg): MsgStartRaffleResponse {
    return MsgStartRaffleResponse.decode(message.value);
  },
  toProto(message: MsgStartRaffleResponse): Uint8Array {
    return MsgStartRaffleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStartRaffleResponse): MsgStartRaffleResponseProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgStartRaffleResponse",
      value: MsgStartRaffleResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgJoinRaffle(): MsgJoinRaffle {
  return {
    creator: "",
    denom: "",
    tickets: BigInt(0)
  };
}
/**
 * @name MsgJoinRaffle
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffle
 */
export const MsgJoinRaffle = {
  typeUrl: "/bze.burner.MsgJoinRaffle",
  aminoType: "bze/x/burner/MsgJoinRaffle",
  is(o: any): o is MsgJoinRaffle {
    return o && (o.$typeUrl === MsgJoinRaffle.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.tickets === "bigint");
  },
  isSDK(o: any): o is MsgJoinRaffleSDKType {
    return o && (o.$typeUrl === MsgJoinRaffle.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.tickets === "bigint");
  },
  isAmino(o: any): o is MsgJoinRaffleAmino {
    return o && (o.$typeUrl === MsgJoinRaffle.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.tickets === "bigint");
  },
  encode(message: MsgJoinRaffle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.tickets !== BigInt(0)) {
      writer.uint32(24).uint64(message.tickets);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinRaffle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinRaffle();
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
          message.tickets = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgJoinRaffle>): MsgJoinRaffle {
    const message = createBaseMsgJoinRaffle();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.tickets = object.tickets !== undefined && object.tickets !== null ? BigInt(object.tickets.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgJoinRaffleAmino): MsgJoinRaffle {
    const message = createBaseMsgJoinRaffle();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.tickets !== undefined && object.tickets !== null) {
      message.tickets = BigInt(object.tickets);
    }
    return message;
  },
  toAmino(message: MsgJoinRaffle): MsgJoinRaffleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.tickets = message.tickets !== BigInt(0) ? message.tickets?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgJoinRaffleAminoMsg): MsgJoinRaffle {
    return MsgJoinRaffle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinRaffle): MsgJoinRaffleAminoMsg {
    return {
      type: "bze/x/burner/MsgJoinRaffle",
      value: MsgJoinRaffle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinRaffleProtoMsg): MsgJoinRaffle {
    return MsgJoinRaffle.decode(message.value);
  },
  toProto(message: MsgJoinRaffle): Uint8Array {
    return MsgJoinRaffle.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinRaffle): MsgJoinRaffleProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgJoinRaffle",
      value: MsgJoinRaffle.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgJoinRaffleResponse(): MsgJoinRaffleResponse {
  return {};
}
/**
 * @name MsgJoinRaffleResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgJoinRaffleResponse
 */
export const MsgJoinRaffleResponse = {
  typeUrl: "/bze.burner.MsgJoinRaffleResponse",
  is(o: any): o is MsgJoinRaffleResponse {
    return o && o.$typeUrl === MsgJoinRaffleResponse.typeUrl;
  },
  isSDK(o: any): o is MsgJoinRaffleResponseSDKType {
    return o && o.$typeUrl === MsgJoinRaffleResponse.typeUrl;
  },
  isAmino(o: any): o is MsgJoinRaffleResponseAmino {
    return o && o.$typeUrl === MsgJoinRaffleResponse.typeUrl;
  },
  encode(_: MsgJoinRaffleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinRaffleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinRaffleResponse();
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
  fromPartial(_: Partial<MsgJoinRaffleResponse>): MsgJoinRaffleResponse {
    const message = createBaseMsgJoinRaffleResponse();
    return message;
  },
  fromAmino(_: MsgJoinRaffleResponseAmino): MsgJoinRaffleResponse {
    const message = createBaseMsgJoinRaffleResponse();
    return message;
  },
  toAmino(_: MsgJoinRaffleResponse): MsgJoinRaffleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgJoinRaffleResponseAminoMsg): MsgJoinRaffleResponse {
    return MsgJoinRaffleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinRaffleResponseProtoMsg): MsgJoinRaffleResponse {
    return MsgJoinRaffleResponse.decode(message.value);
  },
  toProto(message: MsgJoinRaffleResponse): Uint8Array {
    return MsgJoinRaffleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinRaffleResponse): MsgJoinRaffleResponseProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgJoinRaffleResponse",
      value: MsgJoinRaffleResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMoveIbcLockedCoins(): MsgMoveIbcLockedCoins {
  return {
    creator: "",
    denom: ""
  };
}
/**
 * @name MsgMoveIbcLockedCoins
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoins
 */
export const MsgMoveIbcLockedCoins = {
  typeUrl: "/bze.burner.MsgMoveIbcLockedCoins",
  is(o: any): o is MsgMoveIbcLockedCoins {
    return o && (o.$typeUrl === MsgMoveIbcLockedCoins.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgMoveIbcLockedCoinsSDKType {
    return o && (o.$typeUrl === MsgMoveIbcLockedCoins.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgMoveIbcLockedCoinsAmino {
    return o && (o.$typeUrl === MsgMoveIbcLockedCoins.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgMoveIbcLockedCoins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMoveIbcLockedCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveIbcLockedCoins();
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
  fromPartial(object: Partial<MsgMoveIbcLockedCoins>): MsgMoveIbcLockedCoins {
    const message = createBaseMsgMoveIbcLockedCoins();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgMoveIbcLockedCoinsAmino): MsgMoveIbcLockedCoins {
    const message = createBaseMsgMoveIbcLockedCoins();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgMoveIbcLockedCoins): MsgMoveIbcLockedCoinsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgMoveIbcLockedCoinsAminoMsg): MsgMoveIbcLockedCoins {
    return MsgMoveIbcLockedCoins.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMoveIbcLockedCoinsProtoMsg): MsgMoveIbcLockedCoins {
    return MsgMoveIbcLockedCoins.decode(message.value);
  },
  toProto(message: MsgMoveIbcLockedCoins): Uint8Array {
    return MsgMoveIbcLockedCoins.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveIbcLockedCoins): MsgMoveIbcLockedCoinsProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgMoveIbcLockedCoins",
      value: MsgMoveIbcLockedCoins.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMoveIbcLockedCoinsResponse(): MsgMoveIbcLockedCoinsResponse {
  return {
    added: "",
    refunded: ""
  };
}
/**
 * @name MsgMoveIbcLockedCoinsResponse
 * @package bze.burner
 * @see proto type: bze.burner.MsgMoveIbcLockedCoinsResponse
 */
export const MsgMoveIbcLockedCoinsResponse = {
  typeUrl: "/bze.burner.MsgMoveIbcLockedCoinsResponse",
  is(o: any): o is MsgMoveIbcLockedCoinsResponse {
    return o && (o.$typeUrl === MsgMoveIbcLockedCoinsResponse.typeUrl || typeof o.added === "string" && typeof o.refunded === "string");
  },
  isSDK(o: any): o is MsgMoveIbcLockedCoinsResponseSDKType {
    return o && (o.$typeUrl === MsgMoveIbcLockedCoinsResponse.typeUrl || typeof o.added === "string" && typeof o.refunded === "string");
  },
  isAmino(o: any): o is MsgMoveIbcLockedCoinsResponseAmino {
    return o && (o.$typeUrl === MsgMoveIbcLockedCoinsResponse.typeUrl || typeof o.added === "string" && typeof o.refunded === "string");
  },
  encode(message: MsgMoveIbcLockedCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.added !== "") {
      writer.uint32(10).string(message.added);
    }
    if (message.refunded !== "") {
      writer.uint32(18).string(message.refunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMoveIbcLockedCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveIbcLockedCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.added = reader.string();
          break;
        case 2:
          message.refunded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMoveIbcLockedCoinsResponse>): MsgMoveIbcLockedCoinsResponse {
    const message = createBaseMsgMoveIbcLockedCoinsResponse();
    message.added = object.added ?? "";
    message.refunded = object.refunded ?? "";
    return message;
  },
  fromAmino(object: MsgMoveIbcLockedCoinsResponseAmino): MsgMoveIbcLockedCoinsResponse {
    const message = createBaseMsgMoveIbcLockedCoinsResponse();
    if (object.added !== undefined && object.added !== null) {
      message.added = object.added;
    }
    if (object.refunded !== undefined && object.refunded !== null) {
      message.refunded = object.refunded;
    }
    return message;
  },
  toAmino(message: MsgMoveIbcLockedCoinsResponse): MsgMoveIbcLockedCoinsResponseAmino {
    const obj: any = {};
    obj.added = message.added === "" ? undefined : message.added;
    obj.refunded = message.refunded === "" ? undefined : message.refunded;
    return obj;
  },
  fromAminoMsg(object: MsgMoveIbcLockedCoinsResponseAminoMsg): MsgMoveIbcLockedCoinsResponse {
    return MsgMoveIbcLockedCoinsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMoveIbcLockedCoinsResponseProtoMsg): MsgMoveIbcLockedCoinsResponse {
    return MsgMoveIbcLockedCoinsResponse.decode(message.value);
  },
  toProto(message: MsgMoveIbcLockedCoinsResponse): Uint8Array {
    return MsgMoveIbcLockedCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveIbcLockedCoinsResponse): MsgMoveIbcLockedCoinsResponseProtoMsg {
    return {
      typeUrl: "/bze.burner.MsgMoveIbcLockedCoinsResponse",
      value: MsgMoveIbcLockedCoinsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};