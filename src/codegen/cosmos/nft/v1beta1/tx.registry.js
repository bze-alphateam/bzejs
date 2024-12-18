"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.nft.v1beta1.MsgSend", tx_1.MsgSend]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        send: function (value) {
            return {
                typeUrl: "/cosmos.nft.v1beta1.MsgSend",
                value: tx_1.MsgSend.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        send: function (value) {
            return {
                typeUrl: "/cosmos.nft.v1beta1.MsgSend",
                value: value
            };
        }
    },
    fromPartial: {
        send: function (value) {
            return {
                typeUrl: "/cosmos.nft.v1beta1.MsgSend",
                value: tx_1.MsgSend.fromPartial(value)
            };
        }
    }
};
