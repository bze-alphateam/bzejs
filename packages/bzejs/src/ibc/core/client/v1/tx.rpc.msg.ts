//@ts-nocheck
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgRecoverClient, MsgRecoverClientResponse, MsgIBCSoftwareUpgrade, MsgIBCSoftwareUpgradeResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgDeleteClientCreator, MsgDeleteClientCreatorResponse } from "./tx";
/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
  /** RecoverClient defines a rpc handler method for MsgRecoverClient. */
  recoverClient(request: MsgRecoverClient): Promise<MsgRecoverClientResponse>;
  /** IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. */
  iBCSoftwareUpgrade(request: MsgIBCSoftwareUpgrade): Promise<MsgIBCSoftwareUpgradeResponse>;
  /** UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
  updateClientParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** DeleteClientCreator defines a rpc handler method for MsgDeleteClientCreator. */
  deleteClientCreator(request: MsgDeleteClientCreator): Promise<MsgDeleteClientCreatorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClient = this.createClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.upgradeClient = this.upgradeClient.bind(this);
    this.recoverClient = this.recoverClient.bind(this);
    this.iBCSoftwareUpgrade = this.iBCSoftwareUpgrade.bind(this);
    this.updateClientParams = this.updateClientParams.bind(this);
    this.deleteClientCreator = this.deleteClientCreator.bind(this);
  }
  createClient(request: MsgCreateClient): Promise<MsgCreateClientResponse> {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then(data => MsgCreateClientResponse.decode(new BinaryReader(data)));
  }
  updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse> {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then(data => MsgUpdateClientResponse.decode(new BinaryReader(data)));
  }
  upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse> {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then(data => MsgUpgradeClientResponse.decode(new BinaryReader(data)));
  }
  recoverClient(request: MsgRecoverClient): Promise<MsgRecoverClientResponse> {
    const data = MsgRecoverClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "RecoverClient", data);
    return promise.then(data => MsgRecoverClientResponse.decode(new BinaryReader(data)));
  }
  iBCSoftwareUpgrade(request: MsgIBCSoftwareUpgrade): Promise<MsgIBCSoftwareUpgradeResponse> {
    const data = MsgIBCSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "IBCSoftwareUpgrade", data);
    return promise.then(data => MsgIBCSoftwareUpgradeResponse.decode(new BinaryReader(data)));
  }
  updateClientParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClientParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  deleteClientCreator(request: MsgDeleteClientCreator): Promise<MsgDeleteClientCreatorResponse> {
    const data = MsgDeleteClientCreator.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "DeleteClientCreator", data);
    return promise.then(data => MsgDeleteClientCreatorResponse.decode(new BinaryReader(data)));
  }
}