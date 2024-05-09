import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface TradingReward {
    rewardId: string;
    prizeAmount: string;
    prizeDenom: string;
    duration: number;
    marketId: string;
    slots: number;
    expireAt: number;
}
export interface TradingRewardSDKType {
    reward_id: string;
    prize_amount: string;
    prize_denom: string;
    duration: number;
    market_id: string;
    slots: number;
    expire_at: number;
}
export interface TradingRewardExpiration {
    rewardId: string;
    expireAt: number;
}
export interface TradingRewardExpirationSDKType {
    reward_id: string;
    expire_at: number;
}
export interface TradingRewardLeaderboard {
    rewardId: string;
    list: TradingRewardLeaderboardEntry[];
}
export interface TradingRewardLeaderboardSDKType {
    reward_id: string;
    list: TradingRewardLeaderboardEntrySDKType[];
}
export interface TradingRewardLeaderboardEntry {
    amount: string;
    address: string;
    createdAt: Long;
}
export interface TradingRewardLeaderboardEntrySDKType {
    amount: string;
    address: string;
    created_at: Long;
}
export interface TradingRewardCandidate {
    rewardId: string;
    amount: string;
    address: string;
}
export interface TradingRewardCandidateSDKType {
    reward_id: string;
    amount: string;
    address: string;
}
export interface MarketIdTradingRewardId {
    rewardId: string;
    marketId: string;
}
export interface MarketIdTradingRewardIdSDKType {
    reward_id: string;
    market_id: string;
}
export declare const TradingReward: {
    encode(message: TradingReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingReward;
    fromPartial(object: DeepPartial<TradingReward>): TradingReward;
};
export declare const TradingRewardExpiration: {
    encode(message: TradingRewardExpiration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardExpiration;
    fromPartial(object: DeepPartial<TradingRewardExpiration>): TradingRewardExpiration;
};
export declare const TradingRewardLeaderboard: {
    encode(message: TradingRewardLeaderboard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardLeaderboard;
    fromPartial(object: DeepPartial<TradingRewardLeaderboard>): TradingRewardLeaderboard;
};
export declare const TradingRewardLeaderboardEntry: {
    encode(message: TradingRewardLeaderboardEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardLeaderboardEntry;
    fromPartial(object: DeepPartial<TradingRewardLeaderboardEntry>): TradingRewardLeaderboardEntry;
};
export declare const TradingRewardCandidate: {
    encode(message: TradingRewardCandidate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCandidate;
    fromPartial(object: DeepPartial<TradingRewardCandidate>): TradingRewardCandidate;
};
export declare const MarketIdTradingRewardId: {
    encode(message: MarketIdTradingRewardId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketIdTradingRewardId;
    fromPartial(object: DeepPartial<MarketIdTradingRewardId>): MarketIdTradingRewardId;
};
