import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AcceptedDomain {
  domain: string;
  active: boolean;
}
export interface AcceptedDomainSDKType {
  domain: string;
  active: boolean;
}

function createBaseAcceptedDomain(): AcceptedDomain {
  return {
    domain: "",
    active: false
  };
}

export const AcceptedDomain = {
  encode(message: AcceptedDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }

    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedDomain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;

        case 2:
          message.active = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AcceptedDomain {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },

  toJSON(message: AcceptedDomain): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: Partial<AcceptedDomain>): AcceptedDomain {
    const message = createBaseAcceptedDomain();
    message.domain = object.domain ?? "";
    message.active = object.active ?? false;
    return message;
  }

};