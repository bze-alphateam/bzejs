import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
    createStakingRewardFee: string;
    createTradingRewardFee: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    createStakingRewardFee: string;
    createTradingRewardFee: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
