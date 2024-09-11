import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgFundBurner {
  creator: string;
  amount: string;
}
export interface MsgFundBurnerSDKType {
  creator: string;
  amount: string;
}
export interface MsgFundBurnerResponse {}
export interface MsgFundBurnerResponseSDKType {}
export interface MsgStartRaffle {
  creator: string;
  pot: string;
  duration: string;
  chances: string;
  ratio: string;
  ticketPrice: string;
  denom: string;
}
export interface MsgStartRaffleSDKType {
  creator: string;
  pot: string;
  duration: string;
  chances: string;
  ratio: string;
  ticket_price: string;
  denom: string;
}
export interface MsgStartRaffleResponse {}
export interface MsgStartRaffleResponseSDKType {}
export interface MsgJoinRaffle {
  creator: string;
  denom: string;
}
export interface MsgJoinRaffleSDKType {
  creator: string;
  denom: string;
}
export interface MsgJoinRaffleResponse {}
export interface MsgJoinRaffleResponseSDKType {}

function createBaseMsgFundBurner(): MsgFundBurner {
  return {
    creator: "",
    amount: ""
  };
}

export const MsgFundBurner = {
  encode(message: MsgFundBurner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundBurner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundBurner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromPartial(object: DeepPartial<MsgFundBurner>): MsgFundBurner {
    const message = createBaseMsgFundBurner();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgFundBurnerResponse(): MsgFundBurnerResponse {
  return {};
}

export const MsgFundBurnerResponse = {
  encode(_: MsgFundBurnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundBurnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundBurnerResponse();

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

  fromPartial(_: DeepPartial<MsgFundBurnerResponse>): MsgFundBurnerResponse {
    const message = createBaseMsgFundBurnerResponse();
    return message;
  }

};

function createBaseMsgStartRaffle(): MsgStartRaffle {
  return {
    creator: "",
    pot: "",
    duration: "",
    chances: "",
    ratio: "",
    ticketPrice: "",
    denom: ""
  };
}

export const MsgStartRaffle = {
  encode(message: MsgStartRaffle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.pot !== "") {
      writer.uint32(18).string(message.pot);
    }

    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }

    if (message.chances !== "") {
      writer.uint32(34).string(message.chances);
    }

    if (message.ratio !== "") {
      writer.uint32(42).string(message.ratio);
    }

    if (message.ticketPrice !== "") {
      writer.uint32(50).string(message.ticketPrice);
    }

    if (message.denom !== "") {
      writer.uint32(58).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRaffle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRaffle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.pot = reader.string();
          break;

        case 3:
          message.duration = reader.string();
          break;

        case 4:
          message.chances = reader.string();
          break;

        case 5:
          message.ratio = reader.string();
          break;

        case 6:
          message.ticketPrice = reader.string();
          break;

        case 7:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgStartRaffle>): MsgStartRaffle {
    const message = createBaseMsgStartRaffle();
    message.creator = object.creator ?? "";
    message.pot = object.pot ?? "";
    message.duration = object.duration ?? "";
    message.chances = object.chances ?? "";
    message.ratio = object.ratio ?? "";
    message.ticketPrice = object.ticketPrice ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgStartRaffleResponse(): MsgStartRaffleResponse {
  return {};
}

export const MsgStartRaffleResponse = {
  encode(_: MsgStartRaffleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRaffleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRaffleResponse();

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

  fromPartial(_: DeepPartial<MsgStartRaffleResponse>): MsgStartRaffleResponse {
    const message = createBaseMsgStartRaffleResponse();
    return message;
  }

};

function createBaseMsgJoinRaffle(): MsgJoinRaffle {
  return {
    creator: "",
    denom: ""
  };
}

export const MsgJoinRaffle = {
  encode(message: MsgJoinRaffle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinRaffle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinRaffle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgJoinRaffle>): MsgJoinRaffle {
    const message = createBaseMsgJoinRaffle();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgJoinRaffleResponse(): MsgJoinRaffleResponse {
  return {};
}

export const MsgJoinRaffleResponse = {
  encode(_: MsgJoinRaffleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinRaffleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinRaffleResponse();

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

  fromPartial(_: DeepPartial<MsgJoinRaffleResponse>): MsgJoinRaffleResponse {
    const message = createBaseMsgJoinRaffleResponse();
    return message;
  }

};