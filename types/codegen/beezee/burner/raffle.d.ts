import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface Raffle {
    pot: string;
    duration: Long;
    chances: Long;
    ratio: string;
    endAt: Long;
    winners: Long;
    ticketPrice: string;
    denom: string;
    totalWon: string;
}
export interface RaffleSDKType {
    pot: string;
    duration: Long;
    chances: Long;
    ratio: string;
    end_at: Long;
    winners: Long;
    ticket_price: string;
    denom: string;
    total_won: string;
}
export interface RaffleDeleteHook {
    denom: string;
    endAt: Long;
}
export interface RaffleDeleteHookSDKType {
    denom: string;
    end_at: Long;
}
export interface RaffleWinner {
    index: string;
    denom: string;
    amount: string;
    winner: string;
}
export interface RaffleWinnerSDKType {
    index: string;
    denom: string;
    amount: string;
    winner: string;
}
export interface RaffleParticipant {
    index: Long;
    denom: string;
    participant: string;
    executeAt: Long;
}
export interface RaffleParticipantSDKType {
    index: Long;
    denom: string;
    participant: string;
    execute_at: Long;
}
export declare const Raffle: {
    encode(message: Raffle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Raffle;
    fromPartial(object: DeepPartial<Raffle>): Raffle;
};
export declare const RaffleDeleteHook: {
    encode(message: RaffleDeleteHook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaffleDeleteHook;
    fromPartial(object: DeepPartial<RaffleDeleteHook>): RaffleDeleteHook;
};
export declare const RaffleWinner: {
    encode(message: RaffleWinner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaffleWinner;
    fromPartial(object: DeepPartial<RaffleWinner>): RaffleWinner;
};
export declare const RaffleParticipant: {
    encode(message: RaffleParticipant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RaffleParticipant;
    fromPartial(object: DeepPartial<RaffleParticipant>): RaffleParticipant;
};
