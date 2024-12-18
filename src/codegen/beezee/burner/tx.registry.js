"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/bze.burner.v1.MsgFundBurner", tx_1.MsgFundBurner], ["/bze.burner.v1.MsgStartRaffle", tx_1.MsgStartRaffle], ["/bze.burner.v1.MsgJoinRaffle", tx_1.MsgJoinRaffle]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        fundBurner: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgFundBurner",
                value: tx_1.MsgFundBurner.encode(value).finish()
            };
        },
        startRaffle: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgStartRaffle",
                value: tx_1.MsgStartRaffle.encode(value).finish()
            };
        },
        joinRaffle: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgJoinRaffle",
                value: tx_1.MsgJoinRaffle.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        fundBurner: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgFundBurner",
                value: value
            };
        },
        startRaffle: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgStartRaffle",
                value: value
            };
        },
        joinRaffle: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgJoinRaffle",
                value: value
            };
        }
    },
    fromPartial: {
        fundBurner: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgFundBurner",
                value: tx_1.MsgFundBurner.fromPartial(value)
            };
        },
        startRaffle: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgStartRaffle",
                value: tx_1.MsgStartRaffle.fromPartial(value)
            };
        },
        joinRaffle: function (value) {
            return {
                typeUrl: "/bze.burner.v1.MsgJoinRaffle",
                value: tx_1.MsgJoinRaffle.fromPartial(value)
            };
        }
    }
};
