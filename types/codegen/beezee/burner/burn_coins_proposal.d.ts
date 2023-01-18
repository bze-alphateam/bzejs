import * as _m0 from "protobufjs/minimal";
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
    fromJSON(object: any): BurnCoinsProposal;
    toJSON(message: BurnCoinsProposal): unknown;
    fromPartial(object: Partial<BurnCoinsProposal>): BurnCoinsProposal;
};
