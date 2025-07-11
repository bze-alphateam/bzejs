//@ts-nocheck
import { MsgUpdateParams, MsgFundBurner, MsgStartRaffle, MsgJoinRaffle } from "./tx";
export const AminoConverter = {
  "/bze.burner.MsgUpdateParams": {
    aminoType: "bze/x/burner/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/bze.burner.MsgFundBurner": {
    aminoType: "bze/x/burner/MsgFundBurner",
    toAmino: MsgFundBurner.toAmino,
    fromAmino: MsgFundBurner.fromAmino
  },
  "/bze.burner.MsgStartRaffle": {
    aminoType: "bze/x/burner/MsgStartRaffle",
    toAmino: MsgStartRaffle.toAmino,
    fromAmino: MsgStartRaffle.fromAmino
  },
  "/bze.burner.MsgJoinRaffle": {
    aminoType: "bze/x/burner/MsgJoinRaffle",
    toAmino: MsgJoinRaffle.toAmino,
    fromAmino: MsgJoinRaffle.fromAmino
  }
};