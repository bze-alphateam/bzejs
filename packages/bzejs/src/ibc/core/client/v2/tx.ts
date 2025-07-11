//@ts-nocheck
import { Config, ConfigAmino, ConfigSDKType } from "./config";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** MsgRegisterCounterparty defines a message to register a counterparty on a client */
export interface MsgRegisterCounterparty {
  /** client identifier */
  clientId: string;
  /** counterparty merkle prefix */
  counterpartyMerklePrefix: Uint8Array[];
  /** counterparty client identifier */
  counterpartyClientId: string;
  /** signer address */
  signer: string;
}
export interface MsgRegisterCounterpartyProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty";
  value: Uint8Array;
}
/**
 * MsgRegisterCounterparty defines a message to register a counterparty on a client
 * @name MsgRegisterCounterpartyAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.MsgRegisterCounterparty
 */
export interface MsgRegisterCounterpartyAmino {
  /**
   * client identifier
   */
  client_id?: string;
  /**
   * counterparty merkle prefix
   */
  counterparty_merkle_prefix?: string[];
  /**
   * counterparty client identifier
   */
  counterparty_client_id?: string;
  /**
   * signer address
   */
  signer?: string;
}
export interface MsgRegisterCounterpartyAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterparty";
  value: MsgRegisterCounterpartyAmino;
}
/** MsgRegisterCounterparty defines a message to register a counterparty on a client */
export interface MsgRegisterCounterpartySDKType {
  client_id: string;
  counterparty_merkle_prefix: Uint8Array[];
  counterparty_client_id: string;
  signer: string;
}
/** MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type. */
export interface MsgRegisterCounterpartyResponse {}
export interface MsgRegisterCounterpartyResponseProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterpartyResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type.
 * @name MsgRegisterCounterpartyResponseAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.MsgRegisterCounterpartyResponse
 */
export interface MsgRegisterCounterpartyResponseAmino {}
export interface MsgRegisterCounterpartyResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyResponse";
  value: MsgRegisterCounterpartyResponseAmino;
}
/** MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type. */
export interface MsgRegisterCounterpartyResponseSDKType {}
/** MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client */
export interface MsgUpdateClientConfig {
  /** client identifier */
  clientId: string;
  /**
   * allowed relayers
   * 
   * NOTE: All fields in the config must be supplied.
   */
  config: Config;
  /** signer address */
  signer: string;
}
export interface MsgUpdateClientConfigProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig";
  value: Uint8Array;
}
/**
 * MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client
 * @name MsgUpdateClientConfigAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.MsgUpdateClientConfig
 */
export interface MsgUpdateClientConfigAmino {
  /**
   * client identifier
   */
  client_id?: string;
  /**
   * allowed relayers
   * 
   * NOTE: All fields in the config must be supplied.
   */
  config?: ConfigAmino;
  /**
   * signer address
   */
  signer?: string;
}
export interface MsgUpdateClientConfigAminoMsg {
  type: "cosmos-sdk/MsgUpdateClientConfig";
  value: MsgUpdateClientConfigAmino;
}
/** MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client */
export interface MsgUpdateClientConfigSDKType {
  client_id: string;
  config: ConfigSDKType;
  signer: string;
}
/** MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type. */
export interface MsgUpdateClientConfigResponse {}
export interface MsgUpdateClientConfigResponseProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfigResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type.
 * @name MsgUpdateClientConfigResponseAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.MsgUpdateClientConfigResponse
 */
