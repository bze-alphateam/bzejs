import { Params, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsSDKType } from "./burned_coins";
import { Raffle, RaffleSDKType, RaffleWinner, RaffleWinnerSDKType, RaffleParticipant, RaffleParticipantSDKType } from "./raffle";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** GenesisState defines the burner module's genesis state. */

export interface GenesisState {
  params?: Params;
  burnedCoinsList: BurnedCoins[];
  raffleList: Raffle[];
  raffleWinnersList: RaffleWinner[];
  raffleParticipantsList: RaffleParticipant[];
  raffleParticipantCounter: Long;
}
/** GenesisState defines the burner module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  burned_coins_list: BurnedCoinsSDKType[];
  raffle_list: RaffleSDKType[];
  raffle_winners_list: RaffleWinnerSDKType[];
  raffle_participants_list: RaffleParticipantSDKType[];
  raffle_participant_counter: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    burnedCoinsList: [],
    raffleList: [],
    raffleWinnersList: [],
    raffleParticipantsList: [],
    raffleParticipantCounter: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.raffleParticipantCounter.isZero()) {
      writer.uint32(48).uint64(message.raffleParticipantCounter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.raffleParticipantCounter = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.burnedCoinsList = object.burnedCoinsList?.map(e => BurnedCoins.fromPartial(e)) || [];
    message.raffleList = object.raffleList?.map(e => Raffle.fromPartial(e)) || [];
    message.raffleWinnersList = object.raffleWinnersList?.map(e => RaffleWinner.fromPartial(e)) || [];
    message.raffleParticipantsList = object.raffleParticipantsList?.map(e => RaffleParticipant.fromPartial(e)) || [];
    message.raffleParticipantCounter = object.raffleParticipantCounter !== undefined && object.raffleParticipantCounter !== null ? Long.fromValue(object.raffleParticipantCounter) : Long.UZERO;
    return message;
  }

};