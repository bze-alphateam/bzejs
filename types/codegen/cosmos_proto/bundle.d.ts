import * as _20 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _20.ScalarType;
    scalarTypeToJSON(object: _20.ScalarType): string;
    ScalarType: typeof _20.ScalarType;
    ScalarTypeSDKType: typeof _20.ScalarType;
    InterfaceDescriptor: {
        encode(message: _20.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _20.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _20.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _20.ScalarType[];
        }): _20.ScalarDescriptor;
    };
};
