import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityRequest, QueryDenomAuthorityResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomAuthority(params: QueryDenomAuthorityRequest): Promise<QueryDenomAuthorityResponseSDKType>;
}
