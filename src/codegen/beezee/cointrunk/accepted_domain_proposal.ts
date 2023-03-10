import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface AcceptedDomainProposal {
  title: string;
  description: string;
  domain: string;
  active: boolean;
}
export interface AcceptedDomainProposalSDKType {
  title: string;
  description: string;
  domain: string;
  active: boolean;
}

function createBaseAcceptedDomainProposal(): AcceptedDomainProposal {
  return {
    title: "",
    description: "",
    domain: "",
    active: false
  };
}

export const AcceptedDomainProposal = {
  encode(message: AcceptedDomainProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<AcceptedDomainProposal>): AcceptedDomainProposal {
    const message = createBaseAcceptedDomainProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    message.active = object.active ?? false;
    return message;
  }

};