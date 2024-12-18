"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: "cosmos-sdk/MsgUnjail",
        toAmino: function (_a) {
            var validatorAddr = _a.validatorAddr;
            return {
                validator_addr: validatorAddr
            };
        },
        fromAmino: function (_a) {
            var validator_addr = _a.validator_addr;
            return {
                validatorAddr: validator_addr
            };
        }
    }
};
