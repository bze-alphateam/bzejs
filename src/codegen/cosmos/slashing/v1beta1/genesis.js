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
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = void 0;
var slashing_1 = require("./slashing");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: undefined,
        signingInfos: [],
        missedBlocks: []
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signingInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.missedBlocks; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingInfos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? slashing_1.Params.fromPartial(object.params) : undefined;
        message.signingInfos = ((_a = object.signingInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SigningInfo.fromPartial(e); })) || [];
        message.missedBlocks = ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ValidatorMissedBlocks.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSigningInfo() {
    return {
        address: "",
        validatorSigningInfo: undefined
    };
}
exports.SigningInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSigningInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
        var message = createBaseSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? slashing_1.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
        return message;
    }
};
function createBaseValidatorMissedBlocks() {
    return {
        address: "",
        missedBlocks: []
    };
}
exports.ValidatorMissedBlocks = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.missedBlocks; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missedBlocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
        var message = createBaseValidatorMissedBlocks();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.missedBlocks = ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MissedBlock.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMissedBlock() {
    return {
        index: helpers_1.Long.ZERO,
        missed: false
    };
}
exports.MissedBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.index.isZero()) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMissedBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int64();
                    break;
                case 2:
                    message.missed = reader.bool();
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
        var message = createBaseMissedBlock();
        message.index = object.index !== undefined && object.index !== null ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.ZERO;
        message.missed = (_a = object.missed) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
