"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/ibc.core.channel.v1.MsgChannelOpenInit", tx_1.MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_1.MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_1.MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_1.MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_1.MsgChannelCloseInit], ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_1.MsgChannelCloseConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", tx_1.MsgRecvPacket], ["/ibc.core.channel.v1.MsgTimeout", tx_1.MsgTimeout], ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_1.MsgTimeoutOnClose], ["/ibc.core.channel.v1.MsgAcknowledgement", tx_1.MsgAcknowledgement]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        channelOpenInit: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: tx_1.MsgChannelOpenInit.encode(value).finish()
            };
        },
        channelOpenTry: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: tx_1.MsgChannelOpenTry.encode(value).finish()
            };
        },
        channelOpenAck: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: tx_1.MsgChannelOpenAck.encode(value).finish()
            };
        },
        channelOpenConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: tx_1.MsgChannelOpenConfirm.encode(value).finish()
            };
        },
        channelCloseInit: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: tx_1.MsgChannelCloseInit.encode(value).finish()
            };
        },
        channelCloseConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: tx_1.MsgChannelCloseConfirm.encode(value).finish()
            };
        },
        recvPacket: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value: tx_1.MsgRecvPacket.encode(value).finish()
            };
        },
        timeout: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value: tx_1.MsgTimeout.encode(value).finish()
            };
        },
        timeoutOnClose: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: tx_1.MsgTimeoutOnClose.encode(value).finish()
            };
        },
        acknowledgement: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: tx_1.MsgAcknowledgement.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        channelOpenInit: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: value
            };
        },
        channelOpenTry: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: value
            };
        },
        channelOpenAck: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: value
            };
        },
        channelOpenConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: value
            };
        },
        channelCloseInit: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: value
            };
        },
        channelCloseConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: value
            };
        },
        recvPacket: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value: value
            };
        },
        timeout: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value: value
            };
        },
        timeoutOnClose: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: value
            };
        },
        acknowledgement: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: value
            };
        }
    },
    fromPartial: {
        channelOpenInit: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: tx_1.MsgChannelOpenInit.fromPartial(value)
            };
        },
        channelOpenTry: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: tx_1.MsgChannelOpenTry.fromPartial(value)
            };
        },
        channelOpenAck: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: tx_1.MsgChannelOpenAck.fromPartial(value)
            };
        },
        channelOpenConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: tx_1.MsgChannelOpenConfirm.fromPartial(value)
            };
        },
        channelCloseInit: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: tx_1.MsgChannelCloseInit.fromPartial(value)
            };
        },
        channelCloseConfirm: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: tx_1.MsgChannelCloseConfirm.fromPartial(value)
            };
        },
        recvPacket: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
                value: tx_1.MsgRecvPacket.fromPartial(value)
            };
        },
        timeout: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeout",
                value: tx_1.MsgTimeout.fromPartial(value)
            };
        },
        timeoutOnClose: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: tx_1.MsgTimeoutOnClose.fromPartial(value)
            };
        },
        acknowledgement: function (value) {
            return {
                typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: tx_1.MsgAcknowledgement.fromPartial(value)
            };
        }
    }
};
