import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface StakingRewardCreateEvent {
    rewardId: string;
    prizeAmount: string;
    prizeDenom: string;
    stakingDenom: string;
    duration: number;
    minStake: Long;
    lock: number;
}
export interface StakingRewardCreateEventSDKType {
    reward_id: string;
    prize_amount: string;
    prize_denom: string;
    staking_denom: string;
    duration: number;
    min_stake: Long;
    lock: number;
}
export interface StakingRewardUpdateEvent {
    rewardId: string;
    duration: number;
}
export interface StakingRewardUpdateEventSDKType {
    reward_id: string;
    duration: number;
}
export interface StakingRewardClaimEvent {
    rewardId: string;
    address: string;
    amount: string;
}
export interface StakingRewardClaimEventSDKType {
    reward_id: string;
    address: string;
    amount: string;
}
export interface StakingRewardJoinEvent {
    rewardId: string;
    address: string;
    amount: string;
}
export interface StakingRewardJoinEventSDKType {
    reward_id: string;
    address: string;
    amount: string;
}
export interface StakingRewardExitEvent {
    rewardId: string;
    address: string;
}
export interface StakingRewardExitEventSDKType {
    reward_id: string;
    address: string;
}
export interface StakingRewardFinishEvent {
    rewardId: string;
}
export interface StakingRewardFinishEventSDKType {
    reward_id: string;
}
export interface StakingRewardDistributionEvent {
    rewardId: string;
    amount: string;
}
export interface StakingRewardDistributionEventSDKType {
    reward_id: string;
    amount: string;
}
export interface TradingRewardCreateEvent {
    rewardId: string;
    /** the amount paid as prize for each slot */
    prizeAmount: string;
    /** the denom paid as prize */
    prizeDenom: string;
    duration: number;
    marketId: string;
    slots: number;
    creator: string;
}
export interface TradingRewardCreateEventSDKType {
    reward_id: string;
    /** the amount paid as prize for each slot */
    prize_amount: string;
    /** the denom paid as prize */
    prize_denom: string;
    duration: number;
    market_id: string;
    slots: number;
    creator: string;
}
export interface TradingRewardExpireEvent {
    rewardId: string;
}
export interface TradingRewardExpireEventSDKType {
    reward_id: string;
}
export interface TradingRewardActivationEvent {
    rewardId: string;
}
export interface TradingRewardActivationEventSDKType {
    reward_id: string;
}
export interface TradingRewardDistributionEvent {
    rewardId: string;
    prizeAmount: string;
    prizeDenom: string;
    winners: string[];
}
export interface TradingRewardDistributionEventSDKType {
    reward_id: string;
    prize_amount: string;
    prize_denom: string;
    winners: string[];
}
export declare const StakingRewardCreateEvent: {
    encode(message: StakingRewardCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardCreateEvent;
    fromPartial(object: DeepPartial<StakingRewardCreateEvent>): StakingRewardCreateEvent;
};
export declare const StakingRewardUpdateEvent: {
    encode(message: StakingRewardUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardUpdateEvent;
    fromPartial(object: DeepPartial<StakingRewardUpdateEvent>): StakingRewardUpdateEvent;
};
export declare const StakingRewardClaimEvent: {
    encode(message: StakingRewardClaimEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardClaimEvent;
    fromPartial(object: DeepPartial<StakingRewardClaimEvent>): StakingRewardClaimEvent;
};
export declare const StakingRewardJoinEvent: {
    encode(message: StakingRewardJoinEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardJoinEvent;
    fromPartial(object: DeepPartial<StakingRewardJoinEvent>): StakingRewardJoinEvent;
};
export declare const StakingRewardExitEvent: {
    encode(message: StakingRewardExitEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardExitEvent;
    fromPartial(object: DeepPartial<StakingRewardExitEvent>): StakingRewardExitEvent;
};
export declare const StakingRewardFinishEvent: {
    encode(message: StakingRewardFinishEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardFinishEvent;
    fromPartial(object: DeepPartial<StakingRewardFinishEvent>): StakingRewardFinishEvent;
};
export declare const StakingRewardDistributionEvent: {
    encode(message: StakingRewardDistributionEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardDistributionEvent;
    fromPartial(object: DeepPartial<StakingRewardDistributionEvent>): StakingRewardDistributionEvent;
};
export declare const TradingRewardCreateEvent: {
    encode(message: TradingRewardCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCreateEvent;
    fromPartial(object: DeepPartial<TradingRewardCreateEvent>): TradingRewardCreateEvent;
};
export declare const TradingRewardExpireEvent: {
    encode(message: TradingRewardExpireEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardExpireEvent;
    fromPartial(object: DeepPartial<TradingRewardExpireEvent>): TradingRewardExpireEvent;
};
export declare const TradingRewardActivationEvent: {
    encode(message: TradingRewardActivationEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardActivationEvent;
    fromPartial(object: DeepPartial<TradingRewardActivationEvent>): TradingRewardActivationEvent;
};
export declare const TradingRewardDistributionEvent: {
    encode(message: TradingRewardDistributionEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardDistributionEvent;
    fromPartial(object: DeepPartial<TradingRewardDistributionEvent>): TradingRewardDistributionEvent;
};
