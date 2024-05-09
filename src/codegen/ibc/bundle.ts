import * as _146 from "./applications/transfer/v1/genesis";
import * as _147 from "./applications/transfer/v1/query";
import * as _148 from "./applications/transfer/v1/transfer";
import * as _149 from "./applications/transfer/v1/tx";
import * as _150 from "./applications/transfer/v2/packet";
import * as _151 from "./core/channel/v1/channel";
import * as _152 from "./core/channel/v1/genesis";
import * as _153 from "./core/channel/v1/query";
import * as _154 from "./core/channel/v1/tx";
import * as _155 from "./core/client/v1/client";
import * as _156 from "./core/client/v1/genesis";
import * as _157 from "./core/client/v1/query";
import * as _158 from "./core/client/v1/tx";
import * as _159 from "./core/commitment/v1/commitment";
import * as _160 from "./core/connection/v1/connection";
import * as _161 from "./core/connection/v1/genesis";
import * as _162 from "./core/connection/v1/query";
import * as _163 from "./core/connection/v1/tx";
import * as _164 from "./core/port/v1/query";
import * as _165 from "./core/types/v1/genesis";
import * as _166 from "./lightclients/localhost/v1/localhost";
import * as _167 from "./lightclients/solomachine/v1/solomachine";
import * as _168 from "./lightclients/solomachine/v2/solomachine";
import * as _169 from "./lightclients/tendermint/v1/tendermint";
import * as _285 from "./applications/transfer/v1/tx.amino";
import * as _286 from "./core/channel/v1/tx.amino";
import * as _287 from "./core/client/v1/tx.amino";
import * as _288 from "./core/connection/v1/tx.amino";
import * as _289 from "./applications/transfer/v1/tx.registry";
import * as _290 from "./core/channel/v1/tx.registry";
import * as _291 from "./core/client/v1/tx.registry";
import * as _292 from "./core/connection/v1/tx.registry";
import * as _293 from "./applications/transfer/v1/query.lcd";
import * as _294 from "./core/channel/v1/query.lcd";
import * as _295 from "./core/client/v1/query.lcd";
import * as _296 from "./core/connection/v1/query.lcd";
import * as _297 from "./applications/transfer/v1/query.rpc.Query";
import * as _298 from "./core/channel/v1/query.rpc.Query";
import * as _299 from "./core/client/v1/query.rpc.Query";
import * as _300 from "./core/connection/v1/query.rpc.Query";
import * as _301 from "./core/port/v1/query.rpc.Query";
import * as _302 from "./applications/transfer/v1/tx.rpc.msg";
import * as _303 from "./core/channel/v1/tx.rpc.msg";
import * as _304 from "./core/client/v1/tx.rpc.msg";
import * as _305 from "./core/connection/v1/tx.rpc.msg";
import * as _312 from "./lcd";
import * as _313 from "./rpc.query";
import * as _314 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._285,
        ..._289,
        ..._293,
        ..._297,
        ..._302
      };
      export const v2 = { ..._150
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._286,
        ..._290,
        ..._294,
        ..._298,
        ..._303
      };
    }
    export namespace client {
      export const v1 = { ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._287,
        ..._291,
        ..._295,
        ..._299,
        ..._304
      };
    }
    export namespace commitment {
      export const v1 = { ..._159
      };
    }
    export namespace connection {
      export const v1 = { ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._288,
        ..._292,
        ..._296,
        ..._300,
        ..._305
      };
    }
    export namespace port {
      export const v1 = { ..._164,
        ..._301
      };
    }
    export namespace types {
      export const v1 = { ..._165
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._166
      };
    }
    export namespace solomachine {
      export const v1 = { ..._167
      };
      export const v2 = { ..._168
      };
    }
    export namespace tendermint {
      export const v1 = { ..._169
      };
    }
  }
  export const ClientFactory = { ..._312,
    ..._313,
    ..._314
  };
}