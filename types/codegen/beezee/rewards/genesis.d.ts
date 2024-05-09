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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
