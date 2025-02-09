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
export const AminoConverter = {
  "/bze.tradebin.v1.MsgCreateMarket": {
    aminoType: "tradebin/CreateMarket",
    toAmino: ({
      creator,
      base,
      quote
    }: MsgCreateMarket): AminoMsgCreateMarket["value"] => {
      return {
        creator,
        base,
        quote
      };
    },
    fromAmino: ({
      creator,
      base,
      quote
    }: AminoMsgCreateMarket["value"]): MsgCreateMarket => {
      return {
        creator,
        base,
        quote
      };
    }
  },
  "/bze.tradebin.v1.MsgCreateOrder": {
    aminoType: "tradebin/CreateOrder",
    toAmino: ({
      creator,
      orderType,
      amount,
      price,
      marketId
    }: MsgCreateOrder): AminoMsgCreateOrder["value"] => {
      return {
        creator,
        order_type: orderType,
        amount,
        price,
        marketId
      };
    },
    fromAmino: ({
      creator,
      order_type,
      amount,
      price,
      marketId
    }: AminoMsgCreateOrder["value"]): MsgCreateOrder => {
      return {
        creator,
        orderType: order_type,
        amount,
        price,
        marketId
      };
    }
  },
  "/bze.tradebin.v1.MsgCancelOrder": {
    aminoType: "tradebin/CancelOrder",
    toAmino: ({
      creator,
      marketId,
      orderId,
      orderType
    }: MsgCancelOrder): AminoMsgCancelOrder["value"] => {
      return {
        creator,
        marketId,
        orderId,
        order_type: orderType
      };
    },
    fromAmino: ({
      creator,
      marketId,
      orderId,
      order_type
    }: AminoMsgCancelOrder["value"]): MsgCancelOrder => {
      return {
        creator,
        marketId,
        orderId,
        orderType: order_type
      };
    }
  },
  "/bze.tradebin.v1.MsgFillOrders": {
    aminoType: "tradebin/FillOrders",
    toAmino: ({
      creator,
      marketId,
      orderType,
      orders
    }: MsgFillOrders): AminoMsgFillOrders["value"] => {
      return {
        creator,
        marketId,
        order_type: orderType,
        orders: orders.map(el0 => ({
          price: el0.price,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      marketId,
      order_type,
      orders
    }: AminoMsgFillOrders["value"]): MsgFillOrders => {
      return {
        creator,
        marketId,
        orderType: order_type,
        orders: orders.map(el0 => ({
          price: el0.price,
          amount: el0.amount
        }))
      };
    }
  }
};