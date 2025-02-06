import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
  type: "tokenfactory/CreateDenom";
  value: {
    creator: string;
    subdenom: string;
  };
}
export interface AminoMsgMint extends AminoMsg {
  type: "tokenfactory/Mint";
  value: {
    creator: string;
    coins: string;
  };
}
export interface AminoMsgBurn extends AminoMsg {
  type: "tokenfactory/Burn";
  value: {
    creator: string;
    coins: string;
  };
}
export interface AminoMsgChangeAdmin extends AminoMsg {
  type: "tokenfactory/ChangeAdmin";
  value: {
    creator: string;
    denom: string;
    newAdmin: string;
  };
}
export interface AminoMsgSetDenomMetadata extends AminoMsg {
  type: "tokenfactory/SetDenomMetadata";
  value: {
    creator: string;
    metadata: string;
  };
}
export const AminoConverter = {
  "/bze.tokenfactory.v1.MsgCreateDenom": {
    aminoType: "tokenfactory/CreateDenom",
    toAmino: ({
      creator,
      subdenom
    }: MsgCreateDenom): AminoMsgCreateDenom["value"] => {
      return {
        creator,
        subdenom
      };
    },
    fromAmino: ({
      creator,
      subdenom
    }: AminoMsgCreateDenom["value"]): MsgCreateDenom => {
      return {
        creator,
        subdenom
      };
    }
  },
  "/bze.tokenfactory.v1.MsgMint": {
    aminoType: "tokenfactory/Mint",
    toAmino: ({
      creator,
      coins
    }: MsgMint): AminoMsgMint["value"] => {
      return {
        creator,
        coins
      };
    },
    fromAmino: ({
      creator,
      coins
    }: AminoMsgMint["value"]): MsgMint => {
      return {
        creator,
        coins
      };
    }
  },
  "/bze.tokenfactory.v1.MsgBurn": {
    aminoType: "tokenfactory/Burn",
    toAmino: ({
      creator,
      coins
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        creator,
        coins
      };
    },
    fromAmino: ({
      creator,
      coins
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        creator,
        coins
      };
    }
  },
  "/bze.tokenfactory.v1.MsgChangeAdmin": {
    aminoType: "tokenfactory/ChangeAdmin",
    toAmino: ({
      creator,
      denom,
      newAdmin
    }: MsgChangeAdmin): AminoMsgChangeAdmin["value"] => {
      return {
        creator,
        denom,
        newAdmin
      };
    },
    fromAmino: ({
      creator,
      denom,
      newAdmin
    }: AminoMsgChangeAdmin["value"]): MsgChangeAdmin => {
      return {
        creator,
        denom,
        newAdmin
      };
    }
  },
  "/bze.tokenfactory.v1.MsgSetDenomMetadata": {
    aminoType: "tokenfactory/SetDenomMetadata",
    toAmino: ({
      creator,
      metadata
    }: MsgSetDenomMetadata): AminoMsgSetDenomMetadata["value"] => {
      return {
        creator,
        metadata
      };
    },
    fromAmino: ({
      creator,
      metadata
    }: AminoMsgSetDenomMetadata["value"]): MsgSetDenomMetadata => {
      return {
        creator,
        metadata
      };
    }
  }
};