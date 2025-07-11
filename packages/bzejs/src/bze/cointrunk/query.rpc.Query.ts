//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAcceptedDomainRequest, QueryAcceptedDomainResponse, QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponse, QueryAllArticlesRequest, QueryAllArticlesResponse, QueryPublishersRequest, QueryPublishersResponse, QueryPublisherRequest, QueryPublisherResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of AcceptedDomain items. */
  acceptedDomain(request?: QueryAcceptedDomainRequest): Promise<QueryAcceptedDomainResponse>;
  /** Queries a list of AllAnonArticlesCounters items. */
  allAnonArticlesCounters(request?: QueryAllAnonArticlesCountersRequest): Promise<QueryAllAnonArticlesCountersResponse>;
  /** Queries a list of AllArticles items. */
  allArticles(request?: QueryAllArticlesRequest): Promise<QueryAllArticlesResponse>;
  /** Queries a list of Publishers items. */
  publishers(request?: QueryPublishersRequest): Promise<QueryPublishersResponse>;
  /** Queries a list of Publisher items. */
  publisher(request: QueryPublisherRequest): Promise<QueryPublisherResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.acceptedDomain = this.acceptedDomain.bind(this);
    this.allAnonArticlesCounters = this.allAnonArticlesCounters.bind(this);
    this.allArticles = this.allArticles.bind(this);
    this.publishers = this.publishers.bind(this);
    this.publisher = this.publisher.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  acceptedDomain(request: QueryAcceptedDomainRequest = {
    pagination: undefined
  }): Promise<QueryAcceptedDomainResponse> {
    const data = QueryAcceptedDomainRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Query", "AcceptedDomain", data);
    return promise.then(data => QueryAcceptedDomainResponse.decode(new BinaryReader(data)));
  }
  allAnonArticlesCounters(request: QueryAllAnonArticlesCountersRequest = {
    pagination: undefined
  }): Promise<QueryAllAnonArticlesCountersResponse> {
    const data = QueryAllAnonArticlesCountersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Query", "AllAnonArticlesCounters", data);
    return promise.then(data => QueryAllAnonArticlesCountersResponse.decode(new BinaryReader(data)));
  }
  allArticles(request: QueryAllArticlesRequest = {
    pagination: undefined
  }): Promise<QueryAllArticlesResponse> {
    const data = QueryAllArticlesRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Query", "AllArticles", data);
    return promise.then(data => QueryAllArticlesResponse.decode(new BinaryReader(data)));
  }
  publishers(request: QueryPublishersRequest = {
    pagination: undefined
  }): Promise<QueryPublishersResponse> {
    const data = QueryPublishersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Query", "Publishers", data);
    return promise.then(data => QueryPublishersResponse.decode(new BinaryReader(data)));
  }
  publisher(request: QueryPublisherRequest): Promise<QueryPublisherResponse> {
    const data = QueryPublisherRequest.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Query", "Publisher", data);
    return promise.then(data => QueryPublisherResponse.decode(new BinaryReader(data)));
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
    allAnonArticlesCounters(request?: QueryAllAnonArticlesCountersRequest): Promise<QueryAllAnonArticlesCountersResponse> {
      return queryService.allAnonArticlesCounters(request);
    },
    allArticles(request?: QueryAllArticlesRequest): Promise<QueryAllArticlesResponse> {
      return queryService.allArticles(request);
    },
    publishers(request?: QueryPublishersRequest): Promise<QueryPublishersResponse> {
      return queryService.publishers(request);
    },
    publisher(request: QueryPublisherRequest): Promise<QueryPublisherResponse> {
      return queryService.publisher(request);
    }
  };
};