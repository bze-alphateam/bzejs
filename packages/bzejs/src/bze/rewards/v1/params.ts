//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  createStakingRewardFee: string;
  createTradingRewardFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.rewards.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.rewards.v1
 * @see proto type: bze.rewards.v1.Params
 */
export interface ParamsAmino {
  createStakingRewardFee?: string;
  createTradingRewardFee?: string;
}
export interface ParamsAminoMsg {
  type: "/bze.rewards.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  createStakingRewardFee: string;
  createTradingRewardFee: string;
}
function createBaseParams(): Params {
  return {
    createStakingRewardFee: "",
    createTradingRewardFee: ""
  };
}
export const Params = {
  typeUrl: "/bze.rewards.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createStakingRewardFee !== "") {
      writer.uint32(10).string(message.createStakingRewardFee);
    }
    if (message.createTradingRewardFee !== "") {
      writer.uint32(18).string(message.createTradingRewardFee);
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
          message.createStakingRewardFee = reader.string();
          break;
        case 2:
          message.createTradingRewardFee = reader.string();
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
    message.createStakingRewardFee = object.createStakingRewardFee ?? "";
    message.createTradingRewardFee = object.createTradingRewardFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.createStakingRewardFee !== undefined && object.createStakingRewardFee !== null) {
      message.createStakingRewardFee = object.createStakingRewardFee;
    }
    if (object.createTradingRewardFee !== undefined && object.createTradingRewardFee !== null) {
      message.createTradingRewardFee = object.createTradingRewardFee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.createStakingRewardFee = message.createStakingRewardFee === "" ? undefined : message.createStakingRewardFee;
    obj.createTradingRewardFee = message.createTradingRewardFee === "" ? undefined : message.createTradingRewardFee;
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
      typeUrl: "/bze.rewards.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};