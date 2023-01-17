import { AminoMsg } from "@cosmjs/amino";
import { MsgFundBurner } from "./tx";
export interface MsgFundBurnerAminoType extends AminoMsg {
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
    }: MsgFundBurner): MsgFundBurnerAminoType["value"] => {
      return {
        creator,
        amount
      };
    },
    fromAmino: ({
      creator,
      amount
    }: MsgFundBurnerAminoType["value"]): MsgFundBurner => {
      return {
        creator,
        amount
      };
    }
  }
};