"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var types_1 = require("./types");
var helpers_1 = require("../../../helpers");
var tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.group.v1.MsgCreateGroup": {
        aminoType: "cosmos-sdk/MsgCreateGroup",
        toAmino: function (_a) {
            var admin = _a.admin, members = _a.members, metadata = _a.metadata;
            return {
                admin: admin,
                members: members.map(function (el0) { return ({
                    address: el0.address,
                    weight: el0.weight,
                    metadata: el0.metadata,
                    added_at: el0.addedAt
                }); }),
                metadata: metadata
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, members = _a.members, metadata = _a.metadata;
            return {
                admin: admin,
                members: members.map(function (el0) { return ({
                    address: el0.address,
                    weight: el0.weight,
                    metadata: el0.metadata,
                    addedAt: el0.added_at
                }); }),
                metadata: metadata
            };
        }
    },
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
        toAmino: function (_a) {
            var admin = _a.admin, groupId = _a.groupId, memberUpdates = _a.memberUpdates;
            return {
                admin: admin,
                group_id: groupId.toString(),
                member_updates: memberUpdates.map(function (el0) { return ({
                    address: el0.address,
                    weight: el0.weight,
                    metadata: el0.metadata,
                    added_at: el0.addedAt
                }); })
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, group_id = _a.group_id, member_updates = _a.member_updates;
            return {
                admin: admin,
                groupId: helpers_1.Long.fromString(group_id),
                memberUpdates: member_updates.map(function (el0) { return ({
                    address: el0.address,
                    weight: el0.weight,
                    metadata: el0.metadata,
                    addedAt: el0.added_at
                }); })
            };
        }
    },
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
        toAmino: function (_a) {
            var admin = _a.admin, groupId = _a.groupId, newAdmin = _a.newAdmin;
            return {
                admin: admin,
                group_id: groupId.toString(),
                new_admin: newAdmin
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, group_id = _a.group_id, new_admin = _a.new_admin;
            return {
                admin: admin,
                groupId: helpers_1.Long.fromString(group_id),
                newAdmin: new_admin
            };
        }
    },
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
        toAmino: function (_a) {
            var admin = _a.admin, groupId = _a.groupId, metadata = _a.metadata;
            return {
                admin: admin,
                group_id: groupId.toString(),
                metadata: metadata
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, group_id = _a.group_id, metadata = _a.metadata;
            return {
                admin: admin,
                groupId: helpers_1.Long.fromString(group_id),
                metadata: metadata
            };
        }
    },
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
        toAmino: function (_a) {
            var admin = _a.admin, groupId = _a.groupId, metadata = _a.metadata, decisionPolicy = _a.decisionPolicy;
            return {
                admin: admin,
                group_id: groupId.toString(),
                metadata: metadata,
                decision_policy: {
                    type_url: decisionPolicy.typeUrl,
                    value: decisionPolicy.value
                }
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, group_id = _a.group_id, metadata = _a.metadata, decision_policy = _a.decision_policy;
            return {
                admin: admin,
                groupId: helpers_1.Long.fromString(group_id),
                metadata: metadata,
                decisionPolicy: {
                    typeUrl: decision_policy.type_url,
                    value: decision_policy.value
                }
            };
        }
    },
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
        toAmino: function (_a) {
            var admin = _a.admin, members = _a.members, groupMetadata = _a.groupMetadata, groupPolicyMetadata = _a.groupPolicyMetadata, groupPolicyAsAdmin = _a.groupPolicyAsAdmin, decisionPolicy = _a.decisionPolicy;
            return {
                admin: admin,
                members: members.map(function (el0) { return ({
                    address: el0.address,
                    weight: el0.weight,
                    metadata: el0.metadata,
                    added_at: el0.addedAt
                }); }),
                group_metadata: groupMetadata,
                group_policy_metadata: groupPolicyMetadata,
                group_policy_as_admin: groupPolicyAsAdmin,
                decision_policy: {
                    type_url: decisionPolicy.typeUrl,
                    value: decisionPolicy.value
                }
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, members = _a.members, group_metadata = _a.group_metadata, group_policy_metadata = _a.group_policy_metadata, group_policy_as_admin = _a.group_policy_as_admin, decision_policy = _a.decision_policy;
            return {
                admin: admin,
                members: members.map(function (el0) { return ({
                    address: el0.address,
                    weight: el0.weight,
                    metadata: el0.metadata,
                    addedAt: el0.added_at
                }); }),
                groupMetadata: group_metadata,
                groupPolicyMetadata: group_policy_metadata,
                groupPolicyAsAdmin: group_policy_as_admin,
                decisionPolicy: {
                    typeUrl: decision_policy.type_url,
                    value: decision_policy.value
                }
            };
        }
    },
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
        toAmino: function (_a) {
            var admin = _a.admin, address = _a.address, newAdmin = _a.newAdmin;
            return {
                admin: admin,
                address: address,
                new_admin: newAdmin
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, address = _a.address, new_admin = _a.new_admin;
            return {
                admin: admin,
                address: address,
                newAdmin: new_admin
            };
        }
    },
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
        toAmino: function (_a) {
            var admin = _a.admin, address = _a.address, decisionPolicy = _a.decisionPolicy;
            return {
                admin: admin,
                address: address,
                decision_policy: {
                    type_url: decisionPolicy.typeUrl,
                    value: decisionPolicy.value
                }
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, address = _a.address, decision_policy = _a.decision_policy;
            return {
                admin: admin,
                address: address,
                decisionPolicy: {
                    typeUrl: decision_policy.type_url,
                    value: decision_policy.value
                }
            };
        }
    },
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
        toAmino: function (_a) {
            var admin = _a.admin, address = _a.address, metadata = _a.metadata;
            return {
                admin: admin,
                address: address,
                metadata: metadata
            };
        },
        fromAmino: function (_a) {
            var admin = _a.admin, address = _a.address, metadata = _a.metadata;
            return {
                admin: admin,
                address: address,
                metadata: metadata
            };
        }
    },
    "/cosmos.group.v1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/group/MsgSubmitProposal",
        toAmino: function (_a) {
            var address = _a.address, proposers = _a.proposers, metadata = _a.metadata, messages = _a.messages, exec = _a.exec;
            return {
                address: address,
                proposers: proposers,
                metadata: metadata,
                messages: messages.map(function (el0) { return ({
                    type_url: el0.typeUrl,
                    value: el0.value
                }); }),
                exec: exec
            };
        },
        fromAmino: function (_a) {
            var address = _a.address, proposers = _a.proposers, metadata = _a.metadata, messages = _a.messages, exec = _a.exec;
            return {
                address: address,
                proposers: proposers,
                metadata: metadata,
                messages: messages.map(function (el0) { return ({
                    typeUrl: el0.type_url,
                    value: el0.value
                }); }),
                exec: (0, tx_1.execFromJSON)(exec)
            };
        }
    },
    "/cosmos.group.v1.MsgWithdrawProposal": {
        aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, address = _a.address;
            return {
                proposal_id: proposalId.toString(),
                address: address
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, address = _a.address;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                address: address
            };
        }
    },
    "/cosmos.group.v1.MsgVote": {
        aminoType: "cosmos-sdk/group/MsgVote",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, voter = _a.voter, option = _a.option, metadata = _a.metadata, exec = _a.exec;
            return {
                proposal_id: proposalId.toString(),
                voter: voter,
                option: option,
                metadata: metadata,
                exec: exec
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, voter = _a.voter, option = _a.option, metadata = _a.metadata, exec = _a.exec;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                voter: voter,
                option: (0, types_1.voteOptionFromJSON)(option),
                metadata: metadata,
                exec: (0, tx_1.execFromJSON)(exec)
            };
        }
    },
    "/cosmos.group.v1.MsgExec": {
        aminoType: "cosmos-sdk/group/MsgExec",
        toAmino: function (_a) {
            var proposalId = _a.proposalId, signer = _a.signer;
            return {
                proposal_id: proposalId.toString(),
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var proposal_id = _a.proposal_id, signer = _a.signer;
            return {
                proposalId: helpers_1.Long.fromString(proposal_id),
                signer: signer
            };
        }
    },
    "/cosmos.group.v1.MsgLeaveGroup": {
        aminoType: "cosmos-sdk/group/MsgLeaveGroup",
        toAmino: function (_a) {
            var address = _a.address, groupId = _a.groupId;
            return {
                address: address,
                group_id: groupId.toString()
            };
        },
        fromAmino: function (_a) {
            var address = _a.address, group_id = _a.group_id;
            return {
                address: address,
                groupId: helpers_1.Long.fromString(group_id)
            };
        }
    }
};
