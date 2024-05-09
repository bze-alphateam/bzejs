import { Params, ParamsSDKType } from "./params";
import { Publisher, PublisherSDKType } from "./publisher";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import { Article, ArticleSDKType } from "./article";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** GenesisState defines the cointrunk module's genesis state. */
export interface GenesisState {
    params?: Params;
    publisherList: Publisher[];
    acceptedDomainList: AcceptedDomain[];
    articleList: Article[];
    articlesCounter: Long;
}
/** GenesisState defines the cointrunk module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    publisher_list: PublisherSDKType[];
    accepted_domain_list: AcceptedDomainSDKType[];
    article_list: ArticleSDKType[];
    articles_counter: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
