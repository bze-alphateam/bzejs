//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * TightenRateLimitEvent is emitted when a rate limit quota is lowered.
 * @name TightenRateLimitEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TightenRateLimitEvent
 */
export interface TightenRateLimitEvent {
  signer: string;
  denom: string;
  channelId: string;
  oldSend: string;
  oldRecv: string;
  newSend: string;
  newRecv: string;
}
export interface TightenRateLimitEventProtoMsg {
  typeUrl: "/bze.guardian.v1.TightenRateLimitEvent";
  value: Uint8Array;
}
/**
 * TightenRateLimitEvent is emitted when a rate limit quota is lowered.
 * @name TightenRateLimitEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TightenRateLimitEvent
 */
export interface TightenRateLimitEventAmino {
  signer?: string;
  denom?: string;
  channel_id?: string;
  old_send?: string;
  old_recv?: string;
  new_send?: string;
  new_recv?: string;
}
export interface TightenRateLimitEventAminoMsg {
  type: "/bze.guardian.v1.TightenRateLimitEvent";
  value: TightenRateLimitEventAmino;
}
/**
 * TightenRateLimitEvent is emitted when a rate limit quota is lowered.
 * @name TightenRateLimitEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TightenRateLimitEvent
 */
export interface TightenRateLimitEventSDKType {
  signer: string;
  denom: string;
  channel_id: string;
  old_send: string;
  old_recv: string;
  new_send: string;
  new_recv: string;
}
/**
 * DenomBlockedEvent is emitted when a denom is put on the blacklist.
 * @name DenomBlockedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomBlockedEvent
 */
export interface DenomBlockedEvent {
  signer: string;
  denom: string;
}
export interface DenomBlockedEventProtoMsg {
  typeUrl: "/bze.guardian.v1.DenomBlockedEvent";
  value: Uint8Array;
}
/**
 * DenomBlockedEvent is emitted when a denom is put on the blacklist.
 * @name DenomBlockedEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomBlockedEvent
 */
export interface DenomBlockedEventAmino {
  signer?: string;
  denom?: string;
}
export interface DenomBlockedEventAminoMsg {
  type: "/bze.guardian.v1.DenomBlockedEvent";
  value: DenomBlockedEventAmino;
}
/**
 * DenomBlockedEvent is emitted when a denom is put on the blacklist.
 * @name DenomBlockedEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomBlockedEvent
 */
export interface DenomBlockedEventSDKType {
  signer: string;
  denom: string;
}
/**
 * DenomUnblockedEvent is emitted when a denom is taken off the blacklist.
 * @name DenomUnblockedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomUnblockedEvent
 */
export interface DenomUnblockedEvent {
  authority: string;
  denom: string;
}
export interface DenomUnblockedEventProtoMsg {
  typeUrl: "/bze.guardian.v1.DenomUnblockedEvent";
  value: Uint8Array;
}
/**
 * DenomUnblockedEvent is emitted when a denom is taken off the blacklist.
 * @name DenomUnblockedEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomUnblockedEvent
 */
export interface DenomUnblockedEventAmino {
  authority?: string;
  denom?: string;
}
export interface DenomUnblockedEventAminoMsg {
  type: "/bze.guardian.v1.DenomUnblockedEvent";
  value: DenomUnblockedEventAmino;
}
/**
 * DenomUnblockedEvent is emitted when a denom is taken off the blacklist.
 * @name DenomUnblockedEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomUnblockedEvent
 */
export interface DenomUnblockedEventSDKType {
  authority: string;
  denom: string;
}
/**
 * MessagesDisabledEvent is emitted when message types are added to the
 * x/circuit disable list.
 * @name MessagesDisabledEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MessagesDisabledEvent
 */
export interface MessagesDisabledEvent {
  signer: string;
  msgTypeUrls: string[];
}
export interface MessagesDisabledEventProtoMsg {
  typeUrl: "/bze.guardian.v1.MessagesDisabledEvent";
  value: Uint8Array;
}
/**
 * MessagesDisabledEvent is emitted when message types are added to the
 * x/circuit disable list.
 * @name MessagesDisabledEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MessagesDisabledEvent
 */
