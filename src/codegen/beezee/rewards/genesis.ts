import { Params, ParamsSDKType } from "./params";
import { StakingReward, StakingRewardSDKType } from "./staking_reward";
import { TradingReward, TradingRewardSDKType, TradingRewardLeaderboard, TradingRewardLeaderboardSDKType, TradingRewardCandidate, TradingRewardCandidateSDKType, MarketIdTradingRewardId, MarketIdTradingRewardIdSDKType, TradingRewardExpiration, TradingRewardExpirationSDKType } from "./trading_reward";
import { StakingRewardParticipant, StakingRewardParticipantSDKType, PendingUnlockParticipant, PendingUnlockParticipantSDKType } from "./staking_reward_participant";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** GenesisState defines the rewards module's genesis state. */

export interface GenesisState {
  params?: Params;
  stakingRewardList: StakingReward[];
  stakingRewardsCounter: Long;
  tradingRewardsCounter: Long;
  activeTradingRewardList: TradingReward[];
  pendingTradingRewardList: TradingReward[];
  stakingRewardParticipantList: StakingRewardParticipant[];
  pendingUnlockParticipantList: PendingUnlockParticipant[];
  tradingRewardLeaderboardList: TradingRewardLeaderboard[];
  tradingRewardCandidateList: TradingRewardCandidate[];
  marketIdTradingRewardIdList: MarketIdTradingRewardId[];
  pendingTradingRewardExpirationList: TradingRewardExpiration[];
  activeTradingRewardExpirationList: TradingRewardExpiration[];
}
/** GenesisState defines the rewards module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  staking_reward_list: StakingRewardSDKType[];
  staking_rewards_counter: Long;
  trading_rewards_counter: Long;
  active_trading_reward_list: TradingRewardSDKType[];
  pending_trading_reward_list: TradingRewardSDKType[];
  staking_reward_participant_list: StakingRewardParticipantSDKType[];
  pending_unlock_participant_list: PendingUnlockParticipantSDKType[];
  trading_reward_leaderboard_list: TradingRewardLeaderboardSDKType[];
  trading_reward_candidate_list: TradingRewardCandidateSDKType[];
  market_id_trading_reward_id_list: MarketIdTradingRewardIdSDKType[];
  pending_trading_reward_expiration_list: TradingRewardExpirationSDKType[];
  active_trading_reward_expiration_list: TradingRewardExpirationSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    stakingRewardList: [],
    stakingRewardsCounter: Long.UZERO,
    tradingRewardsCounter: Long.UZERO,
    activeTradingRewardList: [],
    pendingTradingRewardList: [],
    stakingRewardParticipantList: [],
    pendingUnlockParticipantList: [],
    tradingRewardLeaderboardList: [],
    tradingRewardCandidateList: [],
    marketIdTradingRewardIdList: [],
    pendingTradingRewardExpirationList: [],
    activeTradingRewardExpirationList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.stakingRewardList) {
      StakingReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.stakingRewardsCounter.isZero()) {
      writer.uint32(24).uint64(message.stakingRewardsCounter);
    }

    if (!message.tradingRewardsCounter.isZero()) {
      writer.uint32(32).uint64(message.tradingRewardsCounter);
    }

    for (const v of message.activeTradingRewardList) {
      TradingReward.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.pendingTradingRewardList) {
      TradingReward.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.stakingRewardParticipantList) {
      StakingRewardParticipant.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.pendingUnlockParticipantList) {
      PendingUnlockParticipant.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.tradingRewardLeaderboardList) {
      TradingRewardLeaderboard.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.tradingRewardCandidateList) {
      TradingRewardCandidate.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.marketIdTradingRewardIdList) {
      MarketIdTradingRewardId.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.pendingTradingRewardExpirationList) {
      TradingRewardExpiration.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    for (const v of message.activeTradingRewardExpirationList) {
      TradingRewardExpiration.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.stakingRewardList.push(StakingReward.decode(reader, reader.uint32()));
          break;

        case 3:
          message.stakingRewardsCounter = (reader.uint64() as Long);
          break;

        case 4:
          message.tradingRewardsCounter = (reader.uint64() as Long);
          break;

        case 5:
          message.activeTradingRewardList.push(TradingReward.decode(reader, reader.uint32()));
          break;

        case 6:
          message.pendingTradingRewardList.push(TradingReward.decode(reader, reader.uint32()));
          break;

        case 7:
          message.stakingRewardParticipantList.push(StakingRewardParticipant.decode(reader, reader.uint32()));
          break;

        case 8:
          message.pendingUnlockParticipantList.push(PendingUnlockParticipant.decode(reader, reader.uint32()));
          break;

        case 9:
          message.tradingRewardLeaderboardList.push(TradingRewardLeaderboard.decode(reader, reader.uint32()));
          break;

        case 10:
          message.tradingRewardCandidateList.push(TradingRewardCandidate.decode(reader, reader.uint32()));
          break;

        case 11:
          message.marketIdTradingRewardIdList.push(MarketIdTradingRewardId.decode(reader, reader.uint32()));
          break;

        case 12:
          message.pendingTradingRewardExpirationList.push(TradingRewardExpiration.decode(reader, reader.uint32()));
          break;

        case 13:
          message.activeTradingRewardExpirationList.push(TradingRewardExpiration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakingRewardList = object.stakingRewardList?.map(e => StakingReward.fromPartial(e)) || [];
    message.stakingRewardsCounter = object.stakingRewardsCounter !== undefined && object.stakingRewardsCounter !== null ? Long.fromValue(object.stakingRewardsCounter) : Long.UZERO;
    message.tradingRewardsCounter = object.tradingRewardsCounter !== undefined && object.tradingRewardsCounter !== null ? Long.fromValue(object.tradingRewardsCounter) : Long.UZERO;
    message.activeTradingRewardList = object.activeTradingRewardList?.map(e => TradingReward.fromPartial(e)) || [];
    message.pendingTradingRewardList = object.pendingTradingRewardList?.map(e => TradingReward.fromPartial(e)) || [];
    message.stakingRewardParticipantList = object.stakingRewardParticipantList?.map(e => StakingRewardParticipant.fromPartial(e)) || [];
    message.pendingUnlockParticipantList = object.pendingUnlockParticipantList?.map(e => PendingUnlockParticipant.fromPartial(e)) || [];
    message.tradingRewardLeaderboardList = object.tradingRewardLeaderboardList?.map(e => TradingRewardLeaderboard.fromPartial(e)) || [];
    message.tradingRewardCandidateList = object.tradingRewardCandidateList?.map(e => TradingRewardCandidate.fromPartial(e)) || [];
    message.marketIdTradingRewardIdList = object.marketIdTradingRewardIdList?.map(e => MarketIdTradingRewardId.fromPartial(e)) || [];
    message.pendingTradingRewardExpirationList = object.pendingTradingRewardExpirationList?.map(e => TradingRewardExpiration.fromPartial(e)) || [];
    message.activeTradingRewardExpirationList = object.activeTradingRewardExpirationList?.map(e => TradingRewardExpiration.fromPartial(e)) || [];
    return message;
  }

};