export const AMINO_MAP = {
  // PUT YOUR AMINO names here...

  // Staking
  '/cosmos.staking.v1beta1.MsgCreateValidator': {
    aminoType: 'cosmos-sdk/MsgCreateValidator'
  },
  '/cosmos.staking.v1beta1.MsgEditValidator': {
    aminoType: 'cosmos-sdk/MsgEditValidator'
  },
  '/cosmos.staking.v1beta1.MsgDelegate': {
    aminoType: 'cosmos-sdk/MsgDelegate'
  },
  '/cosmos.staking.v1beta1.MsgUndelegate': {
    aminoType: 'cosmos-sdk/MsgUndelegate'
  },
  '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
    aminoType: 'cosmos-sdk/MsgBeginRedelegate'
  },
  '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation': {
    aminoType: 'cosmos-sdk/MsgCancelUnbondingDelegation'
  },
  '/cosmos.staking.v1beta1.MsgUpdateParams': {
    aminoType: 'cosmos-sdk/x/staking/MsgUpdateParams'
  },

  // IBC
  '/ibc.applications.transfer.v1.MsgTransfer': {
    aminoType: 'cosmos-sdk/MsgTransfer'
  },
  '/bze.tradebin.v1.MsgCancelOrder': {
    aminoType: 'tradebin/CancelOrder'
  },
  '/bze.tradebin.v1.MsgCreateMarket': {
    aminoType: 'tradebin/CreateMarket'
  },
  '/bze.tradebin.v1.MsgCreateOrder': {
    aminoType: 'tradebin/CreateOrder'
  },
  '/bze.tokenfactory.v1.MsgCreateDenom': {
    aminoType: 'tokenfactory/CreateDenom'
  },
  '/bze.tokenfactory.v1.MsgMint': {
    aminoType: 'tokenfactory/Mint'
  },
  '/bze.tokenfactory.v1.MsgBurn': {
    aminoType: 'tokenfactory/Burn'
  },
  '/bze.tokenfactory.v1.MsgChangeAdmin': {
    aminoType: 'tokenfactory/ChangeAdmin'
  },
  '/bze.tokenfactory.v1.MsgSetDenomMetadataAmino': {
    aminoType: 'tokenfactory/SetDenomMetadata'
  },
  '/bze.v1.rewards.MsgUpdateStakingReward': {
    aminoType: 'rewards/UpdateStakingReward'
  },
  '/bze.v1.rewards.MsgCreateStakingReward': {
    aminoType: 'rewards/CreateStakingReward'
  },
  '/bze.v1.rewards.MsgCreateTradingReward': {
    aminoType: 'rewards/CreateTradingReward'
  },
  '/bze.v1.rewards.MsgJoinStaking': {
    aminoType: 'rewards/JoinStaking'
  },
  '/bze.v1.rewards.MsgExitStaking': {
    aminoType: 'rewards/ExitStaking'
  },
  '/bze.v1.rewards.MsgClaimStakingRewards': {
    aminoType: 'rewards/ClaimStakingRewards'
  },
  '/bze.v1.rewards.MsgDistributeStakingRewards': {
    aminoType: 'rewards/DistributeStakingRewards'
  },
  '/bze.cointrunk.v1.MsgAddArticle': {
    aminoType: 'cointrunk/AddArticle'
  },
  '/bze.cointrunk.v1.MsgPayPublisherRespect': {
    aminoType: 'cointrunk/PayPublisherRespect'
  },
  '/bze.burner.v1.MsgFundBurner': {
    aminoType: 'burner/FundBurner'
  },
  '/bze.burner.v1.MsgStartRaffle': {
    aminoType: 'burner/StartRaffle'
  },
  '/bze.burner.v1.MsgJoinRaffle': {
    aminoType: 'burner/JoinRaffle'
  }
};
