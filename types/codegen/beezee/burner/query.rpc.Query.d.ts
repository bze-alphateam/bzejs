import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    allBurnedCoins(request?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    allBurnedCoins(request?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    allBurnedCoins(request?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponse>;
};
