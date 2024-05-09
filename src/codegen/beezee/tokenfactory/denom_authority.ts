import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface DenomAuthority {
  /** Can be empty for no admin, or a valid osmosis address */
  admin: string;
}
export interface DenomAuthoritySDKType {
  /** Can be empty for no admin, or a valid osmosis address */
  admin: string;
}

function createBaseDenomAuthority(): DenomAuthority {
  return {
    admin: ""
  };
}

export const DenomAuthority = {
  encode(message: DenomAuthority, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<DenomAuthority>): DenomAuthority {
    const message = createBaseDenomAuthority();
    message.admin = object.admin ?? "";
    return message;
  }

};