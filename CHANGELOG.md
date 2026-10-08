# Changelog

## v3.2.0

Protobuf files compatible with **BZE v8.2.0**. Additive release: no existing type or field changed meaning, so v3.1.0 consumers upgrade without code changes.

### New Features

#### Rewards module: Denom Rewards
- New messages: `MsgCreateDenomReward`, `MsgCreateDenomRewardSchedule`, `MsgUpdateDenomRewardSchedule`, `MsgDistributeDenomRewards`, `MsgJoinDenomReward`, `MsgClaimDenomRewards`, `MsgExitDenomReward`
- New message: `MsgDeleteStakingReward` (delete a finished, emptied staking reward)
- New queries: `DenomReward`, `DenomRewardAll`, `DenomRewardPrizes`, `DenomRewardSchedules`, `DenomRewardParticipant`, `DenomRewardParticipations`. Over REST the denom is passed as the `denom` query parameter
- New store types: `DenomReward`, `DenomRewardPrize`, `DenomRewardParticipant`, `DenomRewardParticipantIndex`, `DenomRewardSchedule` (+ genesis lists, fields 17-21)
- New params: `createDenomRewardFee`, `createDenomRewardPrizeFee`, `addDenomRewardScheduleFee`, `maxPrizeDenomsPerDr`, `extraGasForDenomExit`, `denomRewardLock`, `denomRewardMinStake`
- New events: `DenomRewardCreateEvent`, `DenomRewardJoinEvent`, `DenomRewardExitEvent`, `DenomRewardClaimEvent`, `DenomRewardPrizeCreateEvent`, `DenomRewardScheduleCreateEvent`, `DenomRewardScheduleUpdateEvent`, `DenomRewardScheduleFinishEvent`, `DenomRewardDistributionEvent`

#### TokenFactory module: denom branding
- New file `bze/tokenfactory/denom_branding.proto` (`DenomBranding`, `DenomBrandingRecord`, `BrandingColors`)
- New message: `MsgSetDenomBranding`; new queries: `DenomBranding`, `AllDenomBranding`; new event: `DenomBrandingChangeEvent`; genesis field `denom_brandings`

#### TradeBin module: halted denoms
- New governance messages: `MsgHaltDenoms`, `MsgUnhaltDenoms`; new queries: `HaltedDenoms`, `DenomHalted`; new events: `DenomHaltedEvent`, `DenomUnhaltedEvent`; genesis field `halted_denoms`
- Order events (`OrderCreateMessageEvent`, `OrderCancelMessageEvent`, `OrderExecutedEvent`, `OrderCanceledEvent`, `OrderSavedEvent`) carry a new `message_id` field

#### TxFeeCollector module
- New param `BlockedIbcInbound` (list of `BlockedIbcTransfer{channel_id, base_denom}`)
- New file `bze/txfeecollector/events.proto` with `BlockedIbcInboundEvent`

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
