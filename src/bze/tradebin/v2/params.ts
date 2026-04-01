//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Params defines the parameters for the module with proper types
 * for fee fields (migrated from string to cosmos.base.v1beta1.Coin).
 * @name Params
 * @package bze.tradebin.v2
 * @see proto type: bze.tradebin.v2.Params
 */
export interface Params {
  createMarketFee: Coin;
  marketMakerFee: Coin;
  marketTakerFee: Coin;
  makerFeeDestination: string;
  takerFeeDestination: string;
  nativeDenom: string;
  orderBookExtraGasWindow: bigint;
  orderBookQueueExtraGas: bigint;
  fillOrdersExtraGas: bigint;
  minNativeLiquidityForModuleSwap: string;
  orderBookPerBlockMessages: bigint;
  orderBookQueueMessageScanExtraGas: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.tradebin.v2.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module with proper types
 * for fee fields (migrated from string to cosmos.base.v1beta1.Coin).
 * @name ParamsAmino
 * @package bze.tradebin.v2
 * @see proto type: bze.tradebin.v2.Params
 */
export interface ParamsAmino {
  createMarketFee?: CoinAmino;
  marketMakerFee?: CoinAmino;
  marketTakerFee?: CoinAmino;
  makerFeeDestination?: string;
  takerFeeDestination?: string;
  native_denom?: string;
  orderBookExtraGasWindow?: string;
  orderBookQueueExtraGas?: string;
  fillOrdersExtraGas?: string;
  minNativeLiquidityForModuleSwap?: string;
  orderBookPerBlockMessages?: string;
  orderBookQueueMessageScanExtraGas?: string;
}
export interface ParamsAminoMsg {
  type: "/bze.tradebin.v2.Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module with proper types
 * for fee fields (migrated from string to cosmos.base.v1beta1.Coin).
 * @name ParamsSDKType
 * @package bze.tradebin.v2
 * @see proto type: bze.tradebin.v2.Params
 */
export interface ParamsSDKType {
  createMarketFee: CoinSDKType;
  marketMakerFee: CoinSDKType;
  marketTakerFee: CoinSDKType;
  makerFeeDestination: string;
  takerFeeDestination: string;
  native_denom: string;
  orderBookExtraGasWindow: bigint;
  orderBookQueueExtraGas: bigint;
  fillOrdersExtraGas: bigint;
  minNativeLiquidityForModuleSwap: string;
  orderBookPerBlockMessages: bigint;
  orderBookQueueMessageScanExtraGas: bigint;
}
function createBaseParams(): Params {
  return {
    createMarketFee: Coin.fromPartial({}),
    marketMakerFee: Coin.fromPartial({}),
    marketTakerFee: Coin.fromPartial({}),
    makerFeeDestination: "",
    takerFeeDestination: "",
    nativeDenom: "",
    orderBookExtraGasWindow: BigInt(0),
    orderBookQueueExtraGas: BigInt(0),
    fillOrdersExtraGas: BigInt(0),
    minNativeLiquidityForModuleSwap: "",
    orderBookPerBlockMessages: BigInt(0),
    orderBookQueueMessageScanExtraGas: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module with proper types
 * for fee fields (migrated from string to cosmos.base.v1beta1.Coin).
 * @name Params
 * @package bze.tradebin.v2
 * @see proto type: bze.tradebin.v2.Params
 */
export const Params = {
  typeUrl: "/bze.tradebin.v2.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.createMarketFee) && Coin.is(o.marketMakerFee) && Coin.is(o.marketTakerFee) && typeof o.makerFeeDestination === "string" && typeof o.takerFeeDestination === "string" && typeof o.nativeDenom === "string" && typeof o.orderBookExtraGasWindow === "bigint" && typeof o.orderBookQueueExtraGas === "bigint" && typeof o.fillOrdersExtraGas === "bigint" && typeof o.minNativeLiquidityForModuleSwap === "string" && typeof o.orderBookPerBlockMessages === "bigint" && typeof o.orderBookQueueMessageScanExtraGas === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isSDK(o.createMarketFee) && Coin.isSDK(o.marketMakerFee) && Coin.isSDK(o.marketTakerFee) && typeof o.makerFeeDestination === "string" && typeof o.takerFeeDestination === "string" && typeof o.native_denom === "string" && typeof o.orderBookExtraGasWindow === "bigint" && typeof o.orderBookQueueExtraGas === "bigint" && typeof o.fillOrdersExtraGas === "bigint" && typeof o.minNativeLiquidityForModuleSwap === "string" && typeof o.orderBookPerBlockMessages === "bigint" && typeof o.orderBookQueueMessageScanExtraGas === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.createMarketFee) && Coin.isAmino(o.marketMakerFee) && Coin.isAmino(o.marketTakerFee) && typeof o.makerFeeDestination === "string" && typeof o.takerFeeDestination === "string" && typeof o.native_denom === "string" && typeof o.orderBookExtraGasWindow === "bigint" && typeof o.orderBookQueueExtraGas === "bigint" && typeof o.fillOrdersExtraGas === "bigint" && typeof o.minNativeLiquidityForModuleSwap === "string" && typeof o.orderBookPerBlockMessages === "bigint" && typeof o.orderBookQueueMessageScanExtraGas === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createMarketFee !== undefined) {
      Coin.encode(message.createMarketFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketMakerFee !== undefined) {
      Coin.encode(message.marketMakerFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.marketTakerFee !== undefined) {
      Coin.encode(message.marketTakerFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.makerFeeDestination !== "") {
      writer.uint32(34).string(message.makerFeeDestination);
    }
    if (message.takerFeeDestination !== "") {
      writer.uint32(42).string(message.takerFeeDestination);
    }
    if (message.nativeDenom !== "") {
      writer.uint32(50).string(message.nativeDenom);
    }
    if (message.orderBookExtraGasWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.orderBookExtraGasWindow);
    }
    if (message.orderBookQueueExtraGas !== BigInt(0)) {
      writer.uint32(64).uint64(message.orderBookQueueExtraGas);
    }
    if (message.fillOrdersExtraGas !== BigInt(0)) {
      writer.uint32(72).uint64(message.fillOrdersExtraGas);
    }
    if (message.minNativeLiquidityForModuleSwap !== "") {
      writer.uint32(82).string(message.minNativeLiquidityForModuleSwap);
    }
    if (message.orderBookPerBlockMessages !== BigInt(0)) {
      writer.uint32(88).uint64(message.orderBookPerBlockMessages);
    }
    if (message.orderBookQueueMessageScanExtraGas !== BigInt(0)) {
      writer.uint32(96).uint64(message.orderBookQueueMessageScanExtraGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createMarketFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.marketMakerFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.marketTakerFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.makerFeeDestination = reader.string();
          break;
        case 5:
          message.takerFeeDestination = reader.string();
          break;
        case 6:
          message.nativeDenom = reader.string();
          break;
        case 7:
          message.orderBookExtraGasWindow = reader.uint64();
          break;
        case 8:
          message.orderBookQueueExtraGas = reader.uint64();
          break;
        case 9:
          message.fillOrdersExtraGas = reader.uint64();
          break;
        case 10:
          message.minNativeLiquidityForModuleSwap = reader.string();
          break;
        case 11:
          message.orderBookPerBlockMessages = reader.uint64();
          break;
        case 12:
          message.orderBookQueueMessageScanExtraGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.createMarketFee = object.createMarketFee !== undefined && object.createMarketFee !== null ? Coin.fromPartial(object.createMarketFee) : undefined;
    message.marketMakerFee = object.marketMakerFee !== undefined && object.marketMakerFee !== null ? Coin.fromPartial(object.marketMakerFee) : undefined;
    message.marketTakerFee = object.marketTakerFee !== undefined && object.marketTakerFee !== null ? Coin.fromPartial(object.marketTakerFee) : undefined;
    message.makerFeeDestination = object.makerFeeDestination ?? "";
    message.takerFeeDestination = object.takerFeeDestination ?? "";
    message.nativeDenom = object.nativeDenom ?? "";
    message.orderBookExtraGasWindow = object.orderBookExtraGasWindow !== undefined && object.orderBookExtraGasWindow !== null ? BigInt(object.orderBookExtraGasWindow.toString()) : BigInt(0);
    message.orderBookQueueExtraGas = object.orderBookQueueExtraGas !== undefined && object.orderBookQueueExtraGas !== null ? BigInt(object.orderBookQueueExtraGas.toString()) : BigInt(0);
    message.fillOrdersExtraGas = object.fillOrdersExtraGas !== undefined && object.fillOrdersExtraGas !== null ? BigInt(object.fillOrdersExtraGas.toString()) : BigInt(0);
    message.minNativeLiquidityForModuleSwap = object.minNativeLiquidityForModuleSwap ?? "";
    message.orderBookPerBlockMessages = object.orderBookPerBlockMessages !== undefined && object.orderBookPerBlockMessages !== null ? BigInt(object.orderBookPerBlockMessages.toString()) : BigInt(0);
    message.orderBookQueueMessageScanExtraGas = object.orderBookQueueMessageScanExtraGas !== undefined && object.orderBookQueueMessageScanExtraGas !== null ? BigInt(object.orderBookQueueMessageScanExtraGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.createMarketFee !== undefined && object.createMarketFee !== null) {
      message.createMarketFee = Coin.fromAmino(object.createMarketFee);
    }
    if (object.marketMakerFee !== undefined && object.marketMakerFee !== null) {
      message.marketMakerFee = Coin.fromAmino(object.marketMakerFee);
    }
    if (object.marketTakerFee !== undefined && object.marketTakerFee !== null) {
      message.marketTakerFee = Coin.fromAmino(object.marketTakerFee);
    }
    if (object.makerFeeDestination !== undefined && object.makerFeeDestination !== null) {
      message.makerFeeDestination = object.makerFeeDestination;
    }
    if (object.takerFeeDestination !== undefined && object.takerFeeDestination !== null) {
      message.takerFeeDestination = object.takerFeeDestination;
    }
    if (object.native_denom !== undefined && object.native_denom !== null) {
      message.nativeDenom = object.native_denom;
    }
    if (object.orderBookExtraGasWindow !== undefined && object.orderBookExtraGasWindow !== null) {
      message.orderBookExtraGasWindow = BigInt(object.orderBookExtraGasWindow);
    }
    if (object.orderBookQueueExtraGas !== undefined && object.orderBookQueueExtraGas !== null) {
      message.orderBookQueueExtraGas = BigInt(object.orderBookQueueExtraGas);
    }
    if (object.fillOrdersExtraGas !== undefined && object.fillOrdersExtraGas !== null) {
      message.fillOrdersExtraGas = BigInt(object.fillOrdersExtraGas);
    }
    if (object.minNativeLiquidityForModuleSwap !== undefined && object.minNativeLiquidityForModuleSwap !== null) {
      message.minNativeLiquidityForModuleSwap = object.minNativeLiquidityForModuleSwap;
    }
    if (object.orderBookPerBlockMessages !== undefined && object.orderBookPerBlockMessages !== null) {
      message.orderBookPerBlockMessages = BigInt(object.orderBookPerBlockMessages);
    }
    if (object.orderBookQueueMessageScanExtraGas !== undefined && object.orderBookQueueMessageScanExtraGas !== null) {
      message.orderBookQueueMessageScanExtraGas = BigInt(object.orderBookQueueMessageScanExtraGas);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.createMarketFee = message.createMarketFee ? Coin.toAmino(message.createMarketFee) : undefined;
    obj.marketMakerFee = message.marketMakerFee ? Coin.toAmino(message.marketMakerFee) : undefined;
    obj.marketTakerFee = message.marketTakerFee ? Coin.toAmino(message.marketTakerFee) : undefined;
    obj.makerFeeDestination = message.makerFeeDestination === "" ? undefined : message.makerFeeDestination;
    obj.takerFeeDestination = message.takerFeeDestination === "" ? undefined : message.takerFeeDestination;
    obj.native_denom = message.nativeDenom === "" ? undefined : message.nativeDenom;
    obj.orderBookExtraGasWindow = message.orderBookExtraGasWindow !== BigInt(0) ? message.orderBookExtraGasWindow?.toString() : undefined;
    obj.orderBookQueueExtraGas = message.orderBookQueueExtraGas !== BigInt(0) ? message.orderBookQueueExtraGas?.toString() : undefined;
    obj.fillOrdersExtraGas = message.fillOrdersExtraGas !== BigInt(0) ? message.fillOrdersExtraGas?.toString() : undefined;
    obj.minNativeLiquidityForModuleSwap = message.minNativeLiquidityForModuleSwap === "" ? undefined : message.minNativeLiquidityForModuleSwap;
    obj.orderBookPerBlockMessages = message.orderBookPerBlockMessages !== BigInt(0) ? message.orderBookPerBlockMessages?.toString() : undefined;
    obj.orderBookQueueMessageScanExtraGas = message.orderBookQueueMessageScanExtraGas !== BigInt(0) ? message.orderBookQueueMessageScanExtraGas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bze.tradebin.v2.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};