"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
//@ts-nocheck
var amino_1 = require("@cosmjs/amino");
var encoding_1 = require("@cosmjs/encoding");
var helpers_1 = require("../../../helpers");
exports.AminoConverter = {
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: "cosmos-sdk/MsgCreateValidator",
        toAmino: function (_a) {
            var description = _a.description, commission = _a.commission, minSelfDelegation = _a.minSelfDelegation, delegatorAddress = _a.delegatorAddress, validatorAddress = _a.validatorAddress, pubkey = _a.pubkey, value = _a.value;
            return {
                description: {
                    moniker: description.moniker,
                    identity: description.identity,
                    website: description.website,
                    security_contact: description.securityContact,
                    details: description.details
                },
                commission: {
                    rate: commission.rate,
                    max_rate: commission.maxRate,
                    max_change_rate: commission.maxChangeRate
                },
                min_self_delegation: minSelfDelegation,
                delegator_address: delegatorAddress,
                validator_address: validatorAddress,
                pubkey: {
                    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                    value: (0, encoding_1.fromBase64)((0, amino_1.decodeBech32Pubkey)(pubkey).value)
                },
                value: {
                    denom: value.denom,
                    amount: helpers_1.Long.fromValue(value.amount).toString()
                }
            };
        },
        fromAmino: function (_a) {
            var description = _a.description, commission = _a.commission, min_self_delegation = _a.min_self_delegation, delegator_address = _a.delegator_address, validator_address = _a.validator_address, pubkey = _a.pubkey, value = _a.value;
            return {
                description: {
                    moniker: description.moniker,
                    identity: description.identity,
                    website: description.website,
                    securityContact: description.security_contact,
                    details: description.details
                },
                commission: {
                    rate: commission.rate,
                    maxRate: commission.max_rate,
                    maxChangeRate: commission.max_change_rate
                },
                minSelfDelegation: min_self_delegation,
                delegatorAddress: delegator_address,
                validatorAddress: validator_address,
                pubkey: (0, amino_1.encodeBech32Pubkey)({
                    type: "tendermint/PubKeySecp256k1",
                    value: (0, encoding_1.toBase64)(pubkey.value)
                }, "cosmos"),
                value: {
                    denom: value.denom,
                    amount: value.amount
                }
            };
        }
    },
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: "cosmos-sdk/MsgEditValidator",
        toAmino: function (_a) {
            var description = _a.description, validatorAddress = _a.validatorAddress, commissionRate = _a.commissionRate, minSelfDelegation = _a.minSelfDelegation;
            return {
                description: {
                    moniker: description.moniker,
                    identity: description.identity,
                    website: description.website,
                    security_contact: description.securityContact,
                    details: description.details
                },
                validator_address: validatorAddress,
                commission_rate: commissionRate,
                min_self_delegation: minSelfDelegation
            };
        },
        fromAmino: function (_a) {
            var description = _a.description, validator_address = _a.validator_address, commission_rate = _a.commission_rate, min_self_delegation = _a.min_self_delegation;
            return {
                description: {
                    moniker: description.moniker,
                    identity: description.identity,
                    website: description.website,
                    securityContact: description.security_contact,
                    details: description.details
                },
                validatorAddress: validator_address,
                commissionRate: commission_rate,
                minSelfDelegation: min_self_delegation
            };
        }
    },
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: "cosmos-sdk/MsgDelegate",
        toAmino: function (_a) {
            var delegatorAddress = _a.delegatorAddress, validatorAddress = _a.validatorAddress, amount = _a.amount;
            return {
                delegator_address: delegatorAddress,
                validator_address: validatorAddress,
                amount: {
                    denom: amount.denom,
                    amount: helpers_1.Long.fromValue(amount.amount).toString()
                }
            };
        },
        fromAmino: function (_a) {
            var delegator_address = _a.delegator_address, validator_address = _a.validator_address, amount = _a.amount;
            return {
                delegatorAddress: delegator_address,
                validatorAddress: validator_address,
                amount: {
                    denom: amount.denom,
                    amount: amount.amount
                }
            };
        }
    },
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: "cosmos-sdk/MsgBeginRedelegate",
        toAmino: function (_a) {
            var delegatorAddress = _a.delegatorAddress, validatorSrcAddress = _a.validatorSrcAddress, validatorDstAddress = _a.validatorDstAddress, amount = _a.amount;
            return {
                delegator_address: delegatorAddress,
                validator_src_address: validatorSrcAddress,
                validator_dst_address: validatorDstAddress,
                amount: {
                    denom: amount.denom,
                    amount: helpers_1.Long.fromValue(amount.amount).toString()
                }
            };
        },
        fromAmino: function (_a) {
            var delegator_address = _a.delegator_address, validator_src_address = _a.validator_src_address, validator_dst_address = _a.validator_dst_address, amount = _a.amount;
            return {
                delegatorAddress: delegator_address,
                validatorSrcAddress: validator_src_address,
                validatorDstAddress: validator_dst_address,
                amount: {
                    denom: amount.denom,
                    amount: amount.amount
                }
            };
        }
    },
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: "cosmos-sdk/MsgUndelegate",
        toAmino: function (_a) {
            var delegatorAddress = _a.delegatorAddress, validatorAddress = _a.validatorAddress, amount = _a.amount;
            return {
                delegator_address: delegatorAddress,
                validator_address: validatorAddress,
                amount: {
                    denom: amount.denom,
                    amount: helpers_1.Long.fromValue(amount.amount).toString()
                }
            };
        },
        fromAmino: function (_a) {
            var delegator_address = _a.delegator_address, validator_address = _a.validator_address, amount = _a.amount;
            return {
                delegatorAddress: delegator_address,
                validatorAddress: validator_address,
                amount: {
                    denom: amount.denom,
                    amount: amount.amount
                }
            };
        }
    }
};
