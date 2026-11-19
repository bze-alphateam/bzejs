//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgTightenRateLimit, MsgBlockDenom, MsgUnblockDenom, MsgDisableMessages, MsgHaltTradingDenoms, MsgHaltChain, MsgPauseAutomation, MsgResumeAutomation, MsgCloseChannel, MsgReopenChannel } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * TightenRateLimit lowers the send and receive quotas of an existing IBC
 * rate limit. It can never raise a quota, change the window or add a limit.
 * @name tightenRateLimit
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.TightenRateLimit
 */
export const tightenRateLimit = buildTx<MsgTightenRateLimit>({
  msg: MsgTightenRateLimit
});
/**
 * BlockDenom puts a denom on the rate limit module's blacklist: every ICS-20
 * transfer of the denom is refused, in both directions, on every channel.
 * @name blockDenom
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.BlockDenom
 */
export const blockDenom = buildTx<MsgBlockDenom>({
  msg: MsgBlockDenom
});
/**
 * UnblockDenom takes a denom off the blacklist. Governance only.
 * @name unblockDenom
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.UnblockDenom
 */
export const unblockDenom = buildTx<MsgUnblockDenom>({
  msg: MsgUnblockDenom
});
/**
 * DisableMessages adds message types to the x/circuit disable list: the app
 * refuses every message of these types, sent in a tx or executed by another
 * module. Only governance re-enables them, with x/circuit's
 * MsgResetCircuitBreaker.
 * @name disableMessages
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.DisableMessages
 */
export const disableMessages = buildTx<MsgDisableMessages>({
  msg: MsgDisableMessages
});
/**
 * HaltTradingDenoms halts denoms on the DEX, with the same effect as the
 * tradebin governance message MsgHaltDenoms. Only governance lifts the halt,
 * through tradebin's MsgUnhaltDenoms.
 * @name haltTradingDenoms
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.HaltTradingDenoms
 */
export const haltTradingDenoms = buildTx<MsgHaltTradingDenoms>({
  msg: MsgHaltTradingDenoms
});
/**
 * HaltChain schedules an upgrade plan at the next block height: every node
 * stops there until it runs a binary that handles the plan, or until the
 * validators skip the height. It replaces any plan already scheduled.
 * @name haltChain
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.HaltChain
 */
export const haltChain = buildTx<MsgHaltChain>({
  msg: MsgHaltChain
});
/**
 * PauseAutomation stops the protocol's own automatic fund movements: the
 * txfeecollector EndBlock conversions and the burner's periodic burn.
 * @name pauseAutomation
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.PauseAutomation
 */
export const pauseAutomation = buildTx<MsgPauseAutomation>({
  msg: MsgPauseAutomation
});
/**
 * ResumeAutomation lifts the pause. Governance only.
 * @name resumeAutomation
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.ResumeAutomation
 */
export const resumeAutomation = buildTx<MsgResumeAutomation>({
  msg: MsgResumeAutomation
});
/**
 * CloseChannel stops every ICS-20 transfer on a transfer channel, in both
 * directions. The channel itself stays open in IBC.
 * @name closeChannel
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.CloseChannel
 */
export const closeChannel = buildTx<MsgCloseChannel>({
  msg: MsgCloseChannel
});
/**
 * ReopenChannel lets ICS-20 transfers through a closed channel again.
 * Governance only.
 * @name reopenChannel
 * @package bze.guardian.v1
 * @see proto service: bze.guardian.v1.ReopenChannel
 */
export const reopenChannel = buildTx<MsgReopenChannel>({
  msg: MsgReopenChannel
});