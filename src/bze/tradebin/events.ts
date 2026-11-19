//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { FeeDestination, FeeDestinationAmino, FeeDestinationSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * @name MarketCreatedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MarketCreatedEvent
 */
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
/**
 * @name MarketCreatedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MarketCreatedEvent
 */
export interface MarketCreatedEventSDKType {
  creator: string;
  base: string;
  quote: string;
}
/**
 * @name OrderExecutedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderExecutedEvent
 */
export interface OrderExecutedEvent {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  maker: string;
  taker: string;
  /**
   * id of the taker order that executed against this (maker) order, zero-filled.
   * Every taker gets an order id, even when it never rests on the book.
   */
  orderId: string;
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
  /**
   * id of the taker order that executed against this (maker) order, zero-filled.
   * Every taker gets an order id, even when it never rests on the book.
   */
  order_id?: string;
}
export interface OrderExecutedEventAminoMsg {
  type: "/bze.tradebin.OrderExecutedEvent";
  value: OrderExecutedEventAmino;
}
/**
 * @name OrderExecutedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderExecutedEvent
 */
export interface OrderExecutedEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  maker: string;
  taker: string;
  order_id: string;
}
/**
 * @name OrderCanceledEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderCanceledEvent
 */
export interface OrderCanceledEvent {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  owner: string;
  /**
   * id of the cancelled order (same as id)
   */
  orderId: string;
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
  /**
   * id of the cancelled order (same as id)
   */
  order_id?: string;
}
export interface OrderCanceledEventAminoMsg {
  type: "/bze.tradebin.OrderCanceledEvent";
  value: OrderCanceledEventAmino;
}
/**
 * @name OrderCanceledEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderCanceledEvent
 */
export interface OrderCanceledEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  owner: string;
  order_id: string;
}
/**
 * @name OrderSavedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderSavedEvent
 */
export interface OrderSavedEvent {
  id: string;
  marketId: string;
  orderType: string;
  amount: string;
  price: string;
  owner: string;
  /**
   * id of the order that placed this remainder on the book (same as id)
   */
  orderId: string;
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
  /**
   * id of the order that placed this remainder on the book (same as id)
   */
  order_id?: string;
}
export interface OrderSavedEventAminoMsg {
  type: "/bze.tradebin.OrderSavedEvent";
  value: OrderSavedEventAmino;
}
/**
 * @name OrderSavedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderSavedEvent
 */
export interface OrderSavedEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  amount: string;
  price: string;
  owner: string;
  order_id: string;
}
/**
 * OrderAmendedEvent is emitted when the remainder of an order is added to the order its owner already
 * rests at the same market, side and price. The merged order is saved under a new id at the back of
 * its price level (BZE-267) and the resting order's id (previous_id) is removed.
 * @name OrderAmendedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderAmendedEvent
 */
export interface OrderAmendedEvent {
  /**
   * id of the merged order: the id the create order got, which its other events carry too
   */
  id: string;
  marketId: string;
  orderType: string;
  price: string;
  owner: string;
  /**
   * amount added to the resting order
   */
  addedAmount: string;
  /**
   * amount of the resting order after the addition
   */
  amount: string;
  /**
   * id the order rested under before the addition, which no longer exists
   */
  previousId: string;
}
export interface OrderAmendedEventProtoMsg {
  typeUrl: "/bze.tradebin.OrderAmendedEvent";
  value: Uint8Array;
}
/**
 * OrderAmendedEvent is emitted when the remainder of an order is added to the order its owner already
 * rests at the same market, side and price. The merged order is saved under a new id at the back of
 * its price level (BZE-267) and the resting order's id (previous_id) is removed.
 * @name OrderAmendedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderAmendedEvent
 */
export interface OrderAmendedEventAmino {
  /**
   * id of the merged order: the id the create order got, which its other events carry too
   */
  id?: string;
  market_id?: string;
  order_type?: string;
  price?: string;
  owner?: string;
  /**
   * amount added to the resting order
   */
  added_amount?: string;
  /**
   * amount of the resting order after the addition
   */
  amount?: string;
  /**
   * id the order rested under before the addition, which no longer exists
   */
  previous_id?: string;
}
export interface OrderAmendedEventAminoMsg {
  type: "/bze.tradebin.OrderAmendedEvent";
  value: OrderAmendedEventAmino;
}
/**
 * OrderAmendedEvent is emitted when the remainder of an order is added to the order its owner already
 * rests at the same market, side and price. The merged order is saved under a new id at the back of
 * its price level (BZE-267) and the resting order's id (previous_id) is removed.
 * @name OrderAmendedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderAmendedEvent
 */
