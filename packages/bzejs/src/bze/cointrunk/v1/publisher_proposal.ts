//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface PublisherProposal {
  $typeUrl?: "/bze.cointrunk.v1.PublisherProposal";
  title: string;
  description: string;
  name: string;
  address: string;
  active: boolean;
}
export interface PublisherProposalProtoMsg {
  typeUrl: "/bze.cointrunk.v1.PublisherProposal";
  value: Uint8Array;
}
/**
 * @name PublisherProposalAmino
 * @package bze.cointrunk.v1
 * @see proto type: bze.cointrunk.v1.PublisherProposal
 */
export interface PublisherProposalAmino {
  title?: string;
  description?: string;
  name?: string;
  address?: string;
  active?: boolean;
}
export interface PublisherProposalAminoMsg {
  type: "/bze.cointrunk.v1.PublisherProposal";
  value: PublisherProposalAmino;
}
export interface PublisherProposalSDKType {
  $typeUrl?: "/bze.cointrunk.v1.PublisherProposal";
  title: string;
  description: string;
  name: string;
  address: string;
  active: boolean;
}
function createBasePublisherProposal(): PublisherProposal {
  return {
    $typeUrl: "/bze.cointrunk.v1.PublisherProposal",
    title: "",
    description: "",
    name: "",
    address: "",
    active: false
  };
}
export const PublisherProposal = {
  typeUrl: "/bze.cointrunk.v1.PublisherProposal",
  encode(message: PublisherProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublisherProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisherProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PublisherProposal>): PublisherProposal {
    const message = createBasePublisherProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: PublisherProposalAmino): PublisherProposal {
    const message = createBasePublisherProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: PublisherProposal): PublisherProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.name = message.name === "" ? undefined : message.name;
    obj.address = message.address === "" ? undefined : message.address;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: PublisherProposalAminoMsg): PublisherProposal {
    return PublisherProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherProposalProtoMsg): PublisherProposal {
    return PublisherProposal.decode(message.value);
  },
  toProto(message: PublisherProposal): Uint8Array {
    return PublisherProposal.encode(message).finish();
  },
  toProtoMsg(message: PublisherProposal): PublisherProposalProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.v1.PublisherProposal",
      value: PublisherProposal.encode(message).finish()
    };
  }
};