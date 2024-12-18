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
        this.accounts = this.accounts.bind(this);
        this.account = this.account.bind(this);
        this.params = this.params.bind(this);
        this.moduleAccounts = this.moduleAccounts.bind(this);
        this.bech32Prefix = this.bech32Prefix.bind(this);
        this.addressBytesToString = this.addressBytesToString.bind(this);
        this.addressStringToBytes = this.addressStringToBytes.bind(this);
    }
    /* Accounts returns all the existing accounts
    
     Since: cosmos-sdk 0.43 */
    LCDQueryClient.prototype.accounts = function (params) {
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
                        endpoint = "cosmos/auth/v1beta1/accounts";
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Account returns account details based on address. */
    LCDQueryClient.prototype.account = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/auth/v1beta1/accounts/".concat(params.address);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Params queries all parameters. */
    LCDQueryClient.prototype.params = function (_params) {
        if (_params === void 0) { _params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/auth/v1beta1/params";
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* ModuleAccounts returns all the existing module accounts. */
    LCDQueryClient.prototype.moduleAccounts = function (_params) {
        if (_params === void 0) { _params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/auth/v1beta1/module_accounts";
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Bech32 queries bech32Prefix */
    LCDQueryClient.prototype.bech32Prefix = function (_params) {
        if (_params === void 0) { _params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/auth/v1beta1/bech32";
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* AddressBytesToString converts Account Address bytes to string */
    LCDQueryClient.prototype.addressBytesToString = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/auth/v1beta1/bech32/".concat(params.addressBytes);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* AddressStringToBytes converts Address string to bytes */
    LCDQueryClient.prototype.addressStringToBytes = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/auth/v1beta1/bech32/".concat(params.addressString);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LCDQueryClient;
}());
exports.LCDQueryClient = LCDQueryClient;
