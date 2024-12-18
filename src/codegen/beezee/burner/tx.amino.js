"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/bze.burner.v1.MsgFundBurner": {
        aminoType: "/bze.burner.v1.MsgFundBurner",
        toAmino: function (_a) {
            var creator = _a.creator, amount = _a.amount;
            return {
                creator: creator,
                amount: amount
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, amount = _a.amount;
            return {
                creator: creator,
                amount: amount
            };
        }
    },
    "/bze.burner.v1.MsgStartRaffle": {
        aminoType: "/bze.burner.v1.MsgStartRaffle",
        toAmino: function (_a) {
            var creator = _a.creator, pot = _a.pot, duration = _a.duration, chances = _a.chances, ratio = _a.ratio, ticketPrice = _a.ticketPrice, denom = _a.denom;
            return {
                creator: creator,
                pot: pot,
                duration: duration,
                chances: chances,
                ratio: ratio,
                ticket_price: ticketPrice,
                denom: denom
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, pot = _a.pot, duration = _a.duration, chances = _a.chances, ratio = _a.ratio, ticket_price = _a.ticket_price, denom = _a.denom;
            return {
                creator: creator,
                pot: pot,
                duration: duration,
                chances: chances,
                ratio: ratio,
                ticketPrice: ticket_price,
                denom: denom
            };
        }
    },
    "/bze.burner.v1.MsgJoinRaffle": {
        aminoType: "/bze.burner.v1.MsgJoinRaffle",
        toAmino: function (_a) {
            var creator = _a.creator, denom = _a.denom;
            return {
                creator: creator,
                denom: denom
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, denom = _a.denom;
            return {
                creator: creator,
                denom: denom
            };
        }
    }
};
