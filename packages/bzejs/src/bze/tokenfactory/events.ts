//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface DenomAdminChangeEvent {
  admin: string;
  newAdmin: string;
  denom: string;
}
export interface DenomAdminChangeEventProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomAdminChangeEvent";
  value: Uint8Array;
}
/**
 * @name DenomAdminChangeEventAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAdminChangeEvent
 */
export interface DenomAdminChangeEventAmino {
  admin?: string;
  new_admin?: string;
  denom?: string;
}
export interface DenomAdminChangeEventAminoMsg {
  type: "/bze.tokenfactory.DenomAdminChangeEvent";
  value: DenomAdminChangeEventAmino;
}
export interface DenomAdminChangeEventSDKType {
  admin: string;
  new_admin: string;
  denom: string;
}
export interface DenomMetadataChangeEvent {
  denom: string;
}
export interface DenomMetadataChangeEventProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomMetadataChangeEvent";
  value: Uint8Array;
}
/**
 * @name DenomMetadataChangeEventAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMetadataChangeEvent
 */
export interface DenomMetadataChangeEventAmino {
  denom?: string;
}
export interface DenomMetadataChangeEventAminoMsg {
  type: "/bze.tokenfactory.DenomMetadataChangeEvent";
  value: DenomMetadataChangeEventAmino;
}
export interface DenomMetadataChangeEventSDKType {
  denom: string;
}
function createBaseDenomAdminChangeEvent(): DenomAdminChangeEvent {
  return {
    admin: "",
    newAdmin: "",
    denom: ""
  };
}
export const DenomAdminChangeEvent = {
  typeUrl: "/bze.tokenfactory.DenomAdminChangeEvent",
  encode(message: DenomAdminChangeEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomAdminChangeEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomAdminChangeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomAdminChangeEvent>): DenomAdminChangeEvent {
    const message = createBaseDenomAdminChangeEvent();
    message.admin = object.admin ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomAdminChangeEventAmino): DenomAdminChangeEvent {
    const message = createBaseDenomAdminChangeEvent();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomAdminChangeEvent): DenomAdminChangeEventAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomAdminChangeEventAminoMsg): DenomAdminChangeEvent {
    return DenomAdminChangeEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomAdminChangeEventProtoMsg): DenomAdminChangeEvent {
    return DenomAdminChangeEvent.decode(message.value);
  },
  toProto(message: DenomAdminChangeEvent): Uint8Array {
    return DenomAdminChangeEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomAdminChangeEvent): DenomAdminChangeEventProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomAdminChangeEvent",
      value: DenomAdminChangeEvent.encode(message).finish()
    };
  }
};
function createBaseDenomMetadataChangeEvent(): DenomMetadataChangeEvent {
  return {
    denom: ""
  };
}
export const DenomMetadataChangeEvent = {
  typeUrl: "/bze.tokenfactory.DenomMetadataChangeEvent",
  encode(message: DenomMetadataChangeEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomMetadataChangeEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomMetadataChangeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomMetadataChangeEvent>): DenomMetadataChangeEvent {
    const message = createBaseDenomMetadataChangeEvent();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomMetadataChangeEventAmino): DenomMetadataChangeEvent {
    const message = createBaseDenomMetadataChangeEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomMetadataChangeEvent): DenomMetadataChangeEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomMetadataChangeEventAminoMsg): DenomMetadataChangeEvent {
    return DenomMetadataChangeEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomMetadataChangeEventProtoMsg): DenomMetadataChangeEvent {
    return DenomMetadataChangeEvent.decode(message.value);
  },
  toProto(message: DenomMetadataChangeEvent): Uint8Array {
    return DenomMetadataChangeEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomMetadataChangeEvent): DenomMetadataChangeEventProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomMetadataChangeEvent",
      value: DenomMetadataChangeEvent.encode(message).finish()
    };
  }
};