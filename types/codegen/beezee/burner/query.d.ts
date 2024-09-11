import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsSDKType } from "./burned_coins";
import { Raffle, RaffleSDKType, RaffleWinner, RaffleWinnerSDKType } from "./raffle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params?: ParamsSDKType;
}
export interface QueryAllBurnedCoinsRequest {
    pagination?: PageRequest;
}
export interface QueryAllBurnedCoinsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllBurnedCoinsResponse {
    burnedCoins: BurnedCoins[];
    pagination?: PageResponse;
}
export interface QueryAllBurnedCoinsResponseSDKType {
    burnedCoins: BurnedCoinsSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryRafflesRequest {
    pagination?: PageRequest;
}
export interface QueryRafflesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryRafflesResponse {
    list: Raffle[];
    pagination?: PageResponse;
}
export interface QueryRafflesResponseSDKType {
    list: RaffleSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryRaffleWinnersRequest {
    denom: string;
    pagination?: PageRequest;
}
export interface QueryRaffleWinnersRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
export interface QueryRaffleWinnersResponse {
    list: RaffleWinner[];
    pagination?: PageResponse;
}
export interface QueryRaffleWinnersResponseSDKType {
    list: RaffleWinnerSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAllBurnedCoinsRequest: {
    encode(message: QueryAllBurnedCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurnedCoinsRequest;
    fromPartial(object: DeepPartial<QueryAllBurnedCoinsRequest>): QueryAllBurnedCoinsRequest;
};
export declare const QueryAllBurnedCoinsResponse: {
    encode(message: QueryAllBurnedCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurnedCoinsResponse;
    fromPartial(object: DeepPartial<QueryAllBurnedCoinsResponse>): QueryAllBurnedCoinsResponse;
};
export declare const QueryRafflesRequest: {
    encode(message: QueryRafflesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRafflesRequest;
    fromPartial(object: DeepPartial<QueryRafflesRequest>): QueryRafflesRequest;
};
export declare const QueryRafflesResponse: {
    encode(message: QueryRafflesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRafflesResponse;
    fromPartial(object: DeepPartial<QueryRafflesResponse>): QueryRafflesResponse;
};
export declare const QueryRaffleWinnersRequest: {
    encode(message: QueryRaffleWinnersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRaffleWinnersRequest;
    fromPartial(object: DeepPartial<QueryRaffleWinnersRequest>): QueryRaffleWinnersRequest;
};
export declare const QueryRaffleWinnersResponse: {
    encode(message: QueryRaffleWinnersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRaffleWinnersResponse;
    fromPartial(object: DeepPartial<QueryRaffleWinnersResponse>): QueryRaffleWinnersResponse;
};
