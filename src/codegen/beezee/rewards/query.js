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
exports.QueryAllPendingUnlockParticipantResponse = exports.QueryAllPendingUnlockParticipantRequest = exports.QueryGetMarketIdTradingRewardIdHandlerResponse = exports.QueryGetMarketIdTradingRewardIdHandlerRequest = exports.QueryGetTradingRewardLeaderboardResponse = exports.QueryGetTradingRewardLeaderboardRequest = exports.QueryAllStakingRewardParticipantResponse = exports.QueryAllStakingRewardParticipantRequest = exports.QueryGetStakingRewardParticipantResponse = exports.QueryGetStakingRewardParticipantRequest = exports.QueryAllTradingRewardResponse = exports.QueryAllTradingRewardRequest = exports.QueryGetTradingRewardResponse = exports.QueryGetTradingRewardRequest = exports.QueryAllStakingRewardResponse = exports.QueryAllStakingRewardRequest = exports.QueryGetStakingRewardResponse = exports.QueryGetStakingRewardRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var params_1 = require("./params");
var staking_reward_1 = require("./staking_reward");
var trading_reward_1 = require("./trading_reward");
var staking_reward_participant_1 = require("./staking_reward_participant");
var _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryGetStakingRewardRequest() {
    return {
        rewardId: ""
    };
}
exports.QueryGetStakingRewardRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetStakingRewardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGetStakingRewardRequest();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryGetStakingRewardResponse() {
    return {
        stakingReward: undefined
    };
}
exports.QueryGetStakingRewardResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.stakingReward !== undefined) {
            staking_reward_1.StakingReward.encode(message.stakingReward, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetStakingRewardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakingReward = staking_reward_1.StakingReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGetStakingRewardResponse();
        message.stakingReward = object.stakingReward !== undefined && object.stakingReward !== null ? staking_reward_1.StakingReward.fromPartial(object.stakingReward) : undefined;
        return message;
    }
};
function createBaseQueryAllStakingRewardRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllStakingRewardRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllStakingRewardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllStakingRewardRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllStakingRewardResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryAllStakingRewardResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_reward_1.StakingReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllStakingRewardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(staking_reward_1.StakingReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAllStakingRewardResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_reward_1.StakingReward.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetTradingRewardRequest() {
    return {
        rewardId: ""
    };
}
exports.QueryGetTradingRewardRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetTradingRewardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGetTradingRewardRequest();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryGetTradingRewardResponse() {
    return {
        tradingReward: undefined
    };
}
exports.QueryGetTradingRewardResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tradingReward !== undefined) {
            trading_reward_1.TradingReward.encode(message.tradingReward, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetTradingRewardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradingReward = trading_reward_1.TradingReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGetTradingRewardResponse();
        message.tradingReward = object.tradingReward !== undefined && object.tradingReward !== null ? trading_reward_1.TradingReward.fromPartial(object.tradingReward) : undefined;
        return message;
    }
};
function createBaseQueryAllTradingRewardRequest() {
    return {
        state: "",
        pagination: undefined
    };
}
exports.QueryAllTradingRewardRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.state !== "") {
            writer.uint32(10).string(message.state);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllTradingRewardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAllTradingRewardRequest();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllTradingRewardResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryAllTradingRewardResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            trading_reward_1.TradingReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllTradingRewardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(trading_reward_1.TradingReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAllTradingRewardResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return trading_reward_1.TradingReward.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetStakingRewardParticipantRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryGetStakingRewardParticipantRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetStakingRewardParticipantRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGetStakingRewardParticipantRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetStakingRewardParticipantResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryGetStakingRewardParticipantResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_reward_participant_1.StakingRewardParticipant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetStakingRewardParticipantResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(staking_reward_participant_1.StakingRewardParticipant.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGetStakingRewardParticipantResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_reward_participant_1.StakingRewardParticipant.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllStakingRewardParticipantRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllStakingRewardParticipantRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllStakingRewardParticipantRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllStakingRewardParticipantRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllStakingRewardParticipantResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryAllStakingRewardParticipantResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_reward_participant_1.StakingRewardParticipant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllStakingRewardParticipantResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(staking_reward_participant_1.StakingRewardParticipant.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAllStakingRewardParticipantResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_reward_participant_1.StakingRewardParticipant.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryGetTradingRewardLeaderboardRequest() {
    return {
        rewardId: ""
    };
}
exports.QueryGetTradingRewardLeaderboardRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.rewardId !== "") {
            writer.uint32(10).string(message.rewardId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetTradingRewardLeaderboardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGetTradingRewardLeaderboardRequest();
        message.rewardId = (_a = object.rewardId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryGetTradingRewardLeaderboardResponse() {
    return {
        leaderboard: undefined
    };
}
exports.QueryGetTradingRewardLeaderboardResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.leaderboard !== undefined) {
            trading_reward_1.TradingRewardLeaderboard.encode(message.leaderboard, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetTradingRewardLeaderboardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaderboard = trading_reward_1.TradingRewardLeaderboard.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGetTradingRewardLeaderboardResponse();
        message.leaderboard = object.leaderboard !== undefined && object.leaderboard !== null ? trading_reward_1.TradingRewardLeaderboard.fromPartial(object.leaderboard) : undefined;
        return message;
    }
};
function createBaseQueryGetMarketIdTradingRewardIdHandlerRequest() {
    return {
        marketId: ""
    };
}
exports.QueryGetMarketIdTradingRewardIdHandlerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetMarketIdTradingRewardIdHandlerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGetMarketIdTradingRewardIdHandlerRequest();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryGetMarketIdTradingRewardIdHandlerResponse() {
    return {
        marketIdRewardId: undefined
    };
}
exports.QueryGetMarketIdTradingRewardIdHandlerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketIdRewardId !== undefined) {
            trading_reward_1.MarketIdTradingRewardId.encode(message.marketIdRewardId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGetMarketIdTradingRewardIdHandlerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketIdRewardId = trading_reward_1.MarketIdTradingRewardId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGetMarketIdTradingRewardIdHandlerResponse();
        message.marketIdRewardId = object.marketIdRewardId !== undefined && object.marketIdRewardId !== null ? trading_reward_1.MarketIdTradingRewardId.fromPartial(object.marketIdRewardId) : undefined;
        return message;
    }
};
function createBaseQueryAllPendingUnlockParticipantRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllPendingUnlockParticipantRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllPendingUnlockParticipantRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAllPendingUnlockParticipantRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAllPendingUnlockParticipantResponse() {
    return {
        list: [],
        pagination: undefined
    };
}
exports.QueryAllPendingUnlockParticipantResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.list; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_reward_participant_1.PendingUnlockParticipant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllPendingUnlockParticipantResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(staking_reward_participant_1.PendingUnlockParticipant.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAllPendingUnlockParticipantResponse();
        message.list = ((_a = object.list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_reward_participant_1.PendingUnlockParticipant.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
