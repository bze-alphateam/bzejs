//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as bzeBurnerTxRegistry from "./burner/tx.registry";
import * as bzeCointrunkTxRegistry from "./cointrunk/tx.registry";
import * as bzeRewardsTxRegistry from "./rewards/tx.registry";
import * as bzeTokenfactoryTxRegistry from "./tokenfactory/tx.registry";
import * as bzeTradebinTxRegistry from "./tradebin/tx.registry";
import * as bzeTxfeecollectorTxRegistry from "./txfeecollector/tx.registry";
import * as bzeBurnerTxAmino from "./burner/tx.amino";
import * as bzeCointrunkTxAmino from "./cointrunk/tx.amino";
import * as bzeRewardsTxAmino from "./rewards/tx.amino";
import * as bzeTokenfactoryTxAmino from "./tokenfactory/tx.amino";
import * as bzeTradebinTxAmino from "./tradebin/tx.amino";
import * as bzeTxfeecollectorTxAmino from "./txfeecollector/tx.amino";
export const bzeAminoConverters = {
  ...bzeBurnerTxAmino.AminoConverter,
  ...bzeCointrunkTxAmino.AminoConverter,
  ...bzeRewardsTxAmino.AminoConverter,
  ...bzeTokenfactoryTxAmino.AminoConverter,
  ...bzeTradebinTxAmino.AminoConverter,
  ...bzeTxfeecollectorTxAmino.AminoConverter
};
export const bzeProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...bzeBurnerTxRegistry.registry, ...bzeCointrunkTxRegistry.registry, ...bzeRewardsTxRegistry.registry, ...bzeTokenfactoryTxRegistry.registry, ...bzeTradebinTxRegistry.registry, ...bzeTxfeecollectorTxRegistry.registry];
export const getSigningBzeClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...bzeProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...bzeAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBzeClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningBzeClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};