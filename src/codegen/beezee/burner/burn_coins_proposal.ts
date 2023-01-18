import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface BurnCoinsProposal {
  title: string;
  description: string;
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
  encode(message: BurnCoinsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnCoinsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): BurnCoinsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: BurnCoinsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: Partial<BurnCoinsProposal>): BurnCoinsProposal {
    const message = createBaseBurnCoinsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  }

};