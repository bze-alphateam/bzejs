import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgFundBurner {
    creator: string;
    amount: string;
}
export interface MsgFundBurnerSDKType {
    creator: string;
    amount: string;
}
export interface MsgFundBurnerResponse {
}
export interface MsgFundBurnerResponseSDKType {
}
export interface MsgStartRaffle {
    creator: string;
    pot: string;
    duration: string;
    chances: string;
    ratio: string;
    ticketPrice: string;
    denom: string;
}
export interface MsgStartRaffleSDKType {
    creator: string;
    pot: string;
    duration: string;
    chances: string;
    ratio: string;
    ticket_price: string;
    denom: string;
}
export interface MsgStartRaffleResponse {
}
export interface MsgStartRaffleResponseSDKType {
}
export interface MsgJoinRaffle {
    creator: string;
    denom: string;
}
export interface MsgJoinRaffleSDKType {
    creator: string;
    denom: string;
}
export interface MsgJoinRaffleResponse {
}
export interface MsgJoinRaffleResponseSDKType {
}
export declare const MsgFundBurner: {
    encode(message: MsgFundBurner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundBurner;
    fromPartial(object: DeepPartial<MsgFundBurner>): MsgFundBurner;
};
export declare const MsgFundBurnerResponse: {
    encode(_: MsgFundBurnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundBurnerResponse;
    fromPartial(_: DeepPartial<MsgFundBurnerResponse>): MsgFundBurnerResponse;
};
export declare const MsgStartRaffle: {
    encode(message: MsgStartRaffle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRaffle;
    fromPartial(object: DeepPartial<MsgStartRaffle>): MsgStartRaffle;
};
export declare const MsgStartRaffleResponse: {
    encode(_: MsgStartRaffleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRaffleResponse;
    fromPartial(_: DeepPartial<MsgStartRaffleResponse>): MsgStartRaffleResponse;
};
export declare const MsgJoinRaffle: {
    encode(message: MsgJoinRaffle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinRaffle;
    fromPartial(object: DeepPartial<MsgJoinRaffle>): MsgJoinRaffle;
};
export declare const MsgJoinRaffleResponse: {
    encode(_: MsgJoinRaffleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinRaffleResponse;
    fromPartial(_: DeepPartial<MsgJoinRaffleResponse>): MsgJoinRaffleResponse;
};
