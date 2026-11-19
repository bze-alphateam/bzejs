//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, Metadata, MetadataAmino, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import { DenomBranding, DenomBrandingAmino, DenomBrandingSDKType } from "./denom_branding";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@interchainjs/math";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "bze/x/tokenfactory/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParams
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bze.tokenfactory.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * @name MsgCreateDenom
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenom
 */
export interface MsgCreateDenom {
  creator: string;
  subdenom: string;
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgCreateDenom";
  value: Uint8Array;
}
/**
 * @name MsgCreateDenomAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenom
 */
export interface MsgCreateDenomAmino {
  creator?: string;
  subdenom?: string;
}
export interface MsgCreateDenomAminoMsg {
  type: "bze/x/tokenfactory/MsgCreateDenom";
  value: MsgCreateDenomAmino;
}
/**
 * @name MsgCreateDenomSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenom
 */
export interface MsgCreateDenomSDKType {
  creator: string;
  subdenom: string;
}
/**
 * @name MsgCreateDenomResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponse {
  newDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgCreateDenomResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateDenomResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponseAmino {
  new_denom?: string;
}
export interface MsgCreateDenomResponseAminoMsg {
  type: "/bze.tokenfactory.MsgCreateDenomResponse";
  value: MsgCreateDenomResponseAmino;
}
/**
 * @name MsgCreateDenomResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponseSDKType {
  new_denom: string;
}
/**
 * @name MsgMint
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMint
 */
export interface MsgMint {
  creator: string;
  coins: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgMint";
  value: Uint8Array;
}
/**
 * @name MsgMintAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMint
 */
export interface MsgMintAmino {
  creator?: string;
  coins?: string;
}
export interface MsgMintAminoMsg {
  type: "bze/x/tokenfactory/MsgMint";
  value: MsgMintAmino;
}
/**
 * @name MsgMintSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMint
 */
export interface MsgMintSDKType {
  creator: string;
  coins: string;
}
/**
 * @name MsgMintResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMintResponse
 */
export interface MsgMintResponse {}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgMintResponse";
  value: Uint8Array;
}
/**
 * @name MsgMintResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMintResponse
 */
export interface MsgMintResponseAmino {}
export interface MsgMintResponseAminoMsg {
  type: "/bze.tokenfactory.MsgMintResponse";
  value: MsgMintResponseAmino;
}
/**
 * @name MsgMintResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMintResponse
 */
export interface MsgMintResponseSDKType {}
/**
 * @name MsgBurn
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurn
 */
export interface MsgBurn {
  creator: string;
  coins: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgBurn";
  value: Uint8Array;
}
/**
 * @name MsgBurnAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurn
 */
export interface MsgBurnAmino {
  creator?: string;
  coins?: string;
}
export interface MsgBurnAminoMsg {
  type: "bze/x/tokenfactory/MsgBurn";
  value: MsgBurnAmino;
}
/**
 * @name MsgBurnSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurn
 */
export interface MsgBurnSDKType {
  creator: string;
  coins: string;
}
/**
 * @name MsgBurnResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurnResponse
 */
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * @name MsgBurnResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/bze.tokenfactory.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
/**
 * @name MsgBurnResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurnResponse
 */
export interface MsgBurnResponseSDKType {}
/**
 * @name MsgChangeAdmin
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdmin
 */
export interface MsgChangeAdmin {
  creator: string;
  denom: string;
  newAdmin: string;
}
export interface MsgChangeAdminProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgChangeAdmin";
  value: Uint8Array;
}
/**
 * @name MsgChangeAdminAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdmin
 */
export interface MsgChangeAdminAmino {
  creator?: string;
  denom?: string;
  newAdmin?: string;
}
export interface MsgChangeAdminAminoMsg {
  type: "bze/x/tokenfactory/MsgChangeAdmin";
  value: MsgChangeAdminAmino;
}
/**
 * @name MsgChangeAdminSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdmin
 */
