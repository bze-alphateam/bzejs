import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddArticle, MsgPayPublisherRespect } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addArticle(value: MsgAddArticle): {
            typeUrl: string;
            value: Uint8Array;
        };
        payPublisherRespect(value: MsgPayPublisherRespect): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addArticle(value: MsgAddArticle): {
            typeUrl: string;
            value: MsgAddArticle;
        };
        payPublisherRespect(value: MsgPayPublisherRespect): {
            typeUrl: string;
            value: MsgPayPublisherRespect;
        };
    };
    fromPartial: {
        addArticle(value: MsgAddArticle): {
            typeUrl: string;
            value: MsgAddArticle;
        };
        payPublisherRespect(value: MsgPayPublisherRespect): {
            typeUrl: string;
            value: MsgPayPublisherRespect;
        };
    };
};
