import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface AcceptedDomainProposal {
    title: string;
    description: string;
    domain: string;
    active: boolean;
}
export interface AcceptedDomainProposalSDKType {
    title: string;
    description: string;
    domain: string;
    active: boolean;
}
export declare const AcceptedDomainProposal: {
    encode(message: AcceptedDomainProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainProposal;
    fromPartial(object: DeepPartial<AcceptedDomainProposal>): AcceptedDomainProposal;
};
