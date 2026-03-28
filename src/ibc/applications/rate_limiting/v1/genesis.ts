//@ts-nocheck
import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType, HourEpoch, HourEpochAmino, HourEpochSDKType } from "./rate_limiting";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * GenesisState defines the ratelimit module's genesis state.
 * @name GenesisState
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.GenesisState
 */
export interface GenesisState {
  rateLimits: RateLimit[];
  whitelistedAddressPairs: WhitelistedAddressPair[];
  blacklistedDenoms: string[];
  pendingSendPacketSequenceNumbers: string[];
  hourEpoch: HourEpoch;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the ratelimit module's genesis state.
 * @name GenesisStateAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.GenesisState
 */
export interface GenesisStateAmino {
  rate_limits?: RateLimitAmino[];
  whitelisted_address_pairs?: WhitelistedAddressPairAmino[];
  blacklisted_denoms?: string[];
  pending_send_packet_sequence_numbers?: string[];
  hour_epoch?: HourEpochAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the ratelimit module's genesis state.
 * @name GenesisStateSDKType
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.GenesisState
 */
export interface GenesisStateSDKType {
  rate_limits: RateLimitSDKType[];
  whitelisted_address_pairs: WhitelistedAddressPairSDKType[];
  blacklisted_denoms: string[];
  pending_send_packet_sequence_numbers: string[];
  hour_epoch: HourEpochSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    rateLimits: [],
    whitelistedAddressPairs: [],
    blacklistedDenoms: [],
    pendingSendPacketSequenceNumbers: [],
    hourEpoch: HourEpoch.fromPartial({})
  };
}
/**
 * GenesisState defines the ratelimit module's genesis state.
 * @name GenesisState
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/ibc.applications.rate_limiting.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.rateLimits) && (!o.rateLimits.length || RateLimit.is(o.rateLimits[0])) && Array.isArray(o.whitelistedAddressPairs) && (!o.whitelistedAddressPairs.length || WhitelistedAddressPair.is(o.whitelistedAddressPairs[0])) && Array.isArray(o.blacklistedDenoms) && (!o.blacklistedDenoms.length || typeof o.blacklistedDenoms[0] === "string") && Array.isArray(o.pendingSendPacketSequenceNumbers) && (!o.pendingSendPacketSequenceNumbers.length || typeof o.pendingSendPacketSequenceNumbers[0] === "string") && HourEpoch.is(o.hourEpoch));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isSDK(o.rate_limits[0])) && Array.isArray(o.whitelisted_address_pairs) && (!o.whitelisted_address_pairs.length || WhitelistedAddressPair.isSDK(o.whitelisted_address_pairs[0])) && Array.isArray(o.blacklisted_denoms) && (!o.blacklisted_denoms.length || typeof o.blacklisted_denoms[0] === "string") && Array.isArray(o.pending_send_packet_sequence_numbers) && (!o.pending_send_packet_sequence_numbers.length || typeof o.pending_send_packet_sequence_numbers[0] === "string") && HourEpoch.isSDK(o.hour_epoch));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isAmino(o.rate_limits[0])) && Array.isArray(o.whitelisted_address_pairs) && (!o.whitelisted_address_pairs.length || WhitelistedAddressPair.isAmino(o.whitelisted_address_pairs[0])) && Array.isArray(o.blacklisted_denoms) && (!o.blacklisted_denoms.length || typeof o.blacklisted_denoms[0] === "string") && Array.isArray(o.pending_send_packet_sequence_numbers) && (!o.pending_send_packet_sequence_numbers.length || typeof o.pending_send_packet_sequence_numbers[0] === "string") && HourEpoch.isAmino(o.hour_epoch));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.whitelistedAddressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.blacklistedDenoms) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.pendingSendPacketSequenceNumbers) {
      writer.uint32(34).string(v!);
    }
    if (message.hourEpoch !== undefined) {
      HourEpoch.encode(message.hourEpoch, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.whitelistedAddressPairs.push(WhitelistedAddressPair.decode(reader, reader.uint32()));
          break;
        case 3:
          message.blacklistedDenoms.push(reader.string());
          break;
        case 4:
          message.pendingSendPacketSequenceNumbers.push(reader.string());
          break;
        case 5:
          message.hourEpoch = HourEpoch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    message.whitelistedAddressPairs = object.whitelistedAddressPairs?.map(e => WhitelistedAddressPair.fromPartial(e)) || [];
    message.blacklistedDenoms = object.blacklistedDenoms?.map(e => e) || [];
    message.pendingSendPacketSequenceNumbers = object.pendingSendPacketSequenceNumbers?.map(e => e) || [];
    message.hourEpoch = object.hourEpoch !== undefined && object.hourEpoch !== null ? HourEpoch.fromPartial(object.hourEpoch) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    message.whitelistedAddressPairs = object.whitelisted_address_pairs?.map(e => WhitelistedAddressPair.fromAmino(e)) || [];
    message.blacklistedDenoms = object.blacklisted_denoms?.map(e => e) || [];
    message.pendingSendPacketSequenceNumbers = object.pending_send_packet_sequence_numbers?.map(e => e) || [];
    if (object.hour_epoch !== undefined && object.hour_epoch !== null) {
      message.hourEpoch = HourEpoch.fromAmino(object.hour_epoch);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    if (message.whitelistedAddressPairs) {
      obj.whitelisted_address_pairs = message.whitelistedAddressPairs.map(e => e ? WhitelistedAddressPair.toAmino(e) : undefined);
    } else {
      obj.whitelisted_address_pairs = message.whitelistedAddressPairs;
    }
    if (message.blacklistedDenoms) {
      obj.blacklisted_denoms = message.blacklistedDenoms.map(e => e);
    } else {
      obj.blacklisted_denoms = message.blacklistedDenoms;
    }
    if (message.pendingSendPacketSequenceNumbers) {
      obj.pending_send_packet_sequence_numbers = message.pendingSendPacketSequenceNumbers.map(e => e);
    } else {
      obj.pending_send_packet_sequence_numbers = message.pendingSendPacketSequenceNumbers;
    }
    obj.hour_epoch = message.hourEpoch ? HourEpoch.toAmino(message.hourEpoch) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    RateLimit.registerTypeUrl();
    WhitelistedAddressPair.registerTypeUrl();
    HourEpoch.registerTypeUrl();
  }
};