//@ts-nocheck
import { MsgUpdateParams, MsgAddArticle, MsgPayPublisherRespect, MsgAcceptDomain, MsgSavePublisher } from "./tx";
export const AminoConverter = {
  "/bze.cointrunk.MsgUpdateParams": {
    aminoType: "bze/x/cointrunk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/bze.cointrunk.MsgAddArticle": {
    aminoType: "bze/x/cointrunk/MsgAddArticle",
    toAmino: MsgAddArticle.toAmino,
    fromAmino: MsgAddArticle.fromAmino
  },
  "/bze.cointrunk.MsgPayPublisherRespect": {
    aminoType: "bze/x/cointrunk/MsgPayPublisherRespect",
    toAmino: MsgPayPublisherRespect.toAmino,
    fromAmino: MsgPayPublisherRespect.fromAmino
  },
  "/bze.cointrunk.MsgAcceptDomain": {
    aminoType: "bze/x/cointrunk/MsgAcceptDomain",
    toAmino: MsgAcceptDomain.toAmino,
    fromAmino: MsgAcceptDomain.fromAmino
  },
  "/bze.cointrunk.MsgSavePublisher": {
    aminoType: "bze/x/cointrunk/MsgSavePublisher",
    toAmino: MsgSavePublisher.toAmino,
    fromAmino: MsgSavePublisher.fromAmino
  }
};