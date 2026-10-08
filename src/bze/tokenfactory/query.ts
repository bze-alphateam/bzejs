//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthority, DenomAuthorityAmino, DenomAuthoritySDKType } from "./denom_authority";
import { DenomBranding, DenomBrandingAmino, DenomBrandingSDKType, DenomBrandingRecord, DenomBrandingRecordAmino, DenomBrandingRecordSDKType } from "./denom_branding";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bze.tokenfactory.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bze.tokenfactory.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name QueryDenomAuthorityRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityRequest
 */
export interface QueryDenomAuthorityRequest {
  denom: string;
}
export interface QueryDenomAuthorityRequestProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryDenomAuthorityRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomAuthorityRequestAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityRequest
 */
export interface QueryDenomAuthorityRequestAmino {
  denom?: string;
}
export interface QueryDenomAuthorityRequestAminoMsg {
  type: "/bze.tokenfactory.QueryDenomAuthorityRequest";
  value: QueryDenomAuthorityRequestAmino;
}
/**
 * @name QueryDenomAuthorityRequestSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityRequest
 */
export interface QueryDenomAuthorityRequestSDKType {
  denom: string;
}
/**
 * @name QueryDenomAuthorityResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityResponse
 */
export interface QueryDenomAuthorityResponse {
  denomAuthority?: DenomAuthority;
}
export interface QueryDenomAuthorityResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryDenomAuthorityResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomAuthorityResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityResponse
 */
export interface QueryDenomAuthorityResponseAmino {
  denomAuthority?: DenomAuthorityAmino;
}
export interface QueryDenomAuthorityResponseAminoMsg {
  type: "/bze.tokenfactory.QueryDenomAuthorityResponse";
  value: QueryDenomAuthorityResponseAmino;
}
/**
 * @name QueryDenomAuthorityResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityResponse
 */
export interface QueryDenomAuthorityResponseSDKType {
  denomAuthority?: DenomAuthoritySDKType;
}
/**
 * @name QueryDenomBrandingRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingRequest
 */
export interface QueryDenomBrandingRequest {
  denom: string;
}
export interface QueryDenomBrandingRequestProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryDenomBrandingRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomBrandingRequestAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingRequest
 */
export interface QueryDenomBrandingRequestAmino {
  denom?: string;
}
export interface QueryDenomBrandingRequestAminoMsg {
  type: "/bze.tokenfactory.QueryDenomBrandingRequest";
  value: QueryDenomBrandingRequestAmino;
}
/**
 * @name QueryDenomBrandingRequestSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingRequest
 */
export interface QueryDenomBrandingRequestSDKType {
  denom: string;
}
/**
 * @name QueryDenomBrandingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingResponse
 */
export interface QueryDenomBrandingResponse {
  branding?: DenomBranding;
}
export interface QueryDenomBrandingResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryDenomBrandingResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomBrandingResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingResponse
 */
export interface QueryDenomBrandingResponseAmino {
  branding?: DenomBrandingAmino;
}
export interface QueryDenomBrandingResponseAminoMsg {
  type: "/bze.tokenfactory.QueryDenomBrandingResponse";
  value: QueryDenomBrandingResponseAmino;
}
/**
 * @name QueryDenomBrandingResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingResponse
 */
export interface QueryDenomBrandingResponseSDKType {
  branding?: DenomBrandingSDKType;
}
/**
 * @name QueryAllDenomBrandingRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingRequest
 */
export interface QueryAllDenomBrandingRequest {
  pagination?: PageRequest;
}
export interface QueryAllDenomBrandingRequestProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryAllDenomBrandingRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllDenomBrandingRequestAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingRequest
 */
export interface QueryAllDenomBrandingRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDenomBrandingRequestAminoMsg {
  type: "/bze.tokenfactory.QueryAllDenomBrandingRequest";
  value: QueryAllDenomBrandingRequestAmino;
}
/**
 * @name QueryAllDenomBrandingRequestSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingRequest
 */
export interface QueryAllDenomBrandingRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllDenomBrandingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingResponse
 */
export interface QueryAllDenomBrandingResponse {
  denomBrandings: DenomBrandingRecord[];
  pagination?: PageResponse;
}
export interface QueryAllDenomBrandingResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.QueryAllDenomBrandingResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllDenomBrandingResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingResponse
 */
