//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakingReward, StakingRewardAmino, StakingRewardSDKType, TradingReward, TradingRewardAmino, TradingRewardSDKType, StakingRewardParticipant, StakingRewardParticipantAmino, StakingRewardParticipantSDKType, TradingRewardLeaderboard, TradingRewardLeaderboardAmino, TradingRewardLeaderboardSDKType, MarketIdTradingRewardId, MarketIdTradingRewardIdAmino, MarketIdTradingRewardIdSDKType, PendingUnlockParticipant, PendingUnlockParticipantAmino, PendingUnlockParticipantSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bze.rewards.QueryParamsRequest";
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
  typeUrl: "/bze.rewards.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bze.rewards.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetStakingRewardRequest {
  rewardId: string;
}
export interface QueryGetStakingRewardRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryGetStakingRewardRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetStakingRewardRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardRequest
 */
export interface QueryGetStakingRewardRequestAmino {
  reward_id?: string;
}
export interface QueryGetStakingRewardRequestAminoMsg {
  type: "/bze.rewards.QueryGetStakingRewardRequest";
  value: QueryGetStakingRewardRequestAmino;
}
export interface QueryGetStakingRewardRequestSDKType {
  reward_id: string;
}
export interface QueryGetStakingRewardResponse {
  stakingReward: StakingReward;
}
export interface QueryGetStakingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryGetStakingRewardResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetStakingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardResponse
 */
export interface QueryGetStakingRewardResponseAmino {
  staking_reward?: StakingRewardAmino;
}
export interface QueryGetStakingRewardResponseAminoMsg {
  type: "/bze.rewards.QueryGetStakingRewardResponse";
  value: QueryGetStakingRewardResponseAmino;
}
export interface QueryGetStakingRewardResponseSDKType {
  staking_reward: StakingRewardSDKType;
}
export interface QueryAllStakingRewardsRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakingRewardsRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryAllStakingRewardsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllStakingRewardsRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsRequest
 */
export interface QueryAllStakingRewardsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllStakingRewardsRequestAminoMsg {
  type: "/bze.rewards.QueryAllStakingRewardsRequest";
  value: QueryAllStakingRewardsRequestAmino;
}
export interface QueryAllStakingRewardsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakingRewardsResponse {
  list: StakingReward[];
  pagination?: PageResponse;
}
export interface QueryAllStakingRewardsResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryAllStakingRewardsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllStakingRewardsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsResponse
 */
export interface QueryAllStakingRewardsResponseAmino {
  list?: StakingRewardAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStakingRewardsResponseAminoMsg {
  type: "/bze.rewards.QueryAllStakingRewardsResponse";
  value: QueryAllStakingRewardsResponseAmino;
}
export interface QueryAllStakingRewardsResponseSDKType {
  list: StakingRewardSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryTradingRewardRequest {
  rewardId: string;
}
export interface QueryTradingRewardRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryTradingRewardRequest";
  value: Uint8Array;
}
/**
 * @name QueryTradingRewardRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardRequest
 */
export interface QueryTradingRewardRequestAmino {
  reward_id?: string;
}
export interface QueryTradingRewardRequestAminoMsg {
  type: "/bze.rewards.QueryTradingRewardRequest";
  value: QueryTradingRewardRequestAmino;
}
export interface QueryTradingRewardRequestSDKType {
  reward_id: string;
}
export interface QueryTradingRewardResponse {
  tradingReward: TradingReward;
}
export interface QueryTradingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryTradingRewardResponse";
  value: Uint8Array;
}
/**
 * @name QueryTradingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardResponse
 */
export interface QueryTradingRewardResponseAmino {
  trading_reward?: TradingRewardAmino;
}
export interface QueryTradingRewardResponseAminoMsg {
  type: "/bze.rewards.QueryTradingRewardResponse";
  value: QueryTradingRewardResponseAmino;
}
export interface QueryTradingRewardResponseSDKType {
  trading_reward: TradingRewardSDKType;
}
export interface QueryAllTradingRewardsRequest {
  state: string;
  pagination?: PageRequest;
}
export interface QueryAllTradingRewardsRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryAllTradingRewardsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllTradingRewardsRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsRequest
 */
