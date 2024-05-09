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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
