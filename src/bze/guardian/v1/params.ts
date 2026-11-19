//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * Params defines the parameters of the module.
 * @name Params
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.Params
 */
export interface Params {
  /**
   * guardian is the bech32 address allowed to sign the guardian messages next
   * to the governance authority. It may be empty: then only the authority can.
   */
  guardian: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.guardian.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters of the module.
 * @name ParamsAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.Params
 */
export interface ParamsAmino {
  /**
   * guardian is the bech32 address allowed to sign the guardian messages next
   * to the governance authority. It may be empty: then only the authority can.
   */
  guardian?: string;
}
export interface ParamsAminoMsg {
  type: "bze/x/guardian/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters of the module.
 * @name ParamsSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.Params
 */
export interface ParamsSDKType {
  guardian: string;
}
function createBaseParams(): Params {
  return {
    guardian: ""
  };
}
/**
 * Params defines the parameters of the module.
 * @name Params
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.Params
 */
export const Params = {
  typeUrl: "/bze.guardian.v1.Params",
  aminoType: "bze/x/guardian/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.guardian === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.guardian === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.guardian === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guardian !== "") {
      writer.uint32(10).string(message.guardian);
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
          message.guardian = reader.string();
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
    message.guardian = object.guardian ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.guardian !== undefined && object.guardian !== null) {
      message.guardian = object.guardian;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.guardian = message.guardian === "" ? undefined : message.guardian;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/guardian/Params",
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
      typeUrl: "/bze.guardian.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};