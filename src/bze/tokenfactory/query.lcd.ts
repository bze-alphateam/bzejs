//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityRequest, QueryDenomAuthorityResponseSDKType, QueryDenomBrandingRequest, QueryDenomBrandingResponseSDKType, QueryAllDenomBrandingRequest, QueryAllDenomBrandingResponseSDKType } from "./query";
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
    this.denomBranding = this.denomBranding.bind(this);
    this.allDenomBranding = this.allDenomBranding.bind(this);
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
  /* Queries the branding package of a denom */
  async denomBranding(params: QueryDenomBrandingRequest): Promise<QueryDenomBrandingResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `bze/tokenfactory/denom_branding`;
    return await this.req.get<QueryDenomBrandingResponseSDKType>(endpoint, options);
  }
  /* Queries the branding packages of all denoms with pagination */
  async allDenomBranding(params: QueryAllDenomBrandingRequest = {
    pagination: undefined
  }): Promise<QueryAllDenomBrandingResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/tokenfactory/all_denom_branding`;
    return await this.req.get<QueryAllDenomBrandingResponseSDKType>(endpoint, options);
  }
}