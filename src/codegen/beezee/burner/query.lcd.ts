import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRafflesRequest, QueryRafflesResponseSDKType, QueryRaffleWinnersRequest, QueryRaffleWinnersResponseSDKType, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.raffles = this.raffles.bind(this);
    this.raffleWinners = this.raffleWinners.bind(this);
    this.allBurnedCoins = this.allBurnedCoins.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/burner/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Raffles items. */


  async raffles(params: QueryRafflesRequest = {
    pagination: undefined
  }): Promise<QueryRafflesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/burner/v1/raffles`;
    return await this.req.get<QueryRafflesResponseSDKType>(endpoint, options);
  }
  /* Queries a list of RaffleWinners items. */


  async raffleWinners(params: QueryRaffleWinnersRequest): Promise<QueryRaffleWinnersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bze/burner/v1/raffle_winners`;
    return await this.req.get<QueryRaffleWinnersResponseSDKType>(endpoint, options);
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