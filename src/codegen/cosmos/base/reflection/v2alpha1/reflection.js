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
exports.QueryMethodDescriptor = exports.QueryServiceDescriptor = exports.QueryServicesDescriptor = exports.GetTxDescriptorResponse = exports.GetTxDescriptorRequest = exports.GetQueryServicesDescriptorResponse = exports.GetQueryServicesDescriptorRequest = exports.GetConfigurationDescriptorResponse = exports.GetConfigurationDescriptorRequest = exports.GetCodecDescriptorResponse = exports.GetCodecDescriptorRequest = exports.GetChainDescriptorResponse = exports.GetChainDescriptorRequest = exports.GetAuthnDescriptorResponse = exports.GetAuthnDescriptorRequest = exports.MsgDescriptor = exports.ConfigurationDescriptor = exports.InterfaceAcceptingMessageDescriptor = exports.InterfaceImplementerDescriptor = exports.InterfaceDescriptor = exports.CodecDescriptor = exports.ChainDescriptor = exports.SigningModeDescriptor = exports.AuthnDescriptor = exports.TxDescriptor = exports.AppDescriptor = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseAppDescriptor() {
    return {
        authn: undefined,
        chain: undefined,
        codec: undefined,
        configuration: undefined,
        queryServices: undefined,
        tx: undefined
    };
}
exports.AppDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
        }
        if (message.configuration !== undefined) {
            exports.ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.queryServices !== undefined) {
            exports.QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
        }
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configuration = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.queryServices = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseAppDescriptor();
        message.authn = object.authn !== undefined && object.authn !== null ? exports.AuthnDescriptor.fromPartial(object.authn) : undefined;
        message.chain = object.chain !== undefined && object.chain !== null ? exports.ChainDescriptor.fromPartial(object.chain) : undefined;
        message.codec = object.codec !== undefined && object.codec !== null ? exports.CodecDescriptor.fromPartial(object.codec) : undefined;
        message.configuration = object.configuration !== undefined && object.configuration !== null ? exports.ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
        message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? exports.QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
        message.tx = object.tx !== undefined && object.tx !== null ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    }
};
function createBaseTxDescriptor() {
    return {
        fullname: "",
        msgs: []
    };
}
exports.TxDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (var _i = 0, _a = message.msgs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.msgs.push(exports.MsgDescriptor.decode(reader, reader.uint32()));
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
        var message = createBaseTxDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.msgs = ((_b = object.msgs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MsgDescriptor.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseAuthnDescriptor() {
    return {
        signModes: []
    };
}
exports.AuthnDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.signModes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuthnDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signModes.push(exports.SigningModeDescriptor.decode(reader, reader.uint32()));
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
        var message = createBaseAuthnDescriptor();
        message.signModes = ((_a = object.signModes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SigningModeDescriptor.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSigningModeDescriptor() {
    return {
        name: "",
        number: 0,
        authnInfoProviderMethodFullname: ""
    };
}
exports.SigningModeDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.authnInfoProviderMethodFullname !== "") {
            writer.uint32(26).string(message.authnInfoProviderMethodFullname);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSigningModeDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.authnInfoProviderMethodFullname = reader.string();
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
        var message = createBaseSigningModeDescriptor();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.authnInfoProviderMethodFullname = (_c = object.authnInfoProviderMethodFullname) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseChainDescriptor() {
    return {
        id: ""
    };
}
exports.ChainDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseChainDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
        var message = createBaseChainDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseCodecDescriptor() {
    return {
        interfaces: []
    };
}
exports.CodecDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.interfaces; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCodecDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaces.push(exports.InterfaceDescriptor.decode(reader, reader.uint32()));
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
        var message = createBaseCodecDescriptor();
        message.interfaces = ((_a = object.interfaces) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.InterfaceDescriptor.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseInterfaceDescriptor() {
    return {
        fullname: "",
        interfaceAcceptingMessages: [],
        interfaceImplementers: []
    };
}
exports.InterfaceDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (var _i = 0, _a = message.interfaceAcceptingMessages; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.interfaceImplementers; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.interfaceAcceptingMessages.push(exports.InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.interfaceImplementers.push(exports.InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
        var message = createBaseInterfaceDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.interfaceAcceptingMessages = ((_b = object.interfaceAcceptingMessages) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.InterfaceAcceptingMessageDescriptor.fromPartial(e); })) || [];
        message.interfaceImplementers = ((_c = object.interfaceImplementers) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.InterfaceImplementerDescriptor.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseInterfaceImplementerDescriptor() {
    return {
        fullname: "",
        typeUrl: ""
    };
}
exports.InterfaceImplementerDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.typeUrl !== "") {
            writer.uint32(18).string(message.typeUrl);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterfaceImplementerDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.typeUrl = reader.string();
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
        var message = createBaseInterfaceImplementerDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.typeUrl = (_b = object.typeUrl) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseInterfaceAcceptingMessageDescriptor() {
    return {
        fullname: "",
        fieldDescriptorNames: []
    };
}
exports.InterfaceAcceptingMessageDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (var _i = 0, _a = message.fieldDescriptorNames; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterfaceAcceptingMessageDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.fieldDescriptorNames.push(reader.string());
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
        var message = createBaseInterfaceAcceptingMessageDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.fieldDescriptorNames = ((_b = object.fieldDescriptorNames) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseConfigurationDescriptor() {
    return {
        bech32AccountAddressPrefix: ""
    };
}
exports.ConfigurationDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bech32AccountAddressPrefix !== "") {
            writer.uint32(10).string(message.bech32AccountAddressPrefix);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigurationDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32AccountAddressPrefix = reader.string();
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
        var message = createBaseConfigurationDescriptor();
        message.bech32AccountAddressPrefix = (_a = object.bech32AccountAddressPrefix) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseMsgDescriptor() {
    return {
        msgTypeUrl: ""
    };
}
exports.MsgDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.msgTypeUrl !== "") {
            writer.uint32(10).string(message.msgTypeUrl);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgTypeUrl = reader.string();
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
        var message = createBaseMsgDescriptor();
        message.msgTypeUrl = (_a = object.msgTypeUrl) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseGetAuthnDescriptorRequest() {
    return {};
}
exports.GetAuthnDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAuthnDescriptorRequest();
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
        var message = createBaseGetAuthnDescriptorRequest();
        return message;
    }
};
function createBaseGetAuthnDescriptorResponse() {
    return {
        authn: undefined
    };
}
exports.GetAuthnDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAuthnDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetAuthnDescriptorResponse();
        message.authn = object.authn !== undefined && object.authn !== null ? exports.AuthnDescriptor.fromPartial(object.authn) : undefined;
        return message;
    }
};
function createBaseGetChainDescriptorRequest() {
    return {};
}
exports.GetChainDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetChainDescriptorRequest();
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
        var message = createBaseGetChainDescriptorRequest();
        return message;
    }
};
function createBaseGetChainDescriptorResponse() {
    return {
        chain: undefined
    };
}
exports.GetChainDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetChainDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetChainDescriptorResponse();
        message.chain = object.chain !== undefined && object.chain !== null ? exports.ChainDescriptor.fromPartial(object.chain) : undefined;
        return message;
    }
};
function createBaseGetCodecDescriptorRequest() {
    return {};
}
exports.GetCodecDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetCodecDescriptorRequest();
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
        var message = createBaseGetCodecDescriptorRequest();
        return message;
    }
};
function createBaseGetCodecDescriptorResponse() {
    return {
        codec: undefined
    };
}
exports.GetCodecDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetCodecDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetCodecDescriptorResponse();
        message.codec = object.codec !== undefined && object.codec !== null ? exports.CodecDescriptor.fromPartial(object.codec) : undefined;
        return message;
    }
};
function createBaseGetConfigurationDescriptorRequest() {
    return {};
}
exports.GetConfigurationDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetConfigurationDescriptorRequest();
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
        var message = createBaseGetConfigurationDescriptorRequest();
        return message;
    }
};
function createBaseGetConfigurationDescriptorResponse() {
    return {
        config: undefined
    };
}
exports.GetConfigurationDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.config !== undefined) {
            exports.ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetConfigurationDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetConfigurationDescriptorResponse();
        message.config = object.config !== undefined && object.config !== null ? exports.ConfigurationDescriptor.fromPartial(object.config) : undefined;
        return message;
    }
};
function createBaseGetQueryServicesDescriptorRequest() {
    return {};
}
exports.GetQueryServicesDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetQueryServicesDescriptorRequest();
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
        var message = createBaseGetQueryServicesDescriptorRequest();
        return message;
    }
};
function createBaseGetQueryServicesDescriptorResponse() {
    return {
        queries: undefined
    };
}
exports.GetQueryServicesDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.queries !== undefined) {
            exports.QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetQueryServicesDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetQueryServicesDescriptorResponse();
        message.queries = object.queries !== undefined && object.queries !== null ? exports.QueryServicesDescriptor.fromPartial(object.queries) : undefined;
        return message;
    }
};
function createBaseGetTxDescriptorRequest() {
    return {};
}
exports.GetTxDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxDescriptorRequest();
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
        var message = createBaseGetTxDescriptorRequest();
        return message;
    }
};
function createBaseGetTxDescriptorResponse() {
    return {
        tx: undefined
    };
}
exports.GetTxDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetTxDescriptorResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    }
};
function createBaseQueryServicesDescriptor() {
    return {
        queryServices: []
    };
}
exports.QueryServicesDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.queryServices; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryServicesDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryServices.push(exports.QueryServiceDescriptor.decode(reader, reader.uint32()));
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
        var message = createBaseQueryServicesDescriptor();
        message.queryServices = ((_a = object.queryServices) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.QueryServiceDescriptor.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseQueryServiceDescriptor() {
    return {
        fullname: "",
        isModule: false,
        methods: []
    };
}
exports.QueryServiceDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.isModule === true) {
            writer.uint32(16).bool(message.isModule);
        }
        for (var _i = 0, _a = message.methods; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryServiceDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.isModule = reader.bool();
                    break;
                case 3:
                    message.methods.push(exports.QueryMethodDescriptor.decode(reader, reader.uint32()));
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
        var message = createBaseQueryServiceDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.isModule = (_b = object.isModule) !== null && _b !== void 0 ? _b : false;
        message.methods = ((_c = object.methods) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.QueryMethodDescriptor.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseQueryMethodDescriptor() {
    return {
        name: "",
        fullQueryPath: ""
    };
}
exports.QueryMethodDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.fullQueryPath !== "") {
            writer.uint32(18).string(message.fullQueryPath);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMethodDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.fullQueryPath = reader.string();
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
        var message = createBaseQueryMethodDescriptor();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.fullQueryPath = (_b = object.fullQueryPath) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
