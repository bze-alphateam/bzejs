//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bze.cointrunk.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "bze/x/cointrunk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bze.cointrunk.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bze.cointrunk.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgAddArticle {
  publisher: string;
  title: string;
  url: string;
  picture: string;
}
export interface MsgAddArticleProtoMsg {
  typeUrl: "/bze.cointrunk.MsgAddArticle";
  value: Uint8Array;
}
/**
 * @name MsgAddArticleAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgAddArticle
 */
export interface MsgAddArticleAmino {
  publisher?: string;
  title?: string;
  url?: string;
  picture?: string;
}
export interface MsgAddArticleAminoMsg {
  type: "bze/x/cointrunk/MsgAddArticle";
  value: MsgAddArticleAmino;
}
export interface MsgAddArticleSDKType {
  publisher: string;
  title: string;
  url: string;
  picture: string;
}
export interface MsgAddArticleResponse {}
export interface MsgAddArticleResponseProtoMsg {
  typeUrl: "/bze.cointrunk.MsgAddArticleResponse";
  value: Uint8Array;
}
/**
 * @name MsgAddArticleResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgAddArticleResponse
 */
export interface MsgAddArticleResponseAmino {}
export interface MsgAddArticleResponseAminoMsg {
  type: "/bze.cointrunk.MsgAddArticleResponse";
  value: MsgAddArticleResponseAmino;
}
export interface MsgAddArticleResponseSDKType {}
export interface MsgPayPublisherRespect {
  creator: string;
  address: string;
  amount: string;
}
export interface MsgPayPublisherRespectProtoMsg {
  typeUrl: "/bze.cointrunk.MsgPayPublisherRespect";
  value: Uint8Array;
}
/**
 * @name MsgPayPublisherRespectAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgPayPublisherRespect
 */
export interface MsgPayPublisherRespectAmino {
  creator?: string;
  address?: string;
  amount?: string;
}
export interface MsgPayPublisherRespectAminoMsg {
  type: "bze/x/cointrunk/MsgPayPublisherRespect";
  value: MsgPayPublisherRespectAmino;
}
export interface MsgPayPublisherRespectSDKType {
  creator: string;
  address: string;
  amount: string;
}
export interface MsgPayPublisherRespectResponse {
  respectPaid: bigint;
  publisherReward: bigint;
  communityPoolFunds: bigint;
}
export interface MsgPayPublisherRespectResponseProtoMsg {
  typeUrl: "/bze.cointrunk.MsgPayPublisherRespectResponse";
  value: Uint8Array;
}
/**
 * @name MsgPayPublisherRespectResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgPayPublisherRespectResponse
 */
export interface MsgPayPublisherRespectResponseAmino {
  respect_paid?: string;
  publisher_reward?: string;
  community_pool_funds?: string;
}
export interface MsgPayPublisherRespectResponseAminoMsg {
  type: "/bze.cointrunk.MsgPayPublisherRespectResponse";
  value: MsgPayPublisherRespectResponseAmino;
}
export interface MsgPayPublisherRespectResponseSDKType {
  respect_paid: bigint;
  publisher_reward: bigint;
  community_pool_funds: bigint;
}
export interface MsgAcceptDomain {
  authority: string;
  domain: string;
  active: boolean;
}
export interface MsgAcceptDomainProtoMsg {
  typeUrl: "/bze.cointrunk.MsgAcceptDomain";
  value: Uint8Array;
}
/**
 * @name MsgAcceptDomainAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgAcceptDomain
 */
export interface MsgAcceptDomainAmino {
  authority?: string;
  domain?: string;
  active?: boolean;
}
export interface MsgAcceptDomainAminoMsg {
  type: "bze/x/cointrunk/MsgAcceptDomain";
  value: MsgAcceptDomainAmino;
}
export interface MsgAcceptDomainSDKType {
  authority: string;
  domain: string;
  active: boolean;
}
export interface MsgAcceptDomainResponse {}
export interface MsgAcceptDomainResponseProtoMsg {
  typeUrl: "/bze.cointrunk.MsgAcceptDomainResponse";
  value: Uint8Array;
}
/**
 * @name MsgAcceptDomainResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgAcceptDomainResponse
 */
export interface MsgAcceptDomainResponseAmino {}
export interface MsgAcceptDomainResponseAminoMsg {
  type: "/bze.cointrunk.MsgAcceptDomainResponse";
  value: MsgAcceptDomainResponseAmino;
}
export interface MsgAcceptDomainResponseSDKType {}
export interface MsgSavePublisher {
  authority: string;
  name: string;
  address: string;
  active: boolean;
}
export interface MsgSavePublisherProtoMsg {
  typeUrl: "/bze.cointrunk.MsgSavePublisher";
  value: Uint8Array;
}
/**
 * @name MsgSavePublisherAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgSavePublisher
 */
