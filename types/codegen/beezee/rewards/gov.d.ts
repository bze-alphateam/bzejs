import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface ActivateTradingRewardProposal {
    title: string;
    description: string;
    rewardId: string;
}
export interface ActivateTradingRewardProposalSDKType {
    title: string;
    description: string;
    reward_id: string;
}
export declare const ActivateTradingRewardProposal: {
    encode(message: ActivateTradingRewardProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateTradingRewardProposal;
    fromPartial(object: DeepPartial<ActivateTradingRewardProposal>): ActivateTradingRewardProposal;
};
