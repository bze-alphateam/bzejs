//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakingRewardRequest, QueryGetStakingRewardResponse, QueryAllStakingRewardsRequest, QueryAllStakingRewardsResponse, QueryTradingRewardRequest, QueryTradingRewardResponse, QueryAllTradingRewardsRequest, QueryAllTradingRewardsResponse, QueryStakingRewardParticipantRequest, QueryStakingRewardParticipantResponse, QueryAllStakingRewardParticipantsRequest, QueryAllStakingRewardParticipantsResponse, QueryTradingRewardLeaderboardRequest, QueryTradingRewardLeaderboardResponse, QueryMarketTradingRewardRequest, QueryMarketTradingRewardResponse, QueryAllPendingUnlockParticipantsRequest, QueryAllPendingUnlockParticipantsResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package bze.rewards
 * @see proto service: bze.rewards.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.rewards.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Queries a list of GetStakingReward items.
 * @name getStakingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.StakingReward
 */
export const getStakingReward = buildQuery<QueryGetStakingRewardRequest, QueryGetStakingRewardResponse>({
  encode: QueryGetStakingRewardRequest.encode,
  decode: QueryGetStakingRewardResponse.decode,
  service: "bze.rewards.Query",
  method: "StakingReward",
  deps: [QueryGetStakingRewardRequest, QueryGetStakingRewardResponse]
});
/**
 * Queries a list of AllStakingRewards items.
 * @name getAllStakingRewards
 * @package bze.rewards
 * @see proto service: bze.rewards.AllStakingRewards
 */
export const getAllStakingRewards = buildQuery<QueryAllStakingRewardsRequest, QueryAllStakingRewardsResponse>({
  encode: QueryAllStakingRewardsRequest.encode,
  decode: QueryAllStakingRewardsResponse.decode,
  service: "bze.rewards.Query",
  method: "AllStakingRewards",
  deps: [QueryAllStakingRewardsRequest, QueryAllStakingRewardsResponse]
});
/**
 * Queries a list of TradingReward items.
 * @name getTradingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.TradingReward
 */
export const getTradingReward = buildQuery<QueryTradingRewardRequest, QueryTradingRewardResponse>({
  encode: QueryTradingRewardRequest.encode,
  decode: QueryTradingRewardResponse.decode,
  service: "bze.rewards.Query",
  method: "TradingReward",
  deps: [QueryTradingRewardRequest, QueryTradingRewardResponse]
});
/**
 * Queries a list of AllTradingRewards items.
 * @name getAllTradingRewards
 * @package bze.rewards
 * @see proto service: bze.rewards.AllTradingRewards
 */
export const getAllTradingRewards = buildQuery<QueryAllTradingRewardsRequest, QueryAllTradingRewardsResponse>({
  encode: QueryAllTradingRewardsRequest.encode,
  decode: QueryAllTradingRewardsResponse.decode,
  service: "bze.rewards.Query",
  method: "AllTradingRewards",
  deps: [QueryAllTradingRewardsRequest, QueryAllTradingRewardsResponse]
});
/**
 * Queries a list of StakingRewardParticipant items.
 * @name getStakingRewardParticipant
 * @package bze.rewards
 * @see proto service: bze.rewards.StakingRewardParticipant
 */
export const getStakingRewardParticipant = buildQuery<QueryStakingRewardParticipantRequest, QueryStakingRewardParticipantResponse>({
  encode: QueryStakingRewardParticipantRequest.encode,
  decode: QueryStakingRewardParticipantResponse.decode,
  service: "bze.rewards.Query",
  method: "StakingRewardParticipant",
  deps: [QueryStakingRewardParticipantRequest, QueryStakingRewardParticipantResponse]
});
/**
 * Queries a list of AllStakingRewardParticipants items.
 * @name getAllStakingRewardParticipants
 * @package bze.rewards
 * @see proto service: bze.rewards.AllStakingRewardParticipants
 */
export const getAllStakingRewardParticipants = buildQuery<QueryAllStakingRewardParticipantsRequest, QueryAllStakingRewardParticipantsResponse>({
  encode: QueryAllStakingRewardParticipantsRequest.encode,
  decode: QueryAllStakingRewardParticipantsResponse.decode,
  service: "bze.rewards.Query",
  method: "AllStakingRewardParticipants",
  deps: [QueryAllStakingRewardParticipantsRequest, QueryAllStakingRewardParticipantsResponse]
});
/**
 * Queries a list of TradingRewardLeaderboard items.
 * @name getTradingRewardLeaderboard
 * @package bze.rewards
 * @see proto service: bze.rewards.TradingRewardLeaderboard
 */
export const getTradingRewardLeaderboard = buildQuery<QueryTradingRewardLeaderboardRequest, QueryTradingRewardLeaderboardResponse>({
  encode: QueryTradingRewardLeaderboardRequest.encode,
  decode: QueryTradingRewardLeaderboardResponse.decode,
  service: "bze.rewards.Query",
  method: "TradingRewardLeaderboard",
  deps: [QueryTradingRewardLeaderboardRequest, QueryTradingRewardLeaderboardResponse]
});
/**
 * Queries a list of MarketTradingReward items.
 * @name getMarketTradingReward
 * @package bze.rewards
 * @see proto service: bze.rewards.MarketTradingReward
 */
export const getMarketTradingReward = buildQuery<QueryMarketTradingRewardRequest, QueryMarketTradingRewardResponse>({
  encode: QueryMarketTradingRewardRequest.encode,
  decode: QueryMarketTradingRewardResponse.decode,
  service: "bze.rewards.Query",
  method: "MarketTradingReward",
  deps: [QueryMarketTradingRewardRequest, QueryMarketTradingRewardResponse]
});
/**
 * Queries a list of AllPendingUnlockParticipants items.
 * @name getAllPendingUnlockParticipants
 * @package bze.rewards
 * @see proto service: bze.rewards.AllPendingUnlockParticipants
 */
export const getAllPendingUnlockParticipants = buildQuery<QueryAllPendingUnlockParticipantsRequest, QueryAllPendingUnlockParticipantsResponse>({
  encode: QueryAllPendingUnlockParticipantsRequest.encode,
  decode: QueryAllPendingUnlockParticipantsResponse.decode,
  service: "bze.rewards.Query",
  method: "AllPendingUnlockParticipants",
  deps: [QueryAllPendingUnlockParticipantsRequest, QueryAllPendingUnlockParticipantsResponse]
});