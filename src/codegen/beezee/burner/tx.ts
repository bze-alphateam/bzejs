import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
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

  fromJSON(object: any): MsgFundBurner {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgFundBurner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<MsgFundBurner>): MsgFundBurner {
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

  fromJSON(_: any): MsgFundBurnerResponse {
    return {};
  },

  toJSON(_: MsgFundBurnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgFundBurnerResponse>): MsgFundBurnerResponse {
    const message = createBaseMsgFundBurnerResponse();
    return message;
  }

};