import { Publisher, PublisherSDKType } from "./publisher";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ArticleAddedEvent {
  publisher: string;
  articleId: Long;
  paid: boolean;
}
export interface ArticleAddedEventSDKType {
  publisher: string;
  article_id: Long;
  paid: boolean;
}
export interface PublisherAddedEvent {
  publisher?: Publisher;
}
export interface PublisherAddedEventSDKType {
  publisher?: PublisherSDKType;
}
export interface PublisherUpdatedEvent {
  publisher?: Publisher;
}
export interface PublisherUpdatedEventSDKType {
  publisher?: PublisherSDKType;
}
export interface AcceptedDomainAddedEvent {
  acceptedDomain?: AcceptedDomain;
}
export interface AcceptedDomainAddedEventSDKType {
  accepted_domain?: AcceptedDomainSDKType;
}
export interface AcceptedDomainUpdatedEvent {
  acceptedDomain?: AcceptedDomain;
}
export interface AcceptedDomainUpdatedEventSDKType {
  accepted_domain?: AcceptedDomainSDKType;
}
export interface PublisherRespectPaidEvent {
  respectPaid: Long;
  publisherReward: Long;
  communityPoolFunds: Long;
  publisher: string;
}
export interface PublisherRespectPaidEventSDKType {
  respect_paid: Long;
  publisher_reward: Long;
  community_pool_funds: Long;
  publisher: string;
}

function createBaseArticleAddedEvent(): ArticleAddedEvent {
  return {
    publisher: "",
    articleId: Long.UZERO,
    paid: false
  };
}

export const ArticleAddedEvent = {
  encode(message: ArticleAddedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publisher !== "") {
      writer.uint32(10).string(message.publisher);
    }

    if (!message.articleId.isZero()) {
      writer.uint32(16).uint64(message.articleId);
    }

    if (message.paid === true) {
      writer.uint32(24).bool(message.paid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArticleAddedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArticleAddedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publisher = reader.string();
          break;

        case 2:
          message.articleId = (reader.uint64() as Long);
          break;

        case 3:
          message.paid = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ArticleAddedEvent>): ArticleAddedEvent {
    const message = createBaseArticleAddedEvent();
    message.publisher = object.publisher ?? "";
    message.articleId = object.articleId !== undefined && object.articleId !== null ? Long.fromValue(object.articleId) : Long.UZERO;
    message.paid = object.paid ?? false;
    return message;
  }

};

function createBasePublisherAddedEvent(): PublisherAddedEvent {
  return {
    publisher: undefined
  };
}

export const PublisherAddedEvent = {
  encode(message: PublisherAddedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publisher !== undefined) {
      Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublisherAddedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisherAddedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publisher = Publisher.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PublisherAddedEvent>): PublisherAddedEvent {
    const message = createBasePublisherAddedEvent();
    message.publisher = object.publisher !== undefined && object.publisher !== null ? Publisher.fromPartial(object.publisher) : undefined;
    return message;
  }

};

function createBasePublisherUpdatedEvent(): PublisherUpdatedEvent {
  return {
    publisher: undefined
  };
}

export const PublisherUpdatedEvent = {
  encode(message: PublisherUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publisher !== undefined) {
      Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublisherUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisherUpdatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publisher = Publisher.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PublisherUpdatedEvent>): PublisherUpdatedEvent {
    const message = createBasePublisherUpdatedEvent();
    message.publisher = object.publisher !== undefined && object.publisher !== null ? Publisher.fromPartial(object.publisher) : undefined;
    return message;
  }

};

function createBaseAcceptedDomainAddedEvent(): AcceptedDomainAddedEvent {
  return {
    acceptedDomain: undefined
  };
}

export const AcceptedDomainAddedEvent = {
  encode(message: AcceptedDomainAddedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acceptedDomain !== undefined) {
      AcceptedDomain.encode(message.acceptedDomain, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainAddedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedDomainAddedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acceptedDomain = AcceptedDomain.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AcceptedDomainAddedEvent>): AcceptedDomainAddedEvent {
    const message = createBaseAcceptedDomainAddedEvent();
    message.acceptedDomain = object.acceptedDomain !== undefined && object.acceptedDomain !== null ? AcceptedDomain.fromPartial(object.acceptedDomain) : undefined;
    return message;
  }

};

function createBaseAcceptedDomainUpdatedEvent(): AcceptedDomainUpdatedEvent {
  return {
    acceptedDomain: undefined
  };
}

export const AcceptedDomainUpdatedEvent = {
  encode(message: AcceptedDomainUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acceptedDomain !== undefined) {
      AcceptedDomain.encode(message.acceptedDomain, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedDomainUpdatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acceptedDomain = AcceptedDomain.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AcceptedDomainUpdatedEvent>): AcceptedDomainUpdatedEvent {
    const message = createBaseAcceptedDomainUpdatedEvent();
    message.acceptedDomain = object.acceptedDomain !== undefined && object.acceptedDomain !== null ? AcceptedDomain.fromPartial(object.acceptedDomain) : undefined;
    return message;
  }

};

function createBasePublisherRespectPaidEvent(): PublisherRespectPaidEvent {
  return {
    respectPaid: Long.UZERO,
    publisherReward: Long.UZERO,
    communityPoolFunds: Long.UZERO,
    publisher: ""
  };
}

export const PublisherRespectPaidEvent = {
  encode(message: PublisherRespectPaidEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.respectPaid.isZero()) {
      writer.uint32(8).uint64(message.respectPaid);
    }

    if (!message.publisherReward.isZero()) {
      writer.uint32(16).uint64(message.publisherReward);
    }

    if (!message.communityPoolFunds.isZero()) {
      writer.uint32(24).uint64(message.communityPoolFunds);
    }

    if (message.publisher !== "") {
      writer.uint32(34).string(message.publisher);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublisherRespectPaidEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisherRespectPaidEvent();

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

        case 4:
          message.publisher = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PublisherRespectPaidEvent>): PublisherRespectPaidEvent {
    const message = createBasePublisherRespectPaidEvent();
    message.respectPaid = object.respectPaid !== undefined && object.respectPaid !== null ? Long.fromValue(object.respectPaid) : Long.UZERO;
    message.publisherReward = object.publisherReward !== undefined && object.publisherReward !== null ? Long.fromValue(object.publisherReward) : Long.UZERO;
    message.communityPoolFunds = object.communityPoolFunds !== undefined && object.communityPoolFunds !== null ? Long.fromValue(object.communityPoolFunds) : Long.UZERO;
    message.publisher = object.publisher ?? "";
    return message;
  }

};