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
exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgChangeAdminResponse = exports.MsgChangeAdmin = exports.MsgBurnResponse = exports.MsgBurn = exports.MsgMintResponse = exports.MsgMint = exports.MsgCreateDenomResponse = exports.MsgCreateDenom = void 0;
var bank_1 = require("../../cosmos/bank/v1beta1/bank");
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgCreateDenom() {
    return {
        creator: "",
        subdenom: ""
    };
}
exports.MsgCreateDenom = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
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
        var message = createBaseMsgCreateDenom();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.subdenom = (_b = object.subdenom) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgCreateDenomResponse() {
    return {
        newDenom: ""
    };
}
exports.MsgCreateDenomResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.newDenom !== "") {
            writer.uint32(10).string(message.newDenom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateDenomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newDenom = reader.string();
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
        var message = createBaseMsgCreateDenomResponse();
        message.newDenom = (_a = object.newDenom) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseMsgMint() {
    return {
        creator: "",
        coins: ""
    };
}
exports.MsgMint = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.coins !== "") {
            writer.uint32(18).string(message.coins);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgMint();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.coins = reader.string();
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
        var message = createBaseMsgMint();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.coins = (_b = object.coins) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgMintResponse() {
    return {};
}
exports.MsgMintResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgMintResponse();
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
        var message = createBaseMsgMintResponse();
        return message;
    }
};
function createBaseMsgBurn() {
    return {
        creator: "",
        coins: ""
    };
}
exports.MsgBurn = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.coins !== "") {
            writer.uint32(18).string(message.coins);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBurn();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.coins = reader.string();
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
        var message = createBaseMsgBurn();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.coins = (_b = object.coins) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseMsgBurnResponse() {
    return {};
}
exports.MsgBurnResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBurnResponse();
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
        var message = createBaseMsgBurnResponse();
        return message;
    }
};
function createBaseMsgChangeAdmin() {
    return {
        creator: "",
        denom: "",
        newAdmin: ""
    };
}
exports.MsgChangeAdmin = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChangeAdmin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
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
        var message = createBaseMsgChangeAdmin();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.newAdmin = (_c = object.newAdmin) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgChangeAdminResponse() {
    return {};
}
exports.MsgChangeAdminResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChangeAdminResponse();
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
        var message = createBaseMsgChangeAdminResponse();
        return message;
    }
};
function createBaseMsgSetDenomMetadata() {
    return {
        creator: "",
        metadata: undefined
    };
}
exports.MsgSetDenomMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
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
        var message = createBaseMsgSetDenomMetadata();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? bank_1.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    }
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
exports.MsgSetDenomMetadataResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetDenomMetadataResponse();
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
        var message = createBaseMsgSetDenomMetadataResponse();
        return message;
    }
};
