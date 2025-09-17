import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssueCommentProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE_COMMENT,
        {
            options: [
                {
                    name: 'Create Issue Comment',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new issue comment',
                    action: 'Create an issue comment',
                },
                {
                    name: 'List Issue Comments',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of issue comments',
                    action: 'List issue comments',
                },
                {
                    name: 'Get Issue Comment',
                    value: DefaultOperations.GET,
                    description: 'Get a specific issue comment',
                    action: 'Get an issue comment',
                },
                {
                    name: 'Update Issue Comment',
                    value: DefaultOperations.UPDATE,
                    description: 'Update a specific issue comment',
                    action: 'Update an issue comment',
                },
                {
                    name: 'Delete Issue Comment',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a specific issue comment',
                    action: 'Delete an issue comment',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.ISSUE_COMMENT, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Comment ID',
        name: 'commentId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.ISSUE_COMMENT, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
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