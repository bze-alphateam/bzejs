import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
/** Params defines the parameters for the module. */
export interface PublisherRespectParams {
    tax: string;
    denom: string;
}
/** Params defines the parameters for the module. */
export interface PublisherRespectParamsSDKType {
    tax: string;
    denom: string;
}
export interface Params {
    anonArticleLimit: Long;
    anonArticleCost?: Coin;
    publisherRespectParams?: PublisherRespectParams;
}
export interface ParamsSDKType {
    anon_article_limit: Long;
    anon_article_cost?: CoinSDKType;
    publisher_respect_params?: PublisherRespectParamsSDKType;
}
export declare const PublisherRespectParams: {
    encode(message: PublisherRespectParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherRespectParams;
    fromPartial(object: DeepPartial<PublisherRespectParams>): PublisherRespectParams;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
