import * as _21 from "./app/v1alpha1/config";
import * as _22 from "./app/v1alpha1/module";
import * as _23 from "./app/v1alpha1/query";
import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/query/v1beta1/pagination";
import * as _40 from "./base/reflection/v1beta1/reflection";
import * as _41 from "./base/reflection/v2alpha1/reflection";
import * as _42 from "./base/snapshots/v1beta1/snapshot";
import * as _43 from "./base/store/v1beta1/commit_info";
import * as _44 from "./base/store/v1beta1/listening";
import * as _45 from "./base/tendermint/v1beta1/query";
import * as _46 from "./base/v1beta1/coin";
import * as _47 from "./capability/v1beta1/capability";
import * as _48 from "./capability/v1beta1/genesis";
import * as _49 from "./crisis/v1beta1/genesis";
import * as _50 from "./crisis/v1beta1/tx";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/hd/v1/hd";
import * as _53 from "./crypto/keyring/v1/record";
import * as _54 from "./crypto/multisig/keys";
import * as _55 from "./crypto/secp256k1/keys";
import * as _56 from "./crypto/secp256r1/keys";
import * as _57 from "./distribution/v1beta1/distribution";
import * as _58 from "./distribution/v1beta1/genesis";
import * as _59 from "./distribution/v1beta1/query";
import * as _60 from "./distribution/v1beta1/tx";
import * as _61 from "./evidence/v1beta1/evidence";
import * as _62 from "./evidence/v1beta1/genesis";
import * as _63 from "./evidence/v1beta1/query";
import * as _64 from "./evidence/v1beta1/tx";
import * as _65 from "./feegrant/v1beta1/feegrant";
import * as _66 from "./feegrant/v1beta1/genesis";
import * as _67 from "./feegrant/v1beta1/query";
import * as _68 from "./feegrant/v1beta1/tx";
import * as _69 from "./genutil/v1beta1/genesis";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/v1/events";
import * as _79 from "./group/v1/genesis";
import * as _80 from "./group/v1/query";
import * as _81 from "./group/v1/tx";
import * as _82 from "./group/v1/types";
import * as _83 from "./mint/v1beta1/genesis";
import * as _84 from "./mint/v1beta1/mint";
import * as _85 from "./mint/v1beta1/query";
import * as _87 from "./nft/v1beta1/event";
import * as _88 from "./nft/v1beta1/genesis";
import * as _89 from "./nft/v1beta1/nft";
import * as _90 from "./nft/v1beta1/query";
import * as _91 from "./nft/v1beta1/tx";
import * as _92 from "./orm/v1/orm";
import * as _93 from "./orm/v1alpha1/schema";
import * as _94 from "./params/v1beta1/params";
import * as _95 from "./params/v1beta1/query";
import * as _96 from "./slashing/v1beta1/genesis";
import * as _97 from "./slashing/v1beta1/query";
import * as _98 from "./slashing/v1beta1/slashing";
import * as _99 from "./slashing/v1beta1/tx";
import * as _100 from "./staking/v1beta1/authz";
import * as _101 from "./staking/v1beta1/genesis";
import * as _102 from "./staking/v1beta1/query";
import * as _103 from "./staking/v1beta1/staking";
import * as _104 from "./staking/v1beta1/tx";
import * as _105 from "./tx/signing/v1beta1/signing";
import * as _106 from "./tx/v1beta1/service";
import * as _107 from "./tx/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/query";
import * as _109 from "./upgrade/v1beta1/tx";
import * as _110 from "./upgrade/v1beta1/upgrade";
import * as _111 from "./vesting/v1beta1/tx";
import * as _112 from "./vesting/v1beta1/vesting";
import * as _194 from "./auth/v1beta1/query.lcd";
import * as _195 from "./authz/v1beta1/query.lcd";
import * as _196 from "./bank/v1beta1/query.lcd";
import * as _197 from "./base/tendermint/v1beta1/query.lcd";
import * as _198 from "./distribution/v1beta1/query.lcd";
import * as _199 from "./evidence/v1beta1/query.lcd";
import * as _200 from "./feegrant/v1beta1/query.lcd";
import * as _201 from "./gov/v1/query.lcd";
import * as _202 from "./gov/v1beta1/query.lcd";
import * as _203 from "./group/v1/query.lcd";
import * as _204 from "./mint/v1beta1/query.lcd";
import * as _205 from "./nft/v1beta1/query.lcd";
import * as _206 from "./params/v1beta1/query.lcd";
import * as _207 from "./slashing/v1beta1/query.lcd";
import * as _208 from "./staking/v1beta1/query.lcd";
import * as _209 from "./tx/v1beta1/service.lcd";
import * as _210 from "./upgrade/v1beta1/query.lcd";
import * as _211 from "./app/v1alpha1/query.rpc.Query";
import * as _212 from "./auth/v1beta1/query.rpc.Query";
import * as _213 from "./authz/v1beta1/query.rpc.Query";
import * as _214 from "./bank/v1beta1/query.rpc.Query";
import * as _215 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _216 from "./distribution/v1beta1/query.rpc.Query";
import * as _217 from "./evidence/v1beta1/query.rpc.Query";
import * as _218 from "./feegrant/v1beta1/query.rpc.Query";
import * as _219 from "./gov/v1/query.rpc.Query";
import * as _220 from "./gov/v1beta1/query.rpc.Query";
import * as _221 from "./group/v1/query.rpc.Query";
import * as _222 from "./mint/v1beta1/query.rpc.Query";
import * as _223 from "./nft/v1beta1/query.rpc.Query";
import * as _224 from "./params/v1beta1/query.rpc.Query";
import * as _225 from "./slashing/v1beta1/query.rpc.Query";
import * as _226 from "./staking/v1beta1/query.rpc.Query";
import * as _227 from "./tx/v1beta1/service.rpc.Service";
import * as _228 from "./upgrade/v1beta1/query.rpc.Query";
import * as _229 from "./authz/v1beta1/tx.rpc.msg";
import * as _230 from "./bank/v1beta1/tx.rpc.msg";
import * as _231 from "./crisis/v1beta1/tx.rpc.msg";
import * as _232 from "./distribution/v1beta1/tx.rpc.msg";
import * as _233 from "./evidence/v1beta1/tx.rpc.msg";
import * as _234 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _235 from "./gov/v1/tx.rpc.msg";
import * as _236 from "./gov/v1beta1/tx.rpc.msg";
import * as _237 from "./group/v1/tx.rpc.msg";
import * as _238 from "./nft/v1beta1/tx.rpc.msg";
import * as _239 from "./slashing/v1beta1/tx.rpc.msg";
import * as _240 from "./staking/v1beta1/tx.rpc.msg";
import * as _241 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _242 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _23.QueryConfigRequest): Promise<_23.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _23.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryConfigRequest;
                fromPartial(_: {}): _23.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _23.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryConfigResponse;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _23.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _22.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ModuleDescriptor;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _22.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _22.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PackageReference;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _22.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _22.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MigrateFromInfo;
                fromPartial(object: {
                    module?: string;
                }): _22.MigrateFromInfo;
            };
            Config: {
                encode(message: _21.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Config;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _21.Config;
            };
            ModuleConfig: {
                encode(message: _21.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ModuleConfig;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _21.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                moduleAccounts(request?: _26.QueryModuleAccountsRequest): Promise<_26.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _26.Bech32PrefixRequest): Promise<_26.Bech32PrefixResponse>;
                addressBytesToString(request: _26.AddressBytesToStringRequest): Promise<_26.AddressBytesToStringResponse>;
                addressStringToBytes(request: _26.AddressStringToBytesRequest): Promise<_26.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _26.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _26.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _26.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _26.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _26.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _26.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _26.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryModuleAccountsRequest;
                fromPartial(_: {}): _26.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _26.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").default;
                        txSigLimit?: string | number | import("long").default;
                        txSizeCostPerByte?: string | number | import("long").default;
                        sigVerifyCostEd25519?: string | number | import("long").default;
                        sigVerifyCostSecp256k1?: string | number | import("long").default;
                    };
                }): _26.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _26.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _26.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _26.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsRequest;
                fromPartial(_: {}): _26.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _26.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryModuleAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _26.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _26.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Bech32PrefixRequest;
                fromPartial(_: {}): _26.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _26.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Bech32PrefixResponse;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _26.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _26.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.AddressBytesToStringRequest;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _26.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _26.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.AddressBytesToStringResponse;
                fromPartial(object: {
                    addressString?: string;
                }): _26.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _26.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.AddressStringToBytesRequest;
                fromPartial(object: {
                    addressString?: string;
                }): _26.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _26.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.AddressStringToBytesResponse;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _26.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").default;
                        txSigLimit?: string | number | import("long").default;
                        txSizeCostPerByte?: string | number | import("long").default;
                        sigVerifyCostEd25519?: string | number | import("long").default;
                        sigVerifyCostSecp256k1?: string | number | import("long").default;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _25.GenesisState;
            };
            BaseAccount: {
                encode(message: _24.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.BaseAccount;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: string | number | import("long").default;
                    sequence?: string | number | import("long").default;
                }): _24.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _24.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ModuleAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    };
                    name?: string;
                    permissions?: string[];
                }): _24.ModuleAccount;
            };
            Params: {
                encode(message: _24.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Params;
                fromPartial(object: {
                    maxMemoCharacters?: string | number | import("long").default;
                    txSigLimit?: string | number | import("long").default;
                    txSizeCostPerByte?: string | number | import("long").default;
                    sigVerifyCostEd25519?: string | number | import("long").default;
                    sigVerifyCostSecp256k1?: string | number | import("long").default;
                }): _24.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _31.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _31.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _31.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _31.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _31.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _31.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _31.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgGrant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _31.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _31.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _31.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _31.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _31.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _31.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgGrantResponse;
                fromPartial(_: {}): _31.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _31.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _31.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _31.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgRevokeResponse;
                fromPartial(_: {}): _31.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _30.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _30.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _30.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _30.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _30.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryGranterGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _30.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _30.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryGranterGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _30.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _30.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryGranteeGrantsRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _30.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _30.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryGranteeGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _30.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _29.GenesisState;
            };
            EventGrant: {
                encode(message: _28.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _28.EventGrant;
            };
            EventRevoke: {
                encode(message: _28.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _28.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _27.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _27.GenericAuthorization;
            };
            Grant: {
                encode(message: _27.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _27.Grant;
            };
            GrantAuthorization: {
                encode(message: _27.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _27.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _27.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GrantQueueItem;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _27.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
                denomOwners(request: _35.QueryDenomOwnersRequest): Promise<_35.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _36.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _36.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _36.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _36.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _36.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSend;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _36.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _36.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSendResponse;
                fromPartial(_: {}): _36.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _36.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _36.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _36.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgMultiSendResponse;
                fromPartial(_: {}): _36.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _35.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _35.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _35.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _35.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _35.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _35.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _35.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _35.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _35.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _35.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _35.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySpendableBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _35.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _35.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _35.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _35.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _35.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _35.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _35.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _35.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _35.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(_: {}): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _35.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _35.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _35.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _35.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _35.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _35.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _35.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _35.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _35.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _35.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _35.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _35.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.DenomOwner;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _35.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _35.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDenomOwnersResponse;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _35.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _34.GenesisState;
            };
            Balance: {
                encode(message: _34.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.Balance;
            };
            Params: {
                encode(message: _33.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _33.Params;
            };
            SendEnabled: {
                encode(message: _33.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _33.SendEnabled;
            };
            Input: {
                encode(message: _33.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _33.Input;
            };
            Output: {
                encode(message: _33.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _33.Output;
            };
            Supply: {
                encode(message: _33.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _33.Supply;
            };
            DenomUnit: {
                encode(message: _33.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _33.DenomUnit;
            };
            Metadata: {
                encode(message: _33.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _33.Metadata;
            };
            SendAuthorization: {
                encode(message: _32.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _32.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _37.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.TxResponse;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _37.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _37.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _37.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _37.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _37.StringEvent;
                };
                Attribute: {
                    encode(message: _37.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _37.Attribute;
                };
                GasInfo: {
                    encode(message: _37.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GasInfo;
                    fromPartial(object: {
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                    }): _37.GasInfo;
                };
                Result: {
                    encode(message: _37.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _37.Result;
                };
                SimulationResponse: {
                    encode(message: _37.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: string | number | import("long").default;
                            gasUsed?: string | number | import("long").default;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _37.SimulationResponse;
                };
                MsgData: {
                    encode(message: _37.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _37.MsgData;
                };
                TxMsgData: {
                    encode(message: _37.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _37.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _37.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: string | number | import("long").default;
                        count?: string | number | import("long").default;
                        pageNumber?: string | number | import("long").default;
                        pageTotal?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        txs?: {
                            height?: string | number | import("long").default;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: string | number | import("long").default;
                            gasUsed?: string | number | import("long").default;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _37.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _38.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Pairs;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _38.Pairs;
                };
                Pair: {
                    encode(message: _38.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Pair;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _38.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _39.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _39.PageRequest;
                };
                PageResponse: {
                    encode(message: _39.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    }): _39.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _40.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ListAllInterfacesRequest;
                    fromPartial(_: {}): _40.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _40.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ListAllInterfacesResponse;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _40.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _40.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ListImplementationsRequest;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _40.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _40.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ListImplementationsResponse;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _40.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _41.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _41.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _41.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _41.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _41.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _41.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _41.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _41.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _41.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _41.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _41.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _41.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _41.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _41.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _41.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _41.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _41.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _41.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _41.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _41.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _41.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _41.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _41.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _41.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _41.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _41.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _41.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetChainDescriptorRequest;
                    fromPartial(_: {}): _41.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _41.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _41.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _41.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _41.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _41.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _41.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _41.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _41.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _41.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _41.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _41.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _41.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _41.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _41.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _41.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetTxDescriptorRequest;
                    fromPartial(_: {}): _41.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _41.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _41.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _41.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _41.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _41.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _41.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _41.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _41.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _42.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Snapshot;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _42.Snapshot;
                };
                Metadata: {
                    encode(message: _42.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Metadata;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _42.Metadata;
                };
                SnapshotItem: {
                    encode(message: _42.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SnapshotItem;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: string | number | import("long").default;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _42.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _42.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SnapshotStoreItem;
                    fromPartial(object: {
                        name?: string;
                    }): _42.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _42.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SnapshotIAVLItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: string | number | import("long").default;
                        height?: number;
                    }): _42.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _42.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SnapshotExtensionMeta;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _42.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _42.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SnapshotExtensionPayload;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _42.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _42.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SnapshotKVItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _42.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _42.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SnapshotSchema;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _42.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _44.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.StoreKVPair;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _44.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _43.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.CommitInfo;
                    fromPartial(object: {
                        version?: string | number | import("long").default;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: string | number | import("long").default;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _43.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _43.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.StoreInfo;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: string | number | import("long").default;
                            hash?: Uint8Array;
                        };
                    }): _43.StoreInfo;
                };
                CommitID: {
                    encode(message: _43.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.CommitID;
                    fromPartial(object: {
                        version?: string | number | import("long").default;
                        hash?: Uint8Array;
                    }): _43.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _215.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _45.GetNodeInfoRequest): Promise<_45.GetNodeInfoResponse>;
                    getSyncing(request?: _45.GetSyncingRequest): Promise<_45.GetSyncingResponse>;
                    getLatestBlock(request?: _45.GetLatestBlockRequest): Promise<_45.GetLatestBlockResponse>;
                    getBlockByHeight(request: _45.GetBlockByHeightRequest): Promise<_45.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _45.GetLatestValidatorSetRequest): Promise<_45.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _45.GetValidatorSetByHeightRequest): Promise<_45.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _197.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _45.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetValidatorSetByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _45.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _45.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetValidatorSetByHeightResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").default;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _45.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _45.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetLatestValidatorSetRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _45.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _45.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetLatestValidatorSetResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").default;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _45.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _45.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Validator;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    }): _45.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _45.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetBlockByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                    }): _45.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _45.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetBlockByHeightResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chainId?: string;
                                height?: string | number | import("long").default;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long").default;
                                        validatorPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").default;
                                                        app?: string | number | import("long").default;
                                                    };
                                                    chainId?: string;
                                                    height?: string | number | import("long").default;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").default;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").default;
                                                    proposerPriority?: string | number | import("long").default;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").default;
                                                    proposerPriority?: string | number | import("long").default;
                                                };
                                                totalVotingPower?: string | number | import("long").default;
                                            };
                                        };
                                        commonHeight?: string | number | import("long").default;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long").default;
                                            proposerPriority?: string | number | import("long").default;
                                        }[];
                                        totalVotingPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _45.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _45.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetLatestBlockRequest;
                    fromPartial(_: {}): _45.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _45.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetLatestBlockResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chainId?: string;
                                height?: string | number | import("long").default;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long").default;
                                        validatorPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").default;
                                                        app?: string | number | import("long").default;
                                                    };
                                                    chainId?: string;
                                                    height?: string | number | import("long").default;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").default;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").default;
                                                    proposerPriority?: string | number | import("long").default;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").default;
                                                    proposerPriority?: string | number | import("long").default;
                                                };
                                                totalVotingPower?: string | number | import("long").default;
                                            };
                                        };
                                        commonHeight?: string | number | import("long").default;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long").default;
                                            proposerPriority?: string | number | import("long").default;
                                        }[];
                                        totalVotingPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _45.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _45.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetSyncingRequest;
                    fromPartial(_: {}): _45.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _45.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetSyncingResponse;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _45.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _45.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetNodeInfoRequest;
                    fromPartial(_: {}): _45.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _45.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetNodeInfoResponse;
                    fromPartial(object: {
                        nodeInfo?: {
                            protocolVersion?: {
                                p2p?: string | number | import("long").default;
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            nodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _45.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _45.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.VersionInfo;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _45.VersionInfo;
                };
                Module: {
                    encode(message: _45.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Module;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _45.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _46.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _46.Coin;
            };
            DecCoin: {
                encode(message: _46.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _46.DecCoin;
            };
            IntProto: {
                encode(message: _46.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _46.IntProto;
            };
            DecProto: {
                encode(message: _46.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _46.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _48.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisOwners;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _48.GenesisOwners;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    owners?: {
                        index?: string | number | import("long").default;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _48.GenesisState;
            };
            Capability: {
                encode(message: _47.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Capability;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                }): _47.Capability;
            };
            Owner: {
                encode(message: _47.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Owner;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _47.Owner;
            };
            CapabilityOwners: {
                encode(message: _47.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.CapabilityOwners;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _47.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _50.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _50.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _50.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _50.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _50.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _50.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _50.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _50.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgVerifyInvariant;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _50.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _50.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgVerifyInvariantResponse;
                fromPartial(_: {}): _50.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _49.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _51.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _51.PubKey;
            };
            PrivKey: {
                encode(message: _51.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _51.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _52.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.BIP44Params;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _52.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _53.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Record;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _53.Record;
                };
                Record_Local: {
                    encode(message: _53.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Record_Local;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _53.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _53.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _53.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _53.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Record_Multi;
                    fromPartial(_: {}): _53.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _53.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Record_Offline;
                    fromPartial(_: {}): _53.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _54.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _54.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _55.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _55.PubKey;
            };
            PrivKey: {
                encode(message: _55.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _55.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _56.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _56.PubKey;
            };
            PrivKey: {
                encode(message: _56.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _56.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                validatorOutstandingRewards(request: _59.QueryValidatorOutstandingRewardsRequest): Promise<_59.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _59.QueryValidatorCommissionRequest): Promise<_59.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _59.QueryValidatorSlashesRequest): Promise<_59.QueryValidatorSlashesResponse>;
                delegationRewards(request: _59.QueryDelegationRewardsRequest): Promise<_59.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _59.QueryDelegationTotalRewardsRequest): Promise<_59.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _59.QueryDelegatorValidatorsRequest): Promise<_59.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _59.QueryDelegatorWithdrawAddressRequest): Promise<_59.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _59.QueryCommunityPoolRequest): Promise<_59.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _60.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _60.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _60.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _60.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _60.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _60.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _60.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _60.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _60.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _60.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _60.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _60.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _60.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _60.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _60.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _60.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _60.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _60.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _60.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _60.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _60.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _60.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _60.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _60.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _60.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _60.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _60.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _60.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _60.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _60.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _60.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _60.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _60.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _60.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _60.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _60.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _60.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _60.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _60.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _60.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _60.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _60.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _60.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _60.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _59.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsRequest;
                fromPartial(_: {}): _59.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _59.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _59.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _59.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _59.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _59.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _59.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _59.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _59.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _59.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _59.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _59.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: string | number | import("long").default;
                    endingHeight?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _59.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _59.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _59.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _59.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _59.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _59.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _59.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _59.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _59.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _59.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _59.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _59.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _59.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _59.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _59.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _59.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _59.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _59.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _59.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _59.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryCommunityPoolRequest;
                fromPartial(_: {}): _59.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _59.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _59.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _58.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _58.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _58.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _58.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _58.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _58.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _58.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: string | number | import("long").default;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _58.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _58.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long").default;
                    };
                }): _58.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _58.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: string | number | import("long").default;
                        stake?: string;
                        height?: string | number | import("long").default;
                    };
                }): _58.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _58.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: string | number | import("long").default;
                    period?: string | number | import("long").default;
                    validatorSlashEvent?: {
                        validatorPeriod?: string | number | import("long").default;
                        fraction?: string;
                    };
                }): _58.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: string | number | import("long").default;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long").default;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: string | number | import("long").default;
                            stake?: string;
                            height?: string | number | import("long").default;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: string | number | import("long").default;
                        period?: string | number | import("long").default;
                        validatorSlashEvent?: {
                            validatorPeriod?: string | number | import("long").default;
                            fraction?: string;
                        };
                    }[];
                }): _58.GenesisState;
            };
            Params: {
                encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _57.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _57.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _57.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _57.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long").default;
                }): _57.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _57.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _57.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _57.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: string | number | import("long").default;
                    fraction?: string;
                }): _57.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _57.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                }): _57.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _57.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _57.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _57.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: string | number | import("long").default;
                    stake?: string;
                    height?: string | number | import("long").default;
                }): _57.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _57.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _57.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _57.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _63.QueryEvidenceRequest): Promise<_63.QueryEvidenceResponse>;
                allEvidence(request?: _63.QueryAllEvidenceRequest): Promise<_63.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _64.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _64.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _64.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _64.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _64.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _64.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _64.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _64.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgSubmitEvidence;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _64.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _64.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgSubmitEvidenceResponse;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _64.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _63.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryEvidenceRequest;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _63.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _63.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _63.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _63.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllEvidenceRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _63.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _63.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryAllEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _63.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _62.GenesisState;
            };
            Equivocation: {
                encode(message: _61.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Equivocation;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                    time?: Date;
                    power?: string | number | import("long").default;
                    consensusAddress?: string;
                }): _61.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _67.QueryAllowanceRequest): Promise<_67.QueryAllowanceResponse>;
                allowances(request: _67.QueryAllowancesRequest): Promise<_67.QueryAllowancesResponse>;
                allowancesByGranter(request: _67.QueryAllowancesByGranterRequest): Promise<_67.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _68.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _68.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _68.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _68.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _68.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _68.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _68.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _68.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _68.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _68.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _68.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _68.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _68.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _68.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _68.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgGrantAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _68.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _68.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgGrantAllowanceResponse;
                fromPartial(_: {}): _68.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _68.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgRevokeAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _68.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _68.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgRevokeAllowanceResponse;
                fromPartial(_: {}): _68.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _67.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAllowanceRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _67.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _67.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAllowanceResponse;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _67.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _67.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAllowancesRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _67.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAllowancesResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _67.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _67.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAllowancesByGranterRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _67.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAllowancesByGranterResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _67.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _66.GenesisState;
            };
            BasicAllowance: {
                encode(message: _65.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BasicAllowance;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _65.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _65.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PeriodicAllowance;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _65.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _65.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.AllowedMsgAllowance;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _65.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _65.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Grant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _65.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _69.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                proposals(request: _72.QueryProposalsRequest): Promise<_72.QueryProposalsResponse>;
                vote(request: _72.QueryVoteRequest): Promise<_72.QueryVoteResponse>;
                votes(request: _72.QueryVotesRequest): Promise<_72.QueryVotesResponse>;
                params(request: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                deposit(request: _72.QueryDepositRequest): Promise<_72.QueryDepositResponse>;
                deposits(request: _72.QueryDepositsRequest): Promise<_72.QueryDepositsResponse>;
                tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _73.MsgExecLegacyContent;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _73.MsgExecLegacyContent;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _73.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _73.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _73.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _73.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _73.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _73.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _73.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _73.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _73.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _73.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _73.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSubmitProposal;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _73.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _73.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _73.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _73.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _73.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _73.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgExecLegacyContentResponse;
                fromPartial(_: {}): _73.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _73.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    option?: _71.VoteOption;
                    metadata?: string;
                }): _73.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _73.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgVoteResponse;
                fromPartial(_: {}): _73.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _73.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _71.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _73.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _73.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgVoteWeightedResponse;
                fromPartial(_: {}): _73.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _73.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _73.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _73.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgDepositResponse;
                fromPartial(_: {}): _73.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _72.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _72.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _72.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").default;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _71.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _72.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _72.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _71.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _72.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").default;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _71.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _72.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _72.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                }): _72.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _72.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        options?: {
                            option?: _71.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _72.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _72.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _72.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        options?: {
                            option?: _71.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _72.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _72.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _72.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _72.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _72.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _72.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                }): _72.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _72.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _72.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _72.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _72.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _72.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _72.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _72.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _72.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _72.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _71.VoteOption;
            voteOptionToJSON(object: _71.VoteOption): string;
            proposalStatusFromJSON(object: any): _71.ProposalStatus;
            proposalStatusToJSON(object: _71.ProposalStatus): string;
            VoteOption: typeof _71.VoteOption;
            VoteOptionSDKType: typeof _71.VoteOption;
            ProposalStatus: typeof _71.ProposalStatus;
            ProposalStatusSDKType: typeof _71.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _71.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.WeightedVoteOption;
                fromPartial(object: {
                    option?: _71.VoteOption;
                    weight?: string;
                }): _71.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _71.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _71.Deposit;
            };
            Proposal: {
                encode(message: _71.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _71.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _71.Proposal;
            };
            TallyResult: {
                encode(message: _71.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _71.TallyResult;
            };
            Vote: {
                encode(message: _71.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _71.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _71.Vote;
            };
            DepositParams: {
                encode(message: _71.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _71.DepositParams;
            };
            VotingParams: {
                encode(message: _71.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _71.VotingParams;
            };
            TallyParams: {
                encode(message: _71.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.TallyParams;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _71.TallyParams;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").default;
                    deposits?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        options?: {
                            option?: _71.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: string | number | import("long").default;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _71.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _70.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                proposals(request: _76.QueryProposalsRequest): Promise<_76.QueryProposalsResponse>;
                vote(request: _76.QueryVoteRequest): Promise<_76.QueryVoteResponse>;
                votes(request: _76.QueryVotesRequest): Promise<_76.QueryVotesResponse>;
                params(request: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                deposit(request: _76.QueryDepositRequest): Promise<_76.QueryDepositResponse>;
                deposits(request: _76.QueryDepositsRequest): Promise<_76.QueryDepositsResponse>;
                tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _77.MsgVoteWeighted;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: _77.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _77.MsgVoteWeighted;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: _77.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _77.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _77.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _77.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _77.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _77.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _77.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _77.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _77.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _77.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _77.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _77.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _77.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _77.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    option?: _75.VoteOption;
                }): _77.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _77.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgVoteResponse;
                fromPartial(_: {}): _77.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _77.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _75.VoteOption;
                        weight?: string;
                    }[];
                }): _77.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _77.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgVoteWeightedResponse;
                fromPartial(_: {}): _77.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _77.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _77.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _77.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgDepositResponse;
                fromPartial(_: {}): _77.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _76.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _76.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _76.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: string | number | import("long").default;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _75.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _76.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _76.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _75.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _76.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _76.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: string | number | import("long").default;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _75.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _76.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _76.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                }): _76.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _76.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _75.VoteOption;
                        options?: {
                            option?: _75.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _76.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _76.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _76.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _76.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _75.VoteOption;
                        options?: {
                            option?: _75.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _76.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _76.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _76.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _76.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _76.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _76.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                }): _76.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _76.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _76.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _76.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _76.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _76.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _76.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _76.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _76.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _76.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _76.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _75.VoteOption;
            voteOptionToJSON(object: _75.VoteOption): string;
            proposalStatusFromJSON(object: any): _75.ProposalStatus;
            proposalStatusToJSON(object: _75.ProposalStatus): string;
            VoteOption: typeof _75.VoteOption;
            VoteOptionSDKType: typeof _75.VoteOption;
            ProposalStatus: typeof _75.ProposalStatus;
            ProposalStatusSDKType: typeof _75.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _75.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.WeightedVoteOption;
                fromPartial(object: {
                    option?: _75.VoteOption;
                    weight?: string;
                }): _75.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _75.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _75.TextProposal;
            };
            Deposit: {
                encode(message: _75.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _75.Deposit;
            };
            Proposal: {
                encode(message: _75.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Proposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _75.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _75.Proposal;
            };
            TallyResult: {
                encode(message: _75.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _75.TallyResult;
            };
            Vote: {
                encode(message: _75.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    option?: _75.VoteOption;
                    options?: {
                        option?: _75.VoteOption;
                        weight?: string;
                    }[];
                }): _75.Vote;
            };
            DepositParams: {
                encode(message: _75.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _75.DepositParams;
            };
            VotingParams: {
                encode(message: _75.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _75.VotingParams;
            };
            TallyParams: {
                encode(message: _75.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _75.TallyParams;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").default;
                    deposits?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _75.VoteOption;
                        options?: {
                            option?: _75.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: string | number | import("long").default;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _75.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _74.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _80.QueryGroupInfoRequest): Promise<_80.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _80.QueryGroupPolicyInfoRequest): Promise<_80.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _80.QueryGroupMembersRequest): Promise<_80.QueryGroupMembersResponse>;
                groupsByAdmin(request: _80.QueryGroupsByAdminRequest): Promise<_80.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _80.QueryGroupPoliciesByGroupRequest): Promise<_80.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _80.QueryGroupPoliciesByAdminRequest): Promise<_80.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _80.QueryProposalsByGroupPolicyRequest): Promise<_80.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _80.QueryVoteByProposalVoterRequest): Promise<_80.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _80.QueryVotesByProposalRequest): Promise<_80.QueryVotesByProposalResponse>;
                votesByVoter(request: _80.QueryVotesByVoterRequest): Promise<_80.QueryVotesByVoterResponse>;
                groupsByMember(request: _80.QueryGroupsByMemberRequest): Promise<_80.QueryGroupsByMemberResponse>;
                tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: _81.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _81.MsgWithdrawProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: _81.MsgExec;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _81.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: _81.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _81.MsgWithdrawProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: _81.MsgExec;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _81.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _81.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _81.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _81.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _81.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _81.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _81.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _81.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _81.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _81.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _81.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _81.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _81.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _81.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _81.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _81.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _81.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _81.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _81.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _81.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _81.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _81.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _81.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _81.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _81.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _81.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _81.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _81.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _81.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _82.VoteOption;
            voteOptionToJSON(object: _82.VoteOption): string;
            proposalStatusFromJSON(object: any): _82.ProposalStatus;
            proposalStatusToJSON(object: _82.ProposalStatus): string;
            proposalResultFromJSON(object: any): _82.ProposalResult;
            proposalResultToJSON(object: _82.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _82.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _82.ProposalExecutorResult): string;
            VoteOption: typeof _82.VoteOption;
            VoteOptionSDKType: typeof _82.VoteOption;
            ProposalStatus: typeof _82.ProposalStatus;
            ProposalStatusSDKType: typeof _82.ProposalStatus;
            ProposalResult: typeof _82.ProposalResult;
            ProposalResultSDKType: typeof _82.ProposalResult;
            ProposalExecutorResult: typeof _82.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _82.ProposalExecutorResult;
            Member: {
                encode(message: _82.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Member;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: Date;
                }): _82.Member;
            };
            Members: {
                encode(message: _82.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Members;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _82.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _82.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ThresholdDecisionPolicy;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _82.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _82.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PercentageDecisionPolicy;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _82.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _82.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.DecisionPolicyWindows;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    minExecutionPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _82.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _82.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GroupInfo;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long").default;
                    totalWeight?: string;
                    createdAt?: Date;
                }): _82.GroupInfo;
            };
            GroupMember: {
                encode(message: _82.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GroupMember;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    };
                }): _82.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _82.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GroupPolicyInfo;
                fromPartial(object: {
                    address?: string;
                    groupId?: string | number | import("long").default;
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long").default;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: Date;
                }): _82.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _82.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: Date;
                    groupVersion?: string | number | import("long").default;
                    groupPolicyVersion?: string | number | import("long").default;
                    status?: _82.ProposalStatus;
                    result?: _82.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: Date;
                    executorResult?: _82.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _82.Proposal;
            };
            TallyResult: {
                encode(message: _82.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _82.TallyResult;
            };
            Vote: {
                encode(message: _82.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    option?: _82.VoteOption;
                    metadata?: string;
                    submitTime?: Date;
                }): _82.Vote;
            };
            execFromJSON(object: any): _81.Exec;
            execToJSON(object: _81.Exec): string;
            Exec: typeof _81.Exec;
            ExecSDKType: typeof _81.Exec;
            MsgCreateGroup: {
                encode(message: _81.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateGroup;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    metadata?: string;
                }): _81.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _81.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateGroupResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                }): _81.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _81.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupMembers;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").default;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _81.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _81.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupMembersResponse;
                fromPartial(_: {}): _81.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _81.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupAdmin;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").default;
                    newAdmin?: string;
                }): _81.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _81.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupAdminResponse;
                fromPartial(_: {}): _81.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _81.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupMetadata;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").default;
                    metadata?: string;
                }): _81.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _81.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupMetadataResponse;
                fromPartial(_: {}): _81.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _81.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateGroupPolicy;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").default;
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _81.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _81.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateGroupPolicyResponse;
                fromPartial(object: {
                    address?: string;
                }): _81.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _81.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _81.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _81.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateGroupWithPolicy;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _81.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _81.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                    groupPolicyAddress?: string;
                }): _81.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _81.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: {}): _81.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _81.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _81.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _81.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: {}): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _81.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _81.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _81.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: {}): _81.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _81.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgSubmitProposal;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _81.Exec;
                }): _81.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _81.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _81.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _81.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    address?: string;
                }): _81.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _81.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgWithdrawProposalResponse;
                fromPartial(_: {}): _81.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _81.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    option?: _82.VoteOption;
                    metadata?: string;
                    exec?: _81.Exec;
                }): _81.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _81.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgVoteResponse;
                fromPartial(_: {}): _81.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _81.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    signer?: string;
                }): _81.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _81.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgExecResponse;
                fromPartial(_: {}): _81.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _81.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgLeaveGroup;
                fromPartial(object: {
                    address?: string;
                    groupId?: string | number | import("long").default;
                }): _81.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _81.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgLeaveGroupResponse;
                fromPartial(_: {}): _81.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _80.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupInfoRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                }): _80.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _80.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupInfoResponse;
                fromPartial(object: {
                    info?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        totalWeight?: string;
                        createdAt?: Date;
                    };
                }): _80.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _80.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupPolicyInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _80.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _80.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupPolicyInfoResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    };
                }): _80.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _80.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupMembersRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _80.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupMembersResponse;
                fromPartial(object: {
                    members?: {
                        groupId?: string | number | import("long").default;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _80.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupsByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _80.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupsByAdminResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _80.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _80.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _80.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _80.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _80.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _80.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _80.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").default;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long").default;
                        groupPolicyVersion?: string | number | import("long").default;
                        status?: _82.ProposalStatus;
                        result?: _82.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _82.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _80.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _80.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _80.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").default;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long").default;
                        groupPolicyVersion?: string | number | import("long").default;
                        status?: _82.ProposalStatus;
                        result?: _82.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _82.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _80.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryVoteByProposalVoterRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                }): _80.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _80.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryVoteByProposalVoterResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _82.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    };
                }): _80.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _80.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryVotesByProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _80.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryVotesByProposalResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _82.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _80.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryVotesByVoterRequest;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _80.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryVotesByVoterResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _82.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _80.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupsByMemberRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _80.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryGroupsByMemberResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _80.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _80.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _80.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _80.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _80.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                fromPartial(object: {
                    groupSeq?: string | number | import("long").default;
                    groups?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    groupMembers?: {
                        groupId?: string | number | import("long").default;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    groupPolicySeq?: string | number | import("long").default;
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    proposalSeq?: string | number | import("long").default;
                    proposals?: {
                        id?: string | number | import("long").default;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long").default;
                        groupPolicyVersion?: string | number | import("long").default;
                        status?: _82.ProposalStatus;
                        result?: _82.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _82.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _82.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                }): _79.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _78.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventCreateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                }): _78.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _78.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventUpdateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                }): _78.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _78.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventCreateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _78.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _78.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventUpdateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _78.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _78.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventSubmitProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _78.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _78.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _78.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _78.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _78.EventVote;
            };
            EventExec: {
                encode(message: _78.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    result?: _82.ProposalExecutorResult;
                }): _78.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _78.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventLeaveGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").default;
                    address?: string;
                }): _78.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                inflation(request?: _85.QueryInflationRequest): Promise<_85.QueryInflationResponse>;
                annualProvisions(request?: _85.QueryAnnualProvisionsRequest): Promise<_85.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsRequest;
                fromPartial(_: {}): _85.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").default;
                    };
                }): _85.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _85.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryInflationRequest;
                fromPartial(_: {}): _85.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _85.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _85.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _85.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _85.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _85.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _85.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _84.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _84.Minter;
            };
            Params: {
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: string | number | import("long").default;
                }): _84.Params;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").default;
                    };
                }): _83.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                owner(request: _90.QueryOwnerRequest): Promise<_90.QueryOwnerResponse>;
                supply(request: _90.QuerySupplyRequest): Promise<_90.QuerySupplyResponse>;
                nFTs(request: _90.QueryNFTsRequest): Promise<_90.QueryNFTsResponse>;
                nFT(request: _90.QueryNFTRequest): Promise<_90.QueryNFTResponse>;
                class(request: _90.QueryClassRequest): Promise<_90.QueryClassResponse>;
                classes(request?: _90.QueryClassesRequest): Promise<_90.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _91.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _91.MsgSend): {
                        typeUrl: string;
                        value: _91.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _91.MsgSend): {
                        typeUrl: string;
                        value: _91.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _91.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _91.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _91.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _91.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _91.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSendResponse;
                fromPartial(_: {}): _91.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _90.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryBalanceRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _90.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _90.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryBalanceResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").default;
                }): _90.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _90.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryOwnerRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _90.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _90.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryOwnerResponse;
                fromPartial(object: {
                    owner?: string;
                }): _90.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _90.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QuerySupplyRequest;
                fromPartial(object: {
                    classId?: string;
                }): _90.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _90.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").default;
                }): _90.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _90.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryNFTsRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _90.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryNFTsResponse;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _90.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _90.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryNFTRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _90.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _90.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _90.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _90.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClassRequest;
                fromPartial(object: {
                    classId?: string;
                }): _90.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _90.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClassResponse;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _90.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _90.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClassesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _90.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClassesResponse;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _90.QueryClassesResponse;
            };
            Class: {
                encode(message: _89.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Class;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _89.Class;
            };
            NFT: {
                encode(message: _89.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.NFT;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _89.NFT;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GenesisState;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _88.GenesisState;
            };
            Entry: {
                encode(message: _88.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Entry;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _88.Entry;
            };
            EventSend: {
                encode(message: _87.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EventSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _87.EventSend;
            };
            EventMint: {
                encode(message: _87.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EventMint;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _87.EventMint;
            };
            EventBurn: {
                encode(message: _87.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EventBurn;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _87.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _92.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.TableDescriptor;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _92.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _92.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PrimaryKeyDescriptor;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _92.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _92.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SecondaryIndexDescriptor;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _92.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _92.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SingletonDescriptor;
                fromPartial(object: {
                    id?: number;
                }): _92.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _93.StorageType;
            storageTypeToJSON(object: _93.StorageType): string;
            StorageType: typeof _93.StorageType;
            StorageTypeSDKType: typeof _93.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _93.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ModuleSchemaDescriptor;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _93.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _93.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _93.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _93.StorageType;
                }): _93.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                subspaces(request?: _95.QuerySubspacesRequest): Promise<_95.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _95.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _95.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _95.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryParamsResponse;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _95.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _95.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QuerySubspacesRequest;
                fromPartial(_: {}): _95.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _95.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QuerySubspacesResponse;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _95.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _95.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Subspace;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _95.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _94.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _94.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _94.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ParamChange;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _94.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                signingInfo(request: _97.QuerySigningInfoRequest): Promise<_97.QuerySigningInfoResponse>;
                signingInfos(request?: _97.QuerySigningInfosRequest): Promise<_97.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _99.MsgUnjail): {
                        typeUrl: string;
                        value: _99.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _99.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _99.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _99.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUnjail;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _99.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _99.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgUnjailResponse;
                fromPartial(_: {}): _99.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _98.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ValidatorSigningInfo;
                fromPartial(object: {
                    address?: string;
                    startHeight?: string | number | import("long").default;
                    indexOffset?: string | number | import("long").default;
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: string | number | import("long").default;
                }): _98.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _98.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Params;
                fromPartial(object: {
                    signedBlocksWindow?: string | number | import("long").default;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _98.Params;
            };
            QueryParamsRequest: {
                encode(_: _97.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsRequest;
                fromPartial(_: {}): _97.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _97.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").default;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _97.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _97.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySigningInfoRequest;
                fromPartial(object: {
                    consAddress?: string;
                }): _97.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _97.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySigningInfoResponse;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long").default;
                        indexOffset?: string | number | import("long").default;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").default;
                    };
                }): _97.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _97.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySigningInfosRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _97.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySigningInfosResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: string | number | import("long").default;
                        indexOffset?: string | number | import("long").default;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _97.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").default;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: string | number | import("long").default;
                            indexOffset?: string | number | import("long").default;
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: string | number | import("long").default;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: string | number | import("long").default;
                            missed?: boolean;
                        }[];
                    }[];
                }): _96.GenesisState;
            };
            SigningInfo: {
                encode(message: _96.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SigningInfo;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long").default;
                        indexOffset?: string | number | import("long").default;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").default;
                    };
                }): _96.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _96.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorMissedBlocks;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: string | number | import("long").default;
                        missed?: boolean;
                    }[];
                }): _96.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _96.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MissedBlock;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    missed?: boolean;
                }): _96.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _102.QueryValidatorsRequest): Promise<_102.QueryValidatorsResponse>;
                validator(request: _102.QueryValidatorRequest): Promise<_102.QueryValidatorResponse>;
                validatorDelegations(request: _102.QueryValidatorDelegationsRequest): Promise<_102.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _102.QueryValidatorUnbondingDelegationsRequest): Promise<_102.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _102.QueryDelegationRequest): Promise<_102.QueryDelegationResponse>;
                unbondingDelegation(request: _102.QueryUnbondingDelegationRequest): Promise<_102.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _102.QueryDelegatorDelegationsRequest): Promise<_102.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _102.QueryDelegatorUnbondingDelegationsRequest): Promise<_102.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _102.QueryRedelegationsRequest): Promise<_102.QueryRedelegationsResponse>;
                delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _102.QueryDelegatorValidatorRequest): Promise<_102.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _102.QueryHistoricalInfoRequest): Promise<_102.QueryHistoricalInfoResponse>;
                pool(request?: _102.QueryPoolRequest): Promise<_102.QueryPoolResponse>;
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _104.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _104.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _104.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _104.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _104.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _104.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _104.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _104.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _104.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _104.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _104.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _104.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _104.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCreateValidatorResponse;
                fromPartial(_: {}): _104.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _104.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _104.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _104.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgEditValidatorResponse;
                fromPartial(_: {}): _104.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _104.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _104.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _104.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgDelegateResponse;
                fromPartial(_: {}): _104.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _104.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _104.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _104.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _104.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _104.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _104.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _104.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _104.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _103.BondStatus;
            bondStatusToJSON(object: _103.BondStatus): string;
            BondStatus: typeof _103.BondStatus;
            BondStatusSDKType: typeof _103.BondStatus;
            HistoricalInfo: {
                encode(message: _103.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chainId?: string;
                        height?: string | number | import("long").default;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _103.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _103.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _103.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _103.CommissionRates;
            };
            Commission: {
                encode(message: _103.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _103.Commission;
            };
            Description: {
                encode(message: _103.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _103.Description;
            };
            Validator: {
                encode(message: _103.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _103.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: string | number | import("long").default;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _103.Validator;
            };
            ValAddresses: {
                encode(message: _103.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _103.ValAddresses;
            };
            DVPair: {
                encode(message: _103.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _103.DVPair;
            };
            DVPairs: {
                encode(message: _103.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _103.DVPairs;
            };
            DVVTriplet: {
                encode(message: _103.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _103.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _103.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _103.DVVTriplets;
            };
            Delegation: {
                encode(message: _103.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _103.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _103.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").default;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _103.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _103.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").default;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _103.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _103.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").default;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _103.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _103.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").default;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _103.Redelegation;
            };
            Params: {
                encode(message: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _103.Params;
            };
            DelegationResponse: {
                encode(message: _103.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _103.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _103.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: string | number | import("long").default;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _103.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _103.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _103.RedelegationResponse;
            };
            Pool: {
                encode(message: _103.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _103.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _102.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _102.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _103.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _102.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _102.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _102.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _102.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _103.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _102.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _102.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _102.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _102.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _102.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _102.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _102.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _102.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _102.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _102.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _102.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _102.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _102.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _102.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _102.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _102.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _102.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _102.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _102.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _102.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _102.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _102.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _102.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: string | number | import("long").default;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: string | number | import("long").default;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _102.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _102.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _102.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _102.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _103.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _102.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _102.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _102.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _102.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _103.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _102.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _102.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _102.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _102.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chainId?: string;
                            height?: string | number | import("long").default;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _103.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: string | number | import("long").default;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _102.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _102.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryPoolRequest;
                fromPartial(_: {}): _102.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _102.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _102.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _102.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsRequest;
                fromPartial(_: {}): _102.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _102.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _102.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: string | number | import("long").default;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _103.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _101.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _101.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long").default;
                }): _101.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _100.AuthorizationType;
            authorizationTypeToJSON(object: _100.AuthorizationType): string;
            AuthorizationType: typeof _100.AuthorizationType;
            AuthorizationTypeSDKType: typeof _100.AuthorizationType;
            StakeAuthorization: {
                encode(message: _100.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _100.AuthorizationType;
                }): _100.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _100.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _100.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _105.SignMode;
                signModeToJSON(object: _105.SignMode): string;
                SignMode: typeof _105.SignMode;
                SignModeSDKType: typeof _105.SignMode;
                SignatureDescriptors: {
                    encode(message: _105.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _105.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                    }): _105.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _105.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _105.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }): _105.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _105.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _105.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _105.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _105.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _105.SignMode;
                        signature?: Uint8Array;
                    }): _105.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _105.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _105.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _227.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _106.SimulateRequest): Promise<_106.SimulateResponse>;
                getTx(request: _106.GetTxRequest): Promise<_106.GetTxResponse>;
                broadcastTx(request: _106.BroadcastTxRequest): Promise<_106.BroadcastTxResponse>;
                getTxsEvent(request: _106.GetTxsEventRequest): Promise<_106.GetTxsEventResponse>;
                getBlockWithTxs(request: _106.GetBlockWithTxsRequest): Promise<_106.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            Tx: {
                encode(message: _107.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: string | number | import("long").default;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _105.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: string | number | import("long").default;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _107.Tx;
            };
            TxRaw: {
                encode(message: _107.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _107.TxRaw;
            };
            SignDoc: {
                encode(message: _107.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: string | number | import("long").default;
                }): _107.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _107.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.SignDocDirectAux;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: string | number | import("long").default;
                    sequence?: string | number | import("long").default;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _107.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _107.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: string | number | import("long").default;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _107.TxBody;
            };
            AuthInfo: {
                encode(message: _107.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _105.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: string | number | import("long").default;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _107.AuthInfo;
            };
            SignerInfo: {
                encode(message: _107.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _105.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: string | number | import("long").default;
                }): _107.SignerInfo;
            };
            ModeInfo: {
                encode(message: _107.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _105.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _107.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _107.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _105.SignMode;
                }): _107.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _107.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _107.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _107.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: string | number | import("long").default;
                    payer?: string;
                    granter?: string;
                }): _107.Fee;
            };
            Tip: {
                encode(message: _107.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _107.Tip;
            };
            AuxSignerData: {
                encode(message: _107.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.AuxSignerData;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _105.SignMode;
                    sig?: Uint8Array;
                }): _107.AuxSignerData;
            };
            orderByFromJSON(object: any): _106.OrderBy;
            orderByToJSON(object: _106.OrderBy): string;
            broadcastModeFromJSON(object: any): _106.BroadcastMode;
            broadcastModeToJSON(object: _106.BroadcastMode): string;
            OrderBy: typeof _106.OrderBy;
            OrderBySDKType: typeof _106.OrderBy;
            BroadcastMode: typeof _106.BroadcastMode;
            BroadcastModeSDKType: typeof _106.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _106.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _106.OrderBy;
                }): _106.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _106.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _105.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _106.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _106.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _106.BroadcastMode;
                }): _106.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _106.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _106.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _106.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _105.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _106.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _106.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _106.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _106.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _106.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _106.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _105.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _106.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _106.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _106.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GetBlockWithTxsResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _105.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chainId?: string;
                            height?: string | number | import("long").default;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: string | number | import("long").default;
                                    validatorPower?: string | number | import("long").default;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long").default;
                                                    app?: string | number | import("long").default;
                                                };
                                                chainId?: string;
                                                height?: string | number | import("long").default;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: string | number | import("long").default;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long").default;
                                                proposerPriority?: string | number | import("long").default;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long").default;
                                                proposerPriority?: string | number | import("long").default;
                                            };
                                            totalVotingPower?: string | number | import("long").default;
                                        };
                                    };
                                    commonHeight?: string | number | import("long").default;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").default;
                                        proposerPriority?: string | number | import("long").default;
                                    }[];
                                    totalVotingPower?: string | number | import("long").default;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _106.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _108.QueryCurrentPlanRequest): Promise<_108.QueryCurrentPlanResponse>;
                appliedPlan(request: _108.QueryAppliedPlanRequest): Promise<_108.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _108.QueryModuleVersionsRequest): Promise<_108.QueryModuleVersionsResponse>;
                authority(request?: _108.QueryAuthorityRequest): Promise<_108.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _109.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _109.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _109.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _109.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _109.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _109.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _109.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _109.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _110.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: string | number | import("long").default;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _110.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _110.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").default;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _110.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _110.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _110.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _110.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long").default;
                }): _110.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _109.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSoftwareUpgrade;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").default;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _109.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _109.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSoftwareUpgradeResponse;
                fromPartial(_: {}): _109.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _109.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCancelUpgrade;
                fromPartial(object: {
                    authority?: string;
                }): _109.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _109.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCancelUpgradeResponse;
                fromPartial(_: {}): _109.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _108.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCurrentPlanRequest;
                fromPartial(_: {}): _108.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _108.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryCurrentPlanResponse;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").default;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _108.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _108.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _108.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _108.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _108.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _108.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: string | number | import("long").default;
                }): _108.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _108.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _108.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _108.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string;
                }): _108.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _108.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryModuleVersionsResponse;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: string | number | import("long").default;
                    }[];
                }): _108.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _108.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryAuthorityRequest;
                fromPartial(_: {}): _108.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _108.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryAuthorityResponse;
                fromPartial(object: {
                    address?: string;
                }): _108.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _111.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _111.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _111.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _111.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _111.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _111.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _111.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _111.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _111.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _111.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _112.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.BaseVestingAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long").default;
                }): _112.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _112.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ContinuousVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                    startTime?: string | number | import("long").default;
                }): _112.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _112.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DelayedVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                }): _112.DelayedVestingAccount;
            };
            Period: {
                encode(message: _112.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Period;
                fromPartial(object: {
                    length?: string | number | import("long").default;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _112.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _112.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PeriodicVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                    startTime?: string | number | import("long").default;
                    vestingPeriods?: {
                        length?: string | number | import("long").default;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _112.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _112.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PermanentLockedAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                }): _112.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _111.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long").default;
                    delayed?: boolean;
                }): _111.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _111.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreateVestingAccountResponse;
                fromPartial(_: {}): _111.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _111.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreatePermanentLockedAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _111.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _111.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: {}): _111.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _111.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreatePeriodicVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: string | number | import("long").default;
                    vestingPeriods?: {
                        length?: string | number | import("long").default;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _111.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _111.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: {}): _111.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _229.MsgClientImpl;
                };
                bank: {
                    v1beta1: _230.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _231.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _232.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _233.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _234.MsgClientImpl;
                };
                gov: {
                    v1: _235.MsgClientImpl;
                    v1beta1: _236.MsgClientImpl;
                };
                group: {
                    v1: _237.MsgClientImpl;
                };
                nft: {
                    v1beta1: _238.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _239.MsgClientImpl;
                };
                staking: {
                    v1beta1: _240.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _241.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _242.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _23.QueryConfigRequest): Promise<_23.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                        account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        moduleAccounts(request?: _26.QueryModuleAccountsRequest): Promise<_26.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _26.Bech32PrefixRequest): Promise<_26.Bech32PrefixResponse>;
                        addressBytesToString(request: _26.AddressBytesToStringRequest): Promise<_26.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _26.AddressStringToBytesRequest): Promise<_26.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                        granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                        granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                        allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                        spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                        supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
                        denomOwners(request: _35.QueryDenomOwnersRequest): Promise<_35.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _45.GetNodeInfoRequest): Promise<_45.GetNodeInfoResponse>;
                            getSyncing(request?: _45.GetSyncingRequest): Promise<_45.GetSyncingResponse>;
                            getLatestBlock(request?: _45.GetLatestBlockRequest): Promise<_45.GetLatestBlockResponse>;
                            getBlockByHeight(request: _45.GetBlockByHeightRequest): Promise<_45.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _45.GetLatestValidatorSetRequest): Promise<_45.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _45.GetValidatorSetByHeightRequest): Promise<_45.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _59.QueryValidatorOutstandingRewardsRequest): Promise<_59.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _59.QueryValidatorCommissionRequest): Promise<_59.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _59.QueryValidatorSlashesRequest): Promise<_59.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _59.QueryDelegationRewardsRequest): Promise<_59.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _59.QueryDelegationTotalRewardsRequest): Promise<_59.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _59.QueryDelegatorValidatorsRequest): Promise<_59.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _59.QueryDelegatorWithdrawAddressRequest): Promise<_59.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _59.QueryCommunityPoolRequest): Promise<_59.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _63.QueryEvidenceRequest): Promise<_63.QueryEvidenceResponse>;
                        allEvidence(request?: _63.QueryAllEvidenceRequest): Promise<_63.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _67.QueryAllowanceRequest): Promise<_67.QueryAllowanceResponse>;
                        allowances(request: _67.QueryAllowancesRequest): Promise<_67.QueryAllowancesResponse>;
                        allowancesByGranter(request: _67.QueryAllowancesByGranterRequest): Promise<_67.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                        proposals(request: _72.QueryProposalsRequest): Promise<_72.QueryProposalsResponse>;
                        vote(request: _72.QueryVoteRequest): Promise<_72.QueryVoteResponse>;
                        votes(request: _72.QueryVotesRequest): Promise<_72.QueryVotesResponse>;
                        params(request: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                        deposit(request: _72.QueryDepositRequest): Promise<_72.QueryDepositResponse>;
                        deposits(request: _72.QueryDepositsRequest): Promise<_72.QueryDepositsResponse>;
                        tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                        proposals(request: _76.QueryProposalsRequest): Promise<_76.QueryProposalsResponse>;
                        vote(request: _76.QueryVoteRequest): Promise<_76.QueryVoteResponse>;
                        votes(request: _76.QueryVotesRequest): Promise<_76.QueryVotesResponse>;
                        params(request: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        deposit(request: _76.QueryDepositRequest): Promise<_76.QueryDepositResponse>;
                        deposits(request: _76.QueryDepositsRequest): Promise<_76.QueryDepositsResponse>;
                        tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _80.QueryGroupInfoRequest): Promise<_80.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _80.QueryGroupPolicyInfoRequest): Promise<_80.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _80.QueryGroupMembersRequest): Promise<_80.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _80.QueryGroupsByAdminRequest): Promise<_80.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _80.QueryGroupPoliciesByGroupRequest): Promise<_80.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _80.QueryGroupPoliciesByAdminRequest): Promise<_80.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _80.QueryProposalsByGroupPolicyRequest): Promise<_80.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _80.QueryVoteByProposalVoterRequest): Promise<_80.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _80.QueryVotesByProposalRequest): Promise<_80.QueryVotesByProposalResponse>;
                        votesByVoter(request: _80.QueryVotesByVoterRequest): Promise<_80.QueryVotesByVoterResponse>;
                        groupsByMember(request: _80.QueryGroupsByMemberRequest): Promise<_80.QueryGroupsByMemberResponse>;
                        tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        inflation(request?: _85.QueryInflationRequest): Promise<_85.QueryInflationResponse>;
                        annualProvisions(request?: _85.QueryAnnualProvisionsRequest): Promise<_85.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                        owner(request: _90.QueryOwnerRequest): Promise<_90.QueryOwnerResponse>;
                        supply(request: _90.QuerySupplyRequest): Promise<_90.QuerySupplyResponse>;
                        nFTs(request: _90.QueryNFTsRequest): Promise<_90.QueryNFTsResponse>;
                        nFT(request: _90.QueryNFTRequest): Promise<_90.QueryNFTResponse>;
                        class(request: _90.QueryClassRequest): Promise<_90.QueryClassResponse>;
                        classes(request?: _90.QueryClassesRequest): Promise<_90.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        subspaces(request?: _95.QuerySubspacesRequest): Promise<_95.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                        signingInfo(request: _97.QuerySigningInfoRequest): Promise<_97.QuerySigningInfoResponse>;
                        signingInfos(request?: _97.QuerySigningInfosRequest): Promise<_97.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _102.QueryValidatorsRequest): Promise<_102.QueryValidatorsResponse>;
                        validator(request: _102.QueryValidatorRequest): Promise<_102.QueryValidatorResponse>;
                        validatorDelegations(request: _102.QueryValidatorDelegationsRequest): Promise<_102.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _102.QueryValidatorUnbondingDelegationsRequest): Promise<_102.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _102.QueryDelegationRequest): Promise<_102.QueryDelegationResponse>;
                        unbondingDelegation(request: _102.QueryUnbondingDelegationRequest): Promise<_102.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _102.QueryDelegatorDelegationsRequest): Promise<_102.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _102.QueryDelegatorUnbondingDelegationsRequest): Promise<_102.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _102.QueryRedelegationsRequest): Promise<_102.QueryRedelegationsResponse>;
                        delegatorValidators(request: _102.QueryDelegatorValidatorsRequest): Promise<_102.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _102.QueryDelegatorValidatorRequest): Promise<_102.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _102.QueryHistoricalInfoRequest): Promise<_102.QueryHistoricalInfoResponse>;
                        pool(request?: _102.QueryPoolRequest): Promise<_102.QueryPoolResponse>;
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _106.SimulateRequest): Promise<_106.SimulateResponse>;
                        getTx(request: _106.GetTxRequest): Promise<_106.GetTxResponse>;
                        broadcastTx(request: _106.BroadcastTxRequest): Promise<_106.BroadcastTxResponse>;
                        getTxsEvent(request: _106.GetTxsEventRequest): Promise<_106.GetTxsEventResponse>;
                        getBlockWithTxs(request: _106.GetBlockWithTxsRequest): Promise<_106.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _108.QueryCurrentPlanRequest): Promise<_108.QueryCurrentPlanResponse>;
                        appliedPlan(request: _108.QueryAppliedPlanRequest): Promise<_108.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _108.QueryModuleVersionsRequest): Promise<_108.QueryModuleVersionsResponse>;
                        authority(request?: _108.QueryAuthorityRequest): Promise<_108.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _194.LCDQueryClient;
                };
                authz: {
                    v1beta1: _195.LCDQueryClient;
                };
                bank: {
                    v1beta1: _196.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _197.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _198.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _199.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _200.LCDQueryClient;
                };
                gov: {
                    v1: _201.LCDQueryClient;
                    v1beta1: _202.LCDQueryClient;
                };
                group: {
                    v1: _203.LCDQueryClient;
                };
                mint: {
                    v1beta1: _204.LCDQueryClient;
                };
                nft: {
                    v1beta1: _205.LCDQueryClient;
                };
                params: {
                    v1beta1: _206.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _207.LCDQueryClient;
                };
                staking: {
                    v1beta1: _208.LCDQueryClient;
                };
                tx: {
                    v1beta1: _209.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _210.LCDQueryClient;
                };
            };
        }>;
    };
}
