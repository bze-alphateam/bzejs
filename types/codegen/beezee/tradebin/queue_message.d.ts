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
export declare const QueueMessage: {
    encode(message: QueueMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueMessage;
    fromPartial(object: DeepPartial<QueueMessage>): QueueMessage;
};
