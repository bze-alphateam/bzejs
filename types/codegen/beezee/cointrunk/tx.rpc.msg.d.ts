import { Rpc } from "../../helpers";
import { MsgAddArticle, MsgAddArticleResponse, MsgPayPublisherRespect, MsgPayPublisherRespectResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    addArticle(request: MsgAddArticle): Promise<MsgAddArticleResponse>;
    payPublisherRespect(request: MsgPayPublisherRespect): Promise<MsgPayPublisherRespectResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addArticle(request: MsgAddArticle): Promise<MsgAddArticleResponse>;
    payPublisherRespect(request: MsgPayPublisherRespect): Promise<MsgPayPublisherRespectResponse>;
}
