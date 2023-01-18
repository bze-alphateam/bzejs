import * as _119 from "./abci/types";
import * as _120 from "./crypto/keys";
import * as _121 from "./crypto/proof";
import * as _122 from "./libs/bits/types";
import * as _123 from "./p2p/types";
import * as _124 from "./types/block";
import * as _125 from "./types/evidence";
import * as _126 from "./types/params";
import * as _127 from "./types/types";
import * as _128 from "./types/validator";
import * as _129 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _119.CheckTxType;
        checkTxTypeToJSON(object: _119.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _119.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _119.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _119.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _119.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _119.EvidenceType;
        evidenceTypeToJSON(object: _119.EvidenceType): string;
        CheckTxType: typeof _119.CheckTxType;
        CheckTxTypeSDKType: typeof _119.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _119.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _119.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _119.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _119.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _119.EvidenceType;
        EvidenceTypeSDKType: typeof _119.EvidenceTypeSDKType;
        Request: {
            encode(message: _119.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Request;
            fromJSON(object: any): _119.Request;
            toJSON(message: _119.Request): unknown;
            fromPartial(object: Partial<_119.Request>): _119.Request;
        };
        RequestEcho: {
            encode(message: _119.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestEcho;
            fromJSON(object: any): _119.RequestEcho;
            toJSON(message: _119.RequestEcho): unknown;
            fromPartial(object: Partial<_119.RequestEcho>): _119.RequestEcho;
        };
        RequestFlush: {
            encode(_: _119.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestFlush;
            fromJSON(_: any): _119.RequestFlush;
            toJSON(_: _119.RequestFlush): unknown;
            fromPartial(_: Partial<_119.RequestFlush>): _119.RequestFlush;
        };
        RequestInfo: {
            encode(message: _119.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestInfo;
            fromJSON(object: any): _119.RequestInfo;
            toJSON(message: _119.RequestInfo): unknown;
            fromPartial(object: Partial<_119.RequestInfo>): _119.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _119.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestSetOption;
            fromJSON(object: any): _119.RequestSetOption;
            toJSON(message: _119.RequestSetOption): unknown;
            fromPartial(object: Partial<_119.RequestSetOption>): _119.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _119.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestInitChain;
            fromJSON(object: any): _119.RequestInitChain;
            toJSON(message: _119.RequestInitChain): unknown;
            fromPartial(object: Partial<_119.RequestInitChain>): _119.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _119.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestQuery;
            fromJSON(object: any): _119.RequestQuery;
            toJSON(message: _119.RequestQuery): unknown;
            fromPartial(object: Partial<_119.RequestQuery>): _119.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _119.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestBeginBlock;
            fromJSON(object: any): _119.RequestBeginBlock;
            toJSON(message: _119.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_119.RequestBeginBlock>): _119.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _119.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestCheckTx;
            fromJSON(object: any): _119.RequestCheckTx;
            toJSON(message: _119.RequestCheckTx): unknown;
            fromPartial(object: Partial<_119.RequestCheckTx>): _119.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _119.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestDeliverTx;
            fromJSON(object: any): _119.RequestDeliverTx;
            toJSON(message: _119.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_119.RequestDeliverTx>): _119.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _119.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestEndBlock;
            fromJSON(object: any): _119.RequestEndBlock;
            toJSON(message: _119.RequestEndBlock): unknown;
            fromPartial(object: Partial<_119.RequestEndBlock>): _119.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _119.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestCommit;
            fromJSON(_: any): _119.RequestCommit;
            toJSON(_: _119.RequestCommit): unknown;
            fromPartial(_: Partial<_119.RequestCommit>): _119.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _119.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestListSnapshots;
            fromJSON(_: any): _119.RequestListSnapshots;
            toJSON(_: _119.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_119.RequestListSnapshots>): _119.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _119.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestOfferSnapshot;
            fromJSON(object: any): _119.RequestOfferSnapshot;
            toJSON(message: _119.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_119.RequestOfferSnapshot>): _119.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _119.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestLoadSnapshotChunk;
            fromJSON(object: any): _119.RequestLoadSnapshotChunk;
            toJSON(message: _119.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_119.RequestLoadSnapshotChunk>): _119.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _119.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RequestApplySnapshotChunk;
            fromJSON(object: any): _119.RequestApplySnapshotChunk;
            toJSON(message: _119.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_119.RequestApplySnapshotChunk>): _119.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _119.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Response;
            fromJSON(object: any): _119.Response;
            toJSON(message: _119.Response): unknown;
            fromPartial(object: Partial<_119.Response>): _119.Response;
        };
        ResponseException: {
            encode(message: _119.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseException;
            fromJSON(object: any): _119.ResponseException;
            toJSON(message: _119.ResponseException): unknown;
            fromPartial(object: Partial<_119.ResponseException>): _119.ResponseException;
        };
        ResponseEcho: {
            encode(message: _119.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseEcho;
            fromJSON(object: any): _119.ResponseEcho;
            toJSON(message: _119.ResponseEcho): unknown;
            fromPartial(object: Partial<_119.ResponseEcho>): _119.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _119.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseFlush;
            fromJSON(_: any): _119.ResponseFlush;
            toJSON(_: _119.ResponseFlush): unknown;
            fromPartial(_: Partial<_119.ResponseFlush>): _119.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _119.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseInfo;
            fromJSON(object: any): _119.ResponseInfo;
            toJSON(message: _119.ResponseInfo): unknown;
            fromPartial(object: Partial<_119.ResponseInfo>): _119.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _119.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseSetOption;
            fromJSON(object: any): _119.ResponseSetOption;
            toJSON(message: _119.ResponseSetOption): unknown;
            fromPartial(object: Partial<_119.ResponseSetOption>): _119.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _119.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseInitChain;
            fromJSON(object: any): _119.ResponseInitChain;
            toJSON(message: _119.ResponseInitChain): unknown;
            fromPartial(object: Partial<_119.ResponseInitChain>): _119.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _119.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseQuery;
            fromJSON(object: any): _119.ResponseQuery;
            toJSON(message: _119.ResponseQuery): unknown;
            fromPartial(object: Partial<_119.ResponseQuery>): _119.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _119.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseBeginBlock;
            fromJSON(object: any): _119.ResponseBeginBlock;
            toJSON(message: _119.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_119.ResponseBeginBlock>): _119.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _119.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseCheckTx;
            fromJSON(object: any): _119.ResponseCheckTx;
            toJSON(message: _119.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_119.ResponseCheckTx>): _119.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _119.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseDeliverTx;
            fromJSON(object: any): _119.ResponseDeliverTx;
            toJSON(message: _119.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_119.ResponseDeliverTx>): _119.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _119.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseEndBlock;
            fromJSON(object: any): _119.ResponseEndBlock;
            toJSON(message: _119.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_119.ResponseEndBlock>): _119.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _119.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseCommit;
            fromJSON(object: any): _119.ResponseCommit;
            toJSON(message: _119.ResponseCommit): unknown;
            fromPartial(object: Partial<_119.ResponseCommit>): _119.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _119.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseListSnapshots;
            fromJSON(object: any): _119.ResponseListSnapshots;
            toJSON(message: _119.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_119.ResponseListSnapshots>): _119.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _119.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseOfferSnapshot;
            fromJSON(object: any): _119.ResponseOfferSnapshot;
            toJSON(message: _119.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_119.ResponseOfferSnapshot>): _119.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _119.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _119.ResponseLoadSnapshotChunk;
            toJSON(message: _119.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_119.ResponseLoadSnapshotChunk>): _119.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _119.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ResponseApplySnapshotChunk;
            fromJSON(object: any): _119.ResponseApplySnapshotChunk;
            toJSON(message: _119.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_119.ResponseApplySnapshotChunk>): _119.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _119.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConsensusParams;
            fromJSON(object: any): _119.ConsensusParams;
            toJSON(message: _119.ConsensusParams): unknown;
            fromPartial(object: Partial<_119.ConsensusParams>): _119.ConsensusParams;
        };
        BlockParams: {
            encode(message: _119.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.BlockParams;
            fromJSON(object: any): _119.BlockParams;
            toJSON(message: _119.BlockParams): unknown;
            fromPartial(object: Partial<_119.BlockParams>): _119.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _119.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.LastCommitInfo;
            fromJSON(object: any): _119.LastCommitInfo;
            toJSON(message: _119.LastCommitInfo): unknown;
            fromPartial(object: Partial<_119.LastCommitInfo>): _119.LastCommitInfo;
        };
        Event: {
            encode(message: _119.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Event;
            fromJSON(object: any): _119.Event;
            toJSON(message: _119.Event): unknown;
            fromPartial(object: Partial<_119.Event>): _119.Event;
        };
        EventAttribute: {
            encode(message: _119.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.EventAttribute;
            fromJSON(object: any): _119.EventAttribute;
            toJSON(message: _119.EventAttribute): unknown;
            fromPartial(object: Partial<_119.EventAttribute>): _119.EventAttribute;
        };
        TxResult: {
            encode(message: _119.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.TxResult;
            fromJSON(object: any): _119.TxResult;
            toJSON(message: _119.TxResult): unknown;
            fromPartial(object: Partial<_119.TxResult>): _119.TxResult;
        };
        Validator: {
            encode(message: _119.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Validator;
            fromJSON(object: any): _119.Validator;
            toJSON(message: _119.Validator): unknown;
            fromPartial(object: Partial<_119.Validator>): _119.Validator;
        };
        ValidatorUpdate: {
            encode(message: _119.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ValidatorUpdate;
            fromJSON(object: any): _119.ValidatorUpdate;
            toJSON(message: _119.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_119.ValidatorUpdate>): _119.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _119.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.VoteInfo;
            fromJSON(object: any): _119.VoteInfo;
            toJSON(message: _119.VoteInfo): unknown;
            fromPartial(object: Partial<_119.VoteInfo>): _119.VoteInfo;
        };
        Evidence: {
            encode(message: _119.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Evidence;
            fromJSON(object: any): _119.Evidence;
            toJSON(message: _119.Evidence): unknown;
            fromPartial(object: Partial<_119.Evidence>): _119.Evidence;
        };
        Snapshot: {
            encode(message: _119.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Snapshot;
            fromJSON(object: any): _119.Snapshot;
            toJSON(message: _119.Snapshot): unknown;
            fromPartial(object: Partial<_119.Snapshot>): _119.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _121.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Proof;
            fromJSON(object: any): _121.Proof;
            toJSON(message: _121.Proof): unknown;
            fromPartial(object: Partial<_121.Proof>): _121.Proof;
        };
        ValueOp: {
            encode(message: _121.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ValueOp;
            fromJSON(object: any): _121.ValueOp;
            toJSON(message: _121.ValueOp): unknown;
            fromPartial(object: Partial<_121.ValueOp>): _121.ValueOp;
        };
        DominoOp: {
            encode(message: _121.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.DominoOp;
            fromJSON(object: any): _121.DominoOp;
            toJSON(message: _121.DominoOp): unknown;
            fromPartial(object: Partial<_121.DominoOp>): _121.DominoOp;
        };
        ProofOp: {
            encode(message: _121.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ProofOp;
            fromJSON(object: any): _121.ProofOp;
            toJSON(message: _121.ProofOp): unknown;
            fromPartial(object: Partial<_121.ProofOp>): _121.ProofOp;
        };
        ProofOps: {
            encode(message: _121.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ProofOps;
            fromJSON(object: any): _121.ProofOps;
            toJSON(message: _121.ProofOps): unknown;
            fromPartial(object: Partial<_121.ProofOps>): _121.ProofOps;
        };
        PublicKey: {
            encode(message: _120.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.PublicKey;
            fromJSON(object: any): _120.PublicKey;
            toJSON(message: _120.PublicKey): unknown;
            fromPartial(object: Partial<_120.PublicKey>): _120.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _122.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.BitArray;
                fromJSON(object: any): _122.BitArray;
                toJSON(message: _122.BitArray): unknown;
                fromPartial(object: Partial<_122.BitArray>): _122.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _123.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ProtocolVersion;
            fromJSON(object: any): _123.ProtocolVersion;
            toJSON(message: _123.ProtocolVersion): unknown;
            fromPartial(object: Partial<_123.ProtocolVersion>): _123.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _123.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NodeInfo;
            fromJSON(object: any): _123.NodeInfo;
            toJSON(message: _123.NodeInfo): unknown;
            fromPartial(object: Partial<_123.NodeInfo>): _123.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _123.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NodeInfoOther;
            fromJSON(object: any): _123.NodeInfoOther;
            toJSON(message: _123.NodeInfoOther): unknown;
            fromPartial(object: Partial<_123.NodeInfoOther>): _123.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _123.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PeerInfo;
            fromJSON(object: any): _123.PeerInfo;
            toJSON(message: _123.PeerInfo): unknown;
            fromPartial(object: Partial<_123.PeerInfo>): _123.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _123.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PeerAddressInfo;
            fromJSON(object: any): _123.PeerAddressInfo;
            toJSON(message: _123.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_123.PeerAddressInfo>): _123.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _128.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ValidatorSet;
            fromJSON(object: any): _128.ValidatorSet;
            toJSON(message: _128.ValidatorSet): unknown;
            fromPartial(object: Partial<_128.ValidatorSet>): _128.ValidatorSet;
        };
        Validator: {
            encode(message: _128.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Validator;
            fromJSON(object: any): _128.Validator;
            toJSON(message: _128.Validator): unknown;
            fromPartial(object: Partial<_128.Validator>): _128.Validator;
        };
        SimpleValidator: {
            encode(message: _128.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SimpleValidator;
            fromJSON(object: any): _128.SimpleValidator;
            toJSON(message: _128.SimpleValidator): unknown;
            fromPartial(object: Partial<_128.SimpleValidator>): _128.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _127.BlockIDFlag;
        blockIDFlagToJSON(object: _127.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _127.SignedMsgType;
        signedMsgTypeToJSON(object: _127.SignedMsgType): string;
        BlockIDFlag: typeof _127.BlockIDFlag;
        BlockIDFlagSDKType: typeof _127.BlockIDFlagSDKType;
        SignedMsgType: typeof _127.SignedMsgType;
        SignedMsgTypeSDKType: typeof _127.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _127.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PartSetHeader;
            fromJSON(object: any): _127.PartSetHeader;
            toJSON(message: _127.PartSetHeader): unknown;
            fromPartial(object: Partial<_127.PartSetHeader>): _127.PartSetHeader;
        };
        Part: {
            encode(message: _127.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Part;
            fromJSON(object: any): _127.Part;
            toJSON(message: _127.Part): unknown;
            fromPartial(object: Partial<_127.Part>): _127.Part;
        };
        BlockID: {
            encode(message: _127.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.BlockID;
            fromJSON(object: any): _127.BlockID;
            toJSON(message: _127.BlockID): unknown;
            fromPartial(object: Partial<_127.BlockID>): _127.BlockID;
        };
        Header: {
            encode(message: _127.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Header;
            fromJSON(object: any): _127.Header;
            toJSON(message: _127.Header): unknown;
            fromPartial(object: Partial<_127.Header>): _127.Header;
        };
        Data: {
            encode(message: _127.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Data;
            fromJSON(object: any): _127.Data;
            toJSON(message: _127.Data): unknown;
            fromPartial(object: Partial<_127.Data>): _127.Data;
        };
        Vote: {
            encode(message: _127.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Vote;
            fromJSON(object: any): _127.Vote;
            toJSON(message: _127.Vote): unknown;
            fromPartial(object: Partial<_127.Vote>): _127.Vote;
        };
        Commit: {
            encode(message: _127.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Commit;
            fromJSON(object: any): _127.Commit;
            toJSON(message: _127.Commit): unknown;
            fromPartial(object: Partial<_127.Commit>): _127.Commit;
        };
        CommitSig: {
            encode(message: _127.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.CommitSig;
            fromJSON(object: any): _127.CommitSig;
            toJSON(message: _127.CommitSig): unknown;
            fromPartial(object: Partial<_127.CommitSig>): _127.CommitSig;
        };
        Proposal: {
            encode(message: _127.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Proposal;
            fromJSON(object: any): _127.Proposal;
            toJSON(message: _127.Proposal): unknown;
            fromPartial(object: Partial<_127.Proposal>): _127.Proposal;
        };
        SignedHeader: {
            encode(message: _127.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.SignedHeader;
            fromJSON(object: any): _127.SignedHeader;
            toJSON(message: _127.SignedHeader): unknown;
            fromPartial(object: Partial<_127.SignedHeader>): _127.SignedHeader;
        };
        LightBlock: {
            encode(message: _127.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.LightBlock;
            fromJSON(object: any): _127.LightBlock;
            toJSON(message: _127.LightBlock): unknown;
            fromPartial(object: Partial<_127.LightBlock>): _127.LightBlock;
        };
        BlockMeta: {
            encode(message: _127.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.BlockMeta;
            fromJSON(object: any): _127.BlockMeta;
            toJSON(message: _127.BlockMeta): unknown;
            fromPartial(object: Partial<_127.BlockMeta>): _127.BlockMeta;
        };
        TxProof: {
            encode(message: _127.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.TxProof;
            fromJSON(object: any): _127.TxProof;
            toJSON(message: _127.TxProof): unknown;
            fromPartial(object: Partial<_127.TxProof>): _127.TxProof;
        };
        ConsensusParams: {
            encode(message: _126.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ConsensusParams;
            fromJSON(object: any): _126.ConsensusParams;
            toJSON(message: _126.ConsensusParams): unknown;
            fromPartial(object: Partial<_126.ConsensusParams>): _126.ConsensusParams;
        };
        BlockParams: {
            encode(message: _126.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.BlockParams;
            fromJSON(object: any): _126.BlockParams;
            toJSON(message: _126.BlockParams): unknown;
            fromPartial(object: Partial<_126.BlockParams>): _126.BlockParams;
        };
        EvidenceParams: {
            encode(message: _126.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EvidenceParams;
            fromJSON(object: any): _126.EvidenceParams;
            toJSON(message: _126.EvidenceParams): unknown;
            fromPartial(object: Partial<_126.EvidenceParams>): _126.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _126.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ValidatorParams;
            fromJSON(object: any): _126.ValidatorParams;
            toJSON(message: _126.ValidatorParams): unknown;
            fromPartial(object: Partial<_126.ValidatorParams>): _126.ValidatorParams;
        };
        VersionParams: {
            encode(message: _126.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.VersionParams;
            fromJSON(object: any): _126.VersionParams;
            toJSON(message: _126.VersionParams): unknown;
            fromPartial(object: Partial<_126.VersionParams>): _126.VersionParams;
        };
        HashedParams: {
            encode(message: _126.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.HashedParams;
            fromJSON(object: any): _126.HashedParams;
            toJSON(message: _126.HashedParams): unknown;
            fromPartial(object: Partial<_126.HashedParams>): _126.HashedParams;
        };
        Evidence: {
            encode(message: _125.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Evidence;
            fromJSON(object: any): _125.Evidence;
            toJSON(message: _125.Evidence): unknown;
            fromPartial(object: Partial<_125.Evidence>): _125.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _125.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.DuplicateVoteEvidence;
            fromJSON(object: any): _125.DuplicateVoteEvidence;
            toJSON(message: _125.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_125.DuplicateVoteEvidence>): _125.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _125.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.LightClientAttackEvidence;
            fromJSON(object: any): _125.LightClientAttackEvidence;
            toJSON(message: _125.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_125.LightClientAttackEvidence>): _125.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _125.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.EvidenceList;
            fromJSON(object: any): _125.EvidenceList;
            toJSON(message: _125.EvidenceList): unknown;
            fromPartial(object: Partial<_125.EvidenceList>): _125.EvidenceList;
        };
        Block: {
            encode(message: _124.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Block;
            fromJSON(object: any): _124.Block;
            toJSON(message: _124.Block): unknown;
            fromPartial(object: Partial<_124.Block>): _124.Block;
        };
    };
    const version: {
        App: {
            encode(message: _129.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.App;
            fromJSON(object: any): _129.App;
            toJSON(message: _129.App): unknown;
            fromPartial(object: Partial<_129.App>): _129.App;
        };
        Consensus: {
            encode(message: _129.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Consensus;
            fromJSON(object: any): _129.Consensus;
            toJSON(message: _129.Consensus): unknown;
            fromPartial(object: Partial<_129.Consensus>): _129.Consensus;
        };
    };
}