export interface MessagesDisabledEventAmino {
  signer?: string;
  msg_type_urls?: string[];
}
export interface MessagesDisabledEventAminoMsg {
  type: "/bze.guardian.v1.MessagesDisabledEvent";
  value: MessagesDisabledEventAmino;
}
/**
 * MessagesDisabledEvent is emitted when message types are added to the
 * x/circuit disable list.
 * @name MessagesDisabledEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MessagesDisabledEvent
 */
export interface MessagesDisabledEventSDKType {
  signer: string;
  msg_type_urls: string[];
}
/**
 * TradingDenomsHaltedEvent is emitted once per MsgHaltTradingDenoms. denoms
 * lists the denoms the message halted, without those that were already
 * halted. tradebin's DenomHaltedEvent is emitted for each of them as well.
 * @name TradingDenomsHaltedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TradingDenomsHaltedEvent
 */
export interface TradingDenomsHaltedEvent {
  signer: string;
  denoms: string[];
}
export interface TradingDenomsHaltedEventProtoMsg {
  typeUrl: "/bze.guardian.v1.TradingDenomsHaltedEvent";
  value: Uint8Array;
}
/**
 * TradingDenomsHaltedEvent is emitted once per MsgHaltTradingDenoms. denoms
 * lists the denoms the message halted, without those that were already
 * halted. tradebin's DenomHaltedEvent is emitted for each of them as well.
 * @name TradingDenomsHaltedEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TradingDenomsHaltedEvent
 */
export interface TradingDenomsHaltedEventAmino {
  signer?: string;
  denoms?: string[];
}
export interface TradingDenomsHaltedEventAminoMsg {
  type: "/bze.guardian.v1.TradingDenomsHaltedEvent";
  value: TradingDenomsHaltedEventAmino;
}
/**
 * TradingDenomsHaltedEvent is emitted once per MsgHaltTradingDenoms. denoms
 * lists the denoms the message halted, without those that were already
 * halted. tradebin's DenomHaltedEvent is emitted for each of them as well.
 * @name TradingDenomsHaltedEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TradingDenomsHaltedEvent
 */
export interface TradingDenomsHaltedEventSDKType {
  signer: string;
  denoms: string[];
}
/**
 * ChainHaltScheduledEvent is emitted when a halt plan is scheduled.
 * @name ChainHaltScheduledEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChainHaltScheduledEvent
 */
export interface ChainHaltScheduledEvent {
  signer: string;
  name: string;
  height: bigint;
  reason: string;
}
export interface ChainHaltScheduledEventProtoMsg {
  typeUrl: "/bze.guardian.v1.ChainHaltScheduledEvent";
  value: Uint8Array;
}
/**
 * ChainHaltScheduledEvent is emitted when a halt plan is scheduled.
 * @name ChainHaltScheduledEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChainHaltScheduledEvent
 */
export interface ChainHaltScheduledEventAmino {
  signer?: string;
  name?: string;
  height?: string;
  reason?: string;
}
export interface ChainHaltScheduledEventAminoMsg {
  type: "/bze.guardian.v1.ChainHaltScheduledEvent";
  value: ChainHaltScheduledEventAmino;
}
/**
 * ChainHaltScheduledEvent is emitted when a halt plan is scheduled.
 * @name ChainHaltScheduledEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChainHaltScheduledEvent
 */
export interface ChainHaltScheduledEventSDKType {
  signer: string;
  name: string;
  height: bigint;
  reason: string;
}
/**
 * AutomationPausedEvent is emitted when the protocol automation is paused.
 * @name AutomationPausedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationPausedEvent
 */
export interface AutomationPausedEvent {
  signer: string;
}
export interface AutomationPausedEventProtoMsg {
  typeUrl: "/bze.guardian.v1.AutomationPausedEvent";
  value: Uint8Array;
}
/**
 * AutomationPausedEvent is emitted when the protocol automation is paused.
 * @name AutomationPausedEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationPausedEvent
 */
