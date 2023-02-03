import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundBurner } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        fundBurner(value: MsgFundBurner): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        fundBurner(value: MsgFundBurner): {
            typeUrl: string;
            value: MsgFundBurner;
        };
    };
    fromPartial: {
        fundBurner(value: MsgFundBurner): {
            typeUrl: string;
            value: MsgFundBurner;
        };
    };
};
