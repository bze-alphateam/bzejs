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
var params_1 = require("./params");
var burned_coins_1 = require("./burned_coins");
var raffle_1 = require("./raffle");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseGenesisState() {
    return {
        params: undefined,
        burnedCoinsList: [],
        raffleList: [],
        raffleWinnersList: [],
        raffleParticipantsList: [],
        raffleParticipantCounter: helpers_1.Long.UZERO
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.burnedCoinsList; _i < _a.length; _i++) {
            var v = _a[_i];
            burned_coins_1.BurnedCoins.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.raffleList; _b < _c.length; _b++) {
            var v = _c[_b];
            raffle_1.Raffle.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.raffleWinnersList; _d < _e.length; _d++) {
            var v = _e[_d];
            raffle_1.RaffleWinner.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _f = 0, _g = message.raffleParticipantsList; _f < _g.length; _f++) {
            var v = _g[_f];
            raffle_1.RaffleParticipant.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (!message.raffleParticipantCounter.isZero()) {
            writer.uint32(48).uint64(message.raffleParticipantCounter);
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.burnedCoinsList.push(burned_coins_1.BurnedCoins.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.raffleList.push(raffle_1.Raffle.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.raffleWinnersList.push(raffle_1.RaffleWinner.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.raffleParticipantsList.push(raffle_1.RaffleParticipant.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.raffleParticipantCounter = reader.uint64();
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
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.burnedCoinsList = ((_a = object.burnedCoinsList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return burned_coins_1.BurnedCoins.fromPartial(e); })) || [];
        message.raffleList = ((_b = object.raffleList) === null || _b === void 0 ? void 0 : _b.map(function (e) { return raffle_1.Raffle.fromPartial(e); })) || [];
        message.raffleWinnersList = ((_c = object.raffleWinnersList) === null || _c === void 0 ? void 0 : _c.map(function (e) { return raffle_1.RaffleWinner.fromPartial(e); })) || [];
        message.raffleParticipantsList = ((_d = object.raffleParticipantsList) === null || _d === void 0 ? void 0 : _d.map(function (e) { return raffle_1.RaffleParticipant.fromPartial(e); })) || [];
        message.raffleParticipantCounter = object.raffleParticipantCounter !== undefined && object.raffleParticipantCounter !== null ? helpers_1.Long.fromValue(object.raffleParticipantCounter) : helpers_1.Long.UZERO;
        return message;
    }
};
