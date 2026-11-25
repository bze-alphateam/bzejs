#!/usr/bin/env bash
# Regenerates src/ from protos/ and fails if the committed src/ differs,
# so src/ can never drift from the protos or be edited by hand.
set -euo pipefail

npm run codegen

if [ -n "$(git status --porcelain -- src)" ]; then
  echo "src/ is out of date with protos/: run 'npm run codegen' and commit the result" >&2
  git status --short -- src >&2
  git diff --stat -- src >&2
  exit 1
fi

echo "src/ matches codegen output"
