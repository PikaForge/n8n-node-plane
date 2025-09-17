import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const ModuleProperties = [
    ResourceOperationNodeProperties.create(
        Resource.MODULE,
        {
            options: [
                {
                    name: 'Create Module',
                    value: 'create',
                    description: 'Create a new module',
                    action: 'Create a module',
                },
                {
                    name: 'List Modules',
                    value: 'list',
                    description: 'Get a list of modules',
                    action: 'List modules',
                },
                {
                    name: 'Get Module',
                    value: 'get',
                    description: 'Get a module',
                    action: 'Get a module',
                },
                {
                    name: 'Update Module',
                    value: 'update',
                    description: 'Update a module',
                    action: 'Update a module',
                },
                {
                    name: 'Delete Module',
                    value: 'delete',
                    description: 'Delete a module',
                    action: 'Delete a module',
                }
            ],
            default: 'create',
        }
    ),
    OperationNodeProperties.create(Resource.MODULE, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Module Name or ID',
        name: 'moduleId',
        required: true,
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsDependsOn: ['workspaceSlug', 'projectId'],
            loadOptionsMethod: 'getModules',
        },
        default: '',
    }),
    OperationNodeProperties.create(Resource.MODULE, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
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