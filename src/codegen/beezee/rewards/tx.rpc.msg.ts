import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateStakingReward, MsgCreateStakingRewardResponse, MsgUpdateStakingReward, MsgUpdateStakingRewardResponse, MsgCreateTradingReward, MsgCreateTradingRewardResponse, MsgJoinStaking, MsgJoinStakingResponse, MsgExitStaking, MsgExitStakingResponse, MsgClaimStakingRewards, MsgClaimStakingRewardsResponse, MsgDistributeStakingRewards, MsgDistributeStakingRewardsResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  createStakingReward(request: MsgCreateStakingReward): Promise<MsgCreateStakingRewardResponse>;
  updateStakingReward(request: MsgUpdateStakingReward): Promise<MsgUpdateStakingRewardResponse>;
  createTradingReward(request: MsgCreateTradingReward): Promise<MsgCreateTradingRewardResponse>;
  joinStaking(request: MsgJoinStaking): Promise<MsgJoinStakingResponse>;
  exitStaking(request: MsgExitStaking): Promise<MsgExitStakingResponse>;
  claimStakingRewards(request: MsgClaimStakingRewards): Promise<MsgClaimStakingRewardsResponse>;
  distributeStakingRewards(request: MsgDistributeStakingRewards): Promise<MsgDistributeStakingRewardsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStakingReward = this.createStakingReward.bind(this);
    this.updateStakingReward = this.updateStakingReward.bind(this);
    this.createTradingReward = this.createTradingReward.bind(this);
    this.joinStaking = this.joinStaking.bind(this);
    this.exitStaking = this.exitStaking.bind(this);
    this.claimStakingRewards = this.claimStakingRewards.bind(this);
    this.distributeStakingRewards = this.distributeStakingRewards.bind(this);
  }

  createStakingReward(request: MsgCreateStakingReward): Promise<MsgCreateStakingRewardResponse> {
    const data = MsgCreateStakingReward.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Msg", "CreateStakingReward", data);
    return promise.then(data => MsgCreateStakingRewardResponse.decode(new _m0.Reader(data)));
  }

  updateStakingReward(request: MsgUpdateStakingReward): Promise<MsgUpdateStakingRewardResponse> {
    const data = MsgUpdateStakingReward.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Msg", "UpdateStakingReward", data);
    return promise.then(data => MsgUpdateStakingRewardResponse.decode(new _m0.Reader(data)));
  }

  createTradingReward(request: MsgCreateTradingReward): Promise<MsgCreateTradingRewardResponse> {
    const data = MsgCreateTradingReward.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Msg", "CreateTradingReward", data);
    return promise.then(data => MsgCreateTradingRewardResponse.decode(new _m0.Reader(data)));
  }

  joinStaking(request: MsgJoinStaking): Promise<MsgJoinStakingResponse> {
    const data = MsgJoinStaking.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Msg", "JoinStaking", data);
    return promise.then(data => MsgJoinStakingResponse.decode(new _m0.Reader(data)));
  }

  exitStaking(request: MsgExitStaking): Promise<MsgExitStakingResponse> {
    const data = MsgExitStaking.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Msg", "ExitStaking", data);
    return promise.then(data => MsgExitStakingResponse.decode(new _m0.Reader(data)));
  }

  claimStakingRewards(request: MsgClaimStakingRewards): Promise<MsgClaimStakingRewardsResponse> {
    const data = MsgClaimStakingRewards.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Msg", "ClaimStakingRewards", data);
    return promise.then(data => MsgClaimStakingRewardsResponse.decode(new _m0.Reader(data)));
  }

  distributeStakingRewards(request: MsgDistributeStakingRewards): Promise<MsgDistributeStakingRewardsResponse> {
    const data = MsgDistributeStakingRewards.encode(request).finish();
    const promise = this.rpc.request("bze.v1.rewards.Msg", "DistributeStakingRewards", data);
    return promise.then(data => MsgDistributeStakingRewardsResponse.decode(new _m0.Reader(data)));
  }

}