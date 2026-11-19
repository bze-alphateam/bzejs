//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@interchainjs/math";
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
  /**
   * number of distinct owners a price level holds before a new owner joining it pays extra gas
   */
  priceLevelOwnersWindow: bigint;
  /**
   * extra gas per owner above priceLevelOwnersWindow, paid by a new owner joining the price level
   */
  priceLevelExtraGas: bigint;
  fillOrdersExtraGas: bigint;
  minNativeLiquidityForModuleSwap: string;
  /**
   * maximum number of resting orders one order examines (filled or skipped); the remainder is refunded
   */
  maxFillsPerOrder: bigint;
  /**
   * half-life, in blocks, of the moving average of each pool's price
   */
  poolPriceHalfLifeBlocks: bigint;
  /**
   * largest relative distance between a pool's price and its moving average accepted for the fees users pay
   */
  feeMaxPriceDrift: string;
  /**
   * largest relative distance between a pool's price and its moving average accepted for module operations
   */
  moduleMaxPriceDrift: string;
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
  /**
   * number of distinct owners a price level holds before a new owner joining it pays extra gas
   */
  priceLevelOwnersWindow?: string;
  /**
   * extra gas per owner above priceLevelOwnersWindow, paid by a new owner joining the price level
   */
  priceLevelExtraGas?: string;
  fillOrdersExtraGas?: string;
  minNativeLiquidityForModuleSwap?: string;
  /**
   * maximum number of resting orders one order examines (filled or skipped); the remainder is refunded
   */
  maxFillsPerOrder?: string;
  /**
   * half-life, in blocks, of the moving average of each pool's price
   */
  poolPriceHalfLifeBlocks?: string;
  /**
   * largest relative distance between a pool's price and its moving average accepted for the fees users pay
   */
  feeMaxPriceDrift?: string;
  /**
   * largest relative distance between a pool's price and its moving average accepted for module operations
   */
  moduleMaxPriceDrift?: string;
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
  priceLevelOwnersWindow: bigint;
  priceLevelExtraGas: bigint;
  fillOrdersExtraGas: bigint;
  minNativeLiquidityForModuleSwap: string;
  maxFillsPerOrder: bigint;
  poolPriceHalfLifeBlocks: bigint;
  feeMaxPriceDrift: string;
  moduleMaxPriceDrift: string;
}
function createBaseParams(): Params {
  return {
    createMarketFee: Coin.fromPartial({}),
    marketMakerFee: Coin.fromPartial({}),
    marketTakerFee: Coin.fromPartial({}),
    makerFeeDestination: "",
    takerFeeDestination: "",
    nativeDenom: "",
    priceLevelOwnersWindow: BigInt(0),
    priceLevelExtraGas: BigInt(0),
    fillOrdersExtraGas: BigInt(0),
    minNativeLiquidityForModuleSwap: "",
    maxFillsPerOrder: BigInt(0),
    poolPriceHalfLifeBlocks: BigInt(0),
    feeMaxPriceDrift: "",
    moduleMaxPriceDrift: ""
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
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.createMarketFee) && Coin.is(o.marketMakerFee) && Coin.is(o.marketTakerFee) && typeof o.makerFeeDestination === "string" && typeof o.takerFeeDestination === "string" && typeof o.nativeDenom === "string" && typeof o.priceLevelOwnersWindow === "bigint" && typeof o.priceLevelExtraGas === "bigint" && typeof o.fillOrdersExtraGas === "bigint" && typeof o.minNativeLiquidityForModuleSwap === "string" && typeof o.maxFillsPerOrder === "bigint" && typeof o.poolPriceHalfLifeBlocks === "bigint" && typeof o.feeMaxPriceDrift === "string" && typeof o.moduleMaxPriceDrift === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isSDK(o.createMarketFee) && Coin.isSDK(o.marketMakerFee) && Coin.isSDK(o.marketTakerFee) && typeof o.makerFeeDestination === "string" && typeof o.takerFeeDestination === "string" && typeof o.native_denom === "string" && typeof o.priceLevelOwnersWindow === "bigint" && typeof o.priceLevelExtraGas === "bigint" && typeof o.fillOrdersExtraGas === "bigint" && typeof o.minNativeLiquidityForModuleSwap === "string" && typeof o.maxFillsPerOrder === "bigint" && typeof o.poolPriceHalfLifeBlocks === "bigint" && typeof o.feeMaxPriceDrift === "string" && typeof o.moduleMaxPriceDrift === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.createMarketFee) && Coin.isAmino(o.marketMakerFee) && Coin.isAmino(o.marketTakerFee) && typeof o.makerFeeDestination === "string" && typeof o.takerFeeDestination === "string" && typeof o.native_denom === "string" && typeof o.priceLevelOwnersWindow === "bigint" && typeof o.priceLevelExtraGas === "bigint" && typeof o.fillOrdersExtraGas === "bigint" && typeof o.minNativeLiquidityForModuleSwap === "string" && typeof o.maxFillsPerOrder === "bigint" && typeof o.poolPriceHalfLifeBlocks === "bigint" && typeof o.feeMaxPriceDrift === "string" && typeof o.moduleMaxPriceDrift === "string");
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
    if (message.priceLevelOwnersWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.priceLevelOwnersWindow);
    }
    if (message.priceLevelExtraGas !== BigInt(0)) {
      writer.uint32(64).uint64(message.priceLevelExtraGas);
    }
    if (message.fillOrdersExtraGas !== BigInt(0)) {
      writer.uint32(72).uint64(message.fillOrdersExtraGas);
    }
    if (message.minNativeLiquidityForModuleSwap !== "") {
      writer.uint32(82).string(message.minNativeLiquidityForModuleSwap);
    }
    if (message.maxFillsPerOrder !== BigInt(0)) {
      writer.uint32(88).uint64(message.maxFillsPerOrder);
    }
    if (message.poolPriceHalfLifeBlocks !== BigInt(0)) {
      writer.uint32(104).uint64(message.poolPriceHalfLifeBlocks);
    }
    if (message.feeMaxPriceDrift !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.feeMaxPriceDrift, 18).atomics);
    }
    if (message.moduleMaxPriceDrift !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.moduleMaxPriceDrift, 18).atomics);
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
          message.priceLevelOwnersWindow = reader.uint64();
          break;
        case 8:
          message.priceLevelExtraGas = reader.uint64();
          break;
        case 9:
          message.fillOrdersExtraGas = reader.uint64();
          break;
        case 10:
          message.minNativeLiquidityForModuleSwap = reader.string();
          break;
        case 11:
          message.maxFillsPerOrder = reader.uint64();
          break;
        case 13:
          message.poolPriceHalfLifeBlocks = reader.uint64();
          break;
        case 14:
          message.feeMaxPriceDrift = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.moduleMaxPriceDrift = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.priceLevelOwnersWindow = object.priceLevelOwnersWindow !== undefined && object.priceLevelOwnersWindow !== null ? BigInt(object.priceLevelOwnersWindow.toString()) : BigInt(0);
    message.priceLevelExtraGas = object.priceLevelExtraGas !== undefined && object.priceLevelExtraGas !== null ? BigInt(object.priceLevelExtraGas.toString()) : BigInt(0);
    message.fillOrdersExtraGas = object.fillOrdersExtraGas !== undefined && object.fillOrdersExtraGas !== null ? BigInt(object.fillOrdersExtraGas.toString()) : BigInt(0);
    message.minNativeLiquidityForModuleSwap = object.minNativeLiquidityForModuleSwap ?? "";
    message.maxFillsPerOrder = object.maxFillsPerOrder !== undefined && object.maxFillsPerOrder !== null ? BigInt(object.maxFillsPerOrder.toString()) : BigInt(0);
    message.poolPriceHalfLifeBlocks = object.poolPriceHalfLifeBlocks !== undefined && object.poolPriceHalfLifeBlocks !== null ? BigInt(object.poolPriceHalfLifeBlocks.toString()) : BigInt(0);
    message.feeMaxPriceDrift = object.feeMaxPriceDrift ?? "";
    message.moduleMaxPriceDrift = object.moduleMaxPriceDrift ?? "";
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
    if (object.priceLevelOwnersWindow !== undefined && object.priceLevelOwnersWindow !== null) {
      message.priceLevelOwnersWindow = BigInt(object.priceLevelOwnersWindow);
    }
    if (object.priceLevelExtraGas !== undefined && object.priceLevelExtraGas !== null) {
      message.priceLevelExtraGas = BigInt(object.priceLevelExtraGas);
    }
    if (object.fillOrdersExtraGas !== undefined && object.fillOrdersExtraGas !== null) {
      message.fillOrdersExtraGas = BigInt(object.fillOrdersExtraGas);
    }
    if (object.minNativeLiquidityForModuleSwap !== undefined && object.minNativeLiquidityForModuleSwap !== null) {
      message.minNativeLiquidityForModuleSwap = object.minNativeLiquidityForModuleSwap;
    }
    if (object.maxFillsPerOrder !== undefined && object.maxFillsPerOrder !== null) {
      message.maxFillsPerOrder = BigInt(object.maxFillsPerOrder);
    }
    if (object.poolPriceHalfLifeBlocks !== undefined && object.poolPriceHalfLifeBlocks !== null) {
      message.poolPriceHalfLifeBlocks = BigInt(object.poolPriceHalfLifeBlocks);
    }
    if (object.feeMaxPriceDrift !== undefined && object.feeMaxPriceDrift !== null) {
      message.feeMaxPriceDrift = object.feeMaxPriceDrift;
    }
    if (object.moduleMaxPriceDrift !== undefined && object.moduleMaxPriceDrift !== null) {
      message.moduleMaxPriceDrift = object.moduleMaxPriceDrift;
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
    obj.priceLevelOwnersWindow = message.priceLevelOwnersWindow !== BigInt(0) ? message.priceLevelOwnersWindow?.toString() : undefined;
    obj.priceLevelExtraGas = message.priceLevelExtraGas !== BigInt(0) ? message.priceLevelExtraGas?.toString() : undefined;
    obj.fillOrdersExtraGas = message.fillOrdersExtraGas !== BigInt(0) ? message.fillOrdersExtraGas?.toString() : undefined;
    obj.minNativeLiquidityForModuleSwap = message.minNativeLiquidityForModuleSwap === "" ? undefined : message.minNativeLiquidityForModuleSwap;
    obj.maxFillsPerOrder = message.maxFillsPerOrder !== BigInt(0) ? message.maxFillsPerOrder?.toString() : undefined;
    obj.poolPriceHalfLifeBlocks = message.poolPriceHalfLifeBlocks !== BigInt(0) ? message.poolPriceHalfLifeBlocks?.toString() : undefined;
    obj.feeMaxPriceDrift = message.feeMaxPriceDrift === "" ? undefined : Decimal.fromUserInput(message.feeMaxPriceDrift, 18).atomics;
    obj.moduleMaxPriceDrift = message.moduleMaxPriceDrift === "" ? undefined : Decimal.fromUserInput(message.moduleMaxPriceDrift, 18).atomics;
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