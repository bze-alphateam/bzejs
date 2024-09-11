import * as _147 from "./applications/transfer/v1/genesis";
import * as _148 from "./applications/transfer/v1/query";
import * as _149 from "./applications/transfer/v1/transfer";
import * as _150 from "./applications/transfer/v1/tx";
import * as _151 from "./applications/transfer/v2/packet";
import * as _152 from "./core/channel/v1/channel";
import * as _153 from "./core/channel/v1/genesis";
import * as _154 from "./core/channel/v1/query";
import * as _155 from "./core/channel/v1/tx";
import * as _156 from "./core/client/v1/client";
import * as _157 from "./core/client/v1/genesis";
import * as _158 from "./core/client/v1/query";
import * as _159 from "./core/client/v1/tx";
import * as _160 from "./core/commitment/v1/commitment";
import * as _161 from "./core/connection/v1/connection";
import * as _162 from "./core/connection/v1/genesis";
import * as _163 from "./core/connection/v1/query";
import * as _164 from "./core/connection/v1/tx";
import * as _165 from "./core/port/v1/query";
import * as _166 from "./core/types/v1/genesis";
import * as _167 from "./lightclients/localhost/v1/localhost";
import * as _168 from "./lightclients/solomachine/v1/solomachine";
import * as _169 from "./lightclients/solomachine/v2/solomachine";
import * as _170 from "./lightclients/tendermint/v1/tendermint";
import * as _286 from "./applications/transfer/v1/tx.amino";
import * as _287 from "./core/channel/v1/tx.amino";
import * as _288 from "./core/client/v1/tx.amino";
import * as _289 from "./core/connection/v1/tx.amino";
import * as _290 from "./applications/transfer/v1/tx.registry";
import * as _291 from "./core/channel/v1/tx.registry";
import * as _292 from "./core/client/v1/tx.registry";
import * as _293 from "./core/connection/v1/tx.registry";
import * as _294 from "./applications/transfer/v1/query.lcd";
import * as _295 from "./core/channel/v1/query.lcd";
import * as _296 from "./core/client/v1/query.lcd";
import * as _297 from "./core/connection/v1/query.lcd";
import * as _298 from "./applications/transfer/v1/query.rpc.Query";
import * as _299 from "./core/channel/v1/query.rpc.Query";
import * as _300 from "./core/client/v1/query.rpc.Query";
import * as _301 from "./core/connection/v1/query.rpc.Query";
import * as _302 from "./core/port/v1/query.rpc.Query";
import * as _303 from "./applications/transfer/v1/tx.rpc.msg";
import * as _304 from "./core/channel/v1/tx.rpc.msg";
import * as _305 from "./core/client/v1/tx.rpc.msg";
import * as _306 from "./core/connection/v1/tx.rpc.msg";
import * as _313 from "./lcd";
import * as _314 from "./rpc.query";
import * as _315 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._286,
        ..._290,
        ..._294,
        ..._298,
        ..._303
      };
      export const v2 = { ..._151
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._287,
        ..._291,
        ..._295,
        ..._299,
        ..._304
      };
    }
    export namespace client {
      export const v1 = { ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._288,
        ..._292,
        ..._296,
        ..._300,
        ..._305
      };
    }
    export namespace commitment {
      export const v1 = { ..._160
      };
    }
    export namespace connection {
      export const v1 = { ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._289,
        ..._293,
        ..._297,
        ..._301,
        ..._306
      };
    }
    export namespace port {
      export const v1 = { ..._165,
        ..._302
      };
    }
    export namespace types {
      export const v1 = { ..._166
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._167
      };
    }
    export namespace solomachine {
      export const v1 = { ..._168
      };
      export const v2 = { ..._169
      };
    }
    export namespace tendermint {
      export const v1 = { ..._170
      };
    }
  }
  export const ClientFactory = { ..._313,
    ..._314,
    ..._315
  };
}