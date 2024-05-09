import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** Params defines the parameters for the module. */

export interface Params {
  createMarketFee: string;
  marketMakerFee: string;
  marketTakerFee: string;
  makerFeeDestination: string;
  takerFeeDestination: string;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  createMarketFee: string;
  marketMakerFee: string;
  marketTakerFee: string;
  makerFeeDestination: string;
  takerFeeDestination: string;
}

function createBaseParams(): Params {
  return {
    createMarketFee: "",
    marketMakerFee: "",
    marketTakerFee: "",
    makerFeeDestination: "",
    takerFeeDestination: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createMarketFee !== "") {
      writer.uint32(10).string(message.createMarketFee);
    }

    if (message.marketMakerFee !== "") {
      writer.uint32(18).string(message.marketMakerFee);
    }

    if (message.marketTakerFee !== "") {
      writer.uint32(26).string(message.marketTakerFee);
    }

    if (message.makerFeeDestination !== "") {
      writer.uint32(34).string(message.makerFeeDestination);
    }

    if (message.takerFeeDestination !== "") {
      writer.uint32(42).string(message.takerFeeDestination);
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
          message.createMarketFee = reader.string();
          break;

        case 2:
          message.marketMakerFee = reader.string();
          break;

        case 3:
          message.marketTakerFee = reader.string();
          break;

        case 4:
          message.makerFeeDestination = reader.string();
          break;

        case 5:
          message.takerFeeDestination = reader.string();
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
    message.createMarketFee = object.createMarketFee ?? "";
    message.marketMakerFee = object.marketMakerFee ?? "";
    message.marketTakerFee = object.marketTakerFee ?? "";
    message.makerFeeDestination = object.makerFeeDestination ?? "";
    message.takerFeeDestination = object.takerFeeDestination ?? "";
    return message;
  }

};