export interface AutomationPausedEventAmino {
  signer?: string;
}
export interface AutomationPausedEventAminoMsg {
  type: "/bze.guardian.v1.AutomationPausedEvent";
  value: AutomationPausedEventAmino;
}
/**
 * AutomationPausedEvent is emitted when the protocol automation is paused.
 * @name AutomationPausedEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationPausedEvent
 */
export interface AutomationPausedEventSDKType {
  signer: string;
}
/**
 * AutomationResumedEvent is emitted when governance resumes the protocol
 * automation.
 * @name AutomationResumedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationResumedEvent
 */
export interface AutomationResumedEvent {
  authority: string;
}
export interface AutomationResumedEventProtoMsg {
  typeUrl: "/bze.guardian.v1.AutomationResumedEvent";
  value: Uint8Array;
}
/**
 * AutomationResumedEvent is emitted when governance resumes the protocol
 * automation.
 * @name AutomationResumedEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationResumedEvent
 */
export interface AutomationResumedEventAmino {
  authority?: string;
}
export interface AutomationResumedEventAminoMsg {
  type: "/bze.guardian.v1.AutomationResumedEvent";
  value: AutomationResumedEventAmino;
}
/**
 * AutomationResumedEvent is emitted when governance resumes the protocol
 * automation.
 * @name AutomationResumedEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationResumedEvent
 */
export interface AutomationResumedEventSDKType {
  authority: string;
}
/**
 * ChannelClosedEvent is emitted when a transfer channel is closed.
 * @name ChannelClosedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelClosedEvent
 */
export interface ChannelClosedEvent {
  signer: string;
  channelId: string;
}
export interface ChannelClosedEventProtoMsg {
  typeUrl: "/bze.guardian.v1.ChannelClosedEvent";
  value: Uint8Array;
}
/**
 * ChannelClosedEvent is emitted when a transfer channel is closed.
 * @name ChannelClosedEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelClosedEvent
 */
export interface ChannelClosedEventAmino {
  signer?: string;
  channel_id?: string;
}
export interface ChannelClosedEventAminoMsg {
  type: "/bze.guardian.v1.ChannelClosedEvent";
  value: ChannelClosedEventAmino;
}
/**
 * ChannelClosedEvent is emitted when a transfer channel is closed.
 * @name ChannelClosedEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelClosedEvent
 */
export interface ChannelClosedEventSDKType {
  signer: string;
  channel_id: string;
}
/**
 * ChannelReopenedEvent is emitted when a closed transfer channel is reopened.
 * @name ChannelReopenedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelReopenedEvent
 */
export interface ChannelReopenedEvent {
  authority: string;
  channelId: string;
}
export interface ChannelReopenedEventProtoMsg {
  typeUrl: "/bze.guardian.v1.ChannelReopenedEvent";
  value: Uint8Array;
}
/**
 * ChannelReopenedEvent is emitted when a closed transfer channel is reopened.
 * @name ChannelReopenedEventAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelReopenedEvent
 */
export interface ChannelReopenedEventAmino {
  authority?: string;
  channel_id?: string;
}
export interface ChannelReopenedEventAminoMsg {
  type: "/bze.guardian.v1.ChannelReopenedEvent";
  value: ChannelReopenedEventAmino;
}
/**
 * ChannelReopenedEvent is emitted when a closed transfer channel is reopened.
 * @name ChannelReopenedEventSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelReopenedEvent
 */
export interface ChannelReopenedEventSDKType {
  authority: string;
  channel_id: string;
}
function createBaseTightenRateLimitEvent(): TightenRateLimitEvent {
  return {
    signer: "",
    denom: "",
    channelId: "",
    oldSend: "",
    oldRecv: "",
    newSend: "",
    newRecv: ""
  };
}
/**
 * TightenRateLimitEvent is emitted when a rate limit quota is lowered.
 * @name TightenRateLimitEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TightenRateLimitEvent
 */
