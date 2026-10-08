//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * BrandingColors holds the 4 brand colours of one theme (light or dark).
 * All colours are hex strings in the form #RRGGBB.
 * @name BrandingColors
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.BrandingColors
 */
export interface BrandingColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
}
export interface BrandingColorsProtoMsg {
  typeUrl: "/bze.tokenfactory.BrandingColors";
  value: Uint8Array;
}
/**
 * BrandingColors holds the 4 brand colours of one theme (light or dark).
 * All colours are hex strings in the form #RRGGBB.
 * @name BrandingColorsAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.BrandingColors
 */
export interface BrandingColorsAmino {
  background?: string;
  text?: string;
  primary?: string;
  secondary?: string;
}
export interface BrandingColorsAminoMsg {
  type: "/bze.tokenfactory.BrandingColors";
  value: BrandingColorsAmino;
}
/**
 * BrandingColors holds the 4 brand colours of one theme (light or dark).
 * All colours are hex strings in the form #RRGGBB.
 * @name BrandingColorsSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.BrandingColors
 */
export interface BrandingColorsSDKType {
  background: string;
  text: string;
  primary: string;
  secondary: string;
}
/**
 * DenomBranding is the on-chain branding package of a factory denom:
 * one font id plus a light and a dark palette. The package is
 * all-or-nothing: font and all 8 colours must be present and valid.
 * @name DenomBranding
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBranding
 */
export interface DenomBranding {
  font: string;
  light?: BrandingColors;
  dark?: BrandingColors;
}
export interface DenomBrandingProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomBranding";
  value: Uint8Array;
}
/**
 * DenomBranding is the on-chain branding package of a factory denom:
 * one font id plus a light and a dark palette. The package is
 * all-or-nothing: font and all 8 colours must be present and valid.
 * @name DenomBrandingAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBranding
 */
export interface DenomBrandingAmino {
  font?: string;
  light?: BrandingColorsAmino;
  dark?: BrandingColorsAmino;
}
export interface DenomBrandingAminoMsg {
  type: "/bze.tokenfactory.DenomBranding";
  value: DenomBrandingAmino;
}
/**
 * DenomBranding is the on-chain branding package of a factory denom:
 * one font id plus a light and a dark palette. The package is
 * all-or-nothing: font and all 8 colours must be present and valid.
 * @name DenomBrandingSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBranding
 */
export interface DenomBrandingSDKType {
  font: string;
  light?: BrandingColorsSDKType;
  dark?: BrandingColorsSDKType;
}
/**
 * DenomBrandingRecord pairs a denom with its branding package. Used by the
 * AllDenomBranding query and by genesis import/export.
 * @name DenomBrandingRecord
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingRecord
 */
export interface DenomBrandingRecord {
  denom: string;
  branding?: DenomBranding;
}
export interface DenomBrandingRecordProtoMsg {
  typeUrl: "/bze.tokenfactory.DenomBrandingRecord";
  value: Uint8Array;
}
/**
 * DenomBrandingRecord pairs a denom with its branding package. Used by the
 * AllDenomBranding query and by genesis import/export.
 * @name DenomBrandingRecordAmino
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingRecord
 */
export interface DenomBrandingRecordAmino {
  denom?: string;
  branding?: DenomBrandingAmino;
}
export interface DenomBrandingRecordAminoMsg {
  type: "/bze.tokenfactory.DenomBrandingRecord";
  value: DenomBrandingRecordAmino;
}
/**
 * DenomBrandingRecord pairs a denom with its branding package. Used by the
 * AllDenomBranding query and by genesis import/export.
 * @name DenomBrandingRecordSDKType
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingRecord
 */
export interface DenomBrandingRecordSDKType {
  denom: string;
  branding?: DenomBrandingSDKType;
}
function createBaseBrandingColors(): BrandingColors {
  return {
    background: "",
    text: "",
    primary: "",
    secondary: ""
  };
}
/**
 * BrandingColors holds the 4 brand colours of one theme (light or dark).
 * All colours are hex strings in the form #RRGGBB.
 * @name BrandingColors
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.BrandingColors
 */
