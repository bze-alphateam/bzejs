import * as _121 from "./applications/transfer/v1/genesis";
import * as _122 from "./applications/transfer/v1/query";
import * as _123 from "./applications/transfer/v1/transfer";
import * as _124 from "./applications/transfer/v1/tx";
import * as _125 from "./applications/transfer/v2/packet";
import * as _126 from "./core/channel/v1/channel";
import * as _127 from "./core/channel/v1/genesis";
import * as _128 from "./core/channel/v1/query";
import * as _129 from "./core/channel/v1/tx";
import * as _130 from "./core/client/v1/client";
import * as _131 from "./core/client/v1/genesis";
import * as _132 from "./core/client/v1/query";
import * as _133 from "./core/client/v1/tx";
import * as _134 from "./core/commitment/v1/commitment";
import * as _135 from "./core/connection/v1/connection";
import * as _136 from "./core/connection/v1/genesis";
import * as _137 from "./core/connection/v1/query";
import * as _138 from "./core/connection/v1/tx";
import * as _139 from "./core/port/v1/query";
import * as _140 from "./core/types/v1/genesis";
import * as _141 from "./lightclients/localhost/v1/localhost";
import * as _142 from "./lightclients/solomachine/v1/solomachine";
import * as _143 from "./lightclients/solomachine/v2/solomachine";
import * as _144 from "./lightclients/tendermint/v1/tendermint";
import * as _243 from "./applications/transfer/v1/tx.amino";
import * as _244 from "./core/channel/v1/tx.amino";
import * as _245 from "./core/client/v1/tx.amino";
import * as _246 from "./core/connection/v1/tx.amino";
import * as _247 from "./applications/transfer/v1/tx.registry";
import * as _248 from "./core/channel/v1/tx.registry";
import * as _249 from "./core/client/v1/tx.registry";
import * as _250 from "./core/connection/v1/tx.registry";
import * as _251 from "./applications/transfer/v1/query.lcd";
import * as _252 from "./core/channel/v1/query.lcd";
import * as _253 from "./core/client/v1/query.lcd";
import * as _254 from "./core/connection/v1/query.lcd";
import * as _255 from "./applications/transfer/v1/query.rpc.Query";
import * as _256 from "./core/channel/v1/query.rpc.Query";
import * as _257 from "./core/client/v1/query.rpc.Query";
import * as _258 from "./core/connection/v1/query.rpc.Query";
import * as _259 from "./core/port/v1/query.rpc.Query";
import * as _260 from "./applications/transfer/v1/tx.rpc.msg";
import * as _261 from "./core/channel/v1/tx.rpc.msg";
import * as _262 from "./core/client/v1/tx.rpc.msg";
import * as _263 from "./core/connection/v1/tx.rpc.msg";
import * as _270 from "./lcd";
import * as _271 from "./rpc.query";
import * as _272 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._243,
        ..._247,
        ..._251,
        ..._255,
        ..._260
      };
      export const v2 = { ..._125
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._244,
        ..._248,
        ..._252,
        ..._256,
        ..._261
      };
    }
    export namespace client {
      export const v1 = { ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._245,
        ..._249,
        ..._253,
        ..._257,
        ..._262
      };
    }
    export namespace commitment {
      export const v1 = { ..._134
      };
    }
    export namespace connection {
      export const v1 = { ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._246,
        ..._250,
        ..._254,
        ..._258,
        ..._263
      };
    }
    export namespace port {
      export const v1 = { ..._139,
        ..._259
      };
    }
    export namespace types {
      export const v1 = { ..._140
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._141
      };
    }
    export namespace solomachine {
      export const v1 = { ..._142
      };
      export const v2 = { ..._143
      };
    }
    export namespace tendermint {
      export const v1 = { ..._144
      };
    }
  }
  export const ClientFactory = { ..._270,
    ..._271,
    ..._272
  };
}