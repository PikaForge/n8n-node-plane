import { INodeType, INodeTypeDescription, NodeConnectionType } from "n8n-workflow";
import { ProjectProperties } from "./properties/project";
import { PlaneResource, Resource } from "./types/resource";

export class Plane implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Plane',
        name: 'plane',
        group: ['output'],
        icon: { light: 'file:plane.svg', dark: 'file:plane.svg' },
        version: 1,
        subtitle: '={{$parameter["operation"]}}',
        description: 'Consume Plane API',
        defaults: {
            name: 'Plane',
        },
        usableAsTool: true,
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        requestDefaults: {
            baseURL: 'https://api.plane.so/api/v1',
        },
        credentials: [
            {
                name: 'planeApi',
                required: true,
                displayOptions: {
                    show: {
                        authentication: ['accessToken'],
                    }
                },
                testedBy: {
                    request: {
                        method: 'GET',
                        url: '/projects',
                    }
                }
            }
        ],
        properties: [
            // --------------------------------------------------
            //         Resource
            // --------------------------------------------------
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    PlaneResource.getPropertyOptions(Resource.PROJECT),
                    PlaneResource.getPropertyOptions(Resource.STATE),
                    PlaneResource.getPropertyOptions(Resource.LABEL),
                    PlaneResource.getPropertyOptions(Resource.LINK),
                    PlaneResource.getPropertyOptions(Resource.ISSUE),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_ACTIVITY),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_COMMENT),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_TYPE),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_PROPERTIES),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_PROPERTY_OPTIONS),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_PROPERTY_VALUES),
                    PlaneResource.getPropertyOptions(Resource.ISSUE_ATTACHMENTS),
                    PlaneResource.getPropertyOptions(Resource.MODULE),
                    PlaneResource.getPropertyOptions(Resource.MODULE_ISSUE),
                    PlaneResource.getPropertyOptions(Resource.CYCLE),
                    PlaneResource.getPropertyOptions(Resource.CYCLE_ISSUE),
                    PlaneResource.getPropertyOptions(Resource.INTAKE_ISSUE),
                    PlaneResource.getPropertyOptions(Resource.WORKLOGS),
                    PlaneResource.getPropertyOptions(Resource.MEMBERS),
                ],
                default: 'project',
            },

            // --------------------------------------------------
            //         Operations
            // --------------------------------------------------
            ...ProjectProperties,
        ]
    }
}