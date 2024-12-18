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
exports.CommitID = exports.StoreInfo = exports.CommitInfo = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../../helpers");
function createBaseCommitInfo() {
    return {
        version: helpers_1.Long.ZERO,
        storeInfos: []
    };
}
exports.CommitInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        for (var _i = 0, _a = message.storeInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.storeInfos.push(exports.StoreInfo.decode(reader, reader.uint32()));
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
        var message = createBaseCommitInfo();
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.ZERO;
        message.storeInfos = ((_a = object.storeInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StoreInfo.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseStoreInfo() {
    return {
        name: "",
        commitId: undefined
    };
}
exports.StoreInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            exports.CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStoreInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commitId = exports.CommitID.decode(reader, reader.uint32());
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
        var message = createBaseStoreInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.commitId = object.commitId !== undefined && object.commitId !== null ? exports.CommitID.fromPartial(object.commitId) : undefined;
        return message;
    }
};
function createBaseCommitID() {
    return {
        version: helpers_1.Long.ZERO,
        hash: new Uint8Array()
    };
}
exports.CommitID = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitID();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
        var message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.ZERO;
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
