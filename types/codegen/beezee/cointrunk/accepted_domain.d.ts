import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface AcceptedDomain {
    domain: string;
    active: boolean;
}
export interface AcceptedDomainSDKType {
    domain: string;
    active: boolean;
}
export declare const AcceptedDomain: {
    encode(message: AcceptedDomain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomain;
    fromPartial(object: DeepPartial<AcceptedDomain>): AcceptedDomain;
};
