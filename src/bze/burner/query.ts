//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsAmino, BurnedCoinsSDKType } from "./burned_coins";
import { Raffle, RaffleAmino, RaffleSDKType, RaffleWinner, RaffleWinnerAmino, RaffleWinnerSDKType } from "./raffle";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bze.burner.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bze.burner.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bze.burner.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bze.burner.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name QueryAllBurnedCoinsRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsRequest
 */
export interface QueryAllBurnedCoinsRequest {
  pagination?: PageRequest;
}
export interface QueryAllBurnedCoinsRequestProtoMsg {
  typeUrl: "/bze.burner.QueryAllBurnedCoinsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllBurnedCoinsRequestAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsRequest
 */
export interface QueryAllBurnedCoinsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllBurnedCoinsRequestAminoMsg {
  type: "/bze.burner.QueryAllBurnedCoinsRequest";
  value: QueryAllBurnedCoinsRequestAmino;
}
/**
 * @name QueryAllBurnedCoinsRequestSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsRequest
 */
export interface QueryAllBurnedCoinsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllBurnedCoinsResponse
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsResponse
 */
export interface QueryAllBurnedCoinsResponse {
  burnedCoins: BurnedCoins[];
  pagination?: PageResponse;
}
export interface QueryAllBurnedCoinsResponseProtoMsg {
  typeUrl: "/bze.burner.QueryAllBurnedCoinsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllBurnedCoinsResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsResponse
 */
export interface QueryAllBurnedCoinsResponseAmino {
  burnedCoins?: BurnedCoinsAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllBurnedCoinsResponseAminoMsg {
  type: "/bze.burner.QueryAllBurnedCoinsResponse";
  value: QueryAllBurnedCoinsResponseAmino;
}
/**
 * @name QueryAllBurnedCoinsResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsResponse
 */
export interface QueryAllBurnedCoinsResponseSDKType {
  burnedCoins: BurnedCoinsSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryRafflesRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesRequest
 */
export interface QueryRafflesRequest {
  pagination?: PageRequest;
}
export interface QueryRafflesRequestProtoMsg {
  typeUrl: "/bze.burner.QueryRafflesRequest";
  value: Uint8Array;
}
/**
 * @name QueryRafflesRequestAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesRequest
 */
export interface QueryRafflesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryRafflesRequestAminoMsg {
  type: "/bze.burner.QueryRafflesRequest";
  value: QueryRafflesRequestAmino;
}
/**
 * @name QueryRafflesRequestSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesRequest
 */
export interface QueryRafflesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryRafflesResponse
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesResponse
 */
export interface QueryRafflesResponse {
  list: Raffle[];
  pagination?: PageResponse;
}
export interface QueryRafflesResponseProtoMsg {
  typeUrl: "/bze.burner.QueryRafflesResponse";
  value: Uint8Array;
}
/**
 * @name QueryRafflesResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesResponse
 */
export interface QueryRafflesResponseAmino {
  list?: RaffleAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRafflesResponseAminoMsg {
  type: "/bze.burner.QueryRafflesResponse";
  value: QueryRafflesResponseAmino;
}
/**
 * @name QueryRafflesResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesResponse
 */
export interface QueryRafflesResponseSDKType {
  list: RaffleSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryRaffleWinnersRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersRequest
 */
export interface QueryRaffleWinnersRequest {
  denom: string;
  pagination?: PageRequest;
}
export interface QueryRaffleWinnersRequestProtoMsg {
  typeUrl: "/bze.burner.QueryRaffleWinnersRequest";
  value: Uint8Array;
}
/**
 * @name QueryRaffleWinnersRequestAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersRequest
 */
export interface QueryRaffleWinnersRequestAmino {
  denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryRaffleWinnersRequestAminoMsg {
  type: "/bze.burner.QueryRaffleWinnersRequest";
  value: QueryRaffleWinnersRequestAmino;
}
/**
 * @name QueryRaffleWinnersRequestSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersRequest
 */
export interface QueryRaffleWinnersRequestSDKType {
  denom: string;
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryRaffleWinnersResponse
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersResponse
 */
export interface QueryRaffleWinnersResponse {
  list: RaffleWinner[];
  pagination?: PageResponse;
}
export interface QueryRaffleWinnersResponseProtoMsg {
  typeUrl: "/bze.burner.QueryRaffleWinnersResponse";
  value: Uint8Array;
}
/**
 * @name QueryRaffleWinnersResponseAmino
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersResponse
 */
export interface QueryRaffleWinnersResponseAmino {
  list?: RaffleWinnerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRaffleWinnersResponseAminoMsg {
  type: "/bze.burner.QueryRaffleWinnersResponse";
  value: QueryRaffleWinnersResponseAmino;
}
/**
 * @name QueryRaffleWinnersResponseSDKType
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersResponse
 */
export interface QueryRaffleWinnersResponseSDKType {
  list: RaffleWinnerSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bze.burner.QueryParamsRequest",
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
      typeUrl: "/bze.burner.QueryParamsRequest",
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
 * @package bze.burner
 * @see proto type: bze.burner.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bze.burner.QueryParamsResponse",
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
      typeUrl: "/bze.burner.QueryParamsResponse",
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
function createBaseQueryAllBurnedCoinsRequest(): QueryAllBurnedCoinsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAllBurnedCoinsRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsRequest
 */
export const QueryAllBurnedCoinsRequest = {
  typeUrl: "/bze.burner.QueryAllBurnedCoinsRequest",
  is(o: any): o is QueryAllBurnedCoinsRequest {
    return o && o.$typeUrl === QueryAllBurnedCoinsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllBurnedCoinsRequestSDKType {
    return o && o.$typeUrl === QueryAllBurnedCoinsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllBurnedCoinsRequestAmino {
    return o && o.$typeUrl === QueryAllBurnedCoinsRequest.typeUrl;
  },
  encode(message: QueryAllBurnedCoinsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBurnedCoinsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBurnedCoinsRequest();
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
  fromPartial(object: Partial<QueryAllBurnedCoinsRequest>): QueryAllBurnedCoinsRequest {
    const message = createBaseQueryAllBurnedCoinsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBurnedCoinsRequestAmino): QueryAllBurnedCoinsRequest {
    const message = createBaseQueryAllBurnedCoinsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBurnedCoinsRequest): QueryAllBurnedCoinsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBurnedCoinsRequestAminoMsg): QueryAllBurnedCoinsRequest {
    return QueryAllBurnedCoinsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBurnedCoinsRequestProtoMsg): QueryAllBurnedCoinsRequest {
    return QueryAllBurnedCoinsRequest.decode(message.value);
  },
  toProto(message: QueryAllBurnedCoinsRequest): Uint8Array {
    return QueryAllBurnedCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBurnedCoinsRequest): QueryAllBurnedCoinsRequestProtoMsg {
    return {
      typeUrl: "/bze.burner.QueryAllBurnedCoinsRequest",
      value: QueryAllBurnedCoinsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllBurnedCoinsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllBurnedCoinsResponse(): QueryAllBurnedCoinsResponse {
  return {
    burnedCoins: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllBurnedCoinsResponse
 * @package bze.burner
 * @see proto type: bze.burner.QueryAllBurnedCoinsResponse
 */
export const QueryAllBurnedCoinsResponse = {
  typeUrl: "/bze.burner.QueryAllBurnedCoinsResponse",
  is(o: any): o is QueryAllBurnedCoinsResponse {
    return o && (o.$typeUrl === QueryAllBurnedCoinsResponse.typeUrl || Array.isArray(o.burnedCoins) && (!o.burnedCoins.length || BurnedCoins.is(o.burnedCoins[0])));
  },
  isSDK(o: any): o is QueryAllBurnedCoinsResponseSDKType {
    return o && (o.$typeUrl === QueryAllBurnedCoinsResponse.typeUrl || Array.isArray(o.burnedCoins) && (!o.burnedCoins.length || BurnedCoins.isSDK(o.burnedCoins[0])));
  },
  isAmino(o: any): o is QueryAllBurnedCoinsResponseAmino {
    return o && (o.$typeUrl === QueryAllBurnedCoinsResponse.typeUrl || Array.isArray(o.burnedCoins) && (!o.burnedCoins.length || BurnedCoins.isAmino(o.burnedCoins[0])));
  },
  encode(message: QueryAllBurnedCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.burnedCoins) {
      BurnedCoins.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBurnedCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBurnedCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnedCoins.push(BurnedCoins.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllBurnedCoinsResponse>): QueryAllBurnedCoinsResponse {
    const message = createBaseQueryAllBurnedCoinsResponse();
    message.burnedCoins = object.burnedCoins?.map(e => BurnedCoins.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBurnedCoinsResponseAmino): QueryAllBurnedCoinsResponse {
    const message = createBaseQueryAllBurnedCoinsResponse();
    message.burnedCoins = object.burnedCoins?.map(e => BurnedCoins.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBurnedCoinsResponse): QueryAllBurnedCoinsResponseAmino {
    const obj: any = {};
    if (message.burnedCoins) {
      obj.burnedCoins = message.burnedCoins.map(e => e ? BurnedCoins.toAmino(e) : undefined);
    } else {
      obj.burnedCoins = message.burnedCoins;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBurnedCoinsResponseAminoMsg): QueryAllBurnedCoinsResponse {
    return QueryAllBurnedCoinsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBurnedCoinsResponseProtoMsg): QueryAllBurnedCoinsResponse {
    return QueryAllBurnedCoinsResponse.decode(message.value);
  },
  toProto(message: QueryAllBurnedCoinsResponse): Uint8Array {
    return QueryAllBurnedCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBurnedCoinsResponse): QueryAllBurnedCoinsResponseProtoMsg {
    return {
      typeUrl: "/bze.burner.QueryAllBurnedCoinsResponse",
      value: QueryAllBurnedCoinsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllBurnedCoinsResponse.typeUrl)) {
      return;
    }
    BurnedCoins.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryRafflesRequest(): QueryRafflesRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryRafflesRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesRequest
 */
export const QueryRafflesRequest = {
  typeUrl: "/bze.burner.QueryRafflesRequest",
  is(o: any): o is QueryRafflesRequest {
    return o && o.$typeUrl === QueryRafflesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryRafflesRequestSDKType {
    return o && o.$typeUrl === QueryRafflesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryRafflesRequestAmino {
    return o && o.$typeUrl === QueryRafflesRequest.typeUrl;
  },
  encode(message: QueryRafflesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRafflesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRafflesRequest();
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
  fromPartial(object: Partial<QueryRafflesRequest>): QueryRafflesRequest {
    const message = createBaseQueryRafflesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRafflesRequestAmino): QueryRafflesRequest {
    const message = createBaseQueryRafflesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRafflesRequest): QueryRafflesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRafflesRequestAminoMsg): QueryRafflesRequest {
    return QueryRafflesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRafflesRequestProtoMsg): QueryRafflesRequest {
    return QueryRafflesRequest.decode(message.value);
  },
  toProto(message: QueryRafflesRequest): Uint8Array {
    return QueryRafflesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRafflesRequest): QueryRafflesRequestProtoMsg {
    return {
      typeUrl: "/bze.burner.QueryRafflesRequest",
      value: QueryRafflesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRafflesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryRafflesResponse(): QueryRafflesResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryRafflesResponse
 * @package bze.burner
 * @see proto type: bze.burner.QueryRafflesResponse
 */
export const QueryRafflesResponse = {
  typeUrl: "/bze.burner.QueryRafflesResponse",
  is(o: any): o is QueryRafflesResponse {
    return o && (o.$typeUrl === QueryRafflesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || Raffle.is(o.list[0])));
  },
  isSDK(o: any): o is QueryRafflesResponseSDKType {
    return o && (o.$typeUrl === QueryRafflesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || Raffle.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryRafflesResponseAmino {
    return o && (o.$typeUrl === QueryRafflesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || Raffle.isAmino(o.list[0])));
  },
  encode(message: QueryRafflesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      Raffle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRafflesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRafflesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(Raffle.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryRafflesResponse>): QueryRafflesResponse {
    const message = createBaseQueryRafflesResponse();
    message.list = object.list?.map(e => Raffle.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRafflesResponseAmino): QueryRafflesResponse {
    const message = createBaseQueryRafflesResponse();
    message.list = object.list?.map(e => Raffle.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRafflesResponse): QueryRafflesResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? Raffle.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRafflesResponseAminoMsg): QueryRafflesResponse {
    return QueryRafflesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRafflesResponseProtoMsg): QueryRafflesResponse {
    return QueryRafflesResponse.decode(message.value);
  },
  toProto(message: QueryRafflesResponse): Uint8Array {
    return QueryRafflesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRafflesResponse): QueryRafflesResponseProtoMsg {
    return {
      typeUrl: "/bze.burner.QueryRafflesResponse",
      value: QueryRafflesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRafflesResponse.typeUrl)) {
      return;
    }
    Raffle.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryRaffleWinnersRequest(): QueryRaffleWinnersRequest {
  return {
    denom: "",
    pagination: undefined
  };
}
/**
 * @name QueryRaffleWinnersRequest
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersRequest
 */
export const QueryRaffleWinnersRequest = {
  typeUrl: "/bze.burner.QueryRaffleWinnersRequest",
  is(o: any): o is QueryRaffleWinnersRequest {
    return o && (o.$typeUrl === QueryRaffleWinnersRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryRaffleWinnersRequestSDKType {
    return o && (o.$typeUrl === QueryRaffleWinnersRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryRaffleWinnersRequestAmino {
    return o && (o.$typeUrl === QueryRaffleWinnersRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryRaffleWinnersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRaffleWinnersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRaffleWinnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRaffleWinnersRequest>): QueryRaffleWinnersRequest {
    const message = createBaseQueryRaffleWinnersRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRaffleWinnersRequestAmino): QueryRaffleWinnersRequest {
    const message = createBaseQueryRaffleWinnersRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRaffleWinnersRequest): QueryRaffleWinnersRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRaffleWinnersRequestAminoMsg): QueryRaffleWinnersRequest {
    return QueryRaffleWinnersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRaffleWinnersRequestProtoMsg): QueryRaffleWinnersRequest {
    return QueryRaffleWinnersRequest.decode(message.value);
  },
  toProto(message: QueryRaffleWinnersRequest): Uint8Array {
    return QueryRaffleWinnersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRaffleWinnersRequest): QueryRaffleWinnersRequestProtoMsg {
    return {
      typeUrl: "/bze.burner.QueryRaffleWinnersRequest",
      value: QueryRaffleWinnersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRaffleWinnersRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryRaffleWinnersResponse(): QueryRaffleWinnersResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryRaffleWinnersResponse
 * @package bze.burner
 * @see proto type: bze.burner.QueryRaffleWinnersResponse
 */
export const QueryRaffleWinnersResponse = {
  typeUrl: "/bze.burner.QueryRaffleWinnersResponse",
  is(o: any): o is QueryRaffleWinnersResponse {
    return o && (o.$typeUrl === QueryRaffleWinnersResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || RaffleWinner.is(o.list[0])));
  },
  isSDK(o: any): o is QueryRaffleWinnersResponseSDKType {
    return o && (o.$typeUrl === QueryRaffleWinnersResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || RaffleWinner.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryRaffleWinnersResponseAmino {
    return o && (o.$typeUrl === QueryRaffleWinnersResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || RaffleWinner.isAmino(o.list[0])));
  },
  encode(message: QueryRaffleWinnersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      RaffleWinner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRaffleWinnersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRaffleWinnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(RaffleWinner.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryRaffleWinnersResponse>): QueryRaffleWinnersResponse {
    const message = createBaseQueryRaffleWinnersResponse();
    message.list = object.list?.map(e => RaffleWinner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRaffleWinnersResponseAmino): QueryRaffleWinnersResponse {
    const message = createBaseQueryRaffleWinnersResponse();
    message.list = object.list?.map(e => RaffleWinner.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRaffleWinnersResponse): QueryRaffleWinnersResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? RaffleWinner.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRaffleWinnersResponseAminoMsg): QueryRaffleWinnersResponse {
    return QueryRaffleWinnersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRaffleWinnersResponseProtoMsg): QueryRaffleWinnersResponse {
    return QueryRaffleWinnersResponse.decode(message.value);
  },
  toProto(message: QueryRaffleWinnersResponse): Uint8Array {
    return QueryRaffleWinnersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRaffleWinnersResponse): QueryRaffleWinnersResponseProtoMsg {
    return {
      typeUrl: "/bze.burner.QueryRaffleWinnersResponse",
      value: QueryRaffleWinnersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRaffleWinnersResponse.typeUrl)) {
      return;
    }
    RaffleWinner.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};