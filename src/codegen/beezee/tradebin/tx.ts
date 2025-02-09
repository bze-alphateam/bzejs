import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgCreateMarket {
  creator: string;
  base: string;
  quote: string;
}
export interface MsgCreateMarketSDKType {
  creator: string;
  base: string;
  quote: string;
}
export interface MsgCreateMarketResponse {}
export interface MsgCreateMarketResponseSDKType {}
export interface MsgCreateOrder {
  creator: string;
  orderType: string;
  amount: string;
  price: string;
  marketId: string;
}
export interface MsgCreateOrderSDKType {
  creator: string;
  order_type: string;
  amount: string;
  price: string;
  marketId: string;
}
export interface MsgCreateOrderResponse {}
export interface MsgCreateOrderResponseSDKType {}
export interface MsgCancelOrder {
  creator: string;
  marketId: string;
  orderId: string;
  orderType: string;
}
export interface MsgCancelOrderSDKType {
  creator: string;
  marketId: string;
  orderId: string;
  order_type: string;
}
export interface MsgCancelOrderResponse {}
export interface MsgCancelOrderResponseSDKType {}
export interface FillOrderItem {
  price: string;
  amount: string;
}
export interface FillOrderItemSDKType {
  price: string;
  amount: string;
}
export interface MsgFillOrders {
  creator: string;
  marketId: string;
  orderType: string;
  orders: FillOrderItem[];
}
export interface MsgFillOrdersSDKType {
  creator: string;
  marketId: string;
  order_type: string;
  orders: FillOrderItemSDKType[];
}
export interface MsgFillOrdersResponse {}
export interface MsgFillOrdersResponseSDKType {}

function createBaseMsgCreateMarket(): MsgCreateMarket {
  return {
    creator: "",
    base: "",
    quote: ""
  };
}

export const MsgCreateMarket = {
  encode(message: MsgCreateMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }

    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.base = reader.string();
          break;

        case 3:
          message.quote = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = createBaseMsgCreateMarket();
    message.creator = object.creator ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  }

};

function createBaseMsgCreateMarketResponse(): MsgCreateMarketResponse {
  return {};
}

export const MsgCreateMarketResponse = {
  encode(_: MsgCreateMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateMarketResponse>): MsgCreateMarketResponse {
    const message = createBaseMsgCreateMarketResponse();
    return message;
  }

};

function createBaseMsgCreateOrder(): MsgCreateOrder {
  return {
    creator: "",
    orderType: "",
    amount: "",
    price: "",
    marketId: ""
  };
}

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.orderType !== "") {
      writer.uint32(18).string(message.orderType);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    if (message.marketId !== "") {
      writer.uint32(42).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.orderType = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.price = reader.string();
          break;

        case 5:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = createBaseMsgCreateOrder();
    message.creator = object.creator ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseMsgCreateOrderResponse(): MsgCreateOrderResponse {
  return {};
}

export const MsgCreateOrderResponse = {
  encode(_: MsgCreateOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    const message = createBaseMsgCreateOrderResponse();
    return message;
  }

};

function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    creator: "",
    marketId: "",
    orderId: "",
    orderType: ""
  };
}

export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.orderId !== "") {
      writer.uint32(26).string(message.orderId);
    }

    if (message.orderType !== "") {
      writer.uint32(34).string(message.orderType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.orderId = reader.string();
          break;

        case 4:
          message.orderType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderId = object.orderId ?? "";
    message.orderType = object.orderType ?? "";
    return message;
  }

};

function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}

export const MsgCancelOrderResponse = {
  encode(_: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  }

};

function createBaseFillOrderItem(): FillOrderItem {
  return {
    price: "",
    amount: ""
  };
}

export const FillOrderItem = {
  encode(message: FillOrderItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FillOrderItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFillOrderItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FillOrderItem>): FillOrderItem {
    const message = createBaseFillOrderItem();
    message.price = object.price ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgFillOrders(): MsgFillOrders {
  return {
    creator: "",
    marketId: "",
    orderType: "",
    orders: []
  };
}

export const MsgFillOrders = {
  encode(message: MsgFillOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }

    for (const v of message.orders) {
      FillOrderItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFillOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFillOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.orderType = reader.string();
          break;

        case 4:
          message.orders.push(FillOrderItem.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFillOrders>): MsgFillOrders {
    const message = createBaseMsgFillOrders();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.orders = object.orders?.map(e => FillOrderItem.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgFillOrdersResponse(): MsgFillOrdersResponse {
  return {};
}

export const MsgFillOrdersResponse = {
  encode(_: MsgFillOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFillOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFillOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgFillOrdersResponse>): MsgFillOrdersResponse {
    const message = createBaseMsgFillOrdersResponse();
    return message;
  }

};