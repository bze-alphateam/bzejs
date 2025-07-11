//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface PublisherRespectParams {
  tax: string;
  denom: string;
}
export interface PublisherRespectParamsProtoMsg {
  typeUrl: "/bze.cointrunk.PublisherRespectParams";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name PublisherRespectParamsAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.PublisherRespectParams
 */
export interface PublisherRespectParamsAmino {
  tax?: string;
  denom?: string;
}
export interface PublisherRespectParamsAminoMsg {
  type: "/bze.cointrunk.PublisherRespectParams";
  value: PublisherRespectParamsAmino;
}
/** Params defines the parameters for the module. */
export interface PublisherRespectParamsSDKType {
  tax: string;
  denom: string;
}
/** Params defines the parameters for the module. */
export interface Params {
  anonArticleLimit: bigint;
  anonArticleCost: Coin;
  publisherRespectParams: PublisherRespectParams;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.cointrunk.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.Params
 */
export interface ParamsAmino {
  anon_article_limit?: string;
  anon_article_cost?: CoinAmino;
  publisher_respect_params?: PublisherRespectParamsAmino;
}
export interface ParamsAminoMsg {
  type: "bze/x/cointrunk/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  anon_article_limit: bigint;
  anon_article_cost: CoinSDKType;
  publisher_respect_params: PublisherRespectParamsSDKType;
}
function createBasePublisherRespectParams(): PublisherRespectParams {
  return {
    tax: "",
    denom: ""
  };
}
export const PublisherRespectParams = {
  typeUrl: "/bze.cointrunk.PublisherRespectParams",
  encode(message: PublisherRespectParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.tax, 18).atomics);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublisherRespectParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublisherRespectParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tax = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object: Partial<PublisherRespectParams>): PublisherRespectParams {
    const message = createBasePublisherRespectParams();
    message.tax = object.tax ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: PublisherRespectParamsAmino): PublisherRespectParams {
    const message = createBasePublisherRespectParams();
    if (object.tax !== undefined && object.tax !== null) {
      message.tax = object.tax;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: PublisherRespectParams): PublisherRespectParamsAmino {
    const obj: any = {};
    obj.tax = message.tax === "" ? undefined : message.tax;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: PublisherRespectParamsAminoMsg): PublisherRespectParams {
    return PublisherRespectParams.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherRespectParamsProtoMsg): PublisherRespectParams {
    return PublisherRespectParams.decode(message.value);
  },
  toProto(message: PublisherRespectParams): Uint8Array {
    return PublisherRespectParams.encode(message).finish();
  },
  toProtoMsg(message: PublisherRespectParams): PublisherRespectParamsProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.PublisherRespectParams",
      value: PublisherRespectParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    anonArticleLimit: BigInt(0),
    anonArticleCost: Coin.fromPartial({}),
    publisherRespectParams: PublisherRespectParams.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/bze.cointrunk.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.anonArticleLimit !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anonArticleLimit = reader.uint64();
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.anonArticleLimit = object.anonArticleLimit !== undefined && object.anonArticleLimit !== null ? BigInt(object.anonArticleLimit.toString()) : BigInt(0);
    message.anonArticleCost = object.anonArticleCost !== undefined && object.anonArticleCost !== null ? Coin.fromPartial(object.anonArticleCost) : undefined;
    message.publisherRespectParams = object.publisherRespectParams !== undefined && object.publisherRespectParams !== null ? PublisherRespectParams.fromPartial(object.publisherRespectParams) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.anon_article_limit !== undefined && object.anon_article_limit !== null) {
      message.anonArticleLimit = BigInt(object.anon_article_limit);
    }
    if (object.anon_article_cost !== undefined && object.anon_article_cost !== null) {
      message.anonArticleCost = Coin.fromAmino(object.anon_article_cost);
    }
    if (object.publisher_respect_params !== undefined && object.publisher_respect_params !== null) {
      message.publisherRespectParams = PublisherRespectParams.fromAmino(object.publisher_respect_params);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.anon_article_limit = message.anonArticleLimit !== BigInt(0) ? message.anonArticleLimit?.toString() : undefined;
    obj.anon_article_cost = message.anonArticleCost ? Coin.toAmino(message.anonArticleCost) : undefined;
    obj.publisher_respect_params = message.publisherRespectParams ? PublisherRespectParams.toAmino(message.publisherRespectParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/cointrunk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.Params",
      value: Params.encode(message).finish()
    };
  }
};