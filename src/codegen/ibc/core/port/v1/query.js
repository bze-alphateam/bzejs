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
exports.QueryAppVersionResponse = exports.QueryAppVersionRequest = void 0;
var channel_1 = require("../../channel/v1/channel");
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryAppVersionRequest() {
    return {
        portId: "",
        connectionId: "",
        ordering: 0,
        counterparty: undefined,
        proposedVersion: ""
    };
}
exports.QueryAppVersionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.ordering !== 0) {
            writer.uint32(24).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            channel_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.proposedVersion !== "") {
            writer.uint32(42).string(message.proposedVersion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAppVersionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.ordering = reader.int32();
                    break;
                case 4:
                    message.counterparty = channel_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proposedVersion = reader.string();
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
        var message = createBaseQueryAppVersionRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.connectionId = (_b = object.connectionId) !== null && _b !== void 0 ? _b : "";
        message.ordering = (_c = object.ordering) !== null && _c !== void 0 ? _c : 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? channel_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.proposedVersion = (_d = object.proposedVersion) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseQueryAppVersionResponse() {
    return {
        portId: "",
        version: ""
    };
}
exports.QueryAppVersionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAppVersionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
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
        var message = createBaseQueryAppVersionResponse();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
