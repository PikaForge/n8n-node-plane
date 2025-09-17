import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations, IssueOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssueProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE,
        {
            options: [
                {
                    name: 'Create Issue',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new issue',
                    action: 'Create an issue',
                },
                {
                    name: 'List Issues',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of issues',
                    action: 'List issues',
                },
                {
                    name: 'Get Issue by UUID',
                    value: IssueOperations.GET_BY_UUID,
                    description: 'Get an issue by UUID',
                    action: 'Get an issue by UUID',
                },
                {
                    name: 'Get Issue by Sequence ID',
                    value: IssueOperations.GET_BY_SEQUENCE_ID,
                    description: 'Get an issue by Sequence ID',
                    action: 'Get an issue by Sequence ID',
                },
                {
                    name: 'Update Issue',
                    value: DefaultOperations.UPDATE,
                    description: 'Update an issue',
                    action: 'Update an issue',
                },
                {
                    name: 'Delete Issue',
                    value: DefaultOperations.DELETE,
                    description: 'Delete an issue',
                    action: 'Delete an issue',
                }
            ],
            default: 'create',
        }
    ),
    OperationNodeProperties.create(Resource.ISSUE, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Issue ID',
        name: 'issueId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.ISSUE, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
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