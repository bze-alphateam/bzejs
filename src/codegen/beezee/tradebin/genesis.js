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
var market_1 = require("./market");
var queue_message_1 = require("./queue_message");
var order_1 = require("./order");
var _m0 = __importStar(require("protobufjs/minimal"));
var helpers_1 = require("../../helpers");
function createBaseGenesisState() {
    return {
        params: undefined,
        marketList: [],
        queueMessageList: [],
        orderList: [],
        aggregatedOrderList: [],
        historyOrderList: [],
        orderCounter: helpers_1.Long.ZERO
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.marketList; _i < _a.length; _i++) {
            var v = _a[_i];
            market_1.Market.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.queueMessageList; _b < _c.length; _b++) {
            var v = _c[_b];
            queue_message_1.QueueMessage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.orderList; _d < _e.length; _d++) {
            var v = _e[_d];
            order_1.Order.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _f = 0, _g = message.aggregatedOrderList; _f < _g.length; _f++) {
            var v = _g[_f];
            order_1.AggregatedOrder.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _h = 0, _j = message.historyOrderList; _h < _j.length; _h++) {
            var v = _j[_h];
            order_1.HistoryOrder.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (!message.orderCounter.isZero()) {
            writer.uint32(56).int64(message.orderCounter);
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
                    message.marketList.push(market_1.Market.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.queueMessageList.push(queue_message_1.QueueMessage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.orderList.push(order_1.Order.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.aggregatedOrderList.push(order_1.AggregatedOrder.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.historyOrderList.push(order_1.HistoryOrder.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.orderCounter = reader.int64();
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
        var message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.marketList = ((_a = object.marketList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_1.Market.fromPartial(e); })) || [];
        message.queueMessageList = ((_b = object.queueMessageList) === null || _b === void 0 ? void 0 : _b.map(function (e) { return queue_message_1.QueueMessage.fromPartial(e); })) || [];
        message.orderList = ((_c = object.orderList) === null || _c === void 0 ? void 0 : _c.map(function (e) { return order_1.Order.fromPartial(e); })) || [];
        message.aggregatedOrderList = ((_d = object.aggregatedOrderList) === null || _d === void 0 ? void 0 : _d.map(function (e) { return order_1.AggregatedOrder.fromPartial(e); })) || [];
        message.historyOrderList = ((_e = object.historyOrderList) === null || _e === void 0 ? void 0 : _e.map(function (e) { return order_1.HistoryOrder.fromPartial(e); })) || [];
        message.orderCounter = object.orderCounter !== undefined && object.orderCounter !== null ? helpers_1.Long.fromValue(object.orderCounter) : helpers_1.Long.ZERO;
        return message;
    }
};
