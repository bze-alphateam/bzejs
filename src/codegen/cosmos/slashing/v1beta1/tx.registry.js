"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.slashing.v1beta1.MsgUnjail", tx_1.MsgUnjail]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        unjail: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_1.MsgUnjail.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        unjail: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: value
            };
        }
    },
    fromPartial: {
        unjail: function (value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_1.MsgUnjail.fromPartial(value)
            };
        }
    }
};
