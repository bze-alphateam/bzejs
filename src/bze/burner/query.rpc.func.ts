//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryRafflesRequest, QueryRafflesResponse, QueryRaffleWinnersRequest, QueryRaffleWinnersResponse, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package bze.burner
 * @see proto service: bze.burner.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.burner.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * @name getRaffles
 * @package bze.burner
 * @see proto service: bze.burner.Raffles
 */
export const getRaffles = buildQuery<QueryRafflesRequest, QueryRafflesResponse>({
  encode: QueryRafflesRequest.encode,
  decode: QueryRafflesResponse.decode,
  service: "bze.burner.Query",
  method: "Raffles",
  deps: [QueryRafflesRequest, QueryRafflesResponse]
});
/**
 * @name getRaffleWinners
 * @package bze.burner
 * @see proto service: bze.burner.RaffleWinners
 */
export const getRaffleWinners = buildQuery<QueryRaffleWinnersRequest, QueryRaffleWinnersResponse>({
  encode: QueryRaffleWinnersRequest.encode,
  decode: QueryRaffleWinnersResponse.decode,
  service: "bze.burner.Query",
  method: "RaffleWinners",
  deps: [QueryRaffleWinnersRequest, QueryRaffleWinnersResponse]
});
/**
 * @name getAllBurnedCoins
 * @package bze.burner
 * @see proto service: bze.burner.AllBurnedCoins
 */
export const getAllBurnedCoins = buildQuery<QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponse>({
  encode: QueryAllBurnedCoinsRequest.encode,
  decode: QueryAllBurnedCoinsResponse.decode,
  service: "bze.burner.Query",
  method: "AllBurnedCoins",
  deps: [QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponse]
});