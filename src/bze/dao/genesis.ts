//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Dao, DaoAmino, DaoSDKType, Proposal, ProposalAmino, ProposalSDKType, Ballot, BallotAmino, BallotSDKType, JoinRecord, JoinRecordAmino, JoinRecordSDKType, MemberRecord, MemberRecordAmino, MemberRecordSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * GenesisState defines the dao module's genesis state.
 * @name GenesisState
 * @package bze.dao
 * @see proto type: bze.dao.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * daos are all the DAO records, by id. The address and admin indexes are
   * rebuilt from them on import.
   */
  daos: Dao[];
  /**
   * dao_count is the last dao id handed out; every DAO id is at most it.
   */
  daoCount: bigint;
  /**
   * proposal_count is the last proposal id handed out.
   */
  proposalCount: bigint;
  /**
   * proposals are all the proposal records, by id. The open markers and the
   * DAO proposal index are rebuilt from them on import.
   */
  proposals: Proposal[];
  /**
   * ballots are all the ballots, by proposal id and voter.
   */
  ballots: Ballot[];
  /**
   * vote_index lists every counted stake share of a ballot. Entries of
   * proposals that left voting are leftovers the next Exit of the address
   * prunes.
   */
  voteIndex: VoteIndexEntry[];
  /**
   * join_records are the heights addresses joined pinned sources at.
   */
  joinRecords: JoinRecord[];
  /**
   * pins count the DAOs and the proposals in voting that use each source.
   * Import checks them against the DAOs and proposals (I4).
   */
  pins: PinCount[];
  /**
   * member_records are the heights members were added to static-list DAOs at.
   */
  memberRecords: MemberRecord[];
  /**
   * admin_change_count is the last admin change sequence handed out; every
   * DAO's admin_seq and pending_admin_seq is at most it.
   */
  adminChangeCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bze.dao.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the dao module's genesis state.
 * @name GenesisStateAmino
 * @package bze.dao
 * @see proto type: bze.dao.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * daos are all the DAO records, by id. The address and admin indexes are
   * rebuilt from them on import.
   */
  daos?: DaoAmino[];
  /**
   * dao_count is the last dao id handed out; every DAO id is at most it.
   */
  dao_count?: string;
  /**
   * proposal_count is the last proposal id handed out.
   */
  proposal_count?: string;
  /**
   * proposals are all the proposal records, by id. The open markers and the
   * DAO proposal index are rebuilt from them on import.
   */
  proposals?: ProposalAmino[];
  /**
   * ballots are all the ballots, by proposal id and voter.
   */
  ballots?: BallotAmino[];
  /**
   * vote_index lists every counted stake share of a ballot. Entries of
   * proposals that left voting are leftovers the next Exit of the address
   * prunes.
   */
  vote_index?: VoteIndexEntryAmino[];
  /**
   * join_records are the heights addresses joined pinned sources at.
   */
  join_records?: JoinRecordAmino[];
  /**
   * pins count the DAOs and the proposals in voting that use each source.
   * Import checks them against the DAOs and proposals (I4).
   */
  pins?: PinCountAmino[];
  /**
   * member_records are the heights members were added to static-list DAOs at.
   */
  member_records?: MemberRecordAmino[];
  /**
   * admin_change_count is the last admin change sequence handed out; every
   * DAO's admin_seq and pending_admin_seq is at most it.
   */
  admin_change_count?: string;
}
export interface GenesisStateAminoMsg {
  type: "/bze.dao.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the dao module's genesis state.
 * @name GenesisStateSDKType
 * @package bze.dao
 * @see proto type: bze.dao.GenesisState
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  daos: DaoSDKType[];
  dao_count: bigint;
  proposal_count: bigint;
  proposals: ProposalSDKType[];
  ballots: BallotSDKType[];
  vote_index: VoteIndexEntrySDKType[];
  join_records: JoinRecordSDKType[];
  pins: PinCountSDKType[];
  member_records: MemberRecordSDKType[];
  admin_change_count: bigint;
}
/**
 * VoteIndexEntry says the address's ballot on the proposal counts a share of
 * the source.
 * @name VoteIndexEntry
 * @package bze.dao
 * @see proto type: bze.dao.VoteIndexEntry
 */
export interface VoteIndexEntry {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source: string;
  address: string;
  proposalId: bigint;
}
export interface VoteIndexEntryProtoMsg {
  typeUrl: "/bze.dao.VoteIndexEntry";
  value: Uint8Array;
}
/**
 * VoteIndexEntry says the address's ballot on the proposal counts a share of
 * the source.
 * @name VoteIndexEntryAmino
 * @package bze.dao
 * @see proto type: bze.dao.VoteIndexEntry
 */
