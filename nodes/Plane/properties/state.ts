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
        displayName: 'Payload',
        name: 'payload',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        placeholder: 'Add Parameter',
        default: {
            parameters: [
                {
                    name: '',
                    value: '',
                },
            ],
        },
        options: [
            {
                name: 'parameters',
                displayName: 'Parameter',
                values: [
                    {
                        displayName: 'Name',
                        name: 'name',
                        type: 'string',
                        default: '',
                        description:
                            'ID of the field to set. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                        description: 'Value of the field to set',
                    },
                ],
            },
        ],
    }),
]