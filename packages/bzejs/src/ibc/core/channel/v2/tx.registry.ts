//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSendPacket, MsgRecvPacket, MsgTimeout, MsgAcknowledgement } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.core.channel.v2.MsgSendPacket", MsgSendPacket], ["/ibc.core.channel.v2.MsgRecvPacket", MsgRecvPacket], ["/ibc.core.channel.v2.MsgTimeout", MsgTimeout], ["/ibc.core.channel.v2.MsgAcknowledgement", MsgAcknowledgement]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    sendPacket(value: MsgSendPacket) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
        value: MsgSendPacket.encode(value).finish()
      };
    },
    recvPacket(value: MsgRecvPacket) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
        value: MsgRecvPacket.encode(value).finish()
      };
    },
    timeout(value: MsgTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgTimeout",
        value: MsgTimeout.encode(value).finish()
      };
    },
    acknowledgement(value: MsgAcknowledgement) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
        value: MsgAcknowledgement.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    sendPacket(value: MsgSendPacket) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
        value
      };
    },
    recvPacket(value: MsgRecvPacket) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
        value
      };
    },
    timeout(value: MsgTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgTimeout",
        value
      };
    },
    acknowledgement(value: MsgAcknowledgement) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
        value
      };
    }
  },
  fromPartial: {
    sendPacket(value: MsgSendPacket) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
        value: MsgSendPacket.fromPartial(value)
      };
    },
    recvPacket(value: MsgRecvPacket) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
        value: MsgRecvPacket.fromPartial(value)
      };
    },
    timeout(value: MsgTimeout) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgTimeout",
        value: MsgTimeout.fromPartial(value)
      };
    },
    acknowledgement(value: MsgAcknowledgement) {
      return {
        typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
        value: MsgAcknowledgement.fromPartial(value)
      };
    }
  }
};