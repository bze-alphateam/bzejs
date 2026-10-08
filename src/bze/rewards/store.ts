//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@interchainjs/math";
/**
 * @name StakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingReward
 */
export interface StakingReward {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  stakingDenom: string;
  duration: number;
  payouts: number;
  minStake: bigint;
  lock: number;
  /**
   * T
   */
  stakedAmount: string;
  /**
   * S
   */
  distributedStake: string;
}
export interface StakingRewardProtoMsg {
  typeUrl: "/bze.rewards.StakingReward";
  value: Uint8Array;
}
/**
 * @name StakingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingReward
 */
export interface StakingRewardAmino {
  reward_id?: string;
  prize_amount?: string;
  prize_denom?: string;
  staking_denom?: string;
  duration?: number;
  payouts?: number;
  min_stake?: string;
  lock?: number;
  /**
   * T
   */
  staked_amount?: string;
  /**
   * S
   */
  distributed_stake?: string;
}
export interface StakingRewardAminoMsg {
  type: "/bze.rewards.StakingReward";
  value: StakingRewardAmino;
}
/**
 * @name StakingRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingReward
 */
export interface StakingRewardSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  staking_denom: string;
  duration: number;
  payouts: number;
  min_stake: bigint;
  lock: number;
  staked_amount: string;
  distributed_stake: string;
}
/**
 * @name StakingRewardParticipant
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardParticipant
 */
export interface StakingRewardParticipant {
  address: string;
  rewardId: string;
  /**
   * stake[address]
   */
  amount: string;
  /**
   * S0[address]
   */
  joinedAt: string;
}
export interface StakingRewardParticipantProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardParticipant";
  value: Uint8Array;
}
/**
 * @name StakingRewardParticipantAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardParticipant
 */
export interface StakingRewardParticipantAmino {
  address?: string;
  reward_id?: string;
  /**
   * stake[address]
   */
  amount?: string;
  /**
   * S0[address]
   */
  joined_at?: string;
}
export interface StakingRewardParticipantAminoMsg {
  type: "/bze.rewards.StakingRewardParticipant";
  value: StakingRewardParticipantAmino;
}
/**
 * @name StakingRewardParticipantSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardParticipant
 */
export interface StakingRewardParticipantSDKType {
  address: string;
  reward_id: string;
  amount: string;
  joined_at: string;
}
/**
 * @name PendingUnlockParticipant
 * @package bze.rewards
 * @see proto type: bze.rewards.PendingUnlockParticipant
 */
export interface PendingUnlockParticipant {
  index: string;
  address: string;
  amount: string;
  denom: string;
}
export interface PendingUnlockParticipantProtoMsg {
  typeUrl: "/bze.rewards.PendingUnlockParticipant";
  value: Uint8Array;
}
/**
 * @name PendingUnlockParticipantAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.PendingUnlockParticipant
 */
export interface PendingUnlockParticipantAmino {
  index?: string;
  address?: string;
  amount?: string;
  denom?: string;
}
export interface PendingUnlockParticipantAminoMsg {
  type: "/bze.rewards.PendingUnlockParticipant";
  value: PendingUnlockParticipantAmino;
}
/**
 * @name PendingUnlockParticipantSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.PendingUnlockParticipant
 */
export interface PendingUnlockParticipantSDKType {
  index: string;
  address: string;
  amount: string;
  denom: string;
}
/**
 * @name UnlockParticipantsQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.UnlockParticipantsQueue
 */
export interface UnlockParticipantsQueue {
  unlockEpochs: bigint[];
}
export interface UnlockParticipantsQueueProtoMsg {
  typeUrl: "/bze.rewards.UnlockParticipantsQueue";
  value: Uint8Array;
}
/**
 * @name UnlockParticipantsQueueAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.UnlockParticipantsQueue
 */
export interface UnlockParticipantsQueueAmino {
  unlockEpochs?: string[];
}
export interface UnlockParticipantsQueueAminoMsg {
  type: "/bze.rewards.UnlockParticipantsQueue";
  value: UnlockParticipantsQueueAmino;
}
/**
 * @name UnlockParticipantsQueueSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.UnlockParticipantsQueue
 */
export interface UnlockParticipantsQueueSDKType {
  unlockEpochs: bigint[];
}
/**
 * @name TradingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingReward
 */
export interface TradingReward {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  duration: number;
  marketId: string;
  slots: number;
  expireAt: number;
}
export interface TradingRewardProtoMsg {
  typeUrl: "/bze.rewards.TradingReward";
  value: Uint8Array;
}
/**
 * @name TradingRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingReward
 */
export interface TradingRewardAmino {
  reward_id?: string;
  prize_amount?: string;
  prize_denom?: string;
  duration?: number;
  market_id?: string;
  slots?: number;
  expire_at?: number;
}
export interface TradingRewardAminoMsg {
  type: "/bze.rewards.TradingReward";
  value: TradingRewardAmino;
}
/**
 * @name TradingRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingReward
 */
export interface TradingRewardSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  duration: number;
  market_id: string;
  slots: number;
  expire_at: number;
}
/**
 * @name TradingRewardExpiration
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpiration
 */
export interface TradingRewardExpiration {
  rewardId: string;
  expireAt: number;
}
export interface TradingRewardExpirationProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardExpiration";
  value: Uint8Array;
}
/**
 * @name TradingRewardExpirationAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpiration
 */
export interface TradingRewardExpirationAmino {
  reward_id?: string;
  expire_at?: number;
}
export interface TradingRewardExpirationAminoMsg {
  type: "/bze.rewards.TradingRewardExpiration";
  value: TradingRewardExpirationAmino;
}
/**
 * @name TradingRewardExpirationSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpiration
 */
export interface TradingRewardExpirationSDKType {
  reward_id: string;
  expire_at: number;
}
/**
 * @name TradingRewardLeaderboard
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboard
 */
export interface TradingRewardLeaderboard {
  rewardId: string;
  list: TradingRewardLeaderboardEntry[];
}
export interface TradingRewardLeaderboardProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardLeaderboard";
  value: Uint8Array;
}
/**
 * @name TradingRewardLeaderboardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboard
 */
export interface TradingRewardLeaderboardAmino {
  reward_id?: string;
  list?: TradingRewardLeaderboardEntryAmino[];
}
export interface TradingRewardLeaderboardAminoMsg {
  type: "/bze.rewards.TradingRewardLeaderboard";
  value: TradingRewardLeaderboardAmino;
}
/**
 * @name TradingRewardLeaderboardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboard
 */
export interface TradingRewardLeaderboardSDKType {
  reward_id: string;
  list: TradingRewardLeaderboardEntrySDKType[];
}
/**
 * @name TradingRewardLeaderboardEntry
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboardEntry
 */
export interface TradingRewardLeaderboardEntry {
  amount: string;
  address: string;
  createdAt: bigint;
}
export interface TradingRewardLeaderboardEntryProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardLeaderboardEntry";
  value: Uint8Array;
}
/**
 * @name TradingRewardLeaderboardEntryAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboardEntry
 */
export interface TradingRewardLeaderboardEntryAmino {
  amount?: string;
  address?: string;
  created_at?: string;
}
export interface TradingRewardLeaderboardEntryAminoMsg {
  type: "/bze.rewards.TradingRewardLeaderboardEntry";
  value: TradingRewardLeaderboardEntryAmino;
}
/**
 * @name TradingRewardLeaderboardEntrySDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboardEntry
 */
export interface TradingRewardLeaderboardEntrySDKType {
  amount: string;
  address: string;
  created_at: bigint;
}
/**
 * @name TradingRewardCandidate
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCandidate
 */
export interface TradingRewardCandidate {
  rewardId: string;
  amount: string;
  address: string;
}
export interface TradingRewardCandidateProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardCandidate";
  value: Uint8Array;
}
/**
 * @name TradingRewardCandidateAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCandidate
 */
export interface TradingRewardCandidateAmino {
  reward_id?: string;
  amount?: string;
  address?: string;
}
export interface TradingRewardCandidateAminoMsg {
  type: "/bze.rewards.TradingRewardCandidate";
  value: TradingRewardCandidateAmino;
}
/**
 * @name TradingRewardCandidateSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCandidate
 */
export interface TradingRewardCandidateSDKType {
  reward_id: string;
  amount: string;
  address: string;
}
/**
 * @name MarketIdTradingRewardId
 * @package bze.rewards
 * @see proto type: bze.rewards.MarketIdTradingRewardId
 */
export interface MarketIdTradingRewardId {
  rewardId: string;
  marketId: string;
}
export interface MarketIdTradingRewardIdProtoMsg {
  typeUrl: "/bze.rewards.MarketIdTradingRewardId";
  value: Uint8Array;
}
/**
 * @name MarketIdTradingRewardIdAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.MarketIdTradingRewardId
 */
