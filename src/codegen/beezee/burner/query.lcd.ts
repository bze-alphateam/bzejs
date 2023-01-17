import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.allBurnedCoins = this.allBurnedCoins.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/burner/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AllBurnedCoins */


  async allBurnedCoins(params: QueryAllBurnedCoinsRequest = {
    pagination: undefined
  }): Promise<QueryAllBurnedCoinsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/burner/v1/all_burned_coins`;
    return await this.req.get<QueryAllBurnedCoinsResponseSDKType>(endpoint, options);
  }

}