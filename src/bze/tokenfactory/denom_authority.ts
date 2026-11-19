//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * @name DenomAuthority
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAuthority
 */
export interface DenomAuthority {
  /**
   * Can be empty for no admin, or a valid osmosis address
   */
  admin: string;
  /**
   * mintable: the admin may mint. Turned off for good by MsgDisableMinting
   * (or by renouncing the admin through MsgChangeAdmin).
   * dont_omitempty: the CLI prints a false flag instead of dropping it.
   */
  mintable: boolean;
}
export interface DenomAuthorityProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomAuthority";
  value: Uint8Array;
}
/**
 * @name DenomAuthorityAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAuthority
 */
export interface DenomAuthorityAmino {
  /**
   * Can be empty for no admin, or a valid osmosis address
   */
  admin?: string;
  /**
   * mintable: the admin may mint. Turned off for good by MsgDisableMinting
   * (or by renouncing the admin through MsgChangeAdmin).
   * dont_omitempty: the CLI prints a false flag instead of dropping it.
   */
  mintable: boolean;
}
export interface DenomAuthorityAminoMsg {
  type: "/bze.tokenfactory.DenomAuthority";
  value: DenomAuthorityAmino;
}
/**
 * @name DenomAuthoritySDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAuthority
 */
export interface DenomAuthoritySDKType {
  admin: string;
  mintable: boolean;
}
function createBaseDenomAuthority(): DenomAuthority {
  return {
    admin: "",
    mintable: false
  };
}
/**
 * @name DenomAuthority
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomAuthority
 */
export const DenomAuthority = {
  typeUrl: "/bze.tokenfactory.DenomAuthority",
  is(o: any): o is DenomAuthority {
    return o && (o.$typeUrl === DenomAuthority.typeUrl || typeof o.admin === "string" && typeof o.mintable === "boolean");
  },
  isSDK(o: any): o is DenomAuthoritySDKType {
    return o && (o.$typeUrl === DenomAuthority.typeUrl || typeof o.admin === "string" && typeof o.mintable === "boolean");
  },
  isAmino(o: any): o is DenomAuthorityAmino {
    return o && (o.$typeUrl === DenomAuthority.typeUrl || typeof o.admin === "string" && typeof o.mintable === "boolean");
  },
  encode(message: DenomAuthority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.mintable === true) {
      writer.uint32(16).bool(message.mintable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthority {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.mintable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomAuthority>): DenomAuthority {
    const message = createBaseDenomAuthority();
    message.admin = object.admin ?? "";
    message.mintable = object.mintable ?? false;
    return message;
  },
  fromAmino(object: DenomAuthorityAmino): DenomAuthority {
    const message = createBaseDenomAuthority();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.mintable !== undefined && object.mintable !== null) {
      message.mintable = object.mintable;
    }
    return message;
  },
  toAmino(message: DenomAuthority): DenomAuthorityAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.mintable = message.mintable ?? false;
    return obj;
  },
  fromAminoMsg(object: DenomAuthorityAminoMsg): DenomAuthority {
    return DenomAuthority.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomAuthorityProtoMsg): DenomAuthority {
    return DenomAuthority.decode(message.value);
  },
  toProto(message: DenomAuthority): Uint8Array {
    return DenomAuthority.encode(message).finish();
  },
  toProtoMsg(message: DenomAuthority): DenomAuthorityProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomAuthority",
      value: DenomAuthority.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};