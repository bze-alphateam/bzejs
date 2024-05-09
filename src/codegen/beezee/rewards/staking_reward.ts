import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface StakingReward {
  rewardId: string;
  prizeAmount: string;
  prizeDenom: string;
  stakingDenom: string;
  duration: number;
  payouts: number;
  minStake: Long;
  lock: number;
  /** T */

  stakedAmount: string;
  /** S */

  distributedStake: string;
}
export interface StakingRewardSDKType {
  reward_id: string;
  prize_amount: string;
  prize_denom: string;
  staking_denom: string;
  duration: number;
  payouts: number;
  min_stake: Long;
  lock: number;
  /** T */

  staked_amount: string;
  /** S */

  distributed_stake: string;
}

function createBaseStakingReward(): StakingReward {
  return {
    rewardId: "",
    prizeAmount: "",
    prizeDenom: "",
    stakingDenom: "",
    duration: 0,
    payouts: 0,
    minStake: Long.UZERO,
    lock: 0,
    stakedAmount: "",
    distributedStake: ""
  };
}

export const StakingReward = {
  encode(message: StakingReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.minStake.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.minStake = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<StakingReward>): StakingReward {
    const message = createBaseStakingReward();
    message.rewardId = object.rewardId ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.duration = object.duration ?? 0;
    message.payouts = object.payouts ?? 0;
    message.minStake = object.minStake !== undefined && object.minStake !== null ? Long.fromValue(object.minStake) : Long.UZERO;
    message.lock = object.lock ?? 0;
    message.stakedAmount = object.stakedAmount ?? "";
    message.distributedStake = object.distributedStake ?? "";
    return message;
  }

};