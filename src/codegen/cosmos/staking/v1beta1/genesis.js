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
exports.LastValidatorPower = exports.GenesisState = void 0;
var staking_1 = require("./staking");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: undefined,
        lastTotalPower: new Uint8Array(),
        lastValidatorPowers: [],
        validators: [],
        delegations: [],
        unbondingDelegations: [],
        redelegations: [],
        exported: false
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastTotalPower.length !== 0) {
            writer.uint32(18).bytes(message.lastTotalPower);
        }
        for (var _i = 0, _a = message.lastValidatorPowers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.validators; _b < _c.length; _b++) {
            var v = _c[_b];
            staking_1.Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegations; _d < _e.length; _d++) {
            var v = _e[_d];
            staking_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _f = 0, _g = message.unbondingDelegations; _f < _g.length; _f++) {
            var v = _g[_f];
            staking_1.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _h = 0, _j = message.redelegations; _h < _j.length; _h++) {
            var v = _j[_h];
            staking_1.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastTotalPower = reader.bytes();
                    break;
                case 3:
                    message.lastValidatorPowers.push(exports.LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(staking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbondingDelegations.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(staking_1.Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
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
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        message.lastTotalPower = (_a = object.lastTotalPower) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.lastValidatorPowers = ((_b = object.lastValidatorPowers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.LastValidatorPower.fromPartial(e); })) || [];
        message.validators = ((_c = object.validators) === null || _c === void 0 ? void 0 : _c.map(function (e) { return staking_1.Validator.fromPartial(e); })) || [];
        message.delegations = ((_d = object.delegations) === null || _d === void 0 ? void 0 : _d.map(function (e) { return staking_1.Delegation.fromPartial(e); })) || [];
        message.unbondingDelegations = ((_e = object.unbondingDelegations) === null || _e === void 0 ? void 0 : _e.map(function (e) { return staking_1.UnbondingDelegation.fromPartial(e); })) || [];
        message.redelegations = ((_f = object.redelegations) === null || _f === void 0 ? void 0 : _f.map(function (e) { return staking_1.Redelegation.fromPartial(e); })) || [];
        message.exported = (_g = object.exported) !== null && _g !== void 0 ? _g : false;
        return message;
    }
};
function createBaseLastValidatorPower() {
    return {
        address: "",
        power: helpers_1.Long.ZERO
    };
}
exports.LastValidatorPower = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.power.isZero()) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLastValidatorPower();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = reader.int64();
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
        var message = createBaseLastValidatorPower();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.power = object.power !== undefined && object.power !== null ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO;
        return message;
    }
};
