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
exports.SignatureDescriptor_Data_Multi = exports.SignatureDescriptor_Data_Single = exports.SignatureDescriptor_Data = exports.SignatureDescriptor = exports.SignatureDescriptors = exports.signModeToJSON = exports.signModeFromJSON = exports.SignModeSDKType = exports.SignMode = void 0;
var multisig_1 = require("../../../crypto/multisig/v1beta1/multisig");
var any_1 = require("../../../../google/protobuf/any");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../../helpers");
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
var SignMode;
(function (SignMode) {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected.
     */
    SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx.
     */
    SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT. It is currently not supported.
     */
    SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
    /**
     * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
     * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
     * require signers signing over other signers' `signer_info`. It also allows
     * for adding Tips in transactions.
     *
     * Since: cosmos-sdk 0.46
     */
    SignMode[SignMode["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future.
     */
    SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
    SignMode[SignMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignMode = exports.SignMode || (exports.SignMode = {}));
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
var SignModeSDKType;
(function (SignModeSDKType) {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected.
     */
    SignModeSDKType[SignModeSDKType["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx.
     */
    SignModeSDKType[SignModeSDKType["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT. It is currently not supported.
     */
    SignModeSDKType[SignModeSDKType["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
    /**
     * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
     * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
     * require signers signing over other signers' `signer_info`. It also allows
     * for adding Tips in transactions.
     *
     * Since: cosmos-sdk 0.46
     */
    SignModeSDKType[SignModeSDKType["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future.
     */
    SignModeSDKType[SignModeSDKType["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
    SignModeSDKType[SignModeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignModeSDKType = exports.SignModeSDKType || (exports.SignModeSDKType = {}));
function signModeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGN_MODE_UNSPECIFIED":
            return SignMode.SIGN_MODE_UNSPECIFIED;
        case 1:
        case "SIGN_MODE_DIRECT":
            return SignMode.SIGN_MODE_DIRECT;
        case 2:
        case "SIGN_MODE_TEXTUAL":
            return SignMode.SIGN_MODE_TEXTUAL;
        case 3:
        case "SIGN_MODE_DIRECT_AUX":
            return SignMode.SIGN_MODE_DIRECT_AUX;
        case 127:
        case "SIGN_MODE_LEGACY_AMINO_JSON":
            return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignMode.UNRECOGNIZED;
    }
}
exports.signModeFromJSON = signModeFromJSON;
function signModeToJSON(object) {
    switch (object) {
        case SignMode.SIGN_MODE_UNSPECIFIED:
            return "SIGN_MODE_UNSPECIFIED";
        case SignMode.SIGN_MODE_DIRECT:
            return "SIGN_MODE_DIRECT";
        case SignMode.SIGN_MODE_TEXTUAL:
            return "SIGN_MODE_TEXTUAL";
        case SignMode.SIGN_MODE_DIRECT_AUX:
            return "SIGN_MODE_DIRECT_AUX";
        case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
            return "SIGN_MODE_LEGACY_AMINO_JSON";
        case SignMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signModeToJSON = signModeToJSON;
function createBaseSignatureDescriptors() {
    return {
        signatures: []
    };
}
exports.SignatureDescriptors = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptors();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(exports.SignatureDescriptor.decode(reader, reader.uint32()));
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
        var message = createBaseSignatureDescriptors();
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignatureDescriptor.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSignatureDescriptor() {
    return {
        publicKey: undefined,
        data: undefined,
        sequence: helpers_1.Long.UZERO
    };
}
exports.SignatureDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            exports.SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = exports.SignatureDescriptor_Data.decode(reader, reader.uint32());
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
        var message = createBaseSignatureDescriptor();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.data = object.data !== undefined && object.data !== null ? exports.SignatureDescriptor_Data.fromPartial(object.data) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        return message;
    }
};
function createBaseSignatureDescriptor_Data() {
    return {
        single: undefined,
        multi: undefined
    };
}
exports.SignatureDescriptor_Data = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.single !== undefined) {
            exports.SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor_Data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSignatureDescriptor_Data();
        message.single = object.single !== undefined && object.single !== null ? exports.SignatureDescriptor_Data_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.SignatureDescriptor_Data_Multi.fromPartial(object.multi) : undefined;
        return message;
    }
};
function createBaseSignatureDescriptor_Data_Single() {
    return {
        mode: 0,
        signature: new Uint8Array()
    };
}
exports.SignatureDescriptor_Data_Single = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor_Data_Single();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.signature = reader.bytes();
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
        var message = createBaseSignatureDescriptor_Data_Single();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseSignatureDescriptor_Data_Multi() {
    return {
        bitarray: undefined,
        signatures: []
    };
}
exports.SignatureDescriptor_Data_Multi = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor_Data_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(exports.SignatureDescriptor_Data.decode(reader, reader.uint32()));
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
        var message = createBaseSignatureDescriptor_Data_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? multisig_1.CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignatureDescriptor_Data.fromPartial(e); })) || [];
        return message;
    }
};
