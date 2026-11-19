//@ts-nocheck
import * as _226 from "./abci/types";
import * as _227 from "./crypto/keys";
import * as _228 from "./crypto/proof";
import * as _229 from "./p2p/types";
import * as _230 from "./types/block";
import * as _231 from "./types/evidence";
import * as _232 from "./types/params";
import * as _233 from "./types/types";
import * as _234 from "./types/validator";
import * as _235 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._226
  };
  export const crypto = {
    ..._227,
    ..._228
  };
  export const p2p = {
    ..._229
  };
  export const types = {
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234
  };
  export const version = {
    ..._235
  };
}