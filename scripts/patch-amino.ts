import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const srcDir = join(__dirname, '../src');

function patch(relPath: string, from: string, to: string): void {
  const file = join(srcDir, relPath);
  const content = readFileSync(file, 'utf8');
  if (!content.includes(from)) {
    throw new Error(`patch-amino: expected pattern not found in ${relPath}\n--- expected ---\n${from}\n---`);
  }
  writeFileSync(file, content.replace(from, to), 'utf8');
  console.log(`✨ patched: ${relPath}`);
}

export function patchAmino(): void {
  // Bug 1 — DenomUnit.toAmino(): [] is truthy in JS so the else branch is never
  // reached, causing aliases: [] to be emitted instead of being omitted.
  // The chain aminojson encoder omits empty repeated fields.
  patch(
    'cosmos/bank/v1beta1/bank.ts',
    `    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = message.aliases;
    }`,
    `    obj.aliases = message.aliases?.length ? message.aliases.map(e => e) : undefined;`,
  );

  // Bug 2a — MsgTransfer.toAmino(): emits timeout_height: {} when timeoutHeight
  // is unset. The chain aminojson encoder omits the field entirely when absent.
  patch(
    'ibc/applications/transfer/v1/tx.ts',
    `    obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};`,
    `    obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : undefined;`,
  );

  // Bug 2b — MsgTransfer.toAmino(): emits use_aliasing: false instead of
  // omitting the field. The chain aminojson encoder omits false booleans.
  patch(
    'ibc/applications/transfer/v1/tx.ts',
    `    obj.use_aliasing = message.useAliasing ?? false;`,
    `    obj.use_aliasing = message.useAliasing || undefined;`,
  );
}
