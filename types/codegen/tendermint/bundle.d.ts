import * as _145 from "./abci/types";
import * as _146 from "./crypto/keys";
import * as _147 from "./crypto/proof";
import * as _148 from "./libs/bits/types";
import * as _149 from "./p2p/types";
import * as _150 from "./types/block";
import * as _151 from "./types/evidence";
import * as _152 from "./types/params";
import * as _153 from "./types/types";
import * as _154 from "./types/validator";
import * as _155 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _145.CheckTxType;
        checkTxTypeToJSON(object: _145.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _145.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _145.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _145.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _145.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _145.EvidenceType;
        evidenceTypeToJSON(object: _145.EvidenceType): string;
        CheckTxType: typeof _145.CheckTxType;
        CheckTxTypeSDKType: typeof _145.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _145.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _145.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _145.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _145.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _145.EvidenceType;
        EvidenceTypeSDKType: typeof _145.EvidenceType;
        Request: {
            encode(message: _145.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string | number | import("long").default;
                    p2pVersion?: string | number | import("long").default;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").default;
                            maxGas?: string | number | import("long").default;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").default;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").default;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string | number | import("long").default;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long").default;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chainId?: string;
                        height?: string | number | import("long").default;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long").default;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _145.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        height?: string | number | import("long").default;
                        time?: Date;
                        totalVotingPower?: string | number | import("long").default;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _145.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string | number | import("long").default;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _145.Request;
        };
        RequestEcho: {
            encode(message: _145.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _145.RequestEcho;
        };
        RequestFlush: {
            encode(_: _145.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestFlush;
            fromPartial(_: {}): _145.RequestFlush;
        };
        RequestInfo: {
            encode(message: _145.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long").default;
                p2pVersion?: string | number | import("long").default;
            }): _145.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _145.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _145.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _145.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestInitChain;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").default;
                        maxGas?: string | number | import("long").default;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").default;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").default;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string | number | import("long").default;
            }): _145.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _145.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").default;
                prove?: boolean;
            }): _145.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _145.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _145.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    height?: string | number | import("long").default;
                    time?: Date;
                    totalVotingPower?: string | number | import("long").default;
                }[];
            }): _145.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _145.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _145.CheckTxType;
            }): _145.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _145.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _145.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _145.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long").default;
            }): _145.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _145.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestCommit;
            fromPartial(_: {}): _145.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _145.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestListSnapshots;
            fromPartial(_: {}): _145.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _145.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _145.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _145.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunk?: number;
            }): _145.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _145.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _145.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _145.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string | number | import("long").default;
                    lastBlockHeight?: string | number | import("long").default;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").default;
                            maxGas?: string | number | import("long").default;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").default;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").default;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long").default;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").default;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").default;
                    gasUsed?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").default;
                    gasUsed?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long").default;
                            maxGas?: string | number | import("long").default;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").default;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").default;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string | number | import("long").default;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _145.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _145.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _145.Response;
        };
        ResponseException: {
            encode(message: _145.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _145.ResponseException;
        };
        ResponseEcho: {
            encode(message: _145.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _145.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _145.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseFlush;
            fromPartial(_: {}): _145.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _145.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long").default;
                lastBlockHeight?: string | number | import("long").default;
                lastBlockAppHash?: Uint8Array;
            }): _145.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _145.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _145.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _145.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").default;
                        maxGas?: string | number | import("long").default;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").default;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").default;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                appHash?: Uint8Array;
            }): _145.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _145.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseQuery;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long").default;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long").default;
                codespace?: string;
            }): _145.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _145.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _145.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _145.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseCheckTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").default;
                gasUsed?: string | number | import("long").default;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _145.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _145.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseDeliverTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").default;
                gasUsed?: string | number | import("long").default;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _145.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _145.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseEndBlock;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long").default;
                        maxGas?: string | number | import("long").default;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").default;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").default;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _145.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _145.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long").default;
            }): _145.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _145.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _145.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _145.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _145.ResponseOfferSnapshot_Result;
            }): _145.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _145.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _145.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _145.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _145.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _145.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _145.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").default;
                    maxGas?: string | number | import("long").default;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").default;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").default;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").default;
                };
            }): _145.ConsensusParams;
        };
        BlockParams: {
            encode(message: _145.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").default;
                maxGas?: string | number | import("long").default;
            }): _145.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _145.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _145.LastCommitInfo;
        };
        Event: {
            encode(message: _145.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _145.Event;
        };
        EventAttribute: {
            encode(message: _145.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _145.EventAttribute;
        };
        TxResult: {
            encode(message: _145.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.TxResult;
            fromPartial(object: {
                height?: string | number | import("long").default;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").default;
                    gasUsed?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _145.TxResult;
        };
        Validator: {
            encode(message: _145.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").default;
            }): _145.Validator;
        };
        ValidatorUpdate: {
            encode(message: _145.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").default;
            }): _145.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _145.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                signedLastBlock?: boolean;
            }): _145.VoteInfo;
        };
        Evidence: {
            encode(message: _145.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Evidence;
            fromPartial(object: {
                type?: _145.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                height?: string | number | import("long").default;
                time?: Date;
                totalVotingPower?: string | number | import("long").default;
            }): _145.Evidence;
        };
        Snapshot: {
            encode(message: _145.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _145.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _147.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Proof;
            fromPartial(object: {
                total?: string | number | import("long").default;
                index?: string | number | import("long").default;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _147.Proof;
        };
        ValueOp: {
            encode(message: _147.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _147.ValueOp;
        };
        DominoOp: {
            encode(message: _147.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _147.DominoOp;
        };
        ProofOp: {
            encode(message: _147.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _147.ProofOp;
        };
        ProofOps: {
            encode(message: _147.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _147.ProofOps;
        };
        PublicKey: {
            encode(message: _146.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _146.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _148.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").default;
                    elems?: (string | number | import("long").default)[];
                }): _148.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _149.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").default;
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _149.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _149.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.NodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long").default;
                    block?: string | number | import("long").default;
                    app?: string | number | import("long").default;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _149.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _149.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.NodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _149.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _149.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PeerInfo;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _149.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _149.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PeerAddressInfo;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _149.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _154.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ValidatorSet;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").default;
                    proposerPriority?: string | number | import("long").default;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").default;
                    proposerPriority?: string | number | import("long").default;
                };
                totalVotingPower?: string | number | import("long").default;
            }): _154.ValidatorSet;
        };
        Validator: {
            encode(message: _154.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").default;
                proposerPriority?: string | number | import("long").default;
            }): _154.Validator;
        };
        SimpleValidator: {
            encode(message: _154.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").default;
            }): _154.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _153.BlockIDFlag;
        blockIDFlagToJSON(object: _153.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _153.SignedMsgType;
        signedMsgTypeToJSON(object: _153.SignedMsgType): string;
        BlockIDFlag: typeof _153.BlockIDFlag;
        BlockIDFlagSDKType: typeof _153.BlockIDFlag;
        SignedMsgType: typeof _153.SignedMsgType;
        SignedMsgTypeSDKType: typeof _153.SignedMsgType;
        PartSetHeader: {
            encode(message: _153.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _153.PartSetHeader;
        };
        Part: {
            encode(message: _153.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _153.Part;
        };
        BlockID: {
            encode(message: _153.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _153.BlockID;
        };
        Header: {
            encode(message: _153.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Header;
            fromPartial(object: {
                version?: {
                    block?: string | number | import("long").default;
                    app?: string | number | import("long").default;
                };
                chainId?: string;
                height?: string | number | import("long").default;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _153.Header;
        };
        Data: {
            encode(message: _153.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _153.Data;
        };
        Vote: {
            encode(message: _153.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Vote;
            fromPartial(object: {
                type?: _153.SignedMsgType;
                height?: string | number | import("long").default;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _153.Vote;
        };
        Commit: {
            encode(message: _153.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Commit;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _153.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _153.Commit;
        };
        CommitSig: {
            encode(message: _153.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _153.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _153.CommitSig;
        };
        Proposal: {
            encode(message: _153.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Proposal;
            fromPartial(object: {
                type?: _153.SignedMsgType;
                height?: string | number | import("long").default;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _153.Proposal;
        };
        SignedHeader: {
            encode(message: _153.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.SignedHeader;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _153.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _153.SignedHeader;
        };
        LightBlock: {
            encode(message: _153.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.LightBlock;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chainId?: string;
                        height?: string | number | import("long").default;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _153.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    };
                    totalVotingPower?: string | number | import("long").default;
                };
            }): _153.LightBlock;
        };
        BlockMeta: {
            encode(message: _153.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string | number | import("long").default;
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: string | number | import("long").default;
            }): _153.BlockMeta;
        };
        TxProof: {
            encode(message: _153.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _153.TxProof;
        };
        ConsensusParams: {
            encode(message: _152.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").default;
                    maxGas?: string | number | import("long").default;
                    timeIotaMs?: string | number | import("long").default;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").default;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").default;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").default;
                };
            }): _152.ConsensusParams;
        };
        BlockParams: {
            encode(message: _152.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").default;
                maxGas?: string | number | import("long").default;
                timeIotaMs?: string | number | import("long").default;
            }): _152.BlockParams;
        };
        EvidenceParams: {
            encode(message: _152.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").default;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                maxBytes?: string | number | import("long").default;
            }): _152.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _152.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _152.ValidatorParams;
        };
        VersionParams: {
            encode(message: _152.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long").default;
            }): _152.VersionParams;
        };
        HashedParams: {
            encode(message: _152.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").default;
                blockMaxGas?: string | number | import("long").default;
            }): _152.HashedParams;
        };
        Evidence: {
            encode(message: _151.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _153.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _153.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: string | number | import("long").default;
                    validatorPower?: string | number | import("long").default;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chainId?: string;
                                height?: string | number | import("long").default;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _153.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            };
                            totalVotingPower?: string | number | import("long").default;
                        };
                    };
                    commonHeight?: string | number | import("long").default;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    }[];
                    totalVotingPower?: string | number | import("long").default;
                    timestamp?: Date;
                };
            }): _151.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _151.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _153.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _153.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: string | number | import("long").default;
                validatorPower?: string | number | import("long").default;
                timestamp?: Date;
            }): _151.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _151.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.LightClientAttackEvidence;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chainId?: string;
                            height?: string | number | import("long").default;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _153.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        };
                        totalVotingPower?: string | number | import("long").default;
                    };
                };
                commonHeight?: string | number | import("long").default;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").default;
                    proposerPriority?: string | number | import("long").default;
                }[];
                totalVotingPower?: string | number | import("long").default;
                timestamp?: Date;
            }): _151.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _151.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _153.SignedMsgType;
                            height?: string | number | import("long").default;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _153.SignedMsgType;
                            height?: string | number | import("long").default;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: string | number | import("long").default;
                        validatorPower?: string | number | import("long").default;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").default;
                                        app?: string | number | import("long").default;
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long").default;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").default;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _153.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                };
                                totalVotingPower?: string | number | import("long").default;
                            };
                        };
                        commonHeight?: string | number | import("long").default;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        totalVotingPower?: string | number | import("long").default;
                        timestamp?: Date;
                    };
                }[];
            }): _151.EvidenceList;
        };
        Block: {
            encode(message: _150.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Block;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _153.SignedMsgType;
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _153.SignedMsgType;
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: string | number | import("long").default;
                            validatorPower?: string | number | import("long").default;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string | number | import("long").default;
                                            app?: string | number | import("long").default;
                                        };
                                        chainId?: string;
                                        height?: string | number | import("long").default;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _153.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").default;
                                        proposerPriority?: string | number | import("long").default;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").default;
                                        proposerPriority?: string | number | import("long").default;
                                    };
                                    totalVotingPower?: string | number | import("long").default;
                                };
                            };
                            commonHeight?: string | number | import("long").default;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            totalVotingPower?: string | number | import("long").default;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _153.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _150.Block;
        };
    };
    const version: {
        App: {
            encode(message: _155.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.App;
            fromPartial(object: {
                protocol?: string | number | import("long").default;
                software?: string;
            }): _155.App;
        };
        Consensus: {
            encode(message: _155.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _155.Consensus;
        };
    };
}
