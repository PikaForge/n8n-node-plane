import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const CycleIssueOperation = ResourceOperationNodeProperties.create(
    Resource.CYCLE_ISSUE,
    {
        options: [
            {
                name: 'Create Cycle Issue',
                value: 'create',
                description: 'Create a new cycle issue',
                action: 'Create a cycle issue',
            },
            {
                name: 'List Cycle Issues',
                value: 'list',
                description: 'Get a list of cycle issues',
                action: 'List cycle issues',
            },
            {
                name: 'Delete Cycle Issue',
                value: 'delete',
                description: 'Delete a cycle issue',
                action: 'Delete a cycle issue',
            }
        ],
        default: 'create',
    }
)