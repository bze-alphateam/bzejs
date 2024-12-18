"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.Vote = exports.TallyResult = exports.Proposal = exports.GroupPolicyInfo = exports.GroupMember = exports.GroupInfo = exports.DecisionPolicyWindows = exports.PercentageDecisionPolicy = exports.ThresholdDecisionPolicy = exports.Members = exports.Member = exports.proposalExecutorResultToJSON = exports.proposalExecutorResultFromJSON = exports.ProposalExecutorResultSDKType = exports.ProposalExecutorResult = exports.proposalResultToJSON = exports.proposalResultFromJSON = exports.ProposalResultSDKType = exports.ProposalResult = exports.proposalStatusToJSON = exports.proposalStatusFromJSON = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.voteOptionToJSON = exports.voteOptionFromJSON = exports.VoteOptionSDKType = exports.VoteOption = void 0;
var timestamp_1 = require("../../../google/protobuf/timestamp");
var duration_1 = require("../../../google/protobuf/duration");
var any_1 = require("../../../google/protobuf/any");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
/** VoteOption enumerates the valid vote options for a given proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption = exports.VoteOption || (exports.VoteOption = {}));
/** VoteOption enumerates the valid vote options for a given proposal. */
var VoteOptionSDKType;
(function (VoteOptionSDKType) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOptionSDKType[VoteOptionSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOptionSDKType = exports.VoteOptionSDKType || (exports.VoteOptionSDKType = {}));
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
exports.voteOptionFromJSON = voteOptionFromJSON;
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteOptionToJSON = voteOptionToJSON;
/** ProposalStatus defines proposal statuses. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
    /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_CLOSED"] = 2] = "PROPOSAL_STATUS_CLOSED";
    /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 3] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
     * is Withdrawn.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 4] = "PROPOSAL_STATUS_WITHDRAWN";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
/** ProposalStatus defines proposal statuses. */
var ProposalStatusSDKType;
(function (ProposalStatusSDKType) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
    /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_CLOSED"] = 2] = "PROPOSAL_STATUS_CLOSED";
    /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
    ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_ABORTED"] = 3] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
     * is Withdrawn.
     */
    ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_WITHDRAWN"] = 4] = "PROPOSAL_STATUS_WITHDRAWN";
    ProposalStatusSDKType[ProposalStatusSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatusSDKType = exports.ProposalStatusSDKType || (exports.ProposalStatusSDKType = {}));
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_SUBMITTED":
            return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
        case 2:
        case "PROPOSAL_STATUS_CLOSED":
            return ProposalStatus.PROPOSAL_STATUS_CLOSED;
        case 3:
        case "PROPOSAL_STATUS_ABORTED":
            return ProposalStatus.PROPOSAL_STATUS_ABORTED;
        case 4:
        case "PROPOSAL_STATUS_WITHDRAWN":
            return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
exports.proposalStatusFromJSON = proposalStatusFromJSON;
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return "PROPOSAL_STATUS_SUBMITTED";
        case ProposalStatus.PROPOSAL_STATUS_CLOSED:
            return "PROPOSAL_STATUS_CLOSED";
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return "PROPOSAL_STATUS_ABORTED";
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return "PROPOSAL_STATUS_WITHDRAWN";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
/** ProposalResult defines types of proposal results. */
var ProposalResult;
(function (ProposalResult) {
    /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_RESULT_UNSPECIFIED";
    /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNFINALIZED"] = 1] = "PROPOSAL_RESULT_UNFINALIZED";
    /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_ACCEPTED"] = 2] = "PROPOSAL_RESULT_ACCEPTED";
    /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_REJECTED"] = 3] = "PROPOSAL_RESULT_REJECTED";
    ProposalResult[ProposalResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalResult = exports.ProposalResult || (exports.ProposalResult = {}));
/** ProposalResult defines types of proposal results. */
var ProposalResultSDKType;
(function (ProposalResultSDKType) {
    /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    ProposalResultSDKType[ProposalResultSDKType["PROPOSAL_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_RESULT_UNSPECIFIED";
    /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    ProposalResultSDKType[ProposalResultSDKType["PROPOSAL_RESULT_UNFINALIZED"] = 1] = "PROPOSAL_RESULT_UNFINALIZED";
    /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
    ProposalResultSDKType[ProposalResultSDKType["PROPOSAL_RESULT_ACCEPTED"] = 2] = "PROPOSAL_RESULT_ACCEPTED";
    /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
    ProposalResultSDKType[ProposalResultSDKType["PROPOSAL_RESULT_REJECTED"] = 3] = "PROPOSAL_RESULT_REJECTED";
    ProposalResultSDKType[ProposalResultSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalResultSDKType = exports.ProposalResultSDKType || (exports.ProposalResultSDKType = {}));
function proposalResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_RESULT_UNSPECIFIED":
            return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_RESULT_UNFINALIZED":
            return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
        case 2:
        case "PROPOSAL_RESULT_ACCEPTED":
            return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
        case 3:
        case "PROPOSAL_RESULT_REJECTED":
            return ProposalResult.PROPOSAL_RESULT_REJECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalResult.UNRECOGNIZED;
    }
}
exports.proposalResultFromJSON = proposalResultFromJSON;
function proposalResultToJSON(object) {
    switch (object) {
        case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
            return "PROPOSAL_RESULT_UNSPECIFIED";
        case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
            return "PROPOSAL_RESULT_UNFINALIZED";
        case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
            return "PROPOSAL_RESULT_ACCEPTED";
        case ProposalResult.PROPOSAL_RESULT_REJECTED:
            return "PROPOSAL_RESULT_REJECTED";
        case ProposalResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalResultToJSON = proposalResultToJSON;
/** ProposalExecutorResult defines types of proposal executor results. */
var ProposalExecutorResult;
(function (ProposalExecutorResult) {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalExecutorResult = exports.ProposalExecutorResult || (exports.ProposalExecutorResult = {}));
/** ProposalExecutorResult defines types of proposal executor results. */
var ProposalExecutorResultSDKType;
(function (ProposalExecutorResultSDKType) {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    ProposalExecutorResultSDKType[ProposalExecutorResultSDKType["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    ProposalExecutorResultSDKType[ProposalExecutorResultSDKType["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    ProposalExecutorResultSDKType[ProposalExecutorResultSDKType["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    ProposalExecutorResultSDKType[ProposalExecutorResultSDKType["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    ProposalExecutorResultSDKType[ProposalExecutorResultSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalExecutorResultSDKType = exports.ProposalExecutorResultSDKType || (exports.ProposalExecutorResultSDKType = {}));
function proposalExecutorResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
        case 2:
        case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
        case 3:
        case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalExecutorResult.UNRECOGNIZED;
    }
}
exports.proposalExecutorResultFromJSON = proposalExecutorResultFromJSON;
function proposalExecutorResultToJSON(object) {
    switch (object) {
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
            return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
            return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
            return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
            return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
        case ProposalExecutorResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalExecutorResultToJSON = proposalExecutorResultToJSON;
function createBaseMember() {
    return {
        address: "",
        weight: "",
        metadata: "",
        addedAt: undefined
    };
}
exports.Member = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.addedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.addedAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMember();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.addedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMember();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.addedAt = (_d = object.addedAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    }
};
function createBaseMembers() {
    return {
        members: []
    };
}
exports.Members = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.members; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMembers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(exports.Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMembers();
        message.members = ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Member.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseThresholdDecisionPolicy() {
    return {
        threshold: "",
        windows: undefined
    };
}
exports.ThresholdDecisionPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.threshold !== "") {
            writer.uint32(10).string(message.threshold);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseThresholdDecisionPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.string();
                    break;
                case 2:
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseThresholdDecisionPolicy();
        message.threshold = (_a = object.threshold) !== null && _a !== void 0 ? _a : "";
        message.windows = object.windows !== undefined && object.windows !== null ? exports.DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    }
};
function createBasePercentageDecisionPolicy() {
    return {
        percentage: "",
        windows: undefined
    };
}
exports.PercentageDecisionPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.percentage !== "") {
            writer.uint32(10).string(message.percentage);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePercentageDecisionPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.string();
                    break;
                case 2:
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePercentageDecisionPolicy();
        message.percentage = (_a = object.percentage) !== null && _a !== void 0 ? _a : "";
        message.windows = object.windows !== undefined && object.windows !== null ? exports.DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    }
};
function createBaseDecisionPolicyWindows() {
    return {
        votingPeriod: undefined,
        minExecutionPeriod: undefined
    };
}
exports.DecisionPolicyWindows = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.minExecutionPeriod !== undefined) {
            duration_1.Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecisionPolicyWindows();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.minExecutionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseDecisionPolicyWindows();
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? duration_1.Duration.fromPartial(object.minExecutionPeriod) : undefined;
        return message;
    }
};
function createBaseGroupInfo() {
    return {
        id: helpers_1.Long.UZERO,
        admin: "",
        metadata: "",
        version: helpers_1.Long.UZERO,
        totalWeight: "",
        createdAt: undefined
    };
}
exports.GroupInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (!message.version.isZero()) {
            writer.uint32(32).uint64(message.version);
        }
        if (message.totalWeight !== "") {
            writer.uint32(42).string(message.totalWeight);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGroupInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.version = reader.uint64();
                    break;
                case 5:
                    message.totalWeight = reader.string();
                    break;
                case 6:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGroupInfo();
        message.id = object.id !== undefined && object.id !== null ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO;
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : "";
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.UZERO;
        message.totalWeight = (_c = object.totalWeight) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    }
};
function createBaseGroupMember() {
    return {
        groupId: helpers_1.Long.UZERO,
        member: undefined
    };
}
exports.GroupMember = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGroupMember();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.member = exports.Member.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGroupMember();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.member = object.member !== undefined && object.member !== null ? exports.Member.fromPartial(object.member) : undefined;
        return message;
    }
};
function createBaseGroupPolicyInfo() {
    return {
        address: "",
        groupId: helpers_1.Long.UZERO,
        admin: "",
        metadata: "",
        version: helpers_1.Long.UZERO,
        decisionPolicy: undefined,
        createdAt: undefined
    };
}
exports.GroupPolicyInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (!message.version.isZero()) {
            writer.uint32(40).uint64(message.version);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGroupPolicyInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.version = reader.uint64();
                    break;
                case 6:
                    message.decisionPolicy = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGroupPolicyInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.admin = (_b = object.admin) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.UZERO;
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    }
};
function createBaseProposal() {
    return {
        id: helpers_1.Long.UZERO,
        address: "",
        metadata: "",
        proposers: [],
        submitTime: undefined,
        groupVersion: helpers_1.Long.UZERO,
        groupPolicyVersion: helpers_1.Long.UZERO,
        status: 0,
        result: 0,
        finalTallyResult: undefined,
        votingPeriodEnd: undefined,
        executorResult: 0,
        messages: []
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (var _i = 0, _a = message.proposers; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (!message.groupVersion.isZero()) {
            writer.uint32(48).uint64(message.groupVersion);
        }
        if (!message.groupPolicyVersion.isZero()) {
            writer.uint32(56).uint64(message.groupPolicyVersion);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.result !== 0) {
            writer.uint32(72).int32(message.result);
        }
        if (message.finalTallyResult !== undefined) {
            exports.TallyResult.encode(message.finalTallyResult, writer.uint32(82).fork()).ldelim();
        }
        if (message.votingPeriodEnd !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingPeriodEnd), writer.uint32(90).fork()).ldelim();
        }
        if (message.executorResult !== 0) {
            writer.uint32(96).int32(message.executorResult);
        }
        for (var _b = 0, _c = message.messages; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groupVersion = reader.uint64();
                    break;
                case 7:
                    message.groupPolicyVersion = reader.uint64();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.result = reader.int32();
                    break;
                case 10:
                    message.finalTallyResult = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.votingPeriodEnd = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.executorResult = reader.int32();
                    break;
                case 13:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseProposal();
        message.id = object.id !== undefined && object.id !== null ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : "";
        message.proposers = ((_c = object.proposers) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.submitTime = (_d = object.submitTime) !== null && _d !== void 0 ? _d : undefined;
        message.groupVersion = object.groupVersion !== undefined && object.groupVersion !== null ? helpers_1.Long.fromValue(object.groupVersion) : helpers_1.Long.UZERO;
        message.groupPolicyVersion = object.groupPolicyVersion !== undefined && object.groupPolicyVersion !== null ? helpers_1.Long.fromValue(object.groupPolicyVersion) : helpers_1.Long.UZERO;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.result = (_f = object.result) !== null && _f !== void 0 ? _f : 0;
        message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? exports.TallyResult.fromPartial(object.finalTallyResult) : undefined;
        message.votingPeriodEnd = (_g = object.votingPeriodEnd) !== null && _g !== void 0 ? _g : undefined;
        message.executorResult = (_h = object.executorResult) !== null && _h !== void 0 ? _h : 0;
        message.messages = ((_j = object.messages) === null || _j === void 0 ? void 0 : _j.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseTallyResult() {
    return {
        yesCount: "",
        abstainCount: "",
        noCount: "",
        noWithVetoCount: ""
    };
}
exports.TallyResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.yesCount !== "") {
            writer.uint32(10).string(message.yesCount);
        }
        if (message.abstainCount !== "") {
            writer.uint32(18).string(message.abstainCount);
        }
        if (message.noCount !== "") {
            writer.uint32(26).string(message.noCount);
        }
        if (message.noWithVetoCount !== "") {
            writer.uint32(34).string(message.noWithVetoCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTallyResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yesCount = reader.string();
                    break;
                case 2:
                    message.abstainCount = reader.string();
                    break;
                case 3:
                    message.noCount = reader.string();
                    break;
                case 4:
                    message.noWithVetoCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTallyResult();
        message.yesCount = (_a = object.yesCount) !== null && _a !== void 0 ? _a : "";
        message.abstainCount = (_b = object.abstainCount) !== null && _b !== void 0 ? _b : "";
        message.noCount = (_c = object.noCount) !== null && _c !== void 0 ? _c : "";
        message.noWithVetoCount = (_d = object.noWithVetoCount) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseVote() {
    return {
        proposalId: helpers_1.Long.UZERO,
        voter: "",
        option: 0,
        metadata: "",
        submitTime: undefined
    };
}
exports.Vote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        message.option = (_b = object.option) !== null && _b !== void 0 ? _b : 0;
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.submitTime = (_d = object.submitTime) !== null && _d !== void 0 ? _d : undefined;
        return message;
    }
};
