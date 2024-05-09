import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface Order {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  createdAt: Long;
  owner: string;
}
export interface OrderSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  created_at: Long;
  owner: string;
}
export interface OrderReference {
  id: string;
  marketId: string;
  orderType: string;
}
export interface OrderReferenceSDKType {
  id: string;
  market_id: string;
  order_type: string;
}
export interface AggregatedOrder {
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
}
export interface AggregatedOrderSDKType {
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
}
export interface HistoryOrder {
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  executedAt: Long;
  maker: string;
  taker: string;
}
export interface HistoryOrderSDKType {
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  executed_at: Long;
  maker: string;
  taker: string;
}

function createBaseOrder(): Order {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    createdAt: Long.ZERO,
    owner: ""
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
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

    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.orderType = reader.string();
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
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseOrderReference(): OrderReference {
  return {
    id: "",
    marketId: "",
    orderType: ""
  };
}

export const OrderReference = {
  encode(message: OrderReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderReference();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.orderType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderReference>): OrderReference {
    const message = createBaseOrderReference();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    return message;
  }

};

function createBaseAggregatedOrder(): AggregatedOrder {
  return {
    marketId: "",
    orderType: "",
    amount: "",
    price: ""
  };
}

export const AggregatedOrder = {
  encode(message: AggregatedOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.orderType !== "") {
      writer.uint32(18).string(message.orderType);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregatedOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregatedOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.orderType = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AggregatedOrder>): AggregatedOrder {
    const message = createBaseAggregatedOrder();
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseHistoryOrder(): HistoryOrder {
  return {
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    executedAt: Long.ZERO,
    maker: "",
    taker: ""
  };
}

export const HistoryOrder = {
  encode(message: HistoryOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.orderType !== "") {
      writer.uint32(18).string(message.orderType);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    if (!message.executedAt.isZero()) {
      writer.uint32(40).int64(message.executedAt);
    }

    if (message.maker !== "") {
      writer.uint32(50).string(message.maker);
    }

    if (message.taker !== "") {
      writer.uint32(58).string(message.taker);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoryOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoryOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.orderType = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.price = reader.string();
          break;

        case 5:
          message.executedAt = (reader.int64() as Long);
          break;

        case 6:
          message.maker = reader.string();
          break;

        case 7:
          message.taker = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HistoryOrder>): HistoryOrder {
    const message = createBaseHistoryOrder();
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.executedAt = object.executedAt !== undefined && object.executedAt !== null ? Long.fromValue(object.executedAt) : Long.ZERO;
    message.maker = object.maker ?? "";
    message.taker = object.taker ?? "";
    return message;
  }

};