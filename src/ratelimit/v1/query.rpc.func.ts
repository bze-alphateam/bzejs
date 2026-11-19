//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponse, QueryRateLimitRequest, QueryRateLimitResponse, QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponse, QueryRateLimitsByChannelOrClientIdRequest, QueryRateLimitsByChannelOrClientIdResponse, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse } from "./query";
/**
 * Queries all rate limits
 * @name getAllRateLimits
 * @package ratelimit.v1
 * @see proto service: ratelimit.v1.AllRateLimits
 */
export const getAllRateLimits = buildQuery<QueryAllRateLimitsRequest, QueryAllRateLimitsResponse>({
  encode: QueryAllRateLimitsRequest.encode,
  decode: QueryAllRateLimitsResponse.decode,
  service: "ratelimit.v1.Query",
  method: "AllRateLimits",
  deps: [QueryAllRateLimitsRequest, QueryAllRateLimitsResponse]
});
/**
 * Queries a specific rate limit by channel ID and denom
 * Ex:
 *  - /ratelimit/{channel_or_client_id}/by_denom?denom={denom}
 * @name getRateLimit
 * @package ratelimit.v1
 * @see proto service: ratelimit.v1.RateLimit
 */
export const getRateLimit = buildQuery<QueryRateLimitRequest, QueryRateLimitResponse>({
  encode: QueryRateLimitRequest.encode,
  decode: QueryRateLimitResponse.decode,
  service: "ratelimit.v1.Query",
  method: "RateLimit",
  deps: [QueryRateLimitRequest, QueryRateLimitResponse]
});
/**
 * Queries all the rate limits for a given chain
 * @name getRateLimitsByChainId
 * @package ratelimit.v1
 * @see proto service: ratelimit.v1.RateLimitsByChainId
 */
export const getRateLimitsByChainId = buildQuery<QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponse>({
  encode: QueryRateLimitsByChainIdRequest.encode,
  decode: QueryRateLimitsByChainIdResponse.decode,
  service: "ratelimit.v1.Query",
  method: "RateLimitsByChainId",
  deps: [QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponse]
});
/**
 * Queries all the rate limits for a given channel ID
 * @name getRateLimitsByChannelOrClientId
 * @package ratelimit.v1
 * @see proto service: ratelimit.v1.RateLimitsByChannelOrClientId
 */
export const getRateLimitsByChannelOrClientId = buildQuery<QueryRateLimitsByChannelOrClientIdRequest, QueryRateLimitsByChannelOrClientIdResponse>({
  encode: QueryRateLimitsByChannelOrClientIdRequest.encode,
  decode: QueryRateLimitsByChannelOrClientIdResponse.decode,
  service: "ratelimit.v1.Query",
  method: "RateLimitsByChannelOrClientId",
  deps: [QueryRateLimitsByChannelOrClientIdRequest, QueryRateLimitsByChannelOrClientIdResponse]
});
/**
 * Queries all blacklisted denoms
 * @name getAllBlacklistedDenoms
 * @package ratelimit.v1
 * @see proto service: ratelimit.v1.AllBlacklistedDenoms
 */
export const getAllBlacklistedDenoms = buildQuery<QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse>({
  encode: QueryAllBlacklistedDenomsRequest.encode,
  decode: QueryAllBlacklistedDenomsResponse.decode,
  service: "ratelimit.v1.Query",
  method: "AllBlacklistedDenoms",
  deps: [QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse]
});
/**
 * Queries all whitelisted address pairs
 * @name getAllWhitelistedAddresses
 * @package ratelimit.v1
 * @see proto service: ratelimit.v1.AllWhitelistedAddresses
 */
export const getAllWhitelistedAddresses = buildQuery<QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse>({
  encode: QueryAllWhitelistedAddressesRequest.encode,
  decode: QueryAllWhitelistedAddressesResponse.decode,
  service: "ratelimit.v1.Query",
  method: "AllWhitelistedAddresses",
  deps: [QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse]
});