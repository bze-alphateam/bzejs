//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityRequest, QueryDenomAuthorityResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries the DenomAuthority of a denom */
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
    const promise = this.rpc.request("bze.tokenfactory.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  denomAuthority(request: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponse> {
    const data = QueryDenomAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("bze.tokenfactory.Query", "DenomAuthority", data);
    return promise.then(data => QueryDenomAuthorityResponse.decode(new BinaryReader(data)));
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