export interface VoteIndexEntryAmino {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source?: string;
  address?: string;
  proposal_id?: string;
}
export interface VoteIndexEntryAminoMsg {
  type: "/bze.dao.VoteIndexEntry";
  value: VoteIndexEntryAmino;
}
/**
 * VoteIndexEntry says the address's ballot on the proposal counts a share of
 * the source.
 * @name VoteIndexEntrySDKType
 * @package bze.dao
 * @see proto type: bze.dao.VoteIndexEntry
 */
export interface VoteIndexEntrySDKType {
  source: string;
  address: string;
  proposal_id: bigint;
}
/**
 * PinCount is how many DAOs and proposals in voting use a source.
 * @name PinCount
 * @package bze.dao
 * @see proto type: bze.dao.PinCount
 */
export interface PinCount {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source: string;
  count: bigint;
}
export interface PinCountProtoMsg {
  typeUrl: "/bze.dao.PinCount";
  value: Uint8Array;
}
/**
 * PinCount is how many DAOs and proposals in voting use a source.
 * @name PinCountAmino
 * @package bze.dao
 * @see proto type: bze.dao.PinCount
 */
export interface PinCountAmino {
  /**
   * source is sr/{reward_id} or dr/{staking_denom}.
   */
  source?: string;
  count?: string;
}
export interface PinCountAminoMsg {
  type: "/bze.dao.PinCount";
  value: PinCountAmino;
}
/**
 * PinCount is how many DAOs and proposals in voting use a source.
 * @name PinCountSDKType
 * @package bze.dao
 * @see proto type: bze.dao.PinCount
 */
export interface PinCountSDKType {
  source: string;
  count: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    daos: [],
    daoCount: BigInt(0),
    proposalCount: BigInt(0),
    proposals: [],
    ballots: [],
    voteIndex: [],
    joinRecords: [],
    pins: [],
    memberRecords: [],
    adminChangeCount: BigInt(0)
  };
}
/**
 * GenesisState defines the dao module's genesis state.
 * @name GenesisState
 * @package bze.dao
 * @see proto type: bze.dao.GenesisState
 */
