"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: "cosmos-sdk/MsgSubmitEvidence",
        toAmino: function (_a) {
            var submitter = _a.submitter, evidence = _a.evidence;
            return {
                submitter: submitter,
                evidence: {
                    type_url: evidence.typeUrl,
                    value: evidence.value
                }
            };
        },
        fromAmino: function (_a) {
            var submitter = _a.submitter, evidence = _a.evidence;
            return {
                submitter: submitter,
                evidence: {
                    typeUrl: evidence.type_url,
                    value: evidence.value
                }
            };
        }
    }
};
