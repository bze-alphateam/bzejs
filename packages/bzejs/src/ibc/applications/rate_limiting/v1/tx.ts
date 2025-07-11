//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Gov tx to add a new rate limit */
export interface MsgAddRateLimit {
  /** signer defines the x/gov module account address or other authority signing the message */
  signer: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentSend: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentRecv: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  durationHours: bigint;
}
export interface MsgAddRateLimitProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgAddRateLimit";
  value: Uint8Array;
}
/**
 * Gov tx to add a new rate limit
 * @name MsgAddRateLimitAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgAddRateLimit
 */
export interface MsgAddRateLimitAmino {
  /**
   * signer defines the x/gov module account address or other authority signing the message
   */
  signer?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /**
   * ChannelId for the rate limit, on the side of the rate limited chain
   */
  channel_or_client_id?: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_send?: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_recv?: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  duration_hours?: string;
}
export interface MsgAddRateLimitAminoMsg {
  type: "ratelimit/MsgAddRateLimit";
  value: MsgAddRateLimitAmino;
}
/** Gov tx to add a new rate limit */
export interface MsgAddRateLimitSDKType {
  signer: string;
  denom: string;
  channel_or_client_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
}
/** MsgAddRateLimitResponse is the return type for AddRateLimit function. */
export interface MsgAddRateLimitResponse {}
export interface MsgAddRateLimitResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgAddRateLimitResponse";
  value: Uint8Array;
}
/**
 * MsgAddRateLimitResponse is the return type for AddRateLimit function.
 * @name MsgAddRateLimitResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgAddRateLimitResponse
 */
export interface MsgAddRateLimitResponseAmino {}
export interface MsgAddRateLimitResponseAminoMsg {
  type: "cosmos-sdk/MsgAddRateLimitResponse";
  value: MsgAddRateLimitResponseAmino;
}
/** MsgAddRateLimitResponse is the return type for AddRateLimit function. */
export interface MsgAddRateLimitResponseSDKType {}
/** Gov tx to update an existing rate limit */
export interface MsgUpdateRateLimit {
  /** signer defines the x/gov module account address or other authority signing the message */
  signer: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentSend: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentRecv: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  durationHours: bigint;
}
export interface MsgUpdateRateLimitProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgUpdateRateLimit";
  value: Uint8Array;
}
/**
 * Gov tx to update an existing rate limit
 * @name MsgUpdateRateLimitAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgUpdateRateLimit
 */
export interface MsgUpdateRateLimitAmino {
  /**
   * signer defines the x/gov module account address or other authority signing the message
   */
  signer?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /**
   * ChannelId for the rate limit, on the side of the rate limited chain
   */
  channel_or_client_id?: string;
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_send?: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  max_percent_recv?: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  duration_hours?: string;
}
export interface MsgUpdateRateLimitAminoMsg {
  type: "ratelimit/MsgUpdateRateLimit";
  value: MsgUpdateRateLimitAmino;
}
/** Gov tx to update an existing rate limit */
export interface MsgUpdateRateLimitSDKType {
  signer: string;
  denom: string;
  channel_or_client_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
}
/** MsgUpdateRateLimitResponse is the return type for UpdateRateLimit. */
export interface MsgUpdateRateLimitResponse {}
export interface MsgUpdateRateLimitResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgUpdateRateLimitResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateRateLimitResponse is the return type for UpdateRateLimit.
 * @name MsgUpdateRateLimitResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgUpdateRateLimitResponse
 */
export interface MsgUpdateRateLimitResponseAmino {}
export interface MsgUpdateRateLimitResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateRateLimitResponse";
  value: MsgUpdateRateLimitResponseAmino;
}
/** MsgUpdateRateLimitResponse is the return type for UpdateRateLimit. */
export interface MsgUpdateRateLimitResponseSDKType {}
/** Gov tx to remove a rate limit */
export interface MsgRemoveRateLimit {
  /** signer defines the x/gov module account address or other authority signing the message */
  signer: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
}
export interface MsgRemoveRateLimitProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgRemoveRateLimit";
  value: Uint8Array;
}
/**
 * Gov tx to remove a rate limit
 * @name MsgRemoveRateLimitAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgRemoveRateLimit
 */
export interface MsgRemoveRateLimitAmino {
  /**
   * signer defines the x/gov module account address or other authority signing the message
   */
  signer?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /**
   * ChannelId for the rate limit, on the side of the rate limited chain
   */
  channel_or_client_id?: string;
}
export interface MsgRemoveRateLimitAminoMsg {
  type: "ratelimit/MsgRemoveRateLimit";
  value: MsgRemoveRateLimitAmino;
}
/** Gov tx to remove a rate limit */
export interface MsgRemoveRateLimitSDKType {
  signer: string;
  denom: string;
  channel_or_client_id: string;
}
/** MsgRemoveRateLimitResponse is the response type for RemoveRateLimit */
export interface MsgRemoveRateLimitResponse {}
export interface MsgRemoveRateLimitResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgRemoveRateLimitResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveRateLimitResponse is the response type for RemoveRateLimit
 * @name MsgRemoveRateLimitResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgRemoveRateLimitResponse
 */
