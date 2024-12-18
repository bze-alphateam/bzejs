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
exports.createLCDClient = void 0;
var lcd_1 = require("@osmonauts/lcd");
var createLCDClient = function (_a) {
    var restEndpoint = _a.restEndpoint;
    return __awaiter(void 0, void 0, void 0, function () {
        var requestClient;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        return __generator(this, function (_3) {
            switch (_3.label) {
                case 0:
                    requestClient = new lcd_1.LCDClient({
                        restEndpoint: restEndpoint
                    });
                    _b = {};
                    _c = {};
                    _d = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/auth/v1beta1/query.lcd")); })];
                case 1:
                    _c.auth = (_d.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _d);
                    _e = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/authz/v1beta1/query.lcd")); })];
                case 2:
                    _c.authz = (_e.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _e);
                    _f = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/bank/v1beta1/query.lcd")); })];
                case 3:
                    _c.bank = (_f.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _f);
                    _g = {};
                    _h = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/base/tendermint/v1beta1/query.lcd")); })];
                case 4:
                    _c.base = (_g.tendermint = (_h.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _h),
                        _g);
                    _j = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/distribution/v1beta1/query.lcd")); })];
                case 5:
                    _c.distribution = (_j.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _j);
                    _k = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/evidence/v1beta1/query.lcd")); })];
                case 6:
                    _c.evidence = (_k.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _k);
                    _l = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/feegrant/v1beta1/query.lcd")); })];
                case 7:
                    _c.feegrant = (_l.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _l);
                    _m = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/gov/v1/query.lcd")); })];
                case 8:
                    _m.v1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    });
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/gov/v1beta1/query.lcd")); })];
                case 9:
                    _c.gov = (_m.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _m);
                    _o = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/group/v1/query.lcd")); })];
                case 10:
                    _c.group = (_o.v1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _o);
                    _p = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/mint/v1beta1/query.lcd")); })];
                case 11:
                    _c.mint = (_p.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _p);
                    _q = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/nft/v1beta1/query.lcd")); })];
                case 12:
                    _c.nft = (_q.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _q);
                    _r = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/params/v1beta1/query.lcd")); })];
                case 13:
                    _c.params = (_r.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _r);
                    _s = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/slashing/v1beta1/query.lcd")); })];
                case 14:
                    _c.slashing = (_s.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _s);
                    _t = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/staking/v1beta1/query.lcd")); })];
                case 15:
                    _c.staking = (_t.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _t);
                    _u = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/tx/v1beta1/service.lcd")); })];
                case 16:
                    _c.tx = (_u.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _u);
                    _v = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../cosmos/upgrade/v1beta1/query.lcd")); })];
                case 17:
                    _b.cosmos = (_c.upgrade = (_v.v1beta1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _v),
                        _c);
                    _w = {};
                    _x = {};
                    _y = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./applications/transfer/v1/query.lcd")); })];
                case 18:
                    _w.applications = (_x.transfer = (_y.v1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _y),
                        _x);
                    _z = {};
                    _0 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./core/channel/v1/query.lcd")); })];
                case 19:
                    _z.channel = (_0.v1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _0);
                    _1 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./core/client/v1/query.lcd")); })];
                case 20:
                    _z.client = (_1.v1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _1);
                    _2 = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./core/connection/v1/query.lcd")); })];
                case 21: return [2 /*return*/, (_b.ibc = (_w.core = (_z.connection = (_2.v1 = new (_3.sent()).LCDQueryClient({
                        requestClient: requestClient
                    }),
                        _2),
                        _z),
                        _w),
                        _b)];
            }
        });
    });
};
exports.createLCDClient = createLCDClient;
