import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakingRewardRequest, QueryGetStakingRewardResponseSDKType, QueryAllStakingRewardRequest, QueryAllStakingRewardResponseSDKType, QueryGetTradingRewardRequest, QueryGetTradingRewardResponseSDKType, QueryAllTradingRewardRequest, QueryAllTradingRewardResponseSDKType, QueryGetStakingRewardParticipantRequest, QueryGetStakingRewardParticipantResponseSDKType, QueryAllStakingRewardParticipantRequest, QueryAllStakingRewardParticipantResponseSDKType, QueryGetTradingRewardLeaderboardRequest, QueryGetTradingRewardLeaderboardResponseSDKType, QueryGetMarketIdTradingRewardIdHandlerRequest, QueryGetMarketIdTradingRewardIdHandlerResponseSDKType, QueryAllPendingUnlockParticipantRequest, QueryAllPendingUnlockParticipantResponseSDKType } from "./query";
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
    this.stakingRewardAll = this.stakingRewardAll.bind(this);
    this.tradingReward = this.tradingReward.bind(this);
    this.tradingRewardAll = this.tradingRewardAll.bind(this);
    this.stakingRewardParticipant = this.stakingRewardParticipant.bind(this);
    this.stakingRewardParticipantAll = this.stakingRewardParticipantAll.bind(this);
    this.getTradingRewardLeaderboardHandler = this.getTradingRewardLeaderboardHandler.bind(this);
    this.getMarketIdTradingRewardIdHandler = this.getMarketIdTradingRewardIdHandler.bind(this);
    this.allPendingUnlockParticipant = this.allPendingUnlockParticipant.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/rewards/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a StakingReward by index. */


  async stakingReward(params: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponseSDKType> {
    const endpoint = `bze/rewards/v1/staking_reward/${params.rewardId}`;
    return await this.req.get<QueryGetStakingRewardResponseSDKType>(endpoint);
  }
  /* Queries a list of StakingReward items. */


  async stakingRewardAll(params: QueryAllStakingRewardRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/rewards/v1/staking_reward`;
    return await this.req.get<QueryAllStakingRewardResponseSDKType>(endpoint, options);
  }
  /* Queries a TradingReward by index. */


  async tradingReward(params: QueryGetTradingRewardRequest): Promise<QueryGetTradingRewardResponseSDKType> {
    const endpoint = `bze/rewards/v1/trading_reward/${params.rewardId}`;
    return await this.req.get<QueryGetTradingRewardResponseSDKType>(endpoint);
  }
  /* Queries a list of TradingReward items. */


  async tradingRewardAll(params: QueryAllTradingRewardRequest): Promise<QueryAllTradingRewardResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/rewards/v1/trading_reward/${params.state}`;
    return await this.req.get<QueryAllTradingRewardResponseSDKType>(endpoint, options);
  }
  /* Queries a StakingRewardParticipant by index. */


  async stakingRewardParticipant(params: QueryGetStakingRewardParticipantRequest): Promise<QueryGetStakingRewardParticipantResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/rewards/v1/staking_reward_participant/${params.address}`;
    return await this.req.get<QueryGetStakingRewardParticipantResponseSDKType>(endpoint, options);
  }
  /* Queries a list of StakingRewardParticipant items. */


  async stakingRewardParticipantAll(params: QueryAllStakingRewardParticipantRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardParticipantResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/rewards/v1/staking_reward_participants`;
    return await this.req.get<QueryAllStakingRewardParticipantResponseSDKType>(endpoint, options);
  }
  /* Queries a list of GetTradingRewardLeaderboard items. */


  async getTradingRewardLeaderboardHandler(params: QueryGetTradingRewardLeaderboardRequest): Promise<QueryGetTradingRewardLeaderboardResponseSDKType> {
    const endpoint = `bze/rewards/v1/trading_reward_leaderboard/${params.rewardId}`;
    return await this.req.get<QueryGetTradingRewardLeaderboardResponseSDKType>(endpoint);
  }
  /* Queries a list of GetMarketIdTradingRewardIdHandler items. */


  async getMarketIdTradingRewardIdHandler(params: QueryGetMarketIdTradingRewardIdHandlerRequest): Promise<QueryGetMarketIdTradingRewardIdHandlerResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.marketId !== "undefined") {
      options.params.market_id = params.marketId;
    }

    const endpoint = `bze/rewards/v1/market_id_trading_reward_id`;
    return await this.req.get<QueryGetMarketIdTradingRewardIdHandlerResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllPendingUnlockParticipant items. */


  async allPendingUnlockParticipant(params: QueryAllPendingUnlockParticipantRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingUnlockParticipantResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/rewards/v1/all_pending_unlock_participant`;
    return await this.req.get<QueryAllPendingUnlockParticipantResponseSDKType>(endpoint, options);
  }

}