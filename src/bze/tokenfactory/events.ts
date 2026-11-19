//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@interchainjs/math";
/**
 * @name DenomAdminChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAdminChangeEvent
 */
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
/**
 * @name DenomAdminChangeEventSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAdminChangeEvent
 */
export interface DenomAdminChangeEventSDKType {
  admin: string;
  new_admin: string;
  denom: string;
}
/**
 * @name DenomMetadataChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMetadataChangeEvent
 */
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
/**
 * @name DenomMetadataChangeEventSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMetadataChangeEvent
 */
export interface DenomMetadataChangeEventSDKType {
  denom: string;
}
/**
 * @name DenomBrandingChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingChangeEvent
 */
export interface DenomBrandingChangeEvent {
  denom: string;
}
export interface DenomBrandingChangeEventProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomBrandingChangeEvent";
  value: Uint8Array;
}
/**
 * @name DenomBrandingChangeEventAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingChangeEvent
 */
export interface DenomBrandingChangeEventAmino {
  denom?: string;
}
export interface DenomBrandingChangeEventAminoMsg {
  type: "/bze.tokenfactory.DenomBrandingChangeEvent";
  value: DenomBrandingChangeEventAmino;
}
/**
 * @name DenomBrandingChangeEventSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingChangeEvent
 */
export interface DenomBrandingChangeEventSDKType {
  denom: string;
}
/**
 * @name DenomMintingDisabledEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMintingDisabledEvent
 */
export interface DenomMintingDisabledEvent {
  denom: string;
  admin: string;
}
export interface DenomMintingDisabledEventProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomMintingDisabledEvent";
  value: Uint8Array;
}
/**
 * @name DenomMintingDisabledEventAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMintingDisabledEvent
 */
export interface DenomMintingDisabledEventAmino {
  denom?: string;
  admin?: string;
}
export interface DenomMintingDisabledEventAminoMsg {
  type: "/bze.tokenfactory.DenomMintingDisabledEvent";
  value: DenomMintingDisabledEventAmino;
}
/**
 * @name DenomMintingDisabledEventSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMintingDisabledEvent
 */
export interface DenomMintingDisabledEventSDKType {
  denom: string;
  admin: string;
}
/**
 * DenomConfigChangeEvent carries the denom's new configuration.
 * @name DenomConfigChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfigChangeEvent
 */
export interface DenomConfigChangeEvent {
  denom: string;
  communityPool: string;
  transferFee: string;
  gasSurcharge: string;
}
export interface DenomConfigChangeEventProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomConfigChangeEvent";
  value: Uint8Array;
}
/**
 * DenomConfigChangeEvent carries the denom's new configuration.
 * @name DenomConfigChangeEventAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfigChangeEvent
 */
export interface DenomConfigChangeEventAmino {
  denom?: string;
  community_pool?: string;
  transfer_fee?: string;
  gas_surcharge?: string;
}
export interface DenomConfigChangeEventAminoMsg {
  type: "/bze.tokenfactory.DenomConfigChangeEvent";
  value: DenomConfigChangeEventAmino;
}
/**
 * DenomConfigChangeEvent carries the denom's new configuration.
 * @name DenomConfigChangeEventSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfigChangeEvent
 */
export interface DenomConfigChangeEventSDKType {
  denom: string;
  community_pool: string;
  transfer_fee: string;
  gas_surcharge: string;
}
function createBaseDenomAdminChangeEvent(): DenomAdminChangeEvent {
  return {
    admin: "",
    newAdmin: "",
    denom: ""
  };
}
/**
 * @name DenomAdminChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAdminChangeEvent
 */
