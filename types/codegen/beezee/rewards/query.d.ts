import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakingReward, StakingRewardSDKType } from "./staking_reward";
import { TradingReward, TradingRewardSDKType, TradingRewardLeaderboard, TradingRewardLeaderboardSDKType, MarketIdTradingRewardId, MarketIdTradingRewardIdSDKType } from "./trading_reward";
import { StakingRewardParticipant, StakingRewardParticipantSDKType, PendingUnlockParticipant, PendingUnlockParticipantSDKType } from "./staking_reward_participant";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params?: ParamsSDKType;
}
export interface QueryGetStakingRewardRequest {
    rewardId: string;
}
export interface QueryGetStakingRewardRequestSDKType {
    reward_id: string;
}
export interface QueryGetStakingRewardResponse {
    stakingReward?: StakingReward;
}
export interface QueryGetStakingRewardResponseSDKType {
    staking_reward?: StakingRewardSDKType;
}
export interface QueryAllStakingRewardRequest {
    pagination?: PageRequest;
}
export interface QueryAllStakingRewardRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllStakingRewardResponse {
    list: StakingReward[];
    pagination?: PageResponse;
}
export interface QueryAllStakingRewardResponseSDKType {
    list: StakingRewardSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetTradingRewardRequest {
    rewardId: string;
}
export interface QueryGetTradingRewardRequestSDKType {
    reward_id: string;
}
export interface QueryGetTradingRewardResponse {
    tradingReward?: TradingReward;
}
export interface QueryGetTradingRewardResponseSDKType {
    trading_reward?: TradingRewardSDKType;
}
export interface QueryAllTradingRewardRequest {
    state: string;
    pagination?: PageRequest;
}
export interface QueryAllTradingRewardRequestSDKType {
    state: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllTradingRewardResponse {
    list: TradingReward[];
    pagination?: PageResponse;
}
export interface QueryAllTradingRewardResponseSDKType {
    list: TradingRewardSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetStakingRewardParticipantRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryGetStakingRewardParticipantRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryGetStakingRewardParticipantResponse {
    list: StakingRewardParticipant[];
    pagination?: PageResponse;
}
export interface QueryGetStakingRewardParticipantResponseSDKType {
    list: StakingRewardParticipantSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllStakingRewardParticipantRequest {
    pagination?: PageRequest;
}
export interface QueryAllStakingRewardParticipantRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllStakingRewardParticipantResponse {
    list: StakingRewardParticipant[];
    pagination?: PageResponse;
}
export interface QueryAllStakingRewardParticipantResponseSDKType {
    list: StakingRewardParticipantSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetTradingRewardLeaderboardRequest {
    rewardId: string;
}
export interface QueryGetTradingRewardLeaderboardRequestSDKType {
    reward_id: string;
}
export interface QueryGetTradingRewardLeaderboardResponse {
    leaderboard?: TradingRewardLeaderboard;
}
export interface QueryGetTradingRewardLeaderboardResponseSDKType {
    leaderboard?: TradingRewardLeaderboardSDKType;
}
export interface QueryGetMarketIdTradingRewardIdHandlerRequest {
    marketId: string;
}
export interface QueryGetMarketIdTradingRewardIdHandlerRequestSDKType {
    market_id: string;
}
export interface QueryGetMarketIdTradingRewardIdHandlerResponse {
    marketIdRewardId?: MarketIdTradingRewardId;
}
export interface QueryGetMarketIdTradingRewardIdHandlerResponseSDKType {
    market_id_reward_id?: MarketIdTradingRewardIdSDKType;
}
export interface QueryAllPendingUnlockParticipantRequest {
    pagination?: PageRequest;
}
export interface QueryAllPendingUnlockParticipantRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllPendingUnlockParticipantResponse {
    list: PendingUnlockParticipant[];
    pagination?: PageResponse;
}
export interface QueryAllPendingUnlockParticipantResponseSDKType {
    list: PendingUnlockParticipantSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetStakingRewardRequest: {
    encode(message: QueryGetStakingRewardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardRequest;
    fromPartial(object: DeepPartial<QueryGetStakingRewardRequest>): QueryGetStakingRewardRequest;
};
export declare const QueryGetStakingRewardResponse: {
    encode(message: QueryGetStakingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardResponse;
    fromPartial(object: DeepPartial<QueryGetStakingRewardResponse>): QueryGetStakingRewardResponse;
};
export declare const QueryAllStakingRewardRequest: {
    encode(message: QueryAllStakingRewardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardRequest;
    fromPartial(object: DeepPartial<QueryAllStakingRewardRequest>): QueryAllStakingRewardRequest;
};
export declare const QueryAllStakingRewardResponse: {
    encode(message: QueryAllStakingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardResponse;
    fromPartial(object: DeepPartial<QueryAllStakingRewardResponse>): QueryAllStakingRewardResponse;
};
export declare const QueryGetTradingRewardRequest: {
    encode(message: QueryGetTradingRewardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardRequest;
    fromPartial(object: DeepPartial<QueryGetTradingRewardRequest>): QueryGetTradingRewardRequest;
};
export declare const QueryGetTradingRewardResponse: {
    encode(message: QueryGetTradingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardResponse;
    fromPartial(object: DeepPartial<QueryGetTradingRewardResponse>): QueryGetTradingRewardResponse;
};
export declare const QueryAllTradingRewardRequest: {
    encode(message: QueryAllTradingRewardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradingRewardRequest;
    fromPartial(object: DeepPartial<QueryAllTradingRewardRequest>): QueryAllTradingRewardRequest;
};
export declare const QueryAllTradingRewardResponse: {
    encode(message: QueryAllTradingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradingRewardResponse;
    fromPartial(object: DeepPartial<QueryAllTradingRewardResponse>): QueryAllTradingRewardResponse;
};
export declare const QueryGetStakingRewardParticipantRequest: {
    encode(message: QueryGetStakingRewardParticipantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardParticipantRequest;
    fromPartial(object: DeepPartial<QueryGetStakingRewardParticipantRequest>): QueryGetStakingRewardParticipantRequest;
};
export declare const QueryGetStakingRewardParticipantResponse: {
    encode(message: QueryGetStakingRewardParticipantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakingRewardParticipantResponse;
    fromPartial(object: DeepPartial<QueryGetStakingRewardParticipantResponse>): QueryGetStakingRewardParticipantResponse;
};
export declare const QueryAllStakingRewardParticipantRequest: {
    encode(message: QueryAllStakingRewardParticipantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardParticipantRequest;
    fromPartial(object: DeepPartial<QueryAllStakingRewardParticipantRequest>): QueryAllStakingRewardParticipantRequest;
};
export declare const QueryAllStakingRewardParticipantResponse: {
    encode(message: QueryAllStakingRewardParticipantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakingRewardParticipantResponse;
    fromPartial(object: DeepPartial<QueryAllStakingRewardParticipantResponse>): QueryAllStakingRewardParticipantResponse;
};
export declare const QueryGetTradingRewardLeaderboardRequest: {
    encode(message: QueryGetTradingRewardLeaderboardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardLeaderboardRequest;
    fromPartial(object: DeepPartial<QueryGetTradingRewardLeaderboardRequest>): QueryGetTradingRewardLeaderboardRequest;
};
export declare const QueryGetTradingRewardLeaderboardResponse: {
    encode(message: QueryGetTradingRewardLeaderboardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingRewardLeaderboardResponse;
    fromPartial(object: DeepPartial<QueryGetTradingRewardLeaderboardResponse>): QueryGetTradingRewardLeaderboardResponse;
};
export declare const QueryGetMarketIdTradingRewardIdHandlerRequest: {
    encode(message: QueryGetMarketIdTradingRewardIdHandlerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketIdTradingRewardIdHandlerRequest;
    fromPartial(object: DeepPartial<QueryGetMarketIdTradingRewardIdHandlerRequest>): QueryGetMarketIdTradingRewardIdHandlerRequest;
};
export declare const QueryGetMarketIdTradingRewardIdHandlerResponse: {
    encode(message: QueryGetMarketIdTradingRewardIdHandlerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketIdTradingRewardIdHandlerResponse;
    fromPartial(object: DeepPartial<QueryGetMarketIdTradingRewardIdHandlerResponse>): QueryGetMarketIdTradingRewardIdHandlerResponse;
};
export declare const QueryAllPendingUnlockParticipantRequest: {
    encode(message: QueryAllPendingUnlockParticipantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingUnlockParticipantRequest;
    fromPartial(object: DeepPartial<QueryAllPendingUnlockParticipantRequest>): QueryAllPendingUnlockParticipantRequest;
};
export declare const QueryAllPendingUnlockParticipantResponse: {
    encode(message: QueryAllPendingUnlockParticipantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingUnlockParticipantResponse;
    fromPartial(object: DeepPartial<QueryAllPendingUnlockParticipantResponse>): QueryAllPendingUnlockParticipantResponse;
};
