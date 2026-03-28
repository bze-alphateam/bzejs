# @bze/bzejs v2

BeeZee JS library — TypeScript SDK for interacting with the BZE blockchain.

Generated with [@hyperweb/telescope](https://github.com/hyperweb-io/telescope) v2 using InterchainJS as the signing/encoding stack.

## Installation

```bash
npm install @bze/bzejs
```

## Development

```bash
npm install              # Install dependencies
npm run codegen          # Generate TypeScript from proto files
npm run build            # Compile CJS + ESM to dist/
```

### Regenerating from protos

```bash
npm run download-protos  # Download latest proto files from cosmos-sdk and ibc-go
npm run codegen          # Regenerate TypeScript source
npm run build            # Rebuild
```

## Publishing to npm

Both `package.json` and `dist-package.json` must have matching versions and dependencies.
`dist-package.json` is copied into `dist/` as `package.json` during build — it is the actual
package.json that gets published to npm.

```bash
# 1. Update version in BOTH package.json and dist-package.json
# 2. Build
npm run build
# 3. Publish from dist/
cd dist && npm publish
```

## Architecture

### What changed from v1

| Aspect | v1 | v2 |
|--------|----|----|
| Code generator | `@cosmology/telescope@1.x` | `@hyperweb/telescope@2.x` |
| Signing stack | `@cosmjs/*` (stargate, proto-signing) | `@interchainjs/*` (cosmos, types) |
| 64-bit numbers | `Long` | `bigint` |
| Signing clients | `getSigningBzeClient()` (cosmjs SigningStargateClient) | Helper functions using `ISigningClient` from `@interchainjs/cosmos` |
| Query clients | LCD via `@cosmology/lcd` (unchanged) | LCD via `@cosmology/lcd` (unchanged) |

### Signing (v2 pattern)

v2 replaces the old `getSigningBzeClient()` with per-message helper functions:

```typescript
import { bze } from '@bze/bzejs';
import { ISigningClient } from '@interchainjs/cosmos';

// Each tx message has a helper function
const result = await bze.tradebin.v1.createOrder(
  signingClient,    // ISigningClient from interchain-kit
  signerAddress,
  message,
  fee,
  memo
);
```

### Querying (unchanged)

LCD querying works the same as v1:

```typescript
import { bze } from '@bze/bzejs';

const client = await bze.ClientFactory.createLCDClient({ restEndpoint });
const markets = await client.bze.tradebin.allMarkets({});
```

### Types (unchanged)

All SDKType interfaces are the same:

```typescript
import { MarketSDKType } from '@bze/bzejs/bze/tradebin/store';
import { Coin } from '@bze/bzejs/cosmos/base/v1beta1/coin';
```

## Project structure

```
bzejs-v2/
├── package.json          # Dev package (not published)
├── dist-package.json     # Published to npm as package.json
├── tsconfig.json         # CJS compilation
├── tsconfig.esm.json     # ESM compilation
├── scripts/
│   ├── codegen.ts        # Telescope v2 configuration
│   ├── download-protos.ts
│   └── aminos.ts         # Amino type mappings
├── protos/               # Protocol buffer definitions
├── src/                  # Generated TypeScript (do not edit)
└── dist/                 # Build output (published to npm)
```
