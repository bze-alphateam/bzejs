//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      circuit: {
        v1: new (await import("../cosmos/circuit/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      epochs: {
        v1beta1: new (await import("../cosmos/epochs/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      protocolpool: {
        v1: new (await import("../cosmos/protocolpool/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    ibc: {
      applications: {
        interchain_accounts: {
          controller: {
            v1: new (await import("./applications/interchain_accounts/controller/v1/query.lcd")).LCDQueryClient({
              requestClient
            })
          },
          host: {
            v1: new (await import("./applications/interchain_accounts/host/v1/query.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        rate_limiting: {
          v1: new (await import("./applications/rate_limiting/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        transfer: {
          v1: new (await import("./applications/transfer/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      core: {
        channel: {
          v1: new (await import("./core/channel/v1/query.lcd")).LCDQueryClient({
            requestClient
          }),
          v2: new (await import("./core/channel/v2/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        client: {
          v1: new (await import("./core/client/v1/query.lcd")).LCDQueryClient({
            requestClient
          }),
          v2: new (await import("./core/client/v2/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        connection: {
          v1: new (await import("./core/connection/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      lightclients: {
        wasm: {
          v1: new (await import("./lightclients/wasm/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      }
    }
  };
};