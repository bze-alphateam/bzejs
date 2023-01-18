import * as _m0 from "protobufjs/minimal";
export interface PublisherProposal {
    title: string;
    description: string;
    name: string;
    address: string;
    active: boolean;
}
export interface PublisherProposalSDKType {
    title: string;
    description: string;
    name: string;
    address: string;
    active: boolean;
}
export declare const PublisherProposal: {
    encode(message: PublisherProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherProposal;
    fromJSON(object: any): PublisherProposal;
    toJSON(message: PublisherProposal): unknown;
    fromPartial(object: Partial<PublisherProposal>): PublisherProposal;
};
