//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./v2/params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bze.tradebin.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "bze/x/tradebin/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParams
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bze.tradebin.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * @name MsgCreateMarket
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarket
 */
export interface MsgCreateMarket {
  creator: string;
  base: string;
  quote: string;
}
export interface MsgCreateMarketProtoMsg {
  typeUrl: "/bze.tradebin.MsgCreateMarket";
  value: Uint8Array;
}
/**
 * @name MsgCreateMarketAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarket
 */
export interface MsgCreateMarketAmino {
  creator?: string;
  base?: string;
  quote?: string;
}
export interface MsgCreateMarketAminoMsg {
  type: "bze/x/tradebin/MsgCreateMarket";
  value: MsgCreateMarketAmino;
}
/**
 * @name MsgCreateMarketSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarket
 */
export interface MsgCreateMarketSDKType {
  creator: string;
  base: string;
  quote: string;
}
/**
 * @name MsgCreateMarketResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarketResponse
 */
export interface MsgCreateMarketResponse {}
export interface MsgCreateMarketResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgCreateMarketResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateMarketResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarketResponse
 */
export interface MsgCreateMarketResponseAmino {}
export interface MsgCreateMarketResponseAminoMsg {
  type: "/bze.tradebin.MsgCreateMarketResponse";
  value: MsgCreateMarketResponseAmino;
}
/**
 * @name MsgCreateMarketResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarketResponse
 */
export interface MsgCreateMarketResponseSDKType {}
/**
 * @name MsgCreateOrder
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrder
 */
export interface MsgCreateOrder {
  creator: string;
  orderType: string;
  amount: string;
  price: string;
  marketId: string;
}
export interface MsgCreateOrderProtoMsg {
  typeUrl: "/bze.tradebin.MsgCreateOrder";
  value: Uint8Array;
}
/**
 * @name MsgCreateOrderAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrder
 */
export interface MsgCreateOrderAmino {
  creator?: string;
  order_type?: string;
  amount?: string;
  price?: string;
  market_id?: string;
}
export interface MsgCreateOrderAminoMsg {
  type: "bze/x/tradebin/MsgCreateOrder";
  value: MsgCreateOrderAmino;
}
/**
 * @name MsgCreateOrderSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrder
 */
export interface MsgCreateOrderSDKType {
  creator: string;
  order_type: string;
  amount: string;
  price: string;
  market_id: string;
}
/**
 * @name MsgCreateOrderResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrderResponse
 */
export interface MsgCreateOrderResponse {}
export interface MsgCreateOrderResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgCreateOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateOrderResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrderResponse
 */
export interface MsgCreateOrderResponseAmino {}
export interface MsgCreateOrderResponseAminoMsg {
  type: "/bze.tradebin.MsgCreateOrderResponse";
  value: MsgCreateOrderResponseAmino;
}
/**
 * @name MsgCreateOrderResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrderResponse
 */
export interface MsgCreateOrderResponseSDKType {}
/**
 * @name MsgCancelOrder
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrder
 */
export interface MsgCancelOrder {
  creator: string;
  marketId: string;
  orderId: string;
  orderType: string;
}
export interface MsgCancelOrderProtoMsg {
  typeUrl: "/bze.tradebin.MsgCancelOrder";
  value: Uint8Array;
}
/**
 * @name MsgCancelOrderAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrder
 */
export interface MsgCancelOrderAmino {
  creator?: string;
  market_id?: string;
  order_id?: string;
  order_type?: string;
}
export interface MsgCancelOrderAminoMsg {
  type: "bze/x/tradebin/MsgCancelOrder";
  value: MsgCancelOrderAmino;
}
/**
 * @name MsgCancelOrderSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrder
 */
export interface MsgCancelOrderSDKType {
  creator: string;
  market_id: string;
  order_id: string;
  order_type: string;
}
/**
 * @name MsgCancelOrderResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrderResponse
 */
export interface MsgCancelOrderResponse {}
export interface MsgCancelOrderResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgCancelOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgCancelOrderResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrderResponse
 */
export interface MsgCancelOrderResponseAmino {}
export interface MsgCancelOrderResponseAminoMsg {
  type: "/bze.tradebin.MsgCancelOrderResponse";
  value: MsgCancelOrderResponseAmino;
}
/**
 * @name MsgCancelOrderResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrderResponse
 */
export interface MsgCancelOrderResponseSDKType {}
/**
 * @name MsgFillOrders
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrders
 */
export interface MsgFillOrders {
  creator: string;
  marketId: string;
  orderType: string;
  orders: FillOrderItem[];
}
export interface MsgFillOrdersProtoMsg {
  typeUrl: "/bze.tradebin.MsgFillOrders";
  value: Uint8Array;
}
/**
 * @name MsgFillOrdersAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrders
 */
export interface MsgFillOrdersAmino {
  creator?: string;
  market_id?: string;
  order_type?: string;
  orders?: FillOrderItemAmino[];
}
export interface MsgFillOrdersAminoMsg {
  type: "bze/x/tradebin/MsgFillOrders";
  value: MsgFillOrdersAmino;
}
/**
 * @name MsgFillOrdersSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrders
 */
export interface MsgFillOrdersSDKType {
  creator: string;
  market_id: string;
  order_type: string;
  orders: FillOrderItemSDKType[];
}
/**
 * @name FillOrderItem
 * @package bze.tradebin
 * @see proto type: bze.tradebin.FillOrderItem
 */
export interface FillOrderItem {
  price: string;
  amount: string;
}
export interface FillOrderItemProtoMsg {
  typeUrl: "/bze.tradebin.FillOrderItem";
  value: Uint8Array;
}
/**
 * @name FillOrderItemAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.FillOrderItem
 */
export interface FillOrderItemAmino {
  price?: string;
  amount?: string;
}
export interface FillOrderItemAminoMsg {
  type: "/bze.tradebin.FillOrderItem";
  value: FillOrderItemAmino;
}
/**
 * @name FillOrderItemSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.FillOrderItem
 */
export interface FillOrderItemSDKType {
  price: string;
  amount: string;
}
/**
 * @name MsgFillOrdersResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrdersResponse
 */
export interface MsgFillOrdersResponse {}
export interface MsgFillOrdersResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgFillOrdersResponse";
  value: Uint8Array;
}
/**
 * @name MsgFillOrdersResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrdersResponse
 */
