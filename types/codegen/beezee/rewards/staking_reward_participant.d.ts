import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface StakingRewardParticipant {
    address: string;
    rewardId: string;
    /** stake[address] */
    amount: string;
    /** S0[address] */
    joinedAt: string;
}
export interface StakingRewardParticipantSDKType {
    address: string;
    reward_id: string;
    /** stake[address] */
    amount: string;
    /** S0[address] */
    joined_at: string;
}
export interface PendingUnlockParticipant {
    index: string;
    address: string;
    amount: string;
    denom: string;
}
export interface PendingUnlockParticipantSDKType {
    index: string;
    address: string;
    amount: string;
    denom: string;
}
export declare const StakingRewardParticipant: {
    encode(message: StakingRewardParticipant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardParticipant;
    fromPartial(object: DeepPartial<StakingRewardParticipant>): StakingRewardParticipant;
};
export declare const PendingUnlockParticipant: {
    encode(message: PendingUnlockParticipant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingUnlockParticipant;
    fromPartial(object: DeepPartial<PendingUnlockParticipant>): PendingUnlockParticipant;
};
