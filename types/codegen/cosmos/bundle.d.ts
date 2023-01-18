import * as _19 from "./app/v1alpha1/config";
import * as _20 from "./app/v1alpha1/module";
import * as _21 from "./app/v1alpha1/query";
import * as _22 from "./auth/v1beta1/auth";
import * as _23 from "./auth/v1beta1/genesis";
import * as _24 from "./auth/v1beta1/query";
import * as _25 from "./authz/v1beta1/authz";
import * as _26 from "./authz/v1beta1/event";
import * as _27 from "./authz/v1beta1/genesis";
import * as _28 from "./authz/v1beta1/query";
import * as _29 from "./authz/v1beta1/tx";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/kv/v1beta1/kv";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v1beta1/reflection";
import * as _39 from "./base/reflection/v2alpha1/reflection";
import * as _40 from "./base/snapshots/v1beta1/snapshot";
import * as _41 from "./base/store/v1beta1/commit_info";
import * as _42 from "./base/store/v1beta1/listening";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./capability/v1beta1/capability";
import * as _46 from "./capability/v1beta1/genesis";
import * as _47 from "./crisis/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/tx";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/hd/v1/hd";
import * as _51 from "./crypto/keyring/v1/record";
import * as _52 from "./crypto/multisig/keys";
import * as _53 from "./crypto/secp256k1/keys";
import * as _54 from "./crypto/secp256r1/keys";
import * as _55 from "./distribution/v1beta1/distribution";
import * as _56 from "./distribution/v1beta1/genesis";
import * as _57 from "./distribution/v1beta1/query";
import * as _58 from "./distribution/v1beta1/tx";
import * as _59 from "./evidence/v1beta1/evidence";
import * as _60 from "./evidence/v1beta1/genesis";
import * as _61 from "./evidence/v1beta1/query";
import * as _62 from "./evidence/v1beta1/tx";
import * as _63 from "./feegrant/v1beta1/feegrant";
import * as _64 from "./feegrant/v1beta1/genesis";
import * as _65 from "./feegrant/v1beta1/query";
import * as _66 from "./feegrant/v1beta1/tx";
import * as _67 from "./genutil/v1beta1/genesis";
import * as _68 from "./gov/v1/genesis";
import * as _69 from "./gov/v1/gov";
import * as _70 from "./gov/v1/query";
import * as _71 from "./gov/v1/tx";
import * as _72 from "./gov/v1beta1/genesis";
import * as _73 from "./gov/v1beta1/gov";
import * as _74 from "./gov/v1beta1/query";
import * as _75 from "./gov/v1beta1/tx";
import * as _76 from "./group/v1/events";
import * as _77 from "./group/v1/genesis";
import * as _78 from "./group/v1/query";
import * as _79 from "./group/v1/tx";
import * as _80 from "./group/v1/types";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
import * as _85 from "./nft/v1beta1/event";
import * as _86 from "./nft/v1beta1/genesis";
import * as _87 from "./nft/v1beta1/nft";
import * as _88 from "./nft/v1beta1/query";
import * as _89 from "./nft/v1beta1/tx";
import * as _90 from "./orm/v1/orm";
import * as _91 from "./orm/v1alpha1/schema";
import * as _92 from "./params/v1beta1/params";
import * as _93 from "./params/v1beta1/query";
import * as _94 from "./slashing/v1beta1/genesis";
import * as _95 from "./slashing/v1beta1/query";
import * as _96 from "./slashing/v1beta1/slashing";
import * as _97 from "./slashing/v1beta1/tx";
import * as _98 from "./staking/v1beta1/authz";
import * as _99 from "./staking/v1beta1/genesis";
import * as _100 from "./staking/v1beta1/query";
import * as _101 from "./staking/v1beta1/staking";
import * as _102 from "./staking/v1beta1/tx";
import * as _103 from "./tx/signing/v1beta1/signing";
import * as _104 from "./tx/v1beta1/service";
import * as _105 from "./tx/v1beta1/tx";
import * as _106 from "./upgrade/v1beta1/query";
import * as _107 from "./upgrade/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/upgrade";
import * as _109 from "./vesting/v1beta1/tx";
import * as _110 from "./vesting/v1beta1/vesting";
import * as _136 from "./auth/v1beta1/query.lcd";
import * as _137 from "./authz/v1beta1/query.lcd";
import * as _138 from "./bank/v1beta1/query.lcd";
import * as _139 from "./base/tendermint/v1beta1/query.lcd";
import * as _140 from "./distribution/v1beta1/query.lcd";
import * as _141 from "./evidence/v1beta1/query.lcd";
import * as _142 from "./feegrant/v1beta1/query.lcd";
import * as _143 from "./gov/v1/query.lcd";
import * as _144 from "./gov/v1beta1/query.lcd";
import * as _145 from "./group/v1/query.lcd";
import * as _146 from "./mint/v1beta1/query.lcd";
import * as _147 from "./nft/v1beta1/query.lcd";
import * as _148 from "./params/v1beta1/query.lcd";
import * as _149 from "./slashing/v1beta1/query.lcd";
import * as _150 from "./staking/v1beta1/query.lcd";
import * as _151 from "./tx/v1beta1/service.lcd";
import * as _152 from "./upgrade/v1beta1/query.lcd";
import * as _153 from "./app/v1alpha1/query.rpc.Query";
import * as _154 from "./auth/v1beta1/query.rpc.Query";
import * as _155 from "./authz/v1beta1/query.rpc.Query";
import * as _156 from "./bank/v1beta1/query.rpc.Query";
import * as _157 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _158 from "./distribution/v1beta1/query.rpc.Query";
import * as _159 from "./evidence/v1beta1/query.rpc.Query";
import * as _160 from "./feegrant/v1beta1/query.rpc.Query";
import * as _161 from "./gov/v1/query.rpc.Query";
import * as _162 from "./gov/v1beta1/query.rpc.Query";
import * as _163 from "./group/v1/query.rpc.Query";
import * as _164 from "./mint/v1beta1/query.rpc.Query";
import * as _165 from "./nft/v1beta1/query.rpc.Query";
import * as _166 from "./params/v1beta1/query.rpc.Query";
import * as _167 from "./slashing/v1beta1/query.rpc.Query";
import * as _168 from "./staking/v1beta1/query.rpc.Query";
import * as _169 from "./tx/v1beta1/service.rpc.Service";
import * as _170 from "./upgrade/v1beta1/query.rpc.Query";
import * as _171 from "./authz/v1beta1/tx.rpc.msg";
import * as _172 from "./bank/v1beta1/tx.rpc.msg";
import * as _173 from "./crisis/v1beta1/tx.rpc.msg";
import * as _174 from "./distribution/v1beta1/tx.rpc.msg";
import * as _175 from "./evidence/v1beta1/tx.rpc.msg";
import * as _176 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _177 from "./gov/v1/tx.rpc.msg";
import * as _178 from "./gov/v1beta1/tx.rpc.msg";
import * as _179 from "./group/v1/tx.rpc.msg";
import * as _180 from "./nft/v1beta1/tx.rpc.msg";
import * as _181 from "./slashing/v1beta1/tx.rpc.msg";
import * as _182 from "./staking/v1beta1/tx.rpc.msg";
import * as _183 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _184 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _21.QueryConfigRequest): Promise<_21.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _21.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryConfigRequest;
                fromJSON(_: any): _21.QueryConfigRequest;
                toJSON(_: _21.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_21.QueryConfigRequest>): _21.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _21.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryConfigResponse;
                fromJSON(object: any): _21.QueryConfigResponse;
                toJSON(message: _21.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_21.QueryConfigResponse>): _21.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _20.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ModuleDescriptor;
                fromJSON(object: any): _20.ModuleDescriptor;
                toJSON(message: _20.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_20.ModuleDescriptor>): _20.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _20.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PackageReference;
                fromJSON(object: any): _20.PackageReference;
                toJSON(message: _20.PackageReference): unknown;
                fromPartial(object: Partial<_20.PackageReference>): _20.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _20.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.MigrateFromInfo;
                fromJSON(object: any): _20.MigrateFromInfo;
                toJSON(message: _20.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_20.MigrateFromInfo>): _20.MigrateFromInfo;
            };
            Config: {
                encode(message: _19.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Config;
                fromJSON(object: any): _19.Config;
                toJSON(message: _19.Config): unknown;
                fromPartial(object: Partial<_19.Config>): _19.Config;
            };
            ModuleConfig: {
                encode(message: _19.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ModuleConfig;
                fromJSON(object: any): _19.ModuleConfig;
                toJSON(message: _19.ModuleConfig): unknown;
                fromPartial(object: Partial<_19.ModuleConfig>): _19.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _24.QueryAccountsRequest): Promise<_24.QueryAccountsResponse>;
                account(request: _24.QueryAccountRequest): Promise<_24.QueryAccountResponse>;
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                moduleAccounts(request?: _24.QueryModuleAccountsRequest): Promise<_24.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _24.Bech32PrefixRequest): Promise<_24.Bech32PrefixResponse>;
                addressBytesToString(request: _24.AddressBytesToStringRequest): Promise<_24.AddressBytesToStringResponse>;
                addressStringToBytes(request: _24.AddressStringToBytesRequest): Promise<_24.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _136.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _24.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAccountsRequest;
                fromJSON(object: any): _24.QueryAccountsRequest;
                toJSON(message: _24.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_24.QueryAccountsRequest>): _24.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _24.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAccountsResponse;
                fromJSON(object: any): _24.QueryAccountsResponse;
                toJSON(message: _24.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_24.QueryAccountsResponse>): _24.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _24.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAccountRequest;
                fromJSON(object: any): _24.QueryAccountRequest;
                toJSON(message: _24.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_24.QueryAccountRequest>): _24.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _24.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryModuleAccountsRequest;
                fromJSON(_: any): _24.QueryModuleAccountsRequest;
                toJSON(_: _24.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_24.QueryModuleAccountsRequest>): _24.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromJSON(object: any): _24.QueryParamsResponse;
                toJSON(message: _24.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _24.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryAccountResponse;
                fromJSON(object: any): _24.QueryAccountResponse;
                toJSON(message: _24.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_24.QueryAccountResponse>): _24.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromJSON(_: any): _24.QueryParamsRequest;
                toJSON(_: _24.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _24.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryModuleAccountsResponse;
                fromJSON(object: any): _24.QueryModuleAccountsResponse;
                toJSON(message: _24.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_24.QueryModuleAccountsResponse>): _24.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _24.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Bech32PrefixRequest;
                fromJSON(_: any): _24.Bech32PrefixRequest;
                toJSON(_: _24.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_24.Bech32PrefixRequest>): _24.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _24.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Bech32PrefixResponse;
                fromJSON(object: any): _24.Bech32PrefixResponse;
                toJSON(message: _24.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_24.Bech32PrefixResponse>): _24.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _24.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.AddressBytesToStringRequest;
                fromJSON(object: any): _24.AddressBytesToStringRequest;
                toJSON(message: _24.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_24.AddressBytesToStringRequest>): _24.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _24.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.AddressBytesToStringResponse;
                fromJSON(object: any): _24.AddressBytesToStringResponse;
                toJSON(message: _24.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_24.AddressBytesToStringResponse>): _24.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _24.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.AddressStringToBytesRequest;
                fromJSON(object: any): _24.AddressStringToBytesRequest;
                toJSON(message: _24.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_24.AddressStringToBytesRequest>): _24.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _24.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.AddressStringToBytesResponse;
                fromJSON(object: any): _24.AddressStringToBytesResponse;
                toJSON(message: _24.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_24.AddressStringToBytesResponse>): _24.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromJSON(object: any): _23.GenesisState;
                toJSON(message: _23.GenesisState): unknown;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
            };
            BaseAccount: {
                encode(message: _22.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.BaseAccount;
                fromJSON(object: any): _22.BaseAccount;
                toJSON(message: _22.BaseAccount): unknown;
                fromPartial(object: Partial<_22.BaseAccount>): _22.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _22.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ModuleAccount;
                fromJSON(object: any): _22.ModuleAccount;
                toJSON(message: _22.ModuleAccount): unknown;
                fromPartial(object: Partial<_22.ModuleAccount>): _22.ModuleAccount;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Params;
                fromJSON(object: any): _22.Params;
                toJSON(message: _22.Params): unknown;
                fromPartial(object: Partial<_22.Params>): _22.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _28.QueryGrantsRequest): Promise<_28.QueryGrantsResponse>;
                granterGrants(request: _28.QueryGranterGrantsRequest): Promise<_28.QueryGranterGrantsResponse>;
                granteeGrants(request: _28.QueryGranteeGrantsRequest): Promise<_28.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _137.LCDQueryClient;
            MsgGrant: {
                encode(message: _29.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgGrant;
                fromJSON(object: any): _29.MsgGrant;
                toJSON(message: _29.MsgGrant): unknown;
                fromPartial(object: Partial<_29.MsgGrant>): _29.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _29.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExecResponse;
                fromJSON(object: any): _29.MsgExecResponse;
                toJSON(message: _29.MsgExecResponse): unknown;
                fromPartial(object: Partial<_29.MsgExecResponse>): _29.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _29.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExec;
                fromJSON(object: any): _29.MsgExec;
                toJSON(message: _29.MsgExec): unknown;
                fromPartial(object: Partial<_29.MsgExec>): _29.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _29.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgGrantResponse;
                fromJSON(_: any): _29.MsgGrantResponse;
                toJSON(_: _29.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_29.MsgGrantResponse>): _29.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _29.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgRevoke;
                fromJSON(object: any): _29.MsgRevoke;
                toJSON(message: _29.MsgRevoke): unknown;
                fromPartial(object: Partial<_29.MsgRevoke>): _29.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _29.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgRevokeResponse;
                fromJSON(_: any): _29.MsgRevokeResponse;
                toJSON(_: _29.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_29.MsgRevokeResponse>): _29.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _28.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryGrantsRequest;
                fromJSON(object: any): _28.QueryGrantsRequest;
                toJSON(message: _28.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_28.QueryGrantsRequest>): _28.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _28.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryGrantsResponse;
                fromJSON(object: any): _28.QueryGrantsResponse;
                toJSON(message: _28.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_28.QueryGrantsResponse>): _28.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _28.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryGranterGrantsRequest;
                fromJSON(object: any): _28.QueryGranterGrantsRequest;
                toJSON(message: _28.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_28.QueryGranterGrantsRequest>): _28.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _28.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryGranterGrantsResponse;
                fromJSON(object: any): _28.QueryGranterGrantsResponse;
                toJSON(message: _28.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_28.QueryGranterGrantsResponse>): _28.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _28.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryGranteeGrantsRequest;
                fromJSON(object: any): _28.QueryGranteeGrantsRequest;
                toJSON(message: _28.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_28.QueryGranteeGrantsRequest>): _28.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _28.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryGranteeGrantsResponse;
                fromJSON(object: any): _28.QueryGranteeGrantsResponse;
                toJSON(message: _28.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_28.QueryGranteeGrantsResponse>): _28.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromJSON(object: any): _27.GenesisState;
                toJSON(message: _27.GenesisState): unknown;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
            EventGrant: {
                encode(message: _26.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.EventGrant;
                fromJSON(object: any): _26.EventGrant;
                toJSON(message: _26.EventGrant): unknown;
                fromPartial(object: Partial<_26.EventGrant>): _26.EventGrant;
            };
            EventRevoke: {
                encode(message: _26.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.EventRevoke;
                fromJSON(object: any): _26.EventRevoke;
                toJSON(message: _26.EventRevoke): unknown;
                fromPartial(object: Partial<_26.EventRevoke>): _26.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _25.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenericAuthorization;
                fromJSON(object: any): _25.GenericAuthorization;
                toJSON(message: _25.GenericAuthorization): unknown;
                fromPartial(object: Partial<_25.GenericAuthorization>): _25.GenericAuthorization;
            };
            Grant: {
                encode(message: _25.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Grant;
                fromJSON(object: any): _25.Grant;
                toJSON(message: _25.Grant): unknown;
                fromPartial(object: Partial<_25.Grant>): _25.Grant;
            };
            GrantAuthorization: {
                encode(message: _25.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GrantAuthorization;
                fromJSON(object: any): _25.GrantAuthorization;
                toJSON(message: _25.GrantAuthorization): unknown;
                fromPartial(object: Partial<_25.GrantAuthorization>): _25.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _25.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GrantQueueItem;
                fromJSON(object: any): _25.GrantQueueItem;
                toJSON(message: _25.GrantQueueItem): unknown;
                fromPartial(object: Partial<_25.GrantQueueItem>): _25.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _33.QueryBalanceRequest): Promise<_33.QueryBalanceResponse>;
                allBalances(request: _33.QueryAllBalancesRequest): Promise<_33.QueryAllBalancesResponse>;
                spendableBalances(request: _33.QuerySpendableBalancesRequest): Promise<_33.QuerySpendableBalancesResponse>;
                totalSupply(request?: _33.QueryTotalSupplyRequest): Promise<_33.QueryTotalSupplyResponse>;
                supplyOf(request: _33.QuerySupplyOfRequest): Promise<_33.QuerySupplyOfResponse>;
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                denomMetadata(request: _33.QueryDenomMetadataRequest): Promise<_33.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _33.QueryDenomsMetadataRequest): Promise<_33.QueryDenomsMetadataResponse>;
                denomOwners(request: _33.QueryDenomOwnersRequest): Promise<_33.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            MsgSend: {
                encode(message: _34.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSend;
                fromJSON(object: any): _34.MsgSend;
                toJSON(message: _34.MsgSend): unknown;
                fromPartial(object: Partial<_34.MsgSend>): _34.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _34.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSendResponse;
                fromJSON(_: any): _34.MsgSendResponse;
                toJSON(_: _34.MsgSendResponse): unknown;
                fromPartial(_: Partial<_34.MsgSendResponse>): _34.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _34.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgMultiSend;
                fromJSON(object: any): _34.MsgMultiSend;
                toJSON(message: _34.MsgMultiSend): unknown;
                fromPartial(object: Partial<_34.MsgMultiSend>): _34.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _34.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgMultiSendResponse;
                fromJSON(_: any): _34.MsgMultiSendResponse;
                toJSON(_: _34.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_34.MsgMultiSendResponse>): _34.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _33.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryBalanceRequest;
                fromJSON(object: any): _33.QueryBalanceRequest;
                toJSON(message: _33.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_33.QueryBalanceRequest>): _33.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _33.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryBalanceResponse;
                fromJSON(object: any): _33.QueryBalanceResponse;
                toJSON(message: _33.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_33.QueryBalanceResponse>): _33.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _33.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryAllBalancesRequest;
                fromJSON(object: any): _33.QueryAllBalancesRequest;
                toJSON(message: _33.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_33.QueryAllBalancesRequest>): _33.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _33.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryAllBalancesResponse;
                fromJSON(object: any): _33.QueryAllBalancesResponse;
                toJSON(message: _33.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_33.QueryAllBalancesResponse>): _33.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _33.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QuerySpendableBalancesRequest;
                fromJSON(object: any): _33.QuerySpendableBalancesRequest;
                toJSON(message: _33.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_33.QuerySpendableBalancesRequest>): _33.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _33.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QuerySpendableBalancesResponse;
                fromJSON(object: any): _33.QuerySpendableBalancesResponse;
                toJSON(message: _33.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_33.QuerySpendableBalancesResponse>): _33.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _33.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryTotalSupplyRequest;
                fromJSON(object: any): _33.QueryTotalSupplyRequest;
                toJSON(message: _33.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_33.QueryTotalSupplyRequest>): _33.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _33.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryTotalSupplyResponse;
                fromJSON(object: any): _33.QueryTotalSupplyResponse;
                toJSON(message: _33.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_33.QueryTotalSupplyResponse>): _33.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _33.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QuerySupplyOfRequest;
                fromJSON(object: any): _33.QuerySupplyOfRequest;
                toJSON(message: _33.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_33.QuerySupplyOfRequest>): _33.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _33.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QuerySupplyOfResponse;
                fromJSON(object: any): _33.QuerySupplyOfResponse;
                toJSON(message: _33.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_33.QuerySupplyOfResponse>): _33.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
                fromJSON(_: any): _33.QueryParamsRequest;
                toJSON(_: _33.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
                fromJSON(object: any): _33.QueryParamsResponse;
                toJSON(message: _33.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _33.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDenomsMetadataRequest;
                fromJSON(object: any): _33.QueryDenomsMetadataRequest;
                toJSON(message: _33.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_33.QueryDenomsMetadataRequest>): _33.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _33.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDenomsMetadataResponse;
                fromJSON(object: any): _33.QueryDenomsMetadataResponse;
                toJSON(message: _33.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_33.QueryDenomsMetadataResponse>): _33.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _33.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDenomMetadataRequest;
                fromJSON(object: any): _33.QueryDenomMetadataRequest;
                toJSON(message: _33.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_33.QueryDenomMetadataRequest>): _33.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _33.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDenomMetadataResponse;
                fromJSON(object: any): _33.QueryDenomMetadataResponse;
                toJSON(message: _33.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_33.QueryDenomMetadataResponse>): _33.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _33.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDenomOwnersRequest;
                fromJSON(object: any): _33.QueryDenomOwnersRequest;
                toJSON(message: _33.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_33.QueryDenomOwnersRequest>): _33.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _33.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DenomOwner;
                fromJSON(object: any): _33.DenomOwner;
                toJSON(message: _33.DenomOwner): unknown;
                fromPartial(object: Partial<_33.DenomOwner>): _33.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _33.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDenomOwnersResponse;
                fromJSON(object: any): _33.QueryDenomOwnersResponse;
                toJSON(message: _33.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_33.QueryDenomOwnersResponse>): _33.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromJSON(object: any): _32.GenesisState;
                toJSON(message: _32.GenesisState): unknown;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            Balance: {
                encode(message: _32.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Balance;
                fromJSON(object: any): _32.Balance;
                toJSON(message: _32.Balance): unknown;
                fromPartial(object: Partial<_32.Balance>): _32.Balance;
            };
            Params: {
                encode(message: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Params;
                fromJSON(object: any): _31.Params;
                toJSON(message: _31.Params): unknown;
                fromPartial(object: Partial<_31.Params>): _31.Params;
            };
            SendEnabled: {
                encode(message: _31.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.SendEnabled;
                fromJSON(object: any): _31.SendEnabled;
                toJSON(message: _31.SendEnabled): unknown;
                fromPartial(object: Partial<_31.SendEnabled>): _31.SendEnabled;
            };
            Input: {
                encode(message: _31.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Input;
                fromJSON(object: any): _31.Input;
                toJSON(message: _31.Input): unknown;
                fromPartial(object: Partial<_31.Input>): _31.Input;
            };
            Output: {
                encode(message: _31.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Output;
                fromJSON(object: any): _31.Output;
                toJSON(message: _31.Output): unknown;
                fromPartial(object: Partial<_31.Output>): _31.Output;
            };
            Supply: {
                encode(message: _31.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Supply;
                fromJSON(object: any): _31.Supply;
                toJSON(message: _31.Supply): unknown;
                fromPartial(object: Partial<_31.Supply>): _31.Supply;
            };
            DenomUnit: {
                encode(message: _31.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DenomUnit;
                fromJSON(object: any): _31.DenomUnit;
                toJSON(message: _31.DenomUnit): unknown;
                fromPartial(object: Partial<_31.DenomUnit>): _31.DenomUnit;
            };
            Metadata: {
                encode(message: _31.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Metadata;
                fromJSON(object: any): _31.Metadata;
                toJSON(message: _31.Metadata): unknown;
                fromPartial(object: Partial<_31.Metadata>): _31.Metadata;
            };
            SendAuthorization: {
                encode(message: _30.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SendAuthorization;
                fromJSON(object: any): _30.SendAuthorization;
                toJSON(message: _30.SendAuthorization): unknown;
                fromPartial(object: Partial<_30.SendAuthorization>): _30.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _35.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.TxResponse;
                    fromJSON(object: any): _35.TxResponse;
                    toJSON(message: _35.TxResponse): unknown;
                    fromPartial(object: Partial<_35.TxResponse>): _35.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _35.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ABCIMessageLog;
                    fromJSON(object: any): _35.ABCIMessageLog;
                    toJSON(message: _35.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_35.ABCIMessageLog>): _35.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _35.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.StringEvent;
                    fromJSON(object: any): _35.StringEvent;
                    toJSON(message: _35.StringEvent): unknown;
                    fromPartial(object: Partial<_35.StringEvent>): _35.StringEvent;
                };
                Attribute: {
                    encode(message: _35.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Attribute;
                    fromJSON(object: any): _35.Attribute;
                    toJSON(message: _35.Attribute): unknown;
                    fromPartial(object: Partial<_35.Attribute>): _35.Attribute;
                };
                GasInfo: {
                    encode(message: _35.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GasInfo;
                    fromJSON(object: any): _35.GasInfo;
                    toJSON(message: _35.GasInfo): unknown;
                    fromPartial(object: Partial<_35.GasInfo>): _35.GasInfo;
                };
                Result: {
                    encode(message: _35.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Result;
                    fromJSON(object: any): _35.Result;
                    toJSON(message: _35.Result): unknown;
                    fromPartial(object: Partial<_35.Result>): _35.Result;
                };
                SimulationResponse: {
                    encode(message: _35.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.SimulationResponse;
                    fromJSON(object: any): _35.SimulationResponse;
                    toJSON(message: _35.SimulationResponse): unknown;
                    fromPartial(object: Partial<_35.SimulationResponse>): _35.SimulationResponse;
                };
                MsgData: {
                    encode(message: _35.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgData;
                    fromJSON(object: any): _35.MsgData;
                    toJSON(message: _35.MsgData): unknown;
                    fromPartial(object: Partial<_35.MsgData>): _35.MsgData;
                };
                TxMsgData: {
                    encode(message: _35.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.TxMsgData;
                    fromJSON(object: any): _35.TxMsgData;
                    toJSON(message: _35.TxMsgData): unknown;
                    fromPartial(object: Partial<_35.TxMsgData>): _35.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _35.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.SearchTxsResult;
                    fromJSON(object: any): _35.SearchTxsResult;
                    toJSON(message: _35.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_35.SearchTxsResult>): _35.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _36.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Pairs;
                    fromJSON(object: any): _36.Pairs;
                    toJSON(message: _36.Pairs): unknown;
                    fromPartial(object: Partial<_36.Pairs>): _36.Pairs;
                };
                Pair: {
                    encode(message: _36.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Pair;
                    fromJSON(object: any): _36.Pair;
                    toJSON(message: _36.Pair): unknown;
                    fromPartial(object: Partial<_36.Pair>): _36.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _37.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PageRequest;
                    fromJSON(object: any): _37.PageRequest;
                    toJSON(message: _37.PageRequest): unknown;
                    fromPartial(object: Partial<_37.PageRequest>): _37.PageRequest;
                };
                PageResponse: {
                    encode(message: _37.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PageResponse;
                    fromJSON(object: any): _37.PageResponse;
                    toJSON(message: _37.PageResponse): unknown;
                    fromPartial(object: Partial<_37.PageResponse>): _37.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _38.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ListAllInterfacesRequest;
                    fromJSON(_: any): _38.ListAllInterfacesRequest;
                    toJSON(_: _38.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_38.ListAllInterfacesRequest>): _38.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _38.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ListAllInterfacesResponse;
                    fromJSON(object: any): _38.ListAllInterfacesResponse;
                    toJSON(message: _38.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_38.ListAllInterfacesResponse>): _38.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _38.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ListImplementationsRequest;
                    fromJSON(object: any): _38.ListImplementationsRequest;
                    toJSON(message: _38.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_38.ListImplementationsRequest>): _38.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _38.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ListImplementationsResponse;
                    fromJSON(object: any): _38.ListImplementationsResponse;
                    toJSON(message: _38.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_38.ListImplementationsResponse>): _38.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _39.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.AppDescriptor;
                    fromJSON(object: any): _39.AppDescriptor;
                    toJSON(message: _39.AppDescriptor): unknown;
                    fromPartial(object: Partial<_39.AppDescriptor>): _39.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _39.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.TxDescriptor;
                    fromJSON(object: any): _39.TxDescriptor;
                    toJSON(message: _39.TxDescriptor): unknown;
                    fromPartial(object: Partial<_39.TxDescriptor>): _39.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _39.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.AuthnDescriptor;
                    fromJSON(object: any): _39.AuthnDescriptor;
                    toJSON(message: _39.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_39.AuthnDescriptor>): _39.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _39.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SigningModeDescriptor;
                    fromJSON(object: any): _39.SigningModeDescriptor;
                    toJSON(message: _39.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_39.SigningModeDescriptor>): _39.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _39.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ChainDescriptor;
                    fromJSON(object: any): _39.ChainDescriptor;
                    toJSON(message: _39.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_39.ChainDescriptor>): _39.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _39.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CodecDescriptor;
                    fromJSON(object: any): _39.CodecDescriptor;
                    toJSON(message: _39.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_39.CodecDescriptor>): _39.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _39.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.InterfaceDescriptor;
                    fromJSON(object: any): _39.InterfaceDescriptor;
                    toJSON(message: _39.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_39.InterfaceDescriptor>): _39.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _39.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _39.InterfaceImplementerDescriptor;
                    toJSON(message: _39.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_39.InterfaceImplementerDescriptor>): _39.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _39.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _39.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _39.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_39.InterfaceAcceptingMessageDescriptor>): _39.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _39.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ConfigurationDescriptor;
                    fromJSON(object: any): _39.ConfigurationDescriptor;
                    toJSON(message: _39.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_39.ConfigurationDescriptor>): _39.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _39.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgDescriptor;
                    fromJSON(object: any): _39.MsgDescriptor;
                    toJSON(message: _39.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_39.MsgDescriptor>): _39.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _39.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _39.GetAuthnDescriptorRequest;
                    toJSON(_: _39.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_39.GetAuthnDescriptorRequest>): _39.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _39.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _39.GetAuthnDescriptorResponse;
                    toJSON(message: _39.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_39.GetAuthnDescriptorResponse>): _39.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _39.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetChainDescriptorRequest;
                    fromJSON(_: any): _39.GetChainDescriptorRequest;
                    toJSON(_: _39.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_39.GetChainDescriptorRequest>): _39.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _39.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetChainDescriptorResponse;
                    fromJSON(object: any): _39.GetChainDescriptorResponse;
                    toJSON(message: _39.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_39.GetChainDescriptorResponse>): _39.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _39.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetCodecDescriptorRequest;
                    fromJSON(_: any): _39.GetCodecDescriptorRequest;
                    toJSON(_: _39.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_39.GetCodecDescriptorRequest>): _39.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _39.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetCodecDescriptorResponse;
                    fromJSON(object: any): _39.GetCodecDescriptorResponse;
                    toJSON(message: _39.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_39.GetCodecDescriptorResponse>): _39.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _39.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _39.GetConfigurationDescriptorRequest;
                    toJSON(_: _39.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_39.GetConfigurationDescriptorRequest>): _39.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _39.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _39.GetConfigurationDescriptorResponse;
                    toJSON(message: _39.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_39.GetConfigurationDescriptorResponse>): _39.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _39.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _39.GetQueryServicesDescriptorRequest;
                    toJSON(_: _39.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_39.GetQueryServicesDescriptorRequest>): _39.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _39.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _39.GetQueryServicesDescriptorResponse;
                    toJSON(message: _39.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_39.GetQueryServicesDescriptorResponse>): _39.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _39.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxDescriptorRequest;
                    fromJSON(_: any): _39.GetTxDescriptorRequest;
                    toJSON(_: _39.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_39.GetTxDescriptorRequest>): _39.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _39.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxDescriptorResponse;
                    fromJSON(object: any): _39.GetTxDescriptorResponse;
                    toJSON(message: _39.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_39.GetTxDescriptorResponse>): _39.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _39.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryServicesDescriptor;
                    fromJSON(object: any): _39.QueryServicesDescriptor;
                    toJSON(message: _39.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_39.QueryServicesDescriptor>): _39.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _39.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryServiceDescriptor;
                    fromJSON(object: any): _39.QueryServiceDescriptor;
                    toJSON(message: _39.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_39.QueryServiceDescriptor>): _39.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _39.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryMethodDescriptor;
                    fromJSON(object: any): _39.QueryMethodDescriptor;
                    toJSON(message: _39.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_39.QueryMethodDescriptor>): _39.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _40.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Snapshot;
                    fromJSON(object: any): _40.Snapshot;
                    toJSON(message: _40.Snapshot): unknown;
                    fromPartial(object: Partial<_40.Snapshot>): _40.Snapshot;
                };
                Metadata: {
                    encode(message: _40.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Metadata;
                    fromJSON(object: any): _40.Metadata;
                    toJSON(message: _40.Metadata): unknown;
                    fromPartial(object: Partial<_40.Metadata>): _40.Metadata;
                };
                SnapshotItem: {
                    encode(message: _40.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SnapshotItem;
                    fromJSON(object: any): _40.SnapshotItem;
                    toJSON(message: _40.SnapshotItem): unknown;
                    fromPartial(object: Partial<_40.SnapshotItem>): _40.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _40.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SnapshotStoreItem;
                    fromJSON(object: any): _40.SnapshotStoreItem;
                    toJSON(message: _40.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_40.SnapshotStoreItem>): _40.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _40.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SnapshotIAVLItem;
                    fromJSON(object: any): _40.SnapshotIAVLItem;
                    toJSON(message: _40.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_40.SnapshotIAVLItem>): _40.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _40.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SnapshotExtensionMeta;
                    fromJSON(object: any): _40.SnapshotExtensionMeta;
                    toJSON(message: _40.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_40.SnapshotExtensionMeta>): _40.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _40.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SnapshotExtensionPayload;
                    fromJSON(object: any): _40.SnapshotExtensionPayload;
                    toJSON(message: _40.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_40.SnapshotExtensionPayload>): _40.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _40.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SnapshotKVItem;
                    fromJSON(object: any): _40.SnapshotKVItem;
                    toJSON(message: _40.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_40.SnapshotKVItem>): _40.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _40.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SnapshotSchema;
                    fromJSON(object: any): _40.SnapshotSchema;
                    toJSON(message: _40.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_40.SnapshotSchema>): _40.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _42.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.StoreKVPair;
                    fromJSON(object: any): _42.StoreKVPair;
                    toJSON(message: _42.StoreKVPair): unknown;
                    fromPartial(object: Partial<_42.StoreKVPair>): _42.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _41.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.CommitInfo;
                    fromJSON(object: any): _41.CommitInfo;
                    toJSON(message: _41.CommitInfo): unknown;
                    fromPartial(object: Partial<_41.CommitInfo>): _41.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _41.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.StoreInfo;
                    fromJSON(object: any): _41.StoreInfo;
                    toJSON(message: _41.StoreInfo): unknown;
                    fromPartial(object: Partial<_41.StoreInfo>): _41.StoreInfo;
                };
                CommitID: {
                    encode(message: _41.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.CommitID;
                    fromJSON(object: any): _41.CommitID;
                    toJSON(message: _41.CommitID): unknown;
                    fromPartial(object: Partial<_41.CommitID>): _41.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _157.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                    getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                    getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                    getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _139.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _43.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _43.GetValidatorSetByHeightRequest;
                    toJSON(message: _43.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightRequest>): _43.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _43.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _43.GetValidatorSetByHeightResponse;
                    toJSON(message: _43.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightResponse>): _43.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _43.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _43.GetLatestValidatorSetRequest;
                    toJSON(message: _43.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetRequest>): _43.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _43.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _43.GetLatestValidatorSetResponse;
                    toJSON(message: _43.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetResponse>): _43.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _43.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Validator;
                    fromJSON(object: any): _43.Validator;
                    toJSON(message: _43.Validator): unknown;
                    fromPartial(object: Partial<_43.Validator>): _43.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _43.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetBlockByHeightRequest;
                    fromJSON(object: any): _43.GetBlockByHeightRequest;
                    toJSON(message: _43.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_43.GetBlockByHeightRequest>): _43.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _43.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetBlockByHeightResponse;
                    fromJSON(object: any): _43.GetBlockByHeightResponse;
                    toJSON(message: _43.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_43.GetBlockByHeightResponse>): _43.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _43.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetLatestBlockRequest;
                    fromJSON(_: any): _43.GetLatestBlockRequest;
                    toJSON(_: _43.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_43.GetLatestBlockRequest>): _43.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _43.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetLatestBlockResponse;
                    fromJSON(object: any): _43.GetLatestBlockResponse;
                    toJSON(message: _43.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_43.GetLatestBlockResponse>): _43.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _43.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetSyncingRequest;
                    fromJSON(_: any): _43.GetSyncingRequest;
                    toJSON(_: _43.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_43.GetSyncingRequest>): _43.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _43.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetSyncingResponse;
                    fromJSON(object: any): _43.GetSyncingResponse;
                    toJSON(message: _43.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_43.GetSyncingResponse>): _43.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _43.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetNodeInfoRequest;
                    fromJSON(_: any): _43.GetNodeInfoRequest;
                    toJSON(_: _43.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_43.GetNodeInfoRequest>): _43.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _43.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GetNodeInfoResponse;
                    fromJSON(object: any): _43.GetNodeInfoResponse;
                    toJSON(message: _43.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_43.GetNodeInfoResponse>): _43.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _43.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.VersionInfo;
                    fromJSON(object: any): _43.VersionInfo;
                    toJSON(message: _43.VersionInfo): unknown;
                    fromPartial(object: Partial<_43.VersionInfo>): _43.VersionInfo;
                };
                Module: {
                    encode(message: _43.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Module;
                    fromJSON(object: any): _43.Module;
                    toJSON(message: _43.Module): unknown;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _44.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Coin;
                fromJSON(object: any): _44.Coin;
                toJSON(message: _44.Coin): unknown;
                fromPartial(object: Partial<_44.Coin>): _44.Coin;
            };
            DecCoin: {
                encode(message: _44.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DecCoin;
                fromJSON(object: any): _44.DecCoin;
                toJSON(message: _44.DecCoin): unknown;
                fromPartial(object: Partial<_44.DecCoin>): _44.DecCoin;
            };
            IntProto: {
                encode(message: _44.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.IntProto;
                fromJSON(object: any): _44.IntProto;
                toJSON(message: _44.IntProto): unknown;
                fromPartial(object: Partial<_44.IntProto>): _44.IntProto;
            };
            DecProto: {
                encode(message: _44.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DecProto;
                fromJSON(object: any): _44.DecProto;
                toJSON(message: _44.DecProto): unknown;
                fromPartial(object: Partial<_44.DecProto>): _44.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _46.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisOwners;
                fromJSON(object: any): _46.GenesisOwners;
                toJSON(message: _46.GenesisOwners): unknown;
                fromPartial(object: Partial<_46.GenesisOwners>): _46.GenesisOwners;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            Capability: {
                encode(message: _45.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Capability;
                fromJSON(object: any): _45.Capability;
                toJSON(message: _45.Capability): unknown;
                fromPartial(object: Partial<_45.Capability>): _45.Capability;
            };
            Owner: {
                encode(message: _45.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Owner;
                fromJSON(object: any): _45.Owner;
                toJSON(message: _45.Owner): unknown;
                fromPartial(object: Partial<_45.Owner>): _45.Owner;
            };
            CapabilityOwners: {
                encode(message: _45.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CapabilityOwners;
                fromJSON(object: any): _45.CapabilityOwners;
                toJSON(message: _45.CapabilityOwners): unknown;
                fromPartial(object: Partial<_45.CapabilityOwners>): _45.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            MsgVerifyInvariant: {
                encode(message: _48.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgVerifyInvariant;
                fromJSON(object: any): _48.MsgVerifyInvariant;
                toJSON(message: _48.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_48.MsgVerifyInvariant>): _48.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _48.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgVerifyInvariantResponse;
                fromJSON(_: any): _48.MsgVerifyInvariantResponse;
                toJSON(_: _48.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_48.MsgVerifyInvariantResponse>): _48.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _49.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PubKey;
                fromJSON(object: any): _49.PubKey;
                toJSON(message: _49.PubKey): unknown;
                fromPartial(object: Partial<_49.PubKey>): _49.PubKey;
            };
            PrivKey: {
                encode(message: _49.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PrivKey;
                fromJSON(object: any): _49.PrivKey;
                toJSON(message: _49.PrivKey): unknown;
                fromPartial(object: Partial<_49.PrivKey>): _49.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _50.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.BIP44Params;
                    fromJSON(object: any): _50.BIP44Params;
                    toJSON(message: _50.BIP44Params): unknown;
                    fromPartial(object: Partial<_50.BIP44Params>): _50.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _51.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Record;
                    fromJSON(object: any): _51.Record;
                    toJSON(message: _51.Record): unknown;
                    fromPartial(object: Partial<_51.Record>): _51.Record;
                };
                Record_Local: {
                    encode(message: _51.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Record_Local;
                    fromJSON(object: any): _51.Record_Local;
                    toJSON(message: _51.Record_Local): unknown;
                    fromPartial(object: Partial<_51.Record_Local>): _51.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _51.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Record_Ledger;
                    fromJSON(object: any): _51.Record_Ledger;
                    toJSON(message: _51.Record_Ledger): unknown;
                    fromPartial(object: Partial<_51.Record_Ledger>): _51.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _51.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Record_Multi;
                    fromJSON(_: any): _51.Record_Multi;
                    toJSON(_: _51.Record_Multi): unknown;
                    fromPartial(_: Partial<_51.Record_Multi>): _51.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _51.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Record_Offline;
                    fromJSON(_: any): _51.Record_Offline;
                    toJSON(_: _51.Record_Offline): unknown;
                    fromPartial(_: Partial<_51.Record_Offline>): _51.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _52.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.LegacyAminoPubKey;
                fromJSON(object: any): _52.LegacyAminoPubKey;
                toJSON(message: _52.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_52.LegacyAminoPubKey>): _52.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _53.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.PubKey;
                fromJSON(object: any): _53.PubKey;
                toJSON(message: _53.PubKey): unknown;
                fromPartial(object: Partial<_53.PubKey>): _53.PubKey;
            };
            PrivKey: {
                encode(message: _53.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.PrivKey;
                fromJSON(object: any): _53.PrivKey;
                toJSON(message: _53.PrivKey): unknown;
                fromPartial(object: Partial<_53.PrivKey>): _53.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _54.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.PubKey;
                fromJSON(object: any): _54.PubKey;
                toJSON(message: _54.PubKey): unknown;
                fromPartial(object: Partial<_54.PubKey>): _54.PubKey;
            };
            PrivKey: {
                encode(message: _54.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.PrivKey;
                fromJSON(object: any): _54.PrivKey;
                toJSON(message: _54.PrivKey): unknown;
                fromPartial(object: Partial<_54.PrivKey>): _54.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                validatorOutstandingRewards(request: _57.QueryValidatorOutstandingRewardsRequest): Promise<_57.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _57.QueryValidatorCommissionRequest): Promise<_57.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _57.QueryValidatorSlashesRequest): Promise<_57.QueryValidatorSlashesResponse>;
                delegationRewards(request: _57.QueryDelegationRewardsRequest): Promise<_57.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _57.QueryDelegationTotalRewardsRequest): Promise<_57.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _57.QueryDelegatorValidatorsRequest): Promise<_57.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _57.QueryDelegatorWithdrawAddressRequest): Promise<_57.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _57.QueryCommunityPoolRequest): Promise<_57.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            MsgSetWithdrawAddress: {
                encode(message: _58.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSetWithdrawAddress;
                fromJSON(object: any): _58.MsgSetWithdrawAddress;
                toJSON(message: _58.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_58.MsgSetWithdrawAddress>): _58.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _58.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _58.MsgSetWithdrawAddressResponse;
                toJSON(_: _58.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_58.MsgSetWithdrawAddressResponse>): _58.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _58.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _58.MsgWithdrawDelegatorReward;
                toJSON(message: _58.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_58.MsgWithdrawDelegatorReward>): _58.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _58.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _58.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _58.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_58.MsgWithdrawDelegatorRewardResponse>): _58.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _58.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _58.MsgWithdrawValidatorCommission;
                toJSON(message: _58.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_58.MsgWithdrawValidatorCommission>): _58.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _58.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _58.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _58.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_58.MsgWithdrawValidatorCommissionResponse>): _58.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _58.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgFundCommunityPool;
                fromJSON(object: any): _58.MsgFundCommunityPool;
                toJSON(message: _58.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_58.MsgFundCommunityPool>): _58.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _58.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _58.MsgFundCommunityPoolResponse;
                toJSON(_: _58.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_58.MsgFundCommunityPoolResponse>): _58.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromJSON(_: any): _57.QueryParamsRequest;
                toJSON(_: _57.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                fromJSON(object: any): _57.QueryParamsResponse;
                toJSON(message: _57.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _57.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _57.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _57.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_57.QueryValidatorOutstandingRewardsRequest>): _57.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _57.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _57.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _57.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_57.QueryValidatorOutstandingRewardsResponse>): _57.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _57.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValidatorCommissionRequest;
                fromJSON(object: any): _57.QueryValidatorCommissionRequest;
                toJSON(message: _57.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_57.QueryValidatorCommissionRequest>): _57.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _57.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValidatorCommissionResponse;
                fromJSON(object: any): _57.QueryValidatorCommissionResponse;
                toJSON(message: _57.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_57.QueryValidatorCommissionResponse>): _57.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _57.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValidatorSlashesRequest;
                fromJSON(object: any): _57.QueryValidatorSlashesRequest;
                toJSON(message: _57.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_57.QueryValidatorSlashesRequest>): _57.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _57.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValidatorSlashesResponse;
                fromJSON(object: any): _57.QueryValidatorSlashesResponse;
                toJSON(message: _57.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_57.QueryValidatorSlashesResponse>): _57.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _57.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegationRewardsRequest;
                fromJSON(object: any): _57.QueryDelegationRewardsRequest;
                toJSON(message: _57.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_57.QueryDelegationRewardsRequest>): _57.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _57.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegationRewardsResponse;
                fromJSON(object: any): _57.QueryDelegationRewardsResponse;
                toJSON(message: _57.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_57.QueryDelegationRewardsResponse>): _57.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _57.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _57.QueryDelegationTotalRewardsRequest;
                toJSON(message: _57.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_57.QueryDelegationTotalRewardsRequest>): _57.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _57.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _57.QueryDelegationTotalRewardsResponse;
                toJSON(message: _57.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_57.QueryDelegationTotalRewardsResponse>): _57.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _57.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _57.QueryDelegatorValidatorsRequest;
                toJSON(message: _57.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_57.QueryDelegatorValidatorsRequest>): _57.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _57.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _57.QueryDelegatorValidatorsResponse;
                toJSON(message: _57.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_57.QueryDelegatorValidatorsResponse>): _57.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _57.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _57.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _57.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_57.QueryDelegatorWithdrawAddressRequest>): _57.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _57.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _57.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _57.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_57.QueryDelegatorWithdrawAddressResponse>): _57.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _57.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryCommunityPoolRequest;
                fromJSON(_: any): _57.QueryCommunityPoolRequest;
                toJSON(_: _57.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_57.QueryCommunityPoolRequest>): _57.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _57.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryCommunityPoolResponse;
                fromJSON(object: any): _57.QueryCommunityPoolResponse;
                toJSON(message: _57.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_57.QueryCommunityPoolResponse>): _57.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _56.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DelegatorWithdrawInfo;
                fromJSON(object: any): _56.DelegatorWithdrawInfo;
                toJSON(message: _56.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_56.DelegatorWithdrawInfo>): _56.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _56.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _56.ValidatorOutstandingRewardsRecord;
                toJSON(message: _56.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_56.ValidatorOutstandingRewardsRecord>): _56.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _56.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _56.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _56.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_56.ValidatorAccumulatedCommissionRecord>): _56.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _56.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _56.ValidatorHistoricalRewardsRecord;
                toJSON(message: _56.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_56.ValidatorHistoricalRewardsRecord>): _56.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _56.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _56.ValidatorCurrentRewardsRecord;
                toJSON(message: _56.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_56.ValidatorCurrentRewardsRecord>): _56.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _56.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DelegatorStartingInfoRecord;
                fromJSON(object: any): _56.DelegatorStartingInfoRecord;
                toJSON(message: _56.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_56.DelegatorStartingInfoRecord>): _56.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _56.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ValidatorSlashEventRecord;
                fromJSON(object: any): _56.ValidatorSlashEventRecord;
                toJSON(message: _56.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_56.ValidatorSlashEventRecord>): _56.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromJSON(object: any): _56.GenesisState;
                toJSON(message: _56.GenesisState): unknown;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
            Params: {
                encode(message: _55.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Params;
                fromJSON(object: any): _55.Params;
                toJSON(message: _55.Params): unknown;
                fromPartial(object: Partial<_55.Params>): _55.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _55.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorHistoricalRewards;
                fromJSON(object: any): _55.ValidatorHistoricalRewards;
                toJSON(message: _55.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_55.ValidatorHistoricalRewards>): _55.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _55.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorCurrentRewards;
                fromJSON(object: any): _55.ValidatorCurrentRewards;
                toJSON(message: _55.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_55.ValidatorCurrentRewards>): _55.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _55.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorAccumulatedCommission;
                fromJSON(object: any): _55.ValidatorAccumulatedCommission;
                toJSON(message: _55.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_55.ValidatorAccumulatedCommission>): _55.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _55.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorOutstandingRewards;
                fromJSON(object: any): _55.ValidatorOutstandingRewards;
                toJSON(message: _55.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_55.ValidatorOutstandingRewards>): _55.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _55.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorSlashEvent;
                fromJSON(object: any): _55.ValidatorSlashEvent;
                toJSON(message: _55.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_55.ValidatorSlashEvent>): _55.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _55.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorSlashEvents;
                fromJSON(object: any): _55.ValidatorSlashEvents;
                toJSON(message: _55.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_55.ValidatorSlashEvents>): _55.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _55.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.FeePool;
                fromJSON(object: any): _55.FeePool;
                toJSON(message: _55.FeePool): unknown;
                fromPartial(object: Partial<_55.FeePool>): _55.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _55.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.CommunityPoolSpendProposal;
                fromJSON(object: any): _55.CommunityPoolSpendProposal;
                toJSON(message: _55.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_55.CommunityPoolSpendProposal>): _55.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _55.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DelegatorStartingInfo;
                fromJSON(object: any): _55.DelegatorStartingInfo;
                toJSON(message: _55.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_55.DelegatorStartingInfo>): _55.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _55.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DelegationDelegatorReward;
                fromJSON(object: any): _55.DelegationDelegatorReward;
                toJSON(message: _55.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_55.DelegationDelegatorReward>): _55.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _55.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _55.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _55.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_55.CommunityPoolSpendProposalWithDeposit>): _55.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _61.QueryEvidenceRequest): Promise<_61.QueryEvidenceResponse>;
                allEvidence(request?: _61.QueryAllEvidenceRequest): Promise<_61.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            MsgSubmitEvidence: {
                encode(message: _62.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitEvidence;
                fromJSON(object: any): _62.MsgSubmitEvidence;
                toJSON(message: _62.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_62.MsgSubmitEvidence>): _62.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _62.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _62.MsgSubmitEvidenceResponse;
                toJSON(message: _62.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_62.MsgSubmitEvidenceResponse>): _62.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _61.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryEvidenceRequest;
                fromJSON(object: any): _61.QueryEvidenceRequest;
                toJSON(message: _61.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_61.QueryEvidenceRequest>): _61.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _61.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryEvidenceResponse;
                fromJSON(object: any): _61.QueryEvidenceResponse;
                toJSON(message: _61.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_61.QueryEvidenceResponse>): _61.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _61.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryAllEvidenceRequest;
                fromJSON(object: any): _61.QueryAllEvidenceRequest;
                toJSON(message: _61.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_61.QueryAllEvidenceRequest>): _61.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _61.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryAllEvidenceResponse;
                fromJSON(object: any): _61.QueryAllEvidenceResponse;
                toJSON(message: _61.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_61.QueryAllEvidenceResponse>): _61.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromJSON(object: any): _60.GenesisState;
                toJSON(message: _60.GenesisState): unknown;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
            Equivocation: {
                encode(message: _59.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Equivocation;
                fromJSON(object: any): _59.Equivocation;
                toJSON(message: _59.Equivocation): unknown;
                fromPartial(object: Partial<_59.Equivocation>): _59.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _65.QueryAllowanceRequest): Promise<_65.QueryAllowanceResponse>;
                allowances(request: _65.QueryAllowancesRequest): Promise<_65.QueryAllowancesResponse>;
                allowancesByGranter(request: _65.QueryAllowancesByGranterRequest): Promise<_65.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            MsgGrantAllowance: {
                encode(message: _66.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgGrantAllowance;
                fromJSON(object: any): _66.MsgGrantAllowance;
                toJSON(message: _66.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_66.MsgGrantAllowance>): _66.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _66.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgGrantAllowanceResponse;
                fromJSON(_: any): _66.MsgGrantAllowanceResponse;
                toJSON(_: _66.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_66.MsgGrantAllowanceResponse>): _66.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _66.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgRevokeAllowance;
                fromJSON(object: any): _66.MsgRevokeAllowance;
                toJSON(message: _66.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_66.MsgRevokeAllowance>): _66.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _66.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _66.MsgRevokeAllowanceResponse;
                toJSON(_: _66.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_66.MsgRevokeAllowanceResponse>): _66.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _65.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAllowanceRequest;
                fromJSON(object: any): _65.QueryAllowanceRequest;
                toJSON(message: _65.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_65.QueryAllowanceRequest>): _65.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _65.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAllowanceResponse;
                fromJSON(object: any): _65.QueryAllowanceResponse;
                toJSON(message: _65.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_65.QueryAllowanceResponse>): _65.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _65.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAllowancesRequest;
                fromJSON(object: any): _65.QueryAllowancesRequest;
                toJSON(message: _65.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_65.QueryAllowancesRequest>): _65.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _65.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAllowancesResponse;
                fromJSON(object: any): _65.QueryAllowancesResponse;
                toJSON(message: _65.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_65.QueryAllowancesResponse>): _65.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _65.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _65.QueryAllowancesByGranterRequest;
                toJSON(message: _65.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_65.QueryAllowancesByGranterRequest>): _65.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _65.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _65.QueryAllowancesByGranterResponse;
                toJSON(message: _65.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_65.QueryAllowancesByGranterResponse>): _65.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromJSON(object: any): _64.GenesisState;
                toJSON(message: _64.GenesisState): unknown;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            };
            BasicAllowance: {
                encode(message: _63.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BasicAllowance;
                fromJSON(object: any): _63.BasicAllowance;
                toJSON(message: _63.BasicAllowance): unknown;
                fromPartial(object: Partial<_63.BasicAllowance>): _63.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _63.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PeriodicAllowance;
                fromJSON(object: any): _63.PeriodicAllowance;
                toJSON(message: _63.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_63.PeriodicAllowance>): _63.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _63.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.AllowedMsgAllowance;
                fromJSON(object: any): _63.AllowedMsgAllowance;
                toJSON(message: _63.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_63.AllowedMsgAllowance>): _63.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _63.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Grant;
                fromJSON(object: any): _63.Grant;
                toJSON(message: _63.Grant): unknown;
                fromPartial(object: Partial<_63.Grant>): _63.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _70.QueryProposalRequest): Promise<_70.QueryProposalResponse>;
                proposals(request: _70.QueryProposalsRequest): Promise<_70.QueryProposalsResponse>;
                vote(request: _70.QueryVoteRequest): Promise<_70.QueryVoteResponse>;
                votes(request: _70.QueryVotesRequest): Promise<_70.QueryVotesResponse>;
                params(request: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                deposit(request: _70.QueryDepositRequest): Promise<_70.QueryDepositResponse>;
                deposits(request: _70.QueryDepositsRequest): Promise<_70.QueryDepositsResponse>;
                tallyResult(request: _70.QueryTallyResultRequest): Promise<_70.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _71.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSubmitProposal;
                fromJSON(object: any): _71.MsgSubmitProposal;
                toJSON(message: _71.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_71.MsgSubmitProposal>): _71.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _71.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSubmitProposalResponse;
                fromJSON(object: any): _71.MsgSubmitProposalResponse;
                toJSON(message: _71.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_71.MsgSubmitProposalResponse>): _71.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _71.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgExecLegacyContent;
                fromJSON(object: any): _71.MsgExecLegacyContent;
                toJSON(message: _71.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_71.MsgExecLegacyContent>): _71.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _71.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgExecLegacyContentResponse;
                fromJSON(_: any): _71.MsgExecLegacyContentResponse;
                toJSON(_: _71.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_71.MsgExecLegacyContentResponse>): _71.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _71.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVote;
                fromJSON(object: any): _71.MsgVote;
                toJSON(message: _71.MsgVote): unknown;
                fromPartial(object: Partial<_71.MsgVote>): _71.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _71.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVoteResponse;
                fromJSON(_: any): _71.MsgVoteResponse;
                toJSON(_: _71.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_71.MsgVoteResponse>): _71.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _71.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVoteWeighted;
                fromJSON(object: any): _71.MsgVoteWeighted;
                toJSON(message: _71.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_71.MsgVoteWeighted>): _71.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _71.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVoteWeightedResponse;
                fromJSON(_: any): _71.MsgVoteWeightedResponse;
                toJSON(_: _71.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_71.MsgVoteWeightedResponse>): _71.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _71.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgDeposit;
                fromJSON(object: any): _71.MsgDeposit;
                toJSON(message: _71.MsgDeposit): unknown;
                fromPartial(object: Partial<_71.MsgDeposit>): _71.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _71.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgDepositResponse;
                fromJSON(_: any): _71.MsgDepositResponse;
                toJSON(_: _71.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_71.MsgDepositResponse>): _71.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _70.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalRequest;
                fromJSON(object: any): _70.QueryProposalRequest;
                toJSON(message: _70.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_70.QueryProposalRequest>): _70.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _70.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalResponse;
                fromJSON(object: any): _70.QueryProposalResponse;
                toJSON(message: _70.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_70.QueryProposalResponse>): _70.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _70.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalsRequest;
                fromJSON(object: any): _70.QueryProposalsRequest;
                toJSON(message: _70.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_70.QueryProposalsRequest>): _70.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _70.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalsResponse;
                fromJSON(object: any): _70.QueryProposalsResponse;
                toJSON(message: _70.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_70.QueryProposalsResponse>): _70.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _70.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVoteRequest;
                fromJSON(object: any): _70.QueryVoteRequest;
                toJSON(message: _70.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_70.QueryVoteRequest>): _70.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _70.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVoteResponse;
                fromJSON(object: any): _70.QueryVoteResponse;
                toJSON(message: _70.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_70.QueryVoteResponse>): _70.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _70.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesRequest;
                fromJSON(object: any): _70.QueryVotesRequest;
                toJSON(message: _70.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_70.QueryVotesRequest>): _70.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _70.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesResponse;
                fromJSON(object: any): _70.QueryVotesResponse;
                toJSON(message: _70.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_70.QueryVotesResponse>): _70.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _70.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsRequest;
                fromJSON(object: any): _70.QueryParamsRequest;
                toJSON(message: _70.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _70.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsResponse;
                fromJSON(object: any): _70.QueryParamsResponse;
                toJSON(message: _70.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _70.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositRequest;
                fromJSON(object: any): _70.QueryDepositRequest;
                toJSON(message: _70.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_70.QueryDepositRequest>): _70.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _70.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositResponse;
                fromJSON(object: any): _70.QueryDepositResponse;
                toJSON(message: _70.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_70.QueryDepositResponse>): _70.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _70.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositsRequest;
                fromJSON(object: any): _70.QueryDepositsRequest;
                toJSON(message: _70.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_70.QueryDepositsRequest>): _70.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _70.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDepositsResponse;
                fromJSON(object: any): _70.QueryDepositsResponse;
                toJSON(message: _70.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_70.QueryDepositsResponse>): _70.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _70.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryTallyResultRequest;
                fromJSON(object: any): _70.QueryTallyResultRequest;
                toJSON(message: _70.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_70.QueryTallyResultRequest>): _70.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _70.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryTallyResultResponse;
                fromJSON(object: any): _70.QueryTallyResultResponse;
                toJSON(message: _70.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_70.QueryTallyResultResponse>): _70.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _69.VoteOption;
            voteOptionToJSON(object: _69.VoteOption): string;
            proposalStatusFromJSON(object: any): _69.ProposalStatus;
            proposalStatusToJSON(object: _69.ProposalStatus): string;
            VoteOption: typeof _69.VoteOption;
            VoteOptionSDKType: typeof _69.VoteOptionSDKType;
            ProposalStatus: typeof _69.ProposalStatus;
            ProposalStatusSDKType: typeof _69.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _69.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.WeightedVoteOption;
                fromJSON(object: any): _69.WeightedVoteOption;
                toJSON(message: _69.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_69.WeightedVoteOption>): _69.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _69.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Deposit;
                fromJSON(object: any): _69.Deposit;
                toJSON(message: _69.Deposit): unknown;
                fromPartial(object: Partial<_69.Deposit>): _69.Deposit;
            };
            Proposal: {
                encode(message: _69.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Proposal;
                fromJSON(object: any): _69.Proposal;
                toJSON(message: _69.Proposal): unknown;
                fromPartial(object: Partial<_69.Proposal>): _69.Proposal;
            };
            TallyResult: {
                encode(message: _69.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.TallyResult;
                fromJSON(object: any): _69.TallyResult;
                toJSON(message: _69.TallyResult): unknown;
                fromPartial(object: Partial<_69.TallyResult>): _69.TallyResult;
            };
            Vote: {
                encode(message: _69.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Vote;
                fromJSON(object: any): _69.Vote;
                toJSON(message: _69.Vote): unknown;
                fromPartial(object: Partial<_69.Vote>): _69.Vote;
            };
            DepositParams: {
                encode(message: _69.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DepositParams;
                fromJSON(object: any): _69.DepositParams;
                toJSON(message: _69.DepositParams): unknown;
                fromPartial(object: Partial<_69.DepositParams>): _69.DepositParams;
            };
            VotingParams: {
                encode(message: _69.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.VotingParams;
                fromJSON(object: any): _69.VotingParams;
                toJSON(message: _69.VotingParams): unknown;
                fromPartial(object: Partial<_69.VotingParams>): _69.VotingParams;
            };
            TallyParams: {
                encode(message: _69.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.TallyParams;
                fromJSON(object: any): _69.TallyParams;
                toJSON(message: _69.TallyParams): unknown;
                fromPartial(object: Partial<_69.TallyParams>): _69.TallyParams;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                fromJSON(object: any): _68.GenesisState;
                toJSON(message: _68.GenesisState): unknown;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _74.QueryProposalRequest): Promise<_74.QueryProposalResponse>;
                proposals(request: _74.QueryProposalsRequest): Promise<_74.QueryProposalsResponse>;
                vote(request: _74.QueryVoteRequest): Promise<_74.QueryVoteResponse>;
                votes(request: _74.QueryVotesRequest): Promise<_74.QueryVotesResponse>;
                params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                deposit(request: _74.QueryDepositRequest): Promise<_74.QueryDepositResponse>;
                deposits(request: _74.QueryDepositsRequest): Promise<_74.QueryDepositsResponse>;
                tallyResult(request: _74.QueryTallyResultRequest): Promise<_74.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _75.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitProposal;
                fromJSON(object: any): _75.MsgSubmitProposal;
                toJSON(message: _75.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_75.MsgSubmitProposal>): _75.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _75.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitProposalResponse;
                fromJSON(object: any): _75.MsgSubmitProposalResponse;
                toJSON(message: _75.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_75.MsgSubmitProposalResponse>): _75.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _75.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVote;
                fromJSON(object: any): _75.MsgVote;
                toJSON(message: _75.MsgVote): unknown;
                fromPartial(object: Partial<_75.MsgVote>): _75.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _75.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVoteResponse;
                fromJSON(_: any): _75.MsgVoteResponse;
                toJSON(_: _75.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_75.MsgVoteResponse>): _75.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _75.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVoteWeighted;
                fromJSON(object: any): _75.MsgVoteWeighted;
                toJSON(message: _75.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_75.MsgVoteWeighted>): _75.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _75.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgVoteWeightedResponse;
                fromJSON(_: any): _75.MsgVoteWeightedResponse;
                toJSON(_: _75.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_75.MsgVoteWeightedResponse>): _75.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _75.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgDeposit;
                fromJSON(object: any): _75.MsgDeposit;
                toJSON(message: _75.MsgDeposit): unknown;
                fromPartial(object: Partial<_75.MsgDeposit>): _75.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _75.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgDepositResponse;
                fromJSON(_: any): _75.MsgDepositResponse;
                toJSON(_: _75.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_75.MsgDepositResponse>): _75.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _74.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalRequest;
                fromJSON(object: any): _74.QueryProposalRequest;
                toJSON(message: _74.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_74.QueryProposalRequest>): _74.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _74.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalResponse;
                fromJSON(object: any): _74.QueryProposalResponse;
                toJSON(message: _74.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_74.QueryProposalResponse>): _74.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _74.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalsRequest;
                fromJSON(object: any): _74.QueryProposalsRequest;
                toJSON(message: _74.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_74.QueryProposalsRequest>): _74.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _74.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryProposalsResponse;
                fromJSON(object: any): _74.QueryProposalsResponse;
                toJSON(message: _74.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_74.QueryProposalsResponse>): _74.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _74.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVoteRequest;
                fromJSON(object: any): _74.QueryVoteRequest;
                toJSON(message: _74.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_74.QueryVoteRequest>): _74.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _74.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVoteResponse;
                fromJSON(object: any): _74.QueryVoteResponse;
                toJSON(message: _74.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_74.QueryVoteResponse>): _74.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _74.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVotesRequest;
                fromJSON(object: any): _74.QueryVotesRequest;
                toJSON(message: _74.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_74.QueryVotesRequest>): _74.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _74.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryVotesResponse;
                fromJSON(object: any): _74.QueryVotesResponse;
                toJSON(message: _74.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_74.QueryVotesResponse>): _74.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsRequest;
                fromJSON(object: any): _74.QueryParamsRequest;
                toJSON(message: _74.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _74.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositRequest;
                fromJSON(object: any): _74.QueryDepositRequest;
                toJSON(message: _74.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_74.QueryDepositRequest>): _74.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _74.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositResponse;
                fromJSON(object: any): _74.QueryDepositResponse;
                toJSON(message: _74.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_74.QueryDepositResponse>): _74.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _74.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositsRequest;
                fromJSON(object: any): _74.QueryDepositsRequest;
                toJSON(message: _74.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_74.QueryDepositsRequest>): _74.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _74.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDepositsResponse;
                fromJSON(object: any): _74.QueryDepositsResponse;
                toJSON(message: _74.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_74.QueryDepositsResponse>): _74.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _74.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryTallyResultRequest;
                fromJSON(object: any): _74.QueryTallyResultRequest;
                toJSON(message: _74.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_74.QueryTallyResultRequest>): _74.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _74.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryTallyResultResponse;
                fromJSON(object: any): _74.QueryTallyResultResponse;
                toJSON(message: _74.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_74.QueryTallyResultResponse>): _74.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _73.VoteOption;
            voteOptionToJSON(object: _73.VoteOption): string;
            proposalStatusFromJSON(object: any): _73.ProposalStatus;
            proposalStatusToJSON(object: _73.ProposalStatus): string;
            VoteOption: typeof _73.VoteOption;
            VoteOptionSDKType: typeof _73.VoteOptionSDKType;
            ProposalStatus: typeof _73.ProposalStatus;
            ProposalStatusSDKType: typeof _73.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _73.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.WeightedVoteOption;
                fromJSON(object: any): _73.WeightedVoteOption;
                toJSON(message: _73.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_73.WeightedVoteOption>): _73.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _73.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TextProposal;
                fromJSON(object: any): _73.TextProposal;
                toJSON(message: _73.TextProposal): unknown;
                fromPartial(object: Partial<_73.TextProposal>): _73.TextProposal;
            };
            Deposit: {
                encode(message: _73.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Deposit;
                fromJSON(object: any): _73.Deposit;
                toJSON(message: _73.Deposit): unknown;
                fromPartial(object: Partial<_73.Deposit>): _73.Deposit;
            };
            Proposal: {
                encode(message: _73.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Proposal;
                fromJSON(object: any): _73.Proposal;
                toJSON(message: _73.Proposal): unknown;
                fromPartial(object: Partial<_73.Proposal>): _73.Proposal;
            };
            TallyResult: {
                encode(message: _73.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TallyResult;
                fromJSON(object: any): _73.TallyResult;
                toJSON(message: _73.TallyResult): unknown;
                fromPartial(object: Partial<_73.TallyResult>): _73.TallyResult;
            };
            Vote: {
                encode(message: _73.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Vote;
                fromJSON(object: any): _73.Vote;
                toJSON(message: _73.Vote): unknown;
                fromPartial(object: Partial<_73.Vote>): _73.Vote;
            };
            DepositParams: {
                encode(message: _73.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.DepositParams;
                fromJSON(object: any): _73.DepositParams;
                toJSON(message: _73.DepositParams): unknown;
                fromPartial(object: Partial<_73.DepositParams>): _73.DepositParams;
            };
            VotingParams: {
                encode(message: _73.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.VotingParams;
                fromJSON(object: any): _73.VotingParams;
                toJSON(message: _73.VotingParams): unknown;
                fromPartial(object: Partial<_73.VotingParams>): _73.VotingParams;
            };
            TallyParams: {
                encode(message: _73.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TallyParams;
                fromJSON(object: any): _73.TallyParams;
                toJSON(message: _73.TallyParams): unknown;
                fromPartial(object: Partial<_73.TallyParams>): _73.TallyParams;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _78.QueryGroupInfoRequest): Promise<_78.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _78.QueryGroupPolicyInfoRequest): Promise<_78.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _78.QueryGroupMembersRequest): Promise<_78.QueryGroupMembersResponse>;
                groupsByAdmin(request: _78.QueryGroupsByAdminRequest): Promise<_78.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _78.QueryGroupPoliciesByGroupRequest): Promise<_78.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _78.QueryGroupPoliciesByAdminRequest): Promise<_78.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _78.QueryProposalRequest): Promise<_78.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _78.QueryProposalsByGroupPolicyRequest): Promise<_78.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _78.QueryVoteByProposalVoterRequest): Promise<_78.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _78.QueryVotesByProposalRequest): Promise<_78.QueryVotesByProposalResponse>;
                votesByVoter(request: _78.QueryVotesByVoterRequest): Promise<_78.QueryVotesByVoterResponse>;
                groupsByMember(request: _78.QueryGroupsByMemberRequest): Promise<_78.QueryGroupsByMemberResponse>;
                tallyResult(request: _78.QueryTallyResultRequest): Promise<_78.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            voteOptionFromJSON(object: any): _80.VoteOption;
            voteOptionToJSON(object: _80.VoteOption): string;
            proposalStatusFromJSON(object: any): _80.ProposalStatus;
            proposalStatusToJSON(object: _80.ProposalStatus): string;
            proposalResultFromJSON(object: any): _80.ProposalResult;
            proposalResultToJSON(object: _80.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _80.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _80.ProposalExecutorResult): string;
            VoteOption: typeof _80.VoteOption;
            VoteOptionSDKType: typeof _80.VoteOptionSDKType;
            ProposalStatus: typeof _80.ProposalStatus;
            ProposalStatusSDKType: typeof _80.ProposalStatusSDKType;
            ProposalResult: typeof _80.ProposalResult;
            ProposalResultSDKType: typeof _80.ProposalResultSDKType;
            ProposalExecutorResult: typeof _80.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _80.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _80.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Member;
                fromJSON(object: any): _80.Member;
                toJSON(message: _80.Member): unknown;
                fromPartial(object: Partial<_80.Member>): _80.Member;
            };
            Members: {
                encode(message: _80.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Members;
                fromJSON(object: any): _80.Members;
                toJSON(message: _80.Members): unknown;
                fromPartial(object: Partial<_80.Members>): _80.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _80.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ThresholdDecisionPolicy;
                fromJSON(object: any): _80.ThresholdDecisionPolicy;
                toJSON(message: _80.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_80.ThresholdDecisionPolicy>): _80.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _80.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PercentageDecisionPolicy;
                fromJSON(object: any): _80.PercentageDecisionPolicy;
                toJSON(message: _80.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_80.PercentageDecisionPolicy>): _80.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _80.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DecisionPolicyWindows;
                fromJSON(object: any): _80.DecisionPolicyWindows;
                toJSON(message: _80.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_80.DecisionPolicyWindows>): _80.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _80.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GroupInfo;
                fromJSON(object: any): _80.GroupInfo;
                toJSON(message: _80.GroupInfo): unknown;
                fromPartial(object: Partial<_80.GroupInfo>): _80.GroupInfo;
            };
            GroupMember: {
                encode(message: _80.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GroupMember;
                fromJSON(object: any): _80.GroupMember;
                toJSON(message: _80.GroupMember): unknown;
                fromPartial(object: Partial<_80.GroupMember>): _80.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _80.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GroupPolicyInfo;
                fromJSON(object: any): _80.GroupPolicyInfo;
                toJSON(message: _80.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_80.GroupPolicyInfo>): _80.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _80.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Proposal;
                fromJSON(object: any): _80.Proposal;
                toJSON(message: _80.Proposal): unknown;
                fromPartial(object: Partial<_80.Proposal>): _80.Proposal;
            };
            TallyResult: {
                encode(message: _80.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.TallyResult;
                fromJSON(object: any): _80.TallyResult;
                toJSON(message: _80.TallyResult): unknown;
                fromPartial(object: Partial<_80.TallyResult>): _80.TallyResult;
            };
            Vote: {
                encode(message: _80.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Vote;
                fromJSON(object: any): _80.Vote;
                toJSON(message: _80.Vote): unknown;
                fromPartial(object: Partial<_80.Vote>): _80.Vote;
            };
            execFromJSON(object: any): _79.Exec;
            execToJSON(object: _79.Exec): string;
            Exec: typeof _79.Exec;
            ExecSDKType: typeof _79.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _79.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroup;
                fromJSON(object: any): _79.MsgCreateGroup;
                toJSON(message: _79.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroup>): _79.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _79.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupResponse;
                fromJSON(object: any): _79.MsgCreateGroupResponse;
                toJSON(message: _79.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupResponse>): _79.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _79.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMembers;
                fromJSON(object: any): _79.MsgUpdateGroupMembers;
                toJSON(message: _79.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupMembers>): _79.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _79.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _79.MsgUpdateGroupMembersResponse;
                toJSON(_: _79.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupMembersResponse>): _79.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _79.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupAdmin;
                fromJSON(object: any): _79.MsgUpdateGroupAdmin;
                toJSON(message: _79.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupAdmin>): _79.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _79.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _79.MsgUpdateGroupAdminResponse;
                toJSON(_: _79.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupAdminResponse>): _79.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _79.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMetadata;
                fromJSON(object: any): _79.MsgUpdateGroupMetadata;
                toJSON(message: _79.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupMetadata>): _79.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _79.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _79.MsgUpdateGroupMetadataResponse;
                toJSON(_: _79.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupMetadataResponse>): _79.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _79.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupPolicy;
                fromJSON(object: any): _79.MsgCreateGroupPolicy;
                toJSON(message: _79.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupPolicy>): _79.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _79.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _79.MsgCreateGroupPolicyResponse;
                toJSON(message: _79.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupPolicyResponse>): _79.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _79.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _79.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _79.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupPolicyAdmin>): _79.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _79.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _79.MsgCreateGroupWithPolicy;
                toJSON(message: _79.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupWithPolicy>): _79.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _79.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _79.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _79.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupWithPolicyResponse>): _79.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _79.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _79.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _79.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupPolicyAdminResponse>): _79.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _79.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _79.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _79.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupPolicyDecisionPolicy>): _79.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _79.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _79.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _79.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupPolicyDecisionPolicyResponse>): _79.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _79.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _79.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _79.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupPolicyMetadata>): _79.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _79.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _79.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _79.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupPolicyMetadataResponse>): _79.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _79.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgSubmitProposal;
                fromJSON(object: any): _79.MsgSubmitProposal;
                toJSON(message: _79.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_79.MsgSubmitProposal>): _79.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _79.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgSubmitProposalResponse;
                fromJSON(object: any): _79.MsgSubmitProposalResponse;
                toJSON(message: _79.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_79.MsgSubmitProposalResponse>): _79.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _79.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgWithdrawProposal;
                fromJSON(object: any): _79.MsgWithdrawProposal;
                toJSON(message: _79.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_79.MsgWithdrawProposal>): _79.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _79.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgWithdrawProposalResponse;
                fromJSON(_: any): _79.MsgWithdrawProposalResponse;
                toJSON(_: _79.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_79.MsgWithdrawProposalResponse>): _79.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _79.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgVote;
                fromJSON(object: any): _79.MsgVote;
                toJSON(message: _79.MsgVote): unknown;
                fromPartial(object: Partial<_79.MsgVote>): _79.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _79.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgVoteResponse;
                fromJSON(_: any): _79.MsgVoteResponse;
                toJSON(_: _79.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_79.MsgVoteResponse>): _79.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _79.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgExec;
                fromJSON(object: any): _79.MsgExec;
                toJSON(message: _79.MsgExec): unknown;
                fromPartial(object: Partial<_79.MsgExec>): _79.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _79.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgExecResponse;
                fromJSON(_: any): _79.MsgExecResponse;
                toJSON(_: _79.MsgExecResponse): unknown;
                fromPartial(_: Partial<_79.MsgExecResponse>): _79.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _79.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgLeaveGroup;
                fromJSON(object: any): _79.MsgLeaveGroup;
                toJSON(message: _79.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_79.MsgLeaveGroup>): _79.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _79.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgLeaveGroupResponse;
                fromJSON(_: any): _79.MsgLeaveGroupResponse;
                toJSON(_: _79.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_79.MsgLeaveGroupResponse>): _79.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _78.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupInfoRequest;
                fromJSON(object: any): _78.QueryGroupInfoRequest;
                toJSON(message: _78.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupInfoRequest>): _78.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _78.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupInfoResponse;
                fromJSON(object: any): _78.QueryGroupInfoResponse;
                toJSON(message: _78.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupInfoResponse>): _78.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _78.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _78.QueryGroupPolicyInfoRequest;
                toJSON(message: _78.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupPolicyInfoRequest>): _78.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _78.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _78.QueryGroupPolicyInfoResponse;
                toJSON(message: _78.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupPolicyInfoResponse>): _78.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _78.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupMembersRequest;
                fromJSON(object: any): _78.QueryGroupMembersRequest;
                toJSON(message: _78.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupMembersRequest>): _78.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _78.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupMembersResponse;
                fromJSON(object: any): _78.QueryGroupMembersResponse;
                toJSON(message: _78.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupMembersResponse>): _78.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _78.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByAdminRequest;
                fromJSON(object: any): _78.QueryGroupsByAdminRequest;
                toJSON(message: _78.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByAdminRequest>): _78.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _78.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByAdminResponse;
                fromJSON(object: any): _78.QueryGroupsByAdminResponse;
                toJSON(message: _78.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByAdminResponse>): _78.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _78.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _78.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _78.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByGroupRequest>): _78.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _78.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _78.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _78.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByGroupResponse>): _78.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _78.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _78.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _78.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByAdminRequest>): _78.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _78.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _78.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _78.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByAdminResponse>): _78.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _78.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalRequest;
                fromJSON(object: any): _78.QueryProposalRequest;
                toJSON(message: _78.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_78.QueryProposalRequest>): _78.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _78.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalResponse;
                fromJSON(object: any): _78.QueryProposalResponse;
                toJSON(message: _78.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_78.QueryProposalResponse>): _78.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _78.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _78.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _78.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_78.QueryProposalsByGroupPolicyRequest>): _78.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _78.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _78.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _78.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_78.QueryProposalsByGroupPolicyResponse>): _78.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _78.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _78.QueryVoteByProposalVoterRequest;
                toJSON(message: _78.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_78.QueryVoteByProposalVoterRequest>): _78.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _78.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _78.QueryVoteByProposalVoterResponse;
                toJSON(message: _78.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_78.QueryVoteByProposalVoterResponse>): _78.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _78.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByProposalRequest;
                fromJSON(object: any): _78.QueryVotesByProposalRequest;
                toJSON(message: _78.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_78.QueryVotesByProposalRequest>): _78.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _78.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByProposalResponse;
                fromJSON(object: any): _78.QueryVotesByProposalResponse;
                toJSON(message: _78.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_78.QueryVotesByProposalResponse>): _78.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _78.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByVoterRequest;
                fromJSON(object: any): _78.QueryVotesByVoterRequest;
                toJSON(message: _78.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_78.QueryVotesByVoterRequest>): _78.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _78.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByVoterResponse;
                fromJSON(object: any): _78.QueryVotesByVoterResponse;
                toJSON(message: _78.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_78.QueryVotesByVoterResponse>): _78.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _78.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByMemberRequest;
                fromJSON(object: any): _78.QueryGroupsByMemberRequest;
                toJSON(message: _78.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByMemberRequest>): _78.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _78.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByMemberResponse;
                fromJSON(object: any): _78.QueryGroupsByMemberResponse;
                toJSON(message: _78.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByMemberResponse>): _78.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _78.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryTallyResultRequest;
                fromJSON(object: any): _78.QueryTallyResultRequest;
                toJSON(message: _78.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_78.QueryTallyResultRequest>): _78.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _78.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryTallyResultResponse;
                fromJSON(object: any): _78.QueryTallyResultResponse;
                toJSON(message: _78.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_78.QueryTallyResultResponse>): _78.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromJSON(object: any): _77.GenesisState;
                toJSON(message: _77.GenesisState): unknown;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _76.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventCreateGroup;
                fromJSON(object: any): _76.EventCreateGroup;
                toJSON(message: _76.EventCreateGroup): unknown;
                fromPartial(object: Partial<_76.EventCreateGroup>): _76.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _76.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventUpdateGroup;
                fromJSON(object: any): _76.EventUpdateGroup;
                toJSON(message: _76.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_76.EventUpdateGroup>): _76.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _76.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventCreateGroupPolicy;
                fromJSON(object: any): _76.EventCreateGroupPolicy;
                toJSON(message: _76.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_76.EventCreateGroupPolicy>): _76.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _76.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventUpdateGroupPolicy;
                fromJSON(object: any): _76.EventUpdateGroupPolicy;
                toJSON(message: _76.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_76.EventUpdateGroupPolicy>): _76.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _76.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventSubmitProposal;
                fromJSON(object: any): _76.EventSubmitProposal;
                toJSON(message: _76.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_76.EventSubmitProposal>): _76.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _76.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventWithdrawProposal;
                fromJSON(object: any): _76.EventWithdrawProposal;
                toJSON(message: _76.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_76.EventWithdrawProposal>): _76.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _76.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventVote;
                fromJSON(object: any): _76.EventVote;
                toJSON(message: _76.EventVote): unknown;
                fromPartial(object: Partial<_76.EventVote>): _76.EventVote;
            };
            EventExec: {
                encode(message: _76.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventExec;
                fromJSON(object: any): _76.EventExec;
                toJSON(message: _76.EventExec): unknown;
                fromPartial(object: Partial<_76.EventExec>): _76.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _76.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventLeaveGroup;
                fromJSON(object: any): _76.EventLeaveGroup;
                toJSON(message: _76.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_76.EventLeaveGroup>): _76.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _146.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _83.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsRequest;
                fromJSON(_: any): _83.QueryParamsRequest;
                toJSON(_: _83.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _83.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsResponse;
                fromJSON(object: any): _83.QueryParamsResponse;
                toJSON(message: _83.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _83.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryInflationRequest;
                fromJSON(_: any): _83.QueryInflationRequest;
                toJSON(_: _83.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_83.QueryInflationRequest>): _83.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _83.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryInflationResponse;
                fromJSON(object: any): _83.QueryInflationResponse;
                toJSON(message: _83.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_83.QueryInflationResponse>): _83.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _83.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _83.QueryAnnualProvisionsRequest;
                toJSON(_: _83.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_83.QueryAnnualProvisionsRequest>): _83.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _83.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _83.QueryAnnualProvisionsResponse;
                toJSON(message: _83.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_83.QueryAnnualProvisionsResponse>): _83.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _82.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Minter;
                fromJSON(object: any): _82.Minter;
                toJSON(message: _82.Minter): unknown;
                fromPartial(object: Partial<_82.Minter>): _82.Minter;
            };
            Params: {
                encode(message: _82.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Params;
                fromJSON(object: any): _82.Params;
                toJSON(message: _82.Params): unknown;
                fromPartial(object: Partial<_82.Params>): _82.Params;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
                fromJSON(object: any): _81.GenesisState;
                toJSON(message: _81.GenesisState): unknown;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _88.QueryBalanceRequest): Promise<_88.QueryBalanceResponse>;
                owner(request: _88.QueryOwnerRequest): Promise<_88.QueryOwnerResponse>;
                supply(request: _88.QuerySupplyRequest): Promise<_88.QuerySupplyResponse>;
                nFTs(request: _88.QueryNFTsRequest): Promise<_88.QueryNFTsResponse>;
                nFT(request: _88.QueryNFTRequest): Promise<_88.QueryNFTResponse>;
                class(request: _88.QueryClassRequest): Promise<_88.QueryClassResponse>;
                classes(request?: _88.QueryClassesRequest): Promise<_88.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            MsgSend: {
                encode(message: _89.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgSend;
                fromJSON(object: any): _89.MsgSend;
                toJSON(message: _89.MsgSend): unknown;
                fromPartial(object: Partial<_89.MsgSend>): _89.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _89.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgSendResponse;
                fromJSON(_: any): _89.MsgSendResponse;
                toJSON(_: _89.MsgSendResponse): unknown;
                fromPartial(_: Partial<_89.MsgSendResponse>): _89.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _88.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryBalanceRequest;
                fromJSON(object: any): _88.QueryBalanceRequest;
                toJSON(message: _88.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_88.QueryBalanceRequest>): _88.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _88.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryBalanceResponse;
                fromJSON(object: any): _88.QueryBalanceResponse;
                toJSON(message: _88.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_88.QueryBalanceResponse>): _88.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _88.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryOwnerRequest;
                fromJSON(object: any): _88.QueryOwnerRequest;
                toJSON(message: _88.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_88.QueryOwnerRequest>): _88.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _88.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryOwnerResponse;
                fromJSON(object: any): _88.QueryOwnerResponse;
                toJSON(message: _88.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_88.QueryOwnerResponse>): _88.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _88.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QuerySupplyRequest;
                fromJSON(object: any): _88.QuerySupplyRequest;
                toJSON(message: _88.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_88.QuerySupplyRequest>): _88.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _88.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QuerySupplyResponse;
                fromJSON(object: any): _88.QuerySupplyResponse;
                toJSON(message: _88.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_88.QuerySupplyResponse>): _88.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _88.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryNFTsRequest;
                fromJSON(object: any): _88.QueryNFTsRequest;
                toJSON(message: _88.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_88.QueryNFTsRequest>): _88.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _88.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryNFTsResponse;
                fromJSON(object: any): _88.QueryNFTsResponse;
                toJSON(message: _88.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_88.QueryNFTsResponse>): _88.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _88.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryNFTRequest;
                fromJSON(object: any): _88.QueryNFTRequest;
                toJSON(message: _88.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_88.QueryNFTRequest>): _88.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _88.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryNFTResponse;
                fromJSON(object: any): _88.QueryNFTResponse;
                toJSON(message: _88.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_88.QueryNFTResponse>): _88.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _88.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryClassRequest;
                fromJSON(object: any): _88.QueryClassRequest;
                toJSON(message: _88.QueryClassRequest): unknown;
                fromPartial(object: Partial<_88.QueryClassRequest>): _88.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _88.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryClassResponse;
                fromJSON(object: any): _88.QueryClassResponse;
                toJSON(message: _88.QueryClassResponse): unknown;
                fromPartial(object: Partial<_88.QueryClassResponse>): _88.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _88.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryClassesRequest;
                fromJSON(object: any): _88.QueryClassesRequest;
                toJSON(message: _88.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_88.QueryClassesRequest>): _88.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _88.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryClassesResponse;
                fromJSON(object: any): _88.QueryClassesResponse;
                toJSON(message: _88.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_88.QueryClassesResponse>): _88.QueryClassesResponse;
            };
            Class: {
                encode(message: _87.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Class;
                fromJSON(object: any): _87.Class;
                toJSON(message: _87.Class): unknown;
                fromPartial(object: Partial<_87.Class>): _87.Class;
            };
            NFT: {
                encode(message: _87.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.NFT;
                fromJSON(object: any): _87.NFT;
                toJSON(message: _87.NFT): unknown;
                fromPartial(object: Partial<_87.NFT>): _87.NFT;
            };
            GenesisState: {
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
            };
            Entry: {
                encode(message: _86.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Entry;
                fromJSON(object: any): _86.Entry;
                toJSON(message: _86.Entry): unknown;
                fromPartial(object: Partial<_86.Entry>): _86.Entry;
            };
            EventSend: {
                encode(message: _85.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.EventSend;
                fromJSON(object: any): _85.EventSend;
                toJSON(message: _85.EventSend): unknown;
                fromPartial(object: Partial<_85.EventSend>): _85.EventSend;
            };
            EventMint: {
                encode(message: _85.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.EventMint;
                fromJSON(object: any): _85.EventMint;
                toJSON(message: _85.EventMint): unknown;
                fromPartial(object: Partial<_85.EventMint>): _85.EventMint;
            };
            EventBurn: {
                encode(message: _85.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.EventBurn;
                fromJSON(object: any): _85.EventBurn;
                toJSON(message: _85.EventBurn): unknown;
                fromPartial(object: Partial<_85.EventBurn>): _85.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _90.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.TableDescriptor;
                fromJSON(object: any): _90.TableDescriptor;
                toJSON(message: _90.TableDescriptor): unknown;
                fromPartial(object: Partial<_90.TableDescriptor>): _90.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _90.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PrimaryKeyDescriptor;
                fromJSON(object: any): _90.PrimaryKeyDescriptor;
                toJSON(message: _90.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_90.PrimaryKeyDescriptor>): _90.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _90.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SecondaryIndexDescriptor;
                fromJSON(object: any): _90.SecondaryIndexDescriptor;
                toJSON(message: _90.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_90.SecondaryIndexDescriptor>): _90.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _90.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SingletonDescriptor;
                fromJSON(object: any): _90.SingletonDescriptor;
                toJSON(message: _90.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_90.SingletonDescriptor>): _90.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _91.StorageType;
            storageTypeToJSON(object: _91.StorageType): string;
            StorageType: typeof _91.StorageType;
            StorageTypeSDKType: typeof _91.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _91.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleSchemaDescriptor;
                fromJSON(object: any): _91.ModuleSchemaDescriptor;
                toJSON(message: _91.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_91.ModuleSchemaDescriptor>): _91.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _91.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _91.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _91.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_91.ModuleSchemaDescriptor_FileEntry>): _91.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                subspaces(request?: _93.QuerySubspacesRequest): Promise<_93.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsRequest;
                fromJSON(object: any): _93.QueryParamsRequest;
                toJSON(message: _93.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsResponse;
                fromJSON(object: any): _93.QueryParamsResponse;
                toJSON(message: _93.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _93.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QuerySubspacesRequest;
                fromJSON(_: any): _93.QuerySubspacesRequest;
                toJSON(_: _93.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_93.QuerySubspacesRequest>): _93.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _93.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QuerySubspacesResponse;
                fromJSON(object: any): _93.QuerySubspacesResponse;
                toJSON(message: _93.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_93.QuerySubspacesResponse>): _93.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _93.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Subspace;
                fromJSON(object: any): _93.Subspace;
                toJSON(message: _93.Subspace): unknown;
                fromPartial(object: Partial<_93.Subspace>): _93.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _92.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ParameterChangeProposal;
                fromJSON(object: any): _92.ParameterChangeProposal;
                toJSON(message: _92.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_92.ParameterChangeProposal>): _92.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _92.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ParamChange;
                fromJSON(object: any): _92.ParamChange;
                toJSON(message: _92.ParamChange): unknown;
                fromPartial(object: Partial<_92.ParamChange>): _92.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                signingInfo(request: _95.QuerySigningInfoRequest): Promise<_95.QuerySigningInfoResponse>;
                signingInfos(request?: _95.QuerySigningInfosRequest): Promise<_95.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            MsgUnjail: {
                encode(message: _97.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgUnjail;
                fromJSON(object: any): _97.MsgUnjail;
                toJSON(message: _97.MsgUnjail): unknown;
                fromPartial(object: Partial<_97.MsgUnjail>): _97.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _97.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgUnjailResponse;
                fromJSON(_: any): _97.MsgUnjailResponse;
                toJSON(_: _97.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_97.MsgUnjailResponse>): _97.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _96.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorSigningInfo;
                fromJSON(object: any): _96.ValidatorSigningInfo;
                toJSON(message: _96.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_96.ValidatorSigningInfo>): _96.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _96.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Params;
                fromJSON(object: any): _96.Params;
                toJSON(message: _96.Params): unknown;
                fromPartial(object: Partial<_96.Params>): _96.Params;
            };
            QueryParamsRequest: {
                encode(_: _95.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryParamsRequest;
                fromJSON(_: any): _95.QueryParamsRequest;
                toJSON(_: _95.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_95.QueryParamsRequest>): _95.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _95.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryParamsResponse;
                fromJSON(object: any): _95.QueryParamsResponse;
                toJSON(message: _95.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_95.QueryParamsResponse>): _95.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _95.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QuerySigningInfoRequest;
                fromJSON(object: any): _95.QuerySigningInfoRequest;
                toJSON(message: _95.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_95.QuerySigningInfoRequest>): _95.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _95.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QuerySigningInfoResponse;
                fromJSON(object: any): _95.QuerySigningInfoResponse;
                toJSON(message: _95.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_95.QuerySigningInfoResponse>): _95.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _95.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QuerySigningInfosRequest;
                fromJSON(object: any): _95.QuerySigningInfosRequest;
                toJSON(message: _95.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_95.QuerySigningInfosRequest>): _95.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _95.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QuerySigningInfosResponse;
                fromJSON(object: any): _95.QuerySigningInfosResponse;
                toJSON(message: _95.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_95.QuerySigningInfosResponse>): _95.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState;
                fromJSON(object: any): _94.GenesisState;
                toJSON(message: _94.GenesisState): unknown;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
            };
            SigningInfo: {
                encode(message: _94.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SigningInfo;
                fromJSON(object: any): _94.SigningInfo;
                toJSON(message: _94.SigningInfo): unknown;
                fromPartial(object: Partial<_94.SigningInfo>): _94.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _94.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorMissedBlocks;
                fromJSON(object: any): _94.ValidatorMissedBlocks;
                toJSON(message: _94.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_94.ValidatorMissedBlocks>): _94.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _94.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MissedBlock;
                fromJSON(object: any): _94.MissedBlock;
                toJSON(message: _94.MissedBlock): unknown;
                fromPartial(object: Partial<_94.MissedBlock>): _94.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _100.QueryValidatorsRequest): Promise<_100.QueryValidatorsResponse>;
                validator(request: _100.QueryValidatorRequest): Promise<_100.QueryValidatorResponse>;
                validatorDelegations(request: _100.QueryValidatorDelegationsRequest): Promise<_100.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _100.QueryValidatorUnbondingDelegationsRequest): Promise<_100.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _100.QueryDelegationRequest): Promise<_100.QueryDelegationResponse>;
                unbondingDelegation(request: _100.QueryUnbondingDelegationRequest): Promise<_100.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _100.QueryDelegatorDelegationsRequest): Promise<_100.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _100.QueryDelegatorUnbondingDelegationsRequest): Promise<_100.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _100.QueryRedelegationsRequest): Promise<_100.QueryRedelegationsResponse>;
                delegatorValidators(request: _100.QueryDelegatorValidatorsRequest): Promise<_100.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _100.QueryDelegatorValidatorRequest): Promise<_100.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _100.QueryHistoricalInfoRequest): Promise<_100.QueryHistoricalInfoResponse>;
                pool(request?: _100.QueryPoolRequest): Promise<_100.QueryPoolResponse>;
                params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            MsgCreateValidator: {
                encode(message: _102.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgCreateValidator;
                fromJSON(object: any): _102.MsgCreateValidator;
                toJSON(message: _102.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_102.MsgCreateValidator>): _102.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _102.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgCreateValidatorResponse;
                fromJSON(_: any): _102.MsgCreateValidatorResponse;
                toJSON(_: _102.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_102.MsgCreateValidatorResponse>): _102.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _102.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgEditValidator;
                fromJSON(object: any): _102.MsgEditValidator;
                toJSON(message: _102.MsgEditValidator): unknown;
                fromPartial(object: Partial<_102.MsgEditValidator>): _102.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _102.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgEditValidatorResponse;
                fromJSON(_: any): _102.MsgEditValidatorResponse;
                toJSON(_: _102.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_102.MsgEditValidatorResponse>): _102.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _102.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgDelegate;
                fromJSON(object: any): _102.MsgDelegate;
                toJSON(message: _102.MsgDelegate): unknown;
                fromPartial(object: Partial<_102.MsgDelegate>): _102.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _102.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgDelegateResponse;
                fromJSON(_: any): _102.MsgDelegateResponse;
                toJSON(_: _102.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_102.MsgDelegateResponse>): _102.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _102.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgBeginRedelegate;
                fromJSON(object: any): _102.MsgBeginRedelegate;
                toJSON(message: _102.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_102.MsgBeginRedelegate>): _102.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _102.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgBeginRedelegateResponse;
                fromJSON(object: any): _102.MsgBeginRedelegateResponse;
                toJSON(message: _102.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_102.MsgBeginRedelegateResponse>): _102.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _102.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUndelegate;
                fromJSON(object: any): _102.MsgUndelegate;
                toJSON(message: _102.MsgUndelegate): unknown;
                fromPartial(object: Partial<_102.MsgUndelegate>): _102.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _102.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUndelegateResponse;
                fromJSON(object: any): _102.MsgUndelegateResponse;
                toJSON(message: _102.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_102.MsgUndelegateResponse>): _102.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _101.BondStatus;
            bondStatusToJSON(object: _101.BondStatus): string;
            BondStatus: typeof _101.BondStatus;
            BondStatusSDKType: typeof _101.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _101.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.HistoricalInfo;
                fromJSON(object: any): _101.HistoricalInfo;
                toJSON(message: _101.HistoricalInfo): unknown;
                fromPartial(object: Partial<_101.HistoricalInfo>): _101.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _101.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CommissionRates;
                fromJSON(object: any): _101.CommissionRates;
                toJSON(message: _101.CommissionRates): unknown;
                fromPartial(object: Partial<_101.CommissionRates>): _101.CommissionRates;
            };
            Commission: {
                encode(message: _101.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Commission;
                fromJSON(object: any): _101.Commission;
                toJSON(message: _101.Commission): unknown;
                fromPartial(object: Partial<_101.Commission>): _101.Commission;
            };
            Description: {
                encode(message: _101.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Description;
                fromJSON(object: any): _101.Description;
                toJSON(message: _101.Description): unknown;
                fromPartial(object: Partial<_101.Description>): _101.Description;
            };
            Validator: {
                encode(message: _101.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Validator;
                fromJSON(object: any): _101.Validator;
                toJSON(message: _101.Validator): unknown;
                fromPartial(object: Partial<_101.Validator>): _101.Validator;
            };
            ValAddresses: {
                encode(message: _101.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ValAddresses;
                fromJSON(object: any): _101.ValAddresses;
                toJSON(message: _101.ValAddresses): unknown;
                fromPartial(object: Partial<_101.ValAddresses>): _101.ValAddresses;
            };
            DVPair: {
                encode(message: _101.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DVPair;
                fromJSON(object: any): _101.DVPair;
                toJSON(message: _101.DVPair): unknown;
                fromPartial(object: Partial<_101.DVPair>): _101.DVPair;
            };
            DVPairs: {
                encode(message: _101.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DVPairs;
                fromJSON(object: any): _101.DVPairs;
                toJSON(message: _101.DVPairs): unknown;
                fromPartial(object: Partial<_101.DVPairs>): _101.DVPairs;
            };
            DVVTriplet: {
                encode(message: _101.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DVVTriplet;
                fromJSON(object: any): _101.DVVTriplet;
                toJSON(message: _101.DVVTriplet): unknown;
                fromPartial(object: Partial<_101.DVVTriplet>): _101.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _101.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DVVTriplets;
                fromJSON(object: any): _101.DVVTriplets;
                toJSON(message: _101.DVVTriplets): unknown;
                fromPartial(object: Partial<_101.DVVTriplets>): _101.DVVTriplets;
            };
            Delegation: {
                encode(message: _101.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Delegation;
                fromJSON(object: any): _101.Delegation;
                toJSON(message: _101.Delegation): unknown;
                fromPartial(object: Partial<_101.Delegation>): _101.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _101.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.UnbondingDelegation;
                fromJSON(object: any): _101.UnbondingDelegation;
                toJSON(message: _101.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_101.UnbondingDelegation>): _101.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _101.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.UnbondingDelegationEntry;
                fromJSON(object: any): _101.UnbondingDelegationEntry;
                toJSON(message: _101.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_101.UnbondingDelegationEntry>): _101.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _101.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RedelegationEntry;
                fromJSON(object: any): _101.RedelegationEntry;
                toJSON(message: _101.RedelegationEntry): unknown;
                fromPartial(object: Partial<_101.RedelegationEntry>): _101.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _101.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Redelegation;
                fromJSON(object: any): _101.Redelegation;
                toJSON(message: _101.Redelegation): unknown;
                fromPartial(object: Partial<_101.Redelegation>): _101.Redelegation;
            };
            Params: {
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                fromJSON(object: any): _101.Params;
                toJSON(message: _101.Params): unknown;
                fromPartial(object: Partial<_101.Params>): _101.Params;
            };
            DelegationResponse: {
                encode(message: _101.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DelegationResponse;
                fromJSON(object: any): _101.DelegationResponse;
                toJSON(message: _101.DelegationResponse): unknown;
                fromPartial(object: Partial<_101.DelegationResponse>): _101.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _101.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RedelegationEntryResponse;
                fromJSON(object: any): _101.RedelegationEntryResponse;
                toJSON(message: _101.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_101.RedelegationEntryResponse>): _101.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _101.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RedelegationResponse;
                fromJSON(object: any): _101.RedelegationResponse;
                toJSON(message: _101.RedelegationResponse): unknown;
                fromPartial(object: Partial<_101.RedelegationResponse>): _101.RedelegationResponse;
            };
            Pool: {
                encode(message: _101.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Pool;
                fromJSON(object: any): _101.Pool;
                toJSON(message: _101.Pool): unknown;
                fromPartial(object: Partial<_101.Pool>): _101.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _100.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorsRequest;
                fromJSON(object: any): _100.QueryValidatorsRequest;
                toJSON(message: _100.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_100.QueryValidatorsRequest>): _100.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _100.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorsResponse;
                fromJSON(object: any): _100.QueryValidatorsResponse;
                toJSON(message: _100.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_100.QueryValidatorsResponse>): _100.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _100.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorRequest;
                fromJSON(object: any): _100.QueryValidatorRequest;
                toJSON(message: _100.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_100.QueryValidatorRequest>): _100.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _100.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorResponse;
                fromJSON(object: any): _100.QueryValidatorResponse;
                toJSON(message: _100.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_100.QueryValidatorResponse>): _100.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _100.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _100.QueryValidatorDelegationsRequest;
                toJSON(message: _100.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_100.QueryValidatorDelegationsRequest>): _100.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _100.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _100.QueryValidatorDelegationsResponse;
                toJSON(message: _100.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_100.QueryValidatorDelegationsResponse>): _100.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _100.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _100.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _100.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_100.QueryValidatorUnbondingDelegationsRequest>): _100.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _100.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _100.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _100.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_100.QueryValidatorUnbondingDelegationsResponse>): _100.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _100.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegationRequest;
                fromJSON(object: any): _100.QueryDelegationRequest;
                toJSON(message: _100.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_100.QueryDelegationRequest>): _100.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _100.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegationResponse;
                fromJSON(object: any): _100.QueryDelegationResponse;
                toJSON(message: _100.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_100.QueryDelegationResponse>): _100.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _100.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _100.QueryUnbondingDelegationRequest;
                toJSON(message: _100.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_100.QueryUnbondingDelegationRequest>): _100.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _100.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _100.QueryUnbondingDelegationResponse;
                toJSON(message: _100.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_100.QueryUnbondingDelegationResponse>): _100.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _100.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _100.QueryDelegatorDelegationsRequest;
                toJSON(message: _100.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorDelegationsRequest>): _100.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _100.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _100.QueryDelegatorDelegationsResponse;
                toJSON(message: _100.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorDelegationsResponse>): _100.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _100.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _100.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _100.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorUnbondingDelegationsRequest>): _100.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _100.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _100.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _100.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorUnbondingDelegationsResponse>): _100.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _100.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryRedelegationsRequest;
                fromJSON(object: any): _100.QueryRedelegationsRequest;
                toJSON(message: _100.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_100.QueryRedelegationsRequest>): _100.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _100.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryRedelegationsResponse;
                fromJSON(object: any): _100.QueryRedelegationsResponse;
                toJSON(message: _100.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_100.QueryRedelegationsResponse>): _100.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _100.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _100.QueryDelegatorValidatorsRequest;
                toJSON(message: _100.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorValidatorsRequest>): _100.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _100.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _100.QueryDelegatorValidatorsResponse;
                toJSON(message: _100.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorValidatorsResponse>): _100.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _100.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _100.QueryDelegatorValidatorRequest;
                toJSON(message: _100.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorValidatorRequest>): _100.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _100.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _100.QueryDelegatorValidatorResponse;
                toJSON(message: _100.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_100.QueryDelegatorValidatorResponse>): _100.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _100.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryHistoricalInfoRequest;
                fromJSON(object: any): _100.QueryHistoricalInfoRequest;
                toJSON(message: _100.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_100.QueryHistoricalInfoRequest>): _100.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _100.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryHistoricalInfoResponse;
                fromJSON(object: any): _100.QueryHistoricalInfoResponse;
                toJSON(message: _100.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_100.QueryHistoricalInfoResponse>): _100.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _100.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolRequest;
                fromJSON(_: any): _100.QueryPoolRequest;
                toJSON(_: _100.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_100.QueryPoolRequest>): _100.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _100.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryPoolResponse;
                fromJSON(object: any): _100.QueryPoolResponse;
                toJSON(message: _100.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_100.QueryPoolResponse>): _100.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _100.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsRequest;
                fromJSON(_: any): _100.QueryParamsRequest;
                toJSON(_: _100.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _100.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsResponse;
                fromJSON(object: any): _100.QueryParamsResponse;
                toJSON(message: _100.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_100.QueryParamsResponse>): _100.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _99.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GenesisState;
                fromJSON(object: any): _99.GenesisState;
                toJSON(message: _99.GenesisState): unknown;
                fromPartial(object: Partial<_99.GenesisState>): _99.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _99.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.LastValidatorPower;
                fromJSON(object: any): _99.LastValidatorPower;
                toJSON(message: _99.LastValidatorPower): unknown;
                fromPartial(object: Partial<_99.LastValidatorPower>): _99.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _98.AuthorizationType;
            authorizationTypeToJSON(object: _98.AuthorizationType): string;
            AuthorizationType: typeof _98.AuthorizationType;
            AuthorizationTypeSDKType: typeof _98.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _98.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.StakeAuthorization;
                fromJSON(object: any): _98.StakeAuthorization;
                toJSON(message: _98.StakeAuthorization): unknown;
                fromPartial(object: Partial<_98.StakeAuthorization>): _98.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _98.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.StakeAuthorization_Validators;
                fromJSON(object: any): _98.StakeAuthorization_Validators;
                toJSON(message: _98.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_98.StakeAuthorization_Validators>): _98.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _103.SignMode;
                signModeToJSON(object: _103.SignMode): string;
                SignMode: typeof _103.SignMode;
                SignModeSDKType: typeof _103.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _103.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SignatureDescriptors;
                    fromJSON(object: any): _103.SignatureDescriptors;
                    toJSON(message: _103.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_103.SignatureDescriptors>): _103.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _103.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SignatureDescriptor;
                    fromJSON(object: any): _103.SignatureDescriptor;
                    toJSON(message: _103.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_103.SignatureDescriptor>): _103.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _103.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SignatureDescriptor_Data;
                    fromJSON(object: any): _103.SignatureDescriptor_Data;
                    toJSON(message: _103.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_103.SignatureDescriptor_Data>): _103.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _103.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _103.SignatureDescriptor_Data_Single;
                    toJSON(message: _103.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_103.SignatureDescriptor_Data_Single>): _103.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _103.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _103.SignatureDescriptor_Data_Multi;
                    toJSON(message: _103.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_103.SignatureDescriptor_Data_Multi>): _103.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _169.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _104.SimulateRequest): Promise<_104.SimulateResponse>;
                getTx(request: _104.GetTxRequest): Promise<_104.GetTxResponse>;
                broadcastTx(request: _104.BroadcastTxRequest): Promise<_104.BroadcastTxResponse>;
                getTxsEvent(request: _104.GetTxsEventRequest): Promise<_104.GetTxsEventResponse>;
                getBlockWithTxs(request: _104.GetBlockWithTxsRequest): Promise<_104.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            Tx: {
                encode(message: _105.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Tx;
                fromJSON(object: any): _105.Tx;
                toJSON(message: _105.Tx): unknown;
                fromPartial(object: Partial<_105.Tx>): _105.Tx;
            };
            TxRaw: {
                encode(message: _105.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TxRaw;
                fromJSON(object: any): _105.TxRaw;
                toJSON(message: _105.TxRaw): unknown;
                fromPartial(object: Partial<_105.TxRaw>): _105.TxRaw;
            };
            SignDoc: {
                encode(message: _105.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignDoc;
                fromJSON(object: any): _105.SignDoc;
                toJSON(message: _105.SignDoc): unknown;
                fromPartial(object: Partial<_105.SignDoc>): _105.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _105.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignDocDirectAux;
                fromJSON(object: any): _105.SignDocDirectAux;
                toJSON(message: _105.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_105.SignDocDirectAux>): _105.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _105.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TxBody;
                fromJSON(object: any): _105.TxBody;
                toJSON(message: _105.TxBody): unknown;
                fromPartial(object: Partial<_105.TxBody>): _105.TxBody;
            };
            AuthInfo: {
                encode(message: _105.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.AuthInfo;
                fromJSON(object: any): _105.AuthInfo;
                toJSON(message: _105.AuthInfo): unknown;
                fromPartial(object: Partial<_105.AuthInfo>): _105.AuthInfo;
            };
            SignerInfo: {
                encode(message: _105.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignerInfo;
                fromJSON(object: any): _105.SignerInfo;
                toJSON(message: _105.SignerInfo): unknown;
                fromPartial(object: Partial<_105.SignerInfo>): _105.SignerInfo;
            };
            ModeInfo: {
                encode(message: _105.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ModeInfo;
                fromJSON(object: any): _105.ModeInfo;
                toJSON(message: _105.ModeInfo): unknown;
                fromPartial(object: Partial<_105.ModeInfo>): _105.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _105.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ModeInfo_Single;
                fromJSON(object: any): _105.ModeInfo_Single;
                toJSON(message: _105.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_105.ModeInfo_Single>): _105.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _105.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ModeInfo_Multi;
                fromJSON(object: any): _105.ModeInfo_Multi;
                toJSON(message: _105.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_105.ModeInfo_Multi>): _105.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _105.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Fee;
                fromJSON(object: any): _105.Fee;
                toJSON(message: _105.Fee): unknown;
                fromPartial(object: Partial<_105.Fee>): _105.Fee;
            };
            Tip: {
                encode(message: _105.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Tip;
                fromJSON(object: any): _105.Tip;
                toJSON(message: _105.Tip): unknown;
                fromPartial(object: Partial<_105.Tip>): _105.Tip;
            };
            AuxSignerData: {
                encode(message: _105.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.AuxSignerData;
                fromJSON(object: any): _105.AuxSignerData;
                toJSON(message: _105.AuxSignerData): unknown;
                fromPartial(object: Partial<_105.AuxSignerData>): _105.AuxSignerData;
            };
            orderByFromJSON(object: any): _104.OrderBy;
            orderByToJSON(object: _104.OrderBy): string;
            broadcastModeFromJSON(object: any): _104.BroadcastMode;
            broadcastModeToJSON(object: _104.BroadcastMode): string;
            OrderBy: typeof _104.OrderBy;
            OrderBySDKType: typeof _104.OrderBySDKType;
            BroadcastMode: typeof _104.BroadcastMode;
            BroadcastModeSDKType: typeof _104.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _104.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GetTxsEventRequest;
                fromJSON(object: any): _104.GetTxsEventRequest;
                toJSON(message: _104.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_104.GetTxsEventRequest>): _104.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _104.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GetTxsEventResponse;
                fromJSON(object: any): _104.GetTxsEventResponse;
                toJSON(message: _104.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_104.GetTxsEventResponse>): _104.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _104.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BroadcastTxRequest;
                fromJSON(object: any): _104.BroadcastTxRequest;
                toJSON(message: _104.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_104.BroadcastTxRequest>): _104.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _104.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BroadcastTxResponse;
                fromJSON(object: any): _104.BroadcastTxResponse;
                toJSON(message: _104.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_104.BroadcastTxResponse>): _104.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _104.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SimulateRequest;
                fromJSON(object: any): _104.SimulateRequest;
                toJSON(message: _104.SimulateRequest): unknown;
                fromPartial(object: Partial<_104.SimulateRequest>): _104.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _104.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SimulateResponse;
                fromJSON(object: any): _104.SimulateResponse;
                toJSON(message: _104.SimulateResponse): unknown;
                fromPartial(object: Partial<_104.SimulateResponse>): _104.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _104.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GetTxRequest;
                fromJSON(object: any): _104.GetTxRequest;
                toJSON(message: _104.GetTxRequest): unknown;
                fromPartial(object: Partial<_104.GetTxRequest>): _104.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _104.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GetTxResponse;
                fromJSON(object: any): _104.GetTxResponse;
                toJSON(message: _104.GetTxResponse): unknown;
                fromPartial(object: Partial<_104.GetTxResponse>): _104.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _104.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GetBlockWithTxsRequest;
                fromJSON(object: any): _104.GetBlockWithTxsRequest;
                toJSON(message: _104.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_104.GetBlockWithTxsRequest>): _104.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _104.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GetBlockWithTxsResponse;
                fromJSON(object: any): _104.GetBlockWithTxsResponse;
                toJSON(message: _104.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_104.GetBlockWithTxsResponse>): _104.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _106.QueryCurrentPlanRequest): Promise<_106.QueryCurrentPlanResponse>;
                appliedPlan(request: _106.QueryAppliedPlanRequest): Promise<_106.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _106.QueryUpgradedConsensusStateRequest): Promise<_106.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _106.QueryModuleVersionsRequest): Promise<_106.QueryModuleVersionsResponse>;
                authority(request?: _106.QueryAuthorityRequest): Promise<_106.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            Plan: {
                encode(message: _108.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Plan;
                fromJSON(object: any): _108.Plan;
                toJSON(message: _108.Plan): unknown;
                fromPartial(object: Partial<_108.Plan>): _108.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _108.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.SoftwareUpgradeProposal;
                fromJSON(object: any): _108.SoftwareUpgradeProposal;
                toJSON(message: _108.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_108.SoftwareUpgradeProposal>): _108.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _108.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _108.CancelSoftwareUpgradeProposal;
                toJSON(message: _108.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_108.CancelSoftwareUpgradeProposal>): _108.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _108.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ModuleVersion;
                fromJSON(object: any): _108.ModuleVersion;
                toJSON(message: _108.ModuleVersion): unknown;
                fromPartial(object: Partial<_108.ModuleVersion>): _108.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _107.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgSoftwareUpgrade;
                fromJSON(object: any): _107.MsgSoftwareUpgrade;
                toJSON(message: _107.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_107.MsgSoftwareUpgrade>): _107.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _107.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _107.MsgSoftwareUpgradeResponse;
                toJSON(_: _107.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_107.MsgSoftwareUpgradeResponse>): _107.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _107.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgCancelUpgrade;
                fromJSON(object: any): _107.MsgCancelUpgrade;
                toJSON(message: _107.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_107.MsgCancelUpgrade>): _107.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _107.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgCancelUpgradeResponse;
                fromJSON(_: any): _107.MsgCancelUpgradeResponse;
                toJSON(_: _107.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_107.MsgCancelUpgradeResponse>): _107.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _106.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCurrentPlanRequest;
                fromJSON(_: any): _106.QueryCurrentPlanRequest;
                toJSON(_: _106.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_106.QueryCurrentPlanRequest>): _106.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _106.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCurrentPlanResponse;
                fromJSON(object: any): _106.QueryCurrentPlanResponse;
                toJSON(message: _106.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_106.QueryCurrentPlanResponse>): _106.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _106.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAppliedPlanRequest;
                fromJSON(object: any): _106.QueryAppliedPlanRequest;
                toJSON(message: _106.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_106.QueryAppliedPlanRequest>): _106.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _106.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAppliedPlanResponse;
                fromJSON(object: any): _106.QueryAppliedPlanResponse;
                toJSON(message: _106.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_106.QueryAppliedPlanResponse>): _106.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _106.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _106.QueryUpgradedConsensusStateRequest;
                toJSON(message: _106.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_106.QueryUpgradedConsensusStateRequest>): _106.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _106.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _106.QueryUpgradedConsensusStateResponse;
                toJSON(message: _106.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_106.QueryUpgradedConsensusStateResponse>): _106.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _106.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryModuleVersionsRequest;
                fromJSON(object: any): _106.QueryModuleVersionsRequest;
                toJSON(message: _106.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_106.QueryModuleVersionsRequest>): _106.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _106.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryModuleVersionsResponse;
                fromJSON(object: any): _106.QueryModuleVersionsResponse;
                toJSON(message: _106.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_106.QueryModuleVersionsResponse>): _106.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _106.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAuthorityRequest;
                fromJSON(_: any): _106.QueryAuthorityRequest;
                toJSON(_: _106.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_106.QueryAuthorityRequest>): _106.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _106.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAuthorityResponse;
                fromJSON(object: any): _106.QueryAuthorityResponse;
                toJSON(message: _106.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_106.QueryAuthorityResponse>): _106.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            BaseVestingAccount: {
                encode(message: _110.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.BaseVestingAccount;
                fromJSON(object: any): _110.BaseVestingAccount;
                toJSON(message: _110.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_110.BaseVestingAccount>): _110.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _110.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ContinuousVestingAccount;
                fromJSON(object: any): _110.ContinuousVestingAccount;
                toJSON(message: _110.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_110.ContinuousVestingAccount>): _110.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _110.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DelayedVestingAccount;
                fromJSON(object: any): _110.DelayedVestingAccount;
                toJSON(message: _110.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_110.DelayedVestingAccount>): _110.DelayedVestingAccount;
            };
            Period: {
                encode(message: _110.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Period;
                fromJSON(object: any): _110.Period;
                toJSON(message: _110.Period): unknown;
                fromPartial(object: Partial<_110.Period>): _110.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _110.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PeriodicVestingAccount;
                fromJSON(object: any): _110.PeriodicVestingAccount;
                toJSON(message: _110.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_110.PeriodicVestingAccount>): _110.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _110.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PermanentLockedAccount;
                fromJSON(object: any): _110.PermanentLockedAccount;
                toJSON(message: _110.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_110.PermanentLockedAccount>): _110.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _109.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreateVestingAccount;
                fromJSON(object: any): _109.MsgCreateVestingAccount;
                toJSON(message: _109.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_109.MsgCreateVestingAccount>): _109.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _109.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _109.MsgCreateVestingAccountResponse;
                toJSON(_: _109.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_109.MsgCreateVestingAccountResponse>): _109.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _109.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _109.MsgCreatePermanentLockedAccount;
                toJSON(message: _109.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_109.MsgCreatePermanentLockedAccount>): _109.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _109.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _109.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _109.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_109.MsgCreatePermanentLockedAccountResponse>): _109.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _109.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _109.MsgCreatePeriodicVestingAccount;
                toJSON(message: _109.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_109.MsgCreatePeriodicVestingAccount>): _109.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _109.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _109.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _109.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_109.MsgCreatePeriodicVestingAccountResponse>): _109.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _171.MsgClientImpl;
                };
                bank: {
                    v1beta1: _172.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _173.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _174.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _175.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _176.MsgClientImpl;
                };
                gov: {
                    v1: _177.MsgClientImpl;
                    v1beta1: _178.MsgClientImpl;
                };
                group: {
                    v1: _179.MsgClientImpl;
                };
                nft: {
                    v1beta1: _180.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _181.MsgClientImpl;
                };
                staking: {
                    v1beta1: _182.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _183.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _184.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _21.QueryConfigRequest): Promise<_21.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _24.QueryAccountsRequest): Promise<_24.QueryAccountsResponse>;
                        account(request: _24.QueryAccountRequest): Promise<_24.QueryAccountResponse>;
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        moduleAccounts(request?: _24.QueryModuleAccountsRequest): Promise<_24.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _24.Bech32PrefixRequest): Promise<_24.Bech32PrefixResponse>;
                        addressBytesToString(request: _24.AddressBytesToStringRequest): Promise<_24.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _24.AddressStringToBytesRequest): Promise<_24.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _28.QueryGrantsRequest): Promise<_28.QueryGrantsResponse>;
                        granterGrants(request: _28.QueryGranterGrantsRequest): Promise<_28.QueryGranterGrantsResponse>;
                        granteeGrants(request: _28.QueryGranteeGrantsRequest): Promise<_28.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _33.QueryBalanceRequest): Promise<_33.QueryBalanceResponse>;
                        allBalances(request: _33.QueryAllBalancesRequest): Promise<_33.QueryAllBalancesResponse>;
                        spendableBalances(request: _33.QuerySpendableBalancesRequest): Promise<_33.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _33.QueryTotalSupplyRequest): Promise<_33.QueryTotalSupplyResponse>;
                        supplyOf(request: _33.QuerySupplyOfRequest): Promise<_33.QuerySupplyOfResponse>;
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        denomMetadata(request: _33.QueryDenomMetadataRequest): Promise<_33.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _33.QueryDenomsMetadataRequest): Promise<_33.QueryDenomsMetadataResponse>;
                        denomOwners(request: _33.QueryDenomOwnersRequest): Promise<_33.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                            getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                            getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                            getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _57.QueryValidatorOutstandingRewardsRequest): Promise<_57.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _57.QueryValidatorCommissionRequest): Promise<_57.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _57.QueryValidatorSlashesRequest): Promise<_57.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _57.QueryDelegationRewardsRequest): Promise<_57.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _57.QueryDelegationTotalRewardsRequest): Promise<_57.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _57.QueryDelegatorValidatorsRequest): Promise<_57.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _57.QueryDelegatorWithdrawAddressRequest): Promise<_57.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _57.QueryCommunityPoolRequest): Promise<_57.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _61.QueryEvidenceRequest): Promise<_61.QueryEvidenceResponse>;
                        allEvidence(request?: _61.QueryAllEvidenceRequest): Promise<_61.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _65.QueryAllowanceRequest): Promise<_65.QueryAllowanceResponse>;
                        allowances(request: _65.QueryAllowancesRequest): Promise<_65.QueryAllowancesResponse>;
                        allowancesByGranter(request: _65.QueryAllowancesByGranterRequest): Promise<_65.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _70.QueryProposalRequest): Promise<_70.QueryProposalResponse>;
                        proposals(request: _70.QueryProposalsRequest): Promise<_70.QueryProposalsResponse>;
                        vote(request: _70.QueryVoteRequest): Promise<_70.QueryVoteResponse>;
                        votes(request: _70.QueryVotesRequest): Promise<_70.QueryVotesResponse>;
                        params(request: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        deposit(request: _70.QueryDepositRequest): Promise<_70.QueryDepositResponse>;
                        deposits(request: _70.QueryDepositsRequest): Promise<_70.QueryDepositsResponse>;
                        tallyResult(request: _70.QueryTallyResultRequest): Promise<_70.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _74.QueryProposalRequest): Promise<_74.QueryProposalResponse>;
                        proposals(request: _74.QueryProposalsRequest): Promise<_74.QueryProposalsResponse>;
                        vote(request: _74.QueryVoteRequest): Promise<_74.QueryVoteResponse>;
                        votes(request: _74.QueryVotesRequest): Promise<_74.QueryVotesResponse>;
                        params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        deposit(request: _74.QueryDepositRequest): Promise<_74.QueryDepositResponse>;
                        deposits(request: _74.QueryDepositsRequest): Promise<_74.QueryDepositsResponse>;
                        tallyResult(request: _74.QueryTallyResultRequest): Promise<_74.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _78.QueryGroupInfoRequest): Promise<_78.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _78.QueryGroupPolicyInfoRequest): Promise<_78.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _78.QueryGroupMembersRequest): Promise<_78.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _78.QueryGroupsByAdminRequest): Promise<_78.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _78.QueryGroupPoliciesByGroupRequest): Promise<_78.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _78.QueryGroupPoliciesByAdminRequest): Promise<_78.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _78.QueryProposalRequest): Promise<_78.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _78.QueryProposalsByGroupPolicyRequest): Promise<_78.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _78.QueryVoteByProposalVoterRequest): Promise<_78.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _78.QueryVotesByProposalRequest): Promise<_78.QueryVotesByProposalResponse>;
                        votesByVoter(request: _78.QueryVotesByVoterRequest): Promise<_78.QueryVotesByVoterResponse>;
                        groupsByMember(request: _78.QueryGroupsByMemberRequest): Promise<_78.QueryGroupsByMemberResponse>;
                        tallyResult(request: _78.QueryTallyResultRequest): Promise<_78.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                        annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _88.QueryBalanceRequest): Promise<_88.QueryBalanceResponse>;
                        owner(request: _88.QueryOwnerRequest): Promise<_88.QueryOwnerResponse>;
                        supply(request: _88.QuerySupplyRequest): Promise<_88.QuerySupplyResponse>;
                        nFTs(request: _88.QueryNFTsRequest): Promise<_88.QueryNFTsResponse>;
                        nFT(request: _88.QueryNFTRequest): Promise<_88.QueryNFTResponse>;
                        class(request: _88.QueryClassRequest): Promise<_88.QueryClassResponse>;
                        classes(request?: _88.QueryClassesRequest): Promise<_88.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        subspaces(request?: _93.QuerySubspacesRequest): Promise<_93.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        signingInfo(request: _95.QuerySigningInfoRequest): Promise<_95.QuerySigningInfoResponse>;
                        signingInfos(request?: _95.QuerySigningInfosRequest): Promise<_95.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _100.QueryValidatorsRequest): Promise<_100.QueryValidatorsResponse>;
                        validator(request: _100.QueryValidatorRequest): Promise<_100.QueryValidatorResponse>;
                        validatorDelegations(request: _100.QueryValidatorDelegationsRequest): Promise<_100.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _100.QueryValidatorUnbondingDelegationsRequest): Promise<_100.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _100.QueryDelegationRequest): Promise<_100.QueryDelegationResponse>;
                        unbondingDelegation(request: _100.QueryUnbondingDelegationRequest): Promise<_100.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _100.QueryDelegatorDelegationsRequest): Promise<_100.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _100.QueryDelegatorUnbondingDelegationsRequest): Promise<_100.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _100.QueryRedelegationsRequest): Promise<_100.QueryRedelegationsResponse>;
                        delegatorValidators(request: _100.QueryDelegatorValidatorsRequest): Promise<_100.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _100.QueryDelegatorValidatorRequest): Promise<_100.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _100.QueryHistoricalInfoRequest): Promise<_100.QueryHistoricalInfoResponse>;
                        pool(request?: _100.QueryPoolRequest): Promise<_100.QueryPoolResponse>;
                        params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _104.SimulateRequest): Promise<_104.SimulateResponse>;
                        getTx(request: _104.GetTxRequest): Promise<_104.GetTxResponse>;
                        broadcastTx(request: _104.BroadcastTxRequest): Promise<_104.BroadcastTxResponse>;
                        getTxsEvent(request: _104.GetTxsEventRequest): Promise<_104.GetTxsEventResponse>;
                        getBlockWithTxs(request: _104.GetBlockWithTxsRequest): Promise<_104.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _106.QueryCurrentPlanRequest): Promise<_106.QueryCurrentPlanResponse>;
                        appliedPlan(request: _106.QueryAppliedPlanRequest): Promise<_106.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _106.QueryUpgradedConsensusStateRequest): Promise<_106.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _106.QueryModuleVersionsRequest): Promise<_106.QueryModuleVersionsResponse>;
                        authority(request?: _106.QueryAuthorityRequest): Promise<_106.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _136.LCDQueryClient;
                };
                authz: {
                    v1beta1: _137.LCDQueryClient;
                };
                bank: {
                    v1beta1: _138.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _139.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _140.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _141.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _142.LCDQueryClient;
                };
                gov: {
                    v1: _143.LCDQueryClient;
                    v1beta1: _144.LCDQueryClient;
                };
                group: {
                    v1: _145.LCDQueryClient;
                };
                mint: {
                    v1beta1: _146.LCDQueryClient;
                };
                nft: {
                    v1beta1: _147.LCDQueryClient;
                };
                params: {
                    v1beta1: _148.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _149.LCDQueryClient;
                };
                staking: {
                    v1beta1: _150.LCDQueryClient;
                };
                tx: {
                    v1beta1: _151.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _152.LCDQueryClient;
                };
            };
        }>;
    };
}
