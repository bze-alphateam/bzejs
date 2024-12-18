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
exports.Params = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        createMarketFee: "",
        marketMakerFee: "",
        marketTakerFee: "",
        makerFeeDestination: "",
        takerFeeDestination: ""
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.createMarketFee !== "") {
            writer.uint32(10).string(message.createMarketFee);
        }
        if (message.marketMakerFee !== "") {
            writer.uint32(18).string(message.marketMakerFee);
        }
        if (message.marketTakerFee !== "") {
            writer.uint32(26).string(message.marketTakerFee);
        }
        if (message.makerFeeDestination !== "") {
            writer.uint32(34).string(message.makerFeeDestination);
        }
        if (message.takerFeeDestination !== "") {
            writer.uint32(42).string(message.takerFeeDestination);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.createMarketFee = reader.string();
                    break;
                case 2:
                    message.marketMakerFee = reader.string();
                    break;
                case 3:
                    message.marketTakerFee = reader.string();
                    break;
                case 4:
                    message.makerFeeDestination = reader.string();
                    break;
                case 5:
                    message.takerFeeDestination = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseParams();
        message.createMarketFee = (_a = object.createMarketFee) !== null && _a !== void 0 ? _a : "";
        message.marketMakerFee = (_b = object.marketMakerFee) !== null && _b !== void 0 ? _b : "";
        message.marketTakerFee = (_c = object.marketTakerFee) !== null && _c !== void 0 ? _c : "";
        message.makerFeeDestination = (_d = object.makerFeeDestination) !== null && _d !== void 0 ? _d : "";
        message.takerFeeDestination = (_e = object.takerFeeDestination) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
