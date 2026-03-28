//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAcceptedDomainRequest, QueryAcceptedDomainResponseSDKType, QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponseSDKType, QueryAllArticlesRequest, QueryAllArticlesResponseSDKType, QueryPublishersRequest, QueryPublishersResponseSDKType, QueryPublisherRequest, QueryPublisherResponseSDKType } from "./query";
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
    this.allAnonArticlesCounters = this.allAnonArticlesCounters.bind(this);
    this.allArticles = this.allArticles.bind(this);
    this.publishers = this.publishers.bind(this);
    this.publisher = this.publisher.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/cointrunk/params`;
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
    const endpoint = `bze/cointrunk/accepted_domain`;
    return await this.req.get<QueryAcceptedDomainResponseSDKType>(endpoint, options);
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
    const endpoint = `bze/cointrunk/all_anon_articles_counters`;
    return await this.req.get<QueryAllAnonArticlesCountersResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AllArticles items. */
  async allArticles(params: QueryAllArticlesRequest = {
    pagination: undefined
  }): Promise<QueryAllArticlesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/cointrunk/all_articles`;
    return await this.req.get<QueryAllArticlesResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Publishers items. */
  async publishers(params: QueryPublishersRequest = {
    pagination: undefined
  }): Promise<QueryPublishersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/cointrunk/publishers`;
    return await this.req.get<QueryPublishersResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Publisher items. */
  async publisher(params: QueryPublisherRequest): Promise<QueryPublisherResponseSDKType> {
    const endpoint = `bze/cointrunk/publisher/${params.address}`;
    return await this.req.get<QueryPublisherResponseSDKType>(endpoint);
  }
}