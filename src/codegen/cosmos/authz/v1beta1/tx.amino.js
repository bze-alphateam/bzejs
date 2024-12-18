"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.authz.v1beta1.MsgGrant": {
        aminoType: "cosmos-sdk/MsgGrant",
        toAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee, grant = _a.grant;
            return {
                granter: granter,
                grantee: grantee,
                grant: {
                    authorization: {
                        type_url: grant.authorization.typeUrl,
                        value: grant.authorization.value
                    },
                    expiration: grant.expiration
                }
            };
        },
        fromAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee, grant = _a.grant;
            return {
                granter: granter,
                grantee: grantee,
                grant: {
                    authorization: {
                        typeUrl: grant.authorization.type_url,
                        value: grant.authorization.value
                    },
                    expiration: grant.expiration
                }
            };
        }
    },
    "/cosmos.authz.v1beta1.MsgExec": {
        aminoType: "cosmos-sdk/MsgExec",
        toAmino: function (_a) {
            var grantee = _a.grantee, msgs = _a.msgs;
            return {
                grantee: grantee,
                msgs: msgs.map(function (el0) { return ({
                    type_url: el0.typeUrl,
                    value: el0.value
                }); })
            };
        },
        fromAmino: function (_a) {
            var grantee = _a.grantee, msgs = _a.msgs;
            return {
                grantee: grantee,
                msgs: msgs.map(function (el0) { return ({
                    typeUrl: el0.type_url,
                    value: el0.value
                }); })
            };
        }
    },
    "/cosmos.authz.v1beta1.MsgRevoke": {
        aminoType: "cosmos-sdk/MsgRevoke",
        toAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee, msgTypeUrl = _a.msgTypeUrl;
            return {
                granter: granter,
                grantee: grantee,
                msg_type_url: msgTypeUrl
            };
        },
        fromAmino: function (_a) {
            var granter = _a.granter, grantee = _a.grantee, msg_type_url = _a.msg_type_url;
            return {
                granter: granter,
                grantee: grantee,
                msgTypeUrl: msg_type_url
            };
        }
    }
};
