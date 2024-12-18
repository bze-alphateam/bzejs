"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var helpers_1 = require("../../../../helpers");
exports.AminoConverter = {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: "cosmos-sdk/MsgTransfer",
        toAmino: function (_a) {
            var _b, _c;
            var sourcePort = _a.sourcePort, sourceChannel = _a.sourceChannel, token = _a.token, sender = _a.sender, receiver = _a.receiver, timeoutHeight = _a.timeoutHeight, timeoutTimestamp = _a.timeoutTimestamp;
            return {
                source_port: sourcePort,
                source_channel: sourceChannel,
                token: {
                    denom: token.denom,
                    amount: helpers_1.Long.fromValue(token.amount).toString()
                },
                sender: sender,
                receiver: receiver,
                timeout_height: timeoutHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(timeoutHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(timeoutHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                timeout_timestamp: timeoutTimestamp.toString()
            };
        },
        fromAmino: function (_a) {
            var source_port = _a.source_port, source_channel = _a.source_channel, token = _a.token, sender = _a.sender, receiver = _a.receiver, timeout_height = _a.timeout_height, timeout_timestamp = _a.timeout_timestamp;
            return {
                sourcePort: source_port,
                sourceChannel: source_channel,
                token: {
                    denom: token.denom,
                    amount: token.amount
                },
                sender: sender,
                receiver: receiver,
                timeoutHeight: timeout_height ? {
                    revisionHeight: helpers_1.Long.fromString(timeout_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(timeout_height.revision_number || "0", true)
                } : undefined,
                timeoutTimestamp: helpers_1.Long.fromString(timeout_timestamp)
            };
        }
    }
};
