//@ts-nocheck
import { TelescopeGeneratedType } from "../../types";
import { MsgUpdateParams, MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgSetDenomBranding, MsgSetDenomAdmin, MsgDisableMinting, MsgSetDenomConfig } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/bze.tokenfactory.MsgUpdateParams", MsgUpdateParams], ["/bze.tokenfactory.MsgCreateDenom", MsgCreateDenom], ["/bze.tokenfactory.MsgMint", MsgMint], ["/bze.tokenfactory.MsgBurn", MsgBurn], ["/bze.tokenfactory.MsgChangeAdmin", MsgChangeAdmin], ["/bze.tokenfactory.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/bze.tokenfactory.MsgSetDenomBranding", MsgSetDenomBranding], ["/bze.tokenfactory.MsgSetDenomAdmin", MsgSetDenomAdmin], ["/bze.tokenfactory.MsgDisableMinting", MsgDisableMinting], ["/bze.tokenfactory.MsgSetDenomConfig", MsgSetDenomConfig]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.tokenfactory.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/bze.tokenfactory.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/bze.tokenfactory.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/bze.tokenfactory.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    },
    setDenomBranding(value: MsgSetDenomBranding) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomBranding",
        value: MsgSetDenomBranding.encode(value).finish()
      };
    },
    setDenomAdmin(value: MsgSetDenomAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomAdmin",
        value: MsgSetDenomAdmin.encode(value).finish()
      };
    },
    disableMinting(value: MsgDisableMinting) {
      return {
        typeUrl: "/bze.tokenfactory.MsgDisableMinting",
        value: MsgDisableMinting.encode(value).finish()
      };
    },
    setDenomConfig(value: MsgSetDenomConfig) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomConfig",
        value: MsgSetDenomConfig.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.tokenfactory.MsgUpdateParams",
        value
      };
    },
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/bze.tokenfactory.MsgCreateDenom",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/bze.tokenfactory.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/bze.tokenfactory.MsgBurn",
        value
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.MsgChangeAdmin",
        value
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomMetadata",
        value
      };
    },
    setDenomBranding(value: MsgSetDenomBranding) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomBranding",
        value
      };
    },
    setDenomAdmin(value: MsgSetDenomAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomAdmin",
        value
      };
    },
    disableMinting(value: MsgDisableMinting) {
      return {
        typeUrl: "/bze.tokenfactory.MsgDisableMinting",
        value
      };
    },
    setDenomConfig(value: MsgSetDenomConfig) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomConfig",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.tokenfactory.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/bze.tokenfactory.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/bze.tokenfactory.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/bze.tokenfactory.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    },
    setDenomBranding(value: MsgSetDenomBranding) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomBranding",
        value: MsgSetDenomBranding.fromPartial(value)
      };
    },
    setDenomAdmin(value: MsgSetDenomAdmin) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomAdmin",
        value: MsgSetDenomAdmin.fromPartial(value)
      };
    },
    disableMinting(value: MsgDisableMinting) {
      return {
        typeUrl: "/bze.tokenfactory.MsgDisableMinting",
        value: MsgDisableMinting.fromPartial(value)
      };
    },
    setDenomConfig(value: MsgSetDenomConfig) {
      return {
        typeUrl: "/bze.tokenfactory.MsgSetDenomConfig",
        value: MsgSetDenomConfig.fromPartial(value)
      };
    }
  }
};