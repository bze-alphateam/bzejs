"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.ibc = void 0;
var _147 = __importStar(require("./applications/transfer/v1/genesis"));
var _148 = __importStar(require("./applications/transfer/v1/query"));
var _149 = __importStar(require("./applications/transfer/v1/transfer"));
var _150 = __importStar(require("./applications/transfer/v1/tx"));
var _151 = __importStar(require("./applications/transfer/v2/packet"));
var _152 = __importStar(require("./core/channel/v1/channel"));
var _153 = __importStar(require("./core/channel/v1/genesis"));
var _154 = __importStar(require("./core/channel/v1/query"));
var _155 = __importStar(require("./core/channel/v1/tx"));
var _156 = __importStar(require("./core/client/v1/client"));
var _157 = __importStar(require("./core/client/v1/genesis"));
var _158 = __importStar(require("./core/client/v1/query"));
var _159 = __importStar(require("./core/client/v1/tx"));
var _160 = __importStar(require("./core/commitment/v1/commitment"));
var _161 = __importStar(require("./core/connection/v1/connection"));
var _162 = __importStar(require("./core/connection/v1/genesis"));
var _163 = __importStar(require("./core/connection/v1/query"));
var _164 = __importStar(require("./core/connection/v1/tx"));
var _165 = __importStar(require("./core/port/v1/query"));
var _166 = __importStar(require("./core/types/v1/genesis"));
var _167 = __importStar(require("./lightclients/localhost/v1/localhost"));
var _168 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
var _169 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
var _170 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
var _286 = __importStar(require("./applications/transfer/v1/tx.amino"));
var _287 = __importStar(require("./core/channel/v1/tx.amino"));
var _288 = __importStar(require("./core/client/v1/tx.amino"));
var _289 = __importStar(require("./core/connection/v1/tx.amino"));
var _290 = __importStar(require("./applications/transfer/v1/tx.registry"));
var _291 = __importStar(require("./core/channel/v1/tx.registry"));
var _292 = __importStar(require("./core/client/v1/tx.registry"));
var _293 = __importStar(require("./core/connection/v1/tx.registry"));
var _294 = __importStar(require("./applications/transfer/v1/query.lcd"));
var _295 = __importStar(require("./core/channel/v1/query.lcd"));
var _296 = __importStar(require("./core/client/v1/query.lcd"));
var _297 = __importStar(require("./core/connection/v1/query.lcd"));
var _298 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
var _299 = __importStar(require("./core/channel/v1/query.rpc.Query"));
var _300 = __importStar(require("./core/client/v1/query.rpc.Query"));
var _301 = __importStar(require("./core/connection/v1/query.rpc.Query"));
var _302 = __importStar(require("./core/port/v1/query.rpc.Query"));
var _303 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
var _304 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
var _305 = __importStar(require("./core/client/v1/tx.rpc.msg"));
var _306 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
var _313 = __importStar(require("./lcd"));
var _314 = __importStar(require("./rpc.query"));
var _315 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    var applications;
    (function (applications) {
        var transfer;
        (function (transfer) {
            transfer.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _147), _148), _149), _150), _286), _290), _294), _298), _303);
            transfer.v2 = __assign({}, _151);
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    var core;
    (function (core) {
        var channel;
        (function (channel) {
            channel.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _152), _153), _154), _155), _287), _291), _295), _299), _304);
        })(channel = core.channel || (core.channel = {}));
        var client;
        (function (client) {
            client.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _156), _157), _158), _159), _288), _292), _296), _300), _305);
        })(client = core.client || (core.client = {}));
        var commitment;
        (function (commitment) {
            commitment.v1 = __assign({}, _160);
        })(commitment = core.commitment || (core.commitment = {}));
        var connection;
        (function (connection) {
            connection.v1 = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _161), _162), _163), _164), _289), _293), _297), _301), _306);
        })(connection = core.connection || (core.connection = {}));
        var port;
        (function (port) {
            port.v1 = __assign(__assign({}, _165), _302);
        })(port = core.port || (core.port = {}));
        var types;
        (function (types) {
            types.v1 = __assign({}, _166);
        })(types = core.types || (core.types = {}));
    })(core = ibc.core || (ibc.core = {}));
    var lightclients;
    (function (lightclients) {
        var localhost;
        (function (localhost) {
            localhost.v1 = __assign({}, _167);
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        var solomachine;
        (function (solomachine) {
            solomachine.v1 = __assign({}, _168);
            solomachine.v2 = __assign({}, _169);
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        var tendermint;
        (function (tendermint) {
            tendermint.v1 = __assign({}, _170);
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = __assign(__assign(__assign({}, _313), _314), _315);
})(ibc = exports.ibc || (exports.ibc = {}));