export interface MsgRemoveRateLimitResponseAmino {}
export interface MsgRemoveRateLimitResponseAminoMsg {
  type: "cosmos-sdk/MsgRemoveRateLimitResponse";
  value: MsgRemoveRateLimitResponseAmino;
}
/** MsgRemoveRateLimitResponse is the response type for RemoveRateLimit */
export interface MsgRemoveRateLimitResponseSDKType {}
/** Gov tx to reset the flow on a rate limit */
export interface MsgResetRateLimit {
  /** signer defines the x/gov module account address or other authority signing the message */
  signer: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom: string;
  /** ChannelId for the rate limit, on the side of the rate limited chain */
  channelOrClientId: string;
}
export interface MsgResetRateLimitProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgResetRateLimit";
  value: Uint8Array;
}
/**
 * Gov tx to reset the flow on a rate limit
 * @name MsgResetRateLimitAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgResetRateLimit
 */
export interface MsgResetRateLimitAmino {
  /**
   * signer defines the x/gov module account address or other authority signing the message
   */
  signer?: string;
  /**
   * Denom for the rate limit, as it appears on the rate limited chain
   * When rate limiting a non-native token, this will be an ibc denom
   */
  denom?: string;
  /**
   * ChannelId for the rate limit, on the side of the rate limited chain
   */
  channel_or_client_id?: string;
}
export interface MsgResetRateLimitAminoMsg {
  type: "ratelimit/MsgResetRateLimit";
  value: MsgResetRateLimitAmino;
}
/** Gov tx to reset the flow on a rate limit */
export interface MsgResetRateLimitSDKType {
  signer: string;
  denom: string;
  channel_or_client_id: string;
}
/** MsgResetRateLimitResponse is the response type for ResetRateLimit. */
export interface MsgResetRateLimitResponse {}
export interface MsgResetRateLimitResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgResetRateLimitResponse";
  value: Uint8Array;
}
/**
 * MsgResetRateLimitResponse is the response type for ResetRateLimit.
 * @name MsgResetRateLimitResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.MsgResetRateLimitResponse
 */
