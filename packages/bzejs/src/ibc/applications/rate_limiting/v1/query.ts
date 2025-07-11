//@ts-nocheck
import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType } from "./rate_limiting";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Queries all rate limits */
export interface QueryAllRateLimitsRequest {}
export interface QueryAllRateLimitsRequestProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllRateLimitsRequest";
  value: Uint8Array;
}
/**
 * Queries all rate limits
 * @name QueryAllRateLimitsRequestAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryAllRateLimitsRequest
 */
export interface QueryAllRateLimitsRequestAmino {}
export interface QueryAllRateLimitsRequestAminoMsg {
  type: "cosmos-sdk/QueryAllRateLimitsRequest";
  value: QueryAllRateLimitsRequestAmino;
}
/** Queries all rate limits */
export interface QueryAllRateLimitsRequestSDKType {}
/** QueryAllRateLimitsResponse returns all the rate limits stored on the chain. */
export interface QueryAllRateLimitsResponse {
  rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllRateLimitsResponse";
  value: Uint8Array;
}
/**
 * QueryAllRateLimitsResponse returns all the rate limits stored on the chain.
 * @name QueryAllRateLimitsResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryAllRateLimitsResponse
 */
export interface QueryAllRateLimitsResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryAllRateLimitsResponseAminoMsg {
  type: "cosmos-sdk/QueryAllRateLimitsResponse";
  value: QueryAllRateLimitsResponseAmino;
}
/** QueryAllRateLimitsResponse returns all the rate limits stored on the chain. */
export interface QueryAllRateLimitsResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/** Queries a specific rate limit by channel ID and denom */
export interface QueryRateLimitRequest {
  denom: string;
  channelOrClientId: string;
}
export interface QueryRateLimitRequestProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitRequest";
  value: Uint8Array;
}
/**
 * Queries a specific rate limit by channel ID and denom
 * @name QueryRateLimitRequestAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryRateLimitRequest
 */
export interface QueryRateLimitRequestAmino {
  denom?: string;
  channel_or_client_id?: string;
}
export interface QueryRateLimitRequestAminoMsg {
  type: "cosmos-sdk/QueryRateLimitRequest";
  value: QueryRateLimitRequestAmino;
}
/** Queries a specific rate limit by channel ID and denom */
export interface QueryRateLimitRequestSDKType {
  denom: string;
  channel_or_client_id: string;
}
/** QueryRateLimitResponse returns a rate limit by denom and channel_or_client_id combination. */
export interface QueryRateLimitResponse {
  rateLimit?: RateLimit;
}
export interface QueryRateLimitResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitResponse";
  value: Uint8Array;
}
/**
 * QueryRateLimitResponse returns a rate limit by denom and channel_or_client_id combination.
 * @name QueryRateLimitResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryRateLimitResponse
 */
export interface QueryRateLimitResponseAmino {
  rate_limit?: RateLimitAmino;
}
export interface QueryRateLimitResponseAminoMsg {
  type: "cosmos-sdk/QueryRateLimitResponse";
  value: QueryRateLimitResponseAmino;
}
/** QueryRateLimitResponse returns a rate limit by denom and channel_or_client_id combination. */
export interface QueryRateLimitResponseSDKType {
  rate_limit?: RateLimitSDKType;
}
/** Queries all the rate limits for a given chain */
export interface QueryRateLimitsByChainIDRequest {
  chainId: string;
}
export interface QueryRateLimitsByChainIDRequestProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDRequest";
  value: Uint8Array;
}
/**
 * Queries all the rate limits for a given chain
 * @name QueryRateLimitsByChainIDRequestAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDRequest
 */
export interface QueryRateLimitsByChainIDRequestAmino {
  chain_id?: string;
}
export interface QueryRateLimitsByChainIDRequestAminoMsg {
  type: "cosmos-sdk/QueryRateLimitsByChainIDRequest";
  value: QueryRateLimitsByChainIDRequestAmino;
}
/** Queries all the rate limits for a given chain */
export interface QueryRateLimitsByChainIDRequestSDKType {
  chain_id: string;
}
/** QueryRateLimitsByChainIDResponse returns all rate-limits by a chain. */
export interface QueryRateLimitsByChainIDResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChainIDResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDResponse";
  value: Uint8Array;
}
/**
 * QueryRateLimitsByChainIDResponse returns all rate-limits by a chain.
 * @name QueryRateLimitsByChainIDResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDResponse
 */
export interface QueryRateLimitsByChainIDResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryRateLimitsByChainIDResponseAminoMsg {
  type: "cosmos-sdk/QueryRateLimitsByChainIDResponse";
  value: QueryRateLimitsByChainIDResponseAmino;
}
/** QueryRateLimitsByChainIDResponse returns all rate-limits by a chain. */
export interface QueryRateLimitsByChainIDResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/** Queries all the rate limits for a given channel or client ID */
export interface QueryRateLimitsByChannelOrClientIDRequest {
  channelOrClientId: string;
}
export interface QueryRateLimitsByChannelOrClientIDRequestProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDRequest";
  value: Uint8Array;
}
/**
 * Queries all the rate limits for a given channel or client ID
 * @name QueryRateLimitsByChannelOrClientIDRequestAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDRequest
 */
export interface QueryRateLimitsByChannelOrClientIDRequestAmino {
  channel_or_client_id?: string;
}
export interface QueryRateLimitsByChannelOrClientIDRequestAminoMsg {
  type: "cosmos-sdk/QueryRateLimitsByChannelOrClientIDRequest";
  value: QueryRateLimitsByChannelOrClientIDRequestAmino;
}
/** Queries all the rate limits for a given channel or client ID */
export interface QueryRateLimitsByChannelOrClientIDRequestSDKType {
  channel_or_client_id: string;
}
/** QueryRateLimitsByChannelOrClientIDResponse returns all rate-limits by a channel or client id. */
export interface QueryRateLimitsByChannelOrClientIDResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChannelOrClientIDResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDResponse";
  value: Uint8Array;
}
/**
 * QueryRateLimitsByChannelOrClientIDResponse returns all rate-limits by a channel or client id.
 * @name QueryRateLimitsByChannelOrClientIDResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDResponse
 */
export interface QueryRateLimitsByChannelOrClientIDResponseAmino {
  rate_limits?: RateLimitAmino[];
}
export interface QueryRateLimitsByChannelOrClientIDResponseAminoMsg {
  type: "cosmos-sdk/QueryRateLimitsByChannelOrClientIDResponse";
  value: QueryRateLimitsByChannelOrClientIDResponseAmino;
}
/** QueryRateLimitsByChannelOrClientIDResponse returns all rate-limits by a channel or client id. */
export interface QueryRateLimitsByChannelOrClientIDResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
/** Queries all blacklisted denoms */
export interface QueryAllBlacklistedDenomsRequest {}
export interface QueryAllBlacklistedDenomsRequestProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsRequest";
  value: Uint8Array;
}
/**
 * Queries all blacklisted denoms
 * @name QueryAllBlacklistedDenomsRequestAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsRequest
 */
export interface QueryAllBlacklistedDenomsRequestAmino {}
export interface QueryAllBlacklistedDenomsRequestAminoMsg {
  type: "cosmos-sdk/QueryAllBlacklistedDenomsRequest";
  value: QueryAllBlacklistedDenomsRequestAmino;
}
/** Queries all blacklisted denoms */
export interface QueryAllBlacklistedDenomsRequestSDKType {}
/** QueryAllBlacklistedDenomsResponse returns all the blacklisted denosm. */
export interface QueryAllBlacklistedDenomsResponse {
  denoms: string[];
}
export interface QueryAllBlacklistedDenomsResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsResponse";
  value: Uint8Array;
}
/**
 * QueryAllBlacklistedDenomsResponse returns all the blacklisted denosm.
 * @name QueryAllBlacklistedDenomsResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsResponse
 */
export interface QueryAllBlacklistedDenomsResponseAmino {
  denoms?: string[];
}
export interface QueryAllBlacklistedDenomsResponseAminoMsg {
  type: "cosmos-sdk/QueryAllBlacklistedDenomsResponse";
  value: QueryAllBlacklistedDenomsResponseAmino;
}
/** QueryAllBlacklistedDenomsResponse returns all the blacklisted denosm. */
export interface QueryAllBlacklistedDenomsResponseSDKType {
  denoms: string[];
}
/** Queries all whitelisted address pairs */
export interface QueryAllWhitelistedAddressesRequest {}
export interface QueryAllWhitelistedAddressesRequestProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesRequest";
  value: Uint8Array;
}
/**
 * Queries all whitelisted address pairs
 * @name QueryAllWhitelistedAddressesRequestAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesRequest
 */
