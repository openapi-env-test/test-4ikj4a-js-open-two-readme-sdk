/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/testMappers";
import * as Parameters from "../models/parameters";
import { AnotherServiceClientContext } from "../anotherServiceClientContext";

/** Class representing a Test. */
export class Test {
  private readonly client: AnotherServiceClientContext;

  /**
   * Create a Test.
   * @param {AnotherServiceClientContext} client Reference to the service client.
   */
  constructor(client: AnotherServiceClientContext) {
    this.client = client;
  }

  /**
   * Get test.
   * @param [options] The optional parameters
   * @returns Promise<Models.TestGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.TestGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.TestGetResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TestGetResult>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TestGetResult>, callback?: msRest.ServiceCallback<Models.TestGetResult>): Promise<Models.TestGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TestGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.TestService/test",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TestGetResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
