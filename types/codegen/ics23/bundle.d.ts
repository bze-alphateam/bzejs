import * as _44 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _44.HashOp;
    hashOpToJSON(object: _44.HashOp): string;
    lengthOpFromJSON(object: any): _44.LengthOp;
    lengthOpToJSON(object: _44.LengthOp): string;
    HashOp: typeof _44.HashOp;
    HashOpSDKType: typeof _44.HashOpSDKType;
    LengthOp: typeof _44.LengthOp;
    LengthOpSDKType: typeof _44.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _44.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _44.HashOp;
                prehashKey?: _44.HashOp;
                prehashValue?: _44.HashOp;
                length?: _44.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _44.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _44.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _44.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _44.HashOp;
                    prehashKey?: _44.HashOp;
                    prehashValue?: _44.HashOp;
                    length?: _44.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _44.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _44.HashOp;
                    prehashKey?: _44.HashOp;
                    prehashValue?: _44.HashOp;
                    length?: _44.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _44.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _44.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _44.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _44.HashOp;
                    prehashKey?: _44.HashOp;
                    prehashValue?: _44.HashOp;
                    length?: _44.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _44.HashOp;
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
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _44.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _44.HashOp;
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
                            hash?: _44.HashOp;
                            prehashKey?: _44.HashOp;
                            prehashValue?: _44.HashOp;
                            length?: _44.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _44.HashOp;
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
                                hash?: _44.HashOp;
                                prehashKey?: _44.HashOp;
                                prehashValue?: _44.HashOp;
                                length?: _44.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _44.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _44.HashOp;
                                prehashKey?: _44.HashOp;
                                prehashValue?: _44.HashOp;
                                length?: _44.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _44.HashOp;
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
                            hash?: _44.HashOp;
                            prehashKey?: _44.HashOp;
                            prehashValue?: _44.HashOp;
                            length?: _44.LengthOp;
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
                                hash?: _44.HashOp;
                                prehashKey?: _44.HashOp;
                                prehashValue?: _44.HashOp;
                                length?: _44.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _44.HashOp;
                                prehashKey?: _44.HashOp;
                                prehashValue?: _44.HashOp;
                                length?: _44.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _44.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _44.CommitmentProof;
    };
    LeafOp: {
        encode(message: _44.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.LeafOp;
        fromPartial(object: {
            hash?: _44.HashOp;
            prehashKey?: _44.HashOp;
            prehashValue?: _44.HashOp;
            length?: _44.LengthOp;
            prefix?: Uint8Array;
        }): _44.LeafOp;
    };
    InnerOp: {
        encode(message: _44.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.InnerOp;
        fromPartial(object: {
            hash?: _44.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _44.InnerOp;
    };
    ProofSpec: {
        encode(message: _44.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _44.HashOp;
                prehashKey?: _44.HashOp;
                prehashValue?: _44.HashOp;
                length?: _44.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _44.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _44.ProofSpec;
    };
    InnerSpec: {
        encode(message: _44.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _44.HashOp;
        }): _44.InnerSpec;
    };
    BatchProof: {
        encode(message: _44.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _44.HashOp;
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
                            hash?: _44.HashOp;
                            prehashKey?: _44.HashOp;
                            prehashValue?: _44.HashOp;
                            length?: _44.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _44.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _44.HashOp;
                            prehashKey?: _44.HashOp;
                            prehashValue?: _44.HashOp;
                            length?: _44.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _44.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _44.BatchProof;
    };
    BatchEntry: {
        encode(message: _44.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _44.HashOp;
                    prehashKey?: _44.HashOp;
                    prehashValue?: _44.HashOp;
                    length?: _44.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _44.HashOp;
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
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _44.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _44.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _44.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _44.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
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
                            hash?: _44.HashOp;
                            prehashKey?: _44.HashOp;
                            prehashValue?: _44.HashOp;
                            length?: _44.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _44.HashOp;
                            prehashKey?: _44.HashOp;
                            prehashValue?: _44.HashOp;
                            length?: _44.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _44.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _44.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _44.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _44.HashOp;
                    prehashKey?: _44.HashOp;
                    prehashValue?: _44.HashOp;
                    length?: _44.LengthOp;
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
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _44.HashOp;
                        prehashKey?: _44.HashOp;
                        prehashValue?: _44.HashOp;
                        length?: _44.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _44.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _44.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _44.HashOp;
                prehashKey?: _44.HashOp;
                prehashValue?: _44.HashOp;
                length?: _44.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _44.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _44.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _44.HashOp;
                    prehashKey?: _44.HashOp;
                    prehashValue?: _44.HashOp;
                    length?: _44.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _44.HashOp;
                    prehashKey?: _44.HashOp;
                    prehashValue?: _44.HashOp;
                    length?: _44.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _44.CompressedNonExistenceProof;
    };
};
