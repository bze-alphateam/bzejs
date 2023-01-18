import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAcceptedDomainRequest, QueryAcceptedDomainResponse, QueryPublisherRequest, QueryPublisherResponse, QueryPublisherByIndexRequest, QueryPublisherByIndexResponse, QueryAllArticlesRequest, QueryAllArticlesResponse, QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of AcceptedDomain items. */
    acceptedDomain(request?: QueryAcceptedDomainRequest): Promise<QueryAcceptedDomainResponse>;
    /** Queries a list of Publisher items. */
    publisher(request?: QueryPublisherRequest): Promise<QueryPublisherResponse>;
    /** Queries publisher by index/address. */
    publisherByIndex(request: QueryPublisherByIndexRequest): Promise<QueryPublisherByIndexResponse>;
    /** Queries a list of Article items. */
    allArticles(request?: QueryAllArticlesRequest): Promise<QueryAllArticlesResponse>;
    /** Queries a list of AllAnonArticlesCounters items. */
    allAnonArticlesCounters(request?: QueryAllAnonArticlesCountersRequest): Promise<QueryAllAnonArticlesCountersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    acceptedDomain(request?: QueryAcceptedDomainRequest): Promise<QueryAcceptedDomainResponse>;
    publisher(request?: QueryPublisherRequest): Promise<QueryPublisherResponse>;
    publisherByIndex(request: QueryPublisherByIndexRequest): Promise<QueryPublisherByIndexResponse>;
    allArticles(request?: QueryAllArticlesRequest): Promise<QueryAllArticlesResponse>;
    allAnonArticlesCounters(request?: QueryAllAnonArticlesCountersRequest): Promise<QueryAllAnonArticlesCountersResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    acceptedDomain(request?: QueryAcceptedDomainRequest): Promise<QueryAcceptedDomainResponse>;
    publisher(request?: QueryPublisherRequest): Promise<QueryPublisherResponse>;
    publisherByIndex(request: QueryPublisherByIndexRequest): Promise<QueryPublisherByIndexResponse>;
    allArticles(request?: QueryAllArticlesRequest): Promise<QueryAllArticlesResponse>;
    allAnonArticlesCounters(request?: QueryAllAnonArticlesCountersRequest): Promise<QueryAllAnonArticlesCountersResponse>;
};
