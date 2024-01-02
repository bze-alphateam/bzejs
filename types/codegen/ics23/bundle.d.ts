import * as _19 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _19.HashOp;
    hashOpToJSON(object: _19.HashOp): string;
    lengthOpFromJSON(object: any): _19.LengthOp;
    lengthOpToJSON(object: _19.LengthOp): string;
    HashOp: typeof _19.HashOp;
    HashOpSDKType: typeof _19.HashOp;
    LengthOp: typeof _19.LengthOp;
    LengthOpSDKType: typeof _19.LengthOp;
    ExistenceProof: {
        encode(message: _19.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _19.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _19.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _19.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _19.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
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
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _19.HashOp;
                                prehashKey?: _19.HashOp;
                                prehashValue?: _19.HashOp;
                                length?: _19.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _19.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _19.CommitmentProof;
    };
    LeafOp: {
        encode(message: _19.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.LeafOp;
        fromPartial(object: {
            hash?: _19.HashOp;
            prehashKey?: _19.HashOp;
            prehashValue?: _19.HashOp;
            length?: _19.LengthOp;
            prefix?: Uint8Array;
        }): _19.LeafOp;
    };
    InnerOp: {
        encode(message: _19.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.InnerOp;
        fromPartial(object: {
            hash?: _19.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _19.InnerOp;
    };
    ProofSpec: {
        encode(message: _19.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _19.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _19.ProofSpec;
    };
    InnerSpec: {
        encode(message: _19.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _19.HashOp;
        }): _19.InnerSpec;
    };
    BatchProof: {
        encode(message: _19.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _19.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _19.BatchProof;
    };
    BatchEntry: {
        encode(message: _19.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _19.HashOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _19.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _19.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _19.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
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
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _19.HashOp;
                            prehashKey?: _19.HashOp;
                            prehashValue?: _19.HashOp;
                            length?: _19.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _19.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _19.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _19.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
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
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _19.HashOp;
                        prehashKey?: _19.HashOp;
                        prehashValue?: _19.HashOp;
                        length?: _19.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _19.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _19.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _19.HashOp;
                prehashKey?: _19.HashOp;
                prehashValue?: _19.HashOp;
                length?: _19.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _19.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _19.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _19.HashOp;
                    prehashKey?: _19.HashOp;
                    prehashValue?: _19.HashOp;
                    length?: _19.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _19.CompressedNonExistenceProof;
    };
};
