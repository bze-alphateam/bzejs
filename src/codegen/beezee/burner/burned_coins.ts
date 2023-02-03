import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface BurnedCoins {
  burned: string;
  height: string;
}
export interface BurnedCoinsSDKType {
  burned: string;
  height: string;
}

function createBaseBurnedCoins(): BurnedCoins {
  return {
    burned: "",
    height: ""
  };
}

export const BurnedCoins = {
  encode(message: BurnedCoins, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burned !== "") {
      writer.uint32(10).string(message.burned);
    }

    if (message.height !== "") {
      writer.uint32(18).string(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnedCoins {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnedCoins();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.burned = reader.string();
          break;

        case 2:
          message.height = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BurnedCoins>): BurnedCoins {
    const message = createBaseBurnedCoins();
    message.burned = object.burned ?? "";
    message.height = object.height ?? "";
    return message;
  }

};