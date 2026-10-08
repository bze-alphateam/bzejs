//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakingReward, StakingRewardAmino, StakingRewardSDKType, TradingReward, TradingRewardAmino, TradingRewardSDKType, StakingRewardParticipant, StakingRewardParticipantAmino, StakingRewardParticipantSDKType, PendingUnlockParticipant, PendingUnlockParticipantAmino, PendingUnlockParticipantSDKType, TradingRewardLeaderboard, TradingRewardLeaderboardAmino, TradingRewardLeaderboardSDKType, TradingRewardCandidate, TradingRewardCandidateAmino, TradingRewardCandidateSDKType, MarketIdTradingRewardId, MarketIdTradingRewardIdAmino, MarketIdTradingRewardIdSDKType, TradingRewardExpiration, TradingRewardExpirationAmino, TradingRewardExpirationSDKType, UnlockParticipantsQueue, UnlockParticipantsQueueAmino, UnlockParticipantsQueueSDKType, StakingRewardsDistributionQueue, StakingRewardsDistributionQueueAmino, StakingRewardsDistributionQueueSDKType, TradingRewardExpirationQueue, TradingRewardExpirationQueueAmino, TradingRewardExpirationQueueSDKType, DenomReward, DenomRewardAmino, DenomRewardSDKType, DenomRewardPrize, DenomRewardPrizeAmino, DenomRewardPrizeSDKType, DenomRewardParticipant, DenomRewardParticipantAmino, DenomRewardParticipantSDKType, DenomRewardParticipantIndex, DenomRewardParticipantIndexAmino, DenomRewardParticipantIndexSDKType, DenomRewardSchedule, DenomRewardScheduleAmino, DenomRewardScheduleSDKType, DenomRewardsDistributionQueue, DenomRewardsDistributionQueueAmino, DenomRewardsDistributionQueueSDKType } from "./store";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * GenesisState defines the rewards module's genesis state.
 * @name GenesisState
 * @package bze.rewards
 * @see proto type: bze.rewards.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  stakingRewardList: StakingReward[];
  stakingRewardsCounter: bigint;
  tradingRewardsCounter: bigint;
  activeTradingRewardList: TradingReward[];
  pendingTradingRewardList: TradingReward[];
  stakingRewardParticipantList: StakingRewardParticipant[];
  pendingUnlockParticipantList: PendingUnlockParticipant[];
  tradingRewardLeaderboardList: TradingRewardLeaderboard[];
  tradingRewardCandidateList: TradingRewardCandidate[];
  marketIdTradingRewardIdList: MarketIdTradingRewardId[];
  pendingTradingRewardExpirationList: TradingRewardExpiration[];
  activeTradingRewardExpirationList: TradingRewardExpiration[];
  unlockParticipantsQueue?: UnlockParticipantsQueue;
  stakingRewardsDistributionQueue?: StakingRewardsDistributionQueue;
  tradingRewardExpirationQueue?: TradingRewardExpirationQueue;
  /**
   * Denom Rewards genesis (additive)
   */
  denomRewardList: DenomReward[];
  denomRewardPrizeList: DenomRewardPrize[];
  denomRewardParticipantList: DenomRewardParticipant[];
  denomRewardParticipantIndexList: DenomRewardParticipantIndex[];
  denomRewardScheduleList: DenomRewardSchedule[];
  denomRewardScheduleCounter: bigint;
  denomRewardsDistributionQueue?: DenomRewardsDistributionQueue;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bze.rewards.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the rewards module's genesis state.
 * @name GenesisStateAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  staking_reward_list?: StakingRewardAmino[];
  staking_rewards_counter?: string;
  trading_rewards_counter?: string;
  active_trading_reward_list?: TradingRewardAmino[];
  pending_trading_reward_list?: TradingRewardAmino[];
  staking_reward_participant_list?: StakingRewardParticipantAmino[];
  pending_unlock_participant_list?: PendingUnlockParticipantAmino[];
  trading_reward_leaderboard_list?: TradingRewardLeaderboardAmino[];
  trading_reward_candidate_list?: TradingRewardCandidateAmino[];
  market_id_trading_reward_id_list?: MarketIdTradingRewardIdAmino[];
  pending_trading_reward_expiration_list?: TradingRewardExpirationAmino[];
  active_trading_reward_expiration_list?: TradingRewardExpirationAmino[];
  unlock_participants_queue?: UnlockParticipantsQueueAmino;
  staking_rewards_distribution_queue?: StakingRewardsDistributionQueueAmino;
  trading_reward_expiration_queue?: TradingRewardExpirationQueueAmino;
  /**
   * Denom Rewards genesis (additive)
   */
  denom_reward_list?: DenomRewardAmino[];
  denom_reward_prize_list?: DenomRewardPrizeAmino[];
  denom_reward_participant_list?: DenomRewardParticipantAmino[];
  denom_reward_participant_index_list?: DenomRewardParticipantIndexAmino[];
  denom_reward_schedule_list?: DenomRewardScheduleAmino[];
  denom_reward_schedule_counter?: string;
  denom_rewards_distribution_queue?: DenomRewardsDistributionQueueAmino;
}
export interface GenesisStateAminoMsg {
  type: "/bze.rewards.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the rewards module's genesis state.
 * @name GenesisStateSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.GenesisState
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  staking_reward_list: StakingRewardSDKType[];
  staking_rewards_counter: bigint;
  trading_rewards_counter: bigint;
  active_trading_reward_list: TradingRewardSDKType[];
  pending_trading_reward_list: TradingRewardSDKType[];
  staking_reward_participant_list: StakingRewardParticipantSDKType[];
  pending_unlock_participant_list: PendingUnlockParticipantSDKType[];
  trading_reward_leaderboard_list: TradingRewardLeaderboardSDKType[];
  trading_reward_candidate_list: TradingRewardCandidateSDKType[];
  market_id_trading_reward_id_list: MarketIdTradingRewardIdSDKType[];
  pending_trading_reward_expiration_list: TradingRewardExpirationSDKType[];
  active_trading_reward_expiration_list: TradingRewardExpirationSDKType[];
  unlock_participants_queue?: UnlockParticipantsQueueSDKType;
  staking_rewards_distribution_queue?: StakingRewardsDistributionQueueSDKType;
  trading_reward_expiration_queue?: TradingRewardExpirationQueueSDKType;
  denom_reward_list: DenomRewardSDKType[];
  denom_reward_prize_list: DenomRewardPrizeSDKType[];
  denom_reward_participant_list: DenomRewardParticipantSDKType[];
  denom_reward_participant_index_list: DenomRewardParticipantIndexSDKType[];
  denom_reward_schedule_list: DenomRewardScheduleSDKType[];
  denom_reward_schedule_counter: bigint;
  denom_rewards_distribution_queue?: DenomRewardsDistributionQueueSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakingRewardList: [],
    stakingRewardsCounter: BigInt(0),
    tradingRewardsCounter: BigInt(0),
    activeTradingRewardList: [],
    pendingTradingRewardList: [],
    stakingRewardParticipantList: [],
    pendingUnlockParticipantList: [],
    tradingRewardLeaderboardList: [],
    tradingRewardCandidateList: [],
    marketIdTradingRewardIdList: [],
    pendingTradingRewardExpirationList: [],
    activeTradingRewardExpirationList: [],
    unlockParticipantsQueue: undefined,
    stakingRewardsDistributionQueue: undefined,
    tradingRewardExpirationQueue: undefined,
    denomRewardList: [],
    denomRewardPrizeList: [],
    denomRewardParticipantList: [],
    denomRewardParticipantIndexList: [],
    denomRewardScheduleList: [],
    denomRewardScheduleCounter: BigInt(0),
    denomRewardsDistributionQueue: undefined
  };
}
/**
 * GenesisState defines the rewards module's genesis state.
 * @name GenesisState
 * @package bze.rewards
 * @see proto type: bze.rewards.GenesisState
 */
