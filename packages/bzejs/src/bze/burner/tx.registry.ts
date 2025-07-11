//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgFundBurner, MsgStartRaffle, MsgJoinRaffle } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.burner.MsgUpdateParams", MsgUpdateParams], ["/bze.burner.MsgFundBurner", MsgFundBurner], ["/bze.burner.MsgStartRaffle", MsgStartRaffle], ["/bze.burner.MsgJoinRaffle", MsgJoinRaffle]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.burner.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    fundBurner(value: MsgFundBurner) {
      return {
        typeUrl: "/bze.burner.MsgFundBurner",
        value: MsgFundBurner.encode(value).finish()
      };
    },
    startRaffle(value: MsgStartRaffle) {
      return {
        typeUrl: "/bze.burner.MsgStartRaffle",
        value: MsgStartRaffle.encode(value).finish()
      };
    },
    joinRaffle(value: MsgJoinRaffle) {
      return {
        typeUrl: "/bze.burner.MsgJoinRaffle",
        value: MsgJoinRaffle.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.burner.MsgUpdateParams",
        value
      };
    },
    fundBurner(value: MsgFundBurner) {
      return {
        typeUrl: "/bze.burner.MsgFundBurner",
        value
      };
    },
    startRaffle(value: MsgStartRaffle) {
      return {
        typeUrl: "/bze.burner.MsgStartRaffle",
        value
      };
    },
    joinRaffle(value: MsgJoinRaffle) {
      return {
        typeUrl: "/bze.burner.MsgJoinRaffle",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.burner.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    fundBurner(value: MsgFundBurner) {
      return {
        typeUrl: "/bze.burner.MsgFundBurner",
        value: MsgFundBurner.fromPartial(value)
      };
    },
    startRaffle(value: MsgStartRaffle) {
      return {
        typeUrl: "/bze.burner.MsgStartRaffle",
        value: MsgStartRaffle.fromPartial(value)
      };
    },
    joinRaffle(value: MsgJoinRaffle) {
      return {
        typeUrl: "/bze.burner.MsgJoinRaffle",
        value: MsgJoinRaffle.fromPartial(value)
      };
    }
  }
};