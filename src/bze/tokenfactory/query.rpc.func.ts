//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityRequest, QueryDenomAuthorityResponse, QueryDenomBrandingRequest, QueryDenomBrandingResponse, QueryAllDenomBrandingRequest, QueryAllDenomBrandingResponse } from "./query";
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
/**
 * Queries the branding package of a denom
 * @name getDenomBranding
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.DenomBranding
 */
export const getDenomBranding = buildQuery<QueryDenomBrandingRequest, QueryDenomBrandingResponse>({
  encode: QueryDenomBrandingRequest.encode,
  decode: QueryDenomBrandingResponse.decode,
  service: "bze.tokenfactory.Query",
  method: "DenomBranding",
  deps: [QueryDenomBrandingRequest, QueryDenomBrandingResponse]
});
/**
 * Queries the branding packages of all denoms with pagination
 * @name getAllDenomBranding
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.AllDenomBranding
 */
export const getAllDenomBranding = buildQuery<QueryAllDenomBrandingRequest, QueryAllDenomBrandingResponse>({
  encode: QueryAllDenomBrandingRequest.encode,
  decode: QueryAllDenomBrandingResponse.decode,
  service: "bze.tokenfactory.Query",
  method: "AllDenomBranding",
  deps: [QueryAllDenomBrandingRequest, QueryAllDenomBrandingResponse]
});