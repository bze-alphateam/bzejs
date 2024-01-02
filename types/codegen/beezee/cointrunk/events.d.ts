import { Publisher, PublisherSDKType } from "./publisher";
import { AcceptedDomain, AcceptedDomainSDKType } from "./accepted_domain";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    fromPartial(object: DeepPartial<ArticleAddedEvent>): ArticleAddedEvent;
};
export declare const PublisherAddedEvent: {
    encode(message: PublisherAddedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherAddedEvent;
    fromPartial(object: DeepPartial<PublisherAddedEvent>): PublisherAddedEvent;
};
export declare const PublisherUpdatedEvent: {
    encode(message: PublisherUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherUpdatedEvent;
    fromPartial(object: DeepPartial<PublisherUpdatedEvent>): PublisherUpdatedEvent;
};
export declare const AcceptedDomainAddedEvent: {
    encode(message: AcceptedDomainAddedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainAddedEvent;
    fromPartial(object: DeepPartial<AcceptedDomainAddedEvent>): AcceptedDomainAddedEvent;
};
export declare const AcceptedDomainUpdatedEvent: {
    encode(message: AcceptedDomainUpdatedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedDomainUpdatedEvent;
    fromPartial(object: DeepPartial<AcceptedDomainUpdatedEvent>): AcceptedDomainUpdatedEvent;
};
export declare const PublisherRespectPaidEvent: {
    encode(message: PublisherRespectPaidEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublisherRespectPaidEvent;
    fromPartial(object: DeepPartial<PublisherRespectPaidEvent>): PublisherRespectPaidEvent;
};
