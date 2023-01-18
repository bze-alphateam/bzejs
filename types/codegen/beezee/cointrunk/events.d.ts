import { Publisher, PublisherSDKType } from "./publisher";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface ArticleAddedEvent {
    publisher: string;
    articleId: Long;
    paid: boolean;
}
export interface ArticleAddedEventSDKType {
    publisher: string;
    article_id: Long;
    paid: boolean;
}
export interface PublisherAddedEvent {
    publisher?: Publisher;
}
export interface PublisherAddedEventSDKType {
    publisher?: PublisherSDKType;
}
export interface PublisherUpdatedEvent {
    publisher?: Publisher;
}
export interface PublisherUpdatedEventSDKType {
    publisher?: PublisherSDKType;
}
export interface AcceptedDomainAddedEvent {
    acceptedDomain?: AcceptedDomain;
}
export interface AcceptedDomainAddedEventSDKType {
    accepted_domain?: AcceptedDomainSDKType;
}
export interface AcceptedDomainUpdatedEvent {
    acceptedDomain?: AcceptedDomain;
}
export interface AcceptedDomainUpdatedEventSDKType {
    accepted_domain?: AcceptedDomainSDKType;
}
export interface PublisherRespectPaidEvent {
    respectPaid: Long;
    publisherReward: Long;
    communityPoolFunds: Long;
    publisher: string;
}
export interface PublisherRespectPaidEventSDKType {
    respect_paid: Long;
    publisher_reward: Long;
    community_pool_funds: Long;
    publisher: string;
}
export declare const ArticleAddedEvent: {
    encode(message: ArticleAddedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArticleAddedEvent;
    fromJSON(object: any): ArticleAddedEvent;
    toJSON(message: ArticleAddedEvent): unknown;
    fromPartial(object: Partial<ArticleAddedEvent>): ArticleAddedEvent;
};
export declare const PublisherAddedEvent: {
    encode(message: PublisherAddedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherAddedEvent;
    fromJSON(object: any): PublisherAddedEvent;
    toJSON(message: PublisherAddedEvent): unknown;
    fromPartial(object: Partial<PublisherAddedEvent>): PublisherAddedEvent;
};
export declare const PublisherUpdatedEvent: {
    encode(message: PublisherUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherUpdatedEvent;
    fromJSON(object: any): PublisherUpdatedEvent;
    toJSON(message: PublisherUpdatedEvent): unknown;
    fromPartial(object: Partial<PublisherUpdatedEvent>): PublisherUpdatedEvent;
};
export declare const AcceptedDomainAddedEvent: {
    encode(message: AcceptedDomainAddedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainAddedEvent;
    fromJSON(object: any): AcceptedDomainAddedEvent;
    toJSON(message: AcceptedDomainAddedEvent): unknown;
    fromPartial(object: Partial<AcceptedDomainAddedEvent>): AcceptedDomainAddedEvent;
};
export declare const AcceptedDomainUpdatedEvent: {
    encode(message: AcceptedDomainUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainUpdatedEvent;
    fromJSON(object: any): AcceptedDomainUpdatedEvent;
    toJSON(message: AcceptedDomainUpdatedEvent): unknown;
    fromPartial(object: Partial<AcceptedDomainUpdatedEvent>): AcceptedDomainUpdatedEvent;
};
export declare const PublisherRespectPaidEvent: {
    encode(message: PublisherRespectPaidEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherRespectPaidEvent;
    fromJSON(object: any): PublisherRespectPaidEvent;
    toJSON(message: PublisherRespectPaidEvent): unknown;
    fromPartial(object: Partial<PublisherRespectPaidEvent>): PublisherRespectPaidEvent;
};
