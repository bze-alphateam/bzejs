"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
        toAmino: function (_a) {
            var delegatorAddress = _a.delegatorAddress, withdrawAddress = _a.withdrawAddress;
            return {
                delegator_address: delegatorAddress,
                withdraw_address: withdrawAddress
            };
        },
        fromAmino: function (_a) {
            var delegator_address = _a.delegator_address, withdraw_address = _a.withdraw_address;
            return {
                delegatorAddress: delegator_address,
                withdrawAddress: withdraw_address
            };
        }
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
        toAmino: function (_a) {
            var delegatorAddress = _a.delegatorAddress, validatorAddress = _a.validatorAddress;
            return {
                delegator_address: delegatorAddress,
                validator_address: validatorAddress
            };
        },
        fromAmino: function (_a) {
            var delegator_address = _a.delegator_address, validator_address = _a.validator_address;
            return {
                delegatorAddress: delegator_address,
                validatorAddress: validator_address
            };
        }
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
        toAmino: function (_a) {
            var validatorAddress = _a.validatorAddress;
            return {
                validator_address: validatorAddress
            };
        },
        fromAmino: function (_a) {
            var validator_address = _a.validator_address;
            return {
                validatorAddress: validator_address
            };
        }
    },
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: "cosmos-sdk/MsgFundCommunityPool",
        toAmino: function (_a) {
            var amount = _a.amount, depositor = _a.depositor;
            return {
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                depositor: depositor
            };
        },
        fromAmino: function (_a) {
            var amount = _a.amount, depositor = _a.depositor;
            return {
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                depositor: depositor
            };
        }
    }
};
