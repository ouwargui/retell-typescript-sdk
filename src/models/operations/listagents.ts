/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type ListAgentsResponse = {
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
  /**
   * Successfully retrieved all agents.
   */
  agents?: Array<components.Agent> | undefined;
};

/** @internal */
export namespace ListAgentsResponse$ {
  export type Inbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
    agents?: Array<components.Agent$.Inbound> | undefined;
  };

  export const inboundSchema: z.ZodType<
    ListAgentsResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      agents: z.array(components.Agent$.inboundSchema).optional(),
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.agents === undefined ? null : { agents: v.agents }),
      };
    });

  export type Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    agents?: Array<components.Agent$.Outbound> | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    ListAgentsResponse
  > = z
    .object({
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      agents: z.array(components.Agent$.outboundSchema).optional(),
    })
    .transform((v) => {
      return {
        ContentType: v.contentType,
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
        ...(v.agents === undefined ? null : { agents: v.agents }),
      };
    });
}
