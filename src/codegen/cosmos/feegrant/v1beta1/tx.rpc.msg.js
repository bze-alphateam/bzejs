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
        this.grantAllowance = this.grantAllowance.bind(this);
        this.revokeAllowance = this.revokeAllowance.bind(this);
    }
    MsgClientImpl.prototype.grantAllowance = function (request) {
        var data = tx_1.MsgGrantAllowance.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
        return promise.then(function (data) { return tx_1.MsgGrantAllowanceResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.revokeAllowance = function (request) {
        var data = tx_1.MsgRevokeAllowance.encode(request).finish();
        var promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
        return promise.then(function (data) { return tx_1.MsgRevokeAllowanceResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
