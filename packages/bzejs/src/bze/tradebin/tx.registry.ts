//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateMarket, MsgCreateOrder, MsgCancelOrder, MsgFillOrders, MsgCreateLiquidityPool, MsgAddLiquidity, MsgRemoveLiquidity, MsgMultiSwap } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.tradebin.MsgUpdateParams", MsgUpdateParams], ["/bze.tradebin.MsgCreateMarket", MsgCreateMarket], ["/bze.tradebin.MsgCreateOrder", MsgCreateOrder], ["/bze.tradebin.MsgCancelOrder", MsgCancelOrder], ["/bze.tradebin.MsgFillOrders", MsgFillOrders], ["/bze.tradebin.MsgCreateLiquidityPool", MsgCreateLiquidityPool], ["/bze.tradebin.MsgAddLiquidity", MsgAddLiquidity], ["/bze.tradebin.MsgRemoveLiquidity", MsgRemoveLiquidity], ["/bze.tradebin.MsgMultiSwap", MsgMultiSwap]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.tradebin.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateMarket",
        value: MsgCreateMarket.encode(value).finish()
      };
    },
    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateOrder",
        value: MsgCreateOrder.encode(value).finish()
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/bze.tradebin.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },
    fillOrders(value: MsgFillOrders) {
      return {
        typeUrl: "/bze.tradebin.MsgFillOrders",
        value: MsgFillOrders.encode(value).finish()
      };
    },
    createLiquidityPool(value: MsgCreateLiquidityPool) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateLiquidityPool",
        value: MsgCreateLiquidityPool.encode(value).finish()
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/bze.tradebin.MsgAddLiquidity",
        value: MsgAddLiquidity.encode(value).finish()
      };
    },
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/bze.tradebin.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.encode(value).finish()
      };
    },
    multiSwap(value: MsgMultiSwap) {
      return {
        typeUrl: "/bze.tradebin.MsgMultiSwap",
        value: MsgMultiSwap.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.tradebin.MsgUpdateParams",
        value
      };
    },
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateMarket",
        value
      };
    },
    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateOrder",
        value
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/bze.tradebin.MsgCancelOrder",
        value
      };
    },
    fillOrders(value: MsgFillOrders) {
      return {
        typeUrl: "/bze.tradebin.MsgFillOrders",
        value
      };
    },
    createLiquidityPool(value: MsgCreateLiquidityPool) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateLiquidityPool",
        value
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/bze.tradebin.MsgAddLiquidity",
        value
      };
    },
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/bze.tradebin.MsgRemoveLiquidity",
        value
      };
    },
    multiSwap(value: MsgMultiSwap) {
      return {
        typeUrl: "/bze.tradebin.MsgMultiSwap",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.tradebin.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateMarket",
        value: MsgCreateMarket.fromPartial(value)
      };
    },
    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateOrder",
        value: MsgCreateOrder.fromPartial(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/bze.tradebin.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },
    fillOrders(value: MsgFillOrders) {
      return {
        typeUrl: "/bze.tradebin.MsgFillOrders",
        value: MsgFillOrders.fromPartial(value)
      };
    },
    createLiquidityPool(value: MsgCreateLiquidityPool) {
      return {
        typeUrl: "/bze.tradebin.MsgCreateLiquidityPool",
        value: MsgCreateLiquidityPool.fromPartial(value)
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/bze.tradebin.MsgAddLiquidity",
        value: MsgAddLiquidity.fromPartial(value)
      };
    },
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/bze.tradebin.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.fromPartial(value)
      };
    },
    multiSwap(value: MsgMultiSwap) {
      return {
        typeUrl: "/bze.tradebin.MsgMultiSwap",
        value: MsgMultiSwap.fromPartial(value)
      };
    }
  }
};