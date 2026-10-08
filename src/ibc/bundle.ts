//@ts-nocheck
import * as _167 from "./applications/interchain_accounts/controller/v1/controller";
import * as _168 from "./applications/interchain_accounts/controller/v1/query";
import * as _169 from "./applications/interchain_accounts/controller/v1/tx";
import * as _170 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _171 from "./applications/interchain_accounts/host/v1/host";
import * as _172 from "./applications/interchain_accounts/host/v1/query";
import * as _173 from "./applications/interchain_accounts/host/v1/tx";
import * as _174 from "./applications/interchain_accounts/v1/account";
import * as _175 from "./applications/interchain_accounts/v1/metadata";
import * as _176 from "./applications/interchain_accounts/v1/packet";
import * as _177 from "./applications/packet_forward_middleware/v1/genesis";
import * as _178 from "./applications/rate_limiting/v1/genesis";
import * as _179 from "./applications/rate_limiting/v1/query";
import * as _180 from "./applications/rate_limiting/v1/rate_limiting";
import * as _181 from "./applications/rate_limiting/v1/tx";
import * as _182 from "./applications/transfer/v1/authz";
import * as _183 from "./applications/transfer/v1/denomtrace";
import * as _184 from "./applications/transfer/v1/genesis";
import * as _185 from "./applications/transfer/v1/packet";
import * as _186 from "./applications/transfer/v1/query";
import * as _187 from "./applications/transfer/v1/token";
import * as _188 from "./applications/transfer/v1/transfer";
import * as _189 from "./applications/transfer/v1/tx";
import * as _190 from "./core/channel/v1/channel";
import * as _191 from "./core/channel/v1/genesis";
import * as _192 from "./core/channel/v1/query";
import * as _193 from "./core/channel/v1/tx";
import * as _194 from "./core/channel/v2/genesis";
import * as _195 from "./core/channel/v2/packet";
import * as _196 from "./core/channel/v2/query";
import * as _197 from "./core/channel/v2/tx";
import * as _198 from "./core/client/v1/client";
import * as _199 from "./core/client/v1/genesis";
import * as _200 from "./core/client/v1/query";
import * as _201 from "./core/client/v1/tx";
import * as _202 from "./core/client/v2/config";
import * as _203 from "./core/client/v2/counterparty";
import * as _204 from "./core/client/v2/genesis";
import * as _205 from "./core/client/v2/query";
import * as _206 from "./core/client/v2/tx";
import * as _207 from "./core/commitment/v1/commitment";
import * as _208 from "./core/commitment/v2/commitment";
import * as _209 from "./core/connection/v1/connection";
import * as _210 from "./core/connection/v1/genesis";
import * as _211 from "./core/connection/v1/query";
import * as _212 from "./core/connection/v1/tx";
import * as _213 from "./lightclients/solomachine/v2/solomachine";
import * as _214 from "./lightclients/solomachine/v3/solomachine";
import * as _215 from "./lightclients/tendermint/v1/tendermint";
import * as _216 from "./lightclients/wasm/v1/genesis";
import * as _217 from "./lightclients/wasm/v1/query";
import * as _218 from "./lightclients/wasm/v1/tx";
import * as _219 from "./lightclients/wasm/v1/wasm";
import * as _332 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _333 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _334 from "./applications/rate_limiting/v1/tx.registry";
import * as _335 from "./applications/transfer/v1/tx.registry";
import * as _336 from "./core/channel/v1/tx.registry";
import * as _337 from "./core/channel/v2/tx.registry";
import * as _338 from "./core/client/v1/tx.registry";
import * as _339 from "./core/client/v2/tx.registry";
import * as _340 from "./core/connection/v1/tx.registry";
import * as _341 from "./lightclients/wasm/v1/tx.registry";
import * as _342 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _343 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _344 from "./applications/rate_limiting/v1/query.lcd";
import * as _345 from "./applications/transfer/v1/query.lcd";
import * as _346 from "./core/channel/v1/query.lcd";
import * as _347 from "./core/channel/v2/query.lcd";
import * as _348 from "./core/client/v1/query.lcd";
import * as _349 from "./core/client/v2/query.lcd";
import * as _350 from "./core/connection/v1/query.lcd";
import * as _351 from "./lightclients/wasm/v1/query.lcd";
import * as _352 from "./applications/interchain_accounts/controller/v1/query.rpc.func";
import * as _353 from "./applications/interchain_accounts/host/v1/query.rpc.func";
import * as _354 from "./applications/rate_limiting/v1/query.rpc.func";
import * as _355 from "./applications/transfer/v1/query.rpc.func";
import * as _356 from "./core/channel/v1/query.rpc.func";
import * as _357 from "./core/channel/v2/query.rpc.func";
import * as _358 from "./core/client/v1/query.rpc.func";
import * as _359 from "./core/client/v2/query.rpc.func";
import * as _360 from "./core/connection/v1/query.rpc.func";
import * as _361 from "./lightclients/wasm/v1/query.rpc.func";
import * as _362 from "./applications/interchain_accounts/controller/v1/tx.rpc.func";
import * as _363 from "./applications/interchain_accounts/host/v1/tx.rpc.func";
import * as _364 from "./applications/rate_limiting/v1/tx.rpc.func";
import * as _365 from "./applications/transfer/v1/tx.rpc.func";
import * as _366 from "./core/channel/v1/tx.rpc.func";
import * as _367 from "./core/channel/v2/tx.rpc.func";
import * as _368 from "./core/client/v1/tx.rpc.func";
import * as _369 from "./core/client/v2/tx.rpc.func";
import * as _370 from "./core/connection/v1/tx.rpc.func";
import * as _371 from "./lightclients/wasm/v1/tx.rpc.func";
import * as _374 from "./lcd";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._167,
          ..._168,
          ..._169,
          ..._332,
          ..._342,
          ..._352,
          ..._362
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._170
        };
      }
      export namespace host {
        export const v1 = {
          ..._171,
          ..._172,
          ..._173,
          ..._333,
          ..._343,
          ..._353,
          ..._363
        };
      }
      export const v1 = {
        ..._174,
        ..._175,
        ..._176
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._177
      };
    }
    export namespace rate_limiting {
      export const v1 = {
        ..._178,
        ..._179,
        ..._180,
        ..._181,
        ..._334,
        ..._344,
        ..._354,
        ..._364
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._182,
        ..._183,
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._335,
        ..._345,
        ..._355,
        ..._365
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._190,
        ..._191,
        ..._192,
        ..._193,
        ..._336,
        ..._346,
        ..._356,
        ..._366
      };
      export const v2 = {
        ..._194,
        ..._195,
        ..._196,
        ..._197,
        ..._337,
        ..._347,
        ..._357,
        ..._367
      };
    }
    export namespace client {
      export const v1 = {
        ..._198,
        ..._199,
        ..._200,
        ..._201,
        ..._338,
        ..._348,
        ..._358,
        ..._368
      };
      export const v2 = {
        ..._202,
        ..._203,
        ..._204,
        ..._205,
        ..._206,
        ..._339,
        ..._349,
        ..._359,
        ..._369
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._207
      };
      export const v2 = {
        ..._208
      };
    }
    export namespace connection {
      export const v1 = {
        ..._209,
        ..._210,
        ..._211,
        ..._212,
        ..._340,
        ..._350,
        ..._360,
        ..._370
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._213
      };
      export const v3 = {
        ..._214
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._215
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._216,
        ..._217,
        ..._218,
        ..._219,
        ..._341,
        ..._351,
        ..._361,
        ..._371
      };
    }
  }
  export const ClientFactory = {
    ..._374
  };
}