"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var channel_1 = require("./channel");
var helpers_1 = require("../../../../helpers");
exports.AminoConverter = {
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: "cosmos-sdk/MsgChannelOpenInit",
        toAmino: function (_a) {
            var portId = _a.portId, channel = _a.channel, signer = _a.signer;
            return {
                port_id: portId,
                channel: {
                    state: channel.state,
                    ordering: channel.ordering,
                    counterparty: {
                        port_id: channel.counterparty.portId,
                        channel_id: channel.counterparty.channelId
                    },
                    connection_hops: channel.connectionHops,
                    version: channel.version
                },
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var port_id = _a.port_id, channel = _a.channel, signer = _a.signer;
            return {
                portId: port_id,
                channel: {
                    state: (0, channel_1.stateFromJSON)(channel.state),
                    ordering: (0, channel_1.orderFromJSON)(channel.ordering),
                    counterparty: {
                        portId: channel.counterparty.port_id,
                        channelId: channel.counterparty.channel_id
                    },
                    connectionHops: channel.connection_hops,
                    version: channel.version
                },
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: "cosmos-sdk/MsgChannelOpenTry",
        toAmino: function (_a) {
            var _b, _c;
            var portId = _a.portId, previousChannelId = _a.previousChannelId, channel = _a.channel, counterpartyVersion = _a.counterpartyVersion, proofInit = _a.proofInit, proofHeight = _a.proofHeight, signer = _a.signer;
            return {
                port_id: portId,
                previous_channel_id: previousChannelId,
                channel: {
                    state: channel.state,
                    ordering: channel.ordering,
                    counterparty: {
                        port_id: channel.counterparty.portId,
                        channel_id: channel.counterparty.channelId
                    },
                    connection_hops: channel.connectionHops,
                    version: channel.version
                },
                counterparty_version: counterpartyVersion,
                proof_init: proofInit,
                proof_height: proofHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var port_id = _a.port_id, previous_channel_id = _a.previous_channel_id, channel = _a.channel, counterparty_version = _a.counterparty_version, proof_init = _a.proof_init, proof_height = _a.proof_height, signer = _a.signer;
            return {
                portId: port_id,
                previousChannelId: previous_channel_id,
                channel: {
                    state: (0, channel_1.stateFromJSON)(channel.state),
                    ordering: (0, channel_1.orderFromJSON)(channel.ordering),
                    counterparty: {
                        portId: channel.counterparty.port_id,
                        channelId: channel.counterparty.channel_id
                    },
                    connectionHops: channel.connection_hops,
                    version: channel.version
                },
                counterpartyVersion: counterparty_version,
                proofInit: proof_init,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: "cosmos-sdk/MsgChannelOpenAck",
        toAmino: function (_a) {
            var _b, _c;
            var portId = _a.portId, channelId = _a.channelId, counterpartyChannelId = _a.counterpartyChannelId, counterpartyVersion = _a.counterpartyVersion, proofTry = _a.proofTry, proofHeight = _a.proofHeight, signer = _a.signer;
            return {
                port_id: portId,
                channel_id: channelId,
                counterparty_channel_id: counterpartyChannelId,
                counterparty_version: counterpartyVersion,
                proof_try: proofTry,
                proof_height: proofHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var port_id = _a.port_id, channel_id = _a.channel_id, counterparty_channel_id = _a.counterparty_channel_id, counterparty_version = _a.counterparty_version, proof_try = _a.proof_try, proof_height = _a.proof_height, signer = _a.signer;
            return {
                portId: port_id,
                channelId: channel_id,
                counterpartyChannelId: counterparty_channel_id,
                counterpartyVersion: counterparty_version,
                proofTry: proof_try,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
        toAmino: function (_a) {
            var _b, _c;
            var portId = _a.portId, channelId = _a.channelId, proofAck = _a.proofAck, proofHeight = _a.proofHeight, signer = _a.signer;
            return {
                port_id: portId,
                channel_id: channelId,
                proof_ack: proofAck,
                proof_height: proofHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var port_id = _a.port_id, channel_id = _a.channel_id, proof_ack = _a.proof_ack, proof_height = _a.proof_height, signer = _a.signer;
            return {
                portId: port_id,
                channelId: channel_id,
                proofAck: proof_ack,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: "cosmos-sdk/MsgChannelCloseInit",
        toAmino: function (_a) {
            var portId = _a.portId, channelId = _a.channelId, signer = _a.signer;
            return {
                port_id: portId,
                channel_id: channelId,
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var port_id = _a.port_id, channel_id = _a.channel_id, signer = _a.signer;
            return {
                portId: port_id,
                channelId: channel_id,
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
        toAmino: function (_a) {
            var _b, _c;
            var portId = _a.portId, channelId = _a.channelId, proofInit = _a.proofInit, proofHeight = _a.proofHeight, signer = _a.signer;
            return {
                port_id: portId,
                channel_id: channelId,
                proof_init: proofInit,
                proof_height: proofHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var port_id = _a.port_id, channel_id = _a.channel_id, proof_init = _a.proof_init, proof_height = _a.proof_height, signer = _a.signer;
            return {
                portId: port_id,
                channelId: channel_id,
                proofInit: proof_init,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: "cosmos-sdk/MsgRecvPacket",
        toAmino: function (_a) {
            var _b, _c, _d, _e;
            var packet = _a.packet, proofCommitment = _a.proofCommitment, proofHeight = _a.proofHeight, signer = _a.signer;
            return {
                packet: {
                    sequence: packet.sequence.toString(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight ? {
                        revision_height: (_b = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                        revision_number: (_c = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                    } : {},
                    timeout_timestamp: packet.timeoutTimestamp.toString()
                },
                proof_commitment: proofCommitment,
                proof_height: proofHeight ? {
                    revision_height: (_d = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _d === void 0 ? void 0 : _d.toString(),
                    revision_number: (_e = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _e === void 0 ? void 0 : _e.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var packet = _a.packet, proof_commitment = _a.proof_commitment, proof_height = _a.proof_height, signer = _a.signer;
            return {
                packet: {
                    sequence: helpers_1.Long.fromString(packet.sequence),
                    sourcePort: packet.source_port,
                    sourceChannel: packet.source_channel,
                    destinationPort: packet.destination_port,
                    destinationChannel: packet.destination_channel,
                    data: packet.data,
                    timeoutHeight: packet.timeout_height ? {
                        revisionHeight: helpers_1.Long.fromString(packet.timeout_height.revision_height || "0", true),
                        revisionNumber: helpers_1.Long.fromString(packet.timeout_height.revision_number || "0", true)
                    } : undefined,
                    timeoutTimestamp: helpers_1.Long.fromString(packet.timeout_timestamp)
                },
                proofCommitment: proof_commitment,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: "cosmos-sdk/MsgTimeout",
        toAmino: function (_a) {
            var _b, _c, _d, _e;
            var packet = _a.packet, proofUnreceived = _a.proofUnreceived, proofHeight = _a.proofHeight, nextSequenceRecv = _a.nextSequenceRecv, signer = _a.signer;
            return {
                packet: {
                    sequence: packet.sequence.toString(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight ? {
                        revision_height: (_b = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                        revision_number: (_c = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                    } : {},
                    timeout_timestamp: packet.timeoutTimestamp.toString()
                },
                proof_unreceived: proofUnreceived,
                proof_height: proofHeight ? {
                    revision_height: (_d = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _d === void 0 ? void 0 : _d.toString(),
                    revision_number: (_e = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _e === void 0 ? void 0 : _e.toString()
                } : {},
                next_sequence_recv: nextSequenceRecv.toString(),
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var packet = _a.packet, proof_unreceived = _a.proof_unreceived, proof_height = _a.proof_height, next_sequence_recv = _a.next_sequence_recv, signer = _a.signer;
            return {
                packet: {
                    sequence: helpers_1.Long.fromString(packet.sequence),
                    sourcePort: packet.source_port,
                    sourceChannel: packet.source_channel,
                    destinationPort: packet.destination_port,
                    destinationChannel: packet.destination_channel,
                    data: packet.data,
                    timeoutHeight: packet.timeout_height ? {
                        revisionHeight: helpers_1.Long.fromString(packet.timeout_height.revision_height || "0", true),
                        revisionNumber: helpers_1.Long.fromString(packet.timeout_height.revision_number || "0", true)
                    } : undefined,
                    timeoutTimestamp: helpers_1.Long.fromString(packet.timeout_timestamp)
                },
                proofUnreceived: proof_unreceived,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                nextSequenceRecv: helpers_1.Long.fromString(next_sequence_recv),
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: "cosmos-sdk/MsgTimeoutOnClose",
        toAmino: function (_a) {
            var _b, _c, _d, _e;
            var packet = _a.packet, proofUnreceived = _a.proofUnreceived, proofClose = _a.proofClose, proofHeight = _a.proofHeight, nextSequenceRecv = _a.nextSequenceRecv, signer = _a.signer;
            return {
                packet: {
                    sequence: packet.sequence.toString(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight ? {
                        revision_height: (_b = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                        revision_number: (_c = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                    } : {},
                    timeout_timestamp: packet.timeoutTimestamp.toString()
                },
                proof_unreceived: proofUnreceived,
                proof_close: proofClose,
                proof_height: proofHeight ? {
                    revision_height: (_d = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _d === void 0 ? void 0 : _d.toString(),
                    revision_number: (_e = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _e === void 0 ? void 0 : _e.toString()
                } : {},
                next_sequence_recv: nextSequenceRecv.toString(),
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var packet = _a.packet, proof_unreceived = _a.proof_unreceived, proof_close = _a.proof_close, proof_height = _a.proof_height, next_sequence_recv = _a.next_sequence_recv, signer = _a.signer;
            return {
                packet: {
                    sequence: helpers_1.Long.fromString(packet.sequence),
                    sourcePort: packet.source_port,
                    sourceChannel: packet.source_channel,
                    destinationPort: packet.destination_port,
                    destinationChannel: packet.destination_channel,
                    data: packet.data,
                    timeoutHeight: packet.timeout_height ? {
                        revisionHeight: helpers_1.Long.fromString(packet.timeout_height.revision_height || "0", true),
                        revisionNumber: helpers_1.Long.fromString(packet.timeout_height.revision_number || "0", true)
                    } : undefined,
                    timeoutTimestamp: helpers_1.Long.fromString(packet.timeout_timestamp)
                },
                proofUnreceived: proof_unreceived,
                proofClose: proof_close,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                nextSequenceRecv: helpers_1.Long.fromString(next_sequence_recv),
                signer: signer
            };
        }
    },
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: "cosmos-sdk/MsgAcknowledgement",
        toAmino: function (_a) {
            var _b, _c, _d, _e;
            var packet = _a.packet, acknowledgement = _a.acknowledgement, proofAcked = _a.proofAcked, proofHeight = _a.proofHeight, signer = _a.signer;
            return {
                packet: {
                    sequence: packet.sequence.toString(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight ? {
                        revision_height: (_b = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                        revision_number: (_c = (0, helpers_1.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                    } : {},
                    timeout_timestamp: packet.timeoutTimestamp.toString()
                },
                acknowledgement: acknowledgement,
                proof_acked: proofAcked,
                proof_height: proofHeight ? {
                    revision_height: (_d = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _d === void 0 ? void 0 : _d.toString(),
                    revision_number: (_e = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _e === void 0 ? void 0 : _e.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var packet = _a.packet, acknowledgement = _a.acknowledgement, proof_acked = _a.proof_acked, proof_height = _a.proof_height, signer = _a.signer;
            return {
                packet: {
                    sequence: helpers_1.Long.fromString(packet.sequence),
                    sourcePort: packet.source_port,
                    sourceChannel: packet.source_channel,
                    destinationPort: packet.destination_port,
                    destinationChannel: packet.destination_channel,
                    data: packet.data,
                    timeoutHeight: packet.timeout_height ? {
                        revisionHeight: helpers_1.Long.fromString(packet.timeout_height.revision_height || "0", true),
                        revisionNumber: helpers_1.Long.fromString(packet.timeout_height.revision_number || "0", true)
                    } : undefined,
                    timeoutTimestamp: helpers_1.Long.fromString(packet.timeout_timestamp)
                },
                acknowledgement: acknowledgement,
                proofAcked: proof_acked,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    }
};
