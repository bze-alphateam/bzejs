import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakingRewardRequest, QueryGetStakingRewardResponse, QueryAllStakingRewardRequest, QueryAllStakingRewardResponse, QueryGetTradingRewardRequest, QueryGetTradingRewardResponse, QueryAllTradingRewardRequest, QueryAllTradingRewardResponse, QueryGetStakingRewardParticipantRequest, QueryGetStakingRewardParticipantResponse, QueryAllStakingRewardParticipantRequest, QueryAllStakingRewardParticipantResponse, QueryGetTradingRewardLeaderboardRequest, QueryGetTradingRewardLeaderboardResponse, QueryGetMarketIdTradingRewardIdHandlerRequest, QueryGetMarketIdTradingRewardIdHandlerResponse, QueryAllPendingUnlockParticipantRequest, QueryAllPendingUnlockParticipantResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StakingReward by index. */

  stakingReward(request: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponse>;
  /** Queries a list of StakingReward items. */

  stakingRewardAll(request?: QueryAllStakingRewardRequest): Promise<QueryAllStakingRewardResponse>;
  /** Queries a TradingReward by index. */

  tradingReward(request: QueryGetTradingRewardRequest): Promise<QueryGetTradingRewardResponse>;
  /** Queries a list of TradingReward items. */

  tradingRewardAll(request: QueryAllTradingRewardRequest): Promise<QueryAllTradingRewardResponse>;
  /** Queries a StakingRewardParticipant by index. */

  stakingRewardParticipant(request: QueryGetStakingRewardParticipantRequest): Promise<QueryGetStakingRewardParticipantResponse>;
  /** Queries a list of StakingRewardParticipant items. */

  stakingRewardParticipantAll(request?: QueryAllStakingRewardParticipantRequest): Promise<QueryAllStakingRewardParticipantResponse>;
  /** Queries a list of GetTradingRewardLeaderboard items. */

  getTradingRewardLeaderboardHandler(request: QueryGetTradingRewardLeaderboardRequest): Promise<QueryGetTradingRewardLeaderboardResponse>;
  /** Queries a list of GetMarketIdTradingRewardIdHandler items. */

  getMarketIdTradingRewardIdHandler(request: QueryGetMarketIdTradingRewardIdHandlerRequest): Promise<QueryGetMarketIdTradingRewardIdHandlerResponse>;
  /** Queries a list of AllPendingUnlockParticipant items. */

  allPendingUnlockParticipant(request?: QueryAllPendingUnlockParticipantRequest): Promise<QueryAllPendingUnlockParticipantResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
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

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  stakingReward(request: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponse> {
    const data = QueryGetStakingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "StakingReward", data);
    return promise.then(data => QueryGetStakingRewardResponse.decode(new _m0.Reader(data)));
  }

  stakingRewardAll(request: QueryAllStakingRewardRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardResponse> {
    const data = QueryAllStakingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "StakingRewardAll", data);
    return promise.then(data => QueryAllStakingRewardResponse.decode(new _m0.Reader(data)));
  }

  tradingReward(request: QueryGetTradingRewardRequest): Promise<QueryGetTradingRewardResponse> {
    const data = QueryGetTradingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "TradingReward", data);
    return promise.then(data => QueryGetTradingRewardResponse.decode(new _m0.Reader(data)));
  }

  tradingRewardAll(request: QueryAllTradingRewardRequest): Promise<QueryAllTradingRewardResponse> {
    const data = QueryAllTradingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "TradingRewardAll", data);
    return promise.then(data => QueryAllTradingRewardResponse.decode(new _m0.Reader(data)));
  }

  stakingRewardParticipant(request: QueryGetStakingRewardParticipantRequest): Promise<QueryGetStakingRewardParticipantResponse> {
    const data = QueryGetStakingRewardParticipantRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "StakingRewardParticipant", data);
    return promise.then(data => QueryGetStakingRewardParticipantResponse.decode(new _m0.Reader(data)));
  }

  stakingRewardParticipantAll(request: QueryAllStakingRewardParticipantRequest = {
    pagination: undefined
  }): Promise<QueryAllStakingRewardParticipantResponse> {
    const data = QueryAllStakingRewardParticipantRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "StakingRewardParticipantAll", data);
    return promise.then(data => QueryAllStakingRewardParticipantResponse.decode(new _m0.Reader(data)));
  }

  getTradingRewardLeaderboardHandler(request: QueryGetTradingRewardLeaderboardRequest): Promise<QueryGetTradingRewardLeaderboardResponse> {
    const data = QueryGetTradingRewardLeaderboardRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "GetTradingRewardLeaderboardHandler", data);
    return promise.then(data => QueryGetTradingRewardLeaderboardResponse.decode(new _m0.Reader(data)));
  }

  getMarketIdTradingRewardIdHandler(request: QueryGetMarketIdTradingRewardIdHandlerRequest): Promise<QueryGetMarketIdTradingRewardIdHandlerResponse> {
    const data = QueryGetMarketIdTradingRewardIdHandlerRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "GetMarketIdTradingRewardIdHandler", data);
    return promise.then(data => QueryGetMarketIdTradingRewardIdHandlerResponse.decode(new _m0.Reader(data)));
  }

  allPendingUnlockParticipant(request: QueryAllPendingUnlockParticipantRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingUnlockParticipantResponse> {
    const data = QueryAllPendingUnlockParticipantRequest.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Query", "AllPendingUnlockParticipant", data);
    return promise.then(data => QueryAllPendingUnlockParticipantResponse.decode(new _m0.Reader(data)));
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

    stakingRewardAll(request?: QueryAllStakingRewardRequest): Promise<QueryAllStakingRewardResponse> {
      return queryService.stakingRewardAll(request);
    },

    tradingReward(request: QueryGetTradingRewardRequest): Promise<QueryGetTradingRewardResponse> {
      return queryService.tradingReward(request);
    },

    tradingRewardAll(request: QueryAllTradingRewardRequest): Promise<QueryAllTradingRewardResponse> {
      return queryService.tradingRewardAll(request);
    },

    stakingRewardParticipant(request: QueryGetStakingRewardParticipantRequest): Promise<QueryGetStakingRewardParticipantResponse> {
      return queryService.stakingRewardParticipant(request);
    },

    stakingRewardParticipantAll(request?: QueryAllStakingRewardParticipantRequest): Promise<QueryAllStakingRewardParticipantResponse> {
      return queryService.stakingRewardParticipantAll(request);
    },

    getTradingRewardLeaderboardHandler(request: QueryGetTradingRewardLeaderboardRequest): Promise<QueryGetTradingRewardLeaderboardResponse> {
      return queryService.getTradingRewardLeaderboardHandler(request);
    },

    getMarketIdTradingRewardIdHandler(request: QueryGetMarketIdTradingRewardIdHandlerRequest): Promise<QueryGetMarketIdTradingRewardIdHandlerResponse> {
      return queryService.getMarketIdTradingRewardIdHandler(request);
    },

    allPendingUnlockParticipant(request?: QueryAllPendingUnlockParticipantRequest): Promise<QueryAllPendingUnlockParticipantResponse> {
      return queryService.allPendingUnlockParticipant(request);
    }

  };
};