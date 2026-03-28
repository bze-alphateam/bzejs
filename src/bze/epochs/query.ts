//@ts-nocheck
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./epoch";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * @name QueryEpochsInfoRequest
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoRequest
 */
export interface QueryEpochsInfoRequest {}
export interface QueryEpochsInfoRequestProtoMsg {
  typeUrl: "/bze.epochs.QueryEpochsInfoRequest";
  value: Uint8Array;
}
/**
 * @name QueryEpochsInfoRequestAmino
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoRequest
 */
export interface QueryEpochsInfoRequestAmino {}
export interface QueryEpochsInfoRequestAminoMsg {
  type: "/bze.epochs.QueryEpochsInfoRequest";
  value: QueryEpochsInfoRequestAmino;
}
/**
 * @name QueryEpochsInfoRequestSDKType
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoRequest
 */
export interface QueryEpochsInfoRequestSDKType {}
/**
 * @name QueryEpochsInfoResponse
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoResponse
 */
export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
}
export interface QueryEpochsInfoResponseProtoMsg {
  typeUrl: "/bze.epochs.QueryEpochsInfoResponse";
  value: Uint8Array;
}
/**
 * @name QueryEpochsInfoResponseAmino
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoResponse
 */
export interface QueryEpochsInfoResponseAmino {
  epochs?: EpochInfoAmino[];
}
export interface QueryEpochsInfoResponseAminoMsg {
  type: "/bze.epochs.QueryEpochsInfoResponse";
  value: QueryEpochsInfoResponseAmino;
}
/**
 * @name QueryEpochsInfoResponseSDKType
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoResponse
 */
export interface QueryEpochsInfoResponseSDKType {
  epochs: EpochInfoSDKType[];
}
/**
 * @name QueryCurrentEpochRequest
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochRequest
 */
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
  typeUrl: "/bze.epochs.QueryCurrentEpochRequest";
  value: Uint8Array;
}
/**
 * @name QueryCurrentEpochRequestAmino
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochRequest
 */
export interface QueryCurrentEpochRequestAmino {
  identifier?: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
  type: "/bze.epochs.QueryCurrentEpochRequest";
  value: QueryCurrentEpochRequestAmino;
}
/**
 * @name QueryCurrentEpochRequestSDKType
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochRequest
 */
export interface QueryCurrentEpochRequestSDKType {
  identifier: string;
}
/**
 * @name QueryCurrentEpochResponse
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochResponse
 */
export interface QueryCurrentEpochResponse {
  currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
  typeUrl: "/bze.epochs.QueryCurrentEpochResponse";
  value: Uint8Array;
}
/**
 * @name QueryCurrentEpochResponseAmino
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochResponse
 */
export interface QueryCurrentEpochResponseAmino {
  current_epoch?: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
  type: "/bze.epochs.QueryCurrentEpochResponse";
  value: QueryCurrentEpochResponseAmino;
}
/**
 * @name QueryCurrentEpochResponseSDKType
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochResponse
 */
export interface QueryCurrentEpochResponseSDKType {
  current_epoch: bigint;
}
function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return {};
}
/**
 * @name QueryEpochsInfoRequest
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoRequest
 */
