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
  },
  "/bze.burner.v1.MsgStartRaffle": {
    aminoType: "/bze.burner.v1.MsgStartRaffle",
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
    aminoType: "/bze.burner.v1.MsgJoinRaffle",
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