import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
  type: "/bze.tokenfactory.v1.MsgCreateDenom";
  value: {
    creator: string;
    subdenom: string;
  };
}
export interface AminoMsgMint extends AminoMsg {
  type: "/bze.tokenfactory.v1.MsgMint";
  value: {
    creator: string;
    coins: string;
  };
}
export interface AminoMsgBurn extends AminoMsg {
  type: "/bze.tokenfactory.v1.MsgBurn";
  value: {
    creator: string;
    coins: string;
  };
}
export interface AminoMsgChangeAdmin extends AminoMsg {
  type: "/bze.tokenfactory.v1.MsgChangeAdmin";
  value: {
    creator: string;
    denom: string;
    newAdmin: string;
  };
}
export interface AminoMsgSetDenomMetadata extends AminoMsg {
  type: "/bze.tokenfactory.v1.MsgSetDenomMetadata";
  value: {
    creator: string;
    metadata: {
      description: string;
      denom_units: {
        denom: string;
        exponent: number;
        aliases: string[];
      }[];
      base: string;
      display: string;
      name: string;
      symbol: string;
      uri: string;
      uri_hash: string;
    };
  };
}
export const AminoConverter = {
  "/bze.tokenfactory.v1.MsgCreateDenom": {
    aminoType: "/bze.tokenfactory.v1.MsgCreateDenom",
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
    aminoType: "/bze.tokenfactory.v1.MsgMint",
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
    aminoType: "/bze.tokenfactory.v1.MsgBurn",
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
    aminoType: "/bze.tokenfactory.v1.MsgChangeAdmin",
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
    aminoType: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
    toAmino: ({
      creator,
      metadata
    }: MsgSetDenomMetadata): AminoMsgSetDenomMetadata["value"] => {
      return {
        creator,
        metadata: {
          description: metadata.description,
          denom_units: metadata.denomUnits.map(el0 => ({
            denom: el0.denom,
            exponent: el0.exponent,
            aliases: el0.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uri_hash: metadata.uriHash
        }
      };
    },
    fromAmino: ({
      creator,
      metadata
    }: AminoMsgSetDenomMetadata["value"]): MsgSetDenomMetadata => {
      return {
        creator,
        metadata: {
          description: metadata.description,
          denomUnits: metadata.denom_units.map(el1 => ({
            denom: el1.denom,
            exponent: el1.exponent,
            aliases: el1.aliases
          })),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uriHash: metadata.uri_hash
        }
      };
    }
  }
};