export interface QueryAllWhitelistedAddressesRequestAmino {}
export interface QueryAllWhitelistedAddressesRequestAminoMsg {
  type: "cosmos-sdk/QueryAllWhitelistedAddressesRequest";
  value: QueryAllWhitelistedAddressesRequestAmino;
}
/** Queries all whitelisted address pairs */
export interface QueryAllWhitelistedAddressesRequestSDKType {}
/** QueryAllWhitelistedAddressesResponse returns all whitelisted pairs. */
export interface QueryAllWhitelistedAddressesResponse {
  addressPairs: WhitelistedAddressPair[];
}
export interface QueryAllWhitelistedAddressesResponseProtoMsg {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesResponse";
  value: Uint8Array;
}
/**
 * QueryAllWhitelistedAddressesResponse returns all whitelisted pairs.
 * @name QueryAllWhitelistedAddressesResponseAmino
 * @package ibc.applications.rate_limiting.v1
 * @see proto type: ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesResponse
 */
export interface QueryAllWhitelistedAddressesResponseAmino {
  address_pairs?: WhitelistedAddressPairAmino[];
}
export interface QueryAllWhitelistedAddressesResponseAminoMsg {
  type: "cosmos-sdk/QueryAllWhitelistedAddressesResponse";
  value: QueryAllWhitelistedAddressesResponseAmino;
}
/** QueryAllWhitelistedAddressesResponse returns all whitelisted pairs. */
export interface QueryAllWhitelistedAddressesResponseSDKType {
  address_pairs: WhitelistedAddressPairSDKType[];
}
function createBaseQueryAllRateLimitsRequest(): QueryAllRateLimitsRequest {
  return {};
}
export const QueryAllRateLimitsRequest = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllRateLimitsRequest",
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
  toAminoMsg(message: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllRateLimitsRequest",
      value: QueryAllRateLimitsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllRateLimitsRequestProtoMsg): QueryAllRateLimitsRequest {
    return QueryAllRateLimitsRequest.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsRequest): Uint8Array {
    return QueryAllRateLimitsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsRequest): QueryAllRateLimitsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllRateLimitsRequest",
      value: QueryAllRateLimitsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRateLimitsResponse(): QueryAllRateLimitsResponse {
  return {
    rateLimits: []
  };
}
export const QueryAllRateLimitsResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllRateLimitsResponse",
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
  toAminoMsg(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllRateLimitsResponse",
      value: QueryAllRateLimitsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllRateLimitsResponseProtoMsg): QueryAllRateLimitsResponse {
    return QueryAllRateLimitsResponse.decode(message.value);
  },
  toProto(message: QueryAllRateLimitsResponse): Uint8Array {
    return QueryAllRateLimitsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRateLimitsResponse): QueryAllRateLimitsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllRateLimitsResponse",
      value: QueryAllRateLimitsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitRequest(): QueryRateLimitRequest {
  return {
    denom: "",
    channelOrClientId: ""
  };
}
export const QueryRateLimitRequest = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitRequest",
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
  toAminoMsg(message: QueryRateLimitRequest): QueryRateLimitRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRateLimitRequest",
      value: QueryRateLimitRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRateLimitRequestProtoMsg): QueryRateLimitRequest {
    return QueryRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitRequest): Uint8Array {
    return QueryRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitRequest): QueryRateLimitRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitRequest",
      value: QueryRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitResponse(): QueryRateLimitResponse {
  return {
    rateLimit: undefined
  };
}
export const QueryRateLimitResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitResponse",
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
  toAminoMsg(message: QueryRateLimitResponse): QueryRateLimitResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRateLimitResponse",
      value: QueryRateLimitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRateLimitResponseProtoMsg): QueryRateLimitResponse {
    return QueryRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitResponse): Uint8Array {
    return QueryRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitResponse): QueryRateLimitResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitResponse",
      value: QueryRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChainIDRequest(): QueryRateLimitsByChainIDRequest {
  return {
    chainId: ""
  };
}
export const QueryRateLimitsByChainIDRequest = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDRequest",
  encode(message: QueryRateLimitsByChainIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChainIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIDRequest();
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
  fromPartial(object: Partial<QueryRateLimitsByChainIDRequest>): QueryRateLimitsByChainIDRequest {
    const message = createBaseQueryRateLimitsByChainIDRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIDRequestAmino): QueryRateLimitsByChainIDRequest {
    const message = createBaseQueryRateLimitsByChainIDRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIDRequest): QueryRateLimitsByChainIDRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIDRequestAminoMsg): QueryRateLimitsByChainIDRequest {
    return QueryRateLimitsByChainIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRateLimitsByChainIDRequest): QueryRateLimitsByChainIDRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRateLimitsByChainIDRequest",
      value: QueryRateLimitsByChainIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRateLimitsByChainIDRequestProtoMsg): QueryRateLimitsByChainIDRequest {
    return QueryRateLimitsByChainIDRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIDRequest): Uint8Array {
    return QueryRateLimitsByChainIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIDRequest): QueryRateLimitsByChainIDRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDRequest",
      value: QueryRateLimitsByChainIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChainIDResponse(): QueryRateLimitsByChainIDResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChainIDResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDResponse",
  encode(message: QueryRateLimitsByChainIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChainIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIDResponse();
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
  fromPartial(object: Partial<QueryRateLimitsByChainIDResponse>): QueryRateLimitsByChainIDResponse {
    const message = createBaseQueryRateLimitsByChainIDResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChainIDResponseAmino): QueryRateLimitsByChainIDResponse {
    const message = createBaseQueryRateLimitsByChainIDResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChainIDResponse): QueryRateLimitsByChainIDResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChainIDResponseAminoMsg): QueryRateLimitsByChainIDResponse {
    return QueryRateLimitsByChainIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRateLimitsByChainIDResponse): QueryRateLimitsByChainIDResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRateLimitsByChainIDResponse",
      value: QueryRateLimitsByChainIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRateLimitsByChainIDResponseProtoMsg): QueryRateLimitsByChainIDResponse {
    return QueryRateLimitsByChainIDResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChainIDResponse): Uint8Array {
    return QueryRateLimitsByChainIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChainIDResponse): QueryRateLimitsByChainIDResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChainIDResponse",
      value: QueryRateLimitsByChainIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChannelOrClientIDRequest(): QueryRateLimitsByChannelOrClientIDRequest {
  return {
    channelOrClientId: ""
  };
}
export const QueryRateLimitsByChannelOrClientIDRequest = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDRequest",
  encode(message: QueryRateLimitsByChannelOrClientIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelOrClientId !== "") {
      writer.uint32(10).string(message.channelOrClientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChannelOrClientIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelOrClientIDRequest();
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
  fromPartial(object: Partial<QueryRateLimitsByChannelOrClientIDRequest>): QueryRateLimitsByChannelOrClientIDRequest {
    const message = createBaseQueryRateLimitsByChannelOrClientIDRequest();
    message.channelOrClientId = object.channelOrClientId ?? "";
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelOrClientIDRequestAmino): QueryRateLimitsByChannelOrClientIDRequest {
    const message = createBaseQueryRateLimitsByChannelOrClientIDRequest();
    if (object.channel_or_client_id !== undefined && object.channel_or_client_id !== null) {
      message.channelOrClientId = object.channel_or_client_id;
    }
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelOrClientIDRequest): QueryRateLimitsByChannelOrClientIDRequestAmino {
    const obj: any = {};
    obj.channel_or_client_id = message.channelOrClientId === "" ? undefined : message.channelOrClientId;
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelOrClientIDRequestAminoMsg): QueryRateLimitsByChannelOrClientIDRequest {
    return QueryRateLimitsByChannelOrClientIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRateLimitsByChannelOrClientIDRequest): QueryRateLimitsByChannelOrClientIDRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRateLimitsByChannelOrClientIDRequest",
      value: QueryRateLimitsByChannelOrClientIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRateLimitsByChannelOrClientIDRequestProtoMsg): QueryRateLimitsByChannelOrClientIDRequest {
    return QueryRateLimitsByChannelOrClientIDRequest.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelOrClientIDRequest): Uint8Array {
    return QueryRateLimitsByChannelOrClientIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelOrClientIDRequest): QueryRateLimitsByChannelOrClientIDRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDRequest",
      value: QueryRateLimitsByChannelOrClientIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRateLimitsByChannelOrClientIDResponse(): QueryRateLimitsByChannelOrClientIDResponse {
  return {
    rateLimits: []
  };
}
export const QueryRateLimitsByChannelOrClientIDResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDResponse",
  encode(message: QueryRateLimitsByChannelOrClientIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRateLimitsByChannelOrClientIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelOrClientIDResponse();
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
  fromPartial(object: Partial<QueryRateLimitsByChannelOrClientIDResponse>): QueryRateLimitsByChannelOrClientIDResponse {
    const message = createBaseQueryRateLimitsByChannelOrClientIDResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRateLimitsByChannelOrClientIDResponseAmino): QueryRateLimitsByChannelOrClientIDResponse {
    const message = createBaseQueryRateLimitsByChannelOrClientIDResponse();
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRateLimitsByChannelOrClientIDResponse): QueryRateLimitsByChannelOrClientIDResponseAmino {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = message.rateLimits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRateLimitsByChannelOrClientIDResponseAminoMsg): QueryRateLimitsByChannelOrClientIDResponse {
    return QueryRateLimitsByChannelOrClientIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRateLimitsByChannelOrClientIDResponse): QueryRateLimitsByChannelOrClientIDResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRateLimitsByChannelOrClientIDResponse",
      value: QueryRateLimitsByChannelOrClientIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRateLimitsByChannelOrClientIDResponseProtoMsg): QueryRateLimitsByChannelOrClientIDResponse {
    return QueryRateLimitsByChannelOrClientIDResponse.decode(message.value);
  },
  toProto(message: QueryRateLimitsByChannelOrClientIDResponse): Uint8Array {
    return QueryRateLimitsByChannelOrClientIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRateLimitsByChannelOrClientIDResponse): QueryRateLimitsByChannelOrClientIDResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryRateLimitsByChannelOrClientIDResponse",
      value: QueryRateLimitsByChannelOrClientIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedDenomsRequest(): QueryAllBlacklistedDenomsRequest {
  return {};
}
export const QueryAllBlacklistedDenomsRequest = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsRequest",
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
  toAminoMsg(message: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllBlacklistedDenomsRequest",
      value: QueryAllBlacklistedDenomsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsRequestProtoMsg): QueryAllBlacklistedDenomsRequest {
    return QueryAllBlacklistedDenomsRequest.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsRequest): Uint8Array {
    return QueryAllBlacklistedDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsRequest): QueryAllBlacklistedDenomsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsRequest",
      value: QueryAllBlacklistedDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedDenomsResponse(): QueryAllBlacklistedDenomsResponse {
  return {
    denoms: []
  };
}
export const QueryAllBlacklistedDenomsResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsResponse",
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
  toAminoMsg(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllBlacklistedDenomsResponse",
      value: QueryAllBlacklistedDenomsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllBlacklistedDenomsResponseProtoMsg): QueryAllBlacklistedDenomsResponse {
    return QueryAllBlacklistedDenomsResponse.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedDenomsResponse): Uint8Array {
    return QueryAllBlacklistedDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedDenomsResponse): QueryAllBlacklistedDenomsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllBlacklistedDenomsResponse",
      value: QueryAllBlacklistedDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedAddressesRequest(): QueryAllWhitelistedAddressesRequest {
  return {};
}
export const QueryAllWhitelistedAddressesRequest = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesRequest",
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
  toAminoMsg(message: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllWhitelistedAddressesRequest",
      value: QueryAllWhitelistedAddressesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesRequestProtoMsg): QueryAllWhitelistedAddressesRequest {
    return QueryAllWhitelistedAddressesRequest.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesRequest): Uint8Array {
    return QueryAllWhitelistedAddressesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesRequest): QueryAllWhitelistedAddressesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesRequest",
      value: QueryAllWhitelistedAddressesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhitelistedAddressesResponse(): QueryAllWhitelistedAddressesResponse {
  return {
    addressPairs: []
  };
}
export const QueryAllWhitelistedAddressesResponse = {
  typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesResponse",
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
  toAminoMsg(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllWhitelistedAddressesResponse",
      value: QueryAllWhitelistedAddressesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllWhitelistedAddressesResponseProtoMsg): QueryAllWhitelistedAddressesResponse {
    return QueryAllWhitelistedAddressesResponse.decode(message.value);
  },
  toProto(message: QueryAllWhitelistedAddressesResponse): Uint8Array {
    return QueryAllWhitelistedAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedAddressesResponse): QueryAllWhitelistedAddressesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.rate_limiting.v1.QueryAllWhitelistedAddressesResponse",
      value: QueryAllWhitelistedAddressesResponse.encode(message).finish()
    };
  }
};