import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakingReward, StakingRewardSDKType } from "./staking_reward";
import { TradingReward, TradingRewardSDKType, TradingRewardLeaderboard, TradingRewardLeaderboardSDKType, MarketIdTradingRewardId, MarketIdTradingRewardIdSDKType } from "./trading_reward";
import { StakingRewardParticipant, StakingRewardParticipantSDKType, PendingUnlockParticipant, PendingUnlockParticipantSDKType } from "./staking_reward_participant";
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
export interface QueryGetStakingRewardRequest {
  rewardId: string;
}
export interface QueryGetStakingRewardRequestSDKType {
  reward_id: string;
}
export interface QueryGetStakingRewardResponse {
  stakingReward?: StakingReward;
}
export interface QueryGetStakingRewardResponseSDKType {
  staking_reward?: StakingRewardSDKType;
}
export interface QueryAllStakingRewardRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakingRewardRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakingRewardResponse {
  list: StakingReward[];
  pagination?: PageResponse;
}
export interface QueryAllStakingRewardResponseSDKType {
  list: StakingRewardSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetTradingRewardRequest {
  rewardId: string;
}
export interface QueryGetTradingRewardRequestSDKType {
  reward_id: string;
}
export interface QueryGetTradingRewardResponse {
  tradingReward?: TradingReward;
}
export interface QueryGetTradingRewardResponseSDKType {
  trading_reward?: TradingRewardSDKType;
}
export interface QueryAllTradingRewardRequest {
  state: string;
  pagination?: PageRequest;
}
export interface QueryAllTradingRewardRequestSDKType {
  state: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllTradingRewardResponse {
  list: TradingReward[];
  pagination?: PageResponse;
}
export interface QueryAllTradingRewardResponseSDKType {
  list: TradingRewardSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetStakingRewardParticipantRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryGetStakingRewardParticipantRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryGetStakingRewardParticipantResponse {
  list: StakingRewardParticipant[];
  pagination?: PageResponse;
}
export interface QueryGetStakingRewardParticipantResponseSDKType {
  list: StakingRewardParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAllStakingRewardParticipantRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakingRewardParticipantRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakingRewardParticipantResponse {
  list: StakingRewardParticipant[];
  pagination?: PageResponse;
}
export interface QueryAllStakingRewardParticipantResponseSDKType {
  list: StakingRewardParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetTradingRewardLeaderboardRequest {
  rewardId: string;
}
export interface QueryGetTradingRewardLeaderboardRequestSDKType {
  reward_id: string;
}
export interface QueryGetTradingRewardLeaderboardResponse {
  leaderboard?: TradingRewardLeaderboard;
}
export interface QueryGetTradingRewardLeaderboardResponseSDKType {
  leaderboard?: TradingRewardLeaderboardSDKType;
}
export interface QueryGetMarketIdTradingRewardIdHandlerRequest {
  marketId: string;
}
export interface QueryGetMarketIdTradingRewardIdHandlerRequestSDKType {
  market_id: string;
}
export interface QueryGetMarketIdTradingRewardIdHandlerResponse {
  marketIdRewardId?: MarketIdTradingRewardId;
}
export interface QueryGetMarketIdTradingRewardIdHandlerResponseSDKType {
  market_id_reward_id?: MarketIdTradingRewardIdSDKType;
}
export interface QueryAllPendingUnlockParticipantRequest {
  pagination?: PageRequest;
}
export interface QueryAllPendingUnlockParticipantRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPendingUnlockParticipantResponse {
  list: PendingUnlockParticipant[];
  pagination?: PageResponse;
}
export interface QueryAllPendingUnlockParticipantResponseSDKType {
  list: PendingUnlockParticipantSDKType[];
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

function createBaseQueryGetStakingRewardRequest(): QueryGetStakingRewardRequest {
  return {
    rewardId: ""
  };
}

export const QueryGetStakingRewardRequest = {
  encode(message: QueryGetStakingRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakingRewardRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetStakingRewardRequest>): QueryGetStakingRewardRequest {
    const message = createBaseQueryGetStakingRewardRequest();
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseQueryGetStakingRewardResponse(): QueryGetStakingRewardResponse {
  return {
    stakingReward: undefined
  };
}

export const QueryGetStakingRewardResponse = {
  encode(message: QueryGetStakingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingReward !== undefined) {
      StakingReward.encode(message.stakingReward, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingReward = StakingReward.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetStakingRewardResponse>): QueryGetStakingRewardResponse {
    const message = createBaseQueryGetStakingRewardResponse();
    message.stakingReward = object.stakingReward !== undefined && object.stakingReward !== null ? StakingReward.fromPartial(object.stakingReward) : undefined;
    return message;
  }

};

function createBaseQueryAllStakingRewardRequest(): QueryAllStakingRewardRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllStakingRewardRequest = {
  encode(message: QueryAllStakingRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardRequest();

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

  fromPartial(object: DeepPartial<QueryAllStakingRewardRequest>): QueryAllStakingRewardRequest {
    const message = createBaseQueryAllStakingRewardRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllStakingRewardResponse(): QueryAllStakingRewardResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryAllStakingRewardResponse = {
  encode(message: QueryAllStakingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      StakingReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.list.push(StakingReward.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllStakingRewardResponse>): QueryAllStakingRewardResponse {
    const message = createBaseQueryAllStakingRewardResponse();
    message.list = object.list?.map(e => StakingReward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetTradingRewardRequest(): QueryGetTradingRewardRequest {
  return {
    rewardId: ""
  };
}

export const QueryGetTradingRewardRequest = {
  encode(message: QueryGetTradingRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradingRewardRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTradingRewardRequest>): QueryGetTradingRewardRequest {
    const message = createBaseQueryGetTradingRewardRequest();
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseQueryGetTradingRewardResponse(): QueryGetTradingRewardResponse {
  return {
    tradingReward: undefined
  };
}

export const QueryGetTradingRewardResponse = {
  encode(message: QueryGetTradingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradingReward !== undefined) {
      TradingReward.encode(message.tradingReward, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tradingReward = TradingReward.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTradingRewardResponse>): QueryGetTradingRewardResponse {
    const message = createBaseQueryGetTradingRewardResponse();
    message.tradingReward = object.tradingReward !== undefined && object.tradingReward !== null ? TradingReward.fromPartial(object.tradingReward) : undefined;
    return message;
  }

};

function createBaseQueryAllTradingRewardRequest(): QueryAllTradingRewardRequest {
  return {
    state: "",
    pagination: undefined
  };
}

export const QueryAllTradingRewardRequest = {
  encode(message: QueryAllTradingRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradingRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradingRewardRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = reader.string();
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

  fromPartial(object: DeepPartial<QueryAllTradingRewardRequest>): QueryAllTradingRewardRequest {
    const message = createBaseQueryAllTradingRewardRequest();
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllTradingRewardResponse(): QueryAllTradingRewardResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryAllTradingRewardResponse = {
  encode(message: QueryAllTradingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      TradingReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.list.push(TradingReward.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllTradingRewardResponse>): QueryAllTradingRewardResponse {
    const message = createBaseQueryAllTradingRewardResponse();
    message.list = object.list?.map(e => TradingReward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetStakingRewardParticipantRequest(): QueryGetStakingRewardParticipantRequest {
  return {
    address: "",
    pagination: undefined
  };
}

export const QueryGetStakingRewardParticipantRequest = {
  encode(message: QueryGetStakingRewardParticipantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardParticipantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakingRewardParticipantRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromPartial(object: DeepPartial<QueryGetStakingRewardParticipantRequest>): QueryGetStakingRewardParticipantRequest {
    const message = createBaseQueryGetStakingRewardParticipantRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetStakingRewardParticipantResponse(): QueryGetStakingRewardParticipantResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryGetStakingRewardParticipantResponse = {
  encode(message: QueryGetStakingRewardParticipantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      StakingRewardParticipant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardParticipantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakingRewardParticipantResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.list.push(StakingRewardParticipant.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryGetStakingRewardParticipantResponse>): QueryGetStakingRewardParticipantResponse {
    const message = createBaseQueryGetStakingRewardParticipantResponse();
    message.list = object.list?.map(e => StakingRewardParticipant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllStakingRewardParticipantRequest(): QueryAllStakingRewardParticipantRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllStakingRewardParticipantRequest = {
  encode(message: QueryAllStakingRewardParticipantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardParticipantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardParticipantRequest();

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

  fromPartial(object: DeepPartial<QueryAllStakingRewardParticipantRequest>): QueryAllStakingRewardParticipantRequest {
    const message = createBaseQueryAllStakingRewardParticipantRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllStakingRewardParticipantResponse(): QueryAllStakingRewardParticipantResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryAllStakingRewardParticipantResponse = {
  encode(message: QueryAllStakingRewardParticipantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      StakingRewardParticipant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardParticipantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardParticipantResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.list.push(StakingRewardParticipant.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllStakingRewardParticipantResponse>): QueryAllStakingRewardParticipantResponse {
    const message = createBaseQueryAllStakingRewardParticipantResponse();
    message.list = object.list?.map(e => StakingRewardParticipant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetTradingRewardLeaderboardRequest(): QueryGetTradingRewardLeaderboardRequest {
  return {
    rewardId: ""
  };
}

export const QueryGetTradingRewardLeaderboardRequest = {
  encode(message: QueryGetTradingRewardLeaderboardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardLeaderboardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradingRewardLeaderboardRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTradingRewardLeaderboardRequest>): QueryGetTradingRewardLeaderboardRequest {
    const message = createBaseQueryGetTradingRewardLeaderboardRequest();
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseQueryGetTradingRewardLeaderboardResponse(): QueryGetTradingRewardLeaderboardResponse {
  return {
    leaderboard: undefined
  };
}

export const QueryGetTradingRewardLeaderboardResponse = {
  encode(message: QueryGetTradingRewardLeaderboardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaderboard !== undefined) {
      TradingRewardLeaderboard.encode(message.leaderboard, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardLeaderboardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradingRewardLeaderboardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.leaderboard = TradingRewardLeaderboard.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTradingRewardLeaderboardResponse>): QueryGetTradingRewardLeaderboardResponse {
    const message = createBaseQueryGetTradingRewardLeaderboardResponse();
    message.leaderboard = object.leaderboard !== undefined && object.leaderboard !== null ? TradingRewardLeaderboard.fromPartial(object.leaderboard) : undefined;
    return message;
  }

};

function createBaseQueryGetMarketIdTradingRewardIdHandlerRequest(): QueryGetMarketIdTradingRewardIdHandlerRequest {
  return {
    marketId: ""
  };
}

export const QueryGetMarketIdTradingRewardIdHandlerRequest = {
  encode(message: QueryGetMarketIdTradingRewardIdHandlerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketIdTradingRewardIdHandlerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketIdTradingRewardIdHandlerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetMarketIdTradingRewardIdHandlerRequest>): QueryGetMarketIdTradingRewardIdHandlerRequest {
    const message = createBaseQueryGetMarketIdTradingRewardIdHandlerRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryGetMarketIdTradingRewardIdHandlerResponse(): QueryGetMarketIdTradingRewardIdHandlerResponse {
  return {
    marketIdRewardId: undefined
  };
}

export const QueryGetMarketIdTradingRewardIdHandlerResponse = {
  encode(message: QueryGetMarketIdTradingRewardIdHandlerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketIdRewardId !== undefined) {
      MarketIdTradingRewardId.encode(message.marketIdRewardId, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketIdTradingRewardIdHandlerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketIdTradingRewardIdHandlerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketIdRewardId = MarketIdTradingRewardId.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetMarketIdTradingRewardIdHandlerResponse>): QueryGetMarketIdTradingRewardIdHandlerResponse {
    const message = createBaseQueryGetMarketIdTradingRewardIdHandlerResponse();
    message.marketIdRewardId = object.marketIdRewardId !== undefined && object.marketIdRewardId !== null ? MarketIdTradingRewardId.fromPartial(object.marketIdRewardId) : undefined;
    return message;
  }

};

function createBaseQueryAllPendingUnlockParticipantRequest(): QueryAllPendingUnlockParticipantRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllPendingUnlockParticipantRequest = {
  encode(message: QueryAllPendingUnlockParticipantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingUnlockParticipantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingUnlockParticipantRequest();

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

  fromPartial(object: DeepPartial<QueryAllPendingUnlockParticipantRequest>): QueryAllPendingUnlockParticipantRequest {
    const message = createBaseQueryAllPendingUnlockParticipantRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllPendingUnlockParticipantResponse(): QueryAllPendingUnlockParticipantResponse {
  return {
    list: [],
    pagination: undefined
  };
}

export const QueryAllPendingUnlockParticipantResponse = {
  encode(message: QueryAllPendingUnlockParticipantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      PendingUnlockParticipant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingUnlockParticipantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingUnlockParticipantResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.list.push(PendingUnlockParticipant.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllPendingUnlockParticipantResponse>): QueryAllPendingUnlockParticipantResponse {
    const message = createBaseQueryAllPendingUnlockParticipantResponse();
    message.list = object.list?.map(e => PendingUnlockParticipant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};