//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgCreateDao, MsgAdminExecute, MsgNominateAdmin, MsgAcceptAdminNomination, MsgWithdrawAdminNomination, MsgSubmitProposal, MsgVote, MsgCancelProposal, MsgSettleProposal, MsgCleanupProposal, MsgUpdateDaoConfig, MsgUpdateMetadata, MsgUpdateElectorate, MsgUpdateMembers } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.dao
 * @see proto service: bze.dao.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * CreateDao creates a DAO with its own derived account. Anyone can create one;
 * the creator pays the creation fee.
 * @name createDao
 * @package bze.dao
 * @see proto service: bze.dao.CreateDao
 */
export const createDao = buildTx<MsgCreateDao>({
  msg: MsgCreateDao
});
/**
 * AdminExecute lets the external admin of a DAO run messages as the DAO.
 * Every message must be signed by the DAO account only.
 * @name adminExecute
 * @package bze.dao
 * @see proto service: bze.dao.AdminExecute
 */
export const adminExecute = buildTx<MsgAdminExecute>({
  msg: MsgAdminExecute
});
/**
 * NominateAdmin is the first step of the admin handover: the current admin
 * nominates a successor, who accepts later. An empty nominee hands the DAO to
 * its own voters at once.
 * @name nominateAdmin
 * @package bze.dao
 * @see proto service: bze.dao.NominateAdmin
 */
export const nominateAdmin = buildTx<MsgNominateAdmin>({
  msg: MsgNominateAdmin
});
/**
 * AcceptAdminNomination is the second step of the admin handover: the
 * pending nominee accepts and becomes the DAO's admin.
 * @name acceptAdminNomination
 * @package bze.dao
 * @see proto service: bze.dao.AcceptAdminNomination
 */
export const acceptAdminNomination = buildTx<MsgAcceptAdminNomination>({
  msg: MsgAcceptAdminNomination
});
/**
 * WithdrawAdminNomination lets the current admin cancel a pending handover
 * before the nominee accepts it.
 * @name withdrawAdminNomination
 * @package bze.dao
 * @see proto service: bze.dao.WithdrawAdminNomination
 */
export const withdrawAdminNomination = buildTx<MsgWithdrawAdminNomination>({
  msg: MsgWithdrawAdminNomination
});
/**
 * SubmitProposal opens a proposal of zero or more messages the DAO runs if it
 * passes. It pins the DAO's config, electorate and quorum denominator.
 * @name submitProposal
 * @package bze.dao
 * @see proto service: bze.dao.SubmitProposal
 */
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
/**
 * Vote casts or changes a ballot on a proposal in voting.
 * @name vote
 * @package bze.dao
 * @see proto service: bze.dao.Vote
 */
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
/**
 * CancelProposal lets the proposer withdraw a proposal in voting.
 * @name cancelProposal
 * @package bze.dao
 * @see proto service: bze.dao.CancelProposal
 */
export const cancelProposal = buildTx<MsgCancelProposal>({
  msg: MsgCancelProposal
});
/**
 * SettleProposal decides a proposal after its voting period, releases its
 * deposit and runs a passed proposal's messages as the DAO; it also retries a
 * failed execution within the execution window and expires it afterwards.
 * Anyone can send it.
 * @name settleProposal
 * @package bze.dao
 * @see proto service: bze.dao.SettleProposal
 */
export const settleProposal = buildTx<MsgSettleProposal>({
  msg: MsgSettleProposal
});
/**
 * CleanupProposal deletes a finished proposal's ballots in batches and, once
 * none remain, the proposal itself. Anyone can send it.
 * @name cleanupProposal
 * @package bze.dao
 * @see proto service: bze.dao.CleanupProposal
 */
export const cleanupProposal = buildTx<MsgCleanupProposal>({
  msg: MsgCleanupProposal
});
/**
 * UpdateDaoConfig replaces a DAO's whole config. Only the DAO account signs
 * it, through a passed proposal or its admin's MsgAdminExecute. Open
 * proposals keep the config they pinned.
 * @name updateDaoConfig
 * @package bze.dao
 * @see proto service: bze.dao.UpdateDaoConfig
 */
export const updateDaoConfig = buildTx<MsgUpdateDaoConfig>({
  msg: MsgUpdateDaoConfig
});
/**
 * UpdateMetadata replaces a DAO's name and description. Only the DAO account
 * signs it, through a passed proposal or its admin's MsgAdminExecute.
 * @name updateMetadata
 * @package bze.dao
 * @see proto service: bze.dao.UpdateMetadata
 */
export const updateMetadata = buildTx<MsgUpdateMetadata>({
  msg: MsgUpdateMetadata
});
/**
 * UpdateElectorate replaces a stake DAO's reward sources. Only the DAO
 * account signs it; open proposals keep the electorate they pinned.
 * @name updateElectorate
 * @package bze.dao
 * @see proto service: bze.dao.UpdateElectorate
 */
export const updateElectorate = buildTx<MsgUpdateElectorate>({
  msg: MsgUpdateElectorate
});
/**
 * UpdateMembers adds and removes members of a static-list DAO. Only the DAO
 * account signs it; a removed member's ballots on open proposals stop
 * counting.
 * @name updateMembers
 * @package bze.dao
 * @see proto service: bze.dao.UpdateMembers
 */
export const updateMembers = buildTx<MsgUpdateMembers>({
  msg: MsgUpdateMembers
});