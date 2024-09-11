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
export interface RaffleWinnerEvent {
  denom: string;
  winner: string;
  amount: string;
}
export interface RaffleWinnerEventSDKType {
  denom: string;
  winner: string;
  amount: string;
}
export interface RaffleLostEvent {
  denom: string;
  participant: string;
}
export interface RaffleLostEventSDKType {
  denom: string;
  participant: string;
}
export interface RaffleFinishedEvent {
  denom: string;
}
export interface RaffleFinishedEventSDKType {
  denom: string;
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

function createBaseRaffleWinnerEvent(): RaffleWinnerEvent {
  return {
    denom: "",
    winner: "",
    amount: ""
  };
}

export const RaffleWinnerEvent = {
  encode(message: RaffleWinnerEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.winner !== "") {
      writer.uint32(18).string(message.winner);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaffleWinnerEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleWinnerEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.winner = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RaffleWinnerEvent>): RaffleWinnerEvent {
    const message = createBaseRaffleWinnerEvent();
    message.denom = object.denom ?? "";
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseRaffleLostEvent(): RaffleLostEvent {
  return {
    denom: "",
    participant: ""
  };
}

export const RaffleLostEvent = {
  encode(message: RaffleLostEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaffleLostEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleLostEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.participant = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RaffleLostEvent>): RaffleLostEvent {
    const message = createBaseRaffleLostEvent();
    message.denom = object.denom ?? "";
    message.participant = object.participant ?? "";
    return message;
  }

};

function createBaseRaffleFinishedEvent(): RaffleFinishedEvent {
  return {
    denom: ""
  };
}

export const RaffleFinishedEvent = {
  encode(message: RaffleFinishedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaffleFinishedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleFinishedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RaffleFinishedEvent>): RaffleFinishedEvent {
    const message = createBaseRaffleFinishedEvent();
    message.denom = object.denom ?? "";
    return message;
  }

};