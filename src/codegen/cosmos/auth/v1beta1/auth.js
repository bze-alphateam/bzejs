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
exports.Params = exports.ModuleAccount = exports.BaseAccount = void 0;
var any_1 = require("../../../google/protobuf/any");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseBaseAccount() {
    return {
        address: "",
        pubKey: undefined,
        accountNumber: helpers_1.Long.UZERO,
        sequence: helpers_1.Long.UZERO
    };
}
exports.BaseAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBaseAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                case 4:
                    message.sequence = reader.uint64();
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
        var message = createBaseBaseAccount();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? any_1.Any.fromPartial(object.pubKey) : undefined;
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? helpers_1.Long.fromValue(object.accountNumber) : helpers_1.Long.UZERO;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        return message;
    }
};
function createBaseModuleAccount() {
    return {
        baseAccount: undefined,
        name: "",
        permissions: []
    };
}
exports.ModuleAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseAccount !== undefined) {
            exports.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (var _i = 0, _a = message.permissions; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
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
        var message = createBaseModuleAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? exports.BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.permissions = ((_b = object.permissions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseParams() {
    return {
        maxMemoCharacters: helpers_1.Long.UZERO,
        txSigLimit: helpers_1.Long.UZERO,
        txSizeCostPerByte: helpers_1.Long.UZERO,
        sigVerifyCostEd25519: helpers_1.Long.UZERO,
        sigVerifyCostSecp256k1: helpers_1.Long.UZERO
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.maxMemoCharacters.isZero()) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (!message.txSigLimit.isZero()) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (!message.txSizeCostPerByte.isZero()) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (!message.sigVerifyCostEd25519.isZero()) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (!message.sigVerifyCostSecp256k1.isZero()) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
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
                    message.maxMemoCharacters = reader.uint64();
                    break;
                case 2:
                    message.txSigLimit = reader.uint64();
                    break;
                case 3:
                    message.txSizeCostPerByte = reader.uint64();
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = reader.uint64();
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseParams();
        message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? helpers_1.Long.fromValue(object.maxMemoCharacters) : helpers_1.Long.UZERO;
        message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? helpers_1.Long.fromValue(object.txSigLimit) : helpers_1.Long.UZERO;
        message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? helpers_1.Long.fromValue(object.txSizeCostPerByte) : helpers_1.Long.UZERO;
        message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? helpers_1.Long.fromValue(object.sigVerifyCostEd25519) : helpers_1.Long.UZERO;
        message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? helpers_1.Long.fromValue(object.sigVerifyCostSecp256k1) : helpers_1.Long.UZERO;
        return message;
    }
};
