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
exports.QueryMarketOrderResponse = exports.QueryMarketOrderRequest = exports.QueryMarketHistoryResponse = exports.QueryMarketHistoryRequest = exports.QueryMarketAggregatedOrdersResponse = exports.QueryMarketAggregatedOrdersRequest = exports.QueryUserMarketOrdersResponse = exports.QueryUserMarketOrdersRequest = exports.QueryAssetMarketsResponse = exports.QueryAssetMarketsRequest = exports.QueryAllMarketResponse = exports.QueryAllMarketRequest = exports.QueryGetMarketResponse = exports.QueryGetMarketRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var params_1 = require("./params");
var market_1 = require("./market");
var order_1 = require("./order");
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
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
        var message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryGetMarketRequest() {
    return {
        base: "",
        quote: ""
    };
}
exports.QueryGetMarketRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.base !== "") {
            writer.uint32(10).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(18).string(message.quote);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetMarketRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = reader.string();
                    break;
                case 2:
                    message.quote = reader.string();
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
        var message = createBaseQueryGetMarketRequest();
        message.base = (_a = object.base) !== null && _a !== void 0 ? _a : "";
        message.quote = (_b = object.quote) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryGetMarketResponse() {
    return {
        market: undefined
    };
}
exports.QueryGetMarketResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.market !== undefined) {
            market_1.Market.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetMarketResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = market_1.Market.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGetMarketResponse();
        message.market = object.market !== undefined && object.market !== null ? market_1.Market.fromPartial(object.market) : undefined;
        return message;
    }
};
function createBaseQueryAllMarketRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllMarketRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMarketRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllMarketRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllMarketResponse() {
    return {
        market: [],
        pagination: undefined
    };
}
exports.QueryAllMarketResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.market; _i < _a.length; _i++) {
            var v = _a[_i];
            market_1.Market.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllMarketResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market.push(market_1.Market.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryAllMarketResponse();
        message.market = ((_a = object.market) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_1.Market.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAssetMarketsRequest() {
    return {
        asset: ""
    };
}
exports.QueryAssetMarketsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAssetMarketsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = reader.string();
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
        var message = createBaseQueryAssetMarketsRequest();
        message.asset = (_a = object.asset) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAssetMarketsResponse() {
    return {
        base: [],
        quote: []
    };
}
exports.QueryAssetMarketsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.base; _i < _a.length; _i++) {
            var v = _a[_i];
            market_1.Market.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.quote; _b < _c.length; _b++) {
            var v = _c[_b];
            market_1.Market.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAssetMarketsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base.push(market_1.Market.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.quote.push(market_1.Market.decode(reader, reader.uint32()));
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
        var message = createBaseQueryAssetMarketsResponse();
        message.base = ((_a = object.base) === null || _a === void 0 ? void 0 : _a.map(function (e) { return market_1.Market.fromPartial(e); })) || [];
        message.quote = ((_b = object.quote) === null || _b === void 0 ? void 0 : _b.map(function (e) { return market_1.Market.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseQueryUserMarketOrdersRequest() {
    return {
        address: "",
        market: "",
        pagination: undefined
    };
}
exports.QueryUserMarketOrdersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.market !== "") {
            writer.uint32(18).string(message.market);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUserMarketOrdersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.market = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        var message = createBaseQueryUserMarketOrdersRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.market = (_b = object.market) !== null && _b !== void 0 ? _b : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryUserMarketOrdersResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryUserMarketOrdersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            order_1.OrderReference.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUserMarketOrdersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(order_1.OrderReference.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryUserMarketOrdersResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return order_1.OrderReference.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryMarketAggregatedOrdersRequest() {
    return {
        market: "",
        orderType: "",
        pagination: undefined
    };
}
exports.QueryMarketAggregatedOrdersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.market !== "") {
            writer.uint32(10).string(message.market);
        }
        if (message.orderType !== "") {
            writer.uint32(18).string(message.orderType);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketAggregatedOrdersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = reader.string();
                    break;
                case 2:
                    message.orderType = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        var message = createBaseQueryMarketAggregatedOrdersRequest();
        message.market = (_a = object.market) !== null && _a !== void 0 ? _a : "";
        message.orderType = (_b = object.orderType) !== null && _b !== void 0 ? _b : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryMarketAggregatedOrdersResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryMarketAggregatedOrdersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            order_1.AggregatedOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketAggregatedOrdersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(order_1.AggregatedOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryMarketAggregatedOrdersResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return order_1.AggregatedOrder.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryMarketHistoryRequest() {
    return {
        market: "",
        pagination: undefined
    };
}
exports.QueryMarketHistoryRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.market !== "") {
            writer.uint32(10).string(message.market);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketHistoryRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        var message = createBaseQueryMarketHistoryRequest();
        message.market = (_a = object.market) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryMarketHistoryResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryMarketHistoryResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            order_1.HistoryOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketHistoryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(order_1.HistoryOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseQueryMarketHistoryResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return order_1.HistoryOrder.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryMarketOrderRequest() {
    return {
        market: "",
        orderType: "",
        orderId: ""
    };
}
exports.QueryMarketOrderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.market !== "") {
            writer.uint32(10).string(message.market);
        }
        if (message.orderType !== "") {
            writer.uint32(18).string(message.orderType);
        }
        if (message.orderId !== "") {
            writer.uint32(26).string(message.orderId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketOrderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = reader.string();
                    break;
                case 2:
                    message.orderType = reader.string();
                    break;
                case 3:
                    message.orderId = reader.string();
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
        var message = createBaseQueryMarketOrderRequest();
        message.market = (_a = object.market) !== null && _a !== void 0 ? _a : "";
        message.orderType = (_b = object.orderType) !== null && _b !== void 0 ? _b : "";
        message.orderId = (_c = object.orderId) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseQueryMarketOrderResponse() {
    return {
        order: undefined
    };
}
exports.QueryMarketOrderResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMarketOrderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = order_1.Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryMarketOrderResponse();
        message.order = object.order !== undefined && object.order !== null ? order_1.Order.fromPartial(object.order) : undefined;
        return message;
    }
};
