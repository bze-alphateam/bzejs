//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/bze.txfeecollector.MsgUpdateParams": {
    aminoType: "bze/x/txfeecollector/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};