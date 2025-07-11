//@ts-nocheck
import { MsgRegisterCounterparty, MsgUpdateClientConfig } from "./tx";
export const AminoConverter = {
  "/ibc.core.client.v2.MsgRegisterCounterparty": {
    aminoType: "cosmos-sdk/MsgRegisterCounterparty",
    toAmino: MsgRegisterCounterparty.toAmino,
    fromAmino: MsgRegisterCounterparty.fromAmino
  },
  "/ibc.core.client.v2.MsgUpdateClientConfig": {
    aminoType: "cosmos-sdk/MsgUpdateClientConfig",
    toAmino: MsgUpdateClientConfig.toAmino,
    fromAmino: MsgUpdateClientConfig.fromAmino
  }
};