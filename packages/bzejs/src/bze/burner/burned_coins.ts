//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface BurnedCoins {
  burned: string;
  height: string;
}
export interface BurnedCoinsProtoMsg {
  typeUrl: "/bze.burner.BurnedCoins";
  value: Uint8Array;
}
/**
 * @name BurnedCoinsAmino
 * @package bze.burner
 * @see proto type: bze.burner.BurnedCoins
 */
export interface BurnedCoinsAmino {
  burned?: string;
  height?: string;
}
export interface BurnedCoinsAminoMsg {
  type: "/bze.burner.BurnedCoins";
  value: BurnedCoinsAmino;
}
export interface BurnedCoinsSDKType {
  burned: string;
  height: string;
}
function createBaseBurnedCoins(): BurnedCoins {
  return {
    burned: "",
    height: ""
  };
}
export const BurnedCoins = {
  typeUrl: "/bze.burner.BurnedCoins",
  encode(message: BurnedCoins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burned !== "") {
      writer.uint32(10).string(message.burned);
    }
    if (message.height !== "") {
      writer.uint32(18).string(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnedCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnedCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burned = reader.string();
          break;
        case 2:
          message.height = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BurnedCoins>): BurnedCoins {
    const message = createBaseBurnedCoins();
    message.burned = object.burned ?? "";
    message.height = object.height ?? "";
    return message;
  },
  fromAmino(object: BurnedCoinsAmino): BurnedCoins {
    const message = createBaseBurnedCoins();
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = object.burned;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    return message;
  },
  toAmino(message: BurnedCoins): BurnedCoinsAmino {
    const obj: any = {};
    obj.burned = message.burned === "" ? undefined : message.burned;
    obj.height = message.height === "" ? undefined : message.height;
    return obj;
  },
  fromAminoMsg(object: BurnedCoinsAminoMsg): BurnedCoins {
    return BurnedCoins.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnedCoinsProtoMsg): BurnedCoins {
    return BurnedCoins.decode(message.value);
  },
  toProto(message: BurnedCoins): Uint8Array {
    return BurnedCoins.encode(message).finish();
  },
  toProtoMsg(message: BurnedCoins): BurnedCoinsProtoMsg {
    return {
      typeUrl: "/bze.burner.BurnedCoins",
      value: BurnedCoins.encode(message).finish()
    };
  }
};