export const GenesisState = {
  typeUrl: "/bze.dao.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.daos) && (!o.daos.length || Dao.is(o.daos[0])) && typeof o.daoCount === "bigint" && typeof o.proposalCount === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])) && Array.isArray(o.ballots) && (!o.ballots.length || Ballot.is(o.ballots[0])) && Array.isArray(o.voteIndex) && (!o.voteIndex.length || VoteIndexEntry.is(o.voteIndex[0])) && Array.isArray(o.joinRecords) && (!o.joinRecords.length || JoinRecord.is(o.joinRecords[0])) && Array.isArray(o.pins) && (!o.pins.length || PinCount.is(o.pins[0])) && Array.isArray(o.memberRecords) && (!o.memberRecords.length || MemberRecord.is(o.memberRecords[0])) && typeof o.adminChangeCount === "bigint");
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.daos) && (!o.daos.length || Dao.isSDK(o.daos[0])) && typeof o.dao_count === "bigint" && typeof o.proposal_count === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])) && Array.isArray(o.ballots) && (!o.ballots.length || Ballot.isSDK(o.ballots[0])) && Array.isArray(o.vote_index) && (!o.vote_index.length || VoteIndexEntry.isSDK(o.vote_index[0])) && Array.isArray(o.join_records) && (!o.join_records.length || JoinRecord.isSDK(o.join_records[0])) && Array.isArray(o.pins) && (!o.pins.length || PinCount.isSDK(o.pins[0])) && Array.isArray(o.member_records) && (!o.member_records.length || MemberRecord.isSDK(o.member_records[0])) && typeof o.admin_change_count === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.daos) && (!o.daos.length || Dao.isAmino(o.daos[0])) && typeof o.dao_count === "bigint" && typeof o.proposal_count === "bigint" && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])) && Array.isArray(o.ballots) && (!o.ballots.length || Ballot.isAmino(o.ballots[0])) && Array.isArray(o.vote_index) && (!o.vote_index.length || VoteIndexEntry.isAmino(o.vote_index[0])) && Array.isArray(o.join_records) && (!o.join_records.length || JoinRecord.isAmino(o.join_records[0])) && Array.isArray(o.pins) && (!o.pins.length || PinCount.isAmino(o.pins[0])) && Array.isArray(o.member_records) && (!o.member_records.length || MemberRecord.isAmino(o.member_records[0])) && typeof o.admin_change_count === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.daos) {
      Dao.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.daoCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.daoCount);
    }
    if (message.proposalCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.proposalCount);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.ballots) {
      Ballot.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.voteIndex) {
      VoteIndexEntry.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.joinRecords) {
      JoinRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.pins) {
      PinCount.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.memberRecords) {
      MemberRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.adminChangeCount !== BigInt(0)) {
      writer.uint32(88).uint64(message.adminChangeCount);
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
          message.daos.push(Dao.decode(reader, reader.uint32()));
          break;
        case 3:
          message.daoCount = reader.uint64();
          break;
        case 4:
          message.proposalCount = reader.uint64();
          break;
        case 5:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 6:
          message.ballots.push(Ballot.decode(reader, reader.uint32()));
          break;
        case 7:
          message.voteIndex.push(VoteIndexEntry.decode(reader, reader.uint32()));
          break;
        case 8:
          message.joinRecords.push(JoinRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.pins.push(PinCount.decode(reader, reader.uint32()));
          break;
        case 10:
          message.memberRecords.push(MemberRecord.decode(reader, reader.uint32()));
          break;
        case 11:
          message.adminChangeCount = reader.uint64();
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
    message.daos = object.daos?.map(e => Dao.fromPartial(e)) || [];
    message.daoCount = object.daoCount !== undefined && object.daoCount !== null ? BigInt(object.daoCount.toString()) : BigInt(0);
    message.proposalCount = object.proposalCount !== undefined && object.proposalCount !== null ? BigInt(object.proposalCount.toString()) : BigInt(0);
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.ballots = object.ballots?.map(e => Ballot.fromPartial(e)) || [];
    message.voteIndex = object.voteIndex?.map(e => VoteIndexEntry.fromPartial(e)) || [];
    message.joinRecords = object.joinRecords?.map(e => JoinRecord.fromPartial(e)) || [];
    message.pins = object.pins?.map(e => PinCount.fromPartial(e)) || [];
    message.memberRecords = object.memberRecords?.map(e => MemberRecord.fromPartial(e)) || [];
    message.adminChangeCount = object.adminChangeCount !== undefined && object.adminChangeCount !== null ? BigInt(object.adminChangeCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.daos = object.daos?.map(e => Dao.fromAmino(e)) || [];
    if (object.dao_count !== undefined && object.dao_count !== null) {
      message.daoCount = BigInt(object.dao_count);
    }
    if (object.proposal_count !== undefined && object.proposal_count !== null) {
      message.proposalCount = BigInt(object.proposal_count);
    }
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    message.ballots = object.ballots?.map(e => Ballot.fromAmino(e)) || [];
    message.voteIndex = object.vote_index?.map(e => VoteIndexEntry.fromAmino(e)) || [];
    message.joinRecords = object.join_records?.map(e => JoinRecord.fromAmino(e)) || [];
    message.pins = object.pins?.map(e => PinCount.fromAmino(e)) || [];
    message.memberRecords = object.member_records?.map(e => MemberRecord.fromAmino(e)) || [];
    if (object.admin_change_count !== undefined && object.admin_change_count !== null) {
      message.adminChangeCount = BigInt(object.admin_change_count);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.daos) {
      obj.daos = message.daos.map(e => e ? Dao.toAmino(e) : undefined);
    } else {
      obj.daos = message.daos;
    }
    obj.dao_count = message.daoCount !== BigInt(0) ? message.daoCount?.toString() : undefined;
    obj.proposal_count = message.proposalCount !== BigInt(0) ? message.proposalCount?.toString() : undefined;
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    if (message.ballots) {
      obj.ballots = message.ballots.map(e => e ? Ballot.toAmino(e) : undefined);
    } else {
      obj.ballots = message.ballots;
    }
    if (message.voteIndex) {
      obj.vote_index = message.voteIndex.map(e => e ? VoteIndexEntry.toAmino(e) : undefined);
    } else {
      obj.vote_index = message.voteIndex;
    }
    if (message.joinRecords) {
      obj.join_records = message.joinRecords.map(e => e ? JoinRecord.toAmino(e) : undefined);
    } else {
      obj.join_records = message.joinRecords;
    }
    if (message.pins) {
      obj.pins = message.pins.map(e => e ? PinCount.toAmino(e) : undefined);
    } else {
      obj.pins = message.pins;
    }
    if (message.memberRecords) {
      obj.member_records = message.memberRecords.map(e => e ? MemberRecord.toAmino(e) : undefined);
    } else {
      obj.member_records = message.memberRecords;
    }
    obj.admin_change_count = message.adminChangeCount !== BigInt(0) ? message.adminChangeCount?.toString() : undefined;
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
      typeUrl: "/bze.dao.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    Dao.registerTypeUrl();
    Proposal.registerTypeUrl();
    Ballot.registerTypeUrl();
    VoteIndexEntry.registerTypeUrl();
    JoinRecord.registerTypeUrl();
    PinCount.registerTypeUrl();
    MemberRecord.registerTypeUrl();
  }
};
function createBaseVoteIndexEntry(): VoteIndexEntry {
  return {
    source: "",
    address: "",
    proposalId: BigInt(0)
  };
}
/**
 * VoteIndexEntry says the address's ballot on the proposal counts a share of
 * the source.
 * @name VoteIndexEntry
 * @package bze.dao
 * @see proto type: bze.dao.VoteIndexEntry
 */
export const VoteIndexEntry = {
  typeUrl: "/bze.dao.VoteIndexEntry",
  is(o: any): o is VoteIndexEntry {
    return o && (o.$typeUrl === VoteIndexEntry.typeUrl || typeof o.source === "string" && typeof o.address === "string" && typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is VoteIndexEntrySDKType {
    return o && (o.$typeUrl === VoteIndexEntry.typeUrl || typeof o.source === "string" && typeof o.address === "string" && typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is VoteIndexEntryAmino {
    return o && (o.$typeUrl === VoteIndexEntry.typeUrl || typeof o.source === "string" && typeof o.address === "string" && typeof o.proposal_id === "bigint");
  },
  encode(message: VoteIndexEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(24).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteIndexEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteIndexEntry();
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
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VoteIndexEntry>): VoteIndexEntry {
    const message = createBaseVoteIndexEntry();
    message.source = object.source ?? "";
    message.address = object.address ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VoteIndexEntryAmino): VoteIndexEntry {
    const message = createBaseVoteIndexEntry();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: VoteIndexEntry): VoteIndexEntryAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.address = message.address === "" ? undefined : message.address;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteIndexEntryAminoMsg): VoteIndexEntry {
    return VoteIndexEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteIndexEntryProtoMsg): VoteIndexEntry {
    return VoteIndexEntry.decode(message.value);
  },
  toProto(message: VoteIndexEntry): Uint8Array {
    return VoteIndexEntry.encode(message).finish();
  },
  toProtoMsg(message: VoteIndexEntry): VoteIndexEntryProtoMsg {
    return {
      typeUrl: "/bze.dao.VoteIndexEntry",
      value: VoteIndexEntry.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePinCount(): PinCount {
  return {
    source: "",
    count: BigInt(0)
  };
}
/**
 * PinCount is how many DAOs and proposals in voting use a source.
 * @name PinCount
 * @package bze.dao
 * @see proto type: bze.dao.PinCount
 */
export const PinCount = {
  typeUrl: "/bze.dao.PinCount",
  is(o: any): o is PinCount {
    return o && (o.$typeUrl === PinCount.typeUrl || typeof o.source === "string" && typeof o.count === "bigint");
  },
  isSDK(o: any): o is PinCountSDKType {
    return o && (o.$typeUrl === PinCount.typeUrl || typeof o.source === "string" && typeof o.count === "bigint");
  },
  isAmino(o: any): o is PinCountAmino {
    return o && (o.$typeUrl === PinCount.typeUrl || typeof o.source === "string" && typeof o.count === "bigint");
  },
  encode(message: PinCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PinCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PinCount>): PinCount {
    const message = createBasePinCount();
    message.source = object.source ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PinCountAmino): PinCount {
    const message = createBasePinCount();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: PinCount): PinCountAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PinCountAminoMsg): PinCount {
    return PinCount.fromAmino(object.value);
  },
  fromProtoMsg(message: PinCountProtoMsg): PinCount {
    return PinCount.decode(message.value);
  },
  toProto(message: PinCount): Uint8Array {
    return PinCount.encode(message).finish();
  },
  toProtoMsg(message: PinCount): PinCountProtoMsg {
    return {
      typeUrl: "/bze.dao.PinCount",
      value: PinCount.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};