export const QueryEpochsInfoRequest = {
  typeUrl: "/bze.epochs.QueryEpochsInfoRequest",
  is(o: any): o is QueryEpochsInfoRequest {
    return o && o.$typeUrl === QueryEpochsInfoRequest.typeUrl;
  },
  isSDK(o: any): o is QueryEpochsInfoRequestSDKType {
    return o && o.$typeUrl === QueryEpochsInfoRequest.typeUrl;
  },
  isAmino(o: any): o is QueryEpochsInfoRequestAmino {
    return o && o.$typeUrl === QueryEpochsInfoRequest.typeUrl;
  },
  encode(_: QueryEpochsInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
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
  fromPartial(_: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    return message;
  },
  fromAmino(_: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    return message;
  },
  toAmino(_: QueryEpochsInfoRequest): QueryEpochsInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEpochsInfoRequestAminoMsg): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.decode(message.value);
  },
  toProto(message: QueryEpochsInfoRequest): Uint8Array {
    return QueryEpochsInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg {
    return {
      typeUrl: "/bze.epochs.QueryEpochsInfoRequest",
      value: QueryEpochsInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return {
    epochs: []
  };
}
/**
 * @name QueryEpochsInfoResponse
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryEpochsInfoResponse
 */
export const QueryEpochsInfoResponse = {
  typeUrl: "/bze.epochs.QueryEpochsInfoResponse",
  is(o: any): o is QueryEpochsInfoResponse {
    return o && (o.$typeUrl === QueryEpochsInfoResponse.typeUrl || Array.isArray(o.epochs) && (!o.epochs.length || EpochInfo.is(o.epochs[0])));
  },
  isSDK(o: any): o is QueryEpochsInfoResponseSDKType {
    return o && (o.$typeUrl === QueryEpochsInfoResponse.typeUrl || Array.isArray(o.epochs) && (!o.epochs.length || EpochInfo.isSDK(o.epochs[0])));
  },
  isAmino(o: any): o is QueryEpochsInfoResponseAmino {
    return o && (o.$typeUrl === QueryEpochsInfoResponse.typeUrl || Array.isArray(o.epochs) && (!o.epochs.length || EpochInfo.isAmino(o.epochs[0])));
  },
  encode(message: QueryEpochsInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = message.epochs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEpochsInfoResponseAminoMsg): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.decode(message.value);
  },
  toProto(message: QueryEpochsInfoResponse): Uint8Array {
    return QueryEpochsInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg {
    return {
      typeUrl: "/bze.epochs.QueryEpochsInfoResponse",
      value: QueryEpochsInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEpochsInfoResponse.typeUrl)) {
      return;
    }
    EpochInfo.registerTypeUrl();
  }
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: ""
  };
}
/**
 * @name QueryCurrentEpochRequest
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochRequest
 */
export const QueryCurrentEpochRequest = {
  typeUrl: "/bze.epochs.QueryCurrentEpochRequest",
  is(o: any): o is QueryCurrentEpochRequest {
    return o && (o.$typeUrl === QueryCurrentEpochRequest.typeUrl || typeof o.identifier === "string");
  },
  isSDK(o: any): o is QueryCurrentEpochRequestSDKType {
    return o && (o.$typeUrl === QueryCurrentEpochRequest.typeUrl || typeof o.identifier === "string");
  },
  isAmino(o: any): o is QueryCurrentEpochRequestAmino {
    return o && (o.$typeUrl === QueryCurrentEpochRequest.typeUrl || typeof o.identifier === "string");
  },
  encode(message: QueryCurrentEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino {
    const obj: any = {};
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.decode(message.value);
  },
  toProto(message: QueryCurrentEpochRequest): Uint8Array {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg {
    return {
      typeUrl: "/bze.epochs.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    currentEpoch: BigInt(0)
  };
}
/**
 * @name QueryCurrentEpochResponse
 * @package bze.epochs
 * @see proto type: bze.epochs.QueryCurrentEpochResponse
 */
export const QueryCurrentEpochResponse = {
  typeUrl: "/bze.epochs.QueryCurrentEpochResponse",
  is(o: any): o is QueryCurrentEpochResponse {
    return o && (o.$typeUrl === QueryCurrentEpochResponse.typeUrl || typeof o.currentEpoch === "bigint");
  },
  isSDK(o: any): o is QueryCurrentEpochResponseSDKType {
    return o && (o.$typeUrl === QueryCurrentEpochResponse.typeUrl || typeof o.current_epoch === "bigint");
  },
  isAmino(o: any): o is QueryCurrentEpochResponseAmino {
    return o && (o.$typeUrl === QueryCurrentEpochResponse.typeUrl || typeof o.current_epoch === "bigint");
  },
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino {
    const obj: any = {};
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.decode(message.value);
  },
  toProto(message: QueryCurrentEpochResponse): Uint8Array {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg {
    return {
      typeUrl: "/bze.epochs.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};