/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type CreateAgentRequestBody = {
    /**
     * The name of the agent. Only used for your own reference.
     */
    agentName?: string | undefined;
    /**
     * Pre-defined message for agent to say in the begining of call. Only used when `enable_begin_message` is true. When empty, agent would wait for user to talk first.
     */
    beginMessage?: string | undefined;
    /**
     * Whether the agent begins the call with a pre-defined message. When this is false, the agent will still start the call, but with a dynamic message. If you wish for user to be the first to talk, set this to true and set `begin_message` as empty string.
     */
    enableBeginMessage?: boolean | undefined;
    /**
     * Whether the agent can end a call. If false, the agent would never end a call.
     */
    enableEndCall?: boolean | undefined;
    /**
     * Whether the agent attempts to end the call with a pre-defined message. When this is false, the agent might still be the last one speaking in the call, but the massage can be dynamic.
     */
    enableEndMessage?: boolean | undefined;
    /**
     * Pre-defined message for agent to say when agent ends the call. Only used when `enable_end_call` and `enable_end_message` is true. If you wish for agent to hang up without saying anything, set this to empty string.
     */
    endMessage?: string | undefined;
    /**
     * The prompt agent will follow. Check out [Prompt Best Practices](/features/prompt). Can use `${YOUR_PARAM_NAME}` to represent dynamic data that would get injected at each call. Learn more about [Agent Prompt Parameters](/features/prompt#prompt-parameters).
     */
    prompt: string;
    /**
     * Unique voice id used for the agent. Find list of available voices and their characteristics in [Voices](/features/voices).
     */
    voiceId: string;
};

export type CreateAgentResponse = {
    /**
     * Successfully created a new agent.
     */
    agent?: components.Agent | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace CreateAgentRequestBody$ {
    export type Inbound = {
        agent_name?: string | undefined;
        begin_message?: string | undefined;
        enable_begin_message?: boolean | undefined;
        enable_end_call?: boolean | undefined;
        enable_end_message?: boolean | undefined;
        end_message?: string | undefined;
        prompt: string;
        voice_id: string;
    };

    export const inboundSchema: z.ZodType<CreateAgentRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            agent_name: z.string().optional(),
            begin_message: z.string().optional(),
            enable_begin_message: z.boolean().optional(),
            enable_end_call: z.boolean().optional(),
            enable_end_message: z.boolean().optional(),
            end_message: z.string().optional(),
            prompt: z.string(),
            voice_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.agent_name === undefined ? null : { agentName: v.agent_name }),
                ...(v.begin_message === undefined ? null : { beginMessage: v.begin_message }),
                ...(v.enable_begin_message === undefined
                    ? null
                    : { enableBeginMessage: v.enable_begin_message }),
                ...(v.enable_end_call === undefined ? null : { enableEndCall: v.enable_end_call }),
                ...(v.enable_end_message === undefined
                    ? null
                    : { enableEndMessage: v.enable_end_message }),
                ...(v.end_message === undefined ? null : { endMessage: v.end_message }),
                prompt: v.prompt,
                voiceId: v.voice_id,
            };
        });

    export type Outbound = {
        agent_name?: string | undefined;
        begin_message?: string | undefined;
        enable_begin_message?: boolean | undefined;
        enable_end_call?: boolean | undefined;
        enable_end_message?: boolean | undefined;
        end_message?: string | undefined;
        prompt: string;
        voice_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAgentRequestBody> = z
        .object({
            agentName: z.string().optional(),
            beginMessage: z.string().optional(),
            enableBeginMessage: z.boolean().optional(),
            enableEndCall: z.boolean().optional(),
            enableEndMessage: z.boolean().optional(),
            endMessage: z.string().optional(),
            prompt: z.string(),
            voiceId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.agentName === undefined ? null : { agent_name: v.agentName }),
                ...(v.beginMessage === undefined ? null : { begin_message: v.beginMessage }),
                ...(v.enableBeginMessage === undefined
                    ? null
                    : { enable_begin_message: v.enableBeginMessage }),
                ...(v.enableEndCall === undefined ? null : { enable_end_call: v.enableEndCall }),
                ...(v.enableEndMessage === undefined
                    ? null
                    : { enable_end_message: v.enableEndMessage }),
                ...(v.endMessage === undefined ? null : { end_message: v.endMessage }),
                prompt: v.prompt,
                voice_id: v.voiceId,
            };
        });
}

/** @internal */
export namespace CreateAgentResponse$ {
    export type Inbound = {
        Agent?: components.Agent$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateAgentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            Agent: components.Agent$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Agent === undefined ? null : { agent: v.Agent }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Agent?: components.Agent$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAgentResponse> = z
        .object({
            agent: components.Agent$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.agent === undefined ? null : { Agent: v.agent }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}