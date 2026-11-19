//@ts-nocheck
import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType } from "./ratelimit";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Queries all rate limits
 * @name QueryAllRateLimitsRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsRequest
 */
export interface QueryAllRateLimitsRequest {}
export interface QueryAllRateLimitsRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsRequest";
  value: Uint8Array;
}
/**
 * Queries all rate limits
 * @name QueryAllRateLimitsRequestAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsRequest
 */
export interface QueryAllRateLimitsRequestAmino {}
export interface QueryAllRateLimitsRequestAminoMsg {
  type: "/ratelimit.v1.QueryAllRateLimitsRequest";
  value: QueryAllRateLimitsRequestAmino;
}
/**
 * Queries all rate limits
 * @name QueryAllRateLimitsRequestSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsRequest
 */
export interface QueryAllRateLimitsRequestSDKType {}
/**
 * @name QueryAllRateLimitsResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsResponse
 */
export interface QueryAllRateLimitsResponse {
  rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllRateLimitsResponseAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsResponse
 */
export interface QueryAllRateLimitsResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryAllRateLimitsResponseAminoMsg {
  type: "/ratelimit.v1.QueryAllRateLimitsResponse";
  value: QueryAllRateLimitsResponseAmino;
}
/**
 * @name QueryAllRateLimitsResponseSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsResponse
 */
export interface QueryAllRateLimitsResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/**
 * Queries a specific rate limit by channel ID and denom
 * @name QueryRateLimitRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitRequest
 */
export interface QueryRateLimitRequest {
  denom: string;
  channelOrClientId: string;
}
export interface QueryRateLimitRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitRequest";
  value: Uint8Array;
}
/**
 * Queries a specific rate limit by channel ID and denom
 * @name QueryRateLimitRequestAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitRequest
 */
export interface QueryRateLimitRequestAmino {
  denom?: string;
  channel_or_client_id?: string;
}
export interface QueryRateLimitRequestAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitRequest";
  value: QueryRateLimitRequestAmino;
}
/**
 * Queries a specific rate limit by channel ID and denom
 * @name QueryRateLimitRequestSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitRequest
 */
export interface QueryRateLimitRequestSDKType {
  denom: string;
  channel_or_client_id: string;
}
/**
 * @name QueryRateLimitResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitResponse
 */
export interface QueryRateLimitResponse {
  rateLimit?: RateLimit;
}
export interface QueryRateLimitResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitResponse";
  value: Uint8Array;
}
/**
 * @name QueryRateLimitResponseAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitResponse
 */
export interface QueryRateLimitResponseAmino {
  rate_limit?: RateLimitAmino;
}
export interface QueryRateLimitResponseAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitResponse";
  value: QueryRateLimitResponseAmino;
}
/**
 * @name QueryRateLimitResponseSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitResponse
 */
export interface QueryRateLimitResponseSDKType {
  rate_limit?: RateLimitSDKType;
}
/**
 * Queries all the rate limits for a given chain
 * @name QueryRateLimitsByChainIdRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdRequest
 */
export interface QueryRateLimitsByChainIdRequest {
  chainId: string;
}
export interface QueryRateLimitsByChainIdRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdRequest";
  value: Uint8Array;
}
/**
 * Queries all the rate limits for a given chain
 * @name QueryRateLimitsByChainIdRequestAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdRequest
 */
export interface QueryRateLimitsByChainIdRequestAmino {
  chain_id?: string;
}
export interface QueryRateLimitsByChainIdRequestAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChainIdRequest";
  value: QueryRateLimitsByChainIdRequestAmino;
}
/**
 * Queries all the rate limits for a given chain
 * @name QueryRateLimitsByChainIdRequestSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdRequest
 */
export interface QueryRateLimitsByChainIdRequestSDKType {
  chain_id: string;
}
/**
 * @name QueryRateLimitsByChainIdResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdResponse
 */
export interface QueryRateLimitsByChainIdResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChainIdResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdResponse";
  value: Uint8Array;
}
/**
 * @name QueryRateLimitsByChainIdResponseAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdResponse
 */
export interface QueryRateLimitsByChainIdResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryRateLimitsByChainIdResponseAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChainIdResponse";
  value: QueryRateLimitsByChainIdResponseAmino;
}
/**
 * @name QueryRateLimitsByChainIdResponseSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdResponse
 */
export interface QueryRateLimitsByChainIdResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/**
 * Queries all the rate limits for a given channel or client ID
 * @name QueryRateLimitsByChannelOrClientIdRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest
 */
export interface QueryRateLimitsByChannelOrClientIdRequest {
  channelOrClientId: string;
}
export interface QueryRateLimitsByChannelOrClientIdRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest";
  value: Uint8Array;
}
/**
 * Queries all the rate limits for a given channel or client ID
 * @name QueryRateLimitsByChannelOrClientIdRequestAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest
 */
export interface QueryRateLimitsByChannelOrClientIdRequestAmino {
  channel_or_client_id?: string;
}
export interface QueryRateLimitsByChannelOrClientIdRequestAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest";
  value: QueryRateLimitsByChannelOrClientIdRequestAmino;
}
/**
 * Queries all the rate limits for a given channel or client ID
 * @name QueryRateLimitsByChannelOrClientIdRequestSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest
 */
export interface QueryRateLimitsByChannelOrClientIdRequestSDKType {
  channel_or_client_id: string;
}
/**
 * @name QueryRateLimitsByChannelOrClientIdResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse
 */
export interface QueryRateLimitsByChannelOrClientIdResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChannelOrClientIdResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse";
  value: Uint8Array;
}
/**
 * @name QueryRateLimitsByChannelOrClientIdResponseAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse
 */
export interface QueryRateLimitsByChannelOrClientIdResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryRateLimitsByChannelOrClientIdResponseAminoMsg {
  type: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse";
  value: QueryRateLimitsByChannelOrClientIdResponseAmino;
}
/**
 * @name QueryRateLimitsByChannelOrClientIdResponseSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse
 */
export interface QueryRateLimitsByChannelOrClientIdResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/**
 * Queries all blacklisted denoms
 * @name QueryAllBlacklistedDenomsRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsRequest
 */
export interface QueryAllBlacklistedDenomsRequest {}
export interface QueryAllBlacklistedDenomsRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest";
  value: Uint8Array;
}
/**
 * Queries all blacklisted denoms
 * @name QueryAllBlacklistedDenomsRequestAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsRequest
 */
export interface QueryAllBlacklistedDenomsRequestAmino {}
export interface QueryAllBlacklistedDenomsRequestAminoMsg {
  type: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest";
  value: QueryAllBlacklistedDenomsRequestAmino;
}
/**
 * Queries all blacklisted denoms
 * @name QueryAllBlacklistedDenomsRequestSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsRequest
 */
export interface QueryAllBlacklistedDenomsRequestSDKType {}
/**
 * @name QueryAllBlacklistedDenomsResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsResponse
 */
export interface QueryAllBlacklistedDenomsResponse {
  denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllBlacklistedDenomsResponseAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsResponse
 */
export interface QueryAllBlacklistedDenomsResponseAmino {
  denoms?: string[];
}
export interface QueryAllBlacklistedDenomsResponseAminoMsg {
  type: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse";
  value: QueryAllBlacklistedDenomsResponseAmino;
}
/**
 * @name QueryAllBlacklistedDenomsResponseSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsResponse
 */
export interface QueryAllBlacklistedDenomsResponseSDKType {
  denoms: string[];
}
/**
 * Queries all whitelisted address pairs
 * @name QueryAllWhitelistedAddressesRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesRequest
 */
export interface QueryAllWhitelistedAddressesRequest {}
export interface QueryAllWhitelistedAddressesRequestProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest";
  value: Uint8Array;
}
/**
 * Queries all whitelisted address pairs
 * @name QueryAllWhitelistedAddressesRequestAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesRequest
 */
