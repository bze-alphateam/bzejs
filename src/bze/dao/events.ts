//@ts-nocheck
import { DaoType, VoteOption, ProposalStatus } from "./store";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * EventDaoCreated is emitted when a DAO is created.
 * @name EventDaoCreated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoCreated
 */
export interface EventDaoCreated {
  id: bigint;
  address: string;
  admin: string;
  type: DaoType;
}
export interface EventDaoCreatedProtoMsg {
  typeUrl: "/bze.dao.EventDaoCreated";
  value: Uint8Array;
}
/**
 * EventDaoCreated is emitted when a DAO is created.
 * @name EventDaoCreatedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoCreated
 */
export interface EventDaoCreatedAmino {
  id?: string;
  address?: string;
  admin?: string;
  type?: DaoType;
}
export interface EventDaoCreatedAminoMsg {
  type: "/bze.dao.EventDaoCreated";
  value: EventDaoCreatedAmino;
}
/**
 * EventDaoCreated is emitted when a DAO is created.
 * @name EventDaoCreatedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoCreated
 */
export interface EventDaoCreatedSDKType {
  id: bigint;
  address: string;
  admin: string;
  type: DaoType;
}
/**
 * EventAdminExecuted is emitted when a DAO's admin runs messages as the DAO.
 * @name EventAdminExecuted
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminExecuted
 */
export interface EventAdminExecuted {
  id: bigint;
  admin: string;
  msgCount: bigint;
}
export interface EventAdminExecutedProtoMsg {
  typeUrl: "/bze.dao.EventAdminExecuted";
  value: Uint8Array;
}
/**
 * EventAdminExecuted is emitted when a DAO's admin runs messages as the DAO.
 * @name EventAdminExecutedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminExecuted
 */
export interface EventAdminExecutedAmino {
  id?: string;
  admin?: string;
  msg_count?: string;
}
export interface EventAdminExecutedAminoMsg {
  type: "/bze.dao.EventAdminExecuted";
  value: EventAdminExecutedAmino;
}
/**
 * EventAdminExecuted is emitted when a DAO's admin runs messages as the DAO.
 * @name EventAdminExecutedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminExecuted
 */
export interface EventAdminExecutedSDKType {
  id: bigint;
  admin: string;
  msg_count: bigint;
}
/**
 * EventAdminNominated is emitted when a DAO's admin nominates a successor.
 * @name EventAdminNominated
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominated
 */
export interface EventAdminNominated {
  id: bigint;
  admin: string;
  nominee: string;
}
export interface EventAdminNominatedProtoMsg {
  typeUrl: "/bze.dao.EventAdminNominated";
  value: Uint8Array;
}
/**
 * EventAdminNominated is emitted when a DAO's admin nominates a successor.
 * @name EventAdminNominatedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominated
 */
export interface EventAdminNominatedAmino {
  id?: string;
  admin?: string;
  nominee?: string;
}
export interface EventAdminNominatedAminoMsg {
  type: "/bze.dao.EventAdminNominated";
  value: EventAdminNominatedAmino;
}
/**
 * EventAdminNominated is emitted when a DAO's admin nominates a successor.
 * @name EventAdminNominatedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominated
 */
export interface EventAdminNominatedSDKType {
  id: bigint;
  admin: string;
  nominee: string;
}
/**
 * EventAdminChanged is emitted when a DAO's admin changes.
 * @name EventAdminChanged
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminChanged
 */
export interface EventAdminChanged {
  id: bigint;
  oldAdmin: string;
  newAdmin: string;
}
export interface EventAdminChangedProtoMsg {
  typeUrl: "/bze.dao.EventAdminChanged";
  value: Uint8Array;
}
/**
 * EventAdminChanged is emitted when a DAO's admin changes.
 * @name EventAdminChangedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminChanged
 */
export interface EventAdminChangedAmino {
  id?: string;
  old_admin?: string;
  new_admin?: string;
}
export interface EventAdminChangedAminoMsg {
  type: "/bze.dao.EventAdminChanged";
  value: EventAdminChangedAmino;
}
/**
 * EventAdminChanged is emitted when a DAO's admin changes.
 * @name EventAdminChangedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminChanged
 */
export interface EventAdminChangedSDKType {
  id: bigint;
  old_admin: string;
  new_admin: string;
}
/**
 * EventAdminNominationWithdrawn is emitted when a DAO's admin withdraws a
 * pending nomination.
 * @name EventAdminNominationWithdrawn
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominationWithdrawn
 */
export interface EventAdminNominationWithdrawn {
  id: bigint;
  nominee: string;
}
export interface EventAdminNominationWithdrawnProtoMsg {
  typeUrl: "/bze.dao.EventAdminNominationWithdrawn";
  value: Uint8Array;
}
/**
 * EventAdminNominationWithdrawn is emitted when a DAO's admin withdraws a
 * pending nomination.
 * @name EventAdminNominationWithdrawnAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominationWithdrawn
 */
export interface EventAdminNominationWithdrawnAmino {
  id?: string;
  nominee?: string;
}
export interface EventAdminNominationWithdrawnAminoMsg {
  type: "/bze.dao.EventAdminNominationWithdrawn";
  value: EventAdminNominationWithdrawnAmino;
}
/**
 * EventAdminNominationWithdrawn is emitted when a DAO's admin withdraws a
 * pending nomination.
 * @name EventAdminNominationWithdrawnSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominationWithdrawn
 */
export interface EventAdminNominationWithdrawnSDKType {
  id: bigint;
  nominee: string;
}
/**
 * EventProposalSubmitted is emitted when a proposal is submitted.
 * @name EventProposalSubmitted
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSubmitted
 */
export interface EventProposalSubmitted {
  id: bigint;
  daoId: bigint;
  proposer: string;
  expedited: boolean;
  /**
   * voting_end is the block time (unix seconds) voting closes at.
   */
  votingEnd: bigint;
  /**
   * denominator is the pinned total voting power (math.Int).
   */
  denominator: string;
}
export interface EventProposalSubmittedProtoMsg {
  typeUrl: "/bze.dao.EventProposalSubmitted";
  value: Uint8Array;
}
/**
 * EventProposalSubmitted is emitted when a proposal is submitted.
 * @name EventProposalSubmittedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSubmitted
 */
export interface EventProposalSubmittedAmino {
  id?: string;
  dao_id?: string;
  proposer?: string;
  expedited?: boolean;
  /**
   * voting_end is the block time (unix seconds) voting closes at.
   */
  voting_end?: string;
  /**
   * denominator is the pinned total voting power (math.Int).
   */
  denominator?: string;
}
export interface EventProposalSubmittedAminoMsg {
  type: "/bze.dao.EventProposalSubmitted";
  value: EventProposalSubmittedAmino;
}
/**
 * EventProposalSubmitted is emitted when a proposal is submitted.
 * @name EventProposalSubmittedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSubmitted
 */
export interface EventProposalSubmittedSDKType {
  id: bigint;
  dao_id: bigint;
  proposer: string;
  expedited: boolean;
  voting_end: bigint;
  denominator: string;
}
/**
 * EventVote is emitted when a ballot is cast or changed.
 * @name EventVote
 * @package bze.dao
 * @see proto type: bze.dao.EventVote
 */
export interface EventVote {
  proposalId: bigint;
  voter: string;
  option: VoteOption;
  /**
   * weight is the ballot's weight (math.Int).
   */
  weight: string;
}
export interface EventVoteProtoMsg {
  typeUrl: "/bze.dao.EventVote";
  value: Uint8Array;
}
/**
 * EventVote is emitted when a ballot is cast or changed.
 * @name EventVoteAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventVote
 */
