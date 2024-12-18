"use strict";
exports.__esModule = true;
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: "cosmos-sdk/MsgNFTSend",
        toAmino: function (_a) {
            var classId = _a.classId, id = _a.id, sender = _a.sender, receiver = _a.receiver;
            return {
                class_id: classId,
                id: id,
                sender: sender,
                receiver: receiver
            };
        },
        fromAmino: function (_a) {
            var class_id = _a.class_id, id = _a.id, sender = _a.sender, receiver = _a.receiver;
            return {
                classId: class_id,
                id: id,
                sender: sender,
                receiver: receiver
            };
        }
    }
};
