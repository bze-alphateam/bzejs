//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsAmino, BurnedCoinsSDKType } from "./burned_coins";
import { Raffle, RaffleAmino, RaffleSDKType, RaffleWinner, RaffleWinnerAmino, RaffleWinnerSDKType } from "./raffle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
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
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
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
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
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
export interface QueryAllBurnedCoinsRequestSDKType {
  pagination?: PageRequestSDKType;
}
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
export interface QueryAllBurnedCoinsResponseSDKType {
  burnedCoins: BurnedCoinsSDKType[];
  pagination?: PageResponseSDKType;
}
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
export interface QueryRafflesRequestSDKType {
  pagination?: PageRequestSDKType;
}
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
export interface QueryRafflesResponseSDKType {
  list: RaffleSDKType[];
  pagination?: PageResponseSDKType;
}
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
export interface QueryRaffleWinnersRequestSDKType {
  denom: string;
  pagination?: PageRequestSDKType;
}
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
export interface QueryRaffleWinnersResponseSDKType {
  list: RaffleWinnerSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/bze.burner.QueryParamsRequest",
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/bze.burner.QueryParamsResponse",
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
  }
};
function createBaseQueryAllBurnedCoinsRequest(): QueryAllBurnedCoinsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllBurnedCoinsRequest = {
  typeUrl: "/bze.burner.QueryAllBurnedCoinsRequest",
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
  }
};
function createBaseQueryAllBurnedCoinsResponse(): QueryAllBurnedCoinsResponse {
  return {
    burnedCoins: [],
    pagination: undefined
  };
}
export const QueryAllBurnedCoinsResponse = {
  typeUrl: "/bze.burner.QueryAllBurnedCoinsResponse",
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
  }
};
function createBaseQueryRafflesRequest(): QueryRafflesRequest {
  return {
    pagination: undefined
  };
}
export const QueryRafflesRequest = {
  typeUrl: "/bze.burner.QueryRafflesRequest",
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
  }
};
function createBaseQueryRafflesResponse(): QueryRafflesResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryRafflesResponse = {
  typeUrl: "/bze.burner.QueryRafflesResponse",
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
  }
};
function createBaseQueryRaffleWinnersRequest(): QueryRaffleWinnersRequest {
  return {
    denom: "",
    pagination: undefined
  };
}
export const QueryRaffleWinnersRequest = {
  typeUrl: "/bze.burner.QueryRaffleWinnersRequest",
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
  }
};
function createBaseQueryRaffleWinnersResponse(): QueryRaffleWinnersResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryRaffleWinnersResponse = {
  typeUrl: "/bze.burner.QueryRaffleWinnersResponse",
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
  }
};