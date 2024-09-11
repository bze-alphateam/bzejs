import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const bzeAminoConverters: {
    "/bze.tradebin.v1.MsgCreateMarket": {
        aminoType: string;
        toAmino: ({ creator, base, quote }: import("../beezee/tradebin/tx").MsgCreateMarket) => {
            creator: string;
            base: string;
            quote: string;
        };
        fromAmino: ({ creator, base, quote }: {
            creator: string;
            base: string;
            quote: string;
        }) => import("../beezee/tradebin/tx").MsgCreateMarket;
    };
    "/bze.tradebin.v1.MsgCreateOrder": {
        aminoType: string;
        toAmino: ({ creator, orderType, amount, price, marketId }: import("../beezee/tradebin/tx").MsgCreateOrder) => {
            creator: string;
            order_type: string;
            amount: string;
            price: string;
            marketId: string;
        };
        fromAmino: ({ creator, order_type, amount, price, marketId }: {
            creator: string;
            order_type: string;
            amount: string;
            price: string;
            marketId: string;
        }) => import("../beezee/tradebin/tx").MsgCreateOrder;
    };
    "/bze.tradebin.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ creator, marketId, orderId, orderType }: import("../beezee/tradebin/tx").MsgCancelOrder) => {
            creator: string;
            marketId: string;
            orderId: string;
            order_type: string;
        };
        fromAmino: ({ creator, marketId, orderId, order_type }: {
            creator: string;
            marketId: string;
            orderId: string;
            order_type: string;
        }) => import("../beezee/tradebin/tx").MsgCancelOrder;
    };
    "/bze.tokenfactory.v1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ creator, subdenom }: import("../beezee/tokenfactory/tx").MsgCreateDenom) => {
            creator: string;
            subdenom: string;
        };
        fromAmino: ({ creator, subdenom }: {
            creator: string;
            subdenom: string;
        }) => import("../beezee/tokenfactory/tx").MsgCreateDenom;
    };
    "/bze.tokenfactory.v1.MsgMint": {
        aminoType: string;
        toAmino: ({ creator, coins }: import("../beezee/tokenfactory/tx").MsgMint) => {
            creator: string;
            coins: string;
        };
        fromAmino: ({ creator, coins }: {
            creator: string;
            coins: string;
        }) => import("../beezee/tokenfactory/tx").MsgMint;
    };
    "/bze.tokenfactory.v1.MsgBurn": {
        aminoType: string;
        toAmino: ({ creator, coins }: import("../beezee/tokenfactory/tx").MsgBurn) => {
            creator: string;
            coins: string;
        };
        fromAmino: ({ creator, coins }: {
            creator: string;
            coins: string;
        }) => import("../beezee/tokenfactory/tx").MsgBurn;
    };
    "/bze.tokenfactory.v1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ creator, denom, newAdmin }: import("../beezee/tokenfactory/tx").MsgChangeAdmin) => {
            creator: string;
            denom: string;
            newAdmin: string;
        };
        fromAmino: ({ creator, denom, newAdmin }: {
            creator: string;
            denom: string;
            newAdmin: string;
        }) => import("../beezee/tokenfactory/tx").MsgChangeAdmin;
    };
    "/bze.tokenfactory.v1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ creator, metadata }: import("../beezee/tokenfactory/tx").MsgSetDenomMetadata) => {
            creator: string;
            metadata: {
                description: string;
                denom_units: {
                    denom: string;
                    exponent: number;
                    aliases: string[];
                }[];
                base: string;
                display: string;
                name: string;
                symbol: string;
                uri: string;
                uri_hash: string;
            };
        };
        fromAmino: ({ creator, metadata }: {
            creator: string;
            metadata: {
                description: string;
                denom_units: {
                    denom: string;
                    exponent: number;
                    aliases: string[];
                }[];
                base: string;
                display: string;
                name: string;
                symbol: string;
                uri: string;
                uri_hash: string;
            };
        }) => import("../beezee/tokenfactory/tx").MsgSetDenomMetadata;
    };
    "/bze.v1.rewards.MsgCreateStakingReward": {
        aminoType: string;
        toAmino: ({ creator, prizeAmount, prizeDenom, stakingDenom, duration, minStake, lock }: import("../beezee/rewards/tx").MsgCreateStakingReward) => {
            creator: string;
            prize_amount: string;
            prize_denom: string;
            staking_denom: string;
            duration: string;
            min_stake: string;
            lock: string;
        };
        fromAmino: ({ creator, prize_amount, prize_denom, staking_denom, duration, min_stake, lock }: {
            creator: string;
            prize_amount: string;
            prize_denom: string;
            staking_denom: string;
            duration: string;
            min_stake: string;
            lock: string;
        }) => import("../beezee/rewards/tx").MsgCreateStakingReward;
    };
    "/bze.v1.rewards.MsgUpdateStakingReward": {
        aminoType: string;
        toAmino: ({ creator, rewardId, duration }: import("../beezee/rewards/tx").MsgUpdateStakingReward) => {
            creator: string;
            reward_id: string;
            duration: string;
        };
        fromAmino: ({ creator, reward_id, duration }: {
            creator: string;
            reward_id: string;
            duration: string;
        }) => import("../beezee/rewards/tx").MsgUpdateStakingReward;
    };
    "/bze.v1.rewards.MsgCreateTradingReward": {
        aminoType: string;
        toAmino: ({ creator, prizeAmount, prizeDenom, duration, marketId, slots }: import("../beezee/rewards/tx").MsgCreateTradingReward) => {
            creator: string;
            prize_amount: string;
            prize_denom: string;
            duration: string;
            market_id: string;
            slots: string;
        };
        fromAmino: ({ creator, prize_amount, prize_denom, duration, market_id, slots }: {
            creator: string;
            prize_amount: string;
            prize_denom: string;
            duration: string;
            market_id: string;
            slots: string;
        }) => import("../beezee/rewards/tx").MsgCreateTradingReward;
    };
    "/bze.v1.rewards.MsgJoinStaking": {
        aminoType: string;
        toAmino: ({ creator, rewardId, amount }: import("../beezee/rewards/tx").MsgJoinStaking) => {
            creator: string;
            reward_id: string;
            amount: string;
        };
        fromAmino: ({ creator, reward_id, amount }: {
            creator: string;
            reward_id: string;
            amount: string;
        }) => import("../beezee/rewards/tx").MsgJoinStaking;
    };
    "/bze.v1.rewards.MsgExitStaking": {
        aminoType: string;
        toAmino: ({ creator, rewardId }: import("../beezee/rewards/tx").MsgExitStaking) => {
            creator: string;
            rewardId: string;
        };
        fromAmino: ({ creator, rewardId }: {
            creator: string;
            rewardId: string;
        }) => import("../beezee/rewards/tx").MsgExitStaking;
    };
    "/bze.v1.rewards.MsgClaimStakingRewards": {
        aminoType: string;
        toAmino: ({ creator, rewardId }: import("../beezee/rewards/tx").MsgClaimStakingRewards) => {
            creator: string;
            rewardId: string;
        };
        fromAmino: ({ creator, rewardId }: {
            creator: string;
            rewardId: string;
        }) => import("../beezee/rewards/tx").MsgClaimStakingRewards;
    };
    "/bze.v1.rewards.MsgDistributeStakingRewards": {
        aminoType: string;
        toAmino: ({ creator, rewardId, amount }: import("../beezee/rewards/tx").MsgDistributeStakingRewards) => {
            creator: string;
            rewardId: string;
            amount: string;
        };
        fromAmino: ({ creator, rewardId, amount }: {
            creator: string;
            rewardId: string;
            amount: string;
        }) => import("../beezee/rewards/tx").MsgDistributeStakingRewards;
    };
    "/bze.cointrunk.v1.MsgAddArticle": {
        aminoType: string;
        toAmino: ({ publisher, title, url, picture }: import("../beezee/cointrunk/tx").MsgAddArticle) => {
            publisher: string;
            title: string;
            url: string;
            picture: string;
        };
        fromAmino: ({ publisher, title, url, picture }: {
            publisher: string;
            title: string;
            url: string;
            picture: string;
        }) => import("../beezee/cointrunk/tx").MsgAddArticle;
    };
    "/bze.cointrunk.v1.MsgPayPublisherRespect": {
        aminoType: string;
        toAmino: ({ creator, address, amount }: import("../beezee/cointrunk/tx").MsgPayPublisherRespect) => {
            creator: string;
            address: string;
            amount: string;
        };
        fromAmino: ({ creator, address, amount }: {
            creator: string;
            address: string;
            amount: string;
        }) => import("../beezee/cointrunk/tx").MsgPayPublisherRespect;
    };
    "/bze.burner.v1.MsgFundBurner": {
        aminoType: string;
        toAmino: ({ creator, amount }: import("../beezee/burner/tx").MsgFundBurner) => {
            creator: string;
            amount: string;
        };
        fromAmino: ({ creator, amount }: {
            creator: string;
            amount: string;
        }) => import("../beezee/burner/tx").MsgFundBurner;
    };
    "/bze.burner.v1.MsgStartRaffle": {
        aminoType: string;
        toAmino: ({ creator, pot, duration, chances, ratio, ticketPrice, denom }: import("../beezee/burner/tx").MsgStartRaffle) => {
            creator: string;
            pot: string;
            duration: string;
            chances: string;
            ratio: string;
            ticket_price: string;
            denom: string;
        };
        fromAmino: ({ creator, pot, duration, chances, ratio, ticket_price, denom }: {
            creator: string;
            pot: string;
            duration: string;
            chances: string;
            ratio: string;
            ticket_price: string;
            denom: string;
        }) => import("../beezee/burner/tx").MsgStartRaffle;
    };
    "/bze.burner.v1.MsgJoinRaffle": {
        aminoType: string;
        toAmino: ({ creator, denom }: import("../beezee/burner/tx").MsgJoinRaffle) => {
            creator: string;
            denom: string;
        };
        fromAmino: ({ creator, denom }: {
            creator: string;
            denom: string;
        }) => import("../beezee/burner/tx").MsgJoinRaffle;
    };
};
export declare const bzeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningBzeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningBzeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
