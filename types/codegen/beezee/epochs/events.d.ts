import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface EpochStartEvent {
    identifier: string;
    epoch: string;
}
export interface EpochStartEventSDKType {
    identifier: string;
    epoch: string;
}
export interface EpochEndEvent {
    identifier: string;
    epoch: string;
}
export interface EpochEndEventSDKType {
    identifier: string;
    epoch: string;
}
export declare const EpochStartEvent: {
    encode(message: EpochStartEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochStartEvent;
    fromPartial(object: DeepPartial<EpochStartEvent>): EpochStartEvent;
};
export declare const EpochEndEvent: {
    encode(message: EpochEndEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochEndEvent;
    fromPartial(object: DeepPartial<EpochEndEvent>): EpochEndEvent;
};
