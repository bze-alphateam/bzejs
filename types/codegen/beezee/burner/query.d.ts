import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsSDKType } from "./burned_coins";
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
