import * as _1 from "../beezee/burner/burn_coins_proposal";
import * as _2 from "../beezee/burner/burned_coins";
import * as _3 from "../beezee/burner/events";
import * as _4 from "../beezee/burner/genesis";
import * as _5 from "../beezee/burner/params";
import * as _6 from "../beezee/burner/query";
import * as _7 from "../beezee/burner/tx";
import * as _8 from "../beezee/cointrunk/accepted_domain_proposal";
import * as _9 from "../beezee/cointrunk/accepted_domain";
import * as _10 from "../beezee/cointrunk/anon_articles_counter";
import * as _11 from "../beezee/cointrunk/article";
import * as _12 from "../beezee/cointrunk/events";
import * as _13 from "../beezee/cointrunk/genesis";
import * as _14 from "../beezee/cointrunk/params";
import * as _15 from "../beezee/cointrunk/publisher_proposal";
import * as _16 from "../beezee/cointrunk/publisher";
import * as _17 from "../beezee/cointrunk/query";
import * as _18 from "../beezee/cointrunk/tx";
import * as _156 from "../beezee/burner/tx.amino";
import * as _157 from "../beezee/cointrunk/tx.amino";
import * as _158 from "../beezee/burner/tx.registry";
import * as _159 from "../beezee/cointrunk/tx.registry";
import * as _160 from "../beezee/burner/query.lcd";
import * as _161 from "../beezee/cointrunk/query.lcd";
import * as _162 from "../beezee/burner/query.rpc.Query";
import * as _163 from "../beezee/cointrunk/query.rpc.Query";
import * as _164 from "../beezee/burner/tx.rpc.msg";
import * as _165 from "../beezee/cointrunk/tx.rpc.msg";
import * as _264 from "./lcd";
import * as _265 from "./rpc.query";
import * as _266 from "./rpc.tx";
export namespace bze {
  export namespace burner {
    export const v1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._156,
      ..._158,
      ..._160,
      ..._162,
      ..._164
    };
  }
  export namespace cointrunk {
    export const v1 = { ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._157,
      ..._159,
      ..._161,
      ..._163,
      ..._165
    };
  }
  export const ClientFactory = { ..._264,
    ..._265,
    ..._266
  };
}