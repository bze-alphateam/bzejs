"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/cosmos.evidence.v1beta1.MsgSubmitEvidence", tx_1.MsgSubmitEvidence]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitEvidence: function (value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value: tx_1.MsgSubmitEvidence.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitEvidence: function (value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value: value
            };
        }
    },
    fromPartial: {
        submitEvidence: function (value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value: tx_1.MsgSubmitEvidence.fromPartial(value)
            };
        }
    }
};
