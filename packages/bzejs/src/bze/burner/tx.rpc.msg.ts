//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgFundBurner, MsgFundBurnerResponse, MsgStartRaffle, MsgStartRaffleResponse, MsgJoinRaffle, MsgJoinRaffleResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse>;
  startRaffle(request: MsgStartRaffle): Promise<MsgStartRaffleResponse>;
  joinRaffle(request: MsgJoinRaffle): Promise<MsgJoinRaffleResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.fundBurner = this.fundBurner.bind(this);
    this.startRaffle = this.startRaffle.bind(this);
    this.joinRaffle = this.joinRaffle.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("bze.burner.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse> {
    const data = MsgFundBurner.encode(request).finish();
    const promise = this.rpc.request("bze.burner.Msg", "FundBurner", data);
    return promise.then(data => MsgFundBurnerResponse.decode(new BinaryReader(data)));
  }
  startRaffle(request: MsgStartRaffle): Promise<MsgStartRaffleResponse> {
    const data = MsgStartRaffle.encode(request).finish();
    const promise = this.rpc.request("bze.burner.Msg", "StartRaffle", data);
    return promise.then(data => MsgStartRaffleResponse.decode(new BinaryReader(data)));
  }
  joinRaffle(request: MsgJoinRaffle): Promise<MsgJoinRaffleResponse> {
    const data = MsgJoinRaffle.encode(request).finish();
    const promise = this.rpc.request("bze.burner.Msg", "JoinRaffle", data);
    return promise.then(data => MsgJoinRaffleResponse.decode(new BinaryReader(data)));
  }
}