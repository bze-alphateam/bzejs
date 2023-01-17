import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.acceptedDomain = this.acceptedDomain.bind(this);
    this.publisher = this.publisher.bind(this);
    this.publisherByIndex = this.publisherByIndex.bind(this);
    this.allArticles = this.allArticles.bind(this);
    this.allAnonArticlesCounters = this.allAnonArticlesCounters.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  acceptedDomain(request: QueryAcceptedDomainRequest = {
    pagination: undefined
  }): Promise<QueryAcceptedDomainResponse> {
    const data = QueryAcceptedDomainRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Query", "AcceptedDomain", data);
    return promise.then(data => QueryAcceptedDomainResponse.decode(new _m0.Reader(data)));
  }

  publisher(request: QueryPublisherRequest = {
    pagination: undefined
  }): Promise<QueryPublisherResponse> {
    const data = QueryPublisherRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Query", "Publisher", data);
    return promise.then(data => QueryPublisherResponse.decode(new _m0.Reader(data)));
  }

  publisherByIndex(request: QueryPublisherByIndexRequest): Promise<QueryPublisherByIndexResponse> {
    const data = QueryPublisherByIndexRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Query", "PublisherByIndex", data);
    return promise.then(data => QueryPublisherByIndexResponse.decode(new _m0.Reader(data)));
  }

  allArticles(request: QueryAllArticlesRequest = {
    pagination: undefined
  }): Promise<QueryAllArticlesResponse> {
    const data = QueryAllArticlesRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Query", "AllArticles", data);
    return promise.then(data => QueryAllArticlesResponse.decode(new _m0.Reader(data)));
  }

  allAnonArticlesCounters(request: QueryAllAnonArticlesCountersRequest = {
    pagination: undefined
  }): Promise<QueryAllAnonArticlesCountersResponse> {
    const data = QueryAllAnonArticlesCountersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Query", "AllAnonArticlesCounters", data);
    return promise.then(data => QueryAllAnonArticlesCountersResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    acceptedDomain(request?: QueryAcceptedDomainRequest): Promise<QueryAcceptedDomainResponse> {
      return queryService.acceptedDomain(request);
    },

    publisher(request?: QueryPublisherRequest): Promise<QueryPublisherResponse> {
      return queryService.publisher(request);
    },

    publisherByIndex(request: QueryPublisherByIndexRequest): Promise<QueryPublisherByIndexResponse> {
      return queryService.publisherByIndex(request);
    },

    allArticles(request?: QueryAllArticlesRequest): Promise<QueryAllArticlesResponse> {
      return queryService.allArticles(request);
    },

    allAnonArticlesCounters(request?: QueryAllAnonArticlesCountersRequest): Promise<QueryAllAnonArticlesCountersResponse> {
      return queryService.allAnonArticlesCounters(request);
    }

  };
};