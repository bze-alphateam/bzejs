//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface OrderCreateMessageEvent {
  creator: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
}
export interface OrderCreateMessageEventProtoMsg {
  typeUrl: "/bze.tradebin.OrderCreateMessageEvent";
  value: Uint8Array;
}
/**
 * @name OrderCreateMessageEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderCreateMessageEvent
 */
export interface OrderCreateMessageEventAmino {
  creator?: string;
  market_id?: string;
  order_type?: string;
  amount?: string;
  price?: string;
}
export interface OrderCreateMessageEventAminoMsg {
  type: "/bze.tradebin.OrderCreateMessageEvent";
  value: OrderCreateMessageEventAmino;
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
export interface OrderCancelMessageEventProtoMsg {
  typeUrl: "/bze.tradebin.OrderCancelMessageEvent";
  value: Uint8Array;
}
/**
 * @name OrderCancelMessageEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderCancelMessageEvent
 */
export interface OrderCancelMessageEventAmino {
  creator?: string;
  marketId?: string;
  orderId?: string;
  order_type?: string;
}
export interface OrderCancelMessageEventAminoMsg {
  type: "/bze.tradebin.OrderCancelMessageEvent";
  value: OrderCancelMessageEventAmino;
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
export interface MarketCreatedEventProtoMsg {
  typeUrl: "/bze.tradebin.MarketCreatedEvent";
  value: Uint8Array;
}
/**
 * @name MarketCreatedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MarketCreatedEvent
 */
export interface MarketCreatedEventAmino {
  creator?: string;
  base?: string;
  quote?: string;
}
export interface MarketCreatedEventAminoMsg {
  type: "/bze.tradebin.MarketCreatedEvent";
  value: MarketCreatedEventAmino;
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
export interface OrderExecutedEventProtoMsg {
  typeUrl: "/bze.tradebin.OrderExecutedEvent";
  value: Uint8Array;
}
/**
 * @name OrderExecutedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderExecutedEvent
 */
export interface OrderExecutedEventAmino {
  id?: string;
  market_id?: string;
  order_type?: string;
  amount?: string;
  price?: string;
  maker?: string;
  taker?: string;
}
export interface OrderExecutedEventAminoMsg {
  type: "/bze.tradebin.OrderExecutedEvent";
  value: OrderExecutedEventAmino;
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
export interface OrderCanceledEventProtoMsg {
  typeUrl: "/bze.tradebin.OrderCanceledEvent";
  value: Uint8Array;
}
/**
 * @name OrderCanceledEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderCanceledEvent
 */
export interface OrderCanceledEventAmino {
  id?: string;
  market_id?: string;
  order_type?: string;
  amount?: string;
  price?: string;
  owner?: string;
}
export interface OrderCanceledEventAminoMsg {
  type: "/bze.tradebin.OrderCanceledEvent";
  value: OrderCanceledEventAmino;
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
export interface OrderSavedEventProtoMsg {
  typeUrl: "/bze.tradebin.OrderSavedEvent";
  value: Uint8Array;
}
/**
 * @name OrderSavedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderSavedEvent
 */
export interface OrderSavedEventAmino {
  id?: string;
  market_id?: string;
  order_type?: string;
  amount?: string;
  price?: string;
  owner?: string;
}
export interface OrderSavedEventAminoMsg {
  type: "/bze.tradebin.OrderSavedEvent";
  value: OrderSavedEventAmino;
}
export interface OrderSavedEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  owner: string;
}
export interface PoolCreatedEvent {
  creator: string;
  base: string;
  quote: string;
}
export interface PoolCreatedEventProtoMsg {
  typeUrl: "/bze.tradebin.PoolCreatedEvent";
  value: Uint8Array;
}
/**
 * @name PoolCreatedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolCreatedEvent
 */
export interface PoolCreatedEventAmino {
  creator?: string;
  base?: string;
  quote?: string;
}
export interface PoolCreatedEventAminoMsg {
  type: "/bze.tradebin.PoolCreatedEvent";
  value: PoolCreatedEventAmino;
}
export interface PoolCreatedEventSDKType {
  creator: string;
  base: string;
  quote: string;
}
export interface LiquidityAddedEvent {
  creator: string;
  baseAmount: string;
  quoteAmount: string;
  mintedAmount: string;
  poolId: string;
}
export interface LiquidityAddedEventProtoMsg {
  typeUrl: "/bze.tradebin.LiquidityAddedEvent";
  value: Uint8Array;
}
/**
 * @name LiquidityAddedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityAddedEvent
 */
export interface LiquidityAddedEventAmino {
  creator?: string;
  baseAmount?: string;
  quoteAmount?: string;
  mintedAmount?: string;
  pool_id?: string;
}
export interface LiquidityAddedEventAminoMsg {
  type: "/bze.tradebin.LiquidityAddedEvent";
  value: LiquidityAddedEventAmino;
}
export interface LiquidityAddedEventSDKType {
  creator: string;
  baseAmount: string;
  quoteAmount: string;
  mintedAmount: string;
  pool_id: string;
}
export interface LiquidityRemovedEvent {
  creator: string;
  /** Fee ex: 0.001 = 0.1% */
  baseAmount: string;
  /** Fee ex: 0.001 = 0.1% */
  quoteAmount: string;
  poolId: string;
}
export interface LiquidityRemovedEventProtoMsg {
  typeUrl: "/bze.tradebin.LiquidityRemovedEvent";
  value: Uint8Array;
}
/**
 * @name LiquidityRemovedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityRemovedEvent
 */
export interface LiquidityRemovedEventAmino {
  creator?: string;
  /**
   * Fee ex: 0.001 = 0.1%
   */
  baseAmount?: string;
  /**
   * Fee ex: 0.001 = 0.1%
   */
  quoteAmount?: string;
  pool_id?: string;
}
export interface LiquidityRemovedEventAminoMsg {
  type: "/bze.tradebin.LiquidityRemovedEvent";
  value: LiquidityRemovedEventAmino;
}
export interface LiquidityRemovedEventSDKType {
  creator: string;
  baseAmount: string;
  quoteAmount: string;
  pool_id: string;
}
export interface SwapEvent {
  creator: string;
  in: Coin;
  out: Coin;
  poolId: string;
}
export interface SwapEventProtoMsg {
  typeUrl: "/bze.tradebin.SwapEvent";
  value: Uint8Array;
}
/**
 * @name SwapEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.SwapEvent
 */
export interface SwapEventAmino {
  creator?: string;
  in?: CoinAmino;
  out?: CoinAmino;
  pool_id?: string;
}
export interface SwapEventAminoMsg {
  type: "/bze.tradebin.SwapEvent";
  value: SwapEventAmino;
}
export interface SwapEventSDKType {
  creator: string;
  in: CoinSDKType;
  out: CoinSDKType;
  pool_id: string;
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
  typeUrl: "/bze.tradebin.OrderCreateMessageEvent",
  encode(message: OrderCreateMessageEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): OrderCreateMessageEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<OrderCreateMessageEvent>): OrderCreateMessageEvent {
    const message = createBaseOrderCreateMessageEvent();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: OrderCreateMessageEventAmino): OrderCreateMessageEvent {
    const message = createBaseOrderCreateMessageEvent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: OrderCreateMessageEvent): OrderCreateMessageEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: OrderCreateMessageEventAminoMsg): OrderCreateMessageEvent {
    return OrderCreateMessageEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderCreateMessageEventProtoMsg): OrderCreateMessageEvent {
    return OrderCreateMessageEvent.decode(message.value);
  },
  toProto(message: OrderCreateMessageEvent): Uint8Array {
    return OrderCreateMessageEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderCreateMessageEvent): OrderCreateMessageEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderCreateMessageEvent",
      value: OrderCreateMessageEvent.encode(message).finish()
    };
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
  typeUrl: "/bze.tradebin.OrderCancelMessageEvent",
  encode(message: OrderCancelMessageEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): OrderCancelMessageEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<OrderCancelMessageEvent>): OrderCancelMessageEvent {
    const message = createBaseOrderCancelMessageEvent();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderId = object.orderId ?? "";
    message.orderType = object.orderType ?? "";
    return message;
  },
  fromAmino(object: OrderCancelMessageEventAmino): OrderCancelMessageEvent {
    const message = createBaseOrderCancelMessageEvent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    return message;
  },
  toAmino(message: OrderCancelMessageEvent): OrderCancelMessageEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.marketId = message.marketId === "" ? undefined : message.marketId;
    obj.orderId = message.orderId === "" ? undefined : message.orderId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    return obj;
  },
  fromAminoMsg(object: OrderCancelMessageEventAminoMsg): OrderCancelMessageEvent {
    return OrderCancelMessageEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderCancelMessageEventProtoMsg): OrderCancelMessageEvent {
    return OrderCancelMessageEvent.decode(message.value);
  },
  toProto(message: OrderCancelMessageEvent): Uint8Array {
    return OrderCancelMessageEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderCancelMessageEvent): OrderCancelMessageEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderCancelMessageEvent",
      value: OrderCancelMessageEvent.encode(message).finish()
    };
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
  typeUrl: "/bze.tradebin.MarketCreatedEvent",
  encode(message: MarketCreatedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MarketCreatedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MarketCreatedEvent>): MarketCreatedEvent {
    const message = createBaseMarketCreatedEvent();
    message.creator = object.creator ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: MarketCreatedEventAmino): MarketCreatedEvent {
    const message = createBaseMarketCreatedEvent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    return message;
  },
  toAmino(message: MarketCreatedEvent): MarketCreatedEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: MarketCreatedEventAminoMsg): MarketCreatedEvent {
    return MarketCreatedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketCreatedEventProtoMsg): MarketCreatedEvent {
    return MarketCreatedEvent.decode(message.value);
  },
  toProto(message: MarketCreatedEvent): Uint8Array {
    return MarketCreatedEvent.encode(message).finish();
  },
  toProtoMsg(message: MarketCreatedEvent): MarketCreatedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MarketCreatedEvent",
      value: MarketCreatedEvent.encode(message).finish()
    };
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
  typeUrl: "/bze.tradebin.OrderExecutedEvent",
  encode(message: OrderExecutedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): OrderExecutedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<OrderExecutedEvent>): OrderExecutedEvent {
    const message = createBaseOrderExecutedEvent();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.maker = object.maker ?? "";
    message.taker = object.taker ?? "";
    return message;
  },
  fromAmino(object: OrderExecutedEventAmino): OrderExecutedEvent {
    const message = createBaseOrderExecutedEvent();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.maker !== undefined && object.maker !== null) {
      message.maker = object.maker;
    }
    if (object.taker !== undefined && object.taker !== null) {
      message.taker = object.taker;
    }
    return message;
  },
  toAmino(message: OrderExecutedEvent): OrderExecutedEventAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    obj.maker = message.maker === "" ? undefined : message.maker;
    obj.taker = message.taker === "" ? undefined : message.taker;
    return obj;
  },
  fromAminoMsg(object: OrderExecutedEventAminoMsg): OrderExecutedEvent {
    return OrderExecutedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderExecutedEventProtoMsg): OrderExecutedEvent {
    return OrderExecutedEvent.decode(message.value);
  },
  toProto(message: OrderExecutedEvent): Uint8Array {
    return OrderExecutedEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderExecutedEvent): OrderExecutedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderExecutedEvent",
      value: OrderExecutedEvent.encode(message).finish()
    };
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
  typeUrl: "/bze.tradebin.OrderCanceledEvent",
  encode(message: OrderCanceledEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): OrderCanceledEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<OrderCanceledEvent>): OrderCanceledEvent {
    const message = createBaseOrderCanceledEvent();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: OrderCanceledEventAmino): OrderCanceledEvent {
    const message = createBaseOrderCanceledEvent();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: OrderCanceledEvent): OrderCanceledEventAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: OrderCanceledEventAminoMsg): OrderCanceledEvent {
    return OrderCanceledEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderCanceledEventProtoMsg): OrderCanceledEvent {
    return OrderCanceledEvent.decode(message.value);
  },
  toProto(message: OrderCanceledEvent): Uint8Array {
    return OrderCanceledEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderCanceledEvent): OrderCanceledEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderCanceledEvent",
      value: OrderCanceledEvent.encode(message).finish()
    };
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
  typeUrl: "/bze.tradebin.OrderSavedEvent",
  encode(message: OrderSavedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): OrderSavedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<OrderSavedEvent>): OrderSavedEvent {
    const message = createBaseOrderSavedEvent();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: OrderSavedEventAmino): OrderSavedEvent {
    const message = createBaseOrderSavedEvent();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: OrderSavedEvent): OrderSavedEventAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: OrderSavedEventAminoMsg): OrderSavedEvent {
    return OrderSavedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderSavedEventProtoMsg): OrderSavedEvent {
    return OrderSavedEvent.decode(message.value);
  },
  toProto(message: OrderSavedEvent): Uint8Array {
    return OrderSavedEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderSavedEvent): OrderSavedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderSavedEvent",
      value: OrderSavedEvent.encode(message).finish()
    };
  }
};
function createBasePoolCreatedEvent(): PoolCreatedEvent {
  return {
    creator: "",
    base: "",
    quote: ""
  };
}
export const PoolCreatedEvent = {
  typeUrl: "/bze.tradebin.PoolCreatedEvent",
  encode(message: PoolCreatedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PoolCreatedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolCreatedEvent();
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
  fromPartial(object: Partial<PoolCreatedEvent>): PoolCreatedEvent {
    const message = createBasePoolCreatedEvent();
    message.creator = object.creator ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: PoolCreatedEventAmino): PoolCreatedEvent {
    const message = createBasePoolCreatedEvent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    return message;
  },
  toAmino(message: PoolCreatedEvent): PoolCreatedEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: PoolCreatedEventAminoMsg): PoolCreatedEvent {
    return PoolCreatedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolCreatedEventProtoMsg): PoolCreatedEvent {
    return PoolCreatedEvent.decode(message.value);
  },
  toProto(message: PoolCreatedEvent): Uint8Array {
    return PoolCreatedEvent.encode(message).finish();
  },
  toProtoMsg(message: PoolCreatedEvent): PoolCreatedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.PoolCreatedEvent",
      value: PoolCreatedEvent.encode(message).finish()
    };
  }
};
function createBaseLiquidityAddedEvent(): LiquidityAddedEvent {
  return {
    creator: "",
    baseAmount: "",
    quoteAmount: "",
    mintedAmount: "",
    poolId: ""
  };
}
export const LiquidityAddedEvent = {
  typeUrl: "/bze.tradebin.LiquidityAddedEvent",
  encode(message: LiquidityAddedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.baseAmount !== "") {
      writer.uint32(18).string(message.baseAmount);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(26).string(message.quoteAmount);
    }
    if (message.mintedAmount !== "") {
      writer.uint32(34).string(message.mintedAmount);
    }
    if (message.poolId !== "") {
      writer.uint32(42).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityAddedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityAddedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.baseAmount = reader.string();
          break;
        case 3:
          message.quoteAmount = reader.string();
          break;
        case 4:
          message.mintedAmount = reader.string();
          break;
        case 5:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LiquidityAddedEvent>): LiquidityAddedEvent {
    const message = createBaseLiquidityAddedEvent();
    message.creator = object.creator ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.mintedAmount = object.mintedAmount ?? "";
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: LiquidityAddedEventAmino): LiquidityAddedEvent {
    const message = createBaseLiquidityAddedEvent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.baseAmount !== undefined && object.baseAmount !== null) {
      message.baseAmount = object.baseAmount;
    }
    if (object.quoteAmount !== undefined && object.quoteAmount !== null) {
      message.quoteAmount = object.quoteAmount;
    }
    if (object.mintedAmount !== undefined && object.mintedAmount !== null) {
      message.mintedAmount = object.mintedAmount;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: LiquidityAddedEvent): LiquidityAddedEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.baseAmount = message.baseAmount === "" ? undefined : message.baseAmount;
    obj.quoteAmount = message.quoteAmount === "" ? undefined : message.quoteAmount;
    obj.mintedAmount = message.mintedAmount === "" ? undefined : message.mintedAmount;
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: LiquidityAddedEventAminoMsg): LiquidityAddedEvent {
    return LiquidityAddedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityAddedEventProtoMsg): LiquidityAddedEvent {
    return LiquidityAddedEvent.decode(message.value);
  },
  toProto(message: LiquidityAddedEvent): Uint8Array {
    return LiquidityAddedEvent.encode(message).finish();
  },
  toProtoMsg(message: LiquidityAddedEvent): LiquidityAddedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.LiquidityAddedEvent",
      value: LiquidityAddedEvent.encode(message).finish()
    };
  }
};
function createBaseLiquidityRemovedEvent(): LiquidityRemovedEvent {
  return {
    creator: "",
    baseAmount: "",
    quoteAmount: "",
    poolId: ""
  };
}
export const LiquidityRemovedEvent = {
  typeUrl: "/bze.tradebin.LiquidityRemovedEvent",
  encode(message: LiquidityRemovedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.baseAmount !== "") {
      writer.uint32(18).string(message.baseAmount);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(26).string(message.quoteAmount);
    }
    if (message.poolId !== "") {
      writer.uint32(34).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityRemovedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityRemovedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.baseAmount = reader.string();
          break;
        case 3:
          message.quoteAmount = reader.string();
          break;
        case 4:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LiquidityRemovedEvent>): LiquidityRemovedEvent {
    const message = createBaseLiquidityRemovedEvent();
    message.creator = object.creator ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: LiquidityRemovedEventAmino): LiquidityRemovedEvent {
    const message = createBaseLiquidityRemovedEvent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.baseAmount !== undefined && object.baseAmount !== null) {
      message.baseAmount = object.baseAmount;
    }
    if (object.quoteAmount !== undefined && object.quoteAmount !== null) {
      message.quoteAmount = object.quoteAmount;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: LiquidityRemovedEvent): LiquidityRemovedEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.baseAmount = message.baseAmount === "" ? undefined : message.baseAmount;
    obj.quoteAmount = message.quoteAmount === "" ? undefined : message.quoteAmount;
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: LiquidityRemovedEventAminoMsg): LiquidityRemovedEvent {
    return LiquidityRemovedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityRemovedEventProtoMsg): LiquidityRemovedEvent {
    return LiquidityRemovedEvent.decode(message.value);
  },
  toProto(message: LiquidityRemovedEvent): Uint8Array {
    return LiquidityRemovedEvent.encode(message).finish();
  },
  toProtoMsg(message: LiquidityRemovedEvent): LiquidityRemovedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.LiquidityRemovedEvent",
      value: LiquidityRemovedEvent.encode(message).finish()
    };
  }
};
function createBaseSwapEvent(): SwapEvent {
  return {
    creator: "",
    in: Coin.fromPartial({}),
    out: Coin.fromPartial({}),
    poolId: ""
  };
}
export const SwapEvent = {
  typeUrl: "/bze.tradebin.SwapEvent",
  encode(message: SwapEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.in !== undefined) {
      Coin.encode(message.in, writer.uint32(18).fork()).ldelim();
    }
    if (message.out !== undefined) {
      Coin.encode(message.out, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(34).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.in = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.out = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SwapEvent>): SwapEvent {
    const message = createBaseSwapEvent();
    message.creator = object.creator ?? "";
    message.in = object.in !== undefined && object.in !== null ? Coin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? Coin.fromPartial(object.out) : undefined;
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: SwapEventAmino): SwapEvent {
    const message = createBaseSwapEvent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.in !== undefined && object.in !== null) {
      message.in = Coin.fromAmino(object.in);
    }
    if (object.out !== undefined && object.out !== null) {
      message.out = Coin.fromAmino(object.out);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: SwapEvent): SwapEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.in = message.in ? Coin.toAmino(message.in) : undefined;
    obj.out = message.out ? Coin.toAmino(message.out) : undefined;
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: SwapEventAminoMsg): SwapEvent {
    return SwapEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapEventProtoMsg): SwapEvent {
    return SwapEvent.decode(message.value);
  },
  toProto(message: SwapEvent): Uint8Array {
    return SwapEvent.encode(message).finish();
  },
  toProtoMsg(message: SwapEvent): SwapEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.SwapEvent",
      value: SwapEvent.encode(message).finish()
    };
  }
};