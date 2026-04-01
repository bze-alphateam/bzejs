# Changelog

## v3.0.0

Protobuf files compatible with **BZE v8.1.0**. This is a breaking change release.

### Breaking Changes

#### TradeBin: Params migrated to v2 package (`bze.tradebin.v2`)
- `genesis.proto`, `query.proto`, and `tx.proto` now import `bze/tradebin/v2/params.proto` instead of `bze/tradebin/params.proto`
- The `Params` type in genesis, query response, and tx messages changed from `Params` to `bze.tradebin.v2.Params`
- **v2 Params** migrates fee fields (`createMarketFee`, `marketMakerFee`, `marketTakerFee`) from `string` to `cosmos.base.v1beta1.Coin` type
- New file: `bze/tradebin/v2/params.proto` (package `bze.tradebin.v2`, go_package `bze/x/tradebin/v2types`)

#### TxFeeCollector: Params now has fields
- `Params` was previously empty; now contains:
  - `ValidatorMinGasFee` (`cosmos.base.v1beta1.DecCoin`) - minimum gas fee for validators
  - `MaxBalanceIterations` (`uint64`) - max balance iterations

### New Features

#### Burner module
- New messages: `PeriodicBurnQueue` and `RaffleCleanupQueue` in `burned_coins.proto`
- Genesis state extended with `periodic_burn_queue` (field 7) and `raffle_cleanup_queue` (field 8)
- New RPC: `MoveIbcLockedCoins` with `MsgMoveIbcLockedCoins` / `MsgMoveIbcLockedCoinsResponse` in `tx.proto`

#### Rewards module
- New messages in `store.proto`: `UnlockParticipantsQueue`, `StakingRewardsDistributionQueue`, `TradingRewardExpirationQueue`
- Genesis state extended with `unlock_participants_queue` (field 14), `staking_rewards_distribution_queue` (field 15), `trading_reward_expiration_queue` (field 16)
- New param: `extraGasForExitStake` (`uint64`) in `params.proto`

#### TradeBin module
- New params (fields 7-12 in `params.proto`): `orderBookExtraGasWindow`, `orderBookQueueExtraGas`, `fillOrdersExtraGas`, `minNativeLiquidityForModuleSwap`, `orderBookPerBlockMessages`, `orderBookQueueMessageScanExtraGas`
- Genesis state extended with `liquidity_pools` (field 9)
