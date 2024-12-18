"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var gov_1 = require("./gov");
var helpers_1 = require("../../../helpers");
exports.AminoConverter = {
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
        toAmino: function (_a) {
            var messages = _a.messages, initialDeposit = _a.initialDeposit, proposer = _a.proposer, metadata = _a.metadata;
            return {
                messages: messages.map(function (el0) { return ({
                    type_url: el0.typeUrl,
                    value: el0.value
                }); }),
                initial_deposit: initialDeposit.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                proposer: proposer,
                metadata: metadata
            };
        },
        fromAmino: function (_a) {
            var messages = _a.messages, initial_deposit = _a.initial_deposit, proposer = _a.proposer, metadata = _a.metadata;
            return {
                messages: messages.map(function (el0) { return ({
                    typeUrl: el0.type_url,
                    value: el0.value
                }); }),
                initialDeposit: initial_deposit.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                proposer: proposer,
                metadata: metadata
            };
        }
    },
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
        toAmino: function (_a) {
            var content = _a.content, authority = _a.authority;
            return {
                content: {
                    type_url: content.typeUrl,
                    value: content.value
                },
                authority: authority
            };
        },
        fromAmino: function (_a) {
            var content = _a.content, authority = _a.authority;
            return {
                content: {
                    typeUrl: content.type_url,
                    value: content.value
                },
                authority: authority
            };
        }
    },
    "/cosmos.gov.v1.MsgVote": {
        aminoType: "cosmos-sdk/v1/MsgVote",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, voter = _a.voter, option = _a.option, metadata = _a.metadata;
            return {
                proposal_id: proposalId.toString(),
                voter: voter,
                option: option,
                metadata: metadata
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, voter = _a.voter, option = _a.option, metadata = _a.metadata;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                voter: voter,
                option: (0, gov_1.voteOptionFromJSON)(option),
                metadata: metadata
            };
        }
    },
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, voter = _a.voter, options = _a.options, metadata = _a.metadata;
            return {
                proposal_id: proposalId.toString(),
                voter: voter,
                options: options.map(function (el0) { return ({
                    option: el0.option,
                    weight: el0.weight
                }); }),
                metadata: metadata
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, voter = _a.voter, options = _a.options, metadata = _a.metadata;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                voter: voter,
                options: options.map(function (el0) { return ({
                    option: (0, gov_1.voteOptionFromJSON)(el0.option),
                    weight: el0.weight
                }); }),
                metadata: metadata
            };
        }
    },
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: "cosmos-sdk/v1/MsgDeposit",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, depositor = _a.depositor, amount = _a.amount;
            return {
                proposal_id: proposalId.toString(),
                depositor: depositor,
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); })
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, depositor = _a.depositor, amount = _a.amount;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                depositor: depositor,
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); })
            };
        }
    }
};
