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
exports.PeerAddressInfo = exports.PeerInfo = exports.NodeInfoOther = exports.NodeInfo = exports.ProtocolVersion = void 0;
var timestamp_1 = require("../../google/protobuf/timestamp");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseProtocolVersion() {
    return {
        p2p: helpers_1.Long.UZERO,
        block: helpers_1.Long.UZERO,
        app: helpers_1.Long.UZERO
    };
}
exports.ProtocolVersion = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.p2p.isZero()) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (!message.block.isZero()) {
            writer.uint32(16).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProtocolVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? helpers_1.Long.fromValue(object.p2p) : helpers_1.Long.UZERO;
        message.block = object.block !== undefined && object.block !== null ? helpers_1.Long.fromValue(object.block) : helpers_1.Long.UZERO;
        message.app = object.app !== undefined && object.app !== null ? helpers_1.Long.fromValue(object.app) : helpers_1.Long.UZERO;
        return message;
    }
};
function createBaseNodeInfo() {
    return {
        protocolVersion: undefined,
        nodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: undefined
    };
}
exports.NodeInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.protocolVersion !== undefined) {
            exports.ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNodeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocolVersion = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.NodeInfoOther.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseNodeInfo();
        message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? exports.ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
        message.nodeId = (_a = object.nodeId) !== null && _a !== void 0 ? _a : "";
        message.listenAddr = (_b = object.listenAddr) !== null && _b !== void 0 ? _b : "";
        message.network = (_c = object.network) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.channels = (_e = object.channels) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.moniker = (_f = object.moniker) !== null && _f !== void 0 ? _f : "";
        message.other = object.other !== undefined && object.other !== null ? exports.NodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    }
};
function createBaseNodeInfoOther() {
    return {
        txIndex: "",
        rpcAddress: ""
    };
}
exports.NodeInfoOther = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNodeInfoOther();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
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
        var message = createBaseNodeInfoOther();
        message.txIndex = (_a = object.txIndex) !== null && _a !== void 0 ? _a : "";
        message.rpcAddress = (_b = object.rpcAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBasePeerInfo() {
    return {
        id: "",
        addressInfo: [],
        lastConnected: undefined
    };
}
exports.PeerInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (var _i = 0, _a = message.addressInfo; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastConnected !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastConnected), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.addressInfo.push(exports.PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastConnected = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBasePeerInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.addressInfo = ((_b = object.addressInfo) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.PeerAddressInfo.fromPartial(e); })) || [];
        message.lastConnected = (_c = object.lastConnected) !== null && _c !== void 0 ? _c : undefined;
        return message;
    }
};
function createBasePeerAddressInfo() {
    return {
        address: "",
        lastDialSuccess: undefined,
        lastDialFailure: undefined,
        dialFailures: 0
    };
}
exports.PeerAddressInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.lastDialSuccess !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastDialFailure !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dialFailures !== 0) {
            writer.uint32(32).uint32(message.dialFailures);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeerAddressInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.lastDialSuccess = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastDialFailure = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dialFailures = reader.uint32();
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
        var message = createBasePeerAddressInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.lastDialSuccess = (_b = object.lastDialSuccess) !== null && _b !== void 0 ? _b : undefined;
        message.lastDialFailure = (_c = object.lastDialFailure) !== null && _c !== void 0 ? _c : undefined;
        message.dialFailures = (_d = object.dialFailures) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
