# Changelog

## v4.0.0

Protobuf files compatible with **BZE v8.3.0**. This is a breaking change release: modules the chain removed are gone, some tradebin fields were renamed, and the cosmos-sdk and ibc-go protos now follow the versions the chain runs (cosmos-sdk v0.53.8, ibc-go v10.7.0).

### Breaking Changes

- **Removed `cosmos.group`** (`cosmos/group/v1` and its module config). The chain no longer runs `x/group` or `x/nft` and rejects their messages.
- **TradeBin: order queue removed.** `QueueMessage` and the genesis field `queue_message_list` are gone. `OrderCreateMessageEvent` and `OrderCancelMessageEvent` are removed.
- **TradeBin: renamed v2 params.** `orderBookExtraGasWindow` → `priceLevelOwnersWindow`, `orderBookQueueExtraGas` → `priceLevelExtraGas`, `orderBookPerBlockMessages` → `maxFillsPerOrder`; `orderBookQueueMessageScanExtraGas` (field 12) is removed.
- **TradeBin: order events.** `message_id` is replaced by `order_id` on the order events.
- **IBC transfer:** `MsgTransfer.use_aliasing` is gone (not part of ibc-go v10.7.0).
- **Rate limiting:** ibc-go's `ibc.applications.rate_limiting.v1` package is replaced by `ratelimit.v1`, the ibc-apps rate-limiting module the chain runs. ibc-go's `packet_forward_middleware` protos are removed too.
- cosmos-sdk protos are pinned to v0.53.8 (they previously followed `release/v0.50.x`), and ibc-go protos to v10.7.0. cosmos-sdk v0.53.8 ships no `cosmos.orm` protos, so the generated `cosmos/orm` module config and query types are removed.

### New Features

#### DAO module (`bze.dao`)
- New module: messages `MsgCreateDao`, `MsgAdminExecute`, `MsgNominateAdmin`, `MsgAcceptAdminNomination`, `MsgWithdrawAdminNomination`, `MsgSubmitProposal`, `MsgVote`, `MsgCancelProposal`, `MsgSettleProposal`, `MsgCleanupProposal`, `MsgUpdateDaoConfig`, `MsgUpdateMetadata`, `MsgUpdateElectorate`, `MsgUpdateMembers`, `MsgUpdateParams`
- Queries: `Params`, `Dao`, `DaoByAddress`, `DaoController`, `Proposal`, `Ballot`, `VotingPower`, `JoinRecord`, `Daos`, `DaosByAdmin`, `Proposals`, `Ballots`

#### Guardian module (`bze.guardian.v1`)
- New module: messages `MsgTightenRateLimit`, `MsgBlockDenom`, `MsgUnblockDenom`, `MsgDisableMessages`, `MsgHaltTradingDenoms`, `MsgHaltChain`, `MsgPauseAutomation`, `MsgResumeAutomation`, `MsgCloseChannel`, `MsgReopenChannel`, `MsgUpdateParams`
- Queries: `Params`, `BlockedDenoms`, `AutomationPaused`, `ClosedChannels`

#### Rate limiting (`ratelimit.v1`)
- Governance messages `MsgAddRateLimit`, `MsgUpdateRateLimit`, `MsgRemoveRateLimit`, `MsgResetRateLimit`
- Queries (LCD under `/Stride-Labs/ibc-rate-limiting/ratelimit/`): `AllRateLimits`, `RateLimit`, `RateLimitsByChainId`, `RateLimitsByChannelOrClientId`, `AllBlacklistedDenoms`, `AllWhitelistedAddresses`

#### TokenFactory module
- New file `bze/tokenfactory/denom_config.proto` (`DenomConfig`: `community_pool`, `transfer_fee`, `gas_surcharge`); query `DenomConfig`; `GenesisDenom.denom_config`
- `DenomAuthority.mintable`
- New messages: `MsgSetDenomConfig`, `MsgDisableMinting`, `MsgSetDenomAdmin` (governance)
- New events: `DenomConfigChangeEvent`, `DenomMintingDisabledEvent`

#### TradeBin module
- New governance message `MsgUpdatePools` (`PoolUpdate`); new event `PoolFeesUpdatedEvent`
- New query `PoolPriceAverage` and store type `PoolPriceAverage`
- New events `OrderAmendedEvent`, `OrderMessageRefundedEvent`
- `AggregatedOrder.owners`
- New v2 params `poolPriceHalfLifeBlocks`, `feeMaxPriceDrift`, `moduleMaxPriceDrift`

#### Burner module
- New params `ibc_move_max_reserve_ratio`, `ibc_move_cooldown_blocks`; store type `IbcMoveLock` and genesis field `ibc_move_locks`

#### Rewards module
- New event `TradingRewardStartEvent`; `TradingRewardDistributionEvent.unpaid_burnt`

#### TxFeeCollector module
- New events `CommunityPoolFeePaidEvent`, `GasSurchargePaidEvent`

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
