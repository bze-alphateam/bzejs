import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import { Publisher, PublisherSDKType } from "./publisher";
import { Article, ArticleSDKType } from "./article";
import { AnonArticlesCounter, AnonArticlesCounterSDKType } from "./anon_articles_counter";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryAcceptedDomainRequest {
  pagination?: PageRequest;
}
export interface QueryAcceptedDomainRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAcceptedDomainResponse {
  acceptedDomain: AcceptedDomain[];
  pagination?: PageResponse;
}
export interface QueryAcceptedDomainResponseSDKType {
  acceptedDomain: AcceptedDomainSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPublisherRequest {
  pagination?: PageRequest;
}
export interface QueryPublisherRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPublisherResponse {
  publisher: Publisher[];
  pagination?: PageResponse;
}
export interface QueryPublisherResponseSDKType {
  publisher: PublisherSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPublisherByIndexRequest {
  index: string;
}
export interface QueryPublisherByIndexRequestSDKType {
  index: string;
}
export interface QueryPublisherByIndexResponse {
  publisher?: Publisher;
}
export interface QueryPublisherByIndexResponseSDKType {
  publisher?: PublisherSDKType;
}
export interface QueryAllArticlesRequest {
  pagination?: PageRequest;
}
export interface QueryAllArticlesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllArticlesResponse {
  article: Article[];
  pagination?: PageResponse;
}
export interface QueryAllArticlesResponseSDKType {
  article: ArticleSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAllAnonArticlesCountersRequest {
  pagination?: PageRequest;
}
export interface QueryAllAnonArticlesCountersRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAnonArticlesCountersResponse {
  AnonArticlesCounters: AnonArticlesCounter[];
  pagination?: PageResponse;
}
export interface QueryAllAnonArticlesCountersResponseSDKType {
  AnonArticlesCounters: AnonArticlesCounterSDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryAcceptedDomainRequest(): QueryAcceptedDomainRequest {
  return {
    pagination: undefined
  };
}

export const QueryAcceptedDomainRequest = {
  encode(message: QueryAcceptedDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAcceptedDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAcceptedDomainRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAcceptedDomainRequest>): QueryAcceptedDomainRequest {
    const message = createBaseQueryAcceptedDomainRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAcceptedDomainResponse(): QueryAcceptedDomainResponse {
  return {
    acceptedDomain: [],
    pagination: undefined
  };
}

export const QueryAcceptedDomainResponse = {
  encode(message: QueryAcceptedDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acceptedDomain) {
      AcceptedDomain.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAcceptedDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAcceptedDomainResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acceptedDomain.push(AcceptedDomain.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAcceptedDomainResponse>): QueryAcceptedDomainResponse {
    const message = createBaseQueryAcceptedDomainResponse();
    message.acceptedDomain = object.acceptedDomain?.map(e => AcceptedDomain.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPublisherRequest(): QueryPublisherRequest {
  return {
    pagination: undefined
  };
}

export const QueryPublisherRequest = {
  encode(message: QueryPublisherRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublisherRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPublisherRequest>): QueryPublisherRequest {
    const message = createBaseQueryPublisherRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPublisherResponse(): QueryPublisherResponse {
  return {
    publisher: [],
    pagination: undefined
  };
}

export const QueryPublisherResponse = {
  encode(message: QueryPublisherResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.publisher) {
      Publisher.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublisherResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publisher.push(Publisher.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPublisherResponse>): QueryPublisherResponse {
    const message = createBaseQueryPublisherResponse();
    message.publisher = object.publisher?.map(e => Publisher.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPublisherByIndexRequest(): QueryPublisherByIndexRequest {
  return {
    index: ""
  };
}

export const QueryPublisherByIndexRequest = {
  encode(message: QueryPublisherByIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherByIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublisherByIndexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPublisherByIndexRequest>): QueryPublisherByIndexRequest {
    const message = createBaseQueryPublisherByIndexRequest();
    message.index = object.index ?? "";
    return message;
  }

};

function createBaseQueryPublisherByIndexResponse(): QueryPublisherByIndexResponse {
  return {
    publisher: undefined
  };
}

export const QueryPublisherByIndexResponse = {
  encode(message: QueryPublisherByIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publisher !== undefined) {
      Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPublisherByIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPublisherByIndexResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publisher = Publisher.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPublisherByIndexResponse>): QueryPublisherByIndexResponse {
    const message = createBaseQueryPublisherByIndexResponse();
    message.publisher = object.publisher !== undefined && object.publisher !== null ? Publisher.fromPartial(object.publisher) : undefined;
    return message;
  }

};

function createBaseQueryAllArticlesRequest(): QueryAllArticlesRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllArticlesRequest = {
  encode(message: QueryAllArticlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllArticlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArticlesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllArticlesRequest>): QueryAllArticlesRequest {
    const message = createBaseQueryAllArticlesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllArticlesResponse(): QueryAllArticlesResponse {
  return {
    article: [],
    pagination: undefined
  };
}

export const QueryAllArticlesResponse = {
  encode(message: QueryAllArticlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.article) {
      Article.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllArticlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArticlesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.article.push(Article.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllArticlesResponse>): QueryAllArticlesResponse {
    const message = createBaseQueryAllArticlesResponse();
    message.article = object.article?.map(e => Article.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllAnonArticlesCountersRequest(): QueryAllAnonArticlesCountersRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllAnonArticlesCountersRequest = {
  encode(message: QueryAllAnonArticlesCountersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAnonArticlesCountersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAnonArticlesCountersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllAnonArticlesCountersRequest>): QueryAllAnonArticlesCountersRequest {
    const message = createBaseQueryAllAnonArticlesCountersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllAnonArticlesCountersResponse(): QueryAllAnonArticlesCountersResponse {
  return {
    AnonArticlesCounters: [],
    pagination: undefined
  };
}

export const QueryAllAnonArticlesCountersResponse = {
  encode(message: QueryAllAnonArticlesCountersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.AnonArticlesCounters) {
      AnonArticlesCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAnonArticlesCountersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAnonArticlesCountersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.AnonArticlesCounters.push(AnonArticlesCounter.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllAnonArticlesCountersResponse>): QueryAllAnonArticlesCountersResponse {
    const message = createBaseQueryAllAnonArticlesCountersResponse();
    message.AnonArticlesCounters = object.AnonArticlesCounters?.map(e => AnonArticlesCounter.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};