//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Market, MarketAmino, MarketSDKType, QueueMessage, QueueMessageAmino, QueueMessageSDKType, Order, OrderAmino, OrderSDKType, AggregatedOrder, AggregatedOrderAmino, AggregatedOrderSDKType, HistoryOrder, HistoryOrderAmino, HistoryOrderSDKType, UserDust, UserDustAmino, UserDustSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the tradebin module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  marketList: Market[];
  queueMessageList: QueueMessage[];
  orderList: Order[];
  aggregatedOrderList: AggregatedOrder[];
  historyOrderList: HistoryOrder[];
  orderCounter: bigint;
  allUsersDust: UserDust[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bze.tradebin.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the tradebin module's genesis state.
 * @name GenesisStateAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  market_list?: MarketAmino[];
  queue_message_list?: QueueMessageAmino[];
  order_list?: OrderAmino[];
  aggregated_order_list?: AggregatedOrderAmino[];
  history_order_list?: HistoryOrderAmino[];
  order_counter: string;
  all_users_dust?: UserDustAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/bze.tradebin.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tradebin module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  market_list: MarketSDKType[];
  queue_message_list: QueueMessageSDKType[];
  order_list: OrderSDKType[];
  aggregated_order_list: AggregatedOrderSDKType[];
  history_order_list: HistoryOrderSDKType[];
  order_counter: bigint;
  all_users_dust: UserDustSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    marketList: [],
    queueMessageList: [],
    orderList: [],
    aggregatedOrderList: [],
    historyOrderList: [],
    orderCounter: BigInt(0),
    allUsersDust: []
  };
}
export const GenesisState = {
  typeUrl: "/bze.tradebin.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.marketList) {
      Market.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.queueMessageList) {
      QueueMessage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.aggregatedOrderList) {
      AggregatedOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.historyOrderList) {
      HistoryOrder.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderCounter !== BigInt(0)) {
      writer.uint32(56).int64(message.orderCounter);
    }
    for (const v of message.allUsersDust) {
      UserDust.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.marketList.push(Market.decode(reader, reader.uint32()));
          break;
        case 3:
          message.queueMessageList.push(QueueMessage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.orderList.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.aggregatedOrderList.push(AggregatedOrder.decode(reader, reader.uint32()));
          break;
        case 6:
          message.historyOrderList.push(HistoryOrder.decode(reader, reader.uint32()));
          break;
        case 7:
          message.orderCounter = reader.int64();
          break;
        case 8:
          message.allUsersDust.push(UserDust.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.marketList = object.marketList?.map(e => Market.fromPartial(e)) || [];
    message.queueMessageList = object.queueMessageList?.map(e => QueueMessage.fromPartial(e)) || [];
    message.orderList = object.orderList?.map(e => Order.fromPartial(e)) || [];
    message.aggregatedOrderList = object.aggregatedOrderList?.map(e => AggregatedOrder.fromPartial(e)) || [];
    message.historyOrderList = object.historyOrderList?.map(e => HistoryOrder.fromPartial(e)) || [];
    message.orderCounter = object.orderCounter !== undefined && object.orderCounter !== null ? BigInt(object.orderCounter.toString()) : BigInt(0);
    message.allUsersDust = object.allUsersDust?.map(e => UserDust.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.marketList = object.market_list?.map(e => Market.fromAmino(e)) || [];
    message.queueMessageList = object.queue_message_list?.map(e => QueueMessage.fromAmino(e)) || [];
    message.orderList = object.order_list?.map(e => Order.fromAmino(e)) || [];
    message.aggregatedOrderList = object.aggregated_order_list?.map(e => AggregatedOrder.fromAmino(e)) || [];
    message.historyOrderList = object.history_order_list?.map(e => HistoryOrder.fromAmino(e)) || [];
    if (object.order_counter !== undefined && object.order_counter !== null) {
      message.orderCounter = BigInt(object.order_counter);
    }
    message.allUsersDust = object.all_users_dust?.map(e => UserDust.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.marketList) {
      obj.market_list = message.marketList.map(e => e ? Market.toAmino(e) : undefined);
    } else {
      obj.market_list = message.marketList;
    }
    if (message.queueMessageList) {
      obj.queue_message_list = message.queueMessageList.map(e => e ? QueueMessage.toAmino(e) : undefined);
    } else {
      obj.queue_message_list = message.queueMessageList;
    }
    if (message.orderList) {
      obj.order_list = message.orderList.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.order_list = message.orderList;
    }
    if (message.aggregatedOrderList) {
      obj.aggregated_order_list = message.aggregatedOrderList.map(e => e ? AggregatedOrder.toAmino(e) : undefined);
    } else {
      obj.aggregated_order_list = message.aggregatedOrderList;
    }
    if (message.historyOrderList) {
      obj.history_order_list = message.historyOrderList.map(e => e ? HistoryOrder.toAmino(e) : undefined);
    } else {
      obj.history_order_list = message.historyOrderList;
    }
    obj.order_counter = message.orderCounter ? message.orderCounter?.toString() : "0";
    if (message.allUsersDust) {
      obj.all_users_dust = message.allUsersDust.map(e => e ? UserDust.toAmino(e) : undefined);
    } else {
      obj.all_users_dust = message.allUsersDust;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/bze.tradebin.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};