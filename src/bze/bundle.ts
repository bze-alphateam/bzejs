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
import * as _14 from "./dao/events";
import * as _15 from "./dao/genesis";
import * as _16 from "./dao/params";
import * as _17 from "./dao/query";
import * as _18 from "./dao/store";
import * as _19 from "./dao/tx";
import * as _20 from "./epochs/epoch";
import * as _21 from "./epochs/events";
import * as _22 from "./epochs/genesis";
import * as _23 from "./epochs/query";
import * as _24 from "./guardian/module/module";
import * as _25 from "./guardian/v1/events";
import * as _26 from "./guardian/v1/genesis";
import * as _27 from "./guardian/v1/params";
import * as _28 from "./guardian/v1/query";
import * as _29 from "./guardian/v1/tx";
import * as _30 from "./rewards/events";
import * as _31 from "./rewards/genesis";
import * as _32 from "./rewards/params";
import * as _33 from "./rewards/query";
import * as _34 from "./rewards/store";
import * as _35 from "./rewards/tx";
import * as _36 from "./tokenfactory/denom_authority";
import * as _37 from "./tokenfactory/denom_branding";
import * as _38 from "./tokenfactory/denom_config";
import * as _39 from "./tokenfactory/events";
import * as _40 from "./tokenfactory/genesis";
import * as _41 from "./tokenfactory/params";
import * as _42 from "./tokenfactory/query";
import * as _43 from "./tokenfactory/tx";
import * as _44 from "./tradebin/events";
import * as _45 from "./tradebin/genesis";
import * as _46 from "./tradebin/params";
import * as _47 from "./tradebin/query";
import * as _48 from "./tradebin/store";
import * as _49 from "./tradebin/tx";
import * as _50 from "./txfeecollector/events";
import * as _51 from "./txfeecollector/genesis";
import * as _52 from "./txfeecollector/params";
import * as _53 from "./txfeecollector/query";
import * as _54 from "./txfeecollector/tx";
import * as _236 from "./burner/tx.registry";
import * as _237 from "./cointrunk/tx.registry";
import * as _238 from "./dao/tx.registry";
import * as _239 from "./guardian/v1/tx.registry";
import * as _240 from "./rewards/tx.registry";
import * as _241 from "./tokenfactory/tx.registry";
import * as _242 from "./tradebin/tx.registry";
import * as _243 from "./txfeecollector/tx.registry";
import * as _244 from "./burner/query.lcd";
import * as _245 from "./cointrunk/query.lcd";
import * as _246 from "./dao/query.lcd";
import * as _247 from "./epochs/query.lcd";
import * as _248 from "./guardian/v1/query.lcd";
import * as _249 from "./rewards/query.lcd";
import * as _250 from "./tokenfactory/query.lcd";
import * as _251 from "./tradebin/query.lcd";
import * as _252 from "./txfeecollector/query.lcd";
import * as _253 from "./burner/query.rpc.func";
import * as _254 from "./cointrunk/query.rpc.func";
import * as _255 from "./dao/query.rpc.func";
import * as _256 from "./epochs/query.rpc.func";
import * as _257 from "./guardian/v1/query.rpc.func";
import * as _258 from "./rewards/query.rpc.func";
import * as _259 from "./tokenfactory/query.rpc.func";
import * as _260 from "./tradebin/query.rpc.func";
import * as _261 from "./txfeecollector/query.rpc.func";
import * as _262 from "./burner/tx.rpc.func";
import * as _263 from "./cointrunk/tx.rpc.func";
import * as _264 from "./dao/tx.rpc.func";
import * as _265 from "./guardian/v1/tx.rpc.func";
import * as _266 from "./rewards/tx.rpc.func";
import * as _267 from "./tokenfactory/tx.rpc.func";
import * as _268 from "./tradebin/tx.rpc.func";
import * as _269 from "./txfeecollector/tx.rpc.func";
import * as _381 from "./lcd";
export namespace bze {
  export const burner = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._236,
    ..._244,
    ..._253,
    ..._262
  };
  export const cointrunk = {
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._237,
    ..._245,
    ..._254,
    ..._263
  };
  export const dao = {
    ..._14,
    ..._15,
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._238,
    ..._246,
    ..._255,
    ..._264
  };
  export const epochs = {
    ..._20,
    ..._21,
    ..._22,
    ..._23,
    ..._247,
    ..._256
  };
  export namespace guardian {
    export const module = {
      ..._24
    };
    export const v1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._239,
      ..._248,
      ..._257,
      ..._265
    };
  }
  export const rewards = {
    ..._30,
    ..._31,
    ..._32,
    ..._33,
    ..._34,
    ..._35,
    ..._240,
    ..._249,
    ..._258,
    ..._266
  };
  export const tokenfactory = {
    ..._36,
    ..._37,
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._42,
    ..._43,
    ..._241,
    ..._250,
    ..._259,
    ..._267
  };
  export const tradebin = {
    ..._44,
    ..._45,
    ..._46,
    ..._47,
    ..._48,
    ..._49,
    ..._242,
    ..._251,
    ..._260,
    ..._268
  };
  export const txfeecollector = {
    ..._50,
    ..._51,
    ..._52,
    ..._53,
    ..._54,
    ..._243,
    ..._252,
    ..._261,
    ..._269
  };
  export const ClientFactory = {
    ..._381
  };
}