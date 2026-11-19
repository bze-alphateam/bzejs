//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgSetDenomBranding, MsgSetDenomAdmin, MsgDisableMinting, MsgSetDenomConfig } from "./tx";
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
/**
 * @name setDenomBranding
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.SetDenomBranding
 */
export const setDenomBranding = buildTx<MsgSetDenomBranding>({
  msg: MsgSetDenomBranding
});
/**
 * SetDenomAdmin assigns a new admin to a factory denom.
 * Governance only (authority = the x/gov module account).
 * @name setDenomAdmin
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.SetDenomAdmin
 */
export const setDenomAdmin = buildTx<MsgSetDenomAdmin>({
  msg: MsgSetDenomAdmin
});
/**
 * DisableMinting turns minting off for good on a factory denom.
 * Admin only and irreversible: no message turns it back on.
 * @name disableMinting
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.DisableMinting
 */
export const disableMinting = buildTx<MsgDisableMinting>({
  msg: MsgDisableMinting
});
/**
 * SetDenomConfig replaces the whole configuration of a factory denom.
 * Admin only. Every field must be sent.
 * @name setDenomConfig
 * @package bze.tokenfactory
 * @see proto service: bze.tokenfactory.SetDenomConfig
 */
export const setDenomConfig = buildTx<MsgSetDenomConfig>({
  msg: MsgSetDenomConfig
});