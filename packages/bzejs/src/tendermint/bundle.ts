//@ts-nocheck
import * as _216 from "./abci/types";
import * as _217 from "./crypto/keys";
import * as _218 from "./crypto/proof";
import * as _219 from "./p2p/types";
import * as _220 from "./types/block";
import * as _221 from "./types/evidence";
import * as _222 from "./types/params";
import * as _223 from "./types/types";
import * as _224 from "./types/validator";
import * as _225 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._216
  };
  export const crypto = {
    ..._217,
    ..._218
  };
  export const p2p = {
    ..._219
  };
  export const types = {
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._224
  };
  export const version = {
    ..._225
  };
}