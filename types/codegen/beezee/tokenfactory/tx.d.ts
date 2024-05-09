import { Metadata, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgCreateDenom {
    creator: string;
    subdenom: string;
}
export interface MsgCreateDenomSDKType {
    creator: string;
    subdenom: string;
}
export interface MsgCreateDenomResponse {
    newDenom: string;
}
export interface MsgCreateDenomResponseSDKType {
    new_denom: string;
}
export interface MsgMint {
    creator: string;
    coins: string;
}
export interface MsgMintSDKType {
    creator: string;
    coins: string;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseSDKType {
}
export interface MsgBurn {
    creator: string;
    coins: string;
}
export interface MsgBurnSDKType {
    creator: string;
    coins: string;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseSDKType {
}
export interface MsgChangeAdmin {
    creator: string;
    denom: string;
    newAdmin: string;
}
export interface MsgChangeAdminSDKType {
    creator: string;
    denom: string;
    newAdmin: string;
}
export interface MsgChangeAdminResponse {
}
export interface MsgChangeAdminResponseSDKType {
}
export interface MsgSetDenomMetadata {
    creator: string;
    metadata?: Metadata;
}
export interface MsgSetDenomMetadataSDKType {
    creator: string;
    metadata?: MetadataSDKType;
}
export interface MsgSetDenomMetadataResponse {
}
export interface MsgSetDenomMetadataResponseSDKType {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgChangeAdmin: {
    encode(message: MsgChangeAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin;
    fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin;
};
export declare const MsgChangeAdminResponse: {
    encode(_: MsgChangeAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponse;
    fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
};
export declare const MsgSetDenomMetadata: {
    encode(message: MsgSetDenomMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadata;
    fromPartial(object: DeepPartial<MsgSetDenomMetadata>): MsgSetDenomMetadata;
};
export declare const MsgSetDenomMetadataResponse: {
    encode(_: MsgSetDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadataResponse;
    fromPartial(_: DeepPartial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse;
};
