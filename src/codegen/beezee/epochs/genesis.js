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
exports.GenesisState = exports.EpochInfo = void 0;
var timestamp_1 = require("../../google/protobuf/timestamp");
var duration_1 = require("../../google/protobuf/duration");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseEpochInfo() {
    return {
        identifier: "",
        startTime: undefined,
        duration: undefined,
        currentEpoch: helpers_1.Long.ZERO,
        currentEpochStartTime: undefined,
        epochCountingStarted: false,
        currentEpochStartHeight: helpers_1.Long.ZERO
    };
}
exports.EpochInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (!message.currentEpoch.isZero()) {
            writer.uint32(32).int64(message.currentEpoch);
        }
        if (message.currentEpochStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.epochCountingStarted === true) {
            writer.uint32(48).bool(message.epochCountingStarted);
        }
        if (!message.currentEpochStartHeight.isZero()) {
            writer.uint32(64).int64(message.currentEpochStartHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpochInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.currentEpoch = reader.int64();
                    break;
                case 5:
                    message.currentEpochStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.epochCountingStarted = reader.bool();
                    break;
                case 8:
                    message.currentEpochStartHeight = reader.int64();
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
        var message = createBaseEpochInfo();
        message.identifier = (_a = object.identifier) !== null && _a !== void 0 ? _a : "";
        message.startTime = (_b = object.startTime) !== null && _b !== void 0 ? _b : undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? helpers_1.Long.fromValue(object.currentEpoch) : helpers_1.Long.ZERO;
        message.currentEpochStartTime = (_c = object.currentEpochStartTime) !== null && _c !== void 0 ? _c : undefined;
        message.epochCountingStarted = (_d = object.epochCountingStarted) !== null && _d !== void 0 ? _d : false;
        message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? helpers_1.Long.fromValue(object.currentEpochStartHeight) : helpers_1.Long.ZERO;
        return message;
    }
};
function createBaseGenesisState() {
    return {
        epochs: []
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.epochs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.epochs.push(exports.EpochInfo.decode(reader, reader.uint32()));
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
        message.epochs = ((_a = object.epochs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.EpochInfo.fromPartial(e); })) || [];
        return message;
    }
};
