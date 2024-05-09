import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface StakingReward {
    rewardId: string;
    prizeAmount: string;
    prizeDenom: string;
    stakingDenom: string;
    duration: number;
    payouts: number;
    minStake: Long;
    lock: number;
    /** T */
    stakedAmount: string;
    /** S */
    distributedStake: string;
}
export interface StakingRewardSDKType {
    reward_id: string;
    prize_amount: string;
    prize_denom: string;
    staking_denom: string;
    duration: number;
    payouts: number;
    min_stake: Long;
    lock: number;
    /** T */
    staked_amount: string;
    /** S */
    distributed_stake: string;
}
export declare const StakingReward: {
    encode(message: StakingReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingReward;
    fromPartial(object: DeepPartial<StakingReward>): StakingReward;
};
