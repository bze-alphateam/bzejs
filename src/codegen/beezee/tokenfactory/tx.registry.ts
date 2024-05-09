import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.tokenfactory.v1.MsgCreateDenom", MsgCreateDenom], ["/bze.tokenfactory.v1.MsgMint", MsgMint], ["/bze.tokenfactory.v1.MsgBurn", MsgBurn], ["/bze.tokenfactory.v1.MsgChangeAdmin", MsgChangeAdmin], ["/bze.tokenfactory.v1.MsgSetDenomMetadata", MsgSetDenomMetadata]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgCreateDenom",
        value
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgMint",
        value
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgBurn",
        value
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgChangeAdmin",
        value
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
        value
      };
    }

  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },

    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    },

    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/bze.tokenfactory.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    }

  }
};