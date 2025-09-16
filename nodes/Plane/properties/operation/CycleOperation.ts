import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const CycleOperation = ResourceOperationNodeProperties.create(
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
)