//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakingRewardRequest, QueryGetStakingRewardResponseSDKType, QueryAllStakingRewardsRequest, QueryAllStakingRewardsResponseSDKType, QueryTradingRewardRequest, QueryTradingRewardResponseSDKType, QueryAllTradingRewardsRequest, QueryAllTradingRewardsResponseSDKType, QueryStakingRewardParticipantRequest, QueryStakingRewardParticipantResponseSDKType, QueryAllStakingRewardParticipantsRequest, QueryAllStakingRewardParticipantsResponseSDKType, QueryTradingRewardLeaderboardRequest, QueryTradingRewardLeaderboardResponseSDKType, QueryMarketTradingRewardRequest, QueryMarketTradingRewardResponseSDKType, QueryAllPendingUnlockParticipantsRequest, QueryAllPendingUnlockParticipantsResponseSDKType, QueryDenomRewardRequest, QueryDenomRewardResponseSDKType, QueryDenomRewardAllRequest, QueryDenomRewardAllResponseSDKType, QueryDenomRewardPrizesRequest, QueryDenomRewardPrizesResponseSDKType, QueryDenomRewardSchedulesRequest, QueryDenomRewardSchedulesResponseSDKType, QueryDenomRewardParticipantRequest, QueryDenomRewardParticipantResponseSDKType, QueryDenomRewardParticipationsRequest, QueryDenomRewardParticipationsResponseSDKType } from "./query";
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
    this.denomReward = this.denomReward.bind(this);
    this.denomRewardAll = this.denomRewardAll.bind(this);
    this.denomRewardPrizes = this.denomRewardPrizes.bind(this);
    this.denomRewardSchedules = this.denomRewardSchedules.bind(this);
    this.denomRewardParticipant = this.denomRewardParticipant.bind(this);
    this.denomRewardParticipations = this.denomRewardParticipations.bind(this);
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
  /* Queries a DenomReward by its staking denom. Over REST the denom is passed as the
   `denom` query parameter (factory/ibc denoms contain "/", so it cannot be a path segment). */
  async denomReward(params: QueryDenomRewardRequest): Promise<QueryDenomRewardResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `bze/rewards/denom_reward`;
    return await this.req.get<QueryDenomRewardResponseSDKType>(endpoint, options);
  }
  /* Queries all DenomReward records. */
  async denomRewardAll(params: QueryDenomRewardAllRequest = {
    pagination: undefined
  }): Promise<QueryDenomRewardAllResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/all_denom_rewards`;
    return await this.req.get<QueryDenomRewardAllResponseSDKType>(endpoint, options);
  }
  /* Queries every prize accumulator of a DenomReward (bounded by max_prize_denoms_per_dr).
   Over REST the denom is passed as the `denom` query parameter. */
  async denomRewardPrizes(params: QueryDenomRewardPrizesRequest): Promise<QueryDenomRewardPrizesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `bze/rewards/denom_reward_prizes`;
    return await this.req.get<QueryDenomRewardPrizesResponseSDKType>(endpoint, options);
  }
  /* Queries the schedules of a DenomReward. Over REST the denom is passed as the
   `denom` query parameter. */
  async denomRewardSchedules(params: QueryDenomRewardSchedulesRequest): Promise<QueryDenomRewardSchedulesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/denom_reward_schedules`;
    return await this.req.get<QueryDenomRewardSchedulesResponseSDKType>(endpoint, options);
  }
  /* Queries a participant's position in a DenomReward, including the pending
   (claimable) amount per prize denom. Over REST the address is a path segment and the
   denom is passed as the `denom` query parameter. */
  async denomRewardParticipant(params: QueryDenomRewardParticipantRequest): Promise<QueryDenomRewardParticipantResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `bze/rewards/denom_reward_participant/${params.address}`;
    return await this.req.get<QueryDenomRewardParticipantResponseSDKType>(endpoint, options);
  }
  /* Queries every DenomReward participation of an address. */
  async denomRewardParticipations(params: QueryDenomRewardParticipationsRequest): Promise<QueryDenomRewardParticipationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/rewards/denom_reward_participations/${params.address}`;
    return await this.req.get<QueryDenomRewardParticipationsResponseSDKType>(endpoint, options);
  }
}