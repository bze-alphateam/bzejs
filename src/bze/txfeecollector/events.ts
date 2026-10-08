//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * BlockedIbcInboundEvent is emitted when an inbound ICS-20 packet is answered with an
 * error acknowledgement because the (channel, base denom) pair it carries is listed in
 * the BlockedIbcInbound parameter. The sending chain refunds the sender when it relays
 * the acknowledgement, so the funds are never stuck.
 * @name BlockedIbcInboundEvent
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcInboundEvent
 */
export interface BlockedIbcInboundEvent {
  /**
   * channel is the channel on this chain the packet arrived on.
   */
  channel: string;
  /**
   * denom is the base denomination the packet carries, as sent by the counterparty.
   */
  denom: string;
  /**
   * amount is the refused amount.
   */
  amount: string;
  /**
   * sender is the account on the counterparty chain the packet came from.
   */
  sender: string;
  /**
   * receiver is the account on this chain that would have received the tokens.
   */
  receiver: string;
}
export interface BlockedIbcInboundEventProtoMsg {
  typeUrl: "/bze.txfeecollector.BlockedIbcInboundEvent";
  value: Uint8Array;
}
/**
 * BlockedIbcInboundEvent is emitted when an inbound ICS-20 packet is answered with an
 * error acknowledgement because the (channel, base denom) pair it carries is listed in
 * the BlockedIbcInbound parameter. The sending chain refunds the sender when it relays
 * the acknowledgement, so the funds are never stuck.
 * @name BlockedIbcInboundEventAmino
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcInboundEvent
 */
export interface BlockedIbcInboundEventAmino {
  /**
   * channel is the channel on this chain the packet arrived on.
   */
  channel?: string;
  /**
   * denom is the base denomination the packet carries, as sent by the counterparty.
   */
  denom?: string;
  /**
   * amount is the refused amount.
   */
  amount?: string;
  /**
   * sender is the account on the counterparty chain the packet came from.
   */
  sender?: string;
  /**
   * receiver is the account on this chain that would have received the tokens.
   */
  receiver?: string;
}
export interface BlockedIbcInboundEventAminoMsg {
  type: "/bze.txfeecollector.BlockedIbcInboundEvent";
  value: BlockedIbcInboundEventAmino;
}
/**
 * BlockedIbcInboundEvent is emitted when an inbound ICS-20 packet is answered with an
 * error acknowledgement because the (channel, base denom) pair it carries is listed in
 * the BlockedIbcInbound parameter. The sending chain refunds the sender when it relays
 * the acknowledgement, so the funds are never stuck.
 * @name BlockedIbcInboundEventSDKType
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcInboundEvent
 */
export interface BlockedIbcInboundEventSDKType {
  channel: string;
  denom: string;
  amount: string;
  sender: string;
  receiver: string;
}
function createBaseBlockedIbcInboundEvent(): BlockedIbcInboundEvent {
  return {
    channel: "",
    denom: "",
    amount: "",
    sender: "",
    receiver: ""
  };
}
/**
 * BlockedIbcInboundEvent is emitted when an inbound ICS-20 packet is answered with an
 * error acknowledgement because the (channel, base denom) pair it carries is listed in
 * the BlockedIbcInbound parameter. The sending chain refunds the sender when it relays
 * the acknowledgement, so the funds are never stuck.
 * @name BlockedIbcInboundEvent
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcInboundEvent
 */
export const BlockedIbcInboundEvent = {
  typeUrl: "/bze.txfeecollector.BlockedIbcInboundEvent",
  is(o: any): o is BlockedIbcInboundEvent {
    return o && (o.$typeUrl === BlockedIbcInboundEvent.typeUrl || typeof o.channel === "string" && typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isSDK(o: any): o is BlockedIbcInboundEventSDKType {
    return o && (o.$typeUrl === BlockedIbcInboundEvent.typeUrl || typeof o.channel === "string" && typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is BlockedIbcInboundEventAmino {
    return o && (o.$typeUrl === BlockedIbcInboundEvent.typeUrl || typeof o.channel === "string" && typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  encode(message: BlockedIbcInboundEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(10).string(message.channel);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockedIbcInboundEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockedIbcInboundEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockedIbcInboundEvent>): BlockedIbcInboundEvent {
    const message = createBaseBlockedIbcInboundEvent();
    message.channel = object.channel ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: BlockedIbcInboundEventAmino): BlockedIbcInboundEvent {
    const message = createBaseBlockedIbcInboundEvent();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: BlockedIbcInboundEvent): BlockedIbcInboundEventAmino {
    const obj: any = {};
    obj.channel = message.channel === "" ? undefined : message.channel;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: BlockedIbcInboundEventAminoMsg): BlockedIbcInboundEvent {
    return BlockedIbcInboundEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockedIbcInboundEventProtoMsg): BlockedIbcInboundEvent {
    return BlockedIbcInboundEvent.decode(message.value);
  },
  toProto(message: BlockedIbcInboundEvent): Uint8Array {
    return BlockedIbcInboundEvent.encode(message).finish();
  },
  toProtoMsg(message: BlockedIbcInboundEvent): BlockedIbcInboundEventProtoMsg {
    return {
      typeUrl: "/bze.txfeecollector.BlockedIbcInboundEvent",
      value: BlockedIbcInboundEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};