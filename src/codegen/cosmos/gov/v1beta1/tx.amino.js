"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var gov_1 = require("./gov");
var helpers_1 = require("../../../helpers");
exports.AminoConverter = {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/MsgSubmitProposal",
        toAmino: function (_a) {
            var content = _a.content, initialDeposit = _a.initialDeposit, proposer = _a.proposer;
            return {
                content: {
                    type_url: content.typeUrl,
                    value: content.value
                },
                initial_deposit: initialDeposit.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                proposer: proposer
            };
        },
        fromAmino: function (_a) {
            var content = _a.content, initial_deposit = _a.initial_deposit, proposer = _a.proposer;
            return {
                content: {
                    typeUrl: content.type_url,
                    value: content.value
                },
                initialDeposit: initial_deposit.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                proposer: proposer
            };
        }
    },
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: "cosmos-sdk/MsgVote",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, voter = _a.voter, option = _a.option;
            return {
                proposal_id: proposalId.toString(),
                voter: voter,
                option: option
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, voter = _a.voter, option = _a.option;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                voter: voter,
                option: (0, gov_1.voteOptionFromJSON)(option)
            };
        }
    },
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: "cosmos-sdk/MsgVoteWeighted",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, voter = _a.voter, options = _a.options;
            return {
                proposal_id: proposalId.toString(),
                voter: voter,
                options: options.map(function (el0) { return ({
                    option: el0.option,
                    weight: el0.weight
                }); })
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, voter = _a.voter, options = _a.options;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                voter: voter,
                options: options.map(function (el0) { return ({
                    option: (0, gov_1.voteOptionFromJSON)(el0.option),
                    weight: el0.weight
                }); })
            };
        }
    },
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: "cosmos-sdk/MsgDeposit",
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
