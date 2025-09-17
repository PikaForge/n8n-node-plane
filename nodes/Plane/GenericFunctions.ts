import { IDataObject, IExecuteFunctions, IHookFunctions, IHttpRequestMethods, ILoadOptionsFunctions, IRequestOptions } from "n8n-workflow";

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
        headers: {},
        method,
        body,
        qs: query,
        url: uri || `${credentials.baseUrl}/api/v1${endpoint}`,
        json: true,
    }

    const optionsWithDefaults = Object.assign({}, defaultOptions, options);
    if (['GET', 'HEAD', "DELETE"].includes(method) || optionsWithDefaults.body === null || optionsWithDefaults.body.length === 0)
        delete optionsWithDefaults.body;

    return this.helpers.requestWithAuthentication.call(this, 'planeApi', optionsWithDefaults);
}