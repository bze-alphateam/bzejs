//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { ProposalStatus, Dao, DaoAmino, DaoSDKType, Proposal, ProposalAmino, ProposalSDKType, Ballot, BallotAmino, BallotSDKType, BallotShare, BallotShareAmino, BallotShareSDKType } from "./store";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
/** ControllerEndReason says why the admin chain walk stopped. */
export enum ControllerEndReason {
  /** ACCOUNT - ACCOUNT: the admin is an account that is not a DAO; it is the controller. */
  ACCOUNT = 0,
  /** SELF_OWNED - SELF_OWNED: the DAO is its own admin; its voters control it. */
  SELF_OWNED = 1,
  /** CYCLE - CYCLE: the admin is a DAO already on the path; the controller is that DAO. */
  CYCLE = 2,
  /** DEPTH_CAP - DEPTH_CAP: the path reached the maximum depth; the controller is its last DAO. */
  DEPTH_CAP = 3,
  UNRECOGNIZED = -1,
}
export const ControllerEndReasonSDKType = ControllerEndReason;
export const ControllerEndReasonAmino = ControllerEndReason;
export function controllerEndReasonFromJSON(object: any): ControllerEndReason {
  switch (object) {
    case 0:
    case "ACCOUNT":
      return ControllerEndReason.ACCOUNT;
    case 1:
    case "SELF_OWNED":
      return ControllerEndReason.SELF_OWNED;
    case 2:
    case "CYCLE":
      return ControllerEndReason.CYCLE;
    case 3:
    case "DEPTH_CAP":
      return ControllerEndReason.DEPTH_CAP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ControllerEndReason.UNRECOGNIZED;
  }
}
export function controllerEndReasonToJSON(object: ControllerEndReason): string {
  switch (object) {
    case ControllerEndReason.ACCOUNT:
      return "ACCOUNT";
    case ControllerEndReason.SELF_OWNED:
      return "SELF_OWNED";
    case ControllerEndReason.CYCLE:
      return "CYCLE";
    case ControllerEndReason.DEPTH_CAP:
      return "DEPTH_CAP";
    case ControllerEndReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bze.dao.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bze.dao.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bze.dao.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bze.dao.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDaoRequest is request type for the Query/Dao RPC method.
 * @name QueryDaoRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoRequest
 */
export interface QueryDaoRequest {
  id: bigint;
}
export interface QueryDaoRequestProtoMsg {
  typeUrl: "/bze.dao.QueryDaoRequest";
  value: Uint8Array;
}
/**
 * QueryDaoRequest is request type for the Query/Dao RPC method.
 * @name QueryDaoRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoRequest
 */
export interface QueryDaoRequestAmino {
  id?: string;
}
export interface QueryDaoRequestAminoMsg {
  type: "/bze.dao.QueryDaoRequest";
  value: QueryDaoRequestAmino;
}
/**
 * QueryDaoRequest is request type for the Query/Dao RPC method.
 * @name QueryDaoRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoRequest
 */
export interface QueryDaoRequestSDKType {
  id: bigint;
}
/**
 * QueryDaoResponse is response type for the Query/Dao RPC method.
 * @name QueryDaoResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoResponse
 */
export interface QueryDaoResponse {
  dao: Dao;
}
export interface QueryDaoResponseProtoMsg {
  typeUrl: "/bze.dao.QueryDaoResponse";
  value: Uint8Array;
}
/**
 * QueryDaoResponse is response type for the Query/Dao RPC method.
 * @name QueryDaoResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoResponse
 */
export interface QueryDaoResponseAmino {
  dao: DaoAmino;
}
export interface QueryDaoResponseAminoMsg {
  type: "/bze.dao.QueryDaoResponse";
  value: QueryDaoResponseAmino;
}
/**
 * QueryDaoResponse is response type for the Query/Dao RPC method.
 * @name QueryDaoResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoResponse
 */
export interface QueryDaoResponseSDKType {
  dao: DaoSDKType;
}
/**
 * QueryDaoByAddressRequest is request type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressRequest
 */
export interface QueryDaoByAddressRequest {
  /**
   * address is the DAO's own account (bech32).
   */
  address: string;
}
export interface QueryDaoByAddressRequestProtoMsg {
  typeUrl: "/bze.dao.QueryDaoByAddressRequest";
  value: Uint8Array;
}
/**
 * QueryDaoByAddressRequest is request type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressRequest
 */
export interface QueryDaoByAddressRequestAmino {
  /**
   * address is the DAO's own account (bech32).
   */
  address?: string;
}
export interface QueryDaoByAddressRequestAminoMsg {
  type: "/bze.dao.QueryDaoByAddressRequest";
  value: QueryDaoByAddressRequestAmino;
}
/**
 * QueryDaoByAddressRequest is request type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressRequest
 */
export interface QueryDaoByAddressRequestSDKType {
  address: string;
}
/**
 * QueryDaoByAddressResponse is response type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressResponse
 */
export interface QueryDaoByAddressResponse {
  dao: Dao;
}
export interface QueryDaoByAddressResponseProtoMsg {
  typeUrl: "/bze.dao.QueryDaoByAddressResponse";
  value: Uint8Array;
}
/**
 * QueryDaoByAddressResponse is response type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressResponse
 */
export interface QueryDaoByAddressResponseAmino {
  dao: DaoAmino;
}
export interface QueryDaoByAddressResponseAminoMsg {
  type: "/bze.dao.QueryDaoByAddressResponse";
  value: QueryDaoByAddressResponseAmino;
}
/**
 * QueryDaoByAddressResponse is response type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressResponse
 */
export interface QueryDaoByAddressResponseSDKType {
  dao: DaoSDKType;
}
/**
 * QueryDaoControllerRequest is request type for the Query/DaoController RPC method.
 * @name QueryDaoControllerRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerRequest
 */
export interface QueryDaoControllerRequest {
  daoId: bigint;
}
export interface QueryDaoControllerRequestProtoMsg {
  typeUrl: "/bze.dao.QueryDaoControllerRequest";
  value: Uint8Array;
}
/**
 * QueryDaoControllerRequest is request type for the Query/DaoController RPC method.
 * @name QueryDaoControllerRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerRequest
 */
export interface QueryDaoControllerRequestAmino {
  dao_id?: string;
}
export interface QueryDaoControllerRequestAminoMsg {
  type: "/bze.dao.QueryDaoControllerRequest";
  value: QueryDaoControllerRequestAmino;
}
/**
 * QueryDaoControllerRequest is request type for the Query/DaoController RPC method.
 * @name QueryDaoControllerRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerRequest
 */
export interface QueryDaoControllerRequestSDKType {
  dao_id: bigint;
}
/**
 * QueryDaoControllerResponse is response type for the Query/DaoController RPC method.
 * @name QueryDaoControllerResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerResponse
 */
export interface QueryDaoControllerResponse {
  /**
   * controller is the address at the end of the admin chain.
   */
  controller: string;
  endReason: ControllerEndReason;
  /**
   * path lists the DAO addresses visited, in order, starting with the queried DAO.
   */
  path: string[];
}
export interface QueryDaoControllerResponseProtoMsg {
  typeUrl: "/bze.dao.QueryDaoControllerResponse";
  value: Uint8Array;
}
/**
 * QueryDaoControllerResponse is response type for the Query/DaoController RPC method.
 * @name QueryDaoControllerResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerResponse
 */
export interface QueryDaoControllerResponseAmino {
  /**
   * controller is the address at the end of the admin chain.
   */
  controller?: string;
  end_reason: ControllerEndReason;
  /**
   * path lists the DAO addresses visited, in order, starting with the queried DAO.
   */
  path?: string[];
}
export interface QueryDaoControllerResponseAminoMsg {
  type: "/bze.dao.QueryDaoControllerResponse";
  value: QueryDaoControllerResponseAmino;
}
/**
 * QueryDaoControllerResponse is response type for the Query/DaoController RPC method.
 * @name QueryDaoControllerResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerResponse
 */
export interface QueryDaoControllerResponseSDKType {
  controller: string;
  end_reason: ControllerEndReason;
  path: string[];
}
/**
 * QueryProposalRequest is request type for the Query/Proposal RPC method.
 * @name QueryProposalRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalRequest
 */
export interface QueryProposalRequest {
  id: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/bze.dao.QueryProposalRequest";
  value: Uint8Array;
}
/**
 * QueryProposalRequest is request type for the Query/Proposal RPC method.
 * @name QueryProposalRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalRequest
 */
export interface QueryProposalRequestAmino {
  id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "/bze.dao.QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/**
 * QueryProposalRequest is request type for the Query/Proposal RPC method.
 * @name QueryProposalRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalRequest
 */
export interface QueryProposalRequestSDKType {
  id: bigint;
}
/**
 * QueryProposalResponse is response type for the Query/Proposal RPC method.
 * The flags are computed at the current block time.
 * @name QueryProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalResponse
 */
export interface QueryProposalResponse {
  proposal: Proposal;
  /**
   * voting_ended: the proposal is VOTING and its voting end has passed, so it
   * can be settled.
   */
  votingEnded: boolean;
  /**
   * retry_deadline is the end of the retry window of an EXECUTION_FAILED
   * proposal (unix seconds), 0 for any other status.
   */
  retryDeadline: bigint;
  /**
   * expedite_settleable: the proposal is expedited, still VOTING before its
   * voting end, past the min_expedite_delay after its submission (stake DAOs
   * only, static-list DAOs have no delay), and its tally already meets the
   * expedite bars, so it can be settled early.
   */
  expediteSettleable: boolean;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/bze.dao.QueryProposalResponse";
  value: Uint8Array;
}
/**
 * QueryProposalResponse is response type for the Query/Proposal RPC method.
 * The flags are computed at the current block time.
 * @name QueryProposalResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalResponse
 */
export interface QueryProposalResponseAmino {
  proposal: ProposalAmino;
  /**
   * voting_ended: the proposal is VOTING and its voting end has passed, so it
   * can be settled.
   */
  voting_ended: boolean;
  /**
   * retry_deadline is the end of the retry window of an EXECUTION_FAILED
   * proposal (unix seconds), 0 for any other status.
   */
  retry_deadline: string;
  /**
   * expedite_settleable: the proposal is expedited, still VOTING before its
   * voting end, past the min_expedite_delay after its submission (stake DAOs
   * only, static-list DAOs have no delay), and its tally already meets the
   * expedite bars, so it can be settled early.
   */
  expedite_settleable: boolean;
}
export interface QueryProposalResponseAminoMsg {
  type: "/bze.dao.QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/**
 * QueryProposalResponse is response type for the Query/Proposal RPC method.
 * The flags are computed at the current block time.
 * @name QueryProposalResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalResponse
 */
export interface QueryProposalResponseSDKType {
  proposal: ProposalSDKType;
  voting_ended: boolean;
  retry_deadline: bigint;
  expedite_settleable: boolean;
}
/**
 * QueryBallotRequest is request type for the Query/Ballot RPC method.
 * @name QueryBallotRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotRequest
 */
export interface QueryBallotRequest {
  proposalId: bigint;
  voter: string;
}
export interface QueryBallotRequestProtoMsg {
  typeUrl: "/bze.dao.QueryBallotRequest";
  value: Uint8Array;
}
/**
 * QueryBallotRequest is request type for the Query/Ballot RPC method.
 * @name QueryBallotRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotRequest
 */
export interface QueryBallotRequestAmino {
  proposal_id?: string;
  voter?: string;
}
export interface QueryBallotRequestAminoMsg {
  type: "/bze.dao.QueryBallotRequest";
  value: QueryBallotRequestAmino;
}
/**
 * QueryBallotRequest is request type for the Query/Ballot RPC method.
 * @name QueryBallotRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotRequest
 */
export interface QueryBallotRequestSDKType {
  proposal_id: bigint;
  voter: string;
}
/**
 * QueryBallotResponse is response type for the Query/Ballot RPC method.
 * @name QueryBallotResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotResponse
 */
export interface QueryBallotResponse {
  ballot: Ballot;
}
export interface QueryBallotResponseProtoMsg {
  typeUrl: "/bze.dao.QueryBallotResponse";
  value: Uint8Array;
}
/**
 * QueryBallotResponse is response type for the Query/Ballot RPC method.
 * @name QueryBallotResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotResponse
 */
export interface QueryBallotResponseAmino {
  ballot: BallotAmino;
}
export interface QueryBallotResponseAminoMsg {
  type: "/bze.dao.QueryBallotResponse";
  value: QueryBallotResponseAmino;
}
/**
 * QueryBallotResponse is response type for the Query/Ballot RPC method.
 * @name QueryBallotResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotResponse
 */
export interface QueryBallotResponseSDKType {
  ballot: BallotSDKType;
}
/**
 * QueryVotingPowerRequest is request type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerRequest
 */
export interface QueryVotingPowerRequest {
  daoId: bigint;
  address: string;
}
export interface QueryVotingPowerRequestProtoMsg {
  typeUrl: "/bze.dao.QueryVotingPowerRequest";
  value: Uint8Array;
}
/**
 * QueryVotingPowerRequest is request type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerRequest
 */
export interface QueryVotingPowerRequestAmino {
  dao_id?: string;
  address?: string;
}
export interface QueryVotingPowerRequestAminoMsg {
  type: "/bze.dao.QueryVotingPowerRequest";
  value: QueryVotingPowerRequestAmino;
}
/**
 * QueryVotingPowerRequest is request type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerRequest
 */
export interface QueryVotingPowerRequestSDKType {
  dao_id: bigint;
  address: string;
}
/**
 * ProposalVotingPower is the weight an address would vote with on one proposal.
 * @name ProposalVotingPower
 * @package bze.dao
 * @see proto type: bze.dao.ProposalVotingPower
 */
export interface ProposalVotingPower {
  proposalId: bigint;
  /**
   * eligible_weight is 1 or 0 for a static-list DAO; for a stake DAO the
   * address's stake in the proposal's pinned sources that joined before the
   * proposal was submitted.
   */
  eligibleWeight: string;
  /**
   * shares are the per-source parts of the weight (stake DAOs only).
   */
  shares: BallotShare[];
}
export interface ProposalVotingPowerProtoMsg {
  typeUrl: "/bze.dao.ProposalVotingPower";
  value: Uint8Array;
}
/**
 * ProposalVotingPower is the weight an address would vote with on one proposal.
 * @name ProposalVotingPowerAmino
 * @package bze.dao
 * @see proto type: bze.dao.ProposalVotingPower
 */
export interface ProposalVotingPowerAmino {
  proposal_id?: string;
  /**
   * eligible_weight is 1 or 0 for a static-list DAO; for a stake DAO the
   * address's stake in the proposal's pinned sources that joined before the
   * proposal was submitted.
   */
  eligible_weight?: string;
  /**
   * shares are the per-source parts of the weight (stake DAOs only).
   */
  shares?: BallotShareAmino[];
}
export interface ProposalVotingPowerAminoMsg {
  type: "/bze.dao.ProposalVotingPower";
  value: ProposalVotingPowerAmino;
}
/**
 * ProposalVotingPower is the weight an address would vote with on one proposal.
 * @name ProposalVotingPowerSDKType
 * @package bze.dao
 * @see proto type: bze.dao.ProposalVotingPower
 */
export interface ProposalVotingPowerSDKType {
  proposal_id: bigint;
  eligible_weight: string;
  shares: BallotShareSDKType[];
}
/**
 * QueryVotingPowerResponse is response type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerResponse
 */
export interface QueryVotingPowerResponse {
  /**
   * current is the address's weight now: 1 or 0 for a static-list DAO, its
   * stake in the DAO's current sources for a stake DAO, join records ignored.
   */
  current: string;
  /**
   * proposals has one entry per proposal of the DAO in voting.
   */
  proposals: ProposalVotingPower[];
}
export interface QueryVotingPowerResponseProtoMsg {
  typeUrl: "/bze.dao.QueryVotingPowerResponse";
  value: Uint8Array;
}
/**
 * QueryVotingPowerResponse is response type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerResponse
 */
export interface QueryVotingPowerResponseAmino {
  /**
   * current is the address's weight now: 1 or 0 for a static-list DAO, its
   * stake in the DAO's current sources for a stake DAO, join records ignored.
   */
  current?: string;
  /**
   * proposals has one entry per proposal of the DAO in voting.
   */
  proposals?: ProposalVotingPowerAmino[];
}
export interface QueryVotingPowerResponseAminoMsg {
  type: "/bze.dao.QueryVotingPowerResponse";
  value: QueryVotingPowerResponseAmino;
}
/**
 * QueryVotingPowerResponse is response type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerResponse
 */
export interface QueryVotingPowerResponseSDKType {
  current: string;
  proposals: ProposalVotingPowerSDKType[];
}
/**
 * QueryJoinRecordRequest is request type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordRequest
 */
export interface QueryJoinRecordRequest {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source: string;
  address: string;
}
export interface QueryJoinRecordRequestProtoMsg {
  typeUrl: "/bze.dao.QueryJoinRecordRequest";
  value: Uint8Array;
}
/**
 * QueryJoinRecordRequest is request type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordRequest
 */
export interface QueryJoinRecordRequestAmino {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source?: string;
  address?: string;
}
export interface QueryJoinRecordRequestAminoMsg {
  type: "/bze.dao.QueryJoinRecordRequest";
  value: QueryJoinRecordRequestAmino;
}
/**
 * QueryJoinRecordRequest is request type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordRequest
 */
export interface QueryJoinRecordRequestSDKType {
  source: string;
  address: string;
}
/**
 * QueryJoinRecordResponse is response type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordResponse
 */
export interface QueryJoinRecordResponse {
  height: bigint;
}
export interface QueryJoinRecordResponseProtoMsg {
  typeUrl: "/bze.dao.QueryJoinRecordResponse";
  value: Uint8Array;
}
/**
 * QueryJoinRecordResponse is response type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordResponse
 */
export interface QueryJoinRecordResponseAmino {
  height: string;
}
export interface QueryJoinRecordResponseAminoMsg {
  type: "/bze.dao.QueryJoinRecordResponse";
  value: QueryJoinRecordResponseAmino;
}
/**
 * QueryJoinRecordResponse is response type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordResponse
 */
export interface QueryJoinRecordResponseSDKType {
  height: bigint;
}
/**
 * QueryDaosRequest is request type for the Query/Daos RPC method.
 * @name QueryDaosRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosRequest
 */
export interface QueryDaosRequest {
  pagination?: PageRequest;
}
export interface QueryDaosRequestProtoMsg {
  typeUrl: "/bze.dao.QueryDaosRequest";
  value: Uint8Array;
}
/**
 * QueryDaosRequest is request type for the Query/Daos RPC method.
 * @name QueryDaosRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosRequest
 */
export interface QueryDaosRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryDaosRequestAminoMsg {
  type: "/bze.dao.QueryDaosRequest";
  value: QueryDaosRequestAmino;
}
/**
 * QueryDaosRequest is request type for the Query/Daos RPC method.
 * @name QueryDaosRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosRequest
 */
export interface QueryDaosRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryDaosResponse is response type for the Query/Daos RPC method.
 * @name QueryDaosResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosResponse
 */
export interface QueryDaosResponse {
  daos: Dao[];
  pagination?: PageResponse;
}
export interface QueryDaosResponseProtoMsg {
  typeUrl: "/bze.dao.QueryDaosResponse";
  value: Uint8Array;
}
/**
 * QueryDaosResponse is response type for the Query/Daos RPC method.
 * @name QueryDaosResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosResponse
 */
export interface QueryDaosResponseAmino {
  daos: DaoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDaosResponseAminoMsg {
  type: "/bze.dao.QueryDaosResponse";
  value: QueryDaosResponseAmino;
}
/**
 * QueryDaosResponse is response type for the Query/Daos RPC method.
 * @name QueryDaosResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosResponse
 */
export interface QueryDaosResponseSDKType {
  daos: DaoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDaosByAdminRequest is request type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminRequest
 */
export interface QueryDaosByAdminRequest {
  admin: string;
  pagination?: PageRequest;
}
export interface QueryDaosByAdminRequestProtoMsg {
  typeUrl: "/bze.dao.QueryDaosByAdminRequest";
  value: Uint8Array;
}
/**
 * QueryDaosByAdminRequest is request type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminRequest
 */
export interface QueryDaosByAdminRequestAmino {
  admin?: string;
  pagination?: PageRequestAmino;
}
export interface QueryDaosByAdminRequestAminoMsg {
  type: "/bze.dao.QueryDaosByAdminRequest";
  value: QueryDaosByAdminRequestAmino;
}
/**
 * QueryDaosByAdminRequest is request type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminRequest
 */
export interface QueryDaosByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDaosByAdminResponse is response type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminResponse
 */
export interface QueryDaosByAdminResponse {
  daos: Dao[];
  pagination?: PageResponse;
}
export interface QueryDaosByAdminResponseProtoMsg {
  typeUrl: "/bze.dao.QueryDaosByAdminResponse";
  value: Uint8Array;
}
/**
 * QueryDaosByAdminResponse is response type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminResponse
 */
export interface QueryDaosByAdminResponseAmino {
  daos: DaoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDaosByAdminResponseAminoMsg {
  type: "/bze.dao.QueryDaosByAdminResponse";
  value: QueryDaosByAdminResponseAmino;
}
/**
 * QueryDaosByAdminResponse is response type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminResponse
 */
export interface QueryDaosByAdminResponseSDKType {
  daos: DaoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryProposalsRequest is request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsRequest
 */
export interface QueryProposalsRequest {
  daoId: bigint;
  /**
   * statuses keeps only the proposals with one of these statuses; empty lists
   * every status. A list, because VOTING is the enum's zero value.
   */
  statuses: ProposalStatus[];
  pagination?: PageRequest;
}
export interface QueryProposalsRequestProtoMsg {
  typeUrl: "/bze.dao.QueryProposalsRequest";
  value: Uint8Array;
}
/**
 * QueryProposalsRequest is request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsRequest
 */
export interface QueryProposalsRequestAmino {
  dao_id?: string;
  /**
   * statuses keeps only the proposals with one of these statuses; empty lists
   * every status. A list, because VOTING is the enum's zero value.
   */
  statuses?: ProposalStatus[];
  pagination?: PageRequestAmino;
}
export interface QueryProposalsRequestAminoMsg {
  type: "/bze.dao.QueryProposalsRequest";
  value: QueryProposalsRequestAmino;
}
/**
 * QueryProposalsRequest is request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsRequest
 */
export interface QueryProposalsRequestSDKType {
  dao_id: bigint;
  statuses: ProposalStatus[];
  pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is response type for the Query/Proposals RPC method.
 * The statuses are the stored ones: a VOTING proposal past its voting end is
 * listed as VOTING until it is settled.
 * @name QueryProposalsResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsResponse
 */
export interface QueryProposalsResponse {
  proposals: Proposal[];
  pagination?: PageResponse;
}
export interface QueryProposalsResponseProtoMsg {
  typeUrl: "/bze.dao.QueryProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsResponse is response type for the Query/Proposals RPC method.
 * The statuses are the stored ones: a VOTING proposal past its voting end is
 * listed as VOTING until it is settled.
 * @name QueryProposalsResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsResponse
 */
export interface QueryProposalsResponseAmino {
  proposals: ProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProposalsResponseAminoMsg {
  type: "/bze.dao.QueryProposalsResponse";
  value: QueryProposalsResponseAmino;
}
/**
 * QueryProposalsResponse is response type for the Query/Proposals RPC method.
 * The statuses are the stored ones: a VOTING proposal past its voting end is
 * listed as VOTING until it is settled.
 * @name QueryProposalsResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsResponse
 */
export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryBallotsRequest is request type for the Query/Ballots RPC method.
 * @name QueryBallotsRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsRequest
 */
export interface QueryBallotsRequest {
  proposalId: bigint;
  pagination?: PageRequest;
}
export interface QueryBallotsRequestProtoMsg {
  typeUrl: "/bze.dao.QueryBallotsRequest";
  value: Uint8Array;
}
/**
 * QueryBallotsRequest is request type for the Query/Ballots RPC method.
 * @name QueryBallotsRequestAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsRequest
 */
export interface QueryBallotsRequestAmino {
  proposal_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryBallotsRequestAminoMsg {
  type: "/bze.dao.QueryBallotsRequest";
  value: QueryBallotsRequestAmino;
}
/**
 * QueryBallotsRequest is request type for the Query/Ballots RPC method.
 * @name QueryBallotsRequestSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsRequest
 */
export interface QueryBallotsRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * QueryBallotsResponse is response type for the Query/Ballots RPC method.
 * @name QueryBallotsResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsResponse
 */
export interface QueryBallotsResponse {
  ballots: Ballot[];
  pagination?: PageResponse;
}
export interface QueryBallotsResponseProtoMsg {
  typeUrl: "/bze.dao.QueryBallotsResponse";
  value: Uint8Array;
}
/**
 * QueryBallotsResponse is response type for the Query/Ballots RPC method.
 * @name QueryBallotsResponseAmino
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsResponse
 */
export interface QueryBallotsResponseAmino {
  ballots: BallotAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBallotsResponseAminoMsg {
  type: "/bze.dao.QueryBallotsResponse";
  value: QueryBallotsResponseAmino;
}
/**
 * QueryBallotsResponse is response type for the Query/Ballots RPC method.
 * @name QueryBallotsResponseSDKType
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsResponse
 */
export interface QueryBallotsResponseSDKType {
  ballots: BallotSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bze.dao.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bze.dao.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryDaoRequest(): QueryDaoRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryDaoRequest is request type for the Query/Dao RPC method.
 * @name QueryDaoRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoRequest
 */
export const QueryDaoRequest = {
  typeUrl: "/bze.dao.QueryDaoRequest",
  is(o: any): o is QueryDaoRequest {
    return o && (o.$typeUrl === QueryDaoRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryDaoRequestSDKType {
    return o && (o.$typeUrl === QueryDaoRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryDaoRequestAmino {
    return o && (o.$typeUrl === QueryDaoRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryDaoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaoRequest>): QueryDaoRequest {
    const message = createBaseQueryDaoRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDaoRequestAmino): QueryDaoRequest {
    const message = createBaseQueryDaoRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryDaoRequest): QueryDaoRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDaoRequestAminoMsg): QueryDaoRequest {
    return QueryDaoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaoRequestProtoMsg): QueryDaoRequest {
    return QueryDaoRequest.decode(message.value);
  },
  toProto(message: QueryDaoRequest): Uint8Array {
    return QueryDaoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDaoRequest): QueryDaoRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaoRequest",
      value: QueryDaoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDaoResponse(): QueryDaoResponse {
  return {
    dao: Dao.fromPartial({})
  };
}
/**
 * QueryDaoResponse is response type for the Query/Dao RPC method.
 * @name QueryDaoResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoResponse
 */
export const QueryDaoResponse = {
  typeUrl: "/bze.dao.QueryDaoResponse",
  is(o: any): o is QueryDaoResponse {
    return o && (o.$typeUrl === QueryDaoResponse.typeUrl || Dao.is(o.dao));
  },
  isSDK(o: any): o is QueryDaoResponseSDKType {
    return o && (o.$typeUrl === QueryDaoResponse.typeUrl || Dao.isSDK(o.dao));
  },
  isAmino(o: any): o is QueryDaoResponseAmino {
    return o && (o.$typeUrl === QueryDaoResponse.typeUrl || Dao.isAmino(o.dao));
  },
  encode(message: QueryDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dao !== undefined) {
      Dao.encode(message.dao, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dao = Dao.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaoResponse>): QueryDaoResponse {
    const message = createBaseQueryDaoResponse();
    message.dao = object.dao !== undefined && object.dao !== null ? Dao.fromPartial(object.dao) : undefined;
    return message;
  },
  fromAmino(object: QueryDaoResponseAmino): QueryDaoResponse {
    const message = createBaseQueryDaoResponse();
    if (object.dao !== undefined && object.dao !== null) {
      message.dao = Dao.fromAmino(object.dao);
    }
    return message;
  },
  toAmino(message: QueryDaoResponse): QueryDaoResponseAmino {
    const obj: any = {};
    obj.dao = message.dao ? Dao.toAmino(message.dao) : Dao.toAmino(Dao.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryDaoResponseAminoMsg): QueryDaoResponse {
    return QueryDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaoResponseProtoMsg): QueryDaoResponse {
    return QueryDaoResponse.decode(message.value);
  },
  toProto(message: QueryDaoResponse): Uint8Array {
    return QueryDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDaoResponse): QueryDaoResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaoResponse",
      value: QueryDaoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDaoResponse.typeUrl)) {
      return;
    }
    Dao.registerTypeUrl();
  }
};
function createBaseQueryDaoByAddressRequest(): QueryDaoByAddressRequest {
  return {
    address: ""
  };
}
/**
 * QueryDaoByAddressRequest is request type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressRequest
 */
export const QueryDaoByAddressRequest = {
  typeUrl: "/bze.dao.QueryDaoByAddressRequest",
  is(o: any): o is QueryDaoByAddressRequest {
    return o && (o.$typeUrl === QueryDaoByAddressRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryDaoByAddressRequestSDKType {
    return o && (o.$typeUrl === QueryDaoByAddressRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryDaoByAddressRequestAmino {
    return o && (o.$typeUrl === QueryDaoByAddressRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryDaoByAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaoByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaoByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaoByAddressRequest>): QueryDaoByAddressRequest {
    const message = createBaseQueryDaoByAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryDaoByAddressRequestAmino): QueryDaoByAddressRequest {
    const message = createBaseQueryDaoByAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryDaoByAddressRequest): QueryDaoByAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryDaoByAddressRequestAminoMsg): QueryDaoByAddressRequest {
    return QueryDaoByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaoByAddressRequestProtoMsg): QueryDaoByAddressRequest {
    return QueryDaoByAddressRequest.decode(message.value);
  },
  toProto(message: QueryDaoByAddressRequest): Uint8Array {
    return QueryDaoByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDaoByAddressRequest): QueryDaoByAddressRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaoByAddressRequest",
      value: QueryDaoByAddressRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDaoByAddressResponse(): QueryDaoByAddressResponse {
  return {
    dao: Dao.fromPartial({})
  };
}
/**
 * QueryDaoByAddressResponse is response type for the Query/DaoByAddress RPC method.
 * @name QueryDaoByAddressResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoByAddressResponse
 */
export const QueryDaoByAddressResponse = {
  typeUrl: "/bze.dao.QueryDaoByAddressResponse",
  is(o: any): o is QueryDaoByAddressResponse {
    return o && (o.$typeUrl === QueryDaoByAddressResponse.typeUrl || Dao.is(o.dao));
  },
  isSDK(o: any): o is QueryDaoByAddressResponseSDKType {
    return o && (o.$typeUrl === QueryDaoByAddressResponse.typeUrl || Dao.isSDK(o.dao));
  },
  isAmino(o: any): o is QueryDaoByAddressResponseAmino {
    return o && (o.$typeUrl === QueryDaoByAddressResponse.typeUrl || Dao.isAmino(o.dao));
  },
  encode(message: QueryDaoByAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dao !== undefined) {
      Dao.encode(message.dao, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaoByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaoByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dao = Dao.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaoByAddressResponse>): QueryDaoByAddressResponse {
    const message = createBaseQueryDaoByAddressResponse();
    message.dao = object.dao !== undefined && object.dao !== null ? Dao.fromPartial(object.dao) : undefined;
    return message;
  },
  fromAmino(object: QueryDaoByAddressResponseAmino): QueryDaoByAddressResponse {
    const message = createBaseQueryDaoByAddressResponse();
    if (object.dao !== undefined && object.dao !== null) {
      message.dao = Dao.fromAmino(object.dao);
    }
    return message;
  },
  toAmino(message: QueryDaoByAddressResponse): QueryDaoByAddressResponseAmino {
    const obj: any = {};
    obj.dao = message.dao ? Dao.toAmino(message.dao) : Dao.toAmino(Dao.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryDaoByAddressResponseAminoMsg): QueryDaoByAddressResponse {
    return QueryDaoByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaoByAddressResponseProtoMsg): QueryDaoByAddressResponse {
    return QueryDaoByAddressResponse.decode(message.value);
  },
  toProto(message: QueryDaoByAddressResponse): Uint8Array {
    return QueryDaoByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDaoByAddressResponse): QueryDaoByAddressResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaoByAddressResponse",
      value: QueryDaoByAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDaoByAddressResponse.typeUrl)) {
      return;
    }
    Dao.registerTypeUrl();
  }
};
function createBaseQueryDaoControllerRequest(): QueryDaoControllerRequest {
  return {
    daoId: BigInt(0)
  };
}
/**
 * QueryDaoControllerRequest is request type for the Query/DaoController RPC method.
 * @name QueryDaoControllerRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerRequest
 */
export const QueryDaoControllerRequest = {
  typeUrl: "/bze.dao.QueryDaoControllerRequest",
  is(o: any): o is QueryDaoControllerRequest {
    return o && (o.$typeUrl === QueryDaoControllerRequest.typeUrl || typeof o.daoId === "bigint");
  },
  isSDK(o: any): o is QueryDaoControllerRequestSDKType {
    return o && (o.$typeUrl === QueryDaoControllerRequest.typeUrl || typeof o.dao_id === "bigint");
  },
  isAmino(o: any): o is QueryDaoControllerRequestAmino {
    return o && (o.$typeUrl === QueryDaoControllerRequest.typeUrl || typeof o.dao_id === "bigint");
  },
  encode(message: QueryDaoControllerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.daoId !== BigInt(0)) {
      writer.uint32(8).uint64(message.daoId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaoControllerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaoControllerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daoId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaoControllerRequest>): QueryDaoControllerRequest {
    const message = createBaseQueryDaoControllerRequest();
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDaoControllerRequestAmino): QueryDaoControllerRequest {
    const message = createBaseQueryDaoControllerRequest();
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    return message;
  },
  toAmino(message: QueryDaoControllerRequest): QueryDaoControllerRequestAmino {
    const obj: any = {};
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDaoControllerRequestAminoMsg): QueryDaoControllerRequest {
    return QueryDaoControllerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaoControllerRequestProtoMsg): QueryDaoControllerRequest {
    return QueryDaoControllerRequest.decode(message.value);
  },
  toProto(message: QueryDaoControllerRequest): Uint8Array {
    return QueryDaoControllerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDaoControllerRequest): QueryDaoControllerRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaoControllerRequest",
      value: QueryDaoControllerRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDaoControllerResponse(): QueryDaoControllerResponse {
  return {
    controller: "",
    endReason: 0,
    path: []
  };
}
/**
 * QueryDaoControllerResponse is response type for the Query/DaoController RPC method.
 * @name QueryDaoControllerResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaoControllerResponse
 */
export const QueryDaoControllerResponse = {
  typeUrl: "/bze.dao.QueryDaoControllerResponse",
  is(o: any): o is QueryDaoControllerResponse {
    return o && (o.$typeUrl === QueryDaoControllerResponse.typeUrl || typeof o.controller === "string" && isSet(o.endReason) && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "string"));
  },
  isSDK(o: any): o is QueryDaoControllerResponseSDKType {
    return o && (o.$typeUrl === QueryDaoControllerResponse.typeUrl || typeof o.controller === "string" && isSet(o.end_reason) && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "string"));
  },
  isAmino(o: any): o is QueryDaoControllerResponseAmino {
    return o && (o.$typeUrl === QueryDaoControllerResponse.typeUrl || typeof o.controller === "string" && isSet(o.end_reason) && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "string"));
  },
  encode(message: QueryDaoControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    if (message.endReason !== 0) {
      writer.uint32(16).int32(message.endReason);
    }
    for (const v of message.path) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaoControllerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaoControllerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controller = reader.string();
          break;
        case 2:
          message.endReason = reader.int32() as any;
          break;
        case 3:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaoControllerResponse>): QueryDaoControllerResponse {
    const message = createBaseQueryDaoControllerResponse();
    message.controller = object.controller ?? "";
    message.endReason = object.endReason ?? 0;
    message.path = object.path?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDaoControllerResponseAmino): QueryDaoControllerResponse {
    const message = createBaseQueryDaoControllerResponse();
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.end_reason !== undefined && object.end_reason !== null) {
      message.endReason = object.end_reason;
    }
    message.path = object.path?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDaoControllerResponse): QueryDaoControllerResponseAmino {
    const obj: any = {};
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.end_reason = message.endReason ?? 0;
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = message.path;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDaoControllerResponseAminoMsg): QueryDaoControllerResponse {
    return QueryDaoControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaoControllerResponseProtoMsg): QueryDaoControllerResponse {
    return QueryDaoControllerResponse.decode(message.value);
  },
  toProto(message: QueryDaoControllerResponse): Uint8Array {
    return QueryDaoControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDaoControllerResponse): QueryDaoControllerResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaoControllerResponse",
      value: QueryDaoControllerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryProposalRequest is request type for the Query/Proposal RPC method.
 * @name QueryProposalRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalRequest
 */
export const QueryProposalRequest = {
  typeUrl: "/bze.dao.QueryProposalRequest",
  is(o: any): o is QueryProposalRequest {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryProposalRequestSDKType {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryProposalRequestAmino {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: Proposal.fromPartial({}),
    votingEnded: false,
    retryDeadline: BigInt(0),
    expediteSettleable: false
  };
}
/**
 * QueryProposalResponse is response type for the Query/Proposal RPC method.
 * The flags are computed at the current block time.
 * @name QueryProposalResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalResponse
 */
export const QueryProposalResponse = {
  typeUrl: "/bze.dao.QueryProposalResponse",
  is(o: any): o is QueryProposalResponse {
    return o && (o.$typeUrl === QueryProposalResponse.typeUrl || Proposal.is(o.proposal) && typeof o.votingEnded === "boolean" && typeof o.retryDeadline === "bigint" && typeof o.expediteSettleable === "boolean");
  },
  isSDK(o: any): o is QueryProposalResponseSDKType {
    return o && (o.$typeUrl === QueryProposalResponse.typeUrl || Proposal.isSDK(o.proposal) && typeof o.voting_ended === "boolean" && typeof o.retry_deadline === "bigint" && typeof o.expedite_settleable === "boolean");
  },
  isAmino(o: any): o is QueryProposalResponseAmino {
    return o && (o.$typeUrl === QueryProposalResponse.typeUrl || Proposal.isAmino(o.proposal) && typeof o.voting_ended === "boolean" && typeof o.retry_deadline === "bigint" && typeof o.expedite_settleable === "boolean");
  },
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingEnded === true) {
      writer.uint32(16).bool(message.votingEnded);
    }
    if (message.retryDeadline !== BigInt(0)) {
      writer.uint32(24).int64(message.retryDeadline);
    }
    if (message.expediteSettleable === true) {
      writer.uint32(32).bool(message.expediteSettleable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingEnded = reader.bool();
          break;
        case 3:
          message.retryDeadline = reader.int64();
          break;
        case 4:
          message.expediteSettleable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.votingEnded = object.votingEnded ?? false;
    message.retryDeadline = object.retryDeadline !== undefined && object.retryDeadline !== null ? BigInt(object.retryDeadline.toString()) : BigInt(0);
    message.expediteSettleable = object.expediteSettleable ?? false;
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    if (object.voting_ended !== undefined && object.voting_ended !== null) {
      message.votingEnded = object.voting_ended;
    }
    if (object.retry_deadline !== undefined && object.retry_deadline !== null) {
      message.retryDeadline = BigInt(object.retry_deadline);
    }
    if (object.expedite_settleable !== undefined && object.expedite_settleable !== null) {
      message.expediteSettleable = object.expedite_settleable;
    }
    return message;
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : Proposal.toAmino(Proposal.fromPartial({}));
    obj.voting_ended = message.votingEnded ?? false;
    obj.retry_deadline = message.retryDeadline ? message.retryDeadline?.toString() : "0";
    obj.expedite_settleable = message.expediteSettleable ?? false;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryProposalResponse.typeUrl)) {
      return;
    }
    Proposal.registerTypeUrl();
  }
};
function createBaseQueryBallotRequest(): QueryBallotRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
/**
 * QueryBallotRequest is request type for the Query/Ballot RPC method.
 * @name QueryBallotRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotRequest
 */
export const QueryBallotRequest = {
  typeUrl: "/bze.dao.QueryBallotRequest",
  is(o: any): o is QueryBallotRequest {
    return o && (o.$typeUrl === QueryBallotRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string");
  },
  isSDK(o: any): o is QueryBallotRequestSDKType {
    return o && (o.$typeUrl === QueryBallotRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryBallotRequestAmino {
    return o && (o.$typeUrl === QueryBallotRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  encode(message: QueryBallotRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBallotRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBallotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBallotRequest>): QueryBallotRequest {
    const message = createBaseQueryBallotRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryBallotRequestAmino): QueryBallotRequest {
    const message = createBaseQueryBallotRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryBallotRequest): QueryBallotRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryBallotRequestAminoMsg): QueryBallotRequest {
    return QueryBallotRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBallotRequestProtoMsg): QueryBallotRequest {
    return QueryBallotRequest.decode(message.value);
  },
  toProto(message: QueryBallotRequest): Uint8Array {
    return QueryBallotRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBallotRequest): QueryBallotRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryBallotRequest",
      value: QueryBallotRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBallotResponse(): QueryBallotResponse {
  return {
    ballot: Ballot.fromPartial({})
  };
}
/**
 * QueryBallotResponse is response type for the Query/Ballot RPC method.
 * @name QueryBallotResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotResponse
 */
export const QueryBallotResponse = {
  typeUrl: "/bze.dao.QueryBallotResponse",
  is(o: any): o is QueryBallotResponse {
    return o && (o.$typeUrl === QueryBallotResponse.typeUrl || Ballot.is(o.ballot));
  },
  isSDK(o: any): o is QueryBallotResponseSDKType {
    return o && (o.$typeUrl === QueryBallotResponse.typeUrl || Ballot.isSDK(o.ballot));
  },
  isAmino(o: any): o is QueryBallotResponseAmino {
    return o && (o.$typeUrl === QueryBallotResponse.typeUrl || Ballot.isAmino(o.ballot));
  },
  encode(message: QueryBallotResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ballot !== undefined) {
      Ballot.encode(message.ballot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBallotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBallotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballot = Ballot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBallotResponse>): QueryBallotResponse {
    const message = createBaseQueryBallotResponse();
    message.ballot = object.ballot !== undefined && object.ballot !== null ? Ballot.fromPartial(object.ballot) : undefined;
    return message;
  },
  fromAmino(object: QueryBallotResponseAmino): QueryBallotResponse {
    const message = createBaseQueryBallotResponse();
    if (object.ballot !== undefined && object.ballot !== null) {
      message.ballot = Ballot.fromAmino(object.ballot);
    }
    return message;
  },
  toAmino(message: QueryBallotResponse): QueryBallotResponseAmino {
    const obj: any = {};
    obj.ballot = message.ballot ? Ballot.toAmino(message.ballot) : Ballot.toAmino(Ballot.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryBallotResponseAminoMsg): QueryBallotResponse {
    return QueryBallotResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBallotResponseProtoMsg): QueryBallotResponse {
    return QueryBallotResponse.decode(message.value);
  },
  toProto(message: QueryBallotResponse): Uint8Array {
    return QueryBallotResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBallotResponse): QueryBallotResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryBallotResponse",
      value: QueryBallotResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBallotResponse.typeUrl)) {
      return;
    }
    Ballot.registerTypeUrl();
  }
};
function createBaseQueryVotingPowerRequest(): QueryVotingPowerRequest {
  return {
    daoId: BigInt(0),
    address: ""
  };
}
/**
 * QueryVotingPowerRequest is request type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerRequest
 */
export const QueryVotingPowerRequest = {
  typeUrl: "/bze.dao.QueryVotingPowerRequest",
  is(o: any): o is QueryVotingPowerRequest {
    return o && (o.$typeUrl === QueryVotingPowerRequest.typeUrl || typeof o.daoId === "bigint" && typeof o.address === "string");
  },
  isSDK(o: any): o is QueryVotingPowerRequestSDKType {
    return o && (o.$typeUrl === QueryVotingPowerRequest.typeUrl || typeof o.dao_id === "bigint" && typeof o.address === "string");
  },
  isAmino(o: any): o is QueryVotingPowerRequestAmino {
    return o && (o.$typeUrl === QueryVotingPowerRequest.typeUrl || typeof o.dao_id === "bigint" && typeof o.address === "string");
  },
  encode(message: QueryVotingPowerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.daoId !== BigInt(0)) {
      writer.uint32(8).uint64(message.daoId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotingPowerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingPowerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daoId = reader.uint64();
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
  fromPartial(object: Partial<QueryVotingPowerRequest>): QueryVotingPowerRequest {
    const message = createBaseQueryVotingPowerRequest();
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryVotingPowerRequestAmino): QueryVotingPowerRequest {
    const message = createBaseQueryVotingPowerRequest();
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryVotingPowerRequest): QueryVotingPowerRequestAmino {
    const obj: any = {};
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryVotingPowerRequestAminoMsg): QueryVotingPowerRequest {
    return QueryVotingPowerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotingPowerRequestProtoMsg): QueryVotingPowerRequest {
    return QueryVotingPowerRequest.decode(message.value);
  },
  toProto(message: QueryVotingPowerRequest): Uint8Array {
    return QueryVotingPowerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotingPowerRequest): QueryVotingPowerRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryVotingPowerRequest",
      value: QueryVotingPowerRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseProposalVotingPower(): ProposalVotingPower {
  return {
    proposalId: BigInt(0),
    eligibleWeight: "",
    shares: []
  };
}
/**
 * ProposalVotingPower is the weight an address would vote with on one proposal.
 * @name ProposalVotingPower
 * @package bze.dao
 * @see proto type: bze.dao.ProposalVotingPower
 */
export const ProposalVotingPower = {
  typeUrl: "/bze.dao.ProposalVotingPower",
  is(o: any): o is ProposalVotingPower {
    return o && (o.$typeUrl === ProposalVotingPower.typeUrl || typeof o.proposalId === "bigint" && typeof o.eligibleWeight === "string" && Array.isArray(o.shares) && (!o.shares.length || BallotShare.is(o.shares[0])));
  },
  isSDK(o: any): o is ProposalVotingPowerSDKType {
    return o && (o.$typeUrl === ProposalVotingPower.typeUrl || typeof o.proposal_id === "bigint" && typeof o.eligible_weight === "string" && Array.isArray(o.shares) && (!o.shares.length || BallotShare.isSDK(o.shares[0])));
  },
  isAmino(o: any): o is ProposalVotingPowerAmino {
    return o && (o.$typeUrl === ProposalVotingPower.typeUrl || typeof o.proposal_id === "bigint" && typeof o.eligible_weight === "string" && Array.isArray(o.shares) && (!o.shares.length || BallotShare.isAmino(o.shares[0])));
  },
  encode(message: ProposalVotingPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.eligibleWeight !== "") {
      writer.uint32(18).string(message.eligibleWeight);
    }
    for (const v of message.shares) {
      BallotShare.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalVotingPower {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalVotingPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.eligibleWeight = reader.string();
          break;
        case 3:
          message.shares.push(BallotShare.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalVotingPower>): ProposalVotingPower {
    const message = createBaseProposalVotingPower();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.eligibleWeight = object.eligibleWeight ?? "";
    message.shares = object.shares?.map(e => BallotShare.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalVotingPowerAmino): ProposalVotingPower {
    const message = createBaseProposalVotingPower();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.eligible_weight !== undefined && object.eligible_weight !== null) {
      message.eligibleWeight = object.eligible_weight;
    }
    message.shares = object.shares?.map(e => BallotShare.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProposalVotingPower): ProposalVotingPowerAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.eligible_weight = message.eligibleWeight === "" ? undefined : message.eligibleWeight;
    if (message.shares) {
      obj.shares = message.shares.map(e => e ? BallotShare.toAmino(e) : undefined);
    } else {
      obj.shares = message.shares;
    }
    return obj;
  },
  fromAminoMsg(object: ProposalVotingPowerAminoMsg): ProposalVotingPower {
    return ProposalVotingPower.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalVotingPowerProtoMsg): ProposalVotingPower {
    return ProposalVotingPower.decode(message.value);
  },
  toProto(message: ProposalVotingPower): Uint8Array {
    return ProposalVotingPower.encode(message).finish();
  },
  toProtoMsg(message: ProposalVotingPower): ProposalVotingPowerProtoMsg {
    return {
      typeUrl: "/bze.dao.ProposalVotingPower",
      value: ProposalVotingPower.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ProposalVotingPower.typeUrl)) {
      return;
    }
    BallotShare.registerTypeUrl();
  }
};
function createBaseQueryVotingPowerResponse(): QueryVotingPowerResponse {
  return {
    current: "",
    proposals: []
  };
}
/**
 * QueryVotingPowerResponse is response type for the Query/VotingPower RPC method.
 * @name QueryVotingPowerResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryVotingPowerResponse
 */
export const QueryVotingPowerResponse = {
  typeUrl: "/bze.dao.QueryVotingPowerResponse",
  is(o: any): o is QueryVotingPowerResponse {
    return o && (o.$typeUrl === QueryVotingPowerResponse.typeUrl || typeof o.current === "string" && Array.isArray(o.proposals) && (!o.proposals.length || ProposalVotingPower.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryVotingPowerResponseSDKType {
    return o && (o.$typeUrl === QueryVotingPowerResponse.typeUrl || typeof o.current === "string" && Array.isArray(o.proposals) && (!o.proposals.length || ProposalVotingPower.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryVotingPowerResponseAmino {
    return o && (o.$typeUrl === QueryVotingPowerResponse.typeUrl || typeof o.current === "string" && Array.isArray(o.proposals) && (!o.proposals.length || ProposalVotingPower.isAmino(o.proposals[0])));
  },
  encode(message: QueryVotingPowerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.current !== "") {
      writer.uint32(10).string(message.current);
    }
    for (const v of message.proposals) {
      ProposalVotingPower.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotingPowerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingPowerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.current = reader.string();
          break;
        case 2:
          message.proposals.push(ProposalVotingPower.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVotingPowerResponse>): QueryVotingPowerResponse {
    const message = createBaseQueryVotingPowerResponse();
    message.current = object.current ?? "";
    message.proposals = object.proposals?.map(e => ProposalVotingPower.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryVotingPowerResponseAmino): QueryVotingPowerResponse {
    const message = createBaseQueryVotingPowerResponse();
    if (object.current !== undefined && object.current !== null) {
      message.current = object.current;
    }
    message.proposals = object.proposals?.map(e => ProposalVotingPower.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryVotingPowerResponse): QueryVotingPowerResponseAmino {
    const obj: any = {};
    obj.current = message.current === "" ? undefined : message.current;
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? ProposalVotingPower.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVotingPowerResponseAminoMsg): QueryVotingPowerResponse {
    return QueryVotingPowerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotingPowerResponseProtoMsg): QueryVotingPowerResponse {
    return QueryVotingPowerResponse.decode(message.value);
  },
  toProto(message: QueryVotingPowerResponse): Uint8Array {
    return QueryVotingPowerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotingPowerResponse): QueryVotingPowerResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryVotingPowerResponse",
      value: QueryVotingPowerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryVotingPowerResponse.typeUrl)) {
      return;
    }
    ProposalVotingPower.registerTypeUrl();
  }
};
function createBaseQueryJoinRecordRequest(): QueryJoinRecordRequest {
  return {
    source: "",
    address: ""
  };
}
/**
 * QueryJoinRecordRequest is request type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordRequest
 */
export const QueryJoinRecordRequest = {
  typeUrl: "/bze.dao.QueryJoinRecordRequest",
  is(o: any): o is QueryJoinRecordRequest {
    return o && (o.$typeUrl === QueryJoinRecordRequest.typeUrl || typeof o.source === "string" && typeof o.address === "string");
  },
  isSDK(o: any): o is QueryJoinRecordRequestSDKType {
    return o && (o.$typeUrl === QueryJoinRecordRequest.typeUrl || typeof o.source === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is QueryJoinRecordRequestAmino {
    return o && (o.$typeUrl === QueryJoinRecordRequest.typeUrl || typeof o.source === "string" && typeof o.address === "string");
  },
  encode(message: QueryJoinRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
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
  fromPartial(object: Partial<QueryJoinRecordRequest>): QueryJoinRecordRequest {
    const message = createBaseQueryJoinRecordRequest();
    message.source = object.source ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryJoinRecordRequestAmino): QueryJoinRecordRequest {
    const message = createBaseQueryJoinRecordRequest();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryJoinRecordRequest): QueryJoinRecordRequestAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryJoinRecordRequestAminoMsg): QueryJoinRecordRequest {
    return QueryJoinRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinRecordRequestProtoMsg): QueryJoinRecordRequest {
    return QueryJoinRecordRequest.decode(message.value);
  },
  toProto(message: QueryJoinRecordRequest): Uint8Array {
    return QueryJoinRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinRecordRequest): QueryJoinRecordRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryJoinRecordRequest",
      value: QueryJoinRecordRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryJoinRecordResponse(): QueryJoinRecordResponse {
  return {
    height: BigInt(0)
  };
}
/**
 * QueryJoinRecordResponse is response type for the Query/JoinRecord RPC method.
 * @name QueryJoinRecordResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryJoinRecordResponse
 */
export const QueryJoinRecordResponse = {
  typeUrl: "/bze.dao.QueryJoinRecordResponse",
  is(o: any): o is QueryJoinRecordResponse {
    return o && (o.$typeUrl === QueryJoinRecordResponse.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is QueryJoinRecordResponseSDKType {
    return o && (o.$typeUrl === QueryJoinRecordResponse.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is QueryJoinRecordResponseAmino {
    return o && (o.$typeUrl === QueryJoinRecordResponse.typeUrl || typeof o.height === "bigint");
  },
  encode(message: QueryJoinRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryJoinRecordResponse>): QueryJoinRecordResponse {
    const message = createBaseQueryJoinRecordResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryJoinRecordResponseAmino): QueryJoinRecordResponse {
    const message = createBaseQueryJoinRecordResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryJoinRecordResponse): QueryJoinRecordResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: QueryJoinRecordResponseAminoMsg): QueryJoinRecordResponse {
    return QueryJoinRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinRecordResponseProtoMsg): QueryJoinRecordResponse {
    return QueryJoinRecordResponse.decode(message.value);
  },
  toProto(message: QueryJoinRecordResponse): Uint8Array {
    return QueryJoinRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinRecordResponse): QueryJoinRecordResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryJoinRecordResponse",
      value: QueryJoinRecordResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDaosRequest(): QueryDaosRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryDaosRequest is request type for the Query/Daos RPC method.
 * @name QueryDaosRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosRequest
 */
export const QueryDaosRequest = {
  typeUrl: "/bze.dao.QueryDaosRequest",
  is(o: any): o is QueryDaosRequest {
    return o && o.$typeUrl === QueryDaosRequest.typeUrl;
  },
  isSDK(o: any): o is QueryDaosRequestSDKType {
    return o && o.$typeUrl === QueryDaosRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDaosRequestAmino {
    return o && o.$typeUrl === QueryDaosRequest.typeUrl;
  },
  encode(message: QueryDaosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaosRequest>): QueryDaosRequest {
    const message = createBaseQueryDaosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDaosRequestAmino): QueryDaosRequest {
    const message = createBaseQueryDaosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDaosRequest): QueryDaosRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDaosRequestAminoMsg): QueryDaosRequest {
    return QueryDaosRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaosRequestProtoMsg): QueryDaosRequest {
    return QueryDaosRequest.decode(message.value);
  },
  toProto(message: QueryDaosRequest): Uint8Array {
    return QueryDaosRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDaosRequest): QueryDaosRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaosRequest",
      value: QueryDaosRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDaosRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDaosResponse(): QueryDaosResponse {
  return {
    daos: [],
    pagination: undefined
  };
}
/**
 * QueryDaosResponse is response type for the Query/Daos RPC method.
 * @name QueryDaosResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosResponse
 */
export const QueryDaosResponse = {
  typeUrl: "/bze.dao.QueryDaosResponse",
  is(o: any): o is QueryDaosResponse {
    return o && (o.$typeUrl === QueryDaosResponse.typeUrl || Array.isArray(o.daos) && (!o.daos.length || Dao.is(o.daos[0])));
  },
  isSDK(o: any): o is QueryDaosResponseSDKType {
    return o && (o.$typeUrl === QueryDaosResponse.typeUrl || Array.isArray(o.daos) && (!o.daos.length || Dao.isSDK(o.daos[0])));
  },
  isAmino(o: any): o is QueryDaosResponseAmino {
    return o && (o.$typeUrl === QueryDaosResponse.typeUrl || Array.isArray(o.daos) && (!o.daos.length || Dao.isAmino(o.daos[0])));
  },
  encode(message: QueryDaosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.daos) {
      Dao.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daos.push(Dao.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaosResponse>): QueryDaosResponse {
    const message = createBaseQueryDaosResponse();
    message.daos = object.daos?.map(e => Dao.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDaosResponseAmino): QueryDaosResponse {
    const message = createBaseQueryDaosResponse();
    message.daos = object.daos?.map(e => Dao.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDaosResponse): QueryDaosResponseAmino {
    const obj: any = {};
    if (message.daos) {
      obj.daos = message.daos.map(e => e ? Dao.toAmino(e) : undefined);
    } else {
      obj.daos = message.daos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDaosResponseAminoMsg): QueryDaosResponse {
    return QueryDaosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaosResponseProtoMsg): QueryDaosResponse {
    return QueryDaosResponse.decode(message.value);
  },
  toProto(message: QueryDaosResponse): Uint8Array {
    return QueryDaosResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDaosResponse): QueryDaosResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaosResponse",
      value: QueryDaosResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDaosResponse.typeUrl)) {
      return;
    }
    Dao.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDaosByAdminRequest(): QueryDaosByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
/**
 * QueryDaosByAdminRequest is request type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminRequest
 */
export const QueryDaosByAdminRequest = {
  typeUrl: "/bze.dao.QueryDaosByAdminRequest",
  is(o: any): o is QueryDaosByAdminRequest {
    return o && (o.$typeUrl === QueryDaosByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isSDK(o: any): o is QueryDaosByAdminRequestSDKType {
    return o && (o.$typeUrl === QueryDaosByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isAmino(o: any): o is QueryDaosByAdminRequestAmino {
    return o && (o.$typeUrl === QueryDaosByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  encode(message: QueryDaosByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaosByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaosByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaosByAdminRequest>): QueryDaosByAdminRequest {
    const message = createBaseQueryDaosByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDaosByAdminRequestAmino): QueryDaosByAdminRequest {
    const message = createBaseQueryDaosByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDaosByAdminRequest): QueryDaosByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDaosByAdminRequestAminoMsg): QueryDaosByAdminRequest {
    return QueryDaosByAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaosByAdminRequestProtoMsg): QueryDaosByAdminRequest {
    return QueryDaosByAdminRequest.decode(message.value);
  },
  toProto(message: QueryDaosByAdminRequest): Uint8Array {
    return QueryDaosByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDaosByAdminRequest): QueryDaosByAdminRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaosByAdminRequest",
      value: QueryDaosByAdminRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDaosByAdminRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDaosByAdminResponse(): QueryDaosByAdminResponse {
  return {
    daos: [],
    pagination: undefined
  };
}
/**
 * QueryDaosByAdminResponse is response type for the Query/DaosByAdmin RPC method.
 * @name QueryDaosByAdminResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryDaosByAdminResponse
 */
export const QueryDaosByAdminResponse = {
  typeUrl: "/bze.dao.QueryDaosByAdminResponse",
  is(o: any): o is QueryDaosByAdminResponse {
    return o && (o.$typeUrl === QueryDaosByAdminResponse.typeUrl || Array.isArray(o.daos) && (!o.daos.length || Dao.is(o.daos[0])));
  },
  isSDK(o: any): o is QueryDaosByAdminResponseSDKType {
    return o && (o.$typeUrl === QueryDaosByAdminResponse.typeUrl || Array.isArray(o.daos) && (!o.daos.length || Dao.isSDK(o.daos[0])));
  },
  isAmino(o: any): o is QueryDaosByAdminResponseAmino {
    return o && (o.$typeUrl === QueryDaosByAdminResponse.typeUrl || Array.isArray(o.daos) && (!o.daos.length || Dao.isAmino(o.daos[0])));
  },
  encode(message: QueryDaosByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.daos) {
      Dao.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDaosByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDaosByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daos.push(Dao.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDaosByAdminResponse>): QueryDaosByAdminResponse {
    const message = createBaseQueryDaosByAdminResponse();
    message.daos = object.daos?.map(e => Dao.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDaosByAdminResponseAmino): QueryDaosByAdminResponse {
    const message = createBaseQueryDaosByAdminResponse();
    message.daos = object.daos?.map(e => Dao.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDaosByAdminResponse): QueryDaosByAdminResponseAmino {
    const obj: any = {};
    if (message.daos) {
      obj.daos = message.daos.map(e => e ? Dao.toAmino(e) : undefined);
    } else {
      obj.daos = message.daos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDaosByAdminResponseAminoMsg): QueryDaosByAdminResponse {
    return QueryDaosByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDaosByAdminResponseProtoMsg): QueryDaosByAdminResponse {
    return QueryDaosByAdminResponse.decode(message.value);
  },
  toProto(message: QueryDaosByAdminResponse): Uint8Array {
    return QueryDaosByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDaosByAdminResponse): QueryDaosByAdminResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryDaosByAdminResponse",
      value: QueryDaosByAdminResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDaosByAdminResponse.typeUrl)) {
      return;
    }
    Dao.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    daoId: BigInt(0),
    statuses: [],
    pagination: undefined
  };
}
/**
 * QueryProposalsRequest is request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsRequest
 */
export const QueryProposalsRequest = {
  typeUrl: "/bze.dao.QueryProposalsRequest",
  is(o: any): o is QueryProposalsRequest {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || typeof o.daoId === "bigint" && Array.isArray(o.statuses));
  },
  isSDK(o: any): o is QueryProposalsRequestSDKType {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || typeof o.dao_id === "bigint" && Array.isArray(o.statuses));
  },
  isAmino(o: any): o is QueryProposalsRequestAmino {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || typeof o.dao_id === "bigint" && Array.isArray(o.statuses));
  },
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.daoId !== BigInt(0)) {
      writer.uint32(8).uint64(message.daoId);
    }
    writer.uint32(18).fork();
    for (const v of message.statuses) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daoId = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statuses.push(reader.int32() as any);
            }
          } else {
            message.statuses.push(reader.int32() as any);
          }
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.statuses = object.statuses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    message.statuses = object.statuses?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    if (message.statuses) {
      obj.statuses = message.statuses.map(e => e);
    } else {
      obj.statuses = message.statuses;
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryProposalsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
/**
 * QueryProposalsResponse is response type for the Query/Proposals RPC method.
 * The statuses are the stored ones: a VOTING proposal past its voting end is
 * listed as VOTING until it is settled.
 * @name QueryProposalsResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryProposalsResponse
 */
export const QueryProposalsResponse = {
  typeUrl: "/bze.dao.QueryProposalsResponse",
  is(o: any): o is QueryProposalsResponse {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryProposalsResponseSDKType {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryProposalsResponseAmino {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryProposalsResponse.typeUrl)) {
      return;
    }
    Proposal.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryBallotsRequest(): QueryBallotsRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryBallotsRequest is request type for the Query/Ballots RPC method.
 * @name QueryBallotsRequest
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsRequest
 */
export const QueryBallotsRequest = {
  typeUrl: "/bze.dao.QueryBallotsRequest",
  is(o: any): o is QueryBallotsRequest {
    return o && (o.$typeUrl === QueryBallotsRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryBallotsRequestSDKType {
    return o && (o.$typeUrl === QueryBallotsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryBallotsRequestAmino {
    return o && (o.$typeUrl === QueryBallotsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryBallotsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBallotsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBallotsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBallotsRequest>): QueryBallotsRequest {
    const message = createBaseQueryBallotsRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBallotsRequestAmino): QueryBallotsRequest {
    const message = createBaseQueryBallotsRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBallotsRequest): QueryBallotsRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBallotsRequestAminoMsg): QueryBallotsRequest {
    return QueryBallotsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBallotsRequestProtoMsg): QueryBallotsRequest {
    return QueryBallotsRequest.decode(message.value);
  },
  toProto(message: QueryBallotsRequest): Uint8Array {
    return QueryBallotsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBallotsRequest): QueryBallotsRequestProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryBallotsRequest",
      value: QueryBallotsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBallotsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryBallotsResponse(): QueryBallotsResponse {
  return {
    ballots: [],
    pagination: undefined
  };
}
/**
 * QueryBallotsResponse is response type for the Query/Ballots RPC method.
 * @name QueryBallotsResponse
 * @package bze.dao
 * @see proto type: bze.dao.QueryBallotsResponse
 */
export const QueryBallotsResponse = {
  typeUrl: "/bze.dao.QueryBallotsResponse",
  is(o: any): o is QueryBallotsResponse {
    return o && (o.$typeUrl === QueryBallotsResponse.typeUrl || Array.isArray(o.ballots) && (!o.ballots.length || Ballot.is(o.ballots[0])));
  },
  isSDK(o: any): o is QueryBallotsResponseSDKType {
    return o && (o.$typeUrl === QueryBallotsResponse.typeUrl || Array.isArray(o.ballots) && (!o.ballots.length || Ballot.isSDK(o.ballots[0])));
  },
  isAmino(o: any): o is QueryBallotsResponseAmino {
    return o && (o.$typeUrl === QueryBallotsResponse.typeUrl || Array.isArray(o.ballots) && (!o.ballots.length || Ballot.isAmino(o.ballots[0])));
  },
  encode(message: QueryBallotsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ballots) {
      Ballot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBallotsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBallotsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballots.push(Ballot.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBallotsResponse>): QueryBallotsResponse {
    const message = createBaseQueryBallotsResponse();
    message.ballots = object.ballots?.map(e => Ballot.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBallotsResponseAmino): QueryBallotsResponse {
    const message = createBaseQueryBallotsResponse();
    message.ballots = object.ballots?.map(e => Ballot.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBallotsResponse): QueryBallotsResponseAmino {
    const obj: any = {};
    if (message.ballots) {
      obj.ballots = message.ballots.map(e => e ? Ballot.toAmino(e) : undefined);
    } else {
      obj.ballots = message.ballots;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBallotsResponseAminoMsg): QueryBallotsResponse {
    return QueryBallotsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBallotsResponseProtoMsg): QueryBallotsResponse {
    return QueryBallotsResponse.decode(message.value);
  },
  toProto(message: QueryBallotsResponse): Uint8Array {
    return QueryBallotsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBallotsResponse): QueryBallotsResponseProtoMsg {
    return {
      typeUrl: "/bze.dao.QueryBallotsResponse",
      value: QueryBallotsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBallotsResponse.typeUrl)) {
      return;
    }
    Ballot.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};