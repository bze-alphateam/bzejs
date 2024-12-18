"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", tx_1.MsgVerifyInvariant]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        verifyInvariant: function (value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: tx_1.MsgVerifyInvariant.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        verifyInvariant: function (value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: value
            };
        }
    },
    fromPartial: {
        verifyInvariant: function (value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: tx_1.MsgVerifyInvariant.fromPartial(value)
            };
        }
    }
};
