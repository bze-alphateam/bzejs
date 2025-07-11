//@ts-nocheck
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryNextSequenceSendRequest, QueryNextSequenceSendResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.nextSequenceSend = this.nextSequenceSend.bind(this);
    this.packetCommitment = this.packetCommitment.bind(this);
    this.packetCommitments = this.packetCommitments.bind(this);
    this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
    this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
    this.packetReceipt = this.packetReceipt.bind(this);
    this.unreceivedPackets = this.unreceivedPackets.bind(this);
    this.unreceivedAcks = this.unreceivedAcks.bind(this);
  }
  /* NextSequenceSend returns the next send sequence for a given channel. */
  async nextSequenceSend(params: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponseSDKType> {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/next_sequence_send`;
    return await this.req.get<QueryNextSequenceSendResponseSDKType>(endpoint);
  }
  /* PacketCommitment queries a stored packet commitment hash. */
  async packetCommitment(params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponseSDKType> {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments/${params.sequence}`;
    return await this.req.get<QueryPacketCommitmentResponseSDKType>(endpoint);
  }
  /* PacketCommitments queries a stored packet commitment hash. */
  async packetCommitments(params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments`;
    return await this.req.get<QueryPacketCommitmentsResponseSDKType>(endpoint, options);
  }
  /* PacketAcknowledgement queries a stored acknowledgement commitment hash. */
  async packetAcknowledgement(params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponseSDKType> {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_acks/${params.sequence}`;
    return await this.req.get<QueryPacketAcknowledgementResponseSDKType>(endpoint);
  }
  /* PacketAcknowledgements returns all packet acknowledgements associated with a channel. */
  async packetAcknowledgements(params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.packetCommitmentSequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packetCommitmentSequences;
    }
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_acknowledgements`;
    return await this.req.get<QueryPacketAcknowledgementsResponseSDKType>(endpoint, options);
  }
  /* PacketReceipt queries a stored packet receipt. */
  async packetReceipt(params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponseSDKType> {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_receipts/${params.sequence}`;
    return await this.req.get<QueryPacketReceiptResponseSDKType>(endpoint);
  }
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. */
  async unreceivedPackets(params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponseSDKType> {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments/${params.sequences}/unreceived_packets`;
    return await this.req.get<QueryUnreceivedPacketsResponseSDKType>(endpoint);
  }
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. */
  async unreceivedAcks(params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponseSDKType> {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments/${params.packetAckSequences}/unreceived_acks`;
    return await this.req.get<QueryUnreceivedAcksResponseSDKType>(endpoint);
  }
}