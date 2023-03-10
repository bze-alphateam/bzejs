import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    allBurnedCoins(params?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponseSDKType>;
}
