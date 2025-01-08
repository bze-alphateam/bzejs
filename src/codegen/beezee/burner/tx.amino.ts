import { AminoMsg } from "@cosmjs/amino";
import { MsgFundBurner, MsgStartRaffle, MsgJoinRaffle } from "./tx";
export interface AminoMsgFundBurner extends AminoMsg {
  type: "burner/FundBurner";
  value: {
    creator: string;
    amount: string;
  };
}
export interface AminoMsgStartRaffle extends AminoMsg {
  type: "burner/StartRaffle";
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
  type: "burner/JoinRaffle";
  value: {
    creator: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/bze.burner.v1.MsgFundBurner": {
    aminoType: "burner/FundBurner",
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
  },
  "/bze.burner.v1.MsgStartRaffle": {
    aminoType: "burner/StartRaffle",
    toAmino: ({
      creator,
      pot,
      duration,
      chances,
      ratio,
      ticketPrice,
      denom
    }: MsgStartRaffle): AminoMsgStartRaffle["value"] => {
      return {
        creator,
        pot,
        duration,
        chances,
        ratio,
        ticket_price: ticketPrice,
        denom
      };
    },
    fromAmino: ({
      creator,
      pot,
      duration,
      chances,
      ratio,
      ticket_price,
      denom
    }: AminoMsgStartRaffle["value"]): MsgStartRaffle => {
      return {
        creator,
        pot,
        duration,
        chances,
        ratio,
        ticketPrice: ticket_price,
        denom
      };
    }
  },
  "/bze.burner.v1.MsgJoinRaffle": {
    aminoType: "burner/JoinRaffle",
    toAmino: ({
      creator,
      denom
    }: MsgJoinRaffle): AminoMsgJoinRaffle["value"] => {
      return {
        creator,
        denom
      };
    },
    fromAmino: ({
      creator,
      denom
    }: AminoMsgJoinRaffle["value"]): MsgJoinRaffle => {
      return {
        creator,
        denom
      };
    }
  }
};