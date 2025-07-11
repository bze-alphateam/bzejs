//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Publisher, PublisherAmino, PublisherSDKType, AcceptedDomain, AcceptedDomainAmino, AcceptedDomainSDKType, Article, ArticleAmino, ArticleSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the cointrunk module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  publisherList: Publisher[];
  acceptedDomainList: AcceptedDomain[];
  articleList: Article[];
  articlesCounter: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bze.cointrunk.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the cointrunk module's genesis state.
 * @name GenesisStateAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  publisher_list?: PublisherAmino[];
  accepted_domain_list?: AcceptedDomainAmino[];
  article_list?: ArticleAmino[];
  articles_counter?: string;
}
export interface GenesisStateAminoMsg {
  type: "/bze.cointrunk.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the cointrunk module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  publisher_list: PublisherSDKType[];
  accepted_domain_list: AcceptedDomainSDKType[];
  article_list: ArticleSDKType[];
  articles_counter: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    publisherList: [],
    acceptedDomainList: [],
    articleList: [],
    articlesCounter: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/bze.cointrunk.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.publisherList) {
      Publisher.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.acceptedDomainList) {
      AcceptedDomain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.articleList) {
      Article.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.articlesCounter !== BigInt(0)) {
      writer.uint32(40).uint64(message.articlesCounter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.publisherList.push(Publisher.decode(reader, reader.uint32()));
          break;
        case 3:
          message.acceptedDomainList.push(AcceptedDomain.decode(reader, reader.uint32()));
          break;
        case 4:
          message.articleList.push(Article.decode(reader, reader.uint32()));
          break;
        case 5:
          message.articlesCounter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.publisherList = object.publisherList?.map(e => Publisher.fromPartial(e)) || [];
    message.acceptedDomainList = object.acceptedDomainList?.map(e => AcceptedDomain.fromPartial(e)) || [];
    message.articleList = object.articleList?.map(e => Article.fromPartial(e)) || [];
    message.articlesCounter = object.articlesCounter !== undefined && object.articlesCounter !== null ? BigInt(object.articlesCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.publisherList = object.publisher_list?.map(e => Publisher.fromAmino(e)) || [];
    message.acceptedDomainList = object.accepted_domain_list?.map(e => AcceptedDomain.fromAmino(e)) || [];
    message.articleList = object.article_list?.map(e => Article.fromAmino(e)) || [];
    if (object.articles_counter !== undefined && object.articles_counter !== null) {
      message.articlesCounter = BigInt(object.articles_counter);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.publisherList) {
      obj.publisher_list = message.publisherList.map(e => e ? Publisher.toAmino(e) : undefined);
    } else {
      obj.publisher_list = message.publisherList;
    }
    if (message.acceptedDomainList) {
      obj.accepted_domain_list = message.acceptedDomainList.map(e => e ? AcceptedDomain.toAmino(e) : undefined);
    } else {
      obj.accepted_domain_list = message.acceptedDomainList;
    }
    if (message.articleList) {
      obj.article_list = message.articleList.map(e => e ? Article.toAmino(e) : undefined);
    } else {
      obj.article_list = message.articleList;
    }
    obj.articles_counter = message.articlesCounter !== BigInt(0) ? message.articlesCounter?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};