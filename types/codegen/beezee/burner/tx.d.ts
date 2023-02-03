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
