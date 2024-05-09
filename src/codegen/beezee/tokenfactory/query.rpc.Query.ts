import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityRequest, QueryDenomAuthorityResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of QueryDenomAuthority items. */

  denomAuthority(request: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthority = this.denomAuthority.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tokenfactory.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  denomAuthority(request: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponse> {
    const data = QueryDenomAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tokenfactory.v1.Query", "DenomAuthority", data);
    return promise.then(data => QueryDenomAuthorityResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    denomAuthority(request: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponse> {
      return queryService.denomAuthority(request);
    }

  };
};