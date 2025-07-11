//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface BurnCoinsProposal {
  title: string;
  description: string;
}
export interface BurnCoinsProposalProtoMsg {
  typeUrl: "/bze.burner.v1.BurnCoinsProposal";
  value: Uint8Array;
}
/**
 * @name BurnCoinsProposalAmino
 * @package bze.burner.v1
 * @see proto type: bze.burner.v1.BurnCoinsProposal
 */
export interface BurnCoinsProposalAmino {
  title?: string;
  description?: string;
}
export interface BurnCoinsProposalAminoMsg {
  type: "/bze.burner.v1.BurnCoinsProposal";
  value: BurnCoinsProposalAmino;
}
export interface BurnCoinsProposalSDKType {
  title: string;
  description: string;
}
function createBaseBurnCoinsProposal(): BurnCoinsProposal {
  return {
    title: "",
    description: ""
  };
}
export const BurnCoinsProposal = {
  typeUrl: "/bze.burner.v1.BurnCoinsProposal",
  encode(message: BurnCoinsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnCoinsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnCoinsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BurnCoinsProposal>): BurnCoinsProposal {
    const message = createBaseBurnCoinsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: BurnCoinsProposalAmino): BurnCoinsProposal {
    const message = createBaseBurnCoinsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: BurnCoinsProposal): BurnCoinsProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: BurnCoinsProposalAminoMsg): BurnCoinsProposal {
    return BurnCoinsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnCoinsProposalProtoMsg): BurnCoinsProposal {
    return BurnCoinsProposal.decode(message.value);
  },
  toProto(message: BurnCoinsProposal): Uint8Array {
    return BurnCoinsProposal.encode(message).finish();
  },
  toProtoMsg(message: BurnCoinsProposal): BurnCoinsProposalProtoMsg {
    return {
      typeUrl: "/bze.burner.v1.BurnCoinsProposal",
      value: BurnCoinsProposal.encode(message).finish()
    };
  }
};