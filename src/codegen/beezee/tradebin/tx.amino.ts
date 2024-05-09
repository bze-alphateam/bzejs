import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateMarket, MsgCreateOrder, MsgCancelOrder } from "./tx";
export interface AminoMsgCreateMarket extends AminoMsg {
  type: "/bze.tradebin.v1.MsgCreateMarket";
  value: {
    creator: string;
    base: string;
    quote: string;
  };
}
export interface AminoMsgCreateOrder extends AminoMsg {
  type: "/bze.tradebin.v1.MsgCreateOrder";
  value: {
    creator: string;
    order_type: string;
    amount: string;
    price: string;
    marketId: string;
  };
}
export interface AminoMsgCancelOrder extends AminoMsg {
  type: "/bze.tradebin.v1.MsgCancelOrder";
  value: {
    creator: string;
    marketId: string;
    orderId: string;
    order_type: string;
  };
}
export const AminoConverter = {
  "/bze.tradebin.v1.MsgCreateMarket": {
    aminoType: "/bze.tradebin.v1.MsgCreateMarket",
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
    aminoType: "/bze.tradebin.v1.MsgCreateOrder",
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
    aminoType: "/bze.tradebin.v1.MsgCancelOrder",
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
  }
};