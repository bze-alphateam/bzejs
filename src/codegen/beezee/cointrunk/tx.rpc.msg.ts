import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgAddArticle, MsgAddArticleResponse, MsgPayPublisherRespect, MsgPayPublisherRespectResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  addArticle(request: MsgAddArticle): Promise<MsgAddArticleResponse>;
  payPublisherRespect(request: MsgPayPublisherRespect): Promise<MsgPayPublisherRespectResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addArticle = this.addArticle.bind(this);
    this.payPublisherRespect = this.payPublisherRespect.bind(this);
  }

  addArticle(request: MsgAddArticle): Promise<MsgAddArticleResponse> {
    const data = MsgAddArticle.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Msg", "AddArticle", data);
    return promise.then(data => MsgAddArticleResponse.decode(new _m0.Reader(data)));
  }

  payPublisherRespect(request: MsgPayPublisherRespect): Promise<MsgPayPublisherRespectResponse> {
    const data = MsgPayPublisherRespect.encode(request).finish();
    const promise = this.rpc.request("bze.cointrunk.v1.Msg", "PayPublisherRespect", data);
    return promise.then(data => MsgPayPublisherRespectResponse.decode(new _m0.Reader(data)));
  }

}