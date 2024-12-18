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
exports.createRPCMsgClient = void 0;
var createRPCMsgClient = function (_a) {
    var rpc = _a.rpc;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return __generator(this, function (_s) {
            switch (_s.label) {
                case 0:
                    _b = {};
                    _c = {};
                    _d = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./authz/v1beta1/tx.rpc.msg")); })];
                case 1:
                    _c.authz = (_d.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _d);
                    _e = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./bank/v1beta1/tx.rpc.msg")); })];
                case 2:
                    _c.bank = (_e.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _e);
                    _f = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./crisis/v1beta1/tx.rpc.msg")); })];
                case 3:
                    _c.crisis = (_f.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _f);
                    _g = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./distribution/v1beta1/tx.rpc.msg")); })];
                case 4:
                    _c.distribution = (_g.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _g);
                    _h = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./evidence/v1beta1/tx.rpc.msg")); })];
                case 5:
                    _c.evidence = (_h.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _h);
                    _j = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./feegrant/v1beta1/tx.rpc.msg")); })];
                case 6:
                    _c.feegrant = (_j.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _j);
                    _k = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./gov/v1/tx.rpc.msg")); })];
                case 7:
                    _k.v1 = new (_s.sent()).MsgClientImpl(rpc);
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./gov/v1beta1/tx.rpc.msg")); })];
                case 8:
                    _c.gov = (_k.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _k);
                    _l = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./group/v1/tx.rpc.msg")); })];
                case 9:
                    _c.group = (_l.v1 = new (_s.sent()).MsgClientImpl(rpc),
                        _l);
                    _m = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./nft/v1beta1/tx.rpc.msg")); })];
                case 10:
                    _c.nft = (_m.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _m);
                    _o = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./slashing/v1beta1/tx.rpc.msg")); })];
                case 11:
                    _c.slashing = (_o.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _o);
                    _p = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./staking/v1beta1/tx.rpc.msg")); })];
                case 12:
                    _c.staking = (_p.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _p);
                    _q = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./upgrade/v1beta1/tx.rpc.msg")); })];
                case 13:
                    _c.upgrade = (_q.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _q);
                    _r = {};
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./vesting/v1beta1/tx.rpc.msg")); })];
                case 14: return [2 /*return*/, (_b.cosmos = (_c.vesting = (_r.v1beta1 = new (_s.sent()).MsgClientImpl(rpc),
                        _r),
                        _c),
                        _b)];
            }
        });
    });
};
exports.createRPCMsgClient = createRPCMsgClient;
