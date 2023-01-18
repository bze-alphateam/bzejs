import { Rpc } from "../../helpers";
import { MsgFundBurner, MsgFundBurnerResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse>;
}
