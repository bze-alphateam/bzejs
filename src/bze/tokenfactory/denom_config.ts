//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@interchainjs/math";
/**
 * DenomConfig is the admin-set configuration of a factory denom. Tokenfactory
 * only stores it; other modules act on it. A missing entry means the defaults:
 * no community pool and zero rates.
 * @name DenomConfig
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfig
 */
export interface DenomConfig {
  /**
   * community_pool receives the token's fee coins. Empty means none.
   */
  communityPool: string;
  /**
   * transfer_fee is the ratio charged on top of protocol fees paid in the token
   * (not on sends or IBC transfers), 0 <= x <= 0.05.
   */
  transferFee: string;
  /**
   * gas_surcharge is the ratio added to gas paid in the token, 0 <= x <= 2.
   */
  gasSurcharge: string;
}
export interface DenomConfigProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomConfig";
  value: Uint8Array;
}
/**
 * DenomConfig is the admin-set configuration of a factory denom. Tokenfactory
 * only stores it; other modules act on it. A missing entry means the defaults:
 * no community pool and zero rates.
 * @name DenomConfigAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfig
 */
export interface DenomConfigAmino {
  /**
   * community_pool receives the token's fee coins. Empty means none.
   */
  community_pool: string;
  /**
   * transfer_fee is the ratio charged on top of protocol fees paid in the token
   * (not on sends or IBC transfers), 0 <= x <= 0.05.
   */
  transfer_fee: string;
  /**
   * gas_surcharge is the ratio added to gas paid in the token, 0 <= x <= 2.
   */
  gas_surcharge: string;
}
export interface DenomConfigAminoMsg {
  type: "/bze.tokenfactory.DenomConfig";
  value: DenomConfigAmino;
}
/**
 * DenomConfig is the admin-set configuration of a factory denom. Tokenfactory
 * only stores it; other modules act on it. A missing entry means the defaults:
 * no community pool and zero rates.
 * @name DenomConfigSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfig
 */
export interface DenomConfigSDKType {
  community_pool: string;
  transfer_fee: string;
  gas_surcharge: string;
}
function createBaseDenomConfig(): DenomConfig {
  return {
    communityPool: "",
    transferFee: "",
    gasSurcharge: ""
  };
}
/**
 * DenomConfig is the admin-set configuration of a factory denom. Tokenfactory
 * only stores it; other modules act on it. A missing entry means the defaults:
 * no community pool and zero rates.
 * @name DenomConfig
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfig
 */
export const DenomConfig = {
  typeUrl: "/bze.tokenfactory.DenomConfig",
  is(o: any): o is DenomConfig {
    return o && (o.$typeUrl === DenomConfig.typeUrl || typeof o.communityPool === "string" && typeof o.transferFee === "string" && typeof o.gasSurcharge === "string");
  },
  isSDK(o: any): o is DenomConfigSDKType {
    return o && (o.$typeUrl === DenomConfig.typeUrl || typeof o.community_pool === "string" && typeof o.transfer_fee === "string" && typeof o.gas_surcharge === "string");
  },
  isAmino(o: any): o is DenomConfigAmino {
    return o && (o.$typeUrl === DenomConfig.typeUrl || typeof o.community_pool === "string" && typeof o.transfer_fee === "string" && typeof o.gas_surcharge === "string");
  },
  encode(message: DenomConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.communityPool !== "") {
      writer.uint32(10).string(message.communityPool);
    }
    if (message.transferFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.transferFee, 18).atomics);
    }
    if (message.gasSurcharge !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.gasSurcharge, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool = reader.string();
          break;
        case 2:
          message.transferFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.gasSurcharge = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomConfig>): DenomConfig {
    const message = createBaseDenomConfig();
    message.communityPool = object.communityPool ?? "";
    message.transferFee = object.transferFee ?? "";
    message.gasSurcharge = object.gasSurcharge ?? "";
    return message;
  },
  fromAmino(object: DenomConfigAmino): DenomConfig {
    const message = createBaseDenomConfig();
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
  toAmino(message: DenomConfig): DenomConfigAmino {
    const obj: any = {};
    obj.community_pool = message.communityPool ?? "";
    obj.transfer_fee = Decimal.fromUserInput(message.transferFee, 18).atomics ?? "";
    obj.gas_surcharge = Decimal.fromUserInput(message.gasSurcharge, 18).atomics ?? "";
    return obj;
  },
  fromAminoMsg(object: DenomConfigAminoMsg): DenomConfig {
    return DenomConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomConfigProtoMsg): DenomConfig {
    return DenomConfig.decode(message.value);
  },
  toProto(message: DenomConfig): Uint8Array {
    return DenomConfig.encode(message).finish();
  },
  toProtoMsg(message: DenomConfig): DenomConfigProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomConfig",
      value: DenomConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};