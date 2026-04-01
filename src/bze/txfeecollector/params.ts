//@ts-nocheck
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export interface Params {
  validatorMinGasFee: DecCoin;
  maxBalanceIterations: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.txfeecollector.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export interface ParamsAmino {
  ValidatorMinGasFee?: DecCoinAmino;
  MaxBalanceIterations?: string;
}
export interface ParamsAminoMsg {
  type: "bze/x/txfeecollector/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsSDKType
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export interface ParamsSDKType {
  ValidatorMinGasFee: DecCoinSDKType;
  MaxBalanceIterations: bigint;
}
function createBaseParams(): Params {
  return {
    validatorMinGasFee: DecCoin.fromPartial({}),
    maxBalanceIterations: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export const Params = {
  typeUrl: "/bze.txfeecollector.Params",
  aminoType: "bze/x/txfeecollector/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || DecCoin.is(o.validatorMinGasFee) && typeof o.maxBalanceIterations === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || DecCoin.isSDK(o.ValidatorMinGasFee) && typeof o.MaxBalanceIterations === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || DecCoin.isAmino(o.ValidatorMinGasFee) && typeof o.MaxBalanceIterations === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorMinGasFee !== undefined) {
      DecCoin.encode(message.validatorMinGasFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxBalanceIterations !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxBalanceIterations);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorMinGasFee = DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxBalanceIterations = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.validatorMinGasFee = object.validatorMinGasFee !== undefined && object.validatorMinGasFee !== null ? DecCoin.fromPartial(object.validatorMinGasFee) : undefined;
    message.maxBalanceIterations = object.maxBalanceIterations !== undefined && object.maxBalanceIterations !== null ? BigInt(object.maxBalanceIterations.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.ValidatorMinGasFee !== undefined && object.ValidatorMinGasFee !== null) {
      message.validatorMinGasFee = DecCoin.fromAmino(object.ValidatorMinGasFee);
    }
    if (object.MaxBalanceIterations !== undefined && object.MaxBalanceIterations !== null) {
      message.maxBalanceIterations = BigInt(object.MaxBalanceIterations);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ValidatorMinGasFee = message.validatorMinGasFee ? DecCoin.toAmino(message.validatorMinGasFee) : undefined;
    obj.MaxBalanceIterations = message.maxBalanceIterations !== BigInt(0) ? message.maxBalanceIterations?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/txfeecollector/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bze.txfeecollector.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    DecCoin.registerTypeUrl();
  }
};