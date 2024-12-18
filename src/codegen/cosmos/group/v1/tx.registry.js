"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.group.v1.MsgCreateGroup", tx_1.MsgCreateGroup], ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_1.MsgUpdateGroupMembers], ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_1.MsgUpdateGroupAdmin], ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_1.MsgUpdateGroupMetadata], ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_1.MsgCreateGroupPolicy], ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_1.MsgCreateGroupWithPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_1.MsgUpdateGroupPolicyAdmin], ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_1.MsgUpdateGroupPolicyDecisionPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_1.MsgUpdateGroupPolicyMetadata], ["/cosmos.group.v1.MsgSubmitProposal", tx_1.MsgSubmitProposal], ["/cosmos.group.v1.MsgWithdrawProposal", tx_1.MsgWithdrawProposal], ["/cosmos.group.v1.MsgVote", tx_1.MsgVote], ["/cosmos.group.v1.MsgExec", tx_1.MsgExec], ["/cosmos.group.v1.MsgLeaveGroup", tx_1.MsgLeaveGroup]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createGroup: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.encode(value).finish()
            };
        },
        updateGroupMembers: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.encode(value).finish()
            };
        },
        updateGroupAdmin: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.encode(value).finish()
            };
        },
        updateGroupMetadata: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.encode(value).finish()
            };
        },
        createGroupPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value: tx_1.MsgCreateGroupPolicy.encode(value).finish()
            };
        },
        createGroupWithPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value: tx_1.MsgCreateGroupWithPolicy.encode(value).finish()
            };
        },
        updateGroupPolicyAdmin: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value: tx_1.MsgUpdateGroupPolicyAdmin.encode(value).finish()
            };
        },
        updateGroupPolicyDecisionPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value: tx_1.MsgUpdateGroupPolicyDecisionPolicy.encode(value).finish()
            };
        },
        updateGroupPolicyMetadata: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value: tx_1.MsgUpdateGroupPolicyMetadata.encode(value).finish()
            };
        },
        submitProposal: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.encode(value).finish()
            };
        },
        withdrawProposal: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value: tx_1.MsgWithdrawProposal.encode(value).finish()
            };
        },
        vote: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value: tx_1.MsgVote.encode(value).finish()
            };
        },
        exec: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value: tx_1.MsgExec.encode(value).finish()
            };
        },
        leaveGroup: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value: tx_1.MsgLeaveGroup.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createGroup: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value: value
            };
        },
        updateGroupMembers: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value: value
            };
        },
        updateGroupAdmin: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value: value
            };
        },
        updateGroupMetadata: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value: value
            };
        },
        createGroupPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value: value
            };
        },
        createGroupWithPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value: value
            };
        },
        updateGroupPolicyAdmin: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value: value
            };
        },
        updateGroupPolicyDecisionPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value: value
            };
        },
        updateGroupPolicyMetadata: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value: value
            };
        },
        submitProposal: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value: value
            };
        },
        withdrawProposal: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value: value
            };
        },
        vote: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value: value
            };
        },
        exec: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value: value
            };
        },
        leaveGroup: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value: value
            };
        }
    },
    fromPartial: {
        createGroup: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.fromPartial(value)
            };
        },
        updateGroupMembers: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.fromPartial(value)
            };
        },
        updateGroupAdmin: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.fromPartial(value)
            };
        },
        updateGroupMetadata: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.fromPartial(value)
            };
        },
        createGroupPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
                value: tx_1.MsgCreateGroupPolicy.fromPartial(value)
            };
        },
        createGroupWithPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
                value: tx_1.MsgCreateGroupWithPolicy.fromPartial(value)
            };
        },
        updateGroupPolicyAdmin: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
                value: tx_1.MsgUpdateGroupPolicyAdmin.fromPartial(value)
            };
        },
        updateGroupPolicyDecisionPolicy: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
                value: tx_1.MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value)
            };
        },
        updateGroupPolicyMetadata: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
                value: tx_1.MsgUpdateGroupPolicyMetadata.fromPartial(value)
            };
        },
        submitProposal: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
                value: tx_1.MsgSubmitProposal.fromPartial(value)
            };
        },
        withdrawProposal: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
                value: tx_1.MsgWithdrawProposal.fromPartial(value)
            };
        },
        vote: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgVote",
                value: tx_1.MsgVote.fromPartial(value)
            };
        },
        exec: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgExec",
                value: tx_1.MsgExec.fromPartial(value)
            };
        },
        leaveGroup: function (value) {
            return {
                typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
                value: tx_1.MsgLeaveGroup.fromPartial(value)
            };
        }
    }
};
