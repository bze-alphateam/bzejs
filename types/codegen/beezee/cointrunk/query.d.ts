import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import { Publisher, PublisherSDKType } from "./publisher";
import { Article, ArticleSDKType } from "./article";
import { AnonArticlesCounter, AnonArticlesCounterSDKType } from "./anon_articles_counter";
import * as _m0 from "protobufjs/minimal";
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
    /** params holds all the parameters of this module. */
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
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAcceptedDomainRequest: {
    encode(message: QueryAcceptedDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAcceptedDomainRequest;
    fromJSON(object: any): QueryAcceptedDomainRequest;
    toJSON(message: QueryAcceptedDomainRequest): unknown;
    fromPartial(object: Partial<QueryAcceptedDomainRequest>): QueryAcceptedDomainRequest;
};
export declare const QueryAcceptedDomainResponse: {
    encode(message: QueryAcceptedDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAcceptedDomainResponse;
    fromJSON(object: any): QueryAcceptedDomainResponse;
    toJSON(message: QueryAcceptedDomainResponse): unknown;
    fromPartial(object: Partial<QueryAcceptedDomainResponse>): QueryAcceptedDomainResponse;
};
export declare const QueryPublisherRequest: {
    encode(message: QueryPublisherRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherRequest;
    fromJSON(object: any): QueryPublisherRequest;
    toJSON(message: QueryPublisherRequest): unknown;
    fromPartial(object: Partial<QueryPublisherRequest>): QueryPublisherRequest;
};
export declare const QueryPublisherResponse: {
    encode(message: QueryPublisherResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherResponse;
    fromJSON(object: any): QueryPublisherResponse;
    toJSON(message: QueryPublisherResponse): unknown;
    fromPartial(object: Partial<QueryPublisherResponse>): QueryPublisherResponse;
};
export declare const QueryPublisherByIndexRequest: {
    encode(message: QueryPublisherByIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherByIndexRequest;
    fromJSON(object: any): QueryPublisherByIndexRequest;
    toJSON(message: QueryPublisherByIndexRequest): unknown;
    fromPartial(object: Partial<QueryPublisherByIndexRequest>): QueryPublisherByIndexRequest;
};
export declare const QueryPublisherByIndexResponse: {
    encode(message: QueryPublisherByIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherByIndexResponse;
    fromJSON(object: any): QueryPublisherByIndexResponse;
    toJSON(message: QueryPublisherByIndexResponse): unknown;
    fromPartial(object: Partial<QueryPublisherByIndexResponse>): QueryPublisherByIndexResponse;
};
export declare const QueryAllArticlesRequest: {
    encode(message: QueryAllArticlesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllArticlesRequest;
    fromJSON(object: any): QueryAllArticlesRequest;
    toJSON(message: QueryAllArticlesRequest): unknown;
    fromPartial(object: Partial<QueryAllArticlesRequest>): QueryAllArticlesRequest;
};
export declare const QueryAllArticlesResponse: {
    encode(message: QueryAllArticlesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllArticlesResponse;
    fromJSON(object: any): QueryAllArticlesResponse;
    toJSON(message: QueryAllArticlesResponse): unknown;
    fromPartial(object: Partial<QueryAllArticlesResponse>): QueryAllArticlesResponse;
};
export declare const QueryAllAnonArticlesCountersRequest: {
    encode(message: QueryAllAnonArticlesCountersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAnonArticlesCountersRequest;
    fromJSON(object: any): QueryAllAnonArticlesCountersRequest;
    toJSON(message: QueryAllAnonArticlesCountersRequest): unknown;
    fromPartial(object: Partial<QueryAllAnonArticlesCountersRequest>): QueryAllAnonArticlesCountersRequest;
};
export declare const QueryAllAnonArticlesCountersResponse: {
    encode(message: QueryAllAnonArticlesCountersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAnonArticlesCountersResponse;
    fromJSON(object: any): QueryAllAnonArticlesCountersResponse;
    toJSON(message: QueryAllAnonArticlesCountersResponse): unknown;
    fromPartial(object: Partial<QueryAllAnonArticlesCountersResponse>): QueryAllAnonArticlesCountersResponse;
};
