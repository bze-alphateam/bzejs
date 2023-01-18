import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface Article {
    id: Long;
    title: string;
    url: string;
    picture: string;
    publisher: string;
    paid: boolean;
    createdAt: Long;
}
export interface ArticleSDKType {
    id: Long;
    title: string;
    url: string;
    picture: string;
    publisher: string;
    paid: boolean;
    created_at: Long;
}
export declare const Article: {
    encode(message: Article, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Article;
    fromJSON(object: any): Article;
    toJSON(message: Article): unknown;
    fromPartial(object: Partial<Article>): Article;
};
