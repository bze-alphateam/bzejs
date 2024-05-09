import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateStakingReward, MsgUpdateStakingReward, MsgCreateTradingReward, MsgJoinStaking, MsgExitStaking, MsgClaimStakingRewards, MsgDistributeStakingRewards } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createStakingReward(value: MsgCreateStakingReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateStakingReward(value: MsgUpdateStakingReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        createTradingReward(value: MsgCreateTradingReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        joinStaking(value: MsgJoinStaking): {
            typeUrl: string;
            value: Uint8Array;
        };
        exitStaking(value: MsgExitStaking): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimStakingRewards(value: MsgClaimStakingRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        distributeStakingRewards(value: MsgDistributeStakingRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createStakingReward(value: MsgCreateStakingReward): {
            typeUrl: string;
            value: MsgCreateStakingReward;
        };
        updateStakingReward(value: MsgUpdateStakingReward): {
            typeUrl: string;
            value: MsgUpdateStakingReward;
        };
        createTradingReward(value: MsgCreateTradingReward): {
            typeUrl: string;
            value: MsgCreateTradingReward;
        };
        joinStaking(value: MsgJoinStaking): {
            typeUrl: string;
            value: MsgJoinStaking;
        };
        exitStaking(value: MsgExitStaking): {
            typeUrl: string;
            value: MsgExitStaking;
        };
        claimStakingRewards(value: MsgClaimStakingRewards): {
            typeUrl: string;
            value: MsgClaimStakingRewards;
        };
        distributeStakingRewards(value: MsgDistributeStakingRewards): {
            typeUrl: string;
            value: MsgDistributeStakingRewards;
        };
    };
    fromPartial: {
        createStakingReward(value: MsgCreateStakingReward): {
            typeUrl: string;
            value: MsgCreateStakingReward;
        };
        updateStakingReward(value: MsgUpdateStakingReward): {
            typeUrl: string;
            value: MsgUpdateStakingReward;
        };
        createTradingReward(value: MsgCreateTradingReward): {
            typeUrl: string;
            value: MsgCreateTradingReward;
        };
        joinStaking(value: MsgJoinStaking): {
            typeUrl: string;
            value: MsgJoinStaking;
        };
        exitStaking(value: MsgExitStaking): {
            typeUrl: string;
            value: MsgExitStaking;
        };
        claimStakingRewards(value: MsgClaimStakingRewards): {
            typeUrl: string;
            value: MsgClaimStakingRewards;
        };
        distributeStakingRewards(value: MsgDistributeStakingRewards): {
            typeUrl: string;
            value: MsgDistributeStakingRewards;
        };
    };
};
