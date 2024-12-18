"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.LCDQueryClient = void 0;
var helpers_1 = require("../../../helpers");
var LCDQueryClient = /** @class */ (function () {
    function LCDQueryClient(_a) {
        var requestClient = _a.requestClient;
        this.req = requestClient;
        this.groupInfo = this.groupInfo.bind(this);
        this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
        this.groupMembers = this.groupMembers.bind(this);
        this.groupsByAdmin = this.groupsByAdmin.bind(this);
        this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
        this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
        this.proposal = this.proposal.bind(this);
        this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
        this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
        this.votesByProposal = this.votesByProposal.bind(this);
        this.votesByVoter = this.votesByVoter.bind(this);
        this.groupsByMember = this.groupsByMember.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    /* GroupInfo queries group info based on group id. */
    LCDQueryClient.prototype.groupInfo = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/group/v1/group_info/".concat(params.groupId);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* GroupPolicyInfo queries group policy info based on account address of group policy. */
    LCDQueryClient.prototype.groupPolicyInfo = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/group/v1/group_policy_info/".concat(params.address);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* GroupMembers queries members of a group */
    LCDQueryClient.prototype.groupMembers = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/group_members/".concat(params.groupId);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* GroupsByAdmin queries groups by admin address. */
    LCDQueryClient.prototype.groupsByAdmin = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/groups_by_admin/".concat(params.admin);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* GroupPoliciesByGroup queries group policies by group id. */
    LCDQueryClient.prototype.groupPoliciesByGroup = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/group_policies_by_group/".concat(params.groupId);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* GroupsByAdmin queries group policies by admin address. */
    LCDQueryClient.prototype.groupPoliciesByAdmin = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/group_policies_by_admin/".concat(params.admin);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Proposal queries a proposal based on proposal id. */
    LCDQueryClient.prototype.proposal = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/group/v1/proposal/".concat(params.proposalId);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    LCDQueryClient.prototype.proposalsByGroupPolicy = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/proposals_by_group_policy/".concat(params.address);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* VoteByProposalVoter queries a vote by proposal id and voter. */
    LCDQueryClient.prototype.voteByProposalVoter = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/group/v1/vote_by_proposal_voter/".concat(params.proposalId, "/").concat(params.voter);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* VotesByProposal queries a vote by proposal. */
    LCDQueryClient.prototype.votesByProposal = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/votes_by_proposal/".concat(params.proposalId);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* VotesByVoter queries a vote by voter. */
    LCDQueryClient.prototype.votesByVoter = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/votes_by_voter/".concat(params.voter);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* GroupsByMember queries groups by member address. */
    LCDQueryClient.prototype.groupsByMember = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/group/v1/groups_by_member/".concat(params.address);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* TallyResult queries the tally of a proposal votes. */
    LCDQueryClient.prototype.tallyResult = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/group/v1/proposals/".concat(params.proposalId, "/tally");
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LCDQueryClient;
}());
exports.LCDQueryClient = LCDQueryClient;
