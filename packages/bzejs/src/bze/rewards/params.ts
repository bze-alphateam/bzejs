//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  createStakingRewardFee: Coin;
  createTradingRewardFee: Coin;
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
}
export interface ParamsAminoMsg {
  type: "bze/x/rewards/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  createStakingRewardFee: CoinSDKType;
  createTradingRewardFee: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    createStakingRewardFee: Coin.fromPartial({}),
    createTradingRewardFee: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/bze.rewards.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createStakingRewardFee !== undefined) {
      Coin.encode(message.createStakingRewardFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.createTradingRewardFee !== undefined) {
      Coin.encode(message.createTradingRewardFee, writer.uint32(18).fork()).ldelim();
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
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.createStakingRewardFee = message.createStakingRewardFee ? Coin.toAmino(message.createStakingRewardFee) : undefined;
    obj.createTradingRewardFee = message.createTradingRewardFee ? Coin.toAmino(message.createTradingRewardFee) : undefined;
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
  }
};