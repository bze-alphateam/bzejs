//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Module is the config object for the module. */
export interface Module {
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/bze.epochs.module.Module";
  value: Uint8Array;
}
/**
 * Module is the config object for the module.
 * @name ModuleAmino
 * @package bze.epochs.module
 * @see proto type: bze.epochs.module.Module
 */
export interface ModuleAmino {
  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   */
  authority?: string;
}
export interface ModuleAminoMsg {
  type: "/bze.epochs.module.Module";
  value: ModuleAmino;
}
/** Module is the config object for the module. */
export interface ModuleSDKType {
  authority: string;
}
function createBaseModule(): Module {
  return {
    authority: ""
  };
}
export const Module = {
  typeUrl: "/bze.epochs.module.Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/bze.epochs.module.Module",
      value: Module.encode(message).finish()
    };
  }
};