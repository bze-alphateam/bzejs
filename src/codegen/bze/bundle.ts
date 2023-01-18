import * as _0 from "../beezee/burner/burn_coins_proposal";
import * as _1 from "../beezee/burner/burned_coins";
import * as _2 from "../beezee/burner/events";
import * as _3 from "../beezee/burner/genesis";
import * as _4 from "../beezee/burner/params";
import * as _5 from "../beezee/burner/query";
import * as _6 from "../beezee/burner/tx";
import * as _7 from "../beezee/cointrunk/accepted_domain_proposal";
import * as _8 from "../beezee/cointrunk/accepted_domain";
import * as _9 from "../beezee/cointrunk/anon_articles_counter";
import * as _10 from "../beezee/cointrunk/article";
import * as _11 from "../beezee/cointrunk/events";
import * as _12 from "../beezee/cointrunk/genesis";
import * as _13 from "../beezee/cointrunk/params";
import * as _14 from "../beezee/cointrunk/publisher_proposal";
import * as _15 from "../beezee/cointrunk/publisher";
import * as _16 from "../beezee/cointrunk/query";
import * as _17 from "../beezee/cointrunk/tx";
import * as _130 from "../beezee/burner/query.lcd";
import * as _131 from "../beezee/cointrunk/query.lcd";
import * as _132 from "../beezee/burner/query.rpc.Query";
import * as _133 from "../beezee/cointrunk/query.rpc.Query";
import * as _134 from "../beezee/burner/tx.rpc.msg";
import * as _135 from "../beezee/cointrunk/tx.rpc.msg";
import * as _185 from "./lcd";
import * as _186 from "./rpc.query";
import * as _187 from "./rpc.tx";
export namespace bze {
  export namespace burner {
    export const v1 = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._130,
      ..._132,
      ..._134
    };
  }
  export namespace cointrunk {
    export const v1 = { ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._131,
      ..._133,
      ..._135
    };
  }
  export const ClientFactory = { ..._185,
    ..._186,
    ..._187
  };
}