"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/bze.tokenfactory.v1.MsgCreateDenom": {
        aminoType: "/bze.tokenfactory.v1.MsgCreateDenom",
        toAmino: function (_a) {
            var creator = _a.creator, subdenom = _a.subdenom;
            return {
                creator: creator,
                subdenom: subdenom
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, subdenom = _a.subdenom;
            return {
                creator: creator,
                subdenom: subdenom
            };
        }
    },
    "/bze.tokenfactory.v1.MsgMint": {
        aminoType: "/bze.tokenfactory.v1.MsgMint",
        toAmino: function (_a) {
            var creator = _a.creator, coins = _a.coins;
            return {
                creator: creator,
                coins: coins
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, coins = _a.coins;
            return {
                creator: creator,
                coins: coins
            };
        }
    },
    "/bze.tokenfactory.v1.MsgBurn": {
        aminoType: "/bze.tokenfactory.v1.MsgBurn",
        toAmino: function (_a) {
            var creator = _a.creator, coins = _a.coins;
            return {
                creator: creator,
                coins: coins
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, coins = _a.coins;
            return {
                creator: creator,
                coins: coins
            };
        }
    },
    "/bze.tokenfactory.v1.MsgChangeAdmin": {
        aminoType: "/bze.tokenfactory.v1.MsgChangeAdmin",
        toAmino: function (_a) {
            var creator = _a.creator, denom = _a.denom, newAdmin = _a.newAdmin;
            return {
                creator: creator,
                denom: denom,
                newAdmin: newAdmin
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, denom = _a.denom, newAdmin = _a.newAdmin;
            return {
                creator: creator,
                denom: denom,
                newAdmin: newAdmin
            };
        }
    },
    "/bze.tokenfactory.v1.MsgSetDenomMetadata": {
        aminoType: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
        toAmino: function (_a) {
            var creator = _a.creator, metadata = _a.metadata;
            return {
                creator: creator,
                metadata: {
                    description: metadata.description,
                    denom_units: metadata.denomUnits.map(function (el0) { return ({
                        denom: el0.denom,
                        exponent: el0.exponent,
                        aliases: el0.aliases
                    }); }),
                    base: metadata.base,
                    display: metadata.display,
                    name: metadata.name,
                    symbol: metadata.symbol,
                    uri: metadata.uri,
                    uri_hash: metadata.uriHash
                }
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, metadata = _a.metadata;
            return {
                creator: creator,
                metadata: {
                    description: metadata.description,
                    denomUnits: metadata.denom_units.map(function (el1) { return ({
                        denom: el1.denom,
                        exponent: el1.exponent,
                        aliases: el1.aliases
                    }); }),
                    base: metadata.base,
                    display: metadata.display,
                    name: metadata.name,
                    symbol: metadata.symbol,
                    uri: metadata.uri,
                    uriHash: metadata.uri_hash
                }
            };
        }
    }
};
