import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface AnonArticlesCounter {
    key: string;
    counter: Long;
}
export interface AnonArticlesCounterSDKType {
    key: string;
    counter: Long;
}
export declare const AnonArticlesCounter: {
    encode(message: AnonArticlesCounter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnonArticlesCounter;
    fromJSON(object: any): AnonArticlesCounter;
    toJSON(message: AnonArticlesCounter): unknown;
    fromPartial(object: Partial<AnonArticlesCounter>): AnonArticlesCounter;
};
