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
        this.owner = this.owner.bind(this);
        this.supply = this.supply.bind(this);
        this.nFTs = this.nFTs.bind(this);
        this.nFT = this.nFT.bind(this);
        this["class"] = this["class"].bind(this);
        this.classes = this.classes.bind(this);
    }
    /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    LCDQueryClient.prototype.balance = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/nft/v1beta1/balance/".concat(params.owner, "/").concat(params.classId);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    LCDQueryClient.prototype.owner = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/nft/v1beta1/owner/".concat(params.classId, "/").concat(params.id);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    LCDQueryClient.prototype.supply = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/nft/v1beta1/supply/".concat(params.classId);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     ERC721Enumerable */
    LCDQueryClient.prototype.nFTs = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.classId) !== "undefined") {
                            options.params.class_id = params.classId;
                        }
                        if (typeof (params === null || params === void 0 ? void 0 : params.owner) !== "undefined") {
                            options.params.owner = params.owner;
                        }
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "cosmos/nft/v1beta1/nfts";
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* NFT queries an NFT based on its class and id. */
    LCDQueryClient.prototype.nFT = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/nft/v1beta1/nfts/".concat(params.classId, "/").concat(params.id);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Class queries an NFT class based on its id */
    LCDQueryClient.prototype["class"] = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "cosmos/nft/v1beta1/classes/".concat(params.classId);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Classes queries all NFT classes */
    LCDQueryClient.prototype.classes = function (params) {
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
                        endpoint = "cosmos/nft/v1beta1/classes";
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LCDQueryClient;
}());
exports.LCDQueryClient = LCDQueryClient;
