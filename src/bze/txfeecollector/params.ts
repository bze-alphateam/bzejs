//@ts-nocheck
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * BlockedIbcTransfer identifies an inbound ICS-20 transfer that this chain refuses
 * to accept: a base denomination arriving on one of our channels. Only fresh mints
 * are refused - vouchers of BZE-origin tokens coming back home are never affected,
 * and nothing here touches outgoing transfers or their refunds.
 * @name BlockedIbcTransfer
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcTransfer
 */
export interface BlockedIbcTransfer {
  /**
   * channel_id is the channel on this chain the packet is received on
   * (the packet's destination channel), for example "channel-3".
   */
  channelId: string;
  /**
   * base_denom is the denomination carried by the packet as sent by the
   * counterparty chain, for example "uusdc".
   */
  baseDenom: string;
}
export interface BlockedIbcTransferProtoMsg {
  typeUrl: "/bze.txfeecollector.BlockedIbcTransfer";
  value: Uint8Array;
}
/**
 * BlockedIbcTransfer identifies an inbound ICS-20 transfer that this chain refuses
 * to accept: a base denomination arriving on one of our channels. Only fresh mints
 * are refused - vouchers of BZE-origin tokens coming back home are never affected,
 * and nothing here touches outgoing transfers or their refunds.
 * @name BlockedIbcTransferAmino
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcTransfer
 */
export interface BlockedIbcTransferAmino {
  /**
   * channel_id is the channel on this chain the packet is received on
   * (the packet's destination channel), for example "channel-3".
   */
  channel_id?: string;
  /**
   * base_denom is the denomination carried by the packet as sent by the
   * counterparty chain, for example "uusdc".
   */
  base_denom?: string;
}
export interface BlockedIbcTransferAminoMsg {
  type: "/bze.txfeecollector.BlockedIbcTransfer";
  value: BlockedIbcTransferAmino;
}
/**
 * BlockedIbcTransfer identifies an inbound ICS-20 transfer that this chain refuses
 * to accept: a base denomination arriving on one of our channels. Only fresh mints
 * are refused - vouchers of BZE-origin tokens coming back home are never affected,
 * and nothing here touches outgoing transfers or their refunds.
 * @name BlockedIbcTransferSDKType
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcTransfer
 */
