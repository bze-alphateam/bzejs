import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface CoinsBurnedEvent {
  burned: string;
}
export interface CoinsBurnedEventSDKType {
  burned: string;
}
export interface FundBurnerEvent {
  from: string;
  amount: string;
}
export interface FundBurnerEventSDKType {
  from: string;
  amount: string;
}

function createBaseCoinsBurnedEvent(): CoinsBurnedEvent {
  return {
    burned: ""
  };
}

export const CoinsBurnedEvent = {
  encode(message: CoinsBurnedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burned !== "") {
      writer.uint32(10).string(message.burned);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinsBurnedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinsBurnedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.burned = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CoinsBurnedEvent>): CoinsBurnedEvent {
    const message = createBaseCoinsBurnedEvent();
    message.burned = object.burned ?? "";
    return message;
  }

};

function createBaseFundBurnerEvent(): FundBurnerEvent {
  return {
    from: "",
    amount: ""
  };
}

export const FundBurnerEvent = {
  encode(message: FundBurnerEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundBurnerEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundBurnerEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
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

  fromPartial(object: DeepPartial<FundBurnerEvent>): FundBurnerEvent {
    const message = createBaseFundBurnerEvent();
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};