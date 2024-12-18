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
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = void 0;
var client_1 = require("./client");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../../helpers");
function createBaseGenesisState() {
    return {
        clients: [],
        clientsConsensus: [],
        clientsMetadata: [],
        params: undefined,
        createLocalhost: false,
        nextClientSequence: helpers_1.Long.UZERO
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.clients; _i < _a.length; _i++) {
            var v = _a[_i];
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.clientsConsensus; _b < _c.length; _b++) {
            var v = _c[_b];
            client_1.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.clientsMetadata; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.createLocalhost === true) {
            writer.uint32(40).bool(message.createLocalhost);
        }
        if (!message.nextClientSequence.isZero()) {
            writer.uint32(48).uint64(message.nextClientSequence);
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
                    message.clients.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientsConsensus.push(client_1.ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createLocalhost = reader.bool();
                    break;
                case 6:
                    message.nextClientSequence = reader.uint64();
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
        var message = createBaseGenesisState();
        message.clients = ((_a = object.clients) === null || _a === void 0 ? void 0 : _a.map(function (e) { return client_1.IdentifiedClientState.fromPartial(e); })) || [];
        message.clientsConsensus = ((_b = object.clientsConsensus) === null || _b === void 0 ? void 0 : _b.map(function (e) { return client_1.ClientConsensusStates.fromPartial(e); })) || [];
        message.clientsMetadata = ((_c = object.clientsMetadata) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.IdentifiedGenesisMetadata.fromPartial(e); })) || [];
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        message.createLocalhost = (_d = object.createLocalhost) !== null && _d !== void 0 ? _d : false;
        message.nextClientSequence = object.nextClientSequence !== undefined && object.nextClientSequence !== null ? helpers_1.Long.fromValue(object.nextClientSequence) : helpers_1.Long.UZERO;
        return message;
    }
};
function createBaseGenesisMetadata() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.GenesisMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
        var message = createBaseGenesisMetadata();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseIdentifiedGenesisMetadata() {
    return {
        clientId: "",
        clientMetadata: []
    };
}
exports.IdentifiedGenesisMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (var _i = 0, _a = message.clientMetadata; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIdentifiedGenesisMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientMetadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
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
        var message = createBaseIdentifiedGenesisMetadata();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.clientMetadata = ((_b = object.clientMetadata) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.GenesisMetadata.fromPartial(e); })) || [];
        return message;
    }
};
