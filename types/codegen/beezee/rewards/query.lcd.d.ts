import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakingRewardRequest, QueryGetStakingRewardResponseSDKType, QueryAllStakingRewardRequest, QueryAllStakingRewardResponseSDKType, QueryGetTradingRewardRequest, QueryGetTradingRewardResponseSDKType, QueryAllTradingRewardRequest, QueryAllTradingRewardResponseSDKType, QueryGetStakingRewardParticipantRequest, QueryGetStakingRewardParticipantResponseSDKType, QueryAllStakingRewardParticipantRequest, QueryAllStakingRewardParticipantResponseSDKType, QueryGetTradingRewardLeaderboardRequest, QueryGetTradingRewardLeaderboardResponseSDKType, QueryGetMarketIdTradingRewardIdHandlerRequest, QueryGetMarketIdTradingRewardIdHandlerResponseSDKType, QueryAllPendingUnlockParticipantRequest, QueryAllPendingUnlockParticipantResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    stakingReward(params: QueryGetStakingRewardRequest): Promise<QueryGetStakingRewardResponseSDKType>;
    stakingRewardAll(params?: QueryAllStakingRewardRequest): Promise<QueryAllStakingRewardResponseSDKType>;
    tradingReward(params: QueryGetTradingRewardRequest): Promise<QueryGetTradingRewardResponseSDKType>;
    tradingRewardAll(params: QueryAllTradingRewardRequest): Promise<QueryAllTradingRewardResponseSDKType>;
    stakingRewardParticipant(params: QueryGetStakingRewardParticipantRequest): Promise<QueryGetStakingRewardParticipantResponseSDKType>;
    stakingRewardParticipantAll(params?: QueryAllStakingRewardParticipantRequest): Promise<QueryAllStakingRewardParticipantResponseSDKType>;
    getTradingRewardLeaderboardHandler(params: QueryGetTradingRewardLeaderboardRequest): Promise<QueryGetTradingRewardLeaderboardResponseSDKType>;
    getMarketIdTradingRewardIdHandler(params: QueryGetMarketIdTradingRewardIdHandlerRequest): Promise<QueryGetMarketIdTradingRewardIdHandlerResponseSDKType>;
    allPendingUnlockParticipant(params?: QueryAllPendingUnlockParticipantRequest): Promise<QueryAllPendingUnlockParticipantResponseSDKType>;
}
