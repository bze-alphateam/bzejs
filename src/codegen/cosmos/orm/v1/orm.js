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
exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = exports.TableDescriptor = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseTableDescriptor() {
    return {
        primaryKey: undefined,
        index: [],
        id: 0
    };
}
exports.TableDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.primaryKey !== undefined) {
            exports.PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.index; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTableDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.primaryKey = exports.PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.index.push(exports.SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.id = reader.uint32();
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
        var message = createBaseTableDescriptor();
        message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? exports.PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
        message.index = ((_a = object.index) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SecondaryIndexDescriptor.fromPartial(e); })) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBasePrimaryKeyDescriptor() {
    return {
        fields: "",
        autoIncrement: false
    };
}
exports.PrimaryKeyDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement === true) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.autoIncrement = reader.bool();
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
        var message = createBasePrimaryKeyDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.autoIncrement = (_b = object.autoIncrement) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseSecondaryIndexDescriptor() {
    return {
        fields: "",
        id: 0,
        unique: false
    };
}
exports.SecondaryIndexDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.unique = reader.bool();
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
        var message = createBaseSecondaryIndexDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        message.unique = (_c = object.unique) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseSingletonDescriptor() {
    return {
        id: 0
    };
}
exports.SingletonDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
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
        var message = createBaseSingletonDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