export interface MarketIdTradingRewardIdAmino {
  reward_id?: string;
  market_id?: string;
}
export interface MarketIdTradingRewardIdAminoMsg {
  type: "/bze.rewards.MarketIdTradingRewardId";
  value: MarketIdTradingRewardIdAmino;
}
/**
 * @name MarketIdTradingRewardIdSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.MarketIdTradingRewardId
 */
export interface MarketIdTradingRewardIdSDKType {
  reward_id: string;
  market_id: string;
}
/**
 * @name StakingRewardsDistributionQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardsDistributionQueue
 */
export interface StakingRewardsDistributionQueue {
  pending: boolean;
  cursor: string;
}
export interface StakingRewardsDistributionQueueProtoMsg {
  typeUrl: "/bze.rewards.StakingRewardsDistributionQueue";
  value: Uint8Array;
}
/**
 * @name StakingRewardsDistributionQueueAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardsDistributionQueue
 */
export interface StakingRewardsDistributionQueueAmino {
  pending?: boolean;
  cursor?: string;
}
export interface StakingRewardsDistributionQueueAminoMsg {
  type: "/bze.rewards.StakingRewardsDistributionQueue";
  value: StakingRewardsDistributionQueueAmino;
}
/**
 * @name StakingRewardsDistributionQueueSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardsDistributionQueue
 */
export interface StakingRewardsDistributionQueueSDKType {
  pending: boolean;
  cursor: string;
}
/**
 * @name TradingRewardExpirationQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpirationQueue
 */
export interface TradingRewardExpirationQueue {
  removalEpochs: number[];
}
export interface TradingRewardExpirationQueueProtoMsg {
  typeUrl: "/bze.rewards.TradingRewardExpirationQueue";
  value: Uint8Array;
}
/**
 * @name TradingRewardExpirationQueueAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpirationQueue
 */
export interface TradingRewardExpirationQueueAmino {
  removal_epochs?: number[];
}
export interface TradingRewardExpirationQueueAminoMsg {
  type: "/bze.rewards.TradingRewardExpirationQueue";
  value: TradingRewardExpirationQueueAmino;
}
/**
 * @name TradingRewardExpirationQueueSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpirationQueue
 */
export interface TradingRewardExpirationQueueSDKType {
  removal_epochs: number[];
}
/**
 * DenomReward is a generic per-denom staking pool. One DenomReward exists per
 * staking denom (unique chain-wide). lock and min_stake are snapshotted from the
 * module params at creation time and never change afterwards.
 * @name DenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomReward
 */
export interface DenomReward {
  /**
   * identity - one DenomReward per denom
   */
  stakingDenom: string;
  /**
   * days; snapshot from params at creation
   */
  lock: number;
  /**
   * snapshot from params at creation
   */
  minStake: bigint;
  /**
   * total staked T
   */
  stakedAmount: string;
}
export interface DenomRewardProtoMsg {
  typeUrl: "/bze.rewards.DenomReward";
  value: Uint8Array;
}
/**
 * DenomReward is a generic per-denom staking pool. One DenomReward exists per
 * staking denom (unique chain-wide). lock and min_stake are snapshotted from the
 * module params at creation time and never change afterwards.
 * @name DenomRewardAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomReward
 */
export interface DenomRewardAmino {
  /**
   * identity - one DenomReward per denom
   */
  staking_denom?: string;
  /**
   * days; snapshot from params at creation
   */
  lock?: number;
  /**
   * snapshot from params at creation
   */
  min_stake?: string;
  /**
   * total staked T
   */
  staked_amount?: string;
}
export interface DenomRewardAminoMsg {
  type: "/bze.rewards.DenomReward";
  value: DenomRewardAmino;
}
/**
 * DenomReward is a generic per-denom staking pool. One DenomReward exists per
 * staking denom (unique chain-wide). lock and min_stake are snapshotted from the
 * module params at creation time and never change afterwards.
 * @name DenomRewardSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomReward
 */
export interface DenomRewardSDKType {
  staking_denom: string;
  lock: number;
  min_stake: bigint;
  staked_amount: string;
}
/**
 * DenomRewardPrize is the accumulator for a (staking_denom, prize_denom) pair.
 * @name DenomRewardPrize
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrize
 */
export interface DenomRewardPrize {
  stakingDenom: string;
  prizeDenom: string;
  /**
   * S, starts at 0
   */
  distributedStake: string;
  /**
   * day-epoch count of last distribution
   */
  lastDistributionEpoch: bigint;
}
export interface DenomRewardPrizeProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardPrize";
  value: Uint8Array;
}
/**
 * DenomRewardPrize is the accumulator for a (staking_denom, prize_denom) pair.
 * @name DenomRewardPrizeAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrize
 */
export interface DenomRewardPrizeAmino {
  staking_denom?: string;
  prize_denom?: string;
  /**
   * S, starts at 0
   */
  distributed_stake?: string;
  /**
   * day-epoch count of last distribution
   */
  last_distribution_epoch?: string;
}
export interface DenomRewardPrizeAminoMsg {
  type: "/bze.rewards.DenomRewardPrize";
  value: DenomRewardPrizeAmino;
}
/**
 * DenomRewardPrize is the accumulator for a (staking_denom, prize_denom) pair.
 * @name DenomRewardPrizeSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrize
 */
export interface DenomRewardPrizeSDKType {
  staking_denom: string;
  prize_denom: string;
  distributed_stake: string;
  last_distribution_epoch: bigint;
}
/**
 * DenomRewardParticipant is a staker's position in a DenomReward.
 * @name DenomRewardParticipant
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipant
 */
export interface DenomRewardParticipant {
  address: string;
  stakingDenom: string;
  /**
   * stake[address]
   */
  amount: string;
}
export interface DenomRewardParticipantProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardParticipant";
  value: Uint8Array;
}
/**
 * DenomRewardParticipant is a staker's position in a DenomReward.
 * @name DenomRewardParticipantAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipant
 */
export interface DenomRewardParticipantAmino {
  address?: string;
  staking_denom?: string;
  /**
   * stake[address]
   */
  amount?: string;
}
export interface DenomRewardParticipantAminoMsg {
  type: "/bze.rewards.DenomRewardParticipant";
  value: DenomRewardParticipantAmino;
}
/**
 * DenomRewardParticipant is a staker's position in a DenomReward.
 * @name DenomRewardParticipantSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipant
 */
export interface DenomRewardParticipantSDKType {
  address: string;
  staking_denom: string;
  amount: string;
}
/**
 * DenomRewardParticipantIndex records the accumulator value S seen at the
 * participant's last settlement for a given prize denom.
 * @name DenomRewardParticipantIndex
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipantIndex
 */
export interface DenomRewardParticipantIndex {
  address: string;
  stakingDenom: string;
  prizeDenom: string;
  /**
   * S at last settlement
   */
  index: string;
}
export interface DenomRewardParticipantIndexProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardParticipantIndex";
  value: Uint8Array;
}
/**
 * DenomRewardParticipantIndex records the accumulator value S seen at the
 * participant's last settlement for a given prize denom.
 * @name DenomRewardParticipantIndexAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipantIndex
 */
export interface DenomRewardParticipantIndexAmino {
  address?: string;
  staking_denom?: string;
  prize_denom?: string;
  /**
   * S at last settlement
   */
  index?: string;
}
export interface DenomRewardParticipantIndexAminoMsg {
  type: "/bze.rewards.DenomRewardParticipantIndex";
  value: DenomRewardParticipantIndexAmino;
}
/**
 * DenomRewardParticipantIndex records the accumulator value S seen at the
 * participant's last settlement for a given prize denom.
 * @name DenomRewardParticipantIndexSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipantIndex
 */
export interface DenomRewardParticipantIndexSDKType {
  address: string;
  staking_denom: string;
  prize_denom: string;
  index: string;
}
/**
 * DenomRewardSchedule is an SR-style reward campaign attached to a DenomReward.
 * @name DenomRewardSchedule
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardSchedule
 */
export interface DenomRewardSchedule {
  /**
   * zero-filled global counter
   */
  scheduleId: string;
  stakingDenom: string;
  prizeDenom: string;
  dailyAmount: string;
  /**
   * days
   */
  duration: number;
  /**
   * days already distributed
   */
  payouts: number;
}
export interface DenomRewardScheduleProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardSchedule";
  value: Uint8Array;
}
/**
 * DenomRewardSchedule is an SR-style reward campaign attached to a DenomReward.
 * @name DenomRewardScheduleAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardSchedule
 */
export interface DenomRewardScheduleAmino {
  /**
   * zero-filled global counter
   */
  schedule_id?: string;
  staking_denom?: string;
  prize_denom?: string;
  daily_amount?: string;
  /**
   * days
   */
  duration?: number;
  /**
   * days already distributed
   */
  payouts?: number;
}
export interface DenomRewardScheduleAminoMsg {
  type: "/bze.rewards.DenomRewardSchedule";
  value: DenomRewardScheduleAmino;
}
/**
 * DenomRewardSchedule is an SR-style reward campaign attached to a DenomReward.
 * @name DenomRewardScheduleSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardSchedule
 */
