import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const bzeAminoConverters: {
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