export interface QueryAllWhitelistedAddressesRequestAmino {}
export interface QueryAllWhitelistedAddressesRequestAminoMsg {
  type: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest";
  value: QueryAllWhitelistedAddressesRequestAmino;
}
/**
 * Queries all whitelisted address pairs
 * @name QueryAllWhitelistedAddressesRequestSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesRequest
 */
export interface QueryAllWhitelistedAddressesRequestSDKType {}
/**
 * @name QueryAllWhitelistedAddressesResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesResponse
 */
export interface QueryAllWhitelistedAddressesResponse {
  addressPairs: WhitelistedAddressPair[];
}
export interface QueryAllWhitelistedAddressesResponseProtoMsg {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllWhitelistedAddressesResponseAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesResponse
 */
export interface QueryAllWhitelistedAddressesResponseAmino {
  address_pairs?: WhitelistedAddressPairAmino[];
}
export interface QueryAllWhitelistedAddressesResponseAminoMsg {
  type: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse";
  value: QueryAllWhitelistedAddressesResponseAmino;
}
/**
 * @name QueryAllWhitelistedAddressesResponseSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesResponse
 */
export interface QueryAllWhitelistedAddressesResponseSDKType {
  address_pairs: WhitelistedAddressPairSDKType[];
}
function createBaseQueryAllRateLimitsRequest(): QueryAllRateLimitsRequest {
  return {};
}
/**
 * Queries all rate limits
 * @name QueryAllRateLimitsRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsRequest
 */
export const QueryAllRateLimitsRequest = {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsRequest",
  is(o: any): o is QueryAllRateLimitsRequest {
    return o && o.$typeUrl === QueryAllRateLimitsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllRateLimitsRequestSDKType {
    return o && o.$typeUrl === QueryAllRateLimitsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllRateLimitsRequestAmino {
    return o && o.$typeUrl === QueryAllRateLimitsRequest.typeUrl;
  },
  encode(_: QueryAllRateLimitsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRateLimitsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRateLimitsRequest();
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
  fromPartial(_: Partial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  },
  fromAmino(_: QueryAllRateLimitsRequestAmino): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  },
  toAmino(_: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllRateLimitsRequestAminoMsg): QueryAllRateLimitsRequest {
    return QueryAllRateLimitsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRateLimitsRequestProtoMsg): QueryAllRateLimitsRequest {
    return QueryAllRateLimitsRequest.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsRequest): Uint8Array {
    return QueryAllRateLimitsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllRateLimitsRequest",
      value: QueryAllRateLimitsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAllRateLimitsResponse(): QueryAllRateLimitsResponse {
  return {
    rateLimits: []
  };
}
/**
 * @name QueryAllRateLimitsResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllRateLimitsResponse
 */
export const QueryAllRateLimitsResponse = {
  typeUrl: "/ratelimit.v1.QueryAllRateLimitsResponse",
  is(o: any): o is QueryAllRateLimitsResponse {
    return o && (o.$typeUrl === QueryAllRateLimitsResponse.typeUrl || Array.isArray(o.rateLimits) && (!o.rateLimits.length || RateLimit.is(o.rateLimits[0])));
  },
  isSDK(o: any): o is QueryAllRateLimitsResponseSDKType {
    return o && (o.$typeUrl === QueryAllRateLimitsResponse.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isSDK(o.rate_limits[0])));
  },
  isAmino(o: any): o is QueryAllRateLimitsResponseAmino {
    return o && (o.$typeUrl === QueryAllRateLimitsResponse.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isAmino(o.rate_limits[0])));
  },
  encode(message: QueryAllRateLimitsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRateLimitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRateLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse {
    const message = createBaseQueryAllRateLimitsResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllRateLimitsResponseAmino): QueryAllRateLimitsResponse {
    const message = createBaseQueryAllRateLimitsResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllRateLimitsResponseAminoMsg): QueryAllRateLimitsResponse {
    return QueryAllRateLimitsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRateLimitsResponseProtoMsg): QueryAllRateLimitsResponse {
    return QueryAllRateLimitsResponse.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsResponse): Uint8Array {
    return QueryAllRateLimitsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllRateLimitsResponse",
      value: QueryAllRateLimitsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllRateLimitsResponse.typeUrl)) {
      return;
    }
    RateLimit.registerTypeUrl();
  }
};
function createBaseQueryRateLimitRequest(): QueryRateLimitRequest {
  return {
    denom: "",
    channelOrClientId: ""
  };
}
/**
 * Queries a specific rate limit by channel ID and denom
 * @name QueryRateLimitRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitRequest
 */
export const QueryRateLimitRequest = {
  typeUrl: "/ratelimit.v1.QueryRateLimitRequest",
  is(o: any): o is QueryRateLimitRequest {
    return o && (o.$typeUrl === QueryRateLimitRequest.typeUrl || typeof o.denom === "string" && typeof o.channelOrClientId === "string");
  },
  isSDK(o: any): o is QueryRateLimitRequestSDKType {
    return o && (o.$typeUrl === QueryRateLimitRequest.typeUrl || typeof o.denom === "string" && typeof o.channel_or_client_id === "string");
  },
  isAmino(o: any): o is QueryRateLimitRequestAmino {
    return o && (o.$typeUrl === QueryRateLimitRequest.typeUrl || typeof o.denom === "string" && typeof o.channel_or_client_id === "string");
  },
  encode(message: QueryRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(18).string(message.channelOrClientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitRequest();
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
  fromPartial(object: Partial<QueryRateLimitRequest>): QueryRateLimitRequest {
    const message = createBaseQueryRateLimitRequest();
    message.denom = object.denom ?? "";
    message.channelOrClientId = object.channelOrClientId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitRequestAmino): QueryRateLimitRequest {
    const message = createBaseQueryRateLimitRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitRequest): QueryRateLimitRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitRequestAminoMsg): QueryRateLimitRequest {
    return QueryRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitRequestProtoMsg): QueryRateLimitRequest {
    return QueryRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitRequest): Uint8Array {
    return QueryRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitRequest): QueryRateLimitRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitRequest",
      value: QueryRateLimitRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRateLimitResponse(): QueryRateLimitResponse {
  return {
    rateLimit: undefined
  };
}
/**
 * @name QueryRateLimitResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitResponse
 */
export const QueryRateLimitResponse = {
  typeUrl: "/ratelimit.v1.QueryRateLimitResponse",
  is(o: any): o is QueryRateLimitResponse {
    return o && o.$typeUrl === QueryRateLimitResponse.typeUrl;
  },
  isSDK(o: any): o is QueryRateLimitResponseSDKType {
    return o && o.$typeUrl === QueryRateLimitResponse.typeUrl;
  },
  isAmino(o: any): o is QueryRateLimitResponseAmino {
    return o && o.$typeUrl === QueryRateLimitResponse.typeUrl;
  },
  encode(message: QueryRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimit = RateLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitResponse>): QueryRateLimitResponse {
    const message = createBaseQueryRateLimitResponse();
    message.rateLimit = object.rateLimit !== undefined && object.rateLimit !== null ? RateLimit.fromPartial(object.rateLimit) : undefined;
    return message;
  },
  fromAmino(object: QueryRateLimitResponseAmino): QueryRateLimitResponse {
    const message = createBaseQueryRateLimitResponse();
    if (object.rate_limit !== undefined && object.rate_limit !== null) {
      message.rateLimit = RateLimit.fromAmino(object.rate_limit);
    }
    return message;
  },
  toAmino(message: QueryRateLimitResponse): QueryRateLimitResponseAmino {
    const obj: any = {};
    obj.rate_limit = message.rateLimit ? RateLimit.toAmino(message.rateLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitResponseAminoMsg): QueryRateLimitResponse {
    return QueryRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitResponseProtoMsg): QueryRateLimitResponse {
    return QueryRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitResponse): Uint8Array {
    return QueryRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitResponse): QueryRateLimitResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitResponse",
      value: QueryRateLimitResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRateLimitResponse.typeUrl)) {
      return;
    }
    RateLimit.registerTypeUrl();
  }
};
function createBaseQueryRateLimitsByChainIdRequest(): QueryRateLimitsByChainIdRequest {
  return {
    chainId: ""
  };
}
/**
 * Queries all the rate limits for a given chain
 * @name QueryRateLimitsByChainIdRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdRequest
 */
export const QueryRateLimitsByChainIdRequest = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdRequest",
  is(o: any): o is QueryRateLimitsByChainIdRequest {
    return o && (o.$typeUrl === QueryRateLimitsByChainIdRequest.typeUrl || typeof o.chainId === "string");
  },
  isSDK(o: any): o is QueryRateLimitsByChainIdRequestSDKType {
    return o && (o.$typeUrl === QueryRateLimitsByChainIdRequest.typeUrl || typeof o.chain_id === "string");
  },
  isAmino(o: any): o is QueryRateLimitsByChainIdRequestAmino {
    return o && (o.$typeUrl === QueryRateLimitsByChainIdRequest.typeUrl || typeof o.chain_id === "string");
  },
  encode(message: QueryRateLimitsByChainIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChainIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest {
    const message = createBaseQueryRateLimitsByChainIdRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIdRequestAmino): QueryRateLimitsByChainIdRequest {
    const message = createBaseQueryRateLimitsByChainIdRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIdRequestAminoMsg): QueryRateLimitsByChainIdRequest {
    return QueryRateLimitsByChainIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChainIdRequestProtoMsg): QueryRateLimitsByChainIdRequest {
    return QueryRateLimitsByChainIdRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIdRequest): Uint8Array {
    return QueryRateLimitsByChainIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIdRequest): QueryRateLimitsByChainIdRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdRequest",
      value: QueryRateLimitsByChainIdRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRateLimitsByChainIdResponse(): QueryRateLimitsByChainIdResponse {
  return {
    rateLimits: []
  };
}
/**
 * @name QueryRateLimitsByChainIdResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChainIdResponse
 */
export const QueryRateLimitsByChainIdResponse = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdResponse",
  is(o: any): o is QueryRateLimitsByChainIdResponse {
    return o && (o.$typeUrl === QueryRateLimitsByChainIdResponse.typeUrl || Array.isArray(o.rateLimits) && (!o.rateLimits.length || RateLimit.is(o.rateLimits[0])));
  },
  isSDK(o: any): o is QueryRateLimitsByChainIdResponseSDKType {
    return o && (o.$typeUrl === QueryRateLimitsByChainIdResponse.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isSDK(o.rate_limits[0])));
  },
  isAmino(o: any): o is QueryRateLimitsByChainIdResponseAmino {
    return o && (o.$typeUrl === QueryRateLimitsByChainIdResponse.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isAmino(o.rate_limits[0])));
  },
  encode(message: QueryRateLimitsByChainIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChainIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse {
    const message = createBaseQueryRateLimitsByChainIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIdResponseAmino): QueryRateLimitsByChainIdResponse {
    const message = createBaseQueryRateLimitsByChainIdResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIdResponseAminoMsg): QueryRateLimitsByChainIdResponse {
    return QueryRateLimitsByChainIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChainIdResponseProtoMsg): QueryRateLimitsByChainIdResponse {
    return QueryRateLimitsByChainIdResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIdResponse): Uint8Array {
    return QueryRateLimitsByChainIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIdResponse): QueryRateLimitsByChainIdResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChainIdResponse",
      value: QueryRateLimitsByChainIdResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRateLimitsByChainIdResponse.typeUrl)) {
      return;
    }
    RateLimit.registerTypeUrl();
  }
};
function createBaseQueryRateLimitsByChannelOrClientIdRequest(): QueryRateLimitsByChannelOrClientIdRequest {
  return {
    channelOrClientId: ""
  };
}
/**
 * Queries all the rate limits for a given channel or client ID
 * @name QueryRateLimitsByChannelOrClientIdRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest
 */
