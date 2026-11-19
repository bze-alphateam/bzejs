//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the module parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the module parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "bze/x/guardian/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bze.guardian.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgTightenRateLimit is the Msg/TightenRateLimit request type.
 * @name MsgTightenRateLimit
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimit
 */
export interface MsgTightenRateLimit {
  /**
   * signer is the guardian or the governance authority.
   */
  signer: string;
  /**
   * denom of the rate limit, as it appears on BZE.
   */
  denom: string;
  /**
   * channel_id of the rate limit, on the BZE side.
   */
  channelId: string;
  /**
   * max_percent_send is the new outflow threshold, at most the current one.
   */
  maxPercentSend: string;
  /**
   * max_percent_recv is the new inflow threshold, at most the current one.
   */
  maxPercentRecv: string;
}
export interface MsgTightenRateLimitProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgTightenRateLimit";
  value: Uint8Array;
}
/**
 * MsgTightenRateLimit is the Msg/TightenRateLimit request type.
 * @name MsgTightenRateLimitAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimit
 */
export interface MsgTightenRateLimitAmino {
  /**
   * signer is the guardian or the governance authority.
   */
  signer?: string;
  /**
   * denom of the rate limit, as it appears on BZE.
   */
  denom?: string;
  /**
   * channel_id of the rate limit, on the BZE side.
   */
  channel_id?: string;
  /**
   * max_percent_send is the new outflow threshold, at most the current one.
   */
  max_percent_send?: string;
  /**
   * max_percent_recv is the new inflow threshold, at most the current one.
   */
  max_percent_recv?: string;
}
export interface MsgTightenRateLimitAminoMsg {
  type: "bze/x/guardian/MsgTightenRateLimit";
  value: MsgTightenRateLimitAmino;
}
/**
 * MsgTightenRateLimit is the Msg/TightenRateLimit request type.
 * @name MsgTightenRateLimitSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimit
 */
export interface MsgTightenRateLimitSDKType {
  signer: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
}
/**
 * MsgTightenRateLimitResponse defines the response structure for executing a
 * MsgTightenRateLimit message.
 * @name MsgTightenRateLimitResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimitResponse
 */
export interface MsgTightenRateLimitResponse {}
export interface MsgTightenRateLimitResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgTightenRateLimitResponse";
  value: Uint8Array;
}
/**
 * MsgTightenRateLimitResponse defines the response structure for executing a
 * MsgTightenRateLimit message.
 * @name MsgTightenRateLimitResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimitResponse
 */
export interface MsgTightenRateLimitResponseAmino {}
export interface MsgTightenRateLimitResponseAminoMsg {
  type: "/bze.guardian.v1.MsgTightenRateLimitResponse";
  value: MsgTightenRateLimitResponseAmino;
}
/**
 * MsgTightenRateLimitResponse defines the response structure for executing a
 * MsgTightenRateLimit message.
 * @name MsgTightenRateLimitResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimitResponse
 */
export interface MsgTightenRateLimitResponseSDKType {}
/**
 * MsgBlockDenom is the Msg/BlockDenom request type.
 * @name MsgBlockDenom
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenom
 */
export interface MsgBlockDenom {
  /**
   * signer is the guardian or the governance authority.
   */
  signer: string;
  /**
   * denom to block, as it appears on BZE.
   */
  denom: string;
}
export interface MsgBlockDenomProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgBlockDenom";
  value: Uint8Array;
}
/**
 * MsgBlockDenom is the Msg/BlockDenom request type.
 * @name MsgBlockDenomAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenom
 */
export interface MsgBlockDenomAmino {
  /**
   * signer is the guardian or the governance authority.
   */
  signer?: string;
  /**
   * denom to block, as it appears on BZE.
   */
  denom?: string;
}
export interface MsgBlockDenomAminoMsg {
  type: "bze/x/guardian/MsgBlockDenom";
  value: MsgBlockDenomAmino;
}
/**
 * MsgBlockDenom is the Msg/BlockDenom request type.
 * @name MsgBlockDenomSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenom
 */
export interface MsgBlockDenomSDKType {
  signer: string;
  denom: string;
}
/**
 * MsgBlockDenomResponse defines the response structure for executing a
 * MsgBlockDenom message.
 * @name MsgBlockDenomResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenomResponse
 */
export interface MsgBlockDenomResponse {}
export interface MsgBlockDenomResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgBlockDenomResponse";
  value: Uint8Array;
}
/**
 * MsgBlockDenomResponse defines the response structure for executing a
 * MsgBlockDenom message.
 * @name MsgBlockDenomResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenomResponse
 */
export interface MsgBlockDenomResponseAmino {}
export interface MsgBlockDenomResponseAminoMsg {
  type: "/bze.guardian.v1.MsgBlockDenomResponse";
  value: MsgBlockDenomResponseAmino;
}
/**
 * MsgBlockDenomResponse defines the response structure for executing a
 * MsgBlockDenom message.
 * @name MsgBlockDenomResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenomResponse
 */
export interface MsgBlockDenomResponseSDKType {}
/**
 * MsgUnblockDenom is the Msg/UnblockDenom request type.
 * @name MsgUnblockDenom
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenom
 */
export interface MsgUnblockDenom {
  /**
   * authority is the governance module account, the guardian cannot unblock.
   */
  authority: string;
  /**
   * denom to unblock, as it appears on BZE.
   */
  denom: string;
}
export interface MsgUnblockDenomProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgUnblockDenom";
  value: Uint8Array;
}
/**
 * MsgUnblockDenom is the Msg/UnblockDenom request type.
 * @name MsgUnblockDenomAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenom
 */
export interface MsgUnblockDenomAmino {
  /**
   * authority is the governance module account, the guardian cannot unblock.
   */
  authority?: string;
  /**
   * denom to unblock, as it appears on BZE.
   */
  denom?: string;
}
export interface MsgUnblockDenomAminoMsg {
  type: "bze/x/guardian/MsgUnblockDenom";
  value: MsgUnblockDenomAmino;
}
/**
 * MsgUnblockDenom is the Msg/UnblockDenom request type.
 * @name MsgUnblockDenomSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenom
 */
export interface MsgUnblockDenomSDKType {
  authority: string;
  denom: string;
}
/**
 * MsgUnblockDenomResponse defines the response structure for executing a
 * MsgUnblockDenom message.
 * @name MsgUnblockDenomResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenomResponse
 */
export interface MsgUnblockDenomResponse {}
export interface MsgUnblockDenomResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgUnblockDenomResponse";
  value: Uint8Array;
}
/**
 * MsgUnblockDenomResponse defines the response structure for executing a
 * MsgUnblockDenom message.
 * @name MsgUnblockDenomResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenomResponse
 */
export interface MsgUnblockDenomResponseAmino {}
export interface MsgUnblockDenomResponseAminoMsg {
  type: "/bze.guardian.v1.MsgUnblockDenomResponse";
  value: MsgUnblockDenomResponseAmino;
}
/**
 * MsgUnblockDenomResponse defines the response structure for executing a
 * MsgUnblockDenom message.
 * @name MsgUnblockDenomResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenomResponse
 */
export interface MsgUnblockDenomResponseSDKType {}
/**
 * MsgDisableMessages is the Msg/DisableMessages request type.
 * @name MsgDisableMessages
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessages
 */
export interface MsgDisableMessages {
  /**
   * signer is the guardian or the governance authority.
   */
  signer: string;
  /**
   * msg_type_urls are the type URLs to disable, e.g. /bze.tradebin.MsgMultiSwap.
   */
  msgTypeUrls: string[];
}
export interface MsgDisableMessagesProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgDisableMessages";
  value: Uint8Array;
}
/**
 * MsgDisableMessages is the Msg/DisableMessages request type.
 * @name MsgDisableMessagesAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessages
 */