export interface QueryAllDenomBrandingResponseAmino {
  denom_brandings?: DenomBrandingRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDenomBrandingResponseAminoMsg {
  type: "/bze.tokenfactory.QueryAllDenomBrandingResponse";
  value: QueryAllDenomBrandingResponseAmino;
}
/**
 * @name QueryAllDenomBrandingResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingResponse
 */
export interface QueryAllDenomBrandingResponseSDKType {
  denom_brandings: DenomBrandingRecordSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bze.tokenfactory.QueryParamsRequest",
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
      typeUrl: "/bze.tokenfactory.QueryParamsRequest",
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
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bze.tokenfactory.QueryParamsResponse",
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
      typeUrl: "/bze.tokenfactory.QueryParamsResponse",
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
function createBaseQueryDenomAuthorityRequest(): QueryDenomAuthorityRequest {
  return {
    denom: ""
  };
}
/**
 * @name QueryDenomAuthorityRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityRequest
 */
export const QueryDenomAuthorityRequest = {
  typeUrl: "/bze.tokenfactory.QueryDenomAuthorityRequest",
  is(o: any): o is QueryDenomAuthorityRequest {
    return o && (o.$typeUrl === QueryDenomAuthorityRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomAuthorityRequestSDKType {
    return o && (o.$typeUrl === QueryDenomAuthorityRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomAuthorityRequestAmino {
    return o && (o.$typeUrl === QueryDenomAuthorityRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomAuthorityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityRequest();
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
  fromPartial(object: Partial<QueryDenomAuthorityRequest>): QueryDenomAuthorityRequest {
    const message = createBaseQueryDenomAuthorityRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomAuthorityRequestAmino): QueryDenomAuthorityRequest {
    const message = createBaseQueryDenomAuthorityRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityRequest): QueryDenomAuthorityRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomAuthorityRequestAminoMsg): QueryDenomAuthorityRequest {
    return QueryDenomAuthorityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomAuthorityRequestProtoMsg): QueryDenomAuthorityRequest {
    return QueryDenomAuthorityRequest.decode(message.value);
  },
  toProto(message: QueryDenomAuthorityRequest): Uint8Array {
    return QueryDenomAuthorityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityRequest): QueryDenomAuthorityRequestProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.QueryDenomAuthorityRequest",
      value: QueryDenomAuthorityRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomAuthorityResponse(): QueryDenomAuthorityResponse {
  return {
    denomAuthority: undefined
  };
}
/**
 * @name QueryDenomAuthorityResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomAuthorityResponse
 */
export const QueryDenomAuthorityResponse = {
  typeUrl: "/bze.tokenfactory.QueryDenomAuthorityResponse",
  is(o: any): o is QueryDenomAuthorityResponse {
    return o && o.$typeUrl === QueryDenomAuthorityResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDenomAuthorityResponseSDKType {
    return o && o.$typeUrl === QueryDenomAuthorityResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDenomAuthorityResponseAmino {
    return o && o.$typeUrl === QueryDenomAuthorityResponse.typeUrl;
  },
  encode(message: QueryDenomAuthorityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomAuthority !== undefined) {
      DenomAuthority.encode(message.denomAuthority, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomAuthority = DenomAuthority.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomAuthorityResponse>): QueryDenomAuthorityResponse {
    const message = createBaseQueryDenomAuthorityResponse();
    message.denomAuthority = object.denomAuthority !== undefined && object.denomAuthority !== null ? DenomAuthority.fromPartial(object.denomAuthority) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomAuthorityResponseAmino): QueryDenomAuthorityResponse {
    const message = createBaseQueryDenomAuthorityResponse();
    if (object.denomAuthority !== undefined && object.denomAuthority !== null) {
      message.denomAuthority = DenomAuthority.fromAmino(object.denomAuthority);
    }
    return message;
  },
  toAmino(message: QueryDenomAuthorityResponse): QueryDenomAuthorityResponseAmino {
    const obj: any = {};
    obj.denomAuthority = message.denomAuthority ? DenomAuthority.toAmino(message.denomAuthority) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomAuthorityResponseAminoMsg): QueryDenomAuthorityResponse {
    return QueryDenomAuthorityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomAuthorityResponseProtoMsg): QueryDenomAuthorityResponse {
    return QueryDenomAuthorityResponse.decode(message.value);
  },
  toProto(message: QueryDenomAuthorityResponse): Uint8Array {
    return QueryDenomAuthorityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthorityResponse): QueryDenomAuthorityResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.QueryDenomAuthorityResponse",
      value: QueryDenomAuthorityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomAuthorityResponse.typeUrl)) {
      return;
    }
    DenomAuthority.registerTypeUrl();
  }
};
function createBaseQueryDenomBrandingRequest(): QueryDenomBrandingRequest {
  return {
    denom: ""
  };
}
/**
 * @name QueryDenomBrandingRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingRequest
 */
export const QueryDenomBrandingRequest = {
  typeUrl: "/bze.tokenfactory.QueryDenomBrandingRequest",
  is(o: any): o is QueryDenomBrandingRequest {
    return o && (o.$typeUrl === QueryDenomBrandingRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomBrandingRequestSDKType {
    return o && (o.$typeUrl === QueryDenomBrandingRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomBrandingRequestAmino {
    return o && (o.$typeUrl === QueryDenomBrandingRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomBrandingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomBrandingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomBrandingRequest();
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
  fromPartial(object: Partial<QueryDenomBrandingRequest>): QueryDenomBrandingRequest {
    const message = createBaseQueryDenomBrandingRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomBrandingRequestAmino): QueryDenomBrandingRequest {
    const message = createBaseQueryDenomBrandingRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomBrandingRequest): QueryDenomBrandingRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomBrandingRequestAminoMsg): QueryDenomBrandingRequest {
    return QueryDenomBrandingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomBrandingRequestProtoMsg): QueryDenomBrandingRequest {
    return QueryDenomBrandingRequest.decode(message.value);
  },
  toProto(message: QueryDenomBrandingRequest): Uint8Array {
    return QueryDenomBrandingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomBrandingRequest): QueryDenomBrandingRequestProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.QueryDenomBrandingRequest",
      value: QueryDenomBrandingRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomBrandingResponse(): QueryDenomBrandingResponse {
  return {
    branding: undefined
  };
}
/**
 * @name QueryDenomBrandingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryDenomBrandingResponse
 */
export const QueryDenomBrandingResponse = {
  typeUrl: "/bze.tokenfactory.QueryDenomBrandingResponse",
  is(o: any): o is QueryDenomBrandingResponse {
    return o && o.$typeUrl === QueryDenomBrandingResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDenomBrandingResponseSDKType {
    return o && o.$typeUrl === QueryDenomBrandingResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDenomBrandingResponseAmino {
    return o && o.$typeUrl === QueryDenomBrandingResponse.typeUrl;
  },
  encode(message: QueryDenomBrandingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.branding !== undefined) {
      DenomBranding.encode(message.branding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomBrandingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomBrandingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.branding = DenomBranding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomBrandingResponse>): QueryDenomBrandingResponse {
    const message = createBaseQueryDenomBrandingResponse();
    message.branding = object.branding !== undefined && object.branding !== null ? DenomBranding.fromPartial(object.branding) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomBrandingResponseAmino): QueryDenomBrandingResponse {
    const message = createBaseQueryDenomBrandingResponse();
    if (object.branding !== undefined && object.branding !== null) {
      message.branding = DenomBranding.fromAmino(object.branding);
    }
    return message;
  },
  toAmino(message: QueryDenomBrandingResponse): QueryDenomBrandingResponseAmino {
    const obj: any = {};
    obj.branding = message.branding ? DenomBranding.toAmino(message.branding) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomBrandingResponseAminoMsg): QueryDenomBrandingResponse {
    return QueryDenomBrandingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomBrandingResponseProtoMsg): QueryDenomBrandingResponse {
    return QueryDenomBrandingResponse.decode(message.value);
  },
  toProto(message: QueryDenomBrandingResponse): Uint8Array {
    return QueryDenomBrandingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomBrandingResponse): QueryDenomBrandingResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.QueryDenomBrandingResponse",
      value: QueryDenomBrandingResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomBrandingResponse.typeUrl)) {
      return;
    }
    DenomBranding.registerTypeUrl();
  }
};
function createBaseQueryAllDenomBrandingRequest(): QueryAllDenomBrandingRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAllDenomBrandingRequest
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingRequest
 */
export const QueryAllDenomBrandingRequest = {
  typeUrl: "/bze.tokenfactory.QueryAllDenomBrandingRequest",
  is(o: any): o is QueryAllDenomBrandingRequest {
    return o && o.$typeUrl === QueryAllDenomBrandingRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllDenomBrandingRequestSDKType {
    return o && o.$typeUrl === QueryAllDenomBrandingRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllDenomBrandingRequestAmino {
    return o && o.$typeUrl === QueryAllDenomBrandingRequest.typeUrl;
  },
  encode(message: QueryAllDenomBrandingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomBrandingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomBrandingRequest();
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
  fromPartial(object: Partial<QueryAllDenomBrandingRequest>): QueryAllDenomBrandingRequest {
    const message = createBaseQueryAllDenomBrandingRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomBrandingRequestAmino): QueryAllDenomBrandingRequest {
    const message = createBaseQueryAllDenomBrandingRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomBrandingRequest): QueryAllDenomBrandingRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomBrandingRequestAminoMsg): QueryAllDenomBrandingRequest {
    return QueryAllDenomBrandingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomBrandingRequestProtoMsg): QueryAllDenomBrandingRequest {
    return QueryAllDenomBrandingRequest.decode(message.value);
  },
  toProto(message: QueryAllDenomBrandingRequest): Uint8Array {
    return QueryAllDenomBrandingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomBrandingRequest): QueryAllDenomBrandingRequestProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.QueryAllDenomBrandingRequest",
      value: QueryAllDenomBrandingRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllDenomBrandingRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllDenomBrandingResponse(): QueryAllDenomBrandingResponse {
  return {
    denomBrandings: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllDenomBrandingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.QueryAllDenomBrandingResponse
 */
export const QueryAllDenomBrandingResponse = {
  typeUrl: "/bze.tokenfactory.QueryAllDenomBrandingResponse",
  is(o: any): o is QueryAllDenomBrandingResponse {
    return o && (o.$typeUrl === QueryAllDenomBrandingResponse.typeUrl || Array.isArray(o.denomBrandings) && (!o.denomBrandings.length || DenomBrandingRecord.is(o.denomBrandings[0])));
  },
  isSDK(o: any): o is QueryAllDenomBrandingResponseSDKType {
    return o && (o.$typeUrl === QueryAllDenomBrandingResponse.typeUrl || Array.isArray(o.denom_brandings) && (!o.denom_brandings.length || DenomBrandingRecord.isSDK(o.denom_brandings[0])));
  },
  isAmino(o: any): o is QueryAllDenomBrandingResponseAmino {
    return o && (o.$typeUrl === QueryAllDenomBrandingResponse.typeUrl || Array.isArray(o.denom_brandings) && (!o.denom_brandings.length || DenomBrandingRecord.isAmino(o.denom_brandings[0])));
  },
  encode(message: QueryAllDenomBrandingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomBrandings) {
      DenomBrandingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomBrandingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomBrandingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomBrandings.push(DenomBrandingRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllDenomBrandingResponse>): QueryAllDenomBrandingResponse {
    const message = createBaseQueryAllDenomBrandingResponse();
    message.denomBrandings = object.denomBrandings?.map(e => DenomBrandingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomBrandingResponseAmino): QueryAllDenomBrandingResponse {
    const message = createBaseQueryAllDenomBrandingResponse();
    message.denomBrandings = object.denom_brandings?.map(e => DenomBrandingRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomBrandingResponse): QueryAllDenomBrandingResponseAmino {
    const obj: any = {};
    if (message.denomBrandings) {
      obj.denom_brandings = message.denomBrandings.map(e => e ? DenomBrandingRecord.toAmino(e) : undefined);
    } else {
      obj.denom_brandings = message.denomBrandings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomBrandingResponseAminoMsg): QueryAllDenomBrandingResponse {
    return QueryAllDenomBrandingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomBrandingResponseProtoMsg): QueryAllDenomBrandingResponse {
    return QueryAllDenomBrandingResponse.decode(message.value);
  },
  toProto(message: QueryAllDenomBrandingResponse): Uint8Array {
    return QueryAllDenomBrandingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomBrandingResponse): QueryAllDenomBrandingResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.QueryAllDenomBrandingResponse",
      value: QueryAllDenomBrandingResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllDenomBrandingResponse.typeUrl)) {
      return;
    }
    DenomBrandingRecord.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};