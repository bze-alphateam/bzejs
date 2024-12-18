"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/ibc.applications.transfer.v1.MsgTransfer", tx_1.MsgTransfer]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        transfer: function (value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: tx_1.MsgTransfer.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        transfer: function (value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: value
            };
        }
    },
    fromPartial: {
        transfer: function (value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: tx_1.MsgTransfer.fromPartial(value)
            };
        }
    }
};
