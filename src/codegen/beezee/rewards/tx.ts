import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgCreateStakingReward {
  /** msg creator */
  creator: string;
  /** the amount paid as prize for each epoch (duration) */

  prizeAmount: string;
  /** the denom paid as prize */

  prizeDenom: string;
  /** the denom a user has to stake in order to qualify */

  stakingDenom: string;
  /** the number of days the rewards are paid */

  duration: string;
  /** the minimum amount of staking denom a user has to stake in order to qualify */

  minStake: string;
  /** the number of days the funds are locked upon exiting stake */

  lock: string;
}
export interface MsgCreateStakingRewardSDKType {
  /** msg creator */
  creator: string;
  /** the amount paid as prize for each epoch (duration) */

  prize_amount: string;
  /** the denom paid as prize */

  prize_denom: string;
  /** the denom a user has to stake in order to qualify */

  staking_denom: string;
  /** the number of days the rewards are paid */

  duration: string;
  /** the minimum amount of staking denom a user has to stake in order to qualify */

  min_stake: string;
  /** the number of days the funds are locked upon exiting stake */

  lock: string;
}
export interface MsgCreateStakingRewardResponse {
  rewardId: string;
}
export interface MsgCreateStakingRewardResponseSDKType {
  reward_id: string;
}
export interface MsgUpdateStakingReward {
  creator: string;
  rewardId: string;
  /** the number of days the rewards are paid */

  duration: string;
}
export interface MsgUpdateStakingRewardSDKType {
  creator: string;
  reward_id: string;
  /** the number of days the rewards are paid */

  duration: string;
}
export interface MsgUpdateStakingRewardResponse {}
export interface MsgUpdateStakingRewardResponseSDKType {}
export interface MsgCreateTradingReward {
  creator: string;
  /** the amount paid as prize for each slot */

  prizeAmount: string;
  /** the denom paid as prize */

  prizeDenom: string;
  duration: string;
  marketId: string;
  slots: string;
}
export interface MsgCreateTradingRewardSDKType {
  creator: string;
  /** the amount paid as prize for each slot */

  prize_amount: string;
  /** the denom paid as prize */

  prize_denom: string;
  duration: string;
  market_id: string;
  slots: string;
}
export interface MsgCreateTradingRewardResponse {
  rewardId: string;
}
export interface MsgCreateTradingRewardResponseSDKType {
  reward_id: string;
}
export interface MsgJoinStaking {
  creator: string;
  rewardId: string;
  amount: string;
}
export interface MsgJoinStakingSDKType {
  creator: string;
  reward_id: string;
  amount: string;
}
export interface MsgJoinStakingResponse {}
export interface MsgJoinStakingResponseSDKType {}
export interface MsgExitStaking {
  creator: string;
  rewardId: string;
}
export interface MsgExitStakingSDKType {
  creator: string;
  rewardId: string;
}
export interface MsgExitStakingResponse {}
export interface MsgExitStakingResponseSDKType {}
export interface MsgClaimStakingRewards {
  creator: string;
  rewardId: string;
}
export interface MsgClaimStakingRewardsSDKType {
  creator: string;
  rewardId: string;
}
export interface MsgClaimStakingRewardsResponse {
  amount: string;
}
export interface MsgClaimStakingRewardsResponseSDKType {
  amount: string;
}
export interface MsgDistributeStakingRewards {
  creator: string;
  rewardId: string;
  amount: string;
}
export interface MsgDistributeStakingRewardsSDKType {
  creator: string;
  rewardId: string;
  amount: string;
}
export interface MsgDistributeStakingRewardsResponse {}
export interface MsgDistributeStakingRewardsResponseSDKType {}

function createBaseMsgCreateStakingReward(): MsgCreateStakingReward {
  return {
    creator: "",
    prizeAmount: "",
    prizeDenom: "",
    stakingDenom: "",
    duration: "",
    minStake: "",
    lock: ""
  };
}