export interface MsgFillOrdersResponseAmino {}
export interface MsgFillOrdersResponseAminoMsg {
  type: "/bze.tradebin.MsgFillOrdersResponse";
  value: MsgFillOrdersResponseAmino;
}
/**
 * @name MsgFillOrdersResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrdersResponse
 */
export interface MsgFillOrdersResponseSDKType {}
/**
 * @name MsgCreateLiquidityPool
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPool
 */
export interface MsgCreateLiquidityPool {
  creator: string;
  base: string;
  quote: string;
  fee: string;
  feeDest: string;
  stable: boolean;
  initialBase: string;
  initialQuote: string;
}
export interface MsgCreateLiquidityPoolProtoMsg {
  typeUrl: "/bze.tradebin.MsgCreateLiquidityPool";
  value: Uint8Array;
}
/**
 * @name MsgCreateLiquidityPoolAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPool
 */
export interface MsgCreateLiquidityPoolAmino {
  creator?: string;
  base?: string;
  quote?: string;
  fee?: string;
  fee_dest?: string;
  stable?: boolean;
  initial_base?: string;
  initial_quote?: string;
}
export interface MsgCreateLiquidityPoolAminoMsg {
  type: "bze/x/tradebin/MsgCreateLiquidityPool";
  value: MsgCreateLiquidityPoolAmino;
}
/**
 * @name MsgCreateLiquidityPoolSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPool
 */
export interface MsgCreateLiquidityPoolSDKType {
  creator: string;
  base: string;
  quote: string;
  fee: string;
  fee_dest: string;
  stable: boolean;
  initial_base: string;
  initial_quote: string;
}
/**
 * @name MsgCreateLiquidityPoolResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPoolResponse
 */
export interface MsgCreateLiquidityPoolResponse {
  id: string;
}
export interface MsgCreateLiquidityPoolResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgCreateLiquidityPoolResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateLiquidityPoolResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPoolResponse
 */
export interface MsgCreateLiquidityPoolResponseAmino {
  id?: string;
}
export interface MsgCreateLiquidityPoolResponseAminoMsg {
  type: "/bze.tradebin.MsgCreateLiquidityPoolResponse";
  value: MsgCreateLiquidityPoolResponseAmino;
}
/**
 * @name MsgCreateLiquidityPoolResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPoolResponse
 */
export interface MsgCreateLiquidityPoolResponseSDKType {
  id: string;
}
/**
 * @name MsgAddLiquidity
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidity
 */
export interface MsgAddLiquidity {
  creator: string;
  poolId: string;
  baseAmount: string;
  quoteAmount: string;
  minLpTokens: string;
}
export interface MsgAddLiquidityProtoMsg {
  typeUrl: "/bze.tradebin.MsgAddLiquidity";
  value: Uint8Array;
}
/**
 * @name MsgAddLiquidityAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidity
 */
export interface MsgAddLiquidityAmino {
  creator?: string;
  pool_id?: string;
  base_amount?: string;
  quote_amount?: string;
  min_lp_tokens?: string;
}
export interface MsgAddLiquidityAminoMsg {
  type: "bze/x/tradebin/MsgAddLiquidity";
  value: MsgAddLiquidityAmino;
}
/**
 * @name MsgAddLiquiditySDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidity
 */
export interface MsgAddLiquiditySDKType {
  creator: string;
  pool_id: string;
  base_amount: string;
  quote_amount: string;
  min_lp_tokens: string;
}
/**
 * @name MsgAddLiquidityResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidityResponse
 */
export interface MsgAddLiquidityResponse {
  mintedAmount: string;
}
export interface MsgAddLiquidityResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgAddLiquidityResponse";
  value: Uint8Array;
}
/**
 * @name MsgAddLiquidityResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidityResponse
 */
export interface MsgAddLiquidityResponseAmino {
  minted_amount?: string;
}
export interface MsgAddLiquidityResponseAminoMsg {
  type: "/bze.tradebin.MsgAddLiquidityResponse";
  value: MsgAddLiquidityResponseAmino;
}
/**
 * @name MsgAddLiquidityResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidityResponse
 */
export interface MsgAddLiquidityResponseSDKType {
  minted_amount: string;
}
/**
 * @name MsgRemoveLiquidity
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidity
 */
export interface MsgRemoveLiquidity {
  creator: string;
  poolId: string;
  lpTokens: string;
  minBase: string;
  minQuote: string;
}
export interface MsgRemoveLiquidityProtoMsg {
  typeUrl: "/bze.tradebin.MsgRemoveLiquidity";
  value: Uint8Array;
}
/**
 * @name MsgRemoveLiquidityAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidity
 */
export interface MsgRemoveLiquidityAmino {
  creator?: string;
  pool_id?: string;
  lp_tokens?: string;
  min_base?: string;
  min_quote?: string;
}
export interface MsgRemoveLiquidityAminoMsg {
  type: "bze/x/tradebin/MsgRemoveLiquidity";
  value: MsgRemoveLiquidityAmino;
}
/**
 * @name MsgRemoveLiquiditySDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidity
 */
export interface MsgRemoveLiquiditySDKType {
  creator: string;
  pool_id: string;
  lp_tokens: string;
  min_base: string;
  min_quote: string;
}
/**
 * @name MsgRemoveLiquidityResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidityResponse
 */
export interface MsgRemoveLiquidityResponse {
  base: string;
  quote: string;
}
export interface MsgRemoveLiquidityResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgRemoveLiquidityResponse";
  value: Uint8Array;
}
/**
 * @name MsgRemoveLiquidityResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidityResponse
 */
export interface MsgRemoveLiquidityResponseAmino {
  base?: string;
  quote?: string;
}
export interface MsgRemoveLiquidityResponseAminoMsg {
  type: "/bze.tradebin.MsgRemoveLiquidityResponse";
  value: MsgRemoveLiquidityResponseAmino;
}
/**
 * @name MsgRemoveLiquidityResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidityResponse
 */
export interface MsgRemoveLiquidityResponseSDKType {
  base: string;
  quote: string;
}
/**
 * @name MsgMultiSwap
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwap
 */
