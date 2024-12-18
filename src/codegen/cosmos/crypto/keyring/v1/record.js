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
exports.Record_Offline = exports.Record_Multi = exports.Record_Ledger = exports.Record_Local = exports.Record = void 0;
var any_1 = require("../../../../google/protobuf/any");
var hd_1 = require("../../hd/v1/hd");
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseRecord() {
    return {
        name: "",
        pubKey: undefined,
        local: undefined,
        ledger: undefined,
        multi: undefined,
        offline: undefined
    };
}
exports.Record = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            exports.Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            exports.Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            exports.Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.local = exports.Record_Local.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ledger = exports.Record_Ledger.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multi = exports.Record_Multi.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.offline = exports.Record_Offline.decode(reader, reader.uint32());
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
        var message = createBaseRecord();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? any_1.Any.fromPartial(object.pubKey) : undefined;
        message.local = object.local !== undefined && object.local !== null ? exports.Record_Local.fromPartial(object.local) : undefined;
        message.ledger = object.ledger !== undefined && object.ledger !== null ? exports.Record_Ledger.fromPartial(object.ledger) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.Record_Multi.fromPartial(object.multi) : undefined;
        message.offline = object.offline !== undefined && object.offline !== null ? exports.Record_Offline.fromPartial(object.offline) : undefined;
        return message;
    }
};
function createBaseRecord_Local() {
    return {
        privKey: undefined,
        privKeyType: ""
    };
}
exports.Record_Local = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.privKey !== undefined) {
            any_1.Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.privKeyType !== "") {
            writer.uint32(18).string(message.privKeyType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Local();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.privKeyType = reader.string();
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
        var message = createBaseRecord_Local();
        message.privKey = object.privKey !== undefined && object.privKey !== null ? any_1.Any.fromPartial(object.privKey) : undefined;
        message.privKeyType = (_a = object.privKeyType) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseRecord_Ledger() {
    return {
        path: undefined
    };
}
exports.Record_Ledger = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path !== undefined) {
            hd_1.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = hd_1.BIP44Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseRecord_Ledger();
        message.path = object.path !== undefined && object.path !== null ? hd_1.BIP44Params.fromPartial(object.path) : undefined;
        return message;
    }
};
function createBaseRecord_Multi() {
    return {};
}
exports.Record_Multi = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseRecord_Multi();
        return message;
    }
};
function createBaseRecord_Offline() {
    return {};
}
exports.Record_Offline = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Offline();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseRecord_Offline();
        return message;
    }
};
