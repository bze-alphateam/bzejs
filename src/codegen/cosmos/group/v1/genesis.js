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
exports.GenesisState = void 0;
var types_1 = require("./types");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        groupSeq: helpers_1.Long.UZERO,
        groups: [],
        groupMembers: [],
        groupPolicySeq: helpers_1.Long.UZERO,
        groupPolicies: [],
        proposalSeq: helpers_1.Long.UZERO,
        proposals: [],
        votes: []
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.groupSeq.isZero()) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (var _i = 0, _a = message.groups; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.groupMembers; _b < _c.length; _b++) {
            var v = _c[_b];
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.groupPolicySeq.isZero()) {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        for (var _d = 0, _e = message.groupPolicies; _d < _e.length; _d++) {
            var v = _e[_d];
            types_1.GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (!message.proposalSeq.isZero()) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (var _f = 0, _g = message.proposals; _f < _g.length; _f++) {
            var v = _g[_f];
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _h = 0, _j = message.votes; _h < _j.length; _h++) {
            var v = _j[_h];
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupSeq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMembers.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.groupPolicySeq = reader.uint64();
                    break;
                case 5:
                    message.groupPolicies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposalSeq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseGenesisState();
        message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? helpers_1.Long.fromValue(object.groupSeq) : helpers_1.Long.UZERO;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupInfo.fromPartial(e); })) || [];
        message.groupMembers = ((_b = object.groupMembers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.GroupMember.fromPartial(e); })) || [];
        message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? helpers_1.Long.fromValue(object.groupPolicySeq) : helpers_1.Long.UZERO;
        message.groupPolicies = ((_c = object.groupPolicies) === null || _c === void 0 ? void 0 : _c.map(function (e) { return types_1.GroupPolicyInfo.fromPartial(e); })) || [];
        message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? helpers_1.Long.fromValue(object.proposalSeq) : helpers_1.Long.UZERO;
        message.proposals = ((_d = object.proposals) === null || _d === void 0 ? void 0 : _d.map(function (e) { return types_1.Proposal.fromPartial(e); })) || [];
        message.votes = ((_e = object.votes) === null || _e === void 0 ? void 0 : _e.map(function (e) { return types_1.Vote.fromPartial(e); })) || [];
        return message;
    }
};
