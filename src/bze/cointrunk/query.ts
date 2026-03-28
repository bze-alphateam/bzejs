//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AcceptedDomain, AcceptedDomainAmino, AcceptedDomainSDKType, AnonArticlesCounter, AnonArticlesCounterAmino, AnonArticlesCounterSDKType, Article, ArticleAmino, ArticleSDKType, Publisher, PublisherAmino, PublisherSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bze.cointrunk.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bze.cointrunk.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bze.cointrunk.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bze.cointrunk.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name QueryAcceptedDomainRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainRequest
 */
export interface QueryAcceptedDomainRequest {
  pagination?: PageRequest;
}
export interface QueryAcceptedDomainRequestProtoMsg {
  typeUrl: "/bze.cointrunk.QueryAcceptedDomainRequest";
  value: Uint8Array;
}
/**
 * @name QueryAcceptedDomainRequestAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainRequest
 */
export interface QueryAcceptedDomainRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAcceptedDomainRequestAminoMsg {
  type: "/bze.cointrunk.QueryAcceptedDomainRequest";
  value: QueryAcceptedDomainRequestAmino;
}
/**
 * @name QueryAcceptedDomainRequestSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainRequest
 */
export interface QueryAcceptedDomainRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAcceptedDomainResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainResponse
 */
export interface QueryAcceptedDomainResponse {
  acceptedDomain: AcceptedDomain[];
  pagination?: PageResponse;
}
export interface QueryAcceptedDomainResponseProtoMsg {
  typeUrl: "/bze.cointrunk.QueryAcceptedDomainResponse";
  value: Uint8Array;
}
/**
 * @name QueryAcceptedDomainResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainResponse
 */
