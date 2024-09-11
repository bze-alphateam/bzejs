import { AminoMsg } from "@cosmjs/amino";
import { MsgFundBurner, MsgStartRaffle, MsgJoinRaffle } from "./tx";
export interface AminoMsgFundBurner extends AminoMsg {
    type: "/bze.burner.v1.MsgFundBurner";
    value: {
        creator: string;
        amount: string;
    };
}
export interface AminoMsgStartRaffle extends AminoMsg {
    type: "/bze.burner.v1.MsgStartRaffle";
    value: {
        creator: string;
        pot: string;
        duration: string;
        chances: string;
        ratio: string;
        ticket_price: string;
        denom: string;
    };
}
export interface AminoMsgJoinRaffle extends AminoMsg {
    type: "/bze.burner.v1.MsgJoinRaffle";
    value: {
        creator: string;
        denom: string;
    };
}
export declare const AminoConverter: {
    "/bze.burner.v1.MsgFundBurner": {
        aminoType: string;
        toAmino: ({ creator, amount }: MsgFundBurner) => AminoMsgFundBurner["value"];
        fromAmino: ({ creator, amount }: AminoMsgFundBurner["value"]) => MsgFundBurner;
    };
    "/bze.burner.v1.MsgStartRaffle": {
        aminoType: string;
        toAmino: ({ creator, pot, duration, chances, ratio, ticketPrice, denom }: MsgStartRaffle) => AminoMsgStartRaffle["value"];
        fromAmino: ({ creator, pot, duration, chances, ratio, ticket_price, denom }: AminoMsgStartRaffle["value"]) => MsgStartRaffle;
    };
    "/bze.burner.v1.MsgJoinRaffle": {
        aminoType: string;
        toAmino: ({ creator, denom }: MsgJoinRaffle) => AminoMsgJoinRaffle["value"];
        fromAmino: ({ creator, denom }: AminoMsgJoinRaffle["value"]) => MsgJoinRaffle;
    };
};
