import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface Market {
    base: string;
    quote: string;
    creator: string;
}
export interface MarketSDKType {
    base: string;
    quote: string;
    creator: string;
}
export declare const Market: {
    encode(message: Market, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Market;
    fromPartial(object: DeepPartial<Market>): Market;
};
