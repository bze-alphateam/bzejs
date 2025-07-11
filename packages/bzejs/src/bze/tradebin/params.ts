//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  createMarketFee: string;
  marketMakerFee: string;
  marketTakerFee: string;
  makerFeeDestination: string;
  takerFeeDestination: string;
  nativeDenom: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.tradebin.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.Params
 */
export interface ParamsAmino {
  createMarketFee?: string;
  marketMakerFee?: string;
  marketTakerFee?: string;
  makerFeeDestination?: string;
  takerFeeDestination?: string;
  native_denom?: string;
}
export interface ParamsAminoMsg {
  type: "bze/x/tradebin/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  createMarketFee: string;
  marketMakerFee: string;
  marketTakerFee: string;
  makerFeeDestination: string;
  takerFeeDestination: string;
  native_denom: string;
}
function createBaseParams(): Params {
  return {
    createMarketFee: "",
    marketMakerFee: "",
    marketTakerFee: "",
    makerFeeDestination: "",
    takerFeeDestination: "",
    nativeDenom: ""
  };
}
export const Params = {
  typeUrl: "/bze.tradebin.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createMarketFee !== "") {
      writer.uint32(10).string(message.createMarketFee);
    }
    if (message.marketMakerFee !== "") {
      writer.uint32(18).string(message.marketMakerFee);
    }
    if (message.marketTakerFee !== "") {
      writer.uint32(26).string(message.marketTakerFee);
    }
    if (message.makerFeeDestination !== "") {
      writer.uint32(34).string(message.makerFeeDestination);
    }
    if (message.takerFeeDestination !== "") {
      writer.uint32(42).string(message.takerFeeDestination);
    }
    if (message.nativeDenom !== "") {
      writer.uint32(50).string(message.nativeDenom);
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
          message.createMarketFee = reader.string();
          break;
        case 2:
          message.marketMakerFee = reader.string();
          break;
        case 3:
          message.marketTakerFee = reader.string();
          break;
        case 4:
          message.makerFeeDestination = reader.string();
          break;
        case 5:
          message.takerFeeDestination = reader.string();
          break;
        case 6:
          message.nativeDenom = reader.string();
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
    message.createMarketFee = object.createMarketFee ?? "";
    message.marketMakerFee = object.marketMakerFee ?? "";
    message.marketTakerFee = object.marketTakerFee ?? "";
    message.makerFeeDestination = object.makerFeeDestination ?? "";
    message.takerFeeDestination = object.takerFeeDestination ?? "";
    message.nativeDenom = object.nativeDenom ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.createMarketFee !== undefined && object.createMarketFee !== null) {
      message.createMarketFee = object.createMarketFee;
    }
    if (object.marketMakerFee !== undefined && object.marketMakerFee !== null) {
      message.marketMakerFee = object.marketMakerFee;
    }
    if (object.marketTakerFee !== undefined && object.marketTakerFee !== null) {
      message.marketTakerFee = object.marketTakerFee;
    }
    if (object.makerFeeDestination !== undefined && object.makerFeeDestination !== null) {
      message.makerFeeDestination = object.makerFeeDestination;
    }
    if (object.takerFeeDestination !== undefined && object.takerFeeDestination !== null) {
      message.takerFeeDestination = object.takerFeeDestination;
    }
    if (object.native_denom !== undefined && object.native_denom !== null) {
      message.nativeDenom = object.native_denom;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.createMarketFee = message.createMarketFee === "" ? undefined : message.createMarketFee;
    obj.marketMakerFee = message.marketMakerFee === "" ? undefined : message.marketMakerFee;
    obj.marketTakerFee = message.marketTakerFee === "" ? undefined : message.marketTakerFee;
    obj.makerFeeDestination = message.makerFeeDestination === "" ? undefined : message.makerFeeDestination;
    obj.takerFeeDestination = message.takerFeeDestination === "" ? undefined : message.takerFeeDestination;
    obj.native_denom = message.nativeDenom === "" ? undefined : message.nativeDenom;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/tradebin/Params",
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
      typeUrl: "/bze.tradebin.Params",
      value: Params.encode(message).finish()
    };
  }
};