export interface MsgMultiSwap {
  creator: string;
  routes: string[];
  input: Coin;
  minOutput: Coin;
}
export interface MsgMultiSwapProtoMsg {
  typeUrl: "/bze.tradebin.MsgMultiSwap";
  value: Uint8Array;
}
/**
 * @name MsgMultiSwapAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwap
 */
export interface MsgMultiSwapAmino {
  creator?: string;
  routes?: string[];
  input?: CoinAmino;
  min_output?: CoinAmino;
}
export interface MsgMultiSwapAminoMsg {
  type: "bze/x/tradebin/MsgMultiSwap";
  value: MsgMultiSwapAmino;
}
/**
 * @name MsgMultiSwapSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwap
 */
export interface MsgMultiSwapSDKType {
  creator: string;
  routes: string[];
  input: CoinSDKType;
  min_output: CoinSDKType;
}
/**
 * @name MsgMultiSwapResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwapResponse
 */
export interface MsgMultiSwapResponse {
  output: Coin;
}
export interface MsgMultiSwapResponseProtoMsg {
  typeUrl: "/bze.tradebin.MsgMultiSwapResponse";
  value: Uint8Array;
}
/**
 * @name MsgMultiSwapResponseAmino
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwapResponse
 */
export interface MsgMultiSwapResponseAmino {
  output?: CoinAmino;
}
export interface MsgMultiSwapResponseAminoMsg {
  type: "/bze.tradebin.MsgMultiSwapResponse";
  value: MsgMultiSwapResponseAmino;
}
/**
 * @name MsgMultiSwapResponseSDKType
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwapResponse
 */
