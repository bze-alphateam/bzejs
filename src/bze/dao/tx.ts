//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DaoType, DaoConfig, DaoConfigAmino, DaoConfigSDKType, StakeElectorate, StakeElectorateAmino, StakeElectorateSDKType, VoteOption, ProposalStatus } from "./store";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParams
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
  typeUrl: "/bze.dao.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParams
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
  type: "bze/x/dao/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParams
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bze.dao.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgCreateDao is the Msg/CreateDao request type.
 * @name MsgCreateDao
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDao
 */
export interface MsgCreateDao {
  /**
   * creator pays the creation fee.
   */
  creator: string;
  /**
   * admin is optional; empty makes the DAO self-owned (admin = the DAO address).
   */
  admin: string;
  type: DaoType;
  name: string;
  description: string;
  config: DaoConfig;
  /**
   * members is the electorate of a DAO_TYPE_STATIC_LIST DAO.
   */
  members: string[];
  /**
   * electorate is the electorate of a DAO_TYPE_STAKE DAO.
   */
  electorate?: StakeElectorate;
}
export interface MsgCreateDaoProtoMsg {
  typeUrl: "/bze.dao.MsgCreateDao";
  value: Uint8Array;
}
/**
 * MsgCreateDao is the Msg/CreateDao request type.
 * @name MsgCreateDaoAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDao
 */
export interface MsgCreateDaoAmino {
  /**
   * creator pays the creation fee.
   */
  creator?: string;
  /**
   * admin is optional; empty makes the DAO self-owned (admin = the DAO address).
   */
  admin?: string;
  type?: DaoType;
  name?: string;
  description?: string;
  config: DaoConfigAmino;
  /**
   * members is the electorate of a DAO_TYPE_STATIC_LIST DAO.
   */
  members?: string[];
  /**
   * electorate is the electorate of a DAO_TYPE_STAKE DAO.
   */
  electorate?: StakeElectorateAmino;
}
export interface MsgCreateDaoAminoMsg {
  type: "bze/x/dao/MsgCreateDao";
  value: MsgCreateDaoAmino;
}
/**
 * MsgCreateDao is the Msg/CreateDao request type.
 * @name MsgCreateDaoSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDao
 */
export interface MsgCreateDaoSDKType {
  creator: string;
  admin: string;
  type: DaoType;
  name: string;
  description: string;
  config: DaoConfigSDKType;
  members: string[];
  electorate?: StakeElectorateSDKType;
}
/**
 * MsgCreateDaoResponse is the Msg/CreateDao response type.
 * @name MsgCreateDaoResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDaoResponse
 */
