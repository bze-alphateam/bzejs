import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundBurner, MsgStartRaffle, MsgJoinRaffle } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.burner.v1.MsgFundBurner", MsgFundBurner], ["/bze.burner.v1.MsgStartRaffle", MsgStartRaffle], ["/bze.burner.v1.MsgJoinRaffle", MsgJoinRaffle]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    fundBurner(value: MsgFundBurner) {
      return {
        typeUrl: "/bze.burner.v1.MsgFundBurner",
        value: MsgFundBurner.encode(value).finish()
      };
    },

    startRaffle(value: MsgStartRaffle) {
      return {
        typeUrl: "/bze.burner.v1.MsgStartRaffle",
        value: MsgStartRaffle.encode(value).finish()
      };
    },

    joinRaffle(value: MsgJoinRaffle) {
      return {
        typeUrl: "/bze.burner.v1.MsgJoinRaffle",
        value: MsgJoinRaffle.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    fundBurner(value: MsgFundBurner) {
      return {
        typeUrl: "/bze.burner.v1.MsgFundBurner",
        value
      };
    },

    startRaffle(value: MsgStartRaffle) {
      return {
        typeUrl: "/bze.burner.v1.MsgStartRaffle",
        value
      };
    },

    joinRaffle(value: MsgJoinRaffle) {
      return {
        typeUrl: "/bze.burner.v1.MsgJoinRaffle",
        value
      };
    }

  },
  fromPartial: {
    fundBurner(value: MsgFundBurner) {
      return {
        typeUrl: "/bze.burner.v1.MsgFundBurner",
        value: MsgFundBurner.fromPartial(value)
      };
    },

    startRaffle(value: MsgStartRaffle) {
      return {
        typeUrl: "/bze.burner.v1.MsgStartRaffle",
        value: MsgStartRaffle.fromPartial(value)
      };
    },

    joinRaffle(value: MsgJoinRaffle) {
      return {
        typeUrl: "/bze.burner.v1.MsgJoinRaffle",
        value: MsgJoinRaffle.fromPartial(value)
      };
    }

  }
};