export const GenesisState = {
  typeUrl: "/bze.rewards.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.stakingRewardList) && (!o.stakingRewardList.length || StakingReward.is(o.stakingRewardList[0])) && typeof o.stakingRewardsCounter === "bigint" && typeof o.tradingRewardsCounter === "bigint" && Array.isArray(o.activeTradingRewardList) && (!o.activeTradingRewardList.length || TradingReward.is(o.activeTradingRewardList[0])) && Array.isArray(o.pendingTradingRewardList) && (!o.pendingTradingRewardList.length || TradingReward.is(o.pendingTradingRewardList[0])) && Array.isArray(o.stakingRewardParticipantList) && (!o.stakingRewardParticipantList.length || StakingRewardParticipant.is(o.stakingRewardParticipantList[0])) && Array.isArray(o.pendingUnlockParticipantList) && (!o.pendingUnlockParticipantList.length || PendingUnlockParticipant.is(o.pendingUnlockParticipantList[0])) && Array.isArray(o.tradingRewardLeaderboardList) && (!o.tradingRewardLeaderboardList.length || TradingRewardLeaderboard.is(o.tradingRewardLeaderboardList[0])) && Array.isArray(o.tradingRewardCandidateList) && (!o.tradingRewardCandidateList.length || TradingRewardCandidate.is(o.tradingRewardCandidateList[0])) && Array.isArray(o.marketIdTradingRewardIdList) && (!o.marketIdTradingRewardIdList.length || MarketIdTradingRewardId.is(o.marketIdTradingRewardIdList[0])) && Array.isArray(o.pendingTradingRewardExpirationList) && (!o.pendingTradingRewardExpirationList.length || TradingRewardExpiration.is(o.pendingTradingRewardExpirationList[0])) && Array.isArray(o.activeTradingRewardExpirationList) && (!o.activeTradingRewardExpirationList.length || TradingRewardExpiration.is(o.activeTradingRewardExpirationList[0])) && Array.isArray(o.denomRewardList) && (!o.denomRewardList.length || DenomReward.is(o.denomRewardList[0])) && Array.isArray(o.denomRewardPrizeList) && (!o.denomRewardPrizeList.length || DenomRewardPrize.is(o.denomRewardPrizeList[0])) && Array.isArray(o.denomRewardParticipantList) && (!o.denomRewardParticipantList.length || DenomRewardParticipant.is(o.denomRewardParticipantList[0])) && Array.isArray(o.denomRewardParticipantIndexList) && (!o.denomRewardParticipantIndexList.length || DenomRewardParticipantIndex.is(o.denomRewardParticipantIndexList[0])) && Array.isArray(o.denomRewardScheduleList) && (!o.denomRewardScheduleList.length || DenomRewardSchedule.is(o.denomRewardScheduleList[0])) && typeof o.denomRewardScheduleCounter === "bigint");
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.staking_reward_list) && (!o.staking_reward_list.length || StakingReward.isSDK(o.staking_reward_list[0])) && typeof o.staking_rewards_counter === "bigint" && typeof o.trading_rewards_counter === "bigint" && Array.isArray(o.active_trading_reward_list) && (!o.active_trading_reward_list.length || TradingReward.isSDK(o.active_trading_reward_list[0])) && Array.isArray(o.pending_trading_reward_list) && (!o.pending_trading_reward_list.length || TradingReward.isSDK(o.pending_trading_reward_list[0])) && Array.isArray(o.staking_reward_participant_list) && (!o.staking_reward_participant_list.length || StakingRewardParticipant.isSDK(o.staking_reward_participant_list[0])) && Array.isArray(o.pending_unlock_participant_list) && (!o.pending_unlock_participant_list.length || PendingUnlockParticipant.isSDK(o.pending_unlock_participant_list[0])) && Array.isArray(o.trading_reward_leaderboard_list) && (!o.trading_reward_leaderboard_list.length || TradingRewardLeaderboard.isSDK(o.trading_reward_leaderboard_list[0])) && Array.isArray(o.trading_reward_candidate_list) && (!o.trading_reward_candidate_list.length || TradingRewardCandidate.isSDK(o.trading_reward_candidate_list[0])) && Array.isArray(o.market_id_trading_reward_id_list) && (!o.market_id_trading_reward_id_list.length || MarketIdTradingRewardId.isSDK(o.market_id_trading_reward_id_list[0])) && Array.isArray(o.pending_trading_reward_expiration_list) && (!o.pending_trading_reward_expiration_list.length || TradingRewardExpiration.isSDK(o.pending_trading_reward_expiration_list[0])) && Array.isArray(o.active_trading_reward_expiration_list) && (!o.active_trading_reward_expiration_list.length || TradingRewardExpiration.isSDK(o.active_trading_reward_expiration_list[0])) && Array.isArray(o.denom_reward_list) && (!o.denom_reward_list.length || DenomReward.isSDK(o.denom_reward_list[0])) && Array.isArray(o.denom_reward_prize_list) && (!o.denom_reward_prize_list.length || DenomRewardPrize.isSDK(o.denom_reward_prize_list[0])) && Array.isArray(o.denom_reward_participant_list) && (!o.denom_reward_participant_list.length || DenomRewardParticipant.isSDK(o.denom_reward_participant_list[0])) && Array.isArray(o.denom_reward_participant_index_list) && (!o.denom_reward_participant_index_list.length || DenomRewardParticipantIndex.isSDK(o.denom_reward_participant_index_list[0])) && Array.isArray(o.denom_reward_schedule_list) && (!o.denom_reward_schedule_list.length || DenomRewardSchedule.isSDK(o.denom_reward_schedule_list[0])) && typeof o.denom_reward_schedule_counter === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.staking_reward_list) && (!o.staking_reward_list.length || StakingReward.isAmino(o.staking_reward_list[0])) && typeof o.staking_rewards_counter === "bigint" && typeof o.trading_rewards_counter === "bigint" && Array.isArray(o.active_trading_reward_list) && (!o.active_trading_reward_list.length || TradingReward.isAmino(o.active_trading_reward_list[0])) && Array.isArray(o.pending_trading_reward_list) && (!o.pending_trading_reward_list.length || TradingReward.isAmino(o.pending_trading_reward_list[0])) && Array.isArray(o.staking_reward_participant_list) && (!o.staking_reward_participant_list.length || StakingRewardParticipant.isAmino(o.staking_reward_participant_list[0])) && Array.isArray(o.pending_unlock_participant_list) && (!o.pending_unlock_participant_list.length || PendingUnlockParticipant.isAmino(o.pending_unlock_participant_list[0])) && Array.isArray(o.trading_reward_leaderboard_list) && (!o.trading_reward_leaderboard_list.length || TradingRewardLeaderboard.isAmino(o.trading_reward_leaderboard_list[0])) && Array.isArray(o.trading_reward_candidate_list) && (!o.trading_reward_candidate_list.length || TradingRewardCandidate.isAmino(o.trading_reward_candidate_list[0])) && Array.isArray(o.market_id_trading_reward_id_list) && (!o.market_id_trading_reward_id_list.length || MarketIdTradingRewardId.isAmino(o.market_id_trading_reward_id_list[0])) && Array.isArray(o.pending_trading_reward_expiration_list) && (!o.pending_trading_reward_expiration_list.length || TradingRewardExpiration.isAmino(o.pending_trading_reward_expiration_list[0])) && Array.isArray(o.active_trading_reward_expiration_list) && (!o.active_trading_reward_expiration_list.length || TradingRewardExpiration.isAmino(o.active_trading_reward_expiration_list[0])) && Array.isArray(o.denom_reward_list) && (!o.denom_reward_list.length || DenomReward.isAmino(o.denom_reward_list[0])) && Array.isArray(o.denom_reward_prize_list) && (!o.denom_reward_prize_list.length || DenomRewardPrize.isAmino(o.denom_reward_prize_list[0])) && Array.isArray(o.denom_reward_participant_list) && (!o.denom_reward_participant_list.length || DenomRewardParticipant.isAmino(o.denom_reward_participant_list[0])) && Array.isArray(o.denom_reward_participant_index_list) && (!o.denom_reward_participant_index_list.length || DenomRewardParticipantIndex.isAmino(o.denom_reward_participant_index_list[0])) && Array.isArray(o.denom_reward_schedule_list) && (!o.denom_reward_schedule_list.length || DenomRewardSchedule.isAmino(o.denom_reward_schedule_list[0])) && typeof o.denom_reward_schedule_counter === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakingRewardList) {
      StakingReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.stakingRewardsCounter !== BigInt(0)) {
      writer.uint32(24).uint64(message.stakingRewardsCounter);
    }
    if (message.tradingRewardsCounter !== BigInt(0)) {
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
    if (message.unlockParticipantsQueue !== undefined) {
      UnlockParticipantsQueue.encode(message.unlockParticipantsQueue, writer.uint32(114).fork()).ldelim();
    }
    if (message.stakingRewardsDistributionQueue !== undefined) {
      StakingRewardsDistributionQueue.encode(message.stakingRewardsDistributionQueue, writer.uint32(122).fork()).ldelim();
    }
    if (message.tradingRewardExpirationQueue !== undefined) {
      TradingRewardExpirationQueue.encode(message.tradingRewardExpirationQueue, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.denomRewardList) {
      DenomReward.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.denomRewardPrizeList) {
      DenomRewardPrize.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.denomRewardParticipantList) {
      DenomRewardParticipant.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.denomRewardParticipantIndexList) {
      DenomRewardParticipantIndex.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.denomRewardScheduleList) {
      DenomRewardSchedule.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.denomRewardScheduleCounter !== BigInt(0)) {
      writer.uint32(176).uint64(message.denomRewardScheduleCounter);
    }
    if (message.denomRewardsDistributionQueue !== undefined) {
      DenomRewardsDistributionQueue.encode(message.denomRewardsDistributionQueue, writer.uint32(186).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.stakingRewardsCounter = reader.uint64();
          break;
        case 4:
          message.tradingRewardsCounter = reader.uint64();
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
        case 14:
          message.unlockParticipantsQueue = UnlockParticipantsQueue.decode(reader, reader.uint32());
          break;
        case 15:
          message.stakingRewardsDistributionQueue = StakingRewardsDistributionQueue.decode(reader, reader.uint32());
          break;
        case 16:
          message.tradingRewardExpirationQueue = TradingRewardExpirationQueue.decode(reader, reader.uint32());
          break;
        case 17:
          message.denomRewardList.push(DenomReward.decode(reader, reader.uint32()));
          break;
        case 18:
          message.denomRewardPrizeList.push(DenomRewardPrize.decode(reader, reader.uint32()));
          break;
        case 19:
          message.denomRewardParticipantList.push(DenomRewardParticipant.decode(reader, reader.uint32()));
          break;
        case 20:
          message.denomRewardParticipantIndexList.push(DenomRewardParticipantIndex.decode(reader, reader.uint32()));
          break;
        case 21:
          message.denomRewardScheduleList.push(DenomRewardSchedule.decode(reader, reader.uint32()));
          break;
        case 22:
          message.denomRewardScheduleCounter = reader.uint64();
          break;
        case 23:
          message.denomRewardsDistributionQueue = DenomRewardsDistributionQueue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakingRewardList = object.stakingRewardList?.map(e => StakingReward.fromPartial(e)) || [];
    message.stakingRewardsCounter = object.stakingRewardsCounter !== undefined && object.stakingRewardsCounter !== null ? BigInt(object.stakingRewardsCounter.toString()) : BigInt(0);
    message.tradingRewardsCounter = object.tradingRewardsCounter !== undefined && object.tradingRewardsCounter !== null ? BigInt(object.tradingRewardsCounter.toString()) : BigInt(0);
    message.activeTradingRewardList = object.activeTradingRewardList?.map(e => TradingReward.fromPartial(e)) || [];
    message.pendingTradingRewardList = object.pendingTradingRewardList?.map(e => TradingReward.fromPartial(e)) || [];
    message.stakingRewardParticipantList = object.stakingRewardParticipantList?.map(e => StakingRewardParticipant.fromPartial(e)) || [];
    message.pendingUnlockParticipantList = object.pendingUnlockParticipantList?.map(e => PendingUnlockParticipant.fromPartial(e)) || [];
    message.tradingRewardLeaderboardList = object.tradingRewardLeaderboardList?.map(e => TradingRewardLeaderboard.fromPartial(e)) || [];
    message.tradingRewardCandidateList = object.tradingRewardCandidateList?.map(e => TradingRewardCandidate.fromPartial(e)) || [];
    message.marketIdTradingRewardIdList = object.marketIdTradingRewardIdList?.map(e => MarketIdTradingRewardId.fromPartial(e)) || [];
    message.pendingTradingRewardExpirationList = object.pendingTradingRewardExpirationList?.map(e => TradingRewardExpiration.fromPartial(e)) || [];
    message.activeTradingRewardExpirationList = object.activeTradingRewardExpirationList?.map(e => TradingRewardExpiration.fromPartial(e)) || [];
    message.unlockParticipantsQueue = object.unlockParticipantsQueue !== undefined && object.unlockParticipantsQueue !== null ? UnlockParticipantsQueue.fromPartial(object.unlockParticipantsQueue) : undefined;
    message.stakingRewardsDistributionQueue = object.stakingRewardsDistributionQueue !== undefined && object.stakingRewardsDistributionQueue !== null ? StakingRewardsDistributionQueue.fromPartial(object.stakingRewardsDistributionQueue) : undefined;
    message.tradingRewardExpirationQueue = object.tradingRewardExpirationQueue !== undefined && object.tradingRewardExpirationQueue !== null ? TradingRewardExpirationQueue.fromPartial(object.tradingRewardExpirationQueue) : undefined;
    message.denomRewardList = object.denomRewardList?.map(e => DenomReward.fromPartial(e)) || [];
    message.denomRewardPrizeList = object.denomRewardPrizeList?.map(e => DenomRewardPrize.fromPartial(e)) || [];
    message.denomRewardParticipantList = object.denomRewardParticipantList?.map(e => DenomRewardParticipant.fromPartial(e)) || [];
    message.denomRewardParticipantIndexList = object.denomRewardParticipantIndexList?.map(e => DenomRewardParticipantIndex.fromPartial(e)) || [];
    message.denomRewardScheduleList = object.denomRewardScheduleList?.map(e => DenomRewardSchedule.fromPartial(e)) || [];
    message.denomRewardScheduleCounter = object.denomRewardScheduleCounter !== undefined && object.denomRewardScheduleCounter !== null ? BigInt(object.denomRewardScheduleCounter.toString()) : BigInt(0);
    message.denomRewardsDistributionQueue = object.denomRewardsDistributionQueue !== undefined && object.denomRewardsDistributionQueue !== null ? DenomRewardsDistributionQueue.fromPartial(object.denomRewardsDistributionQueue) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.stakingRewardList = object.staking_reward_list?.map(e => StakingReward.fromAmino(e)) || [];
    if (object.staking_rewards_counter !== undefined && object.staking_rewards_counter !== null) {
      message.stakingRewardsCounter = BigInt(object.staking_rewards_counter);
    }
    if (object.trading_rewards_counter !== undefined && object.trading_rewards_counter !== null) {
      message.tradingRewardsCounter = BigInt(object.trading_rewards_counter);
    }
    message.activeTradingRewardList = object.active_trading_reward_list?.map(e => TradingReward.fromAmino(e)) || [];
    message.pendingTradingRewardList = object.pending_trading_reward_list?.map(e => TradingReward.fromAmino(e)) || [];
    message.stakingRewardParticipantList = object.staking_reward_participant_list?.map(e => StakingRewardParticipant.fromAmino(e)) || [];
    message.pendingUnlockParticipantList = object.pending_unlock_participant_list?.map(e => PendingUnlockParticipant.fromAmino(e)) || [];
    message.tradingRewardLeaderboardList = object.trading_reward_leaderboard_list?.map(e => TradingRewardLeaderboard.fromAmino(e)) || [];
    message.tradingRewardCandidateList = object.trading_reward_candidate_list?.map(e => TradingRewardCandidate.fromAmino(e)) || [];
    message.marketIdTradingRewardIdList = object.market_id_trading_reward_id_list?.map(e => MarketIdTradingRewardId.fromAmino(e)) || [];
    message.pendingTradingRewardExpirationList = object.pending_trading_reward_expiration_list?.map(e => TradingRewardExpiration.fromAmino(e)) || [];
    message.activeTradingRewardExpirationList = object.active_trading_reward_expiration_list?.map(e => TradingRewardExpiration.fromAmino(e)) || [];
    if (object.unlock_participants_queue !== undefined && object.unlock_participants_queue !== null) {
      message.unlockParticipantsQueue = UnlockParticipantsQueue.fromAmino(object.unlock_participants_queue);
    }
    if (object.staking_rewards_distribution_queue !== undefined && object.staking_rewards_distribution_queue !== null) {
      message.stakingRewardsDistributionQueue = StakingRewardsDistributionQueue.fromAmino(object.staking_rewards_distribution_queue);
    }
    if (object.trading_reward_expiration_queue !== undefined && object.trading_reward_expiration_queue !== null) {
      message.tradingRewardExpirationQueue = TradingRewardExpirationQueue.fromAmino(object.trading_reward_expiration_queue);
    }
    message.denomRewardList = object.denom_reward_list?.map(e => DenomReward.fromAmino(e)) || [];
    message.denomRewardPrizeList = object.denom_reward_prize_list?.map(e => DenomRewardPrize.fromAmino(e)) || [];
    message.denomRewardParticipantList = object.denom_reward_participant_list?.map(e => DenomRewardParticipant.fromAmino(e)) || [];
    message.denomRewardParticipantIndexList = object.denom_reward_participant_index_list?.map(e => DenomRewardParticipantIndex.fromAmino(e)) || [];
    message.denomRewardScheduleList = object.denom_reward_schedule_list?.map(e => DenomRewardSchedule.fromAmino(e)) || [];
    if (object.denom_reward_schedule_counter !== undefined && object.denom_reward_schedule_counter !== null) {
      message.denomRewardScheduleCounter = BigInt(object.denom_reward_schedule_counter);
    }
    if (object.denom_rewards_distribution_queue !== undefined && object.denom_rewards_distribution_queue !== null) {
      message.denomRewardsDistributionQueue = DenomRewardsDistributionQueue.fromAmino(object.denom_rewards_distribution_queue);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.stakingRewardList) {
      obj.staking_reward_list = message.stakingRewardList.map(e => e ? StakingReward.toAmino(e) : undefined);
    } else {
      obj.staking_reward_list = message.stakingRewardList;
    }
    obj.staking_rewards_counter = message.stakingRewardsCounter !== BigInt(0) ? message.stakingRewardsCounter?.toString() : undefined;
    obj.trading_rewards_counter = message.tradingRewardsCounter !== BigInt(0) ? message.tradingRewardsCounter?.toString() : undefined;
    if (message.activeTradingRewardList) {
      obj.active_trading_reward_list = message.activeTradingRewardList.map(e => e ? TradingReward.toAmino(e) : undefined);
    } else {
      obj.active_trading_reward_list = message.activeTradingRewardList;
    }
    if (message.pendingTradingRewardList) {
      obj.pending_trading_reward_list = message.pendingTradingRewardList.map(e => e ? TradingReward.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_list = message.pendingTradingRewardList;
    }
    if (message.stakingRewardParticipantList) {
      obj.staking_reward_participant_list = message.stakingRewardParticipantList.map(e => e ? StakingRewardParticipant.toAmino(e) : undefined);
    } else {
      obj.staking_reward_participant_list = message.stakingRewardParticipantList;
    }
    if (message.pendingUnlockParticipantList) {
      obj.pending_unlock_participant_list = message.pendingUnlockParticipantList.map(e => e ? PendingUnlockParticipant.toAmino(e) : undefined);
    } else {
      obj.pending_unlock_participant_list = message.pendingUnlockParticipantList;
    }
    if (message.tradingRewardLeaderboardList) {
      obj.trading_reward_leaderboard_list = message.tradingRewardLeaderboardList.map(e => e ? TradingRewardLeaderboard.toAmino(e) : undefined);
    } else {
      obj.trading_reward_leaderboard_list = message.tradingRewardLeaderboardList;
    }
    if (message.tradingRewardCandidateList) {
      obj.trading_reward_candidate_list = message.tradingRewardCandidateList.map(e => e ? TradingRewardCandidate.toAmino(e) : undefined);
    } else {
      obj.trading_reward_candidate_list = message.tradingRewardCandidateList;
    }
    if (message.marketIdTradingRewardIdList) {
      obj.market_id_trading_reward_id_list = message.marketIdTradingRewardIdList.map(e => e ? MarketIdTradingRewardId.toAmino(e) : undefined);
    } else {
      obj.market_id_trading_reward_id_list = message.marketIdTradingRewardIdList;
    }
    if (message.pendingTradingRewardExpirationList) {
      obj.pending_trading_reward_expiration_list = message.pendingTradingRewardExpirationList.map(e => e ? TradingRewardExpiration.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_expiration_list = message.pendingTradingRewardExpirationList;
    }
    if (message.activeTradingRewardExpirationList) {
      obj.active_trading_reward_expiration_list = message.activeTradingRewardExpirationList.map(e => e ? TradingRewardExpiration.toAmino(e) : undefined);
    } else {
      obj.active_trading_reward_expiration_list = message.activeTradingRewardExpirationList;
    }
    obj.unlock_participants_queue = message.unlockParticipantsQueue ? UnlockParticipantsQueue.toAmino(message.unlockParticipantsQueue) : undefined;
    obj.staking_rewards_distribution_queue = message.stakingRewardsDistributionQueue ? StakingRewardsDistributionQueue.toAmino(message.stakingRewardsDistributionQueue) : undefined;
    obj.trading_reward_expiration_queue = message.tradingRewardExpirationQueue ? TradingRewardExpirationQueue.toAmino(message.tradingRewardExpirationQueue) : undefined;
    if (message.denomRewardList) {
      obj.denom_reward_list = message.denomRewardList.map(e => e ? DenomReward.toAmino(e) : undefined);
    } else {
      obj.denom_reward_list = message.denomRewardList;
    }
    if (message.denomRewardPrizeList) {
      obj.denom_reward_prize_list = message.denomRewardPrizeList.map(e => e ? DenomRewardPrize.toAmino(e) : undefined);
    } else {
      obj.denom_reward_prize_list = message.denomRewardPrizeList;
    }
    if (message.denomRewardParticipantList) {
      obj.denom_reward_participant_list = message.denomRewardParticipantList.map(e => e ? DenomRewardParticipant.toAmino(e) : undefined);
    } else {
      obj.denom_reward_participant_list = message.denomRewardParticipantList;
    }
    if (message.denomRewardParticipantIndexList) {
      obj.denom_reward_participant_index_list = message.denomRewardParticipantIndexList.map(e => e ? DenomRewardParticipantIndex.toAmino(e) : undefined);
    } else {
      obj.denom_reward_participant_index_list = message.denomRewardParticipantIndexList;
    }
    if (message.denomRewardScheduleList) {
      obj.denom_reward_schedule_list = message.denomRewardScheduleList.map(e => e ? DenomRewardSchedule.toAmino(e) : undefined);
    } else {
      obj.denom_reward_schedule_list = message.denomRewardScheduleList;
    }
    obj.denom_reward_schedule_counter = message.denomRewardScheduleCounter !== BigInt(0) ? message.denomRewardScheduleCounter?.toString() : undefined;
    obj.denom_rewards_distribution_queue = message.denomRewardsDistributionQueue ? DenomRewardsDistributionQueue.toAmino(message.denomRewardsDistributionQueue) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/bze.rewards.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    StakingReward.registerTypeUrl();
    TradingReward.registerTypeUrl();
    StakingRewardParticipant.registerTypeUrl();
    PendingUnlockParticipant.registerTypeUrl();
    TradingRewardLeaderboard.registerTypeUrl();
    TradingRewardCandidate.registerTypeUrl();
    MarketIdTradingRewardId.registerTypeUrl();
    TradingRewardExpiration.registerTypeUrl();
    UnlockParticipantsQueue.registerTypeUrl();
    StakingRewardsDistributionQueue.registerTypeUrl();
    TradingRewardExpirationQueue.registerTypeUrl();
    DenomReward.registerTypeUrl();
    DenomRewardPrize.registerTypeUrl();
    DenomRewardParticipant.registerTypeUrl();
    DenomRewardParticipantIndex.registerTypeUrl();
    DenomRewardSchedule.registerTypeUrl();
    DenomRewardsDistributionQueue.registerTypeUrl();
  }
};