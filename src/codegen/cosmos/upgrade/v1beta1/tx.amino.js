"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
var helpers_1 = require("../../../helpers");
exports.AminoConverter = {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
        toAmino: function (_a) {
            var authority = _a.authority, plan = _a.plan;
            return {
                authority: authority,
                plan: {
                    name: plan.name,
                    time: plan.time,
                    height: plan.height.toString(),
                    info: plan.info,
                    upgraded_client_state: {
                        type_url: plan.upgradedClientState.typeUrl,
                        value: plan.upgradedClientState.value
                    }
                }
            };
        },
        fromAmino: function (_a) {
            var authority = _a.authority, plan = _a.plan;
            return {
                authority: authority,
                plan: {
                    name: plan.name,
                    time: plan.time,
                    height: helpers_1.Long.fromString(plan.height),
                    info: plan.info,
                    upgradedClientState: {
                        typeUrl: plan.upgraded_client_state.type_url,
                        value: plan.upgraded_client_state.value
                    }
                }
            };
        }
    },
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: "cosmos-sdk/MsgCancelUpgrade",
        toAmino: function (_a) {
            var authority = _a.authority;
            return {
                authority: authority
            };
        },
        fromAmino: function (_a) {
            var authority = _a.authority;
            return {
                authority: authority
            };
        }
    }
};
