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
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = void 0;
var auth_1 = require("../../auth/v1beta1/auth");
var coin_1 = require("../../base/v1beta1/coin");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseBaseVestingAccount() {
    return {
        baseAccount: undefined,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: helpers_1.Long.ZERO
    };
}
exports.BaseVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.originalVesting; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.delegatedFree; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegatedVesting; _d < _e.length; _d++) {
            var v = _e[_d];
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (!message.endTime.isZero()) {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.originalVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegatedFree.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegatedVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = reader.int64();
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
        var message = createBaseBaseVestingAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? auth_1.BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.originalVesting = ((_a = object.originalVesting) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.delegatedFree = ((_b = object.delegatedFree) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.delegatedVesting = ((_c = object.delegatedVesting) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? helpers_1.Long.fromValue(object.endTime) : helpers_1.Long.ZERO;
        return message;
    }
};
function createBaseContinuousVestingAccount() {
    return {
        baseVestingAccount: undefined,
        startTime: helpers_1.Long.ZERO
    };
}
exports.ContinuousVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (!message.startTime.isZero()) {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseContinuousVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.startTime = object.startTime !== undefined && object.startTime !== null ? helpers_1.Long.fromValue(object.startTime) : helpers_1.Long.ZERO;
        return message;
    }
};
function createBaseDelayedVestingAccount() {
    return {
        baseVestingAccount: undefined
    };
}
exports.DelayedVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseDelayedVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        return message;
    }
};
function createBasePeriod() {
    return {
        length: helpers_1.Long.ZERO,
        amount: []
    };
}
exports.Period = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.length.isZero()) {
            writer.uint32(8).int64(message.length);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = reader.int64();
                    break;
                case 2:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBasePeriod();
        message.length = object.length !== undefined && object.length !== null ? helpers_1.Long.fromValue(object.length) : helpers_1.Long.ZERO;
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        startTime: helpers_1.Long.ZERO,
        vestingPeriods: []
    };
}
exports.PeriodicVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (!message.startTime.isZero()) {
            writer.uint32(16).int64(message.startTime);
        }
        for (var _i = 0, _a = message.vestingPeriods; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                case 3:
                    message.vestingPeriods.push(exports.Period.decode(reader, reader.uint32()));
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
        var message = createBasePeriodicVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.startTime = object.startTime !== undefined && object.startTime !== null ? helpers_1.Long.fromValue(object.startTime) : helpers_1.Long.ZERO;
        message.vestingPeriods = ((_a = object.vestingPeriods) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Period.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePermanentLockedAccount() {
    return {
        baseVestingAccount: undefined
    };
}
exports.PermanentLockedAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBasePermanentLockedAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        return message;
    }
};