export interface QueryAcceptedDomainResponseAmino {
  acceptedDomain?: AcceptedDomainAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAcceptedDomainResponseAminoMsg {
  type: "/bze.cointrunk.QueryAcceptedDomainResponse";
  value: QueryAcceptedDomainResponseAmino;
}
/**
 * @name QueryAcceptedDomainResponseSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainResponse
 */
export interface QueryAcceptedDomainResponseSDKType {
  acceptedDomain: AcceptedDomainSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryAllAnonArticlesCountersRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersRequest
 */
export interface QueryAllAnonArticlesCountersRequest {
  pagination?: PageRequest;
}
export interface QueryAllAnonArticlesCountersRequestProtoMsg {
  typeUrl: "/bze.cointrunk.QueryAllAnonArticlesCountersRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllAnonArticlesCountersRequestAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersRequest
 */
export interface QueryAllAnonArticlesCountersRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAnonArticlesCountersRequestAminoMsg {
  type: "/bze.cointrunk.QueryAllAnonArticlesCountersRequest";
  value: QueryAllAnonArticlesCountersRequestAmino;
}
/**
 * @name QueryAllAnonArticlesCountersRequestSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersRequest
 */
export interface QueryAllAnonArticlesCountersRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllAnonArticlesCountersResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersResponse
 */
export interface QueryAllAnonArticlesCountersResponse {
  anonArticlesCounters: AnonArticlesCounter[];
  pagination?: PageResponse;
}
export interface QueryAllAnonArticlesCountersResponseProtoMsg {
  typeUrl: "/bze.cointrunk.QueryAllAnonArticlesCountersResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllAnonArticlesCountersResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersResponse
 */
export interface QueryAllAnonArticlesCountersResponseAmino {
  AnonArticlesCounters?: AnonArticlesCounterAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAnonArticlesCountersResponseAminoMsg {
  type: "/bze.cointrunk.QueryAllAnonArticlesCountersResponse";
  value: QueryAllAnonArticlesCountersResponseAmino;
}
/**
 * @name QueryAllAnonArticlesCountersResponseSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersResponse
 */
export interface QueryAllAnonArticlesCountersResponseSDKType {
  AnonArticlesCounters: AnonArticlesCounterSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryAllArticlesRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesRequest
 */
export interface QueryAllArticlesRequest {
  pagination?: PageRequest;
}
export interface QueryAllArticlesRequestProtoMsg {
  typeUrl: "/bze.cointrunk.QueryAllArticlesRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllArticlesRequestAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesRequest
 */
export interface QueryAllArticlesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllArticlesRequestAminoMsg {
  type: "/bze.cointrunk.QueryAllArticlesRequest";
  value: QueryAllArticlesRequestAmino;
}
/**
 * @name QueryAllArticlesRequestSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesRequest
 */
export interface QueryAllArticlesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllArticlesResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesResponse
 */
export interface QueryAllArticlesResponse {
  article: Article[];
  pagination?: PageResponse;
}
export interface QueryAllArticlesResponseProtoMsg {
  typeUrl: "/bze.cointrunk.QueryAllArticlesResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllArticlesResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesResponse
 */
export interface QueryAllArticlesResponseAmino {
  article?: ArticleAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllArticlesResponseAminoMsg {
  type: "/bze.cointrunk.QueryAllArticlesResponse";
  value: QueryAllArticlesResponseAmino;
}
/**
 * @name QueryAllArticlesResponseSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesResponse
 */
export interface QueryAllArticlesResponseSDKType {
  article: ArticleSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryPublishersRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersRequest
 */
export interface QueryPublishersRequest {
  pagination?: PageRequest;
}
export interface QueryPublishersRequestProtoMsg {
  typeUrl: "/bze.cointrunk.QueryPublishersRequest";
  value: Uint8Array;
}
/**
 * @name QueryPublishersRequestAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersRequest
 */
export interface QueryPublishersRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPublishersRequestAminoMsg {
  type: "/bze.cointrunk.QueryPublishersRequest";
  value: QueryPublishersRequestAmino;
}
/**
 * @name QueryPublishersRequestSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersRequest
 */
export interface QueryPublishersRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryPublishersResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersResponse
 */
export interface QueryPublishersResponse {
  publisher: Publisher[];
  pagination?: PageResponse;
}
export interface QueryPublishersResponseProtoMsg {
  typeUrl: "/bze.cointrunk.QueryPublishersResponse";
  value: Uint8Array;
}
/**
 * @name QueryPublishersResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersResponse
 */
export interface QueryPublishersResponseAmino {
  publisher?: PublisherAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPublishersResponseAminoMsg {
  type: "/bze.cointrunk.QueryPublishersResponse";
  value: QueryPublishersResponseAmino;
}
/**
 * @name QueryPublishersResponseSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersResponse
 */
export interface QueryPublishersResponseSDKType {
  publisher: PublisherSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryPublisherRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherRequest
 */
export interface QueryPublisherRequest {
  address: string;
}
export interface QueryPublisherRequestProtoMsg {
  typeUrl: "/bze.cointrunk.QueryPublisherRequest";
  value: Uint8Array;
}
/**
 * @name QueryPublisherRequestAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherRequest
 */
export interface QueryPublisherRequestAmino {
  address?: string;
}
export interface QueryPublisherRequestAminoMsg {
  type: "/bze.cointrunk.QueryPublisherRequest";
  value: QueryPublisherRequestAmino;
}
/**
 * @name QueryPublisherRequestSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherRequest
 */
export interface QueryPublisherRequestSDKType {
  address: string;
}
/**
 * @name QueryPublisherResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherResponse
 */
export interface QueryPublisherResponse {
  publisher?: Publisher;
}
export interface QueryPublisherResponseProtoMsg {
  typeUrl: "/bze.cointrunk.QueryPublisherResponse";
  value: Uint8Array;
}
/**
 * @name QueryPublisherResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherResponse
 */
export interface QueryPublisherResponseAmino {
  publisher?: PublisherAmino;
}
export interface QueryPublisherResponseAminoMsg {
  type: "/bze.cointrunk.QueryPublisherResponse";
  value: QueryPublisherResponseAmino;
}
/**
 * @name QueryPublisherResponseSDKType
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherResponse
 */
export interface QueryPublisherResponseSDKType {
  publisher?: PublisherSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bze.cointrunk.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bze.cointrunk.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryAcceptedDomainRequest(): QueryAcceptedDomainRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAcceptedDomainRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainRequest
 */
export const QueryAcceptedDomainRequest = {
  typeUrl: "/bze.cointrunk.QueryAcceptedDomainRequest",
  is(o: any): o is QueryAcceptedDomainRequest {
    return o && o.$typeUrl === QueryAcceptedDomainRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAcceptedDomainRequestSDKType {
    return o && o.$typeUrl === QueryAcceptedDomainRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAcceptedDomainRequestAmino {
    return o && o.$typeUrl === QueryAcceptedDomainRequest.typeUrl;
  },
  encode(message: QueryAcceptedDomainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAcceptedDomainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAcceptedDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAcceptedDomainRequest>): QueryAcceptedDomainRequest {
    const message = createBaseQueryAcceptedDomainRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAcceptedDomainRequestAmino): QueryAcceptedDomainRequest {
    const message = createBaseQueryAcceptedDomainRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAcceptedDomainRequest): QueryAcceptedDomainRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAcceptedDomainRequestAminoMsg): QueryAcceptedDomainRequest {
    return QueryAcceptedDomainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAcceptedDomainRequestProtoMsg): QueryAcceptedDomainRequest {
    return QueryAcceptedDomainRequest.decode(message.value);
  },
  toProto(message: QueryAcceptedDomainRequest): Uint8Array {
    return QueryAcceptedDomainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAcceptedDomainRequest): QueryAcceptedDomainRequestProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryAcceptedDomainRequest",
      value: QueryAcceptedDomainRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAcceptedDomainRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAcceptedDomainResponse(): QueryAcceptedDomainResponse {
  return {
    acceptedDomain: [],
    pagination: undefined
  };
}
/**
 * @name QueryAcceptedDomainResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAcceptedDomainResponse
 */
export const QueryAcceptedDomainResponse = {
  typeUrl: "/bze.cointrunk.QueryAcceptedDomainResponse",
  is(o: any): o is QueryAcceptedDomainResponse {
    return o && (o.$typeUrl === QueryAcceptedDomainResponse.typeUrl || Array.isArray(o.acceptedDomain) && (!o.acceptedDomain.length || AcceptedDomain.is(o.acceptedDomain[0])));
  },
  isSDK(o: any): o is QueryAcceptedDomainResponseSDKType {
    return o && (o.$typeUrl === QueryAcceptedDomainResponse.typeUrl || Array.isArray(o.acceptedDomain) && (!o.acceptedDomain.length || AcceptedDomain.isSDK(o.acceptedDomain[0])));
  },
  isAmino(o: any): o is QueryAcceptedDomainResponseAmino {
    return o && (o.$typeUrl === QueryAcceptedDomainResponse.typeUrl || Array.isArray(o.acceptedDomain) && (!o.acceptedDomain.length || AcceptedDomain.isAmino(o.acceptedDomain[0])));
  },
  encode(message: QueryAcceptedDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.acceptedDomain) {
      AcceptedDomain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAcceptedDomainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAcceptedDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acceptedDomain.push(AcceptedDomain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAcceptedDomainResponse>): QueryAcceptedDomainResponse {
    const message = createBaseQueryAcceptedDomainResponse();
    message.acceptedDomain = object.acceptedDomain?.map(e => AcceptedDomain.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAcceptedDomainResponseAmino): QueryAcceptedDomainResponse {
    const message = createBaseQueryAcceptedDomainResponse();
    message.acceptedDomain = object.acceptedDomain?.map(e => AcceptedDomain.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAcceptedDomainResponse): QueryAcceptedDomainResponseAmino {
    const obj: any = {};
    if (message.acceptedDomain) {
      obj.acceptedDomain = message.acceptedDomain.map(e => e ? AcceptedDomain.toAmino(e) : undefined);
    } else {
      obj.acceptedDomain = message.acceptedDomain;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAcceptedDomainResponseAminoMsg): QueryAcceptedDomainResponse {
    return QueryAcceptedDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAcceptedDomainResponseProtoMsg): QueryAcceptedDomainResponse {
    return QueryAcceptedDomainResponse.decode(message.value);
  },
  toProto(message: QueryAcceptedDomainResponse): Uint8Array {
    return QueryAcceptedDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAcceptedDomainResponse): QueryAcceptedDomainResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryAcceptedDomainResponse",
      value: QueryAcceptedDomainResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAcceptedDomainResponse.typeUrl)) {
      return;
    }
    AcceptedDomain.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryAllAnonArticlesCountersRequest(): QueryAllAnonArticlesCountersRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAllAnonArticlesCountersRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersRequest
 */
export const QueryAllAnonArticlesCountersRequest = {
  typeUrl: "/bze.cointrunk.QueryAllAnonArticlesCountersRequest",
  is(o: any): o is QueryAllAnonArticlesCountersRequest {
    return o && o.$typeUrl === QueryAllAnonArticlesCountersRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllAnonArticlesCountersRequestSDKType {
    return o && o.$typeUrl === QueryAllAnonArticlesCountersRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllAnonArticlesCountersRequestAmino {
    return o && o.$typeUrl === QueryAllAnonArticlesCountersRequest.typeUrl;
  },
  encode(message: QueryAllAnonArticlesCountersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAnonArticlesCountersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAnonArticlesCountersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllAnonArticlesCountersRequest>): QueryAllAnonArticlesCountersRequest {
    const message = createBaseQueryAllAnonArticlesCountersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAnonArticlesCountersRequestAmino): QueryAllAnonArticlesCountersRequest {
    const message = createBaseQueryAllAnonArticlesCountersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAnonArticlesCountersRequest): QueryAllAnonArticlesCountersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAnonArticlesCountersRequestAminoMsg): QueryAllAnonArticlesCountersRequest {
    return QueryAllAnonArticlesCountersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAnonArticlesCountersRequestProtoMsg): QueryAllAnonArticlesCountersRequest {
    return QueryAllAnonArticlesCountersRequest.decode(message.value);
  },
  toProto(message: QueryAllAnonArticlesCountersRequest): Uint8Array {
    return QueryAllAnonArticlesCountersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAnonArticlesCountersRequest): QueryAllAnonArticlesCountersRequestProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryAllAnonArticlesCountersRequest",
      value: QueryAllAnonArticlesCountersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllAnonArticlesCountersRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllAnonArticlesCountersResponse(): QueryAllAnonArticlesCountersResponse {
  return {
    anonArticlesCounters: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllAnonArticlesCountersResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllAnonArticlesCountersResponse
 */
export const QueryAllAnonArticlesCountersResponse = {
  typeUrl: "/bze.cointrunk.QueryAllAnonArticlesCountersResponse",
  is(o: any): o is QueryAllAnonArticlesCountersResponse {
    return o && (o.$typeUrl === QueryAllAnonArticlesCountersResponse.typeUrl || Array.isArray(o.anonArticlesCounters) && (!o.anonArticlesCounters.length || AnonArticlesCounter.is(o.anonArticlesCounters[0])));
  },
  isSDK(o: any): o is QueryAllAnonArticlesCountersResponseSDKType {
    return o && (o.$typeUrl === QueryAllAnonArticlesCountersResponse.typeUrl || Array.isArray(o.AnonArticlesCounters) && (!o.AnonArticlesCounters.length || AnonArticlesCounter.isSDK(o.AnonArticlesCounters[0])));
  },
  isAmino(o: any): o is QueryAllAnonArticlesCountersResponseAmino {
    return o && (o.$typeUrl === QueryAllAnonArticlesCountersResponse.typeUrl || Array.isArray(o.AnonArticlesCounters) && (!o.AnonArticlesCounters.length || AnonArticlesCounter.isAmino(o.AnonArticlesCounters[0])));
  },
  encode(message: QueryAllAnonArticlesCountersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.anonArticlesCounters) {
      AnonArticlesCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAnonArticlesCountersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAnonArticlesCountersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anonArticlesCounters.push(AnonArticlesCounter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllAnonArticlesCountersResponse>): QueryAllAnonArticlesCountersResponse {
    const message = createBaseQueryAllAnonArticlesCountersResponse();
    message.anonArticlesCounters = object.anonArticlesCounters?.map(e => AnonArticlesCounter.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAnonArticlesCountersResponseAmino): QueryAllAnonArticlesCountersResponse {
    const message = createBaseQueryAllAnonArticlesCountersResponse();
    message.anonArticlesCounters = object.AnonArticlesCounters?.map(e => AnonArticlesCounter.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAnonArticlesCountersResponse): QueryAllAnonArticlesCountersResponseAmino {
    const obj: any = {};
    if (message.anonArticlesCounters) {
      obj.AnonArticlesCounters = message.anonArticlesCounters.map(e => e ? AnonArticlesCounter.toAmino(e) : undefined);
    } else {
      obj.AnonArticlesCounters = message.anonArticlesCounters;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAnonArticlesCountersResponseAminoMsg): QueryAllAnonArticlesCountersResponse {
    return QueryAllAnonArticlesCountersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAnonArticlesCountersResponseProtoMsg): QueryAllAnonArticlesCountersResponse {
    return QueryAllAnonArticlesCountersResponse.decode(message.value);
  },
  toProto(message: QueryAllAnonArticlesCountersResponse): Uint8Array {
    return QueryAllAnonArticlesCountersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAnonArticlesCountersResponse): QueryAllAnonArticlesCountersResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryAllAnonArticlesCountersResponse",
      value: QueryAllAnonArticlesCountersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllAnonArticlesCountersResponse.typeUrl)) {
      return;
    }
    AnonArticlesCounter.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryAllArticlesRequest(): QueryAllArticlesRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAllArticlesRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesRequest
 */
export const QueryAllArticlesRequest = {
  typeUrl: "/bze.cointrunk.QueryAllArticlesRequest",
  is(o: any): o is QueryAllArticlesRequest {
    return o && o.$typeUrl === QueryAllArticlesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllArticlesRequestSDKType {
    return o && o.$typeUrl === QueryAllArticlesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllArticlesRequestAmino {
    return o && o.$typeUrl === QueryAllArticlesRequest.typeUrl;
  },
  encode(message: QueryAllArticlesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllArticlesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArticlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllArticlesRequest>): QueryAllArticlesRequest {
    const message = createBaseQueryAllArticlesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllArticlesRequestAmino): QueryAllArticlesRequest {
    const message = createBaseQueryAllArticlesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllArticlesRequest): QueryAllArticlesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllArticlesRequestAminoMsg): QueryAllArticlesRequest {
    return QueryAllArticlesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllArticlesRequestProtoMsg): QueryAllArticlesRequest {
    return QueryAllArticlesRequest.decode(message.value);
  },
  toProto(message: QueryAllArticlesRequest): Uint8Array {
    return QueryAllArticlesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllArticlesRequest): QueryAllArticlesRequestProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryAllArticlesRequest",
      value: QueryAllArticlesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllArticlesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllArticlesResponse(): QueryAllArticlesResponse {
  return {
    article: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllArticlesResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryAllArticlesResponse
 */
export const QueryAllArticlesResponse = {
  typeUrl: "/bze.cointrunk.QueryAllArticlesResponse",
  is(o: any): o is QueryAllArticlesResponse {
    return o && (o.$typeUrl === QueryAllArticlesResponse.typeUrl || Array.isArray(o.article) && (!o.article.length || Article.is(o.article[0])));
  },
  isSDK(o: any): o is QueryAllArticlesResponseSDKType {
    return o && (o.$typeUrl === QueryAllArticlesResponse.typeUrl || Array.isArray(o.article) && (!o.article.length || Article.isSDK(o.article[0])));
  },
  isAmino(o: any): o is QueryAllArticlesResponseAmino {
    return o && (o.$typeUrl === QueryAllArticlesResponse.typeUrl || Array.isArray(o.article) && (!o.article.length || Article.isAmino(o.article[0])));
  },
  encode(message: QueryAllArticlesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.article) {
      Article.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllArticlesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArticlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.article.push(Article.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllArticlesResponse>): QueryAllArticlesResponse {
    const message = createBaseQueryAllArticlesResponse();
    message.article = object.article?.map(e => Article.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllArticlesResponseAmino): QueryAllArticlesResponse {
    const message = createBaseQueryAllArticlesResponse();
    message.article = object.article?.map(e => Article.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllArticlesResponse): QueryAllArticlesResponseAmino {
    const obj: any = {};
    if (message.article) {
      obj.article = message.article.map(e => e ? Article.toAmino(e) : undefined);
    } else {
      obj.article = message.article;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllArticlesResponseAminoMsg): QueryAllArticlesResponse {
    return QueryAllArticlesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllArticlesResponseProtoMsg): QueryAllArticlesResponse {
    return QueryAllArticlesResponse.decode(message.value);
  },
  toProto(message: QueryAllArticlesResponse): Uint8Array {
    return QueryAllArticlesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllArticlesResponse): QueryAllArticlesResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryAllArticlesResponse",
      value: QueryAllArticlesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllArticlesResponse.typeUrl)) {
      return;
    }
    Article.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryPublishersRequest(): QueryPublishersRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryPublishersRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersRequest
 */
export const QueryPublishersRequest = {
  typeUrl: "/bze.cointrunk.QueryPublishersRequest",
  is(o: any): o is QueryPublishersRequest {
    return o && o.$typeUrl === QueryPublishersRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPublishersRequestSDKType {
    return o && o.$typeUrl === QueryPublishersRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPublishersRequestAmino {
    return o && o.$typeUrl === QueryPublishersRequest.typeUrl;
  },
  encode(message: QueryPublishersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublishersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublishersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPublishersRequest>): QueryPublishersRequest {
    const message = createBaseQueryPublishersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPublishersRequestAmino): QueryPublishersRequest {
    const message = createBaseQueryPublishersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPublishersRequest): QueryPublishersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublishersRequestAminoMsg): QueryPublishersRequest {
    return QueryPublishersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublishersRequestProtoMsg): QueryPublishersRequest {
    return QueryPublishersRequest.decode(message.value);
  },
  toProto(message: QueryPublishersRequest): Uint8Array {
    return QueryPublishersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublishersRequest): QueryPublishersRequestProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryPublishersRequest",
      value: QueryPublishersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPublishersRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPublishersResponse(): QueryPublishersResponse {
  return {
    publisher: [],
    pagination: undefined
  };
}
/**
 * @name QueryPublishersResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublishersResponse
 */
export const QueryPublishersResponse = {
  typeUrl: "/bze.cointrunk.QueryPublishersResponse",
  is(o: any): o is QueryPublishersResponse {
    return o && (o.$typeUrl === QueryPublishersResponse.typeUrl || Array.isArray(o.publisher) && (!o.publisher.length || Publisher.is(o.publisher[0])));
  },
  isSDK(o: any): o is QueryPublishersResponseSDKType {
    return o && (o.$typeUrl === QueryPublishersResponse.typeUrl || Array.isArray(o.publisher) && (!o.publisher.length || Publisher.isSDK(o.publisher[0])));
  },
  isAmino(o: any): o is QueryPublishersResponseAmino {
    return o && (o.$typeUrl === QueryPublishersResponse.typeUrl || Array.isArray(o.publisher) && (!o.publisher.length || Publisher.isAmino(o.publisher[0])));
  },
  encode(message: QueryPublishersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.publisher) {
      Publisher.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublishersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublishersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publisher.push(Publisher.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPublishersResponse>): QueryPublishersResponse {
    const message = createBaseQueryPublishersResponse();
    message.publisher = object.publisher?.map(e => Publisher.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPublishersResponseAmino): QueryPublishersResponse {
    const message = createBaseQueryPublishersResponse();
    message.publisher = object.publisher?.map(e => Publisher.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPublishersResponse): QueryPublishersResponseAmino {
    const obj: any = {};
    if (message.publisher) {
      obj.publisher = message.publisher.map(e => e ? Publisher.toAmino(e) : undefined);
    } else {
      obj.publisher = message.publisher;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublishersResponseAminoMsg): QueryPublishersResponse {
    return QueryPublishersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublishersResponseProtoMsg): QueryPublishersResponse {
    return QueryPublishersResponse.decode(message.value);
  },
  toProto(message: QueryPublishersResponse): Uint8Array {
    return QueryPublishersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublishersResponse): QueryPublishersResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryPublishersResponse",
      value: QueryPublishersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPublishersResponse.typeUrl)) {
      return;
    }
    Publisher.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryPublisherRequest(): QueryPublisherRequest {
  return {
    address: ""
  };
}
/**
 * @name QueryPublisherRequest
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherRequest
 */
export const QueryPublisherRequest = {
  typeUrl: "/bze.cointrunk.QueryPublisherRequest",
  is(o: any): o is QueryPublisherRequest {
    return o && (o.$typeUrl === QueryPublisherRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryPublisherRequestSDKType {
    return o && (o.$typeUrl === QueryPublisherRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryPublisherRequestAmino {
    return o && (o.$typeUrl === QueryPublisherRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryPublisherRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublisherRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublisherRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPublisherRequest>): QueryPublisherRequest {
    const message = createBaseQueryPublisherRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryPublisherRequestAmino): QueryPublisherRequest {
    const message = createBaseQueryPublisherRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryPublisherRequest): QueryPublisherRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherRequestAminoMsg): QueryPublisherRequest {
    return QueryPublisherRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherRequestProtoMsg): QueryPublisherRequest {
    return QueryPublisherRequest.decode(message.value);
  },
  toProto(message: QueryPublisherRequest): Uint8Array {
    return QueryPublisherRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherRequest): QueryPublisherRequestProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryPublisherRequest",
      value: QueryPublisherRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPublisherResponse(): QueryPublisherResponse {
  return {
    publisher: undefined
  };
}
/**
 * @name QueryPublisherResponse
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.QueryPublisherResponse
 */
export const QueryPublisherResponse = {
  typeUrl: "/bze.cointrunk.QueryPublisherResponse",
  is(o: any): o is QueryPublisherResponse {
    return o && o.$typeUrl === QueryPublisherResponse.typeUrl;
  },
  isSDK(o: any): o is QueryPublisherResponseSDKType {
    return o && o.$typeUrl === QueryPublisherResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPublisherResponseAmino {
    return o && o.$typeUrl === QueryPublisherResponse.typeUrl;
  },
  encode(message: QueryPublisherResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisher !== undefined) {
      Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPublisherResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublisherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publisher = Publisher.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPublisherResponse>): QueryPublisherResponse {
    const message = createBaseQueryPublisherResponse();
    message.publisher = object.publisher !== undefined && object.publisher !== null ? Publisher.fromPartial(object.publisher) : undefined;
    return message;
  },
  fromAmino(object: QueryPublisherResponseAmino): QueryPublisherResponse {
    const message = createBaseQueryPublisherResponse();
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = Publisher.fromAmino(object.publisher);
    }
    return message;
  },
  toAmino(message: QueryPublisherResponse): QueryPublisherResponseAmino {
    const obj: any = {};
    obj.publisher = message.publisher ? Publisher.toAmino(message.publisher) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherResponseAminoMsg): QueryPublisherResponse {
    return QueryPublisherResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherResponseProtoMsg): QueryPublisherResponse {
    return QueryPublisherResponse.decode(message.value);
  },
  toProto(message: QueryPublisherResponse): Uint8Array {
    return QueryPublisherResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherResponse): QueryPublisherResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.QueryPublisherResponse",
      value: QueryPublisherResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPublisherResponse.typeUrl)) {
      return;
    }
    Publisher.registerTypeUrl();
  }
};