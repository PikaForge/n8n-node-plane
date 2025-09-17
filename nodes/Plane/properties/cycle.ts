import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const CycleProperties = [
    ResourceOperationNodeProperties.create(
        Resource.CYCLE,
        {
            options: [
                {
                    name: 'Create Cycle',
                    value: 'create',
                    description: 'Create a new cycle',
                    action: 'Create a cycle',
                },
                {
                    name: 'List Cycles',
                    value: 'list',
                    description: 'Get a list of cycles',
                    action: 'List cycles',
                },
                {
                    name: 'Get Cycle',
                    value: 'get',
                    description: 'Get a cycle',
                    action: 'Get a cycle',
                },
                {
                    name: 'Update Cycle',
                    value: 'update',
                    description: 'Update a cycle',
                    action: 'Update a cycle',
                },
                {
                    name: 'Delete Cycle',
                    value: 'delete',
                    description: 'Delete a cycle',
                    action: 'Delete a cycle',
                }
            ],
            default: 'create',
        }
    ),
    OperationNodeProperties.create(Resource.CYCLE, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Cycle ID',
        name: 'cycleId',
        required: true,
        type: 'options',
        typeOptions: {
            loadOptionsDependsOn: ['workspaceSlug', 'projectId'],
            loadOptionsMethod: 'getCycles',
        },
        default: '',
    }),
    OperationNodeProperties.create(Resource.CYCLE, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
        displayName: 'Data',
        name: 'data',
        type: 'json',
        default: '',
    }),
]