export const DenomAdminChangeEvent = {
  typeUrl: "/bze.tokenfactory.DenomAdminChangeEvent",
  is(o: any): o is DenomAdminChangeEvent {
    return o && (o.$typeUrl === DenomAdminChangeEvent.typeUrl || typeof o.admin === "string" && typeof o.newAdmin === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomAdminChangeEventSDKType {
    return o && (o.$typeUrl === DenomAdminChangeEvent.typeUrl || typeof o.admin === "string" && typeof o.new_admin === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomAdminChangeEventAmino {
    return o && (o.$typeUrl === DenomAdminChangeEvent.typeUrl || typeof o.admin === "string" && typeof o.new_admin === "string" && typeof o.denom === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseDenomMetadataChangeEvent(): DenomMetadataChangeEvent {
  return {
    denom: ""
  };
}
/**
 * @name DenomMetadataChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMetadataChangeEvent
 */
export const DenomMetadataChangeEvent = {
  typeUrl: "/bze.tokenfactory.DenomMetadataChangeEvent",
  is(o: any): o is DenomMetadataChangeEvent {
    return o && (o.$typeUrl === DenomMetadataChangeEvent.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomMetadataChangeEventSDKType {
    return o && (o.$typeUrl === DenomMetadataChangeEvent.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomMetadataChangeEventAmino {
    return o && (o.$typeUrl === DenomMetadataChangeEvent.typeUrl || typeof o.denom === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseDenomBrandingChangeEvent(): DenomBrandingChangeEvent {
  return {
    denom: ""
  };
}
/**
 * @name DenomBrandingChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingChangeEvent
 */
export const DenomBrandingChangeEvent = {
  typeUrl: "/bze.tokenfactory.DenomBrandingChangeEvent",
  is(o: any): o is DenomBrandingChangeEvent {
    return o && (o.$typeUrl === DenomBrandingChangeEvent.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomBrandingChangeEventSDKType {
    return o && (o.$typeUrl === DenomBrandingChangeEvent.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomBrandingChangeEventAmino {
    return o && (o.$typeUrl === DenomBrandingChangeEvent.typeUrl || typeof o.denom === "string");
  },
  encode(message: DenomBrandingChangeEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomBrandingChangeEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomBrandingChangeEvent();
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
  fromPartial(object: Partial<DenomBrandingChangeEvent>): DenomBrandingChangeEvent {
    const message = createBaseDenomBrandingChangeEvent();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomBrandingChangeEventAmino): DenomBrandingChangeEvent {
    const message = createBaseDenomBrandingChangeEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomBrandingChangeEvent): DenomBrandingChangeEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomBrandingChangeEventAminoMsg): DenomBrandingChangeEvent {
    return DenomBrandingChangeEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomBrandingChangeEventProtoMsg): DenomBrandingChangeEvent {
    return DenomBrandingChangeEvent.decode(message.value);
  },
  toProto(message: DenomBrandingChangeEvent): Uint8Array {
    return DenomBrandingChangeEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomBrandingChangeEvent): DenomBrandingChangeEventProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomBrandingChangeEvent",
      value: DenomBrandingChangeEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomMintingDisabledEvent(): DenomMintingDisabledEvent {
  return {
    denom: "",
    admin: ""
  };
}
/**
 * @name DenomMintingDisabledEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomMintingDisabledEvent
 */
export const DenomMintingDisabledEvent = {
  typeUrl: "/bze.tokenfactory.DenomMintingDisabledEvent",
  is(o: any): o is DenomMintingDisabledEvent {
    return o && (o.$typeUrl === DenomMintingDisabledEvent.typeUrl || typeof o.denom === "string" && typeof o.admin === "string");
  },
  isSDK(o: any): o is DenomMintingDisabledEventSDKType {
    return o && (o.$typeUrl === DenomMintingDisabledEvent.typeUrl || typeof o.denom === "string" && typeof o.admin === "string");
  },
  isAmino(o: any): o is DenomMintingDisabledEventAmino {
    return o && (o.$typeUrl === DenomMintingDisabledEvent.typeUrl || typeof o.denom === "string" && typeof o.admin === "string");
  },
  encode(message: DenomMintingDisabledEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomMintingDisabledEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomMintingDisabledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomMintingDisabledEvent>): DenomMintingDisabledEvent {
    const message = createBaseDenomMintingDisabledEvent();
    message.denom = object.denom ?? "";
    message.admin = object.admin ?? "";
    return message;
  },
  fromAmino(object: DenomMintingDisabledEventAmino): DenomMintingDisabledEvent {
    const message = createBaseDenomMintingDisabledEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: DenomMintingDisabledEvent): DenomMintingDisabledEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.admin = message.admin === "" ? undefined : message.admin;
    return obj;
  },
  fromAminoMsg(object: DenomMintingDisabledEventAminoMsg): DenomMintingDisabledEvent {
    return DenomMintingDisabledEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomMintingDisabledEventProtoMsg): DenomMintingDisabledEvent {
    return DenomMintingDisabledEvent.decode(message.value);
  },
  toProto(message: DenomMintingDisabledEvent): Uint8Array {
    return DenomMintingDisabledEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomMintingDisabledEvent): DenomMintingDisabledEventProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomMintingDisabledEvent",
      value: DenomMintingDisabledEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomConfigChangeEvent(): DenomConfigChangeEvent {
  return {
    denom: "",
    communityPool: "",
    transferFee: "",
    gasSurcharge: ""
  };
}
/**
 * DenomConfigChangeEvent carries the denom's new configuration.
 * @name DenomConfigChangeEvent
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomConfigChangeEvent
 */
export const DenomConfigChangeEvent = {
  typeUrl: "/bze.tokenfactory.DenomConfigChangeEvent",
  is(o: any): o is DenomConfigChangeEvent {
    return o && (o.$typeUrl === DenomConfigChangeEvent.typeUrl || typeof o.denom === "string" && typeof o.communityPool === "string" && typeof o.transferFee === "string" && typeof o.gasSurcharge === "string");
  },
  isSDK(o: any): o is DenomConfigChangeEventSDKType {
    return o && (o.$typeUrl === DenomConfigChangeEvent.typeUrl || typeof o.denom === "string" && typeof o.community_pool === "string" && typeof o.transfer_fee === "string" && typeof o.gas_surcharge === "string");
  },
  isAmino(o: any): o is DenomConfigChangeEventAmino {
    return o && (o.$typeUrl === DenomConfigChangeEvent.typeUrl || typeof o.denom === "string" && typeof o.community_pool === "string" && typeof o.transfer_fee === "string" && typeof o.gas_surcharge === "string");
  },
  encode(message: DenomConfigChangeEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.communityPool !== "") {
      writer.uint32(18).string(message.communityPool);
    }
    if (message.transferFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.transferFee, 18).atomics);
    }
    if (message.gasSurcharge !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.gasSurcharge, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomConfigChangeEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomConfigChangeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.communityPool = reader.string();
          break;
        case 3:
          message.transferFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.gasSurcharge = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomConfigChangeEvent>): DenomConfigChangeEvent {
    const message = createBaseDenomConfigChangeEvent();
    message.denom = object.denom ?? "";
    message.communityPool = object.communityPool ?? "";
    message.transferFee = object.transferFee ?? "";
    message.gasSurcharge = object.gasSurcharge ?? "";
    return message;
  },
  fromAmino(object: DenomConfigChangeEventAmino): DenomConfigChangeEvent {
    const message = createBaseDenomConfigChangeEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    if (object.transfer_fee !== undefined && object.transfer_fee !== null) {
      message.transferFee = object.transfer_fee;
    }
    if (object.gas_surcharge !== undefined && object.gas_surcharge !== null) {
      message.gasSurcharge = object.gas_surcharge;
    }
    return message;
  },
  toAmino(message: DenomConfigChangeEvent): DenomConfigChangeEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
    obj.transfer_fee = message.transferFee === "" ? undefined : Decimal.fromUserInput(message.transferFee, 18).atomics;
    obj.gas_surcharge = message.gasSurcharge === "" ? undefined : Decimal.fromUserInput(message.gasSurcharge, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DenomConfigChangeEventAminoMsg): DenomConfigChangeEvent {
    return DenomConfigChangeEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomConfigChangeEventProtoMsg): DenomConfigChangeEvent {
    return DenomConfigChangeEvent.decode(message.value);
  },
  toProto(message: DenomConfigChangeEvent): Uint8Array {
    return DenomConfigChangeEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomConfigChangeEvent): DenomConfigChangeEventProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomConfigChangeEvent",
      value: DenomConfigChangeEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};