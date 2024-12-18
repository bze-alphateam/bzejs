import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    stakingReward(request: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponse>;
    stakingRewardAll(request?: QueryAllStakingRewardRequest): Promise<QueryAllStakingRewardResponse>;
    tradingReward(request: QueryGetTradingRewardRequest): Promise<QueryGetTradingRewardResponse>;
    tradingRewardAll(request: QueryAllTradingRewardRequest): Promise<QueryAllTradingRewardResponse>;
    stakingRewardParticipant(request: QueryGetStakingRewardParticipantRequest): Promise<QueryGetStakingRewardParticipantResponse>;
    stakingRewardParticipantAll(request?: QueryAllStakingRewardParticipantRequest): Promise<QueryAllStakingRewardParticipantResponse>;
    getTradingRewardLeaderboardHandler(request: QueryGetTradingRewardLeaderboardRequest): Promise<QueryGetTradingRewardLeaderboardResponse>;
    getMarketIdTradingRewardIdHandler(request: QueryGetMarketIdTradingRewardIdHandlerRequest): Promise<QueryGetMarketIdTradingRewardIdHandlerResponse>;
    allPendingUnlockParticipant(request?: QueryAllPendingUnlockParticipantRequest): Promise<QueryAllPendingUnlockParticipantResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    stakingReward(request: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponse>;
    stakingRewardAll(request?: QueryAllStakingRewardRequest): Promise<QueryAllStakingRewardResponse>;
    tradingReward(request: QueryGetTradingRewardRequest): Promise<QueryGetTradingRewardResponse>;
    tradingRewardAll(request: QueryAllTradingRewardRequest): Promise<QueryAllTradingRewardResponse>;
    stakingRewardParticipant(request: QueryGetStakingRewardParticipantRequest): Promise<QueryGetStakingRewardParticipantResponse>;
    stakingRewardParticipantAll(request?: QueryAllStakingRewardParticipantRequest): Promise<QueryAllStakingRewardParticipantResponse>;
    getTradingRewardLeaderboardHandler(request: QueryGetTradingRewardLeaderboardRequest): Promise<QueryGetTradingRewardLeaderboardResponse>;
    getMarketIdTradingRewardIdHandler(request: QueryGetMarketIdTradingRewardIdHandlerRequest): Promise<QueryGetMarketIdTradingRewardIdHandlerResponse>;
    allPendingUnlockParticipant(request?: QueryAllPendingUnlockParticipantRequest): Promise<QueryAllPendingUnlockParticipantResponse>;
};
