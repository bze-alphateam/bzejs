#!/usr/bin/env bash
# Checks that the npm tarball holds only dist/, README.md, LICENSE and package.json,
# and that the CJS, ESM and type entry points are all in it. Run after `npm run build`.
set -euo pipefail

files="$(npm pack --dry-run --json --ignore-scripts | node -e '
  const [pkg] = JSON.parse(require("fs").readFileSync(0, "utf8"));
  console.log(pkg.files.map((f) => f.path).sort().join("\n"));
')"

if unexpected="$(grep -vE '^(dist/.+\.(js|d\.ts)|README\.md|LICENSE|package\.json)$' <<<"$files")"; then
  echo "unexpected files in the tarball:" >&2
  echo "$unexpected" >&2
  exit 1
fi

for f in package.json README.md LICENSE dist/index.js dist/index.d.ts dist/esm/index.js; do
  grep -qx "$f" <<<"$files" || { echo "missing $f in the tarball" >&2; exit 1; }
done

echo "tarball OK ($(wc -l <<<"$files") files)"
