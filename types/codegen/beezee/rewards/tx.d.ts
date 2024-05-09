import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgCreateStakingReward {
    /** msg creator */
    creator: string;
    /** the amount paid as prize for each epoch (duration) */
    prizeAmount: string;
    /** the denom paid as prize */
    prizeDenom: string;
    /** the denom a user has to stake in order to qualify */
    stakingDenom: string;
    /** the number of days the rewards are paid */
    duration: string;
    /** the minimum amount of staking denom a user has to stake in order to qualify */
    minStake: string;
    /** the number of days the funds are locked upon exiting stake */
    lock: string;
}
export interface MsgCreateStakingRewardSDKType {
    /** msg creator */
    creator: string;
    /** the amount paid as prize for each epoch (duration) */
    prize_amount: string;
    /** the denom paid as prize */
    prize_denom: string;
    /** the denom a user has to stake in order to qualify */
    staking_denom: string;
    /** the number of days the rewards are paid */
    duration: string;
    /** the minimum amount of staking denom a user has to stake in order to qualify */
    min_stake: string;
    /** the number of days the funds are locked upon exiting stake */
    lock: string;
}
export interface MsgCreateStakingRewardResponse {
    rewardId: string;
}
export interface MsgCreateStakingRewardResponseSDKType {
    reward_id: string;
}
export interface MsgUpdateStakingReward {
    creator: string;
    rewardId: string;
    /** the number of days the rewards are paid */
    duration: string;
}
export interface MsgUpdateStakingRewardSDKType {
    creator: string;
    reward_id: string;
    /** the number of days the rewards are paid */
    duration: string;
}
export interface MsgUpdateStakingRewardResponse {
}
export interface MsgUpdateStakingRewardResponseSDKType {
}
export interface MsgCreateTradingReward {
    creator: string;
    /** the amount paid as prize for each slot */
    prizeAmount: string;
    /** the denom paid as prize */
    prizeDenom: string;
    duration: string;
    marketId: string;
    slots: string;
}
export interface MsgCreateTradingRewardSDKType {
    creator: string;
    /** the amount paid as prize for each slot */
    prize_amount: string;
    /** the denom paid as prize */
    prize_denom: string;
    duration: string;
    market_id: string;
    slots: string;
}
export interface MsgCreateTradingRewardResponse {
    rewardId: string;
}
export interface MsgCreateTradingRewardResponseSDKType {
    reward_id: string;
}
export interface MsgJoinStaking {
    creator: string;
    rewardId: string;
    amount: string;
}
export interface MsgJoinStakingSDKType {
    creator: string;
    reward_id: string;
    amount: string;
}
export interface MsgJoinStakingResponse {
}
export interface MsgJoinStakingResponseSDKType {
}
export interface MsgExitStaking {
    creator: string;
    rewardId: string;
}
export interface MsgExitStakingSDKType {
    creator: string;
    rewardId: string;
}
export interface MsgExitStakingResponse {
}
export interface MsgExitStakingResponseSDKType {
}
export interface MsgClaimStakingRewards {
    creator: string;
    rewardId: string;
}
export interface MsgClaimStakingRewardsSDKType {
    creator: string;
    rewardId: string;
}
export interface MsgClaimStakingRewardsResponse {
    amount: string;
}
export interface MsgClaimStakingRewardsResponseSDKType {
    amount: string;
}
export interface MsgDistributeStakingRewards {
    creator: string;
    rewardId: string;
    amount: string;
}
export interface MsgDistributeStakingRewardsSDKType {
    creator: string;
    rewardId: string;
    amount: string;
}
export interface MsgDistributeStakingRewardsResponse {
}
export interface MsgDistributeStakingRewardsResponseSDKType {
}
export declare const MsgCreateStakingReward: {
    encode(message: MsgCreateStakingReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStakingReward;
    fromPartial(object: DeepPartial<MsgCreateStakingReward>): MsgCreateStakingReward;
};
export declare const MsgCreateStakingRewardResponse: {
    encode(message: MsgCreateStakingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStakingRewardResponse;
    fromPartial(object: DeepPartial<MsgCreateStakingRewardResponse>): MsgCreateStakingRewardResponse;
};
export declare const MsgUpdateStakingReward: {
    encode(message: MsgUpdateStakingReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingReward;
    fromPartial(object: DeepPartial<MsgUpdateStakingReward>): MsgUpdateStakingReward;
};
export declare const MsgUpdateStakingRewardResponse: {
    encode(_: MsgUpdateStakingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingRewardResponse;
    fromPartial(_: DeepPartial<MsgUpdateStakingRewardResponse>): MsgUpdateStakingRewardResponse;
};
export declare const MsgCreateTradingReward: {
    encode(message: MsgCreateTradingReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradingReward;
    fromPartial(object: DeepPartial<MsgCreateTradingReward>): MsgCreateTradingReward;
};
export declare const MsgCreateTradingRewardResponse: {
    encode(message: MsgCreateTradingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradingRewardResponse;
    fromPartial(object: DeepPartial<MsgCreateTradingRewardResponse>): MsgCreateTradingRewardResponse;
};
export declare const MsgJoinStaking: {
    encode(message: MsgJoinStaking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinStaking;
    fromPartial(object: DeepPartial<MsgJoinStaking>): MsgJoinStaking;
};
export declare const MsgJoinStakingResponse: {
    encode(_: MsgJoinStakingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinStakingResponse;
    fromPartial(_: DeepPartial<MsgJoinStakingResponse>): MsgJoinStakingResponse;
};
export declare const MsgExitStaking: {
    encode(message: MsgExitStaking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitStaking;
    fromPartial(object: DeepPartial<MsgExitStaking>): MsgExitStaking;
};
export declare const MsgExitStakingResponse: {
    encode(_: MsgExitStakingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitStakingResponse;
    fromPartial(_: DeepPartial<MsgExitStakingResponse>): MsgExitStakingResponse;
};
export declare const MsgClaimStakingRewards: {
    encode(message: MsgClaimStakingRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimStakingRewards;
    fromPartial(object: DeepPartial<MsgClaimStakingRewards>): MsgClaimStakingRewards;
};
export declare const MsgClaimStakingRewardsResponse: {
    encode(message: MsgClaimStakingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimStakingRewardsResponse;
    fromPartial(object: DeepPartial<MsgClaimStakingRewardsResponse>): MsgClaimStakingRewardsResponse;
};
export declare const MsgDistributeStakingRewards: {
    encode(message: MsgDistributeStakingRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDistributeStakingRewards;
    fromPartial(object: DeepPartial<MsgDistributeStakingRewards>): MsgDistributeStakingRewards;
};
export declare const MsgDistributeStakingRewardsResponse: {
    encode(_: MsgDistributeStakingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDistributeStakingRewardsResponse;
    fromPartial(_: DeepPartial<MsgDistributeStakingRewardsResponse>): MsgDistributeStakingRewardsResponse;
};