export const MsgCreateStakingReward = {
  encode(message: MsgCreateStakingReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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

    if (message.duration !== "") {
      writer.uint32(42).string(message.duration);
    }

    if (message.minStake !== "") {
      writer.uint32(50).string(message.minStake);
    }

    if (message.lock !== "") {
      writer.uint32(58).string(message.lock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStakingReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStakingReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
          message.duration = reader.string();
          break;

        case 6:
          message.minStake = reader.string();
          break;

        case 7:
          message.lock = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateStakingReward>): MsgCreateStakingReward {
    const message = createBaseMsgCreateStakingReward();
    message.creator = object.creator ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.stakingDenom = object.stakingDenom ?? "";
    message.duration = object.duration ?? "";
    message.minStake = object.minStake ?? "";
    message.lock = object.lock ?? "";
    return message;
  }

};

function createBaseMsgCreateStakingRewardResponse(): MsgCreateStakingRewardResponse {
  return {
    rewardId: ""
  };
}

export const MsgCreateStakingRewardResponse = {
  encode(message: MsgCreateStakingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStakingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStakingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromPartial(object: DeepPartial<MsgCreateStakingRewardResponse>): MsgCreateStakingRewardResponse {
    const message = createBaseMsgCreateStakingRewardResponse();
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseMsgUpdateStakingReward(): MsgUpdateStakingReward {
  return {
    creator: "",
    rewardId: "",
    duration: ""
  };
}

export const MsgUpdateStakingReward = {
  encode(message: MsgUpdateStakingReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }

    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.rewardId = reader.string();
          break;

        case 3:
          message.duration = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateStakingReward>): MsgUpdateStakingReward {
    const message = createBaseMsgUpdateStakingReward();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    message.duration = object.duration ?? "";
    return message;
  }

};

function createBaseMsgUpdateStakingRewardResponse(): MsgUpdateStakingRewardResponse {
  return {};
}

export const MsgUpdateStakingRewardResponse = {
  encode(_: MsgUpdateStakingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateStakingRewardResponse>): MsgUpdateStakingRewardResponse {
    const message = createBaseMsgUpdateStakingRewardResponse();
    return message;
  }

};

function createBaseMsgCreateTradingReward(): MsgCreateTradingReward {
  return {
    creator: "",
    prizeAmount: "",
    prizeDenom: "",
    duration: "",
    marketId: "",
    slots: ""
  };
}

export const MsgCreateTradingReward = {
  encode(message: MsgCreateTradingReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.prizeAmount !== "") {
      writer.uint32(18).string(message.prizeAmount);
    }

    if (message.prizeDenom !== "") {
      writer.uint32(26).string(message.prizeDenom);
    }

    if (message.duration !== "") {
      writer.uint32(34).string(message.duration);
    }

    if (message.marketId !== "") {
      writer.uint32(42).string(message.marketId);
    }

    if (message.slots !== "") {
      writer.uint32(50).string(message.slots);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradingReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradingReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.prizeAmount = reader.string();
          break;

        case 3:
          message.prizeDenom = reader.string();
          break;

        case 4:
          message.duration = reader.string();
          break;

        case 5:
          message.marketId = reader.string();
          break;

        case 6:
          message.slots = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateTradingReward>): MsgCreateTradingReward {
    const message = createBaseMsgCreateTradingReward();
    message.creator = object.creator ?? "";
    message.prizeAmount = object.prizeAmount ?? "";
    message.prizeDenom = object.prizeDenom ?? "";
    message.duration = object.duration ?? "";
    message.marketId = object.marketId ?? "";
    message.slots = object.slots ?? "";
    return message;
  }

};

function createBaseMsgCreateTradingRewardResponse(): MsgCreateTradingRewardResponse {
  return {
    rewardId: ""
  };
}

export const MsgCreateTradingRewardResponse = {
  encode(message: MsgCreateTradingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardId !== "") {
      writer.uint32(10).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromPartial(object: DeepPartial<MsgCreateTradingRewardResponse>): MsgCreateTradingRewardResponse {
    const message = createBaseMsgCreateTradingRewardResponse();
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseMsgJoinStaking(): MsgJoinStaking {
  return {
    creator: "",
    rewardId: "",
    amount: ""
  };
}

export const MsgJoinStaking = {
  encode(message: MsgJoinStaking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinStaking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinStaking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.rewardId = reader.string();
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

  fromPartial(object: DeepPartial<MsgJoinStaking>): MsgJoinStaking {
    const message = createBaseMsgJoinStaking();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgJoinStakingResponse(): MsgJoinStakingResponse {
  return {};
}

export const MsgJoinStakingResponse = {
  encode(_: MsgJoinStakingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinStakingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinStakingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgJoinStakingResponse>): MsgJoinStakingResponse {
    const message = createBaseMsgJoinStakingResponse();
    return message;
  }

};

function createBaseMsgExitStaking(): MsgExitStaking {
  return {
    creator: "",
    rewardId: ""
  };
}

export const MsgExitStaking = {
  encode(message: MsgExitStaking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitStaking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitStaking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.rewardId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgExitStaking>): MsgExitStaking {
    const message = createBaseMsgExitStaking();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseMsgExitStakingResponse(): MsgExitStakingResponse {
  return {};
}

export const MsgExitStakingResponse = {
  encode(_: MsgExitStakingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitStakingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitStakingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgExitStakingResponse>): MsgExitStakingResponse {
    const message = createBaseMsgExitStakingResponse();
    return message;
  }

};

function createBaseMsgClaimStakingRewards(): MsgClaimStakingRewards {
  return {
    creator: "",
    rewardId: ""
  };
}

export const MsgClaimStakingRewards = {
  encode(message: MsgClaimStakingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimStakingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStakingRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.rewardId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimStakingRewards>): MsgClaimStakingRewards {
    const message = createBaseMsgClaimStakingRewards();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};

function createBaseMsgClaimStakingRewardsResponse(): MsgClaimStakingRewardsResponse {
  return {
    amount: ""
  };
}

export const MsgClaimStakingRewardsResponse = {
  encode(message: MsgClaimStakingRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimStakingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStakingRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimStakingRewardsResponse>): MsgClaimStakingRewardsResponse {
    const message = createBaseMsgClaimStakingRewardsResponse();
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgDistributeStakingRewards(): MsgDistributeStakingRewards {
  return {
    creator: "",
    rewardId: "",
    amount: ""
  };
}

export const MsgDistributeStakingRewards = {
  encode(message: MsgDistributeStakingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.rewardId !== "") {
      writer.uint32(18).string(message.rewardId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDistributeStakingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeStakingRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.rewardId = reader.string();
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

  fromPartial(object: DeepPartial<MsgDistributeStakingRewards>): MsgDistributeStakingRewards {
    const message = createBaseMsgDistributeStakingRewards();
    message.creator = object.creator ?? "";
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgDistributeStakingRewardsResponse(): MsgDistributeStakingRewardsResponse {
  return {};
}

export const MsgDistributeStakingRewardsResponse = {
  encode(_: MsgDistributeStakingRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDistributeStakingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDistributeStakingRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgDistributeStakingRewardsResponse>): MsgDistributeStakingRewardsResponse {
    const message = createBaseMsgDistributeStakingRewardsResponse();
    return message;
  }

};