import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface Publisher {
  name: string;
  address: string;
  active: boolean;
  articlesCount: number;
  createdAt: Long;
  respect: Long;
}
export interface PublisherSDKType {
  name: string;
  address: string;
  active: boolean;
  articles_count: number;
  created_at: Long;
  respect: Long;
}

function createBasePublisher(): Publisher {
  return {
    name: "",
    address: "",
    active: false,
    articlesCount: 0,
    createdAt: Long.ZERO,
    respect: Long.ZERO
  };
}

export const Publisher = {
  encode(message: Publisher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }

    if (message.articlesCount !== 0) {
      writer.uint32(32).uint32(message.articlesCount);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(40).int64(message.createdAt);
    }

    if (!message.respect.isZero()) {
      writer.uint32(48).int64(message.respect);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Publisher {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisher();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.active = reader.bool();
          break;

        case 4:
          message.articlesCount = reader.uint32();
          break;

        case 5:
          message.createdAt = (reader.int64() as Long);
          break;

        case 6:
          message.respect = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Publisher>): Publisher {
    const message = createBasePublisher();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
    message.articlesCount = object.articlesCount ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.respect = object.respect !== undefined && object.respect !== null ? Long.fromValue(object.respect) : Long.ZERO;
    return message;
  }

};