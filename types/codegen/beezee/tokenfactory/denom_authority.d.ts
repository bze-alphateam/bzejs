import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface DenomAuthority {
    /** Can be empty for no admin, or a valid osmosis address */
    admin: string;
}
export interface DenomAuthoritySDKType {
    /** Can be empty for no admin, or a valid osmosis address */
    admin: string;
}
export declare const DenomAuthority: {
    encode(message: DenomAuthority, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomAuthority;
    fromPartial(object: DeepPartial<DenomAuthority>): DenomAuthority;
};
