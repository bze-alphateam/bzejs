import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import { Publisher, PublisherSDKType } from "./publisher";
import { Article, ArticleSDKType } from "./article";
import { AnonArticlesCounter, AnonArticlesCounterSDKType } from "./anon_articles_counter";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryAcceptedDomainRequest {
    pagination?: PageRequest;
}
export interface QueryAcceptedDomainRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAcceptedDomainResponse {
    acceptedDomain: AcceptedDomain[];
    pagination?: PageResponse;
}
export interface QueryAcceptedDomainResponseSDKType {
    acceptedDomain: AcceptedDomainSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPublisherRequest {
    pagination?: PageRequest;
}
export interface QueryPublisherRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPublisherResponse {
    publisher: Publisher[];
    pagination?: PageResponse;
}
export interface QueryPublisherResponseSDKType {
    publisher: PublisherSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPublisherByIndexRequest {
    index: string;
}
export interface QueryPublisherByIndexRequestSDKType {
    index: string;
}
export interface QueryPublisherByIndexResponse {
    publisher?: Publisher;
}
export interface QueryPublisherByIndexResponseSDKType {
    publisher?: PublisherSDKType;
}
export interface QueryAllArticlesRequest {
    pagination?: PageRequest;
}
export interface QueryAllArticlesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllArticlesResponse {
    article: Article[];
    pagination?: PageResponse;
}
export interface QueryAllArticlesResponseSDKType {
    article: ArticleSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllAnonArticlesCountersRequest {
    pagination?: PageRequest;
}
export interface QueryAllAnonArticlesCountersRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllAnonArticlesCountersResponse {
    AnonArticlesCounters: AnonArticlesCounter[];
    pagination?: PageResponse;
}
export interface QueryAllAnonArticlesCountersResponseSDKType {
    AnonArticlesCounters: AnonArticlesCounterSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAcceptedDomainRequest: {
    encode(message: QueryAcceptedDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAcceptedDomainRequest;
    fromPartial(object: DeepPartial<QueryAcceptedDomainRequest>): QueryAcceptedDomainRequest;
};
export declare const QueryAcceptedDomainResponse: {
    encode(message: QueryAcceptedDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAcceptedDomainResponse;
    fromPartial(object: DeepPartial<QueryAcceptedDomainResponse>): QueryAcceptedDomainResponse;
};
export declare const QueryPublisherRequest: {
    encode(message: QueryPublisherRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherRequest;
    fromPartial(object: DeepPartial<QueryPublisherRequest>): QueryPublisherRequest;
};
export declare const QueryPublisherResponse: {
    encode(message: QueryPublisherResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherResponse;
    fromPartial(object: DeepPartial<QueryPublisherResponse>): QueryPublisherResponse;
};
export declare const QueryPublisherByIndexRequest: {
    encode(message: QueryPublisherByIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherByIndexRequest;
    fromPartial(object: DeepPartial<QueryPublisherByIndexRequest>): QueryPublisherByIndexRequest;
};
export declare const QueryPublisherByIndexResponse: {
    encode(message: QueryPublisherByIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherByIndexResponse;
    fromPartial(object: DeepPartial<QueryPublisherByIndexResponse>): QueryPublisherByIndexResponse;
};
export declare const QueryAllArticlesRequest: {
    encode(message: QueryAllArticlesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllArticlesRequest;
    fromPartial(object: DeepPartial<QueryAllArticlesRequest>): QueryAllArticlesRequest;
};
export declare const QueryAllArticlesResponse: {
    encode(message: QueryAllArticlesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllArticlesResponse;
    fromPartial(object: DeepPartial<QueryAllArticlesResponse>): QueryAllArticlesResponse;
};
export declare const QueryAllAnonArticlesCountersRequest: {
    encode(message: QueryAllAnonArticlesCountersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAnonArticlesCountersRequest;
    fromPartial(object: DeepPartial<QueryAllAnonArticlesCountersRequest>): QueryAllAnonArticlesCountersRequest;
};
export declare const QueryAllAnonArticlesCountersResponse: {
    encode(message: QueryAllAnonArticlesCountersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAnonArticlesCountersResponse;
    fromPartial(object: DeepPartial<QueryAllAnonArticlesCountersResponse>): QueryAllAnonArticlesCountersResponse;
};
