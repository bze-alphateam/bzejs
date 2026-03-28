//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/**
 * PacketDirection defines whether the transfer packet is being sent from
 * this chain or is being received on this chain
 */
export enum PacketDirection {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}
export const PacketDirectionSDKType = PacketDirection;
export const PacketDirectionAmino = PacketDirection;
export function packetDirectionFromJSON(object: any): PacketDirection {
  switch (object) {
    case 0:
    case "PACKET_SEND":
      return PacketDirection.PACKET_SEND;
    case 1:
    case "PACKET_RECV":
      return PacketDirection.PACKET_RECV;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketDirection.UNRECOGNIZED;
  }
}
export function packetDirectionToJSON(object: PacketDirection): string {
  switch (object) {
    case PacketDirection.PACKET_SEND:
      return "PACKET_SEND";
    case PacketDirection.PACKET_RECV:
      return "PACKET_RECV";
    case PacketDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Path holds the denom and channelID that define the rate limited route
 * @name Path
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Path
 */
export interface Path {
  denom: string;
  channelOrClientId: string;
}
export interface PathProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.Path";
  value: Uint8Array;
}
/**
 * Path holds the denom and channelID that define the rate limited route
 * @name PathAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Path
 */
export interface PathAmino {
  denom?: string;
  channel_or_client_id?: string;
}
export interface PathAminoMsg {
  type: "cosmos-sdk/Path";
  value: PathAmino;
}
/**
 * Path holds the denom and channelID that define the rate limited route
 * @name PathSDKType
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Path
 */
export interface PathSDKType {
  denom: string;
  channel_or_client_id: string;
}
/**
 * Quota defines the rate limit thresholds for transfer packets
 * @name Quota
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Quota
 */
export interface Quota {
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
export interface QuotaProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.Quota";
  value: Uint8Array;
}
/**
 * Quota defines the rate limit thresholds for transfer packets
 * @name QuotaAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Quota
 */
export interface QuotaAmino {
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
export interface QuotaAminoMsg {
  type: "cosmos-sdk/Quota";
  value: QuotaAmino;
}
/**
 * Quota defines the rate limit thresholds for transfer packets
 * @name QuotaSDKType
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Quota
 */
export interface QuotaSDKType {
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
}
/**
 * Flow tracks all the inflows and outflows of a channel.
 * @name Flow
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Flow
 */
export interface Flow {
  /**
   * Inflow defines the total amount of inbound transfers for the given
   * rate limit in the current window
   */
  inflow: string;
  /**
   * Outflow defines the total amount of outbound transfers for the given
   * rate limit in the current window
   */
  outflow: string;
  /**
   * ChannelValue stores the total supply of the denom at the start of
   * the rate limit. This is used as the denominator when checking
   * the rate limit threshold
   * The ChannelValue is fixed for the duration of the rate limit window
   */
  channelValue: string;
}
export interface FlowProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.Flow";
  value: Uint8Array;
}
/**
 * Flow tracks all the inflows and outflows of a channel.
 * @name FlowAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Flow
 */
export interface FlowAmino {
  /**
   * Inflow defines the total amount of inbound transfers for the given
   * rate limit in the current window
   */
  inflow?: string;
  /**
   * Outflow defines the total amount of outbound transfers for the given
   * rate limit in the current window
   */
  outflow?: string;
  /**
   * ChannelValue stores the total supply of the denom at the start of
   * the rate limit. This is used as the denominator when checking
   * the rate limit threshold
   * The ChannelValue is fixed for the duration of the rate limit window
   */
  channel_value?: string;
}
export interface FlowAminoMsg {
  type: "cosmos-sdk/Flow";
  value: FlowAmino;
}
/**
 * Flow tracks all the inflows and outflows of a channel.
 * @name FlowSDKType
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Flow
 */
export interface FlowSDKType {
  inflow: string;
  outflow: string;
  channel_value: string;
}
/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 * @name RateLimit
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.RateLimit
 */
export interface RateLimit {
  path?: Path;
  quota?: Quota;
  flow?: Flow;
}
export interface RateLimitProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.RateLimit";
  value: Uint8Array;
}
/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 * @name RateLimitAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.RateLimit
 */
