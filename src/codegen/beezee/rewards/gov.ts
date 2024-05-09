import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface ActivateTradingRewardProposal {
  title: string;
  description: string;
  rewardId: string;
}
export interface ActivateTradingRewardProposalSDKType {
  title: string;
  description: string;
  reward_id: string;
}

function createBaseActivateTradingRewardProposal(): ActivateTradingRewardProposal {
  return {
    title: "",
    description: "",
    rewardId: ""
  };
}

export const ActivateTradingRewardProposal = {
  encode(message: ActivateTradingRewardProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.rewardId !== "") {
      writer.uint32(26).string(message.rewardId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateTradingRewardProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateTradingRewardProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.rewardId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ActivateTradingRewardProposal>): ActivateTradingRewardProposal {
    const message = createBaseActivateTradingRewardProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.rewardId = object.rewardId ?? "";
    return message;
  }

};