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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getSigningIbcClient = exports.getSigningIbcClientOptions = exports.ibcProtoRegistry = exports.ibcAminoConverters = void 0;
var proto_signing_1 = require("@cosmjs/proto-signing");
var stargate_1 = require("@cosmjs/stargate");
var ibcApplicationsTransferV1TxRegistry = __importStar(require("./applications/transfer/v1/tx.registry"));
var ibcCoreChannelV1TxRegistry = __importStar(require("./core/channel/v1/tx.registry"));
var ibcCoreClientV1TxRegistry = __importStar(require("./core/client/v1/tx.registry"));
var ibcCoreConnectionV1TxRegistry = __importStar(require("./core/connection/v1/tx.registry"));
var ibcApplicationsTransferV1TxAmino = __importStar(require("./applications/transfer/v1/tx.amino"));
var ibcCoreChannelV1TxAmino = __importStar(require("./core/channel/v1/tx.amino"));
var ibcCoreClientV1TxAmino = __importStar(require("./core/client/v1/tx.amino"));
var ibcCoreConnectionV1TxAmino = __importStar(require("./core/connection/v1/tx.amino"));
exports.ibcAminoConverters = __assign(__assign(__assign(__assign({}, ibcApplicationsTransferV1TxAmino.AminoConverter), ibcCoreChannelV1TxAmino.AminoConverter), ibcCoreClientV1TxAmino.AminoConverter), ibcCoreConnectionV1TxAmino.AminoConverter);
exports.ibcProtoRegistry = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], ibcApplicationsTransferV1TxRegistry.registry, true), ibcCoreChannelV1TxRegistry.registry, true), ibcCoreClientV1TxRegistry.registry, true), ibcCoreConnectionV1TxRegistry.registry, true);
var getSigningIbcClientOptions = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.defaultTypes, defaultTypes = _c === void 0 ? stargate_1.defaultRegistryTypes : _c;
    var registry = new proto_signing_1.Registry(__spreadArray(__spreadArray([], defaultTypes, true), exports.ibcProtoRegistry, true));
    var aminoTypes = new stargate_1.AminoTypes(__assign({}, exports.ibcAminoConverters));
    return {
        registry: registry,
        aminoTypes: aminoTypes
    };
};
exports.getSigningIbcClientOptions = getSigningIbcClientOptions;
var getSigningIbcClient = function (_a) {
    var rpcEndpoint = _a.rpcEndpoint, signer = _a.signer, _b = _a.defaultTypes, defaultTypes = _b === void 0 ? stargate_1.defaultRegistryTypes : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, registry, aminoTypes, client;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _c = (0, exports.getSigningIbcClientOptions)({
                        defaultTypes: defaultTypes
                    }), registry = _c.registry, aminoTypes = _c.aminoTypes;
                    return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
                            registry: registry,
                            aminoTypes: aminoTypes
                        })];
                case 1:
                    client = _d.sent();
                    return [2 /*return*/, client];
            }
        });
    });
};
exports.getSigningIbcClient = getSigningIbcClient;