export interface DenomRewardScheduleSDKType {
  schedule_id: string;
  staking_denom: string;
  prize_denom: string;
  daily_amount: string;
  duration: number;
  payouts: number;
}
/**
 * DenomRewardsDistributionQueue mirrors StakingRewardsDistributionQueue for the
 * daily distribution of denom reward schedules.
 * @name DenomRewardsDistributionQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardsDistributionQueue
 */
export interface DenomRewardsDistributionQueue {
  pending: boolean;
  /**
   * last processed schedule composite key
   */
  cursor: string;
}
export interface DenomRewardsDistributionQueueProtoMsg {
  typeUrl: "/bze.rewards.DenomRewardsDistributionQueue";
  value: Uint8Array;
}
/**
 * DenomRewardsDistributionQueue mirrors StakingRewardsDistributionQueue for the
 * daily distribution of denom reward schedules.
 * @name DenomRewardsDistributionQueueAmino
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardsDistributionQueue
 */
export interface DenomRewardsDistributionQueueAmino {
  pending?: boolean;
  /**
   * last processed schedule composite key
   */
  cursor?: string;
}
export interface DenomRewardsDistributionQueueAminoMsg {
  type: "/bze.rewards.DenomRewardsDistributionQueue";
  value: DenomRewardsDistributionQueueAmino;
}
/**
 * DenomRewardsDistributionQueue mirrors StakingRewardsDistributionQueue for the
 * daily distribution of denom reward schedules.
 * @name DenomRewardsDistributionQueueSDKType
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardsDistributionQueue
 */
export interface DenomRewardsDistributionQueueSDKType {
  pending: boolean;
  cursor: string;
}
function createBaseStakingReward(): StakingReward {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    stakingDenom: "",
    duration: 0,
    payouts: 0,
    minStake: BigInt(0),
    lock: 0,
    stakedAmount: "",
    distributedStake: ""
  };
}
/**
 * @name StakingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingReward
 */
export const StakingReward = {
  typeUrl: "/bze.rewards.StakingReward",
  is(o: any): o is StakingReward {
    return o && (o.$typeUrl === StakingReward.typeUrl || typeof o.rewardId === "string" && typeof o.prizeAmount === "string" && typeof o.prizeDenom === "string" && typeof o.stakingDenom === "string" && typeof o.duration === "number" && typeof o.payouts === "number" && typeof o.minStake === "bigint" && typeof o.lock === "number" && typeof o.stakedAmount === "string" && typeof o.distributedStake === "string");
  },
  isSDK(o: any): o is StakingRewardSDKType {
    return o && (o.$typeUrl === StakingReward.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.staking_denom === "string" && typeof o.duration === "number" && typeof o.payouts === "number" && typeof o.min_stake === "bigint" && typeof o.lock === "number" && typeof o.staked_amount === "string" && typeof o.distributed_stake === "string");
  },
  isAmino(o: any): o is StakingRewardAmino {
    return o && (o.$typeUrl === StakingReward.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.staking_denom === "string" && typeof o.duration === "number" && typeof o.payouts === "number" && typeof o.min_stake === "bigint" && typeof o.lock === "number" && typeof o.staked_amount === "string" && typeof o.distributed_stake === "string");
  },
  encode(message: StakingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.prizeAmount !== "") {
      writer.uint32(18).string(message.prizeAmount);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.stakingDenom !== "") {
      writer.uint32(34).string(message.stakingDenom);
    }
    if (message.duration !== 0) {
      writer.uint32(40).uint32(message.duration);
    }
    if (message.payouts !== 0) {
      writer.uint32(48).uint32(message.payouts);
    }
    if (message.minStake !== BigInt(0)) {
      writer.uint32(56).uint64(message.minStake);
    }
    if (message.lock !== 0) {
      writer.uint32(64).uint32(message.lock);
    }
    if (message.stakedAmount !== "") {
      writer.uint32(74).string(message.stakedAmount);
    }
    if (message.distributedStake !== "") {
      writer.uint32(82).string(message.distributedStake);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.prizeAmount = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.stakingDenom = reader.string();
          break;
        case 5:
          message.duration = reader.uint32();
          break;
        case 6:
          message.payouts = reader.uint32();
          break;
        case 7:
          message.minStake = reader.uint64();
          break;
        case 8:
          message.lock = reader.uint32();
          break;
        case 9:
          message.stakedAmount = reader.string();
          break;
        case 10:
          message.distributedStake = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingReward>): StakingReward {
    const message = createBaseStakingReward();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.duration = object.duration ?? 0;
    message.payouts = object.payouts ?? 0;
    message.minStake = object.minStake !== undefined && object.minStake !== null ? BigInt(object.minStake.toString()) : BigInt(0);
    message.lock = object.lock ?? 0;
    message.stakedAmount = object.stakedAmount ?? "";
    message.distributedStake = object.distributedStake ?? "";
    return message;
  },
  fromAmino(object: StakingRewardAmino): StakingReward {
    const message = createBaseStakingReward();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.prize_amount !== undefined && object.prize_amount !== null) {
      message.prizeAmount = object.prize_amount;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.staking_denom !== undefined && object.staking_denom !== null) {
      message.stakingDenom = object.staking_denom;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.payouts !== undefined && object.payouts !== null) {
      message.payouts = object.payouts;
    }
    if (object.min_stake !== undefined && object.min_stake !== null) {
      message.minStake = BigInt(object.min_stake);
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = object.lock;
    }
    if (object.staked_amount !== undefined && object.staked_amount !== null) {
      message.stakedAmount = object.staked_amount;
    }
    if (object.distributed_stake !== undefined && object.distributed_stake !== null) {
      message.distributedStake = object.distributed_stake;
    }
    return message;
  },
  toAmino(message: StakingReward): StakingRewardAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.payouts = message.payouts === 0 ? undefined : message.payouts;
    obj.min_stake = message.minStake !== BigInt(0) ? message.minStake?.toString() : undefined;
    obj.lock = message.lock === 0 ? undefined : message.lock;
    obj.staked_amount = message.stakedAmount === "" ? undefined : message.stakedAmount;
    obj.distributed_stake = message.distributedStake === "" ? undefined : message.distributedStake;
    return obj;
  },
  fromAminoMsg(object: StakingRewardAminoMsg): StakingReward {
    return StakingReward.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardProtoMsg): StakingReward {
    return StakingReward.decode(message.value);
  },
  toProto(message: StakingReward): Uint8Array {
    return StakingReward.encode(message).finish();
  },
  toProtoMsg(message: StakingReward): StakingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingReward",
      value: StakingReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardParticipant(): StakingRewardParticipant {
  return {
    address: "",
    rewardId: "",
    amount: "",
    joinedAt: ""
  };
}
/**
 * @name StakingRewardParticipant
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardParticipant
 */
export const StakingRewardParticipant = {
  typeUrl: "/bze.rewards.StakingRewardParticipant",
  is(o: any): o is StakingRewardParticipant {
    return o && (o.$typeUrl === StakingRewardParticipant.typeUrl || typeof o.address === "string" && typeof o.rewardId === "string" && typeof o.amount === "string" && typeof o.joinedAt === "string");
  },
  isSDK(o: any): o is StakingRewardParticipantSDKType {
    return o && (o.$typeUrl === StakingRewardParticipant.typeUrl || typeof o.address === "string" && typeof o.reward_id === "string" && typeof o.amount === "string" && typeof o.joined_at === "string");
  },
  isAmino(o: any): o is StakingRewardParticipantAmino {
    return o && (o.$typeUrl === StakingRewardParticipant.typeUrl || typeof o.address === "string" && typeof o.reward_id === "string" && typeof o.amount === "string" && typeof o.joined_at === "string");
  },
  encode(message: StakingRewardParticipant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.joinedAt !== "") {
      writer.uint32(34).string(message.joinedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardParticipant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.rewardId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.joinedAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRewardParticipant>): StakingRewardParticipant {
    const message = createBaseStakingRewardParticipant();
    message.address = object.address ?? "";
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    message.joinedAt = object.joinedAt ?? "";
    return message;
  },
  fromAmino(object: StakingRewardParticipantAmino): StakingRewardParticipant {
    const message = createBaseStakingRewardParticipant();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.joined_at !== undefined && object.joined_at !== null) {
      message.joinedAt = object.joined_at;
    }
    return message;
  },
  toAmino(message: StakingRewardParticipant): StakingRewardParticipantAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.joined_at = message.joinedAt === "" ? undefined : message.joinedAt;
    return obj;
  },
  fromAminoMsg(object: StakingRewardParticipantAminoMsg): StakingRewardParticipant {
    return StakingRewardParticipant.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardParticipantProtoMsg): StakingRewardParticipant {
    return StakingRewardParticipant.decode(message.value);
  },
  toProto(message: StakingRewardParticipant): Uint8Array {
    return StakingRewardParticipant.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardParticipant): StakingRewardParticipantProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardParticipant",
      value: StakingRewardParticipant.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePendingUnlockParticipant(): PendingUnlockParticipant {
  return {
    index: "",
    address: "",
    amount: "",
    denom: ""
  };
}
/**
 * @name PendingUnlockParticipant
 * @package bze.rewards
 * @see proto type: bze.rewards.PendingUnlockParticipant
 */
