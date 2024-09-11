import * as _45 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _45.HashOp;
    hashOpToJSON(object: _45.HashOp): string;
    lengthOpFromJSON(object: any): _45.LengthOp;
    lengthOpToJSON(object: _45.LengthOp): string;
    HashOp: typeof _45.HashOp;
    HashOpSDKType: typeof _45.HashOpSDKType;
    LengthOp: typeof _45.LengthOp;
    LengthOpSDKType: typeof _45.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _45.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _45.HashOp;
                prehashKey?: _45.HashOp;
                prehashValue?: _45.HashOp;
                length?: _45.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _45.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _45.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _45.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _45.HashOp;
                    prehashKey?: _45.HashOp;
                    prehashValue?: _45.HashOp;
                    length?: _45.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _45.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _45.HashOp;
                    prehashKey?: _45.HashOp;
                    prehashValue?: _45.HashOp;
                    length?: _45.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _45.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _45.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _45.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _45.HashOp;
                    prehashKey?: _45.HashOp;
                    prehashValue?: _45.HashOp;
                    length?: _45.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _45.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _45.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _45.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _45.HashOp;
                            prehashKey?: _45.HashOp;
                            prehashValue?: _45.HashOp;
                            length?: _45.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _45.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _45.HashOp;
                                prehashKey?: _45.HashOp;
                                prehashValue?: _45.HashOp;
                                length?: _45.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _45.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _45.HashOp;
                                prehashKey?: _45.HashOp;
                                prehashValue?: _45.HashOp;
                                length?: _45.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _45.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _45.HashOp;
                            prehashKey?: _45.HashOp;
                            prehashValue?: _45.HashOp;
                            length?: _45.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _45.HashOp;
                                prehashKey?: _45.HashOp;
                                prehashValue?: _45.HashOp;
                                length?: _45.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _45.HashOp;
                                prehashKey?: _45.HashOp;
                                prehashValue?: _45.HashOp;
                                length?: _45.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _45.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _45.CommitmentProof;
    };
    LeafOp: {
        encode(message: _45.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.LeafOp;
        fromPartial(object: {
            hash?: _45.HashOp;
            prehashKey?: _45.HashOp;
            prehashValue?: _45.HashOp;
            length?: _45.LengthOp;
            prefix?: Uint8Array;
        }): _45.LeafOp;
    };
    InnerOp: {
        encode(message: _45.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.InnerOp;
        fromPartial(object: {
            hash?: _45.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _45.InnerOp;
    };
    ProofSpec: {
        encode(message: _45.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _45.HashOp;
                prehashKey?: _45.HashOp;
                prehashValue?: _45.HashOp;
                length?: _45.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _45.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _45.ProofSpec;
    };
    InnerSpec: {
        encode(message: _45.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _45.HashOp;
        }): _45.InnerSpec;
    };
    BatchProof: {
        encode(message: _45.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _45.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _45.HashOp;
                            prehashKey?: _45.HashOp;
                            prehashValue?: _45.HashOp;
                            length?: _45.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _45.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _45.HashOp;
                            prehashKey?: _45.HashOp;
                            prehashValue?: _45.HashOp;
                            length?: _45.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _45.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _45.BatchProof;
    };
    BatchEntry: {
        encode(message: _45.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _45.HashOp;
                    prehashKey?: _45.HashOp;
                    prehashValue?: _45.HashOp;
                    length?: _45.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _45.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _45.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _45.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _45.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _45.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _45.HashOp;
                            prehashKey?: _45.HashOp;
                            prehashValue?: _45.HashOp;
                            length?: _45.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _45.HashOp;
                            prehashKey?: _45.HashOp;
                            prehashValue?: _45.HashOp;
                            length?: _45.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _45.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _45.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _45.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _45.HashOp;
                    prehashKey?: _45.HashOp;
                    prehashValue?: _45.HashOp;
                    length?: _45.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _45.HashOp;
                        prehashKey?: _45.HashOp;
                        prehashValue?: _45.HashOp;
                        length?: _45.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _45.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _45.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _45.HashOp;
                prehashKey?: _45.HashOp;
                prehashValue?: _45.HashOp;
                length?: _45.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _45.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _45.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _45.HashOp;
                    prehashKey?: _45.HashOp;
                    prehashValue?: _45.HashOp;
                    length?: _45.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _45.HashOp;
                    prehashKey?: _45.HashOp;
                    prehashValue?: _45.HashOp;
                    length?: _45.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _45.CompressedNonExistenceProof;
    };
};