export interface OrderAmendedEventSDKType {
  id: string;
  market_id: string;
  order_type: string;
  price: string;
  owner: string;
  added_amount: string;
  amount: string;
  previous_id: string;
}
/**
 * @name PoolCreatedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolCreatedEvent
 */
export interface PoolCreatedEvent {
  creator: string;
  base: string;
  quote: string;
  /**
   * lp_denom is the denom of the pool's LP token ("ulp/<hash>"). Emitted so
   * off-chain consumers don't have to derive it from base/quote.
   */
  lpDenom: string;
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
  /**
   * lp_denom is the denom of the pool's LP token ("ulp/<hash>"). Emitted so
   * off-chain consumers don't have to derive it from base/quote.
   */
  lp_denom?: string;
}
export interface PoolCreatedEventAminoMsg {
  type: "/bze.tradebin.PoolCreatedEvent";
  value: PoolCreatedEventAmino;
}
/**
 * @name PoolCreatedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolCreatedEvent
 */
export interface PoolCreatedEventSDKType {
  creator: string;
  base: string;
  quote: string;
  lp_denom: string;
}
/**
 * @name LiquidityAddedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityAddedEvent
 */
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
/**
 * @name LiquidityAddedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityAddedEvent
 */
export interface LiquidityAddedEventSDKType {
  creator: string;
  baseAmount: string;
  quoteAmount: string;
  mintedAmount: string;
  pool_id: string;
}
/**
 * @name LiquidityRemovedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityRemovedEvent
 */
