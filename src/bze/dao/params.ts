//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Params defines the parameters for the module. Each parameter is added by the
 * change that first uses it; field numbers follow the module's final layout.
 * @name Params
 * @package bze.dao
 * @see proto type: bze.dao.Params
 */
export interface Params {
  /**
   * max_sr_per_dao caps the staking rewards in a stake DAO's electorate.
   */
  maxSrPerDao: bigint;
  /**
   * max_static_members caps the member list of a static-list DAO.
   */
  maxStaticMembers: bigint;
  /**
   * max_open_proposals caps the proposals a DAO can have in voting at once.
   */
  maxOpenProposals: bigint;
  /**
   * max_msgs_per_proposal caps the messages of a proposal or a MsgAdminExecute.
   */
  maxMsgsPerProposal: bigint;
  /**
   * max_proposal_bytes caps the total marshalled size of those messages.
   */
  maxProposalBytes: bigint;
  /**
   * max_title_len is the longest proposal title, in bytes.
   */
  maxTitleLen: bigint;
  /**
   * max_summary_len is the longest proposal summary, in bytes.
   */
  maxSummaryLen: bigint;
  /**
   * min_voting_period is the shortest voting (and expedited) period a DAO may configure.
   */
  minVotingPeriod: Duration;
  /**
   * max_voting_period is the longest voting (and expedited) period a DAO may configure.
   */
  maxVotingPeriod: Duration;
  /**
   * execution_window is how long after voting_end a failed execution can be
   * retried; after it the proposal expires.
   */
  executionWindow: Duration;
  /**
   * cleanup_batch_size caps the ballots one MsgCleanupProposal deletes.
   */
  cleanupBatchSize: bigint;
  /**
   * dao_creation_fee is charged to the creator of a DAO; a zero amount makes creation free.
   */
  daoCreationFee: Coin;
  /**
   * dao_creation_fee_destination is "burner" or "community_pool".
   */
  daoCreationFeeDestination: string;
  /**
   * min_electorate_lock_days is the shortest unstaking lock (days) a staking
   * reward or Denom Reward needs to join a stake DAO's electorate.
   */
  minElectorateLockDays: number;
  /**
   * min_expedite_delay is how long after submission an expedited proposal of a
   * stake DAO that meets the expedite bars can settle early, so voters get time
   * to react; 0 allows it at once. Static-list DAOs are exempt: their expedited
   * proposals settle as soon as the bars are met. A proposal at its voting end
   * settles normally whatever the delay.
   */
  minExpediteDelay: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.dao.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module. Each parameter is added by the
 * change that first uses it; field numbers follow the module's final layout.
 * @name ParamsAmino
 * @package bze.dao
 * @see proto type: bze.dao.Params
 */
export interface ParamsAmino {
  /**
   * max_sr_per_dao caps the staking rewards in a stake DAO's electorate.
   */
  max_sr_per_dao?: string;
  /**
   * max_static_members caps the member list of a static-list DAO.
   */
  max_static_members?: string;
  /**
   * max_open_proposals caps the proposals a DAO can have in voting at once.
   */
  max_open_proposals?: string;
  /**
   * max_msgs_per_proposal caps the messages of a proposal or a MsgAdminExecute.
   */
  max_msgs_per_proposal?: string;
  /**
   * max_proposal_bytes caps the total marshalled size of those messages.
   */
  max_proposal_bytes?: string;
  /**
   * max_title_len is the longest proposal title, in bytes.
   */
  max_title_len?: string;
  /**
   * max_summary_len is the longest proposal summary, in bytes.
   */
  max_summary_len?: string;
  /**
   * min_voting_period is the shortest voting (and expedited) period a DAO may configure.
   */
  min_voting_period: DurationAmino;
  /**
   * max_voting_period is the longest voting (and expedited) period a DAO may configure.
   */
  max_voting_period: DurationAmino;
  /**
   * execution_window is how long after voting_end a failed execution can be
   * retried; after it the proposal expires.
   */
  execution_window: DurationAmino;
  /**
   * cleanup_batch_size caps the ballots one MsgCleanupProposal deletes.
   */
  cleanup_batch_size?: string;
  /**
   * dao_creation_fee is charged to the creator of a DAO; a zero amount makes creation free.
   */
  dao_creation_fee: CoinAmino;
  /**
   * dao_creation_fee_destination is "burner" or "community_pool".
   */
  dao_creation_fee_destination?: string;
  /**
   * min_electorate_lock_days is the shortest unstaking lock (days) a staking
   * reward or Denom Reward needs to join a stake DAO's electorate.
   */
  min_electorate_lock_days?: number;
  /**
   * min_expedite_delay is how long after submission an expedited proposal of a
   * stake DAO that meets the expedite bars can settle early, so voters get time
   * to react; 0 allows it at once. Static-list DAOs are exempt: their expedited
   * proposals settle as soon as the bars are met. A proposal at its voting end
   * settles normally whatever the delay.
   */
  min_expedite_delay: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "bze/x/dao/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module. Each parameter is added by the
 * change that first uses it; field numbers follow the module's final layout.
 * @name ParamsSDKType
 * @package bze.dao
 * @see proto type: bze.dao.Params
 */
export interface ParamsSDKType {
  max_sr_per_dao: bigint;
  max_static_members: bigint;
  max_open_proposals: bigint;
  max_msgs_per_proposal: bigint;
  max_proposal_bytes: bigint;
  max_title_len: bigint;
  max_summary_len: bigint;
  min_voting_period: DurationSDKType;
  max_voting_period: DurationSDKType;
  execution_window: DurationSDKType;
  cleanup_batch_size: bigint;
  dao_creation_fee: CoinSDKType;
  dao_creation_fee_destination: string;
  min_electorate_lock_days: number;
  min_expedite_delay: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    maxSrPerDao: BigInt(0),
    maxStaticMembers: BigInt(0),
    maxOpenProposals: BigInt(0),
    maxMsgsPerProposal: BigInt(0),
    maxProposalBytes: BigInt(0),
    maxTitleLen: BigInt(0),
    maxSummaryLen: BigInt(0),
    minVotingPeriod: Duration.fromPartial({}),
    maxVotingPeriod: Duration.fromPartial({}),
    executionWindow: Duration.fromPartial({}),
    cleanupBatchSize: BigInt(0),
    daoCreationFee: Coin.fromPartial({}),
    daoCreationFeeDestination: "",
    minElectorateLockDays: 0,
    minExpediteDelay: Duration.fromPartial({})
  };
}
/**
 * Params defines the parameters for the module. Each parameter is added by the
 * change that first uses it; field numbers follow the module's final layout.
 * @name Params
 * @package bze.dao
 * @see proto type: bze.dao.Params
 */
export const Params = {
  typeUrl: "/bze.dao.Params",
  aminoType: "bze/x/dao/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxSrPerDao === "bigint" && typeof o.maxStaticMembers === "bigint" && typeof o.maxOpenProposals === "bigint" && typeof o.maxMsgsPerProposal === "bigint" && typeof o.maxProposalBytes === "bigint" && typeof o.maxTitleLen === "bigint" && typeof o.maxSummaryLen === "bigint" && Duration.is(o.minVotingPeriod) && Duration.is(o.maxVotingPeriod) && Duration.is(o.executionWindow) && typeof o.cleanupBatchSize === "bigint" && Coin.is(o.daoCreationFee) && typeof o.daoCreationFeeDestination === "string" && typeof o.minElectorateLockDays === "number" && Duration.is(o.minExpediteDelay));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_sr_per_dao === "bigint" && typeof o.max_static_members === "bigint" && typeof o.max_open_proposals === "bigint" && typeof o.max_msgs_per_proposal === "bigint" && typeof o.max_proposal_bytes === "bigint" && typeof o.max_title_len === "bigint" && typeof o.max_summary_len === "bigint" && Duration.isSDK(o.min_voting_period) && Duration.isSDK(o.max_voting_period) && Duration.isSDK(o.execution_window) && typeof o.cleanup_batch_size === "bigint" && Coin.isSDK(o.dao_creation_fee) && typeof o.dao_creation_fee_destination === "string" && typeof o.min_electorate_lock_days === "number" && Duration.isSDK(o.min_expedite_delay));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_sr_per_dao === "bigint" && typeof o.max_static_members === "bigint" && typeof o.max_open_proposals === "bigint" && typeof o.max_msgs_per_proposal === "bigint" && typeof o.max_proposal_bytes === "bigint" && typeof o.max_title_len === "bigint" && typeof o.max_summary_len === "bigint" && Duration.isAmino(o.min_voting_period) && Duration.isAmino(o.max_voting_period) && Duration.isAmino(o.execution_window) && typeof o.cleanup_batch_size === "bigint" && Coin.isAmino(o.dao_creation_fee) && typeof o.dao_creation_fee_destination === "string" && typeof o.min_electorate_lock_days === "number" && Duration.isAmino(o.min_expedite_delay));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxSrPerDao !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxSrPerDao);
    }
    if (message.maxStaticMembers !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxStaticMembers);
    }
    if (message.maxOpenProposals !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxOpenProposals);
    }
    if (message.maxMsgsPerProposal !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxMsgsPerProposal);
    }
    if (message.maxProposalBytes !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxProposalBytes);
    }
    if (message.maxTitleLen !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxTitleLen);
    }
    if (message.maxSummaryLen !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxSummaryLen);
    }
    if (message.minVotingPeriod !== undefined) {
      Duration.encode(message.minVotingPeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxVotingPeriod !== undefined) {
      Duration.encode(message.maxVotingPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.executionWindow !== undefined) {
      Duration.encode(message.executionWindow, writer.uint32(82).fork()).ldelim();
    }
    if (message.cleanupBatchSize !== BigInt(0)) {
      writer.uint32(88).uint64(message.cleanupBatchSize);
    }
    if (message.daoCreationFee !== undefined) {
      Coin.encode(message.daoCreationFee, writer.uint32(98).fork()).ldelim();
    }
    if (message.daoCreationFeeDestination !== "") {
      writer.uint32(106).string(message.daoCreationFeeDestination);
    }
    if (message.minElectorateLockDays !== 0) {
      writer.uint32(112).uint32(message.minElectorateLockDays);
    }
    if (message.minExpediteDelay !== undefined) {
      Duration.encode(message.minExpediteDelay, writer.uint32(122).fork()).ldelim();
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
          message.maxSrPerDao = reader.uint64();
          break;
        case 2:
          message.maxStaticMembers = reader.uint64();
          break;
        case 3:
          message.maxOpenProposals = reader.uint64();
          break;
        case 4:
          message.maxMsgsPerProposal = reader.uint64();
          break;
        case 5:
          message.maxProposalBytes = reader.uint64();
          break;
        case 6:
          message.maxTitleLen = reader.uint64();
          break;
        case 7:
          message.maxSummaryLen = reader.uint64();
          break;
        case 8:
          message.minVotingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.maxVotingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.executionWindow = Duration.decode(reader, reader.uint32());
          break;
        case 11:
          message.cleanupBatchSize = reader.uint64();
          break;
        case 12:
          message.daoCreationFee = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.daoCreationFeeDestination = reader.string();
          break;
        case 14:
          message.minElectorateLockDays = reader.uint32();
          break;
        case 15:
          message.minExpediteDelay = Duration.decode(reader, reader.uint32());
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
    message.maxSrPerDao = object.maxSrPerDao !== undefined && object.maxSrPerDao !== null ? BigInt(object.maxSrPerDao.toString()) : BigInt(0);
    message.maxStaticMembers = object.maxStaticMembers !== undefined && object.maxStaticMembers !== null ? BigInt(object.maxStaticMembers.toString()) : BigInt(0);
    message.maxOpenProposals = object.maxOpenProposals !== undefined && object.maxOpenProposals !== null ? BigInt(object.maxOpenProposals.toString()) : BigInt(0);
    message.maxMsgsPerProposal = object.maxMsgsPerProposal !== undefined && object.maxMsgsPerProposal !== null ? BigInt(object.maxMsgsPerProposal.toString()) : BigInt(0);
    message.maxProposalBytes = object.maxProposalBytes !== undefined && object.maxProposalBytes !== null ? BigInt(object.maxProposalBytes.toString()) : BigInt(0);
    message.maxTitleLen = object.maxTitleLen !== undefined && object.maxTitleLen !== null ? BigInt(object.maxTitleLen.toString()) : BigInt(0);
    message.maxSummaryLen = object.maxSummaryLen !== undefined && object.maxSummaryLen !== null ? BigInt(object.maxSummaryLen.toString()) : BigInt(0);
    message.minVotingPeriod = object.minVotingPeriod !== undefined && object.minVotingPeriod !== null ? Duration.fromPartial(object.minVotingPeriod) : undefined;
    message.maxVotingPeriod = object.maxVotingPeriod !== undefined && object.maxVotingPeriod !== null ? Duration.fromPartial(object.maxVotingPeriod) : undefined;
    message.executionWindow = object.executionWindow !== undefined && object.executionWindow !== null ? Duration.fromPartial(object.executionWindow) : undefined;
    message.cleanupBatchSize = object.cleanupBatchSize !== undefined && object.cleanupBatchSize !== null ? BigInt(object.cleanupBatchSize.toString()) : BigInt(0);
    message.daoCreationFee = object.daoCreationFee !== undefined && object.daoCreationFee !== null ? Coin.fromPartial(object.daoCreationFee) : undefined;
    message.daoCreationFeeDestination = object.daoCreationFeeDestination ?? "";
    message.minElectorateLockDays = object.minElectorateLockDays ?? 0;
    message.minExpediteDelay = object.minExpediteDelay !== undefined && object.minExpediteDelay !== null ? Duration.fromPartial(object.minExpediteDelay) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_sr_per_dao !== undefined && object.max_sr_per_dao !== null) {
      message.maxSrPerDao = BigInt(object.max_sr_per_dao);
    }
    if (object.max_static_members !== undefined && object.max_static_members !== null) {
      message.maxStaticMembers = BigInt(object.max_static_members);
    }
    if (object.max_open_proposals !== undefined && object.max_open_proposals !== null) {
      message.maxOpenProposals = BigInt(object.max_open_proposals);
    }
    if (object.max_msgs_per_proposal !== undefined && object.max_msgs_per_proposal !== null) {
      message.maxMsgsPerProposal = BigInt(object.max_msgs_per_proposal);
    }
    if (object.max_proposal_bytes !== undefined && object.max_proposal_bytes !== null) {
      message.maxProposalBytes = BigInt(object.max_proposal_bytes);
    }
    if (object.max_title_len !== undefined && object.max_title_len !== null) {
      message.maxTitleLen = BigInt(object.max_title_len);
    }
    if (object.max_summary_len !== undefined && object.max_summary_len !== null) {
      message.maxSummaryLen = BigInt(object.max_summary_len);
    }
    if (object.min_voting_period !== undefined && object.min_voting_period !== null) {
      message.minVotingPeriod = Duration.fromAmino(object.min_voting_period);
    }
    if (object.max_voting_period !== undefined && object.max_voting_period !== null) {
      message.maxVotingPeriod = Duration.fromAmino(object.max_voting_period);
    }
    if (object.execution_window !== undefined && object.execution_window !== null) {
      message.executionWindow = Duration.fromAmino(object.execution_window);
    }
    if (object.cleanup_batch_size !== undefined && object.cleanup_batch_size !== null) {
      message.cleanupBatchSize = BigInt(object.cleanup_batch_size);
    }
    if (object.dao_creation_fee !== undefined && object.dao_creation_fee !== null) {
      message.daoCreationFee = Coin.fromAmino(object.dao_creation_fee);
    }
    if (object.dao_creation_fee_destination !== undefined && object.dao_creation_fee_destination !== null) {
      message.daoCreationFeeDestination = object.dao_creation_fee_destination;
    }
    if (object.min_electorate_lock_days !== undefined && object.min_electorate_lock_days !== null) {
      message.minElectorateLockDays = object.min_electorate_lock_days;
    }
    if (object.min_expedite_delay !== undefined && object.min_expedite_delay !== null) {
      message.minExpediteDelay = Duration.fromAmino(object.min_expedite_delay);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_sr_per_dao = message.maxSrPerDao !== BigInt(0) ? message.maxSrPerDao?.toString() : undefined;
    obj.max_static_members = message.maxStaticMembers !== BigInt(0) ? message.maxStaticMembers?.toString() : undefined;
    obj.max_open_proposals = message.maxOpenProposals !== BigInt(0) ? message.maxOpenProposals?.toString() : undefined;
    obj.max_msgs_per_proposal = message.maxMsgsPerProposal !== BigInt(0) ? message.maxMsgsPerProposal?.toString() : undefined;
    obj.max_proposal_bytes = message.maxProposalBytes !== BigInt(0) ? message.maxProposalBytes?.toString() : undefined;
    obj.max_title_len = message.maxTitleLen !== BigInt(0) ? message.maxTitleLen?.toString() : undefined;
    obj.max_summary_len = message.maxSummaryLen !== BigInt(0) ? message.maxSummaryLen?.toString() : undefined;
    obj.min_voting_period = message.minVotingPeriod ? Duration.toAmino(message.minVotingPeriod) : Duration.toAmino(Duration.fromPartial({}));
    obj.max_voting_period = message.maxVotingPeriod ? Duration.toAmino(message.maxVotingPeriod) : Duration.toAmino(Duration.fromPartial({}));
    obj.execution_window = message.executionWindow ? Duration.toAmino(message.executionWindow) : Duration.toAmino(Duration.fromPartial({}));
    obj.cleanup_batch_size = message.cleanupBatchSize !== BigInt(0) ? message.cleanupBatchSize?.toString() : undefined;
    obj.dao_creation_fee = message.daoCreationFee ? Coin.toAmino(message.daoCreationFee) : Coin.toAmino(Coin.fromPartial({}));
    obj.dao_creation_fee_destination = message.daoCreationFeeDestination === "" ? undefined : message.daoCreationFeeDestination;
    obj.min_electorate_lock_days = message.minElectorateLockDays === 0 ? undefined : message.minElectorateLockDays;
    obj.min_expedite_delay = message.minExpediteDelay ? Duration.toAmino(message.minExpediteDelay) : Duration.toAmino(Duration.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/dao/Params",
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
      typeUrl: "/bze.dao.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};