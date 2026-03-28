//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryAcceptedDomainRequest, QueryAcceptedDomainResponse, QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponse, QueryAllArticlesRequest, QueryAllArticlesResponse, QueryPublishersRequest, QueryPublishersResponse, QueryPublisherRequest, QueryPublisherResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.cointrunk.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Queries a list of AcceptedDomain items.
 * @name getAcceptedDomain
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.AcceptedDomain
 */
export const getAcceptedDomain = buildQuery<QueryAcceptedDomainRequest, QueryAcceptedDomainResponse>({
  encode: QueryAcceptedDomainRequest.encode,
  decode: QueryAcceptedDomainResponse.decode,
  service: "bze.cointrunk.Query",
  method: "AcceptedDomain",
  deps: [QueryAcceptedDomainRequest, QueryAcceptedDomainResponse]
});
/**
 * Queries a list of AllAnonArticlesCounters items.
 * @name getAllAnonArticlesCounters
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.AllAnonArticlesCounters
 */
export const getAllAnonArticlesCounters = buildQuery<QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponse>({
  encode: QueryAllAnonArticlesCountersRequest.encode,
  decode: QueryAllAnonArticlesCountersResponse.decode,
  service: "bze.cointrunk.Query",
  method: "AllAnonArticlesCounters",
  deps: [QueryAllAnonArticlesCountersRequest, QueryAllAnonArticlesCountersResponse]
});
/**
 * Queries a list of AllArticles items.
 * @name getAllArticles
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.AllArticles
 */
export const getAllArticles = buildQuery<QueryAllArticlesRequest, QueryAllArticlesResponse>({
  encode: QueryAllArticlesRequest.encode,
  decode: QueryAllArticlesResponse.decode,
  service: "bze.cointrunk.Query",
  method: "AllArticles",
  deps: [QueryAllArticlesRequest, QueryAllArticlesResponse]
});
/**
 * Queries a list of Publishers items.
 * @name getPublishers
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.Publishers
 */
export const getPublishers = buildQuery<QueryPublishersRequest, QueryPublishersResponse>({
  encode: QueryPublishersRequest.encode,
  decode: QueryPublishersResponse.decode,
  service: "bze.cointrunk.Query",
  method: "Publishers",
  deps: [QueryPublishersRequest, QueryPublishersResponse]
});
/**
 * Queries a list of Publisher items.
 * @name getPublisher
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.Publisher
 */
export const getPublisher = buildQuery<QueryPublisherRequest, QueryPublisherResponse>({
  encode: QueryPublisherRequest.encode,
  decode: QueryPublisherResponse.decode,
  service: "bze.cointrunk.Query",
  method: "Publisher",
  deps: [QueryPublisherRequest, QueryPublisherResponse]
});