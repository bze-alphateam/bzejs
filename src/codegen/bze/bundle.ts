import * as _1 from "../beezee/burner/burn_coins_proposal";
import * as _2 from "../beezee/burner/burned_coins";
import * as _3 from "../beezee/burner/events";
import * as _4 from "../beezee/burner/genesis";
import * as _5 from "../beezee/burner/params";
import * as _6 from "../beezee/burner/query";
import * as _7 from "../beezee/burner/raffle";
import * as _8 from "../beezee/burner/tx";
import * as _9 from "../beezee/cointrunk/accepted_domain_proposal";
import * as _10 from "../beezee/cointrunk/accepted_domain";
import * as _11 from "../beezee/cointrunk/anon_articles_counter";
import * as _12 from "../beezee/cointrunk/article";
import * as _13 from "../beezee/cointrunk/events";
import * as _14 from "../beezee/cointrunk/genesis";
import * as _15 from "../beezee/cointrunk/params";
import * as _16 from "../beezee/cointrunk/publisher_proposal";
import * as _17 from "../beezee/cointrunk/publisher";
import * as _18 from "../beezee/cointrunk/query";
import * as _19 from "../beezee/cointrunk/tx";
import * as _20 from "../beezee/epochs/events";
import * as _21 from "../beezee/epochs/genesis";
import * as _22 from "../beezee/epochs/query";
import * as _23 from "../beezee/rewards/events";
import * as _24 from "../beezee/rewards/genesis";
import * as _25 from "../beezee/rewards/gov";
import * as _26 from "../beezee/rewards/params";
import * as _27 from "../beezee/rewards/query";
import * as _28 from "../beezee/rewards/staking_reward_participant";
import * as _29 from "../beezee/rewards/staking_reward";
import * as _30 from "../beezee/rewards/trading_reward";
import * as _31 from "../beezee/rewards/tx";
import * as _32 from "../beezee/tokenfactory/denom_authority";
import * as _33 from "../beezee/tokenfactory/genesis";
import * as _34 from "../beezee/tokenfactory/params";
import * as _35 from "../beezee/tokenfactory/query";
import * as _36 from "../beezee/tokenfactory/tx";
import * as _37 from "../beezee/tradebin/events";
import * as _38 from "../beezee/tradebin/genesis";
import * as _39 from "../beezee/tradebin/market";
import * as _40 from "../beezee/tradebin/order";
import * as _41 from "../beezee/tradebin/params";
import * as _42 from "../beezee/tradebin/query";
import * as _43 from "../beezee/tradebin/queue_message";
import * as _44 from "../beezee/tradebin/tx";
import * as _182 from "../beezee/burner/tx.amino";
import * as _183 from "../beezee/cointrunk/tx.amino";
import * as _184 from "../beezee/rewards/tx.amino";
import * as _185 from "../beezee/tokenfactory/tx.amino";
import * as _186 from "../beezee/tradebin/tx.amino";
import * as _187 from "../beezee/burner/tx.registry";
import * as _188 from "../beezee/cointrunk/tx.registry";
import * as _189 from "../beezee/rewards/tx.registry";
import * as _190 from "../beezee/tokenfactory/tx.registry";
import * as _191 from "../beezee/tradebin/tx.registry";
import * as _192 from "../beezee/burner/query.lcd";
import * as _193 from "../beezee/cointrunk/query.lcd";
import * as _194 from "../beezee/epochs/query.lcd";
import * as _195 from "../beezee/rewards/query.lcd";
import * as _196 from "../beezee/tokenfactory/query.lcd";
import * as _197 from "../beezee/tradebin/query.lcd";
import * as _198 from "../beezee/burner/query.rpc.Query";
import * as _199 from "../beezee/cointrunk/query.rpc.Query";
import * as _200 from "../beezee/epochs/query.rpc.Query";
import * as _201 from "../beezee/rewards/query.rpc.Query";
import * as _202 from "../beezee/tokenfactory/query.rpc.Query";
import * as _203 from "../beezee/tradebin/query.rpc.Query";
import * as _204 from "../beezee/burner/tx.rpc.msg";
import * as _205 from "../beezee/cointrunk/tx.rpc.msg";
import * as _206 from "../beezee/rewards/tx.rpc.msg";
import * as _207 from "../beezee/tokenfactory/tx.rpc.msg";
import * as _208 from "../beezee/tradebin/tx.rpc.msg";
import * as _307 from "./lcd";
import * as _308 from "./rpc.query";
import * as _309 from "./rpc.tx";
export namespace bze {
  export namespace burner {
    export const v1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._182,
      ..._187,
      ..._192,
      ..._198,
      ..._204
    };
  }
  export namespace cointrunk {
    export const v1 = { ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._183,
      ..._188,
      ..._193,
      ..._199,
      ..._205
    };
  }
  export namespace epochs {
    export const v1 = { ..._20,
      ..._21,
      ..._22,
      ..._194,
      ..._200
    };
  }
  export namespace rewards {
    export const v1 = { ..._23
    };
  }
  export namespace v1 {
    export const rewards = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._184,
      ..._189,
      ..._195,
      ..._201,
      ..._206
    };
  }
  export namespace tokenfactory {
    export const v1 = { ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._185,
      ..._190,
      ..._196,
      ..._202,
      ..._207
    };
  }
  export namespace tradebin {
    export const v1 = { ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._186,
      ..._191,
      ..._197,
      ..._203,
      ..._208
    };
  }
  export const ClientFactory = { ..._307,
    ..._308,
    ..._309
  };
}