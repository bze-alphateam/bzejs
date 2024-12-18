"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/bze.cointrunk.v1.MsgAddArticle": {
        aminoType: "/bze.cointrunk.v1.MsgAddArticle",
        toAmino: function (_a) {
            var publisher = _a.publisher, title = _a.title, url = _a.url, picture = _a.picture;
            return {
                publisher: publisher,
                title: title,
                url: url,
                picture: picture
            };
        },
        fromAmino: function (_a) {
            var publisher = _a.publisher, title = _a.title, url = _a.url, picture = _a.picture;
            return {
                publisher: publisher,
                title: title,
                url: url,
                picture: picture
            };
        }
    },
    "/bze.cointrunk.v1.MsgPayPublisherRespect": {
        aminoType: "/bze.cointrunk.v1.MsgPayPublisherRespect",
        toAmino: function (_a) {
            var creator = _a.creator, address = _a.address, amount = _a.amount;
            return {
                creator: creator,
                address: address,
                amount: amount
            };
        },
        fromAmino: function (_a) {
            var creator = _a.creator, address = _a.address, amount = _a.amount;
            return {
                creator: creator,
                address: address,
                amount: amount
            };
        }
    }
};
