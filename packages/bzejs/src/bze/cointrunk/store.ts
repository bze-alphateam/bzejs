//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface AcceptedDomain {
  domain: string;
  active: boolean;
}
export interface AcceptedDomainProtoMsg {
  typeUrl: "/bze.cointrunk.AcceptedDomain";
  value: Uint8Array;
}
/**
 * @name AcceptedDomainAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.AcceptedDomain
 */
export interface AcceptedDomainAmino {
  domain?: string;
  active?: boolean;
}
export interface AcceptedDomainAminoMsg {
  type: "/bze.cointrunk.AcceptedDomain";
  value: AcceptedDomainAmino;
}
export interface AcceptedDomainSDKType {
  domain: string;
  active: boolean;
}
export interface AnonArticlesCounter {
  key: string;
  counter: bigint;
}
export interface AnonArticlesCounterProtoMsg {
  typeUrl: "/bze.cointrunk.AnonArticlesCounter";
  value: Uint8Array;
}
/**
 * @name AnonArticlesCounterAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.AnonArticlesCounter
 */
export interface AnonArticlesCounterAmino {
  key?: string;
  counter?: string;
}
export interface AnonArticlesCounterAminoMsg {
  type: "/bze.cointrunk.AnonArticlesCounter";
  value: AnonArticlesCounterAmino;
}
export interface AnonArticlesCounterSDKType {
  key: string;
  counter: bigint;
}
export interface Article {
  id: bigint;
  title: string;
  url: string;
  picture: string;
  publisher: string;
  paid: boolean;
  createdAt: bigint;
}
export interface ArticleProtoMsg {
  typeUrl: "/bze.cointrunk.Article";
  value: Uint8Array;
}
/**
 * @name ArticleAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.Article
 */
export interface ArticleAmino {
  id?: string;
  title?: string;
  url?: string;
  picture?: string;
  publisher?: string;
  paid?: boolean;
  created_at?: string;
}
export interface ArticleAminoMsg {
  type: "/bze.cointrunk.Article";
  value: ArticleAmino;
}
export interface ArticleSDKType {
  id: bigint;
  title: string;
  url: string;
  picture: string;
  publisher: string;
  paid: boolean;
  created_at: bigint;
}
export interface Publisher {
  name: string;
  address: string;
  active: boolean;
  articlesCount: number;
  createdAt: bigint;
  respect: string;
}
export interface PublisherProtoMsg {
  typeUrl: "/bze.cointrunk.Publisher";
  value: Uint8Array;
}
/**
 * @name PublisherAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.Publisher
 */
