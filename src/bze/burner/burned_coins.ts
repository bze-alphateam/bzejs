//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * @name BurnedCoins
 * @package bze.burner
 * @see proto type: bze.burner.BurnedCoins
 */
export interface BurnedCoins {
  burned: string;
  height: string;
}
export interface BurnedCoinsProtoMsg {
  typeUrl: "/bze.burner.BurnedCoins";
  value: Uint8Array;
}
/**
 * @name BurnedCoinsAmino
 * @package bze.burner
 * @see proto type: bze.burner.BurnedCoins
 */
export interface BurnedCoinsAmino {
  burned?: string;
  height?: string;
}
export interface BurnedCoinsAminoMsg {
  type: "/bze.burner.BurnedCoins";
  value: BurnedCoinsAmino;
}
/**
 * @name BurnedCoinsSDKType
 * @package bze.burner
 * @see proto type: bze.burner.BurnedCoins
 */
export interface BurnedCoinsSDKType {
  burned: string;
  height: string;
}
/**
 * @name PeriodicBurnQueue
 * @package bze.burner
 * @see proto type: bze.burner.PeriodicBurnQueue
 */
export interface PeriodicBurnQueue {
  pending: boolean;
}
export interface PeriodicBurnQueueProtoMsg {
  typeUrl: "/bze.burner.PeriodicBurnQueue";
  value: Uint8Array;
}
/**
 * @name PeriodicBurnQueueAmino
 * @package bze.burner
 * @see proto type: bze.burner.PeriodicBurnQueue
 */
export interface PeriodicBurnQueueAmino {
  pending?: boolean;
}
export interface PeriodicBurnQueueAminoMsg {
  type: "/bze.burner.PeriodicBurnQueue";
  value: PeriodicBurnQueueAmino;
}
/**
 * @name PeriodicBurnQueueSDKType
 * @package bze.burner
 * @see proto type: bze.burner.PeriodicBurnQueue
 */
export interface PeriodicBurnQueueSDKType {
  pending: boolean;
}
/**
 * @name RaffleCleanupQueue
 * @package bze.burner
 * @see proto type: bze.burner.RaffleCleanupQueue
 */
export interface RaffleCleanupQueue {
  pendingEpochs: bigint[];
}
export interface RaffleCleanupQueueProtoMsg {
  typeUrl: "/bze.burner.RaffleCleanupQueue";
  value: Uint8Array;
}
/**
 * @name RaffleCleanupQueueAmino
 * @package bze.burner
 * @see proto type: bze.burner.RaffleCleanupQueue
 */
export interface RaffleCleanupQueueAmino {
  pending_epochs?: string[];
}
export interface RaffleCleanupQueueAminoMsg {
  type: "/bze.burner.RaffleCleanupQueue";
  value: RaffleCleanupQueueAmino;
}
/**
 * @name RaffleCleanupQueueSDKType
 * @package bze.burner
 * @see proto type: bze.burner.RaffleCleanupQueue
 */
export interface RaffleCleanupQueueSDKType {
  pending_epochs: bigint[];
}
function createBaseBurnedCoins(): BurnedCoins {
  return {
    burned: "",
    height: ""
  };
}
/**
 * @name BurnedCoins
 * @package bze.burner
 * @see proto type: bze.burner.BurnedCoins
 */