export const PendingUnlockParticipant = {
  typeUrl: "/bze.rewards.PendingUnlockParticipant",
  is(o: any): o is PendingUnlockParticipant {
    return o && (o.$typeUrl === PendingUnlockParticipant.typeUrl || typeof o.index === "string" && typeof o.address === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is PendingUnlockParticipantSDKType {
    return o && (o.$typeUrl === PendingUnlockParticipant.typeUrl || typeof o.index === "string" && typeof o.address === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is PendingUnlockParticipantAmino {
    return o && (o.$typeUrl === PendingUnlockParticipant.typeUrl || typeof o.index === "string" && typeof o.address === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: PendingUnlockParticipant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingUnlockParticipant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingUnlockParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingUnlockParticipant>): PendingUnlockParticipant {
    const message = createBasePendingUnlockParticipant();
    message.index = object.index ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: PendingUnlockParticipantAmino): PendingUnlockParticipant {
    const message = createBasePendingUnlockParticipant();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: PendingUnlockParticipant): PendingUnlockParticipantAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: PendingUnlockParticipantAminoMsg): PendingUnlockParticipant {
    return PendingUnlockParticipant.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingUnlockParticipantProtoMsg): PendingUnlockParticipant {
    return PendingUnlockParticipant.decode(message.value);
  },
  toProto(message: PendingUnlockParticipant): Uint8Array {
    return PendingUnlockParticipant.encode(message).finish();
  },
  toProtoMsg(message: PendingUnlockParticipant): PendingUnlockParticipantProtoMsg {
    return {
      typeUrl: "/bze.rewards.PendingUnlockParticipant",
      value: PendingUnlockParticipant.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseUnlockParticipantsQueue(): UnlockParticipantsQueue {
  return {
    unlockEpochs: []
  };
}
/**
 * @name UnlockParticipantsQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.UnlockParticipantsQueue
 */
export const UnlockParticipantsQueue = {
  typeUrl: "/bze.rewards.UnlockParticipantsQueue",
  is(o: any): o is UnlockParticipantsQueue {
    return o && (o.$typeUrl === UnlockParticipantsQueue.typeUrl || Array.isArray(o.unlockEpochs) && (!o.unlockEpochs.length || typeof o.unlockEpochs[0] === "bigint"));
  },
  isSDK(o: any): o is UnlockParticipantsQueueSDKType {
    return o && (o.$typeUrl === UnlockParticipantsQueue.typeUrl || Array.isArray(o.unlockEpochs) && (!o.unlockEpochs.length || typeof o.unlockEpochs[0] === "bigint"));
  },
  isAmino(o: any): o is UnlockParticipantsQueueAmino {
    return o && (o.$typeUrl === UnlockParticipantsQueue.typeUrl || Array.isArray(o.unlockEpochs) && (!o.unlockEpochs.length || typeof o.unlockEpochs[0] === "bigint"));
  },
  encode(message: UnlockParticipantsQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.unlockEpochs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnlockParticipantsQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockParticipantsQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unlockEpochs.push(reader.uint64());
            }
          } else {
            message.unlockEpochs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnlockParticipantsQueue>): UnlockParticipantsQueue {
    const message = createBaseUnlockParticipantsQueue();
    message.unlockEpochs = object.unlockEpochs?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: UnlockParticipantsQueueAmino): UnlockParticipantsQueue {
    const message = createBaseUnlockParticipantsQueue();
    message.unlockEpochs = object.unlockEpochs?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: UnlockParticipantsQueue): UnlockParticipantsQueueAmino {
    const obj: any = {};
    if (message.unlockEpochs) {
      obj.unlockEpochs = message.unlockEpochs.map(e => e.toString());
    } else {
      obj.unlockEpochs = message.unlockEpochs;
    }
    return obj;
  },
  fromAminoMsg(object: UnlockParticipantsQueueAminoMsg): UnlockParticipantsQueue {
    return UnlockParticipantsQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: UnlockParticipantsQueueProtoMsg): UnlockParticipantsQueue {
    return UnlockParticipantsQueue.decode(message.value);
  },
  toProto(message: UnlockParticipantsQueue): Uint8Array {
    return UnlockParticipantsQueue.encode(message).finish();
  },
  toProtoMsg(message: UnlockParticipantsQueue): UnlockParticipantsQueueProtoMsg {
    return {
      typeUrl: "/bze.rewards.UnlockParticipantsQueue",
      value: UnlockParticipantsQueue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingReward(): TradingReward {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    duration: 0,
    marketId: "",
    slots: 0,
    expireAt: 0
  };
}
/**
 * @name TradingReward
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingReward
 */
export const TradingReward = {
  typeUrl: "/bze.rewards.TradingReward",
  is(o: any): o is TradingReward {
    return o && (o.$typeUrl === TradingReward.typeUrl || typeof o.rewardId === "string" && typeof o.prizeAmount === "string" && typeof o.prizeDenom === "string" && typeof o.duration === "number" && typeof o.marketId === "string" && typeof o.slots === "number" && typeof o.expireAt === "number");
  },
  isSDK(o: any): o is TradingRewardSDKType {
    return o && (o.$typeUrl === TradingReward.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.duration === "number" && typeof o.market_id === "string" && typeof o.slots === "number" && typeof o.expire_at === "number");
  },
  isAmino(o: any): o is TradingRewardAmino {
    return o && (o.$typeUrl === TradingReward.typeUrl || typeof o.reward_id === "string" && typeof o.prize_amount === "string" && typeof o.prize_denom === "string" && typeof o.duration === "number" && typeof o.market_id === "string" && typeof o.slots === "number" && typeof o.expire_at === "number");
  },
  encode(message: TradingReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.prizeAmount !== "") {
      writer.uint32(18).string(message.prizeAmount);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint32(message.duration);
    }
    if (message.marketId !== "") {
      writer.uint32(42).string(message.marketId);
    }
    if (message.slots !== 0) {
      writer.uint32(48).uint32(message.slots);
    }
    if (message.expireAt !== 0) {
      writer.uint32(56).uint32(message.expireAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.prizeAmount = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.duration = reader.uint32();
          break;
        case 5:
          message.marketId = reader.string();
          break;
        case 6:
          message.slots = reader.uint32();
          break;
        case 7:
          message.expireAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingReward>): TradingReward {
    const message = createBaseTradingReward();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.duration = object.duration ?? 0;
    message.marketId = object.marketId ?? "";
    message.slots = object.slots ?? 0;
    message.expireAt = object.expireAt ?? 0;
    return message;
  },
  fromAmino(object: TradingRewardAmino): TradingReward {
    const message = createBaseTradingReward();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.prize_amount !== undefined && object.prize_amount !== null) {
      message.prizeAmount = object.prize_amount;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.slots !== undefined && object.slots !== null) {
      message.slots = object.slots;
    }
    if (object.expire_at !== undefined && object.expire_at !== null) {
      message.expireAt = object.expire_at;
    }
    return message;
  },
  toAmino(message: TradingReward): TradingRewardAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.prize_amount = message.prizeAmount === "" ? undefined : message.prizeAmount;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.slots = message.slots === 0 ? undefined : message.slots;
    obj.expire_at = message.expireAt === 0 ? undefined : message.expireAt;
    return obj;
  },
  fromAminoMsg(object: TradingRewardAminoMsg): TradingReward {
    return TradingReward.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardProtoMsg): TradingReward {
    return TradingReward.decode(message.value);
  },
  toProto(message: TradingReward): Uint8Array {
    return TradingReward.encode(message).finish();
  },
  toProtoMsg(message: TradingReward): TradingRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingReward",
      value: TradingReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardExpiration(): TradingRewardExpiration {
  return {
    rewardId: "",
    expireAt: 0
  };
}
/**
 * @name TradingRewardExpiration
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpiration
 */
export const TradingRewardExpiration = {
  typeUrl: "/bze.rewards.TradingRewardExpiration",
  is(o: any): o is TradingRewardExpiration {
    return o && (o.$typeUrl === TradingRewardExpiration.typeUrl || typeof o.rewardId === "string" && typeof o.expireAt === "number");
  },
  isSDK(o: any): o is TradingRewardExpirationSDKType {
    return o && (o.$typeUrl === TradingRewardExpiration.typeUrl || typeof o.reward_id === "string" && typeof o.expire_at === "number");
  },
  isAmino(o: any): o is TradingRewardExpirationAmino {
    return o && (o.$typeUrl === TradingRewardExpiration.typeUrl || typeof o.reward_id === "string" && typeof o.expire_at === "number");
  },
  encode(message: TradingRewardExpiration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.expireAt !== 0) {
      writer.uint32(16).uint32(message.expireAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardExpiration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.expireAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardExpiration>): TradingRewardExpiration {
    const message = createBaseTradingRewardExpiration();
    message.rewardId = object.rewardId ?? "";
    message.expireAt = object.expireAt ?? 0;
    return message;
  },
  fromAmino(object: TradingRewardExpirationAmino): TradingRewardExpiration {
    const message = createBaseTradingRewardExpiration();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.expire_at !== undefined && object.expire_at !== null) {
      message.expireAt = object.expire_at;
    }
    return message;
  },
  toAmino(message: TradingRewardExpiration): TradingRewardExpirationAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.expire_at = message.expireAt === 0 ? undefined : message.expireAt;
    return obj;
  },
  fromAminoMsg(object: TradingRewardExpirationAminoMsg): TradingRewardExpiration {
    return TradingRewardExpiration.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardExpirationProtoMsg): TradingRewardExpiration {
    return TradingRewardExpiration.decode(message.value);
  },
  toProto(message: TradingRewardExpiration): Uint8Array {
    return TradingRewardExpiration.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardExpiration): TradingRewardExpirationProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardExpiration",
      value: TradingRewardExpiration.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardLeaderboard(): TradingRewardLeaderboard {
  return {
    rewardId: "",
    list: []
  };
}
/**
 * @name TradingRewardLeaderboard
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboard
 */
export const TradingRewardLeaderboard = {
  typeUrl: "/bze.rewards.TradingRewardLeaderboard",
  is(o: any): o is TradingRewardLeaderboard {
    return o && (o.$typeUrl === TradingRewardLeaderboard.typeUrl || typeof o.rewardId === "string" && Array.isArray(o.list) && (!o.list.length || TradingRewardLeaderboardEntry.is(o.list[0])));
  },
  isSDK(o: any): o is TradingRewardLeaderboardSDKType {
    return o && (o.$typeUrl === TradingRewardLeaderboard.typeUrl || typeof o.reward_id === "string" && Array.isArray(o.list) && (!o.list.length || TradingRewardLeaderboardEntry.isSDK(o.list[0])));
  },
  isAmino(o: any): o is TradingRewardLeaderboardAmino {
    return o && (o.$typeUrl === TradingRewardLeaderboard.typeUrl || typeof o.reward_id === "string" && Array.isArray(o.list) && (!o.list.length || TradingRewardLeaderboardEntry.isAmino(o.list[0])));
  },
  encode(message: TradingRewardLeaderboard, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    for (const v of message.list) {
      TradingRewardLeaderboardEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardLeaderboard {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardLeaderboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.list.push(TradingRewardLeaderboardEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardLeaderboard>): TradingRewardLeaderboard {
    const message = createBaseTradingRewardLeaderboard();
    message.rewardId = object.rewardId ?? "";
    message.list = object.list?.map(e => TradingRewardLeaderboardEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardLeaderboardAmino): TradingRewardLeaderboard {
    const message = createBaseTradingRewardLeaderboard();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    message.list = object.list?.map(e => TradingRewardLeaderboardEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardLeaderboard): TradingRewardLeaderboardAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    if (message.list) {
      obj.list = message.list.map(e => e ? TradingRewardLeaderboardEntry.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardLeaderboardAminoMsg): TradingRewardLeaderboard {
    return TradingRewardLeaderboard.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardLeaderboardProtoMsg): TradingRewardLeaderboard {
    return TradingRewardLeaderboard.decode(message.value);
  },
  toProto(message: TradingRewardLeaderboard): Uint8Array {
    return TradingRewardLeaderboard.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardLeaderboard): TradingRewardLeaderboardProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardLeaderboard",
      value: TradingRewardLeaderboard.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TradingRewardLeaderboard.typeUrl)) {
      return;
    }
    TradingRewardLeaderboardEntry.registerTypeUrl();
  }
};
function createBaseTradingRewardLeaderboardEntry(): TradingRewardLeaderboardEntry {
  return {
    amount: "",
    address: "",
    createdAt: BigInt(0)
  };
}
/**
 * @name TradingRewardLeaderboardEntry
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardLeaderboardEntry
 */
export const TradingRewardLeaderboardEntry = {
  typeUrl: "/bze.rewards.TradingRewardLeaderboardEntry",
  is(o: any): o is TradingRewardLeaderboardEntry {
    return o && (o.$typeUrl === TradingRewardLeaderboardEntry.typeUrl || typeof o.amount === "string" && typeof o.address === "string" && typeof o.createdAt === "bigint");
  },
  isSDK(o: any): o is TradingRewardLeaderboardEntrySDKType {
    return o && (o.$typeUrl === TradingRewardLeaderboardEntry.typeUrl || typeof o.amount === "string" && typeof o.address === "string" && typeof o.created_at === "bigint");
  },
  isAmino(o: any): o is TradingRewardLeaderboardEntryAmino {
    return o && (o.$typeUrl === TradingRewardLeaderboardEntry.typeUrl || typeof o.amount === "string" && typeof o.address === "string" && typeof o.created_at === "bigint");
  },
  encode(message: TradingRewardLeaderboardEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(24).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardLeaderboardEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardLeaderboardEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardLeaderboardEntry>): TradingRewardLeaderboardEntry {
    const message = createBaseTradingRewardLeaderboardEntry();
    message.amount = object.amount ?? "";
    message.address = object.address ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TradingRewardLeaderboardEntryAmino): TradingRewardLeaderboardEntry {
    const message = createBaseTradingRewardLeaderboardEntry();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: TradingRewardLeaderboardEntry): TradingRewardLeaderboardEntryAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.address = message.address === "" ? undefined : message.address;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TradingRewardLeaderboardEntryAminoMsg): TradingRewardLeaderboardEntry {
    return TradingRewardLeaderboardEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardLeaderboardEntryProtoMsg): TradingRewardLeaderboardEntry {
    return TradingRewardLeaderboardEntry.decode(message.value);
  },
  toProto(message: TradingRewardLeaderboardEntry): Uint8Array {
    return TradingRewardLeaderboardEntry.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardLeaderboardEntry): TradingRewardLeaderboardEntryProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardLeaderboardEntry",
      value: TradingRewardLeaderboardEntry.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardCandidate(): TradingRewardCandidate {
  return {
    rewardId: "",
    amount: "",
    address: ""
  };
}
/**
 * @name TradingRewardCandidate
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardCandidate
 */
export const TradingRewardCandidate = {
  typeUrl: "/bze.rewards.TradingRewardCandidate",
  is(o: any): o is TradingRewardCandidate {
    return o && (o.$typeUrl === TradingRewardCandidate.typeUrl || typeof o.rewardId === "string" && typeof o.amount === "string" && typeof o.address === "string");
  },
  isSDK(o: any): o is TradingRewardCandidateSDKType {
    return o && (o.$typeUrl === TradingRewardCandidate.typeUrl || typeof o.reward_id === "string" && typeof o.amount === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is TradingRewardCandidateAmino {
    return o && (o.$typeUrl === TradingRewardCandidate.typeUrl || typeof o.reward_id === "string" && typeof o.amount === "string" && typeof o.address === "string");
  },
  encode(message: TradingRewardCandidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCandidate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCandidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardCandidate>): TradingRewardCandidate {
    const message = createBaseTradingRewardCandidate();
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: TradingRewardCandidateAmino): TradingRewardCandidate {
    const message = createBaseTradingRewardCandidate();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: TradingRewardCandidate): TradingRewardCandidateAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: TradingRewardCandidateAminoMsg): TradingRewardCandidate {
    return TradingRewardCandidate.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCandidateProtoMsg): TradingRewardCandidate {
    return TradingRewardCandidate.decode(message.value);
  },
  toProto(message: TradingRewardCandidate): Uint8Array {
    return TradingRewardCandidate.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCandidate): TradingRewardCandidateProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardCandidate",
      value: TradingRewardCandidate.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMarketIdTradingRewardId(): MarketIdTradingRewardId {
  return {
    rewardId: "",
    marketId: ""
  };
}
/**
 * @name MarketIdTradingRewardId
 * @package bze.rewards
 * @see proto type: bze.rewards.MarketIdTradingRewardId
 */
export const MarketIdTradingRewardId = {
  typeUrl: "/bze.rewards.MarketIdTradingRewardId",
  is(o: any): o is MarketIdTradingRewardId {
    return o && (o.$typeUrl === MarketIdTradingRewardId.typeUrl || typeof o.rewardId === "string" && typeof o.marketId === "string");
  },
  isSDK(o: any): o is MarketIdTradingRewardIdSDKType {
    return o && (o.$typeUrl === MarketIdTradingRewardId.typeUrl || typeof o.reward_id === "string" && typeof o.market_id === "string");
  },
  isAmino(o: any): o is MarketIdTradingRewardIdAmino {
    return o && (o.$typeUrl === MarketIdTradingRewardId.typeUrl || typeof o.reward_id === "string" && typeof o.market_id === "string");
  },
  encode(message: MarketIdTradingRewardId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketIdTradingRewardId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketIdTradingRewardId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MarketIdTradingRewardId>): MarketIdTradingRewardId {
    const message = createBaseMarketIdTradingRewardId();
    message.rewardId = object.rewardId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: MarketIdTradingRewardIdAmino): MarketIdTradingRewardId {
    const message = createBaseMarketIdTradingRewardId();
    if (object.reward_id !== undefined && object.reward_id !== null) {
      message.rewardId = object.reward_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: MarketIdTradingRewardId): MarketIdTradingRewardIdAmino {
    const obj: any = {};
    obj.reward_id = message.rewardId === "" ? undefined : message.rewardId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: MarketIdTradingRewardIdAminoMsg): MarketIdTradingRewardId {
    return MarketIdTradingRewardId.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketIdTradingRewardIdProtoMsg): MarketIdTradingRewardId {
    return MarketIdTradingRewardId.decode(message.value);
  },
  toProto(message: MarketIdTradingRewardId): Uint8Array {
    return MarketIdTradingRewardId.encode(message).finish();
  },
  toProtoMsg(message: MarketIdTradingRewardId): MarketIdTradingRewardIdProtoMsg {
    return {
      typeUrl: "/bze.rewards.MarketIdTradingRewardId",
      value: MarketIdTradingRewardId.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStakingRewardsDistributionQueue(): StakingRewardsDistributionQueue {
  return {
    pending: false,
    cursor: ""
  };
}
/**
 * @name StakingRewardsDistributionQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.StakingRewardsDistributionQueue
 */
export const StakingRewardsDistributionQueue = {
  typeUrl: "/bze.rewards.StakingRewardsDistributionQueue",
  is(o: any): o is StakingRewardsDistributionQueue {
    return o && (o.$typeUrl === StakingRewardsDistributionQueue.typeUrl || typeof o.pending === "boolean" && typeof o.cursor === "string");
  },
  isSDK(o: any): o is StakingRewardsDistributionQueueSDKType {
    return o && (o.$typeUrl === StakingRewardsDistributionQueue.typeUrl || typeof o.pending === "boolean" && typeof o.cursor === "string");
  },
  isAmino(o: any): o is StakingRewardsDistributionQueueAmino {
    return o && (o.$typeUrl === StakingRewardsDistributionQueue.typeUrl || typeof o.pending === "boolean" && typeof o.cursor === "string");
  },
  encode(message: StakingRewardsDistributionQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pending === true) {
      writer.uint32(8).bool(message.pending);
    }
    if (message.cursor !== "") {
      writer.uint32(18).string(message.cursor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingRewardsDistributionQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRewardsDistributionQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pending = reader.bool();
          break;
        case 2:
          message.cursor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingRewardsDistributionQueue>): StakingRewardsDistributionQueue {
    const message = createBaseStakingRewardsDistributionQueue();
    message.pending = object.pending ?? false;
    message.cursor = object.cursor ?? "";
    return message;
  },
  fromAmino(object: StakingRewardsDistributionQueueAmino): StakingRewardsDistributionQueue {
    const message = createBaseStakingRewardsDistributionQueue();
    if (object.pending !== undefined && object.pending !== null) {
      message.pending = object.pending;
    }
    if (object.cursor !== undefined && object.cursor !== null) {
      message.cursor = object.cursor;
    }
    return message;
  },
  toAmino(message: StakingRewardsDistributionQueue): StakingRewardsDistributionQueueAmino {
    const obj: any = {};
    obj.pending = message.pending === false ? undefined : message.pending;
    obj.cursor = message.cursor === "" ? undefined : message.cursor;
    return obj;
  },
  fromAminoMsg(object: StakingRewardsDistributionQueueAminoMsg): StakingRewardsDistributionQueue {
    return StakingRewardsDistributionQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingRewardsDistributionQueueProtoMsg): StakingRewardsDistributionQueue {
    return StakingRewardsDistributionQueue.decode(message.value);
  },
  toProto(message: StakingRewardsDistributionQueue): Uint8Array {
    return StakingRewardsDistributionQueue.encode(message).finish();
  },
  toProtoMsg(message: StakingRewardsDistributionQueue): StakingRewardsDistributionQueueProtoMsg {
    return {
      typeUrl: "/bze.rewards.StakingRewardsDistributionQueue",
      value: StakingRewardsDistributionQueue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardExpirationQueue(): TradingRewardExpirationQueue {
  return {
    removalEpochs: []
  };
}
/**
 * @name TradingRewardExpirationQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.TradingRewardExpirationQueue
 */
export const TradingRewardExpirationQueue = {
  typeUrl: "/bze.rewards.TradingRewardExpirationQueue",
  is(o: any): o is TradingRewardExpirationQueue {
    return o && (o.$typeUrl === TradingRewardExpirationQueue.typeUrl || Array.isArray(o.removalEpochs) && (!o.removalEpochs.length || typeof o.removalEpochs[0] === "number"));
  },
  isSDK(o: any): o is TradingRewardExpirationQueueSDKType {
    return o && (o.$typeUrl === TradingRewardExpirationQueue.typeUrl || Array.isArray(o.removal_epochs) && (!o.removal_epochs.length || typeof o.removal_epochs[0] === "number"));
  },
  isAmino(o: any): o is TradingRewardExpirationQueueAmino {
    return o && (o.$typeUrl === TradingRewardExpirationQueue.typeUrl || Array.isArray(o.removal_epochs) && (!o.removal_epochs.length || typeof o.removal_epochs[0] === "number"));
  },
  encode(message: TradingRewardExpirationQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.removalEpochs) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardExpirationQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardExpirationQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.removalEpochs.push(reader.uint32());
            }
          } else {
            message.removalEpochs.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TradingRewardExpirationQueue>): TradingRewardExpirationQueue {
    const message = createBaseTradingRewardExpirationQueue();
    message.removalEpochs = object.removalEpochs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TradingRewardExpirationQueueAmino): TradingRewardExpirationQueue {
    const message = createBaseTradingRewardExpirationQueue();
    message.removalEpochs = object.removal_epochs?.map(e => e) || [];
    return message;
  },
  toAmino(message: TradingRewardExpirationQueue): TradingRewardExpirationQueueAmino {
    const obj: any = {};
    if (message.removalEpochs) {
      obj.removal_epochs = message.removalEpochs.map(e => e);
    } else {
      obj.removal_epochs = message.removalEpochs;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardExpirationQueueAminoMsg): TradingRewardExpirationQueue {
    return TradingRewardExpirationQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardExpirationQueueProtoMsg): TradingRewardExpirationQueue {
    return TradingRewardExpirationQueue.decode(message.value);
  },
  toProto(message: TradingRewardExpirationQueue): Uint8Array {
    return TradingRewardExpirationQueue.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardExpirationQueue): TradingRewardExpirationQueueProtoMsg {
    return {
      typeUrl: "/bze.rewards.TradingRewardExpirationQueue",
      value: TradingRewardExpirationQueue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomReward(): DenomReward {
  return {
    stakingDenom: "",
    lock: 0,
    minStake: BigInt(0),
    stakedAmount: ""
  };
}
/**
 * DenomReward is a generic per-denom staking pool. One DenomReward exists per
 * staking denom (unique chain-wide). lock and min_stake are snapshotted from the
 * module params at creation time and never change afterwards.
 * @name DenomReward
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomReward
 */
export const DenomReward = {
  typeUrl: "/bze.rewards.DenomReward",
  is(o: any): o is DenomReward {
    return o && (o.$typeUrl === DenomReward.typeUrl || typeof o.stakingDenom === "string" && typeof o.lock === "number" && typeof o.minStake === "bigint" && typeof o.stakedAmount === "string");
  },
  isSDK(o: any): o is DenomRewardSDKType {
    return o && (o.$typeUrl === DenomReward.typeUrl || typeof o.staking_denom === "string" && typeof o.lock === "number" && typeof o.min_stake === "bigint" && typeof o.staked_amount === "string");
  },
  isAmino(o: any): o is DenomRewardAmino {
    return o && (o.$typeUrl === DenomReward.typeUrl || typeof o.staking_denom === "string" && typeof o.lock === "number" && typeof o.min_stake === "bigint" && typeof o.staked_amount === "string");
  },
  encode(message: DenomReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingDenom !== "") {
      writer.uint32(10).string(message.stakingDenom);
    }
    if (message.lock !== 0) {
      writer.uint32(16).uint32(message.lock);
    }
    if (message.minStake !== BigInt(0)) {
      writer.uint32(24).uint64(message.minStake);
    }
    if (message.stakedAmount !== "") {
      writer.uint32(34).string(message.stakedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingDenom = reader.string();
          break;
        case 2:
          message.lock = reader.uint32();
          break;
        case 3:
          message.minStake = reader.uint64();
          break;
        case 4:
          message.stakedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomReward>): DenomReward {
    const message = createBaseDenomReward();
    message.stakingDenom = object.stakingDenom ?? "";
    message.lock = object.lock ?? 0;
    message.minStake = object.minStake !== undefined && object.minStake !== null ? BigInt(object.minStake.toString()) : BigInt(0);
    message.stakedAmount = object.stakedAmount ?? "";
    return message;
  },
  fromAmino(object: DenomRewardAmino): DenomReward {
    const message = createBaseDenomReward();
    if (object.staking_denom !== undefined && object.staking_denom !== null) {
      message.stakingDenom = object.staking_denom;
    }
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = object.lock;
    }
    if (object.min_stake !== undefined && object.min_stake !== null) {
      message.minStake = BigInt(object.min_stake);
    }
    if (object.staked_amount !== undefined && object.staked_amount !== null) {
      message.stakedAmount = object.staked_amount;
    }
    return message;
  },
  toAmino(message: DenomReward): DenomRewardAmino {
    const obj: any = {};
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.lock = message.lock === 0 ? undefined : message.lock;
    obj.min_stake = message.minStake !== BigInt(0) ? message.minStake?.toString() : undefined;
    obj.staked_amount = message.stakedAmount === "" ? undefined : message.stakedAmount;
    return obj;
  },
  fromAminoMsg(object: DenomRewardAminoMsg): DenomReward {
    return DenomReward.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardProtoMsg): DenomReward {
    return DenomReward.decode(message.value);
  },
  toProto(message: DenomReward): Uint8Array {
    return DenomReward.encode(message).finish();
  },
  toProtoMsg(message: DenomReward): DenomRewardProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomReward",
      value: DenomReward.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardPrize(): DenomRewardPrize {
  return {
    stakingDenom: "",
    prizeDenom: "",
    distributedStake: "",
    lastDistributionEpoch: BigInt(0)
  };
}
/**
 * DenomRewardPrize is the accumulator for a (staking_denom, prize_denom) pair.
 * @name DenomRewardPrize
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardPrize
 */
export const DenomRewardPrize = {
  typeUrl: "/bze.rewards.DenomRewardPrize",
  is(o: any): o is DenomRewardPrize {
    return o && (o.$typeUrl === DenomRewardPrize.typeUrl || typeof o.stakingDenom === "string" && typeof o.prizeDenom === "string" && typeof o.distributedStake === "string" && typeof o.lastDistributionEpoch === "bigint");
  },
  isSDK(o: any): o is DenomRewardPrizeSDKType {
    return o && (o.$typeUrl === DenomRewardPrize.typeUrl || typeof o.staking_denom === "string" && typeof o.prize_denom === "string" && typeof o.distributed_stake === "string" && typeof o.last_distribution_epoch === "bigint");
  },
  isAmino(o: any): o is DenomRewardPrizeAmino {
    return o && (o.$typeUrl === DenomRewardPrize.typeUrl || typeof o.staking_denom === "string" && typeof o.prize_denom === "string" && typeof o.distributed_stake === "string" && typeof o.last_distribution_epoch === "bigint");
  },
  encode(message: DenomRewardPrize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingDenom !== "") {
      writer.uint32(10).string(message.stakingDenom);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(18).string(message.prizeDenom);
    }
    if (message.distributedStake !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.distributedStake, 18).atomics);
    }
    if (message.lastDistributionEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.lastDistributionEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardPrize {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardPrize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingDenom = reader.string();
          break;
        case 2:
          message.prizeDenom = reader.string();
          break;
        case 3:
          message.distributedStake = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.lastDistributionEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardPrize>): DenomRewardPrize {
    const message = createBaseDenomRewardPrize();
    message.stakingDenom = object.stakingDenom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.distributedStake = object.distributedStake ?? "";
    message.lastDistributionEpoch = object.lastDistributionEpoch !== undefined && object.lastDistributionEpoch !== null ? BigInt(object.lastDistributionEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DenomRewardPrizeAmino): DenomRewardPrize {
    const message = createBaseDenomRewardPrize();
    if (object.staking_denom !== undefined && object.staking_denom !== null) {
      message.stakingDenom = object.staking_denom;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.distributed_stake !== undefined && object.distributed_stake !== null) {
      message.distributedStake = object.distributed_stake;
    }
    if (object.last_distribution_epoch !== undefined && object.last_distribution_epoch !== null) {
      message.lastDistributionEpoch = BigInt(object.last_distribution_epoch);
    }
    return message;
  },
  toAmino(message: DenomRewardPrize): DenomRewardPrizeAmino {
    const obj: any = {};
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.distributed_stake = message.distributedStake === "" ? undefined : Decimal.fromUserInput(message.distributedStake, 18).atomics;
    obj.last_distribution_epoch = message.lastDistributionEpoch !== BigInt(0) ? message.lastDistributionEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomRewardPrizeAminoMsg): DenomRewardPrize {
    return DenomRewardPrize.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardPrizeProtoMsg): DenomRewardPrize {
    return DenomRewardPrize.decode(message.value);
  },
  toProto(message: DenomRewardPrize): Uint8Array {
    return DenomRewardPrize.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardPrize): DenomRewardPrizeProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardPrize",
      value: DenomRewardPrize.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardParticipant(): DenomRewardParticipant {
  return {
    address: "",
    stakingDenom: "",
    amount: ""
  };
}
/**
 * DenomRewardParticipant is a staker's position in a DenomReward.
 * @name DenomRewardParticipant
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipant
 */
export const DenomRewardParticipant = {
  typeUrl: "/bze.rewards.DenomRewardParticipant",
  is(o: any): o is DenomRewardParticipant {
    return o && (o.$typeUrl === DenomRewardParticipant.typeUrl || typeof o.address === "string" && typeof o.stakingDenom === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is DenomRewardParticipantSDKType {
    return o && (o.$typeUrl === DenomRewardParticipant.typeUrl || typeof o.address === "string" && typeof o.staking_denom === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is DenomRewardParticipantAmino {
    return o && (o.$typeUrl === DenomRewardParticipant.typeUrl || typeof o.address === "string" && typeof o.staking_denom === "string" && typeof o.amount === "string");
  },
  encode(message: DenomRewardParticipant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.stakingDenom !== "") {
      writer.uint32(18).string(message.stakingDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardParticipant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.stakingDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardParticipant>): DenomRewardParticipant {
    const message = createBaseDenomRewardParticipant();
    message.address = object.address ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DenomRewardParticipantAmino): DenomRewardParticipant {
    const message = createBaseDenomRewardParticipant();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.staking_denom !== undefined && object.staking_denom !== null) {
      message.stakingDenom = object.staking_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DenomRewardParticipant): DenomRewardParticipantAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DenomRewardParticipantAminoMsg): DenomRewardParticipant {
    return DenomRewardParticipant.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardParticipantProtoMsg): DenomRewardParticipant {
    return DenomRewardParticipant.decode(message.value);
  },
  toProto(message: DenomRewardParticipant): Uint8Array {
    return DenomRewardParticipant.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardParticipant): DenomRewardParticipantProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardParticipant",
      value: DenomRewardParticipant.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardParticipantIndex(): DenomRewardParticipantIndex {
  return {
    address: "",
    stakingDenom: "",
    prizeDenom: "",
    index: ""
  };
}
/**
 * DenomRewardParticipantIndex records the accumulator value S seen at the
 * participant's last settlement for a given prize denom.
 * @name DenomRewardParticipantIndex
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardParticipantIndex
 */
export const DenomRewardParticipantIndex = {
  typeUrl: "/bze.rewards.DenomRewardParticipantIndex",
  is(o: any): o is DenomRewardParticipantIndex {
    return o && (o.$typeUrl === DenomRewardParticipantIndex.typeUrl || typeof o.address === "string" && typeof o.stakingDenom === "string" && typeof o.prizeDenom === "string" && typeof o.index === "string");
  },
  isSDK(o: any): o is DenomRewardParticipantIndexSDKType {
    return o && (o.$typeUrl === DenomRewardParticipantIndex.typeUrl || typeof o.address === "string" && typeof o.staking_denom === "string" && typeof o.prize_denom === "string" && typeof o.index === "string");
  },
  isAmino(o: any): o is DenomRewardParticipantIndexAmino {
    return o && (o.$typeUrl === DenomRewardParticipantIndex.typeUrl || typeof o.address === "string" && typeof o.staking_denom === "string" && typeof o.prize_denom === "string" && typeof o.index === "string");
  },
  encode(message: DenomRewardParticipantIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.stakingDenom !== "") {
      writer.uint32(18).string(message.stakingDenom);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.index !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.index, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardParticipantIndex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardParticipantIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.stakingDenom = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.index = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardParticipantIndex>): DenomRewardParticipantIndex {
    const message = createBaseDenomRewardParticipantIndex();
    message.address = object.address ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: DenomRewardParticipantIndexAmino): DenomRewardParticipantIndex {
    const message = createBaseDenomRewardParticipantIndex();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.staking_denom !== undefined && object.staking_denom !== null) {
      message.stakingDenom = object.staking_denom;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: DenomRewardParticipantIndex): DenomRewardParticipantIndexAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.index = message.index === "" ? undefined : Decimal.fromUserInput(message.index, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DenomRewardParticipantIndexAminoMsg): DenomRewardParticipantIndex {
    return DenomRewardParticipantIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardParticipantIndexProtoMsg): DenomRewardParticipantIndex {
    return DenomRewardParticipantIndex.decode(message.value);
  },
  toProto(message: DenomRewardParticipantIndex): Uint8Array {
    return DenomRewardParticipantIndex.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardParticipantIndex): DenomRewardParticipantIndexProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardParticipantIndex",
      value: DenomRewardParticipantIndex.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardSchedule(): DenomRewardSchedule {
  return {
    scheduleId: "",
    stakingDenom: "",
    prizeDenom: "",
    dailyAmount: "",
    duration: 0,
    payouts: 0
  };
}
/**
 * DenomRewardSchedule is an SR-style reward campaign attached to a DenomReward.
 * @name DenomRewardSchedule
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardSchedule
 */
export const DenomRewardSchedule = {
  typeUrl: "/bze.rewards.DenomRewardSchedule",
  is(o: any): o is DenomRewardSchedule {
    return o && (o.$typeUrl === DenomRewardSchedule.typeUrl || typeof o.scheduleId === "string" && typeof o.stakingDenom === "string" && typeof o.prizeDenom === "string" && typeof o.dailyAmount === "string" && typeof o.duration === "number" && typeof o.payouts === "number");
  },
  isSDK(o: any): o is DenomRewardScheduleSDKType {
    return o && (o.$typeUrl === DenomRewardSchedule.typeUrl || typeof o.schedule_id === "string" && typeof o.staking_denom === "string" && typeof o.prize_denom === "string" && typeof o.daily_amount === "string" && typeof o.duration === "number" && typeof o.payouts === "number");
  },
  isAmino(o: any): o is DenomRewardScheduleAmino {
    return o && (o.$typeUrl === DenomRewardSchedule.typeUrl || typeof o.schedule_id === "string" && typeof o.staking_denom === "string" && typeof o.prize_denom === "string" && typeof o.daily_amount === "string" && typeof o.duration === "number" && typeof o.payouts === "number");
  },
  encode(message: DenomRewardSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleId !== "") {
      writer.uint32(10).string(message.scheduleId);
    }
    if (message.stakingDenom !== "") {
      writer.uint32(18).string(message.stakingDenom);
    }
    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }
    if (message.dailyAmount !== "") {
      writer.uint32(34).string(message.dailyAmount);
    }
    if (message.duration !== 0) {
      writer.uint32(40).uint32(message.duration);
    }
    if (message.payouts !== 0) {
      writer.uint32(48).uint32(message.payouts);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleId = reader.string();
          break;
        case 2:
          message.stakingDenom = reader.string();
          break;
        case 3:
          message.prizeDenom = reader.string();
          break;
        case 4:
          message.dailyAmount = reader.string();
          break;
        case 5:
          message.duration = reader.uint32();
          break;
        case 6:
          message.payouts = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardSchedule>): DenomRewardSchedule {
    const message = createBaseDenomRewardSchedule();
    message.scheduleId = object.scheduleId ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.dailyAmount = object.dailyAmount ?? "";
    message.duration = object.duration ?? 0;
    message.payouts = object.payouts ?? 0;
    return message;
  },
  fromAmino(object: DenomRewardScheduleAmino): DenomRewardSchedule {
    const message = createBaseDenomRewardSchedule();
    if (object.schedule_id !== undefined && object.schedule_id !== null) {
      message.scheduleId = object.schedule_id;
    }
    if (object.staking_denom !== undefined && object.staking_denom !== null) {
      message.stakingDenom = object.staking_denom;
    }
    if (object.prize_denom !== undefined && object.prize_denom !== null) {
      message.prizeDenom = object.prize_denom;
    }
    if (object.daily_amount !== undefined && object.daily_amount !== null) {
      message.dailyAmount = object.daily_amount;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.payouts !== undefined && object.payouts !== null) {
      message.payouts = object.payouts;
    }
    return message;
  },
  toAmino(message: DenomRewardSchedule): DenomRewardScheduleAmino {
    const obj: any = {};
    obj.schedule_id = message.scheduleId === "" ? undefined : message.scheduleId;
    obj.staking_denom = message.stakingDenom === "" ? undefined : message.stakingDenom;
    obj.prize_denom = message.prizeDenom === "" ? undefined : message.prizeDenom;
    obj.daily_amount = message.dailyAmount === "" ? undefined : message.dailyAmount;
    obj.duration = message.duration === 0 ? undefined : message.duration;
    obj.payouts = message.payouts === 0 ? undefined : message.payouts;
    return obj;
  },
  fromAminoMsg(object: DenomRewardScheduleAminoMsg): DenomRewardSchedule {
    return DenomRewardSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardScheduleProtoMsg): DenomRewardSchedule {
    return DenomRewardSchedule.decode(message.value);
  },
  toProto(message: DenomRewardSchedule): Uint8Array {
    return DenomRewardSchedule.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardSchedule): DenomRewardScheduleProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardSchedule",
      value: DenomRewardSchedule.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomRewardsDistributionQueue(): DenomRewardsDistributionQueue {
  return {
    pending: false,
    cursor: ""
  };
}
/**
 * DenomRewardsDistributionQueue mirrors StakingRewardsDistributionQueue for the
 * daily distribution of denom reward schedules.
 * @name DenomRewardsDistributionQueue
 * @package bze.rewards
 * @see proto type: bze.rewards.DenomRewardsDistributionQueue
 */
export const DenomRewardsDistributionQueue = {
  typeUrl: "/bze.rewards.DenomRewardsDistributionQueue",
  is(o: any): o is DenomRewardsDistributionQueue {
    return o && (o.$typeUrl === DenomRewardsDistributionQueue.typeUrl || typeof o.pending === "boolean" && typeof o.cursor === "string");
  },
  isSDK(o: any): o is DenomRewardsDistributionQueueSDKType {
    return o && (o.$typeUrl === DenomRewardsDistributionQueue.typeUrl || typeof o.pending === "boolean" && typeof o.cursor === "string");
  },
  isAmino(o: any): o is DenomRewardsDistributionQueueAmino {
    return o && (o.$typeUrl === DenomRewardsDistributionQueue.typeUrl || typeof o.pending === "boolean" && typeof o.cursor === "string");
  },
  encode(message: DenomRewardsDistributionQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pending === true) {
      writer.uint32(8).bool(message.pending);
    }
    if (message.cursor !== "") {
      writer.uint32(18).string(message.cursor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRewardsDistributionQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRewardsDistributionQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pending = reader.bool();
          break;
        case 2:
          message.cursor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomRewardsDistributionQueue>): DenomRewardsDistributionQueue {
    const message = createBaseDenomRewardsDistributionQueue();
    message.pending = object.pending ?? false;
    message.cursor = object.cursor ?? "";
    return message;
  },
  fromAmino(object: DenomRewardsDistributionQueueAmino): DenomRewardsDistributionQueue {
    const message = createBaseDenomRewardsDistributionQueue();
    if (object.pending !== undefined && object.pending !== null) {
      message.pending = object.pending;
    }
    if (object.cursor !== undefined && object.cursor !== null) {
      message.cursor = object.cursor;
    }
    return message;
  },
  toAmino(message: DenomRewardsDistributionQueue): DenomRewardsDistributionQueueAmino {
    const obj: any = {};
    obj.pending = message.pending === false ? undefined : message.pending;
    obj.cursor = message.cursor === "" ? undefined : message.cursor;
    return obj;
  },
  fromAminoMsg(object: DenomRewardsDistributionQueueAminoMsg): DenomRewardsDistributionQueue {
    return DenomRewardsDistributionQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomRewardsDistributionQueueProtoMsg): DenomRewardsDistributionQueue {
    return DenomRewardsDistributionQueue.decode(message.value);
  },
  toProto(message: DenomRewardsDistributionQueue): Uint8Array {
    return DenomRewardsDistributionQueue.encode(message).finish();
  },
  toProtoMsg(message: DenomRewardsDistributionQueue): DenomRewardsDistributionQueueProtoMsg {
    return {
      typeUrl: "/bze.rewards.DenomRewardsDistributionQueue",
      value: DenomRewardsDistributionQueue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};