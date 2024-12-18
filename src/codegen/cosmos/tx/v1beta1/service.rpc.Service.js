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
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var stargate_1 = require("@cosmjs/stargate");
var service_1 = require("./service");
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.simulate = this.simulate.bind(this);
        this.getTx = this.getTx.bind(this);
        this.broadcastTx = this.broadcastTx.bind(this);
        this.getTxsEvent = this.getTxsEvent.bind(this);
        this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    }
    ServiceClientImpl.prototype.simulate = function (request) {
        var data = service_1.SimulateRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
        return promise.then(function (data) { return service_1.SimulateResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getTx = function (request) {
        var data = service_1.GetTxRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
        return promise.then(function (data) { return service_1.GetTxResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.broadcastTx = function (request) {
        var data = service_1.BroadcastTxRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
        return promise.then(function (data) { return service_1.BroadcastTxResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getTxsEvent = function (request) {
        var data = service_1.GetTxsEventRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
        return promise.then(function (data) { return service_1.GetTxsEventResponse.decode(new _m0.Reader(data)); });
    };
    ServiceClientImpl.prototype.getBlockWithTxs = function (request) {
        var data = service_1.GetBlockWithTxsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
        return promise.then(function (data) { return service_1.GetBlockWithTxsResponse.decode(new _m0.Reader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new ServiceClientImpl(rpc);
    return {
        simulate: function (request) {
            return queryService.simulate(request);
        },
        getTx: function (request) {
            return queryService.getTx(request);
        },
        broadcastTx: function (request) {
            return queryService.broadcastTx(request);
        },
        getTxsEvent: function (request) {
            return queryService.getTxsEvent(request);
        },
        getBlockWithTxs: function (request) {
            return queryService.getBlockWithTxs(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
