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
exports.StoreKVPair = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseStoreKVPair() {
    return {
        storeKey: "",
        "delete": false,
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.StoreKVPair = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.storeKey !== "") {
            writer.uint32(10).string(message.storeKey);
        }
        if (message["delete"] === true) {
            writer.uint32(16).bool(message["delete"]);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStoreKVPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeKey = reader.string();
                    break;
                case 2:
                    message["delete"] = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
                    break;
                case 4:
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
        var _a, _b, _c, _d;
        var message = createBaseStoreKVPair();
        message.storeKey = (_a = object.storeKey) !== null && _a !== void 0 ? _a : "";
        message["delete"] = (_b = object["delete"]) !== null && _b !== void 0 ? _b : false;
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.value = (_d = object.value) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    }
};
