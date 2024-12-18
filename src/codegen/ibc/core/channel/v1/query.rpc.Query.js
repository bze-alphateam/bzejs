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
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _m0 = __importStar(require("protobufjs/minimal"));
var stargate_1 = require("@cosmjs/stargate");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.channel = this.channel.bind(this);
        this.channels = this.channels.bind(this);
        this.connectionChannels = this.connectionChannels.bind(this);
        this.channelClientState = this.channelClientState.bind(this);
        this.channelConsensusState = this.channelConsensusState.bind(this);
        this.packetCommitment = this.packetCommitment.bind(this);
        this.packetCommitments = this.packetCommitments.bind(this);
        this.packetReceipt = this.packetReceipt.bind(this);
        this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
        this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
        this.unreceivedPackets = this.unreceivedPackets.bind(this);
        this.unreceivedAcks = this.unreceivedAcks.bind(this);
        this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
    }
    QueryClientImpl.prototype.channel = function (request) {
        var data = query_1.QueryChannelRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
        return promise.then(function (data) { return query_1.QueryChannelResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.channels = function (request) {
        if (request === void 0) { request = {
            pagination: undefined
        }; }
        var data = query_1.QueryChannelsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
        return promise.then(function (data) { return query_1.QueryChannelsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.connectionChannels = function (request) {
        var data = query_1.QueryConnectionChannelsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
        return promise.then(function (data) { return query_1.QueryConnectionChannelsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.channelClientState = function (request) {
        var data = query_1.QueryChannelClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
        return promise.then(function (data) { return query_1.QueryChannelClientStateResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.channelConsensusState = function (request) {
        var data = query_1.QueryChannelConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
        return promise.then(function (data) { return query_1.QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.packetCommitment = function (request) {
        var data = query_1.QueryPacketCommitmentRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
        return promise.then(function (data) { return query_1.QueryPacketCommitmentResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.packetCommitments = function (request) {
        var data = query_1.QueryPacketCommitmentsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
        return promise.then(function (data) { return query_1.QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.packetReceipt = function (request) {
        var data = query_1.QueryPacketReceiptRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
        return promise.then(function (data) { return query_1.QueryPacketReceiptResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.packetAcknowledgement = function (request) {
        var data = query_1.QueryPacketAcknowledgementRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
        return promise.then(function (data) { return query_1.QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.packetAcknowledgements = function (request) {
        var data = query_1.QueryPacketAcknowledgementsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
        return promise.then(function (data) { return query_1.QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.unreceivedPackets = function (request) {
        var data = query_1.QueryUnreceivedPacketsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
        return promise.then(function (data) { return query_1.QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.unreceivedAcks = function (request) {
        var data = query_1.QueryUnreceivedAcksRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
        return promise.then(function (data) { return query_1.QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)); });
    };
    QueryClientImpl.prototype.nextSequenceReceive = function (request) {
        var data = query_1.QueryNextSequenceReceiveRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
        return promise.then(function (data) { return query_1.QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function (base) {
    var rpc = (0, stargate_1.createProtobufRpcClient)(base);
    var queryService = new QueryClientImpl(rpc);
    return {
        channel: function (request) {
            return queryService.channel(request);
        },
        channels: function (request) {
            return queryService.channels(request);
        },
        connectionChannels: function (request) {
            return queryService.connectionChannels(request);
        },
        channelClientState: function (request) {
            return queryService.channelClientState(request);
        },
        channelConsensusState: function (request) {
            return queryService.channelConsensusState(request);
        },
        packetCommitment: function (request) {
            return queryService.packetCommitment(request);
        },
        packetCommitments: function (request) {
            return queryService.packetCommitments(request);
        },
        packetReceipt: function (request) {
            return queryService.packetReceipt(request);
        },
        packetAcknowledgement: function (request) {
            return queryService.packetAcknowledgement(request);
        },
        packetAcknowledgements: function (request) {
            return queryService.packetAcknowledgements(request);
        },
        unreceivedPackets: function (request) {
            return queryService.unreceivedPackets(request);
        },
        unreceivedAcks: function (request) {
            return queryService.unreceivedAcks(request);
        },
        nextSequenceReceive: function (request) {
            return queryService.nextSequenceReceive(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
