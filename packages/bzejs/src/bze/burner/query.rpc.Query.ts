//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRafflesRequest, QueryRafflesResponse, QueryRaffleWinnersRequest, QueryRaffleWinnersResponse, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  raffles(request?: QueryRafflesRequest): Promise<QueryRafflesResponse>;
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
    const promise = this.rpc.request("bze.burner.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  raffles(request: QueryRafflesRequest = {
    pagination: undefined
  }): Promise<QueryRafflesResponse> {
    const data = QueryRafflesRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.Query", "Raffles", data);
    return promise.then(data => QueryRafflesResponse.decode(new BinaryReader(data)));
  }
  raffleWinners(request: QueryRaffleWinnersRequest): Promise<QueryRaffleWinnersResponse> {
    const data = QueryRaffleWinnersRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.Query", "RaffleWinners", data);
    return promise.then(data => QueryRaffleWinnersResponse.decode(new BinaryReader(data)));
  }
  allBurnedCoins(request: QueryAllBurnedCoinsRequest = {
    pagination: undefined
  }): Promise<QueryAllBurnedCoinsResponse> {
    const data = QueryAllBurnedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.Query", "AllBurnedCoins", data);
    return promise.then(data => QueryAllBurnedCoinsResponse.decode(new BinaryReader(data)));
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