"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/bze.tradebin.v1.MsgCreateMarket": {
        aminoType: "/bze.tradebin.v1.MsgCreateMarket",
        toAmino: function (_a) {
            var creator = _a.creator, base = _a.base, quote = _a.quote;
            return {
                creator: creator,
                base: base,
                quote: quote
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, base = _a.base, quote = _a.quote;
            return {
                creator: creator,
                base: base,
                quote: quote
            };
        }
    },
    "/bze.tradebin.v1.MsgCreateOrder": {
        aminoType: "/bze.tradebin.v1.MsgCreateOrder",
        toAmino: function (_a) {
            var creator = _a.creator, orderType = _a.orderType, amount = _a.amount, price = _a.price, marketId = _a.marketId;
            return {
                creator: creator,
                order_type: orderType,
                amount: amount,
                price: price,
                marketId: marketId
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, order_type = _a.order_type, amount = _a.amount, price = _a.price, marketId = _a.marketId;
            return {
                creator: creator,
                orderType: order_type,
                amount: amount,
                price: price,
                marketId: marketId
            };
        }
    },
    "/bze.tradebin.v1.MsgCancelOrder": {
        aminoType: "/bze.tradebin.v1.MsgCancelOrder",
        toAmino: function (_a) {
            var creator = _a.creator, marketId = _a.marketId, orderId = _a.orderId, orderType = _a.orderType;
            return {
                creator: creator,
                marketId: marketId,
                orderId: orderId,
                order_type: orderType
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, marketId = _a.marketId, orderId = _a.orderId, order_type = _a.order_type;
            return {
                creator: creator,
                marketId: marketId,
                orderId: orderId,
                orderType: order_type
            };
        }
    }
};
