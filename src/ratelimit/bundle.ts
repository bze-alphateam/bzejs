//@ts-nocheck
import * as _220 from "./module/v1/module";
import * as _221 from "./v1/genesis";
import * as _222 from "./v1/params";
import * as _223 from "./v1/query";
import * as _224 from "./v1/ratelimit";
import * as _225 from "./v1/tx";
import * as _377 from "./v1/tx.registry";
import * as _378 from "./v1/query.lcd";
import * as _379 from "./v1/query.rpc.func";
import * as _380 from "./v1/tx.rpc.func";
import * as _384 from "./lcd";
export namespace ratelimit {
  export namespace module {
    export const v1 = {
      ..._220
    };
  }
  export const v1 = {
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._377,
    ..._378,
    ..._379,
    ..._380
  };
  export const ClientFactory = {
    ..._384
  };
}