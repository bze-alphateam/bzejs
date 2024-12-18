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
exports.bze = void 0;
var _1 = __importStar(require("../beezee/burner/burn_coins_proposal"));
var _2 = __importStar(require("../beezee/burner/burned_coins"));
var _3 = __importStar(require("../beezee/burner/events"));
var _4 = __importStar(require("../beezee/burner/genesis"));
var _5 = __importStar(require("../beezee/burner/params"));
var _6 = __importStar(require("../beezee/burner/query"));
var _7 = __importStar(require("../beezee/burner/raffle"));
var _8 = __importStar(require("../beezee/burner/tx"));
var _9 = __importStar(require("../beezee/cointrunk/accepted_domain_proposal"));
var _10 = __importStar(require("../beezee/cointrunk/accepted_domain"));
var _11 = __importStar(require("../beezee/cointrunk/anon_articles_counter"));
var _12 = __importStar(require("../beezee/cointrunk/article"));
var _13 = __importStar(require("../beezee/cointrunk/events"));
var _14 = __importStar(require("../beezee/cointrunk/genesis"));
var _15 = __importStar(require("../beezee/cointrunk/params"));
var _16 = __importStar(require("../beezee/cointrunk/publisher_proposal"));
var _17 = __importStar(require("../beezee/cointrunk/publisher"));
var _18 = __importStar(require("../beezee/cointrunk/query"));
var _19 = __importStar(require("../beezee/cointrunk/tx"));
var _20 = __importStar(require("../beezee/epochs/events"));
var _21 = __importStar(require("../beezee/epochs/genesis"));
var _22 = __importStar(require("../beezee/epochs/query"));
var _23 = __importStar(require("../beezee/rewards/events"));
var _24 = __importStar(require("../beezee/rewards/genesis"));
var _25 = __importStar(require("../beezee/rewards/gov"));
var _26 = __importStar(require("../beezee/rewards/params"));
var _27 = __importStar(require("../beezee/rewards/query"));
var _28 = __importStar(require("../beezee/rewards/staking_reward_participant"));
var _29 = __importStar(require("../beezee/rewards/staking_reward"));
var _30 = __importStar(require("../beezee/rewards/trading_reward"));
var _31 = __importStar(require("../beezee/rewards/tx"));
var _32 = __importStar(require("../beezee/tokenfactory/denom_authority"));
var _33 = __importStar(require("../beezee/tokenfactory/genesis"));
var _34 = __importStar(require("../beezee/tokenfactory/params"));
var _35 = __importStar(require("../beezee/tokenfactory/query"));
var _36 = __importStar(require("../beezee/tokenfactory/tx"));
var _37 = __importStar(require("../beezee/tradebin/events"));
var _38 = __importStar(require("../beezee/tradebin/genesis"));
var _39 = __importStar(require("../beezee/tradebin/market"));
var _40 = __importStar(require("../beezee/tradebin/order"));
var _41 = __importStar(require("../beezee/tradebin/params"));
var _42 = __importStar(require("../beezee/tradebin/query"));
var _43 = __importStar(require("../beezee/tradebin/queue_message"));
var _44 = __importStar(require("../beezee/tradebin/tx"));
var _182 = __importStar(require("../beezee/burner/tx.amino"));
var _183 = __importStar(require("../beezee/cointrunk/tx.amino"));
var _184 = __importStar(require("../beezee/rewards/tx.amino"));
var _185 = __importStar(require("../beezee/tokenfactory/tx.amino"));
var _186 = __importStar(require("../beezee/tradebin/tx.amino"));
var _187 = __importStar(require("../beezee/burner/tx.registry"));
var _188 = __importStar(require("../beezee/cointrunk/tx.registry"));
var _189 = __importStar(require("../beezee/rewards/tx.registry"));
var _190 = __importStar(require("../beezee/tokenfactory/tx.registry"));
var _191 = __importStar(require("../beezee/tradebin/tx.registry"));
var _192 = __importStar(require("../beezee/burner/query.lcd"));
var _193 = __importStar(require("../beezee/cointrunk/query.lcd"));
var _194 = __importStar(require("../beezee/epochs/query.lcd"));
var _195 = __importStar(require("../beezee/rewards/query.lcd"));
var _196 = __importStar(require("../beezee/tokenfactory/query.lcd"));
var _197 = __importStar(require("../beezee/tradebin/query.lcd"));
var _198 = __importStar(require("../beezee/burner/query.rpc.Query"));
var _199 = __importStar(require("../beezee/cointrunk/query.rpc.Query"));
var _200 = __importStar(require("../beezee/epochs/query.rpc.Query"));
var _201 = __importStar(require("../beezee/rewards/query.rpc.Query"));
var _202 = __importStar(require("../beezee/tokenfactory/query.rpc.Query"));
var _203 = __importStar(require("../beezee/tradebin/query.rpc.Query"));
var _204 = __importStar(require("../beezee/burner/tx.rpc.msg"));
var _205 = __importStar(require("../beezee/cointrunk/tx.rpc.msg"));
var _206 = __importStar(require("../beezee/rewards/tx.rpc.msg"));
var _207 = __importStar(require("../beezee/tokenfactory/tx.rpc.msg"));
var _208 = __importStar(require("../beezee/tradebin/tx.rpc.msg"));
var _307 = __importStar(require("./lcd"));
var _308 = __importStar(require("./rpc.query"));
var _309 = __importStar(require("./rpc.tx"));
var bze;
(function (bze) {
    var burner;
    (function (burner) {
        burner.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _1), _2), _3), _4), _5), _6), _7), _8), _182), _187), _192), _198), _204);
    })(burner = bze.burner || (bze.burner = {}));
    var cointrunk;
    (function (cointrunk) {
        cointrunk.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _9), _10), _11), _12), _13), _14), _15), _16), _17), _18), _19), _183), _188), _193), _199), _205);
    })(cointrunk = bze.cointrunk || (bze.cointrunk = {}));
    var epochs;
    (function (epochs) {
        epochs.v1 = __assign(__assign(__assign(__assign(__assign({}, _20), _21), _22), _194), _200);
    })(epochs = bze.epochs || (bze.epochs = {}));
    var rewards;
    (function (rewards) {
        rewards.v1 = __assign({}, _23);
    })(rewards = bze.rewards || (bze.rewards = {}));
    var v1;
    (function (v1) {
        v1.rewards = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _24), _25), _26), _27), _28), _29), _30), _31), _184), _189), _195), _201), _206);
    })(v1 = bze.v1 || (bze.v1 = {}));
    var tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _32), _33), _34), _35), _36), _185), _190), _196), _202), _207);
    })(tokenfactory = bze.tokenfactory || (bze.tokenfactory = {}));
    var tradebin;
    (function (tradebin) {
        tradebin.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _37), _38), _39), _40), _41), _42), _43), _44), _186), _191), _197), _203), _208);
    })(tradebin = bze.tradebin || (bze.tradebin = {}));
    bze.ClientFactory = __assign(__assign(__assign({}, _307), _308), _309);
})(bze = exports.bze || (exports.bze = {}));
