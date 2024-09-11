import { Rpc } from "../../helpers";
import { MsgFundBurner, MsgFundBurnerResponse, MsgStartRaffle, MsgStartRaffleResponse, MsgJoinRaffle, MsgJoinRaffleResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse>;
    startRaffle(request: MsgStartRaffle): Promise<MsgStartRaffleResponse>;
    joinRaffle(request: MsgJoinRaffle): Promise<MsgJoinRaffleResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse>;
    startRaffle(request: MsgStartRaffle): Promise<MsgStartRaffleResponse>;
    joinRaffle(request: MsgJoinRaffle): Promise<MsgJoinRaffleResponse>;
}
