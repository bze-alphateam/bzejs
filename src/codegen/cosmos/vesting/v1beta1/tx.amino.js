"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var helpers_1 = require("../../../helpers");
exports.AminoConverter = {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreateVestingAccount",
        toAmino: function (_a) {
            var fromAddress = _a.fromAddress, toAddress = _a.toAddress, amount = _a.amount, endTime = _a.endTime, delayed = _a.delayed;
            return {
                from_address: fromAddress,
                to_address: toAddress,
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                end_time: endTime.toString(),
                delayed: delayed
            };
        },
        fromAmino: function (_a) {
            var from_address = _a.from_address, to_address = _a.to_address, amount = _a.amount, end_time = _a.end_time, delayed = _a.delayed;
            return {
                fromAddress: from_address,
                toAddress: to_address,
                amount: amount.map(function (el0) { return ({
                    denom: el0.denom,
                    amount: el0.amount
                }); }),
                endTime: helpers_1.Long.fromString(end_time),
                delayed: delayed
            };
        }
    },
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccount",
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
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
        toAmino: function (_a) {
            var fromAddress = _a.fromAddress, toAddress = _a.toAddress, startTime = _a.startTime, vestingPeriods = _a.vestingPeriods;
            return {
                from_address: fromAddress,
                to_address: toAddress,
                start_time: startTime.toString(),
                vesting_periods: vestingPeriods.map(function (el0) { return ({
                    length: el0.length.toString(),
                    amount: el0.amount.map(function (el1) { return ({
                        denom: el1.denom,
                        amount: el1.amount
                    }); })
                }); })
            };
        },
        fromAmino: function (_a) {
            var from_address = _a.from_address, to_address = _a.to_address, start_time = _a.start_time, vesting_periods = _a.vesting_periods;
            return {
                fromAddress: from_address,
                toAddress: to_address,
                startTime: helpers_1.Long.fromString(start_time),
                vestingPeriods: vesting_periods.map(function (el0) { return ({
                    length: helpers_1.Long.fromString(el0.length),
                    amount: el0.amount.map(function (el1) { return ({
                        denom: el1.denom,
                        amount: el1.amount
                    }); })
                }); })
            };
        }
    }
};
