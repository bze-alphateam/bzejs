import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** Params defines the parameters for the module. */

export interface Params {
  createStakingRewardFee: string;
  createTradingRewardFee: string;
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createStakingRewardFee !== "") {
      writer.uint32(10).string(message.createStakingRewardFee);
    }

    if (message.createTradingRewardFee !== "") {
      writer.uint32(18).string(message.createTradingRewardFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.createStakingRewardFee = object.createStakingRewardFee ?? "";
    message.createTradingRewardFee = object.createTradingRewardFee ?? "";
    return message;
  }

};