import { IDataObject, IExecuteFunctions, IHookFunctions, IHttpRequestMethods, IHttpRequestOptions, ILoadOptionsFunctions } from "n8n-workflow";

export async function planeApiRequest(
    this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
    method: IHttpRequestMethods,
    endpoint: `/${string}`,
    body: object,
    query?: IDataObject,
    uri?: string,
) {
    const authenticationMethod = this.getNodeParameter('authentication', 0) as string;

    const options: IHttpRequestOptions = {
        headers: {},
        method,
        body: method === 'GET' || method === 'HEAD' || method === 'DELETE' ? null : { data: body },
        qs: query,
        url: uri || `https://api.plane.com/v1${endpoint}`,
        json: true,
    }

    if (options.body === null) delete options.body;

    const credentialType = authenticationMethod === 'accessToken' ? 'planeApi' : 'planeOAuth2Api';
    return this.helpers.requestWithAuthentication.call(this, credentialType, options);
}