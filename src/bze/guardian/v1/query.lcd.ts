//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBlockedDenomsRequest, QueryBlockedDenomsResponseSDKType, QueryAutomationPausedRequest, QueryAutomationPausedResponseSDKType, QueryClosedChannelsRequest, QueryClosedChannelsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.blockedDenoms = this.blockedDenoms.bind(this);
    this.automationPaused = this.automationPaused.bind(this);
    this.closedChannels = this.closedChannels.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/guardian/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* BlockedDenoms lists the denoms on the rate limit module's blacklist. */
  async blockedDenoms(_params: QueryBlockedDenomsRequest = {}): Promise<QueryBlockedDenomsResponseSDKType> {
    const endpoint = `bze/guardian/v1/blocked_denoms`;
    return await this.req.get<QueryBlockedDenomsResponseSDKType>(endpoint);
  }
  /* AutomationPaused tells whether the protocol automation is paused. */
  async automationPaused(_params: QueryAutomationPausedRequest = {}): Promise<QueryAutomationPausedResponseSDKType> {
    const endpoint = `bze/guardian/v1/automation_paused`;
    return await this.req.get<QueryAutomationPausedResponseSDKType>(endpoint);
  }
  /* ClosedChannels lists the transfer channels closed by the guardian or governance. */
  async closedChannels(_params: QueryClosedChannelsRequest = {}): Promise<QueryClosedChannelsResponseSDKType> {
    const endpoint = `bze/guardian/v1/closed_channels`;
    return await this.req.get<QueryClosedChannelsResponseSDKType>(endpoint);
  }
}