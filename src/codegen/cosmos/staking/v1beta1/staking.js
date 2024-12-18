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
exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.bondStatusToJSON = exports.bondStatusFromJSON = exports.BondStatusSDKType = exports.BondStatus = void 0;
var types_1 = require("../../../tendermint/types/types");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var any_1 = require("../../../google/protobuf/any");
var duration_1 = require("../../../google/protobuf/duration");
var coin_1 = require("../../base/v1beta1/coin");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus = exports.BondStatus || (exports.BondStatus = {}));
/** BondStatus is the status of a validator. */
var BondStatusSDKType;
(function (BondStatusSDKType) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatusSDKType[BondStatusSDKType["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatusSDKType[BondStatusSDKType["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatusSDKType[BondStatusSDKType["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatusSDKType[BondStatusSDKType["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatusSDKType[BondStatusSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatusSDKType = exports.BondStatusSDKType || (exports.BondStatusSDKType = {}));
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
exports.bondStatusFromJSON = bondStatusFromJSON;
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.bondStatusToJSON = bondStatusToJSON;
function createBaseHistoricalInfo() {
    return {
        header: undefined,
        valset: []
    };
}
exports.HistoricalInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.valset; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
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
        var message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.valset = ((_a = object.valset) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseCommissionRates() {
    return {
        rate: "",
        maxRate: "",
        maxChangeRate: ""
    };
}
exports.CommissionRates = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rate !== "") {
            writer.uint32(10).string(message.rate);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(message.maxRate);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(message.maxChangeRate);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommissionRates();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = reader.string();
                    break;
                case 2:
                    message.maxRate = reader.string();
                    break;
                case 3:
                    message.maxChangeRate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCommissionRates();
        message.rate = (_a = object.rate) !== null && _a !== void 0 ? _a : "";
        message.maxRate = (_b = object.maxRate) !== null && _b !== void 0 ? _b : "";
        message.maxChangeRate = (_c = object.maxChangeRate) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseCommission() {
    return {
        commissionRates: undefined,
        updateTime: undefined
    };
}
exports.Commission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.commissionRates !== undefined) {
            exports.CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commissionRates = exports.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseCommission();
        message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? exports.CommissionRates.fromPartial(object.commissionRates) : undefined;
        message.updateTime = (_a = object.updateTime) !== null && _a !== void 0 ? _a : undefined;
        return message;
    }
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        securityContact: "",
        details: ""
    };
}
exports.Description = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescription();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
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
        var message = createBaseDescription();
        message.moniker = (_a = object.moniker) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
        message.securityContact = (_d = object.securityContact) !== null && _d !== void 0 ? _d : "";
        message.details = (_e = object.details) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: undefined,
        unbondingHeight: helpers_1.Long.ZERO,
        unbondingTime: undefined,
        commission: undefined,
        minSelfDelegation: ""
    };
}
exports.Validator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            any_1.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (!message.unbondingHeight.isZero()) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = reader.string();
                    break;
                case 7:
                    message.description = exports.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = reader.int64();
                    break;
                case 9:
                    message.unbondingTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseValidator();
        message.operatorAddress = (_a = object.operatorAddress) !== null && _a !== void 0 ? _a : "";
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? any_1.Any.fromPartial(object.consensusPubkey) : undefined;
        message.jailed = (_b = object.jailed) !== null && _b !== void 0 ? _b : false;
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.tokens = (_d = object.tokens) !== null && _d !== void 0 ? _d : "";
        message.delegatorShares = (_e = object.delegatorShares) !== null && _e !== void 0 ? _e : "";
        message.description = object.description !== undefined && object.description !== null ? exports.Description.fromPartial(object.description) : undefined;
        message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? helpers_1.Long.fromValue(object.unbondingHeight) : helpers_1.Long.ZERO;
        message.unbondingTime = (_f = object.unbondingTime) !== null && _f !== void 0 ? _f : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? exports.Commission.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = (_g = object.minSelfDelegation) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
exports.ValAddresses = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.addresses; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValAddresses();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
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
        var message = createBaseValAddresses();
        message.addresses = ((_a = object.addresses) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseDVPair() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
exports.DVPair = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDVPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
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
        var message = createBaseDVPair();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
exports.DVPairs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.pairs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDVPairs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
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
        var message = createBaseDVPairs();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DVPair.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseDVVTriplet() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: ""
    };
}
exports.DVVTriplet = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDVVTriplet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDVVTriplet();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorSrcAddress = (_b = object.validatorSrcAddress) !== null && _b !== void 0 ? _b : "";
        message.validatorDstAddress = (_c = object.validatorDstAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
exports.DVVTriplets = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.triplets; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDVVTriplets();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
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
        var message = createBaseDVVTriplets();
        message.triplets = ((_a = object.triplets) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DVVTriplet.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        shares: ""
    };
}
exports.Delegation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.shares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDelegation();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.shares = (_c = object.shares) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        entries: []
    };
}
exports.UnbondingDelegation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (var _i = 0, _a = message.entries; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingDelegation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUnbondingDelegation();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.entries = ((_c = object.entries) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.UnbondingDelegationEntry.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: helpers_1.Long.ZERO,
        completionTime: undefined,
        initialBalance: "",
        balance: ""
    };
}
exports.UnbondingDelegationEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.creationHeight.isZero()) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUnbondingDelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? helpers_1.Long.fromValue(object.creationHeight) : helpers_1.Long.ZERO;
        message.completionTime = (_a = object.completionTime) !== null && _a !== void 0 ? _a : undefined;
        message.initialBalance = (_b = object.initialBalance) !== null && _b !== void 0 ? _b : "";
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseRedelegationEntry() {
    return {
        creationHeight: helpers_1.Long.ZERO,
        completionTime: undefined,
        initialBalance: "",
        sharesDst: ""
    };
}
exports.RedelegationEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.creationHeight.isZero()) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(message.sharesDst);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRedelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? helpers_1.Long.fromValue(object.creationHeight) : helpers_1.Long.ZERO;
        message.completionTime = (_a = object.completionTime) !== null && _a !== void 0 ? _a : undefined;
        message.initialBalance = (_b = object.initialBalance) !== null && _b !== void 0 ? _b : "";
        message.sharesDst = (_c = object.sharesDst) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseRedelegation() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        entries: []
    };
}
exports.Redelegation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        for (var _i = 0, _a = message.entries; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
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
        var message = createBaseRedelegation();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorSrcAddress = (_b = object.validatorSrcAddress) !== null && _b !== void 0 ? _b : "";
        message.validatorDstAddress = (_c = object.validatorDstAddress) !== null && _c !== void 0 ? _c : "";
        message.entries = ((_d = object.entries) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.RedelegationEntry.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseParams() {
    return {
        unbondingTime: undefined,
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: "",
        minCommissionRate: ""
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.unbondingTime !== undefined) {
            duration_1.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        if (message.minCommissionRate !== "") {
            writer.uint32(50).string(message.minCommissionRate);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxValidators = reader.uint32();
                    break;
                case 3:
                    message.maxEntries = reader.uint32();
                    break;
                case 4:
                    message.historicalEntries = reader.uint32();
                    break;
                case 5:
                    message.bondDenom = reader.string();
                    break;
                case 6:
                    message.minCommissionRate = reader.string();
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
        var message = createBaseParams();
        message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? duration_1.Duration.fromPartial(object.unbondingTime) : undefined;
        message.maxValidators = (_a = object.maxValidators) !== null && _a !== void 0 ? _a : 0;
        message.maxEntries = (_b = object.maxEntries) !== null && _b !== void 0 ? _b : 0;
        message.historicalEntries = (_c = object.historicalEntries) !== null && _c !== void 0 ? _c : 0;
        message.bondDenom = (_d = object.bondDenom) !== null && _d !== void 0 ? _d : "";
        message.minCommissionRate = (_e = object.minCommissionRate) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseDelegationResponse() {
    return {
        delegation: undefined,
        balance: undefined
    };
}
exports.DelegationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? exports.Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    }
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegationEntry: undefined,
        balance: ""
    };
}
exports.RedelegationEntryResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.redelegationEntry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationEntry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
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
        var message = createBaseRedelegationEntryResponse();
        message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? exports.RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseRedelegationResponse() {
    return {
        redelegation: undefined,
        entries: []
    };
}
exports.RedelegationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.entries; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
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
        var message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? exports.Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.RedelegationEntryResponse.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePool() {
    return {
        notBondedTokens: "",
        bondedTokens: ""
    };
}
exports.Pool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
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
        var message = createBasePool();
        message.notBondedTokens = (_a = object.notBondedTokens) !== null && _a !== void 0 ? _a : "";
        message.bondedTokens = (_b = object.bondedTokens) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
