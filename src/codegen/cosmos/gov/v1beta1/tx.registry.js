"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.gov.v1beta1.MsgSubmitProposal", tx_1.MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", tx_1.MsgVote], ["/cosmos.gov.v1beta1.MsgVoteWeighted", tx_1.MsgVoteWeighted], ["/cosmos.gov.v1beta1.MsgDeposit", tx_1.MsgDeposit]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitProposal: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.encode(value).finish()
            };
        },
        vote: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: tx_1.MsgVote.encode(value).finish()
            };
        },
        voteWeighted: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: tx_1.MsgVoteWeighted.encode(value).finish()
            };
        },
        deposit: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitProposal: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: value
            };
        },
        vote: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: value
            };
        },
        voteWeighted: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: value
            };
        },
        deposit: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: value
            };
        }
    },
    fromPartial: {
        submitProposal: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.fromPartial(value)
            };
        },
        vote: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: tx_1.MsgVote.fromPartial(value)
            };
        },
        voteWeighted: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
                value: tx_1.MsgVoteWeighted.fromPartial(value)
            };
        },
        deposit: function (value) {
            return {
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.fromPartial(value)
            };
        }
    }
};
