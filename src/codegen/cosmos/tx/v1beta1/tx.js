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
exports.AuxSignerData = exports.Tip = exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDocDirectAux = exports.SignDoc = exports.TxRaw = exports.Tx = void 0;
var any_1 = require("../../../google/protobuf/any");
var multisig_1 = require("../../crypto/multisig/v1beta1/multisig");
var coin_1 = require("../../base/v1beta1/coin");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseTx() {
    return {
        body: undefined,
        authInfo: undefined,
        signatures: []
    };
}
exports.Tx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            exports.AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
        var message = createBaseTx();
        message.body = object.body !== undefined && object.body !== null ? exports.TxBody.fromPartial(object.body) : undefined;
        message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? exports.AuthInfo.fromPartial(object.authInfo) : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseTxRaw() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        signatures: []
    };
}
exports.TxRaw = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxRaw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
        var message = createBaseTxRaw();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.authInfoBytes = (_b = object.authInfoBytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseSignDoc() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: "",
        accountNumber: helpers_1.Long.UZERO
    };
}
exports.SignDoc = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignDoc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
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
        var message = createBaseSignDoc();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.authInfoBytes = (_b = object.authInfoBytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.chainId = (_c = object.chainId) !== null && _c !== void 0 ? _c : "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? helpers_1.Long.fromValue(object.accountNumber) : helpers_1.Long.UZERO;
        return message;
    }
};
function createBaseSignDocDirectAux() {
    return {
        bodyBytes: new Uint8Array(),
        publicKey: undefined,
        chainId: "",
        accountNumber: helpers_1.Long.UZERO,
        sequence: helpers_1.Long.UZERO,
        tip: undefined
    };
}
exports.SignDocDirectAux = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
        var message = createBaseSignDocDirectAux();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.chainId = (_b = object.chainId) !== null && _b !== void 0 ? _b : "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? helpers_1.Long.fromValue(object.accountNumber) : helpers_1.Long.UZERO;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    }
};
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeoutHeight: helpers_1.Long.UZERO,
        extensionOptions: [],
        nonCriticalExtensionOptions: []
    };
}
exports.TxBody = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (!message.timeoutHeight.isZero()) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (var _b = 0, _c = message.extensionOptions; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (var _d = 0, _e = message.nonCriticalExtensionOptions; _d < _e.length; _d++) {
            var v = _e[_d];
            any_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
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
        var message = createBaseTxBody();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.memo = (_b = object.memo) !== null && _b !== void 0 ? _b : "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? helpers_1.Long.fromValue(object.timeoutHeight) : helpers_1.Long.UZERO;
        message.extensionOptions = ((_c = object.extensionOptions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.nonCriticalExtensionOptions = ((_d = object.nonCriticalExtensionOptions) === null || _d === void 0 ? void 0 : _d.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseAuthInfo() {
    return {
        signerInfos: [],
        fee: undefined,
        tip: undefined
    };
}
exports.AuthInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.signerInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuthInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
        var message = createBaseAuthInfo();
        message.signerInfos = ((_a = object.signerInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignerInfo.fromPartial(e); })) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? exports.Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    }
};
function createBaseSignerInfo() {
    return {
        publicKey: undefined,
        modeInfo: undefined,
        sequence: helpers_1.Long.UZERO
    };
}
exports.SignerInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            exports.ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = exports.ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSignerInfo();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? exports.ModeInfo.fromPartial(object.modeInfo) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        return message;
    }
};
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
exports.ModeInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseModeInfo();
        message.single = object.single !== undefined && object.single !== null ? exports.ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    }
};
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
exports.ModeInfo_Single = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
        var message = createBaseModeInfo_Single();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        modeInfos: []
    };
}
exports.ModeInfo_Multi = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.modeInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(exports.ModeInfo.decode(reader, reader.uint32()));
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
        var message = createBaseModeInfo_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? multisig_1.CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.modeInfos = ((_a = object.modeInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModeInfo.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseFee() {
    return {
        amount: [],
        gasLimit: helpers_1.Long.UZERO,
        payer: "",
        granter: ""
    };
}
exports.Fee = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.gasLimit.isZero()) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFee();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
        var message = createBaseFee();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? helpers_1.Long.fromValue(object.gasLimit) : helpers_1.Long.UZERO;
        message.payer = (_b = object.payer) !== null && _b !== void 0 ? _b : "";
        message.granter = (_c = object.granter) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
exports.Tip = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTip();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
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
        var message = createBaseTip();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.tipper = (_b = object.tipper) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseAuxSignerData() {
    return {
        address: "",
        signDoc: undefined,
        mode: 0,
        sig: new Uint8Array()
    };
}
exports.AuxSignerData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.signDoc !== undefined) {
            exports.SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuxSignerData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signDoc = exports.SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
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
        var message = createBaseAuxSignerData();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? exports.SignDocDirectAux.fromPartial(object.signDoc) : undefined;
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        message.sig = (_c = object.sig) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
