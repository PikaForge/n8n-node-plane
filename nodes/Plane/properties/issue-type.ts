import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssueTypeProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE_TYPE,
        {
            options: [
                {
                    name: 'Create Issue Type',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new issue type',
                    action: 'Create an issue type',
                },
                {
                    name: 'List Issue Types',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of issue types',
                    action: 'List issue types',
                },
                {
                    name: 'Get Issue Type',
                    value: DefaultOperations.GET,
                    description: 'Get a specific issue type',
                    action: 'Get an issue type',
                },
                {
                    name: 'Update Issue Type',
                    value: DefaultOperations.UPDATE,
                    description: 'Update a specific issue type',
                    action: 'Update an issue type',
                },
                {
                    name: 'Delete Issue Type',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a specific issue type',
                    action: 'Delete an issue type',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.ISSUE_TYPE, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Issue Type ID',
        name: 'issueTypeId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.ISSUE_TYPE, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
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