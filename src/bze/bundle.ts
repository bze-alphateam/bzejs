//@ts-nocheck
import * as _1 from "./burner/burned_coins";
import * as _2 from "./burner/events";
import * as _3 from "./burner/genesis";
import * as _4 from "./burner/params";
import * as _5 from "./burner/query";
import * as _6 from "./burner/raffle";
import * as _7 from "./burner/tx";
import * as _8 from "./cointrunk/events";
import * as _9 from "./cointrunk/genesis";
import * as _10 from "./cointrunk/params";
import * as _11 from "./cointrunk/query";
import * as _12 from "./cointrunk/store";
import * as _13 from "./cointrunk/tx";
import * as _14 from "./epochs/epoch";
import * as _15 from "./epochs/events";
import * as _16 from "./epochs/genesis";
import * as _17 from "./epochs/query";
import * as _18 from "./rewards/events";
import * as _19 from "./rewards/genesis";
import * as _20 from "./rewards/params";
import * as _21 from "./rewards/query";
import * as _22 from "./rewards/store";
import * as _23 from "./rewards/tx";
import * as _24 from "./tokenfactory/denom_authority";
import * as _25 from "./tokenfactory/denom_branding";
import * as _26 from "./tokenfactory/events";
import * as _27 from "./tokenfactory/genesis";
import * as _28 from "./tokenfactory/params";
import * as _29 from "./tokenfactory/query";
import * as _30 from "./tokenfactory/tx";
import * as _31 from "./tradebin/events";
import * as _32 from "./tradebin/genesis";
import * as _33 from "./tradebin/params";
import * as _34 from "./tradebin/query";
import * as _35 from "./tradebin/store";
import * as _36 from "./tradebin/tx";
import * as _37 from "./txfeecollector/events";
import * as _38 from "./txfeecollector/genesis";
import * as _39 from "./txfeecollector/params";
import * as _40 from "./txfeecollector/query";
import * as _41 from "./txfeecollector/tx";
import * as _230 from "./burner/tx.registry";
import * as _231 from "./cointrunk/tx.registry";
import * as _232 from "./rewards/tx.registry";
import * as _233 from "./tokenfactory/tx.registry";
import * as _234 from "./tradebin/tx.registry";
import * as _235 from "./txfeecollector/tx.registry";
import * as _236 from "./burner/query.lcd";
import * as _237 from "./cointrunk/query.lcd";
import * as _238 from "./epochs/query.lcd";
import * as _239 from "./rewards/query.lcd";
import * as _240 from "./tokenfactory/query.lcd";
import * as _241 from "./tradebin/query.lcd";
import * as _242 from "./txfeecollector/query.lcd";
import * as _243 from "./burner/query.rpc.func";
import * as _244 from "./cointrunk/query.rpc.func";
import * as _245 from "./epochs/query.rpc.func";
import * as _246 from "./rewards/query.rpc.func";
import * as _247 from "./tokenfactory/query.rpc.func";
import * as _248 from "./tradebin/query.rpc.func";
import * as _249 from "./txfeecollector/query.rpc.func";
import * as _250 from "./burner/tx.rpc.func";
import * as _251 from "./cointrunk/tx.rpc.func";
import * as _252 from "./rewards/tx.rpc.func";
import * as _253 from "./tokenfactory/tx.rpc.func";
import * as _254 from "./tradebin/tx.rpc.func";
import * as _255 from "./txfeecollector/tx.rpc.func";
import * as _372 from "./lcd";
export namespace bze {
  export const burner = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._230,
    ..._236,
    ..._243,
    ..._250
  };
  export const cointrunk = {
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._231,
    ..._237,
    ..._244,
    ..._251
  };
  export const epochs = {
    ..._14,
    ..._15,
    ..._16,
    ..._17,
    ..._238,
    ..._245
  };
  export const rewards = {
    ..._18,
    ..._19,
    ..._20,
    ..._21,
    ..._22,
    ..._23,
    ..._232,
    ..._239,
    ..._246,
    ..._252
  };
  export const tokenfactory = {
    ..._24,
    ..._25,
    ..._26,
    ..._27,
    ..._28,
    ..._29,
    ..._30,
    ..._233,
    ..._240,
    ..._247,
    ..._253
  };
  export const tradebin = {
    ..._31,
    ..._32,
    ..._33,
    ..._34,
    ..._35,
    ..._36,
    ..._234,
    ..._241,
    ..._248,
    ..._254
  };
  export const txfeecollector = {
    ..._37,
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._235,
    ..._242,
    ..._249,
    ..._255
  };
  export const ClientFactory = {
    ..._372
  };
}