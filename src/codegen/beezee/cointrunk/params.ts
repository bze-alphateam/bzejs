import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../helpers";
/** Params defines the parameters for the module. */

export interface PublisherRespectParams {
  tax: string;
  denom: string;
}
/** Params defines the parameters for the module. */

export interface PublisherRespectParamsSDKType {
  tax: string;
  denom: string;
}
export interface Params {
  anonArticleLimit: Long;
  anonArticleCost?: Coin;
  publisherRespectParams?: PublisherRespectParams;
}
export interface ParamsSDKType {
  anon_article_limit: Long;
  anon_article_cost?: CoinSDKType;
  publisher_respect_params?: PublisherRespectParamsSDKType;
}

function createBasePublisherRespectParams(): PublisherRespectParams {
  return {
    tax: "",
    denom: ""
  };
}

export const PublisherRespectParams = {
  encode(message: PublisherRespectParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tax !== "") {
      writer.uint32(10).string(message.tax);
    }

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublisherRespectParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisherRespectParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tax = reader.string();
          break;

        case 5:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PublisherRespectParams {
    return {
      tax: isSet(object.tax) ? String(object.tax) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: PublisherRespectParams): unknown {
    const obj: any = {};
    message.tax !== undefined && (obj.tax = message.tax);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<PublisherRespectParams>): PublisherRespectParams {
    const message = createBasePublisherRespectParams();
    message.tax = object.tax ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    anonArticleLimit: Long.UZERO,
    anonArticleCost: undefined,
    publisherRespectParams: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.anonArticleLimit.isZero()) {
      writer.uint32(8).uint64(message.anonArticleLimit);
    }

    if (message.anonArticleCost !== undefined) {
      Coin.encode(message.anonArticleCost, writer.uint32(18).fork()).ldelim();
    }

    if (message.publisherRespectParams !== undefined) {
      PublisherRespectParams.encode(message.publisherRespectParams, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.anonArticleLimit = (reader.uint64() as Long);
          break;

        case 2:
          message.anonArticleCost = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.publisherRespectParams = PublisherRespectParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      anonArticleLimit: isSet(object.anonArticleLimit) ? Long.fromValue(object.anonArticleLimit) : Long.UZERO,
      anonArticleCost: isSet(object.anonArticleCost) ? Coin.fromJSON(object.anonArticleCost) : undefined,
      publisherRespectParams: isSet(object.publisherRespectParams) ? PublisherRespectParams.fromJSON(object.publisherRespectParams) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.anonArticleLimit !== undefined && (obj.anonArticleLimit = (message.anonArticleLimit || Long.UZERO).toString());
    message.anonArticleCost !== undefined && (obj.anonArticleCost = message.anonArticleCost ? Coin.toJSON(message.anonArticleCost) : undefined);
    message.publisherRespectParams !== undefined && (obj.publisherRespectParams = message.publisherRespectParams ? PublisherRespectParams.toJSON(message.publisherRespectParams) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.anonArticleLimit = object.anonArticleLimit !== undefined && object.anonArticleLimit !== null ? Long.fromValue(object.anonArticleLimit) : Long.UZERO;
    message.anonArticleCost = object.anonArticleCost !== undefined && object.anonArticleCost !== null ? Coin.fromPartial(object.anonArticleCost) : undefined;
    message.publisherRespectParams = object.publisherRespectParams !== undefined && object.publisherRespectParams !== null ? PublisherRespectParams.fromPartial(object.publisherRespectParams) : undefined;
    return message;
  }

};