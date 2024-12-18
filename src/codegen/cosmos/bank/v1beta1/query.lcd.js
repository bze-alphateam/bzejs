"use strict";
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
exports.LCDQueryClient = void 0;
var helpers_1 = require("../../../helpers");
var LCDQueryClient = /** @class */ (function () {
    function LCDQueryClient(_a) {
        var requestClient = _a.requestClient;
        this.req = requestClient;
        this.balance = this.balance.bind(this);
        this.allBalances = this.allBalances.bind(this);
        this.spendableBalances = this.spendableBalances.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.params = this.params.bind(this);
        this.denomMetadata = this.denomMetadata.bind(this);
        this.denomsMetadata = this.denomsMetadata.bind(this);
        this.denomOwners = this.denomOwners.bind(this);
    }
    /* Balance queries the balance of a single coin for a single account. */
    LCDQueryClient.prototype.balance = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                            options.params.denom = params.denom;
                        }
                        endpoint = "cosmos/bank/v1beta1/balances/".concat(params.address, "/by_denom");
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* AllBalances queries the balance of all coins for a single account. */
    LCDQueryClient.prototype.allBalances = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/bank/v1beta1/balances/".concat(params.address);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* SpendableBalances queries the spenable balance of all coins for a single
     account. */
    LCDQueryClient.prototype.spendableBalances = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/bank/v1beta1/spendable_balances/".concat(params.address);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* TotalSupply queries the total supply of all coins. */
    LCDQueryClient.prototype.totalSupply = function (params) {
        if (params === void 0) { params = {
            pagination: undefined
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/bank/v1beta1/supply";
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* SupplyOf queries the supply of a single coin. */
    LCDQueryClient.prototype.supplyOf = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                            options.params.denom = params.denom;
                        }
                        endpoint = "cosmos/bank/v1beta1/supply/by_denom";
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Params queries the parameters of x/bank module. */
    LCDQueryClient.prototype.params = function (_params) {
        if (_params === void 0) { _params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/bank/v1beta1/params";
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* DenomsMetadata queries the client metadata of a given coin denomination. */
    LCDQueryClient.prototype.denomMetadata = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/bank/v1beta1/denoms_metadata/".concat(params.denom);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* DenomsMetadata queries the client metadata for all registered coin
     denominations. */
    LCDQueryClient.prototype.denomsMetadata = function (params) {
        if (params === void 0) { params = {
            pagination: undefined
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/bank/v1beta1/denoms_metadata";
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* DenomOwners queries for all account addresses that own a particular token
     denomination. */
    LCDQueryClient.prototype.denomOwners = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/bank/v1beta1/denom_owners/".concat(params.denom);
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LCDQueryClient;
}());
exports.LCDQueryClient = LCDQueryClient;
