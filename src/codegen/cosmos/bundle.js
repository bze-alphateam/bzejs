"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.cosmos = void 0;
var _47 = __importStar(require("./app/v1alpha1/config"));
var _48 = __importStar(require("./app/v1alpha1/module"));
var _49 = __importStar(require("./app/v1alpha1/query"));
var _50 = __importStar(require("./auth/v1beta1/auth"));
var _51 = __importStar(require("./auth/v1beta1/genesis"));
var _52 = __importStar(require("./auth/v1beta1/query"));
var _53 = __importStar(require("./authz/v1beta1/authz"));
var _54 = __importStar(require("./authz/v1beta1/event"));
var _55 = __importStar(require("./authz/v1beta1/genesis"));
var _56 = __importStar(require("./authz/v1beta1/query"));
var _57 = __importStar(require("./authz/v1beta1/tx"));
var _58 = __importStar(require("./bank/v1beta1/authz"));
var _59 = __importStar(require("./bank/v1beta1/bank"));
var _60 = __importStar(require("./bank/v1beta1/genesis"));
var _61 = __importStar(require("./bank/v1beta1/query"));
var _62 = __importStar(require("./bank/v1beta1/tx"));
var _63 = __importStar(require("./base/abci/v1beta1/abci"));
var _64 = __importStar(require("./base/kv/v1beta1/kv"));
var _65 = __importStar(require("./base/query/v1beta1/pagination"));
var _66 = __importStar(require("./base/reflection/v1beta1/reflection"));
var _67 = __importStar(require("./base/reflection/v2alpha1/reflection"));
var _68 = __importStar(require("./base/snapshots/v1beta1/snapshot"));
var _69 = __importStar(require("./base/store/v1beta1/commit_info"));
var _70 = __importStar(require("./base/store/v1beta1/listening"));
var _71 = __importStar(require("./base/tendermint/v1beta1/query"));
var _72 = __importStar(require("./base/v1beta1/coin"));
var _73 = __importStar(require("./capability/v1beta1/capability"));
var _74 = __importStar(require("./capability/v1beta1/genesis"));
var _75 = __importStar(require("./crisis/v1beta1/genesis"));
var _76 = __importStar(require("./crisis/v1beta1/tx"));
var _77 = __importStar(require("./crypto/ed25519/keys"));
var _78 = __importStar(require("./crypto/hd/v1/hd"));
var _79 = __importStar(require("./crypto/keyring/v1/record"));
var _80 = __importStar(require("./crypto/multisig/keys"));
var _81 = __importStar(require("./crypto/secp256k1/keys"));
var _82 = __importStar(require("./crypto/secp256r1/keys"));
var _83 = __importStar(require("./distribution/v1beta1/distribution"));
var _84 = __importStar(require("./distribution/v1beta1/genesis"));
var _85 = __importStar(require("./distribution/v1beta1/query"));
var _86 = __importStar(require("./distribution/v1beta1/tx"));
var _87 = __importStar(require("./evidence/v1beta1/evidence"));
var _88 = __importStar(require("./evidence/v1beta1/genesis"));
var _89 = __importStar(require("./evidence/v1beta1/query"));
var _90 = __importStar(require("./evidence/v1beta1/tx"));
var _91 = __importStar(require("./feegrant/v1beta1/feegrant"));
var _92 = __importStar(require("./feegrant/v1beta1/genesis"));
var _93 = __importStar(require("./feegrant/v1beta1/query"));
var _94 = __importStar(require("./feegrant/v1beta1/tx"));
var _95 = __importStar(require("./genutil/v1beta1/genesis"));
var _96 = __importStar(require("./gov/v1/genesis"));
var _97 = __importStar(require("./gov/v1/gov"));
var _98 = __importStar(require("./gov/v1/query"));
var _99 = __importStar(require("./gov/v1/tx"));
var _100 = __importStar(require("./gov/v1beta1/genesis"));
var _101 = __importStar(require("./gov/v1beta1/gov"));
var _102 = __importStar(require("./gov/v1beta1/query"));
var _103 = __importStar(require("./gov/v1beta1/tx"));
var _104 = __importStar(require("./group/v1/events"));
var _105 = __importStar(require("./group/v1/genesis"));
var _106 = __importStar(require("./group/v1/query"));
var _107 = __importStar(require("./group/v1/tx"));
var _108 = __importStar(require("./group/v1/types"));
var _109 = __importStar(require("./mint/v1beta1/genesis"));
var _110 = __importStar(require("./mint/v1beta1/mint"));
var _111 = __importStar(require("./mint/v1beta1/query"));
var _112 = __importStar(require("./msg/v1/msg"));
var _113 = __importStar(require("./nft/v1beta1/event"));
var _114 = __importStar(require("./nft/v1beta1/genesis"));
var _115 = __importStar(require("./nft/v1beta1/nft"));
var _116 = __importStar(require("./nft/v1beta1/query"));
var _117 = __importStar(require("./nft/v1beta1/tx"));
var _118 = __importStar(require("./orm/v1/orm"));
var _119 = __importStar(require("./orm/v1alpha1/schema"));
var _120 = __importStar(require("./params/v1beta1/params"));
var _121 = __importStar(require("./params/v1beta1/query"));
var _122 = __importStar(require("./slashing/v1beta1/genesis"));
var _123 = __importStar(require("./slashing/v1beta1/query"));
var _124 = __importStar(require("./slashing/v1beta1/slashing"));
var _125 = __importStar(require("./slashing/v1beta1/tx"));
var _126 = __importStar(require("./staking/v1beta1/authz"));
var _127 = __importStar(require("./staking/v1beta1/genesis"));
var _128 = __importStar(require("./staking/v1beta1/query"));
var _129 = __importStar(require("./staking/v1beta1/staking"));
var _130 = __importStar(require("./staking/v1beta1/tx"));
var _131 = __importStar(require("./tx/signing/v1beta1/signing"));
var _132 = __importStar(require("./tx/v1beta1/service"));
var _133 = __importStar(require("./tx/v1beta1/tx"));
var _134 = __importStar(require("./upgrade/v1beta1/query"));
var _135 = __importStar(require("./upgrade/v1beta1/tx"));
var _136 = __importStar(require("./upgrade/v1beta1/upgrade"));
var _137 = __importStar(require("./vesting/v1beta1/tx"));
var _138 = __importStar(require("./vesting/v1beta1/vesting"));
var _209 = __importStar(require("./authz/v1beta1/tx.amino"));
var _210 = __importStar(require("./bank/v1beta1/tx.amino"));
var _211 = __importStar(require("./crisis/v1beta1/tx.amino"));
var _212 = __importStar(require("./distribution/v1beta1/tx.amino"));
var _213 = __importStar(require("./evidence/v1beta1/tx.amino"));
var _214 = __importStar(require("./feegrant/v1beta1/tx.amino"));
var _215 = __importStar(require("./gov/v1/tx.amino"));
var _216 = __importStar(require("./gov/v1beta1/tx.amino"));
var _217 = __importStar(require("./group/v1/tx.amino"));
var _218 = __importStar(require("./nft/v1beta1/tx.amino"));
var _219 = __importStar(require("./slashing/v1beta1/tx.amino"));
var _220 = __importStar(require("./staking/v1beta1/tx.amino"));
var _221 = __importStar(require("./upgrade/v1beta1/tx.amino"));
var _222 = __importStar(require("./vesting/v1beta1/tx.amino"));
var _223 = __importStar(require("./authz/v1beta1/tx.registry"));
var _224 = __importStar(require("./bank/v1beta1/tx.registry"));
var _225 = __importStar(require("./crisis/v1beta1/tx.registry"));
var _226 = __importStar(require("./distribution/v1beta1/tx.registry"));
var _227 = __importStar(require("./evidence/v1beta1/tx.registry"));
var _228 = __importStar(require("./feegrant/v1beta1/tx.registry"));
var _229 = __importStar(require("./gov/v1/tx.registry"));
var _230 = __importStar(require("./gov/v1beta1/tx.registry"));
var _231 = __importStar(require("./group/v1/tx.registry"));
var _232 = __importStar(require("./nft/v1beta1/tx.registry"));
var _233 = __importStar(require("./slashing/v1beta1/tx.registry"));
var _234 = __importStar(require("./staking/v1beta1/tx.registry"));
var _235 = __importStar(require("./upgrade/v1beta1/tx.registry"));
var _236 = __importStar(require("./vesting/v1beta1/tx.registry"));
var _237 = __importStar(require("./auth/v1beta1/query.lcd"));
var _238 = __importStar(require("./authz/v1beta1/query.lcd"));
var _239 = __importStar(require("./bank/v1beta1/query.lcd"));
var _240 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
var _241 = __importStar(require("./distribution/v1beta1/query.lcd"));
var _242 = __importStar(require("./evidence/v1beta1/query.lcd"));
var _243 = __importStar(require("./feegrant/v1beta1/query.lcd"));
var _244 = __importStar(require("./gov/v1/query.lcd"));
var _245 = __importStar(require("./gov/v1beta1/query.lcd"));
var _246 = __importStar(require("./group/v1/query.lcd"));
var _247 = __importStar(require("./mint/v1beta1/query.lcd"));
var _248 = __importStar(require("./nft/v1beta1/query.lcd"));
var _249 = __importStar(require("./params/v1beta1/query.lcd"));
var _250 = __importStar(require("./slashing/v1beta1/query.lcd"));
var _251 = __importStar(require("./staking/v1beta1/query.lcd"));
var _252 = __importStar(require("./tx/v1beta1/service.lcd"));
var _253 = __importStar(require("./upgrade/v1beta1/query.lcd"));
var _254 = __importStar(require("./app/v1alpha1/query.rpc.Query"));
var _255 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
var _256 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
var _257 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
var _258 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _259 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
var _260 = __importStar(require("./evidence/v1beta1/query.rpc.Query"));
var _261 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
var _262 = __importStar(require("./gov/v1/query.rpc.Query"));
var _263 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
var _264 = __importStar(require("./group/v1/query.rpc.Query"));
var _265 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
var _266 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
var _267 = __importStar(require("./params/v1beta1/query.rpc.Query"));
var _268 = __importStar(require("./slashing/v1beta1/query.rpc.Query"));
var _269 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
var _270 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
var _271 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
var _272 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
var _273 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
var _274 = __importStar(require("./crisis/v1beta1/tx.rpc.msg"));
var _275 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
var _276 = __importStar(require("./evidence/v1beta1/tx.rpc.msg"));
var _277 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
var _278 = __importStar(require("./gov/v1/tx.rpc.msg"));
var _279 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
var _280 = __importStar(require("./group/v1/tx.rpc.msg"));
var _281 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
var _282 = __importStar(require("./slashing/v1beta1/tx.rpc.msg"));
var _283 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
var _284 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
var _285 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
var _310 = __importStar(require("./lcd"));
var _311 = __importStar(require("./rpc.query"));
var _312 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    var app;
    (function (app) {
        app.v1alpha1 = __assign(__assign(__assign(__assign({}, _47), _48), _49), _254);
    })(app = cosmos.app || (cosmos.app = {}));
    var auth;
    (function (auth) {
        auth.v1beta1 = __assign(__assign(__assign(__assign(__assign({}, _50), _51), _52), _237), _255);
    })(auth = cosmos.auth || (cosmos.auth = {}));
    var authz;
    (function (authz) {
        authz.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _53), _54), _55), _56), _57), _209), _223), _238), _256), _272);
    })(authz = cosmos.authz || (cosmos.authz = {}));
    var bank;
    (function (bank) {
        bank.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _58), _59), _60), _61), _62), _210), _224), _239), _257), _273);
    })(bank = cosmos.bank || (cosmos.bank = {}));
    var base;
    (function (base) {
        var abci;
        (function (abci) {
            abci.v1beta1 = __assign({}, _63);
        })(abci = base.abci || (base.abci = {}));
        var kv;
        (function (kv) {
            kv.v1beta1 = __assign({}, _64);
        })(kv = base.kv || (base.kv = {}));
        var query;
        (function (query) {
            query.v1beta1 = __assign({}, _65);
        })(query = base.query || (base.query = {}));
        var reflection;
        (function (reflection) {
            reflection.v1beta1 = __assign({}, _66);
            reflection.v2alpha1 = __assign({}, _67);
        })(reflection = base.reflection || (base.reflection = {}));
        var snapshots;
        (function (snapshots) {
            snapshots.v1beta1 = __assign({}, _68);
        })(snapshots = base.snapshots || (base.snapshots = {}));
        var store;
        (function (store) {
            store.v1beta1 = __assign(__assign({}, _69), _70);
        })(store = base.store || (base.store = {}));
        var tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = __assign(__assign(__assign({}, _71), _240), _258);
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = __assign({}, _72);
    })(base = cosmos.base || (cosmos.base = {}));
    var capability;
    (function (capability) {
        capability.v1beta1 = __assign(__assign({}, _73), _74);
    })(capability = cosmos.capability || (cosmos.capability = {}));
    var crisis;
    (function (crisis) {
        crisis.v1beta1 = __assign(__assign(__assign(__assign(__assign({}, _75), _76), _211), _225), _274);
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    var crypto;
    (function (crypto) {
        crypto.ed25519 = __assign({}, _77);
        var hd;
        (function (hd) {
            hd.v1 = __assign({}, _78);
        })(hd = crypto.hd || (crypto.hd = {}));
        var keyring;
        (function (keyring) {
            keyring.v1 = __assign({}, _79);
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = __assign({}, _80);
        crypto.secp256k1 = __assign({}, _81);
        crypto.secp256r1 = __assign({}, _82);
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    var distribution;
    (function (distribution) {
        distribution.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _83), _84), _85), _86), _212), _226), _241), _259), _275);
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    var evidence;
    (function (evidence) {
        evidence.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _87), _88), _89), _90), _213), _227), _242), _260), _276);
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    var feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _91), _92), _93), _94), _214), _228), _243), _261), _277);
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    var genutil;
    (function (genutil) {
        genutil.v1beta1 = __assign({}, _95);
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    var gov;
    (function (gov) {
        gov.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _96), _97), _98), _99), _215), _229), _244), _262), _278);
        gov.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _100), _101), _102), _103), _216), _230), _245), _263), _279);
    })(gov = cosmos.gov || (cosmos.gov = {}));
    var group;
    (function (group) {
        group.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _104), _105), _106), _107), _108), _217), _231), _246), _264), _280);
    })(group = cosmos.group || (cosmos.group = {}));
    var mint;
    (function (mint) {
        mint.v1beta1 = __assign(__assign(__assign(__assign(__assign({}, _109), _110), _111), _247), _265);
    })(mint = cosmos.mint || (cosmos.mint = {}));
    var msg;
    (function (msg) {
        msg.v1 = __assign({}, _112);
    })(msg = cosmos.msg || (cosmos.msg = {}));
    var nft;
    (function (nft) {
        nft.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _113), _114), _115), _116), _117), _218), _232), _248), _266), _281);
    })(nft = cosmos.nft || (cosmos.nft = {}));
    var orm;
    (function (orm) {
        orm.v1 = __assign({}, _118);
        orm.v1alpha1 = __assign({}, _119);
    })(orm = cosmos.orm || (cosmos.orm = {}));
    var params;
    (function (params) {
        params.v1beta1 = __assign(__assign(__assign(__assign({}, _120), _121), _249), _267);
    })(params = cosmos.params || (cosmos.params = {}));
    var slashing;
    (function (slashing) {
        slashing.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _122), _123), _124), _125), _219), _233), _250), _268), _282);
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    var staking;
    (function (staking) {
        staking.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _126), _127), _128), _129), _130), _220), _234), _251), _269), _283);
    })(staking = cosmos.staking || (cosmos.staking = {}));
    var tx;
    (function (tx) {
        var signing;
        (function (signing) {
            signing.v1beta1 = __assign({}, _131);
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = __assign(__assign(__assign(__assign({}, _132), _133), _252), _270);
    })(tx = cosmos.tx || (cosmos.tx = {}));
    var upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _134), _135), _136), _221), _235), _253), _271), _284);
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    var vesting;
    (function (vesting) {
        vesting.v1beta1 = __assign(__assign(__assign(__assign(__assign({}, _137), _138), _222), _236), _285);
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = __assign(__assign(__assign({}, _310), _311), _312);
})(cosmos = exports.cosmos || (exports.cosmos = {}));
