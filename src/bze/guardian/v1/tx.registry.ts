//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { MsgUpdateParams, MsgTightenRateLimit, MsgBlockDenom, MsgUnblockDenom, MsgDisableMessages, MsgHaltTradingDenoms, MsgHaltChain, MsgPauseAutomation, MsgResumeAutomation, MsgCloseChannel, MsgReopenChannel } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/bze.guardian.v1.MsgUpdateParams", MsgUpdateParams], ["/bze.guardian.v1.MsgTightenRateLimit", MsgTightenRateLimit], ["/bze.guardian.v1.MsgBlockDenom", MsgBlockDenom], ["/bze.guardian.v1.MsgUnblockDenom", MsgUnblockDenom], ["/bze.guardian.v1.MsgDisableMessages", MsgDisableMessages], ["/bze.guardian.v1.MsgHaltTradingDenoms", MsgHaltTradingDenoms], ["/bze.guardian.v1.MsgHaltChain", MsgHaltChain], ["/bze.guardian.v1.MsgPauseAutomation", MsgPauseAutomation], ["/bze.guardian.v1.MsgResumeAutomation", MsgResumeAutomation], ["/bze.guardian.v1.MsgCloseChannel", MsgCloseChannel], ["/bze.guardian.v1.MsgReopenChannel", MsgReopenChannel]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.guardian.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    tightenRateLimit(value: MsgTightenRateLimit) {
      return {
        typeUrl: "/bze.guardian.v1.MsgTightenRateLimit",
        value: MsgTightenRateLimit.encode(value).finish()
      };
    },
    blockDenom(value: MsgBlockDenom) {
      return {
        typeUrl: "/bze.guardian.v1.MsgBlockDenom",
        value: MsgBlockDenom.encode(value).finish()
      };
    },
    unblockDenom(value: MsgUnblockDenom) {
      return {
        typeUrl: "/bze.guardian.v1.MsgUnblockDenom",
        value: MsgUnblockDenom.encode(value).finish()
      };
    },
    disableMessages(value: MsgDisableMessages) {
      return {
        typeUrl: "/bze.guardian.v1.MsgDisableMessages",
        value: MsgDisableMessages.encode(value).finish()
      };
    },
    haltTradingDenoms(value: MsgHaltTradingDenoms) {
      return {
        typeUrl: "/bze.guardian.v1.MsgHaltTradingDenoms",
        value: MsgHaltTradingDenoms.encode(value).finish()
      };
    },
    haltChain(value: MsgHaltChain) {
      return {
        typeUrl: "/bze.guardian.v1.MsgHaltChain",
        value: MsgHaltChain.encode(value).finish()
      };
    },
    pauseAutomation(value: MsgPauseAutomation) {
      return {
        typeUrl: "/bze.guardian.v1.MsgPauseAutomation",
        value: MsgPauseAutomation.encode(value).finish()
      };
    },
    resumeAutomation(value: MsgResumeAutomation) {
      return {
        typeUrl: "/bze.guardian.v1.MsgResumeAutomation",
        value: MsgResumeAutomation.encode(value).finish()
      };
    },
    closeChannel(value: MsgCloseChannel) {
      return {
        typeUrl: "/bze.guardian.v1.MsgCloseChannel",
        value: MsgCloseChannel.encode(value).finish()
      };
    },
    reopenChannel(value: MsgReopenChannel) {
      return {
        typeUrl: "/bze.guardian.v1.MsgReopenChannel",
        value: MsgReopenChannel.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.guardian.v1.MsgUpdateParams",
        value
      };
    },
    tightenRateLimit(value: MsgTightenRateLimit) {
      return {
        typeUrl: "/bze.guardian.v1.MsgTightenRateLimit",
        value
      };
    },
    blockDenom(value: MsgBlockDenom) {
      return {
        typeUrl: "/bze.guardian.v1.MsgBlockDenom",
        value
      };
    },
    unblockDenom(value: MsgUnblockDenom) {
      return {
        typeUrl: "/bze.guardian.v1.MsgUnblockDenom",
        value
      };
    },
    disableMessages(value: MsgDisableMessages) {
      return {
        typeUrl: "/bze.guardian.v1.MsgDisableMessages",
        value
      };
    },
    haltTradingDenoms(value: MsgHaltTradingDenoms) {
      return {
        typeUrl: "/bze.guardian.v1.MsgHaltTradingDenoms",
        value
      };
    },
    haltChain(value: MsgHaltChain) {
      return {
        typeUrl: "/bze.guardian.v1.MsgHaltChain",
        value
      };
    },
    pauseAutomation(value: MsgPauseAutomation) {
      return {
        typeUrl: "/bze.guardian.v1.MsgPauseAutomation",
        value
      };
    },
    resumeAutomation(value: MsgResumeAutomation) {
      return {
        typeUrl: "/bze.guardian.v1.MsgResumeAutomation",
        value
      };
    },
    closeChannel(value: MsgCloseChannel) {
      return {
        typeUrl: "/bze.guardian.v1.MsgCloseChannel",
        value
      };
    },
    reopenChannel(value: MsgReopenChannel) {
      return {
        typeUrl: "/bze.guardian.v1.MsgReopenChannel",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.guardian.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    tightenRateLimit(value: MsgTightenRateLimit) {
      return {
        typeUrl: "/bze.guardian.v1.MsgTightenRateLimit",
        value: MsgTightenRateLimit.fromPartial(value)
      };
    },
    blockDenom(value: MsgBlockDenom) {
      return {
        typeUrl: "/bze.guardian.v1.MsgBlockDenom",
        value: MsgBlockDenom.fromPartial(value)
      };
    },
    unblockDenom(value: MsgUnblockDenom) {
      return {
        typeUrl: "/bze.guardian.v1.MsgUnblockDenom",
        value: MsgUnblockDenom.fromPartial(value)
      };
    },
    disableMessages(value: MsgDisableMessages) {
      return {
        typeUrl: "/bze.guardian.v1.MsgDisableMessages",
        value: MsgDisableMessages.fromPartial(value)
      };
    },
    haltTradingDenoms(value: MsgHaltTradingDenoms) {
      return {
        typeUrl: "/bze.guardian.v1.MsgHaltTradingDenoms",
        value: MsgHaltTradingDenoms.fromPartial(value)
      };
    },
    haltChain(value: MsgHaltChain) {
      return {
        typeUrl: "/bze.guardian.v1.MsgHaltChain",
        value: MsgHaltChain.fromPartial(value)
      };
    },
    pauseAutomation(value: MsgPauseAutomation) {
      return {
        typeUrl: "/bze.guardian.v1.MsgPauseAutomation",
        value: MsgPauseAutomation.fromPartial(value)
      };
    },
    resumeAutomation(value: MsgResumeAutomation) {
      return {
        typeUrl: "/bze.guardian.v1.MsgResumeAutomation",
        value: MsgResumeAutomation.fromPartial(value)
      };
    },
    closeChannel(value: MsgCloseChannel) {
      return {
        typeUrl: "/bze.guardian.v1.MsgCloseChannel",
        value: MsgCloseChannel.fromPartial(value)
      };
    },
    reopenChannel(value: MsgReopenChannel) {
      return {
        typeUrl: "/bze.guardian.v1.MsgReopenChannel",
        value: MsgReopenChannel.fromPartial(value)
      };
    }
  }
};