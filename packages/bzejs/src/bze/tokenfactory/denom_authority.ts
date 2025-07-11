//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface DenomAuthority {
  /** Can be empty for no admin, or a valid osmosis address */
  admin: string;
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
}
export interface DenomAuthorityAminoMsg {
  type: "/bze.tokenfactory.DenomAuthority";
  value: DenomAuthorityAmino;
}
export interface DenomAuthoritySDKType {
  admin: string;
}
function createBaseDenomAuthority(): DenomAuthority {
  return {
    admin: ""
  };
}
export const DenomAuthority = {
  typeUrl: "/bze.tokenfactory.DenomAuthority",
  encode(message: DenomAuthority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
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
    return message;
  },
  fromAmino(object: DenomAuthorityAmino): DenomAuthority {
    const message = createBaseDenomAuthority();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: DenomAuthority): DenomAuthorityAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
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
  }
};