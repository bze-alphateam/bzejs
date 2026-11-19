//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDaoRequest, QueryDaoResponseSDKType, QueryDaoByAddressRequest, QueryDaoByAddressResponseSDKType, QueryDaoControllerRequest, QueryDaoControllerResponseSDKType, QueryProposalRequest, QueryProposalResponseSDKType, QueryBallotRequest, QueryBallotResponseSDKType, QueryVotingPowerRequest, QueryVotingPowerResponseSDKType, QueryJoinRecordRequest, QueryJoinRecordResponseSDKType, QueryDaosRequest, QueryDaosResponseSDKType, QueryDaosByAdminRequest, QueryDaosByAdminResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType, QueryBallotsRequest, QueryBallotsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.dao = this.dao.bind(this);
    this.daoByAddress = this.daoByAddress.bind(this);
    this.daoController = this.daoController.bind(this);
    this.proposal = this.proposal.bind(this);
    this.ballot = this.ballot.bind(this);
    this.votingPower = this.votingPower.bind(this);
    this.joinRecord = this.joinRecord.bind(this);
    this.daos = this.daos.bind(this);
    this.daosByAdmin = this.daosByAdmin.bind(this);
    this.proposals = this.proposals.bind(this);
    this.ballots = this.ballots.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bze/dao/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Dao returns a DAO by its id. */
  async dao(params: QueryDaoRequest): Promise<QueryDaoResponseSDKType> {
    const endpoint = `bze/dao/dao/${params.id}`;
    return await this.req.get<QueryDaoResponseSDKType>(endpoint);
  }
  /* DaoByAddress returns the DAO that owns the given account. */
  async daoByAddress(params: QueryDaoByAddressRequest): Promise<QueryDaoByAddressResponseSDKType> {
    const endpoint = `bze/dao/dao_by_address/${params.address}`;
    return await this.req.get<QueryDaoByAddressResponseSDKType>(endpoint);
  }
  /* DaoController follows a DAO's admin chain to who ultimately controls it. */
  async daoController(params: QueryDaoControllerRequest): Promise<QueryDaoControllerResponseSDKType> {
    const endpoint = `bze/dao/dao_controller/${params.daoId}`;
    return await this.req.get<QueryDaoControllerResponseSDKType>(endpoint);
  }
  /* Proposal returns a proposal with its live status at the current block. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `bze/dao/proposal/${params.id}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  }
  /* Ballot returns a voter's ballot on a proposal. */
  async ballot(params: QueryBallotRequest): Promise<QueryBallotResponseSDKType> {
    const endpoint = `bze/dao/ballot/${params.proposalId}/${params.voter}`;
    return await this.req.get<QueryBallotResponseSDKType>(endpoint);
  }
  /* VotingPower returns an address's weight in a DAO now and on each of the
   DAO's proposals in voting. */
  async votingPower(params: QueryVotingPowerRequest): Promise<QueryVotingPowerResponseSDKType> {
    const endpoint = `bze/dao/voting_power/${params.daoId}/${params.address}`;
    return await this.req.get<QueryVotingPowerResponseSDKType>(endpoint);
  }
  /* JoinRecord returns the height an address joined a pinned source at. The
   source is in the query string: it contains a slash. */
  async joinRecord(params: QueryJoinRecordRequest): Promise<QueryJoinRecordResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.source !== "undefined") {
      options.params.source = params.source;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `bze/dao/join_record`;
    return await this.req.get<QueryJoinRecordResponseSDKType>(endpoint, options);
  }
  /* Daos lists every DAO, by id. */
  async daos(params: QueryDaosRequest = {
    pagination: undefined
  }): Promise<QueryDaosResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/dao/daos`;
    return await this.req.get<QueryDaosResponseSDKType>(endpoint, options);
  }
  /* DaosByAdmin lists the DAOs an address is the admin of, by id. */
  async daosByAdmin(params: QueryDaosByAdminRequest): Promise<QueryDaosByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/dao/daos_by_admin/${params.admin}`;
    return await this.req.get<QueryDaosByAdminResponseSDKType>(endpoint, options);
  }
  /* Proposals lists a DAO's proposals, by id, optionally only those with one
   of the given statuses. Cleaned-up proposals are not listed. */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.statuses !== "undefined") {
      options.params.statuses = params.statuses;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/dao/proposals/${params.daoId}`;
    return await this.req.get<QueryProposalsResponseSDKType>(endpoint, options);
  }
  /* Ballots lists the ballots of a proposal, by voter address bytes. */
  async ballots(params: QueryBallotsRequest): Promise<QueryBallotsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bze/dao/ballots/${params.proposalId}`;
    return await this.req.get<QueryBallotsResponseSDKType>(endpoint, options);
  }
}