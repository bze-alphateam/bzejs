//@ts-nocheck
import * as _41 from "./app/runtime/v1alpha1/module";
import * as _42 from "./auth/module/v1/module";
import * as _43 from "./auth/v1beta1/auth";
import * as _44 from "./auth/v1beta1/genesis";
import * as _45 from "./auth/v1beta1/query";
import * as _46 from "./auth/v1beta1/tx";
import * as _47 from "./authz/module/v1/module";
import * as _48 from "./authz/v1beta1/authz";
import * as _49 from "./authz/v1beta1/event";
import * as _50 from "./authz/v1beta1/genesis";
import * as _51 from "./authz/v1beta1/query";
import * as _52 from "./authz/v1beta1/tx";
import * as _53 from "./bank/module/v1/module";
import * as _54 from "./bank/v1beta1/authz";
import * as _55 from "./bank/v1beta1/bank";
import * as _56 from "./bank/v1beta1/genesis";
import * as _57 from "./bank/v1beta1/query";
import * as _58 from "./bank/v1beta1/tx";
import * as _59 from "./base/abci/v1beta1/abci";
import * as _60 from "./base/node/v1beta1/query";
import * as _61 from "./base/query/v1beta1/pagination";
import * as _62 from "./base/reflection/v2alpha1/reflection";
import * as _63 from "./base/tendermint/v1beta1/query";
import * as _64 from "./base/tendermint/v1beta1/types";
import * as _65 from "./base/v1beta1/coin";
import * as _66 from "./benchmark/module/v1/module";
import * as _67 from "./benchmark/v1/benchmark";
import * as _68 from "./benchmark/v1/tx";
import * as _69 from "./circuit/module/v1/module";
import * as _70 from "./circuit/v1/query";
import * as _71 from "./circuit/v1/tx";
import * as _72 from "./circuit/v1/types";
import * as _73 from "./consensus/module/v1/module";
import * as _74 from "./consensus/v1/query";
import * as _75 from "./consensus/v1/tx";
import * as _76 from "./counter/module/v1/module";
import * as _77 from "./counter/v1/query";
import * as _78 from "./counter/v1/tx";
import * as _79 from "./crisis/module/v1/module";
import * as _80 from "./crypto/ed25519/keys";
import * as _81 from "./crypto/hd/v1/hd";
import * as _82 from "./crypto/keyring/v1/record";
import * as _83 from "./crypto/multisig/keys";
import * as _84 from "./crypto/secp256k1/keys";
import * as _85 from "./crypto/secp256r1/keys";
import * as _86 from "./distribution/module/v1/module";
import * as _87 from "./distribution/v1beta1/distribution";
import * as _88 from "./distribution/v1beta1/genesis";
import * as _89 from "./distribution/v1beta1/query";
import * as _90 from "./distribution/v1beta1/tx";
import * as _91 from "./epochs/module/v1/module";
import * as _92 from "./epochs/v1beta1/events";
import * as _93 from "./epochs/v1beta1/genesis";
import * as _94 from "./epochs/v1beta1/query";
import * as _95 from "./evidence/module/v1/module";
import * as _96 from "./feegrant/module/v1/module";
import * as _97 from "./feegrant/v1beta1/feegrant";
import * as _98 from "./feegrant/v1beta1/genesis";
import * as _99 from "./feegrant/v1beta1/query";
import * as _100 from "./feegrant/v1beta1/tx";
import * as _101 from "./genutil/module/v1/module";
import * as _102 from "./gov/module/v1/module";
import * as _103 from "./gov/v1/genesis";
import * as _104 from "./gov/v1/gov";
import * as _105 from "./gov/v1/query";
import * as _106 from "./gov/v1/tx";
import * as _107 from "./gov/v1beta1/genesis";
import * as _108 from "./gov/v1beta1/gov";
import * as _109 from "./gov/v1beta1/query";
import * as _110 from "./gov/v1beta1/tx";
import * as _111 from "./group/module/v1/module";
import * as _112 from "./group/v1/events";
import * as _113 from "./group/v1/genesis";
import * as _114 from "./group/v1/query";
import * as _115 from "./group/v1/tx";
import * as _116 from "./group/v1/types";
import * as _117 from "./ics23/v1/proofs";
import * as _118 from "./mint/module/v1/module";
import * as _119 from "./mint/v1beta1/genesis";
import * as _120 from "./mint/v1beta1/mint";
import * as _121 from "./mint/v1beta1/query";
import * as _122 from "./mint/v1beta1/tx";
import * as _123 from "./msg/textual/v1/textual";
import * as _124 from "./nft/module/v1/module";
import * as _125 from "./orm/module/v1alpha1/module";
import * as _126 from "./orm/query/v1alpha1/query";
import * as _127 from "./params/module/v1/module";
import * as _128 from "./params/v1beta1/params";
import * as _129 from "./params/v1beta1/query";
import * as _130 from "./protocolpool/module/v1/module";
import * as _131 from "./protocolpool/v1/genesis";
import * as _132 from "./protocolpool/v1/query";
import * as _133 from "./protocolpool/v1/tx";
import * as _134 from "./protocolpool/v1/types";
import * as _135 from "./query/v1/query";
import * as _136 from "./reflection/v1/reflection";
import * as _137 from "./slashing/module/v1/module";
import * as _138 from "./staking/module/v1/module";
import * as _139 from "./staking/v1beta1/authz";
import * as _140 from "./staking/v1beta1/genesis";
import * as _141 from "./staking/v1beta1/query";
import * as _142 from "./staking/v1beta1/staking";
import * as _143 from "./staking/v1beta1/tx";
import * as _144 from "./store/internal/kv/v1beta1/kv";
import * as _145 from "./store/snapshots/v1/snapshot";
import * as _146 from "./store/streaming/abci/grpc";
import * as _147 from "./store/v1beta1/commit_info";
import * as _148 from "./store/v1beta1/listening";
import * as _149 from "./tx/config/v1/config";
import * as _150 from "./tx/signing/v1beta1/signing";
import * as _151 from "./tx/v1beta1/service";
import * as _152 from "./tx/v1beta1/tx";
import * as _153 from "./upgrade/module/v1/module";
import * as _154 from "./upgrade/v1beta1/query";
import * as _155 from "./upgrade/v1beta1/tx";
import * as _156 from "./upgrade/v1beta1/upgrade";
import * as _157 from "./vesting/module/v1/module";
import * as _158 from "./vesting/v1beta1/tx";
import * as _159 from "./vesting/v1beta1/vesting";
import * as _254 from "./auth/v1beta1/tx.registry";
import * as _255 from "./authz/v1beta1/tx.registry";
import * as _256 from "./bank/v1beta1/tx.registry";
import * as _257 from "./benchmark/v1/tx.registry";
import * as _258 from "./circuit/v1/tx.registry";
import * as _259 from "./consensus/v1/tx.registry";
import * as _260 from "./counter/v1/tx.registry";
import * as _261 from "./distribution/v1beta1/tx.registry";
import * as _262 from "./feegrant/v1beta1/tx.registry";
import * as _263 from "./gov/v1/tx.registry";
import * as _264 from "./gov/v1beta1/tx.registry";
import * as _265 from "./group/v1/tx.registry";
import * as _266 from "./mint/v1beta1/tx.registry";
import * as _267 from "./protocolpool/v1/tx.registry";
import * as _268 from "./staking/v1beta1/tx.registry";
import * as _269 from "./upgrade/v1beta1/tx.registry";
import * as _270 from "./vesting/v1beta1/tx.registry";
import * as _271 from "./auth/v1beta1/query.lcd";
import * as _272 from "./authz/v1beta1/query.lcd";
import * as _273 from "./bank/v1beta1/query.lcd";
import * as _274 from "./base/node/v1beta1/query.lcd";
import * as _275 from "./base/tendermint/v1beta1/query.lcd";
import * as _276 from "./circuit/v1/query.lcd";
import * as _277 from "./consensus/v1/query.lcd";
import * as _278 from "./distribution/v1beta1/query.lcd";
import * as _279 from "./epochs/v1beta1/query.lcd";
import * as _280 from "./feegrant/v1beta1/query.lcd";
import * as _281 from "./gov/v1/query.lcd";
import * as _282 from "./gov/v1beta1/query.lcd";
import * as _283 from "./group/v1/query.lcd";
import * as _284 from "./mint/v1beta1/query.lcd";
import * as _285 from "./params/v1beta1/query.lcd";
import * as _286 from "./protocolpool/v1/query.lcd";
import * as _287 from "./staking/v1beta1/query.lcd";
import * as _288 from "./tx/v1beta1/service.lcd";
import * as _289 from "./upgrade/v1beta1/query.lcd";
import * as _290 from "./auth/v1beta1/query.rpc.func";
import * as _291 from "./authz/v1beta1/query.rpc.func";
import * as _292 from "./bank/v1beta1/query.rpc.func";
import * as _293 from "./base/node/v1beta1/query.rpc.func";
import * as _294 from "./base/reflection/v2alpha1/reflection.rpc.func";
import * as _295 from "./base/tendermint/v1beta1/query.rpc.func";
import * as _296 from "./circuit/v1/query.rpc.func";
import * as _297 from "./consensus/v1/query.rpc.func";
import * as _298 from "./counter/v1/query.rpc.func";
import * as _299 from "./distribution/v1beta1/query.rpc.func";
import * as _300 from "./epochs/v1beta1/query.rpc.func";
import * as _301 from "./feegrant/v1beta1/query.rpc.func";
import * as _302 from "./gov/v1/query.rpc.func";
import * as _303 from "./gov/v1beta1/query.rpc.func";
import * as _304 from "./group/v1/query.rpc.func";
import * as _305 from "./mint/v1beta1/query.rpc.func";
import * as _306 from "./orm/query/v1alpha1/query.rpc.func";
import * as _307 from "./params/v1beta1/query.rpc.func";
import * as _308 from "./protocolpool/v1/query.rpc.func";
import * as _309 from "./reflection/v1/reflection.rpc.func";
import * as _310 from "./staking/v1beta1/query.rpc.func";
import * as _311 from "./tx/v1beta1/service.rpc.func";
import * as _312 from "./upgrade/v1beta1/query.rpc.func";
import * as _313 from "./auth/v1beta1/tx.rpc.func";
import * as _314 from "./authz/v1beta1/tx.rpc.func";
import * as _315 from "./bank/v1beta1/tx.rpc.func";
import * as _316 from "./benchmark/v1/tx.rpc.func";
import * as _317 from "./circuit/v1/tx.rpc.func";
import * as _318 from "./consensus/v1/tx.rpc.func";
import * as _319 from "./counter/v1/tx.rpc.func";
import * as _320 from "./distribution/v1beta1/tx.rpc.func";
import * as _321 from "./feegrant/v1beta1/tx.rpc.func";
import * as _322 from "./gov/v1/tx.rpc.func";
import * as _323 from "./gov/v1beta1/tx.rpc.func";
import * as _324 from "./group/v1/tx.rpc.func";
import * as _325 from "./mint/v1beta1/tx.rpc.func";
import * as _326 from "./protocolpool/v1/tx.rpc.func";
import * as _327 from "./staking/v1beta1/tx.rpc.func";
import * as _328 from "./upgrade/v1beta1/tx.rpc.func";
import * as _329 from "./vesting/v1beta1/tx.rpc.func";
import * as _371 from "./lcd";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._41
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._254,
      ..._271,
      ..._290,
      ..._313
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._47
      };
    }
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._255,
      ..._272,
      ..._291,
      ..._314
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._256,
      ..._273,
      ..._292,
      ..._315
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._59
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._60,
        ..._274,
        ..._293
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._61
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._62,
        ..._294
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._63,
        ..._64,
        ..._275,
        ..._295
      };
    }
    export const v1beta1 = {
      ..._65
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1 = {
      ..._67,
      ..._68,
      ..._257,
      ..._316
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._258,
      ..._276,
      ..._296,
      ..._317
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._73
      };
    }
    export const v1 = {
      ..._74,
      ..._75,
      ..._259,
      ..._277,
      ..._297,
      ..._318
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._76
      };
    }
    export const v1 = {
      ..._77,
      ..._78,
      ..._260,
      ..._298,
      ..._319
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._80
    };
    export namespace hd {
      export const v1 = {
        ..._81
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._82
      };
    }
    export const multisig = {
      ..._83
    };
    export const secp256k1 = {
      ..._84
    };
    export const secp256r1 = {
      ..._85
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._261,
      ..._278,
      ..._299,
      ..._320
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._279,
      ..._300
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._262,
      ..._280,
      ..._301,
      ..._321
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._101
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._102
      };
    }
    export const v1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._263,
      ..._281,
      ..._302,
      ..._322
    };
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._264,
      ..._282,
      ..._303,
      ..._323
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._111
      };
    }
    export const v1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._265,
      ..._283,
      ..._304,
      ..._324
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._117
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._266,
      ..._284,
      ..._305,
      ..._325
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._123
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._124
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._125
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._126,
        ..._306
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._127
      };
    }
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._285,
      ..._307
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._130
      };
    }
    export const v1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._267,
      ..._286,
      ..._308,
      ..._326
    };
  }
  export namespace query {
    export const v1 = {
      ..._135
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._136,
      ..._309
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._137
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._138
      };
    }
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._268,
      ..._287,
      ..._310,
      ..._327
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._144
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._145
      };
    }
    export namespace streaming {
      export const abci = {
        ..._146
      };
    }
    export const v1beta1 = {
      ..._147,
      ..._148
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._149
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._150
      };
    }
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._288,
      ..._311
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._153
      };
    }
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._269,
      ..._289,
      ..._312,
      ..._328
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._157
      };
    }
    export const v1beta1 = {
      ..._158,
      ..._159,
      ..._270,
      ..._329
    };
  }
  export const ClientFactory = {
    ..._371
  };
}