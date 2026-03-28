//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityRequest, QueryDenomAuthorityResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.tokenfactory.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Queries the DenomAuthority of a denom
 * @name getDenomAuthority
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.DenomAuthority
 */
export const getDenomAuthority = buildQuery<QueryDenomAuthorityRequest, QueryDenomAuthorityResponse>({
  encode: QueryDenomAuthorityRequest.encode,
  decode: QueryDenomAuthorityResponse.decode,
  service: "bze.tokenfactory.Query",
  method: "DenomAuthority",
  deps: [QueryDenomAuthorityRequest, QueryDenomAuthorityResponse]
});