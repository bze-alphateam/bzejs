//@ts-nocheck
import * as _220 from "./abci/types";
import * as _221 from "./crypto/keys";
import * as _222 from "./crypto/proof";
import * as _223 from "./p2p/types";
import * as _224 from "./types/block";
import * as _225 from "./types/evidence";
import * as _226 from "./types/params";
import * as _227 from "./types/types";
import * as _228 from "./types/validator";
import * as _229 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._220
  };
  export const crypto = {
    ..._221,
    ..._222
  };
  export const p2p = {
    ..._223
  };
  export const types = {
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228
  };
  export const version = {
    ..._229
  };
}