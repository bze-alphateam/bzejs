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
        this.channelOpenInit = this.channelOpenInit.bind(this);
        this.channelOpenTry = this.channelOpenTry.bind(this);
        this.channelOpenAck = this.channelOpenAck.bind(this);
        this.channelOpenConfirm = this.channelOpenConfirm.bind(this);
        this.channelCloseInit = this.channelCloseInit.bind(this);
        this.channelCloseConfirm = this.channelCloseConfirm.bind(this);
        this.recvPacket = this.recvPacket.bind(this);
        this.timeout = this.timeout.bind(this);
        this.timeoutOnClose = this.timeoutOnClose.bind(this);
        this.acknowledgement = this.acknowledgement.bind(this);
    }
    MsgClientImpl.prototype.channelOpenInit = function (request) {
        var data = tx_1.MsgChannelOpenInit.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
        return promise.then(function (data) { return tx_1.MsgChannelOpenInitResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.channelOpenTry = function (request) {
        var data = tx_1.MsgChannelOpenTry.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
        return promise.then(function (data) { return tx_1.MsgChannelOpenTryResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.channelOpenAck = function (request) {
        var data = tx_1.MsgChannelOpenAck.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
        return promise.then(function (data) { return tx_1.MsgChannelOpenAckResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.channelOpenConfirm = function (request) {
        var data = tx_1.MsgChannelOpenConfirm.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
        return promise.then(function (data) { return tx_1.MsgChannelOpenConfirmResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.channelCloseInit = function (request) {
        var data = tx_1.MsgChannelCloseInit.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
        return promise.then(function (data) { return tx_1.MsgChannelCloseInitResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.channelCloseConfirm = function (request) {
        var data = tx_1.MsgChannelCloseConfirm.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
        return promise.then(function (data) { return tx_1.MsgChannelCloseConfirmResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.recvPacket = function (request) {
        var data = tx_1.MsgRecvPacket.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
        return promise.then(function (data) { return tx_1.MsgRecvPacketResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.timeout = function (request) {
        var data = tx_1.MsgTimeout.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
        return promise.then(function (data) { return tx_1.MsgTimeoutResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.timeoutOnClose = function (request) {
        var data = tx_1.MsgTimeoutOnClose.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
        return promise.then(function (data) { return tx_1.MsgTimeoutOnCloseResponse.decode(new _m0.Reader(data)); });
    };
    MsgClientImpl.prototype.acknowledgement = function (request) {
        var data = tx_1.MsgAcknowledgement.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
        return promise.then(function (data) { return tx_1.MsgAcknowledgementResponse.decode(new _m0.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
