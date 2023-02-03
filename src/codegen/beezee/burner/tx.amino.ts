import { AminoMsg } from "@cosmjs/amino";
import { MsgFundBurner } from "./tx";
export interface AminoMsgFundBurner extends AminoMsg {
  type: "/bze.burner.v1.MsgFundBurner";
  value: {
    creator: string;
    amount: string;
  };
}
export const AminoConverter = {
  "/bze.burner.v1.MsgFundBurner": {
    aminoType: "/bze.burner.v1.MsgFundBurner",
    toAmino: ({
      creator,
      amount
    }: MsgFundBurner): AminoMsgFundBurner["value"] => {
      return {
        creator,
        amount
      };
    },
    fromAmino: ({
      creator,
      amount
    }: AminoMsgFundBurner["value"]): MsgFundBurner => {
      return {
        creator,
        amount
      };
    }
  }
};