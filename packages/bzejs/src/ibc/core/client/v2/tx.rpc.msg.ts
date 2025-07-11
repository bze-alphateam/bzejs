//@ts-nocheck
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { MsgRegisterCounterparty, MsgRegisterCounterpartyResponse, MsgUpdateClientConfig, MsgUpdateClientConfigResponse } from "./tx";
/** Msg defines the ibc/client/v2 Msg service. */
export interface Msg {
  /** RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. */
  registerCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse>;
  /** UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. */
  updateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerCounterparty = this.registerCounterparty.bind(this);
    this.updateClientConfig = this.updateClientConfig.bind(this);
  }
  registerCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse> {
    const data = MsgRegisterCounterparty.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "RegisterCounterparty", data);
    return promise.then(data => MsgRegisterCounterpartyResponse.decode(new BinaryReader(data)));
  }
  updateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse> {
    const data = MsgUpdateClientConfig.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "UpdateClientConfig", data);
    return promise.then(data => MsgUpdateClientConfigResponse.decode(new BinaryReader(data)));
  }
}