//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBlockedDenomsRequest, QueryBlockedDenomsResponse, QueryAutomationPausedRequest, QueryAutomationPausedResponse, QueryClosedChannelsRequest, QueryClosedChannelsResponse } from "./query";
/**
 * Params queries the parameters of the module.
 * @name getParams
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.guardian.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * BlockedDenoms lists the denoms on the rate limit module's blacklist.
 * @name getBlockedDenoms
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.BlockedDenoms
 */
export const getBlockedDenoms = buildQuery<QueryBlockedDenomsRequest, QueryBlockedDenomsResponse>({
  encode: QueryBlockedDenomsRequest.encode,
  decode: QueryBlockedDenomsResponse.decode,
  service: "bze.guardian.v1.Query",
  method: "BlockedDenoms",
  deps: [QueryBlockedDenomsRequest, QueryBlockedDenomsResponse]
});
/**
 * AutomationPaused tells whether the protocol automation is paused.
 * @name getAutomationPaused
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.AutomationPaused
 */
export const getAutomationPaused = buildQuery<QueryAutomationPausedRequest, QueryAutomationPausedResponse>({
  encode: QueryAutomationPausedRequest.encode,
  decode: QueryAutomationPausedResponse.decode,
  service: "bze.guardian.v1.Query",
  method: "AutomationPaused",
  deps: [QueryAutomationPausedRequest, QueryAutomationPausedResponse]
});
/**
 * ClosedChannels lists the transfer channels closed by the guardian or governance.
 * @name getClosedChannels
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.ClosedChannels
 */
export const getClosedChannels = buildQuery<QueryClosedChannelsRequest, QueryClosedChannelsResponse>({
  encode: QueryClosedChannelsRequest.encode,
  decode: QueryClosedChannelsResponse.decode,
  service: "bze.guardian.v1.Query",
  method: "ClosedChannels",
  deps: [QueryClosedChannelsRequest, QueryClosedChannelsResponse]
});