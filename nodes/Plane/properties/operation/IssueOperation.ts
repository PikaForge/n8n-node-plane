import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssueOperation = ResourceOperationNodeProperties.create(
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
)