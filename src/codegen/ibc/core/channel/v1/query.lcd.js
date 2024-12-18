"use strict";
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
exports.__esModule = true;
exports.LCDQueryClient = void 0;
var helpers_1 = require("../../../../helpers");
var LCDQueryClient = /** @class */ (function () {
    function LCDQueryClient(_a) {
        var requestClient = _a.requestClient;
        this.req = requestClient;
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
    /* Channel queries an IBC Channel. */
    LCDQueryClient.prototype.channel = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* Channels queries all the IBC channels of a chain. */
    LCDQueryClient.prototype.channels = function (params) {
        if (params === void 0) { params = {
            pagination: undefined
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "ibc/core/channel/v1/channels";
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* ConnectionChannels queries all the channels associated with a connection
     end. */
    LCDQueryClient.prototype.connectionChannels = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "ibc/core/channel/v1/connections/".concat(params.connection, "/channels");
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* ChannelClientState queries for the client state for the channel associated
     with the provided channel identifiers. */
    LCDQueryClient.prototype.channelClientState = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/client_state");
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* ChannelConsensusState queries for the consensus state for the channel
     associated with the provided channel identifiers. */
    LCDQueryClient.prototype.channelConsensusState = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/consensus_state/revision/").concat(params.revisionNumber, "/height/").concat(params.revisionHeight);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* PacketCommitment queries a stored packet commitment hash. */
    LCDQueryClient.prototype.packetCommitment = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/packet_commitments/").concat(params.sequence);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* PacketCommitments returns all the packet commitments hashes associated
     with a channel. */
    LCDQueryClient.prototype.packetCommitments = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/packet_commitments");
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* PacketReceipt queries if a given packet sequence has been received on the
     queried chain */
    LCDQueryClient.prototype.packetReceipt = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/packet_receipts/").concat(params.sequence);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
    LCDQueryClient.prototype.packetAcknowledgement = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/packet_acks/").concat(params.sequence);
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* PacketAcknowledgements returns all the packet acknowledgements associated
     with a channel. */
    LCDQueryClient.prototype.packetAcknowledgements = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            params: {}
                        };
                        if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                            (0, helpers_1.setPaginationParams)(options, params.pagination);
                        }
                        if (typeof (params === null || params === void 0 ? void 0 : params.packetCommitmentSequences) !== "undefined") {
                            options.params.packet_commitment_sequences = params.packetCommitmentSequences;
                        }
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/packet_acknowledgements");
                        return [4 /*yield*/, this.req.get(endpoint, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* UnreceivedPackets returns all the unreceived IBC packets associated with a
     channel and sequences. */
    LCDQueryClient.prototype.unreceivedPackets = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/packet_commitments/").concat(params.packetCommitmentSequences, "/unreceived_packets");
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     with a channel and sequences. */
    LCDQueryClient.prototype.unreceivedAcks = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/packet_commitments/").concat(params.packetAckSequences, "/unreceived_acks");
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* NextSequenceReceive returns the next receive sequence for a given channel. */
    LCDQueryClient.prototype.nextSequenceReceive = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = "ibc/core/channel/v1/channels/".concat(params.channelId, "/ports/").concat(params.portId, "/next_sequence");
                        return [4 /*yield*/, this.req.get(endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LCDQueryClient;
}());
exports.LCDQueryClient = LCDQueryClient;