export interface MsgCreateDaoResponse {
  id: bigint;
  address: string;
}
export interface MsgCreateDaoResponseProtoMsg {
  typeUrl: "/bze.dao.MsgCreateDaoResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDaoResponse is the Msg/CreateDao response type.
 * @name MsgCreateDaoResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDaoResponse
 */
export interface MsgCreateDaoResponseAmino {
  id?: string;
  address?: string;
}
export interface MsgCreateDaoResponseAminoMsg {
  type: "/bze.dao.MsgCreateDaoResponse";
  value: MsgCreateDaoResponseAmino;
}
/**
 * MsgCreateDaoResponse is the Msg/CreateDao response type.
 * @name MsgCreateDaoResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDaoResponse
 */
export interface MsgCreateDaoResponseSDKType {
  id: bigint;
  address: string;
}
/**
 * MsgAdminExecute is the Msg/AdminExecute request type.
 * @name MsgAdminExecute
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecute
 */
export interface MsgAdminExecute {
  /**
   * admin must be the DAO's admin at execution time; a self-owned DAO has none.
   */
  admin: string;
  daoId: bigint;
  /**
   * msgs run in order as the DAO; any failure reverts the whole transaction.
   */
  msgs: (Any)[] | Any[];
}
export interface MsgAdminExecuteProtoMsg {
  typeUrl: "/bze.dao.MsgAdminExecute";
  value: Uint8Array;
}
export type MsgAdminExecuteEncoded = Omit<MsgAdminExecute, "msgs"> & {
  /**
   * msgs run in order as the DAO; any failure reverts the whole transaction.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgAdminExecute is the Msg/AdminExecute request type.
 * @name MsgAdminExecuteAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecute
 */
export interface MsgAdminExecuteAmino {
  /**
   * admin must be the DAO's admin at execution time; a self-owned DAO has none.
   */
  admin?: string;
  dao_id?: string;
  /**
   * msgs run in order as the DAO; any failure reverts the whole transaction.
   */
  msgs?: AnyAmino[];
}
export interface MsgAdminExecuteAminoMsg {
  type: "bze/x/dao/MsgAdminExecute";
  value: MsgAdminExecuteAmino;
}
/**
 * MsgAdminExecute is the Msg/AdminExecute request type.
 * @name MsgAdminExecuteSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecute
 */
export interface MsgAdminExecuteSDKType {
  admin: string;
  dao_id: bigint;
  msgs: (AnySDKType)[];
}
/**
 * MsgAdminExecuteResponse is the Msg/AdminExecute response type.
 * @name MsgAdminExecuteResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecuteResponse
 */
export interface MsgAdminExecuteResponse {}
export interface MsgAdminExecuteResponseProtoMsg {
  typeUrl: "/bze.dao.MsgAdminExecuteResponse";
  value: Uint8Array;
}
/**
 * MsgAdminExecuteResponse is the Msg/AdminExecute response type.
 * @name MsgAdminExecuteResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecuteResponse
 */
export interface MsgAdminExecuteResponseAmino {}
export interface MsgAdminExecuteResponseAminoMsg {
  type: "/bze.dao.MsgAdminExecuteResponse";
  value: MsgAdminExecuteResponseAmino;
}
/**
 * MsgAdminExecuteResponse is the Msg/AdminExecute response type.
 * @name MsgAdminExecuteResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecuteResponse
 */
export interface MsgAdminExecuteResponseSDKType {}
/**
 * MsgNominateAdmin is the Msg/NominateAdmin request type.
 * @name MsgNominateAdmin
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdmin
 */
export interface MsgNominateAdmin {
  /**
   * authority must be the DAO's current admin (the DAO itself when self-owned).
   */
  authority: string;
  daoId: bigint;
  /**
   * nominee becomes the pending admin; empty makes the DAO self-owned at once.
   */
  nominee: string;
}
export interface MsgNominateAdminProtoMsg {
  typeUrl: "/bze.dao.MsgNominateAdmin";
  value: Uint8Array;
}
/**
 * MsgNominateAdmin is the Msg/NominateAdmin request type.
 * @name MsgNominateAdminAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdmin
 */
export interface MsgNominateAdminAmino {
  /**
   * authority must be the DAO's current admin (the DAO itself when self-owned).
   */
  authority?: string;
  dao_id?: string;
  /**
   * nominee becomes the pending admin; empty makes the DAO self-owned at once.
   */
  nominee?: string;
}
export interface MsgNominateAdminAminoMsg {
  type: "bze/x/dao/MsgNominateAdmin";
  value: MsgNominateAdminAmino;
}
/**
 * MsgNominateAdmin is the Msg/NominateAdmin request type.
 * @name MsgNominateAdminSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdmin
 */
export interface MsgNominateAdminSDKType {
  authority: string;
  dao_id: bigint;
  nominee: string;
}
/**
 * MsgNominateAdminResponse is the Msg/NominateAdmin response type.
 * @name MsgNominateAdminResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdminResponse
 */
export interface MsgNominateAdminResponse {}
export interface MsgNominateAdminResponseProtoMsg {
  typeUrl: "/bze.dao.MsgNominateAdminResponse";
  value: Uint8Array;
}
/**
 * MsgNominateAdminResponse is the Msg/NominateAdmin response type.
 * @name MsgNominateAdminResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdminResponse
 */
export interface MsgNominateAdminResponseAmino {}
export interface MsgNominateAdminResponseAminoMsg {
  type: "/bze.dao.MsgNominateAdminResponse";
  value: MsgNominateAdminResponseAmino;
}
/**
 * MsgNominateAdminResponse is the Msg/NominateAdmin response type.
 * @name MsgNominateAdminResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdminResponse
 */
export interface MsgNominateAdminResponseSDKType {}
/**
 * MsgAcceptAdminNomination is the Msg/AcceptAdminNomination request type.
 * @name MsgAcceptAdminNomination
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNomination
 */
export interface MsgAcceptAdminNomination {
  /**
   * nominee must be the DAO's pending admin; a DAO accepts through its own
   * proposal or admin.
   */
  nominee: string;
  daoId: bigint;
}
export interface MsgAcceptAdminNominationProtoMsg {
  typeUrl: "/bze.dao.MsgAcceptAdminNomination";
  value: Uint8Array;
}
/**
 * MsgAcceptAdminNomination is the Msg/AcceptAdminNomination request type.
 * @name MsgAcceptAdminNominationAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNomination
 */
export interface MsgAcceptAdminNominationAmino {
  /**
   * nominee must be the DAO's pending admin; a DAO accepts through its own
   * proposal or admin.
   */
  nominee?: string;
  dao_id?: string;
}
export interface MsgAcceptAdminNominationAminoMsg {
  type: "bze/x/dao/MsgAcceptAdminNomination";
  value: MsgAcceptAdminNominationAmino;
}
/**
 * MsgAcceptAdminNomination is the Msg/AcceptAdminNomination request type.
 * @name MsgAcceptAdminNominationSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNomination
 */
export interface MsgAcceptAdminNominationSDKType {
  nominee: string;
  dao_id: bigint;
}
/**
 * MsgAcceptAdminNominationResponse is the Msg/AcceptAdminNomination response type.
 * @name MsgAcceptAdminNominationResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNominationResponse
 */
export interface MsgAcceptAdminNominationResponse {}
export interface MsgAcceptAdminNominationResponseProtoMsg {
  typeUrl: "/bze.dao.MsgAcceptAdminNominationResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptAdminNominationResponse is the Msg/AcceptAdminNomination response type.
 * @name MsgAcceptAdminNominationResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNominationResponse
 */
export interface MsgAcceptAdminNominationResponseAmino {}
export interface MsgAcceptAdminNominationResponseAminoMsg {
  type: "/bze.dao.MsgAcceptAdminNominationResponse";
  value: MsgAcceptAdminNominationResponseAmino;
}
/**
 * MsgAcceptAdminNominationResponse is the Msg/AcceptAdminNomination response type.
 * @name MsgAcceptAdminNominationResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNominationResponse
 */
export interface MsgAcceptAdminNominationResponseSDKType {}
/**
 * MsgWithdrawAdminNomination is the Msg/WithdrawAdminNomination request type.
 * @name MsgWithdrawAdminNomination
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNomination
 */
export interface MsgWithdrawAdminNomination {
  /**
   * authority must be the DAO's current admin (the DAO itself when self-owned).
   */
  authority: string;
  daoId: bigint;
}
export interface MsgWithdrawAdminNominationProtoMsg {
  typeUrl: "/bze.dao.MsgWithdrawAdminNomination";
  value: Uint8Array;
}
/**
 * MsgWithdrawAdminNomination is the Msg/WithdrawAdminNomination request type.
 * @name MsgWithdrawAdminNominationAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNomination
 */
export interface MsgWithdrawAdminNominationAmino {
  /**
   * authority must be the DAO's current admin (the DAO itself when self-owned).
   */
  authority?: string;
  dao_id?: string;
}
export interface MsgWithdrawAdminNominationAminoMsg {
  type: "bze/x/dao/MsgWithdrawAdminNomination";
  value: MsgWithdrawAdminNominationAmino;
}
/**
 * MsgWithdrawAdminNomination is the Msg/WithdrawAdminNomination request type.
 * @name MsgWithdrawAdminNominationSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNomination
 */
export interface MsgWithdrawAdminNominationSDKType {
  authority: string;
  dao_id: bigint;
}
/**
 * MsgWithdrawAdminNominationResponse is the Msg/WithdrawAdminNomination response type.
 * @name MsgWithdrawAdminNominationResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNominationResponse
 */
export interface MsgWithdrawAdminNominationResponse {}
export interface MsgWithdrawAdminNominationResponseProtoMsg {
  typeUrl: "/bze.dao.MsgWithdrawAdminNominationResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawAdminNominationResponse is the Msg/WithdrawAdminNomination response type.
 * @name MsgWithdrawAdminNominationResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNominationResponse
 */
export interface MsgWithdrawAdminNominationResponseAmino {}
export interface MsgWithdrawAdminNominationResponseAminoMsg {
  type: "/bze.dao.MsgWithdrawAdminNominationResponse";
  value: MsgWithdrawAdminNominationResponseAmino;
}
/**
 * MsgWithdrawAdminNominationResponse is the Msg/WithdrawAdminNomination response type.
 * @name MsgWithdrawAdminNominationResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNominationResponse
 */
export interface MsgWithdrawAdminNominationResponseSDKType {}
/**
 * MsgSubmitProposal is the Msg/SubmitProposal request type.
 * @name MsgSubmitProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposal
 */
export interface MsgSubmitProposal {
  /**
   * proposer must be a voter of the DAO, unless the DAO has open submission;
   * the DAO account itself can always propose.
   */
  proposer: string;
  daoId: bigint;
  title: string;
  summary: string;
  /**
   * msgs run as the DAO if the proposal passes; each must be signed by the DAO only.
   */
  msgs: (Any)[] | Any[];
  /**
   * expedited asks for the shorter expedited voting period.
   */
  expedited: boolean;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/bze.dao.MsgSubmitProposal";
  value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "msgs"> & {
  /**
   * msgs run as the DAO if the proposal passes; each must be signed by the DAO only.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgSubmitProposal is the Msg/SubmitProposal request type.
 * @name MsgSubmitProposalAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposal
 */
export interface MsgSubmitProposalAmino {
  /**
   * proposer must be a voter of the DAO, unless the DAO has open submission;
   * the DAO account itself can always propose.
   */
  proposer?: string;
  dao_id?: string;
  title?: string;
  summary?: string;
  /**
   * msgs run as the DAO if the proposal passes; each must be signed by the DAO only.
   */
  msgs?: AnyAmino[];
  /**
   * expedited asks for the shorter expedited voting period.
   */
  expedited?: boolean;
}
export interface MsgSubmitProposalAminoMsg {
  type: "bze/x/dao/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposal is the Msg/SubmitProposal request type.
 * @name MsgSubmitProposalSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposal
 */
export interface MsgSubmitProposalSDKType {
  proposer: string;
  dao_id: bigint;
  title: string;
  summary: string;
  msgs: (AnySDKType)[];
  expedited: boolean;
}
/**
 * MsgSubmitProposalResponse is the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponse {
  proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/bze.dao.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitProposalResponse is the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponseAmino {
  proposal_id?: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "/bze.dao.MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/**
 * MsgSubmitProposalResponse is the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: bigint;
}
/**
 * MsgVote is the Msg/Vote request type.
 * @name MsgVote
 * @package bze.dao
 * @see proto type: bze.dao.MsgVote
 */
export interface MsgVote {
  voter: string;
  proposalId: bigint;
  option: VoteOption;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/bze.dao.MsgVote";
  value: Uint8Array;
}
/**
 * MsgVote is the Msg/Vote request type.
 * @name MsgVoteAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgVote
 */
export interface MsgVoteAmino {
  voter?: string;
  proposal_id?: string;
  option?: VoteOption;
}
export interface MsgVoteAminoMsg {
  type: "bze/x/dao/MsgVote";
  value: MsgVoteAmino;
}
/**
 * MsgVote is the Msg/Vote request type.
 * @name MsgVoteSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgVote
 */
export interface MsgVoteSDKType {
  voter: string;
  proposal_id: bigint;
  option: VoteOption;
}
/**
 * MsgVoteResponse is the Msg/Vote response type.
 * @name MsgVoteResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgVoteResponse
 */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/bze.dao.MsgVoteResponse";
  value: Uint8Array;
}
/**
 * MsgVoteResponse is the Msg/Vote response type.
 * @name MsgVoteResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgVoteResponse
 */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "/bze.dao.MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/**
 * MsgVoteResponse is the Msg/Vote response type.
 * @name MsgVoteResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgVoteResponse
 */
export interface MsgVoteResponseSDKType {}
/**
 * MsgCancelProposal is the Msg/CancelProposal request type.
 * @name MsgCancelProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposal
 */
export interface MsgCancelProposal {
  proposer: string;
  proposalId: bigint;
}
export interface MsgCancelProposalProtoMsg {
  typeUrl: "/bze.dao.MsgCancelProposal";
  value: Uint8Array;
}
/**
 * MsgCancelProposal is the Msg/CancelProposal request type.
 * @name MsgCancelProposalAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposal
 */
export interface MsgCancelProposalAmino {
  proposer?: string;
  proposal_id?: string;
}
export interface MsgCancelProposalAminoMsg {
  type: "bze/x/dao/MsgCancelProposal";
  value: MsgCancelProposalAmino;
}
/**
 * MsgCancelProposal is the Msg/CancelProposal request type.
 * @name MsgCancelProposalSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposal
 */
export interface MsgCancelProposalSDKType {
  proposer: string;
  proposal_id: bigint;
}
/**
 * MsgCancelProposalResponse is the Msg/CancelProposal response type.
 * @name MsgCancelProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposalResponse
 */
export interface MsgCancelProposalResponse {}
export interface MsgCancelProposalResponseProtoMsg {
  typeUrl: "/bze.dao.MsgCancelProposalResponse";
  value: Uint8Array;
}
/**
 * MsgCancelProposalResponse is the Msg/CancelProposal response type.
 * @name MsgCancelProposalResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposalResponse
 */
export interface MsgCancelProposalResponseAmino {}
export interface MsgCancelProposalResponseAminoMsg {
  type: "/bze.dao.MsgCancelProposalResponse";
  value: MsgCancelProposalResponseAmino;
}
/**
 * MsgCancelProposalResponse is the Msg/CancelProposal response type.
 * @name MsgCancelProposalResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposalResponse
 */
export interface MsgCancelProposalResponseSDKType {}
/**
 * MsgSettleProposal is the Msg/SettleProposal request type.
 * @name MsgSettleProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposal
 */
export interface MsgSettleProposal {
  sender: string;
  proposalId: bigint;
}
export interface MsgSettleProposalProtoMsg {
  typeUrl: "/bze.dao.MsgSettleProposal";
  value: Uint8Array;
}
/**
 * MsgSettleProposal is the Msg/SettleProposal request type.
 * @name MsgSettleProposalAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposal
 */
export interface MsgSettleProposalAmino {
  sender?: string;
  proposal_id?: string;
}
export interface MsgSettleProposalAminoMsg {
  type: "bze/x/dao/MsgSettleProposal";
  value: MsgSettleProposalAmino;
}
/**
 * MsgSettleProposal is the Msg/SettleProposal request type.
 * @name MsgSettleProposalSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposal
 */
export interface MsgSettleProposalSDKType {
  sender: string;
  proposal_id: bigint;
}
/**
 * MsgSettleProposalResponse is the Msg/SettleProposal response type.
 * @name MsgSettleProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposalResponse
 */
export interface MsgSettleProposalResponse {
  /**
   * status is the proposal's status after the settle.
   */
  status: ProposalStatus;
}
export interface MsgSettleProposalResponseProtoMsg {
  typeUrl: "/bze.dao.MsgSettleProposalResponse";
  value: Uint8Array;
}
/**
 * MsgSettleProposalResponse is the Msg/SettleProposal response type.
 * @name MsgSettleProposalResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposalResponse
 */
export interface MsgSettleProposalResponseAmino {
  /**
   * status is the proposal's status after the settle.
   */
  status?: ProposalStatus;
}
export interface MsgSettleProposalResponseAminoMsg {
  type: "/bze.dao.MsgSettleProposalResponse";
  value: MsgSettleProposalResponseAmino;
}
/**
 * MsgSettleProposalResponse is the Msg/SettleProposal response type.
 * @name MsgSettleProposalResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposalResponse
 */
export interface MsgSettleProposalResponseSDKType {
  status: ProposalStatus;
}
/**
 * MsgCleanupProposal is the Msg/CleanupProposal request type.
 * @name MsgCleanupProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposal
 */
export interface MsgCleanupProposal {
  sender: string;
  proposalId: bigint;
  /**
   * limit caps the ballots deleted by this message; 0 or anything above the
   * cleanup_batch_size param means cleanup_batch_size.
   */
  limit: bigint;
}
export interface MsgCleanupProposalProtoMsg {
  typeUrl: "/bze.dao.MsgCleanupProposal";
  value: Uint8Array;
}
/**
 * MsgCleanupProposal is the Msg/CleanupProposal request type.
 * @name MsgCleanupProposalAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposal
 */
export interface MsgCleanupProposalAmino {
  sender?: string;
  proposal_id?: string;
  /**
   * limit caps the ballots deleted by this message; 0 or anything above the
   * cleanup_batch_size param means cleanup_batch_size.
   */
  limit?: string;
}
export interface MsgCleanupProposalAminoMsg {
  type: "bze/x/dao/MsgCleanupProposal";
  value: MsgCleanupProposalAmino;
}
/**
 * MsgCleanupProposal is the Msg/CleanupProposal request type.
 * @name MsgCleanupProposalSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposal
 */
export interface MsgCleanupProposalSDKType {
  sender: string;
  proposal_id: bigint;
  limit: bigint;
}
/**
 * MsgCleanupProposalResponse is the Msg/CleanupProposal response type.
 * @name MsgCleanupProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposalResponse
 */
export interface MsgCleanupProposalResponse {
  /**
   * processed is the number of ballots deleted.
   */
  processed: bigint;
  /**
   * completed is true when no ballots remained and the proposal was deleted.
   */
  completed: boolean;
}
export interface MsgCleanupProposalResponseProtoMsg {
  typeUrl: "/bze.dao.MsgCleanupProposalResponse";
  value: Uint8Array;
}
/**
 * MsgCleanupProposalResponse is the Msg/CleanupProposal response type.
 * @name MsgCleanupProposalResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposalResponse
 */
export interface MsgCleanupProposalResponseAmino {
  /**
   * processed is the number of ballots deleted.
   */
  processed?: string;
  /**
   * completed is true when no ballots remained and the proposal was deleted.
   */
  completed?: boolean;
}
export interface MsgCleanupProposalResponseAminoMsg {
  type: "/bze.dao.MsgCleanupProposalResponse";
  value: MsgCleanupProposalResponseAmino;
}
/**
 * MsgCleanupProposalResponse is the Msg/CleanupProposal response type.
 * @name MsgCleanupProposalResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposalResponse
 */
export interface MsgCleanupProposalResponseSDKType {
  processed: bigint;
  completed: boolean;
}
/**
 * MsgUpdateDaoConfig is the Msg/UpdateDaoConfig request type.
 * @name MsgUpdateDaoConfig
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfig
 */
export interface MsgUpdateDaoConfig {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority: string;
  daoId: bigint;
  /**
   * config replaces the DAO's whole config; it is validated as in MsgCreateDao.
   */
  config: DaoConfig;
}
export interface MsgUpdateDaoConfigProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateDaoConfig";
  value: Uint8Array;
}
/**
 * MsgUpdateDaoConfig is the Msg/UpdateDaoConfig request type.
 * @name MsgUpdateDaoConfigAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfig
 */
export interface MsgUpdateDaoConfigAmino {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority?: string;
  dao_id?: string;
  /**
   * config replaces the DAO's whole config; it is validated as in MsgCreateDao.
   */
  config: DaoConfigAmino;
}
export interface MsgUpdateDaoConfigAminoMsg {
  type: "bze/x/dao/MsgUpdateDaoConfig";
  value: MsgUpdateDaoConfigAmino;
}
/**
 * MsgUpdateDaoConfig is the Msg/UpdateDaoConfig request type.
 * @name MsgUpdateDaoConfigSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfig
 */
export interface MsgUpdateDaoConfigSDKType {
  authority: string;
  dao_id: bigint;
  config: DaoConfigSDKType;
}
/**
 * MsgUpdateDaoConfigResponse is the Msg/UpdateDaoConfig response type.
 * @name MsgUpdateDaoConfigResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfigResponse
 */
export interface MsgUpdateDaoConfigResponse {}
export interface MsgUpdateDaoConfigResponseProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateDaoConfigResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDaoConfigResponse is the Msg/UpdateDaoConfig response type.
 * @name MsgUpdateDaoConfigResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfigResponse
 */
export interface MsgUpdateDaoConfigResponseAmino {}
export interface MsgUpdateDaoConfigResponseAminoMsg {
  type: "/bze.dao.MsgUpdateDaoConfigResponse";
  value: MsgUpdateDaoConfigResponseAmino;
}
/**
 * MsgUpdateDaoConfigResponse is the Msg/UpdateDaoConfig response type.
 * @name MsgUpdateDaoConfigResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfigResponse
 */
export interface MsgUpdateDaoConfigResponseSDKType {}
/**
 * MsgUpdateMetadata is the Msg/UpdateMetadata request type.
 * @name MsgUpdateMetadata
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadata
 */
export interface MsgUpdateMetadata {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority: string;
  daoId: bigint;
  /**
   * name and description both replace the stored values, as in MsgCreateDao.
   */
  name: string;
  description: string;
}
export interface MsgUpdateMetadataProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateMetadata";
  value: Uint8Array;
}
/**
 * MsgUpdateMetadata is the Msg/UpdateMetadata request type.
 * @name MsgUpdateMetadataAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadata
 */
export interface MsgUpdateMetadataAmino {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority?: string;
  dao_id?: string;
  /**
   * name and description both replace the stored values, as in MsgCreateDao.
   */
  name?: string;
  description?: string;
}
export interface MsgUpdateMetadataAminoMsg {
  type: "bze/x/dao/MsgUpdateMetadata";
  value: MsgUpdateMetadataAmino;
}
/**
 * MsgUpdateMetadata is the Msg/UpdateMetadata request type.
 * @name MsgUpdateMetadataSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadata
 */
export interface MsgUpdateMetadataSDKType {
  authority: string;
  dao_id: bigint;
  name: string;
  description: string;
}
/**
 * MsgUpdateMetadataResponse is the Msg/UpdateMetadata response type.
 * @name MsgUpdateMetadataResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadataResponse
 */
export interface MsgUpdateMetadataResponse {}
export interface MsgUpdateMetadataResponseProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateMetadataResponse is the Msg/UpdateMetadata response type.
 * @name MsgUpdateMetadataResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadataResponse
 */
export interface MsgUpdateMetadataResponseAmino {}
export interface MsgUpdateMetadataResponseAminoMsg {
  type: "/bze.dao.MsgUpdateMetadataResponse";
  value: MsgUpdateMetadataResponseAmino;
}
/**
 * MsgUpdateMetadataResponse is the Msg/UpdateMetadata response type.
 * @name MsgUpdateMetadataResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadataResponse
 */
export interface MsgUpdateMetadataResponseSDKType {}
/**
 * MsgUpdateElectorate is the Msg/UpdateElectorate request type.
 * @name MsgUpdateElectorate
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorate
 */
export interface MsgUpdateElectorate {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority: string;
  daoId: bigint;
  /**
   * electorate is the whole new source list; an empty one removes every source.
   */
  electorate?: StakeElectorate;
}
export interface MsgUpdateElectorateProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateElectorate";
  value: Uint8Array;
}
/**
 * MsgUpdateElectorate is the Msg/UpdateElectorate request type.
 * @name MsgUpdateElectorateAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorate
 */
export interface MsgUpdateElectorateAmino {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority?: string;
  dao_id?: string;
  /**
   * electorate is the whole new source list; an empty one removes every source.
   */
  electorate?: StakeElectorateAmino;
}
export interface MsgUpdateElectorateAminoMsg {
  type: "bze/x/dao/MsgUpdateElectorate";
  value: MsgUpdateElectorateAmino;
}
/**
 * MsgUpdateElectorate is the Msg/UpdateElectorate request type.
 * @name MsgUpdateElectorateSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorate
 */
export interface MsgUpdateElectorateSDKType {
  authority: string;
  dao_id: bigint;
  electorate?: StakeElectorateSDKType;
}
/**
 * MsgUpdateElectorateResponse is the Msg/UpdateElectorate response type.
 * @name MsgUpdateElectorateResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorateResponse
 */
export interface MsgUpdateElectorateResponse {}
export interface MsgUpdateElectorateResponseProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateElectorateResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateElectorateResponse is the Msg/UpdateElectorate response type.
 * @name MsgUpdateElectorateResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorateResponse
 */
export interface MsgUpdateElectorateResponseAmino {}
export interface MsgUpdateElectorateResponseAminoMsg {
  type: "/bze.dao.MsgUpdateElectorateResponse";
  value: MsgUpdateElectorateResponseAmino;
}
/**
 * MsgUpdateElectorateResponse is the Msg/UpdateElectorate response type.
 * @name MsgUpdateElectorateResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorateResponse
 */
export interface MsgUpdateElectorateResponseSDKType {}
/**
 * MsgUpdateMembers is the Msg/UpdateMembers request type.
 * @name MsgUpdateMembers
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembers
 */
export interface MsgUpdateMembers {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority: string;
  daoId: bigint;
  /**
   * add lists the new members; none may already be a member.
   */
  add: string[];
  /**
   * remove lists the members to drop; each must be a current member.
   */
  remove: string[];
}
export interface MsgUpdateMembersProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateMembers";
  value: Uint8Array;
}
/**
 * MsgUpdateMembers is the Msg/UpdateMembers request type.
 * @name MsgUpdateMembersAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembers
 */
export interface MsgUpdateMembersAmino {
  /**
   * authority must be the DAO's own address, never its admin directly.
   */
  authority?: string;
  dao_id?: string;
  /**
   * add lists the new members; none may already be a member.
   */
  add?: string[];
  /**
   * remove lists the members to drop; each must be a current member.
   */
  remove?: string[];
}
export interface MsgUpdateMembersAminoMsg {
  type: "bze/x/dao/MsgUpdateMembers";
  value: MsgUpdateMembersAmino;
}
/**
 * MsgUpdateMembers is the Msg/UpdateMembers request type.
 * @name MsgUpdateMembersSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembers
 */
export interface MsgUpdateMembersSDKType {
  authority: string;
  dao_id: bigint;
  add: string[];
  remove: string[];
}
/**
 * MsgUpdateMembersResponse is the Msg/UpdateMembers response type.
 * @name MsgUpdateMembersResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembersResponse
 */
export interface MsgUpdateMembersResponse {}
export interface MsgUpdateMembersResponseProtoMsg {
  typeUrl: "/bze.dao.MsgUpdateMembersResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateMembersResponse is the Msg/UpdateMembers response type.
 * @name MsgUpdateMembersResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembersResponse
 */
export interface MsgUpdateMembersResponseAmino {}
export interface MsgUpdateMembersResponseAminoMsg {
  type: "/bze.dao.MsgUpdateMembersResponse";
  value: MsgUpdateMembersResponseAmino;
}
/**
 * MsgUpdateMembersResponse is the Msg/UpdateMembers response type.
 * @name MsgUpdateMembersResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembersResponse
 */
export interface MsgUpdateMembersResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/bze.dao.MsgUpdateParams",
  aminoType: "bze/x/dao/MsgUpdateParams",
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
      type: "bze/x/dao/MsgUpdateParams",
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
      typeUrl: "/bze.dao.MsgUpdateParams",
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
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/bze.dao.MsgUpdateParamsResponse",
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
      typeUrl: "/bze.dao.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDao(): MsgCreateDao {
  return {
    creator: "",
    admin: "",
    type: 0,
    name: "",
    description: "",
    config: DaoConfig.fromPartial({}),
    members: [],
    electorate: undefined
  };
}
/**
 * MsgCreateDao is the Msg/CreateDao request type.
 * @name MsgCreateDao
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDao
 */
export const MsgCreateDao = {
  typeUrl: "/bze.dao.MsgCreateDao",
  aminoType: "bze/x/dao/MsgCreateDao",
  is(o: any): o is MsgCreateDao {
    return o && (o.$typeUrl === MsgCreateDao.typeUrl || typeof o.creator === "string" && typeof o.admin === "string" && isSet(o.type) && typeof o.name === "string" && typeof o.description === "string" && DaoConfig.is(o.config) && Array.isArray(o.members) && (!o.members.length || typeof o.members[0] === "string"));
  },
  isSDK(o: any): o is MsgCreateDaoSDKType {
    return o && (o.$typeUrl === MsgCreateDao.typeUrl || typeof o.creator === "string" && typeof o.admin === "string" && isSet(o.type) && typeof o.name === "string" && typeof o.description === "string" && DaoConfig.isSDK(o.config) && Array.isArray(o.members) && (!o.members.length || typeof o.members[0] === "string"));
  },
  isAmino(o: any): o is MsgCreateDaoAmino {
    return o && (o.$typeUrl === MsgCreateDao.typeUrl || typeof o.creator === "string" && typeof o.admin === "string" && isSet(o.type) && typeof o.name === "string" && typeof o.description === "string" && DaoConfig.isAmino(o.config) && Array.isArray(o.members) && (!o.members.length || typeof o.members[0] === "string"));
  },
  encode(message: MsgCreateDao, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.config !== undefined) {
      DaoConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.members) {
      writer.uint32(58).string(v!);
    }
    if (message.electorate !== undefined) {
      StakeElectorate.encode(message.electorate, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDao {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDao();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.config = DaoConfig.decode(reader, reader.uint32());
          break;
        case 7:
          message.members.push(reader.string());
          break;
        case 8:
          message.electorate = StakeElectorate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDao>): MsgCreateDao {
    const message = createBaseMsgCreateDao();
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.config = object.config !== undefined && object.config !== null ? DaoConfig.fromPartial(object.config) : undefined;
    message.members = object.members?.map(e => e) || [];
    message.electorate = object.electorate !== undefined && object.electorate !== null ? StakeElectorate.fromPartial(object.electorate) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateDaoAmino): MsgCreateDao {
    const message = createBaseMsgCreateDao();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = DaoConfig.fromAmino(object.config);
    }
    message.members = object.members?.map(e => e) || [];
    if (object.electorate !== undefined && object.electorate !== null) {
      message.electorate = StakeElectorate.fromAmino(object.electorate);
    }
    return message;
  },
  toAmino(message: MsgCreateDao): MsgCreateDaoAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.config = message.config ? DaoConfig.toAmino(message.config) : DaoConfig.toAmino(DaoConfig.fromPartial({}));
    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = message.members;
    }
    obj.electorate = message.electorate ? StakeElectorate.toAmino(message.electorate) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDaoAminoMsg): MsgCreateDao {
    return MsgCreateDao.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDao): MsgCreateDaoAminoMsg {
    return {
      type: "bze/x/dao/MsgCreateDao",
      value: MsgCreateDao.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDaoProtoMsg): MsgCreateDao {
    return MsgCreateDao.decode(message.value);
  },
  toProto(message: MsgCreateDao): Uint8Array {
    return MsgCreateDao.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDao): MsgCreateDaoProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgCreateDao",
      value: MsgCreateDao.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgCreateDao.typeUrl)) {
      return;
    }
    DaoConfig.registerTypeUrl();
    StakeElectorate.registerTypeUrl();
  }
};
function createBaseMsgCreateDaoResponse(): MsgCreateDaoResponse {
  return {
    id: BigInt(0),
    address: ""
  };
}
/**
 * MsgCreateDaoResponse is the Msg/CreateDao response type.
 * @name MsgCreateDaoResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgCreateDaoResponse
 */