export interface EventVoteAmino {
  proposal_id?: string;
  voter?: string;
  option?: VoteOption;
  /**
   * weight is the ballot's weight (math.Int).
   */
  weight?: string;
}
export interface EventVoteAminoMsg {
  type: "/bze.dao.EventVote";
  value: EventVoteAmino;
}
/**
 * EventVote is emitted when a ballot is cast or changed.
 * @name EventVoteSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventVote
 */
export interface EventVoteSDKType {
  proposal_id: bigint;
  voter: string;
  option: VoteOption;
  weight: string;
}
/**
 * EventBallotReduced is emitted when a voter's weight is taken out of a ballot
 * on a proposal in voting: the voter left an electorate source, or was removed
 * from a static-list DAO.
 * @name EventBallotReduced
 * @package bze.dao
 * @see proto type: bze.dao.EventBallotReduced
 */
export interface EventBallotReduced {
  proposalId: bigint;
  voter: string;
  /**
   * source is sr/{reward_id} or dr/{staking_denom}; empty for a removed
   * static-list member.
   */
  source: string;
  /**
   * amount is the share removed from the ballot and its tally (math.Int).
   */
  amount: string;
}
export interface EventBallotReducedProtoMsg {
  typeUrl: "/bze.dao.EventBallotReduced";
  value: Uint8Array;
}
/**
 * EventBallotReduced is emitted when a voter's weight is taken out of a ballot
 * on a proposal in voting: the voter left an electorate source, or was removed
 * from a static-list DAO.
 * @name EventBallotReducedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventBallotReduced
 */
export interface EventBallotReducedAmino {
  proposal_id?: string;
  voter?: string;
  /**
   * source is sr/{reward_id} or dr/{staking_denom}; empty for a removed
   * static-list member.
   */
  source?: string;
  /**
   * amount is the share removed from the ballot and its tally (math.Int).
   */
  amount?: string;
}
export interface EventBallotReducedAminoMsg {
  type: "/bze.dao.EventBallotReduced";
  value: EventBallotReducedAmino;
}
/**
 * EventBallotReduced is emitted when a voter's weight is taken out of a ballot
 * on a proposal in voting: the voter left an electorate source, or was removed
 * from a static-list DAO.
 * @name EventBallotReducedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventBallotReduced
 */
export interface EventBallotReducedSDKType {
  proposal_id: bigint;
  voter: string;
  source: string;
  amount: string;
}
/**
 * EventProposalCancelled is emitted when the proposer cancels a proposal.
 * @name EventProposalCancelled
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCancelled
 */
export interface EventProposalCancelled {
  id: bigint;
}
export interface EventProposalCancelledProtoMsg {
  typeUrl: "/bze.dao.EventProposalCancelled";
  value: Uint8Array;
}
/**
 * EventProposalCancelled is emitted when the proposer cancels a proposal.
 * @name EventProposalCancelledAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCancelled
 */
export interface EventProposalCancelledAmino {
  id?: string;
}
export interface EventProposalCancelledAminoMsg {
  type: "/bze.dao.EventProposalCancelled";
  value: EventProposalCancelledAmino;
}
/**
 * EventProposalCancelled is emitted when the proposer cancels a proposal.
 * @name EventProposalCancelledSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCancelled
 */
export interface EventProposalCancelledSDKType {
  id: bigint;
}
/**
 * EventDepositReleased is emitted when a proposal's escrowed deposit leaves
 * the module account: refunded to the proposer, or kept and sent to the burner
 * or the DAO's treasury.
 * @name EventDepositReleased
 * @package bze.dao
 * @see proto type: bze.dao.EventDepositReleased
 */
export interface EventDepositReleased {
  id: bigint;
  refunded: boolean;
  /**
   * destination is the address the deposit was sent to.
   */
  destination: string;
  /**
   * amount is the released deposit (sdk.Coin).
   */
  amount: string;
}
export interface EventDepositReleasedProtoMsg {
  typeUrl: "/bze.dao.EventDepositReleased";
  value: Uint8Array;
}
/**
 * EventDepositReleased is emitted when a proposal's escrowed deposit leaves
 * the module account: refunded to the proposer, or kept and sent to the burner
 * or the DAO's treasury.
 * @name EventDepositReleasedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventDepositReleased
 */
export interface EventDepositReleasedAmino {
  id?: string;
  refunded?: boolean;
  /**
   * destination is the address the deposit was sent to.
   */
  destination?: string;
  /**
   * amount is the released deposit (sdk.Coin).
   */
  amount?: string;
}
export interface EventDepositReleasedAminoMsg {
  type: "/bze.dao.EventDepositReleased";
  value: EventDepositReleasedAmino;
}
/**
 * EventDepositReleased is emitted when a proposal's escrowed deposit leaves
 * the module account: refunded to the proposer, or kept and sent to the burner
 * or the DAO's treasury.
 * @name EventDepositReleasedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventDepositReleased
 */
export interface EventDepositReleasedSDKType {
  id: bigint;
  refunded: boolean;
  destination: string;
  amount: string;
}
/**
 * EventProposalSettled is emitted by every settle: the first one, which
 * decides the proposal from its running tally, a retry of a failed execution
 * and the expiry of a failed one.
 * @name EventProposalSettled
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSettled
 */
export interface EventProposalSettled {
  id: bigint;
  status: ProposalStatus;
  /**
   * yes, no, abstain and denominator are the decided tally (math.Int).
   */
  yes: string;
  no: string;
  abstain: string;
  denominator: string;
  /**
   * expedited_early is true when an expedited proposal was settled before its
   * voting end.
   */
  expeditedEarly: boolean;
}
export interface EventProposalSettledProtoMsg {
  typeUrl: "/bze.dao.EventProposalSettled";
  value: Uint8Array;
}
/**
 * EventProposalSettled is emitted by every settle: the first one, which
 * decides the proposal from its running tally, a retry of a failed execution
 * and the expiry of a failed one.
 * @name EventProposalSettledAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSettled
 */
export interface EventProposalSettledAmino {
  id?: string;
  status?: ProposalStatus;
  /**
   * yes, no, abstain and denominator are the decided tally (math.Int).
   */
  yes?: string;
  no?: string;
  abstain?: string;
  denominator?: string;
  /**
   * expedited_early is true when an expedited proposal was settled before its
   * voting end.
   */
  expedited_early?: boolean;
}
export interface EventProposalSettledAminoMsg {
  type: "/bze.dao.EventProposalSettled";
  value: EventProposalSettledAmino;
}
/**
 * EventProposalSettled is emitted by every settle: the first one, which
 * decides the proposal from its running tally, a retry of a failed execution
 * and the expiry of a failed one.
 * @name EventProposalSettledSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSettled
 */
export interface EventProposalSettledSDKType {
  id: bigint;
  status: ProposalStatus;
  yes: string;
  no: string;
  abstain: string;
  denominator: string;
  expedited_early: boolean;
}
/**
 * EventProposalExecuted is emitted after each run of a passed proposal's
 * messages.
 * @name EventProposalExecuted
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalExecuted
 */
export interface EventProposalExecuted {
  id: bigint;
  success: boolean;
  /**
   * error is a fixed reason on failure, never the raw error text.
   */
  error: string;
}
export interface EventProposalExecutedProtoMsg {
  typeUrl: "/bze.dao.EventProposalExecuted";
  value: Uint8Array;
}
/**
 * EventProposalExecuted is emitted after each run of a passed proposal's
 * messages.
 * @name EventProposalExecutedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalExecuted
 */
export interface EventProposalExecutedAmino {
  id?: string;
  success?: boolean;
  /**
   * error is a fixed reason on failure, never the raw error text.
   */
  error?: string;
}
export interface EventProposalExecutedAminoMsg {
  type: "/bze.dao.EventProposalExecuted";
  value: EventProposalExecutedAmino;
}
/**
 * EventProposalExecuted is emitted after each run of a passed proposal's
 * messages.
 * @name EventProposalExecutedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalExecuted
 */
