//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgAddArticle, MsgAddArticleResponse, MsgPayPublisherRespect, MsgPayPublisherRespectResponse, MsgAcceptDomain, MsgAcceptDomainResponse, MsgSavePublisher, MsgSavePublisherResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  addArticle(request: MsgAddArticle): Promise<MsgAddArticleResponse>;
  payPublisherRespect(request: MsgPayPublisherRespect): Promise<MsgPayPublisherRespectResponse>;
  acceptDomain(request: MsgAcceptDomain): Promise<MsgAcceptDomainResponse>;
  savePublisher(request: MsgSavePublisher): Promise<MsgSavePublisherResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.addArticle = this.addArticle.bind(this);
    this.payPublisherRespect = this.payPublisherRespect.bind(this);
    this.acceptDomain = this.acceptDomain.bind(this);
    this.savePublisher = this.savePublisher.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  addArticle(request: MsgAddArticle): Promise<MsgAddArticleResponse> {
    const data = MsgAddArticle.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Msg", "AddArticle", data);
    return promise.then(data => MsgAddArticleResponse.decode(new BinaryReader(data)));
  }
  payPublisherRespect(request: MsgPayPublisherRespect): Promise<MsgPayPublisherRespectResponse> {
    const data = MsgPayPublisherRespect.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Msg", "PayPublisherRespect", data);
    return promise.then(data => MsgPayPublisherRespectResponse.decode(new BinaryReader(data)));
  }
  acceptDomain(request: MsgAcceptDomain): Promise<MsgAcceptDomainResponse> {
    const data = MsgAcceptDomain.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Msg", "AcceptDomain", data);
    return promise.then(data => MsgAcceptDomainResponse.decode(new BinaryReader(data)));
  }
  savePublisher(request: MsgSavePublisher): Promise<MsgSavePublisherResponse> {
    const data = MsgSavePublisher.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.Msg", "SavePublisher", data);
    return promise.then(data => MsgSavePublisherResponse.decode(new BinaryReader(data)));
  }
}