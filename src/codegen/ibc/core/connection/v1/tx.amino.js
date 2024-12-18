"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var helpers_1 = require("../../../../helpers");
exports.AminoConverter = {
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: "cosmos-sdk/MsgConnectionOpenInit",
        toAmino: function (_a) {
            var clientId = _a.clientId, counterparty = _a.counterparty, version = _a.version, delayPeriod = _a.delayPeriod, signer = _a.signer;
            return {
                client_id: clientId,
                counterparty: {
                    client_id: counterparty.clientId,
                    connection_id: counterparty.connectionId,
                    prefix: {
                        key_prefix: counterparty.prefix.keyPrefix
                    }
                },
                version: {
                    identifier: version.identifier,
                    features: version.features
                },
                delay_period: delayPeriod.toString(),
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var client_id = _a.client_id, counterparty = _a.counterparty, version = _a.version, delay_period = _a.delay_period, signer = _a.signer;
            return {
                clientId: client_id,
                counterparty: {
                    clientId: counterparty.client_id,
                    connectionId: counterparty.connection_id,
                    prefix: {
                        keyPrefix: counterparty.prefix.key_prefix
                    }
                },
                version: {
                    identifier: version.identifier,
                    features: version.features
                },
                delayPeriod: helpers_1.Long.fromString(delay_period),
                signer: signer
            };
        }
    },
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: "cosmos-sdk/MsgConnectionOpenTry",
        toAmino: function (_a) {
            var _b, _c, _d, _e;
            var clientId = _a.clientId, previousConnectionId = _a.previousConnectionId, clientState = _a.clientState, counterparty = _a.counterparty, delayPeriod = _a.delayPeriod, counterpartyVersions = _a.counterpartyVersions, proofHeight = _a.proofHeight, proofInit = _a.proofInit, proofClient = _a.proofClient, proofConsensus = _a.proofConsensus, consensusHeight = _a.consensusHeight, signer = _a.signer;
            return {
                client_id: clientId,
                previous_connection_id: previousConnectionId,
                client_state: {
                    type_url: clientState.typeUrl,
                    value: clientState.value
                },
                counterparty: {
                    client_id: counterparty.clientId,
                    connection_id: counterparty.connectionId,
                    prefix: {
                        key_prefix: counterparty.prefix.keyPrefix
                    }
                },
                delay_period: delayPeriod.toString(),
                counterparty_versions: counterpartyVersions.map(function (el0) { return ({
                    identifier: el0.identifier,
                    features: el0.features
                }); }),
                proof_height: proofHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                proof_init: proofInit,
                proof_client: proofClient,
                proof_consensus: proofConsensus,
                consensus_height: consensusHeight ? {
                    revision_height: (_d = (0, helpers_1.omitDefault)(consensusHeight.revisionHeight)) === null || _d === void 0 ? void 0 : _d.toString(),
                    revision_number: (_e = (0, helpers_1.omitDefault)(consensusHeight.revisionNumber)) === null || _e === void 0 ? void 0 : _e.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var client_id = _a.client_id, previous_connection_id = _a.previous_connection_id, client_state = _a.client_state, counterparty = _a.counterparty, delay_period = _a.delay_period, counterparty_versions = _a.counterparty_versions, proof_height = _a.proof_height, proof_init = _a.proof_init, proof_client = _a.proof_client, proof_consensus = _a.proof_consensus, consensus_height = _a.consensus_height, signer = _a.signer;
            return {
                clientId: client_id,
                previousConnectionId: previous_connection_id,
                clientState: {
                    typeUrl: client_state.type_url,
                    value: client_state.value
                },
                counterparty: {
                    clientId: counterparty.client_id,
                    connectionId: counterparty.connection_id,
                    prefix: {
                        keyPrefix: counterparty.prefix.key_prefix
                    }
                },
                delayPeriod: helpers_1.Long.fromString(delay_period),
                counterpartyVersions: counterparty_versions.map(function (el0) { return ({
                    identifier: el0.identifier,
                    features: el0.features
                }); }),
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                proofInit: proof_init,
                proofClient: proof_client,
                proofConsensus: proof_consensus,
                consensusHeight: consensus_height ? {
                    revisionHeight: helpers_1.Long.fromString(consensus_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(consensus_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    },
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: "cosmos-sdk/MsgConnectionOpenAck",
        toAmino: function (_a) {
            var _b, _c, _d, _e;
            var connectionId = _a.connectionId, counterpartyConnectionId = _a.counterpartyConnectionId, version = _a.version, clientState = _a.clientState, proofHeight = _a.proofHeight, proofTry = _a.proofTry, proofClient = _a.proofClient, proofConsensus = _a.proofConsensus, consensusHeight = _a.consensusHeight, signer = _a.signer;
            return {
                connection_id: connectionId,
                counterparty_connection_id: counterpartyConnectionId,
                version: {
                    identifier: version.identifier,
                    features: version.features
                },
                client_state: {
                    type_url: clientState.typeUrl,
                    value: clientState.value
                },
                proof_height: proofHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                proof_try: proofTry,
                proof_client: proofClient,
                proof_consensus: proofConsensus,
                consensus_height: consensusHeight ? {
                    revision_height: (_d = (0, helpers_1.omitDefault)(consensusHeight.revisionHeight)) === null || _d === void 0 ? void 0 : _d.toString(),
                    revision_number: (_e = (0, helpers_1.omitDefault)(consensusHeight.revisionNumber)) === null || _e === void 0 ? void 0 : _e.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var connection_id = _a.connection_id, counterparty_connection_id = _a.counterparty_connection_id, version = _a.version, client_state = _a.client_state, proof_height = _a.proof_height, proof_try = _a.proof_try, proof_client = _a.proof_client, proof_consensus = _a.proof_consensus, consensus_height = _a.consensus_height, signer = _a.signer;
            return {
                connectionId: connection_id,
                counterpartyConnectionId: counterparty_connection_id,
                version: {
                    identifier: version.identifier,
                    features: version.features
                },
                clientState: {
                    typeUrl: client_state.type_url,
                    value: client_state.value
                },
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                proofTry: proof_try,
                proofClient: proof_client,
                proofConsensus: proof_consensus,
                consensusHeight: consensus_height ? {
                    revisionHeight: helpers_1.Long.fromString(consensus_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(consensus_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    },
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
        toAmino: function (_a) {
            var _b, _c;
            var connectionId = _a.connectionId, proofAck = _a.proofAck, proofHeight = _a.proofHeight, signer = _a.signer;
            return {
                connection_id: connectionId,
                proof_ack: proofAck,
                proof_height: proofHeight ? {
                    revision_height: (_b = (0, helpers_1.omitDefault)(proofHeight.revisionHeight)) === null || _b === void 0 ? void 0 : _b.toString(),
                    revision_number: (_c = (0, helpers_1.omitDefault)(proofHeight.revisionNumber)) === null || _c === void 0 ? void 0 : _c.toString()
                } : {},
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var connection_id = _a.connection_id, proof_ack = _a.proof_ack, proof_height = _a.proof_height, signer = _a.signer;
            return {
                connectionId: connection_id,
                proofAck: proof_ack,
                proofHeight: proof_height ? {
                    revisionHeight: helpers_1.Long.fromString(proof_height.revision_height || "0", true),
                    revisionNumber: helpers_1.Long.fromString(proof_height.revision_number || "0", true)
                } : undefined,
                signer: signer
            };
        }
    }
};
