import { AminoMsg } from "@cosmjs/amino";
import { MsgAddArticle, MsgPayPublisherRespect } from "./tx";
export interface AminoMsgAddArticle extends AminoMsg {
    type: "/bze.cointrunk.v1.MsgAddArticle";
    value: {
        publisher: string;
        title: string;
        url: string;
        picture: string;
    };
}
export interface AminoMsgPayPublisherRespect extends AminoMsg {
    type: "/bze.cointrunk.v1.MsgPayPublisherRespect";
    value: {
        creator: string;
        address: string;
        amount: string;
    };
}
export declare const AminoConverter: {
    "/bze.cointrunk.v1.MsgAddArticle": {
        aminoType: string;
        toAmino: ({ publisher, title, url, picture }: MsgAddArticle) => AminoMsgAddArticle["value"];
        fromAmino: ({ publisher, title, url, picture }: AminoMsgAddArticle["value"]) => MsgAddArticle;
    };
    "/bze.cointrunk.v1.MsgPayPublisherRespect": {
        aminoType: string;
        toAmino: ({ creator, address, amount }: MsgPayPublisherRespect) => AminoMsgPayPublisherRespect["value"];
        fromAmino: ({ creator, address, amount }: AminoMsgPayPublisherRespect["value"]) => MsgPayPublisherRespect;
    };
};
