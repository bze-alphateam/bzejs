import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface QueueMessage {
  messageId: string;
  marketId: string;
  messageType: string;
  amount: string;
  price: string;
  createdAt: Long;
  orderId: string;
  orderType: string;
  owner: string;
}
export interface QueueMessageSDKType {
  message_id: string;
  market_id: string;
  message_type: string;
  amount: string;
  price: string;
  created_at: Long;
  order_id: string;
  order_type: string;
  owner: string;
}

function createBaseQueueMessage(): QueueMessage {
  return {
    messageId: "",
    marketId: "",
    messageType: "",
    amount: "",
    price: "",
    createdAt: Long.ZERO,
    orderId: "",
    orderType: "",
    owner: ""
  };
}

export const QueueMessage = {
  encode(message: QueueMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.messageType !== "") {
      writer.uint32(26).string(message.messageType);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(48).int64(message.createdAt);
    }

    if (message.orderId !== "") {
      writer.uint32(58).string(message.orderId);
    }

    if (message.orderType !== "") {
      writer.uint32(66).string(message.orderType);
    }

    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueueMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.messageType = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.price = reader.string();
          break;

        case 6:
          message.createdAt = (reader.int64() as Long);
          break;

        case 7:
          message.orderId = reader.string();
          break;

        case 8:
          message.orderType = reader.string();
          break;

        case 9:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueueMessage>): QueueMessage {
    const message = createBaseQueueMessage();
    message.messageId = object.messageId ?? "";
    message.marketId = object.marketId ?? "";
    message.messageType = object.messageType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.orderId = object.orderId ?? "";
    message.orderType = object.orderType ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};