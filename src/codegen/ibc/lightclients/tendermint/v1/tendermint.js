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
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = void 0;
var duration_1 = require("../../../../google/protobuf/duration");
var client_1 = require("../../../core/client/v1/client");
var proofs_1 = require("../../../../confio/proofs");
var timestamp_1 = require("../../../../google/protobuf/timestamp");
var commitment_1 = require("../../../core/commitment/v1/commitment");
var types_1 = require("../../../../tendermint/types/types");
var validator_1 = require("../../../../tendermint/types/validator");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../../helpers");
function createBaseClientState() {
    return {
        chainId: "",
        trustLevel: undefined,
        trustingPeriod: undefined,
        unbondingPeriod: undefined,
        maxClockDrift: undefined,
        frozenHeight: undefined,
        latestHeight: undefined,
        proofSpecs: [],
        upgradePath: [],
        allowUpdateAfterExpiry: false,
        allowUpdateAfterMisbehaviour: false
    };
}
exports.ClientState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.trustLevel !== undefined) {
            exports.Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustingPeriod !== undefined) {
            duration_1.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbondingPeriod !== undefined) {
            duration_1.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxClockDrift !== undefined) {
            duration_1.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozenHeight !== undefined) {
            client_1.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestHeight !== undefined) {
            client_1.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
        }
        for (var _i = 0, _a = message.proofSpecs; _i < _a.length; _i++) {
            var v = _a[_i];
            proofs_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (var _b = 0, _c = message.upgradePath; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(74).string(v);
        }
        if (message.allowUpdateAfterExpiry === true) {
            writer.uint32(80).bool(message.allowUpdateAfterExpiry);
        }
        if (message.allowUpdateAfterMisbehaviour === true) {
            writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClientState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.trustLevel = exports.Fraction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unbondingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxClockDrift = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.frozenHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.latestHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proofSpecs.push(proofs_1.ProofSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.upgradePath.push(reader.string());
                    break;
                case 10:
                    message.allowUpdateAfterExpiry = reader.bool();
                    break;
                case 11:
                    message.allowUpdateAfterMisbehaviour = reader.bool();
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
        var message = createBaseClientState();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? exports.Fraction.fromPartial(object.trustLevel) : undefined;
        message.trustingPeriod = object.trustingPeriod !== undefined && object.trustingPeriod !== null ? duration_1.Duration.fromPartial(object.trustingPeriod) : undefined;
        message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? duration_1.Duration.fromPartial(object.unbondingPeriod) : undefined;
        message.maxClockDrift = object.maxClockDrift !== undefined && object.maxClockDrift !== null ? duration_1.Duration.fromPartial(object.maxClockDrift) : undefined;
        message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? client_1.Height.fromPartial(object.frozenHeight) : undefined;
        message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? client_1.Height.fromPartial(object.latestHeight) : undefined;
        message.proofSpecs = ((_b = object.proofSpecs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return proofs_1.ProofSpec.fromPartial(e); })) || [];
        message.upgradePath = ((_c = object.upgradePath) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.allowUpdateAfterExpiry = (_d = object.allowUpdateAfterExpiry) !== null && _d !== void 0 ? _d : false;
        message.allowUpdateAfterMisbehaviour = (_e = object.allowUpdateAfterMisbehaviour) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseConsensusState() {
    return {
        timestamp: undefined,
        root: undefined,
        nextValidatorsHash: new Uint8Array()
    };
}
exports.ConsensusState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            commitment_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(26).bytes(message.nextValidatorsHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.root = commitment_1.MerkleRoot.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseConsensusState();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.root = object.root !== undefined && object.root !== null ? commitment_1.MerkleRoot.fromPartial(object.root) : undefined;
        message.nextValidatorsHash = (_b = object.nextValidatorsHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        header1: undefined,
        header2: undefined
    };
}
exports.Misbehaviour = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header1 !== undefined) {
            exports.Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            exports.Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMisbehaviour();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.header1 = exports.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header2 = exports.Header.decode(reader, reader.uint32());
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
        var message = createBaseMisbehaviour();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.header1 = object.header1 !== undefined && object.header1 !== null ? exports.Header.fromPartial(object.header1) : undefined;
        message.header2 = object.header2 !== undefined && object.header2 !== null ? exports.Header.fromPartial(object.header2) : undefined;
        return message;
    }
};
function createBaseHeader() {
    return {
        signedHeader: undefined,
        validatorSet: undefined,
        trustedHeight: undefined,
        trustedValidators: undefined
    };
}
exports.Header = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signedHeader !== undefined) {
            types_1.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustedHeight !== undefined) {
            client_1.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.trustedValidators !== undefined) {
            validator_1.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = types_1.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustedHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trustedValidators = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseHeader();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? types_1.SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? validator_1.ValidatorSet.fromPartial(object.validatorSet) : undefined;
        message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? client_1.Height.fromPartial(object.trustedHeight) : undefined;
        message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? validator_1.ValidatorSet.fromPartial(object.trustedValidators) : undefined;
        return message;
    }
};
function createBaseFraction() {
    return {
        numerator: helpers_1.Long.UZERO,
        denominator: helpers_1.Long.UZERO
    };
}
exports.Fraction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.numerator.isZero()) {
            writer.uint32(8).uint64(message.numerator);
        }
        if (!message.denominator.isZero()) {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFraction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numerator = reader.uint64();
                    break;
                case 2:
                    message.denominator = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseFraction();
        message.numerator = object.numerator !== undefined && object.numerator !== null ? helpers_1.Long.fromValue(object.numerator) : helpers_1.Long.UZERO;
        message.denominator = object.denominator !== undefined && object.denominator !== null ? helpers_1.Long.fromValue(object.denominator) : helpers_1.Long.UZERO;
        return message;
    }
};