export const BurnedCoins = {
  typeUrl: "/bze.burner.BurnedCoins",
  is(o: any): o is BurnedCoins {
    return o && (o.$typeUrl === BurnedCoins.typeUrl || typeof o.burned === "string" && typeof o.height === "string");
  },
  isSDK(o: any): o is BurnedCoinsSDKType {
    return o && (o.$typeUrl === BurnedCoins.typeUrl || typeof o.burned === "string" && typeof o.height === "string");
  },
  isAmino(o: any): o is BurnedCoinsAmino {
    return o && (o.$typeUrl === BurnedCoins.typeUrl || typeof o.burned === "string" && typeof o.height === "string");
  },
  encode(message: BurnedCoins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burned !== "") {
      writer.uint32(10).string(message.burned);
    }
    if (message.height !== "") {
      writer.uint32(18).string(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnedCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnedCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burned = reader.string();
          break;
        case 2:
          message.height = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BurnedCoins>): BurnedCoins {
    const message = createBaseBurnedCoins();
    message.burned = object.burned ?? "";
    message.height = object.height ?? "";
    return message;
  },
  fromAmino(object: BurnedCoinsAmino): BurnedCoins {
    const message = createBaseBurnedCoins();
    if (object.burned !== undefined && object.burned !== null) {
      message.burned = object.burned;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    return message;
  },
  toAmino(message: BurnedCoins): BurnedCoinsAmino {
    const obj: any = {};
    obj.burned = message.burned === "" ? undefined : message.burned;
    obj.height = message.height === "" ? undefined : message.height;
    return obj;
  },
  fromAminoMsg(object: BurnedCoinsAminoMsg): BurnedCoins {
    return BurnedCoins.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnedCoinsProtoMsg): BurnedCoins {
    return BurnedCoins.decode(message.value);
  },
  toProto(message: BurnedCoins): Uint8Array {
    return BurnedCoins.encode(message).finish();
  },
  toProtoMsg(message: BurnedCoins): BurnedCoinsProtoMsg {
    return {
      typeUrl: "/bze.burner.BurnedCoins",
      value: BurnedCoins.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePeriodicBurnQueue(): PeriodicBurnQueue {
  return {
    pending: false
  };
}
/**
 * @name PeriodicBurnQueue
 * @package bze.burner
 * @see proto type: bze.burner.PeriodicBurnQueue
 */
export const PeriodicBurnQueue = {
  typeUrl: "/bze.burner.PeriodicBurnQueue",
  is(o: any): o is PeriodicBurnQueue {
    return o && (o.$typeUrl === PeriodicBurnQueue.typeUrl || typeof o.pending === "boolean");
  },
  isSDK(o: any): o is PeriodicBurnQueueSDKType {
    return o && (o.$typeUrl === PeriodicBurnQueue.typeUrl || typeof o.pending === "boolean");
  },
  isAmino(o: any): o is PeriodicBurnQueueAmino {
    return o && (o.$typeUrl === PeriodicBurnQueue.typeUrl || typeof o.pending === "boolean");
  },
  encode(message: PeriodicBurnQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pending === true) {
      writer.uint32(8).bool(message.pending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodicBurnQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicBurnQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PeriodicBurnQueue>): PeriodicBurnQueue {
    const message = createBasePeriodicBurnQueue();
    message.pending = object.pending ?? false;
    return message;
  },
  fromAmino(object: PeriodicBurnQueueAmino): PeriodicBurnQueue {
    const message = createBasePeriodicBurnQueue();
    if (object.pending !== undefined && object.pending !== null) {
      message.pending = object.pending;
    }
    return message;
  },
  toAmino(message: PeriodicBurnQueue): PeriodicBurnQueueAmino {
    const obj: any = {};
    obj.pending = message.pending === false ? undefined : message.pending;
    return obj;
  },
  fromAminoMsg(object: PeriodicBurnQueueAminoMsg): PeriodicBurnQueue {
    return PeriodicBurnQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: PeriodicBurnQueueProtoMsg): PeriodicBurnQueue {
    return PeriodicBurnQueue.decode(message.value);
  },
  toProto(message: PeriodicBurnQueue): Uint8Array {
    return PeriodicBurnQueue.encode(message).finish();
  },
  toProtoMsg(message: PeriodicBurnQueue): PeriodicBurnQueueProtoMsg {
    return {
      typeUrl: "/bze.burner.PeriodicBurnQueue",
      value: PeriodicBurnQueue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRaffleCleanupQueue(): RaffleCleanupQueue {
  return {
    pendingEpochs: []
  };
}
/**
 * @name RaffleCleanupQueue
 * @package bze.burner
 * @see proto type: bze.burner.RaffleCleanupQueue
 */
export const RaffleCleanupQueue = {
  typeUrl: "/bze.burner.RaffleCleanupQueue",
  is(o: any): o is RaffleCleanupQueue {
    return o && (o.$typeUrl === RaffleCleanupQueue.typeUrl || Array.isArray(o.pendingEpochs) && (!o.pendingEpochs.length || typeof o.pendingEpochs[0] === "bigint"));
  },
  isSDK(o: any): o is RaffleCleanupQueueSDKType {
    return o && (o.$typeUrl === RaffleCleanupQueue.typeUrl || Array.isArray(o.pending_epochs) && (!o.pending_epochs.length || typeof o.pending_epochs[0] === "bigint"));
  },
  isAmino(o: any): o is RaffleCleanupQueueAmino {
    return o && (o.$typeUrl === RaffleCleanupQueue.typeUrl || Array.isArray(o.pending_epochs) && (!o.pending_epochs.length || typeof o.pending_epochs[0] === "bigint"));
  },
  encode(message: RaffleCleanupQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.pendingEpochs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RaffleCleanupQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaffleCleanupQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pendingEpochs.push(reader.uint64());
            }
          } else {
            message.pendingEpochs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RaffleCleanupQueue>): RaffleCleanupQueue {
    const message = createBaseRaffleCleanupQueue();
    message.pendingEpochs = object.pendingEpochs?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: RaffleCleanupQueueAmino): RaffleCleanupQueue {
    const message = createBaseRaffleCleanupQueue();
    message.pendingEpochs = object.pending_epochs?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: RaffleCleanupQueue): RaffleCleanupQueueAmino {
    const obj: any = {};
    if (message.pendingEpochs) {
      obj.pending_epochs = message.pendingEpochs.map(e => e.toString());
    } else {
      obj.pending_epochs = message.pendingEpochs;
    }
    return obj;
  },
  fromAminoMsg(object: RaffleCleanupQueueAminoMsg): RaffleCleanupQueue {
    return RaffleCleanupQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: RaffleCleanupQueueProtoMsg): RaffleCleanupQueue {
    return RaffleCleanupQueue.decode(message.value);
  },
  toProto(message: RaffleCleanupQueue): Uint8Array {
    return RaffleCleanupQueue.encode(message).finish();
  },
  toProtoMsg(message: RaffleCleanupQueue): RaffleCleanupQueueProtoMsg {
    return {
      typeUrl: "/bze.burner.RaffleCleanupQueue",
      value: RaffleCleanupQueue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};