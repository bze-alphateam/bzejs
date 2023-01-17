import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddArticle, MsgPayPublisherRespect } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.cointrunk.v1.MsgAddArticle", MsgAddArticle], ["/bze.cointrunk.v1.MsgPayPublisherRespect", MsgPayPublisherRespect]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addArticle(value: MsgAddArticle) {
      return {
        typeUrl: "/bze.cointrunk.v1.MsgAddArticle",
        value: MsgAddArticle.encode(value).finish()
      };
    },

    payPublisherRespect(value: MsgPayPublisherRespect) {
      return {
        typeUrl: "/bze.cointrunk.v1.MsgPayPublisherRespect",
        value: MsgPayPublisherRespect.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    addArticle(value: MsgAddArticle) {
      return {
        typeUrl: "/bze.cointrunk.v1.MsgAddArticle",
        value
      };
    },

    payPublisherRespect(value: MsgPayPublisherRespect) {
      return {
        typeUrl: "/bze.cointrunk.v1.MsgPayPublisherRespect",
        value
      };
    }

  },
  fromPartial: {
    addArticle(value: MsgAddArticle) {
      return {
        typeUrl: "/bze.cointrunk.v1.MsgAddArticle",
        value: MsgAddArticle.fromPartial(value)
      };
    },

    payPublisherRespect(value: MsgPayPublisherRespect) {
      return {
        typeUrl: "/bze.cointrunk.v1.MsgPayPublisherRespect",
        value: MsgPayPublisherRespect.fromPartial(value)
      };
    }

  }
};