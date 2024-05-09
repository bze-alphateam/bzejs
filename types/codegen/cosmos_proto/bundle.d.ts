import * as _45 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _45.ScalarType;
    scalarTypeToJSON(object: _45.ScalarType): string;
    ScalarType: typeof _45.ScalarType;
    ScalarTypeSDKType: typeof _45.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _45.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _45.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _45.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _45.ScalarType[];
        }): _45.ScalarDescriptor;
    };
};
