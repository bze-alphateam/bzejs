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
exports.GenesisDenom = exports.GenesisState = void 0;
var params_1 = require("./params");
var denom_authority_1 = require("./denom_authority");
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        params: undefined,
        factoryDenoms: []
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.factoryDenoms; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.factoryDenoms.push(exports.GenesisDenom.decode(reader, reader.uint32()));
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
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.factoryDenoms = ((_a = object.factoryDenoms) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GenesisDenom.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseGenesisDenom() {
    return {
        denom: "",
        denomAuthority: undefined
    };
}
exports.GenesisDenom = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.denomAuthority !== undefined) {
            denom_authority_1.DenomAuthority.encode(message.denomAuthority, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisDenom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.denomAuthority = denom_authority_1.DenomAuthority.decode(reader, reader.uint32());
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
        var message = createBaseGenesisDenom();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.denomAuthority = object.denomAuthority !== undefined && object.denomAuthority !== null ? denom_authority_1.DenomAuthority.fromPartial(object.denomAuthority) : undefined;
        return message;
    }
};
