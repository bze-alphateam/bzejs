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
exports.MigrateFromInfo = exports.PackageReference = exports.ModuleDescriptor = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseModuleDescriptor() {
    return {
        goImport: "",
        usePackage: [],
        canMigrateFrom: []
    };
}
exports.ModuleDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.goImport !== "") {
            writer.uint32(10).string(message.goImport);
        }
        for (var _i = 0, _a = message.usePackage; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.canMigrateFrom; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(exports.PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(exports.MigrateFromInfo.decode(reader, reader.uint32()));
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
        var message = createBaseModuleDescriptor();
        message.goImport = (_a = object.goImport) !== null && _a !== void 0 ? _a : "";
        message.usePackage = ((_b = object.usePackage) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.PackageReference.fromPartial(e); })) || [];
        message.canMigrateFrom = ((_c = object.canMigrateFrom) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.MigrateFromInfo.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
exports.PackageReference = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePackageReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
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
        var message = createBasePackageReference();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.revision = (_b = object.revision) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
exports.MigrateFromInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
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
        var message = createBaseMigrateFromInfo();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
