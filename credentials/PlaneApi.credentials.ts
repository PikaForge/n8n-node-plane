import { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from "n8n-workflow";
import { PLANE_HOSTED_BASE_URL } from "../nodes/Plane/config";

export class PlaneApi implements ICredentialType {
    name = 'planeApi';
    displayName = 'Plane API'
    documentationUrl = 'plane';

    properties: INodeProperties[] = [
        {
            displayName: 'Base URL',
            name: 'baseUrl',
            type: 'string',
            required: true,
            description: 'The base URL of the Plane instance to connect to. Leave empty to use the hosted version.',
            placeholder: PLANE_HOSTED_BASE_URL,
            default: PLANE_HOSTED_BASE_URL,
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: { password: true },
            required: true,
            default: '',
        },
    ];

    authenticate?: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'x-api-key': '={{$credentials.apiKey}}',
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials?.baseUrl}}',
            url: '/api/v1/projects',
        },
    };
}