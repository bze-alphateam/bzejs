//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgAddArticle, MsgPayPublisherRespect, MsgAcceptDomain, MsgSavePublisher } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name addArticle
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.AddArticle
 */
export const addArticle = buildTx<MsgAddArticle>({
  msg: MsgAddArticle
});
/**
 * @name payPublisherRespect
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.PayPublisherRespect
 */
export const payPublisherRespect = buildTx<MsgPayPublisherRespect>({
  msg: MsgPayPublisherRespect
});
/**
 * @name acceptDomain
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.AcceptDomain
 */
export const acceptDomain = buildTx<MsgAcceptDomain>({
  msg: MsgAcceptDomain
});
/**
 * @name savePublisher
 * @package bze.cointrunk
 * @see proto service: bze.cointrunk.SavePublisher
 */
export const savePublisher = buildTx<MsgSavePublisher>({
  msg: MsgSavePublisher
});