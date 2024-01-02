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
export const AminoConverter = {
  "/bze.cointrunk.v1.MsgAddArticle": {
    aminoType: "/bze.cointrunk.v1.MsgAddArticle",
    toAmino: ({
      publisher,
      title,
      url,
      picture
    }: MsgAddArticle): MsgAddArticleAminoType["value"] => {
      return {
        publisher,
        title,
        url,
        picture
      };
    },
    fromAmino: ({
      publisher,
      title,
      url,
      picture
    }: MsgAddArticleAminoType["value"]): MsgAddArticle => {
      return {
        publisher,
        title,
        url,
        picture
      };
    }
  },
  "/bze.cointrunk.v1.MsgPayPublisherRespect": {
    aminoType: "/bze.cointrunk.v1.MsgPayPublisherRespect",
    toAmino: ({
      creator,
      address,
      amount
    }: MsgPayPublisherRespect): MsgPayPublisherRespectAminoType["value"] => {
      return {
        creator,
        address,
        amount
      };
    },
    fromAmino: ({
      creator,
      address,
      amount
    }: MsgPayPublisherRespectAminoType["value"]): MsgPayPublisherRespect => {
      return {
        creator,
        address,
        amount
      };
    }
  }
};