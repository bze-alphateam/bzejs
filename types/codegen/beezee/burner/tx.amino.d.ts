import { AminoMsg } from "@cosmjs/amino";
import { MsgFundBurner } from "./tx";
export interface MsgFundBurnerAminoType extends AminoMsg {
    type: "/bze.burner.v1.MsgFundBurner";
    value: {
        creator: string;
        amount: string;
    };
}
export declare const AminoConverter: {
    "/bze.burner.v1.MsgFundBurner": {
        aminoType: string;
        toAmino: ({ creator, amount }: MsgFundBurner) => MsgFundBurnerAminoType["value"];
        fromAmino: ({ creator, amount }: MsgFundBurnerAminoType["value"]) => MsgFundBurner;
    };
};