export interface MsgResetRateLimitResponseAmino {}
export interface MsgResetRateLimitResponseAminoMsg {
  type: "cosmos-sdk/MsgResetRateLimitResponse";
  value: MsgResetRateLimitResponseAmino;
}
/** MsgResetRateLimitResponse is the response type for ResetRateLimit. */
export interface MsgResetRateLimitResponseSDKType {}
function createBaseMsgAddRateLimit(): MsgAddRateLimit {
  return {
    signer: "",
    denom: "",
    channelOrClientId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: BigInt(0)
  };
}
export const MsgAddRateLimit = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgAddRateLimit",
  encode(message: MsgAddRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(34).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(42).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(48).uint64(message.durationHours);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        case 4:
          message.maxPercentSend = reader.string();
          break;
        case 5:
          message.maxPercentRecv = reader.string();
          break;
        case 6:
          message.durationHours = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddRateLimit>): MsgAddRateLimit {
    const message = createBaseMsgAddRateLimit();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.channelOrClientId = object.channelOrClientId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? BigInt(object.durationHours.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAddRateLimitAmino): MsgAddRateLimit {
    const message = createBaseMsgAddRateLimit();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    if (object.max_percent_send !== undefined && object.max_percent_send !== null) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (object.max_percent_recv !== undefined && object.max_percent_recv !== null) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    return message;
  },
  toAmino(message: MsgAddRateLimit): MsgAddRateLimitAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    obj.max_percent_send = message.maxPercentSend === "" ? undefined : message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv === "" ? undefined : message.maxPercentRecv;
    obj.duration_hours = message.durationHours !== BigInt(0) ? message.durationHours?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddRateLimitAminoMsg): MsgAddRateLimit {
    return MsgAddRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddRateLimit): MsgAddRateLimitAminoMsg {
    return {
      type: "ratelimit/MsgAddRateLimit",
      value: MsgAddRateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddRateLimitProtoMsg): MsgAddRateLimit {
    return MsgAddRateLimit.decode(message.value);
  },
  toProto(message: MsgAddRateLimit): Uint8Array {
    return MsgAddRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRateLimit): MsgAddRateLimitProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgAddRateLimit",
      value: MsgAddRateLimit.encode(message).finish()
    };
  }
};
function createBaseMsgAddRateLimitResponse(): MsgAddRateLimitResponse {
  return {};
}
export const MsgAddRateLimitResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgAddRateLimitResponse",
  encode(_: MsgAddRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRateLimitResponse();
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
  fromPartial(_: Partial<MsgAddRateLimitResponse>): MsgAddRateLimitResponse {
    const message = createBaseMsgAddRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgAddRateLimitResponseAmino): MsgAddRateLimitResponse {
    const message = createBaseMsgAddRateLimitResponse();
    return message;
  },
  toAmino(_: MsgAddRateLimitResponse): MsgAddRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddRateLimitResponseAminoMsg): MsgAddRateLimitResponse {
    return MsgAddRateLimitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddRateLimitResponse): MsgAddRateLimitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAddRateLimitResponse",
      value: MsgAddRateLimitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddRateLimitResponseProtoMsg): MsgAddRateLimitResponse {
    return MsgAddRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgAddRateLimitResponse): Uint8Array {
    return MsgAddRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRateLimitResponse): MsgAddRateLimitResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgAddRateLimitResponse",
      value: MsgAddRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRateLimit(): MsgUpdateRateLimit {
  return {
    signer: "",
    denom: "",
    channelOrClientId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: BigInt(0)
  };
}
export const MsgUpdateRateLimit = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgUpdateRateLimit",
  encode(message: MsgUpdateRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(34).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(42).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(48).uint64(message.durationHours);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        case 4:
          message.maxPercentSend = reader.string();
          break;
        case 5:
          message.maxPercentRecv = reader.string();
          break;
        case 6:
          message.durationHours = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateRateLimit>): MsgUpdateRateLimit {
    const message = createBaseMsgUpdateRateLimit();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.channelOrClientId = object.channelOrClientId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? BigInt(object.durationHours.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateRateLimitAmino): MsgUpdateRateLimit {
    const message = createBaseMsgUpdateRateLimit();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    if (object.max_percent_send !== undefined && object.max_percent_send !== null) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (object.max_percent_recv !== undefined && object.max_percent_recv !== null) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    return message;
  },
  toAmino(message: MsgUpdateRateLimit): MsgUpdateRateLimitAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    obj.max_percent_send = message.maxPercentSend === "" ? undefined : message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv === "" ? undefined : message.maxPercentRecv;
    obj.duration_hours = message.durationHours !== BigInt(0) ? message.durationHours?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRateLimitAminoMsg): MsgUpdateRateLimit {
    return MsgUpdateRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateRateLimit): MsgUpdateRateLimitAminoMsg {
    return {
      type: "ratelimit/MsgUpdateRateLimit",
      value: MsgUpdateRateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateRateLimitProtoMsg): MsgUpdateRateLimit {
    return MsgUpdateRateLimit.decode(message.value);
  },
  toProto(message: MsgUpdateRateLimit): Uint8Array {
    return MsgUpdateRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRateLimit): MsgUpdateRateLimitProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgUpdateRateLimit",
      value: MsgUpdateRateLimit.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRateLimitResponse(): MsgUpdateRateLimitResponse {
  return {};
}
export const MsgUpdateRateLimitResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgUpdateRateLimitResponse",
  encode(_: MsgUpdateRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRateLimitResponse();
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
  fromPartial(_: Partial<MsgUpdateRateLimitResponse>): MsgUpdateRateLimitResponse {
    const message = createBaseMsgUpdateRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRateLimitResponseAmino): MsgUpdateRateLimitResponse {
    const message = createBaseMsgUpdateRateLimitResponse();
    return message;
  },
  toAmino(_: MsgUpdateRateLimitResponse): MsgUpdateRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRateLimitResponseAminoMsg): MsgUpdateRateLimitResponse {
    return MsgUpdateRateLimitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateRateLimitResponse): MsgUpdateRateLimitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateRateLimitResponse",
      value: MsgUpdateRateLimitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateRateLimitResponseProtoMsg): MsgUpdateRateLimitResponse {
    return MsgUpdateRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRateLimitResponse): Uint8Array {
    return MsgUpdateRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRateLimitResponse): MsgUpdateRateLimitResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgUpdateRateLimitResponse",
      value: MsgUpdateRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveRateLimit(): MsgRemoveRateLimit {
  return {
    signer: "",
    denom: "",
    channelOrClientId: ""
  };
}
export const MsgRemoveRateLimit = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgRemoveRateLimit",
  encode(message: MsgRemoveRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveRateLimit>): MsgRemoveRateLimit {
    const message = createBaseMsgRemoveRateLimit();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.channelOrClientId = object.channelOrClientId ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveRateLimitAmino): MsgRemoveRateLimit {
    const message = createBaseMsgRemoveRateLimit();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    return message;
  },
  toAmino(message: MsgRemoveRateLimit): MsgRemoveRateLimitAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveRateLimitAminoMsg): MsgRemoveRateLimit {
    return MsgRemoveRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveRateLimit): MsgRemoveRateLimitAminoMsg {
    return {
      type: "ratelimit/MsgRemoveRateLimit",
      value: MsgRemoveRateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveRateLimitProtoMsg): MsgRemoveRateLimit {
    return MsgRemoveRateLimit.decode(message.value);
  },
  toProto(message: MsgRemoveRateLimit): Uint8Array {
    return MsgRemoveRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveRateLimit): MsgRemoveRateLimitProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgRemoveRateLimit",
      value: MsgRemoveRateLimit.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveRateLimitResponse(): MsgRemoveRateLimitResponse {
  return {};
}
export const MsgRemoveRateLimitResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgRemoveRateLimitResponse",
  encode(_: MsgRemoveRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRateLimitResponse();
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
  fromPartial(_: Partial<MsgRemoveRateLimitResponse>): MsgRemoveRateLimitResponse {
    const message = createBaseMsgRemoveRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgRemoveRateLimitResponseAmino): MsgRemoveRateLimitResponse {
    const message = createBaseMsgRemoveRateLimitResponse();
    return message;
  },
  toAmino(_: MsgRemoveRateLimitResponse): MsgRemoveRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveRateLimitResponseAminoMsg): MsgRemoveRateLimitResponse {
    return MsgRemoveRateLimitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveRateLimitResponse): MsgRemoveRateLimitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRemoveRateLimitResponse",
      value: MsgRemoveRateLimitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveRateLimitResponseProtoMsg): MsgRemoveRateLimitResponse {
    return MsgRemoveRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgRemoveRateLimitResponse): Uint8Array {
    return MsgRemoveRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveRateLimitResponse): MsgRemoveRateLimitResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgRemoveRateLimitResponse",
      value: MsgRemoveRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResetRateLimit(): MsgResetRateLimit {
  return {
    signer: "",
    denom: "",
    channelOrClientId: ""
  };
}
export const MsgResetRateLimit = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgResetRateLimit",
  encode(message: MsgResetRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(26).string(message.channelOrClientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResetRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgResetRateLimit>): MsgResetRateLimit {
    const message = createBaseMsgResetRateLimit();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.channelOrClientId = object.channelOrClientId ?? "";
    return message;
  },
  fromAmino(object: MsgResetRateLimitAmino): MsgResetRateLimit {
    const message = createBaseMsgResetRateLimit();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    return message;
  },
  toAmino(message: MsgResetRateLimit): MsgResetRateLimitAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    return obj;
  },
  fromAminoMsg(object: MsgResetRateLimitAminoMsg): MsgResetRateLimit {
    return MsgResetRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResetRateLimit): MsgResetRateLimitAminoMsg {
    return {
      type: "ratelimit/MsgResetRateLimit",
      value: MsgResetRateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResetRateLimitProtoMsg): MsgResetRateLimit {
    return MsgResetRateLimit.decode(message.value);
  },
  toProto(message: MsgResetRateLimit): Uint8Array {
    return MsgResetRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgResetRateLimit): MsgResetRateLimitProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgResetRateLimit",
      value: MsgResetRateLimit.encode(message).finish()
    };
  }
};
function createBaseMsgResetRateLimitResponse(): MsgResetRateLimitResponse {
  return {};
}
export const MsgResetRateLimitResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.MsgResetRateLimitResponse",
  encode(_: MsgResetRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResetRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetRateLimitResponse();
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
  fromPartial(_: Partial<MsgResetRateLimitResponse>): MsgResetRateLimitResponse {
    const message = createBaseMsgResetRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgResetRateLimitResponseAmino): MsgResetRateLimitResponse {
    const message = createBaseMsgResetRateLimitResponse();
    return message;
  },
  toAmino(_: MsgResetRateLimitResponse): MsgResetRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResetRateLimitResponseAminoMsg): MsgResetRateLimitResponse {
    return MsgResetRateLimitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResetRateLimitResponse): MsgResetRateLimitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgResetRateLimitResponse",
      value: MsgResetRateLimitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResetRateLimitResponseProtoMsg): MsgResetRateLimitResponse {
    return MsgResetRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgResetRateLimitResponse): Uint8Array {
    return MsgResetRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResetRateLimitResponse): MsgResetRateLimitResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.MsgResetRateLimitResponse",
      value: MsgResetRateLimitResponse.encode(message).finish()
    };
  }
};