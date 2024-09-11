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
export interface RaffleWinnerEvent {
    denom: string;
    winner: string;
    amount: string;
}
export interface RaffleWinnerEventSDKType {
    denom: string;
    winner: string;
    amount: string;
}
export interface RaffleLostEvent {
    denom: string;
    participant: string;
}
export interface RaffleLostEventSDKType {
    denom: string;
    participant: string;
}
export interface RaffleFinishedEvent {
    denom: string;
}
export interface RaffleFinishedEventSDKType {
    denom: string;
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
export declare const RaffleWinnerEvent: {
    encode(message: RaffleWinnerEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaffleWinnerEvent;
    fromPartial(object: DeepPartial<RaffleWinnerEvent>): RaffleWinnerEvent;
};
export declare const RaffleLostEvent: {
    encode(message: RaffleLostEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaffleLostEvent;
    fromPartial(object: DeepPartial<RaffleLostEvent>): RaffleLostEvent;
};
export declare const RaffleFinishedEvent: {
    encode(message: RaffleFinishedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaffleFinishedEvent;
    fromPartial(object: DeepPartial<RaffleFinishedEvent>): RaffleFinishedEvent;
};
