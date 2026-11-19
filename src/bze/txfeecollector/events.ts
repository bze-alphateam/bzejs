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
/**
 * CommunityPoolFeePaidEvent is emitted at EndBlock for every coin the community pool fee collector forwards to the
 * community pool set on the coin's denom (the factory token's DenomConfig), instead of converting it for the chain's
 * community pool.
 * @name CommunityPoolFeePaidEvent
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.CommunityPoolFeePaidEvent
 */
export interface CommunityPoolFeePaidEvent {
  /**
   * denom is the denomination of the forwarded coin.
   */
  denom: string;
  /**
   * recipient is the denom's community pool address.
   */
  recipient: string;
  /**
   * amount is the forwarded amount.
   */
  amount: string;
}
export interface CommunityPoolFeePaidEventProtoMsg {
  typeUrl: "/bze.txfeecollector.CommunityPoolFeePaidEvent";
  value: Uint8Array;
}
/**
 * CommunityPoolFeePaidEvent is emitted at EndBlock for every coin the community pool fee collector forwards to the
 * community pool set on the coin's denom (the factory token's DenomConfig), instead of converting it for the chain's
 * community pool.
 * @name CommunityPoolFeePaidEventAmino
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.CommunityPoolFeePaidEvent
 */
export interface CommunityPoolFeePaidEventAmino {
  /**
   * denom is the denomination of the forwarded coin.
   */
  denom?: string;
  /**
   * recipient is the denom's community pool address.
   */
  recipient?: string;
  /**
   * amount is the forwarded amount.
   */
  amount?: string;
}
export interface CommunityPoolFeePaidEventAminoMsg {
  type: "/bze.txfeecollector.CommunityPoolFeePaidEvent";
  value: CommunityPoolFeePaidEventAmino;
}
/**
 * CommunityPoolFeePaidEvent is emitted at EndBlock for every coin the community pool fee collector forwards to the
 * community pool set on the coin's denom (the factory token's DenomConfig), instead of converting it for the chain's
 * community pool.
 * @name CommunityPoolFeePaidEventSDKType
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.CommunityPoolFeePaidEvent
 */
export interface CommunityPoolFeePaidEventSDKType {
  denom: string;
  recipient: string;
  amount: string;
}
/**
 * GasSurchargePaidEvent is emitted for every factory-token coin used to pay the tx fee when the token sets a gas
 * surcharge. The amount is the part of the paid fee moved out of the fee collected for validators.
 * @name GasSurchargePaidEvent
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.GasSurchargePaidEvent
 */
export interface GasSurchargePaidEvent {
  /**
   * payer is the account that paid the tx fee (the fee granter when one is set).
   */
  payer: string;
  /**
   * denom is the denomination of the surcharge.
   */
  denom: string;
  /**
   * amount is the surcharge amount.
   */
  amount: string;
  /**
   * destination is the module account the surcharge went to: txfeecollector_cp when the token has a community pool
   * (forwarded there at EndBlock), burner when it has none (the burner module burns it).
   */
  destination: string;
}
export interface GasSurchargePaidEventProtoMsg {
  typeUrl: "/bze.txfeecollector.GasSurchargePaidEvent";
  value: Uint8Array;
}
/**
 * GasSurchargePaidEvent is emitted for every factory-token coin used to pay the tx fee when the token sets a gas
 * surcharge. The amount is the part of the paid fee moved out of the fee collected for validators.
 * @name GasSurchargePaidEventAmino
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.GasSurchargePaidEvent
 */
export interface GasSurchargePaidEventAmino {
  /**
   * payer is the account that paid the tx fee (the fee granter when one is set).
   */
  payer?: string;
  /**
   * denom is the denomination of the surcharge.
   */
  denom?: string;
  /**
   * amount is the surcharge amount.
   */
  amount?: string;
  /**
   * destination is the module account the surcharge went to: txfeecollector_cp when the token has a community pool
   * (forwarded there at EndBlock), burner when it has none (the burner module burns it).
   */
  destination?: string;
}
export interface GasSurchargePaidEventAminoMsg {
  type: "/bze.txfeecollector.GasSurchargePaidEvent";
  value: GasSurchargePaidEventAmino;
}
/**
 * GasSurchargePaidEvent is emitted for every factory-token coin used to pay the tx fee when the token sets a gas
 * surcharge. The amount is the part of the paid fee moved out of the fee collected for validators.
 * @name GasSurchargePaidEventSDKType
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.GasSurchargePaidEvent
 */
