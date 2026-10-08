//@ts-nocheck
import * as _43 from "./app/runtime/v1alpha1/module";
import * as _44 from "./auth/module/v1/module";
import * as _45 from "./auth/v1beta1/auth";
import * as _46 from "./auth/v1beta1/genesis";
import * as _47 from "./auth/v1beta1/query";
import * as _48 from "./auth/v1beta1/tx";
import * as _49 from "./authz/module/v1/module";
import * as _50 from "./authz/v1beta1/authz";
import * as _51 from "./authz/v1beta1/event";
import * as _52 from "./authz/v1beta1/genesis";
import * as _53 from "./authz/v1beta1/query";
import * as _54 from "./authz/v1beta1/tx";
import * as _55 from "./bank/module/v1/module";
import * as _56 from "./bank/v1beta1/authz";
import * as _57 from "./bank/v1beta1/bank";
import * as _58 from "./bank/v1beta1/genesis";
import * as _59 from "./bank/v1beta1/query";
import * as _60 from "./bank/v1beta1/tx";
import * as _61 from "./base/abci/v1beta1/abci";
import * as _62 from "./base/node/v1beta1/query";
import * as _63 from "./base/query/v1beta1/pagination";
import * as _64 from "./base/reflection/v2alpha1/reflection";
import * as _65 from "./base/tendermint/v1beta1/query";
import * as _66 from "./base/tendermint/v1beta1/types";
import * as _67 from "./base/v1beta1/coin";
import * as _68 from "./benchmark/module/v1/module";
import * as _69 from "./benchmark/v1/benchmark";
import * as _70 from "./benchmark/v1/tx";
import * as _71 from "./circuit/module/v1/module";
import * as _72 from "./circuit/v1/query";
import * as _73 from "./circuit/v1/tx";
import * as _74 from "./circuit/v1/types";
import * as _75 from "./consensus/module/v1/module";
import * as _76 from "./consensus/v1/query";
import * as _77 from "./consensus/v1/tx";
import * as _78 from "./counter/module/v1/module";
import * as _79 from "./counter/v1/query";
import * as _80 from "./counter/v1/tx";
import * as _81 from "./crisis/module/v1/module";
import * as _82 from "./crypto/ed25519/keys";
import * as _83 from "./crypto/hd/v1/hd";
import * as _84 from "./crypto/keyring/v1/record";
import * as _85 from "./crypto/multisig/keys";
import * as _86 from "./crypto/secp256k1/keys";
import * as _87 from "./crypto/secp256r1/keys";
import * as _88 from "./distribution/module/v1/module";
import * as _89 from "./distribution/v1beta1/distribution";
import * as _90 from "./distribution/v1beta1/genesis";
import * as _91 from "./distribution/v1beta1/query";
import * as _92 from "./distribution/v1beta1/tx";
import * as _93 from "./epochs/module/v1/module";
import * as _94 from "./epochs/v1beta1/events";
import * as _95 from "./epochs/v1beta1/genesis";
import * as _96 from "./epochs/v1beta1/query";
import * as _97 from "./evidence/module/v1/module";
import * as _98 from "./feegrant/module/v1/module";
import * as _99 from "./feegrant/v1beta1/feegrant";
import * as _100 from "./feegrant/v1beta1/genesis";
import * as _101 from "./feegrant/v1beta1/query";
import * as _102 from "./feegrant/v1beta1/tx";
import * as _103 from "./genutil/module/v1/module";
import * as _104 from "./gov/module/v1/module";
import * as _105 from "./gov/v1/genesis";
import * as _106 from "./gov/v1/gov";
import * as _107 from "./gov/v1/query";
import * as _108 from "./gov/v1/tx";
import * as _109 from "./gov/v1beta1/genesis";
import * as _110 from "./gov/v1beta1/gov";
import * as _111 from "./gov/v1beta1/query";
import * as _112 from "./gov/v1beta1/tx";
import * as _113 from "./group/module/v1/module";
import * as _114 from "./group/v1/events";
import * as _115 from "./group/v1/genesis";
import * as _116 from "./group/v1/query";
import * as _117 from "./group/v1/tx";
import * as _118 from "./group/v1/types";
import * as _119 from "./ics23/v1/proofs";
import * as _120 from "./mint/module/v1/module";
import * as _121 from "./mint/v1beta1/genesis";
import * as _122 from "./mint/v1beta1/mint";
import * as _123 from "./mint/v1beta1/query";
import * as _124 from "./mint/v1beta1/tx";
import * as _125 from "./msg/textual/v1/textual";
import * as _126 from "./nft/module/v1/module";
import * as _127 from "./orm/module/v1alpha1/module";
import * as _128 from "./orm/query/v1alpha1/query";
import * as _129 from "./params/module/v1/module";
import * as _130 from "./params/v1beta1/params";
import * as _131 from "./params/v1beta1/query";
import * as _132 from "./protocolpool/module/v1/module";
import * as _133 from "./protocolpool/v1/genesis";
import * as _134 from "./protocolpool/v1/query";
import * as _135 from "./protocolpool/v1/tx";
import * as _136 from "./protocolpool/v1/types";
import * as _137 from "./query/v1/query";
import * as _138 from "./reflection/v1/reflection";
import * as _139 from "./slashing/module/v1/module";
import * as _140 from "./staking/module/v1/module";
import * as _141 from "./staking/v1beta1/authz";
import * as _142 from "./staking/v1beta1/genesis";
import * as _143 from "./staking/v1beta1/query";
import * as _144 from "./staking/v1beta1/staking";
import * as _145 from "./staking/v1beta1/tx";
import * as _146 from "./store/internal/kv/v1beta1/kv";
import * as _147 from "./store/snapshots/v1/snapshot";
import * as _148 from "./store/streaming/abci/grpc";
import * as _149 from "./store/v1beta1/commit_info";
import * as _150 from "./store/v1beta1/listening";
import * as _151 from "./tx/config/v1/config";
import * as _152 from "./tx/signing/v1beta1/signing";
import * as _153 from "./tx/v1beta1/service";
import * as _154 from "./tx/v1beta1/tx";
import * as _155 from "./upgrade/module/v1/module";
import * as _156 from "./upgrade/v1beta1/query";
import * as _157 from "./upgrade/v1beta1/tx";
import * as _158 from "./upgrade/v1beta1/upgrade";
import * as _159 from "./vesting/module/v1/module";
import * as _160 from "./vesting/v1beta1/tx";
import * as _161 from "./vesting/v1beta1/vesting";
import * as _256 from "./auth/v1beta1/tx.registry";
import * as _257 from "./authz/v1beta1/tx.registry";
import * as _258 from "./bank/v1beta1/tx.registry";
import * as _259 from "./benchmark/v1/tx.registry";
import * as _260 from "./circuit/v1/tx.registry";
import * as _261 from "./consensus/v1/tx.registry";
import * as _262 from "./counter/v1/tx.registry";
import * as _263 from "./distribution/v1beta1/tx.registry";
import * as _264 from "./feegrant/v1beta1/tx.registry";
import * as _265 from "./gov/v1/tx.registry";
import * as _266 from "./gov/v1beta1/tx.registry";
import * as _267 from "./group/v1/tx.registry";
import * as _268 from "./mint/v1beta1/tx.registry";
import * as _269 from "./protocolpool/v1/tx.registry";
import * as _270 from "./staking/v1beta1/tx.registry";
import * as _271 from "./upgrade/v1beta1/tx.registry";
import * as _272 from "./vesting/v1beta1/tx.registry";
import * as _273 from "./auth/v1beta1/query.lcd";
import * as _274 from "./authz/v1beta1/query.lcd";
import * as _275 from "./bank/v1beta1/query.lcd";
import * as _276 from "./base/node/v1beta1/query.lcd";
import * as _277 from "./base/tendermint/v1beta1/query.lcd";
import * as _278 from "./circuit/v1/query.lcd";
import * as _279 from "./consensus/v1/query.lcd";
import * as _280 from "./distribution/v1beta1/query.lcd";
import * as _281 from "./epochs/v1beta1/query.lcd";
import * as _282 from "./feegrant/v1beta1/query.lcd";
import * as _283 from "./gov/v1/query.lcd";
import * as _284 from "./gov/v1beta1/query.lcd";
import * as _285 from "./group/v1/query.lcd";
import * as _286 from "./mint/v1beta1/query.lcd";
import * as _287 from "./params/v1beta1/query.lcd";
import * as _288 from "./protocolpool/v1/query.lcd";
import * as _289 from "./staking/v1beta1/query.lcd";
import * as _290 from "./tx/v1beta1/service.lcd";
import * as _291 from "./upgrade/v1beta1/query.lcd";
import * as _292 from "./auth/v1beta1/query.rpc.func";
import * as _293 from "./authz/v1beta1/query.rpc.func";
import * as _294 from "./bank/v1beta1/query.rpc.func";
import * as _295 from "./base/node/v1beta1/query.rpc.func";
import * as _296 from "./base/reflection/v2alpha1/reflection.rpc.func";
import * as _297 from "./base/tendermint/v1beta1/query.rpc.func";
import * as _298 from "./circuit/v1/query.rpc.func";
import * as _299 from "./consensus/v1/query.rpc.func";
import * as _300 from "./counter/v1/query.rpc.func";
import * as _301 from "./distribution/v1beta1/query.rpc.func";
import * as _302 from "./epochs/v1beta1/query.rpc.func";
import * as _303 from "./feegrant/v1beta1/query.rpc.func";
import * as _304 from "./gov/v1/query.rpc.func";
import * as _305 from "./gov/v1beta1/query.rpc.func";
import * as _306 from "./group/v1/query.rpc.func";
import * as _307 from "./mint/v1beta1/query.rpc.func";
import * as _308 from "./orm/query/v1alpha1/query.rpc.func";
import * as _309 from "./params/v1beta1/query.rpc.func";
import * as _310 from "./protocolpool/v1/query.rpc.func";
import * as _311 from "./reflection/v1/reflection.rpc.func";
import * as _312 from "./staking/v1beta1/query.rpc.func";
import * as _313 from "./tx/v1beta1/service.rpc.func";
import * as _314 from "./upgrade/v1beta1/query.rpc.func";
import * as _315 from "./auth/v1beta1/tx.rpc.func";
import * as _316 from "./authz/v1beta1/tx.rpc.func";
import * as _317 from "./bank/v1beta1/tx.rpc.func";
import * as _318 from "./benchmark/v1/tx.rpc.func";
import * as _319 from "./circuit/v1/tx.rpc.func";
import * as _320 from "./consensus/v1/tx.rpc.func";
import * as _321 from "./counter/v1/tx.rpc.func";
import * as _322 from "./distribution/v1beta1/tx.rpc.func";
import * as _323 from "./feegrant/v1beta1/tx.rpc.func";
import * as _324 from "./gov/v1/tx.rpc.func";
import * as _325 from "./gov/v1beta1/tx.rpc.func";
import * as _326 from "./group/v1/tx.rpc.func";
import * as _327 from "./mint/v1beta1/tx.rpc.func";
import * as _328 from "./protocolpool/v1/tx.rpc.func";
import * as _329 from "./staking/v1beta1/tx.rpc.func";
import * as _330 from "./upgrade/v1beta1/tx.rpc.func";
import * as _331 from "./vesting/v1beta1/tx.rpc.func";
import * as _373 from "./lcd";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._43
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._256,
      ..._273,
      ..._292,
      ..._315
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._257,
      ..._274,
      ..._293,
      ..._316
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._258,
      ..._275,
      ..._294,
      ..._317
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._61
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._62,
        ..._276,
        ..._295
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._63
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._64,
        ..._296
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._65,
        ..._66,
        ..._277,
        ..._297
      };
    }
    export const v1beta1 = {
      ..._67
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
    export const v1 = {
      ..._69,
      ..._70,
      ..._259,
      ..._318
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._71
      };
    }
    export const v1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._260,
      ..._278,
      ..._298,
      ..._319
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1 = {
      ..._76,
      ..._77,
      ..._261,
      ..._279,
      ..._299,
      ..._320
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1 = {
      ..._79,
      ..._80,
      ..._262,
      ..._300,
      ..._321
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._82
    };
    export namespace hd {
      export const v1 = {
        ..._83
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._84
      };
    }
    export const multisig = {
      ..._85
    };
    export const secp256k1 = {
      ..._86
    };
    export const secp256r1 = {
      ..._87
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._88
      };
    }
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._263,
      ..._280,
      ..._301,
      ..._322
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._93
      };
    }
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._281,
      ..._302
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._97
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._264,
      ..._282,
      ..._303,
      ..._323
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._104
      };
    }
    export const v1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._265,
      ..._283,
      ..._304,
      ..._324
    };
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._266,
      ..._284,
      ..._305,
      ..._325
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._113
      };
    }
    export const v1 = {
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._267,
      ..._285,
      ..._306,
      ..._326
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._119
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._120
      };
    }
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._268,
      ..._286,
      ..._307,
      ..._327
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._125
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._126
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._127
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._128,
        ..._308
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._129
      };
    }
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._287,
      ..._309
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._132
      };
    }
    export const v1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._269,
      ..._288,
      ..._310,
      ..._328
    };
  }
  export namespace query {
    export const v1 = {
      ..._137
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._138,
      ..._311
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._139
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._140
      };
    }
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._270,
      ..._289,
      ..._312,
      ..._329
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._146
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._147
      };
    }
    export namespace streaming {
      export const abci = {
        ..._148
      };
    }
    export const v1beta1 = {
      ..._149,
      ..._150
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._151
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._152
      };
    }
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._290,
      ..._313
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._155
      };
    }
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._271,
      ..._291,
      ..._314,
      ..._330
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._159
      };
    }
    export const v1beta1 = {
      ..._160,
      ..._161,
      ..._272,
      ..._331
    };
  }
  export const ClientFactory = {
    ..._373
  };
}