export const MsgCreateDaoResponse = {
  typeUrl: "/bze.dao.MsgCreateDaoResponse",
  is(o: any): o is MsgCreateDaoResponse {
    return o && (o.$typeUrl === MsgCreateDaoResponse.typeUrl || typeof o.id === "bigint" && typeof o.address === "string");
  },
  isSDK(o: any): o is MsgCreateDaoResponseSDKType {
    return o && (o.$typeUrl === MsgCreateDaoResponse.typeUrl || typeof o.id === "bigint" && typeof o.address === "string");
  },
  isAmino(o: any): o is MsgCreateDaoResponseAmino {
    return o && (o.$typeUrl === MsgCreateDaoResponse.typeUrl || typeof o.id === "bigint" && typeof o.address === "string");
  },
  encode(message: MsgCreateDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDaoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDaoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDaoResponse>): MsgCreateDaoResponse {
    const message = createBaseMsgCreateDaoResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDaoResponseAmino): MsgCreateDaoResponse {
    const message = createBaseMsgCreateDaoResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateDaoResponse): MsgCreateDaoResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDaoResponseAminoMsg): MsgCreateDaoResponse {
    return MsgCreateDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDaoResponseProtoMsg): MsgCreateDaoResponse {
    return MsgCreateDaoResponse.decode(message.value);
  },
  toProto(message: MsgCreateDaoResponse): Uint8Array {
    return MsgCreateDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDaoResponse): MsgCreateDaoResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgCreateDaoResponse",
      value: MsgCreateDaoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAdminExecute(): MsgAdminExecute {
  return {
    admin: "",
    daoId: BigInt(0),
    msgs: []
  };
}
/**
 * MsgAdminExecute is the Msg/AdminExecute request type.
 * @name MsgAdminExecute
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecute
 */
