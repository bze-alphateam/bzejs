import * as _171 from "./abci/types";
import * as _172 from "./crypto/keys";
import * as _173 from "./crypto/proof";
import * as _174 from "./libs/bits/types";
import * as _175 from "./p2p/types";
import * as _176 from "./types/block";
import * as _177 from "./types/evidence";
import * as _178 from "./types/params";
import * as _179 from "./types/types";
import * as _180 from "./types/validator";
import * as _181 from "./version/types";
export namespace tendermint {
  export const abci = { ..._171
  };
  export const crypto = { ..._172,
    ..._173
  };
  export namespace libs {
    export const bits = { ..._174
    };
  }
  export const p2p = { ..._175
  };
  export const types = { ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180
  };
  export const version = { ..._181
  };
}