export interface MsgUpdateClientConfigResponseAmino {}
export interface MsgUpdateClientConfigResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateClientConfigResponse";
  value: MsgUpdateClientConfigResponseAmino;
}
/** MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type. */
export interface MsgUpdateClientConfigResponseSDKType {}
function createBaseMsgRegisterCounterparty(): MsgRegisterCounterparty {
  return {
    clientId: "",
    counterpartyMerklePrefix: [],
    counterpartyClientId: "",
    signer: ""
  };
}
export const MsgRegisterCounterparty = {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
  encode(message: MsgRegisterCounterparty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.counterpartyMerklePrefix) {
      writer.uint32(18).bytes(v!);
    }
    if (message.counterpartyClientId !== "") {
      writer.uint32(26).string(message.counterpartyClientId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterparty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterpartyMerklePrefix.push(reader.bytes());
          break;
        case 3:
          message.counterpartyClientId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterCounterparty>): MsgRegisterCounterparty {
    const message = createBaseMsgRegisterCounterparty();
    message.clientId = object.clientId ?? "";
    message.counterpartyMerklePrefix = object.counterpartyMerklePrefix?.map(e => e) || [];
    message.counterpartyClientId = object.counterpartyClientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCounterpartyAmino): MsgRegisterCounterparty {
    const message = createBaseMsgRegisterCounterparty();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.counterpartyMerklePrefix = object.counterparty_merkle_prefix?.map(e => bytesFromBase64(e)) || [];
    if (object.counterparty_client_id !== undefined && object.counterparty_client_id !== null) {
      message.counterpartyClientId = object.counterparty_client_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRegisterCounterparty): MsgRegisterCounterpartyAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.counterpartyMerklePrefix) {
      obj.counterparty_merkle_prefix = message.counterpartyMerklePrefix.map(e => base64FromBytes(e));
    } else {
      obj.counterparty_merkle_prefix = message.counterpartyMerklePrefix;
    }
    obj.counterparty_client_id = message.counterpartyClientId === "" ? undefined : message.counterpartyClientId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyAminoMsg): MsgRegisterCounterparty {
    return MsgRegisterCounterparty.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterparty): MsgRegisterCounterpartyAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterparty",
      value: MsgRegisterCounterparty.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyProtoMsg): MsgRegisterCounterparty {
    return MsgRegisterCounterparty.decode(message.value);
  },
  toProto(message: MsgRegisterCounterparty): Uint8Array {
    return MsgRegisterCounterparty.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterparty): MsgRegisterCounterpartyProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
      value: MsgRegisterCounterparty.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterCounterpartyResponse(): MsgRegisterCounterpartyResponse {
  return {};
}
export const MsgRegisterCounterpartyResponse = {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterpartyResponse",
  encode(_: MsgRegisterCounterpartyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyResponse();
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
  fromPartial(_: Partial<MsgRegisterCounterpartyResponse>): MsgRegisterCounterpartyResponse {
    const message = createBaseMsgRegisterCounterpartyResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCounterpartyResponseAmino): MsgRegisterCounterpartyResponse {
    const message = createBaseMsgRegisterCounterpartyResponse();
    return message;
  },
  toAmino(_: MsgRegisterCounterpartyResponse): MsgRegisterCounterpartyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyResponseAminoMsg): MsgRegisterCounterpartyResponse {
    return MsgRegisterCounterpartyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyResponse): MsgRegisterCounterpartyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyResponse",
      value: MsgRegisterCounterpartyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyResponseProtoMsg): MsgRegisterCounterpartyResponse {
    return MsgRegisterCounterpartyResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyResponse): Uint8Array {
    return MsgRegisterCounterpartyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyResponse): MsgRegisterCounterpartyResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgRegisterCounterpartyResponse",
      value: MsgRegisterCounterpartyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClientConfig(): MsgUpdateClientConfig {
  return {
    clientId: "",
    config: Config.fromPartial({}),
    signer: ""
  };
}
export const MsgUpdateClientConfig = {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
  encode(message: MsgUpdateClientConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.config = Config.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateClientConfig>): MsgUpdateClientConfig {
    const message = createBaseMsgUpdateClientConfig();
    message.clientId = object.clientId ?? "";
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClientConfigAmino): MsgUpdateClientConfig {
    const message = createBaseMsgUpdateClientConfig();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromAmino(object.config);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpdateClientConfig): MsgUpdateClientConfigAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientConfigAminoMsg): MsgUpdateClientConfig {
    return MsgUpdateClientConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientConfig): MsgUpdateClientConfigAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientConfig",
      value: MsgUpdateClientConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientConfigProtoMsg): MsgUpdateClientConfig {
    return MsgUpdateClientConfig.decode(message.value);
  },
  toProto(message: MsgUpdateClientConfig): Uint8Array {
    return MsgUpdateClientConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientConfig): MsgUpdateClientConfigProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
      value: MsgUpdateClientConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClientConfigResponse(): MsgUpdateClientConfigResponse {
  return {};
}
export const MsgUpdateClientConfigResponse = {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfigResponse",
  encode(_: MsgUpdateClientConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientConfigResponse();
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
  fromPartial(_: Partial<MsgUpdateClientConfigResponse>): MsgUpdateClientConfigResponse {
    const message = createBaseMsgUpdateClientConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClientConfigResponseAmino): MsgUpdateClientConfigResponse {
    const message = createBaseMsgUpdateClientConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateClientConfigResponse): MsgUpdateClientConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientConfigResponseAminoMsg): MsgUpdateClientConfigResponse {
    return MsgUpdateClientConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientConfigResponse): MsgUpdateClientConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientConfigResponse",
      value: MsgUpdateClientConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientConfigResponseProtoMsg): MsgUpdateClientConfigResponse {
    return MsgUpdateClientConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClientConfigResponse): Uint8Array {
    return MsgUpdateClientConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientConfigResponse): MsgUpdateClientConfigResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfigResponse",
      value: MsgUpdateClientConfigResponse.encode(message).finish()
    };
  }
};