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
export declare const AminoConverter: {
    "/bze.tokenfactory.v1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ creator, subdenom }: MsgCreateDenom) => AminoMsgCreateDenom["value"];
        fromAmino: ({ creator, subdenom }: AminoMsgCreateDenom["value"]) => MsgCreateDenom;
    };
    "/bze.tokenfactory.v1.MsgMint": {
        aminoType: string;
        toAmino: ({ creator, coins }: MsgMint) => AminoMsgMint["value"];
        fromAmino: ({ creator, coins }: AminoMsgMint["value"]) => MsgMint;
    };
    "/bze.tokenfactory.v1.MsgBurn": {
        aminoType: string;
        toAmino: ({ creator, coins }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ creator, coins }: AminoMsgBurn["value"]) => MsgBurn;
    };
    "/bze.tokenfactory.v1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ creator, denom, newAdmin }: MsgChangeAdmin) => AminoMsgChangeAdmin["value"];
        fromAmino: ({ creator, denom, newAdmin }: AminoMsgChangeAdmin["value"]) => MsgChangeAdmin;
    };
    "/bze.tokenfactory.v1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ creator, metadata }: MsgSetDenomMetadata) => AminoMsgSetDenomMetadata["value"];
        fromAmino: ({ creator, metadata }: AminoMsgSetDenomMetadata["value"]) => MsgSetDenomMetadata;
    };
};
