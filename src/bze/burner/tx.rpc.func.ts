//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgFundBurner, MsgStartRaffle, MsgJoinRaffle, MsgMoveIbcLockedCoins } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.burner
 * @see proto service: bze.burner.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name fundBurner
 * @package bze.burner
 * @see proto service: bze.burner.FundBurner
 */
export const fundBurner = buildTx<MsgFundBurner>({
  msg: MsgFundBurner
});
/**
 * @name startRaffle
 * @package bze.burner
 * @see proto service: bze.burner.StartRaffle
 */
export const startRaffle = buildTx<MsgStartRaffle>({
  msg: MsgStartRaffle
});
/**
 * @name joinRaffle
 * @package bze.burner
 * @see proto service: bze.burner.JoinRaffle
 */
export const joinRaffle = buildTx<MsgJoinRaffle>({
  msg: MsgJoinRaffle
});
/**
 * @name moveIbcLockedCoins
 * @package bze.burner
 * @see proto service: bze.burner.MoveIbcLockedCoins
 */
export const moveIbcLockedCoins = buildTx<MsgMoveIbcLockedCoins>({
  msg: MsgMoveIbcLockedCoins
});