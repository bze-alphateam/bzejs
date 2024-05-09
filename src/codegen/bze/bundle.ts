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
import * as _19 from "../beezee/epochs/events";
import * as _20 from "../beezee/epochs/genesis";
import * as _21 from "../beezee/epochs/query";
import * as _22 from "../beezee/rewards/events";
import * as _23 from "../beezee/rewards/genesis";
import * as _24 from "../beezee/rewards/gov";
import * as _25 from "../beezee/rewards/params";
import * as _26 from "../beezee/rewards/query";
import * as _27 from "../beezee/rewards/staking_reward_participant";
import * as _28 from "../beezee/rewards/staking_reward";
import * as _29 from "../beezee/rewards/trading_reward";
import * as _30 from "../beezee/rewards/tx";
import * as _31 from "../beezee/tokenfactory/denom_authority";
import * as _32 from "../beezee/tokenfactory/genesis";
import * as _33 from "../beezee/tokenfactory/params";
import * as _34 from "../beezee/tokenfactory/query";
import * as _35 from "../beezee/tokenfactory/tx";
import * as _36 from "../beezee/tradebin/events";
import * as _37 from "../beezee/tradebin/genesis";
import * as _38 from "../beezee/tradebin/market";
import * as _39 from "../beezee/tradebin/order";
import * as _40 from "../beezee/tradebin/params";
import * as _41 from "../beezee/tradebin/query";
import * as _42 from "../beezee/tradebin/queue_message";
import * as _43 from "../beezee/tradebin/tx";
import * as _181 from "../beezee/burner/tx.amino";
import * as _182 from "../beezee/cointrunk/tx.amino";
import * as _183 from "../beezee/rewards/tx.amino";
import * as _184 from "../beezee/tokenfactory/tx.amino";
import * as _185 from "../beezee/tradebin/tx.amino";
import * as _186 from "../beezee/burner/tx.registry";
import * as _187 from "../beezee/cointrunk/tx.registry";
import * as _188 from "../beezee/rewards/tx.registry";
import * as _189 from "../beezee/tokenfactory/tx.registry";
import * as _190 from "../beezee/tradebin/tx.registry";
import * as _191 from "../beezee/burner/query.lcd";
import * as _192 from "../beezee/cointrunk/query.lcd";
import * as _193 from "../beezee/epochs/query.lcd";
import * as _194 from "../beezee/rewards/query.lcd";
import * as _195 from "../beezee/tokenfactory/query.lcd";
import * as _196 from "../beezee/tradebin/query.lcd";
import * as _197 from "../beezee/burner/query.rpc.Query";
import * as _198 from "../beezee/cointrunk/query.rpc.Query";
import * as _199 from "../beezee/epochs/query.rpc.Query";
import * as _200 from "../beezee/rewards/query.rpc.Query";
import * as _201 from "../beezee/tokenfactory/query.rpc.Query";
import * as _202 from "../beezee/tradebin/query.rpc.Query";
import * as _203 from "../beezee/burner/tx.rpc.msg";
import * as _204 from "../beezee/cointrunk/tx.rpc.msg";
import * as _205 from "../beezee/rewards/tx.rpc.msg";
import * as _206 from "../beezee/tokenfactory/tx.rpc.msg";
import * as _207 from "../beezee/tradebin/tx.rpc.msg";
import * as _306 from "./lcd";
import * as _307 from "./rpc.query";
import * as _308 from "./rpc.tx";
export namespace bze {
  export namespace burner {
    export const v1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._181,
      ..._186,
      ..._191,
      ..._197,
      ..._203
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
      ..._182,
      ..._187,
      ..._192,
      ..._198,
      ..._204
    };
  }
  export namespace epochs {
    export const v1 = { ..._19,
      ..._20,
      ..._21,
      ..._193,
      ..._199
    };
  }
  export namespace rewards {
    export const v1 = { ..._22
    };
  }
  export namespace v1 {
    export const rewards = { ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._183,
      ..._188,
      ..._194,
      ..._200,
      ..._205
    };
  }
  export namespace tokenfactory {
    export const v1 = { ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._184,
      ..._189,
      ..._195,
      ..._201,
      ..._206
    };
  }
  export namespace tradebin {
    export const v1 = { ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._185,
      ..._190,
      ..._196,
      ..._202,
      ..._207
    };
  }
  export const ClientFactory = { ..._306,
    ..._307,
    ..._308
  };
}