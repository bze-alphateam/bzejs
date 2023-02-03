import { Params, ParamsSDKType } from "./params";
import { BurnedCoins, BurnedCoinsSDKType } from "./burned_coins";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the burner module's genesis state. */
export interface GenesisState {
    params?: Params;
    burnedCoinsList: BurnedCoins[];
}
/** GenesisState defines the burner module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    burned_coins_list: BurnedCoinsSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
