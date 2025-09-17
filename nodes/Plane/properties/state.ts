import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const StateProperties = [
    ResourceOperationNodeProperties.create(
        Resource.STATE,
        {
            options: [
                {
                    name: 'Create State',
                    value: 'create',
                    description: 'Create a new state',
                    action: 'Create a state',
                },
                {
                    name: 'List States',
                    value: 'list',
                    description: 'Get a list of states',
                    action: 'List states',
                },
                {
                    name: 'Get State',
                    value: 'get',
                    description: 'Get a state',
                    action: 'Get a state',
                },
                {
                    name: 'Update State',
                    value: 'update',
                    description: 'Update a state',
                    action: 'Update a state',
                },
                {
                    name: 'Delete State',
                    value: 'delete',
                    description: 'Delete a state',
                    action: 'Delete a state',
                }
            ],
            default: 'create',
        }
    ),
    OperationNodeProperties.create(Resource.STATE, Object.values(DefaultOperations), {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.STATE, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'State ID',
        name: 'stateId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.STATE, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
        displayName: 'Data',
        name: 'data',
        type: 'json',
        default: '',
    }),
]