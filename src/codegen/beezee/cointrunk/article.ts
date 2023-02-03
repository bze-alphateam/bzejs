import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Article {
  id: Long;
  title: string;
  url: string;
  picture: string;
  publisher: string;
  paid: boolean;
  createdAt: Long;
}
export interface ArticleSDKType {
  id: Long;
  title: string;
  url: string;
  picture: string;
  publisher: string;
  paid: boolean;
  created_at: Long;
}

function createBaseArticle(): Article {
  return {
    id: Long.UZERO,
    title: "",
    url: "",
    picture: "",
    publisher: "",
    paid: false,
    createdAt: Long.ZERO
  };
}

export const Article = {
  encode(message: Article, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }

    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }

    if (message.picture !== "") {
      writer.uint32(34).string(message.picture);
    }

    if (message.publisher !== "") {
      writer.uint32(42).string(message.publisher);
    }

    if (message.paid === true) {
      writer.uint32(48).bool(message.paid);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(56).int64(message.createdAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Article {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArticle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.title = reader.string();
          break;

        case 3:
          message.url = reader.string();
          break;

        case 4:
          message.picture = reader.string();
          break;

        case 5:
          message.publisher = reader.string();
          break;

        case 6:
          message.paid = reader.bool();
          break;

        case 7:
          message.createdAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Article>): Article {
    const message = createBaseArticle();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.title = object.title ?? "";
    message.url = object.url ?? "";
    message.picture = object.picture ?? "";
    message.publisher = object.publisher ?? "";
    message.paid = object.paid ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  }

};