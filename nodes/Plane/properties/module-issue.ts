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
                    value: DefaultOperations.CREATE,
                    description: 'Create a new module issue',
                    action: 'Create a module issue',
                },
                {
                    name: 'List Module Issues',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of module issues',
                    action: 'List module issues',
                },
                {
                    name: 'Delete Module Issue',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a module issue',
                    action: 'Delete a module issue',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.MODULE_ISSUE, [DefaultOperations.DELETE], {
        displayName: 'Issue ID',
        name: 'issueId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.MODULE_ISSUE, [DefaultOperations.CREATE], {
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