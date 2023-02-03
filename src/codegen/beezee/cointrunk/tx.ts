import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface MsgAddArticle {
  publisher: string;
  title: string;
  url: string;
  picture: string;
}
export interface MsgAddArticleSDKType {
  publisher: string;
  title: string;
  url: string;
  picture: string;
}
export interface MsgAddArticleResponse {}
export interface MsgAddArticleResponseSDKType {}
export interface MsgPayPublisherRespect {
  creator: string;
  address: string;
  amount: string;
}
export interface MsgPayPublisherRespectSDKType {
  creator: string;
  address: string;
  amount: string;
}
export interface MsgPayPublisherRespectResponse {
  respectPaid: Long;
  publisherReward: Long;
  communityPoolFunds: Long;
}
export interface MsgPayPublisherRespectResponseSDKType {
  respect_paid: Long;
  publisher_reward: Long;
  community_pool_funds: Long;
}

function createBaseMsgAddArticle(): MsgAddArticle {
  return {
    publisher: "",
    title: "",
    url: "",
    picture: ""
  };
}

export const MsgAddArticle = {
  encode(message: MsgAddArticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publisher !== "") {
      writer.uint32(10).string(message.publisher);
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArticle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddArticle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publisher = reader.string();
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddArticle>): MsgAddArticle {
    const message = createBaseMsgAddArticle();
    message.publisher = object.publisher ?? "";
    message.title = object.title ?? "";
    message.url = object.url ?? "";
    message.picture = object.picture ?? "";
    return message;
  }

};

function createBaseMsgAddArticleResponse(): MsgAddArticleResponse {
  return {};
}

export const MsgAddArticleResponse = {
  encode(_: MsgAddArticleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddArticleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddArticleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgAddArticleResponse>): MsgAddArticleResponse {
    const message = createBaseMsgAddArticleResponse();
    return message;
  }

};

function createBaseMsgPayPublisherRespect(): MsgPayPublisherRespect {
  return {
    creator: "",
    address: "",
    amount: ""
  };
}

export const MsgPayPublisherRespect = {
  encode(message: MsgPayPublisherRespect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPublisherRespect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPublisherRespect();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPayPublisherRespect>): MsgPayPublisherRespect {
    const message = createBaseMsgPayPublisherRespect();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgPayPublisherRespectResponse(): MsgPayPublisherRespectResponse {
  return {
    respectPaid: Long.UZERO,
    publisherReward: Long.UZERO,
    communityPoolFunds: Long.UZERO
  };
}

export const MsgPayPublisherRespectResponse = {
  encode(message: MsgPayPublisherRespectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.respectPaid.isZero()) {
      writer.uint32(8).uint64(message.respectPaid);
    }

    if (!message.publisherReward.isZero()) {
      writer.uint32(16).uint64(message.publisherReward);
    }

    if (!message.communityPoolFunds.isZero()) {
      writer.uint32(24).uint64(message.communityPoolFunds);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPublisherRespectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPublisherRespectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.respectPaid = (reader.uint64() as Long);
          break;

        case 2:
          message.publisherReward = (reader.uint64() as Long);
          break;

        case 3:
          message.communityPoolFunds = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPayPublisherRespectResponse>): MsgPayPublisherRespectResponse {
    const message = createBaseMsgPayPublisherRespectResponse();
    message.respectPaid = object.respectPaid !== undefined && object.respectPaid !== null ? Long.fromValue(object.respectPaid) : Long.UZERO;
    message.publisherReward = object.publisherReward !== undefined && object.publisherReward !== null ? Long.fromValue(object.publisherReward) : Long.UZERO;
    message.communityPoolFunds = object.communityPoolFunds !== undefined && object.communityPoolFunds !== null ? Long.fromValue(object.communityPoolFunds) : Long.UZERO;
    return message;
  }

};