export const TightenRateLimitEvent = {
  typeUrl: "/bze.guardian.v1.TightenRateLimitEvent",
  is(o: any): o is TightenRateLimitEvent {
    return o && (o.$typeUrl === TightenRateLimitEvent.typeUrl || typeof o.signer === "string" && typeof o.denom === "string" && typeof o.channelId === "string" && typeof o.oldSend === "string" && typeof o.oldRecv === "string" && typeof o.newSend === "string" && typeof o.newRecv === "string");
  },
  isSDK(o: any): o is TightenRateLimitEventSDKType {
    return o && (o.$typeUrl === TightenRateLimitEvent.typeUrl || typeof o.signer === "string" && typeof o.denom === "string" && typeof o.channel_id === "string" && typeof o.old_send === "string" && typeof o.old_recv === "string" && typeof o.new_send === "string" && typeof o.new_recv === "string");
  },
  isAmino(o: any): o is TightenRateLimitEventAmino {
    return o && (o.$typeUrl === TightenRateLimitEvent.typeUrl || typeof o.signer === "string" && typeof o.denom === "string" && typeof o.channel_id === "string" && typeof o.old_send === "string" && typeof o.old_recv === "string" && typeof o.new_send === "string" && typeof o.new_recv === "string");
  },
  encode(message: TightenRateLimitEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.oldSend !== "") {
      writer.uint32(34).string(message.oldSend);
    }
    if (message.oldRecv !== "") {
      writer.uint32(42).string(message.oldRecv);
    }
    if (message.newSend !== "") {
      writer.uint32(50).string(message.newSend);
    }
    if (message.newRecv !== "") {
      writer.uint32(58).string(message.newRecv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TightenRateLimitEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTightenRateLimitEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.oldSend = reader.string();
          break;
        case 5:
          message.oldRecv = reader.string();
          break;
        case 6:
          message.newSend = reader.string();
          break;
        case 7:
          message.newRecv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TightenRateLimitEvent>): TightenRateLimitEvent {
    const message = createBaseTightenRateLimitEvent();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.oldSend = object.oldSend ?? "";
    message.oldRecv = object.oldRecv ?? "";
    message.newSend = object.newSend ?? "";
    message.newRecv = object.newRecv ?? "";
    return message;
  },
  fromAmino(object: TightenRateLimitEventAmino): TightenRateLimitEvent {
    const message = createBaseTightenRateLimitEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.old_send !== undefined && object.old_send !== null) {
      message.oldSend = object.old_send;
    }
    if (object.old_recv !== undefined && object.old_recv !== null) {
      message.oldRecv = object.old_recv;
    }
    if (object.new_send !== undefined && object.new_send !== null) {
      message.newSend = object.new_send;
    }
    if (object.new_recv !== undefined && object.new_recv !== null) {
      message.newRecv = object.new_recv;
    }
    return message;
  },
  toAmino(message: TightenRateLimitEvent): TightenRateLimitEventAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.old_send = message.oldSend === "" ? undefined : message.oldSend;
    obj.old_recv = message.oldRecv === "" ? undefined : message.oldRecv;
    obj.new_send = message.newSend === "" ? undefined : message.newSend;
    obj.new_recv = message.newRecv === "" ? undefined : message.newRecv;
    return obj;
  },
  fromAminoMsg(object: TightenRateLimitEventAminoMsg): TightenRateLimitEvent {
    return TightenRateLimitEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: TightenRateLimitEventProtoMsg): TightenRateLimitEvent {
    return TightenRateLimitEvent.decode(message.value);
  },
  toProto(message: TightenRateLimitEvent): Uint8Array {
    return TightenRateLimitEvent.encode(message).finish();
  },
  toProtoMsg(message: TightenRateLimitEvent): TightenRateLimitEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.TightenRateLimitEvent",
      value: TightenRateLimitEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomBlockedEvent(): DenomBlockedEvent {
  return {
    signer: "",
    denom: ""
  };
}
/**
 * DenomBlockedEvent is emitted when a denom is put on the blacklist.
 * @name DenomBlockedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomBlockedEvent
 */
