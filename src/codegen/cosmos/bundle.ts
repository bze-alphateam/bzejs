import * as _19 from "./app/v1alpha1/config";
import * as _20 from "./app/v1alpha1/module";
import * as _21 from "./app/v1alpha1/query";
import * as _22 from "./auth/v1beta1/auth";
import * as _23 from "./auth/v1beta1/genesis";
import * as _24 from "./auth/v1beta1/query";
import * as _25 from "./authz/v1beta1/authz";
import * as _26 from "./authz/v1beta1/event";
import * as _27 from "./authz/v1beta1/genesis";
import * as _28 from "./authz/v1beta1/query";
import * as _29 from "./authz/v1beta1/tx";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/kv/v1beta1/kv";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v1beta1/reflection";
import * as _39 from "./base/reflection/v2alpha1/reflection";
import * as _40 from "./base/snapshots/v1beta1/snapshot";
import * as _41 from "./base/store/v1beta1/commit_info";
import * as _42 from "./base/store/v1beta1/listening";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./capability/v1beta1/capability";
import * as _46 from "./capability/v1beta1/genesis";
import * as _47 from "./crisis/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/tx";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/hd/v1/hd";
import * as _51 from "./crypto/keyring/v1/record";
import * as _52 from "./crypto/multisig/keys";
import * as _53 from "./crypto/secp256k1/keys";
import * as _54 from "./crypto/secp256r1/keys";
import * as _55 from "./distribution/v1beta1/distribution";
import * as _56 from "./distribution/v1beta1/genesis";
import * as _57 from "./distribution/v1beta1/query";
import * as _58 from "./distribution/v1beta1/tx";
import * as _59 from "./evidence/v1beta1/evidence";
import * as _60 from "./evidence/v1beta1/genesis";
import * as _61 from "./evidence/v1beta1/query";
import * as _62 from "./evidence/v1beta1/tx";
import * as _63 from "./feegrant/v1beta1/feegrant";
import * as _64 from "./feegrant/v1beta1/genesis";
import * as _65 from "./feegrant/v1beta1/query";
import * as _66 from "./feegrant/v1beta1/tx";
import * as _67 from "./genutil/v1beta1/genesis";
import * as _68 from "./gov/v1/genesis";
import * as _69 from "./gov/v1/gov";
import * as _70 from "./gov/v1/query";
import * as _71 from "./gov/v1/tx";
import * as _72 from "./gov/v1beta1/genesis";
import * as _73 from "./gov/v1beta1/gov";
import * as _74 from "./gov/v1beta1/query";
import * as _75 from "./gov/v1beta1/tx";
import * as _76 from "./group/v1/events";
import * as _77 from "./group/v1/genesis";
import * as _78 from "./group/v1/query";
import * as _79 from "./group/v1/tx";
import * as _80 from "./group/v1/types";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
import * as _84 from "./msg/v1/msg";
import * as _85 from "./nft/v1beta1/event";
import * as _86 from "./nft/v1beta1/genesis";
import * as _87 from "./nft/v1beta1/nft";
import * as _88 from "./nft/v1beta1/query";
import * as _89 from "./nft/v1beta1/tx";
import * as _90 from "./orm/v1/orm";
import * as _91 from "./orm/v1alpha1/schema";
import * as _92 from "./params/v1beta1/params";
import * as _93 from "./params/v1beta1/query";
import * as _94 from "./slashing/v1beta1/genesis";
import * as _95 from "./slashing/v1beta1/query";
import * as _96 from "./slashing/v1beta1/slashing";
import * as _97 from "./slashing/v1beta1/tx";
import * as _98 from "./staking/v1beta1/authz";
import * as _99 from "./staking/v1beta1/genesis";
import * as _100 from "./staking/v1beta1/query";
import * as _101 from "./staking/v1beta1/staking";
import * as _102 from "./staking/v1beta1/tx";
import * as _103 from "./tx/signing/v1beta1/signing";
import * as _104 from "./tx/v1beta1/service";
import * as _105 from "./tx/v1beta1/tx";
import * as _106 from "./upgrade/v1beta1/query";
import * as _107 from "./upgrade/v1beta1/tx";
import * as _108 from "./upgrade/v1beta1/upgrade";
import * as _109 from "./vesting/v1beta1/tx";
import * as _110 from "./vesting/v1beta1/vesting";
import * as _136 from "./auth/v1beta1/query.lcd";
import * as _137 from "./authz/v1beta1/query.lcd";
import * as _138 from "./bank/v1beta1/query.lcd";
import * as _139 from "./base/tendermint/v1beta1/query.lcd";
import * as _140 from "./distribution/v1beta1/query.lcd";
import * as _141 from "./evidence/v1beta1/query.lcd";
import * as _142 from "./feegrant/v1beta1/query.lcd";
import * as _143 from "./gov/v1/query.lcd";
import * as _144 from "./gov/v1beta1/query.lcd";
import * as _145 from "./group/v1/query.lcd";
import * as _146 from "./mint/v1beta1/query.lcd";
import * as _147 from "./nft/v1beta1/query.lcd";
import * as _148 from "./params/v1beta1/query.lcd";
import * as _149 from "./slashing/v1beta1/query.lcd";
import * as _150 from "./staking/v1beta1/query.lcd";
import * as _151 from "./tx/v1beta1/service.lcd";
import * as _152 from "./upgrade/v1beta1/query.lcd";
import * as _153 from "./app/v1alpha1/query.rpc.Query";
import * as _154 from "./auth/v1beta1/query.rpc.Query";
import * as _155 from "./authz/v1beta1/query.rpc.Query";
import * as _156 from "./bank/v1beta1/query.rpc.Query";
import * as _157 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _158 from "./distribution/v1beta1/query.rpc.Query";
import * as _159 from "./evidence/v1beta1/query.rpc.Query";
import * as _160 from "./feegrant/v1beta1/query.rpc.Query";
import * as _161 from "./gov/v1/query.rpc.Query";
import * as _162 from "./gov/v1beta1/query.rpc.Query";
import * as _163 from "./group/v1/query.rpc.Query";
import * as _164 from "./mint/v1beta1/query.rpc.Query";
import * as _165 from "./nft/v1beta1/query.rpc.Query";
import * as _166 from "./params/v1beta1/query.rpc.Query";
import * as _167 from "./slashing/v1beta1/query.rpc.Query";
import * as _168 from "./staking/v1beta1/query.rpc.Query";
import * as _169 from "./tx/v1beta1/service.rpc.Service";
import * as _170 from "./upgrade/v1beta1/query.rpc.Query";
import * as _171 from "./authz/v1beta1/tx.rpc.msg";
import * as _172 from "./bank/v1beta1/tx.rpc.msg";
import * as _173 from "./crisis/v1beta1/tx.rpc.msg";
import * as _174 from "./distribution/v1beta1/tx.rpc.msg";
import * as _175 from "./evidence/v1beta1/tx.rpc.msg";
import * as _176 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _177 from "./gov/v1/tx.rpc.msg";
import * as _178 from "./gov/v1beta1/tx.rpc.msg";
import * as _179 from "./group/v1/tx.rpc.msg";
import * as _180 from "./nft/v1beta1/tx.rpc.msg";
import * as _181 from "./slashing/v1beta1/tx.rpc.msg";
import * as _182 from "./staking/v1beta1/tx.rpc.msg";
import * as _183 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _184 from "./vesting/v1beta1/tx.rpc.msg";
import * as _188 from "./lcd";
import * as _189 from "./rpc.query";
import * as _190 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._19,
      ..._20,
      ..._21,
      ..._153
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._22,
      ..._23,
      ..._24,
      ..._136,
      ..._154
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._137,
      ..._155,
      ..._171
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._138,
      ..._156,
      ..._172
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._35
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._36
      };
    }
    export namespace query {
      export const v1beta1 = { ..._37
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._38
      };
      export const v2alpha1 = { ..._39
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._40
      };
    }
    export namespace store {
      export const v1beta1 = { ..._41,
        ..._42
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._43,
        ..._139,
        ..._157
      };
    }
    export const v1beta1 = { ..._44
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._45,
      ..._46
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._47,
      ..._48,
      ..._173
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._49
    };
    export namespace hd {
      export const v1 = { ..._50
      };
    }
    export namespace keyring {
      export const v1 = { ..._51
      };
    }
    export const multisig = { ..._52
    };
    export const secp256k1 = { ..._53
    };
    export const secp256r1 = { ..._54
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._140,
      ..._158,
      ..._174
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._141,
      ..._159,
      ..._175
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._142,
      ..._160,
      ..._176
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._67
    };
  }
  export namespace gov {
    export const v1 = { ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._143,
      ..._161,
      ..._177
    };
    export const v1beta1 = { ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._144,
      ..._162,
      ..._178
    };
  }
  export namespace group {
    export const v1 = { ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._145,
      ..._163,
      ..._179
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._81,
      ..._82,
      ..._83,
      ..._146,
      ..._164
    };
  }
  export namespace msg {
    export const v1 = { ..._84
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._147,
      ..._165,
      ..._180
    };
  }
  export namespace orm {
    export const v1 = { ..._90
    };
    export const v1alpha1 = { ..._91
    };
  }
  export namespace params {
    export const v1beta1 = { ..._92,
      ..._93,
      ..._148,
      ..._166
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._149,
      ..._167,
      ..._181
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._150,
      ..._168,
      ..._182
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._103
      };
    }
    export const v1beta1 = { ..._104,
      ..._105,
      ..._151,
      ..._169
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._106,
      ..._107,
      ..._108,
      ..._152,
      ..._170,
      ..._183
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._109,
      ..._110,
      ..._184
    };
  }
  export const ClientFactory = { ..._188,
    ..._189,
    ..._190
  };
}