import { AminoMsg } from "@cosmjs/amino";
import { MsgAddArticle, MsgPayPublisherRespect } from "./tx";
export interface AminoMsgAddArticle extends AminoMsg {
  type: "cointrunk/AddArticle";
  value: {
    publisher: string;
    title: string;
    url: string;
    picture: string;
  };
}
export interface AminoMsgPayPublisherRespect extends AminoMsg {
  type: "cointrunk/PayPublisherRespect";
  value: {
    creator: string;
    address: string;
    amount: string;
  };
}
export const AminoConverter = {
  "/bze.cointrunk.v1.MsgAddArticle": {
    aminoType: "cointrunk/AddArticle",
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
    aminoType: "cointrunk/PayPublisherRespect",
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