export interface MsgMultiSwapResponseSDKType {
  output: CoinSDKType;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/bze.tradebin.MsgUpdateParams",
  aminoType: "bze/x/tradebin/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "bze/x/tradebin/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/bze.tradebin.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMarket(): MsgCreateMarket {
  return {
    creator: "",
    base: "",
    quote: ""
  };
}
/**
 * @name MsgCreateMarket
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarket
 */
export const MsgCreateMarket = {
  typeUrl: "/bze.tradebin.MsgCreateMarket",
  aminoType: "bze/x/tradebin/MsgCreateMarket",
  is(o: any): o is MsgCreateMarket {
    return o && (o.$typeUrl === MsgCreateMarket.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string");
  },
  isSDK(o: any): o is MsgCreateMarketSDKType {
    return o && (o.$typeUrl === MsgCreateMarket.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string");
  },
  isAmino(o: any): o is MsgCreateMarketAmino {
    return o && (o.$typeUrl === MsgCreateMarket.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string");
  },
  encode(message: MsgCreateMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgCreateMarket>): MsgCreateMarket {
    const message = createBaseMsgCreateMarket();
    message.creator = object.creator ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMarketAmino): MsgCreateMarket {
    const message = createBaseMsgCreateMarket();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    return message;
  },
  toAmino(message: MsgCreateMarket): MsgCreateMarketAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMarketAminoMsg): MsgCreateMarket {
    return MsgCreateMarket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateMarket): MsgCreateMarketAminoMsg {
    return {
      type: "bze/x/tradebin/MsgCreateMarket",
      value: MsgCreateMarket.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateMarketProtoMsg): MsgCreateMarket {
    return MsgCreateMarket.decode(message.value);
  },
  toProto(message: MsgCreateMarket): Uint8Array {
    return MsgCreateMarket.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMarket): MsgCreateMarketProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCreateMarket",
      value: MsgCreateMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMarketResponse(): MsgCreateMarketResponse {
  return {};
}
/**
 * @name MsgCreateMarketResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateMarketResponse
 */
export const MsgCreateMarketResponse = {
  typeUrl: "/bze.tradebin.MsgCreateMarketResponse",
  is(o: any): o is MsgCreateMarketResponse {
    return o && o.$typeUrl === MsgCreateMarketResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateMarketResponseSDKType {
    return o && o.$typeUrl === MsgCreateMarketResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateMarketResponseAmino {
    return o && o.$typeUrl === MsgCreateMarketResponse.typeUrl;
  },
  encode(_: MsgCreateMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgCreateMarketResponse>): MsgCreateMarketResponse {
    const message = createBaseMsgCreateMarketResponse();
    return message;
  },
  fromAmino(_: MsgCreateMarketResponseAmino): MsgCreateMarketResponse {
    const message = createBaseMsgCreateMarketResponse();
    return message;
  },
  toAmino(_: MsgCreateMarketResponse): MsgCreateMarketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateMarketResponseAminoMsg): MsgCreateMarketResponse {
    return MsgCreateMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMarketResponseProtoMsg): MsgCreateMarketResponse {
    return MsgCreateMarketResponse.decode(message.value);
  },
  toProto(message: MsgCreateMarketResponse): Uint8Array {
    return MsgCreateMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMarketResponse): MsgCreateMarketResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCreateMarketResponse",
      value: MsgCreateMarketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
/**
 * @name MsgCreateOrder
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrder
 */
export const MsgCreateOrder = {
  typeUrl: "/bze.tradebin.MsgCreateOrder",
  aminoType: "bze/x/tradebin/MsgCreateOrder",
  is(o: any): o is MsgCreateOrder {
    return o && (o.$typeUrl === MsgCreateOrder.typeUrl || typeof o.creator === "string" && typeof o.orderType === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.marketId === "string");
  },
  isSDK(o: any): o is MsgCreateOrderSDKType {
    return o && (o.$typeUrl === MsgCreateOrder.typeUrl || typeof o.creator === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.market_id === "string");
  },
  isAmino(o: any): o is MsgCreateOrderAmino {
    return o && (o.$typeUrl === MsgCreateOrder.typeUrl || typeof o.creator === "string" && typeof o.order_type === "string" && typeof o.amount === "string" && typeof o.price === "string" && typeof o.market_id === "string");
  },
  encode(message: MsgCreateOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgCreateOrder>): MsgCreateOrder {
    const message = createBaseMsgCreateOrder();
    message.creator = object.creator ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateOrderAmino): MsgCreateOrder {
    const message = createBaseMsgCreateOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: MsgCreateOrder): MsgCreateOrderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = message.price === "" ? undefined : message.price;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOrderAminoMsg): MsgCreateOrder {
    return MsgCreateOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateOrder): MsgCreateOrderAminoMsg {
    return {
      type: "bze/x/tradebin/MsgCreateOrder",
      value: MsgCreateOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateOrderProtoMsg): MsgCreateOrder {
    return MsgCreateOrder.decode(message.value);
  },
  toProto(message: MsgCreateOrder): Uint8Array {
    return MsgCreateOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOrder): MsgCreateOrderProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCreateOrder",
      value: MsgCreateOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateOrderResponse(): MsgCreateOrderResponse {
  return {};
}
/**
 * @name MsgCreateOrderResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateOrderResponse
 */
export const MsgCreateOrderResponse = {
  typeUrl: "/bze.tradebin.MsgCreateOrderResponse",
  is(o: any): o is MsgCreateOrderResponse {
    return o && o.$typeUrl === MsgCreateOrderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateOrderResponseSDKType {
    return o && o.$typeUrl === MsgCreateOrderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateOrderResponseAmino {
    return o && o.$typeUrl === MsgCreateOrderResponse.typeUrl;
  },
  encode(_: MsgCreateOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    const message = createBaseMsgCreateOrderResponse();
    return message;
  },
  fromAmino(_: MsgCreateOrderResponseAmino): MsgCreateOrderResponse {
    const message = createBaseMsgCreateOrderResponse();
    return message;
  },
  toAmino(_: MsgCreateOrderResponse): MsgCreateOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateOrderResponseAminoMsg): MsgCreateOrderResponse {
    return MsgCreateOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOrderResponseProtoMsg): MsgCreateOrderResponse {
    return MsgCreateOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateOrderResponse): Uint8Array {
    return MsgCreateOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOrderResponse): MsgCreateOrderResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCreateOrderResponse",
      value: MsgCreateOrderResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    creator: "",
    marketId: "",
    orderId: "",
    orderType: ""
  };
}
/**
 * @name MsgCancelOrder
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrder
 */
export const MsgCancelOrder = {
  typeUrl: "/bze.tradebin.MsgCancelOrder",
  aminoType: "bze/x/tradebin/MsgCancelOrder",
  is(o: any): o is MsgCancelOrder {
    return o && (o.$typeUrl === MsgCancelOrder.typeUrl || typeof o.creator === "string" && typeof o.marketId === "string" && typeof o.orderId === "string" && typeof o.orderType === "string");
  },
  isSDK(o: any): o is MsgCancelOrderSDKType {
    return o && (o.$typeUrl === MsgCancelOrder.typeUrl || typeof o.creator === "string" && typeof o.market_id === "string" && typeof o.order_id === "string" && typeof o.order_type === "string");
  },
  isAmino(o: any): o is MsgCancelOrderAmino {
    return o && (o.$typeUrl === MsgCancelOrder.typeUrl || typeof o.creator === "string" && typeof o.market_id === "string" && typeof o.order_id === "string" && typeof o.order_type === "string");
  },
  encode(message: MsgCancelOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderId = object.orderId ?? "";
    message.orderType = object.orderType ?? "";
    return message;
  },
  fromAmino(object: MsgCancelOrderAmino): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    return message;
  },
  toAmino(message: MsgCancelOrder): MsgCancelOrderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderAminoMsg): MsgCancelOrder {
    return MsgCancelOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelOrder): MsgCancelOrderAminoMsg {
    return {
      type: "bze/x/tradebin/MsgCancelOrder",
      value: MsgCancelOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelOrderProtoMsg): MsgCancelOrder {
    return MsgCancelOrder.decode(message.value);
  },
  toProto(message: MsgCancelOrder): Uint8Array {
    return MsgCancelOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrder): MsgCancelOrderProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCancelOrder",
      value: MsgCancelOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}
/**
 * @name MsgCancelOrderResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCancelOrderResponse
 */
export const MsgCancelOrderResponse = {
  typeUrl: "/bze.tradebin.MsgCancelOrderResponse",
  is(o: any): o is MsgCancelOrderResponse {
    return o && o.$typeUrl === MsgCancelOrderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelOrderResponseSDKType {
    return o && o.$typeUrl === MsgCancelOrderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelOrderResponseAmino {
    return o && o.$typeUrl === MsgCancelOrderResponse.typeUrl;
  },
  encode(_: MsgCancelOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelOrderResponseAmino): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  },
  toAmino(_: MsgCancelOrderResponse): MsgCancelOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderResponseAminoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOrderResponseProtoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelOrderResponse): Uint8Array {
    return MsgCancelOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrderResponse): MsgCancelOrderResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCancelOrderResponse",
      value: MsgCancelOrderResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgFillOrders(): MsgFillOrders {
  return {
    creator: "",
    marketId: "",
    orderType: "",
    orders: []
  };
}
/**
 * @name MsgFillOrders
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrders
 */
export const MsgFillOrders = {
  typeUrl: "/bze.tradebin.MsgFillOrders",
  aminoType: "bze/x/tradebin/MsgFillOrders",
  is(o: any): o is MsgFillOrders {
    return o && (o.$typeUrl === MsgFillOrders.typeUrl || typeof o.creator === "string" && typeof o.marketId === "string" && typeof o.orderType === "string" && Array.isArray(o.orders) && (!o.orders.length || FillOrderItem.is(o.orders[0])));
  },
  isSDK(o: any): o is MsgFillOrdersSDKType {
    return o && (o.$typeUrl === MsgFillOrders.typeUrl || typeof o.creator === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && Array.isArray(o.orders) && (!o.orders.length || FillOrderItem.isSDK(o.orders[0])));
  },
  isAmino(o: any): o is MsgFillOrdersAmino {
    return o && (o.$typeUrl === MsgFillOrders.typeUrl || typeof o.creator === "string" && typeof o.market_id === "string" && typeof o.order_type === "string" && Array.isArray(o.orders) && (!o.orders.length || FillOrderItem.isAmino(o.orders[0])));
  },
  encode(message: MsgFillOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFillOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgFillOrders>): MsgFillOrders {
    const message = createBaseMsgFillOrders();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.orders = object.orders?.map(e => FillOrderItem.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFillOrdersAmino): MsgFillOrders {
    const message = createBaseMsgFillOrders();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    message.orders = object.orders?.map(e => FillOrderItem.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFillOrders): MsgFillOrdersAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_type = message.orderType === "" ? undefined : message.orderType;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? FillOrderItem.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFillOrdersAminoMsg): MsgFillOrders {
    return MsgFillOrders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFillOrders): MsgFillOrdersAminoMsg {
    return {
      type: "bze/x/tradebin/MsgFillOrders",
      value: MsgFillOrders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFillOrdersProtoMsg): MsgFillOrders {
    return MsgFillOrders.decode(message.value);
  },
  toProto(message: MsgFillOrders): Uint8Array {
    return MsgFillOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgFillOrders): MsgFillOrdersProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgFillOrders",
      value: MsgFillOrders.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgFillOrders.typeUrl)) {
      return;
    }
    FillOrderItem.registerTypeUrl();
  }
};
function createBaseFillOrderItem(): FillOrderItem {
  return {
    price: "",
    amount: ""
  };
}
/**
 * @name FillOrderItem
 * @package bze.tradebin
 * @see proto type: bze.tradebin.FillOrderItem
 */
export const FillOrderItem = {
  typeUrl: "/bze.tradebin.FillOrderItem",
  is(o: any): o is FillOrderItem {
    return o && (o.$typeUrl === FillOrderItem.typeUrl || typeof o.price === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is FillOrderItemSDKType {
    return o && (o.$typeUrl === FillOrderItem.typeUrl || typeof o.price === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is FillOrderItemAmino {
    return o && (o.$typeUrl === FillOrderItem.typeUrl || typeof o.price === "string" && typeof o.amount === "string");
  },
  encode(message: FillOrderItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FillOrderItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<FillOrderItem>): FillOrderItem {
    const message = createBaseFillOrderItem();
    message.price = object.price ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: FillOrderItemAmino): FillOrderItem {
    const message = createBaseFillOrderItem();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: FillOrderItem): FillOrderItemAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: FillOrderItemAminoMsg): FillOrderItem {
    return FillOrderItem.fromAmino(object.value);
  },
  fromProtoMsg(message: FillOrderItemProtoMsg): FillOrderItem {
    return FillOrderItem.decode(message.value);
  },
  toProto(message: FillOrderItem): Uint8Array {
    return FillOrderItem.encode(message).finish();
  },
  toProtoMsg(message: FillOrderItem): FillOrderItemProtoMsg {
    return {
      typeUrl: "/bze.tradebin.FillOrderItem",
      value: FillOrderItem.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgFillOrdersResponse(): MsgFillOrdersResponse {
  return {};
}
/**
 * @name MsgFillOrdersResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgFillOrdersResponse
 */
export const MsgFillOrdersResponse = {
  typeUrl: "/bze.tradebin.MsgFillOrdersResponse",
  is(o: any): o is MsgFillOrdersResponse {
    return o && o.$typeUrl === MsgFillOrdersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgFillOrdersResponseSDKType {
    return o && o.$typeUrl === MsgFillOrdersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFillOrdersResponseAmino {
    return o && o.$typeUrl === MsgFillOrdersResponse.typeUrl;
  },
  encode(_: MsgFillOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFillOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgFillOrdersResponse>): MsgFillOrdersResponse {
    const message = createBaseMsgFillOrdersResponse();
    return message;
  },
  fromAmino(_: MsgFillOrdersResponseAmino): MsgFillOrdersResponse {
    const message = createBaseMsgFillOrdersResponse();
    return message;
  },
  toAmino(_: MsgFillOrdersResponse): MsgFillOrdersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFillOrdersResponseAminoMsg): MsgFillOrdersResponse {
    return MsgFillOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFillOrdersResponseProtoMsg): MsgFillOrdersResponse {
    return MsgFillOrdersResponse.decode(message.value);
  },
  toProto(message: MsgFillOrdersResponse): Uint8Array {
    return MsgFillOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFillOrdersResponse): MsgFillOrdersResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgFillOrdersResponse",
      value: MsgFillOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateLiquidityPool(): MsgCreateLiquidityPool {
  return {
    creator: "",
    base: "",
    quote: "",
    fee: "",
    feeDest: "",
    stable: false,
    initialBase: "",
    initialQuote: ""
  };
}
/**
 * @name MsgCreateLiquidityPool
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPool
 */
export const MsgCreateLiquidityPool = {
  typeUrl: "/bze.tradebin.MsgCreateLiquidityPool",
  aminoType: "bze/x/tradebin/MsgCreateLiquidityPool",
  is(o: any): o is MsgCreateLiquidityPool {
    return o && (o.$typeUrl === MsgCreateLiquidityPool.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.fee === "string" && typeof o.feeDest === "string" && typeof o.stable === "boolean" && typeof o.initialBase === "string" && typeof o.initialQuote === "string");
  },
  isSDK(o: any): o is MsgCreateLiquidityPoolSDKType {
    return o && (o.$typeUrl === MsgCreateLiquidityPool.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.fee === "string" && typeof o.fee_dest === "string" && typeof o.stable === "boolean" && typeof o.initial_base === "string" && typeof o.initial_quote === "string");
  },
  isAmino(o: any): o is MsgCreateLiquidityPoolAmino {
    return o && (o.$typeUrl === MsgCreateLiquidityPool.typeUrl || typeof o.creator === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.fee === "string" && typeof o.fee_dest === "string" && typeof o.stable === "boolean" && typeof o.initial_base === "string" && typeof o.initial_quote === "string");
  },
  encode(message: MsgCreateLiquidityPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(message.fee);
    }
    if (message.feeDest !== "") {
      writer.uint32(42).string(message.feeDest);
    }
    if (message.stable === true) {
      writer.uint32(48).bool(message.stable);
    }
    if (message.initialBase !== "") {
      writer.uint32(58).string(message.initialBase);
    }
    if (message.initialQuote !== "") {
      writer.uint32(66).string(message.initialQuote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLiquidityPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLiquidityPool();
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
        case 4:
          message.fee = reader.string();
          break;
        case 5:
          message.feeDest = reader.string();
          break;
        case 6:
          message.stable = reader.bool();
          break;
        case 7:
          message.initialBase = reader.string();
          break;
        case 8:
          message.initialQuote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateLiquidityPool>): MsgCreateLiquidityPool {
    const message = createBaseMsgCreateLiquidityPool();
    message.creator = object.creator ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.fee = object.fee ?? "";
    message.feeDest = object.feeDest ?? "";
    message.stable = object.stable ?? false;
    message.initialBase = object.initialBase ?? "";
    message.initialQuote = object.initialQuote ?? "";
    return message;
  },
  fromAmino(object: MsgCreateLiquidityPoolAmino): MsgCreateLiquidityPool {
    const message = createBaseMsgCreateLiquidityPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.fee_dest !== undefined && object.fee_dest !== null) {
      message.feeDest = object.fee_dest;
    }
    if (object.stable !== undefined && object.stable !== null) {
      message.stable = object.stable;
    }
    if (object.initial_base !== undefined && object.initial_base !== null) {
      message.initialBase = object.initial_base;
    }
    if (object.initial_quote !== undefined && object.initial_quote !== null) {
      message.initialQuote = object.initial_quote;
    }
    return message;
  },
  toAmino(message: MsgCreateLiquidityPool): MsgCreateLiquidityPoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    obj.fee = message.fee === "" ? undefined : message.fee;
    obj.fee_dest = message.feeDest === "" ? undefined : message.feeDest;
    obj.stable = message.stable === false ? undefined : message.stable;
    obj.initial_base = message.initialBase === "" ? undefined : message.initialBase;
    obj.initial_quote = message.initialQuote === "" ? undefined : message.initialQuote;
    return obj;
  },
  fromAminoMsg(object: MsgCreateLiquidityPoolAminoMsg): MsgCreateLiquidityPool {
    return MsgCreateLiquidityPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateLiquidityPool): MsgCreateLiquidityPoolAminoMsg {
    return {
      type: "bze/x/tradebin/MsgCreateLiquidityPool",
      value: MsgCreateLiquidityPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateLiquidityPoolProtoMsg): MsgCreateLiquidityPool {
    return MsgCreateLiquidityPool.decode(message.value);
  },
  toProto(message: MsgCreateLiquidityPool): Uint8Array {
    return MsgCreateLiquidityPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLiquidityPool): MsgCreateLiquidityPoolProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCreateLiquidityPool",
      value: MsgCreateLiquidityPool.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateLiquidityPoolResponse(): MsgCreateLiquidityPoolResponse {
  return {
    id: ""
  };
}
/**
 * @name MsgCreateLiquidityPoolResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgCreateLiquidityPoolResponse
 */
export const MsgCreateLiquidityPoolResponse = {
  typeUrl: "/bze.tradebin.MsgCreateLiquidityPoolResponse",
  is(o: any): o is MsgCreateLiquidityPoolResponse {
    return o && (o.$typeUrl === MsgCreateLiquidityPoolResponse.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is MsgCreateLiquidityPoolResponseSDKType {
    return o && (o.$typeUrl === MsgCreateLiquidityPoolResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateLiquidityPoolResponseAmino {
    return o && (o.$typeUrl === MsgCreateLiquidityPoolResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateLiquidityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLiquidityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLiquidityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateLiquidityPoolResponse>): MsgCreateLiquidityPoolResponse {
    const message = createBaseMsgCreateLiquidityPoolResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateLiquidityPoolResponseAmino): MsgCreateLiquidityPoolResponse {
    const message = createBaseMsgCreateLiquidityPoolResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateLiquidityPoolResponse): MsgCreateLiquidityPoolResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateLiquidityPoolResponseAminoMsg): MsgCreateLiquidityPoolResponse {
    return MsgCreateLiquidityPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateLiquidityPoolResponseProtoMsg): MsgCreateLiquidityPoolResponse {
    return MsgCreateLiquidityPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateLiquidityPoolResponse): Uint8Array {
    return MsgCreateLiquidityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLiquidityPoolResponse): MsgCreateLiquidityPoolResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgCreateLiquidityPoolResponse",
      value: MsgCreateLiquidityPoolResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    creator: "",
    poolId: "",
    baseAmount: "",
    quoteAmount: "",
    minLpTokens: ""
  };
}
/**
 * @name MsgAddLiquidity
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidity
 */
export const MsgAddLiquidity = {
  typeUrl: "/bze.tradebin.MsgAddLiquidity",
  aminoType: "bze/x/tradebin/MsgAddLiquidity",
  is(o: any): o is MsgAddLiquidity {
    return o && (o.$typeUrl === MsgAddLiquidity.typeUrl || typeof o.creator === "string" && typeof o.poolId === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && typeof o.minLpTokens === "string");
  },
  isSDK(o: any): o is MsgAddLiquiditySDKType {
    return o && (o.$typeUrl === MsgAddLiquidity.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "string" && typeof o.base_amount === "string" && typeof o.quote_amount === "string" && typeof o.min_lp_tokens === "string");
  },
  isAmino(o: any): o is MsgAddLiquidityAmino {
    return o && (o.$typeUrl === MsgAddLiquidity.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "string" && typeof o.base_amount === "string" && typeof o.quote_amount === "string" && typeof o.min_lp_tokens === "string");
  },
  encode(message: MsgAddLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.baseAmount !== "") {
      writer.uint32(26).string(message.baseAmount);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(34).string(message.quoteAmount);
    }
    if (message.minLpTokens !== "") {
      writer.uint32(42).string(message.minLpTokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.baseAmount = reader.string();
          break;
        case 4:
          message.quoteAmount = reader.string();
          break;
        case 5:
          message.minLpTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.minLpTokens = object.minLpTokens ?? "";
    return message;
  },
  fromAmino(object: MsgAddLiquidityAmino): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.base_amount !== undefined && object.base_amount !== null) {
      message.baseAmount = object.base_amount;
    }
    if (object.quote_amount !== undefined && object.quote_amount !== null) {
      message.quoteAmount = object.quote_amount;
    }
    if (object.min_lp_tokens !== undefined && object.min_lp_tokens !== null) {
      message.minLpTokens = object.min_lp_tokens;
    }
    return message;
  },
  toAmino(message: MsgAddLiquidity): MsgAddLiquidityAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    obj.base_amount = message.baseAmount === "" ? undefined : message.baseAmount;
    obj.quote_amount = message.quoteAmount === "" ? undefined : message.quoteAmount;
    obj.min_lp_tokens = message.minLpTokens === "" ? undefined : message.minLpTokens;
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityAminoMsg): MsgAddLiquidity {
    return MsgAddLiquidity.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddLiquidity): MsgAddLiquidityAminoMsg {
    return {
      type: "bze/x/tradebin/MsgAddLiquidity",
      value: MsgAddLiquidity.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddLiquidityProtoMsg): MsgAddLiquidity {
    return MsgAddLiquidity.decode(message.value);
  },
  toProto(message: MsgAddLiquidity): Uint8Array {
    return MsgAddLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidity): MsgAddLiquidityProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgAddLiquidity",
      value: MsgAddLiquidity.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {
    mintedAmount: ""
  };
}
/**
 * @name MsgAddLiquidityResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgAddLiquidityResponse
 */
export const MsgAddLiquidityResponse = {
  typeUrl: "/bze.tradebin.MsgAddLiquidityResponse",
  is(o: any): o is MsgAddLiquidityResponse {
    return o && (o.$typeUrl === MsgAddLiquidityResponse.typeUrl || typeof o.mintedAmount === "string");
  },
  isSDK(o: any): o is MsgAddLiquidityResponseSDKType {
    return o && (o.$typeUrl === MsgAddLiquidityResponse.typeUrl || typeof o.minted_amount === "string");
  },
  isAmino(o: any): o is MsgAddLiquidityResponseAmino {
    return o && (o.$typeUrl === MsgAddLiquidityResponse.typeUrl || typeof o.minted_amount === "string");
  },
  encode(message: MsgAddLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintedAmount !== "") {
      writer.uint32(10).string(message.mintedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    message.mintedAmount = object.mintedAmount ?? "";
    return message;
  },
  fromAmino(object: MsgAddLiquidityResponseAmino): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    if (object.minted_amount !== undefined && object.minted_amount !== null) {
      message.mintedAmount = object.minted_amount;
    }
    return message;
  },
  toAmino(message: MsgAddLiquidityResponse): MsgAddLiquidityResponseAmino {
    const obj: any = {};
    obj.minted_amount = message.mintedAmount === "" ? undefined : message.mintedAmount;
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityResponseAminoMsg): MsgAddLiquidityResponse {
    return MsgAddLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLiquidityResponseProtoMsg): MsgAddLiquidityResponse {
    return MsgAddLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgAddLiquidityResponse): Uint8Array {
    return MsgAddLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidityResponse): MsgAddLiquidityResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgAddLiquidityResponse",
      value: MsgAddLiquidityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return {
    creator: "",
    poolId: "",
    lpTokens: "",
    minBase: "",
    minQuote: ""
  };
}
/**
 * @name MsgRemoveLiquidity
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidity
 */
export const MsgRemoveLiquidity = {
  typeUrl: "/bze.tradebin.MsgRemoveLiquidity",
  aminoType: "bze/x/tradebin/MsgRemoveLiquidity",
  is(o: any): o is MsgRemoveLiquidity {
    return o && (o.$typeUrl === MsgRemoveLiquidity.typeUrl || typeof o.creator === "string" && typeof o.poolId === "string" && typeof o.lpTokens === "string" && typeof o.minBase === "string" && typeof o.minQuote === "string");
  },
  isSDK(o: any): o is MsgRemoveLiquiditySDKType {
    return o && (o.$typeUrl === MsgRemoveLiquidity.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "string" && typeof o.lp_tokens === "string" && typeof o.min_base === "string" && typeof o.min_quote === "string");
  },
  isAmino(o: any): o is MsgRemoveLiquidityAmino {
    return o && (o.$typeUrl === MsgRemoveLiquidity.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "string" && typeof o.lp_tokens === "string" && typeof o.min_base === "string" && typeof o.min_quote === "string");
  },
  encode(message: MsgRemoveLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.lpTokens !== "") {
      writer.uint32(26).string(message.lpTokens);
    }
    if (message.minBase !== "") {
      writer.uint32(34).string(message.minBase);
    }
    if (message.minQuote !== "") {
      writer.uint32(42).string(message.minQuote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.lpTokens = reader.string();
          break;
        case 4:
          message.minBase = reader.string();
          break;
        case 5:
          message.minQuote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? "";
    message.lpTokens = object.lpTokens ?? "";
    message.minBase = object.minBase ?? "";
    message.minQuote = object.minQuote ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveLiquidityAmino): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.lp_tokens !== undefined && object.lp_tokens !== null) {
      message.lpTokens = object.lp_tokens;
    }
    if (object.min_base !== undefined && object.min_base !== null) {
      message.minBase = object.min_base;
    }
    if (object.min_quote !== undefined && object.min_quote !== null) {
      message.minQuote = object.min_quote;
    }
    return message;
  },
  toAmino(message: MsgRemoveLiquidity): MsgRemoveLiquidityAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    obj.lp_tokens = message.lpTokens === "" ? undefined : message.lpTokens;
    obj.min_base = message.minBase === "" ? undefined : message.minBase;
    obj.min_quote = message.minQuote === "" ? undefined : message.minQuote;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityAminoMsg): MsgRemoveLiquidity {
    return MsgRemoveLiquidity.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveLiquidity): MsgRemoveLiquidityAminoMsg {
    return {
      type: "bze/x/tradebin/MsgRemoveLiquidity",
      value: MsgRemoveLiquidity.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveLiquidityProtoMsg): MsgRemoveLiquidity {
    return MsgRemoveLiquidity.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidity): Uint8Array {
    return MsgRemoveLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidity): MsgRemoveLiquidityProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgRemoveLiquidity",
      value: MsgRemoveLiquidity.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return {
    base: "",
    quote: ""
  };
}
/**
 * @name MsgRemoveLiquidityResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgRemoveLiquidityResponse
 */
export const MsgRemoveLiquidityResponse = {
  typeUrl: "/bze.tradebin.MsgRemoveLiquidityResponse",
  is(o: any): o is MsgRemoveLiquidityResponse {
    return o && (o.$typeUrl === MsgRemoveLiquidityResponse.typeUrl || typeof o.base === "string" && typeof o.quote === "string");
  },
  isSDK(o: any): o is MsgRemoveLiquidityResponseSDKType {
    return o && (o.$typeUrl === MsgRemoveLiquidityResponse.typeUrl || typeof o.base === "string" && typeof o.quote === "string");
  },
  isAmino(o: any): o is MsgRemoveLiquidityResponseAmino {
    return o && (o.$typeUrl === MsgRemoveLiquidityResponse.typeUrl || typeof o.base === "string" && typeof o.quote === "string");
  },
  encode(message: MsgRemoveLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveLiquidityResponseAmino): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    return message;
  },
  toAmino(message: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseAmino {
    const obj: any = {};
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityResponseAminoMsg): MsgRemoveLiquidityResponse {
    return MsgRemoveLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveLiquidityResponseProtoMsg): MsgRemoveLiquidityResponse {
    return MsgRemoveLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidityResponse): Uint8Array {
    return MsgRemoveLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgRemoveLiquidityResponse",
      value: MsgRemoveLiquidityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMultiSwap(): MsgMultiSwap {
  return {
    creator: "",
    routes: [],
    input: Coin.fromPartial({}),
    minOutput: Coin.fromPartial({})
  };
}
/**
 * @name MsgMultiSwap
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwap
 */
export const MsgMultiSwap = {
  typeUrl: "/bze.tradebin.MsgMultiSwap",
  aminoType: "bze/x/tradebin/MsgMultiSwap",
  is(o: any): o is MsgMultiSwap {
    return o && (o.$typeUrl === MsgMultiSwap.typeUrl || typeof o.creator === "string" && Array.isArray(o.routes) && (!o.routes.length || typeof o.routes[0] === "string") && Coin.is(o.input) && Coin.is(o.minOutput));
  },
  isSDK(o: any): o is MsgMultiSwapSDKType {
    return o && (o.$typeUrl === MsgMultiSwap.typeUrl || typeof o.creator === "string" && Array.isArray(o.routes) && (!o.routes.length || typeof o.routes[0] === "string") && Coin.isSDK(o.input) && Coin.isSDK(o.min_output));
  },
  isAmino(o: any): o is MsgMultiSwapAmino {
    return o && (o.$typeUrl === MsgMultiSwap.typeUrl || typeof o.creator === "string" && Array.isArray(o.routes) && (!o.routes.length || typeof o.routes[0] === "string") && Coin.isAmino(o.input) && Coin.isAmino(o.min_output));
  },
  encode(message: MsgMultiSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.routes) {
      writer.uint32(18).string(v!);
    }
    if (message.input !== undefined) {
      Coin.encode(message.input, writer.uint32(26).fork()).ldelim();
    }
    if (message.minOutput !== undefined) {
      Coin.encode(message.minOutput, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.routes.push(reader.string());
          break;
        case 3:
          message.input = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.minOutput = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMultiSwap>): MsgMultiSwap {
    const message = createBaseMsgMultiSwap();
    message.creator = object.creator ?? "";
    message.routes = object.routes?.map(e => e) || [];
    message.input = object.input !== undefined && object.input !== null ? Coin.fromPartial(object.input) : undefined;
    message.minOutput = object.minOutput !== undefined && object.minOutput !== null ? Coin.fromPartial(object.minOutput) : undefined;
    return message;
  },
  fromAmino(object: MsgMultiSwapAmino): MsgMultiSwap {
    const message = createBaseMsgMultiSwap();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.routes = object.routes?.map(e => e) || [];
    if (object.input !== undefined && object.input !== null) {
      message.input = Coin.fromAmino(object.input);
    }
    if (object.min_output !== undefined && object.min_output !== null) {
      message.minOutput = Coin.fromAmino(object.min_output);
    }
    return message;
  },
  toAmino(message: MsgMultiSwap): MsgMultiSwapAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.routes) {
      obj.routes = message.routes.map(e => e);
    } else {
      obj.routes = message.routes;
    }
    obj.input = message.input ? Coin.toAmino(message.input) : undefined;
    obj.min_output = message.minOutput ? Coin.toAmino(message.minOutput) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMultiSwapAminoMsg): MsgMultiSwap {
    return MsgMultiSwap.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMultiSwap): MsgMultiSwapAminoMsg {
    return {
      type: "bze/x/tradebin/MsgMultiSwap",
      value: MsgMultiSwap.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMultiSwapProtoMsg): MsgMultiSwap {
    return MsgMultiSwap.decode(message.value);
  },
  toProto(message: MsgMultiSwap): Uint8Array {
    return MsgMultiSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSwap): MsgMultiSwapProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgMultiSwap",
      value: MsgMultiSwap.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMultiSwap.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgMultiSwapResponse(): MsgMultiSwapResponse {
  return {
    output: Coin.fromPartial({})
  };
}
/**
 * @name MsgMultiSwapResponse
 * @package bze.tradebin
 * @see proto type: bze.tradebin.MsgMultiSwapResponse
 */
export const MsgMultiSwapResponse = {
  typeUrl: "/bze.tradebin.MsgMultiSwapResponse",
  is(o: any): o is MsgMultiSwapResponse {
    return o && (o.$typeUrl === MsgMultiSwapResponse.typeUrl || Coin.is(o.output));
  },
  isSDK(o: any): o is MsgMultiSwapResponseSDKType {
    return o && (o.$typeUrl === MsgMultiSwapResponse.typeUrl || Coin.isSDK(o.output));
  },
  isAmino(o: any): o is MsgMultiSwapResponseAmino {
    return o && (o.$typeUrl === MsgMultiSwapResponse.typeUrl || Coin.isAmino(o.output));
  },
  encode(message: MsgMultiSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.output !== undefined) {
      Coin.encode(message.output, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.output = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMultiSwapResponse>): MsgMultiSwapResponse {
    const message = createBaseMsgMultiSwapResponse();
    message.output = object.output !== undefined && object.output !== null ? Coin.fromPartial(object.output) : undefined;
    return message;
  },
  fromAmino(object: MsgMultiSwapResponseAmino): MsgMultiSwapResponse {
    const message = createBaseMsgMultiSwapResponse();
    if (object.output !== undefined && object.output !== null) {
      message.output = Coin.fromAmino(object.output);
    }
    return message;
  },
  toAmino(message: MsgMultiSwapResponse): MsgMultiSwapResponseAmino {
    const obj: any = {};
    obj.output = message.output ? Coin.toAmino(message.output) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMultiSwapResponseAminoMsg): MsgMultiSwapResponse {
    return MsgMultiSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSwapResponseProtoMsg): MsgMultiSwapResponse {
    return MsgMultiSwapResponse.decode(message.value);
  },
  toProto(message: MsgMultiSwapResponse): Uint8Array {
    return MsgMultiSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSwapResponse): MsgMultiSwapResponseProtoMsg {
    return {
      typeUrl: "/bze.tradebin.MsgMultiSwapResponse",
      value: MsgMultiSwapResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMultiSwapResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};