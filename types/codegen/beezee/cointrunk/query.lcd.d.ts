import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAcceptedDomainRequest, QueryAcceptedDomainResponseSDKType, QueryPublisherRequest, QueryPublisherResponseSDKType, QueryPublisherByIndexRequest, QueryPublisherByIndexResponseSDKType, QueryAllArticlesRequest, QueryAllArticlesResponseSDKType, QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    acceptedDomain(params?: QueryAcceptedDomainRequest): Promise<QueryAcceptedDomainResponseSDKType>;
    publisher(params?: QueryPublisherRequest): Promise<QueryPublisherResponseSDKType>;
    publisherByIndex(params: QueryPublisherByIndexRequest): Promise<QueryPublisherByIndexResponseSDKType>;
    allArticles(params?: QueryAllArticlesRequest): Promise<QueryAllArticlesResponseSDKType>;
    allAnonArticlesCounters(params?: QueryAllAnonArticlesCountersRequest): Promise<QueryAllAnonArticlesCountersResponseSDKType>;
}
