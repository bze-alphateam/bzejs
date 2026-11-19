//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bze.guardian.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bze.guardian.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryBlockedDenomsRequest is request type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsRequest
 */
export interface QueryBlockedDenomsRequest {}
export interface QueryBlockedDenomsRequestProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryBlockedDenomsRequest";
  value: Uint8Array;
}
/**
 * QueryBlockedDenomsRequest is request type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsRequestAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsRequest
 */
export interface QueryBlockedDenomsRequestAmino {}
export interface QueryBlockedDenomsRequestAminoMsg {
  type: "/bze.guardian.v1.QueryBlockedDenomsRequest";
  value: QueryBlockedDenomsRequestAmino;
}
/**
 * QueryBlockedDenomsRequest is request type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsRequestSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsRequest
 */
export interface QueryBlockedDenomsRequestSDKType {}
/**
 * QueryBlockedDenomsResponse is response type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsResponse
 */
export interface QueryBlockedDenomsResponse {
  /**
   * denoms are the blacklisted denoms, every transfer of them is refused.
   */
  denoms: string[];
}
export interface QueryBlockedDenomsResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryBlockedDenomsResponse";
  value: Uint8Array;
}
/**
 * QueryBlockedDenomsResponse is response type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsResponse
 */
export interface QueryBlockedDenomsResponseAmino {
  /**
   * denoms are the blacklisted denoms, every transfer of them is refused.
   */
  denoms?: string[];
}
export interface QueryBlockedDenomsResponseAminoMsg {
  type: "/bze.guardian.v1.QueryBlockedDenomsResponse";
  value: QueryBlockedDenomsResponseAmino;
}
/**
 * QueryBlockedDenomsResponse is response type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsResponse
 */
export interface QueryBlockedDenomsResponseSDKType {
  denoms: string[];
}
/**
 * QueryAutomationPausedRequest is request type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedRequest
 */
export interface QueryAutomationPausedRequest {}
export interface QueryAutomationPausedRequestProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryAutomationPausedRequest";
  value: Uint8Array;
}
/**
 * QueryAutomationPausedRequest is request type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedRequestAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedRequest
 */
export interface QueryAutomationPausedRequestAmino {}
export interface QueryAutomationPausedRequestAminoMsg {
  type: "/bze.guardian.v1.QueryAutomationPausedRequest";
  value: QueryAutomationPausedRequestAmino;
}
/**
 * QueryAutomationPausedRequest is request type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedRequestSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedRequest
 */
export interface QueryAutomationPausedRequestSDKType {}
/**
 * QueryAutomationPausedResponse is response type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedResponse
 */
export interface QueryAutomationPausedResponse {
  /**
   * paused is true while the txfeecollector EndBlock conversions and the
   * burner's periodic burn are stopped.
   */
  paused: boolean;
}
export interface QueryAutomationPausedResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryAutomationPausedResponse";
  value: Uint8Array;
}
/**
 * QueryAutomationPausedResponse is response type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedResponse
 */
export interface QueryAutomationPausedResponseAmino {
  /**
   * paused is true while the txfeecollector EndBlock conversions and the
   * burner's periodic burn are stopped.
   */
  paused: boolean;
}
export interface QueryAutomationPausedResponseAminoMsg {
  type: "/bze.guardian.v1.QueryAutomationPausedResponse";
  value: QueryAutomationPausedResponseAmino;
}
/**
 * QueryAutomationPausedResponse is response type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedResponse
 */
export interface QueryAutomationPausedResponseSDKType {
  paused: boolean;
}
/**
 * QueryClosedChannelsRequest is request type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsRequest
 */
export interface QueryClosedChannelsRequest {}
export interface QueryClosedChannelsRequestProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryClosedChannelsRequest";
  value: Uint8Array;
}
/**
 * QueryClosedChannelsRequest is request type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsRequestAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsRequest
 */
export interface QueryClosedChannelsRequestAmino {}
export interface QueryClosedChannelsRequestAminoMsg {
  type: "/bze.guardian.v1.QueryClosedChannelsRequest";
  value: QueryClosedChannelsRequestAmino;
}
/**
 * QueryClosedChannelsRequest is request type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsRequestSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsRequest
 */
