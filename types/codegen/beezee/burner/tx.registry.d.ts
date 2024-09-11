import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundBurner, MsgStartRaffle, MsgJoinRaffle } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        fundBurner(value: MsgFundBurner): {
            typeUrl: string;
            value: Uint8Array;
        };
        startRaffle(value: MsgStartRaffle): {
            typeUrl: string;
            value: Uint8Array;
        };
        joinRaffle(value: MsgJoinRaffle): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        fundBurner(value: MsgFundBurner): {
            typeUrl: string;
            value: MsgFundBurner;
        };
        startRaffle(value: MsgStartRaffle): {
            typeUrl: string;
            value: MsgStartRaffle;
        };
        joinRaffle(value: MsgJoinRaffle): {
            typeUrl: string;
            value: MsgJoinRaffle;
        };
    };
    fromPartial: {
        fundBurner(value: MsgFundBurner): {
            typeUrl: string;
            value: MsgFundBurner;
        };
        startRaffle(value: MsgStartRaffle): {
            typeUrl: string;
            value: MsgStartRaffle;
        };
        joinRaffle(value: MsgJoinRaffle): {
            typeUrl: string;
            value: MsgJoinRaffle;
        };
    };
};