export interface PublisherAmino {
  name?: string;
  address?: string;
  active?: boolean;
  articles_count?: number;
  created_at?: string;
  respect?: string;
}
export interface PublisherAminoMsg {
  type: "/bze.cointrunk.Publisher";
  value: PublisherAmino;
}
export interface PublisherSDKType {
  name: string;
  address: string;
  active: boolean;
  articles_count: number;
  created_at: bigint;
  respect: string;
}
function createBaseAcceptedDomain(): AcceptedDomain {
  return {
    domain: "",
    active: false
  };
}
export const AcceptedDomain = {
  typeUrl: "/bze.cointrunk.AcceptedDomain",
  encode(message: AcceptedDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AcceptedDomain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<AcceptedDomain>): AcceptedDomain {
    const message = createBaseAcceptedDomain();
    message.domain = object.domain ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: AcceptedDomainAmino): AcceptedDomain {
    const message = createBaseAcceptedDomain();
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: AcceptedDomain): AcceptedDomainAmino {
    const obj: any = {};
    obj.domain = message.domain === "" ? undefined : message.domain;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: AcceptedDomainAminoMsg): AcceptedDomain {
    return AcceptedDomain.fromAmino(object.value);
  },
  fromProtoMsg(message: AcceptedDomainProtoMsg): AcceptedDomain {
    return AcceptedDomain.decode(message.value);
  },
  toProto(message: AcceptedDomain): Uint8Array {
    return AcceptedDomain.encode(message).finish();
  },
  toProtoMsg(message: AcceptedDomain): AcceptedDomainProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.AcceptedDomain",
      value: AcceptedDomain.encode(message).finish()
    };
  }
};
function createBaseAnonArticlesCounter(): AnonArticlesCounter {
  return {
    key: "",
    counter: BigInt(0)
  };
}
export const AnonArticlesCounter = {
  typeUrl: "/bze.cointrunk.AnonArticlesCounter",
  encode(message: AnonArticlesCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.counter !== BigInt(0)) {
      writer.uint32(16).uint64(message.counter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnonArticlesCounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnonArticlesCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.counter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AnonArticlesCounter>): AnonArticlesCounter {
    const message = createBaseAnonArticlesCounter();
    message.key = object.key ?? "";
    message.counter = object.counter !== undefined && object.counter !== null ? BigInt(object.counter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AnonArticlesCounterAmino): AnonArticlesCounter {
    const message = createBaseAnonArticlesCounter();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = BigInt(object.counter);
    }
    return message;
  },
  toAmino(message: AnonArticlesCounter): AnonArticlesCounterAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.counter = message.counter !== BigInt(0) ? message.counter?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AnonArticlesCounterAminoMsg): AnonArticlesCounter {
    return AnonArticlesCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: AnonArticlesCounterProtoMsg): AnonArticlesCounter {
    return AnonArticlesCounter.decode(message.value);
  },
  toProto(message: AnonArticlesCounter): Uint8Array {
    return AnonArticlesCounter.encode(message).finish();
  },
  toProtoMsg(message: AnonArticlesCounter): AnonArticlesCounterProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.AnonArticlesCounter",
      value: AnonArticlesCounter.encode(message).finish()
    };
  }
};
function createBaseArticle(): Article {
  return {
    id: BigInt(0),
    title: "",
    url: "",
    picture: "",
    publisher: "",
    paid: false,
    createdAt: BigInt(0)
  };
}
export const Article = {
  typeUrl: "/bze.cointrunk.Article",
  encode(message: Article, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Article {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArticle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Article>): Article {
    const message = createBaseArticle();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.url = object.url ?? "";
    message.picture = object.picture ?? "";
    message.publisher = object.publisher ?? "";
    message.paid = object.paid ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ArticleAmino): Article {
    const message = createBaseArticle();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.picture !== undefined && object.picture !== null) {
      message.picture = object.picture;
    }
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = object.publisher;
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Article): ArticleAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.url = message.url === "" ? undefined : message.url;
    obj.picture = message.picture === "" ? undefined : message.picture;
    obj.publisher = message.publisher === "" ? undefined : message.publisher;
    obj.paid = message.paid === false ? undefined : message.paid;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ArticleAminoMsg): Article {
    return Article.fromAmino(object.value);
  },
  fromProtoMsg(message: ArticleProtoMsg): Article {
    return Article.decode(message.value);
  },
  toProto(message: Article): Uint8Array {
    return Article.encode(message).finish();
  },
  toProtoMsg(message: Article): ArticleProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.Article",
      value: Article.encode(message).finish()
    };
  }
};
function createBasePublisher(): Publisher {
  return {
    name: "",
    address: "",
    active: false,
    articlesCount: 0,
    createdAt: BigInt(0),
    respect: ""
  };
}
export const Publisher = {
  typeUrl: "/bze.cointrunk.Publisher",
  encode(message: Publisher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.respect !== "") {
      writer.uint32(50).string(message.respect);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Publisher {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.createdAt = reader.int64();
          break;
        case 6:
          message.respect = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Publisher>): Publisher {
    const message = createBasePublisher();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
    message.articlesCount = object.articlesCount ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.respect = object.respect ?? "";
    return message;
  },
  fromAmino(object: PublisherAmino): Publisher {
    const message = createBasePublisher();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.articles_count !== undefined && object.articles_count !== null) {
      message.articlesCount = object.articles_count;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.respect !== undefined && object.respect !== null) {
      message.respect = object.respect;
    }
    return message;
  },
  toAmino(message: Publisher): PublisherAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.address = message.address === "" ? undefined : message.address;
    obj.active = message.active === false ? undefined : message.active;
    obj.articles_count = message.articlesCount === 0 ? undefined : message.articlesCount;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.respect = message.respect === "" ? undefined : message.respect;
    return obj;
  },
  fromAminoMsg(object: PublisherAminoMsg): Publisher {
    return Publisher.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherProtoMsg): Publisher {
    return Publisher.decode(message.value);
  },
  toProto(message: Publisher): Uint8Array {
    return Publisher.encode(message).finish();
  },
  toProtoMsg(message: Publisher): PublisherProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.Publisher",
      value: Publisher.encode(message).finish()
    };
  }
};