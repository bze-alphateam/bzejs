//@ts-nocheck
import * as _163 from "./applications/interchain_accounts/controller/v1/controller";
import * as _164 from "./applications/interchain_accounts/controller/v1/query";
import * as _165 from "./applications/interchain_accounts/controller/v1/tx";
import * as _166 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _167 from "./applications/interchain_accounts/host/v1/host";
import * as _168 from "./applications/interchain_accounts/host/v1/query";
import * as _169 from "./applications/interchain_accounts/host/v1/tx";
import * as _170 from "./applications/interchain_accounts/v1/account";
import * as _171 from "./applications/interchain_accounts/v1/metadata";
import * as _172 from "./applications/interchain_accounts/v1/packet";
import * as _173 from "./applications/packet_forward_middleware/v1/genesis";
import * as _174 from "./applications/rate_limiting/v1/genesis";
import * as _175 from "./applications/rate_limiting/v1/query";
import * as _176 from "./applications/rate_limiting/v1/rate_limiting";
import * as _177 from "./applications/rate_limiting/v1/tx";
import * as _178 from "./applications/transfer/v1/authz";
import * as _179 from "./applications/transfer/v1/denomtrace";
import * as _180 from "./applications/transfer/v1/genesis";
import * as _181 from "./applications/transfer/v1/packet";
import * as _182 from "./applications/transfer/v1/query";
import * as _183 from "./applications/transfer/v1/token";
import * as _184 from "./applications/transfer/v1/transfer";
import * as _185 from "./applications/transfer/v1/tx";
import * as _186 from "./core/channel/v1/channel";
import * as _187 from "./core/channel/v1/genesis";
import * as _188 from "./core/channel/v1/query";
import * as _189 from "./core/channel/v1/tx";
import * as _190 from "./core/channel/v2/genesis";
import * as _191 from "./core/channel/v2/packet";
import * as _192 from "./core/channel/v2/query";
import * as _193 from "./core/channel/v2/tx";
import * as _194 from "./core/client/v1/client";
import * as _195 from "./core/client/v1/genesis";
import * as _196 from "./core/client/v1/query";
import * as _197 from "./core/client/v1/tx";
import * as _198 from "./core/client/v2/config";
import * as _199 from "./core/client/v2/counterparty";
import * as _200 from "./core/client/v2/genesis";
import * as _201 from "./core/client/v2/query";
import * as _202 from "./core/client/v2/tx";
import * as _203 from "./core/commitment/v1/commitment";
import * as _204 from "./core/commitment/v2/commitment";
import * as _205 from "./core/connection/v1/connection";
import * as _206 from "./core/connection/v1/genesis";
import * as _207 from "./core/connection/v1/query";
import * as _208 from "./core/connection/v1/tx";
import * as _209 from "./lightclients/solomachine/v2/solomachine";
import * as _210 from "./lightclients/solomachine/v3/solomachine";
import * as _211 from "./lightclients/tendermint/v1/tendermint";
import * as _212 from "./lightclients/wasm/v1/genesis";
import * as _213 from "./lightclients/wasm/v1/query";
import * as _214 from "./lightclients/wasm/v1/tx";
import * as _215 from "./lightclients/wasm/v1/wasm";
import * as _347 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _348 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _349 from "./applications/rate_limiting/v1/tx.amino";
import * as _350 from "./applications/transfer/v1/tx.amino";
import * as _351 from "./core/channel/v1/tx.amino";
import * as _352 from "./core/channel/v2/tx.amino";
import * as _353 from "./core/client/v1/tx.amino";
import * as _354 from "./core/client/v2/tx.amino";
import * as _355 from "./core/connection/v1/tx.amino";
import * as _356 from "./lightclients/wasm/v1/tx.amino";
import * as _357 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _358 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _359 from "./applications/rate_limiting/v1/tx.registry";
import * as _360 from "./applications/transfer/v1/tx.registry";
import * as _361 from "./core/channel/v1/tx.registry";
import * as _362 from "./core/channel/v2/tx.registry";
import * as _363 from "./core/client/v1/tx.registry";
import * as _364 from "./core/client/v2/tx.registry";
import * as _365 from "./core/connection/v1/tx.registry";
import * as _366 from "./lightclients/wasm/v1/tx.registry";
import * as _367 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _368 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _369 from "./applications/rate_limiting/v1/query.lcd";
import * as _370 from "./applications/transfer/v1/query.lcd";
import * as _371 from "./core/channel/v1/query.lcd";
import * as _372 from "./core/channel/v2/query.lcd";
import * as _373 from "./core/client/v1/query.lcd";
import * as _374 from "./core/client/v2/query.lcd";
import * as _375 from "./core/connection/v1/query.lcd";
import * as _376 from "./lightclients/wasm/v1/query.lcd";
import * as _377 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _378 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _379 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _380 from "./applications/transfer/v1/query.rpc.Query";
import * as _381 from "./core/channel/v1/query.rpc.Query";
import * as _382 from "./core/channel/v2/query.rpc.Query";
import * as _383 from "./core/client/v1/query.rpc.Query";
import * as _384 from "./core/client/v2/query.rpc.Query";
import * as _385 from "./core/connection/v1/query.rpc.Query";
import * as _386 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _387 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _388 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _389 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _390 from "./applications/transfer/v1/tx.rpc.msg";
import * as _391 from "./core/channel/v1/tx.rpc.msg";
import * as _392 from "./core/channel/v2/tx.rpc.msg";
import * as _393 from "./core/client/v1/tx.rpc.msg";
import * as _394 from "./core/client/v2/tx.rpc.msg";
import * as _395 from "./core/connection/v1/tx.rpc.msg";
import * as _396 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _403 from "./lcd";
import * as _404 from "./rpc.query";
import * as _405 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._163,
          ..._164,
          ..._165,
          ..._347,
          ..._357,
          ..._367,
          ..._377,
          ..._387
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._166
        };
      }
      export namespace host {
        export const v1 = {
          ..._167,
          ..._168,
          ..._169,
          ..._348,
          ..._358,
          ..._368,
          ..._378,
          ..._388
        };
      }
      export const v1 = {
        ..._170,
        ..._171,
        ..._172
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._173
      };
    }
    export namespace rate_limiting {
      export const v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._349,
        ..._359,
        ..._369,
        ..._379,
        ..._389
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._178,
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._185,
        ..._350,
        ..._360,
        ..._370,
        ..._380,
        ..._390
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._351,
        ..._361,
        ..._371,
        ..._381,
        ..._391
      };
      export const v2 = {
        ..._190,
        ..._191,
        ..._192,
        ..._193,
        ..._352,
        ..._362,
        ..._372,
        ..._382,
        ..._392
      };
    }
    export namespace client {
      export const v1 = {
        ..._194,
        ..._195,
        ..._196,
        ..._197,
        ..._353,
        ..._363,
        ..._373,
        ..._383,
        ..._393
      };
      export const v2 = {
        ..._198,
        ..._199,
        ..._200,
        ..._201,
        ..._202,
        ..._354,
        ..._364,
        ..._374,
        ..._384,
        ..._394
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._203
      };
      export const v2 = {
        ..._204
      };
    }
    export namespace connection {
      export const v1 = {
        ..._205,
        ..._206,
        ..._207,
        ..._208,
        ..._355,
        ..._365,
        ..._375,
        ..._385,
        ..._395
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._209
      };
      export const v3 = {
        ..._210
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._211
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._212,
        ..._213,
        ..._214,
        ..._215,
        ..._356,
        ..._366,
        ..._376,
        ..._386,
        ..._396
      };
    }
  }
  export const ClientFactory = {
    ..._403,
    ..._404,
    ..._405
  };
}