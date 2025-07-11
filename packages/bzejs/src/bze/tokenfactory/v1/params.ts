//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  createDenomFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.tokenfactory.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.tokenfactory.v1
 * @see proto type: bze.tokenfactory.v1.Params
 */
export interface ParamsAmino {
  createDenomFee?: string;
}
export interface ParamsAminoMsg {
  type: "/bze.tokenfactory.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  createDenomFee: string;
}
function createBaseParams(): Params {
  return {
    createDenomFee: ""
  };
}
export const Params = {
  typeUrl: "/bze.tokenfactory.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createDenomFee !== "") {
      writer.uint32(10).string(message.createDenomFee);
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
          message.createDenomFee = reader.string();
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
    message.createDenomFee = object.createDenomFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.createDenomFee !== undefined && object.createDenomFee !== null) {
      message.createDenomFee = object.createDenomFee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.createDenomFee = message.createDenomFee === "" ? undefined : message.createDenomFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};