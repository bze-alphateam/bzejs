//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthority, DenomAuthorityAmino, DenomAuthoritySDKType } from "./denom_authority";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
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
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
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
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
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
export interface QueryDenomAuthorityRequestSDKType {
  denom: string;
}
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
export interface QueryDenomAuthorityResponseSDKType {
  denomAuthority?: DenomAuthoritySDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/bze.tokenfactory.QueryParamsRequest",
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/bze.tokenfactory.QueryParamsResponse",
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
  }
};
function createBaseQueryDenomAuthorityRequest(): QueryDenomAuthorityRequest {
  return {
    denom: ""
  };
}
export const QueryDenomAuthorityRequest = {
  typeUrl: "/bze.tokenfactory.QueryDenomAuthorityRequest",
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
  }
};
function createBaseQueryDenomAuthorityResponse(): QueryDenomAuthorityResponse {
  return {
    denomAuthority: undefined
  };
}
export const QueryDenomAuthorityResponse = {
  typeUrl: "/bze.tokenfactory.QueryDenomAuthorityResponse",
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
  }
};