//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponseSDKType, QueryConfigRequest, QueryConfigResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.counterpartyInfo = this.counterpartyInfo.bind(this);
    this.config = this.config.bind(this);
  }
  /* CounterpartyInfo queries an IBC light counter party info. */
  async counterpartyInfo(params: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponseSDKType> {
    const endpoint = `ibc/core/client/v2/counterparty_info/${params.clientId}`;
    return await this.req.get<QueryCounterpartyInfoResponseSDKType>(endpoint);
  }
  /* Config queries the IBC client v2 configuration for a given client. */
  async config(params: QueryConfigRequest): Promise<QueryConfigResponseSDKType> {
    const endpoint = `ibc/core/client/v2/config/${params.clientId}`;
    return await this.req.get<QueryConfigResponseSDKType>(endpoint);
  }
}