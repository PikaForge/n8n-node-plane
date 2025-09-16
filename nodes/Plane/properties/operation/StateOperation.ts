import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const StateOperation = ResourceOperationNodeProperties.create(
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
)