export interface RateLimitAmino {
  path?: PathAmino;
  quota?: QuotaAmino;
  flow?: FlowAmino;
}
export interface RateLimitAminoMsg {
  type: "cosmos-sdk/RateLimit";
  value: RateLimitAmino;
}
/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 * @name RateLimitSDKType
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.RateLimit
 */
export interface RateLimitSDKType {
  path?: PathSDKType;
  quota?: QuotaSDKType;
  flow?: FlowSDKType;
}
/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 * @name WhitelistedAddressPair
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.WhitelistedAddressPair
 */
export interface WhitelistedAddressPair {
  sender: string;
  receiver: string;
}
export interface WhitelistedAddressPairProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.WhitelistedAddressPair";
  value: Uint8Array;
}
/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 * @name WhitelistedAddressPairAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.WhitelistedAddressPair
 */
export interface WhitelistedAddressPairAmino {
  sender?: string;
  receiver?: string;
}
export interface WhitelistedAddressPairAminoMsg {
  type: "cosmos-sdk/WhitelistedAddressPair";
  value: WhitelistedAddressPairAmino;
}
/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 * @name WhitelistedAddressPairSDKType
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.WhitelistedAddressPair
 */
export interface WhitelistedAddressPairSDKType {
  sender: string;
  receiver: string;
}
/**
 * HourEpoch is the epoch type.
 * @name HourEpoch
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.HourEpoch
 */
export interface HourEpoch {
  epochNumber: bigint;
  duration: Duration;
  epochStartTime: Date;
  epochStartHeight: bigint;
}
export interface HourEpochProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.HourEpoch";
  value: Uint8Array;
}
/**
 * HourEpoch is the epoch type.
 * @name HourEpochAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.HourEpoch
 */
export interface HourEpochAmino {
  epoch_number?: string;
  duration?: DurationAmino;
  epoch_start_time?: string;
  epoch_start_height?: string;
}
export interface HourEpochAminoMsg {
  type: "cosmos-sdk/HourEpoch";
  value: HourEpochAmino;
}
/**
 * HourEpoch is the epoch type.
 * @name HourEpochSDKType
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.HourEpoch
 */
export interface HourEpochSDKType {
  epoch_number: bigint;
  duration: DurationSDKType;
  epoch_start_time: Date;
  epoch_start_height: bigint;
}
function createBasePath(): Path {
  return {
    denom: "",
    channelOrClientId: ""
  };
}
/**
 * Path holds the denom and channelID that define the rate limited route
 * @name Path
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Path
 */