export interface MsgChangeAdminSDKType {
  creator: string;
  denom: string;
  newAdmin: string;
}
/**
 * @name MsgChangeAdminResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponse {}
export interface MsgChangeAdminResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgChangeAdminResponse";
  value: Uint8Array;
}
/**
 * @name MsgChangeAdminResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponseAmino {}
export interface MsgChangeAdminResponseAminoMsg {
  type: "/bze.tokenfactory.MsgChangeAdminResponse";
  value: MsgChangeAdminResponseAmino;
}
/**
 * @name MsgChangeAdminResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponseSDKType {}
/**
 * @name MsgSetDenomMetadata
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadata {
  creator: string;
  metadata: Metadata;
}
export interface MsgSetDenomMetadataProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomMetadata";
  value: Uint8Array;
}
/**
 * @name MsgSetDenomMetadataAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadataAmino {
  creator?: string;
  metadata?: MetadataAmino;
}
export interface MsgSetDenomMetadataAminoMsg {
  type: "bze/x/tokenfactory/MsgSetDenomMetadata";
  value: MsgSetDenomMetadataAmino;
}
/**
 * @name MsgSetDenomMetadataSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadataSDKType {
  creator: string;
  metadata: MetadataSDKType;
}
/**
 * @name MsgSetDenomMetadataResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponse {}
export interface MsgSetDenomMetadataResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomMetadataResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetDenomMetadataResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponseAmino {}
export interface MsgSetDenomMetadataResponseAminoMsg {
  type: "/bze.tokenfactory.MsgSetDenomMetadataResponse";
  value: MsgSetDenomMetadataResponseAmino;
}
/**
 * @name MsgSetDenomMetadataResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponseSDKType {}
/**
 * @name MsgSetDenomBranding
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBranding
 */
export interface MsgSetDenomBranding {
  creator: string;
  denom: string;
  /**
   * branding is the full package to store. A nil/empty branding clears any
   * stored branding for the denom.
   */
  branding?: DenomBranding;
}
export interface MsgSetDenomBrandingProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomBranding";
  value: Uint8Array;
}
/**
 * @name MsgSetDenomBrandingAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBranding
 */
export interface MsgSetDenomBrandingAmino {
  creator?: string;
  denom?: string;
  /**
   * branding is the full package to store. A nil/empty branding clears any
   * stored branding for the denom.
   */
  branding?: DenomBrandingAmino;
}
export interface MsgSetDenomBrandingAminoMsg {
  type: "bze/x/tokenfactory/MsgSetDenomBranding";
  value: MsgSetDenomBrandingAmino;
}
/**
 * @name MsgSetDenomBrandingSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBranding
 */
export interface MsgSetDenomBrandingSDKType {
  creator: string;
  denom: string;
  branding?: DenomBrandingSDKType;
}
/**
 * @name MsgSetDenomBrandingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBrandingResponse
 */
export interface MsgSetDenomBrandingResponse {}
export interface MsgSetDenomBrandingResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomBrandingResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetDenomBrandingResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBrandingResponse
 */
export interface MsgSetDenomBrandingResponseAmino {}
export interface MsgSetDenomBrandingResponseAminoMsg {
  type: "/bze.tokenfactory.MsgSetDenomBrandingResponse";
  value: MsgSetDenomBrandingResponseAmino;
}
/**
 * @name MsgSetDenomBrandingResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBrandingResponse
 */
export interface MsgSetDenomBrandingResponseSDKType {}
/**
 * MsgSetDenomAdmin is the governance message that assigns a new admin to a factory denom,
 * whatever its current admin is (including a renounced denom whose admin is empty).
 * @name MsgSetDenomAdmin
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdmin
 */
export interface MsgSetDenomAdmin {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * denom is the full factory denom, e.g. factory/bze1.../mytoken.
   */
  denom: string;
  /**
   * new_admin is the account that becomes admin. Must not be empty.
   */
  newAdmin: string;
}
export interface MsgSetDenomAdminProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomAdmin";
  value: Uint8Array;
}
/**
 * MsgSetDenomAdmin is the governance message that assigns a new admin to a factory denom,
 * whatever its current admin is (including a renounced denom whose admin is empty).
 * @name MsgSetDenomAdminAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdmin
 */
export interface MsgSetDenomAdminAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * denom is the full factory denom, e.g. factory/bze1.../mytoken.
   */
  denom?: string;
  /**
   * new_admin is the account that becomes admin. Must not be empty.
   */
  new_admin?: string;
}
export interface MsgSetDenomAdminAminoMsg {
  type: "bze/x/tokenfactory/MsgSetDenomAdmin";
  value: MsgSetDenomAdminAmino;
}
/**
 * MsgSetDenomAdmin is the governance message that assigns a new admin to a factory denom,
 * whatever its current admin is (including a renounced denom whose admin is empty).
 * @name MsgSetDenomAdminSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdmin
 */
export interface MsgSetDenomAdminSDKType {
  authority: string;
  denom: string;
  new_admin: string;
}
/**
 * @name MsgSetDenomAdminResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdminResponse
 */
export interface MsgSetDenomAdminResponse {}
export interface MsgSetDenomAdminResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomAdminResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetDenomAdminResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdminResponse
 */
