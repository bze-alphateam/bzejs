//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Params defines the ratelimit module's parameters.
 * @name Params
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.Params
 */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/ratelimit.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the ratelimit module's parameters.
 * @name ParamsAmino
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.Params
 */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/ratelimit.v1.Params";
  value: ParamsAmino;
}
/**
 * Params defines the ratelimit module's parameters.
 * @name ParamsSDKType
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.Params
 */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
/**
 * Params defines the ratelimit module's parameters.
 * @name Params
 * @package ratelimit.v1
 * @see proto type: ratelimit.v1.Params
 */
export const Params = {
  typeUrl: "/ratelimit.v1.Params",
  is(o: any): o is Params {
    return o && o.$typeUrl === Params.typeUrl;
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && o.$typeUrl === Params.typeUrl;
  },
  isAmino(o: any): o is ParamsAmino {
    return o && o.$typeUrl === Params.typeUrl;
  },
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
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
      typeUrl: "/ratelimit.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};