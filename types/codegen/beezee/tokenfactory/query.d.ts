import { Params, ParamsSDKType } from "./params";
import { DenomAuthority, DenomAuthoritySDKType } from "./denom_authority";
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
export interface QueryDenomAuthorityRequest {
    denom: string;
}
export interface QueryDenomAuthorityRequestSDKType {
    denom: string;
}
export interface QueryDenomAuthorityResponse {
    denomAuthority?: DenomAuthority;
}
export interface QueryDenomAuthorityResponseSDKType {
    denomAuthority?: DenomAuthoritySDKType;
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
export declare const QueryDenomAuthorityRequest: {
    encode(message: QueryDenomAuthorityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityRequest;
    fromPartial(object: DeepPartial<QueryDenomAuthorityRequest>): QueryDenomAuthorityRequest;
};
export declare const QueryDenomAuthorityResponse: {
    encode(message: QueryDenomAuthorityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityResponse;
    fromPartial(object: DeepPartial<QueryDenomAuthorityResponse>): QueryDenomAuthorityResponse;
};
