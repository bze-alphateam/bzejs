//@ts-nocheck
import { TelescopeGeneratedType } from "../../types";
import { MsgUpdateParams, MsgCreateDao, MsgAdminExecute, MsgNominateAdmin, MsgAcceptAdminNomination, MsgWithdrawAdminNomination, MsgSubmitProposal, MsgVote, MsgCancelProposal, MsgSettleProposal, MsgCleanupProposal, MsgUpdateDaoConfig, MsgUpdateMetadata, MsgUpdateElectorate, MsgUpdateMembers } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/bze.dao.MsgUpdateParams", MsgUpdateParams], ["/bze.dao.MsgCreateDao", MsgCreateDao], ["/bze.dao.MsgAdminExecute", MsgAdminExecute], ["/bze.dao.MsgNominateAdmin", MsgNominateAdmin], ["/bze.dao.MsgAcceptAdminNomination", MsgAcceptAdminNomination], ["/bze.dao.MsgWithdrawAdminNomination", MsgWithdrawAdminNomination], ["/bze.dao.MsgSubmitProposal", MsgSubmitProposal], ["/bze.dao.MsgVote", MsgVote], ["/bze.dao.MsgCancelProposal", MsgCancelProposal], ["/bze.dao.MsgSettleProposal", MsgSettleProposal], ["/bze.dao.MsgCleanupProposal", MsgCleanupProposal], ["/bze.dao.MsgUpdateDaoConfig", MsgUpdateDaoConfig], ["/bze.dao.MsgUpdateMetadata", MsgUpdateMetadata], ["/bze.dao.MsgUpdateElectorate", MsgUpdateElectorate], ["/bze.dao.MsgUpdateMembers", MsgUpdateMembers]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.dao.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createDao(value: MsgCreateDao) {
      return {
        typeUrl: "/bze.dao.MsgCreateDao",
        value: MsgCreateDao.encode(value).finish()
      };
    },
    adminExecute(value: MsgAdminExecute) {
      return {
        typeUrl: "/bze.dao.MsgAdminExecute",
        value: MsgAdminExecute.encode(value).finish()
      };
    },
    nominateAdmin(value: MsgNominateAdmin) {
      return {
        typeUrl: "/bze.dao.MsgNominateAdmin",
        value: MsgNominateAdmin.encode(value).finish()
      };
    },
    acceptAdminNomination(value: MsgAcceptAdminNomination) {
      return {
        typeUrl: "/bze.dao.MsgAcceptAdminNomination",
        value: MsgAcceptAdminNomination.encode(value).finish()
      };
    },
    withdrawAdminNomination(value: MsgWithdrawAdminNomination) {
      return {
        typeUrl: "/bze.dao.MsgWithdrawAdminNomination",
        value: MsgWithdrawAdminNomination.encode(value).finish()
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/bze.dao.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/bze.dao.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/bze.dao.MsgCancelProposal",
        value: MsgCancelProposal.encode(value).finish()
      };
    },
    settleProposal(value: MsgSettleProposal) {
      return {
        typeUrl: "/bze.dao.MsgSettleProposal",
        value: MsgSettleProposal.encode(value).finish()
      };
    },
    cleanupProposal(value: MsgCleanupProposal) {
      return {
        typeUrl: "/bze.dao.MsgCleanupProposal",
        value: MsgCleanupProposal.encode(value).finish()
      };
    },
    updateDaoConfig(value: MsgUpdateDaoConfig) {
      return {
        typeUrl: "/bze.dao.MsgUpdateDaoConfig",
        value: MsgUpdateDaoConfig.encode(value).finish()
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/bze.dao.MsgUpdateMetadata",
        value: MsgUpdateMetadata.encode(value).finish()
      };
    },
    updateElectorate(value: MsgUpdateElectorate) {
      return {
        typeUrl: "/bze.dao.MsgUpdateElectorate",
        value: MsgUpdateElectorate.encode(value).finish()
      };
    },
    updateMembers(value: MsgUpdateMembers) {
      return {
        typeUrl: "/bze.dao.MsgUpdateMembers",
        value: MsgUpdateMembers.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.dao.MsgUpdateParams",
        value
      };
    },
    createDao(value: MsgCreateDao) {
      return {
        typeUrl: "/bze.dao.MsgCreateDao",
        value
      };
    },
    adminExecute(value: MsgAdminExecute) {
      return {
        typeUrl: "/bze.dao.MsgAdminExecute",
        value
      };
    },
    nominateAdmin(value: MsgNominateAdmin) {
      return {
        typeUrl: "/bze.dao.MsgNominateAdmin",
        value
      };
    },
    acceptAdminNomination(value: MsgAcceptAdminNomination) {
      return {
        typeUrl: "/bze.dao.MsgAcceptAdminNomination",
        value
      };
    },
    withdrawAdminNomination(value: MsgWithdrawAdminNomination) {
      return {
        typeUrl: "/bze.dao.MsgWithdrawAdminNomination",
        value
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/bze.dao.MsgSubmitProposal",
        value
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/bze.dao.MsgVote",
        value
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/bze.dao.MsgCancelProposal",
        value
      };
    },
    settleProposal(value: MsgSettleProposal) {
      return {
        typeUrl: "/bze.dao.MsgSettleProposal",
        value
      };
    },
    cleanupProposal(value: MsgCleanupProposal) {
      return {
        typeUrl: "/bze.dao.MsgCleanupProposal",
        value
      };
    },
    updateDaoConfig(value: MsgUpdateDaoConfig) {
      return {
        typeUrl: "/bze.dao.MsgUpdateDaoConfig",
        value
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/bze.dao.MsgUpdateMetadata",
        value
      };
    },
    updateElectorate(value: MsgUpdateElectorate) {
      return {
        typeUrl: "/bze.dao.MsgUpdateElectorate",
        value
      };
    },
    updateMembers(value: MsgUpdateMembers) {
      return {
        typeUrl: "/bze.dao.MsgUpdateMembers",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bze.dao.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createDao(value: MsgCreateDao) {
      return {
        typeUrl: "/bze.dao.MsgCreateDao",
        value: MsgCreateDao.fromPartial(value)
      };
    },
    adminExecute(value: MsgAdminExecute) {
      return {
        typeUrl: "/bze.dao.MsgAdminExecute",
        value: MsgAdminExecute.fromPartial(value)
      };
    },
    nominateAdmin(value: MsgNominateAdmin) {
      return {
        typeUrl: "/bze.dao.MsgNominateAdmin",
        value: MsgNominateAdmin.fromPartial(value)
      };
    },
    acceptAdminNomination(value: MsgAcceptAdminNomination) {
      return {
        typeUrl: "/bze.dao.MsgAcceptAdminNomination",
        value: MsgAcceptAdminNomination.fromPartial(value)
      };
    },
    withdrawAdminNomination(value: MsgWithdrawAdminNomination) {
      return {
        typeUrl: "/bze.dao.MsgWithdrawAdminNomination",
        value: MsgWithdrawAdminNomination.fromPartial(value)
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/bze.dao.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/bze.dao.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/bze.dao.MsgCancelProposal",
        value: MsgCancelProposal.fromPartial(value)
      };
    },
    settleProposal(value: MsgSettleProposal) {
      return {
        typeUrl: "/bze.dao.MsgSettleProposal",
        value: MsgSettleProposal.fromPartial(value)
      };
    },
    cleanupProposal(value: MsgCleanupProposal) {
      return {
        typeUrl: "/bze.dao.MsgCleanupProposal",
        value: MsgCleanupProposal.fromPartial(value)
      };
    },
    updateDaoConfig(value: MsgUpdateDaoConfig) {
      return {
        typeUrl: "/bze.dao.MsgUpdateDaoConfig",
        value: MsgUpdateDaoConfig.fromPartial(value)
      };
    },
    updateMetadata(value: MsgUpdateMetadata) {
      return {
        typeUrl: "/bze.dao.MsgUpdateMetadata",
        value: MsgUpdateMetadata.fromPartial(value)
      };
    },
    updateElectorate(value: MsgUpdateElectorate) {
      return {
        typeUrl: "/bze.dao.MsgUpdateElectorate",
        value: MsgUpdateElectorate.fromPartial(value)
      };
    },
    updateMembers(value: MsgUpdateMembers) {
      return {
        typeUrl: "/bze.dao.MsgUpdateMembers",
        value: MsgUpdateMembers.fromPartial(value)
      };
    }
  }
};