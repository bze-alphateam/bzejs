import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface Market {
  base: string;
  quote: string;
  creator: string;
}
export interface MarketSDKType {
  base: string;
  quote: string;
  creator: string;
}

function createBaseMarket(): Market {
  return {
    base: "",
    quote: "",
    creator: ""
  };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }

    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;

        case 2:
          message.quote = reader.string();
          break;

        case 3:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = createBaseMarket();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};