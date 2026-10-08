//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.rewards
 * @see proto type: bze.rewards.Params
 */
export interface Params {
  createStakingRewardFee: Coin;
  createTradingRewardFee: Coin;
  extraGasForExitStake: bigint;
  /**
   * Denom Rewards params (additive)
   */
  createDenomRewardFee: Coin;
  createDenomRewardPrizeFee: Coin;
  addDenomRewardScheduleFee: Coin;
  maxPrizeDenomsPerDr: number;
  extraGasForDenomExit: bigint;
  denomRewardLock: number;
  denomRewardMinStake: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.rewards.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.Params
 */
export interface ParamsAmino {
  createStakingRewardFee?: CoinAmino;
  createTradingRewardFee?: CoinAmino;
  extraGasForExitStake?: string;
  /**
   * Denom Rewards params (additive)
   */
  createDenomRewardFee?: CoinAmino;
  createDenomRewardPrizeFee?: CoinAmino;
  addDenomRewardScheduleFee?: CoinAmino;
  maxPrizeDenomsPerDr?: number;
  extraGasForDenomExit?: string;
  denomRewardLock?: number;
  denomRewardMinStake?: string;
}
export interface ParamsAminoMsg {
  type: "bze/x/rewards/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.Params
 */
export interface ParamsSDKType {
  createStakingRewardFee: CoinSDKType;
  createTradingRewardFee: CoinSDKType;
  extraGasForExitStake: bigint;
  createDenomRewardFee: CoinSDKType;
  createDenomRewardPrizeFee: CoinSDKType;
  addDenomRewardScheduleFee: CoinSDKType;
  maxPrizeDenomsPerDr: number;
  extraGasForDenomExit: bigint;
  denomRewardLock: number;
  denomRewardMinStake: bigint;
}
function createBaseParams(): Params {
  return {
    createStakingRewardFee: Coin.fromPartial({}),
    createTradingRewardFee: Coin.fromPartial({}),
    extraGasForExitStake: BigInt(0),
    createDenomRewardFee: Coin.fromPartial({}),
    createDenomRewardPrizeFee: Coin.fromPartial({}),
    addDenomRewardScheduleFee: Coin.fromPartial({}),
    maxPrizeDenomsPerDr: 0,
    extraGasForDenomExit: BigInt(0),
    denomRewardLock: 0,
    denomRewardMinStake: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.rewards
 * @see proto type: bze.rewards.Params
 */
export const Params = {
  typeUrl: "/bze.rewards.Params",
  aminoType: "bze/x/rewards/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.createStakingRewardFee) && Coin.is(o.createTradingRewardFee) && typeof o.extraGasForExitStake === "bigint" && Coin.is(o.createDenomRewardFee) && Coin.is(o.createDenomRewardPrizeFee) && Coin.is(o.addDenomRewardScheduleFee) && typeof o.maxPrizeDenomsPerDr === "number" && typeof o.extraGasForDenomExit === "bigint" && typeof o.denomRewardLock === "number" && typeof o.denomRewardMinStake === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isSDK(o.createStakingRewardFee) && Coin.isSDK(o.createTradingRewardFee) && typeof o.extraGasForExitStake === "bigint" && Coin.isSDK(o.createDenomRewardFee) && Coin.isSDK(o.createDenomRewardPrizeFee) && Coin.isSDK(o.addDenomRewardScheduleFee) && typeof o.maxPrizeDenomsPerDr === "number" && typeof o.extraGasForDenomExit === "bigint" && typeof o.denomRewardLock === "number" && typeof o.denomRewardMinStake === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.createStakingRewardFee) && Coin.isAmino(o.createTradingRewardFee) && typeof o.extraGasForExitStake === "bigint" && Coin.isAmino(o.createDenomRewardFee) && Coin.isAmino(o.createDenomRewardPrizeFee) && Coin.isAmino(o.addDenomRewardScheduleFee) && typeof o.maxPrizeDenomsPerDr === "number" && typeof o.extraGasForDenomExit === "bigint" && typeof o.denomRewardLock === "number" && typeof o.denomRewardMinStake === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createStakingRewardFee !== undefined) {
      Coin.encode(message.createStakingRewardFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.createTradingRewardFee !== undefined) {
      Coin.encode(message.createTradingRewardFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.extraGasForExitStake !== BigInt(0)) {
      writer.uint32(24).uint64(message.extraGasForExitStake);
    }
    if (message.createDenomRewardFee !== undefined) {
      Coin.encode(message.createDenomRewardFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.createDenomRewardPrizeFee !== undefined) {
      Coin.encode(message.createDenomRewardPrizeFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.addDenomRewardScheduleFee !== undefined) {
      Coin.encode(message.addDenomRewardScheduleFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxPrizeDenomsPerDr !== 0) {
      writer.uint32(56).uint32(message.maxPrizeDenomsPerDr);
    }
    if (message.extraGasForDenomExit !== BigInt(0)) {
      writer.uint32(64).uint64(message.extraGasForDenomExit);
    }
    if (message.denomRewardLock !== 0) {
      writer.uint32(72).uint32(message.denomRewardLock);
    }
    if (message.denomRewardMinStake !== BigInt(0)) {
      writer.uint32(80).uint64(message.denomRewardMinStake);
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
          message.createStakingRewardFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.createTradingRewardFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.extraGasForExitStake = reader.uint64();
          break;
        case 4:
          message.createDenomRewardFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.createDenomRewardPrizeFee = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.addDenomRewardScheduleFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.maxPrizeDenomsPerDr = reader.uint32();
          break;
        case 8:
          message.extraGasForDenomExit = reader.uint64();
          break;
        case 9:
          message.denomRewardLock = reader.uint32();
          break;
        case 10:
          message.denomRewardMinStake = reader.uint64();
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
    message.createStakingRewardFee = object.createStakingRewardFee !== undefined && object.createStakingRewardFee !== null ? Coin.fromPartial(object.createStakingRewardFee) : undefined;
    message.createTradingRewardFee = object.createTradingRewardFee !== undefined && object.createTradingRewardFee !== null ? Coin.fromPartial(object.createTradingRewardFee) : undefined;
    message.extraGasForExitStake = object.extraGasForExitStake !== undefined && object.extraGasForExitStake !== null ? BigInt(object.extraGasForExitStake.toString()) : BigInt(0);
    message.createDenomRewardFee = object.createDenomRewardFee !== undefined && object.createDenomRewardFee !== null ? Coin.fromPartial(object.createDenomRewardFee) : undefined;
    message.createDenomRewardPrizeFee = object.createDenomRewardPrizeFee !== undefined && object.createDenomRewardPrizeFee !== null ? Coin.fromPartial(object.createDenomRewardPrizeFee) : undefined;
    message.addDenomRewardScheduleFee = object.addDenomRewardScheduleFee !== undefined && object.addDenomRewardScheduleFee !== null ? Coin.fromPartial(object.addDenomRewardScheduleFee) : undefined;
    message.maxPrizeDenomsPerDr = object.maxPrizeDenomsPerDr ?? 0;
    message.extraGasForDenomExit = object.extraGasForDenomExit !== undefined && object.extraGasForDenomExit !== null ? BigInt(object.extraGasForDenomExit.toString()) : BigInt(0);
    message.denomRewardLock = object.denomRewardLock ?? 0;
    message.denomRewardMinStake = object.denomRewardMinStake !== undefined && object.denomRewardMinStake !== null ? BigInt(object.denomRewardMinStake.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.createStakingRewardFee !== undefined && object.createStakingRewardFee !== null) {
      message.createStakingRewardFee = Coin.fromAmino(object.createStakingRewardFee);
    }
    if (object.createTradingRewardFee !== undefined && object.createTradingRewardFee !== null) {
      message.createTradingRewardFee = Coin.fromAmino(object.createTradingRewardFee);
    }
    if (object.extraGasForExitStake !== undefined && object.extraGasForExitStake !== null) {
      message.extraGasForExitStake = BigInt(object.extraGasForExitStake);
    }
    if (object.createDenomRewardFee !== undefined && object.createDenomRewardFee !== null) {
      message.createDenomRewardFee = Coin.fromAmino(object.createDenomRewardFee);
    }
    if (object.createDenomRewardPrizeFee !== undefined && object.createDenomRewardPrizeFee !== null) {
      message.createDenomRewardPrizeFee = Coin.fromAmino(object.createDenomRewardPrizeFee);
    }
    if (object.addDenomRewardScheduleFee !== undefined && object.addDenomRewardScheduleFee !== null) {
      message.addDenomRewardScheduleFee = Coin.fromAmino(object.addDenomRewardScheduleFee);
    }
    if (object.maxPrizeDenomsPerDr !== undefined && object.maxPrizeDenomsPerDr !== null) {
      message.maxPrizeDenomsPerDr = object.maxPrizeDenomsPerDr;
    }
    if (object.extraGasForDenomExit !== undefined && object.extraGasForDenomExit !== null) {
      message.extraGasForDenomExit = BigInt(object.extraGasForDenomExit);
    }
    if (object.denomRewardLock !== undefined && object.denomRewardLock !== null) {
      message.denomRewardLock = object.denomRewardLock;
    }
    if (object.denomRewardMinStake !== undefined && object.denomRewardMinStake !== null) {
      message.denomRewardMinStake = BigInt(object.denomRewardMinStake);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.createStakingRewardFee = message.createStakingRewardFee ? Coin.toAmino(message.createStakingRewardFee) : undefined;
    obj.createTradingRewardFee = message.createTradingRewardFee ? Coin.toAmino(message.createTradingRewardFee) : undefined;
    obj.extraGasForExitStake = message.extraGasForExitStake !== BigInt(0) ? message.extraGasForExitStake?.toString() : undefined;
    obj.createDenomRewardFee = message.createDenomRewardFee ? Coin.toAmino(message.createDenomRewardFee) : undefined;
    obj.createDenomRewardPrizeFee = message.createDenomRewardPrizeFee ? Coin.toAmino(message.createDenomRewardPrizeFee) : undefined;
    obj.addDenomRewardScheduleFee = message.addDenomRewardScheduleFee ? Coin.toAmino(message.addDenomRewardScheduleFee) : undefined;
    obj.maxPrizeDenomsPerDr = message.maxPrizeDenomsPerDr === 0 ? undefined : message.maxPrizeDenomsPerDr;
    obj.extraGasForDenomExit = message.extraGasForDenomExit !== BigInt(0) ? message.extraGasForDenomExit?.toString() : undefined;
    obj.denomRewardLock = message.denomRewardLock === 0 ? undefined : message.denomRewardLock;
    obj.denomRewardMinStake = message.denomRewardMinStake !== BigInt(0) ? message.denomRewardMinStake?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/rewards/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bze.rewards.Params",
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