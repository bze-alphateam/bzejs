"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: "cosmos-sdk/MsgCreateClient",
        toAmino: function (_a) {
            var clientState = _a.clientState, consensusState = _a.consensusState, signer = _a.signer;
            return {
                client_state: {
                    type_url: clientState.typeUrl,
                    value: clientState.value
                },
                consensus_state: {
                    type_url: consensusState.typeUrl,
                    value: consensusState.value
                },
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var client_state = _a.client_state, consensus_state = _a.consensus_state, signer = _a.signer;
            return {
                clientState: {
                    typeUrl: client_state.type_url,
                    value: client_state.value
                },
                consensusState: {
                    typeUrl: consensus_state.type_url,
                    value: consensus_state.value
                },
                signer: signer
            };
        }
    },
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: "cosmos-sdk/MsgUpdateClient",
        toAmino: function (_a) {
            var clientId = _a.clientId, header = _a.header, signer = _a.signer;
            return {
                client_id: clientId,
                header: {
                    type_url: header.typeUrl,
                    value: header.value
                },
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var client_id = _a.client_id, header = _a.header, signer = _a.signer;
            return {
                clientId: client_id,
                header: {
                    typeUrl: header.type_url,
                    value: header.value
                },
                signer: signer
            };
        }
    },
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: "cosmos-sdk/MsgUpgradeClient",
        toAmino: function (_a) {
            var clientId = _a.clientId, clientState = _a.clientState, consensusState = _a.consensusState, proofUpgradeClient = _a.proofUpgradeClient, proofUpgradeConsensusState = _a.proofUpgradeConsensusState, signer = _a.signer;
            return {
                client_id: clientId,
                client_state: {
                    type_url: clientState.typeUrl,
                    value: clientState.value
                },
                consensus_state: {
                    type_url: consensusState.typeUrl,
                    value: consensusState.value
                },
                proof_upgrade_client: proofUpgradeClient,
                proof_upgrade_consensus_state: proofUpgradeConsensusState,
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var client_id = _a.client_id, client_state = _a.client_state, consensus_state = _a.consensus_state, proof_upgrade_client = _a.proof_upgrade_client, proof_upgrade_consensus_state = _a.proof_upgrade_consensus_state, signer = _a.signer;
            return {
                clientId: client_id,
                clientState: {
                    typeUrl: client_state.type_url,
                    value: client_state.value
                },
                consensusState: {
                    typeUrl: consensus_state.type_url,
                    value: consensus_state.value
                },
                proofUpgradeClient: proof_upgrade_client,
                proofUpgradeConsensusState: proof_upgrade_consensus_state,
                signer: signer
            };
        }
    },
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
        toAmino: function (_a) {
            var clientId = _a.clientId, misbehaviour = _a.misbehaviour, signer = _a.signer;
            return {
                client_id: clientId,
                misbehaviour: {
                    type_url: misbehaviour.typeUrl,
                    value: misbehaviour.value
                },
                signer: signer
            };
        },
        fromAmino: function (_a) {
            var client_id = _a.client_id, misbehaviour = _a.misbehaviour, signer = _a.signer;
            return {
                clientId: client_id,
                misbehaviour: {
                    typeUrl: misbehaviour.type_url,
                    value: misbehaviour.value
                },
                signer: signer
            };
        }
    }
};
