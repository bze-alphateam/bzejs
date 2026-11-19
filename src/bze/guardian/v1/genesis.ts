//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * GenesisState defines the guardian module's genesis state.
 * @name GenesisState
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * automation_paused keeps the protocol automation pause across a genesis
   * export and import: only governance resumes it.
   */
  automationPaused: boolean;
  /**
   * closed_channels are the transfer channels whose ICS-20 transfers are refused.
   */
  closedChannels: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bze.guardian.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the guardian module's genesis state.
 * @name GenesisStateAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * automation_paused keeps the protocol automation pause across a genesis
   * export and import: only governance resumes it.
   */
  automation_paused?: boolean;
  /**
   * closed_channels are the transfer channels whose ICS-20 transfers are refused.
   */
  closed_channels?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/bze.guardian.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the guardian module's genesis state.
 * @name GenesisStateSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.GenesisState
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  automation_paused: boolean;
  closed_channels: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    automationPaused: false,
    closedChannels: []
  };
}
/**
 * GenesisState defines the guardian module's genesis state.
 * @name GenesisState
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/bze.guardian.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.automationPaused === "boolean" && Array.isArray(o.closedChannels) && (!o.closedChannels.length || typeof o.closedChannels[0] === "string"));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && typeof o.automation_paused === "boolean" && Array.isArray(o.closed_channels) && (!o.closed_channels.length || typeof o.closed_channels[0] === "string"));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.automation_paused === "boolean" && Array.isArray(o.closed_channels) && (!o.closed_channels.length || typeof o.closed_channels[0] === "string"));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.automationPaused === true) {
      writer.uint32(16).bool(message.automationPaused);
    }
    for (const v of message.closedChannels) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.automationPaused = reader.bool();
          break;
        case 4:
          message.closedChannels.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.automationPaused = object.automationPaused ?? false;
    message.closedChannels = object.closedChannels?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.automation_paused !== undefined && object.automation_paused !== null) {
      message.automationPaused = object.automation_paused;
    }
    message.closedChannels = object.closed_channels?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.automation_paused = message.automationPaused === false ? undefined : message.automationPaused;
    if (message.closedChannels) {
      obj.closed_channels = message.closedChannels.map(e => e);
    } else {
      obj.closed_channels = message.closedChannels;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};