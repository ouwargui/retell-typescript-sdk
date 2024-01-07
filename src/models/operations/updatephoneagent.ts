/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type UpdatePhoneAgentRequestBody = {
    /**
     * Unique agent id to associate with this phone number.
     */
    agentId: string;
};

export type UpdatePhoneAgentRequest = {
    requestBody: UpdatePhoneAgentRequestBody;
    /**
     * Phone number in E.164 format that require agent update.
     */
    phoneNumber: string;
};

export type UpdatePhoneAgentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Successfully updated the phone number's agent.
     */
    phoneNumber?: components.PhoneNumber | undefined;
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
export namespace UpdatePhoneAgentRequestBody$ {
    export type Inbound = {
        agent_id: string;
    };

    export const inboundSchema: z.ZodType<UpdatePhoneAgentRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            agent_id: z.string(),
        })
        .transform((v) => {
            return {
                agentId: v.agent_id,
            };
        });

    export type Outbound = {
        agent_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePhoneAgentRequestBody> = z
        .object({
            agentId: z.string(),
        })
        .transform((v) => {
            return {
                agent_id: v.agentId,
            };
        });
}

/** @internal */
export namespace UpdatePhoneAgentRequest$ {
    export type Inbound = {
        RequestBody: UpdatePhoneAgentRequestBody$.Inbound;
        phone_number: string;
    };

    export const inboundSchema: z.ZodType<UpdatePhoneAgentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => UpdatePhoneAgentRequestBody$.inboundSchema),
            phone_number: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                phoneNumber: v.phone_number,
            };
        });

    export type Outbound = {
        RequestBody: UpdatePhoneAgentRequestBody$.Outbound;
        phone_number: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePhoneAgentRequest> = z
        .object({
            requestBody: z.lazy(() => UpdatePhoneAgentRequestBody$.outboundSchema),
            phoneNumber: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                phone_number: v.phoneNumber,
            };
        });
}

/** @internal */
export namespace UpdatePhoneAgentResponse$ {
    export type Inbound = {
        ContentType: string;
        PhoneNumber?: components.PhoneNumber$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdatePhoneAgentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            PhoneNumber: components.PhoneNumber$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.PhoneNumber === undefined ? null : { phoneNumber: v.PhoneNumber }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        PhoneNumber?: components.PhoneNumber$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePhoneAgentResponse> = z
        .object({
            contentType: z.string(),
            phoneNumber: components.PhoneNumber$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.phoneNumber === undefined ? null : { PhoneNumber: v.phoneNumber }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}