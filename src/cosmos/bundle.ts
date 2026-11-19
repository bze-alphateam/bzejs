//@ts-nocheck
import * as _56 from "./app/runtime/v1alpha1/module";
import * as _57 from "./auth/module/v1/module";
import * as _58 from "./auth/v1beta1/auth";
import * as _59 from "./auth/v1beta1/genesis";
import * as _60 from "./auth/v1beta1/query";
import * as _61 from "./auth/v1beta1/tx";
import * as _62 from "./authz/module/v1/module";
import * as _63 from "./authz/v1beta1/authz";
import * as _64 from "./authz/v1beta1/event";
import * as _65 from "./authz/v1beta1/genesis";
import * as _66 from "./authz/v1beta1/query";
import * as _67 from "./authz/v1beta1/tx";
import * as _68 from "./bank/module/v1/module";
import * as _69 from "./bank/v1beta1/authz";
import * as _70 from "./bank/v1beta1/bank";
import * as _71 from "./bank/v1beta1/genesis";
import * as _72 from "./bank/v1beta1/query";
import * as _73 from "./bank/v1beta1/tx";
import * as _74 from "./base/abci/v1beta1/abci";
import * as _75 from "./base/node/v1beta1/query";
import * as _76 from "./base/query/v1beta1/pagination";
import * as _77 from "./base/reflection/v2alpha1/reflection";
import * as _78 from "./base/tendermint/v1beta1/query";
import * as _79 from "./base/tendermint/v1beta1/types";
import * as _80 from "./base/v1beta1/coin";
import * as _81 from "./benchmark/module/v1/module";
import * as _82 from "./benchmark/v1/benchmark";
import * as _83 from "./benchmark/v1/tx";
import * as _84 from "./circuit/module/v1/module";
import * as _85 from "./circuit/v1/query";
import * as _86 from "./circuit/v1/tx";
import * as _87 from "./circuit/v1/types";
import * as _88 from "./consensus/module/v1/module";
import * as _89 from "./consensus/v1/query";
import * as _90 from "./consensus/v1/tx";
import * as _91 from "./counter/module/v1/module";
import * as _92 from "./counter/v1/query";
import * as _93 from "./counter/v1/tx";
import * as _94 from "./crisis/module/v1/module";
import * as _95 from "./crypto/ed25519/keys";
import * as _96 from "./crypto/hd/v1/hd";
import * as _97 from "./crypto/keyring/v1/record";
import * as _98 from "./crypto/multisig/keys";
import * as _99 from "./crypto/secp256k1/keys";
import * as _100 from "./crypto/secp256r1/keys";
import * as _101 from "./distribution/module/v1/module";
import * as _102 from "./distribution/v1beta1/distribution";
import * as _103 from "./distribution/v1beta1/genesis";
import * as _104 from "./distribution/v1beta1/query";
import * as _105 from "./distribution/v1beta1/tx";
import * as _106 from "./epochs/module/v1/module";
import * as _107 from "./epochs/v1beta1/events";
import * as _108 from "./epochs/v1beta1/genesis";
import * as _109 from "./epochs/v1beta1/query";
import * as _110 from "./evidence/module/v1/module";
import * as _111 from "./feegrant/module/v1/module";
import * as _112 from "./feegrant/v1beta1/feegrant";
import * as _113 from "./feegrant/v1beta1/genesis";
import * as _114 from "./feegrant/v1beta1/query";
import * as _115 from "./feegrant/v1beta1/tx";
import * as _116 from "./genutil/module/v1/module";
import * as _117 from "./gov/module/v1/module";
import * as _118 from "./gov/v1/genesis";
import * as _119 from "./gov/v1/gov";
import * as _120 from "./gov/v1/query";
import * as _121 from "./gov/v1/tx";
import * as _122 from "./gov/v1beta1/genesis";
import * as _123 from "./gov/v1beta1/gov";
import * as _124 from "./gov/v1beta1/query";
import * as _125 from "./gov/v1beta1/tx";
import * as _126 from "./ics23/v1/proofs";
import * as _127 from "./mint/module/v1/module";
import * as _128 from "./mint/v1beta1/genesis";
import * as _129 from "./mint/v1beta1/mint";
import * as _130 from "./mint/v1beta1/query";
import * as _131 from "./mint/v1beta1/tx";
import * as _132 from "./msg/textual/v1/textual";
import * as _133 from "./nft/module/v1/module";
import * as _134 from "./params/module/v1/module";
import * as _135 from "./params/v1beta1/params";
import * as _136 from "./params/v1beta1/query";
import * as _137 from "./protocolpool/module/v1/module";
import * as _138 from "./protocolpool/v1/genesis";
import * as _139 from "./protocolpool/v1/query";
import * as _140 from "./protocolpool/v1/tx";
import * as _141 from "./protocolpool/v1/types";
import * as _142 from "./query/v1/query";
import * as _143 from "./reflection/v1/reflection";
import * as _144 from "./slashing/module/v1/module";
import * as _145 from "./staking/module/v1/module";
import * as _146 from "./staking/v1beta1/authz";
import * as _147 from "./staking/v1beta1/genesis";
import * as _148 from "./staking/v1beta1/query";
import * as _149 from "./staking/v1beta1/staking";
import * as _150 from "./staking/v1beta1/tx";
import * as _151 from "./store/internal/kv/v1beta1/kv";
import * as _152 from "./store/snapshots/v1/snapshot";
import * as _153 from "./store/streaming/abci/grpc";
import * as _154 from "./store/v1beta1/commit_info";
import * as _155 from "./store/v1beta1/listening";
import * as _156 from "./tx/config/v1/config";
import * as _157 from "./tx/signing/v1beta1/signing";
import * as _158 from "./tx/v1beta1/service";
import * as _159 from "./tx/v1beta1/tx";
import * as _160 from "./upgrade/module/v1/module";
import * as _161 from "./upgrade/v1beta1/query";
import * as _162 from "./upgrade/v1beta1/tx";
import * as _163 from "./upgrade/v1beta1/upgrade";
import * as _164 from "./vesting/module/v1/module";
import * as _165 from "./vesting/v1beta1/tx";
import * as _166 from "./vesting/v1beta1/vesting";
import * as _270 from "./auth/v1beta1/tx.registry";
import * as _271 from "./authz/v1beta1/tx.registry";
import * as _272 from "./bank/v1beta1/tx.registry";
import * as _273 from "./benchmark/v1/tx.registry";
import * as _274 from "./circuit/v1/tx.registry";
import * as _275 from "./consensus/v1/tx.registry";
import * as _276 from "./counter/v1/tx.registry";
import * as _277 from "./distribution/v1beta1/tx.registry";
import * as _278 from "./feegrant/v1beta1/tx.registry";
import * as _279 from "./gov/v1/tx.registry";
import * as _280 from "./gov/v1beta1/tx.registry";
import * as _281 from "./mint/v1beta1/tx.registry";
import * as _282 from "./protocolpool/v1/tx.registry";
import * as _283 from "./staking/v1beta1/tx.registry";
import * as _284 from "./upgrade/v1beta1/tx.registry";
import * as _285 from "./vesting/v1beta1/tx.registry";
import * as _286 from "./auth/v1beta1/query.lcd";
import * as _287 from "./authz/v1beta1/query.lcd";
import * as _288 from "./bank/v1beta1/query.lcd";
import * as _289 from "./base/node/v1beta1/query.lcd";
import * as _290 from "./base/tendermint/v1beta1/query.lcd";
import * as _291 from "./circuit/v1/query.lcd";
import * as _292 from "./consensus/v1/query.lcd";
import * as _293 from "./distribution/v1beta1/query.lcd";
import * as _294 from "./epochs/v1beta1/query.lcd";
import * as _295 from "./feegrant/v1beta1/query.lcd";
import * as _296 from "./gov/v1/query.lcd";
import * as _297 from "./gov/v1beta1/query.lcd";
import * as _298 from "./mint/v1beta1/query.lcd";
import * as _299 from "./params/v1beta1/query.lcd";
import * as _300 from "./protocolpool/v1/query.lcd";
import * as _301 from "./staking/v1beta1/query.lcd";
import * as _302 from "./tx/v1beta1/service.lcd";
import * as _303 from "./upgrade/v1beta1/query.lcd";
import * as _304 from "./auth/v1beta1/query.rpc.func";
import * as _305 from "./authz/v1beta1/query.rpc.func";
import * as _306 from "./bank/v1beta1/query.rpc.func";
import * as _307 from "./base/node/v1beta1/query.rpc.func";
import * as _308 from "./base/reflection/v2alpha1/reflection.rpc.func";
import * as _309 from "./base/tendermint/v1beta1/query.rpc.func";
import * as _310 from "./circuit/v1/query.rpc.func";
import * as _311 from "./consensus/v1/query.rpc.func";
import * as _312 from "./counter/v1/query.rpc.func";
import * as _313 from "./distribution/v1beta1/query.rpc.func";
import * as _314 from "./epochs/v1beta1/query.rpc.func";
import * as _315 from "./feegrant/v1beta1/query.rpc.func";
import * as _316 from "./gov/v1/query.rpc.func";
import * as _317 from "./gov/v1beta1/query.rpc.func";
import * as _318 from "./mint/v1beta1/query.rpc.func";
import * as _319 from "./params/v1beta1/query.rpc.func";
import * as _320 from "./protocolpool/v1/query.rpc.func";
import * as _321 from "./reflection/v1/reflection.rpc.func";
import * as _322 from "./staking/v1beta1/query.rpc.func";
import * as _323 from "./tx/v1beta1/service.rpc.func";
import * as _324 from "./upgrade/v1beta1/query.rpc.func";
import * as _325 from "./auth/v1beta1/tx.rpc.func";
import * as _326 from "./authz/v1beta1/tx.rpc.func";
import * as _327 from "./bank/v1beta1/tx.rpc.func";
import * as _328 from "./benchmark/v1/tx.rpc.func";
import * as _329 from "./circuit/v1/tx.rpc.func";
import * as _330 from "./consensus/v1/tx.rpc.func";
import * as _331 from "./counter/v1/tx.rpc.func";
import * as _332 from "./distribution/v1beta1/tx.rpc.func";
import * as _333 from "./feegrant/v1beta1/tx.rpc.func";
import * as _334 from "./gov/v1/tx.rpc.func";
import * as _335 from "./gov/v1beta1/tx.rpc.func";
import * as _336 from "./mint/v1beta1/tx.rpc.func";
import * as _337 from "./protocolpool/v1/tx.rpc.func";
import * as _338 from "./staking/v1beta1/tx.rpc.func";
import * as _339 from "./upgrade/v1beta1/tx.rpc.func";
import * as _340 from "./vesting/v1beta1/tx.rpc.func";
import * as _382 from "./lcd";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._56
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._270,
      ..._286,
      ..._304,
      ..._325
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._271,
      ..._287,
      ..._305,
      ..._326
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._272,
      ..._288,
      ..._306,
      ..._327
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._74
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._75,
        ..._289,
        ..._307
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._76
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._77,
        ..._308
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._78,
        ..._79,
        ..._290,
        ..._309
      };
    }
    export const v1beta1 = {
      ..._80
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1 = {
      ..._82,
      ..._83,
      ..._273,
      ..._328
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._274,
      ..._291,
      ..._310,
      ..._329
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._88
      };
    }
    export const v1 = {
      ..._89,
      ..._90,
      ..._275,
      ..._292,
      ..._311,
      ..._330
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1 = {
      ..._92,
      ..._93,
      ..._276,
      ..._312,
      ..._331
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._95
    };
    export namespace hd {
      export const v1 = {
        ..._96
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._97
      };
    }
    export const multisig = {
      ..._98
    };
    export const secp256k1 = {
      ..._99
    };
    export const secp256r1 = {
      ..._100
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._101
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._277,
      ..._293,
      ..._313,
      ..._332
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._106
      };
    }
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._294,
      ..._314
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._111
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._278,
      ..._295,
      ..._315,
      ..._333
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._116
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._117
      };
    }
    export const v1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._279,
      ..._296,
      ..._316,
      ..._334
    };
    export const v1beta1 = {
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._280,
      ..._297,
      ..._317,
      ..._335
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._126
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._127
      };
    }
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._281,
      ..._298,
      ..._318,
      ..._336
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._132
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._133
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._134
      };
    }
    export const v1beta1 = {
      ..._135,
      ..._136,
      ..._299,
      ..._319
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._137
      };
    }
    export const v1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._282,
      ..._300,
      ..._320,
      ..._337
    };
  }
  export namespace query {
    export const v1 = {
      ..._142
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._143,
      ..._321
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._144
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._145
      };
    }
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._283,
      ..._301,
      ..._322,
      ..._338
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._151
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._152
      };
    }
    export namespace streaming {
      export const abci = {
        ..._153
      };
    }
    export const v1beta1 = {
      ..._154,
      ..._155
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._156
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._157
      };
    }
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._302,
      ..._323
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._160
      };
    }
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._284,
      ..._303,
      ..._324,
      ..._339
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._164
      };
    }
    export const v1beta1 = {
      ..._165,
      ..._166,
      ..._285,
      ..._340
    };
  }
  export const ClientFactory = {
    ..._382
  };
}