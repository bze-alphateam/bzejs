//@ts-nocheck
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponse, QueryRateLimitRequest, QueryRateLimitResponse, QueryRateLimitsByChainIDRequest, QueryRateLimitsByChainIDResponse, QueryRateLimitsByChannelOrClientIDRequest, QueryRateLimitsByChannelOrClientIDResponse, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries all rate limits */
  allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse>;
  /**
   * Queries a specific rate limit by channel ID and denom
   * Ex:
   *  - /ratelimit/{channel_or_client_id}/by_denom?denom={denom}
   */
  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
  /** Queries all the rate limits for a given chain */
  rateLimitsByChainID(request: QueryRateLimitsByChainIDRequest): Promise<QueryRateLimitsByChainIDResponse>;
  /** Queries all the rate limits for a given channel ID */
  rateLimitsByChannelOrClientID(request: QueryRateLimitsByChannelOrClientIDRequest): Promise<QueryRateLimitsByChannelOrClientIDResponse>;
  /** Queries all blacklisted denoms */
  allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse>;
  /** Queries all whitelisted address pairs */
  allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allRateLimits = this.allRateLimits.bind(this);
    this.rateLimit = this.rateLimit.bind(this);
    this.rateLimitsByChainID = this.rateLimitsByChainID.bind(this);
    this.rateLimitsByChannelOrClientID = this.rateLimitsByChannelOrClientID.bind(this);
    this.allBlacklistedDenoms = this.allBlacklistedDenoms.bind(this);
    this.allWhitelistedAddresses = this.allWhitelistedAddresses.bind(this);
  }
  allRateLimits(request: QueryAllRateLimitsRequest = {}): Promise<QueryAllRateLimitsResponse> {
    const data = QueryAllRateLimitsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Query", "AllRateLimits", data);
    return promise.then(data => QueryAllRateLimitsResponse.decode(new BinaryReader(data)));
  }
  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
    const data = QueryRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Query", "RateLimit", data);
    return promise.then(data => QueryRateLimitResponse.decode(new BinaryReader(data)));
  }
  rateLimitsByChainID(request: QueryRateLimitsByChainIDRequest): Promise<QueryRateLimitsByChainIDResponse> {
    const data = QueryRateLimitsByChainIDRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Query", "RateLimitsByChainID", data);
    return promise.then(data => QueryRateLimitsByChainIDResponse.decode(new BinaryReader(data)));
  }
  rateLimitsByChannelOrClientID(request: QueryRateLimitsByChannelOrClientIDRequest): Promise<QueryRateLimitsByChannelOrClientIDResponse> {
    const data = QueryRateLimitsByChannelOrClientIDRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Query", "RateLimitsByChannelOrClientID", data);
    return promise.then(data => QueryRateLimitsByChannelOrClientIDResponse.decode(new BinaryReader(data)));
  }
  allBlacklistedDenoms(request: QueryAllBlacklistedDenomsRequest = {}): Promise<QueryAllBlacklistedDenomsResponse> {
    const data = QueryAllBlacklistedDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Query", "AllBlacklistedDenoms", data);
    return promise.then(data => QueryAllBlacklistedDenomsResponse.decode(new BinaryReader(data)));
  }
  allWhitelistedAddresses(request: QueryAllWhitelistedAddressesRequest = {}): Promise<QueryAllWhitelistedAddressesResponse> {
    const data = QueryAllWhitelistedAddressesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.rate_limiting.v1.Query", "AllWhitelistedAddresses", data);
    return promise.then(data => QueryAllWhitelistedAddressesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse> {
      return queryService.allRateLimits(request);
    },
    rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
      return queryService.rateLimit(request);
    },
    rateLimitsByChainID(request: QueryRateLimitsByChainIDRequest): Promise<QueryRateLimitsByChainIDResponse> {
      return queryService.rateLimitsByChainID(request);
    },
    rateLimitsByChannelOrClientID(request: QueryRateLimitsByChannelOrClientIDRequest): Promise<QueryRateLimitsByChannelOrClientIDResponse> {
      return queryService.rateLimitsByChannelOrClientID(request);
    },
    allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse> {
      return queryService.allBlacklistedDenoms(request);
    },
    allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse> {
      return queryService.allWhitelistedAddresses(request);
    }
  };
};