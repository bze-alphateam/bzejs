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
        this.createClient = this.createClient.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.upgradeClient = this.upgradeClient.bind(this);
        this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
    }
    MsgClientImpl.prototype.createClient = function (request) {
        var data = tx_1.MsgCreateClient.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
        return promise.then(function (data) { return tx_1.MsgCreateClientResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.updateClient = function (request) {
        var data = tx_1.MsgUpdateClient.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
        return promise.then(function (data) { return tx_1.MsgUpdateClientResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.upgradeClient = function (request) {
        var data = tx_1.MsgUpgradeClient.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
        return promise.then(function (data) { return tx_1.MsgUpgradeClientResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.submitMisbehaviour = function (request) {
        var data = tx_1.MsgSubmitMisbehaviour.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
        return promise.then(function (data) { return tx_1.MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