export interface QueryAllTradingRewardsRequestAmino {
  state?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllTradingRewardsRequestAminoMsg {
  type: "/bze.rewards.QueryAllTradingRewardsRequest";
  value: QueryAllTradingRewardsRequestAmino;
}
export interface QueryAllTradingRewardsRequestSDKType {
  state: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllTradingRewardsResponse {
  list: TradingReward[];
  pagination?: PageResponse;
}
export interface QueryAllTradingRewardsResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryAllTradingRewardsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllTradingRewardsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsResponse
 */
export interface QueryAllTradingRewardsResponseAmino {
  list?: TradingRewardAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTradingRewardsResponseAminoMsg {
  type: "/bze.rewards.QueryAllTradingRewardsResponse";
  value: QueryAllTradingRewardsResponseAmino;
}
export interface QueryAllTradingRewardsResponseSDKType {
  list: TradingRewardSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryStakingRewardParticipantRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryStakingRewardParticipantRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryStakingRewardParticipantRequest";
  value: Uint8Array;
}
/**
 * @name QueryStakingRewardParticipantRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantRequest
 */
export interface QueryStakingRewardParticipantRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryStakingRewardParticipantRequestAminoMsg {
  type: "/bze.rewards.QueryStakingRewardParticipantRequest";
  value: QueryStakingRewardParticipantRequestAmino;
}
export interface QueryStakingRewardParticipantRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryStakingRewardParticipantResponse {
  list: StakingRewardParticipant[];
  pagination?: PageResponse;
}
export interface QueryStakingRewardParticipantResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryStakingRewardParticipantResponse";
  value: Uint8Array;
}
/**
 * @name QueryStakingRewardParticipantResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantResponse
 */
export interface QueryStakingRewardParticipantResponseAmino {
  list?: StakingRewardParticipantAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryStakingRewardParticipantResponseAminoMsg {
  type: "/bze.rewards.QueryStakingRewardParticipantResponse";
  value: QueryStakingRewardParticipantResponseAmino;
}
export interface QueryStakingRewardParticipantResponseSDKType {
  list: StakingRewardParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAllStakingRewardParticipantsRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakingRewardParticipantsRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllStakingRewardParticipantsRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsRequest
 */
export interface QueryAllStakingRewardParticipantsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllStakingRewardParticipantsRequestAminoMsg {
  type: "/bze.rewards.QueryAllStakingRewardParticipantsRequest";
  value: QueryAllStakingRewardParticipantsRequestAmino;
}
export interface QueryAllStakingRewardParticipantsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakingRewardParticipantsResponse {
  list: StakingRewardParticipant[];
  pagination?: PageResponse;
}
export interface QueryAllStakingRewardParticipantsResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllStakingRewardParticipantsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsResponse
 */
export interface QueryAllStakingRewardParticipantsResponseAmino {
  list?: StakingRewardParticipantAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStakingRewardParticipantsResponseAminoMsg {
  type: "/bze.rewards.QueryAllStakingRewardParticipantsResponse";
  value: QueryAllStakingRewardParticipantsResponseAmino;
}
export interface QueryAllStakingRewardParticipantsResponseSDKType {
  list: StakingRewardParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryTradingRewardLeaderboardRequest {
  rewardId: string;
}
export interface QueryTradingRewardLeaderboardRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardRequest";
  value: Uint8Array;
}
/**
 * @name QueryTradingRewardLeaderboardRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardRequest
 */
export interface QueryTradingRewardLeaderboardRequestAmino {
  reward_id?: string;
}
export interface QueryTradingRewardLeaderboardRequestAminoMsg {
  type: "/bze.rewards.QueryTradingRewardLeaderboardRequest";
  value: QueryTradingRewardLeaderboardRequestAmino;
}
export interface QueryTradingRewardLeaderboardRequestSDKType {
  reward_id: string;
}
export interface QueryTradingRewardLeaderboardResponse {
  leaderboard?: TradingRewardLeaderboard;
}
export interface QueryTradingRewardLeaderboardResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardResponse";
  value: Uint8Array;
}
/**
 * @name QueryTradingRewardLeaderboardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardResponse
 */
export interface QueryTradingRewardLeaderboardResponseAmino {
  leaderboard?: TradingRewardLeaderboardAmino;
}
export interface QueryTradingRewardLeaderboardResponseAminoMsg {
  type: "/bze.rewards.QueryTradingRewardLeaderboardResponse";
  value: QueryTradingRewardLeaderboardResponseAmino;
}
export interface QueryTradingRewardLeaderboardResponseSDKType {
  leaderboard?: TradingRewardLeaderboardSDKType;
}
export interface QueryMarketTradingRewardRequest {
  marketId: string;
}
export interface QueryMarketTradingRewardRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryMarketTradingRewardRequest";
  value: Uint8Array;
}
/**
 * @name QueryMarketTradingRewardRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardRequest
 */
export interface QueryMarketTradingRewardRequestAmino {
  market_id?: string;
}
export interface QueryMarketTradingRewardRequestAminoMsg {
  type: "/bze.rewards.QueryMarketTradingRewardRequest";
  value: QueryMarketTradingRewardRequestAmino;
}
export interface QueryMarketTradingRewardRequestSDKType {
  market_id: string;
}
export interface QueryMarketTradingRewardResponse {
  marketReward?: MarketIdTradingRewardId;
}
export interface QueryMarketTradingRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryMarketTradingRewardResponse";
  value: Uint8Array;
}
/**
 * @name QueryMarketTradingRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardResponse
 */
export interface QueryMarketTradingRewardResponseAmino {
  market_reward?: MarketIdTradingRewardIdAmino;
}
export interface QueryMarketTradingRewardResponseAminoMsg {
  type: "/bze.rewards.QueryMarketTradingRewardResponse";
  value: QueryMarketTradingRewardResponseAmino;
}
export interface QueryMarketTradingRewardResponseSDKType {
  market_reward?: MarketIdTradingRewardIdSDKType;
}
export interface QueryAllPendingUnlockParticipantsRequest {
  pagination?: PageRequest;
}
export interface QueryAllPendingUnlockParticipantsRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllPendingUnlockParticipantsRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsRequest
 */
export interface QueryAllPendingUnlockParticipantsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPendingUnlockParticipantsRequestAminoMsg {
  type: "/bze.rewards.QueryAllPendingUnlockParticipantsRequest";
  value: QueryAllPendingUnlockParticipantsRequestAmino;
}
export interface QueryAllPendingUnlockParticipantsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPendingUnlockParticipantsResponse {
  list: PendingUnlockParticipant[];
  pagination?: PageResponse;
}
export interface QueryAllPendingUnlockParticipantsResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllPendingUnlockParticipantsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsResponse
 */
export interface QueryAllPendingUnlockParticipantsResponseAmino {
  list?: PendingUnlockParticipantAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPendingUnlockParticipantsResponseAminoMsg {
  type: "/bze.rewards.QueryAllPendingUnlockParticipantsResponse";
  value: QueryAllPendingUnlockParticipantsResponseAmino;
}
export interface QueryAllPendingUnlockParticipantsResponseSDKType {
  list: PendingUnlockParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/bze.rewards.QueryParamsRequest",
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
      typeUrl: "/bze.rewards.QueryParamsRequest",
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
  typeUrl: "/bze.rewards.QueryParamsResponse",
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
      typeUrl: "/bze.rewards.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakingRewardRequest(): QueryGetStakingRewardRequest {
  return {
    rewardId: ""
  };
}
export const QueryGetStakingRewardRequest = {
  typeUrl: "/bze.rewards.QueryGetStakingRewardRequest",
  encode(message: QueryGetStakingRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakingRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetStakingRewardRequest>): QueryGetStakingRewardRequest {
    const message = createBaseQueryGetStakingRewardRequest();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: QueryGetStakingRewardRequestAmino): QueryGetStakingRewardRequest {
    const message = createBaseQueryGetStakingRewardRequest();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: QueryGetStakingRewardRequest): QueryGetStakingRewardRequestAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakingRewardRequestAminoMsg): QueryGetStakingRewardRequest {
    return QueryGetStakingRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakingRewardRequestProtoMsg): QueryGetStakingRewardRequest {
    return QueryGetStakingRewardRequest.decode(message.value);
  },
  toProto(message: QueryGetStakingRewardRequest): Uint8Array {
    return QueryGetStakingRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakingRewardRequest): QueryGetStakingRewardRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryGetStakingRewardRequest",
      value: QueryGetStakingRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakingRewardResponse(): QueryGetStakingRewardResponse {
  return {
    stakingReward: StakingReward.fromPartial({})
  };
}
export const QueryGetStakingRewardResponse = {
  typeUrl: "/bze.rewards.QueryGetStakingRewardResponse",
  encode(message: QueryGetStakingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingReward !== undefined) {
      StakingReward.encode(message.stakingReward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetStakingRewardResponse>): QueryGetStakingRewardResponse {
    const message = createBaseQueryGetStakingRewardResponse();
    message.stakingReward = object.stakingReward !== undefined && object.stakingReward !== null ? StakingReward.fromPartial(object.stakingReward) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStakingRewardResponseAmino): QueryGetStakingRewardResponse {
    const message = createBaseQueryGetStakingRewardResponse();
    if (object.staking_reward !== undefined && object.staking_reward !== null) {
      message.stakingReward = StakingReward.fromAmino(object.staking_reward);
    }
    return message;
  },
  toAmino(message: QueryGetStakingRewardResponse): QueryGetStakingRewardResponseAmino {
    const obj: any = {};
    obj.staking_reward = message.stakingReward ? StakingReward.toAmino(message.stakingReward) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakingRewardResponseAminoMsg): QueryGetStakingRewardResponse {
    return QueryGetStakingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakingRewardResponseProtoMsg): QueryGetStakingRewardResponse {
    return QueryGetStakingRewardResponse.decode(message.value);
  },
  toProto(message: QueryGetStakingRewardResponse): Uint8Array {
    return QueryGetStakingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakingRewardResponse): QueryGetStakingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryGetStakingRewardResponse",
      value: QueryGetStakingRewardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakingRewardsRequest(): QueryAllStakingRewardsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStakingRewardsRequest = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardsRequest",
  encode(message: QueryAllStakingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardsRequest();
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
  fromPartial(object: Partial<QueryAllStakingRewardsRequest>): QueryAllStakingRewardsRequest {
    const message = createBaseQueryAllStakingRewardsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakingRewardsRequestAmino): QueryAllStakingRewardsRequest {
    const message = createBaseQueryAllStakingRewardsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakingRewardsRequest): QueryAllStakingRewardsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakingRewardsRequestAminoMsg): QueryAllStakingRewardsRequest {
    return QueryAllStakingRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakingRewardsRequestProtoMsg): QueryAllStakingRewardsRequest {
    return QueryAllStakingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryAllStakingRewardsRequest): Uint8Array {
    return QueryAllStakingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakingRewardsRequest): QueryAllStakingRewardsRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllStakingRewardsRequest",
      value: QueryAllStakingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakingRewardsResponse(): QueryAllStakingRewardsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryAllStakingRewardsResponse = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardsResponse",
  encode(message: QueryAllStakingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      StakingReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardsResponse();
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
  fromPartial(object: Partial<QueryAllStakingRewardsResponse>): QueryAllStakingRewardsResponse {
    const message = createBaseQueryAllStakingRewardsResponse();
    message.list = object.list?.map(e => StakingReward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakingRewardsResponseAmino): QueryAllStakingRewardsResponse {
    const message = createBaseQueryAllStakingRewardsResponse();
    message.list = object.list?.map(e => StakingReward.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakingRewardsResponse): QueryAllStakingRewardsResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? StakingReward.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakingRewardsResponseAminoMsg): QueryAllStakingRewardsResponse {
    return QueryAllStakingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakingRewardsResponseProtoMsg): QueryAllStakingRewardsResponse {
    return QueryAllStakingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryAllStakingRewardsResponse): Uint8Array {
    return QueryAllStakingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakingRewardsResponse): QueryAllStakingRewardsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllStakingRewardsResponse",
      value: QueryAllStakingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTradingRewardRequest(): QueryTradingRewardRequest {
  return {
    rewardId: ""
  };
}
export const QueryTradingRewardRequest = {
  typeUrl: "/bze.rewards.QueryTradingRewardRequest",
  encode(message: QueryTradingRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradingRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradingRewardRequest();
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
  fromPartial(object: Partial<QueryTradingRewardRequest>): QueryTradingRewardRequest {
    const message = createBaseQueryTradingRewardRequest();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: QueryTradingRewardRequestAmino): QueryTradingRewardRequest {
    const message = createBaseQueryTradingRewardRequest();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: QueryTradingRewardRequest): QueryTradingRewardRequestAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: QueryTradingRewardRequestAminoMsg): QueryTradingRewardRequest {
    return QueryTradingRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradingRewardRequestProtoMsg): QueryTradingRewardRequest {
    return QueryTradingRewardRequest.decode(message.value);
  },
  toProto(message: QueryTradingRewardRequest): Uint8Array {
    return QueryTradingRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradingRewardRequest): QueryTradingRewardRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryTradingRewardRequest",
      value: QueryTradingRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTradingRewardResponse(): QueryTradingRewardResponse {
  return {
    tradingReward: TradingReward.fromPartial({})
  };
}
export const QueryTradingRewardResponse = {
  typeUrl: "/bze.rewards.QueryTradingRewardResponse",
  encode(message: QueryTradingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradingReward !== undefined) {
      TradingReward.encode(message.tradingReward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradingRewardResponse();
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
  fromPartial(object: Partial<QueryTradingRewardResponse>): QueryTradingRewardResponse {
    const message = createBaseQueryTradingRewardResponse();
    message.tradingReward = object.tradingReward !== undefined && object.tradingReward !== null ? TradingReward.fromPartial(object.tradingReward) : undefined;
    return message;
  },
  fromAmino(object: QueryTradingRewardResponseAmino): QueryTradingRewardResponse {
    const message = createBaseQueryTradingRewardResponse();
    if (object.trading_reward !== undefined && object.trading_reward !== null) {
      message.tradingReward = TradingReward.fromAmino(object.trading_reward);
    }
    return message;
  },
  toAmino(message: QueryTradingRewardResponse): QueryTradingRewardResponseAmino {
    const obj: any = {};
    obj.trading_reward = message.tradingReward ? TradingReward.toAmino(message.tradingReward) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTradingRewardResponseAminoMsg): QueryTradingRewardResponse {
    return QueryTradingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradingRewardResponseProtoMsg): QueryTradingRewardResponse {
    return QueryTradingRewardResponse.decode(message.value);
  },
  toProto(message: QueryTradingRewardResponse): Uint8Array {
    return QueryTradingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradingRewardResponse): QueryTradingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryTradingRewardResponse",
      value: QueryTradingRewardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTradingRewardsRequest(): QueryAllTradingRewardsRequest {
  return {
    state: "",
    pagination: undefined
  };
}
export const QueryAllTradingRewardsRequest = {
  typeUrl: "/bze.rewards.QueryAllTradingRewardsRequest",
  encode(message: QueryAllTradingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTradingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradingRewardsRequest();
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
  fromPartial(object: Partial<QueryAllTradingRewardsRequest>): QueryAllTradingRewardsRequest {
    const message = createBaseQueryAllTradingRewardsRequest();
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTradingRewardsRequestAmino): QueryAllTradingRewardsRequest {
    const message = createBaseQueryAllTradingRewardsRequest();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTradingRewardsRequest): QueryAllTradingRewardsRequestAmino {
    const obj: any = {};
    obj.state = message.state === "" ? undefined : message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTradingRewardsRequestAminoMsg): QueryAllTradingRewardsRequest {
    return QueryAllTradingRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTradingRewardsRequestProtoMsg): QueryAllTradingRewardsRequest {
    return QueryAllTradingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryAllTradingRewardsRequest): Uint8Array {
    return QueryAllTradingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTradingRewardsRequest): QueryAllTradingRewardsRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllTradingRewardsRequest",
      value: QueryAllTradingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTradingRewardsResponse(): QueryAllTradingRewardsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryAllTradingRewardsResponse = {
  typeUrl: "/bze.rewards.QueryAllTradingRewardsResponse",
  encode(message: QueryAllTradingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      TradingReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTradingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradingRewardsResponse();
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
  fromPartial(object: Partial<QueryAllTradingRewardsResponse>): QueryAllTradingRewardsResponse {
    const message = createBaseQueryAllTradingRewardsResponse();
    message.list = object.list?.map(e => TradingReward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTradingRewardsResponseAmino): QueryAllTradingRewardsResponse {
    const message = createBaseQueryAllTradingRewardsResponse();
    message.list = object.list?.map(e => TradingReward.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTradingRewardsResponse): QueryAllTradingRewardsResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? TradingReward.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTradingRewardsResponseAminoMsg): QueryAllTradingRewardsResponse {
    return QueryAllTradingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTradingRewardsResponseProtoMsg): QueryAllTradingRewardsResponse {
    return QueryAllTradingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryAllTradingRewardsResponse): Uint8Array {
    return QueryAllTradingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTradingRewardsResponse): QueryAllTradingRewardsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllTradingRewardsResponse",
      value: QueryAllTradingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakingRewardParticipantRequest(): QueryStakingRewardParticipantRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryStakingRewardParticipantRequest = {
  typeUrl: "/bze.rewards.QueryStakingRewardParticipantRequest",
  encode(message: QueryStakingRewardParticipantRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakingRewardParticipantRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingRewardParticipantRequest();
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
  fromPartial(object: Partial<QueryStakingRewardParticipantRequest>): QueryStakingRewardParticipantRequest {
    const message = createBaseQueryStakingRewardParticipantRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakingRewardParticipantRequestAmino): QueryStakingRewardParticipantRequest {
    const message = createBaseQueryStakingRewardParticipantRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakingRewardParticipantRequest): QueryStakingRewardParticipantRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakingRewardParticipantRequestAminoMsg): QueryStakingRewardParticipantRequest {
    return QueryStakingRewardParticipantRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingRewardParticipantRequestProtoMsg): QueryStakingRewardParticipantRequest {
    return QueryStakingRewardParticipantRequest.decode(message.value);
  },
  toProto(message: QueryStakingRewardParticipantRequest): Uint8Array {
    return QueryStakingRewardParticipantRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingRewardParticipantRequest): QueryStakingRewardParticipantRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryStakingRewardParticipantRequest",
      value: QueryStakingRewardParticipantRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakingRewardParticipantResponse(): QueryStakingRewardParticipantResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryStakingRewardParticipantResponse = {
  typeUrl: "/bze.rewards.QueryStakingRewardParticipantResponse",
  encode(message: QueryStakingRewardParticipantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      StakingRewardParticipant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakingRewardParticipantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingRewardParticipantResponse();
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
  fromPartial(object: Partial<QueryStakingRewardParticipantResponse>): QueryStakingRewardParticipantResponse {
    const message = createBaseQueryStakingRewardParticipantResponse();
    message.list = object.list?.map(e => StakingRewardParticipant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakingRewardParticipantResponseAmino): QueryStakingRewardParticipantResponse {
    const message = createBaseQueryStakingRewardParticipantResponse();
    message.list = object.list?.map(e => StakingRewardParticipant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakingRewardParticipantResponse): QueryStakingRewardParticipantResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? StakingRewardParticipant.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakingRewardParticipantResponseAminoMsg): QueryStakingRewardParticipantResponse {
    return QueryStakingRewardParticipantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakingRewardParticipantResponseProtoMsg): QueryStakingRewardParticipantResponse {
    return QueryStakingRewardParticipantResponse.decode(message.value);
  },
  toProto(message: QueryStakingRewardParticipantResponse): Uint8Array {
    return QueryStakingRewardParticipantResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakingRewardParticipantResponse): QueryStakingRewardParticipantResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryStakingRewardParticipantResponse",
      value: QueryStakingRewardParticipantResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakingRewardParticipantsRequest(): QueryAllStakingRewardParticipantsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStakingRewardParticipantsRequest = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsRequest",
  encode(message: QueryAllStakingRewardParticipantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakingRewardParticipantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardParticipantsRequest();
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
  fromPartial(object: Partial<QueryAllStakingRewardParticipantsRequest>): QueryAllStakingRewardParticipantsRequest {
    const message = createBaseQueryAllStakingRewardParticipantsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakingRewardParticipantsRequestAmino): QueryAllStakingRewardParticipantsRequest {
    const message = createBaseQueryAllStakingRewardParticipantsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakingRewardParticipantsRequest): QueryAllStakingRewardParticipantsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakingRewardParticipantsRequestAminoMsg): QueryAllStakingRewardParticipantsRequest {
    return QueryAllStakingRewardParticipantsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakingRewardParticipantsRequestProtoMsg): QueryAllStakingRewardParticipantsRequest {
    return QueryAllStakingRewardParticipantsRequest.decode(message.value);
  },
  toProto(message: QueryAllStakingRewardParticipantsRequest): Uint8Array {
    return QueryAllStakingRewardParticipantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakingRewardParticipantsRequest): QueryAllStakingRewardParticipantsRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsRequest",
      value: QueryAllStakingRewardParticipantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakingRewardParticipantsResponse(): QueryAllStakingRewardParticipantsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryAllStakingRewardParticipantsResponse = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsResponse",
  encode(message: QueryAllStakingRewardParticipantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      StakingRewardParticipant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakingRewardParticipantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakingRewardParticipantsResponse();
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
  fromPartial(object: Partial<QueryAllStakingRewardParticipantsResponse>): QueryAllStakingRewardParticipantsResponse {
    const message = createBaseQueryAllStakingRewardParticipantsResponse();
    message.list = object.list?.map(e => StakingRewardParticipant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakingRewardParticipantsResponseAmino): QueryAllStakingRewardParticipantsResponse {
    const message = createBaseQueryAllStakingRewardParticipantsResponse();
    message.list = object.list?.map(e => StakingRewardParticipant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakingRewardParticipantsResponse): QueryAllStakingRewardParticipantsResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? StakingRewardParticipant.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakingRewardParticipantsResponseAminoMsg): QueryAllStakingRewardParticipantsResponse {
    return QueryAllStakingRewardParticipantsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakingRewardParticipantsResponseProtoMsg): QueryAllStakingRewardParticipantsResponse {
    return QueryAllStakingRewardParticipantsResponse.decode(message.value);
  },
  toProto(message: QueryAllStakingRewardParticipantsResponse): Uint8Array {
    return QueryAllStakingRewardParticipantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakingRewardParticipantsResponse): QueryAllStakingRewardParticipantsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsResponse",
      value: QueryAllStakingRewardParticipantsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTradingRewardLeaderboardRequest(): QueryTradingRewardLeaderboardRequest {
  return {
    rewardId: ""
  };
}
export const QueryTradingRewardLeaderboardRequest = {
  typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardRequest",
  encode(message: QueryTradingRewardLeaderboardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradingRewardLeaderboardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradingRewardLeaderboardRequest();
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
  fromPartial(object: Partial<QueryTradingRewardLeaderboardRequest>): QueryTradingRewardLeaderboardRequest {
    const message = createBaseQueryTradingRewardLeaderboardRequest();
    message.rewardId = object.rewardId ?? "";
    return message;
  },
  fromAmino(object: QueryTradingRewardLeaderboardRequestAmino): QueryTradingRewardLeaderboardRequest {
    const message = createBaseQueryTradingRewardLeaderboardRequest();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    return message;
  },
  toAmino(message: QueryTradingRewardLeaderboardRequest): QueryTradingRewardLeaderboardRequestAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    return obj;
  },
  fromAminoMsg(object: QueryTradingRewardLeaderboardRequestAminoMsg): QueryTradingRewardLeaderboardRequest {
    return QueryTradingRewardLeaderboardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradingRewardLeaderboardRequestProtoMsg): QueryTradingRewardLeaderboardRequest {
    return QueryTradingRewardLeaderboardRequest.decode(message.value);
  },
  toProto(message: QueryTradingRewardLeaderboardRequest): Uint8Array {
    return QueryTradingRewardLeaderboardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradingRewardLeaderboardRequest): QueryTradingRewardLeaderboardRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardRequest",
      value: QueryTradingRewardLeaderboardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTradingRewardLeaderboardResponse(): QueryTradingRewardLeaderboardResponse {
  return {
    leaderboard: undefined
  };
}
export const QueryTradingRewardLeaderboardResponse = {
  typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardResponse",
  encode(message: QueryTradingRewardLeaderboardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaderboard !== undefined) {
      TradingRewardLeaderboard.encode(message.leaderboard, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradingRewardLeaderboardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradingRewardLeaderboardResponse();
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
  fromPartial(object: Partial<QueryTradingRewardLeaderboardResponse>): QueryTradingRewardLeaderboardResponse {
    const message = createBaseQueryTradingRewardLeaderboardResponse();
    message.leaderboard = object.leaderboard !== undefined && object.leaderboard !== null ? TradingRewardLeaderboard.fromPartial(object.leaderboard) : undefined;
    return message;
  },
  fromAmino(object: QueryTradingRewardLeaderboardResponseAmino): QueryTradingRewardLeaderboardResponse {
    const message = createBaseQueryTradingRewardLeaderboardResponse();
    if (object.leaderboard !== undefined && object.leaderboard !== null) {
      message.leaderboard = TradingRewardLeaderboard.fromAmino(object.leaderboard);
    }
    return message;
  },
  toAmino(message: QueryTradingRewardLeaderboardResponse): QueryTradingRewardLeaderboardResponseAmino {
    const obj: any = {};
    obj.leaderboard = message.leaderboard ? TradingRewardLeaderboard.toAmino(message.leaderboard) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTradingRewardLeaderboardResponseAminoMsg): QueryTradingRewardLeaderboardResponse {
    return QueryTradingRewardLeaderboardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradingRewardLeaderboardResponseProtoMsg): QueryTradingRewardLeaderboardResponse {
    return QueryTradingRewardLeaderboardResponse.decode(message.value);
  },
  toProto(message: QueryTradingRewardLeaderboardResponse): Uint8Array {
    return QueryTradingRewardLeaderboardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradingRewardLeaderboardResponse): QueryTradingRewardLeaderboardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardResponse",
      value: QueryTradingRewardLeaderboardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketTradingRewardRequest(): QueryMarketTradingRewardRequest {
  return {
    marketId: ""
  };
}
export const QueryMarketTradingRewardRequest = {
  typeUrl: "/bze.rewards.QueryMarketTradingRewardRequest",
  encode(message: QueryMarketTradingRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketTradingRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketTradingRewardRequest();
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
  fromPartial(object: Partial<QueryMarketTradingRewardRequest>): QueryMarketTradingRewardRequest {
    const message = createBaseQueryMarketTradingRewardRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryMarketTradingRewardRequestAmino): QueryMarketTradingRewardRequest {
    const message = createBaseQueryMarketTradingRewardRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryMarketTradingRewardRequest): QueryMarketTradingRewardRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketTradingRewardRequestAminoMsg): QueryMarketTradingRewardRequest {
    return QueryMarketTradingRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketTradingRewardRequestProtoMsg): QueryMarketTradingRewardRequest {
    return QueryMarketTradingRewardRequest.decode(message.value);
  },
  toProto(message: QueryMarketTradingRewardRequest): Uint8Array {
    return QueryMarketTradingRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketTradingRewardRequest): QueryMarketTradingRewardRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryMarketTradingRewardRequest",
      value: QueryMarketTradingRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketTradingRewardResponse(): QueryMarketTradingRewardResponse {
  return {
    marketReward: undefined
  };
}
export const QueryMarketTradingRewardResponse = {
  typeUrl: "/bze.rewards.QueryMarketTradingRewardResponse",
  encode(message: QueryMarketTradingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketReward !== undefined) {
      MarketIdTradingRewardId.encode(message.marketReward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketTradingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketTradingRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketReward = MarketIdTradingRewardId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketTradingRewardResponse>): QueryMarketTradingRewardResponse {
    const message = createBaseQueryMarketTradingRewardResponse();
    message.marketReward = object.marketReward !== undefined && object.marketReward !== null ? MarketIdTradingRewardId.fromPartial(object.marketReward) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketTradingRewardResponseAmino): QueryMarketTradingRewardResponse {
    const message = createBaseQueryMarketTradingRewardResponse();
    if (object.market_reward !== undefined && object.market_reward !== null) {
      message.marketReward = MarketIdTradingRewardId.fromAmino(object.market_reward);
    }
    return message;
  },
  toAmino(message: QueryMarketTradingRewardResponse): QueryMarketTradingRewardResponseAmino {
    const obj: any = {};
    obj.market_reward = message.marketReward ? MarketIdTradingRewardId.toAmino(message.marketReward) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketTradingRewardResponseAminoMsg): QueryMarketTradingRewardResponse {
    return QueryMarketTradingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketTradingRewardResponseProtoMsg): QueryMarketTradingRewardResponse {
    return QueryMarketTradingRewardResponse.decode(message.value);
  },
  toProto(message: QueryMarketTradingRewardResponse): Uint8Array {
    return QueryMarketTradingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketTradingRewardResponse): QueryMarketTradingRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryMarketTradingRewardResponse",
      value: QueryMarketTradingRewardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingUnlockParticipantsRequest(): QueryAllPendingUnlockParticipantsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPendingUnlockParticipantsRequest = {
  typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsRequest",
  encode(message: QueryAllPendingUnlockParticipantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingUnlockParticipantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingUnlockParticipantsRequest();
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
  fromPartial(object: Partial<QueryAllPendingUnlockParticipantsRequest>): QueryAllPendingUnlockParticipantsRequest {
    const message = createBaseQueryAllPendingUnlockParticipantsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingUnlockParticipantsRequestAmino): QueryAllPendingUnlockParticipantsRequest {
    const message = createBaseQueryAllPendingUnlockParticipantsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingUnlockParticipantsRequest): QueryAllPendingUnlockParticipantsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingUnlockParticipantsRequestAminoMsg): QueryAllPendingUnlockParticipantsRequest {
    return QueryAllPendingUnlockParticipantsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingUnlockParticipantsRequestProtoMsg): QueryAllPendingUnlockParticipantsRequest {
    return QueryAllPendingUnlockParticipantsRequest.decode(message.value);
  },
  toProto(message: QueryAllPendingUnlockParticipantsRequest): Uint8Array {
    return QueryAllPendingUnlockParticipantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingUnlockParticipantsRequest): QueryAllPendingUnlockParticipantsRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsRequest",
      value: QueryAllPendingUnlockParticipantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingUnlockParticipantsResponse(): QueryAllPendingUnlockParticipantsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
export const QueryAllPendingUnlockParticipantsResponse = {
  typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsResponse",
  encode(message: QueryAllPendingUnlockParticipantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      PendingUnlockParticipant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingUnlockParticipantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingUnlockParticipantsResponse();
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
  fromPartial(object: Partial<QueryAllPendingUnlockParticipantsResponse>): QueryAllPendingUnlockParticipantsResponse {
    const message = createBaseQueryAllPendingUnlockParticipantsResponse();
    message.list = object.list?.map(e => PendingUnlockParticipant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingUnlockParticipantsResponseAmino): QueryAllPendingUnlockParticipantsResponse {
    const message = createBaseQueryAllPendingUnlockParticipantsResponse();
    message.list = object.list?.map(e => PendingUnlockParticipant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingUnlockParticipantsResponse): QueryAllPendingUnlockParticipantsResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? PendingUnlockParticipant.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingUnlockParticipantsResponseAminoMsg): QueryAllPendingUnlockParticipantsResponse {
    return QueryAllPendingUnlockParticipantsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingUnlockParticipantsResponseProtoMsg): QueryAllPendingUnlockParticipantsResponse {
    return QueryAllPendingUnlockParticipantsResponse.decode(message.value);
  },
  toProto(message: QueryAllPendingUnlockParticipantsResponse): Uint8Array {
    return QueryAllPendingUnlockParticipantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingUnlockParticipantsResponse): QueryAllPendingUnlockParticipantsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsResponse",
      value: QueryAllPendingUnlockParticipantsResponse.encode(message).finish()
    };
  }
};