export const MsgAdminExecute = {
  typeUrl: "/bze.dao.MsgAdminExecute",
  aminoType: "bze/x/dao/MsgAdminExecute",
  is(o: any): o is MsgAdminExecute {
    return o && (o.$typeUrl === MsgAdminExecute.typeUrl || typeof o.admin === "string" && typeof o.daoId === "bigint" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])));
  },
  isSDK(o: any): o is MsgAdminExecuteSDKType {
    return o && (o.$typeUrl === MsgAdminExecute.typeUrl || typeof o.admin === "string" && typeof o.dao_id === "bigint" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])));
  },
  isAmino(o: any): o is MsgAdminExecuteAmino {
    return o && (o.$typeUrl === MsgAdminExecute.typeUrl || typeof o.admin === "string" && typeof o.dao_id === "bigint" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])));
  },
  encode(message: MsgAdminExecute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAdminExecute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdminExecute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAdminExecute>): MsgAdminExecute {
    const message = createBaseMsgAdminExecute();
    message.admin = object.admin ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    return message;
  },
  fromAmino(object: MsgAdminExecuteAmino): MsgAdminExecute {
    const message = createBaseMsgAdminExecute();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: MsgAdminExecute): MsgAdminExecuteAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAdminExecuteAminoMsg): MsgAdminExecute {
    return MsgAdminExecute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAdminExecute): MsgAdminExecuteAminoMsg {
    return {
      type: "bze/x/dao/MsgAdminExecute",
      value: MsgAdminExecute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAdminExecuteProtoMsg): MsgAdminExecute {
    return MsgAdminExecute.decode(message.value);
  },
  toProto(message: MsgAdminExecute): Uint8Array {
    return MsgAdminExecute.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminExecute): MsgAdminExecuteProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgAdminExecute",
      value: MsgAdminExecute.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAdminExecuteResponse(): MsgAdminExecuteResponse {
  return {};
}
/**
 * MsgAdminExecuteResponse is the Msg/AdminExecute response type.
 * @name MsgAdminExecuteResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgAdminExecuteResponse
 */
export const MsgAdminExecuteResponse = {
  typeUrl: "/bze.dao.MsgAdminExecuteResponse",
  is(o: any): o is MsgAdminExecuteResponse {
    return o && o.$typeUrl === MsgAdminExecuteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAdminExecuteResponseSDKType {
    return o && o.$typeUrl === MsgAdminExecuteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAdminExecuteResponseAmino {
    return o && o.$typeUrl === MsgAdminExecuteResponse.typeUrl;
  },
  encode(_: MsgAdminExecuteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAdminExecuteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdminExecuteResponse();
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
  fromPartial(_: Partial<MsgAdminExecuteResponse>): MsgAdminExecuteResponse {
    const message = createBaseMsgAdminExecuteResponse();
    return message;
  },
  fromAmino(_: MsgAdminExecuteResponseAmino): MsgAdminExecuteResponse {
    const message = createBaseMsgAdminExecuteResponse();
    return message;
  },
  toAmino(_: MsgAdminExecuteResponse): MsgAdminExecuteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAdminExecuteResponseAminoMsg): MsgAdminExecuteResponse {
    return MsgAdminExecuteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdminExecuteResponseProtoMsg): MsgAdminExecuteResponse {
    return MsgAdminExecuteResponse.decode(message.value);
  },
  toProto(message: MsgAdminExecuteResponse): Uint8Array {
    return MsgAdminExecuteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminExecuteResponse): MsgAdminExecuteResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgAdminExecuteResponse",
      value: MsgAdminExecuteResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgNominateAdmin(): MsgNominateAdmin {
  return {
    authority: "",
    daoId: BigInt(0),
    nominee: ""
  };
}
/**
 * MsgNominateAdmin is the Msg/NominateAdmin request type.
 * @name MsgNominateAdmin
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdmin
 */
export const MsgNominateAdmin = {
  typeUrl: "/bze.dao.MsgNominateAdmin",
  aminoType: "bze/x/dao/MsgNominateAdmin",
  is(o: any): o is MsgNominateAdmin {
    return o && (o.$typeUrl === MsgNominateAdmin.typeUrl || typeof o.authority === "string" && typeof o.daoId === "bigint" && typeof o.nominee === "string");
  },
  isSDK(o: any): o is MsgNominateAdminSDKType {
    return o && (o.$typeUrl === MsgNominateAdmin.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && typeof o.nominee === "string");
  },
  isAmino(o: any): o is MsgNominateAdminAmino {
    return o && (o.$typeUrl === MsgNominateAdmin.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && typeof o.nominee === "string");
  },
  encode(message: MsgNominateAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    if (message.nominee !== "") {
      writer.uint32(26).string(message.nominee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgNominateAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNominateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.nominee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgNominateAdmin>): MsgNominateAdmin {
    const message = createBaseMsgNominateAdmin();
    message.authority = object.authority ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.nominee = object.nominee ?? "";
    return message;
  },
  fromAmino(object: MsgNominateAdminAmino): MsgNominateAdmin {
    const message = createBaseMsgNominateAdmin();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.nominee !== undefined && object.nominee !== null) {
      message.nominee = object.nominee;
    }
    return message;
  },
  toAmino(message: MsgNominateAdmin): MsgNominateAdminAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.nominee = message.nominee === "" ? undefined : message.nominee;
    return obj;
  },
  fromAminoMsg(object: MsgNominateAdminAminoMsg): MsgNominateAdmin {
    return MsgNominateAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgNominateAdmin): MsgNominateAdminAminoMsg {
    return {
      type: "bze/x/dao/MsgNominateAdmin",
      value: MsgNominateAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgNominateAdminProtoMsg): MsgNominateAdmin {
    return MsgNominateAdmin.decode(message.value);
  },
  toProto(message: MsgNominateAdmin): Uint8Array {
    return MsgNominateAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgNominateAdmin): MsgNominateAdminProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgNominateAdmin",
      value: MsgNominateAdmin.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgNominateAdminResponse(): MsgNominateAdminResponse {
  return {};
}
/**
 * MsgNominateAdminResponse is the Msg/NominateAdmin response type.
 * @name MsgNominateAdminResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgNominateAdminResponse
 */
export const MsgNominateAdminResponse = {
  typeUrl: "/bze.dao.MsgNominateAdminResponse",
  is(o: any): o is MsgNominateAdminResponse {
    return o && o.$typeUrl === MsgNominateAdminResponse.typeUrl;
  },
  isSDK(o: any): o is MsgNominateAdminResponseSDKType {
    return o && o.$typeUrl === MsgNominateAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgNominateAdminResponseAmino {
    return o && o.$typeUrl === MsgNominateAdminResponse.typeUrl;
  },
  encode(_: MsgNominateAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgNominateAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNominateAdminResponse();
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
  fromPartial(_: Partial<MsgNominateAdminResponse>): MsgNominateAdminResponse {
    const message = createBaseMsgNominateAdminResponse();
    return message;
  },
  fromAmino(_: MsgNominateAdminResponseAmino): MsgNominateAdminResponse {
    const message = createBaseMsgNominateAdminResponse();
    return message;
  },
  toAmino(_: MsgNominateAdminResponse): MsgNominateAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgNominateAdminResponseAminoMsg): MsgNominateAdminResponse {
    return MsgNominateAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgNominateAdminResponseProtoMsg): MsgNominateAdminResponse {
    return MsgNominateAdminResponse.decode(message.value);
  },
  toProto(message: MsgNominateAdminResponse): Uint8Array {
    return MsgNominateAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgNominateAdminResponse): MsgNominateAdminResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgNominateAdminResponse",
      value: MsgNominateAdminResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAcceptAdminNomination(): MsgAcceptAdminNomination {
  return {
    nominee: "",
    daoId: BigInt(0)
  };
}
/**
 * MsgAcceptAdminNomination is the Msg/AcceptAdminNomination request type.
 * @name MsgAcceptAdminNomination
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNomination
 */
export const MsgAcceptAdminNomination = {
  typeUrl: "/bze.dao.MsgAcceptAdminNomination",
  aminoType: "bze/x/dao/MsgAcceptAdminNomination",
  is(o: any): o is MsgAcceptAdminNomination {
    return o && (o.$typeUrl === MsgAcceptAdminNomination.typeUrl || typeof o.nominee === "string" && typeof o.daoId === "bigint");
  },
  isSDK(o: any): o is MsgAcceptAdminNominationSDKType {
    return o && (o.$typeUrl === MsgAcceptAdminNomination.typeUrl || typeof o.nominee === "string" && typeof o.dao_id === "bigint");
  },
  isAmino(o: any): o is MsgAcceptAdminNominationAmino {
    return o && (o.$typeUrl === MsgAcceptAdminNomination.typeUrl || typeof o.nominee === "string" && typeof o.dao_id === "bigint");
  },
  encode(message: MsgAcceptAdminNomination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nominee !== "") {
      writer.uint32(10).string(message.nominee);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptAdminNomination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptAdminNomination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nominee = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAcceptAdminNomination>): MsgAcceptAdminNomination {
    const message = createBaseMsgAcceptAdminNomination();
    message.nominee = object.nominee ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAcceptAdminNominationAmino): MsgAcceptAdminNomination {
    const message = createBaseMsgAcceptAdminNomination();
    if (object.nominee !== undefined && object.nominee !== null) {
      message.nominee = object.nominee;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    return message;
  },
  toAmino(message: MsgAcceptAdminNomination): MsgAcceptAdminNominationAmino {
    const obj: any = {};
    obj.nominee = message.nominee === "" ? undefined : message.nominee;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptAdminNominationAminoMsg): MsgAcceptAdminNomination {
    return MsgAcceptAdminNomination.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptAdminNomination): MsgAcceptAdminNominationAminoMsg {
    return {
      type: "bze/x/dao/MsgAcceptAdminNomination",
      value: MsgAcceptAdminNomination.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptAdminNominationProtoMsg): MsgAcceptAdminNomination {
    return MsgAcceptAdminNomination.decode(message.value);
  },
  toProto(message: MsgAcceptAdminNomination): Uint8Array {
    return MsgAcceptAdminNomination.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptAdminNomination): MsgAcceptAdminNominationProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgAcceptAdminNomination",
      value: MsgAcceptAdminNomination.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAcceptAdminNominationResponse(): MsgAcceptAdminNominationResponse {
  return {};
}
/**
 * MsgAcceptAdminNominationResponse is the Msg/AcceptAdminNomination response type.
 * @name MsgAcceptAdminNominationResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgAcceptAdminNominationResponse
 */
export const MsgAcceptAdminNominationResponse = {
  typeUrl: "/bze.dao.MsgAcceptAdminNominationResponse",
  is(o: any): o is MsgAcceptAdminNominationResponse {
    return o && o.$typeUrl === MsgAcceptAdminNominationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAcceptAdminNominationResponseSDKType {
    return o && o.$typeUrl === MsgAcceptAdminNominationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAcceptAdminNominationResponseAmino {
    return o && o.$typeUrl === MsgAcceptAdminNominationResponse.typeUrl;
  },
  encode(_: MsgAcceptAdminNominationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptAdminNominationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptAdminNominationResponse();
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
  fromPartial(_: Partial<MsgAcceptAdminNominationResponse>): MsgAcceptAdminNominationResponse {
    const message = createBaseMsgAcceptAdminNominationResponse();
    return message;
  },
  fromAmino(_: MsgAcceptAdminNominationResponseAmino): MsgAcceptAdminNominationResponse {
    const message = createBaseMsgAcceptAdminNominationResponse();
    return message;
  },
  toAmino(_: MsgAcceptAdminNominationResponse): MsgAcceptAdminNominationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptAdminNominationResponseAminoMsg): MsgAcceptAdminNominationResponse {
    return MsgAcceptAdminNominationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptAdminNominationResponseProtoMsg): MsgAcceptAdminNominationResponse {
    return MsgAcceptAdminNominationResponse.decode(message.value);
  },
  toProto(message: MsgAcceptAdminNominationResponse): Uint8Array {
    return MsgAcceptAdminNominationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptAdminNominationResponse): MsgAcceptAdminNominationResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgAcceptAdminNominationResponse",
      value: MsgAcceptAdminNominationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgWithdrawAdminNomination(): MsgWithdrawAdminNomination {
  return {
    authority: "",
    daoId: BigInt(0)
  };
}
/**
 * MsgWithdrawAdminNomination is the Msg/WithdrawAdminNomination request type.
 * @name MsgWithdrawAdminNomination
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNomination
 */
export const MsgWithdrawAdminNomination = {
  typeUrl: "/bze.dao.MsgWithdrawAdminNomination",
  aminoType: "bze/x/dao/MsgWithdrawAdminNomination",
  is(o: any): o is MsgWithdrawAdminNomination {
    return o && (o.$typeUrl === MsgWithdrawAdminNomination.typeUrl || typeof o.authority === "string" && typeof o.daoId === "bigint");
  },
  isSDK(o: any): o is MsgWithdrawAdminNominationSDKType {
    return o && (o.$typeUrl === MsgWithdrawAdminNomination.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint");
  },
  isAmino(o: any): o is MsgWithdrawAdminNominationAmino {
    return o && (o.$typeUrl === MsgWithdrawAdminNomination.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint");
  },
  encode(message: MsgWithdrawAdminNomination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAdminNomination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAdminNomination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawAdminNomination>): MsgWithdrawAdminNomination {
    const message = createBaseMsgWithdrawAdminNomination();
    message.authority = object.authority ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawAdminNominationAmino): MsgWithdrawAdminNomination {
    const message = createBaseMsgWithdrawAdminNomination();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawAdminNomination): MsgWithdrawAdminNominationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAdminNominationAminoMsg): MsgWithdrawAdminNomination {
    return MsgWithdrawAdminNomination.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawAdminNomination): MsgWithdrawAdminNominationAminoMsg {
    return {
      type: "bze/x/dao/MsgWithdrawAdminNomination",
      value: MsgWithdrawAdminNomination.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawAdminNominationProtoMsg): MsgWithdrawAdminNomination {
    return MsgWithdrawAdminNomination.decode(message.value);
  },
  toProto(message: MsgWithdrawAdminNomination): Uint8Array {
    return MsgWithdrawAdminNomination.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAdminNomination): MsgWithdrawAdminNominationProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgWithdrawAdminNomination",
      value: MsgWithdrawAdminNomination.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgWithdrawAdminNominationResponse(): MsgWithdrawAdminNominationResponse {
  return {};
}
/**
 * MsgWithdrawAdminNominationResponse is the Msg/WithdrawAdminNomination response type.
 * @name MsgWithdrawAdminNominationResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgWithdrawAdminNominationResponse
 */
export const MsgWithdrawAdminNominationResponse = {
  typeUrl: "/bze.dao.MsgWithdrawAdminNominationResponse",
  is(o: any): o is MsgWithdrawAdminNominationResponse {
    return o && o.$typeUrl === MsgWithdrawAdminNominationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWithdrawAdminNominationResponseSDKType {
    return o && o.$typeUrl === MsgWithdrawAdminNominationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawAdminNominationResponseAmino {
    return o && o.$typeUrl === MsgWithdrawAdminNominationResponse.typeUrl;
  },
  encode(_: MsgWithdrawAdminNominationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAdminNominationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAdminNominationResponse();
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
  fromPartial(_: Partial<MsgWithdrawAdminNominationResponse>): MsgWithdrawAdminNominationResponse {
    const message = createBaseMsgWithdrawAdminNominationResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawAdminNominationResponseAmino): MsgWithdrawAdminNominationResponse {
    const message = createBaseMsgWithdrawAdminNominationResponse();
    return message;
  },
  toAmino(_: MsgWithdrawAdminNominationResponse): MsgWithdrawAdminNominationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAdminNominationResponseAminoMsg): MsgWithdrawAdminNominationResponse {
    return MsgWithdrawAdminNominationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawAdminNominationResponseProtoMsg): MsgWithdrawAdminNominationResponse {
    return MsgWithdrawAdminNominationResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawAdminNominationResponse): Uint8Array {
    return MsgWithdrawAdminNominationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAdminNominationResponse): MsgWithdrawAdminNominationResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgWithdrawAdminNominationResponse",
      value: MsgWithdrawAdminNominationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    proposer: "",
    daoId: BigInt(0),
    title: "",
    summary: "",
    msgs: [],
    expedited: false
  };
}
/**
 * MsgSubmitProposal is the Msg/SubmitProposal request type.
 * @name MsgSubmitProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposal
 */
export const MsgSubmitProposal = {
  typeUrl: "/bze.dao.MsgSubmitProposal",
  aminoType: "bze/x/dao/MsgSubmitProposal",
  is(o: any): o is MsgSubmitProposal {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.proposer === "string" && typeof o.daoId === "bigint" && typeof o.title === "string" && typeof o.summary === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.expedited === "boolean");
  },
  isSDK(o: any): o is MsgSubmitProposalSDKType {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.proposer === "string" && typeof o.dao_id === "bigint" && typeof o.title === "string" && typeof o.summary === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.expedited === "boolean");
  },
  isAmino(o: any): o is MsgSubmitProposalAmino {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.proposer === "string" && typeof o.dao_id === "bigint" && typeof o.title === "string" && typeof o.summary === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.expedited === "boolean");
  },
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(34).string(message.summary);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(42).fork()).ldelim();
    }
    if (message.expedited === true) {
      writer.uint32(48).bool(message.expedited);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.summary = reader.string();
          break;
        case 5:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 6:
          message.expedited = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.proposer = object.proposer ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.expedited = object.expedited ?? false;
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.expedited !== undefined && object.expedited !== null) {
      message.expedited = object.expedited;
    }
    return message;
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.summary = message.summary === "" ? undefined : message.summary;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.expedited = message.expedited === false ? undefined : message.expedited;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "bze/x/dao/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * MsgSubmitProposalResponse is the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgSubmitProposalResponse
 */
export const MsgSubmitProposalResponse = {
  typeUrl: "/bze.dao.MsgSubmitProposalResponse",
  is(o: any): o is MsgSubmitProposalResponse {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is MsgSubmitProposalResponseSDKType {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is MsgSubmitProposalResponseAmino {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgVote(): MsgVote {
  return {
    voter: "",
    proposalId: BigInt(0),
    option: 0
  };
}
/**
 * MsgVote is the Msg/Vote request type.
 * @name MsgVote
 * @package bze.dao
 * @see proto type: bze.dao.MsgVote
 */
export const MsgVote = {
  typeUrl: "/bze.dao.MsgVote",
  aminoType: "bze/x/dao/MsgVote",
  is(o: any): o is MsgVote {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.voter === "string" && typeof o.proposalId === "bigint" && isSet(o.option));
  },
  isSDK(o: any): o is MsgVoteSDKType {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.voter === "string" && typeof o.proposal_id === "bigint" && isSet(o.option));
  },
  isAmino(o: any): o is MsgVoteAmino {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.voter === "string" && typeof o.proposal_id === "bigint" && isSet(o.option));
  },
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.voter = object.voter ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.option = object.option ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    const message = createBaseMsgVote();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    return message;
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.option = message.option === 0 ? undefined : message.option;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "bze/x/dao/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
/**
 * MsgVoteResponse is the Msg/Vote response type.
 * @name MsgVoteResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgVoteResponse
 */
export const MsgVoteResponse = {
  typeUrl: "/bze.dao.MsgVoteResponse",
  is(o: any): o is MsgVoteResponse {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgVoteResponseSDKType {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVoteResponseAmino {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelProposal(): MsgCancelProposal {
  return {
    proposer: "",
    proposalId: BigInt(0)
  };
}
/**
 * MsgCancelProposal is the Msg/CancelProposal request type.
 * @name MsgCancelProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposal
 */
export const MsgCancelProposal = {
  typeUrl: "/bze.dao.MsgCancelProposal",
  aminoType: "bze/x/dao/MsgCancelProposal",
  is(o: any): o is MsgCancelProposal {
    return o && (o.$typeUrl === MsgCancelProposal.typeUrl || typeof o.proposer === "string" && typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is MsgCancelProposalSDKType {
    return o && (o.$typeUrl === MsgCancelProposal.typeUrl || typeof o.proposer === "string" && typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is MsgCancelProposalAmino {
    return o && (o.$typeUrl === MsgCancelProposal.typeUrl || typeof o.proposer === "string" && typeof o.proposal_id === "bigint");
  },
  encode(message: MsgCancelProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancelProposal>): MsgCancelProposal {
    const message = createBaseMsgCancelProposal();
    message.proposer = object.proposer ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelProposalAmino): MsgCancelProposal {
    const message = createBaseMsgCancelProposal();
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgCancelProposal): MsgCancelProposalAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelProposalAminoMsg): MsgCancelProposal {
    return MsgCancelProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelProposal): MsgCancelProposalAminoMsg {
    return {
      type: "bze/x/dao/MsgCancelProposal",
      value: MsgCancelProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelProposalProtoMsg): MsgCancelProposal {
    return MsgCancelProposal.decode(message.value);
  },
  toProto(message: MsgCancelProposal): Uint8Array {
    return MsgCancelProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelProposal): MsgCancelProposalProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgCancelProposal",
      value: MsgCancelProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelProposalResponse(): MsgCancelProposalResponse {
  return {};
}
/**
 * MsgCancelProposalResponse is the Msg/CancelProposal response type.
 * @name MsgCancelProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgCancelProposalResponse
 */
export const MsgCancelProposalResponse = {
  typeUrl: "/bze.dao.MsgCancelProposalResponse",
  is(o: any): o is MsgCancelProposalResponse {
    return o && o.$typeUrl === MsgCancelProposalResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelProposalResponseSDKType {
    return o && o.$typeUrl === MsgCancelProposalResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelProposalResponseAmino {
    return o && o.$typeUrl === MsgCancelProposalResponse.typeUrl;
  },
  encode(_: MsgCancelProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProposalResponse();
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
  fromPartial(_: Partial<MsgCancelProposalResponse>): MsgCancelProposalResponse {
    const message = createBaseMsgCancelProposalResponse();
    return message;
  },
  fromAmino(_: MsgCancelProposalResponseAmino): MsgCancelProposalResponse {
    const message = createBaseMsgCancelProposalResponse();
    return message;
  },
  toAmino(_: MsgCancelProposalResponse): MsgCancelProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelProposalResponseAminoMsg): MsgCancelProposalResponse {
    return MsgCancelProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelProposalResponseProtoMsg): MsgCancelProposalResponse {
    return MsgCancelProposalResponse.decode(message.value);
  },
  toProto(message: MsgCancelProposalResponse): Uint8Array {
    return MsgCancelProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelProposalResponse): MsgCancelProposalResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgCancelProposalResponse",
      value: MsgCancelProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSettleProposal(): MsgSettleProposal {
  return {
    sender: "",
    proposalId: BigInt(0)
  };
}
/**
 * MsgSettleProposal is the Msg/SettleProposal request type.
 * @name MsgSettleProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposal
 */
export const MsgSettleProposal = {
  typeUrl: "/bze.dao.MsgSettleProposal",
  aminoType: "bze/x/dao/MsgSettleProposal",
  is(o: any): o is MsgSettleProposal {
    return o && (o.$typeUrl === MsgSettleProposal.typeUrl || typeof o.sender === "string" && typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is MsgSettleProposalSDKType {
    return o && (o.$typeUrl === MsgSettleProposal.typeUrl || typeof o.sender === "string" && typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is MsgSettleProposalAmino {
    return o && (o.$typeUrl === MsgSettleProposal.typeUrl || typeof o.sender === "string" && typeof o.proposal_id === "bigint");
  },
  encode(message: MsgSettleProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSettleProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSettleProposal>): MsgSettleProposal {
    const message = createBaseMsgSettleProposal();
    message.sender = object.sender ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSettleProposalAmino): MsgSettleProposal {
    const message = createBaseMsgSettleProposal();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSettleProposal): MsgSettleProposalAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSettleProposalAminoMsg): MsgSettleProposal {
    return MsgSettleProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSettleProposal): MsgSettleProposalAminoMsg {
    return {
      type: "bze/x/dao/MsgSettleProposal",
      value: MsgSettleProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSettleProposalProtoMsg): MsgSettleProposal {
    return MsgSettleProposal.decode(message.value);
  },
  toProto(message: MsgSettleProposal): Uint8Array {
    return MsgSettleProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSettleProposal): MsgSettleProposalProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgSettleProposal",
      value: MsgSettleProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSettleProposalResponse(): MsgSettleProposalResponse {
  return {
    status: 0
  };
}
/**
 * MsgSettleProposalResponse is the Msg/SettleProposal response type.
 * @name MsgSettleProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgSettleProposalResponse
 */
export const MsgSettleProposalResponse = {
  typeUrl: "/bze.dao.MsgSettleProposalResponse",
  is(o: any): o is MsgSettleProposalResponse {
    return o && (o.$typeUrl === MsgSettleProposalResponse.typeUrl || isSet(o.status));
  },
  isSDK(o: any): o is MsgSettleProposalResponseSDKType {
    return o && (o.$typeUrl === MsgSettleProposalResponse.typeUrl || isSet(o.status));
  },
  isAmino(o: any): o is MsgSettleProposalResponseAmino {
    return o && (o.$typeUrl === MsgSettleProposalResponse.typeUrl || isSet(o.status));
  },
  encode(message: MsgSettleProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSettleProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettleProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSettleProposalResponse>): MsgSettleProposalResponse {
    const message = createBaseMsgSettleProposalResponse();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgSettleProposalResponseAmino): MsgSettleProposalResponse {
    const message = createBaseMsgSettleProposalResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgSettleProposalResponse): MsgSettleProposalResponseAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgSettleProposalResponseAminoMsg): MsgSettleProposalResponse {
    return MsgSettleProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSettleProposalResponseProtoMsg): MsgSettleProposalResponse {
    return MsgSettleProposalResponse.decode(message.value);
  },
  toProto(message: MsgSettleProposalResponse): Uint8Array {
    return MsgSettleProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSettleProposalResponse): MsgSettleProposalResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgSettleProposalResponse",
      value: MsgSettleProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCleanupProposal(): MsgCleanupProposal {
  return {
    sender: "",
    proposalId: BigInt(0),
    limit: BigInt(0)
  };
}
/**
 * MsgCleanupProposal is the Msg/CleanupProposal request type.
 * @name MsgCleanupProposal
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposal
 */
export const MsgCleanupProposal = {
  typeUrl: "/bze.dao.MsgCleanupProposal",
  aminoType: "bze/x/dao/MsgCleanupProposal",
  is(o: any): o is MsgCleanupProposal {
    return o && (o.$typeUrl === MsgCleanupProposal.typeUrl || typeof o.sender === "string" && typeof o.proposalId === "bigint" && typeof o.limit === "bigint");
  },
  isSDK(o: any): o is MsgCleanupProposalSDKType {
    return o && (o.$typeUrl === MsgCleanupProposal.typeUrl || typeof o.sender === "string" && typeof o.proposal_id === "bigint" && typeof o.limit === "bigint");
  },
  isAmino(o: any): o is MsgCleanupProposalAmino {
    return o && (o.$typeUrl === MsgCleanupProposal.typeUrl || typeof o.sender === "string" && typeof o.proposal_id === "bigint" && typeof o.limit === "bigint");
  },
  encode(message: MsgCleanupProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.limit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCleanupProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCleanupProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCleanupProposal>): MsgCleanupProposal {
    const message = createBaseMsgCleanupProposal();
    message.sender = object.sender ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCleanupProposalAmino): MsgCleanupProposal {
    const message = createBaseMsgCleanupProposal();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    return message;
  },
  toAmino(message: MsgCleanupProposal): MsgCleanupProposalAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCleanupProposalAminoMsg): MsgCleanupProposal {
    return MsgCleanupProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCleanupProposal): MsgCleanupProposalAminoMsg {
    return {
      type: "bze/x/dao/MsgCleanupProposal",
      value: MsgCleanupProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCleanupProposalProtoMsg): MsgCleanupProposal {
    return MsgCleanupProposal.decode(message.value);
  },
  toProto(message: MsgCleanupProposal): Uint8Array {
    return MsgCleanupProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgCleanupProposal): MsgCleanupProposalProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgCleanupProposal",
      value: MsgCleanupProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCleanupProposalResponse(): MsgCleanupProposalResponse {
  return {
    processed: BigInt(0),
    completed: false
  };
}
/**
 * MsgCleanupProposalResponse is the Msg/CleanupProposal response type.
 * @name MsgCleanupProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgCleanupProposalResponse
 */
export const MsgCleanupProposalResponse = {
  typeUrl: "/bze.dao.MsgCleanupProposalResponse",
  is(o: any): o is MsgCleanupProposalResponse {
    return o && (o.$typeUrl === MsgCleanupProposalResponse.typeUrl || typeof o.processed === "bigint" && typeof o.completed === "boolean");
  },
  isSDK(o: any): o is MsgCleanupProposalResponseSDKType {
    return o && (o.$typeUrl === MsgCleanupProposalResponse.typeUrl || typeof o.processed === "bigint" && typeof o.completed === "boolean");
  },
  isAmino(o: any): o is MsgCleanupProposalResponseAmino {
    return o && (o.$typeUrl === MsgCleanupProposalResponse.typeUrl || typeof o.processed === "bigint" && typeof o.completed === "boolean");
  },
  encode(message: MsgCleanupProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.processed !== BigInt(0)) {
      writer.uint32(8).uint64(message.processed);
    }
    if (message.completed === true) {
      writer.uint32(16).bool(message.completed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCleanupProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCleanupProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.processed = reader.uint64();
          break;
        case 2:
          message.completed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCleanupProposalResponse>): MsgCleanupProposalResponse {
    const message = createBaseMsgCleanupProposalResponse();
    message.processed = object.processed !== undefined && object.processed !== null ? BigInt(object.processed.toString()) : BigInt(0);
    message.completed = object.completed ?? false;
    return message;
  },
  fromAmino(object: MsgCleanupProposalResponseAmino): MsgCleanupProposalResponse {
    const message = createBaseMsgCleanupProposalResponse();
    if (object.processed !== undefined && object.processed !== null) {
      message.processed = BigInt(object.processed);
    }
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = object.completed;
    }
    return message;
  },
  toAmino(message: MsgCleanupProposalResponse): MsgCleanupProposalResponseAmino {
    const obj: any = {};
    obj.processed = message.processed !== BigInt(0) ? message.processed?.toString() : undefined;
    obj.completed = message.completed === false ? undefined : message.completed;
    return obj;
  },
  fromAminoMsg(object: MsgCleanupProposalResponseAminoMsg): MsgCleanupProposalResponse {
    return MsgCleanupProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCleanupProposalResponseProtoMsg): MsgCleanupProposalResponse {
    return MsgCleanupProposalResponse.decode(message.value);
  },
  toProto(message: MsgCleanupProposalResponse): Uint8Array {
    return MsgCleanupProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCleanupProposalResponse): MsgCleanupProposalResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgCleanupProposalResponse",
      value: MsgCleanupProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateDaoConfig(): MsgUpdateDaoConfig {
  return {
    authority: "",
    daoId: BigInt(0),
    config: DaoConfig.fromPartial({})
  };
}
/**
 * MsgUpdateDaoConfig is the Msg/UpdateDaoConfig request type.
 * @name MsgUpdateDaoConfig
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfig
 */
export const MsgUpdateDaoConfig = {
  typeUrl: "/bze.dao.MsgUpdateDaoConfig",
  aminoType: "bze/x/dao/MsgUpdateDaoConfig",
  is(o: any): o is MsgUpdateDaoConfig {
    return o && (o.$typeUrl === MsgUpdateDaoConfig.typeUrl || typeof o.authority === "string" && typeof o.daoId === "bigint" && DaoConfig.is(o.config));
  },
  isSDK(o: any): o is MsgUpdateDaoConfigSDKType {
    return o && (o.$typeUrl === MsgUpdateDaoConfig.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && DaoConfig.isSDK(o.config));
  },
  isAmino(o: any): o is MsgUpdateDaoConfigAmino {
    return o && (o.$typeUrl === MsgUpdateDaoConfig.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && DaoConfig.isAmino(o.config));
  },
  encode(message: MsgUpdateDaoConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    if (message.config !== undefined) {
      DaoConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDaoConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDaoConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.config = DaoConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDaoConfig>): MsgUpdateDaoConfig {
    const message = createBaseMsgUpdateDaoConfig();
    message.authority = object.authority ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.config = object.config !== undefined && object.config !== null ? DaoConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateDaoConfigAmino): MsgUpdateDaoConfig {
    const message = createBaseMsgUpdateDaoConfig();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = DaoConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: MsgUpdateDaoConfig): MsgUpdateDaoConfigAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.config = message.config ? DaoConfig.toAmino(message.config) : DaoConfig.toAmino(DaoConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoConfigAminoMsg): MsgUpdateDaoConfig {
    return MsgUpdateDaoConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateDaoConfig): MsgUpdateDaoConfigAminoMsg {
    return {
      type: "bze/x/dao/MsgUpdateDaoConfig",
      value: MsgUpdateDaoConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateDaoConfigProtoMsg): MsgUpdateDaoConfig {
    return MsgUpdateDaoConfig.decode(message.value);
  },
  toProto(message: MsgUpdateDaoConfig): Uint8Array {
    return MsgUpdateDaoConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoConfig): MsgUpdateDaoConfigProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateDaoConfig",
      value: MsgUpdateDaoConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateDaoConfig.typeUrl)) {
      return;
    }
    DaoConfig.registerTypeUrl();
  }
};
function createBaseMsgUpdateDaoConfigResponse(): MsgUpdateDaoConfigResponse {
  return {};
}
/**
 * MsgUpdateDaoConfigResponse is the Msg/UpdateDaoConfig response type.
 * @name MsgUpdateDaoConfigResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateDaoConfigResponse
 */
export const MsgUpdateDaoConfigResponse = {
  typeUrl: "/bze.dao.MsgUpdateDaoConfigResponse",
  is(o: any): o is MsgUpdateDaoConfigResponse {
    return o && o.$typeUrl === MsgUpdateDaoConfigResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateDaoConfigResponseSDKType {
    return o && o.$typeUrl === MsgUpdateDaoConfigResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateDaoConfigResponseAmino {
    return o && o.$typeUrl === MsgUpdateDaoConfigResponse.typeUrl;
  },
  encode(_: MsgUpdateDaoConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDaoConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDaoConfigResponse();
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
  fromPartial(_: Partial<MsgUpdateDaoConfigResponse>): MsgUpdateDaoConfigResponse {
    const message = createBaseMsgUpdateDaoConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDaoConfigResponseAmino): MsgUpdateDaoConfigResponse {
    const message = createBaseMsgUpdateDaoConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateDaoConfigResponse): MsgUpdateDaoConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoConfigResponseAminoMsg): MsgUpdateDaoConfigResponse {
    return MsgUpdateDaoConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoConfigResponseProtoMsg): MsgUpdateDaoConfigResponse {
    return MsgUpdateDaoConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDaoConfigResponse): Uint8Array {
    return MsgUpdateDaoConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoConfigResponse): MsgUpdateDaoConfigResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateDaoConfigResponse",
      value: MsgUpdateDaoConfigResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return {
    authority: "",
    daoId: BigInt(0),
    name: "",
    description: ""
  };
}
/**
 * MsgUpdateMetadata is the Msg/UpdateMetadata request type.
 * @name MsgUpdateMetadata
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadata
 */
export const MsgUpdateMetadata = {
  typeUrl: "/bze.dao.MsgUpdateMetadata",
  aminoType: "bze/x/dao/MsgUpdateMetadata",
  is(o: any): o is MsgUpdateMetadata {
    return o && (o.$typeUrl === MsgUpdateMetadata.typeUrl || typeof o.authority === "string" && typeof o.daoId === "bigint" && typeof o.name === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is MsgUpdateMetadataSDKType {
    return o && (o.$typeUrl === MsgUpdateMetadata.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && typeof o.name === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is MsgUpdateMetadataAmino {
    return o && (o.$typeUrl === MsgUpdateMetadata.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && typeof o.name === "string" && typeof o.description === "string");
  },
  encode(message: MsgUpdateMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMetadata>): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.authority = object.authority ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMetadataAmino): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdateMetadata): MsgUpdateMetadataAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMetadataAminoMsg): MsgUpdateMetadata {
    return MsgUpdateMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMetadata): MsgUpdateMetadataAminoMsg {
    return {
      type: "bze/x/dao/MsgUpdateMetadata",
      value: MsgUpdateMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMetadataProtoMsg): MsgUpdateMetadata {
    return MsgUpdateMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateMetadata): Uint8Array {
    return MsgUpdateMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMetadata): MsgUpdateMetadataProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateMetadata",
      value: MsgUpdateMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateMetadataResponse(): MsgUpdateMetadataResponse {
  return {};
}
/**
 * MsgUpdateMetadataResponse is the Msg/UpdateMetadata response type.
 * @name MsgUpdateMetadataResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMetadataResponse
 */
export const MsgUpdateMetadataResponse = {
  typeUrl: "/bze.dao.MsgUpdateMetadataResponse",
  is(o: any): o is MsgUpdateMetadataResponse {
    return o && o.$typeUrl === MsgUpdateMetadataResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateMetadataResponseSDKType {
    return o && o.$typeUrl === MsgUpdateMetadataResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateMetadataResponseAmino {
    return o && o.$typeUrl === MsgUpdateMetadataResponse.typeUrl;
  },
  encode(_: MsgUpdateMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataResponse();
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
  fromPartial(_: Partial<MsgUpdateMetadataResponse>): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMetadataResponseAmino): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMetadataResponseAminoMsg): MsgUpdateMetadataResponse {
    return MsgUpdateMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMetadataResponseProtoMsg): MsgUpdateMetadataResponse {
    return MsgUpdateMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMetadataResponse): Uint8Array {
    return MsgUpdateMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateMetadataResponse",
      value: MsgUpdateMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateElectorate(): MsgUpdateElectorate {
  return {
    authority: "",
    daoId: BigInt(0),
    electorate: undefined
  };
}
/**
 * MsgUpdateElectorate is the Msg/UpdateElectorate request type.
 * @name MsgUpdateElectorate
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorate
 */
export const MsgUpdateElectorate = {
  typeUrl: "/bze.dao.MsgUpdateElectorate",
  aminoType: "bze/x/dao/MsgUpdateElectorate",
  is(o: any): o is MsgUpdateElectorate {
    return o && (o.$typeUrl === MsgUpdateElectorate.typeUrl || typeof o.authority === "string" && typeof o.daoId === "bigint");
  },
  isSDK(o: any): o is MsgUpdateElectorateSDKType {
    return o && (o.$typeUrl === MsgUpdateElectorate.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint");
  },
  isAmino(o: any): o is MsgUpdateElectorateAmino {
    return o && (o.$typeUrl === MsgUpdateElectorate.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint");
  },
  encode(message: MsgUpdateElectorate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    if (message.electorate !== undefined) {
      StakeElectorate.encode(message.electorate, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateElectorate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateElectorate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.electorate = StakeElectorate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateElectorate>): MsgUpdateElectorate {
    const message = createBaseMsgUpdateElectorate();
    message.authority = object.authority ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.electorate = object.electorate !== undefined && object.electorate !== null ? StakeElectorate.fromPartial(object.electorate) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateElectorateAmino): MsgUpdateElectorate {
    const message = createBaseMsgUpdateElectorate();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.electorate !== undefined && object.electorate !== null) {
      message.electorate = StakeElectorate.fromAmino(object.electorate);
    }
    return message;
  },
  toAmino(message: MsgUpdateElectorate): MsgUpdateElectorateAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.electorate = message.electorate ? StakeElectorate.toAmino(message.electorate) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateElectorateAminoMsg): MsgUpdateElectorate {
    return MsgUpdateElectorate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateElectorate): MsgUpdateElectorateAminoMsg {
    return {
      type: "bze/x/dao/MsgUpdateElectorate",
      value: MsgUpdateElectorate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateElectorateProtoMsg): MsgUpdateElectorate {
    return MsgUpdateElectorate.decode(message.value);
  },
  toProto(message: MsgUpdateElectorate): Uint8Array {
    return MsgUpdateElectorate.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateElectorate): MsgUpdateElectorateProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateElectorate",
      value: MsgUpdateElectorate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateElectorate.typeUrl)) {
      return;
    }
    StakeElectorate.registerTypeUrl();
  }
};
function createBaseMsgUpdateElectorateResponse(): MsgUpdateElectorateResponse {
  return {};
}
/**
 * MsgUpdateElectorateResponse is the Msg/UpdateElectorate response type.
 * @name MsgUpdateElectorateResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateElectorateResponse
 */
export const MsgUpdateElectorateResponse = {
  typeUrl: "/bze.dao.MsgUpdateElectorateResponse",
  is(o: any): o is MsgUpdateElectorateResponse {
    return o && o.$typeUrl === MsgUpdateElectorateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateElectorateResponseSDKType {
    return o && o.$typeUrl === MsgUpdateElectorateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateElectorateResponseAmino {
    return o && o.$typeUrl === MsgUpdateElectorateResponse.typeUrl;
  },
  encode(_: MsgUpdateElectorateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateElectorateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateElectorateResponse();
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
  fromPartial(_: Partial<MsgUpdateElectorateResponse>): MsgUpdateElectorateResponse {
    const message = createBaseMsgUpdateElectorateResponse();
    return message;
  },
  fromAmino(_: MsgUpdateElectorateResponseAmino): MsgUpdateElectorateResponse {
    const message = createBaseMsgUpdateElectorateResponse();
    return message;
  },
  toAmino(_: MsgUpdateElectorateResponse): MsgUpdateElectorateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateElectorateResponseAminoMsg): MsgUpdateElectorateResponse {
    return MsgUpdateElectorateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateElectorateResponseProtoMsg): MsgUpdateElectorateResponse {
    return MsgUpdateElectorateResponse.decode(message.value);
  },
  toProto(message: MsgUpdateElectorateResponse): Uint8Array {
    return MsgUpdateElectorateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateElectorateResponse): MsgUpdateElectorateResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateElectorateResponse",
      value: MsgUpdateElectorateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateMembers(): MsgUpdateMembers {
  return {
    authority: "",
    daoId: BigInt(0),
    add: [],
    remove: []
  };
}
/**
 * MsgUpdateMembers is the Msg/UpdateMembers request type.
 * @name MsgUpdateMembers
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembers
 */
export const MsgUpdateMembers = {
  typeUrl: "/bze.dao.MsgUpdateMembers",
  aminoType: "bze/x/dao/MsgUpdateMembers",
  is(o: any): o is MsgUpdateMembers {
    return o && (o.$typeUrl === MsgUpdateMembers.typeUrl || typeof o.authority === "string" && typeof o.daoId === "bigint" && Array.isArray(o.add) && (!o.add.length || typeof o.add[0] === "string") && Array.isArray(o.remove) && (!o.remove.length || typeof o.remove[0] === "string"));
  },
  isSDK(o: any): o is MsgUpdateMembersSDKType {
    return o && (o.$typeUrl === MsgUpdateMembers.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && Array.isArray(o.add) && (!o.add.length || typeof o.add[0] === "string") && Array.isArray(o.remove) && (!o.remove.length || typeof o.remove[0] === "string"));
  },
  isAmino(o: any): o is MsgUpdateMembersAmino {
    return o && (o.$typeUrl === MsgUpdateMembers.typeUrl || typeof o.authority === "string" && typeof o.dao_id === "bigint" && Array.isArray(o.add) && (!o.add.length || typeof o.add[0] === "string") && Array.isArray(o.remove) && (!o.remove.length || typeof o.remove[0] === "string"));
  },
  encode(message: MsgUpdateMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    for (const v of message.add) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.remove) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.add.push(reader.string());
          break;
        case 4:
          message.remove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMembers>): MsgUpdateMembers {
    const message = createBaseMsgUpdateMembers();
    message.authority = object.authority ?? "";
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.add = object.add?.map(e => e) || [];
    message.remove = object.remove?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdateMembersAmino): MsgUpdateMembers {
    const message = createBaseMsgUpdateMembers();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    message.add = object.add?.map(e => e) || [];
    message.remove = object.remove?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateMembers): MsgUpdateMembersAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    if (message.add) {
      obj.add = message.add.map(e => e);
    } else {
      obj.add = message.add;
    }
    if (message.remove) {
      obj.remove = message.remove.map(e => e);
    } else {
      obj.remove = message.remove;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMembersAminoMsg): MsgUpdateMembers {
    return MsgUpdateMembers.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMembers): MsgUpdateMembersAminoMsg {
    return {
      type: "bze/x/dao/MsgUpdateMembers",
      value: MsgUpdateMembers.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMembersProtoMsg): MsgUpdateMembers {
    return MsgUpdateMembers.decode(message.value);
  },
  toProto(message: MsgUpdateMembers): Uint8Array {
    return MsgUpdateMembers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMembers): MsgUpdateMembersProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateMembers",
      value: MsgUpdateMembers.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateMembersResponse(): MsgUpdateMembersResponse {
  return {};
}
/**
 * MsgUpdateMembersResponse is the Msg/UpdateMembers response type.
 * @name MsgUpdateMembersResponse
 * @package bze.dao
 * @see proto type: bze.dao.MsgUpdateMembersResponse
 */
export const MsgUpdateMembersResponse = {
  typeUrl: "/bze.dao.MsgUpdateMembersResponse",
  is(o: any): o is MsgUpdateMembersResponse {
    return o && o.$typeUrl === MsgUpdateMembersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateMembersResponseSDKType {
    return o && o.$typeUrl === MsgUpdateMembersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateMembersResponseAmino {
    return o && o.$typeUrl === MsgUpdateMembersResponse.typeUrl;
  },
  encode(_: MsgUpdateMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMembersResponse();
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
  fromPartial(_: Partial<MsgUpdateMembersResponse>): MsgUpdateMembersResponse {
    const message = createBaseMsgUpdateMembersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMembersResponseAmino): MsgUpdateMembersResponse {
    const message = createBaseMsgUpdateMembersResponse();
    return message;
  },
  toAmino(_: MsgUpdateMembersResponse): MsgUpdateMembersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMembersResponseAminoMsg): MsgUpdateMembersResponse {
    return MsgUpdateMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMembersResponseProtoMsg): MsgUpdateMembersResponse {
    return MsgUpdateMembersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMembersResponse): Uint8Array {
    return MsgUpdateMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMembersResponse): MsgUpdateMembersResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.MsgUpdateMembersResponse",
      value: MsgUpdateMembersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};