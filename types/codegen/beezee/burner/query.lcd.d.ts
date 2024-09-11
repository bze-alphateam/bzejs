import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRafflesRequest, QueryRafflesResponseSDKType, QueryRaffleWinnersRequest, QueryRaffleWinnersResponseSDKType, QueryAllBurnedCoinsRequest, QueryAllBurnedCoinsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    raffles(params?: QueryRafflesRequest): Promise<QueryRafflesResponseSDKType>;
    raffleWinners(params: QueryRaffleWinnersRequest): Promise<QueryRaffleWinnersResponseSDKType>;
    allBurnedCoins(params?: QueryAllBurnedCoinsRequest): Promise<QueryAllBurnedCoinsResponseSDKType>;
}
