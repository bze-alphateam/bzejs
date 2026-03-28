//@ts-nocheck
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgCreateMarket, MsgCreateOrder, MsgCancelOrder, MsgFillOrders, MsgCreateLiquidityPool, MsgAddLiquidity, MsgRemoveLiquidity, MsgMultiSwap } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package bze.tradebin
 * @see proto service: bze.tradebin.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name createMarket
 * @package bze.tradebin
 * @see proto service: bze.tradebin.CreateMarket
 */
export const createMarket = buildTx<MsgCreateMarket>({
  msg: MsgCreateMarket
});
/**
 * @name createOrder
 * @package bze.tradebin
 * @see proto service: bze.tradebin.CreateOrder
 */
export const createOrder = buildTx<MsgCreateOrder>({
  msg: MsgCreateOrder
});
/**
 * @name cancelOrder
 * @package bze.tradebin
 * @see proto service: bze.tradebin.CancelOrder
 */
export const cancelOrder = buildTx<MsgCancelOrder>({
  msg: MsgCancelOrder
});
/**
 * @name fillOrders
 * @package bze.tradebin
 * @see proto service: bze.tradebin.FillOrders
 */
export const fillOrders = buildTx<MsgFillOrders>({
  msg: MsgFillOrders
});
/**
 * @name createLiquidityPool
 * @package bze.tradebin
 * @see proto service: bze.tradebin.CreateLiquidityPool
 */
export const createLiquidityPool = buildTx<MsgCreateLiquidityPool>({
  msg: MsgCreateLiquidityPool
});
/**
 * @name addLiquidity
 * @package bze.tradebin
 * @see proto service: bze.tradebin.AddLiquidity
 */
export const addLiquidity = buildTx<MsgAddLiquidity>({
  msg: MsgAddLiquidity
});
/**
 * @name removeLiquidity
 * @package bze.tradebin
 * @see proto service: bze.tradebin.RemoveLiquidity
 */
export const removeLiquidity = buildTx<MsgRemoveLiquidity>({
  msg: MsgRemoveLiquidity
});
/**
 * @name multiSwap
 * @package bze.tradebin
 * @see proto service: bze.tradebin.MultiSwap
 */
export const multiSwap = buildTx<MsgMultiSwap>({
  msg: MsgMultiSwap
});