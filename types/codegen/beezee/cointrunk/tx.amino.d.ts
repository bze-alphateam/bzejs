import { AminoMsg } from "@cosmjs/amino";
import { MsgAddArticle, MsgPayPublisherRespect } from "./tx";
export interface MsgAddArticleAminoType extends AminoMsg {
    type: "/bze.cointrunk.v1.MsgAddArticle";
    value: {
        publisher: string;
        title: string;
        url: string;
        picture: string;
    };
}
export interface MsgPayPublisherRespectAminoType extends AminoMsg {
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
        toAmino: ({ publisher, title, url, picture }: MsgAddArticle) => MsgAddArticleAminoType["value"];
        fromAmino: ({ publisher, title, url, picture }: MsgAddArticleAminoType["value"]) => MsgAddArticle;
    };
    "/bze.cointrunk.v1.MsgPayPublisherRespect": {
        aminoType: string;
        toAmino: ({ creator, address, amount }: MsgPayPublisherRespect) => MsgPayPublisherRespectAminoType["value"];
        fromAmino: ({ creator, address, amount }: MsgPayPublisherRespectAminoType["value"]) => MsgPayPublisherRespect;
    };
};
