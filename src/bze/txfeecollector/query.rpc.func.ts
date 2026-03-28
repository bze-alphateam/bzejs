//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package bze.txfeecollector
 * @see proto service: bze.txfeecollector.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.txfeecollector.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});