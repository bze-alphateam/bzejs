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
        this.grant = this.grant.bind(this);
        this.exec = this.exec.bind(this);
        this.revoke = this.revoke.bind(this);
    }
    MsgClientImpl.prototype.grant = function (request) {
        var data = tx_1.MsgGrant.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
        return promise.then(function (data) { return tx_1.MsgGrantResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.exec = function (request) {
        var data = tx_1.MsgExec.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
        return promise.then(function (data) { return tx_1.MsgExecResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.revoke = function (request) {
        var data = tx_1.MsgRevoke.encode(request).finish();
        var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
        return promise.then(function (data) { return tx_1.MsgRevokeResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
