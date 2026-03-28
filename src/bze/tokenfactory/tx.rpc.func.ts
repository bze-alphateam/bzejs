//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name createDenom
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.CreateDenom
 */
export const createDenom = buildTx<MsgCreateDenom>({
  msg: MsgCreateDenom
});
/**
 * @name mint
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.Mint
 */
export const mint = buildTx<MsgMint>({
  msg: MsgMint
});
/**
 * @name burn
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.Burn
 */
export const burn = buildTx<MsgBurn>({
  msg: MsgBurn
});
/**
 * @name changeAdmin
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.ChangeAdmin
 */
export const changeAdmin = buildTx<MsgChangeAdmin>({
  msg: MsgChangeAdmin
});
/**
 * @name setDenomMetadata
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.SetDenomMetadata
 */
export const setDenomMetadata = buildTx<MsgSetDenomMetadata>({
  msg: MsgSetDenomMetadata
});