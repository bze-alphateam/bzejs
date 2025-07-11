//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakingRewardRequest, QueryGetStakingRewardResponse, QueryAllStakingRewardsRequest, QueryAllStakingRewardsResponse, QueryTradingRewardRequest, QueryTradingRewardResponse, QueryAllTradingRewardsRequest, QueryAllTradingRewardsResponse, QueryStakingRewardParticipantRequest, QueryStakingRewardParticipantResponse, QueryAllStakingRewardParticipantsRequest, QueryAllStakingRewardParticipantsResponse, QueryTradingRewardLeaderboardRequest, QueryTradingRewardLeaderboardResponse, QueryMarketTradingRewardRequest, QueryMarketTradingRewardResponse, QueryAllPendingUnlockParticipantsRequest, QueryAllPendingUnlockParticipantsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of GetStakingReward items. */
  stakingReward(request: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponse>;
  /** Queries a list of AllStakingRewards items. */
  allStakingRewards(request?: QueryAllStakingRewardsRequest): Promise<QueryAllStakingRewardsResponse>;
  /** Queries a list of TradingReward items. */
  tradingReward(request: QueryTradingRewardRequest): Promise<QueryTradingRewardResponse>;
  /** Queries a list of AllTradingRewards items. */
  allTradingRewards(request: QueryAllTradingRewardsRequest): Promise<QueryAllTradingRewardsResponse>;
  /** Queries a list of StakingRewardParticipant items. */
  stakingRewardParticipant(request: QueryStakingRewardParticipantRequest): Promise<QueryStakingRewardParticipantResponse>;
  /** Queries a list of AllStakingRewardParticipants items. */
  allStakingRewardParticipants(request?: QueryAllStakingRewardParticipantsRequest): Promise<QueryAllStakingRewardParticipantsResponse>;
  /** Queries a list of TradingRewardLeaderboard items. */
  tradingRewardLeaderboard(request: QueryTradingRewardLeaderboardRequest): Promise<QueryTradingRewardLeaderboardResponse>;
  /** Queries a list of MarketTradingReward items. */
  marketTradingReward(request: QueryMarketTradingRewardRequest): Promise<QueryMarketTradingRewardResponse>;
  /** Queries a list of AllPendingUnlockParticipants items. */
  allPendingUnlockParticipants(request?: QueryAllPendingUnlockParticipantsRequest): Promise<QueryAllPendingUnlockParticipantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  stakingReward(request: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponse> {
    const data = QueryGetStakingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "StakingReward", data);
    return promise.then(data => QueryGetStakingRewardResponse.decode(new BinaryReader(data)));
  }
  allStakingRewards(request: QueryAllStakingRewardsRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardsResponse> {
    const data = QueryAllStakingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "AllStakingRewards", data);
    return promise.then(data => QueryAllStakingRewardsResponse.decode(new BinaryReader(data)));
  }
  tradingReward(request: QueryTradingRewardRequest): Promise<QueryTradingRewardResponse> {
    const data = QueryTradingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "TradingReward", data);
    return promise.then(data => QueryTradingRewardResponse.decode(new BinaryReader(data)));
  }
  allTradingRewards(request: QueryAllTradingRewardsRequest): Promise<QueryAllTradingRewardsResponse> {
    const data = QueryAllTradingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "AllTradingRewards", data);
    return promise.then(data => QueryAllTradingRewardsResponse.decode(new BinaryReader(data)));
  }
  stakingRewardParticipant(request: QueryStakingRewardParticipantRequest): Promise<QueryStakingRewardParticipantResponse> {
    const data = QueryStakingRewardParticipantRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "StakingRewardParticipant", data);
    return promise.then(data => QueryStakingRewardParticipantResponse.decode(new BinaryReader(data)));
  }
  allStakingRewardParticipants(request: QueryAllStakingRewardParticipantsRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardParticipantsResponse> {
    const data = QueryAllStakingRewardParticipantsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "AllStakingRewardParticipants", data);
    return promise.then(data => QueryAllStakingRewardParticipantsResponse.decode(new BinaryReader(data)));
  }
  tradingRewardLeaderboard(request: QueryTradingRewardLeaderboardRequest): Promise<QueryTradingRewardLeaderboardResponse> {
    const data = QueryTradingRewardLeaderboardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "TradingRewardLeaderboard", data);
    return promise.then(data => QueryTradingRewardLeaderboardResponse.decode(new BinaryReader(data)));
  }
  marketTradingReward(request: QueryMarketTradingRewardRequest): Promise<QueryMarketTradingRewardResponse> {
    const data = QueryMarketTradingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "MarketTradingReward", data);
    return promise.then(data => QueryMarketTradingRewardResponse.decode(new BinaryReader(data)));
  }
  allPendingUnlockParticipants(request: QueryAllPendingUnlockParticipantsRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingUnlockParticipantsResponse> {
    const data = QueryAllPendingUnlockParticipantsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Query", "AllPendingUnlockParticipants", data);
    return promise.then(data => QueryAllPendingUnlockParticipantsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    stakingReward(request: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponse> {
      return queryService.stakingReward(request);
    },
    allStakingRewards(request?: QueryAllStakingRewardsRequest): Promise<QueryAllStakingRewardsResponse> {
      return queryService.allStakingRewards(request);
    },
    tradingReward(request: QueryTradingRewardRequest): Promise<QueryTradingRewardResponse> {
      return queryService.tradingReward(request);
    },
    allTradingRewards(request: QueryAllTradingRewardsRequest): Promise<QueryAllTradingRewardsResponse> {
      return queryService.allTradingRewards(request);
    },
    stakingRewardParticipant(request: QueryStakingRewardParticipantRequest): Promise<QueryStakingRewardParticipantResponse> {
      return queryService.stakingRewardParticipant(request);
    },
    allStakingRewardParticipants(request?: QueryAllStakingRewardParticipantsRequest): Promise<QueryAllStakingRewardParticipantsResponse> {
      return queryService.allStakingRewardParticipants(request);
    },
    tradingRewardLeaderboard(request: QueryTradingRewardLeaderboardRequest): Promise<QueryTradingRewardLeaderboardResponse> {
      return queryService.tradingRewardLeaderboard(request);
    },
    marketTradingReward(request: QueryMarketTradingRewardRequest): Promise<QueryMarketTradingRewardResponse> {
      return queryService.marketTradingReward(request);
    },
    allPendingUnlockParticipants(request?: QueryAllPendingUnlockParticipantsRequest): Promise<QueryAllPendingUnlockParticipantsResponse> {
      return queryService.allPendingUnlockParticipants(request);
    }
  };
};