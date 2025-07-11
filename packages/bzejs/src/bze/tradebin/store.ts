//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface Market {
  base: string;
  quote: string;
  creator: string;
}
export interface MarketProtoMsg {
  typeUrl: "/bze.tradebin.Market";
  value: Uint8Array;
}
/**
 * @name MarketAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.Market
 */
export interface MarketAmino {
  base?: string;
  quote?: string;
  creator?: string;
}
export interface MarketAminoMsg {
  type: "/bze.tradebin.Market";
  value: MarketAmino;
}
export interface MarketSDKType {
  base: string;
  quote: string;
  creator: string;
}
export interface QueueMessage {
  messageId: string;
  marketId: string;
  messageType: string;
  amount: string;
  price: string;
  createdAt: bigint;
  orderId: string;
  orderType: string;
  owner: string;
}
export interface QueueMessageProtoMsg {
  typeUrl: "/bze.tradebin.QueueMessage";
  value: Uint8Array;
}
/**
 * @name QueueMessageAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.QueueMessage
 */
export interface QueueMessageAmino {
  message_id?: string;
  market_id?: string;
  message_type?: string;
  amount?: string;
  price?: string;
  created_at?: string;
  order_id?: string;
  order_type?: string;
  owner?: string;
}
export interface QueueMessageAminoMsg {
  type: "/bze.tradebin.QueueMessage";
  value: QueueMessageAmino;
}
export interface QueueMessageSDKType {
  message_id: string;
  market_id: string;
  message_type: string;
  amount: string;
  price: string;
  created_at: bigint;
  order_id: string;
  order_type: string;
  owner: string;
}
export interface Order {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  createdAt: bigint;
  owner: string;
}
export interface OrderProtoMsg {
  typeUrl: "/bze.tradebin.Order";
  value: Uint8Array;
}
/**
 * @name OrderAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.Order
 */
export interface OrderAmino {
  id?: string;
  market_id?: string;
  order_type?: string;
  amount?: string;
  price?: string;
  created_at?: string;
  owner?: string;
}
export interface OrderAminoMsg {
  type: "/bze.tradebin.Order";
  value: OrderAmino;
}
export interface OrderSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  created_at: bigint;
  owner: string;
}
export interface OrderReference {
  id: string;
  marketId: string;
  orderType: string;
}
export interface OrderReferenceProtoMsg {
  typeUrl: "/bze.tradebin.OrderReference";
  value: Uint8Array;
}
/**
 * @name OrderReferenceAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderReference
 */