export const BrandingColors = {
  typeUrl: "/bze.tokenfactory.BrandingColors",
  is(o: any): o is BrandingColors {
    return o && (o.$typeUrl === BrandingColors.typeUrl || typeof o.background === "string" && typeof o.text === "string" && typeof o.primary === "string" && typeof o.secondary === "string");
  },
  isSDK(o: any): o is BrandingColorsSDKType {
    return o && (o.$typeUrl === BrandingColors.typeUrl || typeof o.background === "string" && typeof o.text === "string" && typeof o.primary === "string" && typeof o.secondary === "string");
  },
  isAmino(o: any): o is BrandingColorsAmino {
    return o && (o.$typeUrl === BrandingColors.typeUrl || typeof o.background === "string" && typeof o.text === "string" && typeof o.primary === "string" && typeof o.secondary === "string");
  },
  encode(message: BrandingColors, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.background !== "") {
      writer.uint32(10).string(message.background);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.primary !== "") {
      writer.uint32(26).string(message.primary);
    }
    if (message.secondary !== "") {
      writer.uint32(34).string(message.secondary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BrandingColors {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrandingColors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.background = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.primary = reader.string();
          break;
        case 4:
          message.secondary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BrandingColors>): BrandingColors {
    const message = createBaseBrandingColors();
    message.background = object.background ?? "";
    message.text = object.text ?? "";
    message.primary = object.primary ?? "";
    message.secondary = object.secondary ?? "";
    return message;
  },
  fromAmino(object: BrandingColorsAmino): BrandingColors {
    const message = createBaseBrandingColors();
    if (object.background !== undefined && object.background !== null) {
      message.background = object.background;
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    }
    if (object.primary !== undefined && object.primary !== null) {
      message.primary = object.primary;
    }
    if (object.secondary !== undefined && object.secondary !== null) {
      message.secondary = object.secondary;
    }
    return message;
  },
  toAmino(message: BrandingColors): BrandingColorsAmino {
    const obj: any = {};
    obj.background = message.background === "" ? undefined : message.background;
    obj.text = message.text === "" ? undefined : message.text;
    obj.primary = message.primary === "" ? undefined : message.primary;
    obj.secondary = message.secondary === "" ? undefined : message.secondary;
    return obj;
  },
  fromAminoMsg(object: BrandingColorsAminoMsg): BrandingColors {
    return BrandingColors.fromAmino(object.value);
  },
  fromProtoMsg(message: BrandingColorsProtoMsg): BrandingColors {
    return BrandingColors.decode(message.value);
  },
  toProto(message: BrandingColors): Uint8Array {
    return BrandingColors.encode(message).finish();
  },
  toProtoMsg(message: BrandingColors): BrandingColorsProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.BrandingColors",
      value: BrandingColors.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomBranding(): DenomBranding {
  return {
    font: "",
    light: undefined,
    dark: undefined
  };
}
/**
 * DenomBranding is the on-chain branding package of a factory denom:
 * one font id plus a light and a dark palette. The package is
 * all-or-nothing: font and all 8 colours must be present and valid.
 * @name DenomBranding
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBranding
 */
export const DenomBranding = {
  typeUrl: "/bze.tokenfactory.DenomBranding",
  is(o: any): o is DenomBranding {
    return o && (o.$typeUrl === DenomBranding.typeUrl || typeof o.font === "string");
  },
  isSDK(o: any): o is DenomBrandingSDKType {
    return o && (o.$typeUrl === DenomBranding.typeUrl || typeof o.font === "string");
  },
  isAmino(o: any): o is DenomBrandingAmino {
    return o && (o.$typeUrl === DenomBranding.typeUrl || typeof o.font === "string");
  },
  encode(message: DenomBranding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.font !== "") {
      writer.uint32(10).string(message.font);
    }
    if (message.light !== undefined) {
      BrandingColors.encode(message.light, writer.uint32(18).fork()).ldelim();
    }
    if (message.dark !== undefined) {
      BrandingColors.encode(message.dark, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomBranding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomBranding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.font = reader.string();
          break;
        case 2:
          message.light = BrandingColors.decode(reader, reader.uint32());
          break;
        case 3:
          message.dark = BrandingColors.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomBranding>): DenomBranding {
    const message = createBaseDenomBranding();
    message.font = object.font ?? "";
    message.light = object.light !== undefined && object.light !== null ? BrandingColors.fromPartial(object.light) : undefined;
    message.dark = object.dark !== undefined && object.dark !== null ? BrandingColors.fromPartial(object.dark) : undefined;
    return message;
  },
  fromAmino(object: DenomBrandingAmino): DenomBranding {
    const message = createBaseDenomBranding();
    if (object.font !== undefined && object.font !== null) {
      message.font = object.font;
    }
    if (object.light !== undefined && object.light !== null) {
      message.light = BrandingColors.fromAmino(object.light);
    }
    if (object.dark !== undefined && object.dark !== null) {
      message.dark = BrandingColors.fromAmino(object.dark);
    }
    return message;
  },
  toAmino(message: DenomBranding): DenomBrandingAmino {
    const obj: any = {};
    obj.font = message.font === "" ? undefined : message.font;
    obj.light = message.light ? BrandingColors.toAmino(message.light) : undefined;
    obj.dark = message.dark ? BrandingColors.toAmino(message.dark) : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomBrandingAminoMsg): DenomBranding {
    return DenomBranding.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomBrandingProtoMsg): DenomBranding {
    return DenomBranding.decode(message.value);
  },
  toProto(message: DenomBranding): Uint8Array {
    return DenomBranding.encode(message).finish();
  },
  toProtoMsg(message: DenomBranding): DenomBrandingProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomBranding",
      value: DenomBranding.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DenomBranding.typeUrl)) {
      return;
    }
    BrandingColors.registerTypeUrl();
  }
};
function createBaseDenomBrandingRecord(): DenomBrandingRecord {
  return {
    denom: "",
    branding: undefined
  };
}
/**
 * DenomBrandingRecord pairs a denom with its branding package. Used by the
 * AllDenomBranding query and by genesis import/export.
 * @name DenomBrandingRecord
 * @package bze.tokenfactory
 * @see proto type: bze.tokenfactory.DenomBrandingRecord
 */
export const DenomBrandingRecord = {
  typeUrl: "/bze.tokenfactory.DenomBrandingRecord",
  is(o: any): o is DenomBrandingRecord {
    return o && (o.$typeUrl === DenomBrandingRecord.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomBrandingRecordSDKType {
    return o && (o.$typeUrl === DenomBrandingRecord.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomBrandingRecordAmino {
    return o && (o.$typeUrl === DenomBrandingRecord.typeUrl || typeof o.denom === "string");
  },
  encode(message: DenomBrandingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.branding !== undefined) {
      DenomBranding.encode(message.branding, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomBrandingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomBrandingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.branding = DenomBranding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomBrandingRecord>): DenomBrandingRecord {
    const message = createBaseDenomBrandingRecord();
    message.denom = object.denom ?? "";
    message.branding = object.branding !== undefined && object.branding !== null ? DenomBranding.fromPartial(object.branding) : undefined;
    return message;
  },
  fromAmino(object: DenomBrandingRecordAmino): DenomBrandingRecord {
    const message = createBaseDenomBrandingRecord();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.branding !== undefined && object.branding !== null) {
      message.branding = DenomBranding.fromAmino(object.branding);
    }
    return message;
  },
  toAmino(message: DenomBrandingRecord): DenomBrandingRecordAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.branding = message.branding ? DenomBranding.toAmino(message.branding) : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomBrandingRecordAminoMsg): DenomBrandingRecord {
    return DenomBrandingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomBrandingRecordProtoMsg): DenomBrandingRecord {
    return DenomBrandingRecord.decode(message.value);
  },
  toProto(message: DenomBrandingRecord): Uint8Array {
    return DenomBrandingRecord.encode(message).finish();
  },
  toProtoMsg(message: DenomBrandingRecord): DenomBrandingRecordProtoMsg {
    return {
      typeUrl: "/bze.tokenfactory.DenomBrandingRecord",
      value: DenomBrandingRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DenomBrandingRecord.typeUrl)) {
      return;
    }
    DenomBranding.registerTypeUrl();
  }
};