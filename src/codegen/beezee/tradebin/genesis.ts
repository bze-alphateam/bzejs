import { Params, ParamsSDKType } from "./params";
import { Market, MarketSDKType } from "./market";
import { QueueMessage, QueueMessageSDKType } from "./queue_message";
import { Order, OrderSDKType, AggregatedOrder, AggregatedOrderSDKType, HistoryOrder, HistoryOrderSDKType } from "./order";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** GenesisState defines the tradebin module's genesis state. */

export interface GenesisState {
  params?: Params;
  marketList: Market[];
  queueMessageList: QueueMessage[];
  orderList: Order[];
  aggregatedOrderList: AggregatedOrder[];
  historyOrderList: HistoryOrder[];
  orderCounter: Long;
}
/** GenesisState defines the tradebin module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  market_list: MarketSDKType[];
  queue_message_list: QueueMessageSDKType[];
  order_list: OrderSDKType[];
  aggregated_order_list: AggregatedOrderSDKType[];
  history_order_list: HistoryOrderSDKType[];
  order_counter: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    marketList: [],
    queueMessageList: [],
    orderList: [],
    aggregatedOrderList: [],
    historyOrderList: [],
    orderCounter: Long.ZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.orderCounter.isZero()) {
      writer.uint32(56).int64(message.orderCounter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.orderCounter = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.marketList = object.marketList?.map(e => Market.fromPartial(e)) || [];
    message.queueMessageList = object.queueMessageList?.map(e => QueueMessage.fromPartial(e)) || [];
    message.orderList = object.orderList?.map(e => Order.fromPartial(e)) || [];
    message.aggregatedOrderList = object.aggregatedOrderList?.map(e => AggregatedOrder.fromPartial(e)) || [];
    message.historyOrderList = object.historyOrderList?.map(e => HistoryOrder.fromPartial(e)) || [];
    message.orderCounter = object.orderCounter !== undefined && object.orderCounter !== null ? Long.fromValue(object.orderCounter) : Long.ZERO;
    return message;
  }

};