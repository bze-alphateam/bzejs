import * as _46 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _46.ScalarType;
    scalarTypeToJSON(object: _46.ScalarType): string;
    ScalarType: typeof _46.ScalarType;
    ScalarTypeSDKType: typeof _46.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _46.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _46.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _46.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _46.ScalarType[];
        }): _46.ScalarDescriptor;
    };
};
