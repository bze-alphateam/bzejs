//@ts-nocheck
import { TelescopeGeneratedType } from "../../types";
import { MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/bze.txfeecollector.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.txfeecollector.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.txfeecollector.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.txfeecollector.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};