//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakingReward, StakingRewardAmino, StakingRewardSDKType, TradingReward, TradingRewardAmino, TradingRewardSDKType, StakingRewardParticipant, StakingRewardParticipantAmino, StakingRewardParticipantSDKType, TradingRewardLeaderboard, TradingRewardLeaderboardAmino, TradingRewardLeaderboardSDKType, MarketIdTradingRewardId, MarketIdTradingRewardIdAmino, MarketIdTradingRewardIdSDKType, PendingUnlockParticipant, PendingUnlockParticipantAmino, PendingUnlockParticipantSDKType, DenomReward, DenomRewardAmino, DenomRewardSDKType, DenomRewardPrize, DenomRewardPrizeAmino, DenomRewardPrizeSDKType, DenomRewardSchedule, DenomRewardScheduleAmino, DenomRewardScheduleSDKType, DenomRewardParticipant, DenomRewardParticipantAmino, DenomRewardParticipantSDKType } from "./store";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsRequest
 */
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
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
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
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name QueryGetStakingRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardRequest
 */
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
/**
 * @name QueryGetStakingRewardRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardRequest
 */
export interface QueryGetStakingRewardRequestSDKType {
  reward_id: string;
}
/**
 * @name QueryGetStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardResponse
 */
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
/**
 * @name QueryGetStakingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardResponse
 */
export interface QueryGetStakingRewardResponseSDKType {
  staking_reward: StakingRewardSDKType;
}
/**
 * @name QueryAllStakingRewardsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsRequest
 */
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
/**
 * @name QueryAllStakingRewardsRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsRequest
 */
export interface QueryAllStakingRewardsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllStakingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsResponse
 */
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
/**
 * @name QueryAllStakingRewardsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsResponse
 */
