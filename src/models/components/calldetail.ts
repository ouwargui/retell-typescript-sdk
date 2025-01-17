/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Status of call.
 */
export enum CallStatus {
  Registered = "registered",
  Ongoing = "ongoing",
  Ended = "ended",
  Error = "error",
}

/**
 * The audio encoding of the call.
 */
export enum AudioEncoding {
  S16le = "s16le",
  Mulaw = "mulaw",
}

/**
 * The protocol how audio websocket read and send audio bytes.
 */
export enum AudioWebsocketProtocol {
  Web = "web",
  Twilio = "twilio",
  Vonage = "vonage",
}

export type CallDetail = {
  /**
   * Corresponding agent id of this call.
   */
  agentId: string;
  /**
   * Unique id of the call. Used to identify in LLM websocket and used to authenticate in audio websocket.
   */
  callId: string;
  /**
   * Status of call.
   */
  callStatus: CallStatus;
  /**
   * The audio encoding of the call.
   */
  audioEncoding: AudioEncoding;
  /**
   * Sample rate of the conversation, the input and output audio bytes will all conform to this rate. Check the audio source, audio format, and voice used for the agent to select one that works.
   */
  sampleRate: number;
  /**
   * The protocol how audio websocket read and send audio bytes.
   */
  audioWebsocketProtocol: AudioWebsocketProtocol;
  /**
   * End timestamp (milliseconds since epoch) of the call. Available after call ends.
   */
  endTimestamp?: number | undefined;
  /**
   * Recording of the call. Available after call ends.
   */
  recordingUrl?: string | undefined;
  /**
   * Begin timestamp (milliseconds since epoch) of the call.
   */
  startTimestamp: number;
  /**
   * Transcription of the call. Available after call ends.
   */
  transcript?: string | undefined;
};

/** @internal */
export const CallStatus$ = z.nativeEnum(CallStatus);

/** @internal */
export const AudioWebsocketProtocol$ = z.nativeEnum(AudioWebsocketProtocol);

/** @internal */
export const AudioEncoding$ = z.nativeEnum(AudioEncoding);

/** @internal */
export namespace CallDetail$ {
  export type Inbound = {
    agent_id: string;
    call_id: string;
    call_status: CallStatus;
    audio_encoding: AudioEncoding;
    sample_rate: number;
    audio_websocket_protocol: AudioWebsocketProtocol;
    end_timestamp?: number | undefined;
    recording_url?: string | undefined;
    start_timestamp: number;
    transcript?: string | undefined;
  };

  export const inboundSchema: z.ZodType<CallDetail, z.ZodTypeDef, Inbound> = z
    .object({
      agent_id: z.string(),
      call_id: z.string(),
      call_status: CallStatus$,
      audio_encoding: AudioEncoding$,
      sample_rate: z.number().int(),
      audio_websocket_protocol: AudioWebsocketProtocol$,
      end_timestamp: z.number().int().optional(),
      recording_url: z.string().optional(),
      start_timestamp: z.number().int(),
      transcript: z.string().optional(),
    })
    .transform((v) => {
      return {
        agentId: v.agent_id,
        callId: v.call_id,
        callStatus: v.call_status,
        audioEncoding: v.audio_encoding,
        sampleRate: v.sample_rate,
        audioWebsocketProtocol: v.audio_websocket_protocol,
        ...(v.end_timestamp === undefined
          ? null
          : { endTimestamp: v.end_timestamp }),
        ...(v.recording_url === undefined
          ? null
          : { recordingUrl: v.recording_url }),
        startTimestamp: v.start_timestamp,
        ...(v.transcript === undefined ? null : { transcript: v.transcript }),
      };
    });

  export type Outbound = {
    agent_id: string;
    call_id: string;
    call_status: CallStatus;
    audio_encoding: AudioEncoding;
    sample_rate: number;
    audio_websocket_protocol: AudioWebsocketProtocol;
    end_timestamp?: number | undefined;
    recording_url?: string | undefined;
    start_timestamp: number;
    transcript?: string | undefined;
  };

  export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CallDetail> = z
    .object({
      agentId: z.string(),
      callId: z.string(),
      callStatus: CallStatus$,
      audioEncoding: AudioEncoding$,
      sampleRate: z.number().int(),
      audioWebsocketProtocol: AudioWebsocketProtocol$,
      endTimestamp: z.number().int().optional(),
      recordingUrl: z.string().optional(),
      startTimestamp: z.number().int(),
      transcript: z.string().optional(),
    })
    .transform((v) => {
      return {
        agent_id: v.agentId,
        call_id: v.callId,
        call_status: v.callStatus,
        audio_encoding: v.audioEncoding,
        sample_rate: v.sampleRate,
        audio_websocket_protocol: v.audioWebsocketProtocol,
        ...(v.endTimestamp === undefined
          ? null
          : { end_timestamp: v.endTimestamp }),
        ...(v.recordingUrl === undefined
          ? null
          : { recording_url: v.recordingUrl }),
        start_timestamp: v.startTimestamp,
        ...(v.transcript === undefined ? null : { transcript: v.transcript }),
      };
    });
}
