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
import * as _134 from "../beezee/burner/query.lcd";
import * as _135 from "../beezee/cointrunk/query.lcd";
import * as _136 from "../beezee/burner/query.rpc.Query";
import * as _137 from "../beezee/cointrunk/query.rpc.Query";
import * as _138 from "../beezee/burner/tx.rpc.msg";
import * as _139 from "../beezee/cointrunk/tx.rpc.msg";
export declare namespace bze {
    namespace burner {
        const v1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                allBurnedCoins(request?: _5.QueryAllBurnedCoinsRequest): Promise<_5.QueryAllBurnedCoinsResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    fundBurner(value: _6.MsgFundBurner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    fundBurner(value: _6.MsgFundBurner): {
                        typeUrl: string;
                        value: _6.MsgFundBurner;
                    };
                };
                fromPartial: {
                    fundBurner(value: _6.MsgFundBurner): {
                        typeUrl: string;
                        value: _6.MsgFundBurner;
                    };
                };
            };
            AminoConverter: {
                "/bze.burner.v1.MsgFundBurner": {
                    aminoType: string;
                    toAmino: ({ creator, amount }: _6.MsgFundBurner) => {
                        creator: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, amount }: {
                        creator: string;
                        amount: string;
                    }) => _6.MsgFundBurner;
                };
            };
            MsgFundBurner: {
                encode(message: _6.MsgFundBurner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgFundBurner;
                fromPartial(object: {
                    creator?: string;
                    amount?: string;
                }): _6.MsgFundBurner;
            };
            MsgFundBurnerResponse: {
                encode(_: _6.MsgFundBurnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgFundBurnerResponse;
                fromPartial(_: {}): _6.MsgFundBurnerResponse;
            };
            QueryParamsRequest: {
                encode(_: _5.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsRequest;
                fromPartial(_: {}): _5.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _5.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _5.QueryParamsResponse;
            };
            QueryAllBurnedCoinsRequest: {
                encode(message: _5.QueryAllBurnedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAllBurnedCoinsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _5.QueryAllBurnedCoinsRequest;
            };
            QueryAllBurnedCoinsResponse: {
                encode(message: _5.QueryAllBurnedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAllBurnedCoinsResponse;
                fromPartial(object: {
                    burnedCoins?: {
                        burned?: string;
                        height?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _5.QueryAllBurnedCoinsResponse;
            };
            Params: {
                encode(_: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Params;
                fromPartial(_: {}): _4.Params;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromPartial(object: {
                    params?: {};
                    burnedCoinsList?: {
                        burned?: string;
                        height?: string;
                    }[];
                }): _3.GenesisState;
            };
            CoinsBurnedEvent: {
                encode(message: _2.CoinsBurnedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.CoinsBurnedEvent;
                fromPartial(object: {
                    burned?: string;
                }): _2.CoinsBurnedEvent;
            };
            FundBurnerEvent: {
                encode(message: _2.FundBurnerEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.FundBurnerEvent;
                fromPartial(object: {
                    from?: string;
                    amount?: string;
                }): _2.FundBurnerEvent;
            };
            BurnedCoins: {
                encode(message: _1.BurnedCoins, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BurnedCoins;
                fromPartial(object: {
                    burned?: string;
                    height?: string;
                }): _1.BurnedCoins;
            };
            BurnCoinsProposal: {
                encode(message: _0.BurnCoinsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BurnCoinsProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _0.BurnCoinsProposal;
            };
        };
    }
    namespace cointrunk {
        const v1: {
            MsgClientImpl: typeof _139.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                acceptedDomain(request?: _16.QueryAcceptedDomainRequest): Promise<_16.QueryAcceptedDomainResponse>;
                publisher(request?: _16.QueryPublisherRequest): Promise<_16.QueryPublisherResponse>;
                publisherByIndex(request: _16.QueryPublisherByIndexRequest): Promise<_16.QueryPublisherByIndexResponse>;
                allArticles(request?: _16.QueryAllArticlesRequest): Promise<_16.QueryAllArticlesResponse>;
                allAnonArticlesCounters(request?: _16.QueryAllAnonArticlesCountersRequest): Promise<_16.QueryAllAnonArticlesCountersResponse>;
            };
            LCDQueryClient: typeof _135.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addArticle(value: _17.MsgAddArticle): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    payPublisherRespect(value: _17.MsgPayPublisherRespect): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addArticle(value: _17.MsgAddArticle): {
                        typeUrl: string;
                        value: _17.MsgAddArticle;
                    };
                    payPublisherRespect(value: _17.MsgPayPublisherRespect): {
                        typeUrl: string;
                        value: _17.MsgPayPublisherRespect;
                    };
                };
                fromPartial: {
                    addArticle(value: _17.MsgAddArticle): {
                        typeUrl: string;
                        value: _17.MsgAddArticle;
                    };
                    payPublisherRespect(value: _17.MsgPayPublisherRespect): {
                        typeUrl: string;
                        value: _17.MsgPayPublisherRespect;
                    };
                };
            };
            AminoConverter: {
                "/bze.cointrunk.v1.MsgAddArticle": {
                    aminoType: string;
                    toAmino: ({ publisher, title, url, picture }: _17.MsgAddArticle) => {
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
                    }) => _17.MsgAddArticle;
                };
                "/bze.cointrunk.v1.MsgPayPublisherRespect": {
                    aminoType: string;
                    toAmino: ({ creator, address, amount }: _17.MsgPayPublisherRespect) => {
                        creator: string;
                        address: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, address, amount }: {
                        creator: string;
                        address: string;
                        amount: string;
                    }) => _17.MsgPayPublisherRespect;
                };
            };
            MsgAddArticle: {
                encode(message: _17.MsgAddArticle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgAddArticle;
                fromPartial(object: {
                    publisher?: string;
                    title?: string;
                    url?: string;
                    picture?: string;
                }): _17.MsgAddArticle;
            };
            MsgAddArticleResponse: {
                encode(_: _17.MsgAddArticleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgAddArticleResponse;
                fromPartial(_: {}): _17.MsgAddArticleResponse;
            };
            MsgPayPublisherRespect: {
                encode(message: _17.MsgPayPublisherRespect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgPayPublisherRespect;
                fromPartial(object: {
                    creator?: string;
                    address?: string;
                    amount?: string;
                }): _17.MsgPayPublisherRespect;
            };
            MsgPayPublisherRespectResponse: {
                encode(message: _17.MsgPayPublisherRespectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgPayPublisherRespectResponse;
                fromPartial(object: {
                    respectPaid?: string | number | import("long");
                    publisherReward?: string | number | import("long");
                    communityPoolFunds?: string | number | import("long");
                }): _17.MsgPayPublisherRespectResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromPartial(_: {}): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        anonArticleLimit?: string | number | import("long");
                        anonArticleCost?: {
                            denom?: string;
                            amount?: string;
                        };
                        publisherRespectParams?: {
                            tax?: string;
                            denom?: string;
                        };
                    };
                }): _16.QueryParamsResponse;
            };
            QueryAcceptedDomainRequest: {
                encode(message: _16.QueryAcceptedDomainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAcceptedDomainRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryAcceptedDomainRequest;
            };
            QueryAcceptedDomainResponse: {
                encode(message: _16.QueryAcceptedDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAcceptedDomainResponse;
                fromPartial(object: {
                    acceptedDomain?: {
                        domain?: string;
                        active?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _16.QueryAcceptedDomainResponse;
            };
            QueryPublisherRequest: {
                encode(message: _16.QueryPublisherRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryPublisherRequest;
            };
            QueryPublisherResponse: {
                encode(message: _16.QueryPublisherResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherResponse;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long");
                        respect?: string | number | import("long");
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _16.QueryPublisherResponse;
            };
            QueryPublisherByIndexRequest: {
                encode(message: _16.QueryPublisherByIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherByIndexRequest;
                fromPartial(object: {
                    index?: string;
                }): _16.QueryPublisherByIndexRequest;
            };
            QueryPublisherByIndexResponse: {
                encode(message: _16.QueryPublisherByIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryPublisherByIndexResponse;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long");
                        respect?: string | number | import("long");
                    };
                }): _16.QueryPublisherByIndexResponse;
            };
            QueryAllArticlesRequest: {
                encode(message: _16.QueryAllArticlesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllArticlesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryAllArticlesRequest;
            };
            QueryAllArticlesResponse: {
                encode(message: _16.QueryAllArticlesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllArticlesResponse;
                fromPartial(object: {
                    article?: {
                        id?: string | number | import("long");
                        title?: string;
                        url?: string;
                        picture?: string;
                        publisher?: string;
                        paid?: boolean;
                        createdAt?: string | number | import("long");
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _16.QueryAllArticlesResponse;
            };
            QueryAllAnonArticlesCountersRequest: {
                encode(message: _16.QueryAllAnonArticlesCountersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllAnonArticlesCountersRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _16.QueryAllAnonArticlesCountersRequest;
            };
            QueryAllAnonArticlesCountersResponse: {
                encode(message: _16.QueryAllAnonArticlesCountersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllAnonArticlesCountersResponse;
                fromPartial(object: {
                    AnonArticlesCounters?: {
                        key?: string;
                        counter?: string | number | import("long");
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _16.QueryAllAnonArticlesCountersResponse;
            };
            Publisher: {
                encode(message: _15.Publisher, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Publisher;
                fromPartial(object: {
                    name?: string;
                    address?: string;
                    active?: boolean;
                    articlesCount?: number;
                    createdAt?: string | number | import("long");
                    respect?: string | number | import("long");
                }): _15.Publisher;
            };
            PublisherProposal: {
                encode(message: _14.PublisherProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PublisherProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    name?: string;
                    address?: string;
                    active?: boolean;
                }): _14.PublisherProposal;
            };
            PublisherRespectParams: {
                encode(message: _13.PublisherRespectParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PublisherRespectParams;
                fromPartial(object: {
                    tax?: string;
                    denom?: string;
                }): _13.PublisherRespectParams;
            };
            Params: {
                encode(message: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Params;
                fromPartial(object: {
                    anonArticleLimit?: string | number | import("long");
                    anonArticleCost?: {
                        denom?: string;
                        amount?: string;
                    };
                    publisherRespectParams?: {
                        tax?: string;
                        denom?: string;
                    };
                }): _13.Params;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromPartial(object: {
                    params?: {
                        anonArticleLimit?: string | number | import("long");
                        anonArticleCost?: {
                            denom?: string;
                            amount?: string;
                        };
                        publisherRespectParams?: {
                            tax?: string;
                            denom?: string;
                        };
                    };
                    publisherList?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long");
                        respect?: string | number | import("long");
                    }[];
                    acceptedDomainList?: {
                        domain?: string;
                        active?: boolean;
                    }[];
                    articleList?: {
                        id?: string | number | import("long");
                        title?: string;
                        url?: string;
                        picture?: string;
                        publisher?: string;
                        paid?: boolean;
                        createdAt?: string | number | import("long");
                    }[];
                    articlesCounter?: string | number | import("long");
                }): _12.GenesisState;
            };
            ArticleAddedEvent: {
                encode(message: _11.ArticleAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ArticleAddedEvent;
                fromPartial(object: {
                    publisher?: string;
                    articleId?: string | number | import("long");
                    paid?: boolean;
                }): _11.ArticleAddedEvent;
            };
            PublisherAddedEvent: {
                encode(message: _11.PublisherAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PublisherAddedEvent;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long");
                        respect?: string | number | import("long");
                    };
                }): _11.PublisherAddedEvent;
            };
            PublisherUpdatedEvent: {
                encode(message: _11.PublisherUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PublisherUpdatedEvent;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long");
                        respect?: string | number | import("long");
                    };
                }): _11.PublisherUpdatedEvent;
            };
            AcceptedDomainAddedEvent: {
                encode(message: _11.AcceptedDomainAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.AcceptedDomainAddedEvent;
                fromPartial(object: {
                    acceptedDomain?: {
                        domain?: string;
                        active?: boolean;
                    };
                }): _11.AcceptedDomainAddedEvent;
            };
            AcceptedDomainUpdatedEvent: {
                encode(message: _11.AcceptedDomainUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.AcceptedDomainUpdatedEvent;
                fromPartial(object: {
                    acceptedDomain?: {
                        domain?: string;
                        active?: boolean;
                    };
                }): _11.AcceptedDomainUpdatedEvent;
            };
            PublisherRespectPaidEvent: {
                encode(message: _11.PublisherRespectPaidEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PublisherRespectPaidEvent;
                fromPartial(object: {
                    respectPaid?: string | number | import("long");
                    publisherReward?: string | number | import("long");
                    communityPoolFunds?: string | number | import("long");
                    publisher?: string;
                }): _11.PublisherRespectPaidEvent;
            };
            Article: {
                encode(message: _10.Article, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Article;
                fromPartial(object: {
                    id?: string | number | import("long");
                    title?: string;
                    url?: string;
                    picture?: string;
                    publisher?: string;
                    paid?: boolean;
                    createdAt?: string | number | import("long");
                }): _10.Article;
            };
            AnonArticlesCounter: {
                encode(message: _9.AnonArticlesCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AnonArticlesCounter;
                fromPartial(object: {
                    key?: string;
                    counter?: string | number | import("long");
                }): _9.AnonArticlesCounter;
            };
            AcceptedDomain: {
                encode(message: _8.AcceptedDomain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AcceptedDomain;
                fromPartial(object: {
                    domain?: string;
                    active?: boolean;
                }): _8.AcceptedDomain;
            };
            AcceptedDomainProposal: {
                encode(message: _7.AcceptedDomainProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AcceptedDomainProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    domain?: string;
                    active?: boolean;
                }): _7.AcceptedDomainProposal;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            bze: {
                burner: {
                    v1: _138.MsgClientImpl;
                };
                cointrunk: {
                    v1: _139.MsgClientImpl;
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
                    v1: _134.LCDQueryClient;
                };
                cointrunk: {
                    v1: _135.LCDQueryClient;
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