export interface QueryAllStakingRewardsResponseSDKType {
  list: StakingRewardSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryTradingRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardRequest
 */
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
/**
 * @name QueryTradingRewardRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardRequest
 */
export interface QueryTradingRewardRequestSDKType {
  reward_id: string;
}
/**
 * @name QueryTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardResponse
 */
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
/**
 * @name QueryTradingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardResponse
 */
export interface QueryTradingRewardResponseSDKType {
  trading_reward: TradingRewardSDKType;
}
/**
 * @name QueryAllTradingRewardsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsRequest
 */
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
/**
 * @name QueryAllTradingRewardsRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsRequest
 */
export interface QueryAllTradingRewardsRequestSDKType {
  state: string;
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllTradingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsResponse
 */
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
/**
 * @name QueryAllTradingRewardsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsResponse
 */
export interface QueryAllTradingRewardsResponseSDKType {
  list: TradingRewardSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryStakingRewardParticipantRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantRequest
 */
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
/**
 * @name QueryStakingRewardParticipantRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantRequest
 */
export interface QueryStakingRewardParticipantRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryStakingRewardParticipantResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantResponse
 */
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
/**
 * @name QueryStakingRewardParticipantResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantResponse
 */
export interface QueryStakingRewardParticipantResponseSDKType {
  list: StakingRewardParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryAllStakingRewardParticipantsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsRequest
 */
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
/**
 * @name QueryAllStakingRewardParticipantsRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsRequest
 */
export interface QueryAllStakingRewardParticipantsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllStakingRewardParticipantsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsResponse
 */
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
/**
 * @name QueryAllStakingRewardParticipantsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsResponse
 */
export interface QueryAllStakingRewardParticipantsResponseSDKType {
  list: StakingRewardParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryTradingRewardLeaderboardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardRequest
 */
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
/**
 * @name QueryTradingRewardLeaderboardRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardRequest
 */
export interface QueryTradingRewardLeaderboardRequestSDKType {
  reward_id: string;
}
/**
 * @name QueryTradingRewardLeaderboardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardResponse
 */
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
/**
 * @name QueryTradingRewardLeaderboardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardResponse
 */
export interface QueryTradingRewardLeaderboardResponseSDKType {
  leaderboard?: TradingRewardLeaderboardSDKType;
}
/**
 * @name QueryMarketTradingRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardRequest
 */
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
/**
 * @name QueryMarketTradingRewardRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardRequest
 */
export interface QueryMarketTradingRewardRequestSDKType {
  market_id: string;
}
/**
 * @name QueryMarketTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardResponse
 */
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
/**
 * @name QueryMarketTradingRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardResponse
 */
export interface QueryMarketTradingRewardResponseSDKType {
  market_reward?: MarketIdTradingRewardIdSDKType;
}
/**
 * @name QueryAllPendingUnlockParticipantsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsRequest
 */
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
/**
 * @name QueryAllPendingUnlockParticipantsRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsRequest
 */
export interface QueryAllPendingUnlockParticipantsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryAllPendingUnlockParticipantsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsResponse
 */
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
/**
 * @name QueryAllPendingUnlockParticipantsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsResponse
 */
export interface QueryAllPendingUnlockParticipantsResponseSDKType {
  list: PendingUnlockParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryDenomRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardRequest
 */
export interface QueryDenomRewardRequest {
  denom: string;
}
export interface QueryDenomRewardRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardRequest
 */
export interface QueryDenomRewardRequestAmino {
  denom?: string;
}
export interface QueryDenomRewardRequestAminoMsg {
  type: "/bze.rewards.QueryDenomRewardRequest";
  value: QueryDenomRewardRequestAmino;
}
/**
 * @name QueryDenomRewardRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardRequest
 */
export interface QueryDenomRewardRequestSDKType {
  denom: string;
}
/**
 * @name QueryDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardResponse
 */
export interface QueryDenomRewardResponse {
  denomReward: DenomReward;
}
export interface QueryDenomRewardResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardResponse
 */
export interface QueryDenomRewardResponseAmino {
  denom_reward?: DenomRewardAmino;
}
export interface QueryDenomRewardResponseAminoMsg {
  type: "/bze.rewards.QueryDenomRewardResponse";
  value: QueryDenomRewardResponseAmino;
}
/**
 * @name QueryDenomRewardResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardResponse
 */
export interface QueryDenomRewardResponseSDKType {
  denom_reward: DenomRewardSDKType;
}
/**
 * @name QueryDenomRewardAllRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllRequest
 */
export interface QueryDenomRewardAllRequest {
  pagination?: PageRequest;
}
export interface QueryDenomRewardAllRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardAllRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardAllRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllRequest
 */
export interface QueryDenomRewardAllRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryDenomRewardAllRequestAminoMsg {
  type: "/bze.rewards.QueryDenomRewardAllRequest";
  value: QueryDenomRewardAllRequestAmino;
}
/**
 * @name QueryDenomRewardAllRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllRequest
 */
export interface QueryDenomRewardAllRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryDenomRewardAllResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllResponse
 */
export interface QueryDenomRewardAllResponse {
  list: DenomReward[];
  pagination?: PageResponse;
}
export interface QueryDenomRewardAllResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardAllResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardAllResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllResponse
 */
export interface QueryDenomRewardAllResponseAmino {
  list?: DenomRewardAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDenomRewardAllResponseAminoMsg {
  type: "/bze.rewards.QueryDenomRewardAllResponse";
  value: QueryDenomRewardAllResponseAmino;
}
/**
 * @name QueryDenomRewardAllResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllResponse
 */
export interface QueryDenomRewardAllResponseSDKType {
  list: DenomRewardSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryDenomRewardPrizesRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesRequest
 */
export interface QueryDenomRewardPrizesRequest {
  denom: string;
}
export interface QueryDenomRewardPrizesRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardPrizesRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardPrizesRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesRequest
 */
export interface QueryDenomRewardPrizesRequestAmino {
  denom?: string;
}
export interface QueryDenomRewardPrizesRequestAminoMsg {
  type: "/bze.rewards.QueryDenomRewardPrizesRequest";
  value: QueryDenomRewardPrizesRequestAmino;
}
/**
 * @name QueryDenomRewardPrizesRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesRequest
 */
export interface QueryDenomRewardPrizesRequestSDKType {
  denom: string;
}
/**
 * @name QueryDenomRewardPrizesResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesResponse
 */
export interface QueryDenomRewardPrizesResponse {
  list: DenomRewardPrize[];
}
export interface QueryDenomRewardPrizesResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardPrizesResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardPrizesResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesResponse
 */
export interface QueryDenomRewardPrizesResponseAmino {
  list?: DenomRewardPrizeAmino[];
}
export interface QueryDenomRewardPrizesResponseAminoMsg {
  type: "/bze.rewards.QueryDenomRewardPrizesResponse";
  value: QueryDenomRewardPrizesResponseAmino;
}
/**
 * @name QueryDenomRewardPrizesResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesResponse
 */
export interface QueryDenomRewardPrizesResponseSDKType {
  list: DenomRewardPrizeSDKType[];
}
/**
 * @name QueryDenomRewardSchedulesRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesRequest
 */
export interface QueryDenomRewardSchedulesRequest {
  denom: string;
  pagination?: PageRequest;
}
export interface QueryDenomRewardSchedulesRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardSchedulesRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardSchedulesRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesRequest
 */
export interface QueryDenomRewardSchedulesRequestAmino {
  denom?: string;
  pagination?: PageRequestAmino;
}
export interface QueryDenomRewardSchedulesRequestAminoMsg {
  type: "/bze.rewards.QueryDenomRewardSchedulesRequest";
  value: QueryDenomRewardSchedulesRequestAmino;
}
/**
 * @name QueryDenomRewardSchedulesRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesRequest
 */
export interface QueryDenomRewardSchedulesRequestSDKType {
  denom: string;
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryDenomRewardSchedulesResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesResponse
 */
export interface QueryDenomRewardSchedulesResponse {
  list: DenomRewardSchedule[];
  pagination?: PageResponse;
}
export interface QueryDenomRewardSchedulesResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardSchedulesResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardSchedulesResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesResponse
 */
export interface QueryDenomRewardSchedulesResponseAmino {
  list?: DenomRewardScheduleAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDenomRewardSchedulesResponseAminoMsg {
  type: "/bze.rewards.QueryDenomRewardSchedulesResponse";
  value: QueryDenomRewardSchedulesResponseAmino;
}
/**
 * @name QueryDenomRewardSchedulesResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesResponse
 */
export interface QueryDenomRewardSchedulesResponseSDKType {
  list: DenomRewardScheduleSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryDenomRewardParticipantRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantRequest
 */
export interface QueryDenomRewardParticipantRequest {
  address: string;
  denom: string;
}
export interface QueryDenomRewardParticipantRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipantRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardParticipantRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantRequest
 */
export interface QueryDenomRewardParticipantRequestAmino {
  address?: string;
  denom?: string;
}
export interface QueryDenomRewardParticipantRequestAminoMsg {
  type: "/bze.rewards.QueryDenomRewardParticipantRequest";
  value: QueryDenomRewardParticipantRequestAmino;
}
/**
 * @name QueryDenomRewardParticipantRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantRequest
 */
export interface QueryDenomRewardParticipantRequestSDKType {
  address: string;
  denom: string;
}
/**
 * @name QueryDenomRewardParticipantResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantResponse
 */
export interface QueryDenomRewardParticipantResponse {
  participant: DenomRewardParticipant;
  /**
   * pending holds the coins a claim would pay right now, one per prize denom
   * (computed read-only; sub-unit dust is excluded, exactly like a real claim).
   */
  pending: Coin[];
}
export interface QueryDenomRewardParticipantResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipantResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardParticipantResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantResponse
 */
export interface QueryDenomRewardParticipantResponseAmino {
  participant?: DenomRewardParticipantAmino;
  /**
   * pending holds the coins a claim would pay right now, one per prize denom
   * (computed read-only; sub-unit dust is excluded, exactly like a real claim).
   */
  pending?: CoinAmino[];
}
export interface QueryDenomRewardParticipantResponseAminoMsg {
  type: "/bze.rewards.QueryDenomRewardParticipantResponse";
  value: QueryDenomRewardParticipantResponseAmino;
}
/**
 * @name QueryDenomRewardParticipantResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantResponse
 */
export interface QueryDenomRewardParticipantResponseSDKType {
  participant: DenomRewardParticipantSDKType;
  pending: CoinSDKType[];
}
/**
 * @name QueryDenomRewardParticipationsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsRequest
 */
export interface QueryDenomRewardParticipationsRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryDenomRewardParticipationsRequestProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipationsRequest";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardParticipationsRequestAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsRequest
 */
export interface QueryDenomRewardParticipationsRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryDenomRewardParticipationsRequestAminoMsg {
  type: "/bze.rewards.QueryDenomRewardParticipationsRequest";
  value: QueryDenomRewardParticipationsRequestAmino;
}
/**
 * @name QueryDenomRewardParticipationsRequestSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsRequest
 */
export interface QueryDenomRewardParticipationsRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryDenomRewardParticipationsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsResponse
 */
export interface QueryDenomRewardParticipationsResponse {
  list: DenomRewardParticipant[];
  pagination?: PageResponse;
}
export interface QueryDenomRewardParticipationsResponseProtoMsg {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipationsResponse";
  value: Uint8Array;
}
/**
 * @name QueryDenomRewardParticipationsResponseAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsResponse
 */
export interface QueryDenomRewardParticipationsResponseAmino {
  list?: DenomRewardParticipantAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDenomRewardParticipationsResponseAminoMsg {
  type: "/bze.rewards.QueryDenomRewardParticipationsResponse";
  value: QueryDenomRewardParticipationsResponseAmino;
}
/**
 * @name QueryDenomRewardParticipationsResponseSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsResponse
 */
export interface QueryDenomRewardParticipationsResponseSDKType {
  list: DenomRewardParticipantSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bze.rewards.QueryParamsRequest",
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
      typeUrl: "/bze.rewards.QueryParamsRequest",
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
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bze.rewards.QueryParamsResponse",
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
      typeUrl: "/bze.rewards.QueryParamsResponse",
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
function createBaseQueryGetStakingRewardRequest(): QueryGetStakingRewardRequest {
  return {
    rewardId: ""
  };
}
/**
 * @name QueryGetStakingRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardRequest
 */
export const QueryGetStakingRewardRequest = {
  typeUrl: "/bze.rewards.QueryGetStakingRewardRequest",
  is(o: any): o is QueryGetStakingRewardRequest {
    return o && (o.$typeUrl === QueryGetStakingRewardRequest.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is QueryGetStakingRewardRequestSDKType {
    return o && (o.$typeUrl === QueryGetStakingRewardRequest.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is QueryGetStakingRewardRequestAmino {
    return o && (o.$typeUrl === QueryGetStakingRewardRequest.typeUrl || typeof o.reward_id === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseQueryGetStakingRewardResponse(): QueryGetStakingRewardResponse {
  return {
    stakingReward: StakingReward.fromPartial({})
  };
}
/**
 * @name QueryGetStakingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryGetStakingRewardResponse
 */
export const QueryGetStakingRewardResponse = {
  typeUrl: "/bze.rewards.QueryGetStakingRewardResponse",
  is(o: any): o is QueryGetStakingRewardResponse {
    return o && (o.$typeUrl === QueryGetStakingRewardResponse.typeUrl || StakingReward.is(o.stakingReward));
  },
  isSDK(o: any): o is QueryGetStakingRewardResponseSDKType {
    return o && (o.$typeUrl === QueryGetStakingRewardResponse.typeUrl || StakingReward.isSDK(o.staking_reward));
  },
  isAmino(o: any): o is QueryGetStakingRewardResponseAmino {
    return o && (o.$typeUrl === QueryGetStakingRewardResponse.typeUrl || StakingReward.isAmino(o.staking_reward));
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGetStakingRewardResponse.typeUrl)) {
      return;
    }
    StakingReward.registerTypeUrl();
  }
};
function createBaseQueryAllStakingRewardsRequest(): QueryAllStakingRewardsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAllStakingRewardsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsRequest
 */
export const QueryAllStakingRewardsRequest = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardsRequest",
  is(o: any): o is QueryAllStakingRewardsRequest {
    return o && o.$typeUrl === QueryAllStakingRewardsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllStakingRewardsRequestSDKType {
    return o && o.$typeUrl === QueryAllStakingRewardsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllStakingRewardsRequestAmino {
    return o && o.$typeUrl === QueryAllStakingRewardsRequest.typeUrl;
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllStakingRewardsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllStakingRewardsResponse(): QueryAllStakingRewardsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllStakingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardsResponse
 */
export const QueryAllStakingRewardsResponse = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardsResponse",
  is(o: any): o is QueryAllStakingRewardsResponse {
    return o && (o.$typeUrl === QueryAllStakingRewardsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingReward.is(o.list[0])));
  },
  isSDK(o: any): o is QueryAllStakingRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryAllStakingRewardsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingReward.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryAllStakingRewardsResponseAmino {
    return o && (o.$typeUrl === QueryAllStakingRewardsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingReward.isAmino(o.list[0])));
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllStakingRewardsResponse.typeUrl)) {
      return;
    }
    StakingReward.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryTradingRewardRequest(): QueryTradingRewardRequest {
  return {
    rewardId: ""
  };
}
/**
 * @name QueryTradingRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardRequest
 */
export const QueryTradingRewardRequest = {
  typeUrl: "/bze.rewards.QueryTradingRewardRequest",
  is(o: any): o is QueryTradingRewardRequest {
    return o && (o.$typeUrl === QueryTradingRewardRequest.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is QueryTradingRewardRequestSDKType {
    return o && (o.$typeUrl === QueryTradingRewardRequest.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is QueryTradingRewardRequestAmino {
    return o && (o.$typeUrl === QueryTradingRewardRequest.typeUrl || typeof o.reward_id === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseQueryTradingRewardResponse(): QueryTradingRewardResponse {
  return {
    tradingReward: TradingReward.fromPartial({})
  };
}
/**
 * @name QueryTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardResponse
 */
export const QueryTradingRewardResponse = {
  typeUrl: "/bze.rewards.QueryTradingRewardResponse",
  is(o: any): o is QueryTradingRewardResponse {
    return o && (o.$typeUrl === QueryTradingRewardResponse.typeUrl || TradingReward.is(o.tradingReward));
  },
  isSDK(o: any): o is QueryTradingRewardResponseSDKType {
    return o && (o.$typeUrl === QueryTradingRewardResponse.typeUrl || TradingReward.isSDK(o.trading_reward));
  },
  isAmino(o: any): o is QueryTradingRewardResponseAmino {
    return o && (o.$typeUrl === QueryTradingRewardResponse.typeUrl || TradingReward.isAmino(o.trading_reward));
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTradingRewardResponse.typeUrl)) {
      return;
    }
    TradingReward.registerTypeUrl();
  }
};
function createBaseQueryAllTradingRewardsRequest(): QueryAllTradingRewardsRequest {
  return {
    state: "",
    pagination: undefined
  };
}
/**
 * @name QueryAllTradingRewardsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsRequest
 */
export const QueryAllTradingRewardsRequest = {
  typeUrl: "/bze.rewards.QueryAllTradingRewardsRequest",
  is(o: any): o is QueryAllTradingRewardsRequest {
    return o && (o.$typeUrl === QueryAllTradingRewardsRequest.typeUrl || typeof o.state === "string");
  },
  isSDK(o: any): o is QueryAllTradingRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryAllTradingRewardsRequest.typeUrl || typeof o.state === "string");
  },
  isAmino(o: any): o is QueryAllTradingRewardsRequestAmino {
    return o && (o.$typeUrl === QueryAllTradingRewardsRequest.typeUrl || typeof o.state === "string");
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllTradingRewardsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllTradingRewardsResponse(): QueryAllTradingRewardsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllTradingRewardsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllTradingRewardsResponse
 */
export const QueryAllTradingRewardsResponse = {
  typeUrl: "/bze.rewards.QueryAllTradingRewardsResponse",
  is(o: any): o is QueryAllTradingRewardsResponse {
    return o && (o.$typeUrl === QueryAllTradingRewardsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || TradingReward.is(o.list[0])));
  },
  isSDK(o: any): o is QueryAllTradingRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryAllTradingRewardsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || TradingReward.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryAllTradingRewardsResponseAmino {
    return o && (o.$typeUrl === QueryAllTradingRewardsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || TradingReward.isAmino(o.list[0])));
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllTradingRewardsResponse.typeUrl)) {
      return;
    }
    TradingReward.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryStakingRewardParticipantRequest(): QueryStakingRewardParticipantRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * @name QueryStakingRewardParticipantRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantRequest
 */
export const QueryStakingRewardParticipantRequest = {
  typeUrl: "/bze.rewards.QueryStakingRewardParticipantRequest",
  is(o: any): o is QueryStakingRewardParticipantRequest {
    return o && (o.$typeUrl === QueryStakingRewardParticipantRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryStakingRewardParticipantRequestSDKType {
    return o && (o.$typeUrl === QueryStakingRewardParticipantRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryStakingRewardParticipantRequestAmino {
    return o && (o.$typeUrl === QueryStakingRewardParticipantRequest.typeUrl || typeof o.address === "string");
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryStakingRewardParticipantRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryStakingRewardParticipantResponse(): QueryStakingRewardParticipantResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryStakingRewardParticipantResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryStakingRewardParticipantResponse
 */
export const QueryStakingRewardParticipantResponse = {
  typeUrl: "/bze.rewards.QueryStakingRewardParticipantResponse",
  is(o: any): o is QueryStakingRewardParticipantResponse {
    return o && (o.$typeUrl === QueryStakingRewardParticipantResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingRewardParticipant.is(o.list[0])));
  },
  isSDK(o: any): o is QueryStakingRewardParticipantResponseSDKType {
    return o && (o.$typeUrl === QueryStakingRewardParticipantResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingRewardParticipant.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryStakingRewardParticipantResponseAmino {
    return o && (o.$typeUrl === QueryStakingRewardParticipantResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingRewardParticipant.isAmino(o.list[0])));
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryStakingRewardParticipantResponse.typeUrl)) {
      return;
    }
    StakingRewardParticipant.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryAllStakingRewardParticipantsRequest(): QueryAllStakingRewardParticipantsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAllStakingRewardParticipantsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsRequest
 */
export const QueryAllStakingRewardParticipantsRequest = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsRequest",
  is(o: any): o is QueryAllStakingRewardParticipantsRequest {
    return o && o.$typeUrl === QueryAllStakingRewardParticipantsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllStakingRewardParticipantsRequestSDKType {
    return o && o.$typeUrl === QueryAllStakingRewardParticipantsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllStakingRewardParticipantsRequestAmino {
    return o && o.$typeUrl === QueryAllStakingRewardParticipantsRequest.typeUrl;
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllStakingRewardParticipantsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllStakingRewardParticipantsResponse(): QueryAllStakingRewardParticipantsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllStakingRewardParticipantsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllStakingRewardParticipantsResponse
 */
export const QueryAllStakingRewardParticipantsResponse = {
  typeUrl: "/bze.rewards.QueryAllStakingRewardParticipantsResponse",
  is(o: any): o is QueryAllStakingRewardParticipantsResponse {
    return o && (o.$typeUrl === QueryAllStakingRewardParticipantsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingRewardParticipant.is(o.list[0])));
  },
  isSDK(o: any): o is QueryAllStakingRewardParticipantsResponseSDKType {
    return o && (o.$typeUrl === QueryAllStakingRewardParticipantsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingRewardParticipant.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryAllStakingRewardParticipantsResponseAmino {
    return o && (o.$typeUrl === QueryAllStakingRewardParticipantsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || StakingRewardParticipant.isAmino(o.list[0])));
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllStakingRewardParticipantsResponse.typeUrl)) {
      return;
    }
    StakingRewardParticipant.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryTradingRewardLeaderboardRequest(): QueryTradingRewardLeaderboardRequest {
  return {
    rewardId: ""
  };
}
/**
 * @name QueryTradingRewardLeaderboardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardRequest
 */
export const QueryTradingRewardLeaderboardRequest = {
  typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardRequest",
  is(o: any): o is QueryTradingRewardLeaderboardRequest {
    return o && (o.$typeUrl === QueryTradingRewardLeaderboardRequest.typeUrl || typeof o.rewardId === "string");
  },
  isSDK(o: any): o is QueryTradingRewardLeaderboardRequestSDKType {
    return o && (o.$typeUrl === QueryTradingRewardLeaderboardRequest.typeUrl || typeof o.reward_id === "string");
  },
  isAmino(o: any): o is QueryTradingRewardLeaderboardRequestAmino {
    return o && (o.$typeUrl === QueryTradingRewardLeaderboardRequest.typeUrl || typeof o.reward_id === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseQueryTradingRewardLeaderboardResponse(): QueryTradingRewardLeaderboardResponse {
  return {
    leaderboard: undefined
  };
}
/**
 * @name QueryTradingRewardLeaderboardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryTradingRewardLeaderboardResponse
 */
export const QueryTradingRewardLeaderboardResponse = {
  typeUrl: "/bze.rewards.QueryTradingRewardLeaderboardResponse",
  is(o: any): o is QueryTradingRewardLeaderboardResponse {
    return o && o.$typeUrl === QueryTradingRewardLeaderboardResponse.typeUrl;
  },
  isSDK(o: any): o is QueryTradingRewardLeaderboardResponseSDKType {
    return o && o.$typeUrl === QueryTradingRewardLeaderboardResponse.typeUrl;
  },
  isAmino(o: any): o is QueryTradingRewardLeaderboardResponseAmino {
    return o && o.$typeUrl === QueryTradingRewardLeaderboardResponse.typeUrl;
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTradingRewardLeaderboardResponse.typeUrl)) {
      return;
    }
    TradingRewardLeaderboard.registerTypeUrl();
  }
};
function createBaseQueryMarketTradingRewardRequest(): QueryMarketTradingRewardRequest {
  return {
    marketId: ""
  };
}
/**
 * @name QueryMarketTradingRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardRequest
 */
export const QueryMarketTradingRewardRequest = {
  typeUrl: "/bze.rewards.QueryMarketTradingRewardRequest",
  is(o: any): o is QueryMarketTradingRewardRequest {
    return o && (o.$typeUrl === QueryMarketTradingRewardRequest.typeUrl || typeof o.marketId === "string");
  },
  isSDK(o: any): o is QueryMarketTradingRewardRequestSDKType {
    return o && (o.$typeUrl === QueryMarketTradingRewardRequest.typeUrl || typeof o.market_id === "string");
  },
  isAmino(o: any): o is QueryMarketTradingRewardRequestAmino {
    return o && (o.$typeUrl === QueryMarketTradingRewardRequest.typeUrl || typeof o.market_id === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseQueryMarketTradingRewardResponse(): QueryMarketTradingRewardResponse {
  return {
    marketReward: undefined
  };
}
/**
 * @name QueryMarketTradingRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryMarketTradingRewardResponse
 */
export const QueryMarketTradingRewardResponse = {
  typeUrl: "/bze.rewards.QueryMarketTradingRewardResponse",
  is(o: any): o is QueryMarketTradingRewardResponse {
    return o && o.$typeUrl === QueryMarketTradingRewardResponse.typeUrl;
  },
  isSDK(o: any): o is QueryMarketTradingRewardResponseSDKType {
    return o && o.$typeUrl === QueryMarketTradingRewardResponse.typeUrl;
  },
  isAmino(o: any): o is QueryMarketTradingRewardResponseAmino {
    return o && o.$typeUrl === QueryMarketTradingRewardResponse.typeUrl;
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMarketTradingRewardResponse.typeUrl)) {
      return;
    }
    MarketIdTradingRewardId.registerTypeUrl();
  }
};
function createBaseQueryAllPendingUnlockParticipantsRequest(): QueryAllPendingUnlockParticipantsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryAllPendingUnlockParticipantsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsRequest
 */
export const QueryAllPendingUnlockParticipantsRequest = {
  typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsRequest",
  is(o: any): o is QueryAllPendingUnlockParticipantsRequest {
    return o && o.$typeUrl === QueryAllPendingUnlockParticipantsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllPendingUnlockParticipantsRequestSDKType {
    return o && o.$typeUrl === QueryAllPendingUnlockParticipantsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllPendingUnlockParticipantsRequestAmino {
    return o && o.$typeUrl === QueryAllPendingUnlockParticipantsRequest.typeUrl;
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllPendingUnlockParticipantsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllPendingUnlockParticipantsResponse(): QueryAllPendingUnlockParticipantsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryAllPendingUnlockParticipantsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryAllPendingUnlockParticipantsResponse
 */
export const QueryAllPendingUnlockParticipantsResponse = {
  typeUrl: "/bze.rewards.QueryAllPendingUnlockParticipantsResponse",
  is(o: any): o is QueryAllPendingUnlockParticipantsResponse {
    return o && (o.$typeUrl === QueryAllPendingUnlockParticipantsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || PendingUnlockParticipant.is(o.list[0])));
  },
  isSDK(o: any): o is QueryAllPendingUnlockParticipantsResponseSDKType {
    return o && (o.$typeUrl === QueryAllPendingUnlockParticipantsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || PendingUnlockParticipant.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryAllPendingUnlockParticipantsResponseAmino {
    return o && (o.$typeUrl === QueryAllPendingUnlockParticipantsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || PendingUnlockParticipant.isAmino(o.list[0])));
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllPendingUnlockParticipantsResponse.typeUrl)) {
      return;
    }
    PendingUnlockParticipant.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardRequest(): QueryDenomRewardRequest {
  return {
    denom: ""
  };
}
/**
 * @name QueryDenomRewardRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardRequest
 */
export const QueryDenomRewardRequest = {
  typeUrl: "/bze.rewards.QueryDenomRewardRequest",
  is(o: any): o is QueryDenomRewardRequest {
    return o && (o.$typeUrl === QueryDenomRewardRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomRewardRequestSDKType {
    return o && (o.$typeUrl === QueryDenomRewardRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomRewardRequestAmino {
    return o && (o.$typeUrl === QueryDenomRewardRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardRequest();
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
  fromPartial(object: Partial<QueryDenomRewardRequest>): QueryDenomRewardRequest {
    const message = createBaseQueryDenomRewardRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomRewardRequestAmino): QueryDenomRewardRequest {
    const message = createBaseQueryDenomRewardRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomRewardRequest): QueryDenomRewardRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardRequestAminoMsg): QueryDenomRewardRequest {
    return QueryDenomRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardRequestProtoMsg): QueryDenomRewardRequest {
    return QueryDenomRewardRequest.decode(message.value);
  },
  toProto(message: QueryDenomRewardRequest): Uint8Array {
    return QueryDenomRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardRequest): QueryDenomRewardRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardRequest",
      value: QueryDenomRewardRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomRewardResponse(): QueryDenomRewardResponse {
  return {
    denomReward: DenomReward.fromPartial({})
  };
}
/**
 * @name QueryDenomRewardResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardResponse
 */
export const QueryDenomRewardResponse = {
  typeUrl: "/bze.rewards.QueryDenomRewardResponse",
  is(o: any): o is QueryDenomRewardResponse {
    return o && (o.$typeUrl === QueryDenomRewardResponse.typeUrl || DenomReward.is(o.denomReward));
  },
  isSDK(o: any): o is QueryDenomRewardResponseSDKType {
    return o && (o.$typeUrl === QueryDenomRewardResponse.typeUrl || DenomReward.isSDK(o.denom_reward));
  },
  isAmino(o: any): o is QueryDenomRewardResponseAmino {
    return o && (o.$typeUrl === QueryDenomRewardResponse.typeUrl || DenomReward.isAmino(o.denom_reward));
  },
  encode(message: QueryDenomRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomReward !== undefined) {
      DenomReward.encode(message.denomReward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomReward = DenomReward.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomRewardResponse>): QueryDenomRewardResponse {
    const message = createBaseQueryDenomRewardResponse();
    message.denomReward = object.denomReward !== undefined && object.denomReward !== null ? DenomReward.fromPartial(object.denomReward) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomRewardResponseAmino): QueryDenomRewardResponse {
    const message = createBaseQueryDenomRewardResponse();
    if (object.denom_reward !== undefined && object.denom_reward !== null) {
      message.denomReward = DenomReward.fromAmino(object.denom_reward);
    }
    return message;
  },
  toAmino(message: QueryDenomRewardResponse): QueryDenomRewardResponseAmino {
    const obj: any = {};
    obj.denom_reward = message.denomReward ? DenomReward.toAmino(message.denomReward) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardResponseAminoMsg): QueryDenomRewardResponse {
    return QueryDenomRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardResponseProtoMsg): QueryDenomRewardResponse {
    return QueryDenomRewardResponse.decode(message.value);
  },
  toProto(message: QueryDenomRewardResponse): Uint8Array {
    return QueryDenomRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardResponse): QueryDenomRewardResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardResponse",
      value: QueryDenomRewardResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardResponse.typeUrl)) {
      return;
    }
    DenomReward.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardAllRequest(): QueryDenomRewardAllRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryDenomRewardAllRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllRequest
 */
export const QueryDenomRewardAllRequest = {
  typeUrl: "/bze.rewards.QueryDenomRewardAllRequest",
  is(o: any): o is QueryDenomRewardAllRequest {
    return o && o.$typeUrl === QueryDenomRewardAllRequest.typeUrl;
  },
  isSDK(o: any): o is QueryDenomRewardAllRequestSDKType {
    return o && o.$typeUrl === QueryDenomRewardAllRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDenomRewardAllRequestAmino {
    return o && o.$typeUrl === QueryDenomRewardAllRequest.typeUrl;
  },
  encode(message: QueryDenomRewardAllRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardAllRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardAllRequest();
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
  fromPartial(object: Partial<QueryDenomRewardAllRequest>): QueryDenomRewardAllRequest {
    const message = createBaseQueryDenomRewardAllRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomRewardAllRequestAmino): QueryDenomRewardAllRequest {
    const message = createBaseQueryDenomRewardAllRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomRewardAllRequest): QueryDenomRewardAllRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardAllRequestAminoMsg): QueryDenomRewardAllRequest {
    return QueryDenomRewardAllRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardAllRequestProtoMsg): QueryDenomRewardAllRequest {
    return QueryDenomRewardAllRequest.decode(message.value);
  },
  toProto(message: QueryDenomRewardAllRequest): Uint8Array {
    return QueryDenomRewardAllRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardAllRequest): QueryDenomRewardAllRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardAllRequest",
      value: QueryDenomRewardAllRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardAllRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardAllResponse(): QueryDenomRewardAllResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryDenomRewardAllResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardAllResponse
 */
export const QueryDenomRewardAllResponse = {
  typeUrl: "/bze.rewards.QueryDenomRewardAllResponse",
  is(o: any): o is QueryDenomRewardAllResponse {
    return o && (o.$typeUrl === QueryDenomRewardAllResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomReward.is(o.list[0])));
  },
  isSDK(o: any): o is QueryDenomRewardAllResponseSDKType {
    return o && (o.$typeUrl === QueryDenomRewardAllResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomReward.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryDenomRewardAllResponseAmino {
    return o && (o.$typeUrl === QueryDenomRewardAllResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomReward.isAmino(o.list[0])));
  },
  encode(message: QueryDenomRewardAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      DenomReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(DenomReward.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDenomRewardAllResponse>): QueryDenomRewardAllResponse {
    const message = createBaseQueryDenomRewardAllResponse();
    message.list = object.list?.map(e => DenomReward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomRewardAllResponseAmino): QueryDenomRewardAllResponse {
    const message = createBaseQueryDenomRewardAllResponse();
    message.list = object.list?.map(e => DenomReward.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomRewardAllResponse): QueryDenomRewardAllResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? DenomReward.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardAllResponseAminoMsg): QueryDenomRewardAllResponse {
    return QueryDenomRewardAllResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardAllResponseProtoMsg): QueryDenomRewardAllResponse {
    return QueryDenomRewardAllResponse.decode(message.value);
  },
  toProto(message: QueryDenomRewardAllResponse): Uint8Array {
    return QueryDenomRewardAllResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardAllResponse): QueryDenomRewardAllResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardAllResponse",
      value: QueryDenomRewardAllResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardAllResponse.typeUrl)) {
      return;
    }
    DenomReward.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardPrizesRequest(): QueryDenomRewardPrizesRequest {
  return {
    denom: ""
  };
}
/**
 * @name QueryDenomRewardPrizesRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesRequest
 */
export const QueryDenomRewardPrizesRequest = {
  typeUrl: "/bze.rewards.QueryDenomRewardPrizesRequest",
  is(o: any): o is QueryDenomRewardPrizesRequest {
    return o && (o.$typeUrl === QueryDenomRewardPrizesRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomRewardPrizesRequestSDKType {
    return o && (o.$typeUrl === QueryDenomRewardPrizesRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomRewardPrizesRequestAmino {
    return o && (o.$typeUrl === QueryDenomRewardPrizesRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomRewardPrizesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardPrizesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardPrizesRequest();
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
  fromPartial(object: Partial<QueryDenomRewardPrizesRequest>): QueryDenomRewardPrizesRequest {
    const message = createBaseQueryDenomRewardPrizesRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomRewardPrizesRequestAmino): QueryDenomRewardPrizesRequest {
    const message = createBaseQueryDenomRewardPrizesRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomRewardPrizesRequest): QueryDenomRewardPrizesRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardPrizesRequestAminoMsg): QueryDenomRewardPrizesRequest {
    return QueryDenomRewardPrizesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardPrizesRequestProtoMsg): QueryDenomRewardPrizesRequest {
    return QueryDenomRewardPrizesRequest.decode(message.value);
  },
  toProto(message: QueryDenomRewardPrizesRequest): Uint8Array {
    return QueryDenomRewardPrizesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardPrizesRequest): QueryDenomRewardPrizesRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardPrizesRequest",
      value: QueryDenomRewardPrizesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomRewardPrizesResponse(): QueryDenomRewardPrizesResponse {
  return {
    list: []
  };
}
/**
 * @name QueryDenomRewardPrizesResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardPrizesResponse
 */
export const QueryDenomRewardPrizesResponse = {
  typeUrl: "/bze.rewards.QueryDenomRewardPrizesResponse",
  is(o: any): o is QueryDenomRewardPrizesResponse {
    return o && (o.$typeUrl === QueryDenomRewardPrizesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardPrize.is(o.list[0])));
  },
  isSDK(o: any): o is QueryDenomRewardPrizesResponseSDKType {
    return o && (o.$typeUrl === QueryDenomRewardPrizesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardPrize.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryDenomRewardPrizesResponseAmino {
    return o && (o.$typeUrl === QueryDenomRewardPrizesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardPrize.isAmino(o.list[0])));
  },
  encode(message: QueryDenomRewardPrizesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      DenomRewardPrize.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardPrizesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardPrizesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(DenomRewardPrize.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomRewardPrizesResponse>): QueryDenomRewardPrizesResponse {
    const message = createBaseQueryDenomRewardPrizesResponse();
    message.list = object.list?.map(e => DenomRewardPrize.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDenomRewardPrizesResponseAmino): QueryDenomRewardPrizesResponse {
    const message = createBaseQueryDenomRewardPrizesResponse();
    message.list = object.list?.map(e => DenomRewardPrize.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDenomRewardPrizesResponse): QueryDenomRewardPrizesResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? DenomRewardPrize.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardPrizesResponseAminoMsg): QueryDenomRewardPrizesResponse {
    return QueryDenomRewardPrizesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardPrizesResponseProtoMsg): QueryDenomRewardPrizesResponse {
    return QueryDenomRewardPrizesResponse.decode(message.value);
  },
  toProto(message: QueryDenomRewardPrizesResponse): Uint8Array {
    return QueryDenomRewardPrizesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardPrizesResponse): QueryDenomRewardPrizesResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardPrizesResponse",
      value: QueryDenomRewardPrizesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardPrizesResponse.typeUrl)) {
      return;
    }
    DenomRewardPrize.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardSchedulesRequest(): QueryDenomRewardSchedulesRequest {
  return {
    denom: "",
    pagination: undefined
  };
}
/**
 * @name QueryDenomRewardSchedulesRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesRequest
 */
export const QueryDenomRewardSchedulesRequest = {
  typeUrl: "/bze.rewards.QueryDenomRewardSchedulesRequest",
  is(o: any): o is QueryDenomRewardSchedulesRequest {
    return o && (o.$typeUrl === QueryDenomRewardSchedulesRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomRewardSchedulesRequestSDKType {
    return o && (o.$typeUrl === QueryDenomRewardSchedulesRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomRewardSchedulesRequestAmino {
    return o && (o.$typeUrl === QueryDenomRewardSchedulesRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomRewardSchedulesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardSchedulesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardSchedulesRequest();
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
  fromPartial(object: Partial<QueryDenomRewardSchedulesRequest>): QueryDenomRewardSchedulesRequest {
    const message = createBaseQueryDenomRewardSchedulesRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomRewardSchedulesRequestAmino): QueryDenomRewardSchedulesRequest {
    const message = createBaseQueryDenomRewardSchedulesRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomRewardSchedulesRequest): QueryDenomRewardSchedulesRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardSchedulesRequestAminoMsg): QueryDenomRewardSchedulesRequest {
    return QueryDenomRewardSchedulesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardSchedulesRequestProtoMsg): QueryDenomRewardSchedulesRequest {
    return QueryDenomRewardSchedulesRequest.decode(message.value);
  },
  toProto(message: QueryDenomRewardSchedulesRequest): Uint8Array {
    return QueryDenomRewardSchedulesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardSchedulesRequest): QueryDenomRewardSchedulesRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardSchedulesRequest",
      value: QueryDenomRewardSchedulesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardSchedulesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardSchedulesResponse(): QueryDenomRewardSchedulesResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryDenomRewardSchedulesResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardSchedulesResponse
 */
export const QueryDenomRewardSchedulesResponse = {
  typeUrl: "/bze.rewards.QueryDenomRewardSchedulesResponse",
  is(o: any): o is QueryDenomRewardSchedulesResponse {
    return o && (o.$typeUrl === QueryDenomRewardSchedulesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardSchedule.is(o.list[0])));
  },
  isSDK(o: any): o is QueryDenomRewardSchedulesResponseSDKType {
    return o && (o.$typeUrl === QueryDenomRewardSchedulesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardSchedule.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryDenomRewardSchedulesResponseAmino {
    return o && (o.$typeUrl === QueryDenomRewardSchedulesResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardSchedule.isAmino(o.list[0])));
  },
  encode(message: QueryDenomRewardSchedulesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      DenomRewardSchedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardSchedulesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardSchedulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(DenomRewardSchedule.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDenomRewardSchedulesResponse>): QueryDenomRewardSchedulesResponse {
    const message = createBaseQueryDenomRewardSchedulesResponse();
    message.list = object.list?.map(e => DenomRewardSchedule.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomRewardSchedulesResponseAmino): QueryDenomRewardSchedulesResponse {
    const message = createBaseQueryDenomRewardSchedulesResponse();
    message.list = object.list?.map(e => DenomRewardSchedule.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomRewardSchedulesResponse): QueryDenomRewardSchedulesResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? DenomRewardSchedule.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardSchedulesResponseAminoMsg): QueryDenomRewardSchedulesResponse {
    return QueryDenomRewardSchedulesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardSchedulesResponseProtoMsg): QueryDenomRewardSchedulesResponse {
    return QueryDenomRewardSchedulesResponse.decode(message.value);
  },
  toProto(message: QueryDenomRewardSchedulesResponse): Uint8Array {
    return QueryDenomRewardSchedulesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardSchedulesResponse): QueryDenomRewardSchedulesResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardSchedulesResponse",
      value: QueryDenomRewardSchedulesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardSchedulesResponse.typeUrl)) {
      return;
    }
    DenomRewardSchedule.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardParticipantRequest(): QueryDenomRewardParticipantRequest {
  return {
    address: "",
    denom: ""
  };
}
/**
 * @name QueryDenomRewardParticipantRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantRequest
 */
export const QueryDenomRewardParticipantRequest = {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipantRequest",
  is(o: any): o is QueryDenomRewardParticipantRequest {
    return o && (o.$typeUrl === QueryDenomRewardParticipantRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomRewardParticipantRequestSDKType {
    return o && (o.$typeUrl === QueryDenomRewardParticipantRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomRewardParticipantRequestAmino {
    return o && (o.$typeUrl === QueryDenomRewardParticipantRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  encode(message: QueryDenomRewardParticipantRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardParticipantRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardParticipantRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomRewardParticipantRequest>): QueryDenomRewardParticipantRequest {
    const message = createBaseQueryDenomRewardParticipantRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomRewardParticipantRequestAmino): QueryDenomRewardParticipantRequest {
    const message = createBaseQueryDenomRewardParticipantRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomRewardParticipantRequest): QueryDenomRewardParticipantRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardParticipantRequestAminoMsg): QueryDenomRewardParticipantRequest {
    return QueryDenomRewardParticipantRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardParticipantRequestProtoMsg): QueryDenomRewardParticipantRequest {
    return QueryDenomRewardParticipantRequest.decode(message.value);
  },
  toProto(message: QueryDenomRewardParticipantRequest): Uint8Array {
    return QueryDenomRewardParticipantRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardParticipantRequest): QueryDenomRewardParticipantRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardParticipantRequest",
      value: QueryDenomRewardParticipantRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomRewardParticipantResponse(): QueryDenomRewardParticipantResponse {
  return {
    participant: DenomRewardParticipant.fromPartial({}),
    pending: []
  };
}
/**
 * @name QueryDenomRewardParticipantResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipantResponse
 */
export const QueryDenomRewardParticipantResponse = {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipantResponse",
  is(o: any): o is QueryDenomRewardParticipantResponse {
    return o && (o.$typeUrl === QueryDenomRewardParticipantResponse.typeUrl || DenomRewardParticipant.is(o.participant) && Array.isArray(o.pending) && (!o.pending.length || Coin.is(o.pending[0])));
  },
  isSDK(o: any): o is QueryDenomRewardParticipantResponseSDKType {
    return o && (o.$typeUrl === QueryDenomRewardParticipantResponse.typeUrl || DenomRewardParticipant.isSDK(o.participant) && Array.isArray(o.pending) && (!o.pending.length || Coin.isSDK(o.pending[0])));
  },
  isAmino(o: any): o is QueryDenomRewardParticipantResponseAmino {
    return o && (o.$typeUrl === QueryDenomRewardParticipantResponse.typeUrl || DenomRewardParticipant.isAmino(o.participant) && Array.isArray(o.pending) && (!o.pending.length || Coin.isAmino(o.pending[0])));
  },
  encode(message: QueryDenomRewardParticipantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.participant !== undefined) {
      DenomRewardParticipant.encode(message.participant, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pending) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardParticipantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardParticipantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = DenomRewardParticipant.decode(reader, reader.uint32());
          break;
        case 2:
          message.pending.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomRewardParticipantResponse>): QueryDenomRewardParticipantResponse {
    const message = createBaseQueryDenomRewardParticipantResponse();
    message.participant = object.participant !== undefined && object.participant !== null ? DenomRewardParticipant.fromPartial(object.participant) : undefined;
    message.pending = object.pending?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDenomRewardParticipantResponseAmino): QueryDenomRewardParticipantResponse {
    const message = createBaseQueryDenomRewardParticipantResponse();
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = DenomRewardParticipant.fromAmino(object.participant);
    }
    message.pending = object.pending?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDenomRewardParticipantResponse): QueryDenomRewardParticipantResponseAmino {
    const obj: any = {};
    obj.participant = message.participant ? DenomRewardParticipant.toAmino(message.participant) : undefined;
    if (message.pending) {
      obj.pending = message.pending.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pending = message.pending;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardParticipantResponseAminoMsg): QueryDenomRewardParticipantResponse {
    return QueryDenomRewardParticipantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardParticipantResponseProtoMsg): QueryDenomRewardParticipantResponse {
    return QueryDenomRewardParticipantResponse.decode(message.value);
  },
  toProto(message: QueryDenomRewardParticipantResponse): Uint8Array {
    return QueryDenomRewardParticipantResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardParticipantResponse): QueryDenomRewardParticipantResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardParticipantResponse",
      value: QueryDenomRewardParticipantResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardParticipantResponse.typeUrl)) {
      return;
    }
    DenomRewardParticipant.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardParticipationsRequest(): QueryDenomRewardParticipationsRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * @name QueryDenomRewardParticipationsRequest
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsRequest
 */
export const QueryDenomRewardParticipationsRequest = {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipationsRequest",
  is(o: any): o is QueryDenomRewardParticipationsRequest {
    return o && (o.$typeUrl === QueryDenomRewardParticipationsRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryDenomRewardParticipationsRequestSDKType {
    return o && (o.$typeUrl === QueryDenomRewardParticipationsRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryDenomRewardParticipationsRequestAmino {
    return o && (o.$typeUrl === QueryDenomRewardParticipationsRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryDenomRewardParticipationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardParticipationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardParticipationsRequest();
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
  fromPartial(object: Partial<QueryDenomRewardParticipationsRequest>): QueryDenomRewardParticipationsRequest {
    const message = createBaseQueryDenomRewardParticipationsRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomRewardParticipationsRequestAmino): QueryDenomRewardParticipationsRequest {
    const message = createBaseQueryDenomRewardParticipationsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomRewardParticipationsRequest): QueryDenomRewardParticipationsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardParticipationsRequestAminoMsg): QueryDenomRewardParticipationsRequest {
    return QueryDenomRewardParticipationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardParticipationsRequestProtoMsg): QueryDenomRewardParticipationsRequest {
    return QueryDenomRewardParticipationsRequest.decode(message.value);
  },
  toProto(message: QueryDenomRewardParticipationsRequest): Uint8Array {
    return QueryDenomRewardParticipationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardParticipationsRequest): QueryDenomRewardParticipationsRequestProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardParticipationsRequest",
      value: QueryDenomRewardParticipationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardParticipationsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDenomRewardParticipationsResponse(): QueryDenomRewardParticipationsResponse {
  return {
    list: [],
    pagination: undefined
  };
}
/**
 * @name QueryDenomRewardParticipationsResponse
 * @package bze.rewards
 * @see proto type: bze.rewards.QueryDenomRewardParticipationsResponse
 */
export const QueryDenomRewardParticipationsResponse = {
  typeUrl: "/bze.rewards.QueryDenomRewardParticipationsResponse",
  is(o: any): o is QueryDenomRewardParticipationsResponse {
    return o && (o.$typeUrl === QueryDenomRewardParticipationsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardParticipant.is(o.list[0])));
  },
  isSDK(o: any): o is QueryDenomRewardParticipationsResponseSDKType {
    return o && (o.$typeUrl === QueryDenomRewardParticipationsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardParticipant.isSDK(o.list[0])));
  },
  isAmino(o: any): o is QueryDenomRewardParticipationsResponseAmino {
    return o && (o.$typeUrl === QueryDenomRewardParticipationsResponse.typeUrl || Array.isArray(o.list) && (!o.list.length || DenomRewardParticipant.isAmino(o.list[0])));
  },
  encode(message: QueryDenomRewardParticipationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      DenomRewardParticipant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomRewardParticipationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRewardParticipationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(DenomRewardParticipant.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDenomRewardParticipationsResponse>): QueryDenomRewardParticipationsResponse {
    const message = createBaseQueryDenomRewardParticipationsResponse();
    message.list = object.list?.map(e => DenomRewardParticipant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomRewardParticipationsResponseAmino): QueryDenomRewardParticipationsResponse {
    const message = createBaseQueryDenomRewardParticipationsResponse();
    message.list = object.list?.map(e => DenomRewardParticipant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomRewardParticipationsResponse): QueryDenomRewardParticipationsResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? DenomRewardParticipant.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRewardParticipationsResponseAminoMsg): QueryDenomRewardParticipationsResponse {
    return QueryDenomRewardParticipationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRewardParticipationsResponseProtoMsg): QueryDenomRewardParticipationsResponse {
    return QueryDenomRewardParticipationsResponse.decode(message.value);
  },
  toProto(message: QueryDenomRewardParticipationsResponse): Uint8Array {
    return QueryDenomRewardParticipationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRewardParticipationsResponse): QueryDenomRewardParticipationsResponseProtoMsg {
    return {
      typeUrl: "/bze.rewards.QueryDenomRewardParticipationsResponse",
      value: QueryDenomRewardParticipationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomRewardParticipationsResponse.typeUrl)) {
      return;
    }
    DenomRewardParticipant.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};