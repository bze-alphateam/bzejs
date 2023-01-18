import * as _m0 from "protobufjs/minimal";
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
export declare const MsgFundBurner: {
    encode(message: MsgFundBurner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundBurner;
    fromJSON(object: any): MsgFundBurner;
    toJSON(message: MsgFundBurner): unknown;
    fromPartial(object: Partial<MsgFundBurner>): MsgFundBurner;
};
export declare const MsgFundBurnerResponse: {
    encode(_: MsgFundBurnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundBurnerResponse;
    fromJSON(_: any): MsgFundBurnerResponse;
    toJSON(_: MsgFundBurnerResponse): unknown;
    fromPartial(_: Partial<MsgFundBurnerResponse>): MsgFundBurnerResponse;
};
