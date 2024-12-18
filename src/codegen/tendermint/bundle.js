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
exports.tendermint = void 0;
var _171 = __importStar(require("./abci/types"));
var _172 = __importStar(require("./crypto/keys"));
var _173 = __importStar(require("./crypto/proof"));
var _174 = __importStar(require("./libs/bits/types"));
var _175 = __importStar(require("./p2p/types"));
var _176 = __importStar(require("./types/block"));
var _177 = __importStar(require("./types/evidence"));
var _178 = __importStar(require("./types/params"));
var _179 = __importStar(require("./types/types"));
var _180 = __importStar(require("./types/validator"));
var _181 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = __assign({}, _171);
    tendermint.crypto = __assign(__assign({}, _172), _173);
    var libs;
    (function (libs) {
        libs.bits = __assign({}, _174);
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = __assign({}, _175);
    tendermint.types = __assign(__assign(__assign(__assign(__assign({}, _176), _177), _178), _179), _180);
    tendermint.version = __assign({}, _181);
})(tendermint = exports.tendermint || (exports.tendermint = {}));
