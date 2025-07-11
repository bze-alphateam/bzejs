//@ts-nocheck
import { MsgUpdateParams, MsgCreateMarket, MsgCreateOrder, MsgCancelOrder, MsgFillOrders, MsgCreateLiquidityPool, MsgAddLiquidity, MsgRemoveLiquidity, MsgMultiSwap } from "./tx";
export const AminoConverter = {
  "/bze.tradebin.MsgUpdateParams": {
    aminoType: "bze/x/tradebin/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/bze.tradebin.MsgCreateMarket": {
    aminoType: "bze/x/tradebin/MsgCreateMarket",
    toAmino: MsgCreateMarket.toAmino,
    fromAmino: MsgCreateMarket.fromAmino
  },
  "/bze.tradebin.MsgCreateOrder": {
    aminoType: "bze/x/tradebin/MsgCreateOrder",
    toAmino: MsgCreateOrder.toAmino,
    fromAmino: MsgCreateOrder.fromAmino
  },
  "/bze.tradebin.MsgCancelOrder": {
    aminoType: "bze/x/tradebin/MsgCancelOrder",
    toAmino: MsgCancelOrder.toAmino,
    fromAmino: MsgCancelOrder.fromAmino
  },
  "/bze.tradebin.MsgFillOrders": {
    aminoType: "bze/x/tradebin/MsgFillOrders",
    toAmino: MsgFillOrders.toAmino,
    fromAmino: MsgFillOrders.fromAmino
  },
  "/bze.tradebin.MsgCreateLiquidityPool": {
    aminoType: "bze/x/tradebin/MsgCreateLiquidityPool",
    toAmino: MsgCreateLiquidityPool.toAmino,
    fromAmino: MsgCreateLiquidityPool.fromAmino
  },
  "/bze.tradebin.MsgAddLiquidity": {
    aminoType: "bze/x/tradebin/MsgAddLiquidity",
    toAmino: MsgAddLiquidity.toAmino,
    fromAmino: MsgAddLiquidity.fromAmino
  },
  "/bze.tradebin.MsgRemoveLiquidity": {
    aminoType: "bze/x/tradebin/MsgRemoveLiquidity",
    toAmino: MsgRemoveLiquidity.toAmino,
    fromAmino: MsgRemoveLiquidity.fromAmino
  },
  "/bze.tradebin.MsgMultiSwap": {
    aminoType: "bze/x/tradebin/MsgMultiSwap",
    toAmino: MsgMultiSwap.toAmino,
    fromAmino: MsgMultiSwap.fromAmino
  }
};