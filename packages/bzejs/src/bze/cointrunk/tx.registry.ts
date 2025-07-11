//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgAddArticle, MsgPayPublisherRespect, MsgAcceptDomain, MsgSavePublisher } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.cointrunk.MsgUpdateParams", MsgUpdateParams], ["/bze.cointrunk.MsgAddArticle", MsgAddArticle], ["/bze.cointrunk.MsgPayPublisherRespect", MsgPayPublisherRespect], ["/bze.cointrunk.MsgAcceptDomain", MsgAcceptDomain], ["/bze.cointrunk.MsgSavePublisher", MsgSavePublisher]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.cointrunk.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    addArticle(value: MsgAddArticle) {
      return {
        typeUrl: "/bze.cointrunk.MsgAddArticle",
        value: MsgAddArticle.encode(value).finish()
      };
    },
    payPublisherRespect(value: MsgPayPublisherRespect) {
      return {
        typeUrl: "/bze.cointrunk.MsgPayPublisherRespect",
        value: MsgPayPublisherRespect.encode(value).finish()
      };
    },
    acceptDomain(value: MsgAcceptDomain) {
      return {
        typeUrl: "/bze.cointrunk.MsgAcceptDomain",
        value: MsgAcceptDomain.encode(value).finish()
      };
    },
    savePublisher(value: MsgSavePublisher) {
      return {
        typeUrl: "/bze.cointrunk.MsgSavePublisher",
        value: MsgSavePublisher.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.cointrunk.MsgUpdateParams",
        value
      };
    },
    addArticle(value: MsgAddArticle) {
      return {
        typeUrl: "/bze.cointrunk.MsgAddArticle",
        value
      };
    },
    payPublisherRespect(value: MsgPayPublisherRespect) {
      return {
        typeUrl: "/bze.cointrunk.MsgPayPublisherRespect",
        value
      };
    },
    acceptDomain(value: MsgAcceptDomain) {
      return {
        typeUrl: "/bze.cointrunk.MsgAcceptDomain",
        value
      };
    },
    savePublisher(value: MsgSavePublisher) {
      return {
        typeUrl: "/bze.cointrunk.MsgSavePublisher",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.cointrunk.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    addArticle(value: MsgAddArticle) {
      return {
        typeUrl: "/bze.cointrunk.MsgAddArticle",
        value: MsgAddArticle.fromPartial(value)
      };
    },
    payPublisherRespect(value: MsgPayPublisherRespect) {
      return {
        typeUrl: "/bze.cointrunk.MsgPayPublisherRespect",
        value: MsgPayPublisherRespect.fromPartial(value)
      };
    },
    acceptDomain(value: MsgAcceptDomain) {
      return {
        typeUrl: "/bze.cointrunk.MsgAcceptDomain",
        value: MsgAcceptDomain.fromPartial(value)
      };
    },
    savePublisher(value: MsgSavePublisher) {
      return {
        typeUrl: "/bze.cointrunk.MsgSavePublisher",
        value: MsgSavePublisher.fromPartial(value)
      };
    }
  }
};