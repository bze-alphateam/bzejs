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
exports.__esModule = true;
exports.MsgClientImpl = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var tx_1 = require("./tx");
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.createDenom = this.createDenom.bind(this);
        this.mint = this.mint.bind(this);
        this.burn = this.burn.bind(this);
        this.changeAdmin = this.changeAdmin.bind(this);
        this.setDenomMetadata = this.setDenomMetadata.bind(this);
    }
    MsgClientImpl.prototype.createDenom = function (request) {
        var data = tx_1.MsgCreateDenom.encode(request).finish();
        var promise = this.rpc.request("bze.tokenfactory.v1.Msg", "CreateDenom", data);
        return promise.then(function (data) { return tx_1.MsgCreateDenomResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.mint = function (request) {
        var data = tx_1.MsgMint.encode(request).finish();
        var promise = this.rpc.request("bze.tokenfactory.v1.Msg", "Mint", data);
        return promise.then(function (data) { return tx_1.MsgMintResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.burn = function (request) {
        var data = tx_1.MsgBurn.encode(request).finish();
        var promise = this.rpc.request("bze.tokenfactory.v1.Msg", "Burn", data);
        return promise.then(function (data) { return tx_1.MsgBurnResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.changeAdmin = function (request) {
        var data = tx_1.MsgChangeAdmin.encode(request).finish();
        var promise = this.rpc.request("bze.tokenfactory.v1.Msg", "ChangeAdmin", data);
        return promise.then(function (data) { return tx_1.MsgChangeAdminResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.setDenomMetadata = function (request) {
        var data = tx_1.MsgSetDenomMetadata.encode(request).finish();
        var promise = this.rpc.request("bze.tokenfactory.v1.Msg", "SetDenomMetadata", data);
        return promise.then(function (data) { return tx_1.MsgSetDenomMetadataResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
