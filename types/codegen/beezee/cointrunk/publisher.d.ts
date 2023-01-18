import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface Publisher {
    name: string;
    address: string;
    active: boolean;
    articlesCount: number;
    createdAt: Long;
    respect: Long;
}
export interface PublisherSDKType {
    name: string;
    address: string;
    active: boolean;
    articles_count: number;
    created_at: Long;
    respect: Long;
}
export declare const Publisher: {
    encode(message: Publisher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Publisher;
    fromJSON(object: any): Publisher;
    toJSON(message: Publisher): unknown;
    fromPartial(object: Partial<Publisher>): Publisher;
};
