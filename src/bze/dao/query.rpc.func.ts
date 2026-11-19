//@ts-nocheck
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDaoRequest, QueryDaoResponse, QueryDaoByAddressRequest, QueryDaoByAddressResponse, QueryDaoControllerRequest, QueryDaoControllerResponse, QueryProposalRequest, QueryProposalResponse, QueryBallotRequest, QueryBallotResponse, QueryVotingPowerRequest, QueryVotingPowerResponse, QueryJoinRecordRequest, QueryJoinRecordResponse, QueryDaosRequest, QueryDaosResponse, QueryDaosByAdminRequest, QueryDaosByAdminResponse, QueryProposalsRequest, QueryProposalsResponse, QueryBallotsRequest, QueryBallotsResponse } from "./query";
/**
 * Params queries the parameters of the module.
 * @name getParams
 * @package bze.dao
 * @see proto service: bze.dao.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bze.dao.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Dao returns a DAO by its id.
 * @name getDao
 * @package bze.dao
 * @see proto service: bze.dao.Dao
 */
export const getDao = buildQuery<QueryDaoRequest, QueryDaoResponse>({
  encode: QueryDaoRequest.encode,
  decode: QueryDaoResponse.decode,
  service: "bze.dao.Query",
  method: "Dao",
  deps: [QueryDaoRequest, QueryDaoResponse]
});
/**
 * DaoByAddress returns the DAO that owns the given account.
 * @name getDaoByAddress
 * @package bze.dao
 * @see proto service: bze.dao.DaoByAddress
 */
export const getDaoByAddress = buildQuery<QueryDaoByAddressRequest, QueryDaoByAddressResponse>({
  encode: QueryDaoByAddressRequest.encode,
  decode: QueryDaoByAddressResponse.decode,
  service: "bze.dao.Query",
  method: "DaoByAddress",
  deps: [QueryDaoByAddressRequest, QueryDaoByAddressResponse]
});
/**
 * DaoController follows a DAO's admin chain to who ultimately controls it.
 * @name getDaoController
 * @package bze.dao
 * @see proto service: bze.dao.DaoController
 */
export const getDaoController = buildQuery<QueryDaoControllerRequest, QueryDaoControllerResponse>({
  encode: QueryDaoControllerRequest.encode,
  decode: QueryDaoControllerResponse.decode,
  service: "bze.dao.Query",
  method: "DaoController",
  deps: [QueryDaoControllerRequest, QueryDaoControllerResponse]
});
/**
 * Proposal returns a proposal with its live status at the current block.
 * @name getProposal
 * @package bze.dao
 * @see proto service: bze.dao.Proposal
 */
export const getProposal = buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "bze.dao.Query",
  method: "Proposal",
  deps: [QueryProposalRequest, QueryProposalResponse]
});
/**
 * Ballot returns a voter's ballot on a proposal.
 * @name getBallot
 * @package bze.dao
 * @see proto service: bze.dao.Ballot
 */
export const getBallot = buildQuery<QueryBallotRequest, QueryBallotResponse>({
  encode: QueryBallotRequest.encode,
  decode: QueryBallotResponse.decode,
  service: "bze.dao.Query",
  method: "Ballot",
  deps: [QueryBallotRequest, QueryBallotResponse]
});
/**
 * VotingPower returns an address's weight in a DAO now and on each of the
 * DAO's proposals in voting.
 * @name getVotingPower
 * @package bze.dao
 * @see proto service: bze.dao.VotingPower
 */
export const getVotingPower = buildQuery<QueryVotingPowerRequest, QueryVotingPowerResponse>({
  encode: QueryVotingPowerRequest.encode,
  decode: QueryVotingPowerResponse.decode,
  service: "bze.dao.Query",
  method: "VotingPower",
  deps: [QueryVotingPowerRequest, QueryVotingPowerResponse]
});
/**
 * JoinRecord returns the height an address joined a pinned source at. The
 * source is in the query string: it contains a slash.
 * @name getJoinRecord
 * @package bze.dao
 * @see proto service: bze.dao.JoinRecord
 */
export const getJoinRecord = buildQuery<QueryJoinRecordRequest, QueryJoinRecordResponse>({
  encode: QueryJoinRecordRequest.encode,
  decode: QueryJoinRecordResponse.decode,
  service: "bze.dao.Query",
  method: "JoinRecord",
  deps: [QueryJoinRecordRequest, QueryJoinRecordResponse]
});
/**
 * Daos lists every DAO, by id.
 * @name getDaos
 * @package bze.dao
 * @see proto service: bze.dao.Daos
 */
export const getDaos = buildQuery<QueryDaosRequest, QueryDaosResponse>({
  encode: QueryDaosRequest.encode,
  decode: QueryDaosResponse.decode,
  service: "bze.dao.Query",
  method: "Daos",
  deps: [QueryDaosRequest, QueryDaosResponse]
});
/**
 * DaosByAdmin lists the DAOs an address is the admin of, by id.
 * @name getDaosByAdmin
 * @package bze.dao
 * @see proto service: bze.dao.DaosByAdmin
 */
export const getDaosByAdmin = buildQuery<QueryDaosByAdminRequest, QueryDaosByAdminResponse>({
  encode: QueryDaosByAdminRequest.encode,
  decode: QueryDaosByAdminResponse.decode,
  service: "bze.dao.Query",
  method: "DaosByAdmin",
  deps: [QueryDaosByAdminRequest, QueryDaosByAdminResponse]
});
/**
 * Proposals lists a DAO's proposals, by id, optionally only those with one
 * of the given statuses. Cleaned-up proposals are not listed.
 * @name getProposals
 * @package bze.dao
 * @see proto service: bze.dao.Proposals
 */
export const getProposals = buildQuery<QueryProposalsRequest, QueryProposalsResponse>({
  encode: QueryProposalsRequest.encode,
  decode: QueryProposalsResponse.decode,
  service: "bze.dao.Query",
  method: "Proposals",
  deps: [QueryProposalsRequest, QueryProposalsResponse]
});
/**
 * Ballots lists the ballots of a proposal, by voter address bytes.
 * @name getBallots
 * @package bze.dao
 * @see proto service: bze.dao.Ballots
 */
export const getBallots = buildQuery<QueryBallotsRequest, QueryBallotsResponse>({
  encode: QueryBallotsRequest.encode,
  decode: QueryBallotsResponse.decode,
  service: "bze.dao.Query",
  method: "Ballots",
  deps: [QueryBallotsRequest, QueryBallotsResponse]
});