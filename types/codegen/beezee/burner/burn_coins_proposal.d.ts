import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface BurnCoinsProposal {
    title: string;
    description: string;
}
export interface BurnCoinsProposalSDKType {
    title: string;
    description: string;
}
export declare const BurnCoinsProposal: {
    encode(message: BurnCoinsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnCoinsProposal;
    fromPartial(object: DeepPartial<BurnCoinsProposal>): BurnCoinsProposal;
};