export interface BlockedIbcTransferSDKType {
  channel_id: string;
  base_denom: string;
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export interface Params {
  validatorMinGasFee: DecCoin;
  maxBalanceIterations: bigint;
  /**
   * BlockedIbcInbound lists the (channel, base denom) pairs whose inbound ICS-20
   * packets are answered with an error acknowledgement instead of being minted.
   * Empty by default; edited by governance through MsgUpdateParams.
   */
  blockedIbcInbound: BlockedIbcTransfer[];
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.txfeecollector.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export interface ParamsAmino {
  ValidatorMinGasFee?: DecCoinAmino;
  MaxBalanceIterations?: string;
  /**
   * BlockedIbcInbound lists the (channel, base denom) pairs whose inbound ICS-20
   * packets are answered with an error acknowledgement instead of being minted.
   * Empty by default; edited by governance through MsgUpdateParams.
   */
  BlockedIbcInbound?: BlockedIbcTransferAmino[];
}
export interface ParamsAminoMsg {
  type: "bze/x/txfeecollector/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsSDKType
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export interface ParamsSDKType {
  ValidatorMinGasFee: DecCoinSDKType;
  MaxBalanceIterations: bigint;
  BlockedIbcInbound: BlockedIbcTransferSDKType[];
}
function createBaseBlockedIbcTransfer(): BlockedIbcTransfer {
  return {
    channelId: "",
    baseDenom: ""
  };
}
/**
 * BlockedIbcTransfer identifies an inbound ICS-20 transfer that this chain refuses
 * to accept: a base denomination arriving on one of our channels. Only fresh mints
 * are refused - vouchers of BZE-origin tokens coming back home are never affected,
 * and nothing here touches outgoing transfers or their refunds.
 * @name BlockedIbcTransfer
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.BlockedIbcTransfer
 */
export const BlockedIbcTransfer = {
  typeUrl: "/bze.txfeecollector.BlockedIbcTransfer",
  is(o: any): o is BlockedIbcTransfer {
    return o && (o.$typeUrl === BlockedIbcTransfer.typeUrl || typeof o.channelId === "string" && typeof o.baseDenom === "string");
  },
  isSDK(o: any): o is BlockedIbcTransferSDKType {
    return o && (o.$typeUrl === BlockedIbcTransfer.typeUrl || typeof o.channel_id === "string" && typeof o.base_denom === "string");
  },
  isAmino(o: any): o is BlockedIbcTransferAmino {
    return o && (o.$typeUrl === BlockedIbcTransfer.typeUrl || typeof o.channel_id === "string" && typeof o.base_denom === "string");
  },
  encode(message: BlockedIbcTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockedIbcTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockedIbcTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockedIbcTransfer>): BlockedIbcTransfer {
    const message = createBaseBlockedIbcTransfer();
    message.channelId = object.channelId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: BlockedIbcTransferAmino): BlockedIbcTransfer {
    const message = createBaseBlockedIbcTransfer();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    return message;
  },
  toAmino(message: BlockedIbcTransfer): BlockedIbcTransferAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    return obj;
  },
  fromAminoMsg(object: BlockedIbcTransferAminoMsg): BlockedIbcTransfer {
    return BlockedIbcTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockedIbcTransferProtoMsg): BlockedIbcTransfer {
    return BlockedIbcTransfer.decode(message.value);
  },
  toProto(message: BlockedIbcTransfer): Uint8Array {
    return BlockedIbcTransfer.encode(message).finish();
  },
  toProtoMsg(message: BlockedIbcTransfer): BlockedIbcTransferProtoMsg {
    return {
      typeUrl: "/bze.txfeecollector.BlockedIbcTransfer",
      value: BlockedIbcTransfer.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    validatorMinGasFee: DecCoin.fromPartial({}),
    maxBalanceIterations: BigInt(0),
    blockedIbcInbound: []
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.txfeecollector
 * @see proto type: bze.txfeecollector.Params
 */
export const Params = {
  typeUrl: "/bze.txfeecollector.Params",
  aminoType: "bze/x/txfeecollector/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || DecCoin.is(o.validatorMinGasFee) && typeof o.maxBalanceIterations === "bigint" && Array.isArray(o.blockedIbcInbound) && (!o.blockedIbcInbound.length || BlockedIbcTransfer.is(o.blockedIbcInbound[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || DecCoin.isSDK(o.ValidatorMinGasFee) && typeof o.MaxBalanceIterations === "bigint" && Array.isArray(o.BlockedIbcInbound) && (!o.BlockedIbcInbound.length || BlockedIbcTransfer.isSDK(o.BlockedIbcInbound[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || DecCoin.isAmino(o.ValidatorMinGasFee) && typeof o.MaxBalanceIterations === "bigint" && Array.isArray(o.BlockedIbcInbound) && (!o.BlockedIbcInbound.length || BlockedIbcTransfer.isAmino(o.BlockedIbcInbound[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorMinGasFee !== undefined) {
      DecCoin.encode(message.validatorMinGasFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxBalanceIterations !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxBalanceIterations);
    }
    for (const v of message.blockedIbcInbound) {
      BlockedIbcTransfer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorMinGasFee = DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxBalanceIterations = reader.uint64();
          break;
        case 3:
          message.blockedIbcInbound.push(BlockedIbcTransfer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.validatorMinGasFee = object.validatorMinGasFee !== undefined && object.validatorMinGasFee !== null ? DecCoin.fromPartial(object.validatorMinGasFee) : undefined;
    message.maxBalanceIterations = object.maxBalanceIterations !== undefined && object.maxBalanceIterations !== null ? BigInt(object.maxBalanceIterations.toString()) : BigInt(0);
    message.blockedIbcInbound = object.blockedIbcInbound?.map(e => BlockedIbcTransfer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.ValidatorMinGasFee !== undefined && object.ValidatorMinGasFee !== null) {
      message.validatorMinGasFee = DecCoin.fromAmino(object.ValidatorMinGasFee);
    }
    if (object.MaxBalanceIterations !== undefined && object.MaxBalanceIterations !== null) {
      message.maxBalanceIterations = BigInt(object.MaxBalanceIterations);
    }
    message.blockedIbcInbound = object.BlockedIbcInbound?.map(e => BlockedIbcTransfer.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ValidatorMinGasFee = message.validatorMinGasFee ? DecCoin.toAmino(message.validatorMinGasFee) : undefined;
    obj.MaxBalanceIterations = message.maxBalanceIterations !== BigInt(0) ? message.maxBalanceIterations?.toString() : undefined;
    if (message.blockedIbcInbound) {
      obj.BlockedIbcInbound = message.blockedIbcInbound.map(e => e ? BlockedIbcTransfer.toAmino(e) : undefined);
    } else {
      obj.BlockedIbcInbound = message.blockedIbcInbound;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/txfeecollector/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bze.txfeecollector.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    DecCoin.registerTypeUrl();
    BlockedIbcTransfer.registerTypeUrl();
  }
};