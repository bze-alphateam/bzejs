//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponseSDKType, QueryRateLimitRequest, QueryRateLimitResponseSDKType, QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponseSDKType, QueryRateLimitsByChannelOrClientIdRequest, QueryRateLimitsByChannelOrClientIdResponseSDKType, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponseSDKType, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.allRateLimits = this.allRateLimits.bind(this);
    this.rateLimit = this.rateLimit.bind(this);
    this.rateLimitsByChainId = this.rateLimitsByChainId.bind(this);
    this.rateLimitsByChannelOrClientId = this.rateLimitsByChannelOrClientId.bind(this);
    this.allBlacklistedDenoms = this.allBlacklistedDenoms.bind(this);
    this.allWhitelistedAddresses = this.allWhitelistedAddresses.bind(this);
  }
  /* Queries all rate limits */
  async allRateLimits(_params: QueryAllRateLimitsRequest = {}): Promise<QueryAllRateLimitsResponseSDKType> {
    const endpoint = `Stride-Labs/ibc-rate-limiting/ratelimit/ratelimits`;
    return await this.req.get<QueryAllRateLimitsResponseSDKType>(endpoint);
  }
  /* Queries a specific rate limit by channel ID and denom
   Ex:
    - /ratelimit/{channel_or_client_id}/by_denom?denom={denom} */
  async rateLimit(params: QueryRateLimitRequest): Promise<QueryRateLimitResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `Stride-Labs/ibc-rate-limiting/ratelimit/ratelimit/${params.channelOrClientId}/by_denom`;
    return await this.req.get<QueryRateLimitResponseSDKType>(endpoint, options);
  }
  /* Queries all the rate limits for a given chain */
  async rateLimitsByChainId(params: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponseSDKType> {
    const endpoint = `Stride-Labs/ibc-rate-limiting/ratelimit/ratelimits/${params.chainId}`;
    return await this.req.get<QueryRateLimitsByChainIdResponseSDKType>(endpoint);
  }
  /* Queries all the rate limits for a given channel ID */
  async rateLimitsByChannelOrClientId(params: QueryRateLimitsByChannelOrClientIdRequest): Promise<QueryRateLimitsByChannelOrClientIdResponseSDKType> {
    const endpoint = `Stride-Labs/ibc-rate-limiting/ratelimit/ratelimits/${params.channelOrClientId}`;
    return await this.req.get<QueryRateLimitsByChannelOrClientIdResponseSDKType>(endpoint);
  }
  /* Queries all blacklisted denoms */
  async allBlacklistedDenoms(_params: QueryAllBlacklistedDenomsRequest = {}): Promise<QueryAllBlacklistedDenomsResponseSDKType> {
    const endpoint = `Stride-Labs/ibc-rate-limiting/ratelimit/blacklisted_denoms`;
    return await this.req.get<QueryAllBlacklistedDenomsResponseSDKType>(endpoint);
  }
  /* Queries all whitelisted address pairs */
  async allWhitelistedAddresses(_params: QueryAllWhitelistedAddressesRequest = {}): Promise<QueryAllWhitelistedAddressesResponseSDKType> {
    const endpoint = `Stride-Labs/ibc-rate-limiting/ratelimit/whitelisted_addresses`;
    return await this.req.get<QueryAllWhitelistedAddressesResponseSDKType>(endpoint);
  }
}