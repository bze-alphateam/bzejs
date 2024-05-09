import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityRequest, QueryDenomAuthorityResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of QueryDenomAuthority items. */
    denomAuthority(request: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthority(request: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthority(request: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponse>;
};
