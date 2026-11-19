//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@interchainjs/math";
import { GlobalDecoderRegistry } from "../../registry";
/** DaoType is the kind of electorate a DAO has. The two kinds are never mixed. */
export enum DaoType {
  /** DAO_TYPE_STATIC_LIST - DAO_TYPE_STATIC_LIST is a fixed list of member addresses, one vote each. */
  DAO_TYPE_STATIC_LIST = 0,
  /** DAO_TYPE_STAKE - DAO_TYPE_STAKE is an electorate of staking rewards and/or one Denom Reward. */
  DAO_TYPE_STAKE = 1,
  UNRECOGNIZED = -1,
}
export const DaoTypeSDKType = DaoType;
export const DaoTypeAmino = DaoType;
export function daoTypeFromJSON(object: any): DaoType {
  switch (object) {
    case 0:
    case "DAO_TYPE_STATIC_LIST":
      return DaoType.DAO_TYPE_STATIC_LIST;
    case 1:
    case "DAO_TYPE_STAKE":
      return DaoType.DAO_TYPE_STAKE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DaoType.UNRECOGNIZED;
  }
}
export function daoTypeToJSON(object: DaoType): string {
  switch (object) {
    case DaoType.DAO_TYPE_STATIC_LIST:
      return "DAO_TYPE_STATIC_LIST";
    case DaoType.DAO_TYPE_STAKE:
      return "DAO_TYPE_STAKE";
    case DaoType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** DepositRefundPolicy decides when a proposal deposit goes back to the proposer. */
export enum DepositRefundPolicy {
  /** ALWAYS - ALWAYS refunds the deposit whatever the outcome. */
  ALWAYS = 0,
  /** ONLY_PASSED - ONLY_PASSED refunds the deposit only when the proposal passed. */
  ONLY_PASSED = 1,
  /** NEVER - NEVER keeps the deposit. */
  NEVER = 2,
  UNRECOGNIZED = -1,
}
export const DepositRefundPolicySDKType = DepositRefundPolicy;
export const DepositRefundPolicyAmino = DepositRefundPolicy;
export function depositRefundPolicyFromJSON(object: any): DepositRefundPolicy {
  switch (object) {
    case 0:
    case "ALWAYS":
      return DepositRefundPolicy.ALWAYS;
    case 1:
    case "ONLY_PASSED":
      return DepositRefundPolicy.ONLY_PASSED;
    case 2:
    case "NEVER":
      return DepositRefundPolicy.NEVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRefundPolicy.UNRECOGNIZED;
  }
}
export function depositRefundPolicyToJSON(object: DepositRefundPolicy): string {
  switch (object) {
    case DepositRefundPolicy.ALWAYS:
      return "ALWAYS";
    case DepositRefundPolicy.ONLY_PASSED:
      return "ONLY_PASSED";
    case DepositRefundPolicy.NEVER:
      return "NEVER";
    case DepositRefundPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** FundsDestination is where kept proposal funds (cost, kept deposits) go. */
export enum FundsDestination {
  /** BURN - BURN sends the funds to the burner. */
  BURN = 0,
  /** TREASURY - TREASURY sends the funds to the DAO's own account. */
  TREASURY = 1,
  UNRECOGNIZED = -1,
}
export const FundsDestinationSDKType = FundsDestination;
export const FundsDestinationAmino = FundsDestination;
export function fundsDestinationFromJSON(object: any): FundsDestination {
  switch (object) {
    case 0:
    case "BURN":
      return FundsDestination.BURN;
    case 1:
    case "TREASURY":
      return FundsDestination.TREASURY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FundsDestination.UNRECOGNIZED;
  }
}
export function fundsDestinationToJSON(object: FundsDestination): string {
  switch (object) {
    case FundsDestination.BURN:
      return "BURN";
    case FundsDestination.TREASURY:
      return "TREASURY";
    case FundsDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * VoteOption is a voter's choice on a proposal. The zero value is
 * UNSPECIFIED, what an omitted option decodes to, so it can never be counted
 * as a vote.
 */
export enum VoteOption {
  VOTE_OPTION_UNSPECIFIED = 0,
  YES = 1,
  NO = 2,
  ABSTAIN = 3,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "YES":
      return VoteOption.YES;
    case 2:
    case "NO":
      return VoteOption.NO;
    case 3:
    case "ABSTAIN":
      return VoteOption.ABSTAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.YES:
      return "YES";
    case VoteOption.NO:
      return "NO";
    case VoteOption.ABSTAIN:
      return "ABSTAIN";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus is the lifecycle state of a proposal. */
export enum ProposalStatus {
  /** VOTING - VOTING is open for votes, until voting_end or an early decision. */
  VOTING = 0,
  /** REJECTED - REJECTED did not pass. */
  REJECTED = 1,
  /** EXECUTED - EXECUTED passed and its messages ran. */
  EXECUTED = 2,
  /** EXECUTION_FAILED - EXECUTION_FAILED passed but its messages failed; it can be retried. */
  EXECUTION_FAILED = 3,
  /** EXPIRED - EXPIRED passed but was not executed within the execution window. */
  EXPIRED = 4,
  /** CANCELLED - CANCELLED was withdrawn by its proposer. */
  CANCELLED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "VOTING":
      return ProposalStatus.VOTING;
    case 1:
    case "REJECTED":
      return ProposalStatus.REJECTED;
    case 2:
    case "EXECUTED":
      return ProposalStatus.EXECUTED;
    case 3:
    case "EXECUTION_FAILED":
      return ProposalStatus.EXECUTION_FAILED;
    case 4:
    case "EXPIRED":
      return ProposalStatus.EXPIRED;
    case 5:
    case "CANCELLED":
      return ProposalStatus.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.VOTING:
      return "VOTING";
    case ProposalStatus.REJECTED:
      return "REJECTED";
    case ProposalStatus.EXECUTED:
      return "EXECUTED";
    case ProposalStatus.EXECUTION_FAILED:
      return "EXECUTION_FAILED";
    case ProposalStatus.EXPIRED:
      return "EXPIRED";
    case ProposalStatus.CANCELLED:
      return "CANCELLED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * DaoConfig holds the voting rules of a DAO.
 * @name DaoConfig
 * @package bze.dao
 * @see proto type: bze.dao.DaoConfig
 */
export interface DaoConfig {
  /**
   * min_quorum is the share of the electorate that must vote, in (0, 1].
   */
  minQuorum: string;
  /**
   * threshold is the share of yes votes the outcome must exceed to pass, in (0, 1).
   */
  threshold: string;
  /**
   * voting_period is how long a normal proposal stays open.
   */
  votingPeriod: Duration;
  /**
   * allow_expedite enables expedited proposals.
   */
  allowExpedite: boolean;
  /**
   * expedited_period is how long an expedited proposal stays open; never longer than voting_period.
   */
  expeditedPeriod: Duration;
  /**
   * expedite_quorum is the quorum of an expedited proposal, at least min_quorum.
   */
  expediteQuorum: string;
  /**
   * expedite_threshold is the threshold of an expedited proposal, in (0, 1) and at least threshold;
   * its base is the full denominator.
   */
  expediteThreshold: string;
  /**
   * open_submission lets anyone submit proposals; false (default) = members only.
   */
  openSubmission: boolean;
  /**
   * proposal_cost is an optional non-refundable fee to submit a proposal.
   */
  proposalCost?: Coin;
  /**
   * proposal_deposit is an optional deposit locked while a proposal is open.
   */
  proposalDeposit?: Coin;
  /**
   * deposit_refund_policy decides when the deposit is refunded.
   */
  depositRefundPolicy: DepositRefundPolicy;
  /**
   * cost_destination is where proposal costs go.
   */
  costDestination: FundsDestination;
  /**
   * kept_deposit_destination is where kept deposits go.
   */
  keptDepositDestination: FundsDestination;
}
export interface DaoConfigProtoMsg {
  typeUrl: "/bze.dao.DaoConfig";
  value: Uint8Array;
}
/**
 * DaoConfig holds the voting rules of a DAO.
 * @name DaoConfigAmino
 * @package bze.dao
 * @see proto type: bze.dao.DaoConfig
 */
export interface DaoConfigAmino {
  /**
   * min_quorum is the share of the electorate that must vote, in (0, 1].
   */
  min_quorum?: string;
  /**
   * threshold is the share of yes votes the outcome must exceed to pass, in (0, 1).
   */
  threshold?: string;
  /**
   * voting_period is how long a normal proposal stays open.
   */
  voting_period?: DurationAmino;
  /**
   * allow_expedite enables expedited proposals.
   */
  allow_expedite?: boolean;
  /**
   * expedited_period is how long an expedited proposal stays open; never longer than voting_period.
   */
  expedited_period?: DurationAmino;
  /**
   * expedite_quorum is the quorum of an expedited proposal, at least min_quorum.
   */
  expedite_quorum?: string;
  /**
   * expedite_threshold is the threshold of an expedited proposal, in (0, 1) and at least threshold;
   * its base is the full denominator.
   */
  expedite_threshold?: string;
  /**
   * open_submission lets anyone submit proposals; false (default) = members only.
   */
  open_submission?: boolean;
  /**
   * proposal_cost is an optional non-refundable fee to submit a proposal.
   */
  proposal_cost?: CoinAmino;
  /**
   * proposal_deposit is an optional deposit locked while a proposal is open.
   */
  proposal_deposit?: CoinAmino;
  /**
   * deposit_refund_policy decides when the deposit is refunded.
   */
  deposit_refund_policy?: DepositRefundPolicy;
  /**
   * cost_destination is where proposal costs go.
   */
  cost_destination?: FundsDestination;
  /**
   * kept_deposit_destination is where kept deposits go.
   */
  kept_deposit_destination?: FundsDestination;
}
export interface DaoConfigAminoMsg {
  type: "/bze.dao.DaoConfig";
  value: DaoConfigAmino;
}
/**
 * DaoConfig holds the voting rules of a DAO.
 * @name DaoConfigSDKType
 * @package bze.dao
 * @see proto type: bze.dao.DaoConfig
 */
export interface DaoConfigSDKType {
  min_quorum: string;
  threshold: string;
  voting_period: DurationSDKType;
  allow_expedite: boolean;
  expedited_period: DurationSDKType;
  expedite_quorum: string;
  expedite_threshold: string;
  open_submission: boolean;
  proposal_cost?: CoinSDKType;
  proposal_deposit?: CoinSDKType;
  deposit_refund_policy: DepositRefundPolicy;
  cost_destination: FundsDestination;
  kept_deposit_destination: FundsDestination;
}
/**
 * StakeElectorate lists the reward programs whose stakers vote in a stake DAO.
 * @name StakeElectorate
 * @package bze.dao
 * @see proto type: bze.dao.StakeElectorate
 */
export interface StakeElectorate {
  /**
   * sr_ids are the staking reward ids, at most max_sr_per_dao.
   */
  srIds: string[];
  /**
   * dr_denom optionally names one Denom Reward by its staking denom.
   */
  drDenom: string;
}
export interface StakeElectorateProtoMsg {
  typeUrl: "/bze.dao.StakeElectorate";
  value: Uint8Array;
}
/**
 * StakeElectorate lists the reward programs whose stakers vote in a stake DAO.
 * @name StakeElectorateAmino
 * @package bze.dao
 * @see proto type: bze.dao.StakeElectorate
 */
export interface StakeElectorateAmino {
  /**
   * sr_ids are the staking reward ids, at most max_sr_per_dao.
   */
  sr_ids?: string[];
  /**
   * dr_denom optionally names one Denom Reward by its staking denom.
   */
  dr_denom?: string;
}
export interface StakeElectorateAminoMsg {
  type: "/bze.dao.StakeElectorate";
  value: StakeElectorateAmino;
}
/**
 * StakeElectorate lists the reward programs whose stakers vote in a stake DAO.
 * @name StakeElectorateSDKType
 * @package bze.dao
 * @see proto type: bze.dao.StakeElectorate
 */
export interface StakeElectorateSDKType {
  sr_ids: string[];
  dr_denom: string;
}
/**
 * Dao is a DAO record.
 * @name Dao
 * @package bze.dao
 * @see proto type: bze.dao.Dao
 */
export interface Dao {
  id: bigint;
  /**
   * address is the DAO's derived account (bech32).
   */
  address: string;
  /**
   * admin is always set; equal to address when the DAO is self-owned.
   */
  admin: string;
  /**
   * pending_admin is empty unless an admin nomination is pending.
   */
  pendingAdmin: string;
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
  /**
   * created_at is the block time (unix seconds) the DAO was created at.
   */
  createdAt: bigint;
  /**
   * admin_seq is the admin_change_count value issued when the admin last
   * changed; 0 if it never changed.
   */
  adminSeq: bigint;
  /**
   * pending_admin_seq is the admin_change_count value when the pending
   * nomination was made; 0 when none is pending. The nomination can only be
   * accepted while no DAO on the admin chain changed its admin after it.
   */
  pendingAdminSeq: bigint;
}
export interface DaoProtoMsg {
  typeUrl: "/bze.dao.Dao";
  value: Uint8Array;
}
/**
 * Dao is a DAO record.
 * @name DaoAmino
 * @package bze.dao
 * @see proto type: bze.dao.Dao
 */
export interface DaoAmino {
  id?: string;
  /**
   * address is the DAO's derived account (bech32).
   */
  address?: string;
  /**
   * admin is always set; equal to address when the DAO is self-owned.
   */
  admin?: string;
  /**
   * pending_admin is empty unless an admin nomination is pending.
   */
  pending_admin?: string;
  type?: DaoType;
  name?: string;
  description?: string;
  config?: DaoConfigAmino;
  /**
   * members is the electorate of a DAO_TYPE_STATIC_LIST DAO.
   */
  members?: string[];
  /**
   * electorate is the electorate of a DAO_TYPE_STAKE DAO.
   */
  electorate?: StakeElectorateAmino;
  /**
   * created_at is the block time (unix seconds) the DAO was created at.
   */
  created_at?: string;
  /**
   * admin_seq is the admin_change_count value issued when the admin last
   * changed; 0 if it never changed.
   */
  admin_seq?: string;
  /**
   * pending_admin_seq is the admin_change_count value when the pending
   * nomination was made; 0 when none is pending. The nomination can only be
   * accepted while no DAO on the admin chain changed its admin after it.
   */
  pending_admin_seq?: string;
}
export interface DaoAminoMsg {
  type: "/bze.dao.Dao";
  value: DaoAmino;
}
/**
 * Dao is a DAO record.
 * @name DaoSDKType
 * @package bze.dao
 * @see proto type: bze.dao.Dao
 */
export interface DaoSDKType {
  id: bigint;
  address: string;
  admin: string;
  pending_admin: string;
  type: DaoType;
  name: string;
  description: string;
  config: DaoConfigSDKType;
  members: string[];
  electorate?: StakeElectorateSDKType;
  created_at: bigint;
  admin_seq: bigint;
  pending_admin_seq: bigint;
}
/**
 * Proposal is a DAO proposal. It pins the DAO's config, electorate and quorum
 * denominator at submission, so later DAO changes never move an open vote.
 * @name Proposal
 * @package bze.dao
 * @see proto type: bze.dao.Proposal
 */
export interface Proposal {
  id: bigint;
  daoId: bigint;
  proposer: string;
  title: string;
  summary: string;
  /**
   * msgs run as the DAO if the proposal passes.
   */
  msgs: (Any)[] | Any[];
  expedited: boolean;
  status: ProposalStatus;
  /**
   * submit_height is the join-eligibility reference: stake joined at or after
   * it does not count.
   */
  submitHeight: bigint;
  /**
   * submit_time and voting_end are block times in unix seconds.
   */
  submitTime: bigint;
  votingEnd: bigint;
  /**
   * pinned_config is the DAO's config at submission.
   */
  pinnedConfig: DaoConfig;
  /**
   * pinned_electorate is the stake electorate at submission (stake DAOs only).
   */
  pinnedElectorate?: StakeElectorate;
  /**
   * pinned_denominator is the total voting power at submission: the member
   * count, or the summed stake of the pinned sources.
   */
  pinnedDenominator: string;
  /**
   * pinned_deposit is the deposit escrowed by the proposer, if any.
   */
  pinnedDeposit?: Coin;
  /**
   * yes, no and abstain are the running tallies.
   */
  yes: string;
  no: string;
  abstain: string;
  /**
   * cleanup_cursor is where the ballot cleanup of a finished proposal resumes.
   */
  cleanupCursor: string;
}
export interface ProposalProtoMsg {
  typeUrl: "/bze.dao.Proposal";
  value: Uint8Array;
}
export type ProposalEncoded = Omit<Proposal, "msgs"> & {
  /**
   * msgs run as the DAO if the proposal passes.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * Proposal is a DAO proposal. It pins the DAO's config, electorate and quorum
 * denominator at submission, so later DAO changes never move an open vote.
 * @name ProposalAmino
 * @package bze.dao
 * @see proto type: bze.dao.Proposal
 */
export interface ProposalAmino {
  id?: string;
  dao_id?: string;
  proposer?: string;
  title?: string;
  summary?: string;
  /**
   * msgs run as the DAO if the proposal passes.
   */
  msgs?: AnyAmino[];
  expedited?: boolean;
  status?: ProposalStatus;
  /**
   * submit_height is the join-eligibility reference: stake joined at or after
   * it does not count.
   */
  submit_height?: string;
  /**
   * submit_time and voting_end are block times in unix seconds.
   */
  submit_time?: string;
  voting_end?: string;
  /**
   * pinned_config is the DAO's config at submission.
   */
  pinned_config?: DaoConfigAmino;
  /**
   * pinned_electorate is the stake electorate at submission (stake DAOs only).
   */
  pinned_electorate?: StakeElectorateAmino;
  /**
   * pinned_denominator is the total voting power at submission: the member
   * count, or the summed stake of the pinned sources.
   */
  pinned_denominator?: string;
  /**
   * pinned_deposit is the deposit escrowed by the proposer, if any.
   */
  pinned_deposit?: CoinAmino;
  /**
   * yes, no and abstain are the running tallies.
   */
  yes?: string;
  no?: string;
  abstain?: string;
  /**
   * cleanup_cursor is where the ballot cleanup of a finished proposal resumes.
   */
  cleanup_cursor?: string;
}
export interface ProposalAminoMsg {
  type: "/bze.dao.Proposal";
  value: ProposalAmino;
}
/**
 * Proposal is a DAO proposal. It pins the DAO's config, electorate and quorum
 * denominator at submission, so later DAO changes never move an open vote.
 * @name ProposalSDKType
 * @package bze.dao
 * @see proto type: bze.dao.Proposal
 */
export interface ProposalSDKType {
  id: bigint;
  dao_id: bigint;
  proposer: string;
  title: string;
  summary: string;
  msgs: (AnySDKType)[];
  expedited: boolean;
  status: ProposalStatus;
  submit_height: bigint;
  submit_time: bigint;
  voting_end: bigint;
  pinned_config: DaoConfigSDKType;
  pinned_electorate?: StakeElectorateSDKType;
  pinned_denominator: string;
  pinned_deposit?: CoinSDKType;
  yes: string;
  no: string;
  abstain: string;
  cleanup_cursor: string;
}
/**
 * BallotShare is the weight one electorate source gives a ballot.
 * @name BallotShare
 * @package bze.dao
 * @see proto type: bze.dao.BallotShare
 */
export interface BallotShare {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source: string;
  amount: string;
}
export interface BallotShareProtoMsg {
  typeUrl: "/bze.dao.BallotShare";
  value: Uint8Array;
}
/**
 * BallotShare is the weight one electorate source gives a ballot.
 * @name BallotShareAmino
 * @package bze.dao
 * @see proto type: bze.dao.BallotShare
 */
export interface BallotShareAmino {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source?: string;
  amount?: string;
}
export interface BallotShareAminoMsg {
  type: "/bze.dao.BallotShare";
  value: BallotShareAmino;
}
/**
 * BallotShare is the weight one electorate source gives a ballot.
 * @name BallotShareSDKType
 * @package bze.dao
 * @see proto type: bze.dao.BallotShare
 */
export interface BallotShareSDKType {
  source: string;
  amount: string;
}
/**
 * Ballot is a voter's vote on a proposal.
 * @name Ballot
 * @package bze.dao
 * @see proto type: bze.dao.Ballot
 */
export interface Ballot {
  proposalId: bigint;
  voter: string;
  option: VoteOption;
  /**
   * weight is what the ballot adds to its option's tally: 1 in a static-list
   * DAO, the sum of the shares in a stake DAO.
   */
  weight: string;
  /**
   * shares are the per-source parts of the weight (stake DAOs only).
   */
  shares: BallotShare[];
}
export interface BallotProtoMsg {
  typeUrl: "/bze.dao.Ballot";
  value: Uint8Array;
}
/**
 * Ballot is a voter's vote on a proposal.
 * @name BallotAmino
 * @package bze.dao
 * @see proto type: bze.dao.Ballot
 */
export interface BallotAmino {
  proposal_id?: string;
  voter?: string;
  option?: VoteOption;
  /**
   * weight is what the ballot adds to its option's tally: 1 in a static-list
   * DAO, the sum of the shares in a stake DAO.
   */
  weight?: string;
  /**
   * shares are the per-source parts of the weight (stake DAOs only).
   */
  shares?: BallotShareAmino[];
}
export interface BallotAminoMsg {
  type: "/bze.dao.Ballot";
  value: BallotAmino;
}
/**
 * Ballot is a voter's vote on a proposal.
 * @name BallotSDKType
 * @package bze.dao
 * @see proto type: bze.dao.Ballot
 */
export interface BallotSDKType {
  proposal_id: bigint;
  voter: string;
  option: VoteOption;
  weight: string;
  shares: BallotShareSDKType[];
}
/**
 * JoinRecord is the height an address joined an electorate source while the
 * source was pinned. Stake joined at or after a proposal's submit height does
 * not vote on it.
 * @name JoinRecord
 * @package bze.dao
 * @see proto type: bze.dao.JoinRecord
 */
export interface JoinRecord {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source: string;
  address: string;
  height: bigint;
}
export interface JoinRecordProtoMsg {
  typeUrl: "/bze.dao.JoinRecord";
  value: Uint8Array;
}
/**
 * JoinRecord is the height an address joined an electorate source while the
 * source was pinned. Stake joined at or after a proposal's submit height does
 * not vote on it.
 * @name JoinRecordAmino
 * @package bze.dao
 * @see proto type: bze.dao.JoinRecord
 */
export interface JoinRecordAmino {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source?: string;
  address?: string;
  height?: string;
}
export interface JoinRecordAminoMsg {
  type: "/bze.dao.JoinRecord";
  value: JoinRecordAmino;
}
/**
 * JoinRecord is the height an address joined an electorate source while the
 * source was pinned. Stake joined at or after a proposal's submit height does
 * not vote on it.
 * @name JoinRecordSDKType
 * @package bze.dao
 * @see proto type: bze.dao.JoinRecord
 */
export interface JoinRecordSDKType {
  source: string;
  address: string;
  height: bigint;
}
/**
 * MemberRecord is the height an address was added to a static-list DAO by
 * MsgUpdateMembers. A member added at or after a proposal's submit height does
 * not vote on it; members listed at creation have no record.
 * @name MemberRecord
 * @package bze.dao
 * @see proto type: bze.dao.MemberRecord
 */
export interface MemberRecord {
  daoId: bigint;
  address: string;
  height: bigint;
}
export interface MemberRecordProtoMsg {
  typeUrl: "/bze.dao.MemberRecord";
  value: Uint8Array;
}
/**
 * MemberRecord is the height an address was added to a static-list DAO by
 * MsgUpdateMembers. A member added at or after a proposal's submit height does
 * not vote on it; members listed at creation have no record.
 * @name MemberRecordAmino
 * @package bze.dao
 * @see proto type: bze.dao.MemberRecord
 */
export interface MemberRecordAmino {
  dao_id?: string;
  address?: string;
  height?: string;
}
export interface MemberRecordAminoMsg {
  type: "/bze.dao.MemberRecord";
  value: MemberRecordAmino;
}
/**
 * MemberRecord is the height an address was added to a static-list DAO by
 * MsgUpdateMembers. A member added at or after a proposal's submit height does
 * not vote on it; members listed at creation have no record.
 * @name MemberRecordSDKType
 * @package bze.dao
 * @see proto type: bze.dao.MemberRecord
 */
export interface MemberRecordSDKType {
  dao_id: bigint;
  address: string;
  height: bigint;
}
function createBaseDaoConfig(): DaoConfig {
  return {
    minQuorum: "",
    threshold: "",
    votingPeriod: Duration.fromPartial({}),
    allowExpedite: false,
    expeditedPeriod: Duration.fromPartial({}),
    expediteQuorum: "",
    expediteThreshold: "",
    openSubmission: false,
    proposalCost: undefined,
    proposalDeposit: undefined,
    depositRefundPolicy: 0,
    costDestination: 0,
    keptDepositDestination: 0
  };
}
/**
 * DaoConfig holds the voting rules of a DAO.
 * @name DaoConfig
 * @package bze.dao
 * @see proto type: bze.dao.DaoConfig
 */
export const DaoConfig = {
  typeUrl: "/bze.dao.DaoConfig",
  is(o: any): o is DaoConfig {
    return o && (o.$typeUrl === DaoConfig.typeUrl || typeof o.minQuorum === "string" && typeof o.threshold === "string" && Duration.is(o.votingPeriod) && typeof o.allowExpedite === "boolean" && Duration.is(o.expeditedPeriod) && typeof o.expediteQuorum === "string" && typeof o.expediteThreshold === "string" && typeof o.openSubmission === "boolean" && isSet(o.depositRefundPolicy) && isSet(o.costDestination) && isSet(o.keptDepositDestination));
  },
  isSDK(o: any): o is DaoConfigSDKType {
    return o && (o.$typeUrl === DaoConfig.typeUrl || typeof o.min_quorum === "string" && typeof o.threshold === "string" && Duration.isSDK(o.voting_period) && typeof o.allow_expedite === "boolean" && Duration.isSDK(o.expedited_period) && typeof o.expedite_quorum === "string" && typeof o.expedite_threshold === "string" && typeof o.open_submission === "boolean" && isSet(o.deposit_refund_policy) && isSet(o.cost_destination) && isSet(o.kept_deposit_destination));
  },
  isAmino(o: any): o is DaoConfigAmino {
    return o && (o.$typeUrl === DaoConfig.typeUrl || typeof o.min_quorum === "string" && typeof o.threshold === "string" && Duration.isAmino(o.voting_period) && typeof o.allow_expedite === "boolean" && Duration.isAmino(o.expedited_period) && typeof o.expedite_quorum === "string" && typeof o.expedite_threshold === "string" && typeof o.open_submission === "boolean" && isSet(o.deposit_refund_policy) && isSet(o.cost_destination) && isSet(o.kept_deposit_destination));
  },
  encode(message: DaoConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minQuorum !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minQuorum, 18).atomics);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.threshold, 18).atomics);
    }
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowExpedite === true) {
      writer.uint32(32).bool(message.allowExpedite);
    }
    if (message.expeditedPeriod !== undefined) {
      Duration.encode(message.expeditedPeriod, writer.uint32(42).fork()).ldelim();
    }
    if (message.expediteQuorum !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.expediteQuorum, 18).atomics);
    }
    if (message.expediteThreshold !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.expediteThreshold, 18).atomics);
    }
    if (message.openSubmission === true) {
      writer.uint32(64).bool(message.openSubmission);
    }
    if (message.proposalCost !== undefined) {
      Coin.encode(message.proposalCost, writer.uint32(74).fork()).ldelim();
    }
    if (message.proposalDeposit !== undefined) {
      Coin.encode(message.proposalDeposit, writer.uint32(82).fork()).ldelim();
    }
    if (message.depositRefundPolicy !== 0) {
      writer.uint32(88).int32(message.depositRefundPolicy);
    }
    if (message.costDestination !== 0) {
      writer.uint32(96).int32(message.costDestination);
    }
    if (message.keptDepositDestination !== 0) {
      writer.uint32(104).int32(message.keptDepositDestination);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DaoConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDaoConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minQuorum = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.threshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.allowExpedite = reader.bool();
          break;
        case 5:
          message.expeditedPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.expediteQuorum = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.expediteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.openSubmission = reader.bool();
          break;
        case 9:
          message.proposalCost = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.proposalDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.depositRefundPolicy = reader.int32() as any;
          break;
        case 12:
          message.costDestination = reader.int32() as any;
          break;
        case 13:
          message.keptDepositDestination = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DaoConfig>): DaoConfig {
    const message = createBaseDaoConfig();
    message.minQuorum = object.minQuorum ?? "";
    message.threshold = object.threshold ?? "";
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : undefined;
    message.allowExpedite = object.allowExpedite ?? false;
    message.expeditedPeriod = object.expeditedPeriod !== undefined && object.expeditedPeriod !== null ? Duration.fromPartial(object.expeditedPeriod) : undefined;
    message.expediteQuorum = object.expediteQuorum ?? "";
    message.expediteThreshold = object.expediteThreshold ?? "";
    message.openSubmission = object.openSubmission ?? false;
    message.proposalCost = object.proposalCost !== undefined && object.proposalCost !== null ? Coin.fromPartial(object.proposalCost) : undefined;
    message.proposalDeposit = object.proposalDeposit !== undefined && object.proposalDeposit !== null ? Coin.fromPartial(object.proposalDeposit) : undefined;
    message.depositRefundPolicy = object.depositRefundPolicy ?? 0;
    message.costDestination = object.costDestination ?? 0;
    message.keptDepositDestination = object.keptDepositDestination ?? 0;
    return message;
  },
  fromAmino(object: DaoConfigAmino): DaoConfig {
    const message = createBaseDaoConfig();
    if (object.min_quorum !== undefined && object.min_quorum !== null) {
      message.minQuorum = object.min_quorum;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    if (object.allow_expedite !== undefined && object.allow_expedite !== null) {
      message.allowExpedite = object.allow_expedite;
    }
    if (object.expedited_period !== undefined && object.expedited_period !== null) {
      message.expeditedPeriod = Duration.fromAmino(object.expedited_period);
    }
    if (object.expedite_quorum !== undefined && object.expedite_quorum !== null) {
      message.expediteQuorum = object.expedite_quorum;
    }
    if (object.expedite_threshold !== undefined && object.expedite_threshold !== null) {
      message.expediteThreshold = object.expedite_threshold;
    }
    if (object.open_submission !== undefined && object.open_submission !== null) {
      message.openSubmission = object.open_submission;
    }
    if (object.proposal_cost !== undefined && object.proposal_cost !== null) {
      message.proposalCost = Coin.fromAmino(object.proposal_cost);
    }
    if (object.proposal_deposit !== undefined && object.proposal_deposit !== null) {
      message.proposalDeposit = Coin.fromAmino(object.proposal_deposit);
    }
    if (object.deposit_refund_policy !== undefined && object.deposit_refund_policy !== null) {
      message.depositRefundPolicy = object.deposit_refund_policy;
    }
    if (object.cost_destination !== undefined && object.cost_destination !== null) {
      message.costDestination = object.cost_destination;
    }
    if (object.kept_deposit_destination !== undefined && object.kept_deposit_destination !== null) {
      message.keptDepositDestination = object.kept_deposit_destination;
    }
    return message;
  },
  toAmino(message: DaoConfig): DaoConfigAmino {
    const obj: any = {};
    obj.min_quorum = message.minQuorum === "" ? undefined : Decimal.fromUserInput(message.minQuorum, 18).atomics;
    obj.threshold = message.threshold === "" ? undefined : Decimal.fromUserInput(message.threshold, 18).atomics;
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    obj.allow_expedite = message.allowExpedite === false ? undefined : message.allowExpedite;
    obj.expedited_period = message.expeditedPeriod ? Duration.toAmino(message.expeditedPeriod) : undefined;
    obj.expedite_quorum = message.expediteQuorum === "" ? undefined : Decimal.fromUserInput(message.expediteQuorum, 18).atomics;
    obj.expedite_threshold = message.expediteThreshold === "" ? undefined : Decimal.fromUserInput(message.expediteThreshold, 18).atomics;
    obj.open_submission = message.openSubmission === false ? undefined : message.openSubmission;
    obj.proposal_cost = message.proposalCost ? Coin.toAmino(message.proposalCost) : undefined;
    obj.proposal_deposit = message.proposalDeposit ? Coin.toAmino(message.proposalDeposit) : undefined;
    obj.deposit_refund_policy = message.depositRefundPolicy === 0 ? undefined : message.depositRefundPolicy;
    obj.cost_destination = message.costDestination === 0 ? undefined : message.costDestination;
    obj.kept_deposit_destination = message.keptDepositDestination === 0 ? undefined : message.keptDepositDestination;
    return obj;
  },
  fromAminoMsg(object: DaoConfigAminoMsg): DaoConfig {
    return DaoConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: DaoConfigProtoMsg): DaoConfig {
    return DaoConfig.decode(message.value);
  },
  toProto(message: DaoConfig): Uint8Array {
    return DaoConfig.encode(message).finish();
  },
  toProtoMsg(message: DaoConfig): DaoConfigProtoMsg {
    return {
      typeUrl: "/bze.dao.DaoConfig",
      value: DaoConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DaoConfig.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseStakeElectorate(): StakeElectorate {
  return {
    srIds: [],
    drDenom: ""
  };
}
/**
 * StakeElectorate lists the reward programs whose stakers vote in a stake DAO.
 * @name StakeElectorate
 * @package bze.dao
 * @see proto type: bze.dao.StakeElectorate
 */
export const StakeElectorate = {
  typeUrl: "/bze.dao.StakeElectorate",
  is(o: any): o is StakeElectorate {
    return o && (o.$typeUrl === StakeElectorate.typeUrl || Array.isArray(o.srIds) && (!o.srIds.length || typeof o.srIds[0] === "string") && typeof o.drDenom === "string");
  },
  isSDK(o: any): o is StakeElectorateSDKType {
    return o && (o.$typeUrl === StakeElectorate.typeUrl || Array.isArray(o.sr_ids) && (!o.sr_ids.length || typeof o.sr_ids[0] === "string") && typeof o.dr_denom === "string");
  },
  isAmino(o: any): o is StakeElectorateAmino {
    return o && (o.$typeUrl === StakeElectorate.typeUrl || Array.isArray(o.sr_ids) && (!o.sr_ids.length || typeof o.sr_ids[0] === "string") && typeof o.dr_denom === "string");
  },
  encode(message: StakeElectorate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.srIds) {
      writer.uint32(10).string(v!);
    }
    if (message.drDenom !== "") {
      writer.uint32(18).string(message.drDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakeElectorate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeElectorate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srIds.push(reader.string());
          break;
        case 2:
          message.drDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakeElectorate>): StakeElectorate {
    const message = createBaseStakeElectorate();
    message.srIds = object.srIds?.map(e => e) || [];
    message.drDenom = object.drDenom ?? "";
    return message;
  },
  fromAmino(object: StakeElectorateAmino): StakeElectorate {
    const message = createBaseStakeElectorate();
    message.srIds = object.sr_ids?.map(e => e) || [];
    if (object.dr_denom !== undefined && object.dr_denom !== null) {
      message.drDenom = object.dr_denom;
    }
    return message;
  },
  toAmino(message: StakeElectorate): StakeElectorateAmino {
    const obj: any = {};
    if (message.srIds) {
      obj.sr_ids = message.srIds.map(e => e);
    } else {
      obj.sr_ids = message.srIds;
    }
    obj.dr_denom = message.drDenom === "" ? undefined : message.drDenom;
    return obj;
  },
  fromAminoMsg(object: StakeElectorateAminoMsg): StakeElectorate {
    return StakeElectorate.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeElectorateProtoMsg): StakeElectorate {
    return StakeElectorate.decode(message.value);
  },
  toProto(message: StakeElectorate): Uint8Array {
    return StakeElectorate.encode(message).finish();
  },
  toProtoMsg(message: StakeElectorate): StakeElectorateProtoMsg {
    return {
      typeUrl: "/bze.dao.StakeElectorate",
      value: StakeElectorate.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDao(): Dao {
  return {
    id: BigInt(0),
    address: "",
    admin: "",
    pendingAdmin: "",
    type: 0,
    name: "",
    description: "",
    config: DaoConfig.fromPartial({}),
    members: [],
    electorate: undefined,
    createdAt: BigInt(0),
    adminSeq: BigInt(0),
    pendingAdminSeq: BigInt(0)
  };
}
/**
 * Dao is a DAO record.
 * @name Dao
 * @package bze.dao
 * @see proto type: bze.dao.Dao
 */
export const Dao = {
  typeUrl: "/bze.dao.Dao",
  is(o: any): o is Dao {
    return o && (o.$typeUrl === Dao.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.admin === "string" && typeof o.pendingAdmin === "string" && isSet(o.type) && typeof o.name === "string" && typeof o.description === "string" && DaoConfig.is(o.config) && Array.isArray(o.members) && (!o.members.length || typeof o.members[0] === "string") && typeof o.createdAt === "bigint" && typeof o.adminSeq === "bigint" && typeof o.pendingAdminSeq === "bigint");
  },
  isSDK(o: any): o is DaoSDKType {
    return o && (o.$typeUrl === Dao.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.admin === "string" && typeof o.pending_admin === "string" && isSet(o.type) && typeof o.name === "string" && typeof o.description === "string" && DaoConfig.isSDK(o.config) && Array.isArray(o.members) && (!o.members.length || typeof o.members[0] === "string") && typeof o.created_at === "bigint" && typeof o.admin_seq === "bigint" && typeof o.pending_admin_seq === "bigint");
  },
  isAmino(o: any): o is DaoAmino {
    return o && (o.$typeUrl === Dao.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.admin === "string" && typeof o.pending_admin === "string" && isSet(o.type) && typeof o.name === "string" && typeof o.description === "string" && DaoConfig.isAmino(o.config) && Array.isArray(o.members) && (!o.members.length || typeof o.members[0] === "string") && typeof o.created_at === "bigint" && typeof o.admin_seq === "bigint" && typeof o.pending_admin_seq === "bigint");
  },
  encode(message: Dao, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.pendingAdmin !== "") {
      writer.uint32(34).string(message.pendingAdmin);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.config !== undefined) {
      DaoConfig.encode(message.config, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.members) {
      writer.uint32(74).string(v!);
    }
    if (message.electorate !== undefined) {
      StakeElectorate.encode(message.electorate, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(88).int64(message.createdAt);
    }
    if (message.adminSeq !== BigInt(0)) {
      writer.uint32(96).uint64(message.adminSeq);
    }
    if (message.pendingAdminSeq !== BigInt(0)) {
      writer.uint32(104).uint64(message.pendingAdminSeq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Dao {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDao();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.pendingAdmin = reader.string();
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.config = DaoConfig.decode(reader, reader.uint32());
          break;
        case 9:
          message.members.push(reader.string());
          break;
        case 10:
          message.electorate = StakeElectorate.decode(reader, reader.uint32());
          break;
        case 11:
          message.createdAt = reader.int64();
          break;
        case 12:
          message.adminSeq = reader.uint64();
          break;
        case 13:
          message.pendingAdminSeq = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Dao>): Dao {
    const message = createBaseDao();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.admin = object.admin ?? "";
    message.pendingAdmin = object.pendingAdmin ?? "";
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.config = object.config !== undefined && object.config !== null ? DaoConfig.fromPartial(object.config) : undefined;
    message.members = object.members?.map(e => e) || [];
    message.electorate = object.electorate !== undefined && object.electorate !== null ? StakeElectorate.fromPartial(object.electorate) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.adminSeq = object.adminSeq !== undefined && object.adminSeq !== null ? BigInt(object.adminSeq.toString()) : BigInt(0);
    message.pendingAdminSeq = object.pendingAdminSeq !== undefined && object.pendingAdminSeq !== null ? BigInt(object.pendingAdminSeq.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DaoAmino): Dao {
    const message = createBaseDao();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pending_admin !== undefined && object.pending_admin !== null) {
      message.pendingAdmin = object.pending_admin;
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
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.admin_seq !== undefined && object.admin_seq !== null) {
      message.adminSeq = BigInt(object.admin_seq);
    }
    if (object.pending_admin_seq !== undefined && object.pending_admin_seq !== null) {
      message.pendingAdminSeq = BigInt(object.pending_admin_seq);
    }
    return message;
  },
  toAmino(message: Dao): DaoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pending_admin = message.pendingAdmin === "" ? undefined : message.pendingAdmin;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.config = message.config ? DaoConfig.toAmino(message.config) : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = message.members;
    }
    obj.electorate = message.electorate ? StakeElectorate.toAmino(message.electorate) : undefined;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.admin_seq = message.adminSeq !== BigInt(0) ? message.adminSeq?.toString() : undefined;
    obj.pending_admin_seq = message.pendingAdminSeq !== BigInt(0) ? message.pendingAdminSeq?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DaoAminoMsg): Dao {
    return Dao.fromAmino(object.value);
  },
  fromProtoMsg(message: DaoProtoMsg): Dao {
    return Dao.decode(message.value);
  },
  toProto(message: Dao): Uint8Array {
    return Dao.encode(message).finish();
  },
  toProtoMsg(message: Dao): DaoProtoMsg {
    return {
      typeUrl: "/bze.dao.Dao",
      value: Dao.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Dao.typeUrl)) {
      return;
    }
    DaoConfig.registerTypeUrl();
    StakeElectorate.registerTypeUrl();
  }
};
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    daoId: BigInt(0),
    proposer: "",
    title: "",
    summary: "",
    msgs: [],
    expedited: false,
    status: 0,
    submitHeight: BigInt(0),
    submitTime: BigInt(0),
    votingEnd: BigInt(0),
    pinnedConfig: DaoConfig.fromPartial({}),
    pinnedElectorate: undefined,
    pinnedDenominator: "",
    pinnedDeposit: undefined,
    yes: "",
    no: "",
    abstain: "",
    cleanupCursor: ""
  };
}
/**
 * Proposal is a DAO proposal. It pins the DAO's config, electorate and quorum
 * denominator at submission, so later DAO changes never move an open vote.
 * @name Proposal
 * @package bze.dao
 * @see proto type: bze.dao.Proposal
 */
export const Proposal = {
  typeUrl: "/bze.dao.Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && typeof o.daoId === "bigint" && typeof o.proposer === "string" && typeof o.title === "string" && typeof o.summary === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.expedited === "boolean" && isSet(o.status) && typeof o.submitHeight === "bigint" && typeof o.submitTime === "bigint" && typeof o.votingEnd === "bigint" && DaoConfig.is(o.pinnedConfig) && typeof o.pinnedDenominator === "string" && typeof o.yes === "string" && typeof o.no === "string" && typeof o.abstain === "string" && typeof o.cleanupCursor === "string");
  },
  isSDK(o: any): o is ProposalSDKType {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && typeof o.dao_id === "bigint" && typeof o.proposer === "string" && typeof o.title === "string" && typeof o.summary === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.expedited === "boolean" && isSet(o.status) && typeof o.submit_height === "bigint" && typeof o.submit_time === "bigint" && typeof o.voting_end === "bigint" && DaoConfig.isSDK(o.pinned_config) && typeof o.pinned_denominator === "string" && typeof o.yes === "string" && typeof o.no === "string" && typeof o.abstain === "string" && typeof o.cleanup_cursor === "string");
  },
  isAmino(o: any): o is ProposalAmino {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && typeof o.dao_id === "bigint" && typeof o.proposer === "string" && typeof o.title === "string" && typeof o.summary === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.expedited === "boolean" && isSet(o.status) && typeof o.submit_height === "bigint" && typeof o.submit_time === "bigint" && typeof o.voting_end === "bigint" && DaoConfig.isAmino(o.pinned_config) && typeof o.pinned_denominator === "string" && typeof o.yes === "string" && typeof o.no === "string" && typeof o.abstain === "string" && typeof o.cleanup_cursor === "string");
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(42).string(message.summary);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(50).fork()).ldelim();
    }
    if (message.expedited === true) {
      writer.uint32(56).bool(message.expedited);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.submitHeight !== BigInt(0)) {
      writer.uint32(72).int64(message.submitHeight);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(80).int64(message.submitTime);
    }
    if (message.votingEnd !== BigInt(0)) {
      writer.uint32(88).int64(message.votingEnd);
    }
    if (message.pinnedConfig !== undefined) {
      DaoConfig.encode(message.pinnedConfig, writer.uint32(98).fork()).ldelim();
    }
    if (message.pinnedElectorate !== undefined) {
      StakeElectorate.encode(message.pinnedElectorate, writer.uint32(106).fork()).ldelim();
    }
    if (message.pinnedDenominator !== "") {
      writer.uint32(114).string(message.pinnedDenominator);
    }
    if (message.pinnedDeposit !== undefined) {
      Coin.encode(message.pinnedDeposit, writer.uint32(122).fork()).ldelim();
    }
    if (message.yes !== "") {
      writer.uint32(130).string(message.yes);
    }
    if (message.no !== "") {
      writer.uint32(138).string(message.no);
    }
    if (message.abstain !== "") {
      writer.uint32(146).string(message.abstain);
    }
    if (message.cleanupCursor !== "") {
      writer.uint32(154).string(message.cleanupCursor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.daoId = reader.uint64();
          break;
        case 3:
          message.proposer = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.summary = reader.string();
          break;
        case 6:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 7:
          message.expedited = reader.bool();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.submitHeight = reader.int64();
          break;
        case 10:
          message.submitTime = reader.int64();
          break;
        case 11:
          message.votingEnd = reader.int64();
          break;
        case 12:
          message.pinnedConfig = DaoConfig.decode(reader, reader.uint32());
          break;
        case 13:
          message.pinnedElectorate = StakeElectorate.decode(reader, reader.uint32());
          break;
        case 14:
          message.pinnedDenominator = reader.string();
          break;
        case 15:
          message.pinnedDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 16:
          message.yes = reader.string();
          break;
        case 17:
          message.no = reader.string();
          break;
        case 18:
          message.abstain = reader.string();
          break;
        case 19:
          message.cleanupCursor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.proposer = object.proposer ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.expedited = object.expedited ?? false;
    message.status = object.status ?? 0;
    message.submitHeight = object.submitHeight !== undefined && object.submitHeight !== null ? BigInt(object.submitHeight.toString()) : BigInt(0);
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? BigInt(object.submitTime.toString()) : BigInt(0);
    message.votingEnd = object.votingEnd !== undefined && object.votingEnd !== null ? BigInt(object.votingEnd.toString()) : BigInt(0);
    message.pinnedConfig = object.pinnedConfig !== undefined && object.pinnedConfig !== null ? DaoConfig.fromPartial(object.pinnedConfig) : undefined;
    message.pinnedElectorate = object.pinnedElectorate !== undefined && object.pinnedElectorate !== null ? StakeElectorate.fromPartial(object.pinnedElectorate) : undefined;
    message.pinnedDenominator = object.pinnedDenominator ?? "";
    message.pinnedDeposit = object.pinnedDeposit !== undefined && object.pinnedDeposit !== null ? Coin.fromPartial(object.pinnedDeposit) : undefined;
    message.yes = object.yes ?? "";
    message.no = object.no ?? "";
    message.abstain = object.abstain ?? "";
    message.cleanupCursor = object.cleanupCursor ?? "";
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
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
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.submit_height !== undefined && object.submit_height !== null) {
      message.submitHeight = BigInt(object.submit_height);
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = BigInt(object.submit_time);
    }
    if (object.voting_end !== undefined && object.voting_end !== null) {
      message.votingEnd = BigInt(object.voting_end);
    }
    if (object.pinned_config !== undefined && object.pinned_config !== null) {
      message.pinnedConfig = DaoConfig.fromAmino(object.pinned_config);
    }
    if (object.pinned_electorate !== undefined && object.pinned_electorate !== null) {
      message.pinnedElectorate = StakeElectorate.fromAmino(object.pinned_electorate);
    }
    if (object.pinned_denominator !== undefined && object.pinned_denominator !== null) {
      message.pinnedDenominator = object.pinned_denominator;
    }
    if (object.pinned_deposit !== undefined && object.pinned_deposit !== null) {
      message.pinnedDeposit = Coin.fromAmino(object.pinned_deposit);
    }
    if (object.yes !== undefined && object.yes !== null) {
      message.yes = object.yes;
    }
    if (object.no !== undefined && object.no !== null) {
      message.no = object.no;
    }
    if (object.abstain !== undefined && object.abstain !== null) {
      message.abstain = object.abstain;
    }
    if (object.cleanup_cursor !== undefined && object.cleanup_cursor !== null) {
      message.cleanupCursor = object.cleanup_cursor;
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.title = message.title === "" ? undefined : message.title;
    obj.summary = message.summary === "" ? undefined : message.summary;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.expedited = message.expedited === false ? undefined : message.expedited;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.submit_height = message.submitHeight !== BigInt(0) ? message.submitHeight?.toString() : undefined;
    obj.submit_time = message.submitTime !== BigInt(0) ? message.submitTime?.toString() : undefined;
    obj.voting_end = message.votingEnd !== BigInt(0) ? message.votingEnd?.toString() : undefined;
    obj.pinned_config = message.pinnedConfig ? DaoConfig.toAmino(message.pinnedConfig) : undefined;
    obj.pinned_electorate = message.pinnedElectorate ? StakeElectorate.toAmino(message.pinnedElectorate) : undefined;
    obj.pinned_denominator = message.pinnedDenominator === "" ? undefined : message.pinnedDenominator;
    obj.pinned_deposit = message.pinnedDeposit ? Coin.toAmino(message.pinnedDeposit) : undefined;
    obj.yes = message.yes === "" ? undefined : message.yes;
    obj.no = message.no === "" ? undefined : message.no;
    obj.abstain = message.abstain === "" ? undefined : message.abstain;
    obj.cleanup_cursor = message.cleanupCursor === "" ? undefined : message.cleanupCursor;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/bze.dao.Proposal",
      value: Proposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Proposal.typeUrl)) {
      return;
    }
    DaoConfig.registerTypeUrl();
    StakeElectorate.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseBallotShare(): BallotShare {
  return {
    source: "",
    amount: ""
  };
}
/**
 * BallotShare is the weight one electorate source gives a ballot.
 * @name BallotShare
 * @package bze.dao
 * @see proto type: bze.dao.BallotShare
 */
export const BallotShare = {
  typeUrl: "/bze.dao.BallotShare",
  is(o: any): o is BallotShare {
    return o && (o.$typeUrl === BallotShare.typeUrl || typeof o.source === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is BallotShareSDKType {
    return o && (o.$typeUrl === BallotShare.typeUrl || typeof o.source === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is BallotShareAmino {
    return o && (o.$typeUrl === BallotShare.typeUrl || typeof o.source === "string" && typeof o.amount === "string");
  },
  encode(message: BallotShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BallotShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallotShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BallotShare>): BallotShare {
    const message = createBaseBallotShare();
    message.source = object.source ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: BallotShareAmino): BallotShare {
    const message = createBaseBallotShare();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: BallotShare): BallotShareAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: BallotShareAminoMsg): BallotShare {
    return BallotShare.fromAmino(object.value);
  },
  fromProtoMsg(message: BallotShareProtoMsg): BallotShare {
    return BallotShare.decode(message.value);
  },
  toProto(message: BallotShare): Uint8Array {
    return BallotShare.encode(message).finish();
  },
  toProtoMsg(message: BallotShare): BallotShareProtoMsg {
    return {
      typeUrl: "/bze.dao.BallotShare",
      value: BallotShare.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBallot(): Ballot {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    weight: "",
    shares: []
  };
}
/**
 * Ballot is a voter's vote on a proposal.
 * @name Ballot
 * @package bze.dao
 * @see proto type: bze.dao.Ballot
 */
export const Ballot = {
  typeUrl: "/bze.dao.Ballot",
  is(o: any): o is Ballot {
    return o && (o.$typeUrl === Ballot.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.weight === "string" && Array.isArray(o.shares) && (!o.shares.length || BallotShare.is(o.shares[0])));
  },
  isSDK(o: any): o is BallotSDKType {
    return o && (o.$typeUrl === Ballot.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.weight === "string" && Array.isArray(o.shares) && (!o.shares.length || BallotShare.isSDK(o.shares[0])));
  },
  isAmino(o: any): o is BallotAmino {
    return o && (o.$typeUrl === Ballot.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.weight === "string" && Array.isArray(o.shares) && (!o.shares.length || BallotShare.isAmino(o.shares[0])));
  },
  encode(message: Ballot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(34).string(message.weight);
    }
    for (const v of message.shares) {
      BallotShare.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Ballot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.weight = reader.string();
          break;
        case 5:
          message.shares.push(BallotShare.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Ballot>): Ballot {
    const message = createBaseBallot();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    message.shares = object.shares?.map(e => BallotShare.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BallotAmino): Ballot {
    const message = createBaseBallot();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    message.shares = object.shares?.map(e => BallotShare.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Ballot): BallotAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.weight = message.weight === "" ? undefined : message.weight;
    if (message.shares) {
      obj.shares = message.shares.map(e => e ? BallotShare.toAmino(e) : undefined);
    } else {
      obj.shares = message.shares;
    }
    return obj;
  },
  fromAminoMsg(object: BallotAminoMsg): Ballot {
    return Ballot.fromAmino(object.value);
  },
  fromProtoMsg(message: BallotProtoMsg): Ballot {
    return Ballot.decode(message.value);
  },
  toProto(message: Ballot): Uint8Array {
    return Ballot.encode(message).finish();
  },
  toProtoMsg(message: Ballot): BallotProtoMsg {
    return {
      typeUrl: "/bze.dao.Ballot",
      value: Ballot.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Ballot.typeUrl)) {
      return;
    }
    BallotShare.registerTypeUrl();
  }
};
function createBaseJoinRecord(): JoinRecord {
  return {
    source: "",
    address: "",
    height: BigInt(0)
  };
}
/**
 * JoinRecord is the height an address joined an electorate source while the
 * source was pinned. Stake joined at or after a proposal's submit height does
 * not vote on it.
 * @name JoinRecord
 * @package bze.dao
 * @see proto type: bze.dao.JoinRecord
 */
export const JoinRecord = {
  typeUrl: "/bze.dao.JoinRecord",
  is(o: any): o is JoinRecord {
    return o && (o.$typeUrl === JoinRecord.typeUrl || typeof o.source === "string" && typeof o.address === "string" && typeof o.height === "bigint");
  },
  isSDK(o: any): o is JoinRecordSDKType {
    return o && (o.$typeUrl === JoinRecord.typeUrl || typeof o.source === "string" && typeof o.address === "string" && typeof o.height === "bigint");
  },
  isAmino(o: any): o is JoinRecordAmino {
    return o && (o.$typeUrl === JoinRecord.typeUrl || typeof o.source === "string" && typeof o.address === "string" && typeof o.height === "bigint");
  },
  encode(message: JoinRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): JoinRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<JoinRecord>): JoinRecord {
    const message = createBaseJoinRecord();
    message.source = object.source ?? "";
    message.address = object.address ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: JoinRecordAmino): JoinRecord {
    const message = createBaseJoinRecord();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: JoinRecord): JoinRecordAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.address = message.address === "" ? undefined : message.address;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: JoinRecordAminoMsg): JoinRecord {
    return JoinRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: JoinRecordProtoMsg): JoinRecord {
    return JoinRecord.decode(message.value);
  },
  toProto(message: JoinRecord): Uint8Array {
    return JoinRecord.encode(message).finish();
  },
  toProtoMsg(message: JoinRecord): JoinRecordProtoMsg {
    return {
      typeUrl: "/bze.dao.JoinRecord",
      value: JoinRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMemberRecord(): MemberRecord {
  return {
    daoId: BigInt(0),
    address: "",
    height: BigInt(0)
  };
}
/**
 * MemberRecord is the height an address was added to a static-list DAO by
 * MsgUpdateMembers. A member added at or after a proposal's submit height does
 * not vote on it; members listed at creation have no record.
 * @name MemberRecord
 * @package bze.dao
 * @see proto type: bze.dao.MemberRecord
 */
export const MemberRecord = {
  typeUrl: "/bze.dao.MemberRecord",
  is(o: any): o is MemberRecord {
    return o && (o.$typeUrl === MemberRecord.typeUrl || typeof o.daoId === "bigint" && typeof o.address === "string" && typeof o.height === "bigint");
  },
  isSDK(o: any): o is MemberRecordSDKType {
    return o && (o.$typeUrl === MemberRecord.typeUrl || typeof o.dao_id === "bigint" && typeof o.address === "string" && typeof o.height === "bigint");
  },
  isAmino(o: any): o is MemberRecordAmino {
    return o && (o.$typeUrl === MemberRecord.typeUrl || typeof o.dao_id === "bigint" && typeof o.address === "string" && typeof o.height === "bigint");
  },
  encode(message: MemberRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.daoId !== BigInt(0)) {
      writer.uint32(8).uint64(message.daoId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.daoId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MemberRecord>): MemberRecord {
    const message = createBaseMemberRecord();
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberRecordAmino): MemberRecord {
    const message = createBaseMemberRecord();
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: MemberRecord): MemberRecordAmino {
    const obj: any = {};
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberRecordAminoMsg): MemberRecord {
    return MemberRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberRecordProtoMsg): MemberRecord {
    return MemberRecord.decode(message.value);
  },
  toProto(message: MemberRecord): Uint8Array {
    return MemberRecord.encode(message).finish();
  },
  toProtoMsg(message: MemberRecord): MemberRecordProtoMsg {
    return {
      typeUrl: "/bze.dao.MemberRecord",
      value: MemberRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};