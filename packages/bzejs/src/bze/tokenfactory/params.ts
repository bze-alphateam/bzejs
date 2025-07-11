//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  createDenomFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.tokenfactory.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.Params
 */
export interface ParamsAmino {
  create_denom_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "bze/x/tokenfactory/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  create_denom_fee: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    createDenomFee: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/bze.tokenfactory.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createDenomFee !== undefined) {
      Coin.encode(message.createDenomFee, writer.uint32(10).fork()).ldelim();
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
          message.createDenomFee = Coin.decode(reader, reader.uint32());
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
    message.createDenomFee = object.createDenomFee !== undefined && object.createDenomFee !== null ? Coin.fromPartial(object.createDenomFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.create_denom_fee !== undefined && object.create_denom_fee !== null) {
      message.createDenomFee = Coin.fromAmino(object.create_denom_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.create_denom_fee = message.createDenomFee ? Coin.toAmino(message.createDenomFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/tokenfactory/Params",
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
      typeUrl: "/bze.tokenfactory.Params",
      value: Params.encode(message).finish()
    };
  }
};