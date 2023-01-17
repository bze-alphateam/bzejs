import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgFundBurner, MsgFundBurnerResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.fundBurner = this.fundBurner.bind(this);
  }

  fundBurner(request: MsgFundBurner): Promise<MsgFundBurnerResponse> {
    const data = MsgFundBurner.encode(request).finish();
    const promise = this.rpc.request("bze.burner.v1.Msg", "FundBurner", data);
    return promise.then(data => MsgFundBurnerResponse.decode(new _m0.Reader(data)));
  }

}