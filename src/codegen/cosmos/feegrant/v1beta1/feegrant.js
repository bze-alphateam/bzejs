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
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var duration_1 = require("../../../google/protobuf/duration");
var any_1 = require("../../../google/protobuf/any");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseBasicAllowance() {
    return {
        spendLimit: [],
        expiration: undefined
    };
}
exports.BasicAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.spendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBasicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBaseBasicAllowance();
        message.spendLimit = ((_a = object.spendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.expiration = (_b = object.expiration) !== null && _b !== void 0 ? _b : undefined;
        return message;
    }
};
function createBasePeriodicAllowance() {
    return {
        basic: undefined,
        period: undefined,
        periodSpendLimit: [],
        periodCanSpend: [],
        periodReset: undefined
    };
}
exports.PeriodicAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.periodSpendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.periodCanSpend; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.periodReset !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.periodReset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.periodSpendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.periodCanSpend.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.periodReset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        var message = createBasePeriodicAllowance();
        message.basic = object.basic !== undefined && object.basic !== null ? exports.BasicAllowance.fromPartial(object.basic) : undefined;
        message.period = object.period !== undefined && object.period !== null ? duration_1.Duration.fromPartial(object.period) : undefined;
        message.periodSpendLimit = ((_a = object.periodSpendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.periodCanSpend = ((_b = object.periodCanSpend) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.periodReset = (_c = object.periodReset) !== null && _c !== void 0 ? _c : undefined;
        return message;
    }
};
function createBaseAllowedMsgAllowance() {
    return {
        allowance: undefined,
        allowedMessages: []
    };
}
exports.AllowedMsgAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.allowedMessages; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowedMessages.push(reader.string());
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
        var message = createBaseAllowedMsgAllowance();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        message.allowedMessages = ((_a = object.allowedMessages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseGrant() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.Grant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGrant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
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
        var message = createBaseGrant();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        return message;
    }
};
