import { IDataObject, IExecuteFunctions, IHookFunctions, IHttpRequestMethods, ILoadOptionsFunctions, IRequestOptions, JsonObject, NodeApiError } from "n8n-workflow";

export type BodyParameter = {
    name: string;
    value: string;
    parameterType?: 'formBinaryData' | 'formData';
};


export async function planeApiRequest(
    this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
    method: IHttpRequestMethods,
    endpoint: string,
    body: IDataObject = {},
    query: IDataObject = {},
    uri?: string,
    options: IRequestOptions = {}
) {
    const credentials = await this.getCredentials('planeApi');
    if (!credentials) {
        throw new Error('No credentials got returned!');
    }

    const baseUrl = credentials.baseUrl as string;
    const cleanBaseUrl = baseUrl.endsWith('/api/v1') ? baseUrl : `${baseUrl}/api/v1`;

    const defaultOptions: IRequestOptions = {
        method,
        body,
        qs: query,
        uri: uri || `${cleanBaseUrl}${endpoint}`,
        json: true,
        gzip: true,
        followRedirect: true,
        followAllRedirects: true, 
        timeout: 300000, // 5 minutes timeout like HttpRequest V3
        headers: {
            'X-API-Key': credentials.apiKey as string,
            'Accept': 'application/json',
        },
    }

    const optionsWithDefaults = Object.assign({}, defaultOptions, options);

    // Handle body for different HTTP methods like HttpRequest V3
    if (['GET', 'HEAD', "DELETE"].includes(method)) {
        delete optionsWithDefaults.body;
    } else if (optionsWithDefaults.body && Object.keys(optionsWithDefaults.body).length === 0) {
        delete optionsWithDefaults.body;
    }

    // Set Content-Type header only when we have a body and it's JSON
    if (optionsWithDefaults.body && optionsWithDefaults.json) {
        optionsWithDefaults.headers = {
            ...optionsWithDefaults.headers,
            'Content-Type': 'application/json',
        };
    }

    try {
        return this.helpers.requestWithAuthentication.call(this, 'planeApi', optionsWithDefaults);
    } catch (error) {
        const statusCode = error.errorCode || error.statusCode || error.response?.statusCode || 'UNKNOWN';
        const requestUri = optionsWithDefaults.uri || optionsWithDefaults.url;
        const errorMessage = `Plane API Error: ${method} ${requestUri} - [${statusCode}] ${error.message}`;

        // Add detailed error information for debugging
        const debugInfo: JsonObject = {
            method,
            uri: requestUri ?? '',
            statusCode,
            headers: optionsWithDefaults.headers as JsonObject,
            body: optionsWithDefaults.body,
            requestOptions: optionsWithDefaults as JsonObject,
            errorMessage: error.message,
            responseBody: error.response?.body,
            responseHeaders: error.response?.headers
        };

        throw new NodeApiError(this.getNode(), debugInfo, { message: errorMessage });
    }
}

export type BodyParametersReducer = (
    acc: IDataObject,
    cur: { name: string; value: string },
) => Promise<IDataObject>;

export async function reduceAsync<T, R>(
    arr: T[],
    reducer: (acc: Awaited<Promise<R>>, cur: T) => Promise<R>,
    init: Promise<R> = Promise.resolve({} as R),
): Promise<R> {
    return await arr.reduce(async (promiseAcc, item) => {
        return await reducer(await promiseAcc, item);
    }, init);
}

export const prepareRequestBody = async (
    parameters: BodyParameter[],
    bodyType: string,
    version: number,
    defaultReducer: BodyParametersReducer,
): Promise<Record<string, unknown>> => {
    if (bodyType === 'json' && version >= 4) {
        return await parameters.reduce(async (acc, entry) => {
            const result: IDataObject = await acc;
            result[entry.name] = entry.value;
            return result;
        }, Promise.resolve({}));
    } else {
        return await reduceAsync(parameters, defaultReducer);
    }
};
