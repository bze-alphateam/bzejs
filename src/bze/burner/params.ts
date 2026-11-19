//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@interchainjs/math";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.burner
 * @see proto type: bze.burner.Params
 */
export interface Params {
  periodicBurningWeeks: bigint;
  /**
   * ibc_move_max_reserve_ratio caps one MsgMoveIbcLockedCoins: it moves at most this share of the pool's reserve of
   * the IBC denom. Valid in (0, 1].
   */
  ibcMoveMaxReserveRatio: string;
  /**
   * ibc_move_cooldown_blocks is the number of blocks that must pass after a successful MsgMoveIbcLockedCoins of a
   * denom before that denom can be moved again. At least 1.
   */
  ibcMoveCooldownBlocks: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/bze.burner.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package bze.burner
 * @see proto type: bze.burner.Params
 */
export interface ParamsAmino {
  periodic_burning_weeks?: string;
  /**
   * ibc_move_max_reserve_ratio caps one MsgMoveIbcLockedCoins: it moves at most this share of the pool's reserve of
   * the IBC denom. Valid in (0, 1].
   */
  ibc_move_max_reserve_ratio: string;
  /**
   * ibc_move_cooldown_blocks is the number of blocks that must pass after a successful MsgMoveIbcLockedCoins of a
   * denom before that denom can be moved again. At least 1.
   */
  ibc_move_cooldown_blocks: string;
}
export interface ParamsAminoMsg {
  type: "bze/x/burner/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsSDKType
 * @package bze.burner
 * @see proto type: bze.burner.Params
 */
export interface ParamsSDKType {
  periodic_burning_weeks: bigint;
  ibc_move_max_reserve_ratio: string;
  ibc_move_cooldown_blocks: bigint;
}
function createBaseParams(): Params {
  return {
    periodicBurningWeeks: BigInt(0),
    ibcMoveMaxReserveRatio: "",
    ibcMoveCooldownBlocks: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package bze.burner
 * @see proto type: bze.burner.Params
 */
export const Params = {
  typeUrl: "/bze.burner.Params",
  aminoType: "bze/x/burner/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.periodicBurningWeeks === "bigint" && typeof o.ibcMoveMaxReserveRatio === "string" && typeof o.ibcMoveCooldownBlocks === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.periodic_burning_weeks === "bigint" && typeof o.ibc_move_max_reserve_ratio === "string" && typeof o.ibc_move_cooldown_blocks === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.periodic_burning_weeks === "bigint" && typeof o.ibc_move_max_reserve_ratio === "string" && typeof o.ibc_move_cooldown_blocks === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.periodicBurningWeeks !== BigInt(0)) {
      writer.uint32(8).int64(message.periodicBurningWeeks);
    }
    if (message.ibcMoveMaxReserveRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.ibcMoveMaxReserveRatio, 18).atomics);
    }
    if (message.ibcMoveCooldownBlocks !== BigInt(0)) {
      writer.uint32(24).uint64(message.ibcMoveCooldownBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periodicBurningWeeks = reader.int64();
          break;
        case 2:
          message.ibcMoveMaxReserveRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.ibcMoveCooldownBlocks = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.periodicBurningWeeks = object.periodicBurningWeeks !== undefined && object.periodicBurningWeeks !== null ? BigInt(object.periodicBurningWeeks.toString()) : BigInt(0);
    message.ibcMoveMaxReserveRatio = object.ibcMoveMaxReserveRatio ?? "";
    message.ibcMoveCooldownBlocks = object.ibcMoveCooldownBlocks !== undefined && object.ibcMoveCooldownBlocks !== null ? BigInt(object.ibcMoveCooldownBlocks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.periodic_burning_weeks !== undefined && object.periodic_burning_weeks !== null) {
      message.periodicBurningWeeks = BigInt(object.periodic_burning_weeks);
    }
    if (object.ibc_move_max_reserve_ratio !== undefined && object.ibc_move_max_reserve_ratio !== null) {
      message.ibcMoveMaxReserveRatio = object.ibc_move_max_reserve_ratio;
    }
    if (object.ibc_move_cooldown_blocks !== undefined && object.ibc_move_cooldown_blocks !== null) {
      message.ibcMoveCooldownBlocks = BigInt(object.ibc_move_cooldown_blocks);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.periodic_burning_weeks = message.periodicBurningWeeks !== BigInt(0) ? message.periodicBurningWeeks?.toString() : undefined;
    obj.ibc_move_max_reserve_ratio = Decimal.fromUserInput(message.ibcMoveMaxReserveRatio, 18).atomics ?? "";
    obj.ibc_move_cooldown_blocks = message.ibcMoveCooldownBlocks ? message.ibcMoveCooldownBlocks?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "bze/x/burner/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bze.burner.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};