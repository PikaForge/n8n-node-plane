import { ApplicationError, IDataObject, IExecuteFunctions, IHookFunctions, IHttpRequestMethods, ILoadOptionsFunctions, IRequestOptions } from "n8n-workflow";

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

    const defaultOptions: IRequestOptions = {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
        qs: query,
        url: uri || `${credentials.baseUrl}/api/v1${endpoint}`,
        json: true,
    }

    const optionsWithDefaults = Object.assign({}, defaultOptions, options);
    if (['GET', 'HEAD', "DELETE"].includes(method) || optionsWithDefaults.body === null || optionsWithDefaults.body.length === 0)
        delete optionsWithDefaults.body;

    try {
        return this.helpers.requestWithAuthentication.call(this, 'planeApi', optionsWithDefaults);
    } catch (error) {
        throw new ApplicationError(`Plane Error: [${error.errorCode}] ${error.message} ${JSON.stringify(optionsWithDefaults)}`);
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
