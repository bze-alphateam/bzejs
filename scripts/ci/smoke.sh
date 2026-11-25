#!/usr/bin/env bash
# Installs the packed tarball into an empty project, the way an app gets it from npm,
# then loads it from CommonJS and typechecks a TypeScript consumer against its exports.
# Run after `npm run build`.
set -euo pipefail

root="$(pwd)"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

npm pack --pack-destination "$work" --ignore-scripts >/dev/null
cd "$work"
echo '{ "name": "bzejs-smoke", "version": "0.0.0", "private": true }' > package.json
npm install --no-audit --no-fund --ignore-scripts ./bze-bzejs-*.tgz >/dev/null

node <<'JS'
const assert = require("node:assert/strict");
const { bze, cosmos, ibc } = require("@bze/bzejs");
const { MsgCreateOrder } = require("@bze/bzejs/bze/tradebin/tx");

for (const [name, ns] of Object.entries({ bze, cosmos, ibc })) {
  assert.equal(typeof ns.ClientFactory.createLCDClient, "function", `${name}.ClientFactory.createLCDClient`);
}
assert.equal(bze.tradebin.MsgCreateOrder, MsgCreateOrder, "root and subpath exports differ");

const msg = { creator: "bze1creator", orderType: "buy", amount: "1000", price: "0.5", marketId: "ubze/uusdc" };
const decoded = MsgCreateOrder.decode(MsgCreateOrder.encode(MsgCreateOrder.fromPartial(msg)).finish());
assert.deepEqual({ ...decoded }, msg, "MsgCreateOrder protobuf round trip");
assert.equal(MsgCreateOrder.toProtoMsg(decoded).typeUrl, "/bze.tradebin.MsgCreateOrder");

bze.ClientFactory.createLCDClient({ restEndpoint: "http://127.0.0.1:1" }).then((client) => {
  assert.equal(typeof client.bze.tradebin.params, "function", "LCD client has bze.tradebin");
  console.log("CJS smoke OK");
});
JS

cat > consumer.ts <<'TS'
import { bze, cosmos } from "@bze/bzejs";
import { MsgCreateOrder } from "@bze/bzejs/bze/tradebin/tx";
import { PageRequest } from "@bze/bzejs/cosmos/base/query/v1beta1/pagination";

const order: MsgCreateOrder = MsgCreateOrder.fromPartial({ creator: "bze1creator", marketId: "ubze/uusdc" });
const page = PageRequest.fromPartial({ limit: BigInt(10) });
const lcd: Promise<unknown> = bze.ClientFactory.createLCDClient({ restEndpoint: "http://127.0.0.1:1" });
const bank: unknown = cosmos.bank.v1beta1.MsgSend;
export { order, page, lcd, bank };
TS
"$root/node_modules/.bin/tsc" --noEmit --strict --skipLibCheck \
  --target ES2022 --module ESNext --moduleResolution bundler consumer.ts
echo "TypeScript consumer OK"
