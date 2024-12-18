"use strict";
exports.__esModule = true;
exports.MessageComposer = exports.load = exports.registry = void 0;
var tx_1 = require("./tx");
exports.registry = [["/bze.tokenfactory.v1.MsgCreateDenom", tx_1.MsgCreateDenom], ["/bze.tokenfactory.v1.MsgMint", tx_1.MsgMint], ["/bze.tokenfactory.v1.MsgBurn", tx_1.MsgBurn], ["/bze.tokenfactory.v1.MsgChangeAdmin", tx_1.MsgChangeAdmin], ["/bze.tokenfactory.v1.MsgSetDenomMetadata", tx_1.MsgSetDenomMetadata]];
var load = function (protoRegistry) {
    exports.registry.forEach(function (_a) {
        var typeUrl = _a[0], mod = _a[1];
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createDenom: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgCreateDenom",
                value: tx_1.MsgCreateDenom.encode(value).finish()
            };
        },
        mint: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgMint",
                value: tx_1.MsgMint.encode(value).finish()
            };
        },
        burn: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgBurn",
                value: tx_1.MsgBurn.encode(value).finish()
            };
        },
        changeAdmin: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgChangeAdmin",
                value: tx_1.MsgChangeAdmin.encode(value).finish()
            };
        },
        setDenomMetadata: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDenom: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgCreateDenom",
                value: value
            };
        },
        mint: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgMint",
                value: value
            };
        },
        burn: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgBurn",
                value: value
            };
        },
        changeAdmin: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgChangeAdmin",
                value: value
            };
        },
        setDenomMetadata: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
                value: value
            };
        }
    },
    fromPartial: {
        createDenom: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgCreateDenom",
                value: tx_1.MsgCreateDenom.fromPartial(value)
            };
        },
        mint: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgMint",
                value: tx_1.MsgMint.fromPartial(value)
            };
        },
        burn: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgBurn",
                value: tx_1.MsgBurn.fromPartial(value)
            };
        },
        changeAdmin: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgChangeAdmin",
                value: tx_1.MsgChangeAdmin.fromPartial(value)
            };
        },
        setDenomMetadata: function (value) {
            return {
                typeUrl: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
                value: tx_1.MsgSetDenomMetadata.fromPartial(value)
            };
        }
    }
};
