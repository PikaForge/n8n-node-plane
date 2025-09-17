import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssueProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE,
        {
            options: [
                {
                    name: 'Create Issue',
                    value: 'create',
                    description: 'Create a new issue',
                    action: 'Create an issue',
                },
                {
                    name: 'List Issues',
                    value: 'list',
                    description: 'Get a list of issues',
                    action: 'List issues',
                },
                {
                    name: 'Get Issue by UUID',
                    value: 'getByUUID',
                    description: 'Get an issue by UUID',
                    action: 'Get an issue by UUID',
                },
                {
                    name: 'Get Issue by Sequence ID',
                    value: 'getBySequenceID',
                    description: 'Get an issue by Sequence ID',
                    action: 'Get an issue by Sequence ID',
                },
                {
                    name: 'Update Issue',
                    value: 'update',
                    description: 'Update an issue',
                    action: 'Update an issue',
                },
                {
                    name: 'Delete Issue',
                    value: 'delete',
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
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        options: [],
    }),
]