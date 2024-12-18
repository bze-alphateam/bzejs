"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: "cosmos-sdk/MsgVerifyInvariant",
        toAmino: function (_a) {
            var sender = _a.sender, invariantModuleName = _a.invariantModuleName, invariantRoute = _a.invariantRoute;
            return {
                sender: sender,
                invariant_module_name: invariantModuleName,
                invariant_route: invariantRoute
            };
        },
        fromAmino: function (_a) {
            var sender = _a.sender, invariant_module_name = _a.invariant_module_name, invariant_route = _a.invariant_route;
            return {
                sender: sender,
                invariantModuleName: invariant_module_name,
                invariantRoute: invariant_route
            };
        }
    }
};