export interface OrderReferenceAmino {
  id?: string;
  market_id?: string;
  order_type?: string;
}
export interface OrderReferenceAminoMsg {
  type: "/bze.tradebin.OrderReference";
  value: OrderReferenceAmino;
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
export interface AggregatedOrderProtoMsg {
  typeUrl: "/bze.tradebin.AggregatedOrder";
  value: Uint8Array;
}
/**
 * @name AggregatedOrderAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.AggregatedOrder
 */
export interface AggregatedOrderAmino {
  market_id?: string;
  order_type?: string;
  amount?: string;
  price?: string;
}
export interface AggregatedOrderAminoMsg {
  type: "/bze.tradebin.AggregatedOrder";
  value: AggregatedOrderAmino;
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
  executedAt: bigint;
  maker: string;
  taker: string;
}
export interface HistoryOrderProtoMsg {
  typeUrl: "/bze.tradebin.HistoryOrder";
  value: Uint8Array;
}
/**
 * @name HistoryOrderAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.HistoryOrder
 */
export interface HistoryOrderAmino {
  market_id?: string;
  order_type?: string;
  amount?: string;
  price?: string;
  executed_at?: string;
  maker?: string;
  taker?: string;
}
export interface HistoryOrderAminoMsg {
  type: "/bze.tradebin.HistoryOrder";
  value: HistoryOrderAmino;
}
export interface HistoryOrderSDKType {
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  executed_at: bigint;
  maker: string;
  taker: string;
}
export interface UserDust {
  owner: string;
  amount: string;
  denom: string;
}
export interface UserDustProtoMsg {
  typeUrl: "/bze.tradebin.UserDust";
  value: Uint8Array;
}
/**
 * @name UserDustAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.UserDust
 */
export interface UserDustAmino {
  owner?: string;
  amount?: string;
  denom?: string;
}
export interface UserDustAminoMsg {
  type: "/bze.tradebin.UserDust";
  value: UserDustAmino;
}
export interface UserDustSDKType {
  owner: string;
  amount: string;
  denom: string;
}
export interface LiquidityPool {
  /** Unique pool identifier (e.g., "atom/usdc") */
  id: string;
  base: string;
  quote: string;
  /** e.g., "lp/atom/usdc" */
  lpDenom: string;
  creator: string;
  /** Fee ex: 0.001 = 0.1% */
  fee: string;
  feeDest?: FeeDestination;
  reserveBase: string;
  reserveQuote: string;
  /** true/false */
  stable: boolean;
}
export interface LiquidityPoolProtoMsg {
  typeUrl: "/bze.tradebin.LiquidityPool";
  value: Uint8Array;
}
/**
 * @name LiquidityPoolAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityPool
 */
export interface LiquidityPoolAmino {
  /**
   * Unique pool identifier (e.g., "atom/usdc")
   */
  id?: string;
  base?: string;
  quote?: string;
  /**
   * e.g., "lp/atom/usdc"
   */
  lp_denom?: string;
  creator?: string;
  /**
   * Fee ex: 0.001 = 0.1%
   */
  fee?: string;
  fee_dest?: FeeDestinationAmino;
  reserve_base?: string;
  reserve_quote?: string;
  /**
   * true/false
   */
  stable?: boolean;
}
export interface LiquidityPoolAminoMsg {
  type: "/bze.tradebin.LiquidityPool";
  value: LiquidityPoolAmino;
}
export interface LiquidityPoolSDKType {
  id: string;
  base: string;
  quote: string;
  lp_denom: string;
  creator: string;
  fee: string;
  fee_dest?: FeeDestinationSDKType;
  reserve_base: string;
  reserve_quote: string;
  stable: boolean;
}
export interface FeeDestination {
  /** % of the total fee of 1.000 */
  treasury: string;
  /** % of the total fee of 1.000 */
  burner: string;
  /** % of the total fee of 1.000 */
  providers: string;
}
export interface FeeDestinationProtoMsg {
  typeUrl: "/bze.tradebin.FeeDestination";
  value: Uint8Array;
}
/**
 * @name FeeDestinationAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.FeeDestination
 */
export interface FeeDestinationAmino {
  /**
   * % of the total fee of 1.000
   */
  treasury?: string;
  /**
   * % of the total fee of 1.000
   */
  burner?: string;
  /**
   * % of the total fee of 1.000
   */
  providers?: string;
}
export interface FeeDestinationAminoMsg {
  type: "/bze.tradebin.FeeDestination";
  value: FeeDestinationAmino;
}
export interface FeeDestinationSDKType {
  treasury: string;
  burner: string;
  providers: string;
}
function createBaseMarket(): Market {
  return {
    base: "",
    quote: "",
    creator: ""
  };
}
export const Market = {
  typeUrl: "/bze.tradebin.Market",
  encode(message: Market, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Market {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Market>): Market {
    const message = createBaseMarket();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MarketAmino): Market {
    const message = createBaseMarket();
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Market): MarketAmino {
    const obj: any = {};
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MarketAminoMsg): Market {
    return Market.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketProtoMsg): Market {
    return Market.decode(message.value);
  },
  toProto(message: Market): Uint8Array {
    return Market.encode(message).finish();
  },
  toProtoMsg(message: Market): MarketProtoMsg {
    return {
      typeUrl: "/bze.tradebin.Market",
      value: Market.encode(message).finish()
    };
  }
};
function createBaseQueueMessage(): QueueMessage {
  return {
    messageId: "",
    marketId: "",
    messageType: "",
    amount: "",
    price: "",
    createdAt: BigInt(0),
    orderId: "",
    orderType: "",
    owner: ""
  };
}
export const QueueMessage = {
  typeUrl: "/bze.tradebin.QueueMessage",
  encode(message: QueueMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.createdAt !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueueMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.createdAt = reader.int64();
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
  fromPartial(object: Partial<QueueMessage>): QueueMessage {
    const message = createBaseQueueMessage();
    message.messageId = object.messageId ?? "";
    message.marketId = object.marketId ?? "";
    message.messageType = object.messageType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.orderId = object.orderId ?? "";
    message.orderType = object.orderType ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueueMessageAmino): QueueMessage {
    const message = createBaseQueueMessage();
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.message_type !== undefined && object.message_type !== null) {
      message.messageType = object.message_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueueMessage): QueueMessageAmino {
    const obj: any = {};
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.message_type = message.messageType === "" ? undefined : message.messageType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueueMessageAminoMsg): QueueMessage {
    return QueueMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: QueueMessageProtoMsg): QueueMessage {
    return QueueMessage.decode(message.value);
  },
  toProto(message: QueueMessage): Uint8Array {
    return QueueMessage.encode(message).finish();
  },
  toProtoMsg(message: QueueMessage): QueueMessageProtoMsg {
    return {
      typeUrl: "/bze.tradebin.QueueMessage",
      value: QueueMessage.encode(message).finish()
    };
  }
};
function createBaseOrder(): Order {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    createdAt: BigInt(0),
    owner: ""
  };
}
export const Order = {
  typeUrl: "/bze.tradebin.Order",
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.createdAt = reader.int64();
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
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: OrderAmino): Order {
    const message = createBaseOrder();
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
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: Order): OrderAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg): Order {
    return Order.decode(message.value);
  },
  toProto(message: Order): Uint8Array {
    return Order.encode(message).finish();
  },
  toProtoMsg(message: Order): OrderProtoMsg {
    return {
      typeUrl: "/bze.tradebin.Order",
      value: Order.encode(message).finish()
    };
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
  typeUrl: "/bze.tradebin.OrderReference",
  encode(message: OrderReference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): OrderReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<OrderReference>): OrderReference {
    const message = createBaseOrderReference();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    return message;
  },
  fromAmino(object: OrderReferenceAmino): OrderReference {
    const message = createBaseOrderReference();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    return message;
  },
  toAmino(message: OrderReference): OrderReferenceAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    return obj;
  },
  fromAminoMsg(object: OrderReferenceAminoMsg): OrderReference {
    return OrderReference.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderReferenceProtoMsg): OrderReference {
    return OrderReference.decode(message.value);
  },
  toProto(message: OrderReference): Uint8Array {
    return OrderReference.encode(message).finish();
  },
  toProtoMsg(message: OrderReference): OrderReferenceProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderReference",
      value: OrderReference.encode(message).finish()
    };
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
  typeUrl: "/bze.tradebin.AggregatedOrder",
  encode(message: AggregatedOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): AggregatedOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<AggregatedOrder>): AggregatedOrder {
    const message = createBaseAggregatedOrder();
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: AggregatedOrderAmino): AggregatedOrder {
    const message = createBaseAggregatedOrder();
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
  toAmino(message: AggregatedOrder): AggregatedOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: AggregatedOrderAminoMsg): AggregatedOrder {
    return AggregatedOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregatedOrderProtoMsg): AggregatedOrder {
    return AggregatedOrder.decode(message.value);
  },
  toProto(message: AggregatedOrder): Uint8Array {
    return AggregatedOrder.encode(message).finish();
  },
  toProtoMsg(message: AggregatedOrder): AggregatedOrderProtoMsg {
    return {
      typeUrl: "/bze.tradebin.AggregatedOrder",
      value: AggregatedOrder.encode(message).finish()
    };
  }
};
function createBaseHistoryOrder(): HistoryOrder {
  return {
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    executedAt: BigInt(0),
    maker: "",
    taker: ""
  };
}
export const HistoryOrder = {
  typeUrl: "/bze.tradebin.HistoryOrder",
  encode(message: HistoryOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.executedAt !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): HistoryOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.executedAt = reader.int64();
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
  fromPartial(object: Partial<HistoryOrder>): HistoryOrder {
    const message = createBaseHistoryOrder();
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.executedAt = object.executedAt !== undefined && object.executedAt !== null ? BigInt(object.executedAt.toString()) : BigInt(0);
    message.maker = object.maker ?? "";
    message.taker = object.taker ?? "";
    return message;
  },
  fromAmino(object: HistoryOrderAmino): HistoryOrder {
    const message = createBaseHistoryOrder();
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
    if (object.executed_at !== undefined && object.executed_at !== null) {
      message.executedAt = BigInt(object.executed_at);
    }
    if (object.maker !== undefined && object.maker !== null) {
      message.maker = object.maker;
    }
    if (object.taker !== undefined && object.taker !== null) {
      message.taker = object.taker;
    }
    return message;
  },
  toAmino(message: HistoryOrder): HistoryOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    obj.executed_at = message.executedAt !== BigInt(0) ? message.executedAt?.toString() : undefined;
    obj.maker = message.maker === "" ? undefined : message.maker;
    obj.taker = message.taker === "" ? undefined : message.taker;
    return obj;
  },
  fromAminoMsg(object: HistoryOrderAminoMsg): HistoryOrder {
    return HistoryOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoryOrderProtoMsg): HistoryOrder {
    return HistoryOrder.decode(message.value);
  },
  toProto(message: HistoryOrder): Uint8Array {
    return HistoryOrder.encode(message).finish();
  },
  toProtoMsg(message: HistoryOrder): HistoryOrderProtoMsg {
    return {
      typeUrl: "/bze.tradebin.HistoryOrder",
      value: HistoryOrder.encode(message).finish()
    };
  }
};
function createBaseUserDust(): UserDust {
  return {
    owner: "",
    amount: "",
    denom: ""
  };
}
export const UserDust = {
  typeUrl: "/bze.tradebin.UserDust",
  encode(message: UserDust, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserDust {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDust();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserDust>): UserDust {
    const message = createBaseUserDust();
    message.owner = object.owner ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: UserDustAmino): UserDust {
    const message = createBaseUserDust();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: UserDust): UserDustAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: UserDustAminoMsg): UserDust {
    return UserDust.fromAmino(object.value);
  },
  fromProtoMsg(message: UserDustProtoMsg): UserDust {
    return UserDust.decode(message.value);
  },
  toProto(message: UserDust): Uint8Array {
    return UserDust.encode(message).finish();
  },
  toProtoMsg(message: UserDust): UserDustProtoMsg {
    return {
      typeUrl: "/bze.tradebin.UserDust",
      value: UserDust.encode(message).finish()
    };
  }
};
function createBaseLiquidityPool(): LiquidityPool {
  return {
    id: "",
    base: "",
    quote: "",
    lpDenom: "",
    creator: "",
    fee: "",
    feeDest: undefined,
    reserveBase: "",
    reserveQuote: "",
    stable: false
  };
}
export const LiquidityPool = {
  typeUrl: "/bze.tradebin.LiquidityPool",
  encode(message: LiquidityPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    if (message.lpDenom !== "") {
      writer.uint32(34).string(message.lpDenom);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.fee !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.feeDest !== undefined) {
      FeeDestination.encode(message.feeDest, writer.uint32(58).fork()).ldelim();
    }
    if (message.reserveBase !== "") {
      writer.uint32(66).string(message.reserveBase);
    }
    if (message.reserveQuote !== "") {
      writer.uint32(74).string(message.reserveQuote);
    }
    if (message.stable === true) {
      writer.uint32(80).bool(message.stable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.quote = reader.string();
          break;
        case 4:
          message.lpDenom = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.feeDest = FeeDestination.decode(reader, reader.uint32());
          break;
        case 8:
          message.reserveBase = reader.string();
          break;
        case 9:
          message.reserveQuote = reader.string();
          break;
        case 10:
          message.stable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LiquidityPool>): LiquidityPool {
    const message = createBaseLiquidityPool();
    message.id = object.id ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.lpDenom = object.lpDenom ?? "";
    message.creator = object.creator ?? "";
    message.fee = object.fee ?? "";
    message.feeDest = object.feeDest !== undefined && object.feeDest !== null ? FeeDestination.fromPartial(object.feeDest) : undefined;
    message.reserveBase = object.reserveBase ?? "";
    message.reserveQuote = object.reserveQuote ?? "";
    message.stable = object.stable ?? false;
    return message;
  },
  fromAmino(object: LiquidityPoolAmino): LiquidityPool {
    const message = createBaseLiquidityPool();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    if (object.lp_denom !== undefined && object.lp_denom !== null) {
      message.lpDenom = object.lp_denom;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.fee_dest !== undefined && object.fee_dest !== null) {
      message.feeDest = FeeDestination.fromAmino(object.fee_dest);
    }
    if (object.reserve_base !== undefined && object.reserve_base !== null) {
      message.reserveBase = object.reserve_base;
    }
    if (object.reserve_quote !== undefined && object.reserve_quote !== null) {
      message.reserveQuote = object.reserve_quote;
    }
    if (object.stable !== undefined && object.stable !== null) {
      message.stable = object.stable;
    }
    return message;
  },
  toAmino(message: LiquidityPool): LiquidityPoolAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    obj.lp_denom = message.lpDenom === "" ? undefined : message.lpDenom;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.fee = message.fee === "" ? undefined : message.fee;
    obj.fee_dest = message.feeDest ? FeeDestination.toAmino(message.feeDest) : undefined;
    obj.reserve_base = message.reserveBase === "" ? undefined : message.reserveBase;
    obj.reserve_quote = message.reserveQuote === "" ? undefined : message.reserveQuote;
    obj.stable = message.stable === false ? undefined : message.stable;
    return obj;
  },
  fromAminoMsg(object: LiquidityPoolAminoMsg): LiquidityPool {
    return LiquidityPool.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityPoolProtoMsg): LiquidityPool {
    return LiquidityPool.decode(message.value);
  },
  toProto(message: LiquidityPool): Uint8Array {
    return LiquidityPool.encode(message).finish();
  },
  toProtoMsg(message: LiquidityPool): LiquidityPoolProtoMsg {
    return {
      typeUrl: "/bze.tradebin.LiquidityPool",
      value: LiquidityPool.encode(message).finish()
    };
  }
};
function createBaseFeeDestination(): FeeDestination {
  return {
    treasury: "",
    burner: "",
    providers: ""
  };
}
export const FeeDestination = {
  typeUrl: "/bze.tradebin.FeeDestination",
  encode(message: FeeDestination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.treasury !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.treasury, 18).atomics);
    }
    if (message.burner !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.burner, 18).atomics);
    }
    if (message.providers !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.providers, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.treasury = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.burner = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.providers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeeDestination>): FeeDestination {
    const message = createBaseFeeDestination();
    message.treasury = object.treasury ?? "";
    message.burner = object.burner ?? "";
    message.providers = object.providers ?? "";
    return message;
  },
  fromAmino(object: FeeDestinationAmino): FeeDestination {
    const message = createBaseFeeDestination();
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    if (object.burner !== undefined && object.burner !== null) {
      message.burner = object.burner;
    }
    if (object.providers !== undefined && object.providers !== null) {
      message.providers = object.providers;
    }
    return message;
  },
  toAmino(message: FeeDestination): FeeDestinationAmino {
    const obj: any = {};
    obj.treasury = message.treasury === "" ? undefined : message.treasury;
    obj.burner = message.burner === "" ? undefined : message.burner;
    obj.providers = message.providers === "" ? undefined : message.providers;
    return obj;
  },
  fromAminoMsg(object: FeeDestinationAminoMsg): FeeDestination {
    return FeeDestination.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDestinationProtoMsg): FeeDestination {
    return FeeDestination.decode(message.value);
  },
  toProto(message: FeeDestination): Uint8Array {
    return FeeDestination.encode(message).finish();
  },
  toProtoMsg(message: FeeDestination): FeeDestinationProtoMsg {
    return {
      typeUrl: "/bze.tradebin.FeeDestination",
      value: FeeDestination.encode(message).finish()
    };
  }
};