import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface BurnedCoins {
    burned: string;
    height: string;
}
export interface BurnedCoinsSDKType {
    burned: string;
    height: string;
}
export declare const BurnedCoins: {
    encode(message: BurnedCoins, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnedCoins;
    fromPartial(object: DeepPartial<BurnedCoins>): BurnedCoins;
};
