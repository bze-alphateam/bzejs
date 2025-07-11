//@ts-nocheck
import { MsgUpdateParams, MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const AminoConverter = {
  "/bze.tokenfactory.MsgUpdateParams": {
    aminoType: "bze/x/tokenfactory/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/bze.tokenfactory.MsgCreateDenom": {
    aminoType: "bze/x/tokenfactory/MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/bze.tokenfactory.MsgMint": {
    aminoType: "bze/x/tokenfactory/MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/bze.tokenfactory.MsgBurn": {
    aminoType: "bze/x/tokenfactory/MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/bze.tokenfactory.MsgChangeAdmin": {
    aminoType: "bze/x/tokenfactory/MsgChangeAdmin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/bze.tokenfactory.MsgSetDenomMetadata": {
    aminoType: "bze/x/tokenfactory/MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  }
};