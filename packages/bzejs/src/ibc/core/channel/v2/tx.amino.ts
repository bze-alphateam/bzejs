//@ts-nocheck
import { MsgSendPacket, MsgRecvPacket, MsgTimeout, MsgAcknowledgement } from "./tx";
export const AminoConverter = {
  "/ibc.core.channel.v2.MsgSendPacket": {
    aminoType: "cosmos-sdk/MsgSendPacket",
    toAmino: MsgSendPacket.toAmino,
    fromAmino: MsgSendPacket.fromAmino
  },
  "/ibc.core.channel.v2.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: MsgRecvPacket.toAmino,
    fromAmino: MsgRecvPacket.fromAmino
  },
  "/ibc.core.channel.v2.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: MsgTimeout.toAmino,
    fromAmino: MsgTimeout.fromAmino
  },
  "/ibc.core.channel.v2.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: MsgAcknowledgement.toAmino,
    fromAmino: MsgAcknowledgement.fromAmino
  }
};