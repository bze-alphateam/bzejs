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
exports.GenesisState = void 0;
var transfer_1 = require("./transfer");
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        portId: "",
        denomTraces: [],
        params: undefined
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        for (var _i = 0, _a = message.denomTraces; _i < _a.length; _i++) {
            var v = _a[_i];
            transfer_1.DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
                    message.portId = reader.string();
                    break;
                case 2:
                    message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
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
        var message = createBaseGenesisState();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.denomTraces = ((_b = object.denomTraces) === null || _b === void 0 ? void 0 : _b.map(function (e) { return transfer_1.DenomTrace.fromPartial(e); })) || [];
        message.params = object.params !== undefined && object.params !== null ? transfer_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