export interface MsgSavePublisherAmino {
  authority?: string;
  name?: string;
  address?: string;
  active?: boolean;
}
export interface MsgSavePublisherAminoMsg {
  type: "bze/x/cointrunk/MsgSavePublisher";
  value: MsgSavePublisherAmino;
}
export interface MsgSavePublisherSDKType {
  authority: string;
  name: string;
  address: string;
  active: boolean;
}
export interface MsgSavePublisherResponse {}
export interface MsgSavePublisherResponseProtoMsg {
  typeUrl: "/bze.cointrunk.MsgSavePublisherResponse";
  value: Uint8Array;
}
/**
 * @name MsgSavePublisherResponseAmino
 * @package bze.cointrunk
 * @see proto type: bze.cointrunk.MsgSavePublisherResponse
 */
export interface MsgSavePublisherResponseAmino {}
export interface MsgSavePublisherResponseAminoMsg {
  type: "/bze.cointrunk.MsgSavePublisherResponse";
  value: MsgSavePublisherResponseAmino;
}
export interface MsgSavePublisherResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/bze.cointrunk.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "bze/x/cointrunk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/bze.cointrunk.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddArticle(): MsgAddArticle {
  return {
    publisher: "",
    title: "",
    url: "",
    picture: ""
  };
}
export const MsgAddArticle = {
  typeUrl: "/bze.cointrunk.MsgAddArticle",
  encode(message: MsgAddArticle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddArticle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgAddArticle>): MsgAddArticle {
    const message = createBaseMsgAddArticle();
    message.publisher = object.publisher ?? "";
    message.title = object.title ?? "";
    message.url = object.url ?? "";
    message.picture = object.picture ?? "";
    return message;
  },
  fromAmino(object: MsgAddArticleAmino): MsgAddArticle {
    const message = createBaseMsgAddArticle();
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = object.publisher;
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
    return message;
  },
  toAmino(message: MsgAddArticle): MsgAddArticleAmino {
    const obj: any = {};
    obj.publisher = message.publisher === "" ? undefined : message.publisher;
    obj.title = message.title === "" ? undefined : message.title;
    obj.url = message.url === "" ? undefined : message.url;
    obj.picture = message.picture === "" ? undefined : message.picture;
    return obj;
  },
  fromAminoMsg(object: MsgAddArticleAminoMsg): MsgAddArticle {
    return MsgAddArticle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddArticle): MsgAddArticleAminoMsg {
    return {
      type: "bze/x/cointrunk/MsgAddArticle",
      value: MsgAddArticle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddArticleProtoMsg): MsgAddArticle {
    return MsgAddArticle.decode(message.value);
  },
  toProto(message: MsgAddArticle): Uint8Array {
    return MsgAddArticle.encode(message).finish();
  },
  toProtoMsg(message: MsgAddArticle): MsgAddArticleProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgAddArticle",
      value: MsgAddArticle.encode(message).finish()
    };
  }
};
function createBaseMsgAddArticleResponse(): MsgAddArticleResponse {
  return {};
}
export const MsgAddArticleResponse = {
  typeUrl: "/bze.cointrunk.MsgAddArticleResponse",
  encode(_: MsgAddArticleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddArticleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgAddArticleResponse>): MsgAddArticleResponse {
    const message = createBaseMsgAddArticleResponse();
    return message;
  },
  fromAmino(_: MsgAddArticleResponseAmino): MsgAddArticleResponse {
    const message = createBaseMsgAddArticleResponse();
    return message;
  },
  toAmino(_: MsgAddArticleResponse): MsgAddArticleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddArticleResponseAminoMsg): MsgAddArticleResponse {
    return MsgAddArticleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddArticleResponseProtoMsg): MsgAddArticleResponse {
    return MsgAddArticleResponse.decode(message.value);
  },
  toProto(message: MsgAddArticleResponse): Uint8Array {
    return MsgAddArticleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddArticleResponse): MsgAddArticleResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgAddArticleResponse",
      value: MsgAddArticleResponse.encode(message).finish()
    };
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
  typeUrl: "/bze.cointrunk.MsgPayPublisherRespect",
  encode(message: MsgPayPublisherRespect, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPublisherRespect {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgPayPublisherRespect>): MsgPayPublisherRespect {
    const message = createBaseMsgPayPublisherRespect();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgPayPublisherRespectAmino): MsgPayPublisherRespect {
    const message = createBaseMsgPayPublisherRespect();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgPayPublisherRespect): MsgPayPublisherRespectAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgPayPublisherRespectAminoMsg): MsgPayPublisherRespect {
    return MsgPayPublisherRespect.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPublisherRespect): MsgPayPublisherRespectAminoMsg {
    return {
      type: "bze/x/cointrunk/MsgPayPublisherRespect",
      value: MsgPayPublisherRespect.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayPublisherRespectProtoMsg): MsgPayPublisherRespect {
    return MsgPayPublisherRespect.decode(message.value);
  },
  toProto(message: MsgPayPublisherRespect): Uint8Array {
    return MsgPayPublisherRespect.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPublisherRespect): MsgPayPublisherRespectProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgPayPublisherRespect",
      value: MsgPayPublisherRespect.encode(message).finish()
    };
  }
};
function createBaseMsgPayPublisherRespectResponse(): MsgPayPublisherRespectResponse {
  return {
    respectPaid: BigInt(0),
    publisherReward: BigInt(0),
    communityPoolFunds: BigInt(0)
  };
}
export const MsgPayPublisherRespectResponse = {
  typeUrl: "/bze.cointrunk.MsgPayPublisherRespectResponse",
  encode(message: MsgPayPublisherRespectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.respectPaid !== BigInt(0)) {
      writer.uint32(8).uint64(message.respectPaid);
    }
    if (message.publisherReward !== BigInt(0)) {
      writer.uint32(16).uint64(message.publisherReward);
    }
    if (message.communityPoolFunds !== BigInt(0)) {
      writer.uint32(24).uint64(message.communityPoolFunds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPublisherRespectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPublisherRespectResponse();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPayPublisherRespectResponse>): MsgPayPublisherRespectResponse {
    const message = createBaseMsgPayPublisherRespectResponse();
    message.respectPaid = object.respectPaid !== undefined && object.respectPaid !== null ? BigInt(object.respectPaid.toString()) : BigInt(0);
    message.publisherReward = object.publisherReward !== undefined && object.publisherReward !== null ? BigInt(object.publisherReward.toString()) : BigInt(0);
    message.communityPoolFunds = object.communityPoolFunds !== undefined && object.communityPoolFunds !== null ? BigInt(object.communityPoolFunds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPayPublisherRespectResponseAmino): MsgPayPublisherRespectResponse {
    const message = createBaseMsgPayPublisherRespectResponse();
    if (object.respect_paid !== undefined && object.respect_paid !== null) {
      message.respectPaid = BigInt(object.respect_paid);
    }
    if (object.publisher_reward !== undefined && object.publisher_reward !== null) {
      message.publisherReward = BigInt(object.publisher_reward);
    }
    if (object.community_pool_funds !== undefined && object.community_pool_funds !== null) {
      message.communityPoolFunds = BigInt(object.community_pool_funds);
    }
    return message;
  },
  toAmino(message: MsgPayPublisherRespectResponse): MsgPayPublisherRespectResponseAmino {
    const obj: any = {};
    obj.respect_paid = message.respectPaid !== BigInt(0) ? message.respectPaid?.toString() : undefined;
    obj.publisher_reward = message.publisherReward !== BigInt(0) ? message.publisherReward?.toString() : undefined;
    obj.community_pool_funds = message.communityPoolFunds !== BigInt(0) ? message.communityPoolFunds?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPayPublisherRespectResponseAminoMsg): MsgPayPublisherRespectResponse {
    return MsgPayPublisherRespectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPayPublisherRespectResponseProtoMsg): MsgPayPublisherRespectResponse {
    return MsgPayPublisherRespectResponse.decode(message.value);
  },
  toProto(message: MsgPayPublisherRespectResponse): Uint8Array {
    return MsgPayPublisherRespectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayPublisherRespectResponse): MsgPayPublisherRespectResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgPayPublisherRespectResponse",
      value: MsgPayPublisherRespectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptDomain(): MsgAcceptDomain {
  return {
    authority: "",
    domain: "",
    active: false
  };
}
export const MsgAcceptDomain = {
  typeUrl: "/bze.cointrunk.MsgAcceptDomain",
  encode(message: MsgAcceptDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptDomain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.domain = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAcceptDomain>): MsgAcceptDomain {
    const message = createBaseMsgAcceptDomain();
    message.authority = object.authority ?? "";
    message.domain = object.domain ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MsgAcceptDomainAmino): MsgAcceptDomain {
    const message = createBaseMsgAcceptDomain();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MsgAcceptDomain): MsgAcceptDomainAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.domain = message.domain === "" ? undefined : message.domain;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptDomainAminoMsg): MsgAcceptDomain {
    return MsgAcceptDomain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptDomain): MsgAcceptDomainAminoMsg {
    return {
      type: "bze/x/cointrunk/MsgAcceptDomain",
      value: MsgAcceptDomain.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptDomainProtoMsg): MsgAcceptDomain {
    return MsgAcceptDomain.decode(message.value);
  },
  toProto(message: MsgAcceptDomain): Uint8Array {
    return MsgAcceptDomain.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptDomain): MsgAcceptDomainProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgAcceptDomain",
      value: MsgAcceptDomain.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptDomainResponse(): MsgAcceptDomainResponse {
  return {};
}
export const MsgAcceptDomainResponse = {
  typeUrl: "/bze.cointrunk.MsgAcceptDomainResponse",
  encode(_: MsgAcceptDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptDomainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptDomainResponse();
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
  fromPartial(_: Partial<MsgAcceptDomainResponse>): MsgAcceptDomainResponse {
    const message = createBaseMsgAcceptDomainResponse();
    return message;
  },
  fromAmino(_: MsgAcceptDomainResponseAmino): MsgAcceptDomainResponse {
    const message = createBaseMsgAcceptDomainResponse();
    return message;
  },
  toAmino(_: MsgAcceptDomainResponse): MsgAcceptDomainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptDomainResponseAminoMsg): MsgAcceptDomainResponse {
    return MsgAcceptDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptDomainResponseProtoMsg): MsgAcceptDomainResponse {
    return MsgAcceptDomainResponse.decode(message.value);
  },
  toProto(message: MsgAcceptDomainResponse): Uint8Array {
    return MsgAcceptDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptDomainResponse): MsgAcceptDomainResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgAcceptDomainResponse",
      value: MsgAcceptDomainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSavePublisher(): MsgSavePublisher {
  return {
    authority: "",
    name: "",
    address: "",
    active: false
  };
}
export const MsgSavePublisher = {
  typeUrl: "/bze.cointrunk.MsgSavePublisher",
  encode(message: MsgSavePublisher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSavePublisher {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSavePublisher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSavePublisher>): MsgSavePublisher {
    const message = createBaseMsgSavePublisher();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MsgSavePublisherAmino): MsgSavePublisher {
    const message = createBaseMsgSavePublisher();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MsgSavePublisher): MsgSavePublisherAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.address = message.address === "" ? undefined : message.address;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: MsgSavePublisherAminoMsg): MsgSavePublisher {
    return MsgSavePublisher.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSavePublisher): MsgSavePublisherAminoMsg {
    return {
      type: "bze/x/cointrunk/MsgSavePublisher",
      value: MsgSavePublisher.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSavePublisherProtoMsg): MsgSavePublisher {
    return MsgSavePublisher.decode(message.value);
  },
  toProto(message: MsgSavePublisher): Uint8Array {
    return MsgSavePublisher.encode(message).finish();
  },
  toProtoMsg(message: MsgSavePublisher): MsgSavePublisherProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgSavePublisher",
      value: MsgSavePublisher.encode(message).finish()
    };
  }
};
function createBaseMsgSavePublisherResponse(): MsgSavePublisherResponse {
  return {};
}
export const MsgSavePublisherResponse = {
  typeUrl: "/bze.cointrunk.MsgSavePublisherResponse",
  encode(_: MsgSavePublisherResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSavePublisherResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSavePublisherResponse();
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
  fromPartial(_: Partial<MsgSavePublisherResponse>): MsgSavePublisherResponse {
    const message = createBaseMsgSavePublisherResponse();
    return message;
  },
  fromAmino(_: MsgSavePublisherResponseAmino): MsgSavePublisherResponse {
    const message = createBaseMsgSavePublisherResponse();
    return message;
  },
  toAmino(_: MsgSavePublisherResponse): MsgSavePublisherResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSavePublisherResponseAminoMsg): MsgSavePublisherResponse {
    return MsgSavePublisherResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSavePublisherResponseProtoMsg): MsgSavePublisherResponse {
    return MsgSavePublisherResponse.decode(message.value);
  },
  toProto(message: MsgSavePublisherResponse): Uint8Array {
    return MsgSavePublisherResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSavePublisherResponse): MsgSavePublisherResponseProtoMsg {
    return {
      typeUrl: "/bze.cointrunk.MsgSavePublisherResponse",
      value: MsgSavePublisherResponse.encode(message).finish()
    };
  }
};