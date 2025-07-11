//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  periodicBurningWeeks: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.burner.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.burner
 * @see proto type: bze.burner.Params
 */
export interface ParamsAmino {
  periodic_burning_weeks?: string;
}
export interface ParamsAminoMsg {
  type: "bze/x/burner/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  periodic_burning_weeks: bigint;
}
function createBaseParams(): Params {
  return {
    periodicBurningWeeks: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/bze.burner.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.periodicBurningWeeks !== BigInt(0)) {
      writer.uint32(8).int64(message.periodicBurningWeeks);
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
          message.periodicBurningWeeks = reader.int64();
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
    message.periodicBurningWeeks = object.periodicBurningWeeks !== undefined && object.periodicBurningWeeks !== null ? BigInt(object.periodicBurningWeeks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.periodic_burning_weeks !== undefined && object.periodic_burning_weeks !== null) {
      message.periodicBurningWeeks = BigInt(object.periodic_burning_weeks);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.periodic_burning_weeks = message.periodicBurningWeeks !== BigInt(0) ? message.periodicBurningWeeks?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/burner/Params",
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
      typeUrl: "/bze.burner.Params",
      value: Params.encode(message).finish()
    };
  }
};