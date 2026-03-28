//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.txfeecollector
 * @see proto service: bze.txfeecollector.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});