//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/**
 * @name getEpochInfos
 * @package bze.epochs
 * @see proto service: bze.epochs.EpochInfos
 */
export const getEpochInfos = buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  encode: QueryEpochsInfoRequest.encode,
  decode: QueryEpochsInfoResponse.decode,
  service: "bze.epochs.Query",
  method: "EpochInfos",
  deps: [QueryEpochsInfoRequest, QueryEpochsInfoResponse]
});
/**
 * @name getCurrentEpoch
 * @package bze.epochs
 * @see proto service: bze.epochs.CurrentEpoch
 */
export const getCurrentEpoch = buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "bze.epochs.Query",
  method: "CurrentEpoch",
  deps: [QueryCurrentEpochRequest, QueryCurrentEpochResponse]
});