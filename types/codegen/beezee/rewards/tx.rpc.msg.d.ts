import { Rpc } from "../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createStakingReward(request: MsgCreateStakingReward): Promise<MsgCreateStakingRewardResponse>;
    updateStakingReward(request: MsgUpdateStakingReward): Promise<MsgUpdateStakingRewardResponse>;
    createTradingReward(request: MsgCreateTradingReward): Promise<MsgCreateTradingRewardResponse>;
    joinStaking(request: MsgJoinStaking): Promise<MsgJoinStakingResponse>;
    exitStaking(request: MsgExitStaking): Promise<MsgExitStakingResponse>;
    claimStakingRewards(request: MsgClaimStakingRewards): Promise<MsgClaimStakingRewardsResponse>;
    distributeStakingRewards(request: MsgDistributeStakingRewards): Promise<MsgDistributeStakingRewardsResponse>;
}
