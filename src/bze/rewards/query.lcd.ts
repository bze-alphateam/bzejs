//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakingRewardRequest, QueryGetStakingRewardResponseSDKType, QueryAllStakingRewardsRequest, QueryAllStakingRewardsResponseSDKType, QueryTradingRewardRequest, QueryTradingRewardResponseSDKType, QueryAllTradingRewardsRequest, QueryAllTradingRewardsResponseSDKType, QueryStakingRewardParticipantRequest, QueryStakingRewardParticipantResponseSDKType, QueryAllStakingRewardParticipantsRequest, QueryAllStakingRewardParticipantsResponseSDKType, QueryTradingRewardLeaderboardRequest, QueryTradingRewardLeaderboardResponseSDKType, QueryMarketTradingRewardRequest, QueryMarketTradingRewardResponseSDKType, QueryAllPendingUnlockParticipantsRequest, QueryAllPendingUnlockParticipantsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakingReward = this.stakingReward.bind(this);
    this.allStakingRewards = this.allStakingRewards.bind(this);
    this.tradingReward = this.tradingReward.bind(this);
    this.allTradingRewards = this.allTradingRewards.bind(this);
    this.stakingRewardParticipant = this.stakingRewardParticipant.bind(this);
    this.allStakingRewardParticipants = this.allStakingRewardParticipants.bind(this);
    this.tradingRewardLeaderboard = this.tradingRewardLeaderboard.bind(this);
    this.marketTradingReward = this.marketTradingReward.bind(this);
    this.allPendingUnlockParticipants = this.allPendingUnlockParticipants.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/rewards/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of GetStakingReward items. */
  async stakingReward(params: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponseSDKType> {
    const endpoint = `bze/rewards/staking_reward/${params.rewardId}`;
    return await this.req.get<QueryGetStakingRewardResponseSDKType>(endpoint);
  }
  /* Queries a list of AllStakingRewards items. */
  async allStakingRewards(params: QueryAllStakingRewardsRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/all_staking_rewards`;
    return await this.req.get<QueryAllStakingRewardsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of TradingReward items. */
  async tradingReward(params: QueryTradingRewardRequest): Promise<QueryTradingRewardResponseSDKType> {
    const endpoint = `bze/rewards/trading_reward/${params.rewardId}`;
    return await this.req.get<QueryTradingRewardResponseSDKType>(endpoint);
  }
  /* Queries a list of AllTradingRewards items. */
  async allTradingRewards(params: QueryAllTradingRewardsRequest): Promise<QueryAllTradingRewardsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.state !== "undefined") {
      options.params.state = params.state;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/all_trading_rewards`;
    return await this.req.get<QueryAllTradingRewardsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of StakingRewardParticipant items. */
  async stakingRewardParticipant(params: QueryStakingRewardParticipantRequest): Promise<QueryStakingRewardParticipantResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/staking_reward_participant/${params.address}`;
    return await this.req.get<QueryStakingRewardParticipantResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllStakingRewardParticipants items. */
  async allStakingRewardParticipants(params: QueryAllStakingRewardParticipantsRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardParticipantsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/all_staking_reward_participants`;
    return await this.req.get<QueryAllStakingRewardParticipantsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of TradingRewardLeaderboard items. */
  async tradingRewardLeaderboard(params: QueryTradingRewardLeaderboardRequest): Promise<QueryTradingRewardLeaderboardResponseSDKType> {
    const endpoint = `bze/rewards/trading_reward_leaderboard/${params.rewardId}`;
    return await this.req.get<QueryTradingRewardLeaderboardResponseSDKType>(endpoint);
  }
  /* Queries a list of MarketTradingReward items. */
  async marketTradingReward(params: QueryMarketTradingRewardRequest): Promise<QueryMarketTradingRewardResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.marketId !== "undefined") {
      options.params.market_id = params.marketId;
    }
    const endpoint = `bze/rewards/market_trading_reward`;
    return await this.req.get<QueryMarketTradingRewardResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllPendingUnlockParticipants items. */
  async allPendingUnlockParticipants(params: QueryAllPendingUnlockParticipantsRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingUnlockParticipantsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/all_pending_unlock_participants`;
    return await this.req.get<QueryAllPendingUnlockParticipantsResponseSDKType>(endpoint, options);
  }
}