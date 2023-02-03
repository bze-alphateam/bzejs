import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface CoinsBurnedEvent {
    burned: string;
}
export interface CoinsBurnedEventSDKType {
    burned: string;
}
export interface FundBurnerEvent {
    from: string;
    amount: string;
}
export interface FundBurnerEventSDKType {
    from: string;
    amount: string;
}
export declare const CoinsBurnedEvent: {
    encode(message: CoinsBurnedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinsBurnedEvent;
    fromPartial(object: DeepPartial<CoinsBurnedEvent>): CoinsBurnedEvent;
};
export declare const FundBurnerEvent: {
    encode(message: FundBurnerEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundBurnerEvent;
    fromPartial(object: DeepPartial<FundBurnerEvent>): FundBurnerEvent;
};