export interface MsgDisableMessagesAmino {
  /**
   * signer is the guardian or the governance authority.
   */
  signer?: string;
  /**
   * msg_type_urls are the type URLs to disable, e.g. /bze.tradebin.MsgMultiSwap.
   */
  msg_type_urls?: string[];
}
export interface MsgDisableMessagesAminoMsg {
  type: "bze/x/guardian/MsgDisableMessages";
  value: MsgDisableMessagesAmino;
}
/**
 * MsgDisableMessages is the Msg/DisableMessages request type.
 * @name MsgDisableMessagesSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessages
 */
export interface MsgDisableMessagesSDKType {
  signer: string;
  msg_type_urls: string[];
}
/**
 * MsgDisableMessagesResponse defines the response structure for executing a
 * MsgDisableMessages message.
 * @name MsgDisableMessagesResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessagesResponse
 */
export interface MsgDisableMessagesResponse {}
export interface MsgDisableMessagesResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgDisableMessagesResponse";
  value: Uint8Array;
}
/**
 * MsgDisableMessagesResponse defines the response structure for executing a
 * MsgDisableMessages message.
 * @name MsgDisableMessagesResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessagesResponse
 */
export interface MsgDisableMessagesResponseAmino {}
export interface MsgDisableMessagesResponseAminoMsg {
  type: "/bze.guardian.v1.MsgDisableMessagesResponse";
  value: MsgDisableMessagesResponseAmino;
}
/**
 * MsgDisableMessagesResponse defines the response structure for executing a
 * MsgDisableMessages message.
 * @name MsgDisableMessagesResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessagesResponse
 */
export interface MsgDisableMessagesResponseSDKType {}
/**
 * MsgHaltTradingDenoms is the Msg/HaltTradingDenoms request type.
 * @name MsgHaltTradingDenoms
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenoms
 */
export interface MsgHaltTradingDenoms {
  /**
   * signer is the guardian or the governance authority.
   */
  signer: string;
  /**
   * denoms to halt on the DEX: valid denoms, no duplicates, at most 1000, not
   * the native denom. A denom that is already halted is left as it is.
   */
  denoms: string[];
}
export interface MsgHaltTradingDenomsProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgHaltTradingDenoms";
  value: Uint8Array;
}
/**
 * MsgHaltTradingDenoms is the Msg/HaltTradingDenoms request type.
 * @name MsgHaltTradingDenomsAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenoms
 */
export interface MsgHaltTradingDenomsAmino {
  /**
   * signer is the guardian or the governance authority.
   */
  signer?: string;
  /**
   * denoms to halt on the DEX: valid denoms, no duplicates, at most 1000, not
   * the native denom. A denom that is already halted is left as it is.
   */
  denoms?: string[];
}
export interface MsgHaltTradingDenomsAminoMsg {
  type: "bze/x/guardian/MsgHaltTradingDenoms";
  value: MsgHaltTradingDenomsAmino;
}
/**
 * MsgHaltTradingDenoms is the Msg/HaltTradingDenoms request type.
 * @name MsgHaltTradingDenomsSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenoms
 */
export interface MsgHaltTradingDenomsSDKType {
  signer: string;
  denoms: string[];
}
/**
 * MsgHaltTradingDenomsResponse defines the response structure for executing a
 * MsgHaltTradingDenoms message.
 * @name MsgHaltTradingDenomsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenomsResponse
 */
export interface MsgHaltTradingDenomsResponse {}
export interface MsgHaltTradingDenomsResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgHaltTradingDenomsResponse";
  value: Uint8Array;
}
/**
 * MsgHaltTradingDenomsResponse defines the response structure for executing a
 * MsgHaltTradingDenoms message.
 * @name MsgHaltTradingDenomsResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenomsResponse
 */
export interface MsgHaltTradingDenomsResponseAmino {}
export interface MsgHaltTradingDenomsResponseAminoMsg {
  type: "/bze.guardian.v1.MsgHaltTradingDenomsResponse";
  value: MsgHaltTradingDenomsResponseAmino;
}
/**
 * MsgHaltTradingDenomsResponse defines the response structure for executing a
 * MsgHaltTradingDenoms message.
 * @name MsgHaltTradingDenomsResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenomsResponse
 */
export interface MsgHaltTradingDenomsResponseSDKType {}
/**
 * MsgHaltChain is the Msg/HaltChain request type.
 * @name MsgHaltChain
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChain
 */
export interface MsgHaltChain {
  /**
   * signer is the guardian or the governance authority.
   */
  signer: string;
  /**
   * reason is a short explanation (1 to 256 bytes), in the event only; the
   * plan info is a fixed text.
   */
  reason: string;
}
export interface MsgHaltChainProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgHaltChain";
  value: Uint8Array;
}
/**
 * MsgHaltChain is the Msg/HaltChain request type.
 * @name MsgHaltChainAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChain
 */
export interface MsgHaltChainAmino {
  /**
   * signer is the guardian or the governance authority.
   */
  signer?: string;
  /**
   * reason is a short explanation (1 to 256 bytes), in the event only; the
   * plan info is a fixed text.
   */
  reason?: string;
}
export interface MsgHaltChainAminoMsg {
  type: "bze/x/guardian/MsgHaltChain";
  value: MsgHaltChainAmino;
}
/**
 * MsgHaltChain is the Msg/HaltChain request type.
 * @name MsgHaltChainSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChain
 */
export interface MsgHaltChainSDKType {
  signer: string;
  reason: string;
}
/**
 * MsgHaltChainResponse defines the response structure for executing a
 * MsgHaltChain message.
 * @name MsgHaltChainResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChainResponse
 */
export interface MsgHaltChainResponse {
  /**
   * name of the scheduled upgrade plan.
   */
  name: string;
  /**
   * height the chain stops at.
   */
  height: bigint;
}
export interface MsgHaltChainResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgHaltChainResponse";
  value: Uint8Array;
}
/**
 * MsgHaltChainResponse defines the response structure for executing a
 * MsgHaltChain message.
 * @name MsgHaltChainResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChainResponse
 */
export interface MsgHaltChainResponseAmino {
  /**
   * name of the scheduled upgrade plan.
   */
  name?: string;
  /**
   * height the chain stops at.
   */
  height?: string;
}
export interface MsgHaltChainResponseAminoMsg {
  type: "/bze.guardian.v1.MsgHaltChainResponse";
  value: MsgHaltChainResponseAmino;
}
/**
 * MsgHaltChainResponse defines the response structure for executing a
 * MsgHaltChain message.
 * @name MsgHaltChainResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChainResponse
 */
export interface MsgHaltChainResponseSDKType {
  name: string;
  height: bigint;
}
/**
 * MsgPauseAutomation is the Msg/PauseAutomation request type.
 * @name MsgPauseAutomation
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomation
 */
export interface MsgPauseAutomation {
  /**
   * signer is the guardian or the governance authority.
   */
  signer: string;
}
export interface MsgPauseAutomationProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgPauseAutomation";
  value: Uint8Array;
}
/**
 * MsgPauseAutomation is the Msg/PauseAutomation request type.
 * @name MsgPauseAutomationAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomation
 */
export interface MsgPauseAutomationAmino {
  /**
   * signer is the guardian or the governance authority.
   */
  signer?: string;
}
export interface MsgPauseAutomationAminoMsg {
  type: "bze/x/guardian/MsgPauseAutomation";
  value: MsgPauseAutomationAmino;
}
/**
 * MsgPauseAutomation is the Msg/PauseAutomation request type.
 * @name MsgPauseAutomationSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomation
 */
