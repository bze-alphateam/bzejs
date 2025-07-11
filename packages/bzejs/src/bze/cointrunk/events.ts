//@ts-nocheck
import { Publisher, PublisherAmino, PublisherSDKType, AcceptedDomain, AcceptedDomainAmino, AcceptedDomainSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface ArticleAddedEvent {
  publisher: string;
  articleId: bigint;
  paid: boolean;
}
export interface ArticleAddedEventProtoMsg {
  typeUrl: "/bze.cointrunk.ArticleAddedEvent";
  value: Uint8Array;
}
/**
 * @name ArticleAddedEventAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.ArticleAddedEvent
 */
export interface ArticleAddedEventAmino {
  publisher?: string;
  article_id?: string;
  paid?: boolean;
}
export interface ArticleAddedEventAminoMsg {
  type: "/bze.cointrunk.ArticleAddedEvent";
  value: ArticleAddedEventAmino;
}
export interface ArticleAddedEventSDKType {
  publisher: string;
  article_id: bigint;
  paid: boolean;
}
export interface PublisherAddedEvent {
  publisher?: Publisher;
}
export interface PublisherAddedEventProtoMsg {
  typeUrl: "/bze.cointrunk.PublisherAddedEvent";
  value: Uint8Array;
}
/**
 * @name PublisherAddedEventAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.PublisherAddedEvent
 */
export interface PublisherAddedEventAmino {
  publisher?: PublisherAmino;
}
export interface PublisherAddedEventAminoMsg {
  type: "/bze.cointrunk.PublisherAddedEvent";
  value: PublisherAddedEventAmino;
}
export interface PublisherAddedEventSDKType {
  publisher?: PublisherSDKType;
}
export interface PublisherUpdatedEvent {
  publisher?: Publisher;
}
export interface PublisherUpdatedEventProtoMsg {
  typeUrl: "/bze.cointrunk.PublisherUpdatedEvent";
  value: Uint8Array;
}
/**
 * @name PublisherUpdatedEventAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.PublisherUpdatedEvent
 */
export interface PublisherUpdatedEventAmino {
  publisher?: PublisherAmino;
}
export interface PublisherUpdatedEventAminoMsg {
  type: "/bze.cointrunk.PublisherUpdatedEvent";
  value: PublisherUpdatedEventAmino;
}
export interface PublisherUpdatedEventSDKType {
  publisher?: PublisherSDKType;
}
export interface AcceptedDomainAddedEvent {
  acceptedDomain?: AcceptedDomain;
}
export interface AcceptedDomainAddedEventProtoMsg {
  typeUrl: "/bze.cointrunk.AcceptedDomainAddedEvent";
  value: Uint8Array;
}
/**
 * @name AcceptedDomainAddedEventAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.AcceptedDomainAddedEvent
 */
export interface AcceptedDomainAddedEventAmino {
  accepted_domain?: AcceptedDomainAmino;
}
export interface AcceptedDomainAddedEventAminoMsg {
  type: "/bze.cointrunk.AcceptedDomainAddedEvent";
  value: AcceptedDomainAddedEventAmino;
}
export interface AcceptedDomainAddedEventSDKType {
  accepted_domain?: AcceptedDomainSDKType;
}
export interface AcceptedDomainUpdatedEvent {
  acceptedDomain?: AcceptedDomain;
}
export interface AcceptedDomainUpdatedEventProtoMsg {
  typeUrl: "/bze.cointrunk.AcceptedDomainUpdatedEvent";
  value: Uint8Array;
}
/**
 * @name AcceptedDomainUpdatedEventAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.AcceptedDomainUpdatedEvent
 */
export interface AcceptedDomainUpdatedEventAmino {
  accepted_domain?: AcceptedDomainAmino;
}
export interface AcceptedDomainUpdatedEventAminoMsg {
  type: "/bze.cointrunk.AcceptedDomainUpdatedEvent";
  value: AcceptedDomainUpdatedEventAmino;
}
export interface AcceptedDomainUpdatedEventSDKType {
  accepted_domain?: AcceptedDomainSDKType;
}
export interface PublisherRespectPaidEvent {
  respectPaid: bigint;
  publisherReward: bigint;
  communityPoolFunds: bigint;
  publisher: string;
}
export interface PublisherRespectPaidEventProtoMsg {
  typeUrl: "/bze.cointrunk.PublisherRespectPaidEvent";
  value: Uint8Array;
}
/**
 * @name PublisherRespectPaidEventAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.PublisherRespectPaidEvent
 */
export interface PublisherRespectPaidEventAmino {
  respect_paid?: string;
  publisher_reward?: string;
  community_pool_funds?: string;
  publisher?: string;
}
export interface PublisherRespectPaidEventAminoMsg {
  type: "/bze.cointrunk.PublisherRespectPaidEvent";
  value: PublisherRespectPaidEventAmino;
}
export interface PublisherRespectPaidEventSDKType {
  respect_paid: bigint;
  publisher_reward: bigint;
  community_pool_funds: bigint;
  publisher: string;
}
function createBaseArticleAddedEvent(): ArticleAddedEvent {
  return {
    publisher: "",
    articleId: BigInt(0),
    paid: false
  };
}
export const ArticleAddedEvent = {
  typeUrl: "/bze.cointrunk.ArticleAddedEvent",
  encode(message: ArticleAddedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisher !== "") {
      writer.uint32(10).string(message.publisher);
    }
    if (message.articleId !== BigInt(0)) {
      writer.uint32(16).uint64(message.articleId);
    }
    if (message.paid === true) {
      writer.uint32(24).bool(message.paid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArticleAddedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArticleAddedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publisher = reader.string();
          break;
        case 2:
          message.articleId = reader.uint64();
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
  fromPartial(object: Partial<ArticleAddedEvent>): ArticleAddedEvent {
    const message = createBaseArticleAddedEvent();
    message.publisher = object.publisher ?? "";
    message.articleId = object.articleId !== undefined && object.articleId !== null ? BigInt(object.articleId.toString()) : BigInt(0);
    message.paid = object.paid ?? false;
    return message;
  },
  fromAmino(object: ArticleAddedEventAmino): ArticleAddedEvent {
    const message = createBaseArticleAddedEvent();
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = object.publisher;
    }
    if (object.article_id !== undefined && object.article_id !== null) {
      message.articleId = BigInt(object.article_id);
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid;
    }
    return message;
  },
  toAmino(message: ArticleAddedEvent): ArticleAddedEventAmino {
    const obj: any = {};
    obj.publisher = message.publisher === "" ? undefined : message.publisher;
    obj.article_id = message.articleId !== BigInt(0) ? message.articleId?.toString() : undefined;
    obj.paid = message.paid === false ? undefined : message.paid;
    return obj;
  },
  fromAminoMsg(object: ArticleAddedEventAminoMsg): ArticleAddedEvent {
    return ArticleAddedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ArticleAddedEventProtoMsg): ArticleAddedEvent {
    return ArticleAddedEvent.decode(message.value);
  },
  toProto(message: ArticleAddedEvent): Uint8Array {
    return ArticleAddedEvent.encode(message).finish();
  },
  toProtoMsg(message: ArticleAddedEvent): ArticleAddedEventProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.ArticleAddedEvent",
      value: ArticleAddedEvent.encode(message).finish()
    };
  }
};
function createBasePublisherAddedEvent(): PublisherAddedEvent {
  return {
    publisher: undefined
  };
}
export const PublisherAddedEvent = {
  typeUrl: "/bze.cointrunk.PublisherAddedEvent",
  encode(message: PublisherAddedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisher !== undefined) {
      Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublisherAddedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<PublisherAddedEvent>): PublisherAddedEvent {
    const message = createBasePublisherAddedEvent();
    message.publisher = object.publisher !== undefined && object.publisher !== null ? Publisher.fromPartial(object.publisher) : undefined;
    return message;
  },
  fromAmino(object: PublisherAddedEventAmino): PublisherAddedEvent {
    const message = createBasePublisherAddedEvent();
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = Publisher.fromAmino(object.publisher);
    }
    return message;
  },
  toAmino(message: PublisherAddedEvent): PublisherAddedEventAmino {
    const obj: any = {};
    obj.publisher = message.publisher ? Publisher.toAmino(message.publisher) : undefined;
    return obj;
  },
  fromAminoMsg(object: PublisherAddedEventAminoMsg): PublisherAddedEvent {
    return PublisherAddedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherAddedEventProtoMsg): PublisherAddedEvent {
    return PublisherAddedEvent.decode(message.value);
  },
  toProto(message: PublisherAddedEvent): Uint8Array {
    return PublisherAddedEvent.encode(message).finish();
  },
  toProtoMsg(message: PublisherAddedEvent): PublisherAddedEventProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.PublisherAddedEvent",
      value: PublisherAddedEvent.encode(message).finish()
    };
  }
};
function createBasePublisherUpdatedEvent(): PublisherUpdatedEvent {
  return {
    publisher: undefined
  };
}
export const PublisherUpdatedEvent = {
  typeUrl: "/bze.cointrunk.PublisherUpdatedEvent",
  encode(message: PublisherUpdatedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisher !== undefined) {
      Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublisherUpdatedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<PublisherUpdatedEvent>): PublisherUpdatedEvent {
    const message = createBasePublisherUpdatedEvent();
    message.publisher = object.publisher !== undefined && object.publisher !== null ? Publisher.fromPartial(object.publisher) : undefined;
    return message;
  },
  fromAmino(object: PublisherUpdatedEventAmino): PublisherUpdatedEvent {
    const message = createBasePublisherUpdatedEvent();
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = Publisher.fromAmino(object.publisher);
    }
    return message;
  },
  toAmino(message: PublisherUpdatedEvent): PublisherUpdatedEventAmino {
    const obj: any = {};
    obj.publisher = message.publisher ? Publisher.toAmino(message.publisher) : undefined;
    return obj;
  },
  fromAminoMsg(object: PublisherUpdatedEventAminoMsg): PublisherUpdatedEvent {
    return PublisherUpdatedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherUpdatedEventProtoMsg): PublisherUpdatedEvent {
    return PublisherUpdatedEvent.decode(message.value);
  },
  toProto(message: PublisherUpdatedEvent): Uint8Array {
    return PublisherUpdatedEvent.encode(message).finish();
  },
  toProtoMsg(message: PublisherUpdatedEvent): PublisherUpdatedEventProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.PublisherUpdatedEvent",
      value: PublisherUpdatedEvent.encode(message).finish()
    };
  }
};
function createBaseAcceptedDomainAddedEvent(): AcceptedDomainAddedEvent {
  return {
    acceptedDomain: undefined
  };
}
export const AcceptedDomainAddedEvent = {
  typeUrl: "/bze.cointrunk.AcceptedDomainAddedEvent",
  encode(message: AcceptedDomainAddedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.acceptedDomain !== undefined) {
      AcceptedDomain.encode(message.acceptedDomain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedDomainAddedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<AcceptedDomainAddedEvent>): AcceptedDomainAddedEvent {
    const message = createBaseAcceptedDomainAddedEvent();
    message.acceptedDomain = object.acceptedDomain !== undefined && object.acceptedDomain !== null ? AcceptedDomain.fromPartial(object.acceptedDomain) : undefined;
    return message;
  },
  fromAmino(object: AcceptedDomainAddedEventAmino): AcceptedDomainAddedEvent {
    const message = createBaseAcceptedDomainAddedEvent();
    if (object.accepted_domain !== undefined && object.accepted_domain !== null) {
      message.acceptedDomain = AcceptedDomain.fromAmino(object.accepted_domain);
    }
    return message;
  },
  toAmino(message: AcceptedDomainAddedEvent): AcceptedDomainAddedEventAmino {
    const obj: any = {};
    obj.accepted_domain = message.acceptedDomain ? AcceptedDomain.toAmino(message.acceptedDomain) : undefined;
    return obj;
  },
  fromAminoMsg(object: AcceptedDomainAddedEventAminoMsg): AcceptedDomainAddedEvent {
    return AcceptedDomainAddedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: AcceptedDomainAddedEventProtoMsg): AcceptedDomainAddedEvent {
    return AcceptedDomainAddedEvent.decode(message.value);
  },
  toProto(message: AcceptedDomainAddedEvent): Uint8Array {
    return AcceptedDomainAddedEvent.encode(message).finish();
  },
  toProtoMsg(message: AcceptedDomainAddedEvent): AcceptedDomainAddedEventProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.AcceptedDomainAddedEvent",
      value: AcceptedDomainAddedEvent.encode(message).finish()
    };
  }
};
function createBaseAcceptedDomainUpdatedEvent(): AcceptedDomainUpdatedEvent {
  return {
    acceptedDomain: undefined
  };
}
export const AcceptedDomainUpdatedEvent = {
  typeUrl: "/bze.cointrunk.AcceptedDomainUpdatedEvent",
  encode(message: AcceptedDomainUpdatedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.acceptedDomain !== undefined) {
      AcceptedDomain.encode(message.acceptedDomain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedDomainUpdatedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<AcceptedDomainUpdatedEvent>): AcceptedDomainUpdatedEvent {
    const message = createBaseAcceptedDomainUpdatedEvent();
    message.acceptedDomain = object.acceptedDomain !== undefined && object.acceptedDomain !== null ? AcceptedDomain.fromPartial(object.acceptedDomain) : undefined;
    return message;
  },
  fromAmino(object: AcceptedDomainUpdatedEventAmino): AcceptedDomainUpdatedEvent {
    const message = createBaseAcceptedDomainUpdatedEvent();
    if (object.accepted_domain !== undefined && object.accepted_domain !== null) {
      message.acceptedDomain = AcceptedDomain.fromAmino(object.accepted_domain);
    }
    return message;
  },
  toAmino(message: AcceptedDomainUpdatedEvent): AcceptedDomainUpdatedEventAmino {
    const obj: any = {};
    obj.accepted_domain = message.acceptedDomain ? AcceptedDomain.toAmino(message.acceptedDomain) : undefined;
    return obj;
  },
  fromAminoMsg(object: AcceptedDomainUpdatedEventAminoMsg): AcceptedDomainUpdatedEvent {
    return AcceptedDomainUpdatedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: AcceptedDomainUpdatedEventProtoMsg): AcceptedDomainUpdatedEvent {
    return AcceptedDomainUpdatedEvent.decode(message.value);
  },
  toProto(message: AcceptedDomainUpdatedEvent): Uint8Array {
    return AcceptedDomainUpdatedEvent.encode(message).finish();
  },
  toProtoMsg(message: AcceptedDomainUpdatedEvent): AcceptedDomainUpdatedEventProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.AcceptedDomainUpdatedEvent",
      value: AcceptedDomainUpdatedEvent.encode(message).finish()
    };
  }
};
function createBasePublisherRespectPaidEvent(): PublisherRespectPaidEvent {
  return {
    respectPaid: BigInt(0),
    publisherReward: BigInt(0),
    communityPoolFunds: BigInt(0),
    publisher: ""
  };
}
export const PublisherRespectPaidEvent = {
  typeUrl: "/bze.cointrunk.PublisherRespectPaidEvent",
  encode(message: PublisherRespectPaidEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.respectPaid !== BigInt(0)) {
      writer.uint32(8).uint64(message.respectPaid);
    }
    if (message.publisherReward !== BigInt(0)) {
      writer.uint32(16).uint64(message.publisherReward);
    }
    if (message.communityPoolFunds !== BigInt(0)) {
      writer.uint32(24).uint64(message.communityPoolFunds);
    }
    if (message.publisher !== "") {
      writer.uint32(34).string(message.publisher);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublisherRespectPaidEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisherRespectPaidEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.respectPaid = reader.uint64();
          break;
        case 2:
          message.publisherReward = reader.uint64();
          break;
        case 3:
          message.communityPoolFunds = reader.uint64();
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
  fromPartial(object: Partial<PublisherRespectPaidEvent>): PublisherRespectPaidEvent {
    const message = createBasePublisherRespectPaidEvent();
    message.respectPaid = object.respectPaid !== undefined && object.respectPaid !== null ? BigInt(object.respectPaid.toString()) : BigInt(0);
    message.publisherReward = object.publisherReward !== undefined && object.publisherReward !== null ? BigInt(object.publisherReward.toString()) : BigInt(0);
    message.communityPoolFunds = object.communityPoolFunds !== undefined && object.communityPoolFunds !== null ? BigInt(object.communityPoolFunds.toString()) : BigInt(0);
    message.publisher = object.publisher ?? "";
    return message;
  },
  fromAmino(object: PublisherRespectPaidEventAmino): PublisherRespectPaidEvent {
    const message = createBasePublisherRespectPaidEvent();
    if (object.respect_paid !== undefined && object.respect_paid !== null) {
      message.respectPaid = BigInt(object.respect_paid);
    }
    if (object.publisher_reward !== undefined && object.publisher_reward !== null) {
      message.publisherReward = BigInt(object.publisher_reward);
    }
    if (object.community_pool_funds !== undefined && object.community_pool_funds !== null) {
      message.communityPoolFunds = BigInt(object.community_pool_funds);
    }
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = object.publisher;
    }
    return message;
  },
  toAmino(message: PublisherRespectPaidEvent): PublisherRespectPaidEventAmino {
    const obj: any = {};
    obj.respect_paid = message.respectPaid !== BigInt(0) ? message.respectPaid?.toString() : undefined;
    obj.publisher_reward = message.publisherReward !== BigInt(0) ? message.publisherReward?.toString() : undefined;
    obj.community_pool_funds = message.communityPoolFunds !== BigInt(0) ? message.communityPoolFunds?.toString() : undefined;
    obj.publisher = message.publisher === "" ? undefined : message.publisher;
    return obj;
  },
  fromAminoMsg(object: PublisherRespectPaidEventAminoMsg): PublisherRespectPaidEvent {
    return PublisherRespectPaidEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherRespectPaidEventProtoMsg): PublisherRespectPaidEvent {
    return PublisherRespectPaidEvent.decode(message.value);
  },
  toProto(message: PublisherRespectPaidEvent): Uint8Array {
    return PublisherRespectPaidEvent.encode(message).finish();
  },
  toProtoMsg(message: PublisherRespectPaidEvent): PublisherRespectPaidEventProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.PublisherRespectPaidEvent",
      value: PublisherRespectPaidEvent.encode(message).finish()
    };
  }
};