export const DenomBlockedEvent = {
  typeUrl: "/bze.guardian.v1.DenomBlockedEvent",
  is(o: any): o is DenomBlockedEvent {
    return o && (o.$typeUrl === DenomBlockedEvent.typeUrl || typeof o.signer === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomBlockedEventSDKType {
    return o && (o.$typeUrl === DenomBlockedEvent.typeUrl || typeof o.signer === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomBlockedEventAmino {
    return o && (o.$typeUrl === DenomBlockedEvent.typeUrl || typeof o.signer === "string" && typeof o.denom === "string");
  },
  encode(message: DenomBlockedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomBlockedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomBlockedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
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
  fromPartial(object: Partial<DenomBlockedEvent>): DenomBlockedEvent {
    const message = createBaseDenomBlockedEvent();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomBlockedEventAmino): DenomBlockedEvent {
    const message = createBaseDenomBlockedEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomBlockedEvent): DenomBlockedEventAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomBlockedEventAminoMsg): DenomBlockedEvent {
    return DenomBlockedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomBlockedEventProtoMsg): DenomBlockedEvent {
    return DenomBlockedEvent.decode(message.value);
  },
  toProto(message: DenomBlockedEvent): Uint8Array {
    return DenomBlockedEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomBlockedEvent): DenomBlockedEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.DenomBlockedEvent",
      value: DenomBlockedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomUnblockedEvent(): DenomUnblockedEvent {
  return {
    authority: "",
    denom: ""
  };
}
/**
 * DenomUnblockedEvent is emitted when a denom is taken off the blacklist.
 * @name DenomUnblockedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.DenomUnblockedEvent
 */
export const DenomUnblockedEvent = {
  typeUrl: "/bze.guardian.v1.DenomUnblockedEvent",
  is(o: any): o is DenomUnblockedEvent {
    return o && (o.$typeUrl === DenomUnblockedEvent.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomUnblockedEventSDKType {
    return o && (o.$typeUrl === DenomUnblockedEvent.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomUnblockedEventAmino {
    return o && (o.$typeUrl === DenomUnblockedEvent.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  encode(message: DenomUnblockedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomUnblockedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomUnblockedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromPartial(object: Partial<DenomUnblockedEvent>): DenomUnblockedEvent {
    const message = createBaseDenomUnblockedEvent();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomUnblockedEventAmino): DenomUnblockedEvent {
    const message = createBaseDenomUnblockedEvent();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomUnblockedEvent): DenomUnblockedEventAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomUnblockedEventAminoMsg): DenomUnblockedEvent {
    return DenomUnblockedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomUnblockedEventProtoMsg): DenomUnblockedEvent {
    return DenomUnblockedEvent.decode(message.value);
  },
  toProto(message: DenomUnblockedEvent): Uint8Array {
    return DenomUnblockedEvent.encode(message).finish();
  },
  toProtoMsg(message: DenomUnblockedEvent): DenomUnblockedEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.DenomUnblockedEvent",
      value: DenomUnblockedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMessagesDisabledEvent(): MessagesDisabledEvent {
  return {
    signer: "",
    msgTypeUrls: []
  };
}
/**
 * MessagesDisabledEvent is emitted when message types are added to the
 * x/circuit disable list.
 * @name MessagesDisabledEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MessagesDisabledEvent
 */
export const MessagesDisabledEvent = {
  typeUrl: "/bze.guardian.v1.MessagesDisabledEvent",
  is(o: any): o is MessagesDisabledEvent {
    return o && (o.$typeUrl === MessagesDisabledEvent.typeUrl || typeof o.signer === "string" && Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isSDK(o: any): o is MessagesDisabledEventSDKType {
    return o && (o.$typeUrl === MessagesDisabledEvent.typeUrl || typeof o.signer === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  isAmino(o: any): o is MessagesDisabledEventAmino {
    return o && (o.$typeUrl === MessagesDisabledEvent.typeUrl || typeof o.signer === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: MessagesDisabledEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MessagesDisabledEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessagesDisabledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MessagesDisabledEvent>): MessagesDisabledEvent {
    const message = createBaseMessagesDisabledEvent();
    message.signer = object.signer ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MessagesDisabledEventAmino): MessagesDisabledEvent {
    const message = createBaseMessagesDisabledEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: MessagesDisabledEvent): MessagesDisabledEventAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: MessagesDisabledEventAminoMsg): MessagesDisabledEvent {
    return MessagesDisabledEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: MessagesDisabledEventProtoMsg): MessagesDisabledEvent {
    return MessagesDisabledEvent.decode(message.value);
  },
  toProto(message: MessagesDisabledEvent): Uint8Array {
    return MessagesDisabledEvent.encode(message).finish();
  },
  toProtoMsg(message: MessagesDisabledEvent): MessagesDisabledEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MessagesDisabledEvent",
      value: MessagesDisabledEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingDenomsHaltedEvent(): TradingDenomsHaltedEvent {
  return {
    signer: "",
    denoms: []
  };
}
/**
 * TradingDenomsHaltedEvent is emitted once per MsgHaltTradingDenoms. denoms
 * lists the denoms the message halted, without those that were already
 * halted. tradebin's DenomHaltedEvent is emitted for each of them as well.
 * @name TradingDenomsHaltedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.TradingDenomsHaltedEvent
 */
export const TradingDenomsHaltedEvent = {
  typeUrl: "/bze.guardian.v1.TradingDenomsHaltedEvent",
  is(o: any): o is TradingDenomsHaltedEvent {
    return o && (o.$typeUrl === TradingDenomsHaltedEvent.typeUrl || typeof o.signer === "string" && Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isSDK(o: any): o is TradingDenomsHaltedEventSDKType {
    return o && (o.$typeUrl === TradingDenomsHaltedEvent.typeUrl || typeof o.signer === "string" && Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is TradingDenomsHaltedEventAmino {
    return o && (o.$typeUrl === TradingDenomsHaltedEvent.typeUrl || typeof o.signer === "string" && Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: TradingDenomsHaltedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.denoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingDenomsHaltedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingDenomsHaltedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingDenomsHaltedEvent>): TradingDenomsHaltedEvent {
    const message = createBaseTradingDenomsHaltedEvent();
    message.signer = object.signer ?? "";
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TradingDenomsHaltedEventAmino): TradingDenomsHaltedEvent {
    const message = createBaseTradingDenomsHaltedEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: TradingDenomsHaltedEvent): TradingDenomsHaltedEventAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: TradingDenomsHaltedEventAminoMsg): TradingDenomsHaltedEvent {
    return TradingDenomsHaltedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingDenomsHaltedEventProtoMsg): TradingDenomsHaltedEvent {
    return TradingDenomsHaltedEvent.decode(message.value);
  },
  toProto(message: TradingDenomsHaltedEvent): Uint8Array {
    return TradingDenomsHaltedEvent.encode(message).finish();
  },
  toProtoMsg(message: TradingDenomsHaltedEvent): TradingDenomsHaltedEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.TradingDenomsHaltedEvent",
      value: TradingDenomsHaltedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseChainHaltScheduledEvent(): ChainHaltScheduledEvent {
  return {
    signer: "",
    name: "",
    height: BigInt(0),
    reason: ""
  };
}
/**
 * ChainHaltScheduledEvent is emitted when a halt plan is scheduled.
 * @name ChainHaltScheduledEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChainHaltScheduledEvent
 */
export const ChainHaltScheduledEvent = {
  typeUrl: "/bze.guardian.v1.ChainHaltScheduledEvent",
  is(o: any): o is ChainHaltScheduledEvent {
    return o && (o.$typeUrl === ChainHaltScheduledEvent.typeUrl || typeof o.signer === "string" && typeof o.name === "string" && typeof o.height === "bigint" && typeof o.reason === "string");
  },
  isSDK(o: any): o is ChainHaltScheduledEventSDKType {
    return o && (o.$typeUrl === ChainHaltScheduledEvent.typeUrl || typeof o.signer === "string" && typeof o.name === "string" && typeof o.height === "bigint" && typeof o.reason === "string");
  },
  isAmino(o: any): o is ChainHaltScheduledEventAmino {
    return o && (o.$typeUrl === ChainHaltScheduledEvent.typeUrl || typeof o.signer === "string" && typeof o.name === "string" && typeof o.height === "bigint" && typeof o.reason === "string");
  },
  encode(message: ChainHaltScheduledEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainHaltScheduledEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainHaltScheduledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ChainHaltScheduledEvent>): ChainHaltScheduledEvent {
    const message = createBaseChainHaltScheduledEvent();
    message.signer = object.signer ?? "";
    message.name = object.name ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: ChainHaltScheduledEventAmino): ChainHaltScheduledEvent {
    const message = createBaseChainHaltScheduledEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: ChainHaltScheduledEvent): ChainHaltScheduledEventAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.name = message.name === "" ? undefined : message.name;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: ChainHaltScheduledEventAminoMsg): ChainHaltScheduledEvent {
    return ChainHaltScheduledEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainHaltScheduledEventProtoMsg): ChainHaltScheduledEvent {
    return ChainHaltScheduledEvent.decode(message.value);
  },
  toProto(message: ChainHaltScheduledEvent): Uint8Array {
    return ChainHaltScheduledEvent.encode(message).finish();
  },
  toProtoMsg(message: ChainHaltScheduledEvent): ChainHaltScheduledEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.ChainHaltScheduledEvent",
      value: ChainHaltScheduledEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAutomationPausedEvent(): AutomationPausedEvent {
  return {
    signer: ""
  };
}
/**
 * AutomationPausedEvent is emitted when the protocol automation is paused.
 * @name AutomationPausedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationPausedEvent
 */
export const AutomationPausedEvent = {
  typeUrl: "/bze.guardian.v1.AutomationPausedEvent",
  is(o: any): o is AutomationPausedEvent {
    return o && (o.$typeUrl === AutomationPausedEvent.typeUrl || typeof o.signer === "string");
  },
  isSDK(o: any): o is AutomationPausedEventSDKType {
    return o && (o.$typeUrl === AutomationPausedEvent.typeUrl || typeof o.signer === "string");
  },
  isAmino(o: any): o is AutomationPausedEventAmino {
    return o && (o.$typeUrl === AutomationPausedEvent.typeUrl || typeof o.signer === "string");
  },
  encode(message: AutomationPausedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AutomationPausedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutomationPausedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AutomationPausedEvent>): AutomationPausedEvent {
    const message = createBaseAutomationPausedEvent();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: AutomationPausedEventAmino): AutomationPausedEvent {
    const message = createBaseAutomationPausedEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: AutomationPausedEvent): AutomationPausedEventAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: AutomationPausedEventAminoMsg): AutomationPausedEvent {
    return AutomationPausedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: AutomationPausedEventProtoMsg): AutomationPausedEvent {
    return AutomationPausedEvent.decode(message.value);
  },
  toProto(message: AutomationPausedEvent): Uint8Array {
    return AutomationPausedEvent.encode(message).finish();
  },
  toProtoMsg(message: AutomationPausedEvent): AutomationPausedEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.AutomationPausedEvent",
      value: AutomationPausedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAutomationResumedEvent(): AutomationResumedEvent {
  return {
    authority: ""
  };
}
/**
 * AutomationResumedEvent is emitted when governance resumes the protocol
 * automation.
 * @name AutomationResumedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.AutomationResumedEvent
 */
export const AutomationResumedEvent = {
  typeUrl: "/bze.guardian.v1.AutomationResumedEvent",
  is(o: any): o is AutomationResumedEvent {
    return o && (o.$typeUrl === AutomationResumedEvent.typeUrl || typeof o.authority === "string");
  },
  isSDK(o: any): o is AutomationResumedEventSDKType {
    return o && (o.$typeUrl === AutomationResumedEvent.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is AutomationResumedEventAmino {
    return o && (o.$typeUrl === AutomationResumedEvent.typeUrl || typeof o.authority === "string");
  },
  encode(message: AutomationResumedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AutomationResumedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutomationResumedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AutomationResumedEvent>): AutomationResumedEvent {
    const message = createBaseAutomationResumedEvent();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: AutomationResumedEventAmino): AutomationResumedEvent {
    const message = createBaseAutomationResumedEvent();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: AutomationResumedEvent): AutomationResumedEventAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: AutomationResumedEventAminoMsg): AutomationResumedEvent {
    return AutomationResumedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: AutomationResumedEventProtoMsg): AutomationResumedEvent {
    return AutomationResumedEvent.decode(message.value);
  },
  toProto(message: AutomationResumedEvent): Uint8Array {
    return AutomationResumedEvent.encode(message).finish();
  },
  toProtoMsg(message: AutomationResumedEvent): AutomationResumedEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.AutomationResumedEvent",
      value: AutomationResumedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseChannelClosedEvent(): ChannelClosedEvent {
  return {
    signer: "",
    channelId: ""
  };
}
/**
 * ChannelClosedEvent is emitted when a transfer channel is closed.
 * @name ChannelClosedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelClosedEvent
 */
export const ChannelClosedEvent = {
  typeUrl: "/bze.guardian.v1.ChannelClosedEvent",
  is(o: any): o is ChannelClosedEvent {
    return o && (o.$typeUrl === ChannelClosedEvent.typeUrl || typeof o.signer === "string" && typeof o.channelId === "string");
  },
  isSDK(o: any): o is ChannelClosedEventSDKType {
    return o && (o.$typeUrl === ChannelClosedEvent.typeUrl || typeof o.signer === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is ChannelClosedEventAmino {
    return o && (o.$typeUrl === ChannelClosedEvent.typeUrl || typeof o.signer === "string" && typeof o.channel_id === "string");
  },
  encode(message: ChannelClosedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelClosedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelClosedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ChannelClosedEvent>): ChannelClosedEvent {
    const message = createBaseChannelClosedEvent();
    message.signer = object.signer ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: ChannelClosedEventAmino): ChannelClosedEvent {
    const message = createBaseChannelClosedEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: ChannelClosedEvent): ChannelClosedEventAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: ChannelClosedEventAminoMsg): ChannelClosedEvent {
    return ChannelClosedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ChannelClosedEventProtoMsg): ChannelClosedEvent {
    return ChannelClosedEvent.decode(message.value);
  },
  toProto(message: ChannelClosedEvent): Uint8Array {
    return ChannelClosedEvent.encode(message).finish();
  },
  toProtoMsg(message: ChannelClosedEvent): ChannelClosedEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.ChannelClosedEvent",
      value: ChannelClosedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseChannelReopenedEvent(): ChannelReopenedEvent {
  return {
    authority: "",
    channelId: ""
  };
}
/**
 * ChannelReopenedEvent is emitted when a closed transfer channel is reopened.
 * @name ChannelReopenedEvent
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.ChannelReopenedEvent
 */
export const ChannelReopenedEvent = {
  typeUrl: "/bze.guardian.v1.ChannelReopenedEvent",
  is(o: any): o is ChannelReopenedEvent {
    return o && (o.$typeUrl === ChannelReopenedEvent.typeUrl || typeof o.authority === "string" && typeof o.channelId === "string");
  },
  isSDK(o: any): o is ChannelReopenedEventSDKType {
    return o && (o.$typeUrl === ChannelReopenedEvent.typeUrl || typeof o.authority === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is ChannelReopenedEventAmino {
    return o && (o.$typeUrl === ChannelReopenedEvent.typeUrl || typeof o.authority === "string" && typeof o.channel_id === "string");
  },
  encode(message: ChannelReopenedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelReopenedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelReopenedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ChannelReopenedEvent>): ChannelReopenedEvent {
    const message = createBaseChannelReopenedEvent();
    message.authority = object.authority ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: ChannelReopenedEventAmino): ChannelReopenedEvent {
    const message = createBaseChannelReopenedEvent();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: ChannelReopenedEvent): ChannelReopenedEventAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: ChannelReopenedEventAminoMsg): ChannelReopenedEvent {
    return ChannelReopenedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ChannelReopenedEventProtoMsg): ChannelReopenedEvent {
    return ChannelReopenedEvent.decode(message.value);
  },
  toProto(message: ChannelReopenedEvent): Uint8Array {
    return ChannelReopenedEvent.encode(message).finish();
  },
  toProtoMsg(message: ChannelReopenedEvent): ChannelReopenedEventProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.ChannelReopenedEvent",
      value: ChannelReopenedEvent.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};