export interface MsgPauseAutomationSDKType {
  signer: string;
}
/**
 * MsgPauseAutomationResponse defines the response structure for executing a
 * MsgPauseAutomation message.
 * @name MsgPauseAutomationResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomationResponse
 */
export interface MsgPauseAutomationResponse {}
export interface MsgPauseAutomationResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgPauseAutomationResponse";
  value: Uint8Array;
}
/**
 * MsgPauseAutomationResponse defines the response structure for executing a
 * MsgPauseAutomation message.
 * @name MsgPauseAutomationResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomationResponse
 */
export interface MsgPauseAutomationResponseAmino {}
export interface MsgPauseAutomationResponseAminoMsg {
  type: "/bze.guardian.v1.MsgPauseAutomationResponse";
  value: MsgPauseAutomationResponseAmino;
}
/**
 * MsgPauseAutomationResponse defines the response structure for executing a
 * MsgPauseAutomation message.
 * @name MsgPauseAutomationResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomationResponse
 */
export interface MsgPauseAutomationResponseSDKType {}
/**
 * MsgResumeAutomation is the Msg/ResumeAutomation request type.
 * @name MsgResumeAutomation
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomation
 */
export interface MsgResumeAutomation {
  /**
   * authority is the governance module account, the guardian cannot resume.
   */
  authority: string;
}
export interface MsgResumeAutomationProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgResumeAutomation";
  value: Uint8Array;
}
/**
 * MsgResumeAutomation is the Msg/ResumeAutomation request type.
 * @name MsgResumeAutomationAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomation
 */
export interface MsgResumeAutomationAmino {
  /**
   * authority is the governance module account, the guardian cannot resume.
   */
  authority?: string;
}
export interface MsgResumeAutomationAminoMsg {
  type: "bze/x/guardian/MsgResumeAutomation";
  value: MsgResumeAutomationAmino;
}
/**
 * MsgResumeAutomation is the Msg/ResumeAutomation request type.
 * @name MsgResumeAutomationSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomation
 */
export interface MsgResumeAutomationSDKType {
  authority: string;
}
/**
 * MsgResumeAutomationResponse defines the response structure for executing a
 * MsgResumeAutomation message.
 * @name MsgResumeAutomationResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomationResponse
 */
export interface MsgResumeAutomationResponse {}
export interface MsgResumeAutomationResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgResumeAutomationResponse";
  value: Uint8Array;
}
/**
 * MsgResumeAutomationResponse defines the response structure for executing a
 * MsgResumeAutomation message.
 * @name MsgResumeAutomationResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomationResponse
 */
export interface MsgResumeAutomationResponseAmino {}
export interface MsgResumeAutomationResponseAminoMsg {
  type: "/bze.guardian.v1.MsgResumeAutomationResponse";
  value: MsgResumeAutomationResponseAmino;
}
/**
 * MsgResumeAutomationResponse defines the response structure for executing a
 * MsgResumeAutomation message.
 * @name MsgResumeAutomationResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomationResponse
 */
export interface MsgResumeAutomationResponseSDKType {}
/**
 * MsgCloseChannel is the Msg/CloseChannel request type.
 * @name MsgCloseChannel
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannel
 */
export interface MsgCloseChannel {
  /**
   * signer is the guardian or the governance authority.
   */
  signer: string;
  /**
   * channel_id of an existing transfer channel, on the BZE side.
   */
  channelId: string;
}
export interface MsgCloseChannelProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgCloseChannel";
  value: Uint8Array;
}
/**
 * MsgCloseChannel is the Msg/CloseChannel request type.
 * @name MsgCloseChannelAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannel
 */
export interface MsgCloseChannelAmino {
  /**
   * signer is the guardian or the governance authority.
   */
  signer?: string;
  /**
   * channel_id of an existing transfer channel, on the BZE side.
   */
  channel_id?: string;
}
export interface MsgCloseChannelAminoMsg {
  type: "bze/x/guardian/MsgCloseChannel";
  value: MsgCloseChannelAmino;
}
/**
 * MsgCloseChannel is the Msg/CloseChannel request type.
 * @name MsgCloseChannelSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannel
 */
export interface MsgCloseChannelSDKType {
  signer: string;
  channel_id: string;
}
/**
 * MsgCloseChannelResponse defines the response structure for executing a
 * MsgCloseChannel message.
 * @name MsgCloseChannelResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannelResponse
 */
export interface MsgCloseChannelResponse {}
export interface MsgCloseChannelResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgCloseChannelResponse";
  value: Uint8Array;
}
/**
 * MsgCloseChannelResponse defines the response structure for executing a
 * MsgCloseChannel message.
 * @name MsgCloseChannelResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannelResponse
 */
export interface MsgCloseChannelResponseAmino {}
export interface MsgCloseChannelResponseAminoMsg {
  type: "/bze.guardian.v1.MsgCloseChannelResponse";
  value: MsgCloseChannelResponseAmino;
}
/**
 * MsgCloseChannelResponse defines the response structure for executing a
 * MsgCloseChannel message.
 * @name MsgCloseChannelResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannelResponse
 */
export interface MsgCloseChannelResponseSDKType {}
/**
 * MsgReopenChannel is the Msg/ReopenChannel request type.
 * @name MsgReopenChannel
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannel
 */
export interface MsgReopenChannel {
  /**
   * authority is the governance module account, the guardian cannot reopen.
   */
  authority: string;
  /**
   * channel_id of a closed transfer channel, on the BZE side.
   */
  channelId: string;
}
export interface MsgReopenChannelProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgReopenChannel";
  value: Uint8Array;
}
/**
 * MsgReopenChannel is the Msg/ReopenChannel request type.
 * @name MsgReopenChannelAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannel
 */
export interface MsgReopenChannelAmino {
  /**
   * authority is the governance module account, the guardian cannot reopen.
   */
  authority?: string;
  /**
   * channel_id of a closed transfer channel, on the BZE side.
   */
  channel_id?: string;
}
export interface MsgReopenChannelAminoMsg {
  type: "bze/x/guardian/MsgReopenChannel";
  value: MsgReopenChannelAmino;
}
/**
 * MsgReopenChannel is the Msg/ReopenChannel request type.
 * @name MsgReopenChannelSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannel
 */
export interface MsgReopenChannelSDKType {
  authority: string;
  channel_id: string;
}
/**
 * MsgReopenChannelResponse defines the response structure for executing a
 * MsgReopenChannel message.
 * @name MsgReopenChannelResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannelResponse
 */
export interface MsgReopenChannelResponse {}
export interface MsgReopenChannelResponseProtoMsg {
  typeUrl: "/bze.guardian.v1.MsgReopenChannelResponse";
  value: Uint8Array;
}
/**
 * MsgReopenChannelResponse defines the response structure for executing a
 * MsgReopenChannel message.
 * @name MsgReopenChannelResponseAmino
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannelResponse
 */
export interface MsgReopenChannelResponseAmino {}
export interface MsgReopenChannelResponseAminoMsg {
  type: "/bze.guardian.v1.MsgReopenChannelResponse";
  value: MsgReopenChannelResponseAmino;
}
/**
 * MsgReopenChannelResponse defines the response structure for executing a
 * MsgReopenChannel message.
 * @name MsgReopenChannelResponseSDKType
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannelResponse
 */
export interface MsgReopenChannelResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/bze.guardian.v1.MsgUpdateParams",
  aminoType: "bze/x/guardian/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "bze/x/guardian/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/bze.guardian.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgTightenRateLimit(): MsgTightenRateLimit {
  return {
    signer: "",
    denom: "",
    channelId: "",
    maxPercentSend: "",
    maxPercentRecv: ""
  };
}
/**
 * MsgTightenRateLimit is the Msg/TightenRateLimit request type.
 * @name MsgTightenRateLimit
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimit
 */
