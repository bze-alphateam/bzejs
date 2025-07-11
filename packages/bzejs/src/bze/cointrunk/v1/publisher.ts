//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Publisher {
  name: string;
  address: string;
  active: boolean;
  articlesCount: number;
  createdAt: bigint;
  respect: bigint;
}
export interface PublisherProtoMsg {
  typeUrl: "/bze.cointrunk.v1.Publisher";
  value: Uint8Array;
}
/**
 * @name PublisherAmino
 * @package bze.cointrunk.v1
 * @see proto type: bze.cointrunk.v1.Publisher
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
  type: "/bze.cointrunk.v1.Publisher";
  value: PublisherAmino;
}
export interface PublisherSDKType {
  name: string;
  address: string;
  active: boolean;
  articles_count: number;
  created_at: bigint;
  respect: bigint;
}
function createBasePublisher(): Publisher {
  return {
    name: "",
    address: "",
    active: false,
    articlesCount: 0,
    createdAt: BigInt(0),
    respect: BigInt(0)
  };
}
export const Publisher = {
  typeUrl: "/bze.cointrunk.v1.Publisher",
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
    if (message.respect !== BigInt(0)) {
      writer.uint32(48).int64(message.respect);
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
          message.respect = reader.int64();
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
    message.respect = object.respect !== undefined && object.respect !== null ? BigInt(object.respect.toString()) : BigInt(0);
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
      message.respect = BigInt(object.respect);
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
    obj.respect = message.respect !== BigInt(0) ? message.respect?.toString() : undefined;
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
      typeUrl: "/bze.cointrunk.v1.Publisher",
      value: Publisher.encode(message).finish()
    };
  }
};