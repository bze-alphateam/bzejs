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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
