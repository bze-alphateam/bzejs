import * as _113 from "./api/http";
import * as _114 from "./protobuf/any";
import * as _115 from "./protobuf/descriptor";
import * as _116 from "./protobuf/duration";
import * as _117 from "./protobuf/empty";
import * as _118 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _113.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Http;
            fromJSON(object: any): _113.Http;
            toJSON(message: _113.Http): unknown;
            fromPartial(object: Partial<_113.Http>): _113.Http;
        };
        HttpRule: {
            encode(message: _113.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.HttpRule;
            fromJSON(object: any): _113.HttpRule;
            toJSON(message: _113.HttpRule): unknown;
            fromPartial(object: Partial<_113.HttpRule>): _113.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _113.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.CustomHttpPattern;
            fromJSON(object: any): _113.CustomHttpPattern;
            toJSON(message: _113.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_113.CustomHttpPattern>): _113.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _118.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Timestamp;
            fromJSON(object: any): _118.Timestamp;
            toJSON(message: _118.Timestamp): unknown;
            fromPartial(object: Partial<_118.Timestamp>): _118.Timestamp;
        };
        Empty: {
            encode(_: _117.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Empty;
            fromJSON(_: any): _117.Empty;
            toJSON(_: _117.Empty): unknown;
            fromPartial(_: Partial<_117.Empty>): _117.Empty;
        };
        Duration: {
            encode(message: _116.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Duration;
            fromJSON(object: any): _116.Duration;
            toJSON(message: _116.Duration): unknown;
            fromPartial(object: Partial<_116.Duration>): _116.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _115.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _115.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _115.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _115.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _115.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _115.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _115.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _115.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _115.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _115.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _115.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _115.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _115.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _115.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _115.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _115.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _115.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _115.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _115.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _115.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _115.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _115.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _115.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _115.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _115.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FileDescriptorSet;
            fromJSON(object: any): _115.FileDescriptorSet;
            toJSON(message: _115.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_115.FileDescriptorSet>): _115.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _115.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FileDescriptorProto;
            fromJSON(object: any): _115.FileDescriptorProto;
            toJSON(message: _115.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_115.FileDescriptorProto>): _115.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _115.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DescriptorProto;
            fromJSON(object: any): _115.DescriptorProto;
            toJSON(message: _115.DescriptorProto): unknown;
            fromPartial(object: Partial<_115.DescriptorProto>): _115.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _115.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _115.DescriptorProto_ExtensionRange;
            toJSON(message: _115.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_115.DescriptorProto_ExtensionRange>): _115.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _115.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DescriptorProto_ReservedRange;
            fromJSON(object: any): _115.DescriptorProto_ReservedRange;
            toJSON(message: _115.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_115.DescriptorProto_ReservedRange>): _115.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _115.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ExtensionRangeOptions;
            fromJSON(object: any): _115.ExtensionRangeOptions;
            toJSON(message: _115.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_115.ExtensionRangeOptions>): _115.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _115.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FieldDescriptorProto;
            fromJSON(object: any): _115.FieldDescriptorProto;
            toJSON(message: _115.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_115.FieldDescriptorProto>): _115.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _115.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.OneofDescriptorProto;
            fromJSON(object: any): _115.OneofDescriptorProto;
            toJSON(message: _115.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_115.OneofDescriptorProto>): _115.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _115.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumDescriptorProto;
            fromJSON(object: any): _115.EnumDescriptorProto;
            toJSON(message: _115.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_115.EnumDescriptorProto>): _115.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _115.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _115.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _115.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_115.EnumDescriptorProto_EnumReservedRange>): _115.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _115.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumValueDescriptorProto;
            fromJSON(object: any): _115.EnumValueDescriptorProto;
            toJSON(message: _115.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_115.EnumValueDescriptorProto>): _115.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _115.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ServiceDescriptorProto;
            fromJSON(object: any): _115.ServiceDescriptorProto;
            toJSON(message: _115.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_115.ServiceDescriptorProto>): _115.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _115.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MethodDescriptorProto;
            fromJSON(object: any): _115.MethodDescriptorProto;
            toJSON(message: _115.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_115.MethodDescriptorProto>): _115.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _115.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FileOptions;
            fromJSON(object: any): _115.FileOptions;
            toJSON(message: _115.FileOptions): unknown;
            fromPartial(object: Partial<_115.FileOptions>): _115.FileOptions;
        };
        MessageOptions: {
            encode(message: _115.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MessageOptions;
            fromJSON(object: any): _115.MessageOptions;
            toJSON(message: _115.MessageOptions): unknown;
            fromPartial(object: Partial<_115.MessageOptions>): _115.MessageOptions;
        };
        FieldOptions: {
            encode(message: _115.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FieldOptions;
            fromJSON(object: any): _115.FieldOptions;
            toJSON(message: _115.FieldOptions): unknown;
            fromPartial(object: Partial<_115.FieldOptions>): _115.FieldOptions;
        };
        OneofOptions: {
            encode(message: _115.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.OneofOptions;
            fromJSON(object: any): _115.OneofOptions;
            toJSON(message: _115.OneofOptions): unknown;
            fromPartial(object: Partial<_115.OneofOptions>): _115.OneofOptions;
        };
        EnumOptions: {
            encode(message: _115.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumOptions;
            fromJSON(object: any): _115.EnumOptions;
            toJSON(message: _115.EnumOptions): unknown;
            fromPartial(object: Partial<_115.EnumOptions>): _115.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _115.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.EnumValueOptions;
            fromJSON(object: any): _115.EnumValueOptions;
            toJSON(message: _115.EnumValueOptions): unknown;
            fromPartial(object: Partial<_115.EnumValueOptions>): _115.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _115.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ServiceOptions;
            fromJSON(object: any): _115.ServiceOptions;
            toJSON(message: _115.ServiceOptions): unknown;
            fromPartial(object: Partial<_115.ServiceOptions>): _115.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _115.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MethodOptions;
            fromJSON(object: any): _115.MethodOptions;
            toJSON(message: _115.MethodOptions): unknown;
            fromPartial(object: Partial<_115.MethodOptions>): _115.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _115.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.UninterpretedOption;
            fromJSON(object: any): _115.UninterpretedOption;
            toJSON(message: _115.UninterpretedOption): unknown;
            fromPartial(object: Partial<_115.UninterpretedOption>): _115.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _115.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.UninterpretedOption_NamePart;
            fromJSON(object: any): _115.UninterpretedOption_NamePart;
            toJSON(message: _115.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_115.UninterpretedOption_NamePart>): _115.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _115.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SourceCodeInfo;
            fromJSON(object: any): _115.SourceCodeInfo;
            toJSON(message: _115.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_115.SourceCodeInfo>): _115.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _115.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SourceCodeInfo_Location;
            fromJSON(object: any): _115.SourceCodeInfo_Location;
            toJSON(message: _115.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_115.SourceCodeInfo_Location>): _115.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _115.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GeneratedCodeInfo;
            fromJSON(object: any): _115.GeneratedCodeInfo;
            toJSON(message: _115.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_115.GeneratedCodeInfo>): _115.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _115.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _115.GeneratedCodeInfo_Annotation;
            toJSON(message: _115.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_115.GeneratedCodeInfo_Annotation>): _115.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _114.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Any;
            fromJSON(object: any): _114.Any;
            toJSON(message: _114.Any): unknown;
            fromPartial(object: Partial<_114.Any>): _114.Any;
        };
    };
}
