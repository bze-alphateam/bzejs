//@ts-nocheck
import { buildQuery } from "../../../../helper-func-types";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponse, QueryRateLimitRequest, QueryRateLimitResponse, QueryRateLimitsByChainIDRequest, QueryRateLimitsByChainIDResponse, QueryRateLimitsByChannelOrClientIDRequest, QueryRateLimitsByChannelOrClientIDResponse, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse } from "./query";
/**
 * Queries all rate limits
 * @name getAllRateLimits
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.AllRateLimits
 */
export const getAllRateLimits = buildQuery<QueryAllRateLimitsRequest, QueryAllRateLimitsResponse>({
  encode: QueryAllRateLimitsRequest.encode,
  decode: QueryAllRateLimitsResponse.decode,
  service: "ibc.applications.rate_limiting.v1.Query",
  method: "AllRateLimits",
  deps: [QueryAllRateLimitsRequest, QueryAllRateLimitsResponse]
});
/**
 * Queries a specific rate limit by channel ID and denom
 * Ex:
 *  - /ratelimit/{channel_or_client_id}/by_denom?denom={denom}
 * @name getRateLimit
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.RateLimit
 */
export const getRateLimit = buildQuery<QueryRateLimitRequest, QueryRateLimitResponse>({
  encode: QueryRateLimitRequest.encode,
  decode: QueryRateLimitResponse.decode,
  service: "ibc.applications.rate_limiting.v1.Query",
  method: "RateLimit",
  deps: [QueryRateLimitRequest, QueryRateLimitResponse]
});
/**
 * Queries all the rate limits for a given chain
 * @name getRateLimitsByChainID
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.RateLimitsByChainID
 */
export const getRateLimitsByChainID = buildQuery<QueryRateLimitsByChainIDRequest, QueryRateLimitsByChainIDResponse>({
  encode: QueryRateLimitsByChainIDRequest.encode,
  decode: QueryRateLimitsByChainIDResponse.decode,
  service: "ibc.applications.rate_limiting.v1.Query",
  method: "RateLimitsByChainID",
  deps: [QueryRateLimitsByChainIDRequest, QueryRateLimitsByChainIDResponse]
});
/**
 * Queries all the rate limits for a given channel ID
 * @name getRateLimitsByChannelOrClientID
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.RateLimitsByChannelOrClientID
 */
export const getRateLimitsByChannelOrClientID = buildQuery<QueryRateLimitsByChannelOrClientIDRequest, QueryRateLimitsByChannelOrClientIDResponse>({
  encode: QueryRateLimitsByChannelOrClientIDRequest.encode,
  decode: QueryRateLimitsByChannelOrClientIDResponse.decode,
  service: "ibc.applications.rate_limiting.v1.Query",
  method: "RateLimitsByChannelOrClientID",
  deps: [QueryRateLimitsByChannelOrClientIDRequest, QueryRateLimitsByChannelOrClientIDResponse]
});
/**
 * Queries all blacklisted denoms
 * @name getAllBlacklistedDenoms
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.AllBlacklistedDenoms
 */
export const getAllBlacklistedDenoms = buildQuery<QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse>({
  encode: QueryAllBlacklistedDenomsRequest.encode,
  decode: QueryAllBlacklistedDenomsResponse.decode,
  service: "ibc.applications.rate_limiting.v1.Query",
  method: "AllBlacklistedDenoms",
  deps: [QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse]
});
/**
 * Queries all whitelisted address pairs
 * @name getAllWhitelistedAddresses
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.AllWhitelistedAddresses
 */
export const getAllWhitelistedAddresses = buildQuery<QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse>({
  encode: QueryAllWhitelistedAddressesRequest.encode,
  decode: QueryAllWhitelistedAddressesResponse.decode,
  service: "ibc.applications.rate_limiting.v1.Query",
  method: "AllWhitelistedAddresses",
  deps: [QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse]
});