export interface LiquidityRemovedEvent {
  creator: string;
  /**
   * Fee ex: 0.001 = 0.1%
   */
  baseAmount: string;
  /**
   * Fee ex: 0.001 = 0.1%
   */
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
/**
 * @name LiquidityRemovedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityRemovedEvent
 */
export interface LiquidityRemovedEventSDKType {
  creator: string;
  baseAmount: string;
  quoteAmount: string;
  pool_id: string;
}
/**
 * @name SwapEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.SwapEvent
 */
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
/**
 * @name SwapEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.SwapEvent
 */
export interface SwapEventSDKType {
  creator: string;
  in: CoinSDKType;
  out: CoinSDKType;
  pool_id: string;
}
/**
 * DenomHaltedEvent is emitted for every denom a MsgHaltDenoms proposal actually halts (not for denoms
 * that were already halted).
 * @name DenomHaltedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomHaltedEvent
 */
export interface DenomHaltedEvent {
  denom: string;
}
export interface DenomHaltedEventProtoMsg {
  typeUrl: "/bze.tradebin.DenomHaltedEvent";
  value: Uint8Array;
}
/**
 * DenomHaltedEvent is emitted for every denom a MsgHaltDenoms proposal actually halts (not for denoms
 * that were already halted).
 * @name DenomHaltedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomHaltedEvent
 */
export interface DenomHaltedEventAmino {
  denom?: string;
}
export interface DenomHaltedEventAminoMsg {
  type: "/bze.tradebin.DenomHaltedEvent";
  value: DenomHaltedEventAmino;
}
/**
 * DenomHaltedEvent is emitted for every denom a MsgHaltDenoms proposal actually halts (not for denoms
 * that were already halted).
 * @name DenomHaltedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomHaltedEvent
 */
export interface DenomHaltedEventSDKType {
  denom: string;
}
/**
 * DenomUnhaltedEvent is emitted for every denom a MsgUnhaltDenoms proposal actually un-halts (not for
 * denoms that were not halted).
 * @name DenomUnhaltedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomUnhaltedEvent
 */
export interface DenomUnhaltedEvent {
  denom: string;
}
export interface DenomUnhaltedEventProtoMsg {
  typeUrl: "/bze.tradebin.DenomUnhaltedEvent";
  value: Uint8Array;
}
/**
 * DenomUnhaltedEvent is emitted for every denom a MsgUnhaltDenoms proposal actually un-halts (not for
 * denoms that were not halted).
 * @name DenomUnhaltedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomUnhaltedEvent
 */
export interface DenomUnhaltedEventAmino {
  denom?: string;
}
export interface DenomUnhaltedEventAminoMsg {
  type: "/bze.tradebin.DenomUnhaltedEvent";
  value: DenomUnhaltedEventAmino;
}
/**
 * DenomUnhaltedEvent is emitted for every denom a MsgUnhaltDenoms proposal actually un-halts (not for
 * denoms that were not halted).
 * @name DenomUnhaltedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomUnhaltedEvent
 */
export interface DenomUnhaltedEventSDKType {
  denom: string;
}
/**
 * PoolFeesUpdatedEvent is emitted for every pool a MsgUpdatePools proposal actually changes (not for
 * entries equal to the pool's current values).
 * @name PoolFeesUpdatedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolFeesUpdatedEvent
 */
export interface PoolFeesUpdatedEvent {
  poolId: string;
  oldFee: string;
  newFee: string;
  oldFeeDest: FeeDestination;
  newFeeDest: FeeDestination;
}
export interface PoolFeesUpdatedEventProtoMsg {
  typeUrl: "/bze.tradebin.PoolFeesUpdatedEvent";
  value: Uint8Array;
}
/**
 * PoolFeesUpdatedEvent is emitted for every pool a MsgUpdatePools proposal actually changes (not for
 * entries equal to the pool's current values).
 * @name PoolFeesUpdatedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolFeesUpdatedEvent
 */
export interface PoolFeesUpdatedEventAmino {
  pool_id?: string;
  old_fee?: string;
  new_fee?: string;
  old_fee_dest?: FeeDestinationAmino;
  new_fee_dest?: FeeDestinationAmino;
}
export interface PoolFeesUpdatedEventAminoMsg {
  type: "/bze.tradebin.PoolFeesUpdatedEvent";
  value: PoolFeesUpdatedEventAmino;
}
/**
 * PoolFeesUpdatedEvent is emitted for every pool a MsgUpdatePools proposal actually changes (not for
 * entries equal to the pool's current values).
 * @name PoolFeesUpdatedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolFeesUpdatedEvent
 */
export interface PoolFeesUpdatedEventSDKType {
  pool_id: string;
  old_fee: string;
  new_fee: string;
  old_fee_dest: FeeDestinationSDKType;
  new_fee_dest: FeeDestinationSDKType;
}
/**
 * OrderMessageRefundedEvent is emitted when the unexecuted part of an order is
 * returned to its owner instead of resting on the book, in the same transaction.
 * Without it a fill order with no match would leave no trace of its processing.
 * @name OrderMessageRefundedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderMessageRefundedEvent
 */
export interface OrderMessageRefundedEvent {
  /**
   * id of the refunded order, zero-filled (for reason "upgrade": the id of the
   * queue message refunded by the v8.3.0 migration)
   */
  orderId: string;
  marketId: string;
  /**
   * the side of the refunded order
   */
  orderType: string;
  owner: string;
  /**
   * base-denom amount of the order that was not executed
   */
  amount: string;
  /**
   * the coin actually sent back (coin string); empty when it rounded to zero
   * and only dust was stored
   */
  refund: string;
  /**
   * no_match | unfilled_remainder | below_min_amount | max_fills_reached | upgrade
   */
  reason: string;
}
export interface OrderMessageRefundedEventProtoMsg {
  typeUrl: "/bze.tradebin.OrderMessageRefundedEvent";
  value: Uint8Array;
}
/**
 * OrderMessageRefundedEvent is emitted when the unexecuted part of an order is
 * returned to its owner instead of resting on the book, in the same transaction.
 * Without it a fill order with no match would leave no trace of its processing.
 * @name OrderMessageRefundedEventAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderMessageRefundedEvent
 */
export interface OrderMessageRefundedEventAmino {
  /**
   * id of the refunded order, zero-filled (for reason "upgrade": the id of the
   * queue message refunded by the v8.3.0 migration)
   */
  order_id?: string;
  market_id?: string;
  /**
   * the side of the refunded order
   */
  order_type?: string;
  owner?: string;
  /**
   * base-denom amount of the order that was not executed
   */
  amount?: string;
  /**
   * the coin actually sent back (coin string); empty when it rounded to zero
   * and only dust was stored
   */
  refund?: string;
  /**
   * no_match | unfilled_remainder | below_min_amount | max_fills_reached | upgrade
   */
  reason?: string;
}
export interface OrderMessageRefundedEventAminoMsg {
  type: "/bze.tradebin.OrderMessageRefundedEvent";
  value: OrderMessageRefundedEventAmino;
}
/**
 * OrderMessageRefundedEvent is emitted when the unexecuted part of an order is
 * returned to its owner instead of resting on the book, in the same transaction.
 * Without it a fill order with no match would leave no trace of its processing.
 * @name OrderMessageRefundedEventSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderMessageRefundedEvent
 */
export interface OrderMessageRefundedEventSDKType {
  order_id: string;
  market_id: string;
  order_type: string;
  owner: string;
  amount: string;
  refund: string;
  reason: string;
}
function createBaseMarketCreatedEvent(): MarketCreatedEvent {
  return {
    creator: "",
    base: "",
    quote: ""
  };
}
/**
 * @name MarketCreatedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MarketCreatedEvent
 */
export const MarketCreatedEvent = {
  typeUrl: "/bze.tradebin.MarketCreatedEvent",
  is(o: any): o is MarketCreatedEvent {
    return o && (o.$typeUrl === MarketCreatedEvent.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string");
  },
  isSDK(o: any): o is MarketCreatedEventSDKType {
    return o && (o.$typeUrl === MarketCreatedEvent.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string");
  },
  isAmino(o: any): o is MarketCreatedEventAmino {
    return o && (o.$typeUrl === MarketCreatedEvent.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseOrderExecutedEvent(): OrderExecutedEvent {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    maker: "",
    taker: "",
    orderId: ""
  };
}
/**
 * @name OrderExecutedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderExecutedEvent
 */
export const OrderExecutedEvent = {
  typeUrl: "/bze.tradebin.OrderExecutedEvent",
  is(o: any): o is OrderExecutedEvent {
    return o && (o.$typeUrl === OrderExecutedEvent.typeUrl || typeof o.id === "string" && typeof o.marketId === "string" && typeof o.orderType === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.maker === "string" && typeof o.taker === "string" && typeof o.orderId === "string");
  },
  isSDK(o: any): o is OrderExecutedEventSDKType {
    return o && (o.$typeUrl === OrderExecutedEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.maker === "string" && typeof o.taker === "string" && typeof o.order_id === "string");
  },
  isAmino(o: any): o is OrderExecutedEventAmino {
    return o && (o.$typeUrl === OrderExecutedEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.maker === "string" && typeof o.taker === "string" && typeof o.order_id === "string");
  },
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
    if (message.orderId !== "") {
      writer.uint32(66).string(message.orderId);
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
        case 8:
          message.orderId = reader.string();
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
    message.orderId = object.orderId ?? "";
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
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
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
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
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
  },
  registerTypeUrl() {}
};
function createBaseOrderCanceledEvent(): OrderCanceledEvent {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    owner: "",
    orderId: ""
  };
}
/**
 * @name OrderCanceledEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderCanceledEvent
 */
export const OrderCanceledEvent = {
  typeUrl: "/bze.tradebin.OrderCanceledEvent",
  is(o: any): o is OrderCanceledEvent {
    return o && (o.$typeUrl === OrderCanceledEvent.typeUrl || typeof o.id === "string" && typeof o.marketId === "string" && typeof o.orderType === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.orderId === "string");
  },
  isSDK(o: any): o is OrderCanceledEventSDKType {
    return o && (o.$typeUrl === OrderCanceledEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.order_id === "string");
  },
  isAmino(o: any): o is OrderCanceledEventAmino {
    return o && (o.$typeUrl === OrderCanceledEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.order_id === "string");
  },
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
    if (message.orderId !== "") {
      writer.uint32(58).string(message.orderId);
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
        case 7:
          message.orderId = reader.string();
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
    message.orderId = object.orderId ?? "";
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
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
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
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
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
  },
  registerTypeUrl() {}
};
function createBaseOrderSavedEvent(): OrderSavedEvent {
  return {
    id: "",
    marketId: "",
    orderType: "",
    amount: "",
    price: "",
    owner: "",
    orderId: ""
  };
}
/**
 * @name OrderSavedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderSavedEvent
 */
export const OrderSavedEvent = {
  typeUrl: "/bze.tradebin.OrderSavedEvent",
  is(o: any): o is OrderSavedEvent {
    return o && (o.$typeUrl === OrderSavedEvent.typeUrl || typeof o.id === "string" && typeof o.marketId === "string" && typeof o.orderType === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.orderId === "string");
  },
  isSDK(o: any): o is OrderSavedEventSDKType {
    return o && (o.$typeUrl === OrderSavedEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.order_id === "string");
  },
  isAmino(o: any): o is OrderSavedEventAmino {
    return o && (o.$typeUrl === OrderSavedEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.order_id === "string");
  },
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
    if (message.orderId !== "") {
      writer.uint32(58).string(message.orderId);
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
        case 7:
          message.orderId = reader.string();
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
    message.orderId = object.orderId ?? "";
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
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
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
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
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
  },
  registerTypeUrl() {}
};
function createBaseOrderAmendedEvent(): OrderAmendedEvent {
  return {
    id: "",
    marketId: "",
    orderType: "",
    price: "",
    owner: "",
    addedAmount: "",
    amount: "",
    previousId: ""
  };
}
/**
 * OrderAmendedEvent is emitted when the remainder of an order is added to the order its owner already
 * rests at the same market, side and price. The merged order is saved under a new id at the back of
 * its price level (BZE-267) and the resting order's id (previous_id) is removed.
 * @name OrderAmendedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderAmendedEvent
 */
export const OrderAmendedEvent = {
  typeUrl: "/bze.tradebin.OrderAmendedEvent",
  is(o: any): o is OrderAmendedEvent {
    return o && (o.$typeUrl === OrderAmendedEvent.typeUrl || typeof o.id === "string" && typeof o.marketId === "string" && typeof o.orderType === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.addedAmount === "string" && typeof o.amount === "string" && typeof o.previousId === "string");
  },
  isSDK(o: any): o is OrderAmendedEventSDKType {
    return o && (o.$typeUrl === OrderAmendedEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.added_amount === "string" && typeof o.amount === "string" && typeof o.previous_id === "string");
  },
  isAmino(o: any): o is OrderAmendedEventAmino {
    return o && (o.$typeUrl === OrderAmendedEvent.typeUrl || typeof o.id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.price === "string" && typeof o.owner === "string" && typeof o.added_amount === "string" && typeof o.amount === "string" && typeof o.previous_id === "string");
  },
  encode(message: OrderAmendedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.addedAmount !== "") {
      writer.uint32(50).string(message.addedAmount);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.previousId !== "") {
      writer.uint32(66).string(message.previousId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderAmendedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderAmendedEvent();
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
          message.price = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        case 6:
          message.addedAmount = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.previousId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OrderAmendedEvent>): OrderAmendedEvent {
    const message = createBaseOrderAmendedEvent();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.price = object.price ?? "";
    message.owner = object.owner ?? "";
    message.addedAmount = object.addedAmount ?? "";
    message.amount = object.amount ?? "";
    message.previousId = object.previousId ?? "";
    return message;
  },
  fromAmino(object: OrderAmendedEventAmino): OrderAmendedEvent {
    const message = createBaseOrderAmendedEvent();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.added_amount !== undefined && object.added_amount !== null) {
      message.addedAmount = object.added_amount;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.previous_id !== undefined && object.previous_id !== null) {
      message.previousId = object.previous_id;
    }
    return message;
  },
  toAmino(message: OrderAmendedEvent): OrderAmendedEventAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.price = message.price === "" ? undefined : message.price;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.added_amount = message.addedAmount === "" ? undefined : message.addedAmount;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.previous_id = message.previousId === "" ? undefined : message.previousId;
    return obj;
  },
  fromAminoMsg(object: OrderAmendedEventAminoMsg): OrderAmendedEvent {
    return OrderAmendedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderAmendedEventProtoMsg): OrderAmendedEvent {
    return OrderAmendedEvent.decode(message.value);
  },
  toProto(message: OrderAmendedEvent): Uint8Array {
    return OrderAmendedEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderAmendedEvent): OrderAmendedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderAmendedEvent",
      value: OrderAmendedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePoolCreatedEvent(): PoolCreatedEvent {
  return {
    creator: "",
    base: "",
    quote: "",
    lpDenom: ""
  };
}
/**
 * @name PoolCreatedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolCreatedEvent
 */
export const PoolCreatedEvent = {
  typeUrl: "/bze.tradebin.PoolCreatedEvent",
  is(o: any): o is PoolCreatedEvent {
    return o && (o.$typeUrl === PoolCreatedEvent.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.lpDenom === "string");
  },
  isSDK(o: any): o is PoolCreatedEventSDKType {
    return o && (o.$typeUrl === PoolCreatedEvent.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.lp_denom === "string");
  },
  isAmino(o: any): o is PoolCreatedEventAmino {
    return o && (o.$typeUrl === PoolCreatedEvent.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.lp_denom === "string");
  },
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
    if (message.lpDenom !== "") {
      writer.uint32(34).string(message.lpDenom);
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
        case 4:
          message.lpDenom = reader.string();
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
    message.lpDenom = object.lpDenom ?? "";
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
    if (object.lp_denom !== undefined && object.lp_denom !== null) {
      message.lpDenom = object.lp_denom;
    }
    return message;
  },
  toAmino(message: PoolCreatedEvent): PoolCreatedEventAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    obj.lp_denom = message.lpDenom === "" ? undefined : message.lpDenom;
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
  },
  registerTypeUrl() {}
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
/**
 * @name LiquidityAddedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityAddedEvent
 */
export const LiquidityAddedEvent = {
  typeUrl: "/bze.tradebin.LiquidityAddedEvent",
  is(o: any): o is LiquidityAddedEvent {
    return o && (o.$typeUrl === LiquidityAddedEvent.typeUrl || typeof o.creator === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && typeof o.mintedAmount === "string" && typeof o.poolId === "string");
  },
  isSDK(o: any): o is LiquidityAddedEventSDKType {
    return o && (o.$typeUrl === LiquidityAddedEvent.typeUrl || typeof o.creator === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && typeof o.mintedAmount === "string" && typeof o.pool_id === "string");
  },
  isAmino(o: any): o is LiquidityAddedEventAmino {
    return o && (o.$typeUrl === LiquidityAddedEvent.typeUrl || typeof o.creator === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && typeof o.mintedAmount === "string" && typeof o.pool_id === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseLiquidityRemovedEvent(): LiquidityRemovedEvent {
  return {
    creator: "",
    baseAmount: "",
    quoteAmount: "",
    poolId: ""
  };
}
/**
 * @name LiquidityRemovedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.LiquidityRemovedEvent
 */
export const LiquidityRemovedEvent = {
  typeUrl: "/bze.tradebin.LiquidityRemovedEvent",
  is(o: any): o is LiquidityRemovedEvent {
    return o && (o.$typeUrl === LiquidityRemovedEvent.typeUrl || typeof o.creator === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && typeof o.poolId === "string");
  },
  isSDK(o: any): o is LiquidityRemovedEventSDKType {
    return o && (o.$typeUrl === LiquidityRemovedEvent.typeUrl || typeof o.creator === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && typeof o.pool_id === "string");
  },
  isAmino(o: any): o is LiquidityRemovedEventAmino {
    return o && (o.$typeUrl === LiquidityRemovedEvent.typeUrl || typeof o.creator === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && typeof o.pool_id === "string");
  },
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
  },
  registerTypeUrl() {}
};
function createBaseSwapEvent(): SwapEvent {
  return {
    creator: "",
    in: Coin.fromPartial({}),
    out: Coin.fromPartial({}),
    poolId: ""
  };
}
/**
 * @name SwapEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.SwapEvent
 */
export const SwapEvent = {
  typeUrl: "/bze.tradebin.SwapEvent",
  is(o: any): o is SwapEvent {
    return o && (o.$typeUrl === SwapEvent.typeUrl || typeof o.creator === "string" && Coin.is(o.in) && Coin.is(o.out) && typeof o.poolId === "string");
  },
  isSDK(o: any): o is SwapEventSDKType {
    return o && (o.$typeUrl === SwapEvent.typeUrl || typeof o.creator === "string" && Coin.isSDK(o.in) && Coin.isSDK(o.out) && typeof o.pool_id === "string");
  },
  isAmino(o: any): o is SwapEventAmino {
    return o && (o.$typeUrl === SwapEvent.typeUrl || typeof o.creator === "string" && Coin.isAmino(o.in) && Coin.isAmino(o.out) && typeof o.pool_id === "string");
  },
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SwapEvent.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseDenomHaltedEvent(): DenomHaltedEvent {
  return {
    denom: ""
  };
}
/**
 * DenomHaltedEvent is emitted for every denom a MsgHaltDenoms proposal actually halts (not for denoms
 * that were already halted).
 * @name DenomHaltedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomHaltedEvent
 */
export const DenomHaltedEvent = {
  typeUrl: "/bze.tradebin.DenomHaltedEvent",
  is(o: any): o is DenomHaltedEvent {
    return o && (o.$typeUrl === DenomHaltedEvent.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomHaltedEventSDKType {
    return o && (o.$typeUrl === DenomHaltedEvent.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomHaltedEventAmino {
    return o && (o.$typeUrl === DenomHaltedEvent.typeUrl || typeof o.denom === "string");
  },
  encode(message: DenomHaltedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomHaltedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomHaltedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomHaltedEvent>): DenomHaltedEvent {
    const message = createBaseDenomHaltedEvent();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomHaltedEventAmino): DenomHaltedEvent {
    const message = createBaseDenomHaltedEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomHaltedEvent): DenomHaltedEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomHaltedEventAminoMsg): DenomHaltedEvent {
    return DenomHaltedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomHaltedEventProtoMsg): DenomHaltedEvent {
    return DenomHaltedEvent.decode(message.value);
  },
  toProto(message: DenomHaltedEvent): Uint8Array {
    return DenomHaltedEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomHaltedEvent): DenomHaltedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.DenomHaltedEvent",
      value: DenomHaltedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomUnhaltedEvent(): DenomUnhaltedEvent {
  return {
    denom: ""
  };
}
/**
 * DenomUnhaltedEvent is emitted for every denom a MsgUnhaltDenoms proposal actually un-halts (not for
 * denoms that were not halted).
 * @name DenomUnhaltedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.DenomUnhaltedEvent
 */
export const DenomUnhaltedEvent = {
  typeUrl: "/bze.tradebin.DenomUnhaltedEvent",
  is(o: any): o is DenomUnhaltedEvent {
    return o && (o.$typeUrl === DenomUnhaltedEvent.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomUnhaltedEventSDKType {
    return o && (o.$typeUrl === DenomUnhaltedEvent.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomUnhaltedEventAmino {
    return o && (o.$typeUrl === DenomUnhaltedEvent.typeUrl || typeof o.denom === "string");
  },
  encode(message: DenomUnhaltedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomUnhaltedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomUnhaltedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomUnhaltedEvent>): DenomUnhaltedEvent {
    const message = createBaseDenomUnhaltedEvent();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomUnhaltedEventAmino): DenomUnhaltedEvent {
    const message = createBaseDenomUnhaltedEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomUnhaltedEvent): DenomUnhaltedEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomUnhaltedEventAminoMsg): DenomUnhaltedEvent {
    return DenomUnhaltedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomUnhaltedEventProtoMsg): DenomUnhaltedEvent {
    return DenomUnhaltedEvent.decode(message.value);
  },
  toProto(message: DenomUnhaltedEvent): Uint8Array {
    return DenomUnhaltedEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomUnhaltedEvent): DenomUnhaltedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.DenomUnhaltedEvent",
      value: DenomUnhaltedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePoolFeesUpdatedEvent(): PoolFeesUpdatedEvent {
  return {
    poolId: "",
    oldFee: "",
    newFee: "",
    oldFeeDest: FeeDestination.fromPartial({}),
    newFeeDest: FeeDestination.fromPartial({})
  };
}
/**
 * PoolFeesUpdatedEvent is emitted for every pool a MsgUpdatePools proposal actually changes (not for
 * entries equal to the pool's current values).
 * @name PoolFeesUpdatedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.PoolFeesUpdatedEvent
 */
export const PoolFeesUpdatedEvent = {
  typeUrl: "/bze.tradebin.PoolFeesUpdatedEvent",
  is(o: any): o is PoolFeesUpdatedEvent {
    return o && (o.$typeUrl === PoolFeesUpdatedEvent.typeUrl || typeof o.poolId === "string" && typeof o.oldFee === "string" && typeof o.newFee === "string" && FeeDestination.is(o.oldFeeDest) && FeeDestination.is(o.newFeeDest));
  },
  isSDK(o: any): o is PoolFeesUpdatedEventSDKType {
    return o && (o.$typeUrl === PoolFeesUpdatedEvent.typeUrl || typeof o.pool_id === "string" && typeof o.old_fee === "string" && typeof o.new_fee === "string" && FeeDestination.isSDK(o.old_fee_dest) && FeeDestination.isSDK(o.new_fee_dest));
  },
  isAmino(o: any): o is PoolFeesUpdatedEventAmino {
    return o && (o.$typeUrl === PoolFeesUpdatedEvent.typeUrl || typeof o.pool_id === "string" && typeof o.old_fee === "string" && typeof o.new_fee === "string" && FeeDestination.isAmino(o.old_fee_dest) && FeeDestination.isAmino(o.new_fee_dest));
  },
  encode(message: PoolFeesUpdatedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.oldFee !== "") {
      writer.uint32(18).string(message.oldFee);
    }
    if (message.newFee !== "") {
      writer.uint32(26).string(message.newFee);
    }
    if (message.oldFeeDest !== undefined) {
      FeeDestination.encode(message.oldFeeDest, writer.uint32(34).fork()).ldelim();
    }
    if (message.newFeeDest !== undefined) {
      FeeDestination.encode(message.newFeeDest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolFeesUpdatedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolFeesUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.oldFee = reader.string();
          break;
        case 3:
          message.newFee = reader.string();
          break;
        case 4:
          message.oldFeeDest = FeeDestination.decode(reader, reader.uint32());
          break;
        case 5:
          message.newFeeDest = FeeDestination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolFeesUpdatedEvent>): PoolFeesUpdatedEvent {
    const message = createBasePoolFeesUpdatedEvent();
    message.poolId = object.poolId ?? "";
    message.oldFee = object.oldFee ?? "";
    message.newFee = object.newFee ?? "";
    message.oldFeeDest = object.oldFeeDest !== undefined && object.oldFeeDest !== null ? FeeDestination.fromPartial(object.oldFeeDest) : undefined;
    message.newFeeDest = object.newFeeDest !== undefined && object.newFeeDest !== null ? FeeDestination.fromPartial(object.newFeeDest) : undefined;
    return message;
  },
  fromAmino(object: PoolFeesUpdatedEventAmino): PoolFeesUpdatedEvent {
    const message = createBasePoolFeesUpdatedEvent();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.old_fee !== undefined && object.old_fee !== null) {
      message.oldFee = object.old_fee;
    }
    if (object.new_fee !== undefined && object.new_fee !== null) {
      message.newFee = object.new_fee;
    }
    if (object.old_fee_dest !== undefined && object.old_fee_dest !== null) {
      message.oldFeeDest = FeeDestination.fromAmino(object.old_fee_dest);
    }
    if (object.new_fee_dest !== undefined && object.new_fee_dest !== null) {
      message.newFeeDest = FeeDestination.fromAmino(object.new_fee_dest);
    }
    return message;
  },
  toAmino(message: PoolFeesUpdatedEvent): PoolFeesUpdatedEventAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    obj.old_fee = message.oldFee === "" ? undefined : message.oldFee;
    obj.new_fee = message.newFee === "" ? undefined : message.newFee;
    obj.old_fee_dest = message.oldFeeDest ? FeeDestination.toAmino(message.oldFeeDest) : undefined;
    obj.new_fee_dest = message.newFeeDest ? FeeDestination.toAmino(message.newFeeDest) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolFeesUpdatedEventAminoMsg): PoolFeesUpdatedEvent {
    return PoolFeesUpdatedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolFeesUpdatedEventProtoMsg): PoolFeesUpdatedEvent {
    return PoolFeesUpdatedEvent.decode(message.value);
  },
  toProto(message: PoolFeesUpdatedEvent): Uint8Array {
    return PoolFeesUpdatedEvent.encode(message).finish();
  },
  toProtoMsg(message: PoolFeesUpdatedEvent): PoolFeesUpdatedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.PoolFeesUpdatedEvent",
      value: PoolFeesUpdatedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(PoolFeesUpdatedEvent.typeUrl)) {
      return;
    }
    FeeDestination.registerTypeUrl();
  }
};
function createBaseOrderMessageRefundedEvent(): OrderMessageRefundedEvent {
  return {
    orderId: "",
    marketId: "",
    orderType: "",
    owner: "",
    amount: "",
    refund: "",
    reason: ""
  };
}
/**
 * OrderMessageRefundedEvent is emitted when the unexecuted part of an order is
 * returned to its owner instead of resting on the book, in the same transaction.
 * Without it a fill order with no match would leave no trace of its processing.
 * @name OrderMessageRefundedEvent
 * @package bze.tradebin
 * @see proto type: bze.tradebin.OrderMessageRefundedEvent
 */
export const OrderMessageRefundedEvent = {
  typeUrl: "/bze.tradebin.OrderMessageRefundedEvent",
  is(o: any): o is OrderMessageRefundedEvent {
    return o && (o.$typeUrl === OrderMessageRefundedEvent.typeUrl || typeof o.orderId === "string" && typeof o.marketId === "string" && typeof o.orderType === "string" && typeof o.owner === "string" && typeof o.amount === "string" && typeof o.refund === "string" && typeof o.reason === "string");
  },
  isSDK(o: any): o is OrderMessageRefundedEventSDKType {
    return o && (o.$typeUrl === OrderMessageRefundedEvent.typeUrl || typeof o.order_id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.owner === "string" && typeof o.amount === "string" && typeof o.refund === "string" && typeof o.reason === "string");
  },
  isAmino(o: any): o is OrderMessageRefundedEventAmino {
    return o && (o.$typeUrl === OrderMessageRefundedEvent.typeUrl || typeof o.order_id === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && typeof o.owner === "string" && typeof o.amount === "string" && typeof o.refund === "string" && typeof o.reason === "string");
  },
  encode(message: OrderMessageRefundedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.refund !== "") {
      writer.uint32(50).string(message.refund);
    }
    if (message.reason !== "") {
      writer.uint32(58).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderMessageRefundedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderMessageRefundedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.orderType = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.refund = reader.string();
          break;
        case 7:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OrderMessageRefundedEvent>): OrderMessageRefundedEvent {
    const message = createBaseOrderMessageRefundedEvent();
    message.orderId = object.orderId ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.owner = object.owner ?? "";
    message.amount = object.amount ?? "";
    message.refund = object.refund ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: OrderMessageRefundedEventAmino): OrderMessageRefundedEvent {
    const message = createBaseOrderMessageRefundedEvent();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.refund !== undefined && object.refund !== null) {
      message.refund = object.refund;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: OrderMessageRefundedEvent): OrderMessageRefundedEventAmino {
    const obj: any = {};
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.refund = message.refund === "" ? undefined : message.refund;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: OrderMessageRefundedEventAminoMsg): OrderMessageRefundedEvent {
    return OrderMessageRefundedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderMessageRefundedEventProtoMsg): OrderMessageRefundedEvent {
    return OrderMessageRefundedEvent.decode(message.value);
  },
  toProto(message: OrderMessageRefundedEvent): Uint8Array {
    return OrderMessageRefundedEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderMessageRefundedEvent): OrderMessageRefundedEventProtoMsg {
    return {
      typeUrl: "/bze.tradebin.OrderMessageRefundedEvent",
      value: OrderMessageRefundedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};