export const QueryRateLimitsByChannelOrClientIdRequest = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest",
  is(o: any): o is QueryRateLimitsByChannelOrClientIdRequest {
    return o && (o.$typeUrl === QueryRateLimitsByChannelOrClientIdRequest.typeUrl || typeof o.channelOrClientId === "string");
  },
  isSDK(o: any): o is QueryRateLimitsByChannelOrClientIdRequestSDKType {
    return o && (o.$typeUrl === QueryRateLimitsByChannelOrClientIdRequest.typeUrl || typeof o.channel_or_client_id === "string");
  },
  isAmino(o: any): o is QueryRateLimitsByChannelOrClientIdRequestAmino {
    return o && (o.$typeUrl === QueryRateLimitsByChannelOrClientIdRequest.typeUrl || typeof o.channel_or_client_id === "string");
  },
  encode(message: QueryRateLimitsByChannelOrClientIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelOrClientId !== "") {
      writer.uint32(10).string(message.channelOrClientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChannelOrClientIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelOrClientIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChannelOrClientIdRequest>): QueryRateLimitsByChannelOrClientIdRequest {
    const message = createBaseQueryRateLimitsByChannelOrClientIdRequest();
    message.channelOrClientId = object.channelOrClientId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelOrClientIdRequestAmino): QueryRateLimitsByChannelOrClientIdRequest {
    const message = createBaseQueryRateLimitsByChannelOrClientIdRequest();
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelOrClientIdRequest): QueryRateLimitsByChannelOrClientIdRequestAmino {
    const obj: any = {};
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelOrClientIdRequestAminoMsg): QueryRateLimitsByChannelOrClientIdRequest {
    return QueryRateLimitsByChannelOrClientIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChannelOrClientIdRequestProtoMsg): QueryRateLimitsByChannelOrClientIdRequest {
    return QueryRateLimitsByChannelOrClientIdRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelOrClientIdRequest): Uint8Array {
    return QueryRateLimitsByChannelOrClientIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelOrClientIdRequest): QueryRateLimitsByChannelOrClientIdRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdRequest",
      value: QueryRateLimitsByChannelOrClientIdRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRateLimitsByChannelOrClientIdResponse(): QueryRateLimitsByChannelOrClientIdResponse {
  return {
    rateLimits: []
  };
}
/**
 * @name QueryRateLimitsByChannelOrClientIdResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse
 */
export const QueryRateLimitsByChannelOrClientIdResponse = {
  typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse",
  is(o: any): o is QueryRateLimitsByChannelOrClientIdResponse {
    return o && (o.$typeUrl === QueryRateLimitsByChannelOrClientIdResponse.typeUrl || Array.isArray(o.rateLimits) && (!o.rateLimits.length || RateLimit.is(o.rateLimits[0])));
  },
  isSDK(o: any): o is QueryRateLimitsByChannelOrClientIdResponseSDKType {
    return o && (o.$typeUrl === QueryRateLimitsByChannelOrClientIdResponse.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isSDK(o.rate_limits[0])));
  },
  isAmino(o: any): o is QueryRateLimitsByChannelOrClientIdResponseAmino {
    return o && (o.$typeUrl === QueryRateLimitsByChannelOrClientIdResponse.typeUrl || Array.isArray(o.rate_limits) && (!o.rate_limits.length || RateLimit.isAmino(o.rate_limits[0])));
  },
  encode(message: QueryRateLimitsByChannelOrClientIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChannelOrClientIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelOrClientIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRateLimitsByChannelOrClientIdResponse>): QueryRateLimitsByChannelOrClientIdResponse {
    const message = createBaseQueryRateLimitsByChannelOrClientIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelOrClientIdResponseAmino): QueryRateLimitsByChannelOrClientIdResponse {
    const message = createBaseQueryRateLimitsByChannelOrClientIdResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelOrClientIdResponse): QueryRateLimitsByChannelOrClientIdResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelOrClientIdResponseAminoMsg): QueryRateLimitsByChannelOrClientIdResponse {
    return QueryRateLimitsByChannelOrClientIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRateLimitsByChannelOrClientIdResponseProtoMsg): QueryRateLimitsByChannelOrClientIdResponse {
    return QueryRateLimitsByChannelOrClientIdResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelOrClientIdResponse): Uint8Array {
    return QueryRateLimitsByChannelOrClientIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelOrClientIdResponse): QueryRateLimitsByChannelOrClientIdResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryRateLimitsByChannelOrClientIdResponse",
      value: QueryRateLimitsByChannelOrClientIdResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRateLimitsByChannelOrClientIdResponse.typeUrl)) {
      return;
    }
    RateLimit.registerTypeUrl();
  }
};
function createBaseQueryAllBlacklistedDenomsRequest(): QueryAllBlacklistedDenomsRequest {
  return {};
}
/**
 * Queries all blacklisted denoms
 * @name QueryAllBlacklistedDenomsRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsRequest
 */
