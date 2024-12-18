"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: "cosmos-sdk/MsgSend",
        toAmino: function (_a) {
            var fromAddress = _a.fromAddress, toAddress = _a.toAddress, amount = _a.amount;
            return {
                from_address: fromAddress,
                to_address: toAddress,
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); })
            };
        },
        fromAmino: function (_a) {
            var from_address = _a.from_address, to_address = _a.to_address, amount = _a.amount;
            return {
                fromAddress: from_address,
                toAddress: to_address,
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); })
            };
        }
    },
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: "cosmos-sdk/MsgMultiSend",
        toAmino: function (_a) {
            var inputs = _a.inputs, outputs = _a.outputs;
            return {
                inputs: inputs.map(function (el0) { return ({
                    address: el0.address,
                    coins: el0.coins.map(function (el1) { return ({
                        denom: el1.denom,
                        amount: el1.amount
                    }); })
                }); }),
                outputs: outputs.map(function (el0) { return ({
                    address: el0.address,
                    coins: el0.coins.map(function (el1) { return ({
                        denom: el1.denom,
                        amount: el1.amount
                    }); })
                }); })
            };
        },
        fromAmino: function (_a) {
            var inputs = _a.inputs, outputs = _a.outputs;
            return {
                inputs: inputs.map(function (el0) { return ({
                    address: el0.address,
                    coins: el0.coins.map(function (el1) { return ({
                        denom: el1.denom,
                        amount: el1.amount
                    }); })
                }); }),
                outputs: outputs.map(function (el0) { return ({
                    address: el0.address,
                    coins: el0.coins.map(function (el1) { return ({
                        denom: el1.denom,
                        amount: el1.amount
                    }); })
                }); })
            };
        }
    }
};
