import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAcceptedDomainRequest, QueryAcceptedDomainResponseSDKType, QueryPublisherRequest, QueryPublisherResponseSDKType, QueryPublisherByIndexRequest, QueryPublisherByIndexResponseSDKType, QueryAllArticlesRequest, QueryAllArticlesResponseSDKType, QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.acceptedDomain = this.acceptedDomain.bind(this);
    this.publisher = this.publisher.bind(this);
    this.publisherByIndex = this.publisherByIndex.bind(this);
    this.allArticles = this.allArticles.bind(this);
    this.allAnonArticlesCounters = this.allAnonArticlesCounters.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/cointrunk/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of AcceptedDomain items. */


  async acceptedDomain(params: QueryAcceptedDomainRequest = {
    pagination: undefined
  }): Promise<QueryAcceptedDomainResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/cointrunk/v1/accepted_domain`;
    return await this.req.get<QueryAcceptedDomainResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Publisher items. */


  async publisher(params: QueryPublisherRequest = {
    pagination: undefined
  }): Promise<QueryPublisherResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/cointrunk/v1/publishers`;
    return await this.req.get<QueryPublisherResponseSDKType>(endpoint, options);
  }
  /* Queries publisher by index/address. */


  async publisherByIndex(params: QueryPublisherByIndexRequest): Promise<QueryPublisherByIndexResponseSDKType> {
    const endpoint = `bze/cointrunk/v1/publisher/${params.index}`;
    return await this.req.get<QueryPublisherByIndexResponseSDKType>(endpoint);
  }
  /* Queries a list of Article items. */


  async allArticles(params: QueryAllArticlesRequest = {
    pagination: undefined
  }): Promise<QueryAllArticlesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/cointrunk/v1/articles`;
    return await this.req.get<QueryAllArticlesResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllAnonArticlesCounters items. */


  async allAnonArticlesCounters(params: QueryAllAnonArticlesCountersRequest = {
    pagination: undefined
  }): Promise<QueryAllAnonArticlesCountersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/cointrunk/v1/all_anon_articles_counters`;
    return await this.req.get<QueryAllAnonArticlesCountersResponseSDKType>(endpoint, options);
  }

}