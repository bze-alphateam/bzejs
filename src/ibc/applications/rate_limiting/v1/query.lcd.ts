//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponseSDKType, QueryRateLimitRequest, QueryRateLimitResponseSDKType, QueryRateLimitsByChainIDRequest, QueryRateLimitsByChainIDResponseSDKType, QueryRateLimitsByChannelOrClientIDRequest, QueryRateLimitsByChannelOrClientIDResponseSDKType, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponseSDKType, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponseSDKType } from "./query";
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
    this.rateLimitsByChainID = this.rateLimitsByChainID.bind(this);
    this.rateLimitsByChannelOrClientID = this.rateLimitsByChannelOrClientID.bind(this);
    this.allBlacklistedDenoms = this.allBlacklistedDenoms.bind(this);
    this.allWhitelistedAddresses = this.allWhitelistedAddresses.bind(this);
  }
  /* Queries all rate limits */
  async allRateLimits(_params: QueryAllRateLimitsRequest = {}): Promise<QueryAllRateLimitsResponseSDKType> {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimits`;
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
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/ratelimit/${params.channelOrClientId}/by_denom`;
    return await this.req.get<QueryRateLimitResponseSDKType>(endpoint, options);
  }
  /* Queries all the rate limits for a given chain */
  async rateLimitsByChainID(params: QueryRateLimitsByChainIDRequest): Promise<QueryRateLimitsByChainIDResponseSDKType> {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/ratelimits/${params.chainId}`;
    return await this.req.get<QueryRateLimitsByChainIDResponseSDKType>(endpoint);
  }
  /* Queries all the rate limits for a given channel ID */
  async rateLimitsByChannelOrClientID(params: QueryRateLimitsByChannelOrClientIDRequest): Promise<QueryRateLimitsByChannelOrClientIDResponseSDKType> {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/ratelimits/${params.channelOrClientId}`;
    return await this.req.get<QueryRateLimitsByChannelOrClientIDResponseSDKType>(endpoint);
  }
  /* Queries all blacklisted denoms */
  async allBlacklistedDenoms(_params: QueryAllBlacklistedDenomsRequest = {}): Promise<QueryAllBlacklistedDenomsResponseSDKType> {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/blacklisted_denoms`;
    return await this.req.get<QueryAllBlacklistedDenomsResponseSDKType>(endpoint);
  }
  /* Queries all whitelisted address pairs */
  async allWhitelistedAddresses(_params: QueryAllWhitelistedAddressesRequest = {}): Promise<QueryAllWhitelistedAddressesResponseSDKType> {
    const endpoint = `ibc/apps/rate-limiting/v1/ratelimit/whitelisted_addresses`;
    return await this.req.get<QueryAllWhitelistedAddressesResponseSDKType>(endpoint);
  }
}