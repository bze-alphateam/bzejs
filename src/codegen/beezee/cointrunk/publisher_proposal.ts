import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface PublisherProposal {
  title: string;
  description: string;
  name: string;
  address: string;
  active: boolean;
}
export interface PublisherProposalSDKType {
  title: string;
  description: string;
  name: string;
  address: string;
  active: boolean;
}

function createBasePublisherProposal(): PublisherProposal {
  return {
    title: "",
    description: "",
    name: "",
    address: "",
    active: false
  };
}

export const PublisherProposal = {
  encode(message: PublisherProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PublisherProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<PublisherProposal>): PublisherProposal {
    const message = createBasePublisherProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
    return message;
  }

};