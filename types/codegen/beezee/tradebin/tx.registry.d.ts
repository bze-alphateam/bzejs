import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateMarket, MsgCreateOrder, MsgCancelOrder, MsgFillOrders } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createMarket(value: MsgCreateMarket): {
            typeUrl: string;
            value: Uint8Array;
        };
        createOrder(value: MsgCreateOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        fillOrders(value: MsgFillOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createMarket(value: MsgCreateMarket): {
            typeUrl: string;
            value: MsgCreateMarket;
        };
        createOrder(value: MsgCreateOrder): {
            typeUrl: string;
            value: MsgCreateOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        fillOrders(value: MsgFillOrders): {
            typeUrl: string;
            value: MsgFillOrders;
        };
    };
    fromPartial: {
        createMarket(value: MsgCreateMarket): {
            typeUrl: string;
            value: MsgCreateMarket;
        };
        createOrder(value: MsgCreateOrder): {
            typeUrl: string;
            value: MsgCreateOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        fillOrders(value: MsgFillOrders): {
            typeUrl: string;
            value: MsgFillOrders;
        };
    };
};
