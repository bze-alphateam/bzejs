import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRafflesRequest, QueryRafflesResponse, QueryRaffleWinnersRequest, QueryRaffleWinnersResponse, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Raffles items. */

  raffles(request?: QueryRafflesRequest): Promise<QueryRafflesResponse>;
  /** Queries a list of RaffleWinners items. */

  raffleWinners(request: QueryRaffleWinnersRequest): Promise<QueryRaffleWinnersResponse>;
  allBurnedCoins(request?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.raffles = this.raffles.bind(this);
    this.raffleWinners = this.raffleWinners.bind(this);
    this.allBurnedCoins = this.allBurnedCoins.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  raffles(request: QueryRafflesRequest = {
    pagination: undefined
  }): Promise<QueryRafflesResponse> {
    const data = QueryRafflesRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Query", "Raffles", data);
    return promise.then(data => QueryRafflesResponse.decode(new _m0.Reader(data)));
  }

  raffleWinners(request: QueryRaffleWinnersRequest): Promise<QueryRaffleWinnersResponse> {
    const data = QueryRaffleWinnersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Query", "RaffleWinners", data);
    return promise.then(data => QueryRaffleWinnersResponse.decode(new _m0.Reader(data)));
  }

  allBurnedCoins(request: QueryAllBurnedCoinsRequest = {
    pagination: undefined
  }): Promise<QueryAllBurnedCoinsResponse> {
    const data = QueryAllBurnedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Query", "AllBurnedCoins", data);
    return promise.then(data => QueryAllBurnedCoinsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    raffles(request?: QueryRafflesRequest): Promise<QueryRafflesResponse> {
      return queryService.raffles(request);
    },

    raffleWinners(request: QueryRaffleWinnersRequest): Promise<QueryRaffleWinnersResponse> {
      return queryService.raffleWinners(request);
    },

    allBurnedCoins(request?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponse> {
      return queryService.allBurnedCoins(request);
    }

  };
};