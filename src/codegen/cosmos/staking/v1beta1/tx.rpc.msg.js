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
        this.createValidator = this.createValidator.bind(this);
        this.editValidator = this.editValidator.bind(this);
        this.delegate = this.delegate.bind(this);
        this.beginRedelegate = this.beginRedelegate.bind(this);
        this.undelegate = this.undelegate.bind(this);
    }
    MsgClientImpl.prototype.createValidator = function (request) {
        var data = tx_1.MsgCreateValidator.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then(function (data) { return tx_1.MsgCreateValidatorResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.editValidator = function (request) {
        var data = tx_1.MsgEditValidator.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then(function (data) { return tx_1.MsgEditValidatorResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.delegate = function (request) {
        var data = tx_1.MsgDelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then(function (data) { return tx_1.MsgDelegateResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.beginRedelegate = function (request) {
        var data = tx_1.MsgBeginRedelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then(function (data) { return tx_1.MsgBeginRedelegateResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.undelegate = function (request) {
        var data = tx_1.MsgUndelegate.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then(function (data) { return tx_1.MsgUndelegateResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
