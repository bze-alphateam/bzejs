import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as beezeeBurnerTxRegistry from "../beezee/burner/tx.registry";
import * as beezeeCointrunkTxRegistry from "../beezee/cointrunk/tx.registry";
import * as beezeeBurnerTxAmino from "../beezee/burner/tx.amino";
import * as beezeeCointrunkTxAmino from "../beezee/cointrunk/tx.amino";
export const bzeAminoConverters = { ...beezeeBurnerTxAmino.AminoConverter,
  ...beezeeCointrunkTxAmino.AminoConverter
};
export const bzeProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...beezeeBurnerTxRegistry.registry, ...beezeeCointrunkTxRegistry.registry];
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