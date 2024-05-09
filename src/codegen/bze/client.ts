import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as beezeeBurnerTxRegistry from "../beezee/burner/tx.registry";
import * as beezeeCointrunkTxRegistry from "../beezee/cointrunk/tx.registry";
import * as beezeeRewardsTxRegistry from "../beezee/rewards/tx.registry";
import * as beezeeTokenfactoryTxRegistry from "../beezee/tokenfactory/tx.registry";
import * as beezeeTradebinTxRegistry from "../beezee/tradebin/tx.registry";
import * as beezeeBurnerTxAmino from "../beezee/burner/tx.amino";
import * as beezeeCointrunkTxAmino from "../beezee/cointrunk/tx.amino";
import * as beezeeRewardsTxAmino from "../beezee/rewards/tx.amino";
import * as beezeeTokenfactoryTxAmino from "../beezee/tokenfactory/tx.amino";
import * as beezeeTradebinTxAmino from "../beezee/tradebin/tx.amino";
export const bzeAminoConverters = { ...beezeeBurnerTxAmino.AminoConverter,
  ...beezeeCointrunkTxAmino.AminoConverter,
  ...beezeeRewardsTxAmino.AminoConverter,
  ...beezeeTokenfactoryTxAmino.AminoConverter,
  ...beezeeTradebinTxAmino.AminoConverter
};
export const bzeProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...beezeeBurnerTxRegistry.registry, ...beezeeCointrunkTxRegistry.registry, ...beezeeRewardsTxRegistry.registry, ...beezeeTokenfactoryTxRegistry.registry, ...beezeeTradebinTxRegistry.registry];
export const getSigningBzeClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...bzeProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...bzeAminoConverters
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
    registry,
    aminoTypes
  });
  return client;
};