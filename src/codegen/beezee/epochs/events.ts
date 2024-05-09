import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface EpochStartEvent {
  identifier: string;
  epoch: string;
}
export interface EpochStartEventSDKType {
  identifier: string;
  epoch: string;
}
export interface EpochEndEvent {
  identifier: string;
  epoch: string;
}
export interface EpochEndEventSDKType {
  identifier: string;
  epoch: string;
}

function createBaseEpochStartEvent(): EpochStartEvent {
  return {
    identifier: "",
    epoch: ""
  };
}

export const EpochStartEvent = {
  encode(message: EpochStartEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }

    if (message.epoch !== "") {
      writer.uint32(18).string(message.epoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochStartEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochStartEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.epoch = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EpochStartEvent>): EpochStartEvent {
    const message = createBaseEpochStartEvent();
    message.identifier = object.identifier ?? "";
    message.epoch = object.epoch ?? "";
    return message;
  }

};

function createBaseEpochEndEvent(): EpochEndEvent {
  return {
    identifier: "",
    epoch: ""
  };
}

export const EpochEndEvent = {
  encode(message: EpochEndEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }

    if (message.epoch !== "") {
      writer.uint32(18).string(message.epoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochEndEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochEndEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.epoch = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EpochEndEvent>): EpochEndEvent {
    const message = createBaseEpochEndEvent();
    message.identifier = object.identifier ?? "";
    message.epoch = object.epoch ?? "";
    return message;
  }

};