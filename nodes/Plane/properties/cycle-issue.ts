import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const CycleIssueProperties = [
    ResourceOperationNodeProperties.create(
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
    ),
    OperationNodeProperties.create(Resource.CYCLE_ISSUE, [DefaultOperations.CREATE], {
        displayName: 'Data',
        name: 'data',
        type: 'json',
        default: '{ "issues": ["issueId"] }',
    }),
]