export interface MsgSetDenomAdminResponseAmino {}
export interface MsgSetDenomAdminResponseAminoMsg {
  type: "/bze.tokenfactory.MsgSetDenomAdminResponse";
  value: MsgSetDenomAdminResponseAmino;
}
/**
 * @name MsgSetDenomAdminResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdminResponse
 */
export interface MsgSetDenomAdminResponseSDKType {}
/**
 * MsgDisableMinting turns minting off for good on a factory denom. Only the denom admin may send it.
 * The admin keeps every other right (burn, metadata, branding, admin change).
 * @name MsgDisableMinting
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMinting
 */
export interface MsgDisableMinting {
  creator: string;
  denom: string;
}
export interface MsgDisableMintingProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgDisableMinting";
  value: Uint8Array;
}
/**
 * MsgDisableMinting turns minting off for good on a factory denom. Only the denom admin may send it.
 * The admin keeps every other right (burn, metadata, branding, admin change).
 * @name MsgDisableMintingAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMinting
 */
export interface MsgDisableMintingAmino {
  creator?: string;
  denom?: string;
}
export interface MsgDisableMintingAminoMsg {
  type: "bze/x/tokenfactory/MsgDisableMinting";
  value: MsgDisableMintingAmino;
}
/**
 * MsgDisableMinting turns minting off for good on a factory denom. Only the denom admin may send it.
 * The admin keeps every other right (burn, metadata, branding, admin change).
 * @name MsgDisableMintingSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMinting
 */
export interface MsgDisableMintingSDKType {
  creator: string;
  denom: string;
}
/**
 * @name MsgDisableMintingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMintingResponse
 */
export interface MsgDisableMintingResponse {}
export interface MsgDisableMintingResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgDisableMintingResponse";
  value: Uint8Array;
}
/**
 * @name MsgDisableMintingResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMintingResponse
 */
export interface MsgDisableMintingResponseAmino {}
export interface MsgDisableMintingResponseAminoMsg {
  type: "/bze.tokenfactory.MsgDisableMintingResponse";
  value: MsgDisableMintingResponseAmino;
}
/**
 * @name MsgDisableMintingResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMintingResponse
 */
export interface MsgDisableMintingResponseSDKType {}
/**
 * MsgSetDenomConfig replaces the configuration of a factory denom as a whole.
 * Only the denom admin may send it. Both rates must be sent, even when zero.
 * @name MsgSetDenomConfig
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfig
 */
export interface MsgSetDenomConfig {
  creator: string;
  denom: string;
  /**
   * community_pool receives the token's fee coins. Empty means none.
   */
  communityPool: string;
  /**
   * transfer_fee is a ratio, 0 <= x <= 0.05.
   */
  transferFee: string;
  /**
   * gas_surcharge is a ratio, 0 <= x <= 2.
   */
  gasSurcharge: string;
}
export interface MsgSetDenomConfigProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomConfig";
  value: Uint8Array;
}
/**
 * MsgSetDenomConfig replaces the configuration of a factory denom as a whole.
 * Only the denom admin may send it. Both rates must be sent, even when zero.
 * @name MsgSetDenomConfigAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfig
 */
export interface MsgSetDenomConfigAmino {
  creator?: string;
  denom?: string;
  /**
   * community_pool receives the token's fee coins. Empty means none.
   */
  community_pool: string;
  /**
   * transfer_fee is a ratio, 0 <= x <= 0.05.
   */
  transfer_fee: string;
  /**
   * gas_surcharge is a ratio, 0 <= x <= 2.
   */
  gas_surcharge: string;
}
export interface MsgSetDenomConfigAminoMsg {
  type: "bze/x/tokenfactory/MsgSetDenomConfig";
  value: MsgSetDenomConfigAmino;
}
/**
 * MsgSetDenomConfig replaces the configuration of a factory denom as a whole.
 * Only the denom admin may send it. Both rates must be sent, even when zero.
 * @name MsgSetDenomConfigSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfig
 */
export interface MsgSetDenomConfigSDKType {
  creator: string;
  denom: string;
  community_pool: string;
  transfer_fee: string;
  gas_surcharge: string;
}
/**
 * @name MsgSetDenomConfigResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfigResponse
 */
export interface MsgSetDenomConfigResponse {}
export interface MsgSetDenomConfigResponseProtoMsg {
  typeUrl: "/bze.tokenfactory.MsgSetDenomConfigResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetDenomConfigResponseAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfigResponse
 */
export interface MsgSetDenomConfigResponseAmino {}
export interface MsgSetDenomConfigResponseAminoMsg {
  type: "/bze.tokenfactory.MsgSetDenomConfigResponse";
  value: MsgSetDenomConfigResponseAmino;
}
/**
 * @name MsgSetDenomConfigResponseSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfigResponse
 */
export interface MsgSetDenomConfigResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/bze.tokenfactory.MsgUpdateParams",
  aminoType: "bze/x/tokenfactory/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/bze.tokenfactory.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    creator: "",
    subdenom: ""
  };
}
/**
 * @name MsgCreateDenom
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenom
 */