export interface EventProposalExecutedSDKType {
  id: bigint;
  success: boolean;
  error: string;
}
/**
 * EventProposalCleaned is emitted by every cleanup batch of a finished
 * proposal; completed is true on the batch that deleted the proposal.
 * @name EventProposalCleaned
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCleaned
 */
export interface EventProposalCleaned {
  id: bigint;
  processed: bigint;
  completed: boolean;
}
export interface EventProposalCleanedProtoMsg {
  typeUrl: "/bze.dao.EventProposalCleaned";
  value: Uint8Array;
}
/**
 * EventProposalCleaned is emitted by every cleanup batch of a finished
 * proposal; completed is true on the batch that deleted the proposal.
 * @name EventProposalCleanedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCleaned
 */
export interface EventProposalCleanedAmino {
  id?: string;
  processed?: string;
  completed?: boolean;
}
export interface EventProposalCleanedAminoMsg {
  type: "/bze.dao.EventProposalCleaned";
  value: EventProposalCleanedAmino;
}
/**
 * EventProposalCleaned is emitted by every cleanup batch of a finished
 * proposal; completed is true on the batch that deleted the proposal.
 * @name EventProposalCleanedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCleaned
 */
export interface EventProposalCleanedSDKType {
  id: bigint;
  processed: bigint;
  completed: boolean;
}
/**
 * EventDaoConfigUpdated is emitted when a DAO's config is replaced.
 * @name EventDaoConfigUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoConfigUpdated
 */
export interface EventDaoConfigUpdated {
  id: bigint;
  /**
   * fields are the proto names of the config fields whose value changed, in
   * proto order.
   */
  fields: string[];
}
export interface EventDaoConfigUpdatedProtoMsg {
  typeUrl: "/bze.dao.EventDaoConfigUpdated";
  value: Uint8Array;
}
/**
 * EventDaoConfigUpdated is emitted when a DAO's config is replaced.
 * @name EventDaoConfigUpdatedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoConfigUpdated
 */
export interface EventDaoConfigUpdatedAmino {
  id?: string;
  /**
   * fields are the proto names of the config fields whose value changed, in
   * proto order.
   */
  fields?: string[];
}
export interface EventDaoConfigUpdatedAminoMsg {
  type: "/bze.dao.EventDaoConfigUpdated";
  value: EventDaoConfigUpdatedAmino;
}
/**
 * EventDaoConfigUpdated is emitted when a DAO's config is replaced.
 * @name EventDaoConfigUpdatedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoConfigUpdated
 */
export interface EventDaoConfigUpdatedSDKType {
  id: bigint;
  fields: string[];
}
/**
 * EventDaoMetadataUpdated is emitted when a DAO's name and description are
 * replaced.
 * @name EventDaoMetadataUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMetadataUpdated
 */
export interface EventDaoMetadataUpdated {
  id: bigint;
}
export interface EventDaoMetadataUpdatedProtoMsg {
  typeUrl: "/bze.dao.EventDaoMetadataUpdated";
  value: Uint8Array;
}
/**
 * EventDaoMetadataUpdated is emitted when a DAO's name and description are
 * replaced.
 * @name EventDaoMetadataUpdatedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMetadataUpdated
 */
export interface EventDaoMetadataUpdatedAmino {
  id?: string;
}
export interface EventDaoMetadataUpdatedAminoMsg {
  type: "/bze.dao.EventDaoMetadataUpdated";
  value: EventDaoMetadataUpdatedAmino;
}
/**
 * EventDaoMetadataUpdated is emitted when a DAO's name and description are
 * replaced.
 * @name EventDaoMetadataUpdatedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMetadataUpdated
 */
export interface EventDaoMetadataUpdatedSDKType {
  id: bigint;
}
/**
 * EventDaoElectorateUpdated is emitted when a stake DAO's sources are
 * replaced; it lists the new sources.
 * @name EventDaoElectorateUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoElectorateUpdated
 */
export interface EventDaoElectorateUpdated {
  id: bigint;
  srIds: string[];
  drDenom: string;
}
export interface EventDaoElectorateUpdatedProtoMsg {
  typeUrl: "/bze.dao.EventDaoElectorateUpdated";
  value: Uint8Array;
}
/**
 * EventDaoElectorateUpdated is emitted when a stake DAO's sources are
 * replaced; it lists the new sources.
 * @name EventDaoElectorateUpdatedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoElectorateUpdated
 */
export interface EventDaoElectorateUpdatedAmino {
  id?: string;
  sr_ids?: string[];
  dr_denom?: string;
}
export interface EventDaoElectorateUpdatedAminoMsg {
  type: "/bze.dao.EventDaoElectorateUpdated";
  value: EventDaoElectorateUpdatedAmino;
}
/**
 * EventDaoElectorateUpdated is emitted when a stake DAO's sources are
 * replaced; it lists the new sources.
 * @name EventDaoElectorateUpdatedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoElectorateUpdated
 */
export interface EventDaoElectorateUpdatedSDKType {
  id: bigint;
  sr_ids: string[];
  dr_denom: string;
}
/**
 * EventDaoMembersUpdated is emitted when members are added to or removed from
 * a static-list DAO.
 * @name EventDaoMembersUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMembersUpdated
 */
export interface EventDaoMembersUpdated {
  id: bigint;
  added: string[];
  removed: string[];
}
export interface EventDaoMembersUpdatedProtoMsg {
  typeUrl: "/bze.dao.EventDaoMembersUpdated";
  value: Uint8Array;
}
/**
 * EventDaoMembersUpdated is emitted when members are added to or removed from
 * a static-list DAO.
 * @name EventDaoMembersUpdatedAmino
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMembersUpdated
 */
export interface EventDaoMembersUpdatedAmino {
  id?: string;
  added?: string[];
  removed?: string[];
}
export interface EventDaoMembersUpdatedAminoMsg {
  type: "/bze.dao.EventDaoMembersUpdated";
  value: EventDaoMembersUpdatedAmino;
}
/**
 * EventDaoMembersUpdated is emitted when members are added to or removed from
 * a static-list DAO.
 * @name EventDaoMembersUpdatedSDKType
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMembersUpdated
 */
export interface EventDaoMembersUpdatedSDKType {
  id: bigint;
  added: string[];
  removed: string[];
}
function createBaseEventDaoCreated(): EventDaoCreated {
  return {
    id: BigInt(0),
    address: "",
    admin: "",
    type: 0
  };
}
/**
 * EventDaoCreated is emitted when a DAO is created.
 * @name EventDaoCreated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoCreated
 */
export const EventDaoCreated = {
  typeUrl: "/bze.dao.EventDaoCreated",
  is(o: any): o is EventDaoCreated {
    return o && (o.$typeUrl === EventDaoCreated.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.admin === "string" && isSet(o.type));
  },
  isSDK(o: any): o is EventDaoCreatedSDKType {
    return o && (o.$typeUrl === EventDaoCreated.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.admin === "string" && isSet(o.type));
  },
  isAmino(o: any): o is EventDaoCreatedAmino {
    return o && (o.$typeUrl === EventDaoCreated.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.admin === "string" && isSet(o.type));
  },
  encode(message: EventDaoCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDaoCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDaoCreated();
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
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDaoCreated>): EventDaoCreated {
    const message = createBaseEventDaoCreated();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.admin = object.admin ?? "";
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: EventDaoCreatedAmino): EventDaoCreated {
    const message = createBaseEventDaoCreated();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: EventDaoCreated): EventDaoCreatedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: EventDaoCreatedAminoMsg): EventDaoCreated {
    return EventDaoCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDaoCreatedProtoMsg): EventDaoCreated {
    return EventDaoCreated.decode(message.value);
  },
  toProto(message: EventDaoCreated): Uint8Array {
    return EventDaoCreated.encode(message).finish();
  },
  toProtoMsg(message: EventDaoCreated): EventDaoCreatedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventDaoCreated",
      value: EventDaoCreated.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventAdminExecuted(): EventAdminExecuted {
  return {
    id: BigInt(0),
    admin: "",
    msgCount: BigInt(0)
  };
}
/**
 * EventAdminExecuted is emitted when a DAO's admin runs messages as the DAO.
 * @name EventAdminExecuted
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminExecuted
 */
