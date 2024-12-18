"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: "cosmos-sdk/MsgGrantAllowance",
        toAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee, allowance = _a.allowance;
            return {
                granter: granter,
                grantee: grantee,
                allowance: {
                    type_url: allowance.typeUrl,
                    value: allowance.value
                }
            };
        },
        fromAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee, allowance = _a.allowance;
            return {
                granter: granter,
                grantee: grantee,
                allowance: {
                    typeUrl: allowance.type_url,
                    value: allowance.value
                }
            };
        }
    },
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: "cosmos-sdk/MsgRevokeAllowance",
        toAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee;
            return {
                granter: granter,
                grantee: grantee
            };
        },
        fromAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee;
            return {
                granter: granter,
                grantee: grantee
            };
        }
    }
};
