//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface AcceptedDomainProposal {
  $typeUrl?: "/bze.cointrunk.v1.AcceptedDomainProposal";
  title: string;
  description: string;
  domain: string;
  active: boolean;
}
export interface AcceptedDomainProposalProtoMsg {
  typeUrl: "/bze.cointrunk.v1.AcceptedDomainProposal";
  value: Uint8Array;
}
/**
 * @name AcceptedDomainProposalAmino
 * @package bze.cointrunk.v1
 * @see proto type: bze.cointrunk.v1.AcceptedDomainProposal
 */
export interface AcceptedDomainProposalAmino {
  title?: string;
  description?: string;
  domain?: string;
  active?: boolean;
}
export interface AcceptedDomainProposalAminoMsg {
  type: "/bze.cointrunk.v1.AcceptedDomainProposal";
  value: AcceptedDomainProposalAmino;
}
export interface AcceptedDomainProposalSDKType {
  $typeUrl?: "/bze.cointrunk.v1.AcceptedDomainProposal";
  title: string;
  description: string;
  domain: string;
  active: boolean;
}
function createBaseAcceptedDomainProposal(): AcceptedDomainProposal {
  return {
    $typeUrl: "/bze.cointrunk.v1.AcceptedDomainProposal",
    title: "",
    description: "",
    domain: "",
    active: false
  };
}
export const AcceptedDomainProposal = {
  typeUrl: "/bze.cointrunk.v1.AcceptedDomainProposal",
  encode(message: AcceptedDomainProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedDomainProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedDomainProposal();
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
          message.domain = reader.string();
          break;
        case 4:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AcceptedDomainProposal>): AcceptedDomainProposal {
    const message = createBaseAcceptedDomainProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: AcceptedDomainProposalAmino): AcceptedDomainProposal {
    const message = createBaseAcceptedDomainProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: AcceptedDomainProposal): AcceptedDomainProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.domain = message.domain === "" ? undefined : message.domain;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: AcceptedDomainProposalAminoMsg): AcceptedDomainProposal {
    return AcceptedDomainProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AcceptedDomainProposalProtoMsg): AcceptedDomainProposal {
    return AcceptedDomainProposal.decode(message.value);
  },
  toProto(message: AcceptedDomainProposal): Uint8Array {
    return AcceptedDomainProposal.encode(message).finish();
  },
  toProtoMsg(message: AcceptedDomainProposal): AcceptedDomainProposalProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.v1.AcceptedDomainProposal",
      value: AcceptedDomainProposal.encode(message).finish()
    };
  }
};