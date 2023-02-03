import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundBurner } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bze.burner.v1.MsgFundBurner", MsgFundBurner]];
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
    }

  },
  withTypeUrl: {
    fundBurner(value: MsgFundBurner) {
      return {
        typeUrl: "/bze.burner.v1.MsgFundBurner",
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
    }

  }
};