export const MsgTightenRateLimit = {
  typeUrl: "/bze.guardian.v1.MsgTightenRateLimit",
  aminoType: "bze/x/guardian/MsgTightenRateLimit",
  is(o: any): o is MsgTightenRateLimit {
    return o && (o.$typeUrl === MsgTightenRateLimit.typeUrl || typeof o.signer === "string" && typeof o.denom === "string" && typeof o.channelId === "string" && typeof o.maxPercentSend === "string" && typeof o.maxPercentRecv === "string");
  },
  isSDK(o: any): o is MsgTightenRateLimitSDKType {
    return o && (o.$typeUrl === MsgTightenRateLimit.typeUrl || typeof o.signer === "string" && typeof o.denom === "string" && typeof o.channel_id === "string" && typeof o.max_percent_send === "string" && typeof o.max_percent_recv === "string");
  },
  isAmino(o: any): o is MsgTightenRateLimitAmino {
    return o && (o.$typeUrl === MsgTightenRateLimit.typeUrl || typeof o.signer === "string" && typeof o.denom === "string" && typeof o.channel_id === "string" && typeof o.max_percent_send === "string" && typeof o.max_percent_recv === "string");
  },
  encode(message: MsgTightenRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(34).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(42).string(message.maxPercentRecv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTightenRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTightenRateLimit();
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
          message.maxPercentSend = reader.string();
          break;
        case 5:
          message.maxPercentRecv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTightenRateLimit>): MsgTightenRateLimit {
    const message = createBaseMsgTightenRateLimit();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    return message;
  },
  fromAmino(object: MsgTightenRateLimitAmino): MsgTightenRateLimit {
    const message = createBaseMsgTightenRateLimit();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.max_percent_send !== undefined && object.max_percent_send !== null) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (object.max_percent_recv !== undefined && object.max_percent_recv !== null) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    return message;
  },
  toAmino(message: MsgTightenRateLimit): MsgTightenRateLimitAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.max_percent_send = message.maxPercentSend === "" ? undefined : message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv === "" ? undefined : message.maxPercentRecv;
    return obj;
  },
  fromAminoMsg(object: MsgTightenRateLimitAminoMsg): MsgTightenRateLimit {
    return MsgTightenRateLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTightenRateLimit): MsgTightenRateLimitAminoMsg {
    return {
      type: "bze/x/guardian/MsgTightenRateLimit",
      value: MsgTightenRateLimit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTightenRateLimitProtoMsg): MsgTightenRateLimit {
    return MsgTightenRateLimit.decode(message.value);
  },
  toProto(message: MsgTightenRateLimit): Uint8Array {
    return MsgTightenRateLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgTightenRateLimit): MsgTightenRateLimitProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgTightenRateLimit",
      value: MsgTightenRateLimit.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgTightenRateLimitResponse(): MsgTightenRateLimitResponse {
  return {};
}
/**
 * MsgTightenRateLimitResponse defines the response structure for executing a
 * MsgTightenRateLimit message.
 * @name MsgTightenRateLimitResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgTightenRateLimitResponse
 */
export const MsgTightenRateLimitResponse = {
  typeUrl: "/bze.guardian.v1.MsgTightenRateLimitResponse",
  is(o: any): o is MsgTightenRateLimitResponse {
    return o && o.$typeUrl === MsgTightenRateLimitResponse.typeUrl;
  },
  isSDK(o: any): o is MsgTightenRateLimitResponseSDKType {
    return o && o.$typeUrl === MsgTightenRateLimitResponse.typeUrl;
  },
  isAmino(o: any): o is MsgTightenRateLimitResponseAmino {
    return o && o.$typeUrl === MsgTightenRateLimitResponse.typeUrl;
  },
  encode(_: MsgTightenRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTightenRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTightenRateLimitResponse();
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
  fromPartial(_: Partial<MsgTightenRateLimitResponse>): MsgTightenRateLimitResponse {
    const message = createBaseMsgTightenRateLimitResponse();
    return message;
  },
  fromAmino(_: MsgTightenRateLimitResponseAmino): MsgTightenRateLimitResponse {
    const message = createBaseMsgTightenRateLimitResponse();
    return message;
  },
  toAmino(_: MsgTightenRateLimitResponse): MsgTightenRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTightenRateLimitResponseAminoMsg): MsgTightenRateLimitResponse {
    return MsgTightenRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTightenRateLimitResponseProtoMsg): MsgTightenRateLimitResponse {
    return MsgTightenRateLimitResponse.decode(message.value);
  },
  toProto(message: MsgTightenRateLimitResponse): Uint8Array {
    return MsgTightenRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTightenRateLimitResponse): MsgTightenRateLimitResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgTightenRateLimitResponse",
      value: MsgTightenRateLimitResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgBlockDenom(): MsgBlockDenom {
  return {
    signer: "",
    denom: ""
  };
}
/**
 * MsgBlockDenom is the Msg/BlockDenom request type.
 * @name MsgBlockDenom
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenom
 */
export const MsgBlockDenom = {
  typeUrl: "/bze.guardian.v1.MsgBlockDenom",
  aminoType: "bze/x/guardian/MsgBlockDenom",
  is(o: any): o is MsgBlockDenom {
    return o && (o.$typeUrl === MsgBlockDenom.typeUrl || typeof o.signer === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgBlockDenomSDKType {
    return o && (o.$typeUrl === MsgBlockDenom.typeUrl || typeof o.signer === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgBlockDenomAmino {
    return o && (o.$typeUrl === MsgBlockDenom.typeUrl || typeof o.signer === "string" && typeof o.denom === "string");
  },
  encode(message: MsgBlockDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBlockDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockDenom();
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
  fromPartial(object: Partial<MsgBlockDenom>): MsgBlockDenom {
    const message = createBaseMsgBlockDenom();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgBlockDenomAmino): MsgBlockDenom {
    const message = createBaseMsgBlockDenom();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgBlockDenom): MsgBlockDenomAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgBlockDenomAminoMsg): MsgBlockDenom {
    return MsgBlockDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBlockDenom): MsgBlockDenomAminoMsg {
    return {
      type: "bze/x/guardian/MsgBlockDenom",
      value: MsgBlockDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBlockDenomProtoMsg): MsgBlockDenom {
    return MsgBlockDenom.decode(message.value);
  },
  toProto(message: MsgBlockDenom): Uint8Array {
    return MsgBlockDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgBlockDenom): MsgBlockDenomProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgBlockDenom",
      value: MsgBlockDenom.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgBlockDenomResponse(): MsgBlockDenomResponse {
  return {};
}
/**
 * MsgBlockDenomResponse defines the response structure for executing a
 * MsgBlockDenom message.
 * @name MsgBlockDenomResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgBlockDenomResponse
 */
export const MsgBlockDenomResponse = {
  typeUrl: "/bze.guardian.v1.MsgBlockDenomResponse",
  is(o: any): o is MsgBlockDenomResponse {
    return o && o.$typeUrl === MsgBlockDenomResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBlockDenomResponseSDKType {
    return o && o.$typeUrl === MsgBlockDenomResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBlockDenomResponseAmino {
    return o && o.$typeUrl === MsgBlockDenomResponse.typeUrl;
  },
  encode(_: MsgBlockDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBlockDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockDenomResponse();
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
  fromPartial(_: Partial<MsgBlockDenomResponse>): MsgBlockDenomResponse {
    const message = createBaseMsgBlockDenomResponse();
    return message;
  },
  fromAmino(_: MsgBlockDenomResponseAmino): MsgBlockDenomResponse {
    const message = createBaseMsgBlockDenomResponse();
    return message;
  },
  toAmino(_: MsgBlockDenomResponse): MsgBlockDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBlockDenomResponseAminoMsg): MsgBlockDenomResponse {
    return MsgBlockDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBlockDenomResponseProtoMsg): MsgBlockDenomResponse {
    return MsgBlockDenomResponse.decode(message.value);
  },
  toProto(message: MsgBlockDenomResponse): Uint8Array {
    return MsgBlockDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBlockDenomResponse): MsgBlockDenomResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgBlockDenomResponse",
      value: MsgBlockDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnblockDenom(): MsgUnblockDenom {
  return {
    authority: "",
    denom: ""
  };
}
/**
 * MsgUnblockDenom is the Msg/UnblockDenom request type.
 * @name MsgUnblockDenom
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenom
 */
export const MsgUnblockDenom = {
  typeUrl: "/bze.guardian.v1.MsgUnblockDenom",
  aminoType: "bze/x/guardian/MsgUnblockDenom",
  is(o: any): o is MsgUnblockDenom {
    return o && (o.$typeUrl === MsgUnblockDenom.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgUnblockDenomSDKType {
    return o && (o.$typeUrl === MsgUnblockDenom.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgUnblockDenomAmino {
    return o && (o.$typeUrl === MsgUnblockDenom.typeUrl || typeof o.authority === "string" && typeof o.denom === "string");
  },
  encode(message: MsgUnblockDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnblockDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockDenom();
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
  fromPartial(object: Partial<MsgUnblockDenom>): MsgUnblockDenom {
    const message = createBaseMsgUnblockDenom();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgUnblockDenomAmino): MsgUnblockDenom {
    const message = createBaseMsgUnblockDenom();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgUnblockDenom): MsgUnblockDenomAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgUnblockDenomAminoMsg): MsgUnblockDenom {
    return MsgUnblockDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnblockDenom): MsgUnblockDenomAminoMsg {
    return {
      type: "bze/x/guardian/MsgUnblockDenom",
      value: MsgUnblockDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnblockDenomProtoMsg): MsgUnblockDenom {
    return MsgUnblockDenom.decode(message.value);
  },
  toProto(message: MsgUnblockDenom): Uint8Array {
    return MsgUnblockDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgUnblockDenom): MsgUnblockDenomProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgUnblockDenom",
      value: MsgUnblockDenom.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnblockDenomResponse(): MsgUnblockDenomResponse {
  return {};
}
/**
 * MsgUnblockDenomResponse defines the response structure for executing a
 * MsgUnblockDenom message.
 * @name MsgUnblockDenomResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgUnblockDenomResponse
 */
export const MsgUnblockDenomResponse = {
  typeUrl: "/bze.guardian.v1.MsgUnblockDenomResponse",
  is(o: any): o is MsgUnblockDenomResponse {
    return o && o.$typeUrl === MsgUnblockDenomResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUnblockDenomResponseSDKType {
    return o && o.$typeUrl === MsgUnblockDenomResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnblockDenomResponseAmino {
    return o && o.$typeUrl === MsgUnblockDenomResponse.typeUrl;
  },
  encode(_: MsgUnblockDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnblockDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockDenomResponse();
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
  fromPartial(_: Partial<MsgUnblockDenomResponse>): MsgUnblockDenomResponse {
    const message = createBaseMsgUnblockDenomResponse();
    return message;
  },
  fromAmino(_: MsgUnblockDenomResponseAmino): MsgUnblockDenomResponse {
    const message = createBaseMsgUnblockDenomResponse();
    return message;
  },
  toAmino(_: MsgUnblockDenomResponse): MsgUnblockDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnblockDenomResponseAminoMsg): MsgUnblockDenomResponse {
    return MsgUnblockDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnblockDenomResponseProtoMsg): MsgUnblockDenomResponse {
    return MsgUnblockDenomResponse.decode(message.value);
  },
  toProto(message: MsgUnblockDenomResponse): Uint8Array {
    return MsgUnblockDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnblockDenomResponse): MsgUnblockDenomResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgUnblockDenomResponse",
      value: MsgUnblockDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDisableMessages(): MsgDisableMessages {
  return {
    signer: "",
    msgTypeUrls: []
  };
}
/**
 * MsgDisableMessages is the Msg/DisableMessages request type.
 * @name MsgDisableMessages
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessages
 */
export const MsgDisableMessages = {
  typeUrl: "/bze.guardian.v1.MsgDisableMessages",
  aminoType: "bze/x/guardian/MsgDisableMessages",
  is(o: any): o is MsgDisableMessages {
    return o && (o.$typeUrl === MsgDisableMessages.typeUrl || typeof o.signer === "string" && Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isSDK(o: any): o is MsgDisableMessagesSDKType {
    return o && (o.$typeUrl === MsgDisableMessages.typeUrl || typeof o.signer === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  isAmino(o: any): o is MsgDisableMessagesAmino {
    return o && (o.$typeUrl === MsgDisableMessages.typeUrl || typeof o.signer === "string" && Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: MsgDisableMessages, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableMessages {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMessages();
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
  fromPartial(object: Partial<MsgDisableMessages>): MsgDisableMessages {
    const message = createBaseMsgDisableMessages();
    message.signer = object.signer ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgDisableMessagesAmino): MsgDisableMessages {
    const message = createBaseMsgDisableMessages();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgDisableMessages): MsgDisableMessagesAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDisableMessagesAminoMsg): MsgDisableMessages {
    return MsgDisableMessages.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableMessages): MsgDisableMessagesAminoMsg {
    return {
      type: "bze/x/guardian/MsgDisableMessages",
      value: MsgDisableMessages.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableMessagesProtoMsg): MsgDisableMessages {
    return MsgDisableMessages.decode(message.value);
  },
  toProto(message: MsgDisableMessages): Uint8Array {
    return MsgDisableMessages.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableMessages): MsgDisableMessagesProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgDisableMessages",
      value: MsgDisableMessages.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDisableMessagesResponse(): MsgDisableMessagesResponse {
  return {};
}
/**
 * MsgDisableMessagesResponse defines the response structure for executing a
 * MsgDisableMessages message.
 * @name MsgDisableMessagesResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgDisableMessagesResponse
 */
export const MsgDisableMessagesResponse = {
  typeUrl: "/bze.guardian.v1.MsgDisableMessagesResponse",
  is(o: any): o is MsgDisableMessagesResponse {
    return o && o.$typeUrl === MsgDisableMessagesResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDisableMessagesResponseSDKType {
    return o && o.$typeUrl === MsgDisableMessagesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDisableMessagesResponseAmino {
    return o && o.$typeUrl === MsgDisableMessagesResponse.typeUrl;
  },
  encode(_: MsgDisableMessagesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableMessagesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMessagesResponse();
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
  fromPartial(_: Partial<MsgDisableMessagesResponse>): MsgDisableMessagesResponse {
    const message = createBaseMsgDisableMessagesResponse();
    return message;
  },
  fromAmino(_: MsgDisableMessagesResponseAmino): MsgDisableMessagesResponse {
    const message = createBaseMsgDisableMessagesResponse();
    return message;
  },
  toAmino(_: MsgDisableMessagesResponse): MsgDisableMessagesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableMessagesResponseAminoMsg): MsgDisableMessagesResponse {
    return MsgDisableMessagesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableMessagesResponseProtoMsg): MsgDisableMessagesResponse {
    return MsgDisableMessagesResponse.decode(message.value);
  },
  toProto(message: MsgDisableMessagesResponse): Uint8Array {
    return MsgDisableMessagesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableMessagesResponse): MsgDisableMessagesResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgDisableMessagesResponse",
      value: MsgDisableMessagesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgHaltTradingDenoms(): MsgHaltTradingDenoms {
  return {
    signer: "",
    denoms: []
  };
}
/**
 * MsgHaltTradingDenoms is the Msg/HaltTradingDenoms request type.
 * @name MsgHaltTradingDenoms
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenoms
 */
export const MsgHaltTradingDenoms = {
  typeUrl: "/bze.guardian.v1.MsgHaltTradingDenoms",
  aminoType: "bze/x/guardian/MsgHaltTradingDenoms",
  is(o: any): o is MsgHaltTradingDenoms {
    return o && (o.$typeUrl === MsgHaltTradingDenoms.typeUrl || typeof o.signer === "string" && Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isSDK(o: any): o is MsgHaltTradingDenomsSDKType {
    return o && (o.$typeUrl === MsgHaltTradingDenoms.typeUrl || typeof o.signer === "string" && Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is MsgHaltTradingDenomsAmino {
    return o && (o.$typeUrl === MsgHaltTradingDenoms.typeUrl || typeof o.signer === "string" && Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: MsgHaltTradingDenoms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.denoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHaltTradingDenoms {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHaltTradingDenoms();
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
  fromPartial(object: Partial<MsgHaltTradingDenoms>): MsgHaltTradingDenoms {
    const message = createBaseMsgHaltTradingDenoms();
    message.signer = object.signer ?? "";
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgHaltTradingDenomsAmino): MsgHaltTradingDenoms {
    const message = createBaseMsgHaltTradingDenoms();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgHaltTradingDenoms): MsgHaltTradingDenomsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: MsgHaltTradingDenomsAminoMsg): MsgHaltTradingDenoms {
    return MsgHaltTradingDenoms.fromAmino(object.value);
  },
  toAminoMsg(message: MsgHaltTradingDenoms): MsgHaltTradingDenomsAminoMsg {
    return {
      type: "bze/x/guardian/MsgHaltTradingDenoms",
      value: MsgHaltTradingDenoms.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgHaltTradingDenomsProtoMsg): MsgHaltTradingDenoms {
    return MsgHaltTradingDenoms.decode(message.value);
  },
  toProto(message: MsgHaltTradingDenoms): Uint8Array {
    return MsgHaltTradingDenoms.encode(message).finish();
  },
  toProtoMsg(message: MsgHaltTradingDenoms): MsgHaltTradingDenomsProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgHaltTradingDenoms",
      value: MsgHaltTradingDenoms.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgHaltTradingDenomsResponse(): MsgHaltTradingDenomsResponse {
  return {};
}
/**
 * MsgHaltTradingDenomsResponse defines the response structure for executing a
 * MsgHaltTradingDenoms message.
 * @name MsgHaltTradingDenomsResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltTradingDenomsResponse
 */
export const MsgHaltTradingDenomsResponse = {
  typeUrl: "/bze.guardian.v1.MsgHaltTradingDenomsResponse",
  is(o: any): o is MsgHaltTradingDenomsResponse {
    return o && o.$typeUrl === MsgHaltTradingDenomsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgHaltTradingDenomsResponseSDKType {
    return o && o.$typeUrl === MsgHaltTradingDenomsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgHaltTradingDenomsResponseAmino {
    return o && o.$typeUrl === MsgHaltTradingDenomsResponse.typeUrl;
  },
  encode(_: MsgHaltTradingDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHaltTradingDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHaltTradingDenomsResponse();
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
  fromPartial(_: Partial<MsgHaltTradingDenomsResponse>): MsgHaltTradingDenomsResponse {
    const message = createBaseMsgHaltTradingDenomsResponse();
    return message;
  },
  fromAmino(_: MsgHaltTradingDenomsResponseAmino): MsgHaltTradingDenomsResponse {
    const message = createBaseMsgHaltTradingDenomsResponse();
    return message;
  },
  toAmino(_: MsgHaltTradingDenomsResponse): MsgHaltTradingDenomsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgHaltTradingDenomsResponseAminoMsg): MsgHaltTradingDenomsResponse {
    return MsgHaltTradingDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgHaltTradingDenomsResponseProtoMsg): MsgHaltTradingDenomsResponse {
    return MsgHaltTradingDenomsResponse.decode(message.value);
  },
  toProto(message: MsgHaltTradingDenomsResponse): Uint8Array {
    return MsgHaltTradingDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgHaltTradingDenomsResponse): MsgHaltTradingDenomsResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgHaltTradingDenomsResponse",
      value: MsgHaltTradingDenomsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgHaltChain(): MsgHaltChain {
  return {
    signer: "",
    reason: ""
  };
}
/**
 * MsgHaltChain is the Msg/HaltChain request type.
 * @name MsgHaltChain
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChain
 */
export const MsgHaltChain = {
  typeUrl: "/bze.guardian.v1.MsgHaltChain",
  aminoType: "bze/x/guardian/MsgHaltChain",
  is(o: any): o is MsgHaltChain {
    return o && (o.$typeUrl === MsgHaltChain.typeUrl || typeof o.signer === "string" && typeof o.reason === "string");
  },
  isSDK(o: any): o is MsgHaltChainSDKType {
    return o && (o.$typeUrl === MsgHaltChain.typeUrl || typeof o.signer === "string" && typeof o.reason === "string");
  },
  isAmino(o: any): o is MsgHaltChainAmino {
    return o && (o.$typeUrl === MsgHaltChain.typeUrl || typeof o.signer === "string" && typeof o.reason === "string");
  },
  encode(message: MsgHaltChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHaltChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHaltChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgHaltChain>): MsgHaltChain {
    const message = createBaseMsgHaltChain();
    message.signer = object.signer ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgHaltChainAmino): MsgHaltChain {
    const message = createBaseMsgHaltChain();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgHaltChain): MsgHaltChainAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgHaltChainAminoMsg): MsgHaltChain {
    return MsgHaltChain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgHaltChain): MsgHaltChainAminoMsg {
    return {
      type: "bze/x/guardian/MsgHaltChain",
      value: MsgHaltChain.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgHaltChainProtoMsg): MsgHaltChain {
    return MsgHaltChain.decode(message.value);
  },
  toProto(message: MsgHaltChain): Uint8Array {
    return MsgHaltChain.encode(message).finish();
  },
  toProtoMsg(message: MsgHaltChain): MsgHaltChainProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgHaltChain",
      value: MsgHaltChain.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgHaltChainResponse(): MsgHaltChainResponse {
  return {
    name: "",
    height: BigInt(0)
  };
}
/**
 * MsgHaltChainResponse defines the response structure for executing a
 * MsgHaltChain message.
 * @name MsgHaltChainResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgHaltChainResponse
 */
export const MsgHaltChainResponse = {
  typeUrl: "/bze.guardian.v1.MsgHaltChainResponse",
  is(o: any): o is MsgHaltChainResponse {
    return o && (o.$typeUrl === MsgHaltChainResponse.typeUrl || typeof o.name === "string" && typeof o.height === "bigint");
  },
  isSDK(o: any): o is MsgHaltChainResponseSDKType {
    return o && (o.$typeUrl === MsgHaltChainResponse.typeUrl || typeof o.name === "string" && typeof o.height === "bigint");
  },
  isAmino(o: any): o is MsgHaltChainResponseAmino {
    return o && (o.$typeUrl === MsgHaltChainResponse.typeUrl || typeof o.name === "string" && typeof o.height === "bigint");
  },
  encode(message: MsgHaltChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgHaltChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHaltChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgHaltChainResponse>): MsgHaltChainResponse {
    const message = createBaseMsgHaltChainResponse();
    message.name = object.name ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgHaltChainResponseAmino): MsgHaltChainResponse {
    const message = createBaseMsgHaltChainResponse();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: MsgHaltChainResponse): MsgHaltChainResponseAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgHaltChainResponseAminoMsg): MsgHaltChainResponse {
    return MsgHaltChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgHaltChainResponseProtoMsg): MsgHaltChainResponse {
    return MsgHaltChainResponse.decode(message.value);
  },
  toProto(message: MsgHaltChainResponse): Uint8Array {
    return MsgHaltChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgHaltChainResponse): MsgHaltChainResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgHaltChainResponse",
      value: MsgHaltChainResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgPauseAutomation(): MsgPauseAutomation {
  return {
    signer: ""
  };
}
/**
 * MsgPauseAutomation is the Msg/PauseAutomation request type.
 * @name MsgPauseAutomation
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomation
 */
export const MsgPauseAutomation = {
  typeUrl: "/bze.guardian.v1.MsgPauseAutomation",
  aminoType: "bze/x/guardian/MsgPauseAutomation",
  is(o: any): o is MsgPauseAutomation {
    return o && (o.$typeUrl === MsgPauseAutomation.typeUrl || typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgPauseAutomationSDKType {
    return o && (o.$typeUrl === MsgPauseAutomation.typeUrl || typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgPauseAutomationAmino {
    return o && (o.$typeUrl === MsgPauseAutomation.typeUrl || typeof o.signer === "string");
  },
  encode(message: MsgPauseAutomation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPauseAutomation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseAutomation();
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
  fromPartial(object: Partial<MsgPauseAutomation>): MsgPauseAutomation {
    const message = createBaseMsgPauseAutomation();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgPauseAutomationAmino): MsgPauseAutomation {
    const message = createBaseMsgPauseAutomation();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgPauseAutomation): MsgPauseAutomationAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgPauseAutomationAminoMsg): MsgPauseAutomation {
    return MsgPauseAutomation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPauseAutomation): MsgPauseAutomationAminoMsg {
    return {
      type: "bze/x/guardian/MsgPauseAutomation",
      value: MsgPauseAutomation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPauseAutomationProtoMsg): MsgPauseAutomation {
    return MsgPauseAutomation.decode(message.value);
  },
  toProto(message: MsgPauseAutomation): Uint8Array {
    return MsgPauseAutomation.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseAutomation): MsgPauseAutomationProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgPauseAutomation",
      value: MsgPauseAutomation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgPauseAutomationResponse(): MsgPauseAutomationResponse {
  return {};
}
/**
 * MsgPauseAutomationResponse defines the response structure for executing a
 * MsgPauseAutomation message.
 * @name MsgPauseAutomationResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgPauseAutomationResponse
 */
export const MsgPauseAutomationResponse = {
  typeUrl: "/bze.guardian.v1.MsgPauseAutomationResponse",
  is(o: any): o is MsgPauseAutomationResponse {
    return o && o.$typeUrl === MsgPauseAutomationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgPauseAutomationResponseSDKType {
    return o && o.$typeUrl === MsgPauseAutomationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgPauseAutomationResponseAmino {
    return o && o.$typeUrl === MsgPauseAutomationResponse.typeUrl;
  },
  encode(_: MsgPauseAutomationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPauseAutomationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseAutomationResponse();
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
  fromPartial(_: Partial<MsgPauseAutomationResponse>): MsgPauseAutomationResponse {
    const message = createBaseMsgPauseAutomationResponse();
    return message;
  },
  fromAmino(_: MsgPauseAutomationResponseAmino): MsgPauseAutomationResponse {
    const message = createBaseMsgPauseAutomationResponse();
    return message;
  },
  toAmino(_: MsgPauseAutomationResponse): MsgPauseAutomationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPauseAutomationResponseAminoMsg): MsgPauseAutomationResponse {
    return MsgPauseAutomationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPauseAutomationResponseProtoMsg): MsgPauseAutomationResponse {
    return MsgPauseAutomationResponse.decode(message.value);
  },
  toProto(message: MsgPauseAutomationResponse): Uint8Array {
    return MsgPauseAutomationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseAutomationResponse): MsgPauseAutomationResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgPauseAutomationResponse",
      value: MsgPauseAutomationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgResumeAutomation(): MsgResumeAutomation {
  return {
    authority: ""
  };
}
/**
 * MsgResumeAutomation is the Msg/ResumeAutomation request type.
 * @name MsgResumeAutomation
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomation
 */
export const MsgResumeAutomation = {
  typeUrl: "/bze.guardian.v1.MsgResumeAutomation",
  aminoType: "bze/x/guardian/MsgResumeAutomation",
  is(o: any): o is MsgResumeAutomation {
    return o && (o.$typeUrl === MsgResumeAutomation.typeUrl || typeof o.authority === "string");
  },
  isSDK(o: any): o is MsgResumeAutomationSDKType {
    return o && (o.$typeUrl === MsgResumeAutomation.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is MsgResumeAutomationAmino {
    return o && (o.$typeUrl === MsgResumeAutomation.typeUrl || typeof o.authority === "string");
  },
  encode(message: MsgResumeAutomation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResumeAutomation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeAutomation();
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
  fromPartial(object: Partial<MsgResumeAutomation>): MsgResumeAutomation {
    const message = createBaseMsgResumeAutomation();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgResumeAutomationAmino): MsgResumeAutomation {
    const message = createBaseMsgResumeAutomation();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgResumeAutomation): MsgResumeAutomationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgResumeAutomationAminoMsg): MsgResumeAutomation {
    return MsgResumeAutomation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResumeAutomation): MsgResumeAutomationAminoMsg {
    return {
      type: "bze/x/guardian/MsgResumeAutomation",
      value: MsgResumeAutomation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResumeAutomationProtoMsg): MsgResumeAutomation {
    return MsgResumeAutomation.decode(message.value);
  },
  toProto(message: MsgResumeAutomation): Uint8Array {
    return MsgResumeAutomation.encode(message).finish();
  },
  toProtoMsg(message: MsgResumeAutomation): MsgResumeAutomationProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgResumeAutomation",
      value: MsgResumeAutomation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgResumeAutomationResponse(): MsgResumeAutomationResponse {
  return {};
}
/**
 * MsgResumeAutomationResponse defines the response structure for executing a
 * MsgResumeAutomation message.
 * @name MsgResumeAutomationResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgResumeAutomationResponse
 */
export const MsgResumeAutomationResponse = {
  typeUrl: "/bze.guardian.v1.MsgResumeAutomationResponse",
  is(o: any): o is MsgResumeAutomationResponse {
    return o && o.$typeUrl === MsgResumeAutomationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgResumeAutomationResponseSDKType {
    return o && o.$typeUrl === MsgResumeAutomationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgResumeAutomationResponseAmino {
    return o && o.$typeUrl === MsgResumeAutomationResponse.typeUrl;
  },
  encode(_: MsgResumeAutomationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResumeAutomationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeAutomationResponse();
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
  fromPartial(_: Partial<MsgResumeAutomationResponse>): MsgResumeAutomationResponse {
    const message = createBaseMsgResumeAutomationResponse();
    return message;
  },
  fromAmino(_: MsgResumeAutomationResponseAmino): MsgResumeAutomationResponse {
    const message = createBaseMsgResumeAutomationResponse();
    return message;
  },
  toAmino(_: MsgResumeAutomationResponse): MsgResumeAutomationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResumeAutomationResponseAminoMsg): MsgResumeAutomationResponse {
    return MsgResumeAutomationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResumeAutomationResponseProtoMsg): MsgResumeAutomationResponse {
    return MsgResumeAutomationResponse.decode(message.value);
  },
  toProto(message: MsgResumeAutomationResponse): Uint8Array {
    return MsgResumeAutomationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResumeAutomationResponse): MsgResumeAutomationResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgResumeAutomationResponse",
      value: MsgResumeAutomationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCloseChannel(): MsgCloseChannel {
  return {
    signer: "",
    channelId: ""
  };
}
/**
 * MsgCloseChannel is the Msg/CloseChannel request type.
 * @name MsgCloseChannel
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannel
 */
export const MsgCloseChannel = {
  typeUrl: "/bze.guardian.v1.MsgCloseChannel",
  aminoType: "bze/x/guardian/MsgCloseChannel",
  is(o: any): o is MsgCloseChannel {
    return o && (o.$typeUrl === MsgCloseChannel.typeUrl || typeof o.signer === "string" && typeof o.channelId === "string");
  },
  isSDK(o: any): o is MsgCloseChannelSDKType {
    return o && (o.$typeUrl === MsgCloseChannel.typeUrl || typeof o.signer === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is MsgCloseChannelAmino {
    return o && (o.$typeUrl === MsgCloseChannel.typeUrl || typeof o.signer === "string" && typeof o.channel_id === "string");
  },
  encode(message: MsgCloseChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseChannel();
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
  fromPartial(object: Partial<MsgCloseChannel>): MsgCloseChannel {
    const message = createBaseMsgCloseChannel();
    message.signer = object.signer ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: MsgCloseChannelAmino): MsgCloseChannel {
    const message = createBaseMsgCloseChannel();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: MsgCloseChannel): MsgCloseChannelAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: MsgCloseChannelAminoMsg): MsgCloseChannel {
    return MsgCloseChannel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseChannel): MsgCloseChannelAminoMsg {
    return {
      type: "bze/x/guardian/MsgCloseChannel",
      value: MsgCloseChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseChannelProtoMsg): MsgCloseChannel {
    return MsgCloseChannel.decode(message.value);
  },
  toProto(message: MsgCloseChannel): Uint8Array {
    return MsgCloseChannel.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseChannel): MsgCloseChannelProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgCloseChannel",
      value: MsgCloseChannel.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCloseChannelResponse(): MsgCloseChannelResponse {
  return {};
}
/**
 * MsgCloseChannelResponse defines the response structure for executing a
 * MsgCloseChannel message.
 * @name MsgCloseChannelResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgCloseChannelResponse
 */
export const MsgCloseChannelResponse = {
  typeUrl: "/bze.guardian.v1.MsgCloseChannelResponse",
  is(o: any): o is MsgCloseChannelResponse {
    return o && o.$typeUrl === MsgCloseChannelResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCloseChannelResponseSDKType {
    return o && o.$typeUrl === MsgCloseChannelResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCloseChannelResponseAmino {
    return o && o.$typeUrl === MsgCloseChannelResponse.typeUrl;
  },
  encode(_: MsgCloseChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseChannelResponse();
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
  fromPartial(_: Partial<MsgCloseChannelResponse>): MsgCloseChannelResponse {
    const message = createBaseMsgCloseChannelResponse();
    return message;
  },
  fromAmino(_: MsgCloseChannelResponseAmino): MsgCloseChannelResponse {
    const message = createBaseMsgCloseChannelResponse();
    return message;
  },
  toAmino(_: MsgCloseChannelResponse): MsgCloseChannelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseChannelResponseAminoMsg): MsgCloseChannelResponse {
    return MsgCloseChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseChannelResponseProtoMsg): MsgCloseChannelResponse {
    return MsgCloseChannelResponse.decode(message.value);
  },
  toProto(message: MsgCloseChannelResponse): Uint8Array {
    return MsgCloseChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseChannelResponse): MsgCloseChannelResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgCloseChannelResponse",
      value: MsgCloseChannelResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgReopenChannel(): MsgReopenChannel {
  return {
    authority: "",
    channelId: ""
  };
}
/**
 * MsgReopenChannel is the Msg/ReopenChannel request type.
 * @name MsgReopenChannel
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannel
 */
export const MsgReopenChannel = {
  typeUrl: "/bze.guardian.v1.MsgReopenChannel",
  aminoType: "bze/x/guardian/MsgReopenChannel",
  is(o: any): o is MsgReopenChannel {
    return o && (o.$typeUrl === MsgReopenChannel.typeUrl || typeof o.authority === "string" && typeof o.channelId === "string");
  },
  isSDK(o: any): o is MsgReopenChannelSDKType {
    return o && (o.$typeUrl === MsgReopenChannel.typeUrl || typeof o.authority === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is MsgReopenChannelAmino {
    return o && (o.$typeUrl === MsgReopenChannel.typeUrl || typeof o.authority === "string" && typeof o.channel_id === "string");
  },
  encode(message: MsgReopenChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReopenChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReopenChannel();
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
  fromPartial(object: Partial<MsgReopenChannel>): MsgReopenChannel {
    const message = createBaseMsgReopenChannel();
    message.authority = object.authority ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: MsgReopenChannelAmino): MsgReopenChannel {
    const message = createBaseMsgReopenChannel();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: MsgReopenChannel): MsgReopenChannelAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: MsgReopenChannelAminoMsg): MsgReopenChannel {
    return MsgReopenChannel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReopenChannel): MsgReopenChannelAminoMsg {
    return {
      type: "bze/x/guardian/MsgReopenChannel",
      value: MsgReopenChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReopenChannelProtoMsg): MsgReopenChannel {
    return MsgReopenChannel.decode(message.value);
  },
  toProto(message: MsgReopenChannel): Uint8Array {
    return MsgReopenChannel.encode(message).finish();
  },
  toProtoMsg(message: MsgReopenChannel): MsgReopenChannelProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgReopenChannel",
      value: MsgReopenChannel.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgReopenChannelResponse(): MsgReopenChannelResponse {
  return {};
}
/**
 * MsgReopenChannelResponse defines the response structure for executing a
 * MsgReopenChannel message.
 * @name MsgReopenChannelResponse
 * @package bze.guardian.v1
 * @see proto type: bze.guardian.v1.MsgReopenChannelResponse
 */
export const MsgReopenChannelResponse = {
  typeUrl: "/bze.guardian.v1.MsgReopenChannelResponse",
  is(o: any): o is MsgReopenChannelResponse {
    return o && o.$typeUrl === MsgReopenChannelResponse.typeUrl;
  },
  isSDK(o: any): o is MsgReopenChannelResponseSDKType {
    return o && o.$typeUrl === MsgReopenChannelResponse.typeUrl;
  },
  isAmino(o: any): o is MsgReopenChannelResponseAmino {
    return o && o.$typeUrl === MsgReopenChannelResponse.typeUrl;
  },
  encode(_: MsgReopenChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReopenChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReopenChannelResponse();
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
  fromPartial(_: Partial<MsgReopenChannelResponse>): MsgReopenChannelResponse {
    const message = createBaseMsgReopenChannelResponse();
    return message;
  },
  fromAmino(_: MsgReopenChannelResponseAmino): MsgReopenChannelResponse {
    const message = createBaseMsgReopenChannelResponse();
    return message;
  },
  toAmino(_: MsgReopenChannelResponse): MsgReopenChannelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReopenChannelResponseAminoMsg): MsgReopenChannelResponse {
    return MsgReopenChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReopenChannelResponseProtoMsg): MsgReopenChannelResponse {
    return MsgReopenChannelResponse.decode(message.value);
  },
  toProto(message: MsgReopenChannelResponse): Uint8Array {
    return MsgReopenChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReopenChannelResponse): MsgReopenChannelResponseProtoMsg {
    return {
      typeUrl: "/bze.guardian.v1.MsgReopenChannelResponse",
      value: MsgReopenChannelResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};