import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsSDKType } from "./burned_coins";
import { Raffle, RaffleSDKType, RaffleWinner, RaffleWinnerSDKType } from "./raffle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params holds all the parameters of this module. */
  params?: ParamsSDKType;
}
export interface QueryAllBurnedCoinsRequest {
  pagination?: PageRequest;
}
export interface QueryAllBurnedCoinsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllBurnedCoinsResponse {
  burnedCoins: BurnedCoins[];
  pagination?: PageResponse;
}
export interface QueryAllBurnedCoinsResponseSDKType {
  burnedCoins: BurnedCoinsSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryRafflesRequest {
  pagination?: PageRequest;
}
export interface QueryRafflesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryRafflesResponse {
  list: Raffle[];
  pagination?: PageResponse;
}
export interface QueryRafflesResponseSDKType {
  list: RaffleSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryRaffleWinnersRequest {
  denom: string;
  pagination?: PageRequest;
}
export interface QueryRaffleWinnersRequestSDKType {
  denom: string;
  pagination?: PageRequestSDKType;
}
export interface QueryRaffleWinnersResponse {
  list: RaffleWinner[];
  pagination?: PageResponse;
}
export interface QueryRaffleWinnersResponseSDKType {
  list: RaffleWinnerSDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryAllBurnedCoinsRequest(): QueryAllBurnedCoinsRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllBurnedCoinsRequest = {
  encode(message: QueryAllBurnedCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurnedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAllBurnedCoinsRequest>): QueryAllBurnedCoinsRequest {
    const message = createBaseQueryAllBurnedCoinsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllBurnedCoinsResponse(): QueryAllBurnedCoinsResponse {
  return {
    burnedCoins: [],
    pagination: undefined
  };
}

export const QueryAllBurnedCoinsResponse = {
  encode(message: QueryAllBurnedCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.burnedCoins) {
      BurnedCoins.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurnedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAllBurnedCoinsResponse>): QueryAllBurnedCoinsResponse {
    const message = createBaseQueryAllBurnedCoinsResponse();
    message.burnedCoins = object.burnedCoins?.map(e => BurnedCoins.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRafflesRequest(): QueryRafflesRequest {
  return {
    pagination: undefined
  };
}

export const QueryRafflesRequest = {
  encode(message: QueryRafflesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRafflesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryRafflesRequest>): QueryRafflesRequest {
    const message = createBaseQueryRafflesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRafflesResponse(): QueryRafflesResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryRafflesResponse = {
  encode(message: QueryRafflesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      Raffle.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRafflesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryRafflesResponse>): QueryRafflesResponse {
    const message = createBaseQueryRafflesResponse();
    message.list = object.list?.map(e => Raffle.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRaffleWinnersRequest(): QueryRaffleWinnersRequest {
  return {
    denom: "",
    pagination: undefined
  };
}

export const QueryRaffleWinnersRequest = {
  encode(message: QueryRaffleWinnersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRaffleWinnersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryRaffleWinnersRequest>): QueryRaffleWinnersRequest {
    const message = createBaseQueryRaffleWinnersRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRaffleWinnersResponse(): QueryRaffleWinnersResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryRaffleWinnersResponse = {
  encode(message: QueryRaffleWinnersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      RaffleWinner.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRaffleWinnersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryRaffleWinnersResponse>): QueryRaffleWinnersResponse {
    const message = createBaseQueryRaffleWinnersResponse();
    message.list = object.list?.map(e => RaffleWinner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};