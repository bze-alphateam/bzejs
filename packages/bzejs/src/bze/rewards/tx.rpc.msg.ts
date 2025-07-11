//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateStakingReward, MsgCreateStakingRewardResponse, MsgUpdateStakingReward, MsgUpdateStakingRewardResponse, MsgJoinStaking, MsgJoinStakingResponse, MsgExitStaking, MsgExitStakingResponse, MsgClaimStakingRewards, MsgClaimStakingRewardsResponse, MsgDistributeStakingRewards, MsgDistributeStakingRewardsResponse, MsgCreateTradingReward, MsgCreateTradingRewardResponse, MsgActivateTradingReward, MsgActivateTradingRewardResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createStakingReward(request: MsgCreateStakingReward): Promise<MsgCreateStakingRewardResponse>;
  updateStakingReward(request: MsgUpdateStakingReward): Promise<MsgUpdateStakingRewardResponse>;
  joinStaking(request: MsgJoinStaking): Promise<MsgJoinStakingResponse>;
  exitStaking(request: MsgExitStaking): Promise<MsgExitStakingResponse>;
  claimStakingRewards(request: MsgClaimStakingRewards): Promise<MsgClaimStakingRewardsResponse>;
  distributeStakingRewards(request: MsgDistributeStakingRewards): Promise<MsgDistributeStakingRewardsResponse>;
  createTradingReward(request: MsgCreateTradingReward): Promise<MsgCreateTradingRewardResponse>;
  activateTradingReward(request: MsgActivateTradingReward): Promise<MsgActivateTradingRewardResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createStakingReward = this.createStakingReward.bind(this);
    this.updateStakingReward = this.updateStakingReward.bind(this);
    this.joinStaking = this.joinStaking.bind(this);
    this.exitStaking = this.exitStaking.bind(this);
    this.claimStakingRewards = this.claimStakingRewards.bind(this);
    this.distributeStakingRewards = this.distributeStakingRewards.bind(this);
    this.createTradingReward = this.createTradingReward.bind(this);
    this.activateTradingReward = this.activateTradingReward.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createStakingReward(request: MsgCreateStakingReward): Promise<MsgCreateStakingRewardResponse> {
    const data = MsgCreateStakingReward.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "CreateStakingReward", data);
    return promise.then(data => MsgCreateStakingRewardResponse.decode(new BinaryReader(data)));
  }
  updateStakingReward(request: MsgUpdateStakingReward): Promise<MsgUpdateStakingRewardResponse> {
    const data = MsgUpdateStakingReward.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "UpdateStakingReward", data);
    return promise.then(data => MsgUpdateStakingRewardResponse.decode(new BinaryReader(data)));
  }
  joinStaking(request: MsgJoinStaking): Promise<MsgJoinStakingResponse> {
    const data = MsgJoinStaking.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "JoinStaking", data);
    return promise.then(data => MsgJoinStakingResponse.decode(new BinaryReader(data)));
  }
  exitStaking(request: MsgExitStaking): Promise<MsgExitStakingResponse> {
    const data = MsgExitStaking.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "ExitStaking", data);
    return promise.then(data => MsgExitStakingResponse.decode(new BinaryReader(data)));
  }
  claimStakingRewards(request: MsgClaimStakingRewards): Promise<MsgClaimStakingRewardsResponse> {
    const data = MsgClaimStakingRewards.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "ClaimStakingRewards", data);
    return promise.then(data => MsgClaimStakingRewardsResponse.decode(new BinaryReader(data)));
  }
  distributeStakingRewards(request: MsgDistributeStakingRewards): Promise<MsgDistributeStakingRewardsResponse> {
    const data = MsgDistributeStakingRewards.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "DistributeStakingRewards", data);
    return promise.then(data => MsgDistributeStakingRewardsResponse.decode(new BinaryReader(data)));
  }
  createTradingReward(request: MsgCreateTradingReward): Promise<MsgCreateTradingRewardResponse> {
    const data = MsgCreateTradingReward.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "CreateTradingReward", data);
    return promise.then(data => MsgCreateTradingRewardResponse.decode(new BinaryReader(data)));
  }
  activateTradingReward(request: MsgActivateTradingReward): Promise<MsgActivateTradingRewardResponse> {
    const data = MsgActivateTradingReward.encode(request).finish();
    const promise = this.rpc.request("bze.rewards.Msg", "ActivateTradingReward", data);
    return promise.then(data => MsgActivateTradingRewardResponse.decode(new BinaryReader(data)));
  }
}