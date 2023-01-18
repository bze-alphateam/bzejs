import * as _18 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _18.ScalarType;
    scalarTypeToJSON(object: _18.ScalarType): string;
    ScalarType: typeof _18.ScalarType;
    ScalarTypeSDKType: typeof _18.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _18.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceDescriptor;
        fromJSON(object: any): _18.InterfaceDescriptor;
        toJSON(message: _18.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_18.InterfaceDescriptor>): _18.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _18.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ScalarDescriptor;
        fromJSON(object: any): _18.ScalarDescriptor;
        toJSON(message: _18.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_18.ScalarDescriptor>): _18.ScalarDescriptor;
    };
};
