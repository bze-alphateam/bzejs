import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface AnonArticlesCounter {
  key: string;
  counter: Long;
}
export interface AnonArticlesCounterSDKType {
  key: string;
  counter: Long;
}

function createBaseAnonArticlesCounter(): AnonArticlesCounter {
  return {
    key: "",
    counter: Long.UZERO
  };
}

export const AnonArticlesCounter = {
  encode(message: AnonArticlesCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (!message.counter.isZero()) {
      writer.uint32(16).uint64(message.counter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnonArticlesCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnonArticlesCounter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.counter = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AnonArticlesCounter>): AnonArticlesCounter {
    const message = createBaseAnonArticlesCounter();
    message.key = object.key ?? "";
    message.counter = object.counter !== undefined && object.counter !== null ? Long.fromValue(object.counter) : Long.UZERO;
    return message;
  }

};