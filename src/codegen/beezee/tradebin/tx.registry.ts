import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateMarket, MsgCreateOrder, MsgCancelOrder, MsgFillOrders } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.tradebin.v1.MsgCreateMarket", MsgCreateMarket], ["/bze.tradebin.v1.MsgCreateOrder", MsgCreateOrder], ["/bze.tradebin.v1.MsgCancelOrder", MsgCancelOrder], ["/bze.tradebin.v1.MsgFillOrders", MsgFillOrders]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCreateMarket",
        value: MsgCreateMarket.encode(value).finish()
      };
    },

    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCreateOrder",
        value: MsgCreateOrder.encode(value).finish()
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },

    fillOrders(value: MsgFillOrders) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgFillOrders",
        value: MsgFillOrders.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCreateMarket",
        value
      };
    },

    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCreateOrder",
        value
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCancelOrder",
        value
      };
    },

    fillOrders(value: MsgFillOrders) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgFillOrders",
        value
      };
    }

  },
  fromPartial: {
    createMarket(value: MsgCreateMarket) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCreateMarket",
        value: MsgCreateMarket.fromPartial(value)
      };
    },

    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCreateOrder",
        value: MsgCreateOrder.fromPartial(value)
      };
    },

    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },

    fillOrders(value: MsgFillOrders) {
      return {
        typeUrl: "/bze.tradebin.v1.MsgFillOrders",
        value: MsgFillOrders.fromPartial(value)
      };
    }

  }
};