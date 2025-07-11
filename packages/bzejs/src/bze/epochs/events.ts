//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface EpochStartEvent {
  identifier: string;
  epoch: string;
}
export interface EpochStartEventProtoMsg {
  typeUrl: "/bze.epochs.EpochStartEvent";
  value: Uint8Array;
}
/**
 * @name EpochStartEventAmino
 * @package bze.epochs
 * @see proto type: bze.epochs.EpochStartEvent
 */
export interface EpochStartEventAmino {
  identifier?: string;
  epoch?: string;
}
export interface EpochStartEventAminoMsg {
  type: "/bze.epochs.EpochStartEvent";
  value: EpochStartEventAmino;
}
export interface EpochStartEventSDKType {
  identifier: string;
  epoch: string;
}
export interface EpochEndEvent {
  identifier: string;
  epoch: string;
}
export interface EpochEndEventProtoMsg {
  typeUrl: "/bze.epochs.EpochEndEvent";
  value: Uint8Array;
}
/**
 * @name EpochEndEventAmino
 * @package bze.epochs
 * @see proto type: bze.epochs.EpochEndEvent
 */
export interface EpochEndEventAmino {
  identifier?: string;
  epoch?: string;
}
export interface EpochEndEventAminoMsg {
  type: "/bze.epochs.EpochEndEvent";
  value: EpochEndEventAmino;
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
  typeUrl: "/bze.epochs.EpochStartEvent",
  encode(message: EpochStartEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.epoch !== "") {
      writer.uint32(18).string(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochStartEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<EpochStartEvent>): EpochStartEvent {
    const message = createBaseEpochStartEvent();
    message.identifier = object.identifier ?? "";
    message.epoch = object.epoch ?? "";
    return message;
  },
  fromAmino(object: EpochStartEventAmino): EpochStartEvent {
    const message = createBaseEpochStartEvent();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = object.epoch;
    }
    return message;
  },
  toAmino(message: EpochStartEvent): EpochStartEventAmino {
    const obj: any = {};
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    obj.epoch = message.epoch === "" ? undefined : message.epoch;
    return obj;
  },
  fromAminoMsg(object: EpochStartEventAminoMsg): EpochStartEvent {
    return EpochStartEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochStartEventProtoMsg): EpochStartEvent {
    return EpochStartEvent.decode(message.value);
  },
  toProto(message: EpochStartEvent): Uint8Array {
    return EpochStartEvent.encode(message).finish();
  },
  toProtoMsg(message: EpochStartEvent): EpochStartEventProtoMsg {
    return {
      typeUrl: "/bze.epochs.EpochStartEvent",
      value: EpochStartEvent.encode(message).finish()
    };
  }
};
function createBaseEpochEndEvent(): EpochEndEvent {
  return {
    identifier: "",
    epoch: ""
  };
}
export const EpochEndEvent = {
  typeUrl: "/bze.epochs.EpochEndEvent",
  encode(message: EpochEndEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.epoch !== "") {
      writer.uint32(18).string(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochEndEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<EpochEndEvent>): EpochEndEvent {
    const message = createBaseEpochEndEvent();
    message.identifier = object.identifier ?? "";
    message.epoch = object.epoch ?? "";
    return message;
  },
  fromAmino(object: EpochEndEventAmino): EpochEndEvent {
    const message = createBaseEpochEndEvent();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = object.epoch;
    }
    return message;
  },
  toAmino(message: EpochEndEvent): EpochEndEventAmino {
    const obj: any = {};
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    obj.epoch = message.epoch === "" ? undefined : message.epoch;
    return obj;
  },
  fromAminoMsg(object: EpochEndEventAminoMsg): EpochEndEvent {
    return EpochEndEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochEndEventProtoMsg): EpochEndEvent {
    return EpochEndEvent.decode(message.value);
  },
  toProto(message: EpochEndEvent): Uint8Array {
    return EpochEndEvent.encode(message).finish();
  },
  toProtoMsg(message: EpochEndEvent): EpochEndEventProtoMsg {
    return {
      typeUrl: "/bze.epochs.EpochEndEvent",
      value: EpochEndEvent.encode(message).finish()
    };
  }
};