export interface GasSurchargePaidEventSDKType {
  payer: string;
  denom: string;
  amount: string;
  destination: string;
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
function createBaseCommunityPoolFeePaidEvent(): CommunityPoolFeePaidEvent {
  return {
    denom: "",
    recipient: "",
    amount: ""
  };
}
/**
 * CommunityPoolFeePaidEvent is emitted at EndBlock for every coin the community pool fee collector forwards to the
 * community pool set on the coin's denom (the factory token's DenomConfig), instead of converting it for the chain's
 * community pool.
 * @name CommunityPoolFeePaidEvent
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.CommunityPoolFeePaidEvent
 */
export const CommunityPoolFeePaidEvent = {
  typeUrl: "/bze.txfeecollector.CommunityPoolFeePaidEvent",
  is(o: any): o is CommunityPoolFeePaidEvent {
    return o && (o.$typeUrl === CommunityPoolFeePaidEvent.typeUrl || typeof o.denom === "string" && typeof o.recipient === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is CommunityPoolFeePaidEventSDKType {
    return o && (o.$typeUrl === CommunityPoolFeePaidEvent.typeUrl || typeof o.denom === "string" && typeof o.recipient === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is CommunityPoolFeePaidEventAmino {
    return o && (o.$typeUrl === CommunityPoolFeePaidEvent.typeUrl || typeof o.denom === "string" && typeof o.recipient === "string" && typeof o.amount === "string");
  },
  encode(message: CommunityPoolFeePaidEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommunityPoolFeePaidEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolFeePaidEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
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
  fromPartial(object: Partial<CommunityPoolFeePaidEvent>): CommunityPoolFeePaidEvent {
    const message = createBaseCommunityPoolFeePaidEvent();
    message.denom = object.denom ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: CommunityPoolFeePaidEventAmino): CommunityPoolFeePaidEvent {
    const message = createBaseCommunityPoolFeePaidEvent();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: CommunityPoolFeePaidEvent): CommunityPoolFeePaidEventAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: CommunityPoolFeePaidEventAminoMsg): CommunityPoolFeePaidEvent {
    return CommunityPoolFeePaidEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: CommunityPoolFeePaidEventProtoMsg): CommunityPoolFeePaidEvent {
    return CommunityPoolFeePaidEvent.decode(message.value);
  },
  toProto(message: CommunityPoolFeePaidEvent): Uint8Array {
    return CommunityPoolFeePaidEvent.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolFeePaidEvent): CommunityPoolFeePaidEventProtoMsg {
    return {
      typeUrl: "/bze.txfeecollector.CommunityPoolFeePaidEvent",
      value: CommunityPoolFeePaidEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGasSurchargePaidEvent(): GasSurchargePaidEvent {
  return {
    payer: "",
    denom: "",
    amount: "",
    destination: ""
  };
}
/**
 * GasSurchargePaidEvent is emitted for every factory-token coin used to pay the tx fee when the token sets a gas
 * surcharge. The amount is the part of the paid fee moved out of the fee collected for validators.
 * @name GasSurchargePaidEvent
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.GasSurchargePaidEvent
 */
export const GasSurchargePaidEvent = {
  typeUrl: "/bze.txfeecollector.GasSurchargePaidEvent",
  is(o: any): o is GasSurchargePaidEvent {
    return o && (o.$typeUrl === GasSurchargePaidEvent.typeUrl || typeof o.payer === "string" && typeof o.denom === "string" && typeof o.amount === "string" && typeof o.destination === "string");
  },
  isSDK(o: any): o is GasSurchargePaidEventSDKType {
    return o && (o.$typeUrl === GasSurchargePaidEvent.typeUrl || typeof o.payer === "string" && typeof o.denom === "string" && typeof o.amount === "string" && typeof o.destination === "string");
  },
  isAmino(o: any): o is GasSurchargePaidEventAmino {
    return o && (o.$typeUrl === GasSurchargePaidEvent.typeUrl || typeof o.payer === "string" && typeof o.denom === "string" && typeof o.amount === "string" && typeof o.destination === "string");
  },
  encode(message: GasSurchargePaidEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payer !== "") {
      writer.uint32(10).string(message.payer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.destination !== "") {
      writer.uint32(34).string(message.destination);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasSurchargePaidEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasSurchargePaidEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.destination = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GasSurchargePaidEvent>): GasSurchargePaidEvent {
    const message = createBaseGasSurchargePaidEvent();
    message.payer = object.payer ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.destination = object.destination ?? "";
    return message;
  },
  fromAmino(object: GasSurchargePaidEventAmino): GasSurchargePaidEvent {
    const message = createBaseGasSurchargePaidEvent();
    if (object.payer !== undefined && object.payer !== null) {
      message.payer = object.payer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    return message;
  },
  toAmino(message: GasSurchargePaidEvent): GasSurchargePaidEventAmino {
    const obj: any = {};
    obj.payer = message.payer === "" ? undefined : message.payer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.destination = message.destination === "" ? undefined : message.destination;
    return obj;
  },
  fromAminoMsg(object: GasSurchargePaidEventAminoMsg): GasSurchargePaidEvent {
    return GasSurchargePaidEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: GasSurchargePaidEventProtoMsg): GasSurchargePaidEvent {
    return GasSurchargePaidEvent.decode(message.value);
  },
  toProto(message: GasSurchargePaidEvent): Uint8Array {
    return GasSurchargePaidEvent.encode(message).finish();
  },
  toProtoMsg(message: GasSurchargePaidEvent): GasSurchargePaidEventProtoMsg {
    return {
      typeUrl: "/bze.txfeecollector.GasSurchargePaidEvent",
      value: GasSurchargePaidEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};