import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface StakingRewardParticipant {
  address: string;
  rewardId: string;
  /** stake[address] */

  amount: string;
  /** S0[address] */

  joinedAt: string;
}
export interface StakingRewardParticipantSDKType {
  address: string;
  reward_id: string;
  /** stake[address] */

  amount: string;
  /** S0[address] */

  joined_at: string;
}
export interface PendingUnlockParticipant {
  index: string;
  address: string;
  amount: string;
  denom: string;
}
export interface PendingUnlockParticipantSDKType {
  index: string;
  address: string;
  amount: string;
  denom: string;
}

function createBaseStakingRewardParticipant(): StakingRewardParticipant {
  return {
    address: "",
    rewardId: "",
    amount: "",
    joinedAt: ""
  };
}

export const StakingRewardParticipant = {
  encode(message: StakingRewardParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRewardParticipant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<StakingRewardParticipant>): StakingRewardParticipant {
    const message = createBaseStakingRewardParticipant();
    message.address = object.address ?? "";
    message.rewardId = object.rewardId ?? "";
    message.amount = object.amount ?? "";
    message.joinedAt = object.joinedAt ?? "";
    return message;
  }

};

function createBasePendingUnlockParticipant(): PendingUnlockParticipant {
  return {
    index: "",
    address: "",
    amount: "",
    denom: ""
  };
}

export const PendingUnlockParticipant = {
  encode(message: PendingUnlockParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingUnlockParticipant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<PendingUnlockParticipant>): PendingUnlockParticipant {
    const message = createBasePendingUnlockParticipant();
    message.index = object.index ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};