export const EventAdminExecuted = {
  typeUrl: "/bze.dao.EventAdminExecuted",
  is(o: any): o is EventAdminExecuted {
    return o && (o.$typeUrl === EventAdminExecuted.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.msgCount === "bigint");
  },
  isSDK(o: any): o is EventAdminExecutedSDKType {
    return o && (o.$typeUrl === EventAdminExecuted.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.msg_count === "bigint");
  },
  isAmino(o: any): o is EventAdminExecutedAmino {
    return o && (o.$typeUrl === EventAdminExecuted.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.msg_count === "bigint");
  },
  encode(message: EventAdminExecuted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.msgCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.msgCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAdminExecuted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAdminExecuted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.msgCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAdminExecuted>): EventAdminExecuted {
    const message = createBaseEventAdminExecuted();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.msgCount = object.msgCount !== undefined && object.msgCount !== null ? BigInt(object.msgCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventAdminExecutedAmino): EventAdminExecuted {
    const message = createBaseEventAdminExecuted();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.msg_count !== undefined && object.msg_count !== null) {
      message.msgCount = BigInt(object.msg_count);
    }
    return message;
  },
  toAmino(message: EventAdminExecuted): EventAdminExecutedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.msg_count = message.msgCount !== BigInt(0) ? message.msgCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAdminExecutedAminoMsg): EventAdminExecuted {
    return EventAdminExecuted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAdminExecutedProtoMsg): EventAdminExecuted {
    return EventAdminExecuted.decode(message.value);
  },
  toProto(message: EventAdminExecuted): Uint8Array {
    return EventAdminExecuted.encode(message).finish();
  },
  toProtoMsg(message: EventAdminExecuted): EventAdminExecutedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventAdminExecuted",
      value: EventAdminExecuted.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventAdminNominated(): EventAdminNominated {
  return {
    id: BigInt(0),
    admin: "",
    nominee: ""
  };
}
/**
 * EventAdminNominated is emitted when a DAO's admin nominates a successor.
 * @name EventAdminNominated
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominated
 */