export const QueryAllBlacklistedDenomsRequest = {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest",
  is(o: any): o is QueryAllBlacklistedDenomsRequest {
    return o && o.$typeUrl === QueryAllBlacklistedDenomsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllBlacklistedDenomsRequestSDKType {
    return o && o.$typeUrl === QueryAllBlacklistedDenomsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllBlacklistedDenomsRequestAmino {
    return o && o.$typeUrl === QueryAllBlacklistedDenomsRequest.typeUrl;
  },
  encode(_: QueryAllBlacklistedDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBlacklistedDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlacklistedDenomsRequest();
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
  fromPartial(_: Partial<QueryAllBlacklistedDenomsRequest>): QueryAllBlacklistedDenomsRequest {
    const message = createBaseQueryAllBlacklistedDenomsRequest();
    return message;
  },
  fromAmino(_: QueryAllBlacklistedDenomsRequestAmino): QueryAllBlacklistedDenomsRequest {
    const message = createBaseQueryAllBlacklistedDenomsRequest();
    return message;
  },
  toAmino(_: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedDenomsRequestAminoMsg): QueryAllBlacklistedDenomsRequest {
    return QueryAllBlacklistedDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsRequestProtoMsg): QueryAllBlacklistedDenomsRequest {
    return QueryAllBlacklistedDenomsRequest.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsRequest): Uint8Array {
    return QueryAllBlacklistedDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsRequest",
      value: QueryAllBlacklistedDenomsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAllBlacklistedDenomsResponse(): QueryAllBlacklistedDenomsResponse {
  return {
    denoms: []
  };
}
/**
 * @name QueryAllBlacklistedDenomsResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllBlacklistedDenomsResponse
 */
export const QueryAllBlacklistedDenomsResponse = {
  typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse",
  is(o: any): o is QueryAllBlacklistedDenomsResponse {
    return o && (o.$typeUrl === QueryAllBlacklistedDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isSDK(o: any): o is QueryAllBlacklistedDenomsResponseSDKType {
    return o && (o.$typeUrl === QueryAllBlacklistedDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is QueryAllBlacklistedDenomsResponseAmino {
    return o && (o.$typeUrl === QueryAllBlacklistedDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: QueryAllBlacklistedDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBlacklistedDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlacklistedDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllBlacklistedDenomsResponse>): QueryAllBlacklistedDenomsResponse {
    const message = createBaseQueryAllBlacklistedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAllBlacklistedDenomsResponseAmino): QueryAllBlacklistedDenomsResponse {
    const message = createBaseQueryAllBlacklistedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedDenomsResponseAminoMsg): QueryAllBlacklistedDenomsResponse {
    return QueryAllBlacklistedDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsResponseProtoMsg): QueryAllBlacklistedDenomsResponse {
    return QueryAllBlacklistedDenomsResponse.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsResponse): Uint8Array {
    return QueryAllBlacklistedDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllBlacklistedDenomsResponse",
      value: QueryAllBlacklistedDenomsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAllWhitelistedAddressesRequest(): QueryAllWhitelistedAddressesRequest {
  return {};
}
/**
 * Queries all whitelisted address pairs
 * @name QueryAllWhitelistedAddressesRequest
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesRequest
 */
export const QueryAllWhitelistedAddressesRequest = {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest",
  is(o: any): o is QueryAllWhitelistedAddressesRequest {
    return o && o.$typeUrl === QueryAllWhitelistedAddressesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllWhitelistedAddressesRequestSDKType {
    return o && o.$typeUrl === QueryAllWhitelistedAddressesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllWhitelistedAddressesRequestAmino {
    return o && o.$typeUrl === QueryAllWhitelistedAddressesRequest.typeUrl;
  },
  encode(_: QueryAllWhitelistedAddressesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWhitelistedAddressesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedAddressesRequest();
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
  fromPartial(_: Partial<QueryAllWhitelistedAddressesRequest>): QueryAllWhitelistedAddressesRequest {
    const message = createBaseQueryAllWhitelistedAddressesRequest();
    return message;
  },
  fromAmino(_: QueryAllWhitelistedAddressesRequestAmino): QueryAllWhitelistedAddressesRequest {
    const message = createBaseQueryAllWhitelistedAddressesRequest();
    return message;
  },
  toAmino(_: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedAddressesRequestAminoMsg): QueryAllWhitelistedAddressesRequest {
    return QueryAllWhitelistedAddressesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesRequestProtoMsg): QueryAllWhitelistedAddressesRequest {
    return QueryAllWhitelistedAddressesRequest.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesRequest): Uint8Array {
    return QueryAllWhitelistedAddressesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesRequest",
      value: QueryAllWhitelistedAddressesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAllWhitelistedAddressesResponse(): QueryAllWhitelistedAddressesResponse {
  return {
    addressPairs: []
  };
}
/**
 * @name QueryAllWhitelistedAddressesResponse
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.QueryAllWhitelistedAddressesResponse
 */
export const QueryAllWhitelistedAddressesResponse = {
  typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse",
  is(o: any): o is QueryAllWhitelistedAddressesResponse {
    return o && (o.$typeUrl === QueryAllWhitelistedAddressesResponse.typeUrl || Array.isArray(o.addressPairs) && (!o.addressPairs.length || WhitelistedAddressPair.is(o.addressPairs[0])));
  },
  isSDK(o: any): o is QueryAllWhitelistedAddressesResponseSDKType {
    return o && (o.$typeUrl === QueryAllWhitelistedAddressesResponse.typeUrl || Array.isArray(o.address_pairs) && (!o.address_pairs.length || WhitelistedAddressPair.isSDK(o.address_pairs[0])));
  },
  isAmino(o: any): o is QueryAllWhitelistedAddressesResponseAmino {
    return o && (o.$typeUrl === QueryAllWhitelistedAddressesResponse.typeUrl || Array.isArray(o.address_pairs) && (!o.address_pairs.length || WhitelistedAddressPair.isAmino(o.address_pairs[0])));
  },
  encode(message: QueryAllWhitelistedAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllWhitelistedAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressPairs.push(WhitelistedAddressPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllWhitelistedAddressesResponse>): QueryAllWhitelistedAddressesResponse {
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    message.addressPairs = object.addressPairs?.map(e => WhitelistedAddressPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllWhitelistedAddressesResponseAmino): QueryAllWhitelistedAddressesResponse {
    const message = createBaseQueryAllWhitelistedAddressesResponse();
    message.addressPairs = object.address_pairs?.map(e => WhitelistedAddressPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseAmino {
    const obj: any = {};
    if (message.addressPairs) {
      obj.address_pairs = message.addressPairs.map(e => e ? WhitelistedAddressPair.toAmino(e) : undefined);
    } else {
      obj.address_pairs = message.addressPairs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedAddressesResponseAminoMsg): QueryAllWhitelistedAddressesResponse {
    return QueryAllWhitelistedAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesResponseProtoMsg): QueryAllWhitelistedAddressesResponse {
    return QueryAllWhitelistedAddressesResponse.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesResponse): Uint8Array {
    return QueryAllWhitelistedAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseProtoMsg {
    return {
      typeUrl: "/ratelimit.v1.QueryAllWhitelistedAddressesResponse",
      value: QueryAllWhitelistedAddressesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllWhitelistedAddressesResponse.typeUrl)) {
      return;
    }
    WhitelistedAddressPair.registerTypeUrl();
  }
};