export interface QueryClosedChannelsRequestSDKType {}
/**
 * QueryClosedChannelsResponse is response type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsResponse
 */
export interface QueryClosedChannelsResponse {
  /**
   * channel_ids are the closed transfer channels, every ICS-20 transfer on them is refused.
   */
  channelIds: string[];
}
export interface QueryClosedChannelsResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.QueryClosedChannelsResponse";
  value: Uint8Array;
}
/**
 * QueryClosedChannelsResponse is response type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsResponse
 */
export interface QueryClosedChannelsResponseAmino {
  /**
   * channel_ids are the closed transfer channels, every ICS-20 transfer on them is refused.
   */
  channel_ids?: string[];
}
export interface QueryClosedChannelsResponseAminoMsg {
  type: "/bze.guardian.v1.QueryClosedChannelsResponse";
  value: QueryClosedChannelsResponseAmino;
}
/**
 * QueryClosedChannelsResponse is response type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsResponse
 */
export interface QueryClosedChannelsResponseSDKType {
  channel_ids: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bze.guardian.v1.QueryParamsRequest",
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
      typeUrl: "/bze.guardian.v1.QueryParamsRequest",
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
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bze.guardian.v1.QueryParamsResponse",
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
      typeUrl: "/bze.guardian.v1.QueryParamsResponse",
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
function createBaseQueryBlockedDenomsRequest(): QueryBlockedDenomsRequest {
  return {};
}
/**
 * QueryBlockedDenomsRequest is request type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsRequest
 */
export const QueryBlockedDenomsRequest = {
  typeUrl: "/bze.guardian.v1.QueryBlockedDenomsRequest",
  is(o: any): o is QueryBlockedDenomsRequest {
    return o && o.$typeUrl === QueryBlockedDenomsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryBlockedDenomsRequestSDKType {
    return o && o.$typeUrl === QueryBlockedDenomsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBlockedDenomsRequestAmino {
    return o && o.$typeUrl === QueryBlockedDenomsRequest.typeUrl;
  },
  encode(_: QueryBlockedDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockedDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockedDenomsRequest();
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
  fromPartial(_: Partial<QueryBlockedDenomsRequest>): QueryBlockedDenomsRequest {
    const message = createBaseQueryBlockedDenomsRequest();
    return message;
  },
  fromAmino(_: QueryBlockedDenomsRequestAmino): QueryBlockedDenomsRequest {
    const message = createBaseQueryBlockedDenomsRequest();
    return message;
  },
  toAmino(_: QueryBlockedDenomsRequest): QueryBlockedDenomsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBlockedDenomsRequestAminoMsg): QueryBlockedDenomsRequest {
    return QueryBlockedDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockedDenomsRequestProtoMsg): QueryBlockedDenomsRequest {
    return QueryBlockedDenomsRequest.decode(message.value);
  },
  toProto(message: QueryBlockedDenomsRequest): Uint8Array {
    return QueryBlockedDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockedDenomsRequest): QueryBlockedDenomsRequestProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.QueryBlockedDenomsRequest",
      value: QueryBlockedDenomsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBlockedDenomsResponse(): QueryBlockedDenomsResponse {
  return {
    denoms: []
  };
}
/**
 * QueryBlockedDenomsResponse is response type for the Query/BlockedDenoms RPC method.
 * @name QueryBlockedDenomsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryBlockedDenomsResponse
 */
export const QueryBlockedDenomsResponse = {
  typeUrl: "/bze.guardian.v1.QueryBlockedDenomsResponse",
  is(o: any): o is QueryBlockedDenomsResponse {
    return o && (o.$typeUrl === QueryBlockedDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isSDK(o: any): o is QueryBlockedDenomsResponseSDKType {
    return o && (o.$typeUrl === QueryBlockedDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is QueryBlockedDenomsResponseAmino {
    return o && (o.$typeUrl === QueryBlockedDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: QueryBlockedDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockedDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockedDenomsResponse();
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
  fromPartial(object: Partial<QueryBlockedDenomsResponse>): QueryBlockedDenomsResponse {
    const message = createBaseQueryBlockedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryBlockedDenomsResponseAmino): QueryBlockedDenomsResponse {
    const message = createBaseQueryBlockedDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryBlockedDenomsResponse): QueryBlockedDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBlockedDenomsResponseAminoMsg): QueryBlockedDenomsResponse {
    return QueryBlockedDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockedDenomsResponseProtoMsg): QueryBlockedDenomsResponse {
    return QueryBlockedDenomsResponse.decode(message.value);
  },
  toProto(message: QueryBlockedDenomsResponse): Uint8Array {
    return QueryBlockedDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockedDenomsResponse): QueryBlockedDenomsResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.QueryBlockedDenomsResponse",
      value: QueryBlockedDenomsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAutomationPausedRequest(): QueryAutomationPausedRequest {
  return {};
}
/**
 * QueryAutomationPausedRequest is request type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedRequest
 */
export const QueryAutomationPausedRequest = {
  typeUrl: "/bze.guardian.v1.QueryAutomationPausedRequest",
  is(o: any): o is QueryAutomationPausedRequest {
    return o && o.$typeUrl === QueryAutomationPausedRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAutomationPausedRequestSDKType {
    return o && o.$typeUrl === QueryAutomationPausedRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAutomationPausedRequestAmino {
    return o && o.$typeUrl === QueryAutomationPausedRequest.typeUrl;
  },
  encode(_: QueryAutomationPausedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutomationPausedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutomationPausedRequest();
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
  fromPartial(_: Partial<QueryAutomationPausedRequest>): QueryAutomationPausedRequest {
    const message = createBaseQueryAutomationPausedRequest();
    return message;
  },
  fromAmino(_: QueryAutomationPausedRequestAmino): QueryAutomationPausedRequest {
    const message = createBaseQueryAutomationPausedRequest();
    return message;
  },
  toAmino(_: QueryAutomationPausedRequest): QueryAutomationPausedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAutomationPausedRequestAminoMsg): QueryAutomationPausedRequest {
    return QueryAutomationPausedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutomationPausedRequestProtoMsg): QueryAutomationPausedRequest {
    return QueryAutomationPausedRequest.decode(message.value);
  },
  toProto(message: QueryAutomationPausedRequest): Uint8Array {
    return QueryAutomationPausedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAutomationPausedRequest): QueryAutomationPausedRequestProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.QueryAutomationPausedRequest",
      value: QueryAutomationPausedRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAutomationPausedResponse(): QueryAutomationPausedResponse {
  return {
    paused: false
  };
}
/**
 * QueryAutomationPausedResponse is response type for the Query/AutomationPaused RPC method.
 * @name QueryAutomationPausedResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryAutomationPausedResponse
 */
export const QueryAutomationPausedResponse = {
  typeUrl: "/bze.guardian.v1.QueryAutomationPausedResponse",
  is(o: any): o is QueryAutomationPausedResponse {
    return o && (o.$typeUrl === QueryAutomationPausedResponse.typeUrl || typeof o.paused === "boolean");
  },
  isSDK(o: any): o is QueryAutomationPausedResponseSDKType {
    return o && (o.$typeUrl === QueryAutomationPausedResponse.typeUrl || typeof o.paused === "boolean");
  },
  isAmino(o: any): o is QueryAutomationPausedResponseAmino {
    return o && (o.$typeUrl === QueryAutomationPausedResponse.typeUrl || typeof o.paused === "boolean");
  },
  encode(message: QueryAutomationPausedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutomationPausedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutomationPausedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutomationPausedResponse>): QueryAutomationPausedResponse {
    const message = createBaseQueryAutomationPausedResponse();
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: QueryAutomationPausedResponseAmino): QueryAutomationPausedResponse {
    const message = createBaseQueryAutomationPausedResponse();
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: QueryAutomationPausedResponse): QueryAutomationPausedResponseAmino {
    const obj: any = {};
    obj.paused = message.paused ?? false;
    return obj;
  },
  fromAminoMsg(object: QueryAutomationPausedResponseAminoMsg): QueryAutomationPausedResponse {
    return QueryAutomationPausedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutomationPausedResponseProtoMsg): QueryAutomationPausedResponse {
    return QueryAutomationPausedResponse.decode(message.value);
  },
  toProto(message: QueryAutomationPausedResponse): Uint8Array {
    return QueryAutomationPausedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAutomationPausedResponse): QueryAutomationPausedResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.QueryAutomationPausedResponse",
      value: QueryAutomationPausedResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClosedChannelsRequest(): QueryClosedChannelsRequest {
  return {};
}
/**
 * QueryClosedChannelsRequest is request type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsRequest
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsRequest
 */
export const QueryClosedChannelsRequest = {
  typeUrl: "/bze.guardian.v1.QueryClosedChannelsRequest",
  is(o: any): o is QueryClosedChannelsRequest {
    return o && o.$typeUrl === QueryClosedChannelsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryClosedChannelsRequestSDKType {
    return o && o.$typeUrl === QueryClosedChannelsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClosedChannelsRequestAmino {
    return o && o.$typeUrl === QueryClosedChannelsRequest.typeUrl;
  },
  encode(_: QueryClosedChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClosedChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClosedChannelsRequest();
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
  fromPartial(_: Partial<QueryClosedChannelsRequest>): QueryClosedChannelsRequest {
    const message = createBaseQueryClosedChannelsRequest();
    return message;
  },
  fromAmino(_: QueryClosedChannelsRequestAmino): QueryClosedChannelsRequest {
    const message = createBaseQueryClosedChannelsRequest();
    return message;
  },
  toAmino(_: QueryClosedChannelsRequest): QueryClosedChannelsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClosedChannelsRequestAminoMsg): QueryClosedChannelsRequest {
    return QueryClosedChannelsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClosedChannelsRequestProtoMsg): QueryClosedChannelsRequest {
    return QueryClosedChannelsRequest.decode(message.value);
  },
  toProto(message: QueryClosedChannelsRequest): Uint8Array {
    return QueryClosedChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClosedChannelsRequest): QueryClosedChannelsRequestProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.QueryClosedChannelsRequest",
      value: QueryClosedChannelsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClosedChannelsResponse(): QueryClosedChannelsResponse {
  return {
    channelIds: []
  };
}
/**
 * QueryClosedChannelsResponse is response type for the Query/ClosedChannels RPC method.
 * @name QueryClosedChannelsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.QueryClosedChannelsResponse
 */
export const QueryClosedChannelsResponse = {
  typeUrl: "/bze.guardian.v1.QueryClosedChannelsResponse",
  is(o: any): o is QueryClosedChannelsResponse {
    return o && (o.$typeUrl === QueryClosedChannelsResponse.typeUrl || Array.isArray(o.channelIds) && (!o.channelIds.length || typeof o.channelIds[0] === "string"));
  },
  isSDK(o: any): o is QueryClosedChannelsResponseSDKType {
    return o && (o.$typeUrl === QueryClosedChannelsResponse.typeUrl || Array.isArray(o.channel_ids) && (!o.channel_ids.length || typeof o.channel_ids[0] === "string"));
  },
  isAmino(o: any): o is QueryClosedChannelsResponseAmino {
    return o && (o.$typeUrl === QueryClosedChannelsResponse.typeUrl || Array.isArray(o.channel_ids) && (!o.channel_ids.length || typeof o.channel_ids[0] === "string"));
  },
  encode(message: QueryClosedChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channelIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClosedChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClosedChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryClosedChannelsResponse>): QueryClosedChannelsResponse {
    const message = createBaseQueryClosedChannelsResponse();
    message.channelIds = object.channelIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryClosedChannelsResponseAmino): QueryClosedChannelsResponse {
    const message = createBaseQueryClosedChannelsResponse();
    message.channelIds = object.channel_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryClosedChannelsResponse): QueryClosedChannelsResponseAmino {
    const obj: any = {};
    if (message.channelIds) {
      obj.channel_ids = message.channelIds.map(e => e);
    } else {
      obj.channel_ids = message.channelIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryClosedChannelsResponseAminoMsg): QueryClosedChannelsResponse {
    return QueryClosedChannelsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClosedChannelsResponseProtoMsg): QueryClosedChannelsResponse {
    return QueryClosedChannelsResponse.decode(message.value);
  },
  toProto(message: QueryClosedChannelsResponse): Uint8Array {
    return QueryClosedChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClosedChannelsResponse): QueryClosedChannelsResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.QueryClosedChannelsResponse",
      value: QueryClosedChannelsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};