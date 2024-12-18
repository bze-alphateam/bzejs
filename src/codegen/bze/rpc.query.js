"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.createRPCQueryClient = void 0;
var tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
var stargate_1 = require("@cosmjs/stargate");
var createRPCQueryClient = function (_a) {
    var rpcEndpoint = _a.rpcEndpoint;
    return __awaiter(void 0, void 0, void 0, function () {
        var tmClient, client;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        return __generator(this, function (_4) {
            switch (_4.label) {
                case 0: return [4 /*yield*/, tendermint_rpc_1.Tendermint34Client.connect(rpcEndpoint)];
                case 1:
                    tmClient = _4.sent();
                    client = new stargate_1.QueryClient(tmClient);
                    _b = {};
                    _c = {};
                    _d = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../beezee/burner/query.rpc.Query")); })];
                case 2:
                    _c.burner = (_d.v1 = (_4.sent()).createRpcQueryExtension(client),
                        _d);
                    _e = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../beezee/cointrunk/query.rpc.Query")); })];
                case 3:
                    _c.cointrunk = (_e.v1 = (_4.sent()).createRpcQueryExtension(client),
                        _e);
                    _f = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../beezee/epochs/query.rpc.Query")); })];
                case 4:
                    _c.epochs = (_f.v1 = (_4.sent()).createRpcQueryExtension(client),
                        _f);
                    _g = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../beezee/rewards/query.rpc.Query")); })];
                case 5:
                    _c.v1 = (_g.rewards = (_4.sent()).createRpcQueryExtension(client),
                        _g);
                    _h = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../beezee/tokenfactory/query.rpc.Query")); })];
                case 6:
                    _c.tokenfactory = (_h.v1 = (_4.sent()).createRpcQueryExtension(client),
                        _h);
                    _j = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../beezee/tradebin/query.rpc.Query")); })];
                case 7:
                    _b.bze = (_c.tradebin = (_j.v1 = (_4.sent()).createRpcQueryExtension(client),
                        _j),
                        _c);
                    _k = {};
                    _l = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/app/v1alpha1/query.rpc.Query")); })];
                case 8:
                    _k.app = (_l.v1alpha1 = (_4.sent()).createRpcQueryExtension(client),
                        _l);
                    _m = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/auth/v1beta1/query.rpc.Query")); })];
                case 9:
                    _k.auth = (_m.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _m);
                    _o = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/authz/v1beta1/query.rpc.Query")); })];
                case 10:
                    _k.authz = (_o.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _o);
                    _p = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/bank/v1beta1/query.rpc.Query")); })];
                case 11:
                    _k.bank = (_p.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _p);
                    _q = {};
                    _r = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/base/tendermint/v1beta1/query.rpc.Service")); })];
                case 12:
                    _k.base = (_q.tendermint = (_r.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _r),
                        _q);
                    _s = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/distribution/v1beta1/query.rpc.Query")); })];
                case 13:
                    _k.distribution = (_s.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _s);
                    _t = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/evidence/v1beta1/query.rpc.Query")); })];
                case 14:
                    _k.evidence = (_t.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _t);
                    _u = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/feegrant/v1beta1/query.rpc.Query")); })];
                case 15:
                    _k.feegrant = (_u.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _u);
                    _v = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/gov/v1/query.rpc.Query")); })];
                case 16:
                    _v.v1 = (_4.sent()).createRpcQueryExtension(client);
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/gov/v1beta1/query.rpc.Query")); })];
                case 17:
                    _k.gov = (_v.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _v);
                    _w = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/group/v1/query.rpc.Query")); })];
                case 18:
                    _k.group = (_w.v1 = (_4.sent()).createRpcQueryExtension(client),
                        _w);
                    _x = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/mint/v1beta1/query.rpc.Query")); })];
                case 19:
                    _k.mint = (_x.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _x);
                    _y = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/nft/v1beta1/query.rpc.Query")); })];
                case 20:
                    _k.nft = (_y.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _y);
                    _z = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/params/v1beta1/query.rpc.Query")); })];
                case 21:
                    _k.params = (_z.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _z);
                    _0 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/slashing/v1beta1/query.rpc.Query")); })];
                case 22:
                    _k.slashing = (_0.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _0);
                    _1 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/staking/v1beta1/query.rpc.Query")); })];
                case 23:
                    _k.staking = (_1.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _1);
                    _2 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/tx/v1beta1/service.rpc.Service")); })];
                case 24:
                    _k.tx = (_2.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _2);
                    _3 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/upgrade/v1beta1/query.rpc.Query")); })];
                case 25: return [2 /*return*/, (_b.cosmos = (_k.upgrade = (_3.v1beta1 = (_4.sent()).createRpcQueryExtension(client),
                        _3),
                        _k),
                        _b)];
            }
        });
    });
};
exports.createRPCQueryClient = createRPCQueryClient;
