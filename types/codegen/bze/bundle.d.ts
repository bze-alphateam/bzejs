import * as _1 from "../beezee/burner/burn_coins_proposal";
import * as _2 from "../beezee/burner/burned_coins";
import * as _3 from "../beezee/burner/events";
import * as _4 from "../beezee/burner/genesis";
import * as _5 from "../beezee/burner/params";
import * as _6 from "../beezee/burner/query";
import * as _7 from "../beezee/burner/tx";
import * as _8 from "../beezee/cointrunk/accepted_domain_proposal";
import * as _9 from "../beezee/cointrunk/accepted_domain";
import * as _10 from "../beezee/cointrunk/anon_articles_counter";
import * as _11 from "../beezee/cointrunk/article";
import * as _12 from "../beezee/cointrunk/events";
import * as _13 from "../beezee/cointrunk/genesis";
import * as _14 from "../beezee/cointrunk/params";
import * as _15 from "../beezee/cointrunk/publisher_proposal";
import * as _16 from "../beezee/cointrunk/publisher";
import * as _17 from "../beezee/cointrunk/query";
import * as _18 from "../beezee/cointrunk/tx";
import * as _160 from "../beezee/burner/query.lcd";
import * as _161 from "../beezee/cointrunk/query.lcd";
import * as _162 from "../beezee/burner/query.rpc.Query";
import * as _163 from "../beezee/cointrunk/query.rpc.Query";
import * as _164 from "../beezee/burner/tx.rpc.msg";
import * as _165 from "../beezee/cointrunk/tx.rpc.msg";
export declare namespace bze {
    namespace burner {
        const v1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                allBurnedCoins(request?: _6.QueryAllBurnedCoinsRequest): Promise<_6.QueryAllBurnedCoinsResponse>;
            };
            LCDQueryClient: typeof _160.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    fundBurner(value: _7.MsgFundBurner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    fundBurner(value: _7.MsgFundBurner): {
                        typeUrl: string;
                        value: _7.MsgFundBurner;
                    };
                };
                fromPartial: {
                    fundBurner(value: _7.MsgFundBurner): {
                        typeUrl: string;
                        value: _7.MsgFundBurner;
                    };
                };
            };
            AminoConverter: {
                "/bze.burner.v1.MsgFundBurner": {
                    aminoType: string;
                    toAmino: ({ creator, amount }: _7.MsgFundBurner) => {
                        creator: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, amount }: {
                        creator: string;
                        amount: string;
                    }) => _7.MsgFundBurner;
                };
            };
            MsgFundBurner: {
                encode(message: _7.MsgFundBurner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgFundBurner;
                fromPartial(object: {
                    creator?: string;
                    amount?: string;
                }): _7.MsgFundBurner;
            };
            MsgFundBurnerResponse: {
                encode(_: _7.MsgFundBurnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgFundBurnerResponse;
                fromPartial(_: {}): _7.MsgFundBurnerResponse;
            };
            QueryParamsRequest: {
                encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryParamsRequest;
                fromPartial(_: {}): _6.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _6.QueryParamsResponse;
            };
            QueryAllBurnedCoinsRequest: {
                encode(message: _6.QueryAllBurnedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAllBurnedCoinsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _6.QueryAllBurnedCoinsRequest;
            };
            QueryAllBurnedCoinsResponse: {
                encode(message: _6.QueryAllBurnedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAllBurnedCoinsResponse;
                fromPartial(object: {
                    burnedCoins?: {
                        burned?: string;
                        height?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _6.QueryAllBurnedCoinsResponse;
            };
            Params: {
                encode(_: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromPartial(_: {}): _5.Params;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenesisState;
                fromPartial(object: {
                    params?: {};
                    burnedCoinsList?: {
                        burned?: string;
                        height?: string;
                    }[];
                }): _4.GenesisState;
            };
            CoinsBurnedEvent: {
                encode(message: _3.CoinsBurnedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.CoinsBurnedEvent;
                fromPartial(object: {
                    burned?: string;
                }): _3.CoinsBurnedEvent;
            };
            FundBurnerEvent: {
                encode(message: _3.FundBurnerEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.FundBurnerEvent;
                fromPartial(object: {
                    from?: string;
                    amount?: string;
                }): _3.FundBurnerEvent;
            };
            BurnedCoins: {
                encode(message: _2.BurnedCoins, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BurnedCoins;
                fromPartial(object: {
                    burned?: string;
                    height?: string;
                }): _2.BurnedCoins;
            };
            BurnCoinsProposal: {
                encode(message: _1.BurnCoinsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BurnCoinsProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _1.BurnCoinsProposal;
            };
        };
    }
    namespace cointrunk {
        const v1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                acceptedDomain(request?: _17.QueryAcceptedDomainRequest): Promise<_17.QueryAcceptedDomainResponse>;
                publisher(request?: _17.QueryPublisherRequest): Promise<_17.QueryPublisherResponse>;
                publisherByIndex(request: _17.QueryPublisherByIndexRequest): Promise<_17.QueryPublisherByIndexResponse>;
                allArticles(request?: _17.QueryAllArticlesRequest): Promise<_17.QueryAllArticlesResponse>;
                allAnonArticlesCounters(request?: _17.QueryAllAnonArticlesCountersRequest): Promise<_17.QueryAllAnonArticlesCountersResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addArticle(value: _18.MsgAddArticle): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    payPublisherRespect(value: _18.MsgPayPublisherRespect): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addArticle(value: _18.MsgAddArticle): {
                        typeUrl: string;
                        value: _18.MsgAddArticle;
                    };
                    payPublisherRespect(value: _18.MsgPayPublisherRespect): {
                        typeUrl: string;
                        value: _18.MsgPayPublisherRespect;
                    };
                };
                fromPartial: {
                    addArticle(value: _18.MsgAddArticle): {
                        typeUrl: string;
                        value: _18.MsgAddArticle;
                    };
                    payPublisherRespect(value: _18.MsgPayPublisherRespect): {
                        typeUrl: string;
                        value: _18.MsgPayPublisherRespect;
                    };
                };
            };
            AminoConverter: {
                "/bze.cointrunk.v1.MsgAddArticle": {
                    aminoType: string;
                    toAmino: ({ publisher, title, url, picture }: _18.MsgAddArticle) => {
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
                    }) => _18.MsgAddArticle;
                };
                "/bze.cointrunk.v1.MsgPayPublisherRespect": {
                    aminoType: string;
                    toAmino: ({ creator, address, amount }: _18.MsgPayPublisherRespect) => {
                        creator: string;
                        address: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, address, amount }: {
                        creator: string;
                        address: string;
                        amount: string;
                    }) => _18.MsgPayPublisherRespect;
                };
            };
            MsgAddArticle: {
                encode(message: _18.MsgAddArticle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgAddArticle;
                fromPartial(object: {
                    publisher?: string;
                    title?: string;
                    url?: string;
                    picture?: string;
                }): _18.MsgAddArticle;
            };
            MsgAddArticleResponse: {
                encode(_: _18.MsgAddArticleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgAddArticleResponse;
                fromPartial(_: {}): _18.MsgAddArticleResponse;
            };
            MsgPayPublisherRespect: {
                encode(message: _18.MsgPayPublisherRespect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgPayPublisherRespect;
                fromPartial(object: {
                    creator?: string;
                    address?: string;
                    amount?: string;
                }): _18.MsgPayPublisherRespect;
            };
            MsgPayPublisherRespectResponse: {
                encode(message: _18.MsgPayPublisherRespectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgPayPublisherRespectResponse;
                fromPartial(object: {
                    respectPaid?: string | number | import("long").default;
                    publisherReward?: string | number | import("long").default;
                    communityPoolFunds?: string | number | import("long").default;
                }): _18.MsgPayPublisherRespectResponse;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsRequest;
                fromPartial(_: {}): _17.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        anonArticleLimit?: string | number | import("long").default;
                        anonArticleCost?: {
                            denom?: string;
                            amount?: string;
                        };
                        publisherRespectParams?: {
                            tax?: string;
                            denom?: string;
                        };
                    };
                }): _17.QueryParamsResponse;
            };
            QueryAcceptedDomainRequest: {
                encode(message: _17.QueryAcceptedDomainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAcceptedDomainRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryAcceptedDomainRequest;
            };
            QueryAcceptedDomainResponse: {
                encode(message: _17.QueryAcceptedDomainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAcceptedDomainResponse;
                fromPartial(object: {
                    acceptedDomain?: {
                        domain?: string;
                        active?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _17.QueryAcceptedDomainResponse;
            };
            QueryPublisherRequest: {
                encode(message: _17.QueryPublisherRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryPublisherRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryPublisherRequest;
            };
            QueryPublisherResponse: {
                encode(message: _17.QueryPublisherResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryPublisherResponse;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long").default;
                        respect?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _17.QueryPublisherResponse;
            };
            QueryPublisherByIndexRequest: {
                encode(message: _17.QueryPublisherByIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryPublisherByIndexRequest;
                fromPartial(object: {
                    index?: string;
                }): _17.QueryPublisherByIndexRequest;
            };
            QueryPublisherByIndexResponse: {
                encode(message: _17.QueryPublisherByIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryPublisherByIndexResponse;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long").default;
                        respect?: string | number | import("long").default;
                    };
                }): _17.QueryPublisherByIndexResponse;
            };
            QueryAllArticlesRequest: {
                encode(message: _17.QueryAllArticlesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllArticlesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryAllArticlesRequest;
            };
            QueryAllArticlesResponse: {
                encode(message: _17.QueryAllArticlesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllArticlesResponse;
                fromPartial(object: {
                    article?: {
                        id?: string | number | import("long").default;
                        title?: string;
                        url?: string;
                        picture?: string;
                        publisher?: string;
                        paid?: boolean;
                        createdAt?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _17.QueryAllArticlesResponse;
            };
            QueryAllAnonArticlesCountersRequest: {
                encode(message: _17.QueryAllAnonArticlesCountersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllAnonArticlesCountersRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryAllAnonArticlesCountersRequest;
            };
            QueryAllAnonArticlesCountersResponse: {
                encode(message: _17.QueryAllAnonArticlesCountersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllAnonArticlesCountersResponse;
                fromPartial(object: {
                    AnonArticlesCounters?: {
                        key?: string;
                        counter?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _17.QueryAllAnonArticlesCountersResponse;
            };
            Publisher: {
                encode(message: _16.Publisher, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Publisher;
                fromPartial(object: {
                    name?: string;
                    address?: string;
                    active?: boolean;
                    articlesCount?: number;
                    createdAt?: string | number | import("long").default;
                    respect?: string | number | import("long").default;
                }): _16.Publisher;
            };
            PublisherProposal: {
                encode(message: _15.PublisherProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PublisherProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    name?: string;
                    address?: string;
                    active?: boolean;
                }): _15.PublisherProposal;
            };
            PublisherRespectParams: {
                encode(message: _14.PublisherRespectParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PublisherRespectParams;
                fromPartial(object: {
                    tax?: string;
                    denom?: string;
                }): _14.PublisherRespectParams;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromPartial(object: {
                    anonArticleLimit?: string | number | import("long").default;
                    anonArticleCost?: {
                        denom?: string;
                        amount?: string;
                    };
                    publisherRespectParams?: {
                        tax?: string;
                        denom?: string;
                    };
                }): _14.Params;
            };
            GenesisState: {
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GenesisState;
                fromPartial(object: {
                    params?: {
                        anonArticleLimit?: string | number | import("long").default;
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
                        createdAt?: string | number | import("long").default;
                        respect?: string | number | import("long").default;
                    }[];
                    acceptedDomainList?: {
                        domain?: string;
                        active?: boolean;
                    }[];
                    articleList?: {
                        id?: string | number | import("long").default;
                        title?: string;
                        url?: string;
                        picture?: string;
                        publisher?: string;
                        paid?: boolean;
                        createdAt?: string | number | import("long").default;
                    }[];
                    articlesCounter?: string | number | import("long").default;
                }): _13.GenesisState;
            };
            ArticleAddedEvent: {
                encode(message: _12.ArticleAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ArticleAddedEvent;
                fromPartial(object: {
                    publisher?: string;
                    articleId?: string | number | import("long").default;
                    paid?: boolean;
                }): _12.ArticleAddedEvent;
            };
            PublisherAddedEvent: {
                encode(message: _12.PublisherAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.PublisherAddedEvent;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long").default;
                        respect?: string | number | import("long").default;
                    };
                }): _12.PublisherAddedEvent;
            };
            PublisherUpdatedEvent: {
                encode(message: _12.PublisherUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.PublisherUpdatedEvent;
                fromPartial(object: {
                    publisher?: {
                        name?: string;
                        address?: string;
                        active?: boolean;
                        articlesCount?: number;
                        createdAt?: string | number | import("long").default;
                        respect?: string | number | import("long").default;
                    };
                }): _12.PublisherUpdatedEvent;
            };
            AcceptedDomainAddedEvent: {
                encode(message: _12.AcceptedDomainAddedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.AcceptedDomainAddedEvent;
                fromPartial(object: {
                    acceptedDomain?: {
                        domain?: string;
                        active?: boolean;
                    };
                }): _12.AcceptedDomainAddedEvent;
            };
            AcceptedDomainUpdatedEvent: {
                encode(message: _12.AcceptedDomainUpdatedEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.AcceptedDomainUpdatedEvent;
                fromPartial(object: {
                    acceptedDomain?: {
                        domain?: string;
                        active?: boolean;
                    };
                }): _12.AcceptedDomainUpdatedEvent;
            };
            PublisherRespectPaidEvent: {
                encode(message: _12.PublisherRespectPaidEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.PublisherRespectPaidEvent;
                fromPartial(object: {
                    respectPaid?: string | number | import("long").default;
                    publisherReward?: string | number | import("long").default;
                    communityPoolFunds?: string | number | import("long").default;
                    publisher?: string;
                }): _12.PublisherRespectPaidEvent;
            };
            Article: {
                encode(message: _11.Article, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Article;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    title?: string;
                    url?: string;
                    picture?: string;
                    publisher?: string;
                    paid?: boolean;
                    createdAt?: string | number | import("long").default;
                }): _11.Article;
            };
            AnonArticlesCounter: {
                encode(message: _10.AnonArticlesCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.AnonArticlesCounter;
                fromPartial(object: {
                    key?: string;
                    counter?: string | number | import("long").default;
                }): _10.AnonArticlesCounter;
            };
            AcceptedDomain: {
                encode(message: _9.AcceptedDomain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AcceptedDomain;
                fromPartial(object: {
                    domain?: string;
                    active?: boolean;
                }): _9.AcceptedDomain;
            };
            AcceptedDomainProposal: {
                encode(message: _8.AcceptedDomainProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AcceptedDomainProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    domain?: string;
                    active?: boolean;
                }): _8.AcceptedDomainProposal;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            bze: {
                burner: {
                    v1: _164.MsgClientImpl;
                };
                cointrunk: {
                    v1: _165.MsgClientImpl;
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
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        allBurnedCoins(request?: _6.QueryAllBurnedCoinsRequest): Promise<_6.QueryAllBurnedCoinsResponse>;
                    };
                };
                cointrunk: {
                    v1: {
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        acceptedDomain(request?: _17.QueryAcceptedDomainRequest): Promise<_17.QueryAcceptedDomainResponse>;
                        publisher(request?: _17.QueryPublisherRequest): Promise<_17.QueryPublisherResponse>;
                        publisherByIndex(request: _17.QueryPublisherByIndexRequest): Promise<_17.QueryPublisherByIndexResponse>;
                        allArticles(request?: _17.QueryAllArticlesRequest): Promise<_17.QueryAllArticlesResponse>;
                        allAnonArticlesCounters(request?: _17.QueryAllAnonArticlesCountersRequest): Promise<_17.QueryAllAnonArticlesCountersResponse>;
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
                    v1: _160.LCDQueryClient;
                };
                cointrunk: {
                    v1: _161.LCDQueryClient;
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
