import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const ModuleIssueProperties = [
    ResourceOperationNodeProperties.create(
        Resource.MODULE_ISSUE,
        {
            options: [
                {
                    name: 'Create Module Issue',
                    value: 'create',
                    description: 'Create a new module issue',
                    action: 'Create a module issue',
                },
                {
                    name: 'List Module Issues',
                    value: 'list',
                    description: 'Get a list of module issues',
                    action: 'List module issues',
                },
                {
                    name: 'Delete Module Issue',
                    value: 'delete',
                    description: 'Delete a module issue',
                    action: 'Delete a module issue',
                }
            ],
            default: 'create',
        }
    ),
    OperationNodeProperties.create(Resource.MODULE_ISSUE, [DefaultOperations.CREATE], {
        displayName: 'Data',
        name: 'data',
        type: 'json',
        default: '{ "issues": ["issueId"] }',
    }),
]