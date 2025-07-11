//@ts-nocheck
import { CounterpartyInfo, CounterpartyInfoAmino, CounterpartyInfoSDKType } from "./counterparty";
import { Config, ConfigAmino, ConfigSDKType } from "./config";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
 * method
 */
export interface QueryCounterpartyInfoRequest {
  /** client state unique identifier */
  clientId: string;
}
export interface QueryCounterpartyInfoRequestProtoMsg {
  typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoRequest";
  value: Uint8Array;
}
/**
 * QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
 * method
 * @name QueryCounterpartyInfoRequestAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.QueryCounterpartyInfoRequest
 */
export interface QueryCounterpartyInfoRequestAmino {
  /**
   * client state unique identifier
   */
  client_id?: string;
}
export interface QueryCounterpartyInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryCounterpartyInfoRequest";
  value: QueryCounterpartyInfoRequestAmino;
}
/**
 * QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
 * method
 */
export interface QueryCounterpartyInfoRequestSDKType {
  client_id: string;
}
/**
 * QueryCounterpartyInfoResponse is the response type for the
 * Query/CounterpartyInfo RPC method.
 */
export interface QueryCounterpartyInfoResponse {
  counterpartyInfo?: CounterpartyInfo;
}
export interface QueryCounterpartyInfoResponseProtoMsg {
  typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoResponse";
  value: Uint8Array;
}
/**
 * QueryCounterpartyInfoResponse is the response type for the
 * Query/CounterpartyInfo RPC method.
 * @name QueryCounterpartyInfoResponseAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.QueryCounterpartyInfoResponse
 */
export interface QueryCounterpartyInfoResponseAmino {
  counterparty_info?: CounterpartyInfoAmino;
}
export interface QueryCounterpartyInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryCounterpartyInfoResponse";
  value: QueryCounterpartyInfoResponseAmino;
}
/**
 * QueryCounterpartyInfoResponse is the response type for the
 * Query/CounterpartyInfo RPC method.
 */
export interface QueryCounterpartyInfoResponseSDKType {
  counterparty_info?: CounterpartyInfoSDKType;
}
/** QueryConfigRequest is the request type for the Query/Config RPC method */
export interface QueryConfigRequest {
  /** client state unique identifier */
  clientId: string;
}
export interface QueryConfigRequestProtoMsg {
  typeUrl: "/ibc.core.client.v2.QueryConfigRequest";
  value: Uint8Array;
}
/**
 * QueryConfigRequest is the request type for the Query/Config RPC method
 * @name QueryConfigRequestAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.QueryConfigRequest
 */
export interface QueryConfigRequestAmino {
  /**
   * client state unique identifier
   */
  client_id?: string;
}
export interface QueryConfigRequestAminoMsg {
  type: "cosmos-sdk/QueryConfigRequest";
  value: QueryConfigRequestAmino;
}
/** QueryConfigRequest is the request type for the Query/Config RPC method */
export interface QueryConfigRequestSDKType {
  client_id: string;
}
/** QueryConfigResponse is the response type for the Query/Config RPC method */
export interface QueryConfigResponse {
  config?: Config;
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: "/ibc.core.client.v2.QueryConfigResponse";
  value: Uint8Array;
}
/**
 * QueryConfigResponse is the response type for the Query/Config RPC method
 * @name QueryConfigResponseAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.QueryConfigResponse
 */
export interface QueryConfigResponseAmino {
  config?: ConfigAmino;
}
export interface QueryConfigResponseAminoMsg {
  type: "cosmos-sdk/QueryConfigResponse";
  value: QueryConfigResponseAmino;
}
/** QueryConfigResponse is the response type for the Query/Config RPC method */
export interface QueryConfigResponseSDKType {
  config?: ConfigSDKType;
}
function createBaseQueryCounterpartyInfoRequest(): QueryCounterpartyInfoRequest {
  return {
    clientId: ""
  };
}
export const QueryCounterpartyInfoRequest = {
  typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoRequest",
  encode(message: QueryCounterpartyInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCounterpartyInfoRequest>): QueryCounterpartyInfoRequest {
    const message = createBaseQueryCounterpartyInfoRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: QueryCounterpartyInfoRequestAmino): QueryCounterpartyInfoRequest {
    const message = createBaseQueryCounterpartyInfoRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryCounterpartyInfoRequest): QueryCounterpartyInfoRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyInfoRequestAminoMsg): QueryCounterpartyInfoRequest {
    return QueryCounterpartyInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyInfoRequest): QueryCounterpartyInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyInfoRequest",
      value: QueryCounterpartyInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyInfoRequestProtoMsg): QueryCounterpartyInfoRequest {
    return QueryCounterpartyInfoRequest.decode(message.value);
  },
  toProto(message: QueryCounterpartyInfoRequest): Uint8Array {
    return QueryCounterpartyInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyInfoRequest): QueryCounterpartyInfoRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoRequest",
      value: QueryCounterpartyInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCounterpartyInfoResponse(): QueryCounterpartyInfoResponse {
  return {
    counterpartyInfo: undefined
  };
}
export const QueryCounterpartyInfoResponse = {
  typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoResponse",
  encode(message: QueryCounterpartyInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counterpartyInfo !== undefined) {
      CounterpartyInfo.encode(message.counterpartyInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyInfo = CounterpartyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCounterpartyInfoResponse>): QueryCounterpartyInfoResponse {
    const message = createBaseQueryCounterpartyInfoResponse();
    message.counterpartyInfo = object.counterpartyInfo !== undefined && object.counterpartyInfo !== null ? CounterpartyInfo.fromPartial(object.counterpartyInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryCounterpartyInfoResponseAmino): QueryCounterpartyInfoResponse {
    const message = createBaseQueryCounterpartyInfoResponse();
    if (object.counterparty_info !== undefined && object.counterparty_info !== null) {
      message.counterpartyInfo = CounterpartyInfo.fromAmino(object.counterparty_info);
    }
    return message;
  },
  toAmino(message: QueryCounterpartyInfoResponse): QueryCounterpartyInfoResponseAmino {
    const obj: any = {};
    obj.counterparty_info = message.counterpartyInfo ? CounterpartyInfo.toAmino(message.counterpartyInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyInfoResponseAminoMsg): QueryCounterpartyInfoResponse {
    return QueryCounterpartyInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyInfoResponse): QueryCounterpartyInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyInfoResponse",
      value: QueryCounterpartyInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCounterpartyInfoResponseProtoMsg): QueryCounterpartyInfoResponse {
    return QueryCounterpartyInfoResponse.decode(message.value);
  },
  toProto(message: QueryCounterpartyInfoResponse): Uint8Array {
    return QueryCounterpartyInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCounterpartyInfoResponse): QueryCounterpartyInfoResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoResponse",
      value: QueryCounterpartyInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {
    clientId: ""
  };
}
export const QueryConfigRequest = {
  typeUrl: "/ibc.core.client.v2.QueryConfigRequest",
  encode(message: QueryConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: QueryConfigRequestAmino): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryConfigRequest): QueryConfigRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigRequest): QueryConfigRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigRequest",
      value: QueryConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined
  };
}
export const QueryConfigResponse = {
  typeUrl: "/ibc.core.client.v2.QueryConfigResponse",
  encode(message: QueryConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: QueryConfigResponse): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigResponse): QueryConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigResponse",
      value: QueryConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};