export const Path = {
  typeUrl: "/ibc.applications.rate_limiting.v1.Path",
  aminoType: "cosmos-sdk/Path",
  is(o: any): o is Path {
    return o && (o.$typeUrl === Path.typeUrl || typeof o.denom === "string" && typeof o.channelOrClientId === "string");
  },
  isSDK(o: any): o is PathSDKType {
    return o && (o.$typeUrl === Path.typeUrl || typeof o.denom === "string" && typeof o.channel_or_client_id === "string");
  },
  isAmino(o: any): o is PathAmino {
    return o && (o.$typeUrl === Path.typeUrl || typeof o.denom === "string" && typeof o.channel_or_client_id === "string");
  },
  encode(message: Path, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(18).string(message.channelOrClientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Path {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Path>): Path {
    const message = createBasePath();
    message.denom = object.denom ?? "";
    message.channelOrClientId = object.channelOrClientId ?? "";
    return message;
  },
  fromAmino(object: PathAmino): Path {
    const message = createBasePath();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    return message;
  },
  toAmino(message: Path): PathAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    return obj;
  },
  fromAminoMsg(object: PathAminoMsg): Path {
    return Path.fromAmino(object.value);
  },
  toAminoMsg(message: Path): PathAminoMsg {
    return {
      type: "cosmos-sdk/Path",
      value: Path.toAmino(message)
    };
  },
  fromProtoMsg(message: PathProtoMsg): Path {
    return Path.decode(message.value);
  },
  toProto(message: Path): Uint8Array {
    return Path.encode(message).finish();
  },
  toProtoMsg(message: Path): PathProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.Path",
      value: Path.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuota(): Quota {
  return {
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: BigInt(0)
  };
}
/**
 * Quota defines the rate limit thresholds for transfer packets
 * @name Quota
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Quota
 */
export const Quota = {
  typeUrl: "/ibc.applications.rate_limiting.v1.Quota",
  aminoType: "cosmos-sdk/Quota",
  is(o: any): o is Quota {
    return o && (o.$typeUrl === Quota.typeUrl || typeof o.maxPercentSend === "string" && typeof o.maxPercentRecv === "string" && typeof o.durationHours === "bigint");
  },
  isSDK(o: any): o is QuotaSDKType {
    return o && (o.$typeUrl === Quota.typeUrl || typeof o.max_percent_send === "string" && typeof o.max_percent_recv === "string" && typeof o.duration_hours === "bigint");
  },
  isAmino(o: any): o is QuotaAmino {
    return o && (o.$typeUrl === Quota.typeUrl || typeof o.max_percent_send === "string" && typeof o.max_percent_recv === "string" && typeof o.duration_hours === "bigint");
  },
  encode(message: Quota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPercentSend !== "") {
      writer.uint32(10).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(18).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(24).uint64(message.durationHours);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Quota {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuota();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPercentSend = reader.string();
          break;
        case 2:
          message.maxPercentRecv = reader.string();
          break;
        case 3:
          message.durationHours = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Quota>): Quota {
    const message = createBaseQuota();
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? BigInt(object.durationHours.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuotaAmino): Quota {
    const message = createBaseQuota();
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
  toAmino(message: Quota): QuotaAmino {
    const obj: any = {};
    obj.max_percent_send = message.maxPercentSend === "" ? undefined : message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv === "" ? undefined : message.maxPercentRecv;
    obj.duration_hours = message.durationHours !== BigInt(0) ? message.durationHours?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuotaAminoMsg): Quota {
    return Quota.fromAmino(object.value);
  },
  toAminoMsg(message: Quota): QuotaAminoMsg {
    return {
      type: "cosmos-sdk/Quota",
      value: Quota.toAmino(message)
    };
  },
  fromProtoMsg(message: QuotaProtoMsg): Quota {
    return Quota.decode(message.value);
  },
  toProto(message: Quota): Uint8Array {
    return Quota.encode(message).finish();
  },
  toProtoMsg(message: Quota): QuotaProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.Quota",
      value: Quota.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFlow(): Flow {
  return {
    inflow: "",
    outflow: "",
    channelValue: ""
  };
}
/**
 * Flow tracks all the inflows and outflows of a channel.
 * @name Flow
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.Flow
 */
export const Flow = {
  typeUrl: "/ibc.applications.rate_limiting.v1.Flow",
  aminoType: "cosmos-sdk/Flow",
  is(o: any): o is Flow {
    return o && (o.$typeUrl === Flow.typeUrl || typeof o.inflow === "string" && typeof o.outflow === "string" && typeof o.channelValue === "string");
  },
  isSDK(o: any): o is FlowSDKType {
    return o && (o.$typeUrl === Flow.typeUrl || typeof o.inflow === "string" && typeof o.outflow === "string" && typeof o.channel_value === "string");
  },
  isAmino(o: any): o is FlowAmino {
    return o && (o.$typeUrl === Flow.typeUrl || typeof o.inflow === "string" && typeof o.outflow === "string" && typeof o.channel_value === "string");
  },
  encode(message: Flow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflow !== "") {
      writer.uint32(10).string(message.inflow);
    }
    if (message.outflow !== "") {
      writer.uint32(18).string(message.outflow);
    }
    if (message.channelValue !== "") {
      writer.uint32(26).string(message.channelValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Flow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflow = reader.string();
          break;
        case 2:
          message.outflow = reader.string();
          break;
        case 3:
          message.channelValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Flow>): Flow {
    const message = createBaseFlow();
    message.inflow = object.inflow ?? "";
    message.outflow = object.outflow ?? "";
    message.channelValue = object.channelValue ?? "";
    return message;
  },
  fromAmino(object: FlowAmino): Flow {
    const message = createBaseFlow();
    if (object.inflow !== undefined && object.inflow !== null) {
      message.inflow = object.inflow;
    }
    if (object.outflow !== undefined && object.outflow !== null) {
      message.outflow = object.outflow;
    }
    if (object.channel_value !== undefined && object.channel_value !== null) {
      message.channelValue = object.channel_value;
    }
    return message;
  },
  toAmino(message: Flow): FlowAmino {
    const obj: any = {};
    obj.inflow = message.inflow === "" ? undefined : message.inflow;
    obj.outflow = message.outflow === "" ? undefined : message.outflow;
    obj.channel_value = message.channelValue === "" ? undefined : message.channelValue;
    return obj;
  },
  fromAminoMsg(object: FlowAminoMsg): Flow {
    return Flow.fromAmino(object.value);
  },
  toAminoMsg(message: Flow): FlowAminoMsg {
    return {
      type: "cosmos-sdk/Flow",
      value: Flow.toAmino(message)
    };
  },
  fromProtoMsg(message: FlowProtoMsg): Flow {
    return Flow.decode(message.value);
  },
  toProto(message: Flow): Uint8Array {
    return Flow.encode(message).finish();
  },
  toProtoMsg(message: Flow): FlowProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.Flow",
      value: Flow.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRateLimit(): RateLimit {
  return {
    path: undefined,
    quota: undefined,
    flow: undefined
  };
}
/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 * @name RateLimit
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.RateLimit
 */
export const RateLimit = {
  typeUrl: "/ibc.applications.rate_limiting.v1.RateLimit",
  aminoType: "cosmos-sdk/RateLimit",
  is(o: any): o is RateLimit {
    return o && o.$typeUrl === RateLimit.typeUrl;
  },
  isSDK(o: any): o is RateLimitSDKType {
    return o && o.$typeUrl === RateLimit.typeUrl;
  },
  isAmino(o: any): o is RateLimitAmino {
    return o && o.$typeUrl === RateLimit.typeUrl;
  },
  encode(message: RateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== undefined) {
      Path.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(18).fork()).ldelim();
    }
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = Path.decode(reader, reader.uint32());
          break;
        case 2:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 3:
          message.flow = Flow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RateLimit>): RateLimit {
    const message = createBaseRateLimit();
    message.path = object.path !== undefined && object.path !== null ? Path.fromPartial(object.path) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: RateLimitAmino): RateLimit {
    const message = createBaseRateLimit();
    if (object.path !== undefined && object.path !== null) {
      message.path = Path.fromAmino(object.path);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromAmino(object.quota);
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: RateLimit): RateLimitAmino {
    const obj: any = {};
    obj.path = message.path ? Path.toAmino(message.path) : undefined;
    obj.quota = message.quota ? Quota.toAmino(message.quota) : undefined;
    obj.flow = message.flow ? Flow.toAmino(message.flow) : undefined;
    return obj;
  },
  fromAminoMsg(object: RateLimitAminoMsg): RateLimit {
    return RateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: RateLimit): RateLimitAminoMsg {
    return {
      type: "cosmos-sdk/RateLimit",
      value: RateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: RateLimitProtoMsg): RateLimit {
    return RateLimit.decode(message.value);
  },
  toProto(message: RateLimit): Uint8Array {
    return RateLimit.encode(message).finish();
  },
  toProtoMsg(message: RateLimit): RateLimitProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.RateLimit",
      value: RateLimit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(RateLimit.typeUrl)) {
      return;
    }
    Path.registerTypeUrl();
    Quota.registerTypeUrl();
    Flow.registerTypeUrl();
  }
};
function createBaseWhitelistedAddressPair(): WhitelistedAddressPair {
  return {
    sender: "",
    receiver: ""
  };
}
/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 * @name WhitelistedAddressPair
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.WhitelistedAddressPair
 */
export const WhitelistedAddressPair = {
  typeUrl: "/ibc.applications.rate_limiting.v1.WhitelistedAddressPair",
  aminoType: "cosmos-sdk/WhitelistedAddressPair",
  is(o: any): o is WhitelistedAddressPair {
    return o && (o.$typeUrl === WhitelistedAddressPair.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isSDK(o: any): o is WhitelistedAddressPairSDKType {
    return o && (o.$typeUrl === WhitelistedAddressPair.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is WhitelistedAddressPairAmino {
    return o && (o.$typeUrl === WhitelistedAddressPair.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
  },
  encode(message: WhitelistedAddressPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistedAddressPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedAddressPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistedAddressPair>): WhitelistedAddressPair {
    const message = createBaseWhitelistedAddressPair();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: WhitelistedAddressPairAmino): WhitelistedAddressPair {
    const message = createBaseWhitelistedAddressPair();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: WhitelistedAddressPair): WhitelistedAddressPairAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: WhitelistedAddressPairAminoMsg): WhitelistedAddressPair {
    return WhitelistedAddressPair.fromAmino(object.value);
  },
  toAminoMsg(message: WhitelistedAddressPair): WhitelistedAddressPairAminoMsg {
    return {
      type: "cosmos-sdk/WhitelistedAddressPair",
      value: WhitelistedAddressPair.toAmino(message)
    };
  },
  fromProtoMsg(message: WhitelistedAddressPairProtoMsg): WhitelistedAddressPair {
    return WhitelistedAddressPair.decode(message.value);
  },
  toProto(message: WhitelistedAddressPair): Uint8Array {
    return WhitelistedAddressPair.encode(message).finish();
  },
  toProtoMsg(message: WhitelistedAddressPair): WhitelistedAddressPairProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.WhitelistedAddressPair",
      value: WhitelistedAddressPair.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseHourEpoch(): HourEpoch {
  return {
    epochNumber: BigInt(0),
    duration: Duration.fromPartial({}),
    epochStartTime: new Date(),
    epochStartHeight: BigInt(0)
  };
}
/**
 * HourEpoch is the epoch type.
 * @name HourEpoch
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.HourEpoch
 */
export const HourEpoch = {
  typeUrl: "/ibc.applications.rate_limiting.v1.HourEpoch",
  aminoType: "cosmos-sdk/HourEpoch",
  is(o: any): o is HourEpoch {
    return o && (o.$typeUrl === HourEpoch.typeUrl || typeof o.epochNumber === "bigint" && Duration.is(o.duration) && Timestamp.is(o.epochStartTime) && typeof o.epochStartHeight === "bigint");
  },
  isSDK(o: any): o is HourEpochSDKType {
    return o && (o.$typeUrl === HourEpoch.typeUrl || typeof o.epoch_number === "bigint" && Duration.isSDK(o.duration) && Timestamp.isSDK(o.epoch_start_time) && typeof o.epoch_start_height === "bigint");
  },
  isAmino(o: any): o is HourEpochAmino {
    return o && (o.$typeUrl === HourEpoch.typeUrl || typeof o.epoch_number === "bigint" && Duration.isAmino(o.duration) && Timestamp.isAmino(o.epoch_start_time) && typeof o.epoch_start_height === "bigint");
  },
  encode(message: HourEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.epochStartTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.epochStartHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.epochStartHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HourEpoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHourEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.epochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.epochStartHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HourEpoch>): HourEpoch {
    const message = createBaseHourEpoch();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.epochStartTime = object.epochStartTime ?? undefined;
    message.epochStartHeight = object.epochStartHeight !== undefined && object.epochStartHeight !== null ? BigInt(object.epochStartHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: HourEpochAmino): HourEpoch {
    const message = createBaseHourEpoch();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.epoch_start_time !== undefined && object.epoch_start_time !== null) {
      message.epochStartTime = fromTimestamp(Timestamp.fromAmino(object.epoch_start_time));
    }
    if (object.epoch_start_height !== undefined && object.epoch_start_height !== null) {
      message.epochStartHeight = BigInt(object.epoch_start_height);
    }
    return message;
  },
  toAmino(message: HourEpoch): HourEpochAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.epoch_start_time = message.epochStartTime ? Timestamp.toAmino(toTimestamp(message.epochStartTime)) : undefined;
    obj.epoch_start_height = message.epochStartHeight !== BigInt(0) ? message.epochStartHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HourEpochAminoMsg): HourEpoch {
    return HourEpoch.fromAmino(object.value);
  },
  toAminoMsg(message: HourEpoch): HourEpochAminoMsg {
    return {
      type: "cosmos-sdk/HourEpoch",
      value: HourEpoch.toAmino(message)
    };
  },
  fromProtoMsg(message: HourEpochProtoMsg): HourEpoch {
    return HourEpoch.decode(message.value);
  },
  toProto(message: HourEpoch): Uint8Array {
    return HourEpoch.encode(message).finish();
  },
  toProtoMsg(message: HourEpoch): HourEpochProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.HourEpoch",
      value: HourEpoch.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};