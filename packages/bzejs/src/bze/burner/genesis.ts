//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsAmino, BurnedCoinsSDKType } from "./burned_coins";
import { Raffle, RaffleAmino, RaffleSDKType, RaffleWinner, RaffleWinnerAmino, RaffleWinnerSDKType, RaffleParticipant, RaffleParticipantAmino, RaffleParticipantSDKType } from "./raffle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the burner module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  burnedCoinsList: BurnedCoins[];
  raffleList: Raffle[];
  raffleWinnersList: RaffleWinner[];
  raffleParticipantsList: RaffleParticipant[];
  raffleParticipantCounter: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bze.burner.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the burner module's genesis state.
 * @name GenesisStateAmino
 * @package bze.burner
 * @see proto type: bze.burner.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  burned_coins_list?: BurnedCoinsAmino[];
  raffle_list?: RaffleAmino[];
  raffle_winners_list?: RaffleWinnerAmino[];
  raffle_participants_list?: RaffleParticipantAmino[];
  raffle_participant_counter: string;
}
export interface GenesisStateAminoMsg {
  type: "/bze.burner.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the burner module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  burned_coins_list: BurnedCoinsSDKType[];
  raffle_list: RaffleSDKType[];
  raffle_winners_list: RaffleWinnerSDKType[];
  raffle_participants_list: RaffleParticipantSDKType[];
  raffle_participant_counter: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    burnedCoinsList: [],
    raffleList: [],
    raffleWinnersList: [],
    raffleParticipantsList: [],
    raffleParticipantCounter: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/bze.burner.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.burnedCoinsList) {
      BurnedCoins.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.raffleList) {
      Raffle.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.raffleWinnersList) {
      RaffleWinner.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.raffleParticipantsList) {
      RaffleParticipant.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.raffleParticipantCounter !== BigInt(0)) {
      writer.uint32(48).uint64(message.raffleParticipantCounter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.burnedCoinsList.push(BurnedCoins.decode(reader, reader.uint32()));
          break;
        case 3:
          message.raffleList.push(Raffle.decode(reader, reader.uint32()));
          break;
        case 4:
          message.raffleWinnersList.push(RaffleWinner.decode(reader, reader.uint32()));
          break;
        case 5:
          message.raffleParticipantsList.push(RaffleParticipant.decode(reader, reader.uint32()));
          break;
        case 6:
          message.raffleParticipantCounter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.burnedCoinsList = object.burnedCoinsList?.map(e => BurnedCoins.fromPartial(e)) || [];
    message.raffleList = object.raffleList?.map(e => Raffle.fromPartial(e)) || [];
    message.raffleWinnersList = object.raffleWinnersList?.map(e => RaffleWinner.fromPartial(e)) || [];
    message.raffleParticipantsList = object.raffleParticipantsList?.map(e => RaffleParticipant.fromPartial(e)) || [];
    message.raffleParticipantCounter = object.raffleParticipantCounter !== undefined && object.raffleParticipantCounter !== null ? BigInt(object.raffleParticipantCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.burnedCoinsList = object.burned_coins_list?.map(e => BurnedCoins.fromAmino(e)) || [];
    message.raffleList = object.raffle_list?.map(e => Raffle.fromAmino(e)) || [];
    message.raffleWinnersList = object.raffle_winners_list?.map(e => RaffleWinner.fromAmino(e)) || [];
    message.raffleParticipantsList = object.raffle_participants_list?.map(e => RaffleParticipant.fromAmino(e)) || [];
    if (object.raffle_participant_counter !== undefined && object.raffle_participant_counter !== null) {
      message.raffleParticipantCounter = BigInt(object.raffle_participant_counter);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.burnedCoinsList) {
      obj.burned_coins_list = message.burnedCoinsList.map(e => e ? BurnedCoins.toAmino(e) : undefined);
    } else {
      obj.burned_coins_list = message.burnedCoinsList;
    }
    if (message.raffleList) {
      obj.raffle_list = message.raffleList.map(e => e ? Raffle.toAmino(e) : undefined);
    } else {
      obj.raffle_list = message.raffleList;
    }
    if (message.raffleWinnersList) {
      obj.raffle_winners_list = message.raffleWinnersList.map(e => e ? RaffleWinner.toAmino(e) : undefined);
    } else {
      obj.raffle_winners_list = message.raffleWinnersList;
    }
    if (message.raffleParticipantsList) {
      obj.raffle_participants_list = message.raffleParticipantsList.map(e => e ? RaffleParticipant.toAmino(e) : undefined);
    } else {
      obj.raffle_participants_list = message.raffleParticipantsList;
    }
    obj.raffle_participant_counter = message.raffleParticipantCounter ? message.raffleParticipantCounter?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/bze.burner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};