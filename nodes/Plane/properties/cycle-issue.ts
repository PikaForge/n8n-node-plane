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
                    value: DefaultOperations.CREATE,
                    description: 'Create a new cycle issue',
                    action: 'Create a cycle issue',
                },
                {
                    name: 'List Cycle Issues',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of cycle issues',
                    action: 'List cycle issues',
                },
                {
                    name: 'Delete Cycle Issue',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a cycle issue',
                    action: 'Delete a cycle issue',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.CYCLE_ISSUE, [DefaultOperations.DELETE], {
        displayName: 'Issue ID',
        name: 'issueId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.CYCLE_ISSUE, [DefaultOperations.CREATE], {
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