export const MsgCreateDenom = {
  typeUrl: "/bze.tokenfactory.MsgCreateDenom",
  aminoType: "bze/x/tokenfactory/MsgCreateDenom",
  is(o: any): o is MsgCreateDenom {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.creator === "string" && typeof o.subdenom === "string");
  },
  isSDK(o: any): o is MsgCreateDenomSDKType {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.creator === "string" && typeof o.subdenom === "string");
  },
  isAmino(o: any): o is MsgCreateDenomAmino {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.creator === "string" && typeof o.subdenom === "string");
  },
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subdenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.creator = object.creator ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.subdenom !== undefined && object.subdenom !== null) {
      message.subdenom = object.subdenom;
    }
    return message;
  },
  toAmino(message: MsgCreateDenom): MsgCreateDenomAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.subdenom = message.subdenom === "" ? undefined : message.subdenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom {
    return MsgCreateDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDenom): MsgCreateDenomAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgCreateDenom",
      value: MsgCreateDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newDenom: ""
  };
}
/**
 * @name MsgCreateDenomResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgCreateDenomResponse
 */
export const MsgCreateDenomResponse = {
  typeUrl: "/bze.tokenfactory.MsgCreateDenomResponse",
  is(o: any): o is MsgCreateDenomResponse {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.newDenom === "string");
  },
  isSDK(o: any): o is MsgCreateDenomResponseSDKType {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.new_denom === "string");
  },
  isAmino(o: any): o is MsgCreateDenomResponseAmino {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.new_denom === "string");
  },
  encode(message: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newDenom !== "") {
      writer.uint32(10).string(message.newDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newDenom = object.newDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    if (object.new_denom !== undefined && object.new_denom !== null) {
      message.newDenom = object.new_denom;
    }
    return message;
  },
  toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino {
    const obj: any = {};
    obj.new_denom = message.newDenom === "" ? undefined : message.newDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMint(): MsgMint {
  return {
    creator: "",
    coins: ""
  };
}
/**
 * @name MsgMint
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMint
 */
export const MsgMint = {
  typeUrl: "/bze.tokenfactory.MsgMint",
  aminoType: "bze/x/tokenfactory/MsgMint",
  is(o: any): o is MsgMint {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.creator === "string" && typeof o.coins === "string");
  },
  isSDK(o: any): o is MsgMintSDKType {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.creator === "string" && typeof o.coins === "string");
  },
  isAmino(o: any): o is MsgMintAmino {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.creator === "string" && typeof o.coins === "string");
  },
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.coins !== "") {
      writer.uint32(18).string(message.coins);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.coins = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.creator = object.creator ?? "";
    message.coins = object.coins ?? "";
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.coins !== undefined && object.coins !== null) {
      message.coins = object.coins;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.coins = message.coins === "" ? undefined : message.coins;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMint): MsgMintAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgMint",
      value: MsgMint.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
/**
 * @name MsgMintResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgMintResponse
 */
export const MsgMintResponse = {
  typeUrl: "/bze.tokenfactory.MsgMintResponse",
  is(o: any): o is MsgMintResponse {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  isSDK(o: any): o is MsgMintResponseSDKType {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  isAmino(o: any): o is MsgMintResponseAmino {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  encode(_: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  fromAmino(_: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  toAmino(_: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgBurn(): MsgBurn {
  return {
    creator: "",
    coins: ""
  };
}
/**
 * @name MsgBurn
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurn
 */
export const MsgBurn = {
  typeUrl: "/bze.tokenfactory.MsgBurn",
  aminoType: "bze/x/tokenfactory/MsgBurn",
  is(o: any): o is MsgBurn {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.creator === "string" && typeof o.coins === "string");
  },
  isSDK(o: any): o is MsgBurnSDKType {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.creator === "string" && typeof o.coins === "string");
  },
  isAmino(o: any): o is MsgBurnAmino {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.creator === "string" && typeof o.coins === "string");
  },
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.coins !== "") {
      writer.uint32(18).string(message.coins);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.coins = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.creator = object.creator ?? "";
    message.coins = object.coins ?? "";
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.coins !== undefined && object.coins !== null) {
      message.coins = object.coins;
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.coins = message.coins === "" ? undefined : message.coins;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurn): MsgBurnAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgBurn",
      value: MsgBurn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
/**
 * @name MsgBurnResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgBurnResponse
 */
export const MsgBurnResponse = {
  typeUrl: "/bze.tokenfactory.MsgBurnResponse",
  is(o: any): o is MsgBurnResponse {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBurnResponseSDKType {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBurnResponseAmino {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgChangeAdmin(): MsgChangeAdmin {
  return {
    creator: "",
    denom: "",
    newAdmin: ""
  };
}
/**
 * @name MsgChangeAdmin
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdmin
 */
export const MsgChangeAdmin = {
  typeUrl: "/bze.tokenfactory.MsgChangeAdmin",
  aminoType: "bze/x/tokenfactory/MsgChangeAdmin",
  is(o: any): o is MsgChangeAdmin {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  isSDK(o: any): o is MsgChangeAdminSDKType {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  isAmino(o: any): o is MsgChangeAdminAmino {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  encode(message: MsgChangeAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = object.newAdmin;
    }
    return message;
  },
  toAmino(message: MsgChangeAdmin): MsgChangeAdminAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.newAdmin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgChangeAdminAminoMsg): MsgChangeAdmin {
    return MsgChangeAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChangeAdmin): MsgChangeAdminAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgChangeAdmin",
      value: MsgChangeAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChangeAdminProtoMsg): MsgChangeAdmin {
    return MsgChangeAdmin.decode(message.value);
  },
  toProto(message: MsgChangeAdmin): Uint8Array {
    return MsgChangeAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgChangeAdmin",
      value: MsgChangeAdmin.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
  return {};
}
/**
 * @name MsgChangeAdminResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgChangeAdminResponse
 */
export const MsgChangeAdminResponse = {
  typeUrl: "/bze.tokenfactory.MsgChangeAdminResponse",
  is(o: any): o is MsgChangeAdminResponse {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgChangeAdminResponseSDKType {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChangeAdminResponseAmino {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  encode(_: MsgChangeAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
  fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
  toAmino(_: MsgChangeAdminResponse): MsgChangeAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeAdminResponseAminoMsg): MsgChangeAdminResponse {
    return MsgChangeAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeAdminResponseProtoMsg): MsgChangeAdminResponse {
    return MsgChangeAdminResponse.decode(message.value);
  },
  toProto(message: MsgChangeAdminResponse): Uint8Array {
    return MsgChangeAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgChangeAdminResponse",
      value: MsgChangeAdminResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    creator: "",
    metadata: Metadata.fromPartial({})
  };
}
/**
 * @name MsgSetDenomMetadata
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadata
 */
export const MsgSetDenomMetadata = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomMetadata",
  aminoType: "bze/x/tokenfactory/MsgSetDenomMetadata",
  is(o: any): o is MsgSetDenomMetadata {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.creator === "string" && Metadata.is(o.metadata));
  },
  isSDK(o: any): o is MsgSetDenomMetadataSDKType {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.creator === "string" && Metadata.isSDK(o.metadata));
  },
  isAmino(o: any): o is MsgSetDenomMetadataAmino {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.creator === "string" && Metadata.isAmino(o.metadata));
  },
  encode(message: MsgSetDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.creator = object.creator ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadata): Uint8Array {
    return MsgSetDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSetDenomMetadata.typeUrl)) {
      return;
    }
    Metadata.registerTypeUrl();
  }
};
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}
/**
 * @name MsgSetDenomMetadataResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomMetadataResponse
 */
export const MsgSetDenomMetadataResponse = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomMetadataResponse",
  is(o: any): o is MsgSetDenomMetadataResponse {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetDenomMetadataResponseSDKType {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDenomMetadataResponseAmino {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  encode(_: MsgSetDenomMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadataResponse): Uint8Array {
    return MsgSetDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomMetadataResponse",
      value: MsgSetDenomMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomBranding(): MsgSetDenomBranding {
  return {
    creator: "",
    denom: "",
    branding: undefined
  };
}
/**
 * @name MsgSetDenomBranding
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBranding
 */
export const MsgSetDenomBranding = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomBranding",
  aminoType: "bze/x/tokenfactory/MsgSetDenomBranding",
  is(o: any): o is MsgSetDenomBranding {
    return o && (o.$typeUrl === MsgSetDenomBranding.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgSetDenomBrandingSDKType {
    return o && (o.$typeUrl === MsgSetDenomBranding.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgSetDenomBrandingAmino {
    return o && (o.$typeUrl === MsgSetDenomBranding.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgSetDenomBranding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.branding !== undefined) {
      DenomBranding.encode(message.branding, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomBranding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomBranding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.branding = DenomBranding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomBranding>): MsgSetDenomBranding {
    const message = createBaseMsgSetDenomBranding();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.branding = object.branding !== undefined && object.branding !== null ? DenomBranding.fromPartial(object.branding) : undefined;
    return message;
  },
  fromAmino(object: MsgSetDenomBrandingAmino): MsgSetDenomBranding {
    const message = createBaseMsgSetDenomBranding();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.branding !== undefined && object.branding !== null) {
      message.branding = DenomBranding.fromAmino(object.branding);
    }
    return message;
  },
  toAmino(message: MsgSetDenomBranding): MsgSetDenomBrandingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.branding = message.branding ? DenomBranding.toAmino(message.branding) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomBrandingAminoMsg): MsgSetDenomBranding {
    return MsgSetDenomBranding.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDenomBranding): MsgSetDenomBrandingAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgSetDenomBranding",
      value: MsgSetDenomBranding.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDenomBrandingProtoMsg): MsgSetDenomBranding {
    return MsgSetDenomBranding.decode(message.value);
  },
  toProto(message: MsgSetDenomBranding): Uint8Array {
    return MsgSetDenomBranding.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomBranding): MsgSetDenomBrandingProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomBranding",
      value: MsgSetDenomBranding.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSetDenomBranding.typeUrl)) {
      return;
    }
    DenomBranding.registerTypeUrl();
  }
};
function createBaseMsgSetDenomBrandingResponse(): MsgSetDenomBrandingResponse {
  return {};
}
/**
 * @name MsgSetDenomBrandingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomBrandingResponse
 */
export const MsgSetDenomBrandingResponse = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomBrandingResponse",
  is(o: any): o is MsgSetDenomBrandingResponse {
    return o && o.$typeUrl === MsgSetDenomBrandingResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetDenomBrandingResponseSDKType {
    return o && o.$typeUrl === MsgSetDenomBrandingResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDenomBrandingResponseAmino {
    return o && o.$typeUrl === MsgSetDenomBrandingResponse.typeUrl;
  },
  encode(_: MsgSetDenomBrandingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomBrandingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomBrandingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetDenomBrandingResponse>): MsgSetDenomBrandingResponse {
    const message = createBaseMsgSetDenomBrandingResponse();
    return message;
  },
  fromAmino(_: MsgSetDenomBrandingResponseAmino): MsgSetDenomBrandingResponse {
    const message = createBaseMsgSetDenomBrandingResponse();
    return message;
  },
  toAmino(_: MsgSetDenomBrandingResponse): MsgSetDenomBrandingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomBrandingResponseAminoMsg): MsgSetDenomBrandingResponse {
    return MsgSetDenomBrandingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomBrandingResponseProtoMsg): MsgSetDenomBrandingResponse {
    return MsgSetDenomBrandingResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomBrandingResponse): Uint8Array {
    return MsgSetDenomBrandingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomBrandingResponse): MsgSetDenomBrandingResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomBrandingResponse",
      value: MsgSetDenomBrandingResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomAdmin(): MsgSetDenomAdmin {
  return {
    authority: "",
    denom: "",
    newAdmin: ""
  };
}
/**
 * MsgSetDenomAdmin is the governance message that assigns a new admin to a factory denom,
 * whatever its current admin is (including a renounced denom whose admin is empty).
 * @name MsgSetDenomAdmin
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdmin
 */
export const MsgSetDenomAdmin = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomAdmin",
  aminoType: "bze/x/tokenfactory/MsgSetDenomAdmin",
  is(o: any): o is MsgSetDenomAdmin {
    return o && (o.$typeUrl === MsgSetDenomAdmin.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  isSDK(o: any): o is MsgSetDenomAdminSDKType {
    return o && (o.$typeUrl === MsgSetDenomAdmin.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.new_admin === "string");
  },
  isAmino(o: any): o is MsgSetDenomAdminAmino {
    return o && (o.$typeUrl === MsgSetDenomAdmin.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.new_admin === "string");
  },
  encode(message: MsgSetDenomAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomAdmin>): MsgSetDenomAdmin {
    const message = createBaseMsgSetDenomAdmin();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgSetDenomAdminAmino): MsgSetDenomAdmin {
    const message = createBaseMsgSetDenomAdmin();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgSetDenomAdmin): MsgSetDenomAdminAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomAdminAminoMsg): MsgSetDenomAdmin {
    return MsgSetDenomAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDenomAdmin): MsgSetDenomAdminAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgSetDenomAdmin",
      value: MsgSetDenomAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDenomAdminProtoMsg): MsgSetDenomAdmin {
    return MsgSetDenomAdmin.decode(message.value);
  },
  toProto(message: MsgSetDenomAdmin): Uint8Array {
    return MsgSetDenomAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomAdmin): MsgSetDenomAdminProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomAdmin",
      value: MsgSetDenomAdmin.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomAdminResponse(): MsgSetDenomAdminResponse {
  return {};
}
/**
 * @name MsgSetDenomAdminResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomAdminResponse
 */
export const MsgSetDenomAdminResponse = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomAdminResponse",
  is(o: any): o is MsgSetDenomAdminResponse {
    return o && o.$typeUrl === MsgSetDenomAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetDenomAdminResponseSDKType {
    return o && o.$typeUrl === MsgSetDenomAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDenomAdminResponseAmino {
    return o && o.$typeUrl === MsgSetDenomAdminResponse.typeUrl;
  },
  encode(_: MsgSetDenomAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetDenomAdminResponse>): MsgSetDenomAdminResponse {
    const message = createBaseMsgSetDenomAdminResponse();
    return message;
  },
  fromAmino(_: MsgSetDenomAdminResponseAmino): MsgSetDenomAdminResponse {
    const message = createBaseMsgSetDenomAdminResponse();
    return message;
  },
  toAmino(_: MsgSetDenomAdminResponse): MsgSetDenomAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomAdminResponseAminoMsg): MsgSetDenomAdminResponse {
    return MsgSetDenomAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomAdminResponseProtoMsg): MsgSetDenomAdminResponse {
    return MsgSetDenomAdminResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomAdminResponse): Uint8Array {
    return MsgSetDenomAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomAdminResponse): MsgSetDenomAdminResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomAdminResponse",
      value: MsgSetDenomAdminResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDisableMinting(): MsgDisableMinting {
  return {
    creator: "",
    denom: ""
  };
}
/**
 * MsgDisableMinting turns minting off for good on a factory denom. Only the denom admin may send it.
 * The admin keeps every other right (burn, metadata, branding, admin change).
 * @name MsgDisableMinting
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMinting
 */
export const MsgDisableMinting = {
  typeUrl: "/bze.tokenfactory.MsgDisableMinting",
  aminoType: "bze/x/tokenfactory/MsgDisableMinting",
  is(o: any): o is MsgDisableMinting {
    return o && (o.$typeUrl === MsgDisableMinting.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgDisableMintingSDKType {
    return o && (o.$typeUrl === MsgDisableMinting.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgDisableMintingAmino {
    return o && (o.$typeUrl === MsgDisableMinting.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgDisableMinting, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableMinting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMinting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDisableMinting>): MsgDisableMinting {
    const message = createBaseMsgDisableMinting();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgDisableMintingAmino): MsgDisableMinting {
    const message = createBaseMsgDisableMinting();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgDisableMinting): MsgDisableMintingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgDisableMintingAminoMsg): MsgDisableMinting {
    return MsgDisableMinting.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableMinting): MsgDisableMintingAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgDisableMinting",
      value: MsgDisableMinting.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableMintingProtoMsg): MsgDisableMinting {
    return MsgDisableMinting.decode(message.value);
  },
  toProto(message: MsgDisableMinting): Uint8Array {
    return MsgDisableMinting.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableMinting): MsgDisableMintingProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgDisableMinting",
      value: MsgDisableMinting.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDisableMintingResponse(): MsgDisableMintingResponse {
  return {};
}
/**
 * @name MsgDisableMintingResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgDisableMintingResponse
 */
export const MsgDisableMintingResponse = {
  typeUrl: "/bze.tokenfactory.MsgDisableMintingResponse",
  is(o: any): o is MsgDisableMintingResponse {
    return o && o.$typeUrl === MsgDisableMintingResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDisableMintingResponseSDKType {
    return o && o.$typeUrl === MsgDisableMintingResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDisableMintingResponseAmino {
    return o && o.$typeUrl === MsgDisableMintingResponse.typeUrl;
  },
  encode(_: MsgDisableMintingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableMintingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMintingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDisableMintingResponse>): MsgDisableMintingResponse {
    const message = createBaseMsgDisableMintingResponse();
    return message;
  },
  fromAmino(_: MsgDisableMintingResponseAmino): MsgDisableMintingResponse {
    const message = createBaseMsgDisableMintingResponse();
    return message;
  },
  toAmino(_: MsgDisableMintingResponse): MsgDisableMintingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableMintingResponseAminoMsg): MsgDisableMintingResponse {
    return MsgDisableMintingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableMintingResponseProtoMsg): MsgDisableMintingResponse {
    return MsgDisableMintingResponse.decode(message.value);
  },
  toProto(message: MsgDisableMintingResponse): Uint8Array {
    return MsgDisableMintingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableMintingResponse): MsgDisableMintingResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgDisableMintingResponse",
      value: MsgDisableMintingResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomConfig(): MsgSetDenomConfig {
  return {
    creator: "",
    denom: "",
    communityPool: "",
    transferFee: "",
    gasSurcharge: ""
  };
}
/**
 * MsgSetDenomConfig replaces the configuration of a factory denom as a whole.
 * Only the denom admin may send it. Both rates must be sent, even when zero.
 * @name MsgSetDenomConfig
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfig
 */
export const MsgSetDenomConfig = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomConfig",
  aminoType: "bze/x/tokenfactory/MsgSetDenomConfig",
  is(o: any): o is MsgSetDenomConfig {
    return o && (o.$typeUrl === MsgSetDenomConfig.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.communityPool === "string" && typeof o.transferFee === "string" && typeof o.gasSurcharge === "string");
  },
  isSDK(o: any): o is MsgSetDenomConfigSDKType {
    return o && (o.$typeUrl === MsgSetDenomConfig.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.community_pool === "string" && typeof o.transfer_fee === "string" && typeof o.gas_surcharge === "string");
  },
  isAmino(o: any): o is MsgSetDenomConfigAmino {
    return o && (o.$typeUrl === MsgSetDenomConfig.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.community_pool === "string" && typeof o.transfer_fee === "string" && typeof o.gas_surcharge === "string");
  },
  encode(message: MsgSetDenomConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(message.communityPool);
    }
    if (message.transferFee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.transferFee, 18).atomics);
    }
    if (message.gasSurcharge !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.gasSurcharge, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.communityPool = reader.string();
          break;
        case 4:
          message.transferFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.gasSurcharge = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomConfig>): MsgSetDenomConfig {
    const message = createBaseMsgSetDenomConfig();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.communityPool = object.communityPool ?? "";
    message.transferFee = object.transferFee ?? "";
    message.gasSurcharge = object.gasSurcharge ?? "";
    return message;
  },
  fromAmino(object: MsgSetDenomConfigAmino): MsgSetDenomConfig {
    const message = createBaseMsgSetDenomConfig();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    if (object.transfer_fee !== undefined && object.transfer_fee !== null) {
      message.transferFee = object.transfer_fee;
    }
    if (object.gas_surcharge !== undefined && object.gas_surcharge !== null) {
      message.gasSurcharge = object.gas_surcharge;
    }
    return message;
  },
  toAmino(message: MsgSetDenomConfig): MsgSetDenomConfigAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.community_pool = message.communityPool ?? "";
    obj.transfer_fee = Decimal.fromUserInput(message.transferFee, 18).atomics ?? "";
    obj.gas_surcharge = Decimal.fromUserInput(message.gasSurcharge, 18).atomics ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomConfigAminoMsg): MsgSetDenomConfig {
    return MsgSetDenomConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDenomConfig): MsgSetDenomConfigAminoMsg {
    return {
      type: "bze/x/tokenfactory/MsgSetDenomConfig",
      value: MsgSetDenomConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDenomConfigProtoMsg): MsgSetDenomConfig {
    return MsgSetDenomConfig.decode(message.value);
  },
  toProto(message: MsgSetDenomConfig): Uint8Array {
    return MsgSetDenomConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomConfig): MsgSetDenomConfigProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomConfig",
      value: MsgSetDenomConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomConfigResponse(): MsgSetDenomConfigResponse {
  return {};
}
/**
 * @name MsgSetDenomConfigResponse
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.MsgSetDenomConfigResponse
 */
export const MsgSetDenomConfigResponse = {
  typeUrl: "/bze.tokenfactory.MsgSetDenomConfigResponse",
  is(o: any): o is MsgSetDenomConfigResponse {
    return o && o.$typeUrl === MsgSetDenomConfigResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetDenomConfigResponseSDKType {
    return o && o.$typeUrl === MsgSetDenomConfigResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDenomConfigResponseAmino {
    return o && o.$typeUrl === MsgSetDenomConfigResponse.typeUrl;
  },
  encode(_: MsgSetDenomConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetDenomConfigResponse>): MsgSetDenomConfigResponse {
    const message = createBaseMsgSetDenomConfigResponse();
    return message;
  },
  fromAmino(_: MsgSetDenomConfigResponseAmino): MsgSetDenomConfigResponse {
    const message = createBaseMsgSetDenomConfigResponse();
    return message;
  },
  toAmino(_: MsgSetDenomConfigResponse): MsgSetDenomConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomConfigResponseAminoMsg): MsgSetDenomConfigResponse {
    return MsgSetDenomConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomConfigResponseProtoMsg): MsgSetDenomConfigResponse {
    return MsgSetDenomConfigResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomConfigResponse): Uint8Array {
    return MsgSetDenomConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomConfigResponse): MsgSetDenomConfigResponseProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.MsgSetDenomConfigResponse",
      value: MsgSetDenomConfigResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};