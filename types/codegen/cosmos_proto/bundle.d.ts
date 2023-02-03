import * as _18 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _18.ScalarType;
    scalarTypeToJSON(object: _18.ScalarType): string;
    ScalarType: typeof _18.ScalarType;
    ScalarTypeSDKType: typeof _18.ScalarType;
    InterfaceDescriptor: {
        encode(message: _18.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _18.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _18.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _18.ScalarType[];
        }): _18.ScalarDescriptor;
    };
};
