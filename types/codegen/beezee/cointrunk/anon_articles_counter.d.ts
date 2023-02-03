import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
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
    fromPartial(object: DeepPartial<AnonArticlesCounter>): AnonArticlesCounter;
};
