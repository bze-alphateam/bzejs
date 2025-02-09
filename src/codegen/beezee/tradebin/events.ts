import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface OrderCreateMessageEvent {
  creator: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
}
export interface OrderCreateMessageEventSDKType {
  creator: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
}
export interface OrderCancelMessageEvent {
  creator: string;
  marketId: string;
  orderId: string;
  orderType: string;
}
export interface OrderCancelMessageEventSDKType {
  creator: string;
  marketId: string;
  orderId: string;
  order_type: string;
}
export interface MarketCreatedEvent {
  creator: string;
  base: string;
  quote: string;
}
export interface MarketCreatedEventSDKType {
  creator: string;
  base: string;
  quote: string;
}
export interface OrderExecutedEvent {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  maker: string;
  taker: string;
}
export interface OrderExecutedEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  maker: string;
  taker: string;
}
export interface OrderCanceledEvent {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  owner: string;
}
export interface OrderCanceledEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  owner: string;
}
export interface OrderSavedEvent {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  owner: string;
}
export interface OrderSavedEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  owner: string;
}

function createBaseOrderCreateMessageEvent(): OrderCreateMessageEvent {
  return {
    creator: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: ""
  };
}

export const OrderCreateMessageEvent = {
  encode(message: OrderCreateMessageEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderCreateMessageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCreateMessageEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderCreateMessageEvent>): OrderCreateMessageEvent {
    const message = createBaseOrderCreateMessageEvent();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseOrderCancelMessageEvent(): OrderCancelMessageEvent {
  return {
    creator: "",
    marketId: "",
    orderId: "",
    orderType: ""
  };
}

export const OrderCancelMessageEvent = {
  encode(message: OrderCancelMessageEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.orderId !== "") {
      writer.uint32(26).string(message.orderId);
    }

    if (message.orderType !== "") {
      writer.uint32(34).string(message.orderType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderCancelMessageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCancelMessageEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.orderId = reader.string();
          break;

        case 4:
          message.orderType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderCancelMessageEvent>): OrderCancelMessageEvent {
    const message = createBaseOrderCancelMessageEvent();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderId = object.orderId ?? "";
    message.orderType = object.orderType ?? "";
    return message;
  }

};

function createBaseMarketCreatedEvent(): MarketCreatedEvent {
  return {
    creator: "",
    base: "",
    quote: ""
  };
}

export const MarketCreatedEvent = {
  encode(message: MarketCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketCreatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.base = reader.string();
          break;

        case 3:
          message.quote = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketCreatedEvent>): MarketCreatedEvent {
    const message = createBaseMarketCreatedEvent();
    message.creator = object.creator ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  }

};

function createBaseOrderExecutedEvent(): OrderExecutedEvent {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    maker: "",
    taker: ""
  };
}

export const OrderExecutedEvent = {
  encode(message: OrderExecutedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.maker !== "") {
      writer.uint32(50).string(message.maker);
    }

    if (message.taker !== "") {
      writer.uint32(58).string(message.taker);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderExecutedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderExecutedEvent();

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

  fromPartial(object: DeepPartial<OrderExecutedEvent>): OrderExecutedEvent {
    const message = createBaseOrderExecutedEvent();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.maker = object.maker ?? "";
    message.taker = object.taker ?? "";
    return message;
  }

};

function createBaseOrderCanceledEvent(): OrderCanceledEvent {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    owner: ""
  };
}

export const OrderCanceledEvent = {
  encode(message: OrderCanceledEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderCanceledEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCanceledEvent();

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
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderCanceledEvent>): OrderCanceledEvent {
    const message = createBaseOrderCanceledEvent();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseOrderSavedEvent(): OrderSavedEvent {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    owner: ""
  };
}

export const OrderSavedEvent = {
  encode(message: OrderSavedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderSavedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderSavedEvent();

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
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderSavedEvent>): OrderSavedEvent {
    const message = createBaseOrderSavedEvent();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};