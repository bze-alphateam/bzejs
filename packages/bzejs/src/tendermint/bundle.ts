//@ts-nocheck
import * as _218 from "./abci/types";
import * as _219 from "./crypto/keys";
import * as _220 from "./crypto/proof";
import * as _221 from "./p2p/types";
import * as _222 from "./types/block";
import * as _223 from "./types/evidence";
import * as _224 from "./types/params";
import * as _225 from "./types/types";
import * as _226 from "./types/validator";
import * as _227 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._218
  };
  export const crypto = {
    ..._219,
    ..._220
  };
  export const p2p = {
    ..._221
  };
  export const types = {
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226
  };
  export const version = {
    ..._227
  };
}