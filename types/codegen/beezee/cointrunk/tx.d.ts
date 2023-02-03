import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface MsgAddArticle {
    publisher: string;
    title: string;
    url: string;
    picture: string;
}
export interface MsgAddArticleSDKType {
    publisher: string;
    title: string;
    url: string;
    picture: string;
}
export interface MsgAddArticleResponse {
}
export interface MsgAddArticleResponseSDKType {
}
export interface MsgPayPublisherRespect {
    creator: string;
    address: string;
    amount: string;
}
export interface MsgPayPublisherRespectSDKType {
    creator: string;
    address: string;
    amount: string;
}
export interface MsgPayPublisherRespectResponse {
    respectPaid: Long;
    publisherReward: Long;
    communityPoolFunds: Long;
}
export interface MsgPayPublisherRespectResponseSDKType {
    respect_paid: Long;
    publisher_reward: Long;
    community_pool_funds: Long;
}
export declare const MsgAddArticle: {
    encode(message: MsgAddArticle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArticle;
    fromPartial(object: DeepPartial<MsgAddArticle>): MsgAddArticle;
};
export declare const MsgAddArticleResponse: {
    encode(_: MsgAddArticleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArticleResponse;
    fromPartial(_: DeepPartial<MsgAddArticleResponse>): MsgAddArticleResponse;
};
export declare const MsgPayPublisherRespect: {
    encode(message: MsgPayPublisherRespect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPublisherRespect;
    fromPartial(object: DeepPartial<MsgPayPublisherRespect>): MsgPayPublisherRespect;
};
export declare const MsgPayPublisherRespectResponse: {
    encode(message: MsgPayPublisherRespectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPublisherRespectResponse;
    fromPartial(object: DeepPartial<MsgPayPublisherRespectResponse>): MsgPayPublisherRespectResponse;
};