export const EventAdminNominated = {
  typeUrl: "/bze.dao.EventAdminNominated",
  is(o: any): o is EventAdminNominated {
    return o && (o.$typeUrl === EventAdminNominated.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.nominee === "string");
  },
  isSDK(o: any): o is EventAdminNominatedSDKType {
    return o && (o.$typeUrl === EventAdminNominated.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.nominee === "string");
  },
  isAmino(o: any): o is EventAdminNominatedAmino {
    return o && (o.$typeUrl === EventAdminNominated.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.nominee === "string");
  },
  encode(message: EventAdminNominated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.nominee !== "") {
      writer.uint32(26).string(message.nominee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAdminNominated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAdminNominated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.admin = reader.string();
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
  fromPartial(object: Partial<EventAdminNominated>): EventAdminNominated {
    const message = createBaseEventAdminNominated();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.nominee = object.nominee ?? "";
    return message;
  },
  fromAmino(object: EventAdminNominatedAmino): EventAdminNominated {
    const message = createBaseEventAdminNominated();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.nominee !== undefined && object.nominee !== null) {
      message.nominee = object.nominee;
    }
    return message;
  },
  toAmino(message: EventAdminNominated): EventAdminNominatedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.nominee = message.nominee === "" ? undefined : message.nominee;
    return obj;
  },
  fromAminoMsg(object: EventAdminNominatedAminoMsg): EventAdminNominated {
    return EventAdminNominated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAdminNominatedProtoMsg): EventAdminNominated {
    return EventAdminNominated.decode(message.value);
  },
  toProto(message: EventAdminNominated): Uint8Array {
    return EventAdminNominated.encode(message).finish();
  },
  toProtoMsg(message: EventAdminNominated): EventAdminNominatedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventAdminNominated",
      value: EventAdminNominated.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventAdminChanged(): EventAdminChanged {
  return {
    id: BigInt(0),
    oldAdmin: "",
    newAdmin: ""
  };
}
/**
 * EventAdminChanged is emitted when a DAO's admin changes.
 * @name EventAdminChanged
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminChanged
 */
export const EventAdminChanged = {
  typeUrl: "/bze.dao.EventAdminChanged",
  is(o: any): o is EventAdminChanged {
    return o && (o.$typeUrl === EventAdminChanged.typeUrl || typeof o.id === "bigint" && typeof o.oldAdmin === "string" && typeof o.newAdmin === "string");
  },
  isSDK(o: any): o is EventAdminChangedSDKType {
    return o && (o.$typeUrl === EventAdminChanged.typeUrl || typeof o.id === "bigint" && typeof o.old_admin === "string" && typeof o.new_admin === "string");
  },
  isAmino(o: any): o is EventAdminChangedAmino {
    return o && (o.$typeUrl === EventAdminChanged.typeUrl || typeof o.id === "bigint" && typeof o.old_admin === "string" && typeof o.new_admin === "string");
  },
  encode(message: EventAdminChanged, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.oldAdmin !== "") {
      writer.uint32(18).string(message.oldAdmin);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAdminChanged {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAdminChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.oldAdmin = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAdminChanged>): EventAdminChanged {
    const message = createBaseEventAdminChanged();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.oldAdmin = object.oldAdmin ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: EventAdminChangedAmino): EventAdminChanged {
    const message = createBaseEventAdminChanged();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.old_admin !== undefined && object.old_admin !== null) {
      message.oldAdmin = object.old_admin;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: EventAdminChanged): EventAdminChangedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.old_admin = message.oldAdmin === "" ? undefined : message.oldAdmin;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: EventAdminChangedAminoMsg): EventAdminChanged {
    return EventAdminChanged.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAdminChangedProtoMsg): EventAdminChanged {
    return EventAdminChanged.decode(message.value);
  },
  toProto(message: EventAdminChanged): Uint8Array {
    return EventAdminChanged.encode(message).finish();
  },
  toProtoMsg(message: EventAdminChanged): EventAdminChangedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventAdminChanged",
      value: EventAdminChanged.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventAdminNominationWithdrawn(): EventAdminNominationWithdrawn {
  return {
    id: BigInt(0),
    nominee: ""
  };
}
/**
 * EventAdminNominationWithdrawn is emitted when a DAO's admin withdraws a
 * pending nomination.
 * @name EventAdminNominationWithdrawn
 * @package bze.dao
 * @see proto type: bze.dao.EventAdminNominationWithdrawn
 */
export const EventAdminNominationWithdrawn = {
  typeUrl: "/bze.dao.EventAdminNominationWithdrawn",
  is(o: any): o is EventAdminNominationWithdrawn {
    return o && (o.$typeUrl === EventAdminNominationWithdrawn.typeUrl || typeof o.id === "bigint" && typeof o.nominee === "string");
  },
  isSDK(o: any): o is EventAdminNominationWithdrawnSDKType {
    return o && (o.$typeUrl === EventAdminNominationWithdrawn.typeUrl || typeof o.id === "bigint" && typeof o.nominee === "string");
  },
  isAmino(o: any): o is EventAdminNominationWithdrawnAmino {
    return o && (o.$typeUrl === EventAdminNominationWithdrawn.typeUrl || typeof o.id === "bigint" && typeof o.nominee === "string");
  },
  encode(message: EventAdminNominationWithdrawn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nominee !== "") {
      writer.uint32(18).string(message.nominee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAdminNominationWithdrawn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAdminNominationWithdrawn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.nominee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAdminNominationWithdrawn>): EventAdminNominationWithdrawn {
    const message = createBaseEventAdminNominationWithdrawn();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.nominee = object.nominee ?? "";
    return message;
  },
  fromAmino(object: EventAdminNominationWithdrawnAmino): EventAdminNominationWithdrawn {
    const message = createBaseEventAdminNominationWithdrawn();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.nominee !== undefined && object.nominee !== null) {
      message.nominee = object.nominee;
    }
    return message;
  },
  toAmino(message: EventAdminNominationWithdrawn): EventAdminNominationWithdrawnAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.nominee = message.nominee === "" ? undefined : message.nominee;
    return obj;
  },
  fromAminoMsg(object: EventAdminNominationWithdrawnAminoMsg): EventAdminNominationWithdrawn {
    return EventAdminNominationWithdrawn.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAdminNominationWithdrawnProtoMsg): EventAdminNominationWithdrawn {
    return EventAdminNominationWithdrawn.decode(message.value);
  },
  toProto(message: EventAdminNominationWithdrawn): Uint8Array {
    return EventAdminNominationWithdrawn.encode(message).finish();
  },
  toProtoMsg(message: EventAdminNominationWithdrawn): EventAdminNominationWithdrawnProtoMsg {
    return {
      typeUrl: "/bze.dao.EventAdminNominationWithdrawn",
      value: EventAdminNominationWithdrawn.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventProposalSubmitted(): EventProposalSubmitted {
  return {
    id: BigInt(0),
    daoId: BigInt(0),
    proposer: "",
    expedited: false,
    votingEnd: BigInt(0),
    denominator: ""
  };
}
/**
 * EventProposalSubmitted is emitted when a proposal is submitted.
 * @name EventProposalSubmitted
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSubmitted
 */
export const EventProposalSubmitted = {
  typeUrl: "/bze.dao.EventProposalSubmitted",
  is(o: any): o is EventProposalSubmitted {
    return o && (o.$typeUrl === EventProposalSubmitted.typeUrl || typeof o.id === "bigint" && typeof o.daoId === "bigint" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.votingEnd === "bigint" && typeof o.denominator === "string");
  },
  isSDK(o: any): o is EventProposalSubmittedSDKType {
    return o && (o.$typeUrl === EventProposalSubmitted.typeUrl || typeof o.id === "bigint" && typeof o.dao_id === "bigint" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.voting_end === "bigint" && typeof o.denominator === "string");
  },
  isAmino(o: any): o is EventProposalSubmittedAmino {
    return o && (o.$typeUrl === EventProposalSubmitted.typeUrl || typeof o.id === "bigint" && typeof o.dao_id === "bigint" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.voting_end === "bigint" && typeof o.denominator === "string");
  },
  encode(message: EventProposalSubmitted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.daoId !== BigInt(0)) {
      writer.uint32(16).uint64(message.daoId);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.expedited === true) {
      writer.uint32(32).bool(message.expedited);
    }
    if (message.votingEnd !== BigInt(0)) {
      writer.uint32(40).int64(message.votingEnd);
    }
    if (message.denominator !== "") {
      writer.uint32(50).string(message.denominator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalSubmitted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalSubmitted();
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
          message.expedited = reader.bool();
          break;
        case 5:
          message.votingEnd = reader.int64();
          break;
        case 6:
          message.denominator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventProposalSubmitted>): EventProposalSubmitted {
    const message = createBaseEventProposalSubmitted();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.daoId = object.daoId !== undefined && object.daoId !== null ? BigInt(object.daoId.toString()) : BigInt(0);
    message.proposer = object.proposer ?? "";
    message.expedited = object.expedited ?? false;
    message.votingEnd = object.votingEnd !== undefined && object.votingEnd !== null ? BigInt(object.votingEnd.toString()) : BigInt(0);
    message.denominator = object.denominator ?? "";
    return message;
  },
  fromAmino(object: EventProposalSubmittedAmino): EventProposalSubmitted {
    const message = createBaseEventProposalSubmitted();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.dao_id !== undefined && object.dao_id !== null) {
      message.daoId = BigInt(object.dao_id);
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.expedited !== undefined && object.expedited !== null) {
      message.expedited = object.expedited;
    }
    if (object.voting_end !== undefined && object.voting_end !== null) {
      message.votingEnd = BigInt(object.voting_end);
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = object.denominator;
    }
    return message;
  },
  toAmino(message: EventProposalSubmitted): EventProposalSubmittedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.dao_id = message.daoId !== BigInt(0) ? message.daoId?.toString() : undefined;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.expedited = message.expedited === false ? undefined : message.expedited;
    obj.voting_end = message.votingEnd !== BigInt(0) ? message.votingEnd?.toString() : undefined;
    obj.denominator = message.denominator === "" ? undefined : message.denominator;
    return obj;
  },
  fromAminoMsg(object: EventProposalSubmittedAminoMsg): EventProposalSubmitted {
    return EventProposalSubmitted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProposalSubmittedProtoMsg): EventProposalSubmitted {
    return EventProposalSubmitted.decode(message.value);
  },
  toProto(message: EventProposalSubmitted): Uint8Array {
    return EventProposalSubmitted.encode(message).finish();
  },
  toProtoMsg(message: EventProposalSubmitted): EventProposalSubmittedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventProposalSubmitted",
      value: EventProposalSubmitted.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventVote(): EventVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    weight: ""
  };
}
/**
 * EventVote is emitted when a ballot is cast or changed.
 * @name EventVote
 * @package bze.dao
 * @see proto type: bze.dao.EventVote
 */
export const EventVote = {
  typeUrl: "/bze.dao.EventVote",
  is(o: any): o is EventVote {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.weight === "string");
  },
  isSDK(o: any): o is EventVoteSDKType {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.weight === "string");
  },
  isAmino(o: any): o is EventVoteAmino {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.weight === "string");
  },
  encode(message: EventVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: EventVoteAmino): EventVote {
    const message = createBaseEventVote();
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
    return message;
  },
  toAmino(message: EventVote): EventVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: EventVoteAminoMsg): EventVote {
    return EventVote.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteProtoMsg): EventVote {
    return EventVote.decode(message.value);
  },
  toProto(message: EventVote): Uint8Array {
    return EventVote.encode(message).finish();
  },
  toProtoMsg(message: EventVote): EventVoteProtoMsg {
    return {
      typeUrl: "/bze.dao.EventVote",
      value: EventVote.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventBallotReduced(): EventBallotReduced {
  return {
    proposalId: BigInt(0),
    voter: "",
    source: "",
    amount: ""
  };
}
/**
 * EventBallotReduced is emitted when a voter's weight is taken out of a ballot
 * on a proposal in voting: the voter left an electorate source, or was removed
 * from a static-list DAO.
 * @name EventBallotReduced
 * @package bze.dao
 * @see proto type: bze.dao.EventBallotReduced
 */
export const EventBallotReduced = {
  typeUrl: "/bze.dao.EventBallotReduced",
  is(o: any): o is EventBallotReduced {
    return o && (o.$typeUrl === EventBallotReduced.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && typeof o.source === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is EventBallotReducedSDKType {
    return o && (o.$typeUrl === EventBallotReduced.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && typeof o.source === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventBallotReducedAmino {
    return o && (o.$typeUrl === EventBallotReduced.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && typeof o.source === "string" && typeof o.amount === "string");
  },
  encode(message: EventBallotReduced, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBallotReduced {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBallotReduced();
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
          message.source = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBallotReduced>): EventBallotReduced {
    const message = createBaseEventBallotReduced();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.source = object.source ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventBallotReducedAmino): EventBallotReduced {
    const message = createBaseEventBallotReduced();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventBallotReduced): EventBallotReducedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.source = message.source === "" ? undefined : message.source;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventBallotReducedAminoMsg): EventBallotReduced {
    return EventBallotReduced.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBallotReducedProtoMsg): EventBallotReduced {
    return EventBallotReduced.decode(message.value);
  },
  toProto(message: EventBallotReduced): Uint8Array {
    return EventBallotReduced.encode(message).finish();
  },
  toProtoMsg(message: EventBallotReduced): EventBallotReducedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventBallotReduced",
      value: EventBallotReduced.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventProposalCancelled(): EventProposalCancelled {
  return {
    id: BigInt(0)
  };
}
/**
 * EventProposalCancelled is emitted when the proposer cancels a proposal.
 * @name EventProposalCancelled
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCancelled
 */
export const EventProposalCancelled = {
  typeUrl: "/bze.dao.EventProposalCancelled",
  is(o: any): o is EventProposalCancelled {
    return o && (o.$typeUrl === EventProposalCancelled.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is EventProposalCancelledSDKType {
    return o && (o.$typeUrl === EventProposalCancelled.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is EventProposalCancelledAmino {
    return o && (o.$typeUrl === EventProposalCancelled.typeUrl || typeof o.id === "bigint");
  },
  encode(message: EventProposalCancelled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalCancelled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalCancelled();
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
  fromPartial(object: Partial<EventProposalCancelled>): EventProposalCancelled {
    const message = createBaseEventProposalCancelled();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventProposalCancelledAmino): EventProposalCancelled {
    const message = createBaseEventProposalCancelled();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventProposalCancelled): EventProposalCancelledAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventProposalCancelledAminoMsg): EventProposalCancelled {
    return EventProposalCancelled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProposalCancelledProtoMsg): EventProposalCancelled {
    return EventProposalCancelled.decode(message.value);
  },
  toProto(message: EventProposalCancelled): Uint8Array {
    return EventProposalCancelled.encode(message).finish();
  },
  toProtoMsg(message: EventProposalCancelled): EventProposalCancelledProtoMsg {
    return {
      typeUrl: "/bze.dao.EventProposalCancelled",
      value: EventProposalCancelled.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventDepositReleased(): EventDepositReleased {
  return {
    id: BigInt(0),
    refunded: false,
    destination: "",
    amount: ""
  };
}
/**
 * EventDepositReleased is emitted when a proposal's escrowed deposit leaves
 * the module account: refunded to the proposer, or kept and sent to the burner
 * or the DAO's treasury.
 * @name EventDepositReleased
 * @package bze.dao
 * @see proto type: bze.dao.EventDepositReleased
 */
export const EventDepositReleased = {
  typeUrl: "/bze.dao.EventDepositReleased",
  is(o: any): o is EventDepositReleased {
    return o && (o.$typeUrl === EventDepositReleased.typeUrl || typeof o.id === "bigint" && typeof o.refunded === "boolean" && typeof o.destination === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is EventDepositReleasedSDKType {
    return o && (o.$typeUrl === EventDepositReleased.typeUrl || typeof o.id === "bigint" && typeof o.refunded === "boolean" && typeof o.destination === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventDepositReleasedAmino {
    return o && (o.$typeUrl === EventDepositReleased.typeUrl || typeof o.id === "bigint" && typeof o.refunded === "boolean" && typeof o.destination === "string" && typeof o.amount === "string");
  },
  encode(message: EventDepositReleased, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.refunded === true) {
      writer.uint32(16).bool(message.refunded);
    }
    if (message.destination !== "") {
      writer.uint32(26).string(message.destination);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDepositReleased {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositReleased();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.refunded = reader.bool();
          break;
        case 3:
          message.destination = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDepositReleased>): EventDepositReleased {
    const message = createBaseEventDepositReleased();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.refunded = object.refunded ?? false;
    message.destination = object.destination ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventDepositReleasedAmino): EventDepositReleased {
    const message = createBaseEventDepositReleased();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.refunded !== undefined && object.refunded !== null) {
      message.refunded = object.refunded;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventDepositReleased): EventDepositReleasedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.refunded = message.refunded === false ? undefined : message.refunded;
    obj.destination = message.destination === "" ? undefined : message.destination;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventDepositReleasedAminoMsg): EventDepositReleased {
    return EventDepositReleased.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDepositReleasedProtoMsg): EventDepositReleased {
    return EventDepositReleased.decode(message.value);
  },
  toProto(message: EventDepositReleased): Uint8Array {
    return EventDepositReleased.encode(message).finish();
  },
  toProtoMsg(message: EventDepositReleased): EventDepositReleasedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventDepositReleased",
      value: EventDepositReleased.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventProposalSettled(): EventProposalSettled {
  return {
    id: BigInt(0),
    status: 0,
    yes: "",
    no: "",
    abstain: "",
    denominator: "",
    expeditedEarly: false
  };
}
/**
 * EventProposalSettled is emitted by every settle: the first one, which
 * decides the proposal from its running tally, a retry of a failed execution
 * and the expiry of a failed one.
 * @name EventProposalSettled
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalSettled
 */
export const EventProposalSettled = {
  typeUrl: "/bze.dao.EventProposalSettled",
  is(o: any): o is EventProposalSettled {
    return o && (o.$typeUrl === EventProposalSettled.typeUrl || typeof o.id === "bigint" && isSet(o.status) && typeof o.yes === "string" && typeof o.no === "string" && typeof o.abstain === "string" && typeof o.denominator === "string" && typeof o.expeditedEarly === "boolean");
  },
  isSDK(o: any): o is EventProposalSettledSDKType {
    return o && (o.$typeUrl === EventProposalSettled.typeUrl || typeof o.id === "bigint" && isSet(o.status) && typeof o.yes === "string" && typeof o.no === "string" && typeof o.abstain === "string" && typeof o.denominator === "string" && typeof o.expedited_early === "boolean");
  },
  isAmino(o: any): o is EventProposalSettledAmino {
    return o && (o.$typeUrl === EventProposalSettled.typeUrl || typeof o.id === "bigint" && isSet(o.status) && typeof o.yes === "string" && typeof o.no === "string" && typeof o.abstain === "string" && typeof o.denominator === "string" && typeof o.expedited_early === "boolean");
  },
  encode(message: EventProposalSettled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.yes !== "") {
      writer.uint32(26).string(message.yes);
    }
    if (message.no !== "") {
      writer.uint32(34).string(message.no);
    }
    if (message.abstain !== "") {
      writer.uint32(42).string(message.abstain);
    }
    if (message.denominator !== "") {
      writer.uint32(50).string(message.denominator);
    }
    if (message.expeditedEarly === true) {
      writer.uint32(56).bool(message.expeditedEarly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalSettled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalSettled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.yes = reader.string();
          break;
        case 4:
          message.no = reader.string();
          break;
        case 5:
          message.abstain = reader.string();
          break;
        case 6:
          message.denominator = reader.string();
          break;
        case 7:
          message.expeditedEarly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventProposalSettled>): EventProposalSettled {
    const message = createBaseEventProposalSettled();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.yes = object.yes ?? "";
    message.no = object.no ?? "";
    message.abstain = object.abstain ?? "";
    message.denominator = object.denominator ?? "";
    message.expeditedEarly = object.expeditedEarly ?? false;
    return message;
  },
  fromAmino(object: EventProposalSettledAmino): EventProposalSettled {
    const message = createBaseEventProposalSettled();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
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
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = object.denominator;
    }
    if (object.expedited_early !== undefined && object.expedited_early !== null) {
      message.expeditedEarly = object.expedited_early;
    }
    return message;
  },
  toAmino(message: EventProposalSettled): EventProposalSettledAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.yes = message.yes === "" ? undefined : message.yes;
    obj.no = message.no === "" ? undefined : message.no;
    obj.abstain = message.abstain === "" ? undefined : message.abstain;
    obj.denominator = message.denominator === "" ? undefined : message.denominator;
    obj.expedited_early = message.expeditedEarly === false ? undefined : message.expeditedEarly;
    return obj;
  },
  fromAminoMsg(object: EventProposalSettledAminoMsg): EventProposalSettled {
    return EventProposalSettled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProposalSettledProtoMsg): EventProposalSettled {
    return EventProposalSettled.decode(message.value);
  },
  toProto(message: EventProposalSettled): Uint8Array {
    return EventProposalSettled.encode(message).finish();
  },
  toProtoMsg(message: EventProposalSettled): EventProposalSettledProtoMsg {
    return {
      typeUrl: "/bze.dao.EventProposalSettled",
      value: EventProposalSettled.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventProposalExecuted(): EventProposalExecuted {
  return {
    id: BigInt(0),
    success: false,
    error: ""
  };
}
/**
 * EventProposalExecuted is emitted after each run of a passed proposal's
 * messages.
 * @name EventProposalExecuted
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalExecuted
 */
export const EventProposalExecuted = {
  typeUrl: "/bze.dao.EventProposalExecuted",
  is(o: any): o is EventProposalExecuted {
    return o && (o.$typeUrl === EventProposalExecuted.typeUrl || typeof o.id === "bigint" && typeof o.success === "boolean" && typeof o.error === "string");
  },
  isSDK(o: any): o is EventProposalExecutedSDKType {
    return o && (o.$typeUrl === EventProposalExecuted.typeUrl || typeof o.id === "bigint" && typeof o.success === "boolean" && typeof o.error === "string");
  },
  isAmino(o: any): o is EventProposalExecutedAmino {
    return o && (o.$typeUrl === EventProposalExecuted.typeUrl || typeof o.id === "bigint" && typeof o.success === "boolean" && typeof o.error === "string");
  },
  encode(message: EventProposalExecuted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalExecuted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalExecuted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventProposalExecuted>): EventProposalExecuted {
    const message = createBaseEventProposalExecuted();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventProposalExecutedAmino): EventProposalExecuted {
    const message = createBaseEventProposalExecuted();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventProposalExecuted): EventProposalExecutedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.success = message.success === false ? undefined : message.success;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: EventProposalExecutedAminoMsg): EventProposalExecuted {
    return EventProposalExecuted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProposalExecutedProtoMsg): EventProposalExecuted {
    return EventProposalExecuted.decode(message.value);
  },
  toProto(message: EventProposalExecuted): Uint8Array {
    return EventProposalExecuted.encode(message).finish();
  },
  toProtoMsg(message: EventProposalExecuted): EventProposalExecutedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventProposalExecuted",
      value: EventProposalExecuted.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventProposalCleaned(): EventProposalCleaned {
  return {
    id: BigInt(0),
    processed: BigInt(0),
    completed: false
  };
}
/**
 * EventProposalCleaned is emitted by every cleanup batch of a finished
 * proposal; completed is true on the batch that deleted the proposal.
 * @name EventProposalCleaned
 * @package bze.dao
 * @see proto type: bze.dao.EventProposalCleaned
 */
export const EventProposalCleaned = {
  typeUrl: "/bze.dao.EventProposalCleaned",
  is(o: any): o is EventProposalCleaned {
    return o && (o.$typeUrl === EventProposalCleaned.typeUrl || typeof o.id === "bigint" && typeof o.processed === "bigint" && typeof o.completed === "boolean");
  },
  isSDK(o: any): o is EventProposalCleanedSDKType {
    return o && (o.$typeUrl === EventProposalCleaned.typeUrl || typeof o.id === "bigint" && typeof o.processed === "bigint" && typeof o.completed === "boolean");
  },
  isAmino(o: any): o is EventProposalCleanedAmino {
    return o && (o.$typeUrl === EventProposalCleaned.typeUrl || typeof o.id === "bigint" && typeof o.processed === "bigint" && typeof o.completed === "boolean");
  },
  encode(message: EventProposalCleaned, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.processed !== BigInt(0)) {
      writer.uint32(16).uint64(message.processed);
    }
    if (message.completed === true) {
      writer.uint32(24).bool(message.completed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalCleaned {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalCleaned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.processed = reader.uint64();
          break;
        case 3:
          message.completed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventProposalCleaned>): EventProposalCleaned {
    const message = createBaseEventProposalCleaned();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.processed = object.processed !== undefined && object.processed !== null ? BigInt(object.processed.toString()) : BigInt(0);
    message.completed = object.completed ?? false;
    return message;
  },
  fromAmino(object: EventProposalCleanedAmino): EventProposalCleaned {
    const message = createBaseEventProposalCleaned();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.processed !== undefined && object.processed !== null) {
      message.processed = BigInt(object.processed);
    }
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = object.completed;
    }
    return message;
  },
  toAmino(message: EventProposalCleaned): EventProposalCleanedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.processed = message.processed !== BigInt(0) ? message.processed?.toString() : undefined;
    obj.completed = message.completed === false ? undefined : message.completed;
    return obj;
  },
  fromAminoMsg(object: EventProposalCleanedAminoMsg): EventProposalCleaned {
    return EventProposalCleaned.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProposalCleanedProtoMsg): EventProposalCleaned {
    return EventProposalCleaned.decode(message.value);
  },
  toProto(message: EventProposalCleaned): Uint8Array {
    return EventProposalCleaned.encode(message).finish();
  },
  toProtoMsg(message: EventProposalCleaned): EventProposalCleanedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventProposalCleaned",
      value: EventProposalCleaned.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventDaoConfigUpdated(): EventDaoConfigUpdated {
  return {
    id: BigInt(0),
    fields: []
  };
}
/**
 * EventDaoConfigUpdated is emitted when a DAO's config is replaced.
 * @name EventDaoConfigUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoConfigUpdated
 */
export const EventDaoConfigUpdated = {
  typeUrl: "/bze.dao.EventDaoConfigUpdated",
  is(o: any): o is EventDaoConfigUpdated {
    return o && (o.$typeUrl === EventDaoConfigUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.fields) && (!o.fields.length || typeof o.fields[0] === "string"));
  },
  isSDK(o: any): o is EventDaoConfigUpdatedSDKType {
    return o && (o.$typeUrl === EventDaoConfigUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.fields) && (!o.fields.length || typeof o.fields[0] === "string"));
  },
  isAmino(o: any): o is EventDaoConfigUpdatedAmino {
    return o && (o.$typeUrl === EventDaoConfigUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.fields) && (!o.fields.length || typeof o.fields[0] === "string"));
  },
  encode(message: EventDaoConfigUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.fields) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDaoConfigUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDaoConfigUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.fields.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDaoConfigUpdated>): EventDaoConfigUpdated {
    const message = createBaseEventDaoConfigUpdated();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.fields = object.fields?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventDaoConfigUpdatedAmino): EventDaoConfigUpdated {
    const message = createBaseEventDaoConfigUpdated();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.fields = object.fields?.map(e => e) || [];
    return message;
  },
  toAmino(message: EventDaoConfigUpdated): EventDaoConfigUpdatedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.fields) {
      obj.fields = message.fields.map(e => e);
    } else {
      obj.fields = message.fields;
    }
    return obj;
  },
  fromAminoMsg(object: EventDaoConfigUpdatedAminoMsg): EventDaoConfigUpdated {
    return EventDaoConfigUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDaoConfigUpdatedProtoMsg): EventDaoConfigUpdated {
    return EventDaoConfigUpdated.decode(message.value);
  },
  toProto(message: EventDaoConfigUpdated): Uint8Array {
    return EventDaoConfigUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventDaoConfigUpdated): EventDaoConfigUpdatedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventDaoConfigUpdated",
      value: EventDaoConfigUpdated.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventDaoMetadataUpdated(): EventDaoMetadataUpdated {
  return {
    id: BigInt(0)
  };
}
/**
 * EventDaoMetadataUpdated is emitted when a DAO's name and description are
 * replaced.
 * @name EventDaoMetadataUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMetadataUpdated
 */
export const EventDaoMetadataUpdated = {
  typeUrl: "/bze.dao.EventDaoMetadataUpdated",
  is(o: any): o is EventDaoMetadataUpdated {
    return o && (o.$typeUrl === EventDaoMetadataUpdated.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is EventDaoMetadataUpdatedSDKType {
    return o && (o.$typeUrl === EventDaoMetadataUpdated.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is EventDaoMetadataUpdatedAmino {
    return o && (o.$typeUrl === EventDaoMetadataUpdated.typeUrl || typeof o.id === "bigint");
  },
  encode(message: EventDaoMetadataUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDaoMetadataUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDaoMetadataUpdated();
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
  fromPartial(object: Partial<EventDaoMetadataUpdated>): EventDaoMetadataUpdated {
    const message = createBaseEventDaoMetadataUpdated();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventDaoMetadataUpdatedAmino): EventDaoMetadataUpdated {
    const message = createBaseEventDaoMetadataUpdated();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventDaoMetadataUpdated): EventDaoMetadataUpdatedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDaoMetadataUpdatedAminoMsg): EventDaoMetadataUpdated {
    return EventDaoMetadataUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDaoMetadataUpdatedProtoMsg): EventDaoMetadataUpdated {
    return EventDaoMetadataUpdated.decode(message.value);
  },
  toProto(message: EventDaoMetadataUpdated): Uint8Array {
    return EventDaoMetadataUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventDaoMetadataUpdated): EventDaoMetadataUpdatedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventDaoMetadataUpdated",
      value: EventDaoMetadataUpdated.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventDaoElectorateUpdated(): EventDaoElectorateUpdated {
  return {
    id: BigInt(0),
    srIds: [],
    drDenom: ""
  };
}
/**
 * EventDaoElectorateUpdated is emitted when a stake DAO's sources are
 * replaced; it lists the new sources.
 * @name EventDaoElectorateUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoElectorateUpdated
 */
export const EventDaoElectorateUpdated = {
  typeUrl: "/bze.dao.EventDaoElectorateUpdated",
  is(o: any): o is EventDaoElectorateUpdated {
    return o && (o.$typeUrl === EventDaoElectorateUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.srIds) && (!o.srIds.length || typeof o.srIds[0] === "string") && typeof o.drDenom === "string");
  },
  isSDK(o: any): o is EventDaoElectorateUpdatedSDKType {
    return o && (o.$typeUrl === EventDaoElectorateUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.sr_ids) && (!o.sr_ids.length || typeof o.sr_ids[0] === "string") && typeof o.dr_denom === "string");
  },
  isAmino(o: any): o is EventDaoElectorateUpdatedAmino {
    return o && (o.$typeUrl === EventDaoElectorateUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.sr_ids) && (!o.sr_ids.length || typeof o.sr_ids[0] === "string") && typeof o.dr_denom === "string");
  },
  encode(message: EventDaoElectorateUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.srIds) {
      writer.uint32(18).string(v!);
    }
    if (message.drDenom !== "") {
      writer.uint32(26).string(message.drDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDaoElectorateUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDaoElectorateUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.srIds.push(reader.string());
          break;
        case 3:
          message.drDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDaoElectorateUpdated>): EventDaoElectorateUpdated {
    const message = createBaseEventDaoElectorateUpdated();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.srIds = object.srIds?.map(e => e) || [];
    message.drDenom = object.drDenom ?? "";
    return message;
  },
  fromAmino(object: EventDaoElectorateUpdatedAmino): EventDaoElectorateUpdated {
    const message = createBaseEventDaoElectorateUpdated();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.srIds = object.sr_ids?.map(e => e) || [];
    if (object.dr_denom !== undefined && object.dr_denom !== null) {
      message.drDenom = object.dr_denom;
    }
    return message;
  },
  toAmino(message: EventDaoElectorateUpdated): EventDaoElectorateUpdatedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.srIds) {
      obj.sr_ids = message.srIds.map(e => e);
    } else {
      obj.sr_ids = message.srIds;
    }
    obj.dr_denom = message.drDenom === "" ? undefined : message.drDenom;
    return obj;
  },
  fromAminoMsg(object: EventDaoElectorateUpdatedAminoMsg): EventDaoElectorateUpdated {
    return EventDaoElectorateUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDaoElectorateUpdatedProtoMsg): EventDaoElectorateUpdated {
    return EventDaoElectorateUpdated.decode(message.value);
  },
  toProto(message: EventDaoElectorateUpdated): Uint8Array {
    return EventDaoElectorateUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventDaoElectorateUpdated): EventDaoElectorateUpdatedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventDaoElectorateUpdated",
      value: EventDaoElectorateUpdated.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventDaoMembersUpdated(): EventDaoMembersUpdated {
  return {
    id: BigInt(0),
    added: [],
    removed: []
  };
}
/**
 * EventDaoMembersUpdated is emitted when members are added to or removed from
 * a static-list DAO.
 * @name EventDaoMembersUpdated
 * @package bze.dao
 * @see proto type: bze.dao.EventDaoMembersUpdated
 */
export const EventDaoMembersUpdated = {
  typeUrl: "/bze.dao.EventDaoMembersUpdated",
  is(o: any): o is EventDaoMembersUpdated {
    return o && (o.$typeUrl === EventDaoMembersUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.added) && (!o.added.length || typeof o.added[0] === "string") && Array.isArray(o.removed) && (!o.removed.length || typeof o.removed[0] === "string"));
  },
  isSDK(o: any): o is EventDaoMembersUpdatedSDKType {
    return o && (o.$typeUrl === EventDaoMembersUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.added) && (!o.added.length || typeof o.added[0] === "string") && Array.isArray(o.removed) && (!o.removed.length || typeof o.removed[0] === "string"));
  },
  isAmino(o: any): o is EventDaoMembersUpdatedAmino {
    return o && (o.$typeUrl === EventDaoMembersUpdated.typeUrl || typeof o.id === "bigint" && Array.isArray(o.added) && (!o.added.length || typeof o.added[0] === "string") && Array.isArray(o.removed) && (!o.removed.length || typeof o.removed[0] === "string"));
  },
  encode(message: EventDaoMembersUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.added) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.removed) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDaoMembersUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDaoMembersUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.added.push(reader.string());
          break;
        case 3:
          message.removed.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDaoMembersUpdated>): EventDaoMembersUpdated {
    const message = createBaseEventDaoMembersUpdated();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.added = object.added?.map(e => e) || [];
    message.removed = object.removed?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventDaoMembersUpdatedAmino): EventDaoMembersUpdated {
    const message = createBaseEventDaoMembersUpdated();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.added = object.added?.map(e => e) || [];
    message.removed = object.removed?.map(e => e) || [];
    return message;
  },
  toAmino(message: EventDaoMembersUpdated): EventDaoMembersUpdatedAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.added) {
      obj.added = message.added.map(e => e);
    } else {
      obj.added = message.added;
    }
    if (message.removed) {
      obj.removed = message.removed.map(e => e);
    } else {
      obj.removed = message.removed;
    }
    return obj;
  },
  fromAminoMsg(object: EventDaoMembersUpdatedAminoMsg): EventDaoMembersUpdated {
    return EventDaoMembersUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDaoMembersUpdatedProtoMsg): EventDaoMembersUpdated {
    return EventDaoMembersUpdated.decode(message.value);
  },
  toProto(message: EventDaoMembersUpdated): Uint8Array {
    return EventDaoMembersUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventDaoMembersUpdated): EventDaoMembersUpdatedProtoMsg {
    return {
      typeUrl: "/bze.dao.EventDaoMembersUpdated",
      value: EventDaoMembersUpdated.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};