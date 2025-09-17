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
        displayName: 'Module ID',
        name: 'moduleId',
        required: true,
        type: 'options',
        typeOptions: {
            loadOptionsDependsOn: ['workspaceSlug', 'projectId'],
            loadOptionsMethod: 'getModules',
        },
        default: '',
    }),
    OperationNodeProperties.create(Resource.MODULE, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
        displayName: 'Data',
        name: 'data',
        type: 'json',
        default: '',
    }),
]