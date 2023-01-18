import { Params, ParamsSDKType } from "./params";
import { Publisher, PublisherSDKType } from "./publisher";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import { Article, ArticleSDKType } from "./article";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../helpers";
/** GenesisState defines the cointrunk module's genesis state. */

export interface GenesisState {
  params?: Params;
  publisherList: Publisher[];
  acceptedDomainList: AcceptedDomain[];
  articleList: Article[];
  articlesCounter: Long;
}
/** GenesisState defines the cointrunk module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  publisher_list: PublisherSDKType[];
  accepted_domain_list: AcceptedDomainSDKType[];
  article_list: ArticleSDKType[];
  articles_counter: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    publisherList: [],
    acceptedDomainList: [],
    articleList: [],
    articlesCounter: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.articlesCounter.isZero()) {
      writer.uint32(40).uint64(message.articlesCounter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.articlesCounter = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      publisherList: Array.isArray(object?.publisherList) ? object.publisherList.map((e: any) => Publisher.fromJSON(e)) : [],
      acceptedDomainList: Array.isArray(object?.acceptedDomainList) ? object.acceptedDomainList.map((e: any) => AcceptedDomain.fromJSON(e)) : [],
      articleList: Array.isArray(object?.articleList) ? object.articleList.map((e: any) => Article.fromJSON(e)) : [],
      articlesCounter: isSet(object.articlesCounter) ? Long.fromValue(object.articlesCounter) : Long.UZERO
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.publisherList) {
      obj.publisherList = message.publisherList.map(e => e ? Publisher.toJSON(e) : undefined);
    } else {
      obj.publisherList = [];
    }

    if (message.acceptedDomainList) {
      obj.acceptedDomainList = message.acceptedDomainList.map(e => e ? AcceptedDomain.toJSON(e) : undefined);
    } else {
      obj.acceptedDomainList = [];
    }

    if (message.articleList) {
      obj.articleList = message.articleList.map(e => e ? Article.toJSON(e) : undefined);
    } else {
      obj.articleList = [];
    }

    message.articlesCounter !== undefined && (obj.articlesCounter = (message.articlesCounter || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.publisherList = object.publisherList?.map(e => Publisher.fromPartial(e)) || [];
    message.acceptedDomainList = object.acceptedDomainList?.map(e => AcceptedDomain.fromPartial(e)) || [];
    message.articleList = object.articleList?.map(e => Article.fromPartial(e)) || [];
    message.articlesCounter = object.articlesCounter !== undefined && object.articlesCounter !== null ? Long.fromValue(object.articlesCounter) : Long.UZERO;
    return message;
  }

};