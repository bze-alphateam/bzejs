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
exports.BitArray = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../../helpers");
function createBaseBitArray() {
    return {
        bits: helpers_1.Long.ZERO,
        elems: []
    };
}
exports.BitArray = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.bits.isZero()) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.elems; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBitArray();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
                    }
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
        var message = createBaseBitArray();
        message.bits = object.bits !== undefined && object.bits !== null ? helpers_1.Long.fromValue(object.bits) : helpers_1.Long.ZERO;
        message.elems = ((_a = object.elems) === null || _a === void 0 ? void 0 : _a.map(function (e) { return helpers_1.Long.fromValue(e); })) || [];
        return message;
    }
};
