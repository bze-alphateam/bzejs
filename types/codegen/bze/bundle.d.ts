import * as _0 from "../beezee/burner/burn_coins_proposal";
import * as _1 from "../beezee/burner/burned_coins";
import * as _2 from "../beezee/burner/events";
import * as _3 from "../beezee/burner/genesis";
import * as _4 from "../beezee/burner/params";
import * as _5 from "../beezee/burner/query";
import * as _6 from "../beezee/burner/tx";
import * as _7 from "../beezee/cointrunk/accepted_domain_proposal";
import * as _8 from "../beezee/cointrunk/accepted_domain";
import * as _9 from "../beezee/cointrunk/anon_articles_counter";
import * as _10 from "../beezee/cointrunk/article";
import * as _11 from "../beezee/cointrunk/events";
import * as _12 from "../beezee/cointrunk/genesis";
import * as _13 from "../beezee/cointrunk/params";
import * as _14 from "../beezee/cointrunk/publisher_proposal";
import * as _15 from "../beezee/cointrunk/publisher";
import * as _16 from "../beezee/cointrunk/query";
import * as _17 from "../beezee/cointrunk/tx";
import * as _130 from "../beezee/burner/query.lcd";
import * as _131 from "../beezee/cointrunk/query.lcd";
import * as _132 from "../beezee/burner/query.rpc.Query";
import * as _133 from "../beezee/cointrunk/query.rpc.Query";
import * as _134 from "../beezee/burner/tx.rpc.msg";
import * as _135 from "../beezee/cointrunk/tx.rpc.msg";
export declare namespace bze {
    namespace burner {
        const v1: {
            MsgClientImpl: typeof _134.MsgClientImpl;
            QueryClientImpl: typeof _132.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                allBurnedCoins(request?: _5.QueryAllBurnedCoinsRequest): Promise<_5.QueryAllBurnedCoinsResponse>;
            };
            LCDQueryClient: typeof _130.LCDQueryClient;
            MsgFundBurner: {
                encode(message: _6.MsgFundBurner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgFundBurner;
                fromJSON(object: any): _6.MsgFundBurner;
                toJSON(message: _6.MsgFundBurner): unknown;
                fromPartial(object: Partial<_6.MsgFundBurner>): _6.MsgFundBurner;
            };
            MsgFundBurnerResponse: {
                encode(_: _6.MsgFundBurnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgFundBurnerResponse;
                fromJSON(_: any): _6.MsgFundBurnerResponse;
                toJSON(_: _6.MsgFundBurnerResponse): unknown;
                fromPartial(_: Partial<_6.MsgFundBurnerResponse>): _6.MsgFundBurnerResponse;
            };
            QueryParamsRequest: {
                encode(_: _5.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsRequest;
                fromJSON(_: any): _5.QueryParamsRequest;
                toJSON(_: _5.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _5.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsResponse;
                fromJSON(object: any): _5.QueryParamsResponse;
                toJSON(message: _5.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
            };
            QueryAllBurnedCoinsRequest: {
                encode(message: _5.QueryAllBurnedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAllBurnedCoinsRequest;
                fromJSON(object: any): _5.QueryAllBurnedCoinsRequest;
                toJSON(message: _5.QueryAllBurnedCoinsRequest): unknown;
                fromPartial(object: Partial<_5.QueryAllBurnedCoinsRequest>): _5.QueryAllBurnedCoinsRequest;
            };
            QueryAllBurnedCoinsResponse: {
                encode(message: _5.QueryAllBurnedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAllBurnedCoinsResponse;
                fromJSON(object: any): _5.QueryAllBurnedCoinsResponse;
                toJSON(message: _5.QueryAllBurnedCoinsResponse): unknown;
                fromPartial(object: Partial<_5.QueryAllBurnedCoinsResponse>): _5.QueryAllBurnedCoinsResponse;
            };
            Params: {
                encode(_: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Params;
                fromJSON(_: any): _4.Params;
                toJSON(_: _4.Params): unknown;
                fromPartial(_: Partial<_4.Params>): _4.Params;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromJSON(object: any): _3.GenesisState;
                toJSON(message: _3.GenesisState): unknown;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            };
            CoinsBurnedEvent: {
                encode(message: _2.CoinsBurnedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.CoinsBurnedEvent;
                fromJSON(object: any): _2.CoinsBurnedEvent;
                toJSON(message: _2.CoinsBurnedEvent): unknown;
                fromPartial(object: Partial<_2.CoinsBurnedEvent>): _2.CoinsBurnedEvent;
            };
            FundBurnerEvent: {
                encode(message: _2.FundBurnerEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.FundBurnerEvent;
                fromJSON(object: any): _2.FundBurnerEvent;
                toJSON(message: _2.FundBurnerEvent): unknown;
                fromPartial(object: Partial<_2.FundBurnerEvent>): _2.FundBurnerEvent;
            };
            BurnedCoins: {
                encode(message: _1.BurnedCoins, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BurnedCoins;
                fromJSON(object: any): _1.BurnedCoins;
                toJSON(message: _1.BurnedCoins): unknown;
                fromPartial(object: Partial<_1.BurnedCoins>): _1.BurnedCoins;
            };
            BurnCoinsProposal: {
                encode(message: _0.BurnCoinsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BurnCoinsProposal;
                fromJSON(object: any): _0.BurnCoinsProposal;
                toJSON(message: _0.BurnCoinsProposal): unknown;
                fromPartial(object: Partial<_0.BurnCoinsProposal>): _0.BurnCoinsProposal;
            };
        };
    }
    namespace cointrunk {
        const v1: {
            MsgClientImpl: typeof _135.MsgClientImpl;
            QueryClientImpl: typeof _133.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                acceptedDomain(request?: _16.QueryAcceptedDomainRequest): Promise<_16.QueryAcceptedDomainResponse>;
                publisher(request?: _16.QueryPublisherRequest): Promise<_16.QueryPublisherResponse>;
                publisherByIndex(request: _16.QueryPublisherByIndexRequest): Promise<_16.QueryPublisherByIndexResponse>;
                allArticles(request?: _16.QueryAllArticlesRequest): Promise<_16.QueryAllArticlesResponse>;
                allAnonArticlesCounters(request?: _16.QueryAllAnonArticlesCountersRequest): Promise<_16.QueryAllAnonArticlesCountersResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            MsgAddArticle: {
                encode(message: _17.MsgAddArticle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgAddArticle;
                fromJSON(object: any): _17.MsgAddArticle;
                toJSON(message: _17.MsgAddArticle): unknown;
                fromPartial(object: Partial<_17.MsgAddArticle>): _17.MsgAddArticle;
            };
            MsgAddArticleResponse: {
                encode(_: _17.MsgAddArticleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgAddArticleResponse;
                fromJSON(_: any): _17.MsgAddArticleResponse;
                toJSON(_: _17.MsgAddArticleResponse): unknown;
                fromPartial(_: Partial<_17.MsgAddArticleResponse>): _17.MsgAddArticleResponse;
            };
            MsgPayPublisherRespect: {
                encode(message: _17.MsgPayPublisherRespect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgPayPublisherRespect;
                fromJSON(object: any): _17.MsgPayPublisherRespect;
                toJSON(message: _17.MsgPayPublisherRespect): unknown;
                fromPartial(object: Partial<_17.MsgPayPublisherRespect>): _17.MsgPayPublisherRespect;
            };
            MsgPayPublisherRespectResponse: {
                encode(message: _17.MsgPayPublisherRespectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgPayPublisherRespectResponse;
                fromJSON(object: any): _17.MsgPayPublisherRespectResponse;
                toJSON(message: _17.MsgPayPublisherRespectResponse): unknown;
                fromPartial(object: Partial<_17.MsgPayPublisherRespectResponse>): _17.MsgPayPublisherRespectResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromJSON(_: any): _16.QueryParamsRequest;
                toJSON(_: _16.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromJSON(object: any): _16.QueryParamsResponse;
                toJSON(message: _16.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
            };
            QueryAcceptedDomainRequest: {
                encode(message: _16.QueryAcceptedDomainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAcceptedDomainRequest;
                fromJSON(object: any): _16.QueryAcceptedDomainRequest;
                toJSON(message: _16.QueryAcceptedDomainRequest): unknown;
                fromPartial(object: Partial<_16.QueryAcceptedDomainRequest>): _16.QueryAcceptedDomainRequest;
            };
            QueryAcceptedDomainResponse: {
                encode(message: _16.QueryAcceptedDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAcceptedDomainResponse;
                fromJSON(object: any): _16.QueryAcceptedDomainResponse;
                toJSON(message: _16.QueryAcceptedDomainResponse): unknown;
                fromPartial(object: Partial<_16.QueryAcceptedDomainResponse>): _16.QueryAcceptedDomainResponse;
            };
            QueryPublisherRequest: {
                encode(message: _16.QueryPublisherRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherRequest;
                fromJSON(object: any): _16.QueryPublisherRequest;
                toJSON(message: _16.QueryPublisherRequest): unknown;
                fromPartial(object: Partial<_16.QueryPublisherRequest>): _16.QueryPublisherRequest;
            };
            QueryPublisherResponse: {
                encode(message: _16.QueryPublisherResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherResponse;
                fromJSON(object: any): _16.QueryPublisherResponse;
                toJSON(message: _16.QueryPublisherResponse): unknown;
                fromPartial(object: Partial<_16.QueryPublisherResponse>): _16.QueryPublisherResponse;
            };
            QueryPublisherByIndexRequest: {
                encode(message: _16.QueryPublisherByIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherByIndexRequest;
                fromJSON(object: any): _16.QueryPublisherByIndexRequest;
                toJSON(message: _16.QueryPublisherByIndexRequest): unknown;
                fromPartial(object: Partial<_16.QueryPublisherByIndexRequest>): _16.QueryPublisherByIndexRequest;
            };
            QueryPublisherByIndexResponse: {
                encode(message: _16.QueryPublisherByIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherByIndexResponse;
                fromJSON(object: any): _16.QueryPublisherByIndexResponse;
                toJSON(message: _16.QueryPublisherByIndexResponse): unknown;
                fromPartial(object: Partial<_16.QueryPublisherByIndexResponse>): _16.QueryPublisherByIndexResponse;
            };
            QueryAllArticlesRequest: {
                encode(message: _16.QueryAllArticlesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllArticlesRequest;
                fromJSON(object: any): _16.QueryAllArticlesRequest;
                toJSON(message: _16.QueryAllArticlesRequest): unknown;
                fromPartial(object: Partial<_16.QueryAllArticlesRequest>): _16.QueryAllArticlesRequest;
            };
            QueryAllArticlesResponse: {
                encode(message: _16.QueryAllArticlesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllArticlesResponse;
                fromJSON(object: any): _16.QueryAllArticlesResponse;
                toJSON(message: _16.QueryAllArticlesResponse): unknown;
                fromPartial(object: Partial<_16.QueryAllArticlesResponse>): _16.QueryAllArticlesResponse;
            };
            QueryAllAnonArticlesCountersRequest: {
                encode(message: _16.QueryAllAnonArticlesCountersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllAnonArticlesCountersRequest;
                fromJSON(object: any): _16.QueryAllAnonArticlesCountersRequest;
                toJSON(message: _16.QueryAllAnonArticlesCountersRequest): unknown;
                fromPartial(object: Partial<_16.QueryAllAnonArticlesCountersRequest>): _16.QueryAllAnonArticlesCountersRequest;
            };
            QueryAllAnonArticlesCountersResponse: {
                encode(message: _16.QueryAllAnonArticlesCountersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllAnonArticlesCountersResponse;
                fromJSON(object: any): _16.QueryAllAnonArticlesCountersResponse;
                toJSON(message: _16.QueryAllAnonArticlesCountersResponse): unknown;
                fromPartial(object: Partial<_16.QueryAllAnonArticlesCountersResponse>): _16.QueryAllAnonArticlesCountersResponse;
            };
            Publisher: {
                encode(message: _15.Publisher, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Publisher;
                fromJSON(object: any): _15.Publisher;
                toJSON(message: _15.Publisher): unknown;
                fromPartial(object: Partial<_15.Publisher>): _15.Publisher;
            };
            PublisherProposal: {
                encode(message: _14.PublisherProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PublisherProposal;
                fromJSON(object: any): _14.PublisherProposal;
                toJSON(message: _14.PublisherProposal): unknown;
                fromPartial(object: Partial<_14.PublisherProposal>): _14.PublisherProposal;
            };
            PublisherRespectParams: {
                encode(message: _13.PublisherRespectParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PublisherRespectParams;
                fromJSON(object: any): _13.PublisherRespectParams;
                toJSON(message: _13.PublisherRespectParams): unknown;
                fromPartial(object: Partial<_13.PublisherRespectParams>): _13.PublisherRespectParams;
            };
            Params: {
                encode(message: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Params;
                fromJSON(object: any): _13.Params;
                toJSON(message: _13.Params): unknown;
                fromPartial(object: Partial<_13.Params>): _13.Params;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): unknown;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
            };
            ArticleAddedEvent: {
                encode(message: _11.ArticleAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ArticleAddedEvent;
                fromJSON(object: any): _11.ArticleAddedEvent;
                toJSON(message: _11.ArticleAddedEvent): unknown;
                fromPartial(object: Partial<_11.ArticleAddedEvent>): _11.ArticleAddedEvent;
            };
            PublisherAddedEvent: {
                encode(message: _11.PublisherAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PublisherAddedEvent;
                fromJSON(object: any): _11.PublisherAddedEvent;
                toJSON(message: _11.PublisherAddedEvent): unknown;
                fromPartial(object: Partial<_11.PublisherAddedEvent>): _11.PublisherAddedEvent;
            };
            PublisherUpdatedEvent: {
                encode(message: _11.PublisherUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PublisherUpdatedEvent;
                fromJSON(object: any): _11.PublisherUpdatedEvent;
                toJSON(message: _11.PublisherUpdatedEvent): unknown;
                fromPartial(object: Partial<_11.PublisherUpdatedEvent>): _11.PublisherUpdatedEvent;
            };
            AcceptedDomainAddedEvent: {
                encode(message: _11.AcceptedDomainAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.AcceptedDomainAddedEvent;
                fromJSON(object: any): _11.AcceptedDomainAddedEvent;
                toJSON(message: _11.AcceptedDomainAddedEvent): unknown;
                fromPartial(object: Partial<_11.AcceptedDomainAddedEvent>): _11.AcceptedDomainAddedEvent;
            };
            AcceptedDomainUpdatedEvent: {
                encode(message: _11.AcceptedDomainUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.AcceptedDomainUpdatedEvent;
                fromJSON(object: any): _11.AcceptedDomainUpdatedEvent;
                toJSON(message: _11.AcceptedDomainUpdatedEvent): unknown;
                fromPartial(object: Partial<_11.AcceptedDomainUpdatedEvent>): _11.AcceptedDomainUpdatedEvent;
            };
            PublisherRespectPaidEvent: {
                encode(message: _11.PublisherRespectPaidEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PublisherRespectPaidEvent;
                fromJSON(object: any): _11.PublisherRespectPaidEvent;
                toJSON(message: _11.PublisherRespectPaidEvent): unknown;
                fromPartial(object: Partial<_11.PublisherRespectPaidEvent>): _11.PublisherRespectPaidEvent;
            };
            Article: {
                encode(message: _10.Article, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Article;
                fromJSON(object: any): _10.Article;
                toJSON(message: _10.Article): unknown;
                fromPartial(object: Partial<_10.Article>): _10.Article;
            };
            AnonArticlesCounter: {
                encode(message: _9.AnonArticlesCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AnonArticlesCounter;
                fromJSON(object: any): _9.AnonArticlesCounter;
                toJSON(message: _9.AnonArticlesCounter): unknown;
                fromPartial(object: Partial<_9.AnonArticlesCounter>): _9.AnonArticlesCounter;
            };
            AcceptedDomain: {
                encode(message: _8.AcceptedDomain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AcceptedDomain;
                fromJSON(object: any): _8.AcceptedDomain;
                toJSON(message: _8.AcceptedDomain): unknown;
                fromPartial(object: Partial<_8.AcceptedDomain>): _8.AcceptedDomain;
            };
            AcceptedDomainProposal: {
                encode(message: _7.AcceptedDomainProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AcceptedDomainProposal;
                fromJSON(object: any): _7.AcceptedDomainProposal;
                toJSON(message: _7.AcceptedDomainProposal): unknown;
                fromPartial(object: Partial<_7.AcceptedDomainProposal>): _7.AcceptedDomainProposal;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            bze: {
                burner: {
                    v1: _134.MsgClientImpl;
                };
                cointrunk: {
                    v1: _135.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            bze: {
                burner: {
                    v1: {
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                        allBurnedCoins(request?: _5.QueryAllBurnedCoinsRequest): Promise<_5.QueryAllBurnedCoinsResponse>;
                    };
                };
                cointrunk: {
                    v1: {
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        acceptedDomain(request?: _16.QueryAcceptedDomainRequest): Promise<_16.QueryAcceptedDomainResponse>;
                        publisher(request?: _16.QueryPublisherRequest): Promise<_16.QueryPublisherResponse>;
                        publisherByIndex(request: _16.QueryPublisherByIndexRequest): Promise<_16.QueryPublisherByIndexResponse>;
                        allArticles(request?: _16.QueryAllArticlesRequest): Promise<_16.QueryAllArticlesResponse>;
                        allAnonArticlesCounters(request?: _16.QueryAllAnonArticlesCountersRequest): Promise<_16.QueryAllAnonArticlesCountersResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            bze: {
                burner: {
                    v1: _130.LCDQueryClient;
                };
                cointrunk: {
                    v1: _131.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
