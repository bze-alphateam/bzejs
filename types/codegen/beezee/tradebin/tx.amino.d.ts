import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateMarket, MsgCreateOrder, MsgCancelOrder, MsgFillOrders } from "./tx";
export interface AminoMsgCreateMarket extends AminoMsg {
    type: "tradebin/CreateMarket";
    value: {
        creator: string;
        base: string;
        quote: string;
    };
}
export interface AminoMsgCreateOrder extends AminoMsg {
    type: "tradebin/CreateOrder";
    value: {
        creator: string;
        order_type: string;
        amount: string;
        price: string;
        marketId: string;
    };
}
export interface AminoMsgCancelOrder extends AminoMsg {
    type: "tradebin/CancelOrder";
    value: {
        creator: string;
        marketId: string;
        orderId: string;
        order_type: string;
    };
}
export interface AminoMsgFillOrders extends AminoMsg {
    type: "tradebin/FillOrders";
    value: {
        creator: string;
        marketId: string;
        order_type: string;
        orders: {
            price: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/bze.tradebin.v1.MsgCreateMarket": {
        aminoType: string;
        toAmino: ({ creator, base, quote }: MsgCreateMarket) => AminoMsgCreateMarket["value"];
        fromAmino: ({ creator, base, quote }: AminoMsgCreateMarket["value"]) => MsgCreateMarket;
    };
    "/bze.tradebin.v1.MsgCreateOrder": {
        aminoType: string;
        toAmino: ({ creator, orderType, amount, price, marketId }: MsgCreateOrder) => AminoMsgCreateOrder["value"];
        fromAmino: ({ creator, order_type, amount, price, marketId }: AminoMsgCreateOrder["value"]) => MsgCreateOrder;
    };
    "/bze.tradebin.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ creator, marketId, orderId, orderType }: MsgCancelOrder) => AminoMsgCancelOrder["value"];
        fromAmino: ({ creator, marketId, orderId, order_type }: AminoMsgCancelOrder["value"]) => MsgCancelOrder;
    };
    "/bze.tradebin.v1.MsgFillOrders": {
        aminoType: string;
        toAmino: ({ creator, marketId, orderType, orders }: MsgFillOrders) => AminoMsgFillOrders["value"];
        fromAmino: ({ creator, marketId, order_type, orders }: AminoMsgFillOrders["value"]) => MsgFillOrders;
    };
};
