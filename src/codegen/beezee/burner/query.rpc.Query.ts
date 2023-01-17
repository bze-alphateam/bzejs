import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  allBurnedCoins(request?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.allBurnedCoins = this.allBurnedCoins.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
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

    allBurnedCoins(request?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponse> {
      return queryService.allBurnedCoins(request);
    }

  };
};