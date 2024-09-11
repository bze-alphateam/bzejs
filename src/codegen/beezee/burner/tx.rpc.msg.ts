import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgFundBurner, MsgFundBurnerResponse, MsgStartRaffle, MsgStartRaffleResponse, MsgJoinRaffle, MsgJoinRaffleResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse>;
  startRaffle(request: MsgStartRaffle): Promise<MsgStartRaffleResponse>;
  joinRaffle(request: MsgJoinRaffle): Promise<MsgJoinRaffleResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.fundBurner = this.fundBurner.bind(this);
    this.startRaffle = this.startRaffle.bind(this);
    this.joinRaffle = this.joinRaffle.bind(this);
  }

  fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse> {
    const data = MsgFundBurner.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Msg", "FundBurner", data);
    return promise.then(data => MsgFundBurnerResponse.decode(new _m0.Reader(data)));
  }

  startRaffle(request: MsgStartRaffle): Promise<MsgStartRaffleResponse> {
    const data = MsgStartRaffle.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Msg", "StartRaffle", data);
    return promise.then(data => MsgStartRaffleResponse.decode(new _m0.Reader(data)));
  }

  joinRaffle(request: MsgJoinRaffle): Promise<MsgJoinRaffleResponse> {
    const data = MsgJoinRaffle.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Msg", "JoinRaffle", data);
    return promise.then(data => MsgJoinRaffleResponse.decode(new _m0.Reader(data)));
  }

}