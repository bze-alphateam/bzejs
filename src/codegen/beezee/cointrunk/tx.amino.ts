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
export const AminoConverter = {
  "/bze.cointrunk.v1.MsgAddArticle": {
    aminoType: "/bze.cointrunk.v1.MsgAddArticle",
    toAmino: ({
      publisher,
      title,
      url,
      picture
    }: MsgAddArticle): AminoMsgAddArticle["value"] => {
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
    }: AminoMsgAddArticle["value"]): MsgAddArticle => {
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
    }: MsgPayPublisherRespect): AminoMsgPayPublisherRespect["value"] => {
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
    }: AminoMsgPayPublisherRespect["value"]): MsgPayPublisherRespect => {
      return {
        creator,
        address,
        amount
      };
    }
  }
};