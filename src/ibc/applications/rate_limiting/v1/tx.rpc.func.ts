//@ts-nocheck
import { buildTx } from "../../../../helper-func-types";
import { MsgAddRateLimit, MsgUpdateRateLimit, MsgRemoveRateLimit, MsgResetRateLimit } from "./tx";
/**
 * Gov tx to add a new rate limit
 * @name addRateLimit
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.AddRateLimit
 */
export const addRateLimit = buildTx<MsgAddRateLimit>({
  msg: MsgAddRateLimit
});
/**
 * Gov tx to update an existing rate limit
 * @name updateRateLimit
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.UpdateRateLimit
 */
export const updateRateLimit = buildTx<MsgUpdateRateLimit>({
  msg: MsgUpdateRateLimit
});
/**
 * Gov tx to remove a rate limit
 * @name removeRateLimit
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.RemoveRateLimit
 */
export const removeRateLimit = buildTx<MsgRemoveRateLimit>({
  msg: MsgRemoveRateLimit
});
/**
 * Gov tx to reset the flow on a rate limit
 * @name resetRateLimit
 * @package ibc.applications.rate_limiting.v1
 * @see proto service: ibc.applications.rate_limiting.v1.ResetRateLimit
 */
export const resetRateLimit = buildTx<MsgResetRateLimit>({
  msg: MsgResetRateLimit
});