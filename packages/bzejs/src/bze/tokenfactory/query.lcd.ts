//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityRequest, QueryDenomAuthorityResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.denomAuthority = this.denomAuthority.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/tokenfactory/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries the DenomAuthority of a denom */
  async denomAuthority(params: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `bze/tokenfactory/denom_authority`;
    return await this.req.get<QueryDenomAuthorityResponseSDKType>(endpoint, options);
  }
}