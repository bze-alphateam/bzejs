//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGetCountRequest, QueryGetCountResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** GetCount queries the parameters of x/Counter module. */
  getCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getCount = this.getCount.bind(this);
  }
  getCount(request: QueryGetCountRequest = {}): Promise<QueryGetCountResponse> {
    const data = QueryGetCountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.counter.v1.Query", "GetCount", data);
    return promise.then(data => QueryGetCountResